import * as THREE from 'three';
import { OrbitControls, PCDLoader } from 'three/examples/jsm/Addons.js';

export class PointCloudVisualizer {
  private spatialEnvironment: THREE.Scene;
  private perspectiveViewpoint: THREE.PerspectiveCamera;
  private webGLRenderingEngine: THREE.WebGLRenderer;
  private orbitNavigationControls: OrbitControls;
  private pointCloudDataLoader: PCDLoader;
  private geometricPointCollections: THREE.Points[] = [];
  private htmlRenderingContainer: HTMLElement;

  constructor(displayContainer: HTMLElement) {
    this.htmlRenderingContainer = displayContainer;
    this.spatialEnvironment = new THREE.Scene();
    this.spatialEnvironment.background = new THREE.Color(0x111111);

    const containerWidth = displayContainer.clientWidth;
    const containerHeight = displayContainer.clientHeight;

    this.perspectiveViewpoint = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    this.perspectiveViewpoint.position.set(2, 2, 2);

    this.webGLRenderingEngine = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    this.webGLRenderingEngine.setSize(containerWidth, containerHeight);
    this.webGLRenderingEngine.shadowMap.enabled = true;
    this.webGLRenderingEngine.shadowMap.type = THREE.PCFSoftShadowMap;
    displayContainer.appendChild(this.webGLRenderingEngine.domElement);

    this.orbitNavigationControls = new OrbitControls(this.perspectiveViewpoint, this.webGLRenderingEngine.domElement);
    this.orbitNavigationControls.enableDamping = true;
    this.orbitNavigationControls.dampingFactor = 0.05;
    this.orbitNavigationControls.enableZoom = true;
    this.orbitNavigationControls.enablePan = true;

    this.pointCloudDataLoader = new PCDLoader();
    
    // Add ambient lighting for better visibility
    const ambientIllumination = new THREE.AmbientLight(0x404040, 0.6);
    this.spatialEnvironment.add(ambientIllumination);
    
    // Add directional lighting
    const directionalIllumination = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalIllumination.position.set(10, 10, 5);
    this.spatialEnvironment.add(directionalIllumination);
  }

  async loadPointClouds(geometryUrls: string[]) {
    for (const resourceUrl of geometryUrls) {
      const pointCloudGeometry = await this.pointCloudDataLoader.loadAsync(resourceUrl);
      pointCloudGeometry.visible = false;
      this.geometricPointCollections.push(pointCloudGeometry);
      this.spatialEnvironment.add(pointCloudGeometry);
    }
  }

  showFrame(geometryIndex: number) {
    this.geometricPointCollections.forEach((pointCloud, currentIndex) => {
      pointCloud.visible = currentIndex === geometryIndex;
    });
  }

  animate = () => {
    const renderingAnimationLoop = () => {
      requestAnimationFrame(renderingAnimationLoop);
      this.orbitNavigationControls.update();
      this.webGLRenderingEngine.render(this.spatialEnvironment, this.perspectiveViewpoint);
    }

    renderingAnimationLoop();
  }

  dispose() {
    this.webGLRenderingEngine.dispose();
    this.orbitNavigationControls.dispose();
    this.geometricPointCollections.forEach(pointCloud => this.spatialEnvironment.remove(pointCloud));
    
    while (this.htmlRenderingContainer.firstChild) {
      this.htmlRenderingContainer.removeChild(this.htmlRenderingContainer.firstChild);
    }
  }
} 
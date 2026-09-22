import * as THREE from 'three';
import { OrbitControls, PCDLoader, PLYLoader } from 'three/examples/jsm/Addons.js';

export interface PointCloudStats {
  modelCount: number;
  pointCounts: number[];
  totalPoints: number;
}

export class PointCloudVisualizer {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private pcdLoader = new PCDLoader();
  private plyLoader = new PLYLoader();
  private clouds: THREE.Points[] = [];
  private container: HTMLElement;
  private animationId = 0;
  private disposed = false;
  private loadSeq = 0;
  private defaultCamPos = new THREE.Vector3(2, 2, 2);

  constructor(displayContainer: HTMLElement) {
    this.container = displayContainer;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x111111);

    const w = displayContainer.clientWidth || 800;
    const h = displayContainer.clientHeight || 600;

    this.camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 2000);
    this.camera.position.copy(this.defaultCamPos);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h);
    displayContainer.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    this.scene.add(new THREE.AmbientLight(0x404040, 0.8));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(10, 10, 5);
    this.scene.add(dir);
  }

  private disposePoints(list: THREE.Points[]) {
    for (const pts of list) {
      pts.geometry.dispose();
      const mat = pts.material as THREE.Material | THREE.Material[];
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
      else mat.dispose();
    }
  }

  private clearClouds() {
    const old = this.clouds;
    this.clouds = [];
    for (const pts of old) this.scene.remove(pts);
    this.disposePoints(old);
  }

  private applyPointSize(size: number) {
    for (const pts of this.clouds) {
      const mat = pts.material as THREE.PointsMaterial;
      if ('size' in mat) {
        mat.size = size;
        mat.needsUpdate = true;
      }
    }
  }

  private currentPointSize = 0.02;

  async loadPaths(urls: string[], pointSize = this.currentPointSize): Promise<PointCloudStats> {
    const seq = ++this.loadSeq;
    const loaded: THREE.Points[] = [];
    try {
      for (const url of urls) {
        const pts = await this.loadOne(url);
        pts.visible = false;
        this.applySizeTo(pts, pointSize);
        loaded.push(pts);
        if (seq !== this.loadSeq) {
          this.disposePoints(loaded);
          throw new DOMException('Superseded by newer load', 'AbortError');
        }
      }
    } catch (e) {
      if (seq === this.loadSeq) this.disposePoints(loaded);
      else this.disposePoints(loaded);
      throw e;
    }
    if (seq !== this.loadSeq) {
      this.disposePoints(loaded);
      throw new DOMException('Superseded by newer load', 'AbortError');
    }
    // Swap only on full success — failed loads keep the current view.
    this.clearClouds();
    this.currentPointSize = pointSize;
    for (const pts of loaded) {
      this.clouds.push(pts);
      this.scene.add(pts);
    }
    return this.getStats();
  }

  async loadFiles(files: File[], pointSize = this.currentPointSize): Promise<{ names: string[]; stats: PointCloudStats }> {
    const seq = ++this.loadSeq;
    const loaded: THREE.Points[] = [];
    const names: string[] = [];
    try {
      for (const f of files) {
        const pts = await this.parseFile(f);
        pts.visible = false;
        this.applySizeTo(pts, pointSize);
        loaded.push(pts);
        names.push(f.name);
        if (seq !== this.loadSeq) {
          this.disposePoints(loaded);
          throw new DOMException('Superseded by newer load', 'AbortError');
        }
      }
    } catch (e) {
      this.disposePoints(loaded);
      throw e;
    }
    if (seq !== this.loadSeq) {
      this.disposePoints(loaded);
      throw new DOMException('Superseded by newer load', 'AbortError');
    }
    this.clearClouds();
    this.currentPointSize = pointSize;
    for (const pts of loaded) {
      this.clouds.push(pts);
      this.scene.add(pts);
    }
    return { names, stats: this.getStats() };
  }

  private applySizeTo(pts: THREE.Points, size: number) {
    const mat = pts.material as THREE.PointsMaterial;
    if ('size' in mat) mat.size = size;
  }

  private async loadOne(url: string): Promise<THREE.Points> {
    // Blob URLs carry no extension, so uploads append a "#.ply" / "#.pcd" hint
    // fragment (ignored by fetch). Detect from the full string, fetch the base.
    const lower = url.toLowerCase();
    const isPly = lower.includes('.ply');
    const fetchUrl = url.split('#')[0];
    if (isPly) {
      const geom = await this.plyLoader.loadAsync(fetchUrl);
      const mat = new THREE.PointsMaterial({ size: this.currentPointSize, vertexColors: geom.hasAttribute('color') });
      const pts = new THREE.Points(geom, mat);
      pts.name = url;
      return pts;
    }
    const pts = await this.pcdLoader.loadAsync(fetchUrl);
    this.applySizeTo(pts, this.currentPointSize);
    pts.name = url;
    return pts;
  }

  private async parseFile(file: File): Promise<THREE.Points> {
    const buf = await file.arrayBuffer();
    const lower = file.name.toLowerCase();
    if (lower.endsWith('.ply')) {
      const geom = this.plyLoader.parse(buf);
      const mat = new THREE.PointsMaterial({ size: this.currentPointSize, vertexColors: geom.hasAttribute('color') });
      const pts = new THREE.Points(geom, mat);
      pts.name = file.name;
      return pts;
    }
    if (lower.endsWith('.pcd')) {
      const pts = this.pcdLoader.parse(buf) as THREE.Points;
      this.applySizeTo(pts, this.currentPointSize);
      pts.name = file.name;
      return pts;
    }
    throw new Error(`Unsupported format: ${file.name} (use .pcd or .ply)`);
  }

  showFrame(index: number) {
    const n = this.clouds.length;
    if (n === 0) return;
    const clamped = ((Math.trunc(index) % n) + n) % n;
    this.clouds.forEach((pts, i) => {
      pts.visible = i === clamped;
    });
  }

  setPointSize(size: number) {
    this.currentPointSize = size;
    this.applyPointSize(size);
  }

  resetView() {
    this.camera.position.copy(this.defaultCamPos);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  resize(width: number, height: number) {
    if (width === 0 || height === 0) return;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  getStats(): PointCloudStats {
    const pointCounts = this.clouds.map((pts) => {
      const pos = (pts.geometry as THREE.BufferGeometry).getAttribute('position') as THREE.BufferAttribute;
      return pos ? pos.count : 0;
    });
    return {
      modelCount: this.clouds.length,
      pointCounts,
      totalPoints: pointCounts.reduce((a, b) => a + b, 0),
    };
  }

  animate = () => {
    if (this.disposed) return;
    this.animationId = requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  dispose() {
    this.disposed = true;
    this.loadSeq++;
    cancelAnimationFrame(this.animationId);
    this.clearClouds();
    this.controls.dispose();
    this.renderer.dispose();
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}

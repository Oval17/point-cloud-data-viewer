import * as THREE from 'three';
import { PCDLoader } from 'three/examples/jsm/Addons.js';

export class ThreeDimensionalRenderer {
  private spatialRenderingEnvironment: THREE.Scene;
  private pointCloudAssetLoader: PCDLoader;
  private visualGeometryCollections: THREE.Points[] = [];

  constructor(renderingScene: THREE.Scene) {
    this.spatialRenderingEnvironment = renderingScene;
    this.pointCloudAssetLoader = new PCDLoader();
  }

  async loadPointClouds(geometryResourceUrls: string[]) {
    for (const assetUrl of geometryResourceUrls) {
      const loadedPointCloudGeometry = await this.pointCloudAssetLoader.loadAsync(assetUrl);
      loadedPointCloudGeometry.visible = false;
      this.visualGeometryCollections.push(loadedPointCloudGeometry);
      this.spatialRenderingEnvironment.add(loadedPointCloudGeometry);
    }
  }

  showFrame(selectedGeometryIndex: number) {
    this.visualGeometryCollections.forEach((geometryInstance, iterationIndex) => {
      geometryInstance.visible = iterationIndex === selectedGeometryIndex;
    });
  }
} 
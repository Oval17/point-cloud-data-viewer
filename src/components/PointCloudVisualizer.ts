import * as THREE from 'three';
import { OrbitControls, PCDLoader, PLYLoader } from 'three/examples/jsm/Addons.js';

export interface PointCloudStats {
  modelCount: number;
  pointCounts: number[];
  totalPoints: number;
}

export interface MeasurePoint {
  x: number;
  y: number;
  z: number;
}

export interface Measurement extends MeasurePoint {
  id: number;
  bx: number;
  by: number;
  bz: number;
  /** Distance in model-space units. */
  distance: number;
}

export type ClipAxis = 'x' | 'y' | 'z';

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
  // Measurement overlays (marker spheres + connecting lines). Shared
  // geometry/material are disposed once with the engine.
  private measureGroup = new THREE.Group();
  private measureItems = new Map<number, THREE.Group>();
  private measureSeq = 0;
  private markerGeo = new THREE.SphereGeometry(0.02, 12, 12);
  private markerMat = new THREE.MeshBasicMaterial({ color: 0xfacc15, depthTest: false });
  private pendingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, depthTest: false });
  private lineMat = new THREE.LineBasicMaterial({ color: 0xfacc15, depthTest: false });
  // Single user clipping plane (null = disabled). Reapplied to materials on
  // every load swap since materials are recreated per load.
  private clipPlane: THREE.Plane | null = null;

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
    this.renderer.localClippingEnabled = true;
    displayContainer.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    this.scene.add(new THREE.AmbientLight(0x404040, 0.8));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(10, 10, 5);
    this.scene.add(dir);
    // Rendered on top so markers stay visible inside dense clouds.
    this.measureGroup.renderOrder = 999;
    this.scene.add(this.measureGroup);
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
        const pts = await this.loadOne(url, pointSize);
        pts.visible = false;
        loaded.push(pts);
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
    // Swap only on full success — failed loads keep the current view.
    this.clearClouds();
    this.clearMeasurements();
    this.currentPointSize = pointSize;
    for (const pts of loaded) {
      this.clouds.push(pts);
      this.scene.add(pts);
    }
    // Materials are recreated per load — reattach the active clip plane.
    this.applyClipToClouds();
    return this.getStats();
  }

  private applySizeTo(pts: THREE.Points, size: number) {
    const mat = pts.material as THREE.PointsMaterial;
    if ('size' in mat) {
      mat.size = size;
      mat.needsUpdate = true;
    }
  }

  private ensureVertexColors(pts: THREE.Points) {
    const geom = pts.geometry as THREE.BufferGeometry;
    const mat = pts.material as THREE.PointsMaterial;
    if (geom.hasAttribute('color') && 'vertexColors' in mat && !mat.vertexColors) {
      mat.vertexColors = true;
      mat.needsUpdate = true;
    }
  }

  private async loadOne(url: string, pointSize: number): Promise<THREE.Points> {
    // Blob URLs carry no extension, so uploads append a "#.ply" / "#.pcd" hint
    // fragment (ignored by fetch). Detect from the full string, fetch the base.
    const lower = url.toLowerCase();
    const isPly = lower.includes('.ply');
    const fetchUrl = url.split('#')[0];
    if (isPly) {
      const geom = await this.plyLoader.loadAsync(fetchUrl);
      const mat = new THREE.PointsMaterial({ size: pointSize, vertexColors: geom.hasAttribute('color') });
      const pts = new THREE.Points(geom, mat);
      pts.name = url;
      return pts;
    }
    const pts = await this.pcdLoader.loadAsync(fetchUrl);
    this.applySizeTo(pts, pointSize);
    this.ensureVertexColors(pts);
    pts.name = url;
    return pts;
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

  private applyClipToClouds() {
    for (const pts of this.clouds) {
      const mat = pts.material as THREE.PointsMaterial;
      mat.clippingPlanes = this.clipPlane ? [this.clipPlane] : null;
      // Plane count feeds the shader program key — force recompile on 0↔1 toggles.
      mat.needsUpdate = true;
    }
  }

  /** Bounding box over all loaded clouds (stable across frame switches). */
  getClipRange(axis: ClipAxis): { min: number; max: number } | null {
    if (this.clouds.length === 0) return null;
    const box = new THREE.Box3();
    for (const pts of this.clouds) box.union(new THREE.Box3().setFromObject(pts));
    if (box.isEmpty()) return null;
    return { min: box.min[axis], max: box.max[axis] };
  }

  /**
   * Position a single clipping plane at fraction t (0..1) of the loaded
   * bounding box along axis. Default keeps the lower side; flip keeps upper.
   * Pass axis=null (or t outside range after clamp fails) to disable.
   */
  setClip(axis: ClipAxis | null, t: number, flip: boolean) {
    if (axis === null) {
      this.clipPlane = null;
      this.applyClipToClouds();
      return;
    }
    const range = this.getClipRange(axis);
    if (!range || !(range.max > range.min)) {
      this.clipPlane = null;
      this.applyClipToClouds();
      return;
    }
    const clamped = Math.min(1, Math.max(0, t));
    const cut = range.min + clamped * (range.max - range.min);
    // three.js keeps fragments with signed distance >= 0:
    // distance = normal.dot(p) + constant.
    const normal = new THREE.Vector3();
    normal[axis] = flip ? 1 : -1;
    const constant = -cut * (flip ? 1 : -1);
    this.clipPlane = new THREE.Plane(normal, constant);
    this.applyClipToClouds();
  }
  getCanvas(): HTMLCanvasElement {
    return this.renderer.domElement;
  }

  /**
   * Raycast a client-space click against the visible clouds.
   * Returns the nearest hit in world space, or null on a miss.
   */
  measureAt(clientX: number, clientY: number): MeasurePoint | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1
    );
    const ray = new THREE.Raycaster();
    // Points threshold is in world units: a few point-diameters so sparse
    // regions stay clickable without matching the whole scene.
    ray.params.Points = { threshold: Math.max(this.currentPointSize * 4, 0.005) };
    ray.setFromCamera(ndc, this.camera);
    const hits = ray.intersectObjects(
      this.clouds.filter((c) => c.visible),
      false
    );
    if (hits.length === 0) return null;
    const p = hits[0].point;
    return { x: p.x, y: p.y, z: p.z };
  }

  private marker(p: MeasurePoint, pending: boolean): THREE.Mesh {
    const mesh = new THREE.Mesh(this.markerGeo, pending ? this.pendingMat : this.markerMat);
    mesh.position.set(p.x, p.y, p.z);
    return mesh;
  }

  /** Show a temporary first-click marker. Returns a marker id for removal. */
  addPendingMarker(p: MeasurePoint): number {
    const id = ++this.measureSeq;
    const group = new THREE.Group();
    group.add(this.marker(p, true));
    this.measureGroup.add(group);
    this.measureItems.set(id, group);
    return id;
  }

  /** Commit a two-point measurement (markers + connecting line). */
  addMeasurement(a: MeasurePoint, b: MeasurePoint): Measurement {
    const id = ++this.measureSeq;
    const va = new THREE.Vector3(a.x, a.y, a.z);
    const vb = new THREE.Vector3(b.x, b.y, b.z);
    const group = new THREE.Group();
    group.add(this.marker(a, false));
    group.add(this.marker(b, false));
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([va, vb]),
      this.lineMat
    );
    group.add(line);
    this.measureGroup.add(group);
    this.measureItems.set(id, group);
    return { id, x: a.x, y: a.y, z: a.z, bx: b.x, by: b.y, bz: b.z, distance: va.distanceTo(vb) };
  }

  removeMeasurement(id: number): boolean {
    const group = this.measureItems.get(id);
    if (!group) return false;
    this.measureGroup.remove(group);
    // Geometries/materials are shared (disposed with the engine), except
    // per-measurement line geometry.
    group.children.forEach((child) => {
      if (child instanceof THREE.Line) child.geometry.dispose();
    });
    this.measureItems.delete(id);
    return true;
  }

  clearMeasurements() {
    const ids = [...this.measureItems.keys()];
    ids.forEach((id) => this.removeMeasurement(id));
  }

  getStats(): PointCloudStats {    const pointCounts = this.clouds.map((pts) => {
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
    this.clearMeasurements();
    this.controls.dispose();
    this.renderer.dispose();
    this.markerGeo.dispose();
    this.markerMat.dispose();
    this.pendingMat.dispose();
    this.lineMat.dispose();
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}

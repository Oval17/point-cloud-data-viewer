import { useRef, useState } from 'react';
import { PointCloudViewer } from './components/PointCloudViewer';
import { NavigationPanel } from './components/NavigationPanel';
import type { PointCloudVisualizer, PointCloudStats } from './components/PointCloudVisualizer';

const SAMPLE_MODELS = ['/assets/sphere.pcd', '/assets/cuboid.pcd'];

const App = () => {
  const [modelLabels, setModelLabels] = useState<string[]>(['sphere.pcd', 'cuboid.pcd']);
  const [modelUrls, setModelUrls] = useState<string[]>(SAMPLE_MODELS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointSize, setPointSize] = useState(0.02);
  const [stats, setStats] = useState<PointCloudStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const engineRef = useRef<PointCloudVisualizer | null>(null);
  const objectUrls = useRef<string[]>([]);

  const handleFiles = async (files: FileList | File[]) => {
    const list = Array.from(files).filter((f) => /\.pcd$|\.ply$/i.test(f.name));
    if (list.length === 0) {
      setError('Please choose .pcd or .ply files');
      return;
    }
    setError(null);
    try {
      // Revoke previous uploads
      objectUrls.current.forEach((u) => URL.revokeObjectURL(u));
      objectUrls.current = [];
      const urls = list.map((f) => {
        const u = URL.createObjectURL(f);
        objectUrls.current.push(u);
        return u;
      });
      // Load via engine directly so we don't depend on path-based reload timing
      const engine = engineRef.current;
      if (engine) {
        const { stats: s } = await engine.loadFiles(list, pointSize);
        engine.showFrame(0);
        setStats(s);
      }
      setModelLabels(list.map((f) => f.name));
      setModelUrls(urls);
      setActiveIndex(0);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load files');
    }
  };

  const resetSamples = () => {
    objectUrls.current.forEach((u) => URL.revokeObjectURL(u));
    objectUrls.current = [];
    setModelLabels(['sphere.pcd', 'cuboid.pcd']);
    setModelUrls(SAMPLE_MODELS);
    setActiveIndex(0);
    setError(null);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ecf0f1', padding: 20, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', backgroundColor: '#fff', borderRadius: 12, padding: 25, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', fontSize: 26, marginBottom: 12 }}>
          3D Point Cloud Visualizer
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 12 }}>
          <label style={{ fontSize: 14 }}>
            Upload .pcd / .ply{' '}
            <input
              type="file"
              accept=".pcd,.ply"
              multiple
              onChange={(e) => e.target.files && handleFiles(e.target.files)}
            />
          </label>
          <label style={{ fontSize: 14 }}>
            Point size {pointSize.toFixed(3)}{' '}
            <input
              type="range"
              min={0.005}
              max={0.1}
              step={0.005}
              value={pointSize}
              onChange={(e) => setPointSize(Number(e.target.value))}
            />
          </label>
          <button type="button" onClick={() => engineRef.current?.resetView()}>
            Reset view
          </button>
          <button type="button" onClick={resetSamples}>
            Load samples
          </button>
          <span style={{ fontSize: 13, color: '#555' }} data-testid="pcd-stats">
            {stats
              ? `${stats.modelCount} model(s) · ${stats.totalPoints.toLocaleString()} pts · viewing ${modelLabels[activeIndex] ?? ''}`
              : `viewing ${modelLabels[activeIndex] ?? ''}`}
          </span>
        </div>

        {error && (
          <p role="alert" style={{ color: '#b91c1c', fontSize: 14 }}>
            {error}
          </p>
        )}

        <PointCloudViewer
          geometryPaths={modelUrls}
          selectedModelIndex={activeIndex}
          pointSize={pointSize}
          engineRef={engineRef}
          onStats={setStats}
          onError={setError}
        />
        <NavigationPanel
          modelPaths={modelLabels}
          setActiveGeometry={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default App;

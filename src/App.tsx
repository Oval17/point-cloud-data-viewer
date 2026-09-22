import { useEffect, useRef, useState } from 'react';
import { PointCloudViewer } from './components/PointCloudViewer';
import { NavigationPanel } from './components/NavigationPanel';
import type { PointCloudVisualizer, PointCloudStats } from './components/PointCloudVisualizer';

const SAMPLE_LABELS = ['sphere.pcd', 'cuboid.pcd'];
const SAMPLE_MODELS = ['/assets/sphere.pcd', '/assets/cuboid.pcd'];

const isBlobUrl = (u: string) => u.startsWith('blob:');
const withExtHint = (base: string, name: string) =>
  /\.ply$/i.test(name) ? `${base}#.ply` : `${base}#.pcd`;
const revokeBlobs = (urls: string[]) => {
  urls.filter(isBlobUrl).forEach((u) => URL.revokeObjectURL(u.split('#')[0]));
};

const App = () => {
  const [modelLabels, setModelLabels] = useState<string[]>(SAMPLE_LABELS);
  const [modelUrls, setModelUrls] = useState<string[]>(SAMPLE_MODELS);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointSize, setPointSize] = useState(0.02);
  const [stats, setStats] = useState<PointCloudStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const engineRef = useRef<PointCloudVisualizer | null>(null);
  // Last successfully loaded set + old blob URLs waiting to be revoked on success.
  const lastGood = useRef({ labels: SAMPLE_LABELS, urls: SAMPLE_MODELS });
  const pendingOldBlobs = useRef<string[]>([]);
  // Mirror of current labels/urls so stats/error callbacks never read stale closures.
  const labelsRef = useRef(SAMPLE_LABELS);
  const urlsRef = useRef(SAMPLE_MODELS);
  labelsRef.current = modelLabels;
  urlsRef.current = modelUrls;

  useEffect(
    () => () => {
      revokeBlobs(pendingOldBlobs.current);
      revokeBlobs(lastGood.current.urls);
    },
    []
  );

  const handleFiles = (files: FileList | File[]) => {
    const list = Array.from(files).filter((f) => /\.pcd$|\.ply$/i.test(f.name));
    if (list.length === 0) {
      setError('Please choose .pcd or .ply files');
      return;
    }
    setError(null);
    setStats(null);
    // Single source of truth: hinted blob URLs loaded via the Viewer's loadPaths.
    // Previous blobs are revoked only after the new set loads successfully.
    pendingOldBlobs.current = urlsRef.current.filter(isBlobUrl);
    const urls = list.map((f) => withExtHint(URL.createObjectURL(f), f.name));
    setModelLabels(list.map((f) => f.name));
    setModelUrls(urls);
    setActiveIndex(0);
  };

  const handleStats = (s: PointCloudStats, sourceUrls: string[]) => {
    setStats(s);
    // Use the URLs that actually loaded (not closed-over state) so rapid
    // uploads can't record the wrong set as last-good. Labels mirror the
    // current state at success time, which corresponds to sourceUrls.
    lastGood.current = { labels: labelsRef.current, urls: sourceUrls };
    revokeBlobs(pendingOldBlobs.current);
    pendingOldBlobs.current = [];
  };

  const handleError = (message: string, failedUrls: string[]) => {
    // Ignore superseded-load aborts from rapid switching.
    if (/abort/i.test(message)) return;
    setStats(null);
    setError(message);
    // Revoke the failed blob URLs and revert to the last good set.
    revokeBlobs(failedUrls.filter(isBlobUrl));
    pendingOldBlobs.current = [];
    setModelLabels(lastGood.current.labels);
    setModelUrls(lastGood.current.urls);
    setActiveIndex(0);
  };

  const resetSamples = () => {
    pendingOldBlobs.current = urlsRef.current.filter(isBlobUrl);
    setModelLabels(SAMPLE_LABELS);
    setModelUrls(SAMPLE_MODELS);
    setActiveIndex(0);
    setError(null);
    setStats(null);
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
              onChange={(e) => {
                if (e.target.files) handleFiles(e.target.files);
                e.target.value = '';
              }}
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
          onStats={handleStats}
          onError={handleError}
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

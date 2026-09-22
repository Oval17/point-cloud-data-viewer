import { useEffect, useRef, useState } from 'react';
import { PointCloudViewer } from './components/PointCloudViewer';
import { NavigationPanel } from './components/NavigationPanel';
import type { MeasurePoint, Measurement, PointCloudVisualizer, PointCloudStats } from './components/PointCloudVisualizer';

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
  const [measureMode, setMeasureMode] = useState(false);
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [measureHint, setMeasureHint] = useState<string | null>(null);
  const engineRef = useRef<PointCloudVisualizer | null>(null);
  // Pending first click of a measurement + its temporary marker id.
  const pendingRef = useRef<{ point: MeasurePoint; markerId: number } | null>(null);
  // Last successfully loaded set + old blob URLs waiting to be revoked on success.
  const lastGood = useRef({ labels: SAMPLE_LABELS, urls: SAMPLE_MODELS });
  const pendingOldBlobs = useRef<string[]>([]);
  // Mirror of current labels/urls so stats/error callbacks never read stale closures.
  // (Assigned via useEffect, not during render, to stay StrictMode/concurrent-safe.)
  const labelsRef = useRef(SAMPLE_LABELS);
  const urlsRef = useRef(SAMPLE_MODELS);
  useEffect(() => {
    labelsRef.current = modelLabels;
  }, [modelLabels]);
  useEffect(() => {
    urlsRef.current = modelUrls;
  }, [modelUrls]);

  useEffect(
    () => () => {
      revokeBlobs(pendingOldBlobs.current);
      revokeBlobs(lastGood.current.urls);
      revokeBlobs(urlsRef.current);
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
    // If a previous upload is still in-flight (pendingOld is an orphan, not
    // last-good), its load will never succeed — revoke it now so a rapid
    // A->B->C chain can't orphan A when B overwrites pendingOld.
    const prevPending = pendingOldBlobs.current;
    if (prevPending.length > 0) {
      const isKeepAlive =
        prevPending.length === lastGood.current.urls.length &&
        prevPending.every((u, i) => u === lastGood.current.urls[i]);
      if (!isKeepAlive) revokeBlobs(prevPending);
    }
    pendingOldBlobs.current = urlsRef.current.filter(isBlobUrl);
    const urls = list.map((f) => withExtHint(URL.createObjectURL(f), f.name));
    setModelLabels(list.map((f) => f.name));
    setModelUrls(urls);
    setActiveIndex(0);
  };

  const cancelPending = () => {
    const pending = pendingRef.current;
    pendingRef.current = null;
    if (pending) engineRef.current?.removeMeasurement(pending.markerId);
  };

  const handleStats = (s: PointCloudStats, sourceUrls: string[]) => {
    setStats(s);
    // New models invalidate measurements (engine already cleared overlays).
    cancelPending();
    setMeasurements([]);
    setMeasureHint(null);
    // Use the URLs that actually loaded (not closed-over state) so rapid
    // uploads can't record the wrong set as last-good. Labels mirror the
    // current state at success time, which corresponds to sourceUrls.
    lastGood.current = { labels: labelsRef.current, urls: sourceUrls };
    revokeBlobs(pendingOldBlobs.current);
    pendingOldBlobs.current = [];
  };

  const handleError = (message: string, failedUrls: string[]) => {
    // Ignore superseded-load aborts from rapid switching.
    // (Viewer sets cancelled=true, so these never reach here, but guard anyway.)
    if (/abort/i.test(message)) {
      pendingOldBlobs.current = [];
      return;
    }
    setStats(null);
    setError(message);
    // Revoke the failed blob URLs. Also revoke a superseded pending set:
    // if pendingOld is NOT the last-good set, it is an orphan from a rapid
    // double-upload (A superseded by B, B failed) and would otherwise leak.
    // If pendingOld IS last-good (normal keep-alive), keep it — the view
    // reverts to it below.
    revokeBlobs(failedUrls.filter(isBlobUrl));
    const pending = pendingOldBlobs.current;
    const isKeepAlive =
      pending.length === lastGood.current.urls.length &&
      pending.every((u, i) => u === lastGood.current.urls[i]);
    if (!isKeepAlive) revokeBlobs(pending);
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

  const toggleMeasure = () => {
    // Leaving measure mode abandons a half-finished measurement.
    if (measureMode) cancelPending();
    setMeasureMode((m) => !m);
    setMeasureHint(null);
  };

  const handleMeasurePoint = (point: MeasurePoint | null) => {
    if (!point) {
      setMeasureHint('No point hit — click directly on the point cloud.');
      return;
    }
    const engine = engineRef.current;
    if (!engine) return;
    const pending = pendingRef.current;
    if (!pending) {
      const markerId = engine.addPendingMarker(point);
      pendingRef.current = { point, markerId };
      setMeasureHint('First point set — click a second point.');
      return;
    }
    engine.removeMeasurement(pending.markerId);
    pendingRef.current = null;
    const m = engine.addMeasurement(pending.point, point);
    if (m.distance < 1e-9) {
      // Same-spot double-click: drop the zero-length measurement.
      engine.removeMeasurement(m.id);
      setMeasureHint('Pick two different points to measure a distance.');
      return;
    }
    setMeasurements((prev) => [...prev, m]);
    setMeasureHint(null);
  };

  const deleteMeasurement = (id: number) => {
    engineRef.current?.removeMeasurement(id);
    setMeasurements((prev) => prev.filter((m) => m.id !== id));
  };

  const clearMeasurements = () => {
    cancelPending();
    engineRef.current?.clearMeasurements();
    setMeasurements([]);
    setMeasureHint(null);
  };

  // Escape abandons a half-finished measurement.
  useEffect(() => {
    if (!measureMode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cancelPending();
        setMeasureHint(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [measureMode]);

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
          <button
            type="button"
            onClick={toggleMeasure}
            aria-pressed={measureMode}
            style={measureMode ? { fontWeight: 'bold' } : undefined}
          >
            {measureMode ? 'Done measuring' : 'Measure'}
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
          measureMode={measureMode}
          onStats={handleStats}
          onError={handleError}
          onMeasurePoint={handleMeasurePoint}
        />
        {(measureMode || measurements.length > 0) && (
          <div style={{ marginTop: 12, fontSize: 14 }} data-testid="measurements">
            {measureMode && (
              <p style={{ margin: '0 0 8px', color: '#555' }}>
                Measure mode: click two points on the cloud. Drag orbits, Esc cancels.
                Distances are in model-space units.
              </p>
            )}
            {measureHint && (
              <p role="status" style={{ margin: '0 0 8px', color: '#92400e' }}>
                {measureHint}
              </p>
            )}
            {measurements.length > 0 && (
              <>
                <ul style={{ margin: '0 0 8px', paddingLeft: 20 }}>
                  {measurements.map((m, i) => (
                    <li key={m.id}>
                      M{i + 1}: {m.distance.toFixed(3)} units{' '}
                      <button type="button" onClick={() => deleteMeasurement(m.id)}>
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
                <button type="button" onClick={clearMeasurements}>
                  Clear measurements
                </button>
              </>
            )}
          </div>
        )}
        <NavigationPanel
          modelPaths={modelLabels}
          setActiveGeometry={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default App;

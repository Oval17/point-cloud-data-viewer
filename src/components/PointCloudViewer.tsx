import { useEffect, useRef } from 'react';
import { PointCloudVisualizer, type PointCloudStats } from './PointCloudVisualizer';

type ViewerProps = {
  geometryPaths: string[];
  selectedModelIndex: number;
  pointSize: number;
  engineRef: React.MutableRefObject<PointCloudVisualizer | null>;
  onStats?: (stats: PointCloudStats, sourceUrls: string[]) => void;
  onError?: (message: string, failedUrls: string[]) => void;
};

export const PointCloudViewer = ({
  geometryPaths,
  selectedModelIndex,
  pointSize,
  engineRef,
  onStats,
  onError,
}: ViewerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const statsCb = useRef(onStats);
  const errorCb = useRef(onError);
  const pointSizeRef = useRef(pointSize);

  useEffect(() => {
    statsCb.current = onStats;
  }, [onStats]);
  useEffect(() => {
    errorCb.current = onError;
  }, [onError]);
  useEffect(() => {
    pointSizeRef.current = pointSize;
  }, [pointSize]);

  // Stable key for the URL list (blob URLs never contain \0, but
  // JSON.stringify is exact and avoids delimiter-collision bugs).
  const pathsKey = JSON.stringify(geometryPaths);

  // Init engine once
  useEffect(() => {
    if (!containerRef.current) return;
    const engine = new PointCloudVisualizer(containerRef.current);
    engineRef.current = engine;
    engine.animate();

    const ro = new ResizeObserver(() => {
      const el = containerRef.current;
      if (!el) return;
      engine.resize(el.clientWidth, el.clientHeight);
    });
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      engine.dispose();
      engineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load paths when list changes. pointSize is read via ref so slider
  // moves don't retrigger full reloads (size applied by the effect below).
  useEffect(() => {
    let cancelled = false;
    const engine = engineRef.current;
    if (!engine) return;
    const paths: string[] = JSON.parse(pathsKey);
    const size = pointSizeRef.current;
    engine
      .loadPaths(paths, size)
      .then((stats) => {
        if (cancelled) return;
        engine.showFrame(selectedModelIndex);
        statsCb.current?.(stats, paths);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        errorCb.current?.(
          err instanceof Error ? err.message : 'Failed to load point clouds',
          paths
        );
      });
    return () => {
      cancelled = true;
    };
    // pathsKey is the stable serialization of geometryPaths.
    // selectedModelIndex is applied after load; live selection changes
    // go through the showFrame effect below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathsKey]);

  // Selection + point size updates
  useEffect(() => {
    engineRef.current?.showFrame(selectedModelIndex);
  }, [selectedModelIndex, engineRef]);

  useEffect(() => {
    engineRef.current?.setPointSize(pointSize);
  }, [pointSize, engineRef]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '60vh',
        minHeight: 320,
        border: '2px solid #34495e',
        borderRadius: 10,
        backgroundColor: '#1a1a1a',
        overflow: 'hidden',
      }}
      data-testid="pcd-viewport"
    />
  );
};

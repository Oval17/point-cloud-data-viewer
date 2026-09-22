import { useEffect, useRef } from 'react';
import { PointCloudVisualizer, type PointCloudStats } from './PointCloudVisualizer';

type ViewerProps = {
  geometryPaths: string[];
  selectedModelIndex: number;
  pointSize: number;
  engineRef: React.MutableRefObject<PointCloudVisualizer | null>;
  onStats?: (stats: PointCloudStats) => void;
  onError?: (message: string) => void;
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
  statsCb.current = onStats;
  errorCb.current = onError;

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

  // Load paths when list changes
  useEffect(() => {
    let cancelled = false;
    const engine = engineRef.current;
    if (!engine) return;
    engine
      .loadPaths(geometryPaths, pointSize)
      .then((stats) => {
        if (cancelled) return;
        engine.showFrame(selectedModelIndex);
        statsCb.current?.(stats);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        errorCb.current?.(err instanceof Error ? err.message : 'Failed to load point clouds');
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geometryPaths.join('|')]);

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

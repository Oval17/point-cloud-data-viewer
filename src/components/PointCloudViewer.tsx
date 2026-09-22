import { useEffect, useRef } from 'react';
import { PointCloudVisualizer, type MeasurePoint, type PointCloudStats } from './PointCloudVisualizer';

type ViewerProps = {
  geometryPaths: string[];
  selectedModelIndex: number;
  pointSize: number;
  engineRef: React.MutableRefObject<PointCloudVisualizer | null>;
  measureMode: boolean;
  onStats?: (stats: PointCloudStats, sourceUrls: string[]) => void;
  onError?: (message: string, failedUrls: string[]) => void;
  onMeasurePoint?: (point: MeasurePoint | null) => void;
};

export const PointCloudViewer = ({
  geometryPaths,
  selectedModelIndex,
  pointSize,
  engineRef,
  measureMode,
  onStats,
  onError,
  onMeasurePoint,
}: ViewerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const statsCb = useRef(onStats);
  const errorCb = useRef(onError);
  const pointSizeRef = useRef(pointSize);
  const measureModeRef = useRef(measureMode);
  const measureCb = useRef(onMeasurePoint);

  useEffect(() => {
    statsCb.current = onStats;
  }, [onStats]);
  useEffect(() => {
    errorCb.current = onError;
  }, [onError]);
  useEffect(() => {
    pointSizeRef.current = pointSize;
  }, [pointSize]);
  useEffect(() => {
    measureModeRef.current = measureMode;
  }, [measureMode]);
  useEffect(() => {
    measureCb.current = onMeasurePoint;
  }, [onMeasurePoint]);

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

    // Measure clicks: only clean clicks (no orbit drag) while measure mode
    // is on. Listeners live on the canvas for the engine lifetime; mode and
    // callback go through refs so no re-subscription is needed.
    const canvas = engine.getCanvas();
    let downX = 0;
    let downY = 0;
    const onPointerDown = (e: PointerEvent) => {
      downX = e.clientX;
      downY = e.clientY;
    };
    const onPointerUp = (e: PointerEvent) => {
      if (!measureModeRef.current) return;
      if (Math.hypot(e.clientX - downX, e.clientY - downY) > 6) return;
      const current = engineRef.current;
      if (!current) return;
      measureCb.current?.(current.measureAt(e.clientX, e.clientY));
    };
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);

    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
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

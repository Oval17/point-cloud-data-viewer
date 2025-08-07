import { useEffect, useRef } from 'react';
import { PointCloudVisualizer } from './PointCloudVisualizer';

type SpatialRenderingProps = {
  geometryPaths: string[];
  selectedModelIndex: number;
};

export const PointCloudViewer = ({ geometryPaths, selectedModelIndex }: SpatialRenderingProps) => {
  const viewportContainer = useRef<HTMLDivElement | null>(null);
  const visualizationEngine = useRef<PointCloudVisualizer | null>(null);

  useEffect(() => {
    if (!viewportContainer.current) {
      return;
    }

    visualizationEngine.current = new PointCloudVisualizer(viewportContainer.current);
    visualizationEngine.current.loadPointClouds(geometryPaths).then(() => {
      visualizationEngine.current!.showFrame(selectedModelIndex);
    });

    visualizationEngine.current.animate();

    return () => {
      visualizationEngine.current?.dispose();
    };
  });

  useEffect(() => {
      visualizationEngine.current?.showFrame(selectedModelIndex);
  }, [selectedModelIndex]);

  const viewerContainerStyles = {
    width: '100%', 
    height: '90vh',
    border: '2px solid #34495e',
    borderRadius: '10px',
    backgroundColor: '#1a1a1a',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden'
  };

  return <div ref={viewportContainer} style={viewerContainerStyles} />;
}; 
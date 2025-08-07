import { useState } from 'react';
import { PointCloudViewer } from './components/PointCloudViewer';
import { NavigationPanel } from './components/NavigationPanel';

const App = () => {
  const geometricModelAssets = [
    '/assets/sphere.pcd',
    '/assets/cuboid.pcd',
  ];

  const [activeGeometryIndex, setActiveGeometryIndex] = useState(0);

  const applicationContainerStyles = {
    minHeight: '100vh',
    backgroundColor: '#ecf0f1',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const titleStyles = {
    textAlign: 'center' as const,
    color: '#2c3e50',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  };

  const mainContentStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '25px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
  };

  return (
    <div style={applicationContainerStyles}>
      <div style={mainContentStyles}>
        <h1 style={titleStyles}>3D Geometric Point Cloud Visualizer</h1>
        <PointCloudViewer 
          geometryPaths={geometricModelAssets} 
          selectedModelIndex={activeGeometryIndex} 
        />
        <NavigationPanel 
          modelPaths={geometricModelAssets} 
          setActiveGeometry={setActiveGeometryIndex}
        />
      </div>
    </div>
  );
};

export default App;
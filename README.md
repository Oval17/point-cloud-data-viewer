# Point Cloud Viewer

A modern 3D point cloud visualization tool built with React, TypeScript, and Three.js.

## Features

- **Load .pcd / .ply files** — drag files in via the upload picker, or use the
  bundled samples (`sphere.pcd`, `cuboid.pcd`)
- **Interactive 3D viewer** — orbit, zoom and pan with damped controls
- **Point size control** — live slider from 0.005 to 0.1 world units
- **Distance measuring** — click two points on the cloud (Measure mode);
  Esc or "Done measuring" finishes, results can be deleted individually
- **Axis clipping plane** — slice the model along X/Y/Z at any fraction,
  optionally keeping the upper side
- **Navigation panel** — step through loaded models (Previous / Next)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Sample Data

Includes two geometric point cloud models:
- `sphere.pcd` - Spherical point cloud
- `cuboid.pcd` - Rectangular cuboid point cloud

## Tech Stack

- React 19
- TypeScript
- Three.js
- Vite

## Deployment

Configured for Netlify CI/CD via `netlify.toml` (build command `npm run build`,
publish directory `dist`): import the repo in Netlify once and every merge to
the production branch triggers a rebuild and deploy. The same `dist` output can
be hosted on any static host.

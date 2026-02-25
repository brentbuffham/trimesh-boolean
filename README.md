# trimesh-boolean

Triangle mesh boolean operations for JavaScript — **supports open surfaces**.

Unlike every other mesh boolean package in the npm ecosystem, `trimesh-boolean` works on open (non-watertight) meshes like terrain surfaces, DTMs, and partial shells. It also works on closed solids.

## Why trimesh-boolean?

| Package | Open surfaces? | Approach |
|---------|----------------|----------|
| three-bvh-csg | No | BVH-accelerated BSP |
| three-csg-ts | No | BSP tree (TS) |
| manifold-3d | No | WASM C++ |
| **trimesh-boolean** | **Yes** | Moller intersection + flood-fill + repair |

Every existing package requires **closed, manifold** input. If you're working with terrain surfaces, geological models, or any open mesh — they won't work. `trimesh-boolean` will.

## Install

```bash
npm install trimesh-boolean
```

Or use the CDN for browser scripts:

```html
<script src="https://unpkg.com/trimesh-boolean/build/trimesh-boolean.min.js"></script>
<!-- Exposes window.TrimeshBoolean -->
```

**Links:** [npm](https://www.npmjs.com/package/trimesh-boolean) · [GitHub](https://github.com/brentbuffham/trimesh-boolean) · [Live Demo](https://brentbuffham.github.io/trimesh-boolean/)

## Quick Start

```javascript
import { boolean, repair, intersectMeshPair } from 'trimesh-boolean';

// Triangle soup: simple {v0, v1, v2} objects
var meshA = [
  { v0: {x:0,y:0,z:0}, v1: {x:2,y:0,z:0}, v2: {x:1,y:2,z:0} },
  // ... more triangles
];
var meshB = [/* ... */];

// Boolean operation
var result = boolean(meshA, meshB, 'subtract');
// result = { soup: Triangle[], points: Vertex[], triangles: WeldedTri[] }

// Just intersection segments (no boolean)
var segments = intersectMeshPair(meshA, meshB);
// segments = [{ p0: {x,y,z}, p1: {x,y,z} }, ...]

// Mesh repair
var repaired = await repair(meshA, {
  closeMode: 'stitch',
  snapTolerance: 0.01
});
```

## Three.js Adapter

```javascript
import { booleanFromMeshes, meshToSoup, soupToMesh } from 'trimesh-boolean/three';

// Boolean on Three.js meshes directly
var resultMesh = booleanFromMeshes(threeGroupA, threeGroupB, 'subtract');
scene.add(resultMesh);

// Or convert manually
var soup = meshToSoup(threeMesh);
var mesh = soupToMesh(soup, { color: 0xff0000 });
```

## API Reference

### `boolean(soupA, soupB, operation)`

Perform a boolean operation on two triangle soups.

- **soupA** / **soupB**: `Triangle[]` — arrays of `{ v0, v1, v2 }` where each vertex is `{ x, y, z }`
- **operation**: `"subtract"` | `"union"` | `"intersect"`
- **Returns**: `{ soup, points, triangles }` or `null`

### `intersectMeshPair(trisA, trisB)`

Find all intersection segments between two meshes.

- **Returns**: `Segment[]` — `[{ p0, p1 }, ...]`

### `intersectMeshPairTagged(trisA, trisB)`

Like `intersectMeshPair` but each segment carries source triangle indices.

- **Returns**: `[{ p0, p1, idxA, idxB }, ...]`

### `repairMesh(soup, config?, onProgress?)`

High-level async mesh repair pipeline.

- **config.closeMode**: `"none"` | `"weld"` | `"stitch"` (default: `"none"`)
- **config.snapTolerance**: Weld tolerance in metres (default: `0`)
- **config.stitchTolerance**: Stitch tolerance (default: `1.0`)
- **config.removeDegenerate**: Remove degenerate/sliver triangles (default: `true`)
- **Returns**: `Promise<{ soup, points, triangles }>`

### Repair Functions

Individual repair steps, usable standalone:

| Function | Description |
|----------|-------------|
| `deduplicateSeamVertices(tris, tol?)` | Merge coincident seam vertices |
| `resolveTJunctions(soup, tol?, maxPasses?)` | Split edges at T-junction vertices |
| `weldVertices(tris, tolerance)` | Merge vertices within tolerance → indexed mesh |
| `weldedToSoup(weldedTris)` | Convert indexed mesh back to soup |
| `removeDegenerateTriangles(tris, minArea?, sliverRatio?)` | Remove zero-area and sliver triangles |
| `extractBoundaryLoops(tris)` | Find open boundary loops |
| `triangulateLoop(loop)` | Triangulate a 3D polygon loop |
| `capBoundaryLoops(tris)` | Cap all boundary loops |
| `stitchByProximity(tris, tolerance?)` | Connect nearby boundary edges |
| `cleanCrossingTriangles(tris)` | Remove over-shared edge duplicates |
| `removeOverlappingTriangles(tris, tol?)` | Remove anti-parallel internal walls |
| `forceCloseIndexedMesh(points, triangles)` | Force-close an indexed mesh |
| `weldBoundaryVertices(tris, tolerance)` | Weld boundary-only vertices |

### Normal Functions

| Function | Description |
|----------|-------------|
| `triNormal(tri)` | Unit face normal of a triangle |
| `ensureZUpNormals(tris)` | Flip downward-facing triangles to Z-up |
| `flipAllNormals(tris)` | Reverse all triangle winding |
| `classifyNormalDirection(tris, isClosed, volume)` | Classify dominant normal direction |
| `computeSignedVolume(tris)` | Signed volume via divergence theorem |
| `computeProjectedArea(tris, plane)` | Projected footprint area |
| `compute3DSurfaceArea(tris)` | True 3D surface area |

### Intersection Functions

| Function | Description |
|----------|-------------|
| `triTriIntersection(triA, triB)` | Moller tri-tri intersection → segment |
| `triTriIntersectionDetailed(triA, triB)` | With signed distances |
| `chainSegments(segments, threshold)` | Chain segments into polylines |
| `simplifyPolyline(points, spacing)` | Distance-based simplification |
| `buildSpatialGrid(tris, cellSize)` | Build XY spatial hash |
| `queryGrid(grid, bb, cellSize)` | Query spatial hash |

### Utility Functions

| Function | Description |
|----------|-------------|
| `dist3(a, b)` | 3D Euclidean distance |
| `distSq3(a, b)` | Squared 3D distance |
| `triangleArea3D(tri)` | Triangle area via cross product |
| `computeBounds(points)` | Axis-aligned bounding box |
| `cross(a, b)` | 3D cross product |
| `lerpVert(a, b, t)` | Linear vertex interpolation |
| `countOpenEdges(tris)` | Count boundary and non-manifold edges |

## Data Model

The library uses plain JavaScript objects — no classes, no Three.js types:

```javascript
// Vertex
{ x: number, y: number, z: number }

// Triangle (soup format)
{ v0: Vertex, v1: Vertex, v2: Vertex }

// Welded triangle (indexed format)
{ vertices: [Vertex, Vertex, Vertex] }

// Segment
{ p0: Vertex, p1: Vertex }
```

## How It Works

### Boolean Operations

1. **Moller intersection** — find all triangle-triangle intersection segments between mesh A and mesh B
2. **Spatial grid acceleration** — XY hash grid for O(n) triangle-pair candidate filtering
3. **Flood-fill classification** — BFS from intersection boundary, classify connected regions as inside/outside via Z-ray casting
4. **Steiner re-triangulation** — split straddling triangles at intersection edges using Constrained Delaunay Triangulation
5. **Group combination** — combine inside/outside groups based on operation type

### Mesh Repair

1. **Vertex deduplication** — spatial-grid merge of coincident vertices
2. **T-junction resolution** — detect and split edges at mid-edge vertices
3. **Welding** — merge vertices within tolerance
4. **Degenerate removal** — filter zero-area and sliver triangles
5. **Stitching** — connect nearby boundary edges
6. **Capping** — triangulate boundary loops
7. **Force-close** — fill remaining gaps iteratively

## Dependencies

- **[delaunator](https://github.com/mapbox/delaunator)** — Fast Delaunay triangulation
- **[@kninnug/constrainautor](https://github.com/kninnug/Constrainautor)** — Constrained Delaunay

Optional peer dependency:
- **[three](https://threejs.org/)** `>=0.150.0` — Only needed for `trimesh-boolean/three` adapter

## License

MIT

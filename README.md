# trimesh-boolean

Triangle mesh boolean operations for JavaScript — **supports open surfaces**.

Unlike every other mesh boolean package in the npm ecosystem, `trimesh-boolean` works on open (non-watertight) meshes like terrain surfaces, DTMs, and partial shells. It also works on closed solids.

## Why trimesh-boolean?

| Package | Open surfaces? | Approach |
|---------|----------------|----------|
| three-bvh-csg | No | BVH-accelerated BSP |
| three-csg-ts | No | BSP tree (TS) |
| manifold-3d | No | WASM C++ |
| **trimesh-boolean** | **Yes** | Moller intersection + fan triangulation + half-space classification |

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
import { boolean, splitMeshPair, mergeSplitGroups,
         splitToComponents, mergeSmallComponents, mergeComponents,
         selectSplits, repairMesh, intersectMeshPair } from 'trimesh-boolean';

// Triangle soup: simple {v0, v1, v2} objects
var meshA = [
  { v0: {x:0,y:0,z:0}, v1: {x:2,y:0,z:0}, v2: {x:1,y:2,z:0} },
  // ... more triangles
];
var meshB = [/* ... */];

// One-shot boolean operation
var result = boolean(meshA, meshB, 'subtract');
// result = { soup: Triangle[], points: Vertex[], triangles: WeldedTri[] }

// Split-and-pick workflow (inspect groups before merging)
var split = splitMeshPair(meshA, meshB);
// split.groups = { aInside, aOutside, bInside, bOutside }
// split.segments = TaggedSegment[]
var merged = mergeSplitGroups(split.groups, 'union');

// Custom surface workflow — user picks individual components
var comps = splitToComponents(split.groups);
// comps = [{ mesh:"A", side:"inside", index:0, soup:[...], triCount:599 }, ...]
comps = mergeSmallComponents(comps, 50);  // collapse tiny fragments
var picked = mergeComponents([
  { soup: comps[0].soup },              // keep A-inside #0
  { soup: comps[2].soup, flip: true }   // keep B-outside #0, flip normals
]);

// Just intersection segments (no boolean)
var segments = intersectMeshPair(meshA, meshB);
// segments = [{ p0: {x,y,z}, p1: {x,y,z} }, ...]

// Mesh repair
var repaired = await repairMesh(meshA, {
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

### `splitMeshPair(soupA, soupB)`

Split two meshes into 4 inside/outside groups without combining them. This is the "split-and-pick" workflow: compute groups, then the caller decides which to keep.

- **soupA** / **soupB**: `Triangle[]`
- **Returns**: `{ groups: { aInside, aOutside, bInside, bOutside }, segments }` or `null`

### `mergeSplitGroups(groups, operation)`

Merge split groups into a single result based on the operation type.

- **groups**: `{ aInside, aOutside, bInside, bOutside }` from `splitMeshPair`
- **operation**: `"subtract"` | `"union"` | `"intersect"`
- **Returns**: `{ soup, points, triangles }` or `null`

### `splitToComponents(groups)`

Decompose each of the 4 split groups into connected components (disconnected mesh regions). Useful for multi-crossing surfaces where a single group contains multiple spatially separated zones.

- **groups**: `{ aInside, aOutside, bInside, bOutside }` from `splitMeshPair`
- **Returns**: `[{ mesh: "A"|"B", side: "inside"|"outside", index: number, soup: Triangle[], triCount: number }, ...]` — sorted largest-first within each group

### `mergeSmallComponents(comps, threshold?)`

Merge small fragment components into their nearest same-group (mesh + side) larger component by centroid proximity. Cleans up tiny classification artifacts.

- **comps**: Component array from `splitToComponents`
- **threshold**: Triangle count below which a component is merged (default: `50`)
- **Returns**: Reduced component array with fragments absorbed

### `mergeComponents(picks)`

Merge an arbitrary selection of component soups into a single welded result. Works with the output of `splitToComponents` — pass in the components the user has selected.

- **picks**: `[{ soup: Triangle[], flip?: boolean }, ...]`
- **Returns**: `{ soup, points, triangles }` or `null`

### `selectSplits(groups, selections)`

Select specific split groups by name, with optional normal flipping.

- **groups**: `{ aInside, aOutside, bInside, bOutside }` from `splitMeshPair`
- **selections**: `{ aInside?: boolean|"flip", aOutside?: boolean|"flip", bInside?: boolean|"flip", bOutside?: boolean|"flip" }`
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
- **config.sliverRatio**: Sliver aspect ratio threshold (default: `0.01`)
- **config.cleanCrossings**: Remove over-shared edge duplicates (default: `true`)
- **config.removeOverlapping**: Remove anti-parallel internal wall triangles (default: `false`)
- **config.overlapTolerance**: Overlap detection tolerance (default: `1e-4`)
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
| `fillOpenEdgeLoops(soup)` | Fill closed loops of open edges with fan triangles |
| `weldBoundaryVertices(tris, tolerance)` | Weld boundary-only vertices |

### Component Functions

| Function | Description |
|----------|-------------|
| `findConnectedComponents(soup)` | Split a soup into connected components via shared edges |
| `splitToComponents(groups)` | Decompose 4 split groups into per-component list |
| `mergeSmallComponents(comps, threshold?)` | Merge small fragments into nearest same-group neighbor |
| `mergeComponents(picks)` | Merge user-selected component soups into welded result |
| `selectSplits(groups, selections)` | Select specific groups with optional flip |

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
| `buildSpatialGrid(tris, cellSize)` | Build XY spatial hash (for Z-ray) |
| `buildSpatialGridOnAxes(tris, cellSize, getA, getB)` | Build spatial hash on arbitrary axes |
| `queryGrid(grid, bb, cellSize)` | Query XY spatial hash |
| `queryGridOnAxes(grid, a, b, cellSize)` | Query arbitrary-axis spatial hash |

### Boolean Internals (Advanced)

| Function | Description |
|----------|-------------|
| `classifyPointMultiAxis(point, otherTris, grids)` | Classify inside/outside via 3-axis majority vote |
| `classifyByFloodFill(tris, crossedMap, otherTris, otherGrids)` | BFS flood-fill classification with multi-axis seeds |
| `fanTriangulate(tri, segments)` | Fan triangulation of crossed triangle (primary method) |
| `retriangulateWithSteinerPoints(tri, segments)` | CDT split of crossed triangle with Steiner points (fallback) |
| `buildCurtainAndCap(tris, floorOffset)` | Extrude boundary to floor + cap |
| `generateClosingTriangles(tris, maxDist)` | Iteratively close boundary gaps |

**Internal (non-exported) functions used by the boolean pipeline:**

| Function | Description |
|----------|-------------|
| `splitStraddlingAndClassify(tris, classifications, crossedMap, otherTris, otherGrids, otherIdxKey)` | Split crossed tris via fan triangulation, classify via border-segment priority + half-space fallback, enforce constraints across segment edges |
| `halfSpaceTest(point)` | Classify a point against the nearest intersection segment using the other mesh's triangle normal |
| `segHalfSpace(point, seg)` | Classify a point against a specific segment's other-mesh triangle plane |

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

## Working with Kirra Surface Data

The library includes real-world mining surface data from the [Kirra](https://github.com/brentbuffham/Kirra) application. Kirra surfaces use the format `{ vertices: [{x,y,z}, ...] }` per triangle. To convert to trimesh-boolean soup:

```javascript
// Convert Kirra triangles to trimesh-boolean soup
function kirraToSoup(surface) {
  var soup = [];
  for (var i = 0; i < surface.triangles.length; i++) {
    var verts = surface.triangles[i].vertices;
    if (verts && verts.length >= 3) {
      soup.push({ v0: verts[0], v1: verts[1], v2: verts[2] });
    }
  }
  return soup;
}
```

Pre-extracted Kirra surfaces (terrain, cylinder, cup, convoluted block) are included in `examples/kirra-surfaces.json` with UTM coordinates centroid-subtracted for demo use. The convoluted block is a 32-triangle open surface that crosses the terrain twice — the hardest test case for multi-crossing classification.

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

### Boolean Algorithm — Step by Step

#### Step 1: Intersection Detection
Find all triangle-triangle intersection segments between mesh A and mesh B using the Moller algorithm.
- Each segment records its source triangle indices (`idxA`, `idxB`)
- Builds a `crossedMap` — which triangles are "crossed" by the other mesh
- **Issue:** Moller can miss near-coplanar or edge-on intersections. Deterministic jitter offsets mitigate this.

#### Step 2: Spatial Grid Construction
Build 3 spatial hash grids per mesh (XY, YZ, XZ) for accelerated ray casting along Z, X, and Y axes.
- Cell size is `2x` the average edge length of each mesh
- Three grids enable multi-axis ray casting (no single-axis blind spots)
- **Issue:** Very small or very large meshes (sub-mm edges, or UTM 600000+) can cause hash collisions. The library centroid-shifts large coordinates internally.

#### Step 3: Flood-Fill Classification
BFS from non-crossed seed triangles to classify connected regions as inside/outside via **multi-axis majority vote**.
- Seed triangles ray-cast along +Z, +X, +Y; 2+ inside votes = inside
- Classification propagates to all connected non-crossed triangles in the same component
- **Issue (open surfaces):** Ray-casting against an open mesh is unreliable — rays can escape through open edges and give wrong inside/outside results. For open surfaces, Step 5 corrects these errors using the half-space test.

#### Step 4: Fan Triangulation
Split every crossed triangle at its intersection segment endpoints using **fan triangulation** (CDT fallback for edge cases).
- Chain intersection segments into ordered polylines
- Identify boundary entry/exit points via barycentric coordinates
- Fan from each original vertex to sequential chain points — every sub-triangle has at least 1 original vertex and 1 edge on the intersection boundary
- Eliminates "pocket triangles" (all-Steiner sub-triangles) that plagued CDT — reduced from 93 to 5 across test meshes
- **CDT fallback** for: multiple disconnected polylines, entry/exit on same edge, chain endpoint at original vertex

#### Step 5: Half-Space Classification
Classify every triangle (non-crossed and crossed sub-triangles) using a multi-stage approach:

**Step D0 — Border-segment priority:** If a crossed sub-triangle shares an edge with an intersection segment, classify its centroid directly against that specific segment's other-mesh triangle plane. This prevents "nearest segment" from picking a wrong crossing in multi-crossing scenarios.

**Steps D1-D4 — Fallback chain:** half-space test against nearest segment, vertex adjacency inheritance, sub-triangle centroid half-space, ray-cast centroid (last resort).

**Step E3 — Constraint enforcement:** After initial classification and adjacency propagation, iterate through all segment edges. Sub-triangles sharing a segment edge MUST have opposite classifications (one inside, one outside). Any violations are corrected using the specific segment's plane.

- **Calibration:** The normal convention (outward vs inward) is auto-detected by sampling points near the intersection, offsetting along the triangle normal, and ray-casting.
- **Why this works for open surfaces:** Unlike ray-casting (which counts boundary crossings and fails for non-watertight meshes), the half-space test only needs local geometry at the intersection.
- **Confidence propagation:** Confident classifications propagate to adjacent non-confident triangles via edge adjacency.
- **Known limitation:** Multi-crossing open surfaces can still have spill where the fallback path picks the wrong nearest segment. See KNOWN_ISSUES.md for details.

#### Step 6: Seam Deduplication
Merge coincident vertices along the intersection boundary to produce a clean seam.
- Tolerance-based deduplication at `1e-4`
- Applied independently to each of the 4 groups (aInside, aOutside, bInside, bOutside)

#### Step 7: Normal Propagation
Ensure consistent winding order across the result mesh.
- BFS-based winding propagation from a seed triangle
- Falls back to Z-up normal enforcement if BFS doesn't reach all triangles

#### Step 8: Group Combination
Combine inside/outside groups based on the requested operation.

| Operation   | Formula                            | Groups kept                          |
|-------------|------------------------------------|--------------------------------------|
| `subtract`  | A \ B                              | A-outside-B + B-inside-A (flipped)   |
| `union`     | A ∪ B                              | A-outside-B + B-outside-A            |
| `intersect` | A ∩ B                              | A-inside-B + B-inside-A              |

#### Step 9: Weld & Return
Weld the combined triangle soup into an indexed mesh and return `{ soup, points, triangles }`.

### Mesh Repair Algorithm

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

# Known Issues & Backlog — trimesh-boolean

## Known Issues

### 1. Z-Ray Classification: +Z Only (Open Surfaces)
**Status:** RESOLVED
**Severity:** High — caused incorrect results for certain surface orientations

**Resolution:** Replaced single-axis Z-only ray casting with 3-axis majority vote (`classifyPointMultiAxis`). Casts rays along +Z, +X, and +Y directions, each axis votes inside/outside independently, and 2+ inside votes = inside. No angle thresholds needed — handles any geometry from flat terrain to vertical walls.

Ported from Kirra `SurfaceBooleanHelper.js` — `classifyPointOnAxis()` + `classifyPointMultiAxis()`.

**Affected file:** `src/boolean/classifyTriangles.js`

---

### 2. Flood-Fill Barrier Incomplete for Open Surfaces
**Status:** RESOLVED
**Severity:** Medium — caused entire surface to get one classification

**Resolution:** Two fixes combined:
1. **Multi-axis seed classification** — Flood-fill seed accuracy improved by majority vote across 3 axes (see Issue #1). Even if one axis gives wrong result, 2 others correct it.
2. **Vertex-adjacency sub-triangle classification** — `splitStraddlingAndClassify()` now uses vertex adjacency to classify CDT sub-triangles instead of centroid ray-casting. Sub-triangles inherit classification from adjacent non-crossed triangles via shared vertices, eliminating boundary misclassification. Ray-cast is only used as fallback when no adjacent non-crossed triangle exists.

Ported from Kirra `SurfaceBooleanHelper.js` — `splitStraddlingAndClassify()` vertex adjacency pattern.

**Affected file:** `src/boolean/classifyTriangles.js`

---

## Backlog

### 3. Jittered Ray-Cast Already Implemented — Verify Edge Cases
The library already has 3 deterministic XY jitters for ray-casting. Verify these work correctly for:
- Triangles with very small edges (sub-millimeter)
- Very large UTM coordinates (600000+)
- Nearly-vertical triangles

### 4. ~~Port Bidirectional Ray-Cast from Kirra~~ (DONE)
Superseded by Issue #1 resolution — multi-axis majority vote replaces bidirectional Z-only ray-cast.

### 5. ~~Port Barrier Validation from Kirra~~ (DONE)
Superseded by Issue #2 resolution — vertex-adjacency classification eliminates the boundary misclassification problem.

### 6. Add T-Junction Resolution Pre-Processing
Kirra's `MeshRepairHelper.js` has a `resolveTJunctions()` function that finds mid-edge vertices from one mesh that land on edges of the other mesh, then splits those edges. This improves seam quality. Could be added as an optional pre-processing step.

### 7. Browser Demo: Add Open Surface Test Case
The current browser demo primarily tests closed/solid-like surfaces. Add a test case with:
- A large terrain mesh (open, Z-up)
- A small bench polygon (open, Z-up) partially overlapping the terrain
- Expected result: 4 split regions (A_inside, A_outside, B_inside, B_outside)

### 8. Performance: Large Mesh Support
Current grid-based spatial indexing works well for moderate meshes. For very large meshes (100K+ triangles), consider:
- Streaming/chunked processing
- Web Worker offloading
- BVH tree instead of flat grid

---

## Reference: Kirra App Fixes
Issues #1 and #2 have been ported from Kirra `SurfaceBooleanHelper.js`. Current API:
- `classifyPointMultiAxis(point, otherTris, grids)` → returns `1` (inside) or `-1` (outside)
- `classifyByFloodFill(tris, crossedMap, otherTris, otherGrids)` → returns `Int8Array`
- `splitStraddlingAndClassify(tris, classifications, crossedMap, otherTris, otherGrids)` → returns `{ inside, outside }`

Where `grids`/`otherGrids` = `{ xy: {grid, cellSize}, yz: {grid, cellSize}, xz: {grid, cellSize} }`

# Known Issues & Backlog — trimesh-boolean

## Known Issues

### 1. Z-Ray Classification: +Z Only (Open Surfaces)
**Status:** Open
**Severity:** High — causes incorrect results for certain surface orientations

`classifyPointByRayCast()` in `src/boolean/classifyTriangles.js` only casts rays in the **+Z direction**. This fails when the "other" surface is below the point being classified (e.g., a bench surface below a terrain surface). The +Z ray never hits the lower surface, so the point is incorrectly classified as "outside."

**Fix:** Cast rays in BOTH +Z and -Z directions. If either direction gives an odd crossing count, the point is "inside." This has been implemented in the Kirra app's `SurfaceBooleanHelper.js` and should be ported here.

```javascript
// Current (broken for bench-below-terrain):
if (z > pz) count++;
// ...
return (count % 2 === 1) ? 1 : -1;

// Fix: count both directions
if (z > pz) countAbove++;
if (z < pz) countBelow++;
// ...
if ((countAbove % 2 === 1) || (countBelow % 2 === 1)) insideVotes++;
```

**Affected file:** `src/boolean/classifyTriangles.js` lines 31-74

---

### 2. Flood-Fill Barrier Incomplete for Open Surfaces
**Status:** Open
**Severity:** Medium — causes entire surface to get one classification

For open (non-watertight) surfaces, the intersection ring may have gaps where the surfaces don't quite overlap at the boundary. This means the flood-fill `classifyByFloodFill()` can't form a proper barrier between inside/outside regions — all non-crossed triangles end up in one giant connected component, classified by a single seed.

**Fix:** After flood fill, detect components with >80% of non-crossed triangles. For those, fall back to per-triangle ray-cast classification instead of propagating from a single seed. Implemented in Kirra's `SurfaceBooleanHelper.js`.

**Affected file:** `src/boolean/classifyTriangles.js` lines 91-168

---

## Backlog

### 3. Jittered Ray-Cast Already Implemented — Verify Edge Cases
The library already has 3 deterministic XY jitters for ray-casting. Verify these work correctly for:
- Triangles with very small edges (sub-millimeter)
- Very large UTM coordinates (600000+)
- Nearly-vertical triangles

### 4. Port Bidirectional Ray-Cast from Kirra
Copy the bidirectional (+Z/-Z) ray-cast logic from Kirra's `SurfaceBooleanHelper.js` `classifyPointByRayCast()`. This is the most critical fix.

### 5. Port Barrier Validation from Kirra
Copy the barrier validation fallback from Kirra's `classifyByFloodFill()` for incomplete intersection rings on open surfaces.

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
The Kirra application (`src/helpers/SurfaceBooleanHelper.js`) has implemented fixes for issues #1 and #2 above. When porting, match the function signatures:
- `classifyPointByRayCast(point, otherTris, otherGrid, otherCellSize)` → returns `1` (inside) or `-1` (outside)
- `classifyByFloodFill(tris, crossedMap, otherTris, otherGrid, otherCellSize)` → returns `Int8Array`

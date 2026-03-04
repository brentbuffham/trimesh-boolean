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
**Status:** RESOLVED (partially — see Issue #9 for full fix)
**Severity:** Medium — caused entire surface to get one classification

**Resolution:** Two fixes combined:
1. **Multi-axis seed classification** — Flood-fill seed accuracy improved by majority vote across 3 axes (see Issue #1). Even if one axis gives wrong result, 2 others correct it.
2. **Vertex-adjacency sub-triangle classification** — `splitStraddlingAndClassify()` now uses vertex adjacency to classify CDT sub-triangles instead of centroid ray-casting. Sub-triangles inherit classification from adjacent non-crossed triangles via shared vertices, eliminating boundary misclassification. Ray-cast is only used as fallback when no adjacent non-crossed triangle exists.

**Affected file:** `src/boolean/classifyTriangles.js`

---

### 9. Open Cup / Open Surface Not Splitting Correctly
**Status:** RESOLVED
**Severity:** High — non-crossed triangles of open surfaces were misclassified, causing cup walls to appear on the wrong side of the intersection

**Root Cause (3 compounding issues):**
1. **Flood-fill ray-cast unreliable for open surfaces.** The flood fill classifies non-crossed triangles by ray-casting against the other mesh. For open meshes (e.g., a 16-triangle cup), rays escape through open edges and give wrong inside/outside results. Non-crossed cup triangles above the terrain were incorrectly classified as "inside" the terrain.
2. **No correction for non-crossed triangles.** The vertex-adjacency fix (Issue #2) only corrected *crossed sub-triangles*. Non-crossed triangles kept their wrong flood-fill classification unchallenged.
3. **Edge adjacency broken by Steiner points.** The propagation from correct sub-triangles to non-crossed triangles didn't work because CDT re-triangulation inserts Steiner points along shared edges. A non-crossed triangle sharing edge B-C with a crossed parent gets sub-triangles with edges B-S and S-C — they no longer share a full edge, so adjacency propagation never reaches the non-crossed triangle.

**Resolution:** Three-part fix in `splitStraddlingAndClassify()`:
1. **Half-space test for ALL triangles** — both non-crossed and crossed sub-triangles now get a half-space test against the closest intersection segment. Uses the other mesh's triangle normal at the intersection: anti-normal side = "inside", normal side = "outside". This catches the flood fill's mistakes for non-crossed triangles.
2. **Calibrated normal convention** — the normal sign convention (outward vs inward normals) is auto-detected by sampling a few points near the intersection, offsetting them along the triangle normal, and ray-casting. Neither the mesh centroid (unreliable for open surfaces — the centroid lies ON the surface) nor the signed volume (unreliable for open surfaces) is used.
3. **Confidence propagation** — half-space classified entries are tagged `confident: true` and propagate to adjacent non-confident (flood-fill) entries via edge adjacency, overriding wrong flood-fill results.

**Why the centroid approach failed:** For a closed mesh (cube), the centroid is inside the volume, so comparing a point's half-space position against the centroid's gives the correct answer. For an open surface (terrain), the centroid is ON the surface, so the comparison gives arbitrary results depending on the local curvature.

**Affected files:** `src/boolean/classifyTriangles.js`, `src/boolean/booleanOp.js`

---

### 11. All-Steiner Pocket Triangles from CDT Re-Triangulation
**Status:** RESOLVED
**Severity:** High — caused non-watertight seams and unclassifiable sub-triangles

**Root Cause:** The Constrained Delaunay Triangulation (CDT) approach in `retriangulateWithSteinerPoints()` inserts intersection segment endpoints as Steiner points and runs a generic CDT. This produced sub-triangles where **all 3 vertices** are Steiner points on the intersection line ("pocket triangles"):
- CUP: 86 pocket triangles out of 319 total
- TERRAIN: 7 pocket triangles out of 449 total

These pocket triangles:
1. Have no original vertex for inside/outside classification by vertex adjacency
2. Create non-matching edge topology at the seam between mesh pieces
3. Prevent the boolean result from closing at the intersection boundary

**Resolution:** New `fanTriangulate()` function as the primary re-triangulation method:
1. **Chain segments** into an ordered polyline using `chainSegments()`
2. **Identify boundary** entry/exit points via barycentric coordinates
3. **Find the corner vertex** shared by the entry and exit edges
4. **Fan from each original vertex** to sequential chain points:
   - Corner fan: 1 original vertex + consecutive chain point pairs (isolated side)
   - vA fan: from P0 toward split index K
   - vB fan: from PN toward split index K
   - Transition triangle: vA - chain[K] - vB (2 original verts + 1 chain point)
5. **Winding consistency** check: each sub-triangle's normal is compared against the original triangle's normal and vertices are swapped if flipped
6. **CDT fallback** for edge cases: multiple disconnected polylines, entry/exit on same edge, chain endpoint at original vertex

**Results:**
- CUP: 86 → **0** pocket triangles (100% elimination)
- TERRAIN: 7 → **5** pocket triangles (remaining from multi-chain CDT fallback)
- Total: 93 → **5** (95% reduction)
- All 53 unit tests pass

**Affected files:** `src/boolean/splitTriangles.js` (new `fanTriangulate()`), `src/boolean/classifyTriangles.js` (switched call site), `src/index.js` (new export)

---

### 12. Border-Segment Classification and Constraint Enforcement
**Status:** IMPLEMENTED (v0.3.0) — improves multi-crossing classification but residual spill remains
**Severity:** Medium — a few triangles still end up on the wrong side for complex multi-crossing surfaces

**Root Cause:** The original `halfSpaceTest` fallback picked the *globally nearest* intersection segment for classification. For multi-crossing meshes (e.g., the convoluted block crossing the terrain twice), the "nearest" segment could be from a different crossing, giving wrong classification. Additionally, sub-triangles sharing an intersection segment edge were sometimes classified the same (both inside or both outside), violating the fundamental constraint that opposite sides of a segment boundary must have opposite classifications.

**Resolution (partial):**
1. **Step D0 — Border-segment priority:** For each crossed sub-triangle, check if any of its edges match an intersection segment. If so, classify its centroid directly against that specific segment's other-mesh triangle plane using `segHalfSpace()`. This takes precedence over the nearest-segment fallback and ensures the sub-triangle is classified relative to the correct crossing.
2. **Step E3 — Constraint enforcement:** After initial classification and adjacency propagation, iterate through all segment edges. For each edge, find all sub-triangles sharing it. If they all have the same non-zero classification (constraint violated), reclassify using `segHalfSpace()` with the specific segment's plane.

**Results:**
- Cup: clean 4-way split (no change from baseline)
- Cylinder: clean 4-way split (no change)
- Convoluted: A-inside spill significantly reduced (867 → 599 main component), distinct A-inside zones now correctly separated

**Remaining issues:**
- Sub-triangles sharing only a *vertex* (not an edge) with a segment get classified by the D1-D4 fallback path, which can still pick the wrong nearest segment
- The `mergeSmallComponents` post-processing can over-merge legitimate B-component zones for double-crossings (B squashed to 2 instead of 4)
- A segment-constrained flood fill (stopping at segment boundaries) would likely resolve the remaining spill — see FuturePlans/

**Affected files:** `src/boolean/classifyTriangles.js`, `src/boolean/booleanOp.js`

---

### 13. mergeSmallComponents Over-Merging
**Status:** OPEN
**Severity:** Low — affects user-facing component counts but not correctness of underlying classification

The `mergeSmallComponents(comps, threshold)` function merges components below a triangle-count threshold into the nearest same-group larger component by centroid proximity. For double-crossing scenarios, this can absorb legitimate small zones into larger ones (e.g., B-inside with 2 zones of ~170 and ~185 tris — small fragments from one zone merge into the other instead of their own).

**Mitigation:** Use a lower threshold or no merge for complex multi-crossing scenarios. The root fix is to improve classification so there are no fragments to merge.

---

### 14. Fill Gaps Not Selectable
**Status:** OPEN (planned for v0.3.1)
**Severity:** Medium — `fillOpenEdgeLoops` fills ALL open loops, but for terrain surfaces some open edges are intentional boundaries

The current `fillOpenEdgeLoops(soup)` finds and fills all closed loops of open edges. For user-picked custom surfaces (e.g., a terrain subset), some open edges are intentional and should not be filled. The library needs a two-step API: detect loops, then fill only selected ones.

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
Superseded by Issues #2 and #9 — half-space classification with confidence propagation eliminates boundary misclassification.

### 6. ~~Add T-Junction Resolution Pre-Processing~~ (DONE)
`resolveTJunctions()` is implemented and included in the `repairMesh` pipeline.

### 7. ~~Browser Demo: Add Open Surface Test Case~~ (DONE)
Three.js demo now includes real Kirra surfaces: terrain (11,200 tris), cylinder (60 tris), and cup (16 tris) extracted from `KirraExampleFiles-for-trimesh-boolean.kap`. Default selection is Kirra Terrain vs Kirra Cylinder. Includes B − A inverse subtraction button.

### 8. Performance: Large Mesh Support
Current grid-based spatial indexing works well for moderate meshes. For very large meshes (100K+ triangles), consider:
- Streaming/chunked processing
- Web Worker offloading
- BVH tree instead of flat grid

### 10. Half-Space Calibration Sample Size
The half-space normal convention calibration samples up to 8 intersection segments. For meshes with locally inconsistent normals (e.g., a mix of outward and inward faces), the calibration could vote wrong. Consider per-triangle normal consistency checking as a pre-processing step.

---

## Reference: Internal API
Current internal classification API:
- `classifyPointMultiAxis(point, otherTris, grids)` → `1` (inside) or `-1` (outside)
- `classifyByFloodFill(tris, crossedMap, otherTris, otherGrids)` → `Int8Array`
- `splitStraddlingAndClassify(tris, classifications, crossedMap, otherTris, otherGrids, otherIdxKey)` → `{ inside, outside }`

Where:
- `grids`/`otherGrids` = `{ xy: {grid, cellSize}, yz: {grid, cellSize}, xz: {grid, cellSize} }`
- `otherIdxKey` = `"idxA"` or `"idxB"` — which index on the tagged segment identifies the other mesh's triangle

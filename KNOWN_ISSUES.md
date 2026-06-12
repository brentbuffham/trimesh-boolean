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
**Status:** RESOLVED (v0.5.7) by `closeSolid()`
**Severity:** Medium — `fillOpenEdgeLoops` fills ALL open loops, but for terrain surfaces some open edges are intentional boundaries

The original `fillOpenEdgeLoops(soup)` finds and fills all closed loops of open edges. For user-picked custom surfaces (e.g., a terrain subset), some open edges are intentional and should not be filled.

**Resolution:** `closeSolid()` (v0.5.7) resolves this with a size threshold instead of a selection UI: pinhole loops (≤ `maxCapLoopVerts` vertices, default 32) are capped locally with triangles drawn on the loop itself; large structural openings are never capped and are reported in `diagnostics.skippedLargeLoops`. `repairMesh({ closeMode: "closeSolid" })` runs this as a pure path, bypassing dedup/T-junction/stitch/force-close entirely.

**Affected files:** `src/repair/closeSolid.js` (new), `src/repair/repairMesh.js`

---

### 15. extractBoundaryLoops: Triangular Pinholes Undetectable
**Status:** RESOLVED (v0.5.7)
**Severity:** High — the most common small hole (a single missing triangle) was invisible to the loop detector

An off-by-one (`loop.length > 2` where the closing vertex wasn't yet counted) made 3-vertex boundary loops undetectable. This is likely why the forceClose "safety net" existed at all: pinholes couldn't be capped properly, so the pipeline carpet-bombed instead.

**Affected file:** `src/repair/boundaryLoops.js`

---

### 16. extractBoundaryLoops: Pinch-Vertex Petals Lost
**Status:** RESOLVED (v0.5.7)
**Severity:** Medium

A pinch vertex where 2+ boundary loops meet (boundary degree 4, 6, ...) was consumed by the first loop walked, so the remaining petals could never close. Fixed by consuming **edges** instead of marking vertices used — a pinch vertex now resolves naturally into separate simple loops. Covered by the all-pairs pinch regression test.

**Affected file:** `src/repair/boundaryLoops.js`

---

### 17. extractBoundaryLoops: Mixed-Winding Walks Dead-End
**Status:** RESOLVED (v0.5.7)
**Severity:** Medium

Merged boolean results can contain regions of opposite winding (user-flipped normals, mixed Z+/Z− regions), so walking directed half-edges dead-ended mid-loop. Fixed by chaining **undirected** edges; `triangulateLoop()` corrects cap orientation afterwards via the Newell normal.

**Affected file:** `src/repair/boundaryLoops.js`

---

### 18. Constrainautor Infinite Loop (Frozen Tabs)
**Status:** RESOLVED (v0.5.7)
**Severity:** High — froze the browser tab

Degenerate loop input could send the Constrainautor CDT path into an infinite loop. Guarded in the `boundaryLoops` rewrite.

**Affected file:** `src/repair/boundaryLoops.js`

---

### 19. Checkerboard Normals on Watertight Results
**Status:** RESOLVED (v0.5.7) by `orientSolid()`
**Severity:** High — every volume tool reported a different wrong number

A boolean result built from inputs with no winding convention (e.g., survey DXF 3DFACE entities) was watertight but had 16k+ winding violations — a checkerboard of flipped patches. Per-triangle In/Out heuristics could not fix it.

**Resolution:** `orientSolid()` (v0.5.7) fixes it topologically: (1) coherence flood-fill across shared manifold edges, flipping neighbours so adjacent triangles traverse their shared edge in opposite directions — no centroid rays, no Z-up guessing; (2) one signed-volume direction decision per connected component (closed components only; open sheets are left as-coherent). Propagation deliberately does not cross non-manifold edges.

**Affected file:** `src/normals/orientSolid.js` (new)

---

### 20. Hybrid Classifier: Flood Fill Leaks Through Barrier Gaps (Silent Partition Failure)
**Status:** RESOLVED (v0.5.8) by the auto-classifier
**Severity:** High — the result looks plausible but a mesh silently never partitions

**Observed (2026-06-11, real mine data):** a ~190k-triangle survey vs an extruded prism split correctly all session only with the heffalump classifier forced ON. With it off, the hybrid classifier's flood fill leaked through a gap in the intersection barrier and the survey never partitioned — 3 components instead of 4, with no error or warning.

**Detection (cheap post-conditions the library does not yet check):**
1. **Partition check** — if intersection segments exist, BOTH meshes must have non-empty inside AND outside groups. One line of counting catches this exact failure.
2. **Chain-closure check** — every intersection polyline must close or end on a mesh boundary; a chain dying mid-mesh is a guaranteed flood leak.
3. **Barrier constraint** — triangles sharing a segment edge must classify to opposite sides.

**Resolution (v0.5.8 — `classifier: "auto"` is the default):**
1. **Census** inputs: non-manifold (messy) inputs route straight to the heffalump with auto pre-repair (unless the caller set `preRepair` explicitly)
2. Hybrid runs, then **the post-conditions above are verified** by the new `verifyBmsClassification()` (`src/bms/bmsVerify.js`, exported); `bmsClassify` now also returns per-triangle `triSides` for the barrier check
3. On any failure, **ONLY the classification stage re-runs with the heffalump on the existing mega soup** — intersection/pool/split are classifier-independent, so this is milliseconds, not a re-split. Fallback is per-mesh: a mesh whose checks passed keeps its hybrid groups
4. **The result reports which path ran per mesh**: `result.classifier` (e.g. `{ A: "hybrid", B: "heffalump (partition)" }`) and `result.verification` carries the check details. `classifier: "hybrid"` preserves legacy behaviour (no verification); `classifier: "heffalump"` / the deprecated `forceHeffalump` flag force the heffalump

End state: callers (e.g. Kirra's TrimeshBooleanDialog) can delete their Force Heffalump / pre-repair checkboxes — no user should ever have to know what a "heffalump" is.

**Affected files:** `src/bms/bmsVerify.js` (new), `src/bms/bmsBooleanOp.js`, `src/bms/bmsClassify.js`

---

### 21. Fan-Sliver Re-Triangulation on Extreme Triangle/Chain Size Mismatch
**Status:** RESOLVED (v0.5.8) by the fan-sliver guard
**Severity:** Medium — results are correct but contain numerically nasty needle slivers that misclassify and survive as visible "spurs"

**Observed (2026-06-11, real mine data):** splitting a giant triangle (e.g. a 50 m extruded-prism wall face) against a dense intersection chain (~3,954 segments vs a 190k-triangle survey) makes `fanTriangulate()` emit dozens of needle slivers per face — fans from the wall's far corners to every chain point. They tile the face *correctly* but per-triangle classification of needles is coin-flip (one real split shattered into 15 regions with 64/232-triangle fragments), and they survive into results as visually obvious spurs.

**Resolution (v0.5.8):** new `src/boolean/sliverGuard.js`, wired into BOTH fan triangulators (`bmsSplit.js` `bmsFanTriangulate` and `splitTriangles.js` `fanTriangulate`). When the parent triangle's max edge ≥ 32× the chain point spacing (and the chain has ≥ 16 points), the face skips corner fans and re-triangulates with the chain-constrained CDT seeded with interior Steiner points:
- **Graded offset rows along the chain** at doubling distances (1.5×, 3×, 6×... chain spacing, subsampled to stay isotropic) — these fill the corridor beside the chain and the thin wedges where the chain crosses a parent edge, which a fixed lattice cannot reach
- **A hexagonal interior lattice** (spacing ≈ 4× chain spacing, capped at 1024 points) covering the rest of the face

All added points are **strictly interior** (clearance from parent edges), so edge conformity with neighbouring uncrossed triangles is preserved — no T-junctions. On the 100 m floor vs 0.5 m fence regression: needle count (normalised aspect > 100) went from ~160 to **0**, and >95% of intersection segments survive as constraint edges in the output.

**Companion fix — heffalump component-majority snap (v0.5.8):** the same coin-flip mechanism showed as "spurs" under the forced heffalump on terrain vs cylinder (8 tall cylinder sub-triangles whose centroids hug the terrain flipped into B-inside, reaching 21 m above the terrain). `heffalumpClassify` now votes per component after the per-triangle tests: when ≥ 90% of a component agrees (`opts.snapThreshold`, default 0.9), the stragglers snap to the majority. Genuinely mixed components — the barrier-gap case the heffalump exists for — are nowhere near unanimous and stay per-triangle. Terrain vs cylinder forced-heffalump now matches hybrid exactly (B: 198/198).

**Workaround (no longer needed):** subdivide oversized faces at creation so they are comparable in size to the other mesh's triangles.

**Affected files:** `src/boolean/sliverGuard.js` (new), `src/bms/bmsSplit.js`, `src/boolean/splitTriangles.js`

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

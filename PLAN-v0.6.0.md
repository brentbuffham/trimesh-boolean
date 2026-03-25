# Plan: v0.6.0 — Intersection Robustness & Precision

## Problem Statement

The BMS pipeline (v0.5.3) has correct classification but the **intersection detection** misses triangle-triangle crossings for real-world mine geometry. The `examples/project-TRIMESH.kap` test case (PRESPLIT-A block vs SHELL pit surface, UTM ~478000,6771000) produces only 56 intersection segments — far too few for a block cutting through a 20k-tri shell.

### Root Causes

1. **No robust geometric predicates** — all orientation/incircle tests use fixed epsilon comparisons on IEEE 754 doubles. Near-coplanar or near-edge cases get wrong answers.
2. **Steiner point drift** — intersection points computed in floating-point don't lie exactly on either triangle's plane. Re-triangulated faces have altered normals, potentially creating new overlaps.
3. **Spatial grid gaps** — the grid may not pair all potentially-intersecting triangles, especially for long thin triangles that span multiple cells.
4. **Near-coplanar rejection** — the `dotN > 0.9999` check in Moller rejects nearly-parallel triangles, but real geometry has near-coplanar faces that DO intersect at grazing angles.

---

## Improvement Plan (Priority Order)

### 1. Shewchuk's Adaptive Predicates (HIGH VALUE, MEDIUM EFFORT)

**What:** Replace fixed-epsilon orientation tests with exact adaptive predicates from the `robust-predicates` npm package (port of Shewchuk's C predicates).

**Where to apply:**
- `triTriIntersection.js` — `orient3d` for signed distance computation (lines 35-53), replacing `nB·v + dB` with exact predicate
- `bmsSplit.js` — CDT fallback uses `orient2d` / `incircle` for Delaunay insertion
- `classifyTriangles.js` — orientation tests in flood fill seeds

**API:** `robust-predicates` exports `orient2d(ax,ay, bx,by, cx,cy)` and `orient3d(ax,ay,az, bx,by,bz, cx,cy,cz, dx,dy,dz)`. Returns positive/negative/zero with guaranteed correct sign.

**Impact:** Eliminates wrong-sign orientation results that cause missed intersections and wrong classifications. The predicates are adaptive — they start with fast float arithmetic and only use exact arithmetic when the float result is ambiguous.

**Effort:** ~1 day. Drop-in replacement at specific call sites. Add `robust-predicates` as a dependency.

### 2. Steiner Point Reprojection (MEDIUM VALUE, LOW EFFORT)

**What:** After computing an intersection point (Steiner point), project it back onto both original triangle planes. This ensures the point lies exactly on both surfaces.

**Where:** `triTriIntersection.js` lines 89-97 (where `p0`/`p1` are computed from edge crossing parameter `t`).

**Algorithm:**
```
// After computing intersection point P:
// Project P onto triangle plane: P' = P - (n·P + d) * n
// Use the plane of the triangle that P came from
```

**Impact:** Prevents altered normals in re-triangulated faces. Reduces secondary overlap creation.

**Effort:** ~10 lines per intersection point computation.

### 3. Spatial Grid Improvements (MEDIUM VALUE, MEDIUM EFFORT)

**What:** Ensure all potentially-intersecting triangle pairs are tested. Current grid uses fixed cell size based on average edge length — long thin triangles can span multiple cells and miss pairings.

**Options:**
- **Conservative expansion:** Add triangles to all cells their bounding box touches (currently may only add to centroid cell)
- **Two-level grid:** Coarse grid for large triangles, fine grid for small ones
- **BVH acceleration:** Replace grid with BVH tree (more robust for varying triangle sizes)

**Where:** `spatialGrid.js`

**Effort:** ~1-2 days depending on approach.

### 4. Near-Coplanar Handling (MEDIUM VALUE, HIGH EFFORT)

**What:** The `dotN > 0.9999` rejection in Moller skips nearly-parallel triangle pairs. But in mine geometry, bench faces are often nearly-coplanar with cut surfaces. They DO intersect at grazing angles.

**Options:**
- **Lower the threshold** (e.g., 0.99999) — simple but may introduce jitter
- **Special-case coplanar intersection** — project both triangles onto the dominant plane, compute 2D polygon intersection
- **Simulation of Simplicity (SoS)** — symbolic perturbation that eliminates degenerate cases entirely

**Where:** `triTriIntersection.js` line 61

**Effort:** Lowering threshold is trivial. Full coplanar handling is 2-3 days. SoS is a week+.

### 5. Snap Rounding (LOW VALUE — already partially done)

**What:** Round intersection coordinates to a grid to prevent near-miss intersections. The vertex pool already does a version of this with tolerance-based deduplication.

**Potential improvement:** Make snap rounding more aggressive at intersection computation time, not just at vertex pooling time.

**Effort:** Low, but benefits unclear given vertex pool already handles this.

---

## Verification

### Test Cases
1. **Kirra terrain + convoluted** — 9 components, correct classification (regression)
2. **Kirra terrain + cylinder** — A-inside = 894 (regression)
3. **Cube vs cube** — clean closed solid subtract (regression)
4. **`examples/project-TRIMESH.kap`** — PRESPLIT-A vs SHELL: should produce clean block-shaped cut on the shell surface with proper inside/outside classification
5. All 53 existing unit tests

### Success Criteria for project-TRIMESH.kap
- Intersection finds all crossings between the 56-tri block and the shell triangles it passes through
- Split produces distinct A-inside (block footprint on shell), A-outside (rest of shell), B-inside/B-outside regions
- Visual result matches the Kirra section view (clean rectangular cut)

---

## Implementation Order

1. **Shewchuk predicates** — biggest bang for buck, fixes the most intersection misses
2. **Steiner reprojection** — cheap safety net, prevents cascading geometry errors
3. **Spatial grid** — if predicates alone don't fix the KAP case, the grid might be missing pairs
4. **Coplanar handling** — only if specific coplanar failures are identified

---

## Dependencies

- `robust-predicates` npm package (BSD license, ~5KB, zero dependencies)
- No breaking API changes — all improvements are internal to the pipeline

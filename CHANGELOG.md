# Changelog

Notable changes to `trimesh-boolean`. Versions before 0.6.6 are recorded in the
git history and in `KNOWN_ISSUES.md`.

## 0.6.7

### Fixed — T-junction repair corrupted winding on the default path

`repairMesh()` and `bmsBooleanOp`'s `preRepair` both called the legacy
`resolveTJunctions`. That pass re-triangulates each affected triangle through
Delaunator in a 2D local frame and takes the output order as-is, so it does not
preserve the source triangle's orientation: roughly a third of the
sub-triangles came back wound backwards. On a terrain sheet that flips the
surface normal, which flips lighting and flips inside/outside for any
downstream barrier-normal classification. It also tears shared edges apart,
because it keys vertices with `toFixed(6)` strings and samples each edge
independently, so two triangles sharing an edge can disagree about its splits.

Measured on a uniformly-wound fixture with genuine T-junctions (17 triangles,
100% up-facing):

| | triangles | up-facing | area | open edges |
|---|---|---|---|---|
| input | 17 | 100% | 70.000 | 21 |
| `resolveTJunctions` | 24 | **66.7%** | 70.000 | 12 |
| `resolveTJunctionsHoleFree` | 24 | **100%** | 70.000 | 12 |

Both resolve the T-junctions identically; only the legacy one corrupts winding.

- `repairMesh()` step 1.5 and `bmsBooleanOp` `preRepair` now call
  `resolveTJunctionsHoleFree`, which welds to a shared integer identity (so
  both triangles across an edge split it the same way) and re-orients every
  sub-triangle to the source normal.
- `resolveTJunctions` remains exported and unchanged for callers who want it.
- The classic `boolean()` path is deliberately untouched: its pre-repair is
  opt-in via `preRepair` and is not reached by the default entry point.

### Verified on the real Kirra survey surfaces

Note on gating: `bmsBooleanOp` only auto-enables `preRepair` when the census
reports non-manifold edges (`censusMessy`), which is **false** for all four
Kirra pairs below. With default options this release is therefore identical to
0.6.6 on that data. The comparison that actually exercises the change needs
`preRepair: true`:

| pair | 0.6.6 (legacy) | 0.6.7 (hole-free) |
|---|---|---|
| shell x presplit-a | 64 segs, aOut 8459, 2218 ms | 54 segs, aOut 8487, 1116 ms |
| terrain x cylinder | aOut 10637 | aOut 10635 |
| terrain x convoluted | aOut 10930 | aOut 10928 |
| terrain x cup | aOut 10821 | aOut 10819 |

The real surfaces do contain T-junctions, and the legacy pass corrupts their
winding — this is not only a synthetic-fixture effect:

| surface | in | legacy out | hole-free out | legacy up-facing | hole-free up-facing |
|---|---|---|---|---|---|
| shell | 8565 | 8581 | 8487 | 98.9% | 99.8% |
| presplit-a | 56 | 64 | 56 | 26.6% | 23.2% |
| terrain | 11200 | 11200 | 11194 | 99.9% | 99.9% |

On shell that is roughly 77 triangles flipped. The legacy pass also inflates
triangle counts where the hole-free pass drops sub-tolerance slivers, and it is
about 2x slower end to end on shell x presplit-a.

### Tests

`test/repairWinding.test.js` — pins winding preservation through
`resolveTJunctionsHoleFree` and through `repairMesh()` end to end, asserts the
fixture genuinely contains T-junctions, and documents the legacy pass's
behaviour so a future change to it is noticed.

## 0.6.6

### Fixed — silently missed A-vs-B intersections

`triTriIntersection` rejected any triangle pair with `|nA · nB| > 0.9999`,
discarding every crossing shallower than **~0.81°** — even though the `orient3d`
sign tests immediately above had already proven the two triangles straddle each
other. Coplanar overlaps were dropped as well, since Möller's output is a
segment and a coplanar intersection is a polygon.

Both produced **zero** intersection segments. `bmsBooleanOp` then took its
"no intersection" early return and reported `verification: null` — a confident
clean result for a wrong answer. `verifyBmsClassification` could not catch it:
its partition check is gated on `segments.length > 0` and never ran.

Bench-face-vs-cut geometry sits squarely in that dead zone.

- **`triTriIntersection`**: the near-parallel gate moved from `0.9999` to
  `1 - 1e-14` and is now overridable via `options.nearParallel`. The real
  conditioning limits were always the `lineDirLen < 1e-12` and `denom > 1e-15`
  guards, not this gate. Measured across the reopened range, segment endpoints
  land within 1 ulp of the analytic crossing line down to 5.7e-5°.
- **`bmsIntersect`**: when Möller returns null, exactly-coplanar pairs now go
  through `coplanarOverlap` + `emitCoplanarSegments` into the same vertex pool,
  as `bmsSelfArrange` already did for self-folds. Coverage of the two paths
  overlaps, so no angle falls between them. Disable with `{ coplanar: false }`;
  the result reports `coplanarPairs`.
- **`bmsBooleanOp`**: a zero-segment result whose input bounding boxes
  interpenetrate no longer claims success. It returns a `verification` failure
  (`no-segments-but-bboxes-overlap`) instead of `null`. Meshes that are genuinely
  apart, and shells that merely abut, still return `null` as before.
  `coplanar` and `minAreaRatio` are forwarded to `bmsIntersect`.

### Behaviour change

Solids sharing coplanar faces (axis-aligned blocks, stacked benches) now get
barrier segments along those faces. On two overlapping cubes this cuts
fragmentation from 13 components to 6. Pass `{ coplanar: false }` for the
pre-0.6.6 result.

Verified against the real Kirra survey surfaces in `examples/public/`:
terrain×cylinder, terrain×convoluted and terrain×cup are byte-identical to
0.6.5; shell×presplit-a gains 6 segments. No regressions.

### Tests

`test/grazingCoplanar.test.js` — shallow-crossing coverage, coplanar emission,
handover continuity, endpoint accuracy, the opt-out, and both directions of the
bbox guard (flags interpenetration, stays silent on abutting and separated).

`test/scaling.test.js` — the indexed/soup coarsening check now qualifies its
triangle keys by `mesh/side`. Bare coordinate keys collided once coincident
faces began splitting identically, making the check read a triangle's component
id off the wrong mesh.

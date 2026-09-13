# Changelog

Notable changes to `trimesh-boolean`. Versions before 0.6.6 are recorded in the
git history and in `KNOWN_ISSUES.md`.

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

# Changelog

Notable changes to `trimesh-boolean`. Versions before 0.6.6 are recorded in the
git history and in `KNOWN_ISSUES.md`.

## 0.7.2

### Fixed — the heffalump's closed-mesh test was a single un-jittered ray

`isPointInsideClosedMesh` cast one **+Z** parity ray with no jitter and no
on-edge epsilon. When such a ray grazes an edge shared by two triangles the hit
is counted twice or not at all, the parity flips, and the point lands on the
wrong side. The classic path guards exactly this with three deterministic
jitters (`classifyTriangles.js` `JITTERS`); the heffalump — the **fallback** the
auto classifier reaches for when the hybrid fails — had no guard at all, making
it less robust than the path it exists to back up.

It is now a three-axis majority vote. Each axis reports whether any of its hits
landed on a projected edge (a scale-free barycentric test, not an absolute
epsilon); shaky axes are discarded and the survivors vote. If every axis is
shaky the vote is taken anyway — a wrong answer beats no answer, and the
existing majority-snap pass can still correct a lone straggler.

`test/heffalumpRay.test.js` drives a sheet threaded through an axis-aligned box
along its diagonal seam — the geometry that breaks a single-axis parity test,
and the geometry mining work is full of. It asserts against **ground truth**
(centroid inside the box), not against another classifier.

That test turned up something worth recording: on this geometry the **hybrid**
classifier puts all 10 inside-triangles in the outside group, while the
heffalump gets all 10 right. `classifier: "auto"` detects the failure and falls
back, matching the heffalump exactly — concrete evidence that the auto
classifier and its verification earn their place.

No change on the real Kirra surfaces: terrain × cylinder, terrain × convoluted,
terrain × cup and shell × presplit-a are identical to 0.7.1, and no slower.

### Changed — `finishMesh` stage renamed to `resolveTJunctionsHoleFree`

The stage was named `"resolveTJunctions"` but ran `resolveTJunctionsHoleFree`.
The legacy function corrupts winding (see 0.6.7) and is deliberately not used
anywhere in this pipeline; the name now says what it runs.

### Added — README documents the verify/finish stack

`verifyOutput`, `assessRepair`, `finishMesh` and `booleanAuto` were typed and
tested but appeared nowhere in the README — the headline features were
invisible. Quick Start now leads with `booleanAuto` and states plainly which
engine to use for which input. The Three.js section documents the BMS default
and the UTM local-frame behaviour. Includes the warning that `repairMesh`
defaults to `sliverRatio: 0.01`.

## 0.7.1

### Changed — the Three.js adapter now runs BMS, and stops losing UTM precision

Two problems in `src/three.js`, which is what the documented one-liner and the
`trimesh-boolean/three` entry point actually run.

**1. It drove the classic pipeline.** `booleanFromMeshes` called
`boolean()` — flood-fill plus half-space — not BMS. So every Three.js consumer
missed the shared Steiner pool, the hybrid classifier and the heffalump
fallback: the engine this library exists for. It now runs `booleanAuto`.
Pass `{ engine: "classic" }` for the old behaviour.

**2. `soupToMesh` wrote absolute survey coordinates into a Float32 attribute.**
Float32 spacing at a UTM northing of 7.4e6 is **0.5 m**, so any two vertices
closer than that collapsed onto the same value. Measured:

| coordinate | stored as Float32 | error |
|---|---|---|
| 7444123.456 | 7444123.5 | 0.044 m |
| 6771845.678 | 6771845.5 | **0.178 m** |
| 748291.234 | 748291.25 | 0.016 m |

Geometry is now built in a local frame with the centroid on `mesh.position`, so
world position is unchanged and the same coordinates carry ~1e-6 m of error.
Pass `{ recenter: false }` for the old behaviour — only safe near the origin.

Note this is a *storage* problem, independent of the exact predicates used
upstream: `orient3d` gives exact SIGNS, not exact coordinates, and no amount of
exactness survives truncation to Float32 at UTM magnitude.

### Added — `booleanAuto`: pick the inputs and the output type

```js
booleanAuto(terrain, cutter, "subtract")  // -> { soup, ok, report }
```

Runs the BMS boolean, merges for the requested operation, and applies the gated
finisher. Output quality is an invariant, not an option — there is no flag to
disable correct winding. `quality` chooses effort: `"strict"` (default) finishes,
`"raw"` returns the merged boolean untouched. `bmsBooleanOp` is unchanged and
remains the full-control entry point.

Measured across all three operations on four real Kirra pairs (12 cases),
finishing improved or held every one and degraded none. terrain x cylinder and
terrain x cup reach fully clean output on all three operations.

### Added — the BMS public API is finally typed

`src/index.d.ts` declared none of `bmsBooleanOp`, `bmsIntersect`,
`heffalumpClassify`, `shouldUseHeffalump`, `verifyBmsClassification`,
`createVertexPool` or `fanTriangulate` — the entire BMS surface was untyped, so
every documented BMS example was too. Also adds `bmsSplit`, `bmsChain`,
`bmsClassify`, `bmsClosePolylines`, `chainedOpenEdge`, the `reclassify*` family,
`booleanAuto` and `NEAR_PARALLEL` (now exported).

`test/typings.test.js` keeps them honest: it parses `index.d.ts`, compares it
against the runtime exports in both directions, and fails on drift. It found 8
further undeclared exports on its first run. The declaration file also
type-checks clean under `--strict`.

## 0.7.0

### Added — `assessRepair` and `finishMesh`: automated finishing that cannot make things worse

A repair is not automatically an improvement. Measured on the real Kirra
surfaces, hole-free T-junction resolution applied to `shell x presplit-a` turns
4 violations into 6, trading T-junctions for degenerates and non-manifold edges.
An ungated pipeline ships that as "repaired".

- **`assessRepair(before, after, options)`** — run a repair on a copy, diff the
  two `verifyOutput` reports, and report benefit or damage. Returns
  `recommend: "keep" | "discard"`, plus itemised `benefits` and `damage`.
  Ported from Kirra's `helpers/MeshRepairAssessment.js` and rebuilt on
  `verifyOutput`, so winding and T-junction violations count too — the original
  tracked only open edges, non-manifold edges, components and volume.
- **`finishMesh(soup, options)`** — apply the default stages
  (`dedupCoincident`, `resolveTJunctions`, `orientWinding`), each gated by
  `assessRepair`, keeping a stage only when it strictly reduces violations.
  **Never returns geometry worse than its input** — that is pinned by a test.
- **`violationCount(report)`** and **`describeAssessment(assessment)`** helpers.
- `verifyOutput().stats` gains `components` and `volume`. Volume is translated
  to the centroid before summing: at UTM scale the raw sum is catastrophic
  cancellation, measured in Kirra as 89,000,000 m3 for a 55,000 m3 solid.

Measured on real Kirra booleans:

| pair | before | `finishMesh` | ungated |
|---|---|---|---|
| terrain x cylinder | `consistentWinding:40` | **clean** | clean |
| terrain x cup | `consistentWinding:46` | **clean** | clean |
| terrain x convoluted | 108 violations | 2 | `manifoldEdges:2` |
| shell x presplit-a | 4 | **4, untouched** | **6 — worse** |

No deleting stage is included. Kirra measured that removing geometry stitched
into a mesh tears it open (deleting 1827 slivers produced 3567 open edges and 90
components) while welding dissolves the same junk for free. Note that
`repairMesh` still defaults to `sliverRatio: 0.01` — the setting measured as
ruinous — so assess before trusting it.

Known limitation: on `terrain x convoluted` the strict "must reduce" rule
declines a 1-for-1 trade (one T-junction for one non-manifold edge), leaving 2
violations where accepting the trade would leave 1. The rule is kept because
`shell x presplit-a` shows what accepting trades costs.

Purely additive. Typed in `src/index.d.ts`. No existing behaviour changes.

## 0.6.7 (addendum — shipped in the 0.6.7 tarball)

### Added — `verifyOutput`: read-only invariant check on finished geometry

The output-side twin of `verifyBmsClassification`. That one asks whether the
*classification* held together; this asks whether the *geometry* about to be
handed back is valid. It mutates nothing and repairs nothing — it reports, so a
caller can decide.

It exists because the pre-repair gate (`censusMessy`) inspects the INPUT and
guesses, and on the real Kirra surfaces that guess is wrong: it reports clean
while the meshes demonstrably contain T-junctions (see 0.6.7). Guessing the
input is a heuristic; measuring the output is a fact.

Checks: `noDegenerateTriangles`, `noDuplicateTriangles`, `consistentWinding`
(shared edges traversed oppositely by their two triangles), `manifoldEdges`,
`noTJunctions`, and `closed` under `{ expectClosed: true }`. Open surfaces pass
by default — that is the normal case for terrain and DTM work. Identity is a
neighbourhood weld (shared integer ids), not `toFixed` strings.

It independently reproduces the 0.6.7 finding by a different method — edge
traversal parity rather than normal direction — and reaches the same verdict:
the legacy `resolveTJunctions` leaves 8 winding conflicts on the fixture where
`resolveTJunctionsHoleFree` leaves none.

Run over the shipped Kirra surfaces it also flags pre-existing input defects:
terrain has 46 inconsistently-wound shared edges and convoluted has 6, which
matches their 99.9% / 21.9% up-facing fractions. These are data-quality issues
in the source surfaces, not library faults.

Typed in `src/index.d.ts`.

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

# Handoff — Library scaling: integer-id keys + skip pass-through decompose

**Repo:** `trimesh-boolean` (currently `0.5.11`)
**Owner publishes to npm** — the agent makes local changes + tests only, does NOT `npm publish`.
**Prime directive:** **BACK-COMPATIBLE. Add opt-in fast paths ALONGSIDE the existing ones.
Do NOT remove or change the default behaviour of any exported function.** Every one of the
current tests must still pass unchanged. New behaviour is reached only through a new option
or a new function name.

---

## Why

At millions of triangles two things dominate time + memory, both from `toFixed(6)` **string**
vertex keys:

1. **String-hashed connected components.** `findConnectedComponents` builds an edge→triangle
   map keyed by `x.toFixed(6)+","+y.toFixed(6)+","+z.toFixed(6)` strings. Millions of string
   concatenations + a huge string-keyed object → slow and heap-heavy.
2. **Pass-through decompose.** `splitToComponents` ALWAYS runs that string-hashed component
   pass on all four groups — even when the caller already has (or doesn't need) components.
   Kirra's large-mesh path decomposes over integer indices itself and does not want the
   library to pay this cost at all.

The BMS pipeline already solved vertex identity the right way: `createVertexPool` in
`src/bms/bmsVertexPool.js` hands out an integer `id` per welded vertex via a spatial grid.
The work here is to let components + decompose ride on integer ids instead of `toFixed`
strings — as an **opt-in**, with the string path kept as the untouched default.

---

## Item A — integer-id connected components (opt-in)

**File:** `src/util/connectedComponents.js` (`findConnectedComponents(soup)`).

- **Keep** `findConnectedComponents(soup)` exactly as-is (default, toFixed — back-compat).
- **Add** `findConnectedComponentsPooled(soup, options)` that assigns each distinct vertex an
  integer id via a quantized spatial hash (mirror `bmsVertexPool`'s `cellKey`/`findNearest`,
  or a simpler `Map<quantizedKey,int>` when exactness is fine), then does the SAME
  edge-map → neighbor → BFS → largest-first sort using integer keys (`lo*P+hi` edge keys,
  as in Kirra's `IndexedComponents.js` / `IndexedCloseSolid.js`). No `toFixed`, no string
  concat in the hot loop.
- `options.tolerance` (default matches the current 6-dp rounding, i.e. `1e-6`) so results are
  identical to the string path on clean input.

Optional stretch: an `findConnectedComponentsIndexed(points, triIndexTriples)` that takes an
already-indexed mesh (shared pool + `[i,j,k]`) and skips vertex hashing entirely — this is the
exact twin of Kirra's `connectedComponentsIndexed`; consider lifting that function into the
library so both sides share one implementation.

## Item B — skip / index the decompose (opt-in)

**File:** `src/boolean/booleanOp.js` (`splitToComponents(groups)`), plus `src/bms/bmsBooleanOp.js`.

- **Keep** `splitToComponents(groups)` as-is (default).
- **Add** an options arg: `splitToComponents(groups, { pooled: true })` → routes to
  `findConnectedComponentsPooled`. Same return shape (`{mesh, side, index, soup, triCount}`).
- **`bmsBooleanOp`**: it already gained `{ indexed: true }` (see `src/util/indexGroups.js`,
  0.5.10). Add `{ decompose: false }` (default `true` = current behaviour) so a caller that
  only wants the four groups (or the indexed output) is never forced through a component pass.
  If `bmsBooleanOp` does not currently call `splitToComponents` internally, this item is just:
  document that the indexed output already lets callers decompose over integer ids, and make
  sure no internal pass-through decompose runs when `indexed: true`.
- Optional: `indexGroups`/`indexGroupsToTypedArrays` already produce the shared pool; an
  `{ decomposeIndexed: true }` could return per-group integer-id components directly, so Kirra
  can drop its own `decomposeIndexedGroups` and call the library. Only if cheap — otherwise
  leave decompose on the Kirra side.

---

## Files that also use `toFixed` (audit, do NOT rewrite unless trivially safe)

`grep -rln toFixed src/` →
`bms/bmsSplit.js`, `bms/bmsVertexPool.js` (comment only), `bms/heffalumpClassify.js`,
`boolean/booleanOp.js`, `boolean/classifyTriangles.js`, `boolean/splitTriangles.js`,
`repair/fillOpenLoops.js`, `repair/resolveTJunctions.js`, `util/connectedComponents.js`,
`util/math.js` (`vKey`).

These are on the **classic** pipeline and repair paths. **Scope this task to Items A + B only**
(the two hotspots Kirra hits at scale). Note the others in the PR description as future work;
do not touch them in this pass — changing `vKey` semantics risks the whole classic pipeline.

---

## Back-compatibility rules (hard)

1. No exported signature changes that alter defaults. New behaviour = new option (default off)
   or new function name.
2. `src/index.js` + `src/index.d.ts`: export any new function and type the new options; leave
   existing exports/types intact.
3. Both pipelines coexist: string-keyed default, integer-keyed opt-in. A user on 0.5.x keeps
   identical results with no code change.

## Testing (must)

- All existing tests pass unchanged: `npm test` (see `test/*.test.js`, ~93 tests).
- **Add `test/scaling.test.js`:**
  - Equivalence: on the existing fixtures (`test/fixtures/meshes.js`), the component-size
    multiset from `findConnectedComponents` **equals** `findConnectedComponentsPooled` and
    `splitToComponents(g)` equals `splitToComponents(g, {pooled:true})`.
  - `{ decompose:false }` / `indexed:true` returns groups with no component pass (assert shape;
    optionally spy that the string hash isn't built).
  - A perf smoke on a synthetic ~200k-triangle grid: pooled path completes and matches counts
    (don't assert wall-clock in CI; just that it runs and agrees).
- Cross-check against Kirra's existing equivalence test
  (`Kirra/src/helpers/__tests__/IndexedComponents.vitest.js`) which already locks
  `decomposeIndexedGroups` == `splitToComponents` on a real boolean — the library's pooled
  path must agree with both.

## Publish flow

Bump with `npm version patch` → `0.5.12`, update `CHANGELOG`/`KNOWN_ISSUES` if present, but
**leave the actual `npm publish` to the owner** (they are logged in as `brentbuffham`). After
publish, Kirra bumps its dependency and can opt in with `{ pooled: true }` / `{ decompose:false }`.

## Acceptance criteria

- [ ] `findConnectedComponentsPooled` added; `findConnectedComponents` unchanged.
- [ ] `splitToComponents(groups, { pooled:true })` added; no-arg call unchanged.
- [ ] `bmsBooleanOp` never runs a pass-through decompose when `indexed:true` (and/or honours
      `decompose:false`).
- [ ] New exports + `.d.ts` types; existing ones intact.
- [ ] All existing tests green + new equivalence/scaling tests green.
- [ ] No `npm publish` performed by the agent.

## Reference implementations to mirror (already written, proven)

- Integer-id components + indexed decompose: `Kirra/src/helpers/IndexedComponents.js`
  (`connectedComponentsIndexed`, `decomposeIndexedGroups`).
- Integer edge-key boundary scan: `Kirra/src/helpers/IndexedCloseSolid.js`
  (`extractBoundaryLoopsIndexed`) — `lo*P+hi` keys, no strings.
- Integer-id spatial pool: `src/bms/bmsVertexPool.js` (`createVertexPool`).

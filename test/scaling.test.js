import { describe, it, expect } from "vitest";
import {
	bmsBooleanOp,
	findConnectedComponents,
	findConnectedComponentsPooled,
	splitToComponents,
	decomposeIndexedGroups
} from "../src/index.js";
import { createCube, createFlatPatch } from "./fixtures/meshes.js";

// ── Order-insensitive signatures ──────────────────────────────────────────────
// Component ordering for equal-size components is not guaranteed to match between the
// string path and the pooled path (different map-iteration order), so equivalence is
// checked as a MULTISET of component contents, not element-by-element.
function vkey(p) { return Math.round(p.x * 1e3) + "_" + Math.round(p.y * 1e3) + "_" + Math.round(p.z * 1e3); }
function triKey(a, b, c) { return [vkey(a), vkey(b), vkey(c)].sort().join("|"); }
function soupSig(soup) { return soup.map(function (t) { return triKey(t.v0, t.v1, t.v2); }).sort().join(","); }
// Signature of a whole component decomposition: sorted list of per-component signatures.
function soupComponentSigs(comps) {
	return comps.map(function (c) { return c.mesh + "/" + c.side + "::" + soupSig(c.soup); }).sort();
}

describe("scaling: findConnectedComponentsPooled equivalence", function () {
	// Two disjoint patches → guaranteed 2 components, exercises the split path.
	var twoPatches = createFlatPatch(0, 0, 0, 10, 10, 3, 3)
		.concat(createFlatPatch(1000, 0, 0, 10, 10, 4, 4));

	it("matches findConnectedComponents component sizes (largest-first)", function () {
		var classic = findConnectedComponents(twoPatches);
		var pooled = findConnectedComponentsPooled(twoPatches);
		expect(pooled.length).toBe(classic.length);
		expect(classic.length).toBe(2);
		expect(pooled.map(function (c) { return c.length; })).toEqual(classic.map(function (c) { return c.length; }));
	});

	it("matches the exact triangle multiset per component", function () {
		var classic = findConnectedComponents(twoPatches).map(soupSig).sort();
		var pooled = findConnectedComponentsPooled(twoPatches).map(soupSig).sort();
		expect(pooled).toEqual(classic);
	});

	it("handles empty and single-triangle soups like the default", function () {
		expect(findConnectedComponentsPooled([])).toEqual([]);
		var one = createFlatPatch(0, 0, 0, 2, 2, 1, 1).slice(0, 1);
		expect(findConnectedComponentsPooled(one).length).toBe(1);
	});
});

describe("scaling: splitToComponents({ pooled: true }) equivalence", function () {
	var a = createCube(0, 0, 0, 2);
	var b = createCube(1, 0, 0, 2); // overlapping → all four groups non-empty
	var res = bmsBooleanOp(a, b, null, { classifier: "auto", indexed: true });

	it("pooled decompose equals the classic decompose (multiset of components)", function () {
		var classic = splitToComponents(res.groups);
		var pooled = splitToComponents(res.groups, { pooled: true });
		expect(pooled.length).toBe(classic.length);
		expect(soupComponentSigs(pooled)).toEqual(soupComponentSigs(classic));
	});

	it("indexed decompose covers the same triangles and coarsens the soup decompose", function () {
		// decomposeIndexedGroups uses shared-VERTEX union-find; the soup path uses
		// shared-EDGE adjacency. They are NOT identical partitions — the vertex relation
		// is coarser (it also joins triangles that meet at a single pooled vertex). The
		// guaranteed invariants: (1) no triangle is lost or duplicated, and (2) every
		// edge-based component sits inside exactly one vertex-based component.
		var classic = splitToComponents(res.groups);
		var indexed = decomposeIndexedGroups(res.indexed);

		// (1) Same flattened triangle multiset across all components.
		function flatKeys(list, isIdx) {
			var keys = [];
			for (var i = 0; i < list.length; i++) {
				var c = list[i];
				if (isIdx) {
					for (var t = 0; t < c.triangles.length; t++) {
						var tr = c.triangles[t];
						keys.push(triKey(c.points[tr[0]], c.points[tr[1]], c.points[tr[2]]));
					}
				} else {
					for (var s = 0; s < c.soup.length; s++) keys.push(triKey(c.soup[s].v0, c.soup[s].v1, c.soup[s].v2));
				}
			}
			return keys.sort();
		}
		expect(flatKeys(indexed, true)).toEqual(flatKeys(classic, false));

		// (2) Coarsening: map each triangle to its indexed-component id, then every soup
		// component must land in a single indexed component.
		expect(indexed.length).toBeLessThanOrEqual(classic.length);
		var triToIdxComp = new Map();
		indexed.forEach(function (c, ci) {
			for (var t = 0; t < c.triangles.length; t++) {
				var tr = c.triangles[t];
				triToIdxComp.set(triKey(c.points[tr[0]], c.points[tr[1]], c.points[tr[2]]), ci);
			}
		});
		classic.forEach(function (c) {
			var landed = new Set();
			for (var s = 0; s < c.soup.length; s++) {
				landed.add(triToIdxComp.get(triKey(c.soup[s].v0, c.soup[s].v1, c.soup[s].v2)));
			}
			expect(landed.size).toBe(1);
		});
	});
});

describe("scaling: bmsBooleanOp does not run a pass-through decompose", function () {
	var a = createCube(0, 0, 0, 2);
	var b = createCube(1, 0, 0, 2);

	it("{ indexed: true } returns groups + indexed and no component list", function () {
		var res = bmsBooleanOp(a, b, null, { classifier: "auto", indexed: true });
		expect(res.groups).toBeTruthy();
		expect(res.indexed).toBeTruthy();
		// The pipeline must NOT force a decompose: callers opt in via splitToComponents /
		// decomposeIndexedGroups when they actually want components.
		expect(res.components).toBeUndefined();
		expect(res.componentList).toBeUndefined();
	});
});

describe("scaling: pooled path runs on a ~200k-triangle grid", function () {
	// 2 * 316 * 316 = 199,712 triangles — one connected patch.
	var big = createFlatPatch(0, 0, 0, 1000, 1000, 316, 316);

	it("pooled returns a single component with the full triangle count", function () {
		expect(big.length).toBe(199712);
		var pooled = findConnectedComponentsPooled(big);
		expect(pooled.length).toBe(1);
		expect(pooled[0].length).toBe(big.length);
	});

	it("agrees with the string path on component count", function () {
		var classic = findConnectedComponents(big);
		var pooled = findConnectedComponentsPooled(big);
		expect(pooled.length).toBe(classic.length);
		expect(pooled[0].length).toBe(classic[0].length);
	});
});

import { describe, it, expect } from "vitest";
import { bmsBooleanOp, indexGroups, indexGroupsToTypedArrays } from "../src/index.js";
import { createCube } from "./fixtures/meshes.js";

// Canonical order-insensitive triangle key (rounded coords) — compares a soup
// triangle set against the reconstruction of the indexed twin.
function vkey(p) { return Math.round(p.x * 1e3) + "_" + Math.round(p.y * 1e3) + "_" + Math.round(p.z * 1e3); }
function triKey(a, b, c) { return [vkey(a), vkey(b), vkey(c)].sort().join("|"); }
function soupKeys(soup) { return soup.map(function (t) { return triKey(t.v0, t.v1, t.v2); }).sort(); }
function indexedGroupKeys(points, tris) {
	return tris.map(function (t) { return triKey(points[t[0]], points[t[1]], points[t[2]]); }).sort();
}

describe("indexed group output", function () {
	var a = createCube(0, 0, 0, 2);
	var b = createCube(1, 0, 0, 2); // overlapping cubes → all four groups non-empty
	var res = bmsBooleanOp(a, b, null, { classifier: "auto", indexed: true });

	it("bmsBooleanOp({ indexed: true }) attaches result.indexed with shared points", function () {
		expect(res.indexed).toBeTruthy();
		expect(Array.isArray(res.indexed.points)).toBe(true);
		expect(res.indexed.points.length).toBeGreaterThan(0);
		expect(res.indexed.groups).toHaveProperty("aInside");
		expect(res.indexed.groups).toHaveProperty("bOutside");
		// points are {x,y,z}
		var p0 = res.indexed.points[0];
		expect(typeof p0.x).toBe("number");
		expect(typeof p0.y).toBe("number");
		expect(typeof p0.z).toBe("number");
	});

	it("indexed groups reconstruct the SAME triangles as the soup groups", function () {
		["aInside", "aOutside", "bInside", "bOutside"].forEach(function (g) {
			var soup = res.groups[g] || [];
			var idx = res.indexed.groups[g] || [];
			expect(idx.length).toBe(soup.length);
			expect(indexedGroupKeys(res.indexed.points, idx)).toEqual(soupKeys(soup));
		});
	});

	it("indexed is lighter — fewer shared points than 3x the triangle count", function () {
		var totalTris = ["aInside", "aOutside", "bInside", "bOutside"]
			.reduce(function (n, g) { return n + res.indexed.groups[g].length; }, 0);
		expect(res.indexed.points.length).toBeLessThan(totalTris * 3); // vertices are shared
	});

	it("soup output is UNCHANGED when indexed is off (back-compat)", function () {
		var plain = bmsBooleanOp(createCube(0, 0, 0, 2), createCube(1, 0, 0, 2), null, { classifier: "auto" });
		expect(plain.indexed).toBeUndefined();
		expect(plain.groups.aInside.length).toBe(res.groups.aInside.length);
	});

	it("indexGroups() works standalone on soup groups", function () {
		var ig = indexGroups(res.groups);
		expect(ig.points.length).toBeGreaterThan(0);
		["aInside", "aOutside", "bInside", "bOutside"].forEach(function (g) {
			expect(indexedGroupKeys(ig.points, ig.groups[g])).toEqual(soupKeys(res.groups[g] || []));
		});
	});

	it("indexGroupsToTypedArrays() flattens to Float64/Uint32 arrays", function () {
		var ta = indexGroupsToTypedArrays(res.indexed);
		expect(ta.positions).toBeInstanceOf(Float64Array);
		expect(ta.positions.length).toBe(res.indexed.points.length * 3);
		expect(ta.index.aInside).toBeInstanceOf(Uint32Array);
		expect(ta.index.aInside.length).toBe(res.indexed.groups.aInside.length * 3);
	});
});

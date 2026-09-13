import { describe, it, expect } from "vitest";
import { verifyOutput, resolveTJunctions, resolveTJunctionsHoleFree } from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// verifyOutput is the output-side invariant check: read-only, repairs nothing.
//
// It exists because the pre-repair gate (censusMessy) inspects the INPUT and
// guesses, and on real survey data that guess is wrong — it reports clean while
// the meshes contain T-junctions. Measuring the output cannot be fooled that way.
//
// These tests pin both directions: it must pass geometry that is genuinely
// valid, and it must catch each invariant violation on its own.
// ─────────────────────────────────────────────────────────────────────────────

function flag(res, name) {
	var c = res.checks.filter(function (x) { return x.check === name; })[0];
	return c ? c.count : null;
}

var TRI = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } };

// Closed tetrahedron, consistently wound outward.
function tetra() {
	var a = { x: 0, y: 0, z: 0 }, b = { x: 1, y: 0, z: 0 };
	var c = { x: 0, y: 1, z: 0 }, d = { x: 0, y: 0, z: 1 };
	return [
		{ v0: a, v1: c, v2: b },
		{ v0: a, v1: b, v2: d },
		{ v0: a, v1: d, v2: c },
		{ v0: b, v1: c, v2: d }
	];
}

// One large triangle whose bottom edge is subdivided by a finer strip beneath
// it: every interior strip vertex lands ON the large triangle's edge.
function tJunctionSoup(n) {
	var soup = [{ v0: { x: 0, y: 0, z: 0 }, v1: { x: 10, y: 0, z: 0 }, v2: { x: 5, y: 8, z: 0 } }];
	for (var i = 0; i < n; i++) {
		var x0 = i * 10 / n, x1 = (i + 1) * 10 / n;
		soup.push({ v0: { x: x0, y: 0, z: 0 }, v1: { x: x1, y: -3, z: 0 }, v2: { x: x1, y: 0, z: 0 } });
		soup.push({ v0: { x: x0, y: 0, z: 0 }, v1: { x: x0, y: -3, z: 0 }, v2: { x: x1, y: -3, z: 0 } });
	}
	return soup;
}

describe("verifyOutput: accepts valid geometry", function () {
	it("passes a single clean triangle", function () {
		var res = verifyOutput([TRI]);
		expect(res.ok).toBe(true);
		expect(res.stats.triangles).toBe(1);
		expect(res.stats.openEdges).toBe(3);
	});

	it("passes a consistently wound closed tetrahedron", function () {
		var res = verifyOutput(tetra());
		expect(res.ok).toBe(true);
		expect(res.stats.openEdges).toBe(0);
		expect(res.stats.vertices).toBe(4);
	});

	it("accepts an open surface by default and only demands closure on request", function () {
		var open = [TRI];
		expect(verifyOutput(open).ok).toBe(true);
		var strict = verifyOutput(open, { expectClosed: true });
		expect(strict.ok).toBe(false);
		expect(flag(strict, "closed")).toBe(3);
	});

	it("reports a closed tetrahedron as closed under expectClosed", function () {
		expect(verifyOutput(tetra(), { expectClosed: true }).ok).toBe(true);
	});
});

describe("verifyOutput: catches each violation", function () {
	it("rejects an empty soup", function () {
		var res = verifyOutput([]);
		expect(res.ok).toBe(false);
		expect(res.checks[0].check).toBe("nonEmpty");
	});

	it("catches duplicate triangles", function () {
		var res = verifyOutput([TRI, { v0: TRI.v0, v1: TRI.v1, v2: TRI.v2 }]);
		expect(res.ok).toBe(false);
		expect(flag(res, "noDuplicateTriangles")).toBe(1);
	});

	it("catches a degenerate (zero-area) triangle", function () {
		var flat = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 2, y: 0, z: 0 } };
		var res = verifyOutput([TRI, flat]);
		expect(res.ok).toBe(false);
		expect(flag(res, "noDegenerateTriangles")).toBeGreaterThan(0);
	});

	it("catches a flipped neighbour across a shared edge", function () {
		// Two triangles sharing edge (a,b). Wound consistently they traverse it
		// in opposite directions; flipping one makes both traverse it the same way.
		var a = { x: 0, y: 0, z: 0 }, b = { x: 1, y: 0, z: 0 };
		var c = { x: 0, y: 1, z: 0 }, d = { x: 1, y: -1, z: 0 };
		var good = [{ v0: a, v1: b, v2: c }, { v0: b, v1: a, v2: d }];
		expect(verifyOutput(good).ok).toBe(true);

		var flipped = [{ v0: a, v1: b, v2: c }, { v0: a, v1: b, v2: d }];
		var res = verifyOutput(flipped);
		expect(res.ok).toBe(false);
		expect(flag(res, "consistentWinding")).toBe(1);
	});

	it("catches a non-manifold edge shared by three triangles", function () {
		var a = { x: 0, y: 0, z: 0 }, b = { x: 1, y: 0, z: 0 };
		var res = verifyOutput([
			{ v0: a, v1: b, v2: { x: 0, y: 1, z: 0 } },
			{ v0: b, v1: a, v2: { x: 0, y: -1, z: 0 } },
			{ v0: a, v1: b, v2: { x: 0, y: 0, z: 1 } }
		]);
		expect(res.ok).toBe(false);
		expect(flag(res, "manifoldEdges")).toBe(1);
		expect(res.stats.nonManifoldEdges).toBe(1);
	});

	it("catches T-junctions — the open sleeves", function () {
		var res = verifyOutput(tJunctionSoup(8));
		expect(res.ok).toBe(false);
		expect(flag(res, "noTJunctions")).toBeGreaterThan(0);
	});
});

describe("verifyOutput: agrees with the repair passes", function () {
	it("reports the hole-free resolver's output as fully valid", function () {
		var out = resolveTJunctionsHoleFree(tJunctionSoup(8), 1e-4, 3);
		var res = verifyOutput(out);
		expect(flag(res, "noTJunctions")).toBe(0);
		expect(flag(res, "consistentWinding")).toBe(0);
		expect(res.ok).toBe(true);
	});

	it("independently confirms the legacy resolver breaks winding", function () {
		// Reached by edge-traversal parity, not by normal direction — a different
		// method from test/repairWinding.test.js, same conclusion.
		var out = resolveTJunctions(tJunctionSoup(8), 1e-4, 3);
		var res = verifyOutput(out);
		expect(flag(res, "noTJunctions")).toBe(0);
		expect(flag(res, "consistentWinding")).toBeGreaterThan(0);
		expect(res.ok).toBe(false);
	});
});

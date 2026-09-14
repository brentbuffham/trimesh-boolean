import { describe, it, expect } from "vitest";
import { finishMesh, assessRepair, violationCount, verifyOutput, resolveTJunctionsHoleFree } from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// finishMesh applies repair stages only where they measurably help.
//
// The gate is not defensive programming — it is load-bearing. Measured on the
// real Kirra shell x presplit-a boolean, hole-free T-junction resolution turns
// 4 violations into 6, trading T-junctions for degenerates and non-manifold
// edges. An ungated pipeline ships that as "repaired".
//
// These tests pin both halves: a stage that helps is applied, and a stage that
// makes things worse is refused with the input returned untouched.
// ─────────────────────────────────────────────────────────────────────────────

function tJunctionSoup(n) {
	var soup = [{ v0: { x: 0, y: 0, z: 0 }, v1: { x: 10, y: 0, z: 0 }, v2: { x: 5, y: 8, z: 0 } }];
	for (var i = 0; i < n; i++) {
		var x0 = i * 10 / n, x1 = (i + 1) * 10 / n;
		soup.push({ v0: { x: x0, y: 0, z: 0 }, v1: { x: x1, y: -3, z: 0 }, v2: { x: x1, y: 0, z: 0 } });
		soup.push({ v0: { x: x0, y: 0, z: 0 }, v1: { x: x0, y: -3, z: 0 }, v2: { x: x1, y: -3, z: 0 } });
	}
	return soup;
}

var TRI = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } };

function tetra() {
	var a = { x: 0, y: 0, z: 0 }, b = { x: 1, y: 0, z: 0 };
	var c = { x: 0, y: 1, z: 0 }, d = { x: 0, y: 0, z: 1 };
	return [
		{ v0: a, v1: c, v2: b }, { v0: a, v1: b, v2: d },
		{ v0: a, v1: d, v2: c }, { v0: b, v1: c, v2: d }
	];
}

describe("assessRepair", function () {
	it("recommends keeping a repair that reduces violations", function () {
		var before = tJunctionSoup(8);
		var after = resolveTJunctionsHoleFree(before, 1e-4, 3);
		var a = assessRepair(before, after);
		expect(a.violationsAfter).toBeLessThan(a.violationsBefore);
		expect(a.recommend).toBe("keep");
		expect(a.benefits.length).toBeGreaterThan(0);
	});

	it("recommends discarding a repair that makes things worse", function () {
		var before = [TRI];
		// Injecting a duplicate is strictly worse — it is not a repair at all.
		var after = before.concat([{ v0: TRI.v0, v1: TRI.v1, v2: TRI.v2 }]);
		var a = assessRepair(before, after);
		expect(a.recommend).toBe("discard");
		expect(a.harmful).toBe(true);
		expect(a.damage.join(" ")).toContain("noDuplicateTriangles");
	});

	it("discards a no-op rather than churning the mesh", function () {
		var a = assessRepair([TRI], [TRI]);
		expect(a.violationsAfter).toBe(a.violationsBefore);
		expect(a.recommend).toBe("discard");
	});

	it("flags a repair that tears the mesh open", function () {
		// Deleting a face of a closed tetrahedron opens it. Kirra measured this
		// class of damage: removing stitched geometry tears, welding dissolves.
		var before = tetra();
		var after = before.slice(0, 3);
		var a = assessRepair(before, after);
		expect(a.harmful).toBe(true);
		expect(a.damage.join(" ")).toContain("Opens the mesh");
	});

	it("refuses to judge volume against an unsound baseline", function () {
		// A single open triangle has garbage volume; changing it must not be
		// reported as a volume error.
		var a = assessRepair([TRI], [TRI, { v0: { x: 5, y: 5, z: 5 }, v1: { x: 6, y: 5, z: 5 }, v2: { x: 5, y: 6, z: 5 } }]);
		expect(a.damage.join(" ")).not.toContain("volume");
	});

	it("measures both soups at the same tolerance", function () {
		var before = tJunctionSoup(8);
		var after = resolveTJunctionsHoleFree(before, 1e-4, 3);
		var a = assessRepair(before, after, { tolerance: 1e-4 });
		expect(a.before.stats.triangles).toBe(before.length);
		expect(a.after.stats.triangles).toBe(after.length);
	});
});

describe("violationCount", function () {
	it("is zero for valid geometry and positive otherwise", function () {
		expect(violationCount(verifyOutput(tetra()))).toBe(0);
		expect(violationCount(verifyOutput(tJunctionSoup(8)))).toBeGreaterThan(0);
	});
});

describe("finishMesh", function () {
	it("repairs a mesh whose defects are genuinely fixable", function () {
		var res = finishMesh(tJunctionSoup(8), { tolerance: 1e-4 });
		expect(res.ok).toBe(true);
		expect(res.after.ok).toBe(true);
		expect(violationCount(res.after)).toBe(0);
		expect(res.applied).toContain("resolveTJunctionsHoleFree");
	});

	it("leaves already-valid geometry completely alone", function () {
		var soup = tetra();
		var res = finishMesh(soup);
		expect(res.ok).toBe(true);
		expect(res.applied).toEqual([]);
		expect(res.soup).toBe(soup); // same reference — nothing was rebuilt
	});

	it("returns the input untouched when every stage would make it worse", function () {
		// A stage list whose only entry is a known-bad transform.
		var soup = tetra();
		var res = finishMesh(soup, {
			stages: [{ name: "vandalise", run: function (s) { return s.concat([s[0]]); } }]
		});
		expect(res.soup).toBe(soup);
		expect(res.applied).toEqual([]);
		expect(res.skipped.length).toBe(1);
		expect(res.skipped[0].stage).toBe("vandalise");
		expect(res.skipped[0].reason).toBe("would damage the mesh");
	});

	it("force:true bypasses the gate and lets damage through", function () {
		var soup = tetra();
		var vandal = [{ name: "vandalise", run: function (s) { return s.concat([s[0]]); } }];
		var gated = finishMesh(soup, { stages: vandal });
		var forced = finishMesh(soup, { stages: vandal, force: true });
		expect(gated.applied).toEqual([]);
		expect(forced.applied).toEqual(["vandalise"]);
		expect(violationCount(forced.after)).toBeGreaterThan(violationCount(gated.after));
	});

	it("survives a stage that throws, and reports it", function () {
		var res = finishMesh(tetra(), {
			stages: [{ name: "explodes", run: function () { throw new Error("boom"); } }]
		});
		expect(res.ok).toBe(true);
		expect(res.applied).toEqual([]);
		expect(res.skipped[0].reason).toBe("threw");
		expect(res.skipped[0].violations).toContain("boom");
	});

	it("survives a stage that returns nothing", function () {
		var res = finishMesh(tetra(), {
			stages: [{ name: "empties", run: function () { return []; } }]
		});
		expect(res.applied).toEqual([]);
		expect(res.skipped[0].reason).toBe("produced nothing");
	});

	it("handles an empty soup without throwing", function () {
		var res = finishMesh([]);
		expect(res.ok).toBe(false);
		expect(res.soup).toEqual([]);
	});

	it("never increases the total violation count", function () {
		// The contract in one line: finishing is never a downgrade.
		[tetra(), tJunctionSoup(8), [TRI], tJunctionSoup(3)].forEach(function (soup) {
			var res = finishMesh(soup);
			expect(violationCount(res.after)).toBeLessThanOrEqual(violationCount(res.before));
		});
	});
});

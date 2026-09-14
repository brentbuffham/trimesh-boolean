import { describe, it, expect } from "vitest";
import { booleanAuto, verifyOutput, violationCount } from "../src/index.js";
import { createCube } from "./fixtures/meshes.js";

// ─────────────────────────────────────────────────────────────────────────────
// booleanAuto: pick the inputs and the output type, get valid geometry back.
//
// The quality properties are invariants, not options — there is no flag to
// disable correct winding. `quality` only chooses how hard to work: "strict"
// runs the gated finisher, "raw" returns the merged boolean untouched.
// ─────────────────────────────────────────────────────────────────────────────

function grid(n) {
	var s = [];
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			s.push({ v0: { x: i, y: j, z: 0 }, v1: { x: i + 1, y: j, z: 0 }, v2: { x: i + 1, y: j + 1, z: 0 } });
			s.push({ v0: { x: i, y: j, z: 0 }, v1: { x: i + 1, y: j + 1, z: 0 }, v2: { x: i, y: j + 1, z: 0 } });
		}
	}
	return s;
}

function box(cx, cy, cz, r) {
	function p(x, y, z) { return { x: x, y: y, z: z }; }
	var v = [
		p(cx - r, cy - r, cz - r), p(cx + r, cy - r, cz - r), p(cx + r, cy + r, cz - r), p(cx - r, cy + r, cz - r),
		p(cx - r, cy - r, cz + r), p(cx + r, cy - r, cz + r), p(cx + r, cy + r, cz + r), p(cx - r, cy + r, cz + r)
	];
	function q(a, b, c, d) { return [{ v0: v[a], v1: v[b], v2: v[c] }, { v0: v[a], v1: v[c], v2: v[d] }]; }
	return [].concat(q(0, 3, 2, 1), q(4, 5, 6, 7), q(0, 1, 5, 4), q(1, 2, 6, 5), q(2, 3, 7, 6), q(3, 0, 4, 7));
}

var OPS = ["subtract", "union", "intersect"];

describe("booleanAuto", function () {
	it("requires an explicit operation", function () {
		expect(function () { booleanAuto(grid(4), box(2, 2, 0, 1), null); }).toThrow(/requires an operation/);
	});

	it("produces valid geometry for every operation", function () {
		OPS.forEach(function (op) {
			var res = booleanAuto(grid(6), box(3, 3, 0, 1.5), op);
			expect(res, op).not.toBeNull();
			expect(res.soup.length, op).toBeGreaterThan(0);
			expect(res.ok, op + " should satisfy every invariant").toBe(true);
		});
	});

	it("fixes what the raw boolean leaves behind", function () {
		// The raw boolean introduces T-junctions even from clean input: a box
		// corner splits one side's diagonal while the neighbour keeps the long edge.
		var raw = booleanAuto(grid(6), box(3, 3, 0, 1.5), "subtract", { quality: "raw" });
		var strict = booleanAuto(grid(6), box(3, 3, 0, 1.5), "subtract");
		expect(violationCount(verifyOutput(raw.soup))).toBeGreaterThan(0);
		expect(violationCount(strict.report.after)).toBe(0);
	});

	it("never returns geometry worse than the raw boolean", function () {
		// The contract, across every operation.
		OPS.forEach(function (op) {
			var raw = booleanAuto(grid(6), box(3, 3, 0, 1.5), op, { quality: "raw" });
			var strict = booleanAuto(grid(6), box(3, 3, 0, 1.5), op);
			expect(
				violationCount(strict.report.after),
				op + ": finishing must not degrade the result"
			).toBeLessThanOrEqual(violationCount(verifyOutput(raw.soup)));
		});
	});

	it("quality:raw skips finishing and reports no finisher output", function () {
		var res = booleanAuto(grid(6), box(3, 3, 0, 1.5), "subtract", { quality: "raw" });
		expect(res.report).toBeNull();
		expect(res.soup.length).toBeGreaterThan(0);
	});

	it("carries the boolean stage through for callers that want it", function () {
		var res = booleanAuto(grid(6), box(3, 3, 0, 1.5), "subtract");
		expect(res.boolean).not.toBeNull();
		expect(res.boolean.groups).toBeTruthy();
		expect(res.classifier).toBeTruthy();
		expect(res.operation).toBe("subtract");
	});

	it("handles solids as well as open surfaces", function () {
		var res = booleanAuto(createCube(0, 0, 0, 2), createCube(1, 0, 0, 2), "subtract");
		expect(res).not.toBeNull();
		expect(res.soup.length).toBeGreaterThan(0);
	});

	it("returns an empty soup — not a throw — when the meshes are apart", function () {
		var res = booleanAuto(grid(4), box(500, 500, 500, 1), "intersect");
		expect(res).not.toBeNull();
		expect(res.soup).toEqual([]);
		expect(res.ok).toBe(false);
		// Provably apart, so the boolean stage should NOT flag a suspicious miss.
		expect(res.verification).toBeNull();
	});

	it("passes tolerance to both the boolean and the finisher", function () {
		var res = booleanAuto(grid(6), box(3, 3, 0, 1.5), "subtract", { tolerance: 1e-5 });
		expect(res.ok).toBe(true);
	});
});

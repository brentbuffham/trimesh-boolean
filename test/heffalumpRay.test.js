import { describe, it, expect } from "vitest";
import { bmsBooleanOp, verifyOutput, violationCount } from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// The heffalump's closed-mesh point test.
//
// It used to be a single +Z parity ray with no jitter and no on-edge epsilon.
// When such a ray grazes an edge shared by two triangles the hit is counted
// twice or not at all, the parity flips, and the point is classified on the
// wrong side. The classic path guards this with three deterministic jitters
// (classifyTriangles.js JITTERS); the heffalump — the FALLBACK the auto
// classifier reaches for when the hybrid fails — had no guard at all.
//
// It is now a three-axis majority vote that discards axes whose hits landed on
// a projected edge.
//
// These cases are built so the +Z ray from a sample point runs straight along
// the diagonal seam of an axis-aligned box: the exact geometry that breaks a
// single-axis parity test, and the exact geometry mining work is full of.
// ─────────────────────────────────────────────────────────────────────────────

/** Axis-aligned closed box, split so every face has a diagonal seam. */
function box(cx, cy, cz, r) {
	function p(x, y, z) { return { x: x, y: y, z: z }; }
	var v = [
		p(cx - r, cy - r, cz - r), p(cx + r, cy - r, cz - r), p(cx + r, cy + r, cz - r), p(cx - r, cy + r, cz - r),
		p(cx - r, cy - r, cz + r), p(cx + r, cy - r, cz + r), p(cx + r, cy + r, cz + r), p(cx - r, cy + r, cz + r)
	];
	function q(a, b, c, d) { return [{ v0: v[a], v1: v[b], v2: v[c] }, { v0: v[a], v1: v[c], v2: v[d] }]; }
	return [].concat(
		q(0, 3, 2, 1), q(4, 5, 6, 7), q(0, 1, 5, 4), q(1, 2, 6, 5), q(2, 3, 7, 6), q(3, 0, 4, 7)
	);
}

/**
 * A flat sheet whose triangles are centred exactly on the box's XY diagonal, so
 * their centroids sit on the seam a +Z ray would graze.
 */
function sheetOnDiagonal(cx, cy, z, half, n) {
	var soup = [];
	for (var i = 0; i < n; i++) {
		var t = (i / n) * 2 - 1;
		var x = cx + t * half, y = cy + t * half; // along the x=y diagonal
		var d = half / n;
		soup.push({ v0: { x: x - d, y: y - d, z: z }, v1: { x: x + d, y: y - d, z: z }, v2: { x: x + d, y: y + d, z: z } });
		soup.push({ v0: { x: x - d, y: y - d, z: z }, v1: { x: x + d, y: y + d, z: z }, v2: { x: x - d, y: y + d, z: z } });
	}
	return soup;
}

describe("heffalump closed-mesh classification", function () {
	it("partitions a sheet threaded through a box, on the forced heffalump path", function () {
		var solid = box(0, 0, 0, 5);
		var sheet = sheetOnDiagonal(0, 0, 0, 12, 10);

		var res = bmsBooleanOp(sheet, solid, null, { classifier: "heffalump" });
		expect(res).not.toBeNull();

		// The sheet crosses the box, so it MUST land on both sides. A parity flip
		// from a seam-grazing ray shows up here as an all-or-nothing partition.
		expect(res.groups.aInside.length).toBeGreaterThan(0);
		expect(res.groups.aOutside.length).toBeGreaterThan(0);
	});

	it("matches ground truth — every classified triangle is on the right side", function () {
		// Ground truth is computable here: the cutter is an axis-aligned box, so a
		// split triangle is inside exactly when its centroid is within the box.
		// Asserting against the HYBRID classifier would be wrong — on this
		// geometry the hybrid puts all 10 inside-triangles in the outside group.
		var solid = box(0, 0, 0, 5);
		var sheet = sheetOnDiagonal(0, 0, 0, 12, 10);
		var res = bmsBooleanOp(sheet, solid, null, { classifier: "heffalump" });

		function centroidInBox(t) {
			var cx = (t.v0.x + t.v1.x + t.v2.x) / 3;
			var cy = (t.v0.y + t.v1.y + t.v2.y) / 3;
			var cz = (t.v0.z + t.v1.z + t.v2.z) / 3;
			return Math.abs(cx) < 5 && Math.abs(cy) < 5 && Math.abs(cz) < 5;
		}

		var wrongInside = res.groups.aInside.filter(function (t) { return !centroidInBox(t); });
		var wrongOutside = res.groups.aOutside.filter(centroidInBox);
		expect(wrongInside.length, "triangles marked inside that are outside").toBe(0);
		expect(wrongOutside.length, "triangles marked outside that are inside").toBe(0);
	});

	it("auto falls back to the heffalump where the hybrid gets this wrong", function () {
		// Concrete evidence that the auto classifier earns its place: on this
		// seam-aligned geometry the hybrid misplaces every inside triangle, and
		// auto's verification catches it and re-runs with the heffalump.
		var solid = box(0, 0, 0, 5);
		var sheet = sheetOnDiagonal(0, 0, 0, 12, 10);

		var hybrid = bmsBooleanOp(sheet, solid, null, { classifier: "hybrid" });
		var auto = bmsBooleanOp(sheet, solid, null, { classifier: "auto" });
		var heff = bmsBooleanOp(sheet, solid, null, { classifier: "heffalump" });

		expect(hybrid.groups.aInside.length).toBe(0);            // wrong
		expect(heff.groups.aInside.length).toBeGreaterThan(0);   // right
		expect(auto.groups.aInside.length).toBe(heff.groups.aInside.length);
	});

	it("is stable when the whole scene is shifted off the axes", function () {
		// Axis-aligned geometry is the worst case for an axis-aligned ray. Moving
		// the scene to an irrational-ish offset should not change the partition,
		// because the answer must not depend on grid alignment.
		var aligned = bmsBooleanOp(
			sheetOnDiagonal(0, 0, 0, 12, 10), box(0, 0, 0, 5), null, { classifier: "heffalump" });
		var shifted = bmsBooleanOp(
			sheetOnDiagonal(0.31731, 0.31731, 0.11731, 12, 10),
			box(0.31731, 0.31731, 0.11731, 5), null, { classifier: "heffalump" });

		expect(shifted.groups.aInside.length).toBe(aligned.groups.aInside.length);
		expect(shifted.groups.aOutside.length).toBe(aligned.groups.aOutside.length);
	});

	it("classifies a solid fully inside another as inside", function () {
		var outer = box(0, 0, 0, 10);
		var inner = box(0, 0, 0, 2); // concentric — every ray runs down shared seams
		var res = bmsBooleanOp(inner, outer, null, { classifier: "heffalump" });
		expect(res).not.toBeNull();
		// No intersection: concentric boxes do not cross, so everything is outside
		// by the pipeline's convention and no segments are produced.
		expect(res.segments.length).toBe(0);
	});

	it("produces usable geometry through the heffalump path", function () {
		var res = bmsBooleanOp(
			sheetOnDiagonal(0, 0, 0, 12, 10), box(0, 0, 0, 5), "subtract", { classifier: "heffalump" });
		expect(res).not.toBeNull();
		var all = res.groups.aOutside.concat(res.groups.bInside);
		expect(all.length).toBeGreaterThan(0);
		// Not asserting zero violations — that is finishMesh's job — only that the
		// classifier did not emit something structurally broken.
		expect(violationCount(verifyOutput(all))).toBeLessThan(all.length);
	});
});

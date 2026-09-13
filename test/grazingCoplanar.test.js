import { describe, it, expect } from "vitest";
import { bmsIntersect, bmsBooleanOp, triTriIntersection } from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// Regression: shallow-angle and coplanar A-vs-B pairs must produce a barrier.
//
// Before 0.6.6 triTriIntersection rejected every pair with |nA.nB| > 0.9999 —
// i.e. every crossing shallower than ~0.81 degrees — even though the orient3d
// sign tests had already PROVEN the triangles straddle each other. Coplanar
// overlaps were dropped too (Moller cannot express a polygon as a segment).
// Both produced ZERO segments, and bmsBooleanOp then early-returned a
// confident "no intersection" with verification:null. Bench-face-vs-cut
// geometry lives exactly in that dead zone.
// ─────────────────────────────────────────────────────────────────────────────

// Unit square [ox, ox+10] x [oy, oy+10] on z = 0, as two triangles.
function quad(ox, oy) {
	return [
		{ v0: { x: ox, y: oy, z: 0 }, v1: { x: ox + 10, y: oy, z: 0 }, v2: { x: ox + 10, y: oy + 10, z: 0 } },
		{ v0: { x: ox, y: oy, z: 0 }, v1: { x: ox + 10, y: oy + 10, z: 0 }, v2: { x: ox, y: oy + 10, z: 0 } }
	];
}

// Tilt about x = 7.5 (the centre of the x-overlap) so the sheet genuinely
// CROSSES z = 0 inside the overlap region rather than floating clear of it.
function tilt(tris, slope) {
	return tris.map(function (t) {
		function f(v) { return { x: v.x, y: v.y, z: v.z + (v.x - 7.5) * slope }; }
		return { v0: f(t.v0), v1: f(t.v1), v2: f(t.v2) };
	});
}

describe("grazing + coplanar A-vs-B barriers", function () {
	it("emits segments for crossings far shallower than the old 0.81 degree gate", function () {
		// Every one of these was silently dropped before 0.6.6.
		[1e-6, 1e-5, 1e-4, 1e-3, 1e-2].forEach(function (slope) {
			var r = bmsIntersect(quad(0, 0), tilt(quad(5, 5), slope));
			expect(r.segments.length).toBeGreaterThan(0);
		});
	});

	it("emits overlap-polygon segments for exactly coplanar sheets", function () {
		var r = bmsIntersect(quad(0, 0), quad(5, 5));
		expect(r.segments.length).toBeGreaterThan(0);
		expect(r.coplanarPairs).toBeGreaterThan(0);
	});

	it("leaves no gap between the coplanar path and the Moller path", function () {
		// The two paths must overlap in coverage, not merely abut: sweeping the
		// angle across the handover must never hit a slope with zero segments.
		[1e-9, 1e-8, 1e-7, 1e-6, 1e-5].forEach(function (slope) {
			var r = bmsIntersect(quad(0, 0), tilt(quad(5, 5), slope));
			expect(r.segments.length).toBeGreaterThan(0);
		});
	});

	it("keeps shallow-crossing geometry accurate, not merely non-empty", function () {
		// A on z = 0; B tilted about x = 7.5 => the true crossing line is x = 7.5, z = 0.
		var A = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 20, y: 0, z: 0 }, v2: { x: 20, y: 20, z: 0 } };
		[1e-2, 1e-4, 1e-6].forEach(function (a) {
			var B = {
				v0: { x: 0, y: 1, z: (0 - 7.5) * a },
				v1: { x: 20, y: 1, z: (20 - 7.5) * a },
				v2: { x: 20, y: 19, z: (20 - 7.5) * a }
			};
			var seg = triTriIntersection(A, B);
			expect(seg).not.toBeNull();
			expect(Math.abs(seg.p0.x - 7.5)).toBeLessThan(1e-9);
			expect(Math.abs(seg.p1.x - 7.5)).toBeLessThan(1e-9);
			expect(Math.abs(seg.p0.z)).toBeLessThan(1e-9);
			expect(Math.abs(seg.p1.z)).toBeLessThan(1e-9);
		});
	});

	it("opts out of coplanar emission with { coplanar: false }", function () {
		var r = bmsIntersect(quad(0, 0), quad(5, 5), { coplanar: false });
		expect(r.segments.length).toBe(0);
		expect(r.coplanarPairs).toBe(0);
	});

	it("flags a zero-segment result when the bounding boxes overlap", function () {
		// Coplanar emission disabled => two overlapping sheets yield no segments.
		// That empty result must NOT be reported as a confident non-intersection.
		var res = bmsBooleanOp(quad(0, 0), quad(5, 5), "union", { coplanar: false });
		expect(res.segments.length).toBe(0);
		expect(res.verification).not.toBeNull();
		expect(res.verification.ok).toBe(false);
		expect(res.verification.failures[0].check).toBe("no-segments-but-bboxes-overlap");
	});

	it("stays silent for sheets that merely abut edge-to-edge", function () {
		// Touching is a legitimate zero-segment result, not a suspected miss.
		var res = bmsBooleanOp(quad(0, 0), quad(10, 0), "union", { coplanar: false });
		expect(res.segments.length).toBe(0);
		expect(res.verification).toBeNull();
	});

	it("stays silent for meshes that genuinely do not overlap", function () {
		var res = bmsBooleanOp(quad(0, 0), quad(1000, 1000), "union", {});
		expect(res.segments.length).toBe(0);
		expect(res.verification).toBeNull();
	});
});

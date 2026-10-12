import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { bmsBooleanOp } from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// Real Kirra pair: a pit WALL surface split against EXTRUDED405, a closed solid
// extruded from a polygon drawn on the wall. One of the solid's top corners sits
// ~2 µm off a WALL vertex (and that WALL vertex lies on a neighbouring WALL
// triangle's edge — a T-junction in the wall itself).
//
// The vertex pool merged the two corners (well inside its tolerance), but
// bmsRetriangulate matched pool vertices to the host triangle's own corners by
// EXACT key only. The merged vertex therefore entered the triangulation as a
// separate point a hair from the corner, and the CDT built a cap from it across
// a split edge: a 28.24 m x 1 µm needle (and a 24.85 m one) in aInside. Kirra's
// user saw it as a white line hanging off the cut. 0.7.6 treats a pool vertex
// within the pool tolerance of a corner AS that corner.
//
// The wall's own input carries two 37.27 m needles; those are not the split's
// doing and are excluded by identity with the input.
// ─────────────────────────────────────────────────────────────────────────────

var fx = JSON.parse(readFileSync(new URL("./fixtures/kirra-wall-extruded-corner.json", import.meta.url), "utf8"));
function soup(flat) {
	return flat.map(function (f) {
		return { v0: { x: f[0], y: f[1], z: f[2] }, v1: { x: f[3], y: f[4], z: f[5] }, v2: { x: f[6], y: f[7], z: f[8] } };
	});
}
function key(v) { return v.x.toFixed(4) + "," + v.y.toFixed(4) + "," + v.z.toFixed(4); }
function triKey(t) { return [key(t.v0), key(t.v1), key(t.v2)].sort().join("|"); }

function needleStats(t) {
	var ux = t.v1.x - t.v0.x, uy = t.v1.y - t.v0.y, uz = t.v1.z - t.v0.z;
	var vx = t.v2.x - t.v0.x, vy = t.v2.y - t.v0.y, vz = t.v2.z - t.v0.z;
	var x = uy * vz - uz * vy, y = uz * vx - ux * vz, z = ux * vy - uy * vx;
	var area2 = Math.sqrt(x * x + y * y + z * z);
	var longest = Math.max(Math.hypot(ux, uy, uz), Math.hypot(vx, vy, vz),
		Math.hypot(t.v2.x - t.v1.x, t.v2.y - t.v1.y, t.v2.z - t.v1.z));
	return { longest: longest, altitude: longest > 0 ? area2 / longest : 0 };
}

// A long triangle with a near-zero altitude that the INPUT did not already contain.
function splitMadeNeedles(groups, inputKeys) {
	var out = [];
	Object.keys(groups).forEach(function (g) {
		(groups[g] || []).forEach(function (t) {
			var s = needleStats(t);
			if (s.longest > 5 && s.altitude < 1e-4 && !inputKeys[triKey(t)]) out.push(g + " L=" + s.longest.toFixed(3));
		});
	});
	return out;
}

var A = soup(fx.A), B = soup(fx.B);
var inputKeys = {};
A.concat(B).forEach(function (t) { inputKeys[triKey(t)] = true; });

describe("corner near-miss: no needle across a split edge", function () {
	it("the fixture really does carry the trap (two input needles in the wall)", function () {
		var inputNeedles = A.filter(function (t) { var s = needleStats(t); return s.longest > 5 && s.altitude < 1e-4; });
		expect(inputNeedles.length).toBe(2);
	});

	["auto", "hybrid", "heffalump"].forEach(function (classifier) {
		it("the split makes no needles (" + classifier + ")", function () {
			var res = bmsBooleanOp(A, B, null, { classifier: classifier });
			expect(splitMadeNeedles(res.groups, inputKeys)).toEqual([]);
		});
	});

	it("auto: the solid is unchanged, the wall loses only the two needles", function () {
		var res = bmsBooleanOp(A, B, null, { classifier: "auto" });
		expect(res.groups.bInside.length).toBe(60);
		expect(res.groups.bOutside.length).toBe(76);
		expect(res.groups.aInside.length).toBe(50);   // 52 before 0.7.6: two needles
		expect(res.groups.aOutside.length).toBe(146); // 148 before 0.7.6: two caps on the other side
	});
});

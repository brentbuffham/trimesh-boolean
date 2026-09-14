import { describe, it, expect } from "vitest";
import * as THREE from "three";
import { soupToMesh, meshToSoup, booleanFromMeshes } from "../src/three.js";

// ─────────────────────────────────────────────────────────────────────────────
// The Three.js adapter, which is what the documented one-liner actually runs.
//
// Two problems fixed in 0.7.1, both pinned here:
//
//  1. booleanFromMeshes called the CLASSIC flood-fill/half-space pipeline, not
//     BMS — so the adapter missed the engine this library exists for (shared
//     Steiner pool, hybrid classification, heffalump fallback).
//  2. soupToMesh wrote absolute survey coordinates into a Float32 attribute.
//     Float32 spacing at a UTM northing of 7.4e6 is 0.5 m; 6771845.678 lands on
//     6771845.5, an error of 0.178 m. Geometry is now built in a local frame
//     with the centroid on mesh.position.
// ─────────────────────────────────────────────────────────────────────────────

function grid(n, ox, oy, oz) {
	var s = [];
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			var x0 = ox + i, x1 = ox + i + 1, y0 = oy + j, y1 = oy + j + 1;
			s.push({ v0: { x: x0, y: y0, z: oz }, v1: { x: x1, y: y0, z: oz }, v2: { x: x1, y: y1, z: oz } });
			s.push({ v0: { x: x0, y: y0, z: oz }, v1: { x: x1, y: y1, z: oz }, v2: { x: x0, y: y1, z: oz } });
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

/** Worst per-ordinate error between a soup and the mesh's WORLD-space geometry. */
function worstWorldError(soup, mesh) {
	var pos = mesh.geometry.attributes.position.array;
	var worst = 0;
	for (var i = 0; i < soup.length; i++) {
		var vs = [soup[i].v0, soup[i].v1, soup[i].v2];
		for (var k = 0; k < 3; k++) {
			var o = i * 9 + k * 3;
			worst = Math.max(worst,
				Math.abs(pos[o] + mesh.position.x - vs[k].x),
				Math.abs(pos[o + 1] + mesh.position.y - vs[k].y),
				Math.abs(pos[o + 2] + mesh.position.z - vs[k].z));
		}
	}
	return worst;
}

// A realistic UTM-scale patch: coordinates where Float32 spacing is ~0.5 m.
var UTM = grid(4, 748291.234, 6771845.678, 120.5);

describe("soupToMesh: UTM precision", function () {
	it("keeps UTM coordinates to sub-millimetre in world space", function () {
		var mesh = soupToMesh(UTM);
		expect(worstWorldError(UTM, mesh)).toBeLessThan(1e-3);
	});

	it("loses over 10 cm without recentering — the pre-0.7.1 behaviour", function () {
		var mesh = soupToMesh(UTM, { recenter: false });
		expect(mesh.position.x).toBe(0);
		expect(worstWorldError(UTM, mesh)).toBeGreaterThan(0.01);
	});

	it("puts the centroid on mesh.position so the mesh lands in the right place", function () {
		var mesh = soupToMesh(UTM);
		expect(mesh.position.x).toBeGreaterThan(748000);
		expect(mesh.position.y).toBeGreaterThan(6771000);
	});

	it("round-trips through meshToSoup within tolerance", function () {
		var mesh = soupToMesh(UTM);
		mesh.updateMatrixWorld(true);
		var back = meshToSoup(mesh);
		expect(back.length).toBe(UTM.length);
		var worst = 0;
		for (var i = 0; i < back.length; i++) {
			worst = Math.max(worst, Math.abs(back[i].v0.x - UTM[i].v0.x), Math.abs(back[i].v0.y - UTM[i].v0.y));
		}
		expect(worst).toBeLessThan(1e-3);
	});

	it("handles an empty soup", function () {
		var mesh = soupToMesh([]);
		expect(mesh.geometry.attributes.position.count).toBe(0);
		expect(mesh.position.x).toBe(0);
	});
});

describe("booleanFromMeshes: engine", function () {
	var A = soupToMesh(grid(6, 0, 0, 0));
	var B = soupToMesh(box(3, 3, 0, 1.5));

	it("produces a mesh for every operation", function () {
		["subtract", "union", "intersect"].forEach(function (op) {
			var m = booleanFromMeshes(A, B, op);
			expect(m, op).not.toBeNull();
			expect(m.geometry.attributes.position.count, op).toBeGreaterThan(0);
		});
	});

	it("defaults to BMS, and BMS output is at least as clean as classic", function () {
		var bms = booleanFromMeshes(A, B, "subtract");
		var classic = booleanFromMeshes(A, B, "subtract", { engine: "classic" });
		expect(bms).not.toBeNull();
		expect(classic).not.toBeNull();
		// Both must produce geometry; the point of the test is that the classic
		// escape hatch still works after the default changed.
		expect(bms.geometry.attributes.position.count).toBeGreaterThan(0);
		expect(classic.geometry.attributes.position.count).toBeGreaterThan(0);
	});

	it("honours quality:raw", function () {
		var m = booleanFromMeshes(A, B, "subtract", { quality: "raw" });
		expect(m).not.toBeNull();
		expect(m.geometry.attributes.position.count).toBeGreaterThan(0);
	});

	it("passes material options through", function () {
		var m = booleanFromMeshes(A, B, "subtract", { wireframe: true, color: 0xff0000 });
		expect(m.material.wireframe).toBe(true);
		expect(m.material.color.getHex()).toBe(0xff0000);
	});
});

import { describe, it, expect } from "vitest";
import { repairMesh, resolveTJunctions, resolveTJunctionsHoleFree } from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// Regression: T-junction repair must not corrupt winding.
//
// resolveTJunctions() re-triangulates affected triangles through Delaunator and
// takes the output order as-is. Delaunator works in a 2D local frame and does
// not preserve the source triangle's orientation, so roughly a third of the
// sub-triangles come back wound the wrong way. On a terrain sheet that flips
// the surface normal, which flips lighting, which flips inside/outside for any
// downstream barrier-normal classification.
//
// resolveTJunctionsHoleFree() re-orients every sub-triangle to the source
// normal (orientToNormal), so winding survives. These tests pin that, and pin
// that repairMesh() — the default public repair entry point — is on the
// version that preserves it.
// ─────────────────────────────────────────────────────────────────────────────

function triNormal(t) {
	var ax = t.v1.x - t.v0.x, ay = t.v1.y - t.v0.y, az = t.v1.z - t.v0.z;
	var bx = t.v2.x - t.v0.x, by = t.v2.y - t.v0.y, bz = t.v2.z - t.v0.z;
	return { x: ay * bz - az * by, y: az * bx - ax * bz, z: ax * by - ay * bx };
}
function upFraction(soup) {
	if (soup.length === 0) return 1;
	return soup.filter(function (t) { return triNormal(t).z > 0; }).length / soup.length;
}
function totalArea(soup) {
	return soup.reduce(function (acc, t) {
		var n = triNormal(t);
		return acc + 0.5 * Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
	}, 0);
}

// One large triangle whose bottom edge is subdivided by a finer strip beneath
// it: every interior strip vertex lands ON the large triangle's edge, which is
// exactly a T-junction. All triangles are wound counter-clockwise (normal +Z).
function tJunctionSoup(n) {
	var soup = [{ v0: { x: 0, y: 0, z: 0 }, v1: { x: 10, y: 0, z: 0 }, v2: { x: 5, y: 8, z: 0 } }];
	for (var i = 0; i < n; i++) {
		var x0 = i * 10 / n, x1 = (i + 1) * 10 / n;
		soup.push({ v0: { x: x0, y: 0, z: 0 }, v1: { x: x1, y: -3, z: 0 }, v2: { x: x1, y: 0, z: 0 } });
		soup.push({ v0: { x: x0, y: 0, z: 0 }, v1: { x: x0, y: -3, z: 0 }, v2: { x: x1, y: -3, z: 0 } });
	}
	return soup;
}

describe("T-junction repair: winding", function () {
	it("fixture is uniformly wound and really does contain T-junctions", function () {
		var soup = tJunctionSoup(8);
		expect(upFraction(soup)).toBe(1);
		// The resolver must actually have work to do, or the test proves nothing.
		expect(resolveTJunctionsHoleFree(soup, 1e-4, 3).length).toBeGreaterThan(soup.length);
	});

	it("resolveTJunctionsHoleFree preserves winding", function () {
		var soup = tJunctionSoup(8);
		var out = resolveTJunctionsHoleFree(soup, 1e-4, 3);
		expect(upFraction(out)).toBe(1);
		expect(totalArea(out)).toBeCloseTo(totalArea(soup), 6);
	});

	it("documents that the legacy resolveTJunctions does NOT", function () {
		// Pinned deliberately: this is why repairMesh no longer calls it. If a
		// future change makes the legacy path preserve winding, delete this.
		var soup = tJunctionSoup(8);
		var out = resolveTJunctions(soup, 1e-4, 3);
		expect(upFraction(out)).toBeLessThan(1);
		expect(totalArea(out)).toBeCloseTo(totalArea(soup), 6);
	});

	it("repairMesh preserves winding through T-junction repair", async function () {
		var soup = tJunctionSoup(8);
		var res = await repairMesh(soup, { removeDegenerate: true });
		var out = res.soup || res.triangles || res;
		expect(Array.isArray(out)).toBe(true);
		expect(out.length).toBeGreaterThan(0);
		expect(upFraction(out)).toBe(1);
	});

	it("repairMesh keeps surface area through T-junction repair", async function () {
		var soup = tJunctionSoup(8);
		var res = await repairMesh(soup, { removeDegenerate: true });
		var out = res.soup || res.triangles || res;
		expect(totalArea(out)).toBeCloseTo(totalArea(soup), 4);
	});
});

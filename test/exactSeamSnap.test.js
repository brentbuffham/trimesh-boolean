/**
 * Exact coincident-sheet snapping (0.6.1 opt-in seam repair).
 *
 * The cell-complex classifier leaks when two coplanar seam faces are
 * NEAR-coincident (a hair apart) — the radial fan can glue inside↔outside. The
 * fix is upstream: snap those pairs to TRUE coincidence so the facet-merge
 * cancels the opposite coplanar sub-faces. These tests lock the primitive and
 * prove it is a no-op on clean input (no regression to the 0.6.0 default path).
 */

import { describe, it, expect } from "vitest";
import { snapCoincidentSheets, bmsSelfResolve } from "../src/bms/bmsSelfArrange.js";
import { extractByCellComplex, windingNumber } from "../src/index.js";
import { createCube } from "./fixtures/meshes.js";
import { countOpenEdges, vKey } from "../src/util/math.js";
import { orientSolid } from "../src/normals/orientSolid.js";

function keySet(t) {
	return [vKey(t.v0), vKey(t.v1), vKey(t.v2)].sort().join("#");
}

describe("snapCoincidentSheets — exact coincident-sheet snap", function () {

	it("snaps a NEAR-coincident coplanar pair to bit-identical vertices", function () {
		var A = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } };
		// A' shifted 0.001 in-plane — within tol, not exactly coincident.
		var Ap = { v0: { x: 0.001, y: 0.001, z: 0 }, v1: { x: 1.001, y: 0.001, z: 0 }, v2: { x: 0.001, y: 1.001, z: 0 } };
		expect(keySet(A)).not.toBe(keySet(Ap)); // distinct before

		var res = snapCoincidentSheets([A, Ap], 0.01);
		expect(res.coincidentPairs).toBe(1);
		expect(res.snappedVertices).toBeGreaterThan(0);
		// After the snap the two faces are the SAME facet (bit-identical vertex set).
		expect(keySet(res.soup[0])).toBe(keySet(res.soup[1]));
	});

	it("is a NO-OP on a clean mesh (no coincident faces)", function () {
		var cube = createCube(0, 0, 0, 2);
		var res = snapCoincidentSheets(cube, 0.01);
		expect(res.coincidentPairs).toBe(0);
		expect(res.snappedVertices).toBe(0);
		expect(res.soup).toBe(cube); // returned by reference, untouched
	});

	it("cell complex: a NEAR-coincident opposite pair cancels AFTER the snap", function () {
		// Cube + a near-coincident copy and reverse of face 0 (offset 0.0008).
		// Net multiplicity at that location after the snap = +1 (orig) +1 (copy)
		// −1 (reverse) = +1, so the cube is recovered watertight, volume 8.
		var cube = createCube(0, 0, 0, 2);
		var f = cube[0];
		var off = 0.0008;
		var copy = {
			v0: { x: f.v0.x + off, y: f.v0.y + off, z: f.v0.z },
			v1: { x: f.v1.x + off, y: f.v1.y + off, z: f.v1.z },
			v2: { x: f.v2.x + off, y: f.v2.y + off, z: f.v2.z }
		};
		var rev = { v0: copy.v0, v1: copy.v2, v2: copy.v1 };
		var snapped = snapCoincidentSheets(cube.concat([copy, rev]), 0.01);
		expect(snapped.coincidentPairs).toBeGreaterThan(0);

		var wf = function (x, y, z) { return windingNumber({ x: x, y: y, z: z }, cube); };
		var res = extractByCellComplex(snapped.soup, wf, { threshold: 1 });
		expect(countOpenEdges(res.kept).openEdges).toBe(0);
		expect(Math.abs(orientSolid(res.kept).diagnostics.signedVolume - 8)).toBeLessThan(1e-6);
	});
});

describe("bmsSelfResolve — exactSeamSnap opt-in is back-compatible", function () {

	it("exactSeamSnap:true does not change a clean solid (no leak → snap never runs)", function () {
		var cube = createCube(0, 0, 0, 2);
		var off = bmsSelfResolve(cube, {});
		var on = bmsSelfResolve(cube, { exactSeamSnap: true });
		// Clean input never leaks, so the opt-in path is never entered.
		expect(off.changed).toBe(on.changed);
		if (on.changed) {
			expect(countOpenEdges(on.soup).openEdges).toBe(countOpenEdges(off.soup).openEdges);
		}
		expect(on.diagnostics.exactSeamSnap).toBeUndefined();
	});
});

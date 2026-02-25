/**
 * @module boolean/splitTriangles
 *
 * CDT-based re-triangulation of crossed triangles. When a triangle is
 * crossed by intersection segments from the other mesh, all segment
 * endpoints are inserted as Steiner points and Constrained Delaunay
 * Triangulation is used to produce sub-triangles that honour the
 * intersection edges.
 */

import Delaunator from "delaunator";
import Constrainautor from "@kninnug/constrainautor";

/**
 * Re-triangulate a crossed triangle by inserting all intersection segment
 * endpoints as Steiner points and running Constrained Delaunay Triangulation.
 *
 * This handles the case where a large triangle is crossed by many small
 * triangles on the other surface, producing many short segments whose
 * endpoints lie interior to the large triangle.
 *
 * Steps:
 *   1. Build local 2D frame + barycentric validator
 *   2. Collect unique segment endpoints, validate inside triangle
 *   3. Run Delaunator, constrain segment edges (NOT boundary edges)
 *   4. Filter sub-triangles by barycentric centroid test + area check
 *
 * @param {{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }} tri - Parent triangle
 * @param {Array<{ p0: {x,y,z}, p1: {x,y,z} }>} segments - Intersection segments crossing this triangle
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Sub-triangles, or [tri] on failure
 */
export function retriangulateWithSteinerPoints(tri, segments) {
	if (!segments || segments.length === 0) return [tri];

	// -- Step 1: Build local 2D coordinate frame on triangle plane --

	var e1x = tri.v1.x - tri.v0.x;
	var e1y = tri.v1.y - tri.v0.y;
	var e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x;
	var e2y = tri.v2.y - tri.v0.y;
	var e2z = tri.v2.z - tri.v0.z;

	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return [tri];
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;

	var lnx = e1y * e2z - e1z * e2y;
	var lny = e1z * e2x - e1x * e2z;
	var lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return [tri];

	var lvx = lny * luz - lnz * luy;
	var lvy = lnz * lux - lnx * luz;
	var lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return [tri];
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	var lox = tri.v0.x, loy = tri.v0.y, loz = tri.v0.z;

	/**
	 * Project a 3D point to local 2D.
	 * @param {{ x: number, y: number, z: number }} p
	 * @returns {number[]} [u, v]
	 */
	function toLocal(p) {
		var dx = p.x - lox, dy = p.y - loy, dz = p.z - loz;
		return [dx * lux + dy * luy + dz * luz, dx * lvx + dy * lvy + dz * lvz];
	}

	// Triangle vertices in local 2D
	var l0 = toLocal(tri.v0); // (0, 0) by construction
	var l1 = toLocal(tri.v1);
	var l2 = toLocal(tri.v2);

	// Barycentric coordinate calculator in local 2D
	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return [tri]; // degenerate

	/**
	 * Compute barycentric coordinates [u, v, w]; inside when all >= 0.
	 * @param {number} pu
	 * @param {number} pv
	 * @returns {number[]}
	 */
	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	// Triangle area in local 2D (for sub-triangle area filtering)
	var triArea2D = Math.abs(baryD) * 0.5;
	var MIN_AREA_RATIO = 1e-8; // discard sub-tris smaller than this fraction of original

	// -- Step 2: Collect unique segment endpoints, validate inside triangle --

	var PREC = 6;
	var seen = {};
	var v0Key = tri.v0.x.toFixed(PREC) + "," + tri.v0.y.toFixed(PREC) + "," + tri.v0.z.toFixed(PREC);
	var v1Key = tri.v1.x.toFixed(PREC) + "," + tri.v1.y.toFixed(PREC) + "," + tri.v1.z.toFixed(PREC);
	var v2Key = tri.v2.x.toFixed(PREC) + "," + tri.v2.y.toFixed(PREC) + "," + tri.v2.z.toFixed(PREC);
	seen[v0Key] = true;
	seen[v1Key] = true;
	seen[v2Key] = true;

	var BARY_TOL = -1e-4; // allow points slightly outside due to float precision
	var validSteiner = [];

	// Track segment endpoint keys -> index in pts array for constraining segment edges
	var keyToIndex = {};
	keyToIndex[v0Key] = 0;
	keyToIndex[v1Key] = 1;
	keyToIndex[v2Key] = 2;

	for (var s = 0; s < segments.length; s++) {
		var seg = segments[s];
		var endpts = [seg.p0, seg.p1];
		for (var e = 0; e < 2; e++) {
			var p = endpts[e];
			var key = p.x.toFixed(PREC) + "," + p.y.toFixed(PREC) + "," + p.z.toFixed(PREC);
			if (seen[key]) continue;
			seen[key] = true;

			// Validate: must be inside the triangle (barycentric check)
			var lp = toLocal(p);
			var bc = baryCoords(lp[0], lp[1]);
			if (bc[0] < BARY_TOL || bc[1] < BARY_TOL || bc[2] < BARY_TOL) {
				continue; // outside triangle -- discard
			}

			validSteiner.push({ x: p.x, y: p.y, z: p.z, key: key });
		}
	}

	if (validSteiner.length === 0) return [tri];

	// Build pts array: indices 0,1,2 = original vertices, 3+ = Steiner
	var pts = [
		{ x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
		{ x: tri.v1.x, y: tri.v1.y, z: tri.v1.z },
		{ x: tri.v2.x, y: tri.v2.y, z: tri.v2.z }
	];
	for (var vi = 0; vi < validSteiner.length; vi++) {
		keyToIndex[validSteiner[vi].key] = pts.length;
		pts.push(validSteiner[vi]);
	}

	// -- Step 3: Project all to local 2D, run Delaunator --

	var n = pts.length;
	var coords = new Float64Array(n * 2);
	for (var j = 0; j < n; j++) {
		var lj = toLocal(pts[j]);
		coords[j * 2] = lj[0];
		coords[j * 2 + 1] = lj[1];
	}

	var del;
	try {
		del = new Delaunator(coords);
	} catch (de) {
		return [tri];
	}

	// Constrain segment edges (NOT boundary edges -- those are the convex hull already).
	// Boundary constraints are harmful when Steiner points lie on boundary edges,
	// because constrainOne(0,1) would skip intermediate points on edge 0->1.
	try {
		var con = new Constrainautor(del);
		for (var cs = 0; cs < segments.length; cs++) {
			var cSeg = segments[cs];
			var k0 = cSeg.p0.x.toFixed(PREC) + "," + cSeg.p0.y.toFixed(PREC) + "," + cSeg.p0.z.toFixed(PREC);
			var k1 = cSeg.p1.x.toFixed(PREC) + "," + cSeg.p1.y.toFixed(PREC) + "," + cSeg.p1.z.toFixed(PREC);
			var idx0 = keyToIndex[k0];
			var idx1 = keyToIndex[k1];
			if (idx0 !== undefined && idx1 !== undefined && idx0 !== idx1) {
				try { con.constrainOne(idx0, idx1); } catch (ce2) { /* skip */ }
			}
		}
	} catch (ce) {
		// Constrainautor init failed -- unconstrained Delaunator is still usable
	}

	// -- Step 4: Filter sub-triangles by barycentric centroid + area check --

	var result = [];
	var delTris = del.triangles;
	for (var k = 0; k < delTris.length; k += 3) {
		var a = delTris[k], b = delTris[k + 1], c = delTris[k + 2];

		// Centroid in local 2D
		var cx = (coords[a * 2] + coords[b * 2] + coords[c * 2]) / 3;
		var cy = (coords[a * 2 + 1] + coords[b * 2 + 1] + coords[c * 2 + 1]) / 3;

		// Barycentric centroid test (more tolerant than ray-cast PIP for boundary)
		var cBary = baryCoords(cx, cy);
		if (cBary[0] < -1e-6 || cBary[1] < -1e-6 || cBary[2] < -1e-6) continue;

		// Area check -- discard degenerate sub-triangles
		var au = coords[a * 2], av = coords[a * 2 + 1];
		var bu = coords[b * 2], bv = coords[b * 2 + 1];
		var cu = coords[c * 2], cv = coords[c * 2 + 1];
		var subArea = Math.abs((bu - au) * (cv - av) - (cu - au) * (bv - av)) * 0.5;
		if (subArea < triArea2D * MIN_AREA_RATIO) continue;

		result.push({
			v0: pts[a],
			v1: pts[b],
			v2: pts[c]
		});
	}

	if (result.length === 0) {
		return [tri];
	}

	return result;
}

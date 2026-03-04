/**
 * @module boolean/splitTriangles
 *
 * Re-triangulation of crossed triangles. Primary method is fan triangulation:
 * chain intersection segments into an ordered polyline, then fan from each
 * original vertex to sequential chain points. Falls back to CDT when the
 * geometry is too complex (multiple polylines, same-edge entry/exit).
 */

import Delaunator from "delaunator";
import Constrainautor from "@kninnug/constrainautor";
import { chainSegments } from "../intersect/chainSegments.js";
import { distSq3 } from "../util/math.js";

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

/**
 * Fan-based re-triangulation of a crossed triangle.
 *
 * Chains the intersection segments into an ordered polyline, identifies
 * which original vertices are on which side of the polyline, then creates
 * fan triangles from each original vertex to sequential chain points.
 * Every sub-triangle has at least 1 original vertex — no all-Steiner
 * "pocket" triangles.
 *
 * Two sub-triangle types:
 *   - Fan triangle:       1 original vert + 2 sequential chain points
 *   - Transition triangle: 2 original verts + 1 chain point (where fans meet)
 *
 * Falls back to CDT ({@link retriangulateWithSteinerPoints}) for:
 *   - Multiple disconnected polylines
 *   - Entry/exit on the same edge
 *   - Chaining failure
 *
 * @param {{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }} tri - Parent triangle
 * @param {Array<{ p0: {x,y,z}, p1: {x,y,z} }>} segments - Intersection segments
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Sub-triangles
 */
export function fanTriangulate(tri, segments) {
	if (!segments || segments.length === 0) return [tri];

	// Step 1) Estimate avg segment length for chaining threshold
	var avgLen = 0;
	for (var si = 0; si < segments.length; si++) {
		var dx = segments[si].p1.x - segments[si].p0.x;
		var dy = segments[si].p1.y - segments[si].p0.y;
		var dz = segments[si].p1.z - segments[si].p0.z;
		avgLen += Math.sqrt(dx * dx + dy * dy + dz * dz);
	}
	avgLen /= segments.length;
	var chains = chainSegments(segments, avgLen * 0.1);

	// Step 2) Fallback to CDT for multi-chain or empty-chain cases
	if (chains.length !== 1 || chains[0].length < 2) {
		return retriangulateWithSteinerPoints(tri, segments);
	}
	var chain = chains[0];

	// Step 3) Build local 2D frame for barycentric classification
	var verts = [tri.v0, tri.v1, tri.v2];
	var e1x = tri.v1.x - tri.v0.x, e1y = tri.v1.y - tri.v0.y, e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x, e2y = tri.v2.y - tri.v0.y, e2z = tri.v2.z - tri.v0.z;
	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return retriangulateWithSteinerPoints(tri, segments);
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;
	var lnx = e1y * e2z - e1z * e2y, lny = e1z * e2x - e1x * e2z, lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return retriangulateWithSteinerPoints(tri, segments);
	var lvx = lny * luz - lnz * luy, lvy = lnz * lux - lnx * luz, lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return retriangulateWithSteinerPoints(tri, segments);
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	function toLocal(p) {
		var ddx = p.x - tri.v0.x, ddy = p.y - tri.v0.y, ddz = p.z - tri.v0.z;
		return [ddx * lux + ddy * luy + ddz * luz, ddx * lvx + ddy * lvy + ddz * lvz];
	}
	var l0 = toLocal(tri.v0), l1 = toLocal(tri.v1), l2 = toLocal(tri.v2);
	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return retriangulateWithSteinerPoints(tri, segments);

	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	// Step 4) Identify which edges the entry (chain[0]) and exit (chain[N]) lie on
	// bc[0] near 0 → on edge v1-v2 (opposite v0)
	// bc[1] near 0 → on edge v0-v2 (opposite v1)
	// bc[2] near 0 → on edge v0-v1 (opposite v2)
	var EDGE_TOL = 0.02;
	var VERTEX_TOL = 0.02;
	var entryLocal = toLocal(chain[0]);
	var exitLocal = toLocal(chain[chain.length - 1]);
	var entryBary = baryCoords(entryLocal[0], entryLocal[1]);
	var exitBary = baryCoords(exitLocal[0], exitLocal[1]);

	// Step 4a) If a chain endpoint is AT an original vertex (two bary coords near 0),
	// the intersection passes through a vertex — fall back to CDT for this complex case.
	function isAtVertex(bc) {
		var nearZero = 0;
		for (var bci = 0; bci < 3; bci++) { if (bc[bci] < VERTEX_TOL) nearZero++; }
		return nearZero >= 2;
	}
	if (isAtVertex(entryBary) || isAtVertex(exitBary)) {
		return retriangulateWithSteinerPoints(tri, segments);
	}

	// Determine which edge each boundary point lies on (returns the vertex index opposite that edge)
	function edgeOf(bc) {
		if (bc[0] < EDGE_TOL && bc[0] <= bc[1] && bc[0] <= bc[2]) return 0; // on v1-v2
		if (bc[1] < EDGE_TOL && bc[1] <= bc[0] && bc[1] <= bc[2]) return 1; // on v0-v2
		if (bc[2] < EDGE_TOL && bc[2] <= bc[0] && bc[2] <= bc[1]) return 2; // on v0-v1
		return -1;
	}
	var entryOpp = edgeOf(entryBary);
	var exitOpp = edgeOf(exitBary);

	// Fallback if boundary points are interior or on same edge
	if (entryOpp < 0 || exitOpp < 0 || entryOpp === exitOpp) {
		return retriangulateWithSteinerPoints(tri, segments);
	}

	// Step 5) Find corner vertex: the vertex NOT opposite either entry or exit edge.
	// entryOpp is opposite the entry edge, exitOpp is opposite the exit edge.
	// The corner is the remaining vertex — it's shared by both crossed edges.
	var cornerIdx = -1;
	for (var ci = 0; ci < 3; ci++) {
		if (ci !== entryOpp && ci !== exitOpp) { cornerIdx = ci; break; }
	}
	if (cornerIdx < 0) return retriangulateWithSteinerPoints(tri, segments);

	var corner = verts[cornerIdx];
	// vA is on the entry edge (the vertex opposite the exit edge, that is not the corner)
	var vA = verts[exitOpp];
	// vB is on the exit edge (the vertex opposite the entry edge, that is not the corner)
	var vB = verts[entryOpp];

	// Step 6) Compute original triangle normal for winding consistency
	var origNx = e1y * e2z - e1z * e2y;
	var origNy = e1z * e2x - e1x * e2z;
	var origNz = e1x * e2y - e1y * e2x;

	// Helper: create a sub-triangle with winding consistent with original
	function makeTri(a, b, c) {
		var se1x = b.x - a.x, se1y = b.y - a.y, se1z = b.z - a.z;
		var se2x = c.x - a.x, se2y = c.y - a.y, se2z = c.z - a.z;
		var snx = se1y * se2z - se1z * se2y;
		var sny = se1z * se2x - se1x * se2z;
		var snz = se1x * se2y - se1y * se2x;
		var dot = snx * origNx + sny * origNy + snz * origNz;
		if (dot < 0) {
			return { v0: a, v1: c, v2: b };
		}
		return { v0: a, v1: b, v2: c };
	}

	// Step 7) Build fan triangles
	var result = [];

	// Step 7a) Isolated side: fan from corner to all consecutive chain point pairs
	for (var fi = 0; fi < chain.length - 1; fi++) {
		result.push(makeTri(corner, chain[fi], chain[fi + 1]));
	}

	// Step 7b) Paired side: find split index K by nearest-neighbour.
	// K is where the chain transitions from closer-to-vA to closer-to-vB.
	var splitK = 0;
	var bestRatio = Infinity;
	for (var ki = 0; ki < chain.length; ki++) {
		var dA = distSq3(vA, chain[ki]);
		var dB = distSq3(vB, chain[ki]);
		var ratio = (dA < 1e-20 || dB < 1e-20) ? Infinity : (dA < dB ? dA / dB : dB / dA);
		var diff = Math.abs(1.0 - ratio);
		if (diff < bestRatio) {
			bestRatio = diff;
			splitK = ki;
		}
	}

	// Step 7c) Clamp splitK so both fans get at least one triangle
	if (splitK < 1) splitK = 1;
	if (splitK > chain.length - 2) splitK = chain.length - 2;

	// Step 7d) Fan from vA: P0 through PK
	for (var ai = 0; ai < splitK; ai++) {
		result.push(makeTri(vA, chain[ai], chain[ai + 1]));
	}

	// Step 7e) Transition triangle: vA - chain[splitK] - vB
	result.push(makeTri(vA, chain[splitK], vB));

	// Step 7f) Fan from vB: PK through PN
	for (var bi = splitK; bi < chain.length - 1; bi++) {
		result.push(makeTri(vB, chain[bi], chain[bi + 1]));
	}

	// Step 9) Validate: check no degenerate (near-zero area) sub-triangles
	var triArea = lnLen * 0.5;
	var MIN_AREA = triArea * 1e-8;
	var validated = [];
	for (var vli = 0; vli < result.length; vli++) {
		var t = result[vli];
		var te1x = t.v1.x - t.v0.x, te1y = t.v1.y - t.v0.y, te1z = t.v1.z - t.v0.z;
		var te2x = t.v2.x - t.v0.x, te2y = t.v2.y - t.v0.y, te2z = t.v2.z - t.v0.z;
		var tcx = te1y * te2z - te1z * te2y;
		var tcy = te1z * te2x - te1x * te2z;
		var tcz = te1x * te2y - te1y * te2x;
		var subArea = Math.sqrt(tcx * tcx + tcy * tcy + tcz * tcz) * 0.5;
		if (subArea > MIN_AREA) {
			validated.push(t);
		}
	}

	if (validated.length === 0) {
		return retriangulateWithSteinerPoints(tri, segments);
	}

	return validated;
}

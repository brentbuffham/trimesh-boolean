/**
 * @module bms/bmsSplit
 *
 * Re-triangulate crossed triangles using shared pool vertices and produce
 * a unified mega soup. Sub-triangle vertices that are Steiner points ARE
 * the pool vertex objects (same reference), not copies.
 */

import Delaunator from "delaunator";
import Constrainautor from "@kninnug/constrainautor";
import { vKey, distSq3 } from "../util/math.js";
import { bmsChain } from "./bmsChain.js";
import { determinant } from "tiny-exact-math";

/**
 * Re-triangulate a crossed triangle using pool vertices as Steiner points.
 * The output sub-triangles reference pool vertex objects directly.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} tri - Parent triangle
 * @param {Array<{ p0: PoolVertex, p1: PoolVertex }>} segments - Intersection segments with pool vertices
 * @returns {Array<{ v0: Object, v1: Object, v2: Object }>} Sub-triangles
 */
function bmsRetriangulate(tri, segments) {
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

	function toLocal(p) {
		var dx = p.x - lox, dy = p.y - loy, dz = p.z - loz;
		return [dx * lux + dy * luy + dz * luz, dx * lvx + dy * lvy + dz * lvz];
	}

	var l0 = toLocal(tri.v0);
	var l1 = toLocal(tri.v1);
	var l2 = toLocal(tri.v2);

	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return [tri];

	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	var triArea2D = Math.abs(baryD) * 0.5;
	var MIN_AREA_RATIO = 1e-8;

	// -- Step 2: Collect unique Steiner points from pool vertices --
	// Use pool vertex id for deduplication (exact, no toFixed)
	var seenIds = {};
	var v0Key = vKey(tri.v0), v1Key = vKey(tri.v1), v2Key = vKey(tri.v2);

	var validSteiner = []; // pool vertex objects

	// pts array: indices 0,1,2 = original vertices, 3+ = pool vertices
	var pts = [tri.v0, tri.v1, tri.v2];

	// Map pool vertex id -> index in pts array (for constraint edges)
	var idToIndex = {};

	// Also map vertex keys for original verts
	var keyToIndex = {};
	keyToIndex[v0Key] = 0;
	keyToIndex[v1Key] = 1;
	keyToIndex[v2Key] = 2;

	// Exact point-in-triangle test using rational arithmetic.
	// Projects ORIGINAL 3D coordinates to the best-fit 2D plane (XY, XZ, or YZ)
	// to avoid float errors from the toLocal projection.
	var anx = Math.abs(lnx), any = Math.abs(lny), anz = Math.abs(lnz);
	var projA, projB; // which axes to use for 2D projection
	if (anx >= any && anx >= anz) {
		// Normal dominated by X → project to YZ plane
		projA = function(v) { return v.y; };
		projB = function(v) { return v.z; };
	} else if (any >= anz) {
		// Normal dominated by Y → project to XZ plane
		projA = function(v) { return v.x; };
		projB = function(v) { return v.z; };
	} else {
		// Normal dominated by Z → project to XY plane
		projA = function(v) { return v.x; };
		projB = function(v) { return v.y; };
	}
	var tv0 = { x: projA(tri.v0), y: projB(tri.v0) };
	var tv1 = { x: projA(tri.v1), y: projB(tri.v1) };
	var tv2 = { x: projA(tri.v2), y: projB(tri.v2) };

	function exactPointInTri3D(p) {
		var pp = { x: projA(p), y: projB(p) };
		var d0 = determinant(tv0, tv1, pp);
		var d1 = determinant(tv1, tv2, pp);
		var d2 = determinant(tv2, tv0, pp);
		var hasNeg = (d0 < 0) || (d1 < 0) || (d2 < 0);
		var hasPos = (d0 > 0) || (d1 > 0) || (d2 > 0);
		return !(hasNeg && hasPos);
	}
	var BARY_TOL = -1e-4; // float fallback tolerance

	for (var s = 0; s < segments.length; s++) {
		var seg = segments[s];
		var endpts = [seg.p0, seg.p1];
		for (var e = 0; e < 2; e++) {
			var p = endpts[e];

			// Check if this pool vertex is an original vertex (by vKey match)
			var pk = vKey(p);
			if (pk === v0Key || pk === v1Key || pk === v2Key) {
				// Map the pool vertex id to the original vertex index
				if (p.id !== undefined) idToIndex[p.id] = keyToIndex[pk];
				continue;
			}

			// Skip if already added (by pool id)
			if (p.id !== undefined && seenIds[p.id]) continue;
			if (p.id !== undefined) seenIds[p.id] = true;

			// Validate: must be inside the triangle.
			// Primary: exact rational test on original 3D coords (projected to best plane)
			// Fallback: float barycentric with tolerance (handles near-edge Steiner points
			// whose computed position drifted slightly outside due to float intersection math)
			if (!exactPointInTri3D(p)) {
				var lp = toLocal(p);
				var bc = baryCoords(lp[0], lp[1]);
				if (bc[0] < BARY_TOL || bc[1] < BARY_TOL || bc[2] < BARY_TOL) {
					// Last chance: accept if the point is very close to an edge
					// (within 1% of triangle size) — intersection drift
					var minBC = Math.min(bc[0], bc[1], bc[2]);
					if (minBC < -0.01) {
						continue;
					}
				}
			}

			// Add pool vertex object directly (same reference!)
			var idx = pts.length;
			pts.push(p);
			if (p.id !== undefined) idToIndex[p.id] = idx;
			keyToIndex[pk] = idx;
			validSteiner.push(p);
		}
	}

	if (validSteiner.length === 0) return [tri];

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

	// Constrain segment edges
	try {
		var con = new Constrainautor(del);
		for (var cs = 0; cs < segments.length; cs++) {
			var cSeg = segments[cs];
			var idx0, idx1;

			// Look up by pool id first, then by vKey
			if (cSeg.p0.id !== undefined && idToIndex[cSeg.p0.id] !== undefined) {
				idx0 = idToIndex[cSeg.p0.id];
			} else {
				idx0 = keyToIndex[vKey(cSeg.p0)];
			}

			if (cSeg.p1.id !== undefined && idToIndex[cSeg.p1.id] !== undefined) {
				idx1 = idToIndex[cSeg.p1.id];
			} else {
				idx1 = keyToIndex[vKey(cSeg.p1)];
			}

			if (idx0 !== undefined && idx1 !== undefined && idx0 !== idx1) {
				try { con.constrainOne(idx0, idx1); } catch (ce2) { /* skip */ }
			}
		}
	} catch (ce) {
		// Constrainautor init failed -- unconstrained Delaunator still usable
	}

	// -- Step 4: Filter sub-triangles by barycentric centroid + area check --
	// Output uses pts[] references directly — pool vertices stay as pool vertices
	var origNx = lnx, origNy = lny, origNz = lnz;

	var result = [];
	var delTris = del.triangles;
	for (var k = 0; k < delTris.length; k += 3) {
		var a = delTris[k], b = delTris[k + 1], c = delTris[k + 2];

		// Centroid in local 2D
		var cx = (coords[a * 2] + coords[b * 2] + coords[c * 2]) / 3;
		var cy = (coords[a * 2 + 1] + coords[b * 2 + 1] + coords[c * 2 + 1]) / 3;

		var cBary = baryCoords(cx, cy);
		if (cBary[0] < -1e-6 || cBary[1] < -1e-6 || cBary[2] < -1e-6) continue;

		// Area check
		var au = coords[a * 2], av = coords[a * 2 + 1];
		var bu = coords[b * 2], bv = coords[b * 2 + 1];
		var cu2 = coords[c * 2], cv = coords[c * 2 + 1];
		var subArea = Math.abs((bu - au) * (cv - av) - (cu2 - au) * (bv - av)) * 0.5;
		if (subArea < triArea2D * MIN_AREA_RATIO) continue;

		// Check winding consistency with original triangle
		var pa = pts[a], pb = pts[b], pc = pts[c];
		var se1x = pb.x - pa.x, se1y = pb.y - pa.y, se1z = pb.z - pa.z;
		var se2x = pc.x - pa.x, se2y = pc.y - pa.y, se2z = pc.z - pa.z;
		var snx = se1y * se2z - se1z * se2y;
		var sny = se1z * se2x - se1x * se2z;
		var snz = se1x * se2y - se1y * se2x;
		var dot = snx * origNx + sny * origNy + snz * origNz;

		if (dot < 0) {
			result.push({ v0: pa, v1: pc, v2: pb });
		} else {
			result.push({ v0: pa, v1: pb, v2: pc });
		}
	}

	if (result.length === 0) return [tri];
	return result;
}

/**
 * Fan-based re-triangulation using pool vertices.
 * Chains segments using bmsChain (identity-based), then fans from original
 * vertices to consecutive chain points. GUARANTEES intersection segments
 * appear as edges in the output — no CDT constraint needed.
 *
 * Falls back to bmsRetriangulate for multi-chain, same-edge entry/exit,
 * or vertex-hit cases.
 */
function bmsFanTriangulate(tri, segments) {
	if (!segments || segments.length === 0) return [tri];

	// Step 1: Chain segments using identity-based chaining
	var chains = bmsChain(segments);

	if (chains.length !== 1 || chains[0].length < 2) {
		return bmsRetriangulate(tri, segments);
	}
	var chain = chains[0];

	// Step 2: Build local 2D frame for barycentric classification
	var verts = [tri.v0, tri.v1, tri.v2];
	var e1x = tri.v1.x - tri.v0.x, e1y = tri.v1.y - tri.v0.y, e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x, e2y = tri.v2.y - tri.v0.y, e2z = tri.v2.z - tri.v0.z;
	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return bmsRetriangulate(tri, segments);
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;
	var lnx = e1y * e2z - e1z * e2y, lny = e1z * e2x - e1x * e2z, lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return bmsRetriangulate(tri, segments);
	var lvx = lny * luz - lnz * luy, lvy = lnz * lux - lnx * luz, lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return bmsRetriangulate(tri, segments);
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	function toLocal(p) {
		var ddx = p.x - tri.v0.x, ddy = p.y - tri.v0.y, ddz = p.z - tri.v0.z;
		return [ddx * lux + ddy * luy + ddz * luz, ddx * lvx + ddy * lvy + ddz * lvz];
	}
	var l0 = toLocal(tri.v0), l1 = toLocal(tri.v1), l2 = toLocal(tri.v2);
	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return bmsRetriangulate(tri, segments);

	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	// Step 3: Identify entry/exit edges
	var EDGE_TOL = 0.02;
	var VERTEX_TOL = 0.02;
	var entryLocal = toLocal(chain[0]);
	var exitLocal = toLocal(chain[chain.length - 1]);
	var entryBary = baryCoords(entryLocal[0], entryLocal[1]);
	var exitBary = baryCoords(exitLocal[0], exitLocal[1]);

	function isAtVertex(bc) {
		var nearZero = 0;
		for (var bci = 0; bci < 3; bci++) { if (bc[bci] < VERTEX_TOL) nearZero++; }
		return nearZero >= 2;
	}
	if (isAtVertex(entryBary) || isAtVertex(exitBary)) {
		return bmsRetriangulate(tri, segments);
	}

	function edgeOf(bc) {
		if (bc[0] < EDGE_TOL && bc[0] <= bc[1] && bc[0] <= bc[2]) return 0;
		if (bc[1] < EDGE_TOL && bc[1] <= bc[0] && bc[1] <= bc[2]) return 1;
		if (bc[2] < EDGE_TOL && bc[2] <= bc[0] && bc[2] <= bc[1]) return 2;
		return -1;
	}
	var entryOpp = edgeOf(entryBary);
	var exitOpp = edgeOf(exitBary);

	if (entryOpp < 0 || exitOpp < 0 || entryOpp === exitOpp) {
		return bmsRetriangulate(tri, segments);
	}

	// Step 4: Corner, vA, vB
	var cornerIdx = -1;
	for (var ci = 0; ci < 3; ci++) {
		if (ci !== entryOpp && ci !== exitOpp) { cornerIdx = ci; break; }
	}
	if (cornerIdx < 0) return bmsRetriangulate(tri, segments);

	var corner = verts[cornerIdx];
	var vA = verts[exitOpp];
	var vB = verts[entryOpp];

	// Step 5: Winding consistency
	var origNx = e1y * e2z - e1z * e2y;
	var origNy = e1z * e2x - e1x * e2z;
	var origNz = e1x * e2y - e1y * e2x;

	function makeTri(a, b, c) {
		var se1x = b.x - a.x, se1y = b.y - a.y, se1z = b.z - a.z;
		var se2x = c.x - a.x, se2y = c.y - a.y, se2z = c.z - a.z;
		var snx = se1y * se2z - se1z * se2y;
		var sny = se1z * se2x - se1x * se2z;
		var snz = se1x * se2y - se1y * se2x;
		var dot = snx * origNx + sny * origNy + snz * origNz;
		return dot < 0 ? { v0: a, v1: c, v2: b } : { v0: a, v1: b, v2: c };
	}

	// Step 6: Build fan triangles — chain points ARE pool vertices (shared references)
	var result = [];

	// Corner fan: corner to all consecutive chain point pairs
	for (var fi = 0; fi < chain.length - 1; fi++) {
		result.push(makeTri(corner, chain[fi], chain[fi + 1]));
	}

	// Split index K
	var splitK = 0;
	var bestRatio = Infinity;
	for (var ki = 0; ki < chain.length; ki++) {
		var dA = distSq3(vA, chain[ki]);
		var dB = distSq3(vB, chain[ki]);
		var ratio = (dA < 1e-20 || dB < 1e-20) ? Infinity : (dA < dB ? dA / dB : dB / dA);
		var diff = Math.abs(1.0 - ratio);
		if (diff < bestRatio) { bestRatio = diff; splitK = ki; }
	}
	if (splitK < 1) splitK = 1;
	if (splitK > chain.length - 2) splitK = chain.length - 2;

	// Fan from vA
	for (var ai = 0; ai < splitK; ai++) {
		result.push(makeTri(vA, chain[ai], chain[ai + 1]));
	}

	// Transition triangle
	result.push(makeTri(vA, chain[splitK], vB));

	// Fan from vB
	for (var bi = splitK; bi < chain.length - 1; bi++) {
		result.push(makeTri(vB, chain[bi], chain[bi + 1]));
	}

	// Step 7: Validate — remove degenerates
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
		if (subArea > MIN_AREA) validated.push(t);
	}

	return validated.length > 0 ? validated : bmsRetriangulate(tri, segments);
}

/**
 * Split both meshes and produce a unified mega soup where Steiner point
 * vertices are shared pool vertex objects.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB
 * @param {{ segments: Array, crossedSetA: Object, crossedSetB: Object, pool: Object }} intersectResult
 * @returns {Array<{ v0: Object, v1: Object, v2: Object, mesh: string, origIdx: number }>}
 */
export function bmsSplit(trisA, trisB, intersectResult) {
	var crossedSetA = intersectResult.crossedSetA;
	var crossedSetB = intersectResult.crossedSetB;
	var megaSoup = [];

	// Process mesh A
	for (var i = 0; i < trisA.length; i++) {
		if (!crossedSetA[i]) {
			// Non-crossed: pass through directly
			megaSoup.push({
				v0: trisA[i].v0,
				v1: trisA[i].v1,
				v2: trisA[i].v2,
				mesh: "A",
				origIdx: i
			});
		} else {
			// Crossed: re-triangulate with pool vertices
			var subTris = bmsFanTriangulate(trisA[i], crossedSetA[i]);
			for (var si = 0; si < subTris.length; si++) {
				megaSoup.push({
					v0: subTris[si].v0,
					v1: subTris[si].v1,
					v2: subTris[si].v2,
					mesh: "A",
					origIdx: i
				});
			}
		}
	}

	// Process mesh B
	for (var j = 0; j < trisB.length; j++) {
		if (!crossedSetB[j]) {
			megaSoup.push({
				v0: trisB[j].v0,
				v1: trisB[j].v1,
				v2: trisB[j].v2,
				mesh: "B",
				origIdx: j
			});
		} else {
			var subTrisB = bmsFanTriangulate(trisB[j], crossedSetB[j]);
			for (var sj = 0; sj < subTrisB.length; sj++) {
				megaSoup.push({
					v0: subTrisB[sj].v0,
					v1: subTrisB[sj].v1,
					v2: subTrisB[sj].v2,
					mesh: "B",
					origIdx: j
				});
			}
		}
	}

	return megaSoup;
}

/**
 * @module repair/boundaryLoops
 *
 * Boundary loop extraction, triangulation, and capping for triangle meshes.
 * Handles open surfaces by detecting boundary edges, chaining them into loops,
 * and triangulating the loops to produce cap polygons.
 */

import Delaunator from "delaunator";
import Constrainautor from "@kninnug/constrainautor";
import { dist3, vKey, edgeKey, countOpenEdges } from "../util/math.js";
import { weldVertices, weldedToSoup } from "./weldVertices.js";
import { cleanCrossingTriangles } from "./cleanCrossing.js";

/**
 * Extract boundary loops from triangle soup.
 * Boundary edges appear exactly once in the edge count map.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {{ loops: Array<Array<{x,y,z}>>, boundaryEdgeCount: number, overSharedEdgeCount: number }}
 */
export function extractBoundaryLoops(tris) {
	var edgeMap = {};
	var halfEdges = {};

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(keys[e], keys[ne]);
			if (!edgeMap[ek]) {
				edgeMap[ek] = { count: 0, v0: verts[e], v1: verts[ne], k0: keys[e], k1: keys[ne] };
			}
			edgeMap[ek].count++;
			halfEdges[keys[e] + "|" + keys[ne]] = true;
		}
	}

	var boundaryEdges = [];
	var overSharedCount = 0;
	for (var ek2 in edgeMap) {
		if (edgeMap[ek2].count === 1) {
			boundaryEdges.push(edgeMap[ek2]);
		} else if (edgeMap[ek2].count > 2) {
			overSharedCount++;
		}
	}

	if (boundaryEdges.length === 0) {
		return { loops: [], boundaryEdgeCount: 0, overSharedEdgeCount: overSharedCount };
	}

	var adj = {};

	for (var b = 0; b < boundaryEdges.length; b++) {
		var be = boundaryEdges[b];
		var fromKey, toKey, fromVert, toVert;
		if (halfEdges[be.k0 + "|" + be.k1]) {
			fromKey = be.k1; toKey = be.k0;
			fromVert = be.v1; toVert = be.v0;
		} else {
			fromKey = be.k0; toKey = be.k1;
			fromVert = be.v0; toVert = be.v1;
		}
		if (!adj[fromKey]) adj[fromKey] = [];
		adj[fromKey].push({ key: toKey, vertex: toVert, fromVertex: fromVert });
	}

	var used = {};
	var loops = [];

	for (var startKey in adj) {
		if (used[startKey]) continue;

		var loop = [];
		var currentKey = startKey;
		var safety = boundaryEdges.length + 1;

		while (safety-- > 0) {
			if (used[currentKey]) break;
			used[currentKey] = true;

			var neighbors = adj[currentKey];
			if (!neighbors || neighbors.length === 0) break;

			var next = null;
			for (var n = 0; n < neighbors.length; n++) {
				if (!used[neighbors[n].key] || (neighbors[n].key === startKey && loop.length > 2)) {
					next = neighbors[n];
					break;
				}
			}

			if (!next) break;

			loop.push(next.fromVertex);
			currentKey = next.key;

			if (currentKey === startKey) break;
		}

		if (loop.length >= 3) {
			loops.push(loop);
		}
	}

	return { loops: loops, boundaryEdgeCount: boundaryEdges.length, overSharedEdgeCount: overSharedCount };
}

/**
 * Ray-casting point-in-polygon test on a 2D loop stored as flat coords.
 * @private
 * @param {number} px
 * @param {number} py
 * @param {Float64Array} coords - Flat [u0,v0, u1,v1, ...] array
 * @param {number} n - Number of vertices
 * @returns {boolean}
 */
function _pointInLoop2D(px, py, coords, n) {
	var inside = false;
	for (var i = 0, j = n - 1; i < n; j = i++) {
		var xi = coords[i * 2], yi = coords[i * 2 + 1];
		var xj = coords[j * 2], yj = coords[j * 2 + 1];
		if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
			inside = !inside;
		}
	}
	return inside;
}

/**
 * Triangulate a 3D polygon loop using constrained Delaunay projected onto the
 * best-fit 2D plane (the plane with the largest projected area).
 *
 * @param {Array<{x: number, y: number, z: number}>} loop - Vertices in order
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangles
 */
export function triangulateLoop(loop) {
	if (loop.length < 3) return [];
	if (loop.length === 3) {
		return [{ v0: loop[0], v1: loop[1], v2: loop[2] }];
	}
	if (loop.length === 4) {
		var d02 = dist3(loop[0], loop[2]);
		var d13 = dist3(loop[1], loop[3]);
		if (d02 <= d13) {
			return [
				{ v0: loop[0], v1: loop[1], v2: loop[2] },
				{ v0: loop[0], v1: loop[2], v2: loop[3] }
			];
		} else {
			return [
				{ v0: loop[0], v1: loop[1], v2: loop[3] },
				{ v0: loop[1], v1: loop[2], v2: loop[3] }
			];
		}
	}

	// Compute loop normal via Newell's method
	var nx = 0, ny = 0, nz = 0;
	for (var i = 0; i < loop.length; i++) {
		var curr = loop[i];
		var next = loop[(i + 1) % loop.length];
		nx += (curr.y - next.y) * (curr.z + next.z);
		ny += (curr.z - next.z) * (curr.x + next.x);
		nz += (curr.x - next.x) * (curr.y + next.y);
	}

	// Pick the 2D projection plane using shoelace area on all 3 planes
	var areaXY = 0, areaXZ = 0, areaYZ = 0;
	for (var sa = 0; sa < loop.length; sa++) {
		var saCurr = loop[sa];
		var saNext = loop[(sa + 1) % loop.length];
		areaXY += (saCurr.x * saNext.y - saNext.x * saCurr.y);
		areaXZ += (saCurr.x * saNext.z - saNext.x * saCurr.z);
		areaYZ += (saCurr.y * saNext.z - saNext.y * saCurr.z);
	}
	areaXY = Math.abs(areaXY);
	areaXZ = Math.abs(areaXZ);
	areaYZ = Math.abs(areaYZ);

	var projU, projV;
	if (areaXY >= areaXZ && areaXY >= areaYZ) {
		projU = function (p) { return p.x; };
		projV = function (p) { return p.y; };
	} else if (areaXZ >= areaYZ) {
		projU = function (p) { return p.x; };
		projV = function (p) { return p.z; };
	} else {
		projU = function (p) { return p.y; };
		projV = function (p) { return p.z; };
	}

	var n2 = loop.length;
	var coords = new Float64Array(n2 * 2);
	for (var j = 0; j < n2; j++) {
		coords[j * 2] = projU(loop[j]);
		coords[j * 2 + 1] = projV(loop[j]);
	}

	var del, con;
	try {
		del = new Delaunator(coords);
		con = new Constrainautor(del);

		for (var ci = 0; ci < n2; ci++) {
			var ni = (ci + 1) % n2;
			try {
				con.constrainOne(ci, ni);
			} catch (e) {
				// Skip problematic constraint edges
			}
		}
	} catch (e) {
		try {
			del = new Delaunator(coords);
		} catch (e2) {
			return [];
		}
	}

	var result = [];
	var tris = del.triangles;
	for (var k = 0; k < tris.length; k += 3) {
		var a = tris[k], b = tris[k + 1], c = tris[k + 2];

		var cx2 = (coords[a * 2] + coords[b * 2] + coords[c * 2]) / 3;
		var cy2 = (coords[a * 2 + 1] + coords[b * 2 + 1] + coords[c * 2 + 1]) / 3;

		if (_pointInLoop2D(cx2, cy2, coords, n2)) {
			result.push({
				v0: loop[a],
				v1: loop[b],
				v2: loop[c]
			});
		}
	}

	// Validate cap triangle winding against the Newell loop normal
	var nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
	if (nLen > 1e-12) {
		var nnx = nx / nLen, nny = ny / nLen, nnz = nz / nLen;
		for (var wi = 0; wi < result.length; wi++) {
			var wt = result[wi];
			var ux = wt.v1.x - wt.v0.x, uy = wt.v1.y - wt.v0.y, uz = wt.v1.z - wt.v0.z;
			var vx = wt.v2.x - wt.v0.x, vy = wt.v2.y - wt.v0.y, vz = wt.v2.z - wt.v0.z;
			var tnx = uy * vz - uz * vy;
			var tny = uz * vx - ux * vz;
			var tnz = ux * vy - uy * vx;
			var dot = tnx * nnx + tny * nny + tnz * nnz;
			if (dot < 0) {
				var tmp = wt.v1;
				wt.v1 = wt.v2;
				wt.v2 = tmp;
			}
		}
	}

	return result;
}

/**
 * Find boundary edges, chain into loops, triangulate each loop to cap.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Cap triangles
 */
export function capBoundaryLoops(tris) {
	var result = extractBoundaryLoops(tris);

	if (result.loops.length === 0) return [];

	var capTris = [];
	for (var li = 0; li < result.loops.length; li++) {
		var loopTris = triangulateLoop(result.loops[li]);
		for (var lt = 0; lt < loopTris.length; lt++) {
			capTris.push(loopTris[lt]);
		}
	}

	return capTris;
}

/**
 * Sequential boundary capping: cap one loop at a time, re-weld + clean
 * non-manifold after each loop.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup - Triangle soup
 * @param {number} snapTol - Weld tolerance
 * @param {number} [maxPasses=3] - Max number of cap passes
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Updated triangle soup
 */
export function capBoundaryLoopsSequential(soup, snapTol, maxPasses) {
	if (!maxPasses) maxPasses = 3;
	var MAX_CAP_LOOP_VERTS = 500;

	for (var capPass = 0; capPass < maxPasses; capPass++) {
		var preStats = countOpenEdges(soup);
		if (preStats.overShared > 0) {
			soup = cleanCrossingTriangles(soup);
			var cleaned = weldVertices(soup, snapTol);
			soup = weldedToSoup(cleaned.triangles);
		}

		var loopResult = extractBoundaryLoops(soup);
		if (loopResult.loops.length === 0) {
			break;
		}

		var totalCapTris = 0;

		for (var li = 0; li < loopResult.loops.length; li++) {
			var loop = loopResult.loops[li];
			if (loop.length < 3) continue;
			if (loop.length > MAX_CAP_LOOP_VERTS) {
				continue;
			}

			var capTris = triangulateLoop(loop);
			if (capTris.length === 0) continue;

			for (var ct = 0; ct < capTris.length; ct++) {
				soup.push(capTris[ct]);
			}
			totalCapTris += capTris.length;

			var reWelded = weldVertices(soup, snapTol);
			soup = weldedToSoup(reWelded.triangles);

			var postStats = countOpenEdges(soup);
			if (postStats.overShared > 0) {
				soup = cleanCrossingTriangles(soup);
				var reCleaned = weldVertices(soup, snapTol);
				soup = weldedToSoup(reCleaned.triangles);
			}
		}

		if (totalCapTris === 0) {
			break;
		}
	}

	return soup;
}

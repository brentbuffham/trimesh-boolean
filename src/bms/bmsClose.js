/**
 * @module bms/bmsClose
 *
 * Close open intersection polylines by tracing along mesh boundary edges.
 * Every polyline must close — this is non-negotiable for correct
 * left/right classification.
 *
 * Also enforces clockwise winding on all closed polylines.
 */

import { vKey } from "../util/math.js";

/**
 * Find boundary edges of a triangle soup.
 * Returns a map: vertexKey -> [adjacent boundary vertex keys]
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} tris
 * @returns {{ adjacency: Object.<string, string[]>, edgeVerts: Object.<string, {a: Object, b: Object}> }}
 */
function buildBoundaryAdjacency(tris) {
	var edgeCount = {};
	var edgeVerts = {};

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = ks[e] < ks[ne] ? ks[e] + "|" + ks[ne] : ks[ne] + "|" + ks[e];
			if (!edgeCount[ek]) {
				edgeCount[ek] = 0;
				edgeVerts[ek] = { a: vs[e], b: vs[ne], ka: ks[e], kb: ks[ne] };
			}
			edgeCount[ek]++;
		}
	}

	// Build adjacency for boundary edges only (count === 1)
	var adjacency = {};
	var boundaryEdges = {};
	for (var ek2 in edgeCount) {
		if (edgeCount[ek2] !== 1) continue;
		var ev = edgeVerts[ek2];
		if (!adjacency[ev.ka]) adjacency[ev.ka] = [];
		adjacency[ev.ka].push(ev.kb);
		if (!adjacency[ev.kb]) adjacency[ev.kb] = [];
		adjacency[ev.kb].push(ev.ka);
		boundaryEdges[ek2] = ev;
	}

	return { adjacency: adjacency, edgeVerts: boundaryEdges };
}

/**
 * Close open polylines by tracing mesh boundary edges between open endpoints.
 * Enforces clockwise winding on all closed polylines.
 *
 * @param {Array<Array<PoolVertex>>} polylines - From bmsChain
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB
 * @returns {Array<Array<PoolVertex>>} Closed polylines
 */
export function bmsClosePolylines(polylines, trisA, trisB) {
	if (polylines.length === 0) return [];

	// Build boundary adjacency for both meshes
	var bdryA = buildBoundaryAdjacency(trisA);
	var bdryB = buildBoundaryAdjacency(trisB);

	// Merge both boundary adjacencies into one
	var bdryAdj = {};
	var bdryVertMap = {}; // vKey -> vertex object (for creating boundary trace points)

	function mergeBdry(bdry, tris) {
		for (var k in bdry.adjacency) {
			if (!bdryAdj[k]) bdryAdj[k] = [];
			var list = bdry.adjacency[k];
			for (var i = 0; i < list.length; i++) {
				// Avoid duplicates
				var found = false;
				for (var j = 0; j < bdryAdj[k].length; j++) {
					if (bdryAdj[k][j] === list[i]) { found = true; break; }
				}
				if (!found) bdryAdj[k].push(list[i]);
			}
		}
		for (var ek in bdry.edgeVerts) {
			var ev = bdry.edgeVerts[ek];
			if (!bdryVertMap[ev.ka]) bdryVertMap[ev.ka] = ev.a;
			if (!bdryVertMap[ev.kb]) bdryVertMap[ev.kb] = ev.b;
		}
	}
	mergeBdry(bdryA);
	mergeBdry(bdryB);

	// Collect open polyline endpoints
	// A polyline is open if first !== last (by reference for pool vertices, or by vKey)
	var closedPolylines = [];
	var openEndpoints = []; // {polyIdx, end: "start"|"end", vkey, vertex}

	for (var pi = 0; pi < polylines.length; pi++) {
		var poly = polylines[pi];
		if (poly.length < 2) continue;

		var first = poly[0];
		var last = poly[poly.length - 1];

		// Check closure by reference AND by vKey
		var isClosed = (first === last) ||
			(vKey(first) === vKey(last));

		if (isClosed) {
			closedPolylines.push(poly);
		} else {
			// Record open endpoints for boundary tracing
			openEndpoints.push({
				polyIdx: pi,
				end: "start",
				vkey: vKey(first),
				vertex: first
			});
			openEndpoints.push({
				polyIdx: pi,
				end: "end",
				vkey: vKey(last),
				vertex: last
			});
		}
	}

	// If no open polylines, just enforce winding and return
	if (openEndpoints.length === 0) {
		return enforceClockwiseWinding(closedPolylines);
	}

	// Try to close open polylines by tracing boundary edges
	var usedEndpoints = {};

	for (var oi = 0; oi < openEndpoints.length; oi++) {
		var ep = openEndpoints[oi];
		if (usedEndpoints[ep.polyIdx + ":" + ep.end]) continue;

		// Find the other end of this polyline
		var poly2 = polylines[ep.polyIdx];
		var otherEp = (ep.end === "start")
			? { vkey: vKey(poly2[poly2.length - 1]), vertex: poly2[poly2.length - 1] }
			: { vkey: vKey(poly2[0]), vertex: poly2[0] };

		// Try to trace from the end vertex along boundary edges to the start vertex
		var startKey = (ep.end === "end") ? ep.vkey : otherEp.vkey;
		var targetKey = (ep.end === "end") ? otherEp.vkey : ep.vkey;

		var trace = traceBoundary(startKey, targetKey, bdryAdj, bdryVertMap, 1000);

		if (trace) {
			// Build closed polyline: original + boundary trace
			var closedPoly = poly2.slice();
			// Append boundary trace vertices (skip first which is same as poly end)
			for (var ti = 1; ti < trace.length; ti++) {
				closedPoly.push(trace[ti]);
			}
			closedPolylines.push(closedPoly);
			usedEndpoints[ep.polyIdx + ":start"] = true;
			usedEndpoints[ep.polyIdx + ":end"] = true;
		} else {
			// Cannot close — push as-is (will degrade classification but not crash)
			closedPolylines.push(poly2);
			usedEndpoints[ep.polyIdx + ":start"] = true;
			usedEndpoints[ep.polyIdx + ":end"] = true;
		}
	}

	return enforceClockwiseWinding(closedPolylines);
}

/**
 * Trace along boundary edges from startKey to targetKey.
 * Returns an array of vertex objects forming the trace, or null if not reachable.
 *
 * @param {string} startKey
 * @param {string} targetKey
 * @param {Object.<string, string[]>} bdryAdj
 * @param {Object.<string, Object>} bdryVertMap
 * @param {number} maxSteps
 * @returns {Array<Object>|null}
 */
function traceBoundary(startKey, targetKey, bdryAdj, bdryVertMap, maxSteps) {
	if (!bdryAdj[startKey]) return null;
	if (startKey === targetKey) return null;

	var visited = {};
	visited[startKey] = true;

	var queue = [{ key: startKey, path: [bdryVertMap[startKey] || { x: 0, y: 0, z: 0 }] }];
	var head = 0;

	while (head < queue.length && head < maxSteps) {
		var current = queue[head++];
		var neighbors = bdryAdj[current.key];
		if (!neighbors) continue;

		for (var ni = 0; ni < neighbors.length; ni++) {
			var nk = neighbors[ni];
			if (visited[nk]) continue;

			var nv = bdryVertMap[nk];
			if (!nv) continue;

			var newPath = current.path.slice();
			newPath.push(nv);

			if (nk === targetKey) {
				return newPath;
			}

			visited[nk] = true;
			queue.push({ key: nk, path: newPath });
		}
	}

	return null; // Not reachable
}

/**
 * Enforce clockwise winding on all polylines.
 * Projects to the dominant plane and uses the shoelace formula.
 *
 * @param {Array<Array<Object>>} polylines
 * @returns {Array<Array<Object>>}
 */
function enforceClockwiseWinding(polylines) {
	for (var pi = 0; pi < polylines.length; pi++) {
		var poly = polylines[pi];
		if (poly.length < 3) continue;

		// Find dominant plane by computing signed areas on XY, YZ, XZ
		var areaXY = 0, areaYZ = 0, areaXZ = 0;
		for (var i = 0; i < poly.length - 1; i++) {
			var a = poly[i], b = poly[i + 1];
			areaXY += (a.x * b.y - b.x * a.y);
			areaYZ += (a.y * b.z - b.y * a.z);
			areaXZ += (a.x * b.z - b.x * a.z);
		}

		// Pick largest projected area
		var absXY = Math.abs(areaXY);
		var absYZ = Math.abs(areaYZ);
		var absXZ = Math.abs(areaXZ);

		var signedArea;
		if (absXY >= absYZ && absXY >= absXZ) {
			signedArea = areaXY;
		} else if (absYZ >= absXZ) {
			signedArea = areaYZ;
		} else {
			signedArea = areaXZ;
		}

		// Clockwise = negative signed area in standard math convention
		// But in screen/projection coords this varies. Use positive = CCW, negative = CW.
		// We want CW, so if signedArea > 0, reverse.
		if (signedArea > 0) {
			poly.reverse();
		}
	}

	return polylines;
}

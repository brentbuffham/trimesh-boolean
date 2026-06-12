/**
 * @module bms/bmsVerify
 *
 * Post-condition verification for the hybrid BMS classification
 * (KNOWN_ISSUES #20 — the v0.5.8 auto-classifier).
 *
 * The hybrid classifier's flood fill can leak through a gap in the
 * intersection barrier and silently fail to partition a mesh (the
 * 2026-06-11 failure: 3 components instead of 4, no error). These three
 * cheap checks catch that class of failure so the caller can fall back
 * to the heffalump classifier on the existing mega soup:
 *
 *   1. PARTITION — if intersection segments exist, BOTH meshes must have
 *      non-empty inside AND outside groups. One line of counting catches
 *      the exact silent failure above.
 *   2. CHAIN CLOSURE — every intersection polyline must close on itself
 *      or end on a mesh open boundary. A chain dying mid-mesh is a
 *      guaranteed flood leak (or a missed near-coplanar intersection —
 *      either way the hybrid's preconditions don't hold).
 *   3. BARRIER CONSTRAINT — same-mesh triangles sharing a barrier edge
 *      must classify to opposite sides. A leaked component violates this
 *      along its entire barrier, so a small tolerance for numerical noise
 *      still catches real leaks.
 */

import { vKey, edgeKey, dist3 } from "../util/math.js";
import { estimateAvgEdge } from "../intersect/spatialGrid.js";

/**
 * Collect a mesh's open boundary edges (edges used by exactly one triangle).
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z} }>}
 */
function collectBoundaryEdges(tris) {
	var edgeMap = {};
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(ks[e], ks[ne]);
			if (!edgeMap[ek]) edgeMap[ek] = { count: 0, v0: vs[e], v1: vs[ne] };
			edgeMap[ek].count++;
		}
	}
	var edges = [];
	for (var ek2 in edgeMap) {
		if (edgeMap[ek2].count === 1) edges.push({ v0: edgeMap[ek2].v0, v1: edgeMap[ek2].v1 });
	}
	return edges;
}

/**
 * 3D distance from a point to a segment.
 */
function pointSegDist(p, a, b) {
	var abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
	var lenSq = abx * abx + aby * aby + abz * abz;
	var t = lenSq < 1e-20 ? 0 : ((p.x - a.x) * abx + (p.y - a.y) * aby + (p.z - a.z) * abz) / lenSq;
	if (t < 0) t = 0; else if (t > 1) t = 1;
	var qx = a.x + t * abx - p.x;
	var qy = a.y + t * aby - p.y;
	var qz = a.z + t * abz - p.z;
	return Math.sqrt(qx * qx + qy * qy + qz * qz);
}

function nearAnyBoundaryEdge(p, edges, tol) {
	for (var i = 0; i < edges.length; i++) {
		if (pointSegDist(p, edges[i].v0, edges[i].v1) <= tol) return true;
	}
	return false;
}

/**
 * Verify the hybrid classification's post-conditions.
 *
 * @param {Array} megaSoup - Split triangles with mesh tags
 * @param {Int8Array|Array<number>} triSides - Per-megaSoup-triangle side from
 *        bmsClassify: 1 = inside, -1 = outside
 * @param {Array} segments - Intersection segments (pool vertex endpoints)
 * @param {Array<Array>} polylines - Raw chained polylines from bmsChain
 * @param {Array} trisA - Original mesh A triangles
 * @param {Array} trisB - Original mesh B triangles
 * @returns {{
 *   ok: boolean,
 *   failures: Array<{ check: string, mesh: "A"|"B"|"both", detail: string }>,
 *   counts: { A: { inside: number, outside: number }, B: { inside: number, outside: number } }
 * }}
 */
export function verifyBmsClassification(megaSoup, triSides, segments, polylines, trisA, trisB) {
	var failures = [];

	// ── Check 1: partition ──
	var counts = { A: { inside: 0, outside: 0 }, B: { inside: 0, outside: 0 } };
	for (var i = 0; i < megaSoup.length; i++) {
		var bucket = counts[megaSoup[i].mesh];
		if (!bucket) continue;
		if (triSides[i] > 0) bucket.inside++;
		else bucket.outside++;
	}

	if (segments && segments.length > 0) {
		var meshKeys = ["A", "B"];
		for (var mk = 0; mk < 2; mk++) {
			var key = meshKeys[mk];
			if (counts[key].inside === 0 || counts[key].outside === 0) {
				failures.push({
					check: "partition",
					mesh: key,
					detail: "mesh " + key + " did not partition: " + counts[key].inside +
						" inside / " + counts[key].outside + " outside with " +
						segments.length + " intersection segments"
				});
			}
		}
	}

	// ── Check 2: chain closure ──
	// An endpoint is fine if its chain closes on itself, it sits on a mesh
	// open boundary, or ANOTHER chain's endpoint shares the same pool vertex
	// (bmsChain splits sharp bends and junctions into separate polylines —
	// the chain network continues there). Only a truly DANGLING endpoint
	// (none of the above) indicates a barrier gap / missed intersection.
	if (polylines && polylines.length > 0) {
		var boundaryEdges = collectBoundaryEdges(trisA).concat(collectBoundaryEdges(trisB));
		var avgEdge = Math.max(estimateAvgEdge(trisA), estimateAvgEdge(trisB));
		var tol = Math.max(avgEdge * 0.01, 1e-9);

		function endpointKey(p) {
			return p.id !== undefined ? "id:" + p.id : vKey(p);
		}

		// Count how many chain endpoints land on each pool vertex
		var endpointCount = {};
		for (var ci2 = 0; ci2 < polylines.length; ci2++) {
			var cpl = polylines[ci2];
			if (!cpl || cpl.length < 2) continue;
			var ka = endpointKey(cpl[0]);
			var kb = endpointKey(cpl[cpl.length - 1]);
			endpointCount[ka] = (endpointCount[ka] || 0) + 1;
			endpointCount[kb] = (endpointCount[kb] || 0) + 1;
		}

		var dangling = 0;

		for (var pi = 0; pi < polylines.length; pi++) {
			var pl = polylines[pi];
			if (!pl || pl.length < 2) continue;
			var first = pl[0];
			var last = pl[pl.length - 1];

			var closed = first === last ||
				(first.id !== undefined && first.id === last.id) ||
				dist3(first, last) <= tol * 0.1;
			if (closed) continue;

			var ends = [first, last];
			for (var ei2 = 0; ei2 < 2; ei2++) {
				var ep = ends[ei2];
				if (endpointCount[endpointKey(ep)] >= 2) continue; // joins another chain
				if (nearAnyBoundaryEdge(ep, boundaryEdges, tol)) continue;
				dangling++;
			}
		}

		if (dangling > 0) {
			failures.push({
				check: "chainClosure",
				mesh: "both",
				detail: dangling + " dangling intersection chain endpoint(s) mid-mesh " +
					"(not closed, not on a mesh boundary, not joining another chain)"
			});
		}
	}

	// ── Check 3: barrier constraint ──
	if (segments && segments.length > 0) {
		var barrierEdges = {};
		for (var si = 0; si < segments.length; si++) {
			var seg = segments[si];
			if (seg.p0 === seg.p1) continue;
			var k0 = vKey(seg.p0), k1 = vKey(seg.p1);
			if (k0 === k1) continue;
			barrierEdges[edgeKey(k0, k1)] = true;
		}

		// barrier edgeKey → per-mesh list of sides
		var barrierSides = {};
		for (var ti = 0; ti < megaSoup.length; ti++) {
			var tri = megaSoup[ti];
			var ks = [vKey(tri.v0), vKey(tri.v1), vKey(tri.v2)];
			for (var e = 0; e < 3; e++) {
				var ne = (e + 1) % 3;
				var ek = edgeKey(ks[e], ks[ne]);
				if (!barrierEdges[ek]) continue;
				var entry = barrierSides[ek];
				if (!entry) entry = barrierSides[ek] = { A: [], B: [] };
				entry[tri.mesh].push(triSides[ti]);
			}
		}

		var violations = { A: 0, B: 0 };
		var checked = { A: 0, B: 0 };
		for (var bek in barrierSides) {
			var perMesh = barrierSides[bek];
			for (var mi = 0; mi < 2; mi++) {
				var mKey = mi === 0 ? "A" : "B";
				var sides = perMesh[mKey];
				if (sides.length < 2) continue;
				checked[mKey]++;
				var allSame = true;
				for (var s2 = 1; s2 < sides.length; s2++) {
					if (sides[s2] !== sides[0]) { allSame = false; break; }
				}
				if (allSame) violations[mKey]++;
			}
		}

		for (var vm = 0; vm < 2; vm++) {
			var vKey2 = vm === 0 ? "A" : "B";
			if (checked[vKey2] === 0) continue;
			// Tolerate numerical noise; a real flood leak violates the
			// constraint along the leaked component's entire barrier.
			var allowance = Math.max(2, checked[vKey2] * 0.01);
			if (violations[vKey2] > allowance) {
				failures.push({
					check: "barrierConstraint",
					mesh: vKey2,
					detail: violations[vKey2] + " of " + checked[vKey2] +
						" barrier edges on mesh " + vKey2 + " have same-side neighbours"
				});
			}
		}
	}

	return { ok: failures.length === 0, failures: failures, counts: counts };
}

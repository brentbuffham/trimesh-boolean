/**
 * @module bms/bmsIntersect
 *
 * Compute triangle-triangle intersections between two meshes with a
 * shared vertex pool. Every intersection segment endpoint goes through
 * the pool, so both meshes get the exact same PoolVertex object at
 * each intersection location.
 */

import { triTriIntersection } from "../intersect/triTriIntersection.js";
import { coplanarOverlap, emitCoplanarSegments } from "../intersect/coplanarOverlap.js";
import { buildSpatialGrid, queryGrid, triBBox, estimateAvgEdge } from "../intersect/spatialGrid.js";
import { createVertexPool } from "./bmsVertexPool.js";
import { vKey } from "../util/math.js";

/**
 * The nearest corner of either triangle within tolerance, else the point itself.
 * Returns the corner's exact coordinates, so bmsSplit's vKey match finds it.
 *
 * Deliberately corners only. A crossing a hair off an EDGE cannot be snapped
 * onto that edge without moving it off the other mesh's edge (it is often
 * near both), so bmsSplit places such points on the edge in its 2D
 * triangulation instead and leaves the 3D pool vertex alone.
 */
function snapToCorner(p, triA, triB, tolSq) {
	var best = p, bestD = tolSq;
	var corners = [triA.v0, triA.v1, triA.v2, triB.v0, triB.v1, triB.v2];
	for (var k = 0; k < 6; k++) {
		var v = corners[k];
		var dx = p.x - v.x, dy = p.y - v.y, dz = p.z - v.z;
		var d = dx * dx + dy * dy + dz * dz;
		if (d <= bestD) { bestD = d; best = v; }
	}
	return best;
}

/**
 * Give every crossing point ONE canonical mesh edge, and hand it to every
 * triangle on that edge.
 *
 * A crossing that lies within tolerance of a mesh edge splits that edge, and
 * every triangle on the edge must split it at the same point or the mesh keeps
 * a T-junction the flood fill leaks through. The neighbour often computed the
 * same crossing itself, but not always.
 *
 * The edge set is decided ONCE per point, over every triangle that made it, and
 * every triangle then agrees on it. With a tolerance of several millimetres a
 * point inside a needle triangle is within tolerance of BOTH long edges; if
 * each triangle chose its own nearest edge, one neighbour would get a vertex
 * the other lacks. Here the point splits every host edge within tolerance, so
 * a needle is pinched at the point (bmsSplit collapses the sliver beyond it)
 * and both neighbours see the same edge pieces.
 *
 * @returns {{ edgePoints: Object, canon: Object }} edgePoints: triIdx -> pool
 *   vertices to adopt (minus those the triangle already owns as an endpoint);
 *   canon: pool vertex id -> array of edge keys the point splits.
 */
function canonicalEdgePoints(tris, segments, hostField, crossedSet, tol) {
	if (segments.length === 0) return { edgePoints: {}, canon: {} };
	var tolSq = tol * tol;

	var owners = {};
	var keys = new Array(tris.length);
	function ekey(ka, kb) { return ka < kb ? ka + "|" + kb : kb + "|" + ka; }
	for (var t = 0; t < tris.length; t++) {
		var tr = tris[t];
		var k = keys[t] = [vKey(tr.v0), vKey(tr.v1), vKey(tr.v2)];
		for (var e = 0; e < 3; e++) {
			var ek = ekey(k[e], k[(e + 1) % 3]);
			(owners[ek] = owners[ek] || []).push(t);
		}
	}

	// Every host edge within tolerance, per pool vertex.
	var best = {}; // id -> { keys: {}, V }
	for (var s = 0; s < segments.length; s++) {
		var seg = segments[s];
		var host = seg[hostField];
		var ht = tris[host], hk = keys[host];
		var corners = [ht.v0, ht.v1, ht.v2];
		var ends = [seg.p0, seg.p1];
		for (var en = 0; en < 2; en++) {
			var V = ends[en];
			for (var c = 0; c < 3; c++) {
				var a = corners[c], b = corners[(c + 1) % 3];
				var abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
				var l2 = abx * abx + aby * aby + abz * abz;
				if (l2 < 1e-30) continue;
				var tt = ((V.x - a.x) * abx + (V.y - a.y) * aby + (V.z - a.z) * abz) / l2;
				if (tt <= 1e-7 || tt >= 1 - 1e-7) continue; // at a corner, not on an edge
				var qx = a.x + tt * abx - V.x, qy = a.y + tt * aby - V.y, qz = a.z + tt * abz - V.z;
				var d = qx * qx + qy * qy + qz * qz;
				if (d > tolSq) continue;
				var cur = best[V.id] || (best[V.id] = { keys: {}, V: V });
				cur.keys[ekey(hk[c], hk[(c + 1) % 3])] = true;
			}
		}
	}

	var canon = {};
	var raw = {};
	for (var id in best) {
		var bb = best[id];
		var kl = Object.keys(bb.keys);
		canon[id] = kl;
		for (var kk = 0; kk < kl.length; kk++) {
			var own = owners[kl[kk]];
			if (!own) continue;
			for (var o = 0; o < own.length; o++) {
				var lst = raw[own[o]] || (raw[own[o]] = []);
				if (lst.indexOf(bb.V) < 0) lst.push(bb.V);
			}
		}
	}

	var edgePoints = {};
	for (var tri in raw) {
		var have = {};
		var cs = crossedSet[tri] || [];
		for (var i = 0; i < cs.length; i++) { have[cs[i].p0.id] = true; have[cs[i].p1.id] = true; }
		var keep = raw[tri].filter(function (v) { return !have[v.id]; });
		if (keep.length > 0) edgePoints[tri] = keep;
	}
	return { edgePoints: edgePoints, canon: canon };
}

/**
 * Compute all intersection segments between two triangle meshes,
 * registering every endpoint in a shared vertex pool.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB
 * @param {Object} [options]
 * @param {number} [options.tolerance] - Pool vertex merge tolerance
 * @param {boolean} [options.coplanar=true] - Emit overlap-polygon segments for
 *        exactly-coplanar A-vs-B pairs, which the Moller path cannot express
 *        as a segment. Set false for the pre-0.6.6 behaviour.
 * @param {number} [options.minAreaRatio] - Coplanar overlap area gate
 * @returns {{
 *   segments: Array<{ p0: PoolVertex, p1: PoolVertex, idxA: number, idxB: number }>,
 *   crossedSetA: Object.<number, Array>,
 *   crossedSetB: Object.<number, Array>,
 *   pool: Object
 * }}
 */
export function bmsIntersect(trisA, trisB, options) {
	var opts = options || {};

	// Compute tolerance from average edge length if not provided
	var avgEdgeA = estimateAvgEdge(trisA);
	var avgEdgeB = estimateAvgEdge(trisB);
	var avgEdge = (avgEdgeA + avgEdgeB) / 2;
	var tolerance = opts.tolerance !== undefined ? opts.tolerance : avgEdge * 0.001;

	// Create shared vertex pool
	var pool = createVertexPool(tolerance);
	var tolSq = tolerance * tolerance;

	// Build spatial grid on mesh B for acceleration
	var cellSize = Math.max(avgEdgeB * 2, 0.1);
	var gridB = buildSpatialGrid(trisB, cellSize);

	var segments = [];
	var crossedSetA = {};
	var crossedSetB = {};

	var doCoplanar = opts.coplanar !== false;
	var copOpts = opts.minAreaRatio !== undefined ? { minAreaRatio: opts.minAreaRatio } : undefined;
	var coplanarPairs = 0;

	for (var i = 0; i < trisA.length; i++) {
		var triA = trisA[i];
		var bbA = triBBox(triA);
		var candidates = queryGrid(gridB, bbA, cellSize);

		for (var c = 0; c < candidates.length; c++) {
			var j = candidates[c];
			var triB = trisB[j];

			var seg = triTriIntersection(triA, triB);

			// ── Coplanar A-vs-B fallback ──
			// Moller cannot return a segment for coplanar pairs (the
			// intersection is a polygon, not a line), so it returns null.
			// Before 0.6.6 that null was the end of it and two overlapping
			// coplanar sheets produced NO barrier at all — bmsClassify then
			// had nothing to partition against. Emit the overlap polygon's
			// edges into the same pool instead, exactly as bmsSelfArrange
			// already does for self-folds.
			if (!seg && doCoplanar) {
				var cop = coplanarOverlap(triA, triB, copOpts);
				if (cop) {
					var copSegs = emitCoplanarSegments(cop.polygon, pool,
						{ mesh: "A", triIdx: i }, { mesh: "B", triIdx: j });
					for (var cs = 0; cs < copSegs.length; cs++) {
						var cseg = copSegs[cs];
						segments.push(cseg);
						if (!crossedSetA[i]) crossedSetA[i] = [];
						crossedSetA[i].push(cseg);
						if (!crossedSetB[j]) crossedSetB[j] = [];
						crossedSetB[j].push(cseg);
						coplanarPairs++;
					}
				}
			}

			if (!seg) continue;

			// A crossing that passes through a mesh corner must BE that corner.
			// Computed near a corner it lands millimetres off it, bmsSplit cannot
			// match it to the corner, drops the point, and the segment never
			// becomes an edge — a hole in the barrier the flood fill leaks through.
			var e0 = snapToCorner(seg.p0, triA, triB, tolSq);
			var e1 = snapToCorner(seg.p1, triA, triB, tolSq);

			// Register both endpoints in the shared pool.
			// Each endpoint gets triRefs for BOTH the A triangle and B triangle
			// that produced it.
			var pv0 = pool.getOrCreate(e0.x, e0.y, e0.z, { mesh: "A", triIdx: i });
			pool.getOrCreate(e0.x, e0.y, e0.z, { mesh: "B", triIdx: j });

			var pv1 = pool.getOrCreate(e1.x, e1.y, e1.z, { mesh: "A", triIdx: i });
			pool.getOrCreate(e1.x, e1.y, e1.z, { mesh: "B", triIdx: j });

			// Skip zero-length segments (pool dedup merged both endpoints)
			if (pv0 === pv1) continue;

			var taggedSeg = { p0: pv0, p1: pv1, idxA: i, idxB: j };
			segments.push(taggedSeg);

			// Build crossed sets
			if (!crossedSetA[i]) crossedSetA[i] = [];
			crossedSetA[i].push(taggedSeg);

			if (!crossedSetB[j]) crossedSetB[j] = [];
			crossedSetB[j].push(taggedSeg);
		}
	}

	// Conforming edge splits. A crossing that lies on a triangle EDGE splits that
	// edge, and the triangle on the other side must split it at the same point or
	// the mesh is left with a T-junction the flood fill leaks through. The
	// neighbour often computed the same crossing itself, but not always (a
	// crossing a hair past the shared edge is only found on one side).
	var canonA = canonicalEdgePoints(trisA, segments, "idxA", crossedSetA, tolerance);
	var canonB = canonicalEdgePoints(trisB, segments, "idxB", crossedSetB, tolerance);

	return {
		segments: segments,
		crossedSetA: crossedSetA,
		crossedSetB: crossedSetB,
		edgePointsA: canonA.edgePoints,
		edgePointsB: canonB.edgePoints,
		canonEdgeA: canonA.canon,
		canonEdgeB: canonB.canon,
		pool: pool,
		tolerance: tolerance,
		coplanarPairs: coplanarPairs
	};
}

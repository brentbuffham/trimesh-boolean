/**
 * @module bms/bmsIntersect
 *
 * Compute triangle-triangle intersections between two meshes with a
 * shared vertex pool. Every intersection segment endpoint goes through
 * the pool, so both meshes get the exact same PoolVertex object at
 * each intersection location.
 */

import { triTriIntersection } from "../intersect/triTriIntersection.js";
import { buildSpatialGrid, queryGrid, triBBox, estimateAvgEdge } from "../intersect/spatialGrid.js";
import { createVertexPool } from "./bmsVertexPool.js";

/**
 * Compute all intersection segments between two triangle meshes,
 * registering every endpoint in a shared vertex pool.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB
 * @param {Object} [options]
 * @param {number} [options.tolerance] - Pool vertex merge tolerance
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

	// Build spatial grid on mesh B for acceleration
	var cellSize = Math.max(avgEdgeB * 2, 0.1);
	var gridB = buildSpatialGrid(trisB, cellSize);

	var segments = [];
	var crossedSetA = {};
	var crossedSetB = {};

	for (var i = 0; i < trisA.length; i++) {
		var triA = trisA[i];
		var bbA = triBBox(triA);
		var candidates = queryGrid(gridB, bbA, cellSize);

		for (var c = 0; c < candidates.length; c++) {
			var j = candidates[c];
			var triB = trisB[j];

			var seg = triTriIntersection(triA, triB);
			if (!seg) continue;

			// Register both endpoints in the shared pool.
			// Each endpoint gets triRefs for BOTH the A triangle and B triangle
			// that produced it.
			var pv0 = pool.getOrCreate(seg.p0.x, seg.p0.y, seg.p0.z, { mesh: "A", triIdx: i });
			pool.getOrCreate(seg.p0.x, seg.p0.y, seg.p0.z, { mesh: "B", triIdx: j });

			var pv1 = pool.getOrCreate(seg.p1.x, seg.p1.y, seg.p1.z, { mesh: "A", triIdx: i });
			pool.getOrCreate(seg.p1.x, seg.p1.y, seg.p1.z, { mesh: "B", triIdx: j });

			var taggedSeg = { p0: pv0, p1: pv1, idxA: i, idxB: j };
			segments.push(taggedSeg);

			// Build crossed sets
			if (!crossedSetA[i]) crossedSetA[i] = [];
			crossedSetA[i].push(taggedSeg);

			if (!crossedSetB[j]) crossedSetB[j] = [];
			crossedSetB[j].push(taggedSeg);
		}
	}

	return {
		segments: segments,
		crossedSetA: crossedSetA,
		crossedSetB: crossedSetB,
		pool: pool
	};
}

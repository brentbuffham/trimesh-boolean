/**
 * @module intersect/intersectMeshPair
 *
 * Compute all triangle-triangle intersection segments between two
 * triangle meshes, accelerated by a uniform spatial grid.
 *
 * Exports:
 *  - intersectMeshPair(trisA, trisB)        -- array of {p0, p1} segments
 *  - intersectMeshPairTagged(trisA, trisB)  -- segments with source triangle indices
 */

import { triTriIntersection } from "./triTriIntersection.js";
import { buildSpatialGrid, queryGrid, triBBox, estimateAvgEdge } from "./spatialGrid.js";

/**
 * Find all intersection segments between two triangle meshes.
 *
 * Builds a spatial grid on mesh B and, for each triangle in mesh A,
 * queries the grid for candidate triangles in B whose bounding boxes
 * overlap, then runs the exact Moller triangle-triangle test on each
 * candidate pair.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA - First mesh triangles
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB - Second mesh triangles
 * @returns {Array<{ p0: {x:number,y:number,z:number}, p1: {x:number,y:number,z:number} }>}
 *          Intersection segments (may be empty)
 */
export function intersectMeshPair(trisA, trisB) {
    var segments = [];

    // Compute average edge length for grid cell size
    var avgEdge = estimateAvgEdge(trisB);
    var cellSize = Math.max(avgEdge * 2, 0.1);

    // Build grid on mesh B
    var gridB = buildSpatialGrid(trisB, cellSize);

    // For each triangle in A, find candidate triangles in B
    for (var i = 0; i < trisA.length; i++) {
        var triA = trisA[i];
        var bbA = triBBox(triA);

        var candidates = queryGrid(gridB, bbA, cellSize);

        for (var c = 0; c < candidates.length; c++) {
            var triB = trisB[candidates[c]];

            var seg = triTriIntersection(triA, triB);
            if (seg) {
                segments.push(seg);
            }
        }
    }

    return segments;
}

/**
 * Like {@link intersectMeshPair} but each returned segment carries the
 * source triangle indices from mesh A and mesh B.
 *
 * Useful for boolean operations and classification that need to know
 * which triangles produced each intersection segment.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA - First mesh triangles
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB - Second mesh triangles
 * @returns {Array<{ p0: {x:number,y:number,z:number}, p1: {x:number,y:number,z:number}, idxA: number, idxB: number }>}
 *          Tagged intersection segments (may be empty)
 */
export function intersectMeshPairTagged(trisA, trisB) {
    var segments = [];

    var avgEdge = estimateAvgEdge(trisB);
    var cellSize = Math.max(avgEdge * 2, 0.1);
    var gridB = buildSpatialGrid(trisB, cellSize);

    for (var i = 0; i < trisA.length; i++) {
        var triA = trisA[i];
        var bbA = triBBox(triA);
        var candidates = queryGrid(gridB, bbA, cellSize);

        for (var c = 0; c < candidates.length; c++) {
            var j = candidates[c];
            var triB = trisB[j];
            var seg = triTriIntersection(triA, triB);
            if (seg) {
                segments.push({ p0: seg.p0, p1: seg.p1, idxA: i, idxB: j });
            }
        }
    }

    return segments;
}

/**
 * @module intersect/chainSegments
 *
 * Chain disjoint line segments into ordered polylines and optionally
 * simplify by vertex spacing.
 *
 * Segments are chained by matching endpoints within a distance threshold
 * using a 3-D spatial hash for O(1) neighbour lookup.  The result is an
 * array of polylines (each an array of {x,y,z} points).
 *
 * Exports:
 *  - chainSegments(segments, threshold)
 *  - simplifyPolyline(points, spacing)
 */

import { distSq3, dist3 } from "../util/math.js";

/**
 * Chain an array of line segments into ordered polylines.
 *
 * Uses a 3-D spatial hash of segment endpoints so that each neighbour
 * lookup is O(1) amortised.  Each seed segment is extended in both
 * directions (head and tail) by repeatedly finding the nearest unused
 * segment endpoint within `threshold` distance.
 *
 * @param {Array<{ p0: {x:number,y:number,z:number}, p1: {x:number,y:number,z:number} }>} segments
 * @param {number} threshold - Maximum distance between endpoints to consider connected
 * @returns {Array<Array<{x:number,y:number,z:number}>>} Array of polylines
 */
export function chainSegments(segments, threshold) {
    if (segments.length === 0) return [];

    // Build a spatial hash of segment endpoints for O(1) neighbor lookup
    var cellSize = threshold * 2;

    /** @type {Object.<string, Array<{segIdx:number, endIdx:number}>>} */
    var endpointMap = {};

    /**
     * Hash a point into a cell key.
     * @param {{ x: number, y: number, z: number }} p
     * @returns {string}
     */
    function pointHash(p) {
        var cx = Math.floor(p.x / cellSize);
        var cy = Math.floor(p.y / cellSize);
        var cz = Math.floor(p.z / cellSize);
        return cx + "," + cy + "," + cz;
    }

    /**
     * Return all 27 neighbouring cell keys (3x3x3 cube).
     * @param {{ x: number, y: number, z: number }} p
     * @returns {string[]}
     */
    function nearbyKeys(p) {
        var cx = Math.floor(p.x / cellSize);
        var cy = Math.floor(p.y / cellSize);
        var cz = Math.floor(p.z / cellSize);
        var keys = [];
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                for (var dz = -1; dz <= 1; dz++) {
                    keys.push((cx + dx) + "," + (cy + dy) + "," + (cz + dz));
                }
            }
        }
        return keys;
    }

    // Index all endpoints
    for (var i = 0; i < segments.length; i++) {
        var pts = [segments[i].p0, segments[i].p1];
        for (var e = 0; e < 2; e++) {
            var key = pointHash(pts[e]);
            if (!endpointMap[key]) endpointMap[key] = [];
            endpointMap[key].push({ segIdx: i, endIdx: e });
        }
    }

    var threshSq = threshold * threshold;
    var used = new Array(segments.length);
    for (var u = 0; u < used.length; u++) used[u] = false;

    /**
     * Find the nearest unused segment endpoint to a query point.
     * @param {{ x: number, y: number, z: number }} queryPt
     * @param {number} excludeSeg - Segment index to skip (-1 for none)
     * @returns {{ segIdx: number, endIdx: number } | null}
     */
    function findNearest(queryPt, excludeSeg) {
        var keys = nearbyKeys(queryPt);
        var bestDist = threshSq;
        var bestSeg = -1;
        var bestEnd = -1;
        for (var k = 0; k < keys.length; k++) {
            var bucket = endpointMap[keys[k]];
            if (!bucket) continue;
            for (var b = 0; b < bucket.length; b++) {
                var entry = bucket[b];
                if (used[entry.segIdx] || entry.segIdx === excludeSeg) continue;
                var pt = entry.endIdx === 0 ? segments[entry.segIdx].p0 : segments[entry.segIdx].p1;
                var d = distSq3(queryPt, pt);
                if (d < bestDist) {
                    bestDist = d;
                    bestSeg = entry.segIdx;
                    bestEnd = entry.endIdx;
                }
            }
        }
        return bestSeg >= 0 ? { segIdx: bestSeg, endIdx: bestEnd } : null;
    }

    var polylines = [];

    for (var s = 0; s < segments.length; s++) {
        if (used[s]) continue;
        used[s] = true;

        // Build chain as a deque (tail array grown forward, head array reversed later)
        var tailChain = [segments[s].p0, segments[s].p1];
        var headChain = [];

        // Extend tail
        var extending = true;
        while (extending) {
            extending = false;
            var tail = tailChain[tailChain.length - 1];
            var match = findNearest(tail, -1);
            if (match) {
                used[match.segIdx] = true;
                var seg = segments[match.segIdx];
                // match.endIdx is the end that matched our tail; push the OTHER end
                if (match.endIdx === 0) {
                    tailChain.push(seg.p1);
                } else {
                    tailChain.push(seg.p0);
                }
                extending = true;
            }
        }

        // Extend head (grow headChain forward, reverse later)
        extending = true;
        while (extending) {
            extending = false;
            var head = headChain.length > 0 ? headChain[headChain.length - 1] : tailChain[0];
            var match2 = findNearest(head, -1);
            if (match2) {
                used[match2.segIdx] = true;
                var seg2 = segments[match2.segIdx];
                if (match2.endIdx === 0) {
                    headChain.push(seg2.p1);
                } else {
                    headChain.push(seg2.p0);
                }
                extending = true;
            }
        }

        // Combine: reverse headChain + tailChain
        if (headChain.length > 0) {
            headChain.reverse();
            var chain = headChain.concat(tailChain);
            polylines.push(chain);
        } else {
            polylines.push(tailChain);
        }
    }

    return polylines;
}

/**
 * Simplify a polyline by enforcing a minimum vertex spacing.
 *
 * Walks the polyline from the first point to the last, accumulating
 * distance.  Intermediate vertices are only kept when the accumulated
 * distance since the last kept vertex reaches or exceeds `spacing`.
 * The first and last points are always preserved.
 *
 * @param {Array<{x:number,y:number,z:number}>} points - Ordered polyline vertices
 * @param {number} spacing - Minimum distance between kept vertices (0 = keep all)
 * @returns {Array<{x:number,y:number,z:number}>} Simplified polyline
 */
export function simplifyPolyline(points, spacing) {
    if (points.length <= 2 || spacing <= 0) return points;

    var result = [points[0]];
    var accumulated = 0;

    for (var i = 1; i < points.length - 1; i++) {
        accumulated += dist3(points[i - 1], points[i]);
        if (accumulated >= spacing) {
            result.push(points[i]);
            accumulated = 0;
        }
    }

    // Always keep last point
    result.push(points[points.length - 1]);

    return result;
}

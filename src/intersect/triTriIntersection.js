/**
 * @module intersect/triTriIntersection
 *
 * Moller triangle-triangle intersection test.
 *
 * Determines whether two triangles intersect and, if so, computes the
 * line segment that lies on both triangles.  Based on the Moller (1997)
 * separating-axis / interval-overlap method.
 *
 * Exports:
 *  - triTriIntersection(triA, triB)          -- segment or null
 *  - triTriIntersectionDetailed(triA, triB)  -- signed distances + segLen
 *  - computeTriInterval(tri, lineDir, linePoint, d0, d1, d2)
 *  - findLinePoint(nA, dA, nB, dB, lineDir)
 */

import { triNormal } from "../normals/triNormal.js";
import { cross } from "../util/math.js";

/**
 * Moller triangle-triangle intersection.
 *
 * Projects each triangle onto the plane of the other, computes the
 * parametric overlap of their crossing intervals on the plane-plane
 * intersection line, and returns the resulting 3-D segment.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} triA
 * @param {{ v0: Object, v1: Object, v2: Object }} triB
 * @returns {{ p0: {x:number,y:number,z:number}, p1: {x:number,y:number,z:number} } | null}
 *          Intersection segment, or null when no intersection exists.
 */
export function triTriIntersection(triA, triB) {
    // Plane of triangle B
    var nB = triNormal(triB);
    var dB = -(nB.x * triB.v0.x + nB.y * triB.v0.y + nB.z * triB.v0.z);

    // Signed distances of triA vertices to plane B
    var dA0 = nB.x * triA.v0.x + nB.y * triA.v0.y + nB.z * triA.v0.z + dB;
    var dA1 = nB.x * triA.v1.x + nB.y * triA.v1.y + nB.z * triA.v1.z + dB;
    var dA2 = nB.x * triA.v2.x + nB.y * triA.v2.y + nB.z * triA.v2.z + dB;

    // All on same side -> no intersection
    if (dA0 > 0 && dA1 > 0 && dA2 > 0) return null;
    if (dA0 < 0 && dA1 < 0 && dA2 < 0) return null;

    // Plane of triangle A
    var nA = triNormal(triA);
    var dA = -(nA.x * triA.v0.x + nA.y * triA.v0.y + nA.z * triA.v0.z);

    // Signed distances of triB vertices to plane A
    var dB0 = nA.x * triB.v0.x + nA.y * triB.v0.y + nA.z * triB.v0.z + dA;
    var dB1 = nA.x * triB.v1.x + nA.y * triB.v1.y + nA.z * triB.v1.z + dA;
    var dB2 = nA.x * triB.v2.x + nA.y * triB.v2.y + nA.z * triB.v2.z + dA;

    // All on same side -> no intersection
    if (dB0 > 0 && dB1 > 0 && dB2 > 0) return null;
    if (dB0 < 0 && dB1 < 0 && dB2 < 0) return null;

    // Near-parallel planes
    var dotN = nA.x * nB.x + nA.y * nB.y + nA.z * nB.z;
    if (Math.abs(dotN) > 0.9999) return null;

    // Intersection line direction
    var lineDir = cross(nA, nB);
    var lineDirLen = Math.sqrt(lineDir.x * lineDir.x + lineDir.y * lineDir.y + lineDir.z * lineDir.z);
    if (lineDirLen < 1e-12) return null;
    lineDir.x /= lineDirLen;
    lineDir.y /= lineDirLen;
    lineDir.z /= lineDirLen;

    // A point on the intersection line (needed for relative projection)
    var linePoint = findLinePoint(nA, dA, nB, dB, lineDir);
    if (!linePoint) return null;

    // Project each triangle's crossing edges onto the line
    var intervalA = computeTriInterval(triA, lineDir, linePoint, dA0, dA1, dA2);
    if (!intervalA) return null;

    var intervalB = computeTriInterval(triB, lineDir, linePoint, dB0, dB1, dB2);
    if (!intervalB) return null;

    // Overlap of intervals
    var overlapMin = Math.max(intervalA.min, intervalB.min);
    var overlapMax = Math.min(intervalA.max, intervalB.max);

    if (overlapMin >= overlapMax - 1e-10) return null;

    // Convert parametric overlap back to 3-D
    var p0 = {
        x: linePoint.x + lineDir.x * overlapMin,
        y: linePoint.y + lineDir.y * overlapMin,
        z: linePoint.z + lineDir.z * overlapMin
    };
    var p1 = {
        x: linePoint.x + lineDir.x * overlapMax,
        y: linePoint.y + lineDir.y * overlapMax,
        z: linePoint.z + lineDir.z * overlapMax
    };

    // Skip degenerate segments
    var dx = p0.x - p1.x, dy = p0.y - p1.y, dz = p0.z - p1.z;
    if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 1e-8) return null;

    return { p0: p0, p1: p1 };
}

/**
 * Moller triangle-triangle intersection with signed-distance metadata.
 *
 * Identical rejection logic to {@link triTriIntersection} but instead of
 * returning the 3-D segment it returns the signed-distance arrays and the
 * parametric segment length, which callers (e.g. boolean classifiers) need
 * for inside/outside determination.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} triA
 * @param {{ v0: Object, v1: Object, v2: Object }} triB
 * @returns {{ dA: [number,number,number], dB: [number,number,number], segLen: number } | null}
 *          dA = signed distances of triA vertices to plane(triB),
 *          dB = signed distances of triB vertices to plane(triA),
 *          segLen = parametric length of the intersection segment.
 */
export function triTriIntersectionDetailed(triA, triB) {
    var nB = triNormal(triB);
    var dB = -(nB.x * triB.v0.x + nB.y * triB.v0.y + nB.z * triB.v0.z);

    var dA0 = nB.x * triA.v0.x + nB.y * triA.v0.y + nB.z * triA.v0.z + dB;
    var dA1 = nB.x * triA.v1.x + nB.y * triA.v1.y + nB.z * triA.v1.z + dB;
    var dA2 = nB.x * triA.v2.x + nB.y * triA.v2.y + nB.z * triA.v2.z + dB;

    if (dA0 > 0 && dA1 > 0 && dA2 > 0) return null;
    if (dA0 < 0 && dA1 < 0 && dA2 < 0) return null;

    var nA = triNormal(triA);
    var dA = -(nA.x * triA.v0.x + nA.y * triA.v0.y + nA.z * triA.v0.z);

    var dB0 = nA.x * triB.v0.x + nA.y * triB.v0.y + nA.z * triB.v0.z + dA;
    var dB1 = nA.x * triB.v1.x + nA.y * triB.v1.y + nA.z * triB.v1.z + dA;
    var dB2 = nA.x * triB.v2.x + nA.y * triB.v2.y + nA.z * triB.v2.z + dA;

    if (dB0 > 0 && dB1 > 0 && dB2 > 0) return null;
    if (dB0 < 0 && dB1 < 0 && dB2 < 0) return null;

    var dotN = nA.x * nB.x + nA.y * nB.y + nA.z * nB.z;
    if (Math.abs(dotN) > 0.9999) return null;

    var lineDir = cross(nA, nB);
    var lineDirLen = Math.sqrt(lineDir.x * lineDir.x + lineDir.y * lineDir.y + lineDir.z * lineDir.z);
    if (lineDirLen < 1e-12) return null;
    lineDir.x /= lineDirLen; lineDir.y /= lineDirLen; lineDir.z /= lineDirLen;

    var linePoint = findLinePoint(nA, dA, nB, dB, lineDir);
    if (!linePoint) return null;

    var intervalA = computeTriInterval(triA, lineDir, linePoint, dA0, dA1, dA2);
    if (!intervalA) return null;

    var intervalB = computeTriInterval(triB, lineDir, linePoint, dB0, dB1, dB2);
    if (!intervalB) return null;

    var overlapMin = Math.max(intervalA.min, intervalB.min);
    var overlapMax = Math.min(intervalA.max, intervalB.max);
    if (overlapMin >= overlapMax - 1e-10) return null;

    var segLen = overlapMax - overlapMin;
    if (segLen < 1e-8) return null;

    return {
        dA: [dA0, dA1, dA2],
        dB: [dB0, dB1, dB2],
        segLen: segLen
    };
}

/**
 * Compute the parametric interval where a triangle crosses the
 * plane-plane intersection line.
 *
 * For each triangle edge that straddles the opposing plane (sign change
 * in the signed distances d0, d1, d2) the crossing point is projected
 * onto `lineDir` relative to `linePoint`.  Vertices exactly on the plane
 * are also projected.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} tri
 * @param {{ x: number, y: number, z: number }} lineDir  - Unit direction of intersection line
 * @param {{ x: number, y: number, z: number }} linePoint - Reference point on the line
 * @param {number} d0 - Signed distance of tri.v0 to the opposing plane
 * @param {number} d1 - Signed distance of tri.v1 to the opposing plane
 * @param {number} d2 - Signed distance of tri.v2 to the opposing plane
 * @returns {{ min: number, max: number } | null} Parametric interval, or null if fewer than 2 crossings
 */
export function computeTriInterval(tri, lineDir, linePoint, d0, d1, d2) {
    var verts = [tri.v0, tri.v1, tri.v2];
    var dists = [d0, d1, d2];
    var params = [];

    // Find edges that cross the plane (sign change in distances)
    for (var i = 0; i < 3; i++) {
        var j = (i + 1) % 3;
        var di = dists[i];
        var dj = dists[j];

        if ((di > 0 && dj < 0) || (di < 0 && dj > 0)) {
            // Edge crosses the plane
            var t = di / (di - dj);
            var pt = {
                x: verts[i].x + t * (verts[j].x - verts[i].x),
                y: verts[i].y + t * (verts[j].y - verts[i].y),
                z: verts[i].z + t * (verts[j].z - verts[i].z)
            };
            // Relative projection onto line (relative to linePoint for UTM precision)
            var param = (pt.x - linePoint.x) * lineDir.x + (pt.y - linePoint.y) * lineDir.y + (pt.z - linePoint.z) * lineDir.z;
            params.push(param);
        } else if (Math.abs(di) < 1e-10) {
            // Vertex on the plane -- relative projection
            var param2 = (verts[i].x - linePoint.x) * lineDir.x + (verts[i].y - linePoint.y) * lineDir.y + (verts[i].z - linePoint.z) * lineDir.z;
            params.push(param2);
        }
    }

    if (params.length < 2) return null;

    // Deduplicate very close values
    params.sort(function (a, b) { return a - b; });

    return { min: params[0], max: params[params.length - 1] };
}

/**
 * Find a point on the intersection line of two planes.
 *
 * Sets the dominant component of `lineDir` to zero and solves the
 * resulting 2x2 system via Cramer's rule.
 *
 * @param {{ x: number, y: number, z: number }} nA - Normal of plane A
 * @param {number} dA - Plane constant for A  (nA . p + dA = 0)
 * @param {{ x: number, y: number, z: number }} nB - Normal of plane B
 * @param {number} dB - Plane constant for B
 * @param {{ x: number, y: number, z: number }} lineDir - Direction of the intersection line
 * @returns {{ x: number, y: number, z: number } | null}
 */
export function findLinePoint(nA, dA, nB, dB, lineDir) {
    // Find the dominant axis of lineDir to set it to 0
    var ax = Math.abs(lineDir.x);
    var ay = Math.abs(lineDir.y);
    var az = Math.abs(lineDir.z);

    var px, py, pz;

    if (az >= ax && az >= ay) {
        // Set z = 0, solve for x, y via Cramer's rule
        var det = nA.x * nB.y - nA.y * nB.x;
        if (Math.abs(det) < 1e-12) return null;
        px = (-dA * nB.y + dB * nA.y) / det;
        py = (nA.x * (-dB) - nB.x * (-dA)) / det;
        pz = 0;
    } else if (ay >= ax) {
        // Set y = 0, solve for x, z via Cramer's rule
        var det2 = nA.x * nB.z - nA.z * nB.x;
        if (Math.abs(det2) < 1e-12) return null;
        px = (-dA * nB.z + dB * nA.z) / det2;
        py = 0;
        pz = (nA.x * (-dB) - nB.x * (-dA)) / det2;
    } else {
        // Set x = 0, solve for y, z via Cramer's rule
        var det3 = nA.y * nB.z - nA.z * nB.y;
        if (Math.abs(det3) < 1e-12) return null;
        px = 0;
        py = (-dA * nB.z + dB * nA.z) / det3;
        pz = (nA.y * (-dB) - nB.y * (-dA)) / det3;
    }

    return { x: px, y: py, z: pz };
}

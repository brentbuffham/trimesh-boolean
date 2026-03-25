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

import { orient3d } from "robust-predicates";
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
    // Robust orientation: signed distances of triA vertices to plane(triB)
    // orient3d returns a value proportional to 6× signed tetrahedron volume;
    // its sign is guaranteed correct even for near-degenerate configurations.
    var dA0 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v0.x, triA.v0.y, triA.v0.z);
    var dA1 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v1.x, triA.v1.y, triA.v1.z);
    var dA2 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v2.x, triA.v2.y, triA.v2.z);

    // All on same side -> no intersection
    if (dA0 > 0 && dA1 > 0 && dA2 > 0) return null;
    if (dA0 < 0 && dA1 < 0 && dA2 < 0) return null;

    // Robust orientation: signed distances of triB vertices to plane(triA)
    var dB0 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v0.x, triB.v0.y, triB.v0.z);
    var dB1 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v1.x, triB.v1.y, triB.v1.z);
    var dB2 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v2.x, triB.v2.y, triB.v2.z);

    // All on same side -> no intersection
    if (dB0 > 0 && dB1 > 0 && dB2 > 0) return null;
    if (dB0 < 0 && dB1 < 0 && dB2 < 0) return null;

    // Float normals for geometric computation (line direction, projections)
    var nA = triNormal(triA);
    var nB = triNormal(triB);

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

    // Plane constants for line-point computation
    var planeDA = -(nA.x * triA.v0.x + nA.y * triA.v0.y + nA.z * triA.v0.z);
    var planeDB = -(nB.x * triB.v0.x + nB.y * triB.v0.y + nB.z * triB.v0.z);

    // A point on the intersection line (needed for relative projection)
    var linePoint = findLinePoint(nA, planeDA, nB, planeDB, lineDir);
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

    // Reproject onto both triangle planes to eliminate floating-point drift.
    // Solves for the minimal correction in the span of both normals so the
    // point lies exactly on both planes: P' = P - alpha*nA - beta*nB
    var denom = 1 - dotN * dotN;
    if (Math.abs(denom) > 1e-15) {
        var invD = 1 / denom;
        var rA0 = nA.x * p0.x + nA.y * p0.y + nA.z * p0.z + planeDA;
        var rB0 = nB.x * p0.x + nB.y * p0.y + nB.z * p0.z + planeDB;
        var a0 = (rA0 - dotN * rB0) * invD;
        var b0 = (rB0 - dotN * rA0) * invD;
        p0.x -= a0 * nA.x + b0 * nB.x;
        p0.y -= a0 * nA.y + b0 * nB.y;
        p0.z -= a0 * nA.z + b0 * nB.z;

        var rA1 = nA.x * p1.x + nA.y * p1.y + nA.z * p1.z + planeDA;
        var rB1 = nB.x * p1.x + nB.y * p1.y + nB.z * p1.z + planeDB;
        var a1 = (rA1 - dotN * rB1) * invD;
        var b1 = (rB1 - dotN * rA1) * invD;
        p1.x -= a1 * nA.x + b1 * nB.x;
        p1.y -= a1 * nA.y + b1 * nB.y;
        p1.z -= a1 * nA.z + b1 * nB.z;
    }

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
    // Robust orientation: signed distances of triA vertices to plane(triB)
    var dA0 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v0.x, triA.v0.y, triA.v0.z);
    var dA1 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v1.x, triA.v1.y, triA.v1.z);
    var dA2 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v2.x, triA.v2.y, triA.v2.z);

    if (dA0 > 0 && dA1 > 0 && dA2 > 0) return null;
    if (dA0 < 0 && dA1 < 0 && dA2 < 0) return null;

    // Robust orientation: signed distances of triB vertices to plane(triA)
    var dB0 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v0.x, triB.v0.y, triB.v0.z);
    var dB1 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v1.x, triB.v1.y, triB.v1.z);
    var dB2 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v2.x, triB.v2.y, triB.v2.z);

    if (dB0 > 0 && dB1 > 0 && dB2 > 0) return null;
    if (dB0 < 0 && dB1 < 0 && dB2 < 0) return null;

    var nA = triNormal(triA);
    var nB = triNormal(triB);

    var dotN = nA.x * nB.x + nA.y * nB.y + nA.z * nB.z;
    if (Math.abs(dotN) > 0.9999) return null;

    var lineDir = cross(nA, nB);
    var lineDirLen = Math.sqrt(lineDir.x * lineDir.x + lineDir.y * lineDir.y + lineDir.z * lineDir.z);
    if (lineDirLen < 1e-12) return null;
    lineDir.x /= lineDirLen; lineDir.y /= lineDirLen; lineDir.z /= lineDirLen;

    var planeDA = -(nA.x * triA.v0.x + nA.y * triA.v0.y + nA.z * triA.v0.z);
    var planeDB = -(nB.x * triB.v0.x + nB.y * triB.v0.y + nB.z * triB.v0.z);

    var linePoint = findLinePoint(nA, planeDA, nB, planeDB, lineDir);
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
        } else if (di === 0) {
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

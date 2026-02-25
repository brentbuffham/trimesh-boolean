/**
 * @module normals/triNormal
 *
 * Compute the unit normal of a triangle from its three vertices.
 */

import { cross } from "../util/math.js";

/**
 * Compute the unit face normal of a triangle.
 *
 * Uses the cross product of edges (v0->v1) x (v0->v2) and normalises
 * to unit length.  Returns the Z-up fallback {0,0,1} for degenerate
 * (zero-area) triangles.
 *
 * @param {{ v0: {x:number,y:number,z:number}, v1: {x:number,y:number,z:number}, v2: {x:number,y:number,z:number} }} tri
 * @returns {{ x: number, y: number, z: number }} Unit normal vector
 */
export function triNormal(tri) {
    var e1 = { x: tri.v1.x - tri.v0.x, y: tri.v1.y - tri.v0.y, z: tri.v1.z - tri.v0.z };
    var e2 = { x: tri.v2.x - tri.v0.x, y: tri.v2.y - tri.v0.y, z: tri.v2.z - tri.v0.z };
    var n = cross(e1, e2);
    var len = Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
    if (len < 1e-15) return { x: 0, y: 0, z: 1 };
    return { x: n.x / len, y: n.y / len, z: n.z / len };
}

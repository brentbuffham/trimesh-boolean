/**
 * @module intersect/spatialGrid
 *
 * Uniform spatial grid for accelerating triangle-pair intersection tests.
 *
 * Triangles are binned into 2-D (XY) grid cells based on their axis-aligned
 * bounding boxes.  Querying the grid with a bounding box returns candidate
 * triangle indices that share at least one cell, dramatically reducing the
 * number of exact Moller tests required.
 *
 * Exports:
 *  - buildSpatialGrid(tris, cellSize)
 *  - queryGrid(grid, bb, cellSize)
 *  - computeBBox(tris)
 *  - triBBox(tri)
 *  - bboxOverlap(a, b)
 *  - estimateAvgEdge(tris)
 */

import { dist3 } from "../util/math.js";

/**
 * Build a 2-D spatial hash grid from an array of triangles.
 *
 * Each triangle is inserted into every XY cell that its axis-aligned
 * bounding box overlaps.  The grid is keyed by "cellX,cellY" strings
 * and each bucket holds an array of triangle indices.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} tris
 * @param {number} cellSize - Width/height of each grid cell (world units)
 * @returns {Object.<string, number[]>} Grid mapping cell keys to triangle index arrays
 */
export function buildSpatialGrid(tris, cellSize) {
    var grid = {};

    for (var i = 0; i < tris.length; i++) {
        var bb = triBBox(tris[i]);
        var x0 = Math.floor(bb.minX / cellSize);
        var y0 = Math.floor(bb.minY / cellSize);
        var x1 = Math.floor(bb.maxX / cellSize);
        var y1 = Math.floor(bb.maxY / cellSize);

        for (var gx = x0; gx <= x1; gx++) {
            for (var gy = y0; gy <= y1; gy++) {
                var key = gx + "," + gy;
                if (!grid[key]) grid[key] = [];
                grid[key].push(i);
            }
        }
    }

    return grid;
}

/**
 * Query the spatial grid for triangle indices whose cells overlap a
 * given bounding box.
 *
 * Returned indices are de-duplicated (a triangle spanning multiple cells
 * appears only once).
 *
 * @param {Object.<string, number[]>} grid - Grid built by {@link buildSpatialGrid}
 * @param {{ minX: number, minY: number, maxX: number, maxY: number }} bb - Query bounding box
 * @param {number} cellSize - Same cell size used when building the grid
 * @returns {number[]} Unique triangle indices
 */
export function queryGrid(grid, bb, cellSize) {
    var x0 = Math.floor(bb.minX / cellSize);
    var y0 = Math.floor(bb.minY / cellSize);
    var x1 = Math.floor(bb.maxX / cellSize);
    var y1 = Math.floor(bb.maxY / cellSize);

    var seen = {};
    var result = [];

    for (var gx = x0; gx <= x1; gx++) {
        for (var gy = y0; gy <= y1; gy++) {
            var key = gx + "," + gy;
            var cell = grid[key];
            if (!cell) continue;
            for (var c = 0; c < cell.length; c++) {
                var idx = cell[c];
                if (!seen[idx]) {
                    seen[idx] = true;
                    result.push(idx);
                }
            }
        }
    }

    return result;
}

/**
 * Compute the axis-aligned bounding box of a triangle array.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} tris
 * @returns {{ minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number }}
 */
export function computeBBox(tris) {
    var minX = Infinity, minY = Infinity, minZ = Infinity;
    var maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

    for (var i = 0; i < tris.length; i++) {
        var t = tris[i];
        var verts = [t.v0, t.v1, t.v2];
        for (var j = 0; j < 3; j++) {
            var v = verts[j];
            if (v.x < minX) minX = v.x;
            if (v.y < minY) minY = v.y;
            if (v.z < minZ) minZ = v.z;
            if (v.x > maxX) maxX = v.x;
            if (v.y > maxY) maxY = v.y;
            if (v.z > maxZ) maxZ = v.z;
        }
    }

    return { minX: minX, minY: minY, minZ: minZ, maxX: maxX, maxY: maxY, maxZ: maxZ };
}

/**
 * Compute the axis-aligned bounding box of a single triangle.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} tri
 * @returns {{ minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number }}
 */
export function triBBox(tri) {
    return {
        minX: Math.min(tri.v0.x, tri.v1.x, tri.v2.x),
        minY: Math.min(tri.v0.y, tri.v1.y, tri.v2.y),
        minZ: Math.min(tri.v0.z, tri.v1.z, tri.v2.z),
        maxX: Math.max(tri.v0.x, tri.v1.x, tri.v2.x),
        maxY: Math.max(tri.v0.y, tri.v1.y, tri.v2.y),
        maxZ: Math.max(tri.v0.z, tri.v1.z, tri.v2.z)
    };
}

/**
 * Test whether two axis-aligned bounding boxes overlap in all three axes.
 *
 * @param {{ minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number }} a
 * @param {{ minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number }} b
 * @returns {boolean}
 */
export function bboxOverlap(a, b) {
    return a.minX <= b.maxX && a.maxX >= b.minX &&
           a.minY <= b.maxY && a.maxY >= b.minY &&
           a.minZ <= b.maxZ && a.maxZ >= b.minZ;
}

/**
 * Estimate the average edge length of a triangle array by sampling
 * up to the first 100 triangles.
 *
 * Useful for choosing a spatial grid cell size proportional to the
 * mesh resolution.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} tris
 * @returns {number} Average edge length (defaults to 1.0 for empty input)
 */
export function estimateAvgEdge(tris) {
    if (tris.length === 0) return 1.0;
    var total = 0;
    var count = Math.min(tris.length, 100);
    for (var i = 0; i < count; i++) {
        var t = tris[i];
        total += dist3(t.v0, t.v1);
        total += dist3(t.v1, t.v2);
        total += dist3(t.v2, t.v0);
    }
    return total / (count * 3);
}

/**
 * @module boolean/closeBoundary
 *
 * Boundary closing operations for boolean result meshes. Provides two
 * strategies:
 *
 * 1. **buildCurtainAndCap** -- Extrude boundary edges vertically down to a
 *    floor plane, then triangulate the bottom cap. Useful for creating
 *    watertight solids from open surfaces.
 *
 * 2. **generateClosingTriangles** -- Iteratively fill boundary gaps by
 *    finding the nearest vertex to each boundary edge and forming a closing
 *    triangle. Works well for small gaps along seams.
 */

import { extractBoundaryLoops, triangulateLoop } from "../repair/boundaryLoops.js";
import { vKey, edgeKey } from "../util/math.js";

/**
 * Extrude remaining open boundary edges vertically down to a floor plane,
 * then triangulate the bottom cap with constrained Delaunay.
 *
 * For each boundary loop:
 * - Creates curtain wall quads (2 triangles per boundary edge)
 * - Triangulates the floor polygon with reversed winding (normals face down)
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} floorOffset - Metres below the minimum Z of the mesh (default 10)
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Additional triangles (curtain walls + bottom cap)
 */
export function buildCurtainAndCap(tris, floorOffset) {
	var result = extractBoundaryLoops(tris);
	if (result.loops.length === 0) {
		return [];
	}

	// Compute floorZ from all triangle vertices
	var minZ = Infinity;
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		if (tri.v0.z < minZ) minZ = tri.v0.z;
		if (tri.v1.z < minZ) minZ = tri.v1.z;
		if (tri.v2.z < minZ) minZ = tri.v2.z;
	}
	var floorZ = minZ - (floorOffset || 10);

	var extraTris = [];

	for (var li = 0; li < result.loops.length; li++) {
		var loop = result.loops[li];

		// Build curtain walls: for each boundary edge A->B, create 2 triangles (vertical quad)
		var floorVerts = []; // floor-level vertices for bottom cap
		for (var j = 0; j < loop.length; j++) {
			var a = loop[j];
			var b = loop[(j + 1) % loop.length];

			// Top vertices are the boundary vertices
			// Bottom vertices are at floorZ with same XY
			var aBot = { x: a.x, y: a.y, z: floorZ };
			var bBot = { x: b.x, y: b.y, z: floorZ };

			// Quad: A-top -> B-top -> B-bot -> A-bot
			// Triangle 1: A-top, B-top, B-bot  (winding: outward)
			extraTris.push({ v0: a, v1: b, v2: bBot });
			// Triangle 2: A-top, B-bot, A-bot
			extraTris.push({ v0: a, v1: bBot, v2: aBot });

			floorVerts.push(aBot);
		}

		// Bottom cap: triangulate the floor polygon using Constrained Delaunay
		// Floor is flat at floorZ, so use triangulateLoop which projects to best-fit plane
		var capTris = triangulateLoop(floorVerts);
		for (var ci = 0; ci < capTris.length; ci++) {
			// Reverse winding so normals face downward
			extraTris.push({
				v0: capTris[ci].v2,
				v1: capTris[ci].v1,
				v2: capTris[ci].v0
			});
		}
	}

	return extraTris;
}

/**
 * For each boundary edge, find the nearest vertex (not already connected)
 * that can form a valid closing triangle. Iterates until no more gaps can
 * be filled or a pass adds no new triangles.
 *
 * Uses a 3D spatial grid for fast nearest-neighbor lookup and validates
 * that new edges do not exceed manifold edge sharing limits (max 2 triangles
 * per edge).
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} maxDist - Maximum search distance for closing vertex
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Updated triangle soup with closing triangles added
 */
export function generateClosingTriangles(tris, maxDist) {
	/**
	 * Squared 3D distance between two points.
	 * @param {{ x: number, y: number, z: number }} a
	 * @param {{ x: number, y: number, z: number }} b
	 * @returns {number}
	 */
	function dist3sq(a, b) {
		var dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
		return dx * dx + dy * dy + dz * dz;
	}

	/**
	 * Area of a triangle in 3D via cross product.
	 * @param {{ x: number, y: number, z: number }} a
	 * @param {{ x: number, y: number, z: number }} b
	 * @param {{ x: number, y: number, z: number }} c
	 * @returns {number}
	 */
	function triArea(a, b, c) {
		var abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
		var acx = c.x - a.x, acy = c.y - a.y, acz = c.z - a.z;
		var cx = aby * acz - abz * acy;
		var cy = abz * acx - abx * acz;
		var cz = abx * acy - aby * acx;
		return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
	}

	var maxDistSq = maxDist * maxDist;
	var totalAdded = 0;
	var maxPasses = 20;

	for (var pass = 0; pass < maxPasses; pass++) {
		// Build edge count map and vertex position map
		var edgeMap = {};  // edgeKey -> count
		var vertPos = {};  // vKey -> {x,y,z}

		for (var i = 0; i < tris.length; i++) {
			var tri = tris[i];
			var verts = [tri.v0, tri.v1, tri.v2];
			var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];

			for (var e = 0; e < 3; e++) {
				vertPos[keys[e]] = verts[e];
				var ne = (e + 1) % 3;
				var ek = edgeKey(keys[e], keys[ne]);
				edgeMap[ek] = (edgeMap[ek] || 0) + 1;
			}
		}

		// Collect boundary edges (count === 1)
		var boundaryEdges = [];

		for (var ek2 in edgeMap) {
			if (edgeMap[ek2] === 1) {
				var parts = ek2.split("|");
				boundaryEdges.push({ k0: parts[0], k1: parts[1] });
			}
		}

		if (boundaryEdges.length === 0) {
			return tris;
		}

		// Build spatial grid of ALL vertices for fast nearest-neighbor lookup
		var cellSize = Math.max(maxDist, 1.0);
		var grid = {};
		var allKeys = Object.keys(vertPos);
		for (var vi = 0; vi < allKeys.length; vi++) {
			var vp = vertPos[allKeys[vi]];
			var gk = Math.floor(vp.x / cellSize) + "," + Math.floor(vp.y / cellSize) + "," + Math.floor(vp.z / cellSize);
			if (!grid[gk]) grid[gk] = [];
			grid[gk].push(allKeys[vi]);
		}

		// For each boundary edge, find the best closing vertex
		var newTris = [];
		var usedEdges = {}; // prevent double-closing an edge in one pass

		for (var bi = 0; bi < boundaryEdges.length; bi++) {
			var be = boundaryEdges[bi];
			var bek = edgeKey(be.k0, be.k1);
			if (usedEdges[bek]) continue;

			var v0 = vertPos[be.k0];
			var v1 = vertPos[be.k1];

			// Midpoint of boundary edge
			var mid = {
				x: (v0.x + v1.x) / 2,
				y: (v0.y + v1.y) / 2,
				z: (v0.z + v1.z) / 2
			};

			// Search nearby cells for candidate vertex
			var bestKey = null;
			var bestDistSq = Infinity;
			var mgx = Math.floor(mid.x / cellSize);
			var mgy = Math.floor(mid.y / cellSize);
			var mgz = Math.floor(mid.z / cellSize);

			for (var dx = -1; dx <= 1; dx++) {
				for (var dy = -1; dy <= 1; dy++) {
					for (var dz = -1; dz <= 1; dz++) {
						var cell = grid[(mgx + dx) + "," + (mgy + dy) + "," + (mgz + dz)];
						if (!cell) continue;
						for (var ci = 0; ci < cell.length; ci++) {
							var ck = cell[ci];
							// Skip the edge's own vertices
							if (ck === be.k0 || ck === be.k1) continue;

							var cv = vertPos[ck];
							var d2 = dist3sq(mid, cv);
							if (d2 > maxDistSq) continue;
							if (d2 >= bestDistSq) continue;

							// Check the two new edges wouldn't be over-shared (>2 uses)
							var ek0c = edgeKey(be.k0, ck);
							var ek1c = edgeKey(be.k1, ck);
							var c0 = edgeMap[ek0c] || 0;
							var c1 = edgeMap[ek1c] || 0;
							if (c0 >= 2 || c1 >= 2) continue;

							// Check triangle has reasonable area (not degenerate)
							var area = triArea(v0, v1, cv);
							if (area < 1e-6) continue;

							bestKey = ck;
							bestDistSq = d2;
						}
					}
				}
			}

			if (bestKey !== null) {
				var cv2 = vertPos[bestKey];
				newTris.push({ v0: v0, v1: v1, v2: cv2 });

				// Update edge counts so we don't double-close in this pass
				usedEdges[bek] = true;
				var ek0c2 = edgeKey(be.k0, bestKey);
				var ek1c2 = edgeKey(be.k1, bestKey);
				edgeMap[ek0c2] = (edgeMap[ek0c2] || 0) + 1;
				edgeMap[ek1c2] = (edgeMap[ek1c2] || 0) + 1;
				edgeMap[bek] = 2; // boundary edge now shared by 2 tris
			}
		}

		if (newTris.length === 0) {
			return tris;
		}

		// Append new triangles
		for (var ni = 0; ni < newTris.length; ni++) {
			tris.push(newTris[ni]);
		}
		totalAdded += newTris.length;
	}

	return tris;
}

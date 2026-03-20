/**
 * @module bms/bmsClassify
 *
 * Segment-constrained flood-fill classification using boundary topology.
 *
 * Intersection segment edges are barriers — flood fill stops at them,
 * producing connected regions. Classification uses TOPOLOGY, not ray casting:
 * the region that touches the input mesh's boundary edges = "outside".
 * All other regions = "inside" (enclosed by the intersection polyline,
 * cut off from the boundary).
 *
 * For closed meshes (no boundary edges), falls back to size heuristic
 * (smaller region = inside).
 */

import { vKey, edgeKey } from "../util/math.js";

/**
 * Build set of boundary edge vertex keys for a triangle soup.
 * Boundary edges appear exactly once. Returns a Set of vertex keys
 * that are endpoints of boundary edges.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} tris
 * @returns {Object.<string, boolean>} Set of vertex keys on boundary
 */
function buildBoundaryVertexSet(tris) {
	var edgeCount = {};
	var edgeVerts = {};

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(ks[e], ks[ne]);
			if (!edgeCount[ek]) {
				edgeCount[ek] = 0;
				edgeVerts[ek] = [ks[e], ks[ne]];
			}
			edgeCount[ek]++;
		}
	}

	var boundaryVerts = {};
	for (var ek2 in edgeCount) {
		if (edgeCount[ek2] === 1) {
			var verts = edgeVerts[ek2];
			boundaryVerts[verts[0]] = true;
			boundaryVerts[verts[1]] = true;
		}
	}

	return boundaryVerts;
}

/**
 * Classify mega soup triangles into inside/outside groups for each mesh.
 *
 * Strategy:
 * 1. Build barrier edges from intersection segments
 * 2. Build edge adjacency excluding barriers
 * 3. Flood fill to find connected components
 * 4. For each mesh: the component touching the mesh's boundary = OUTSIDE
 *    All other components = INSIDE
 * 5. For closed meshes (no boundary): use size heuristic (smaller = inside)
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object, mesh: string, origIdx: number }>} megaSoup
 * @param {Array<Array<PoolVertex>>} closedPolylines
 * @param {Array<{ p0: PoolVertex, p1: PoolVertex, idxA: number, idxB: number }>} segments
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA - Original mesh A
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB - Original mesh B
 * @returns {{ aInside: Array, aOutside: Array, bInside: Array, bOutside: Array }}
 */
export function bmsClassify(megaSoup, closedPolylines, segments, trisA, trisB) {
	var n = megaSoup.length;

	// -- Step 1: Build barrier edge set from intersection segments --
	// Also collect all Steiner vertex keys — any edge where BOTH endpoints
	// are Steiner points is a barrier (even if it's not an exact segment edge).
	// This closes gaps caused by CDT producing slightly different edges.
	var barrierEdges = {};
	var steinerVertKeys = {};

	for (var si = 0; si < segments.length; si++) {
		var seg = segments[si];
		// Skip zero-length segments (pool dedup merged p0 and p1)
		if (seg.p0 === seg.p1) continue;
		var k0 = vKey(seg.p0);
		var k1 = vKey(seg.p1);
		if (k0 === k1) continue; // Same vKey — degenerate
		var ek = edgeKey(k0, k1);
		barrierEdges[ek] = true;
		steinerVertKeys[k0] = true;
		steinerVertKeys[k1] = true;
	}

	// -- Step 2: Build edge adjacency across mega soup, excluding barriers --
	var edgeToTris = {};

	for (var i = 0; i < n; i++) {
		var tri = megaSoup[i];
		var ks = [vKey(tri.v0), vKey(tri.v1), vKey(tri.v2)];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek2 = edgeKey(ks[e], ks[ne]);

			if (!edgeToTris[ek2]) edgeToTris[ek2] = [];
			edgeToTris[ek2].push(i);
		}
	}

	// Build neighbor list, excluding barrier edges
	var neighbors = new Array(n);
	for (var ni = 0; ni < n; ni++) neighbors[ni] = [];

	for (var ek3 in edgeToTris) {
		if (barrierEdges[ek3]) continue;

		var triList = edgeToTris[ek3];
		for (var a = 0; a < triList.length; a++) {
			for (var b = a + 1; b < triList.length; b++) {
				neighbors[triList[a]].push(triList[b]);
				neighbors[triList[b]].push(triList[a]);
			}
		}
	}

	// -- Step 3: Flood fill to find connected components --
	// Each component gets a unique ID. We track which mesh each component belongs to.
	var componentId = new Int32Array(n);
	for (var ci = 0; ci < n; ci++) componentId[ci] = -1;

	var components = []; // [{mesh, triIndices, triCount}]
	var nextCompId = 0;

	for (var seed = 0; seed < n; seed++) {
		if (componentId[seed] >= 0) continue;

		var compId = nextCompId++;
		var meshTag = megaSoup[seed].mesh;
		var triIndices = [];

		var queue = [seed];
		componentId[seed] = compId;
		var head = 0;

		while (head < queue.length) {
			var curr = queue[head++];
			triIndices.push(curr);

			var nbrs = neighbors[curr];
			for (var nbi = 0; nbi < nbrs.length; nbi++) {
				var nb = nbrs[nbi];
				if (componentId[nb] >= 0) continue;
				// Only flood within same mesh
				if (megaSoup[nb].mesh !== meshTag) continue;
				componentId[nb] = compId;
				queue.push(nb);
			}
		}

		components.push({
			id: compId,
			mesh: meshTag,
			triIndices: triIndices,
			triCount: triIndices.length
		});
	}

	// -- Step 4: Build boundary vertex sets for both input meshes --
	var boundaryVertsA = buildBoundaryVertexSet(trisA);
	var boundaryVertsB = buildBoundaryVertexSet(trisB);
	var hasBoundaryA = Object.keys(boundaryVertsA).length > 0;
	var hasBoundaryB = Object.keys(boundaryVertsB).length > 0;

	// -- Step 5: Classify each component --
	// For each component, check if ANY of its triangles has a vertex on the
	// input mesh's boundary. If yes → outside. If no → inside.
	// For closed meshes (no boundary), use size heuristic per mesh.

	var aInside = [], aOutside = [], bInside = [], bOutside = [];

	// Group components by mesh
	var aComps = [];
	var bComps = [];
	for (var gi = 0; gi < components.length; gi++) {
		if (components[gi].mesh === "A") aComps.push(components[gi]);
		else bComps.push(components[gi]);
	}

	// Classify mesh A components
	classifyMeshComponents(aComps, megaSoup, hasBoundaryA ? boundaryVertsA : null, aInside, aOutside);

	// Classify mesh B components
	classifyMeshComponents(bComps, megaSoup, hasBoundaryB ? boundaryVertsB : null, bInside, bOutside);

	// Debug: check how many barrier edges appear in edgeToTris
	var barrierHit = 0, barrierMiss = 0;
	for (var dbek in barrierEdges) {
		if (edgeToTris[dbek]) barrierHit++; else barrierMiss++;
	}
	// Log missing barrier edges to diagnose
	var missingBarriers = [];
	for (var dbek2 in barrierEdges) {
		if (!edgeToTris[dbek2]) missingBarriers.push(dbek2);
	}
	console.log("[BMS] Barrier edges: " + Object.keys(barrierEdges).length +
		" total, " + barrierHit + " found in soup edges, " + barrierMiss + " missing");
	if (missingBarriers.length > 0) {
		for (var mbi = 0; mbi < missingBarriers.length; mbi++) {
			console.log("[BMS] MISSING barrier: " + missingBarriers[mbi]);
		}
	}
	console.log("[BMS] Total soup edges: " + Object.keys(edgeToTris).length);

	// Debug: sample a barrier edge and a soup edge to compare format
	var sampleBarrier = Object.keys(barrierEdges)[0];
	var sampleSoup = Object.keys(edgeToTris)[0];
	if (sampleBarrier) console.log("[BMS] Sample barrier edge: " + sampleBarrier.substring(0, 80));
	if (sampleSoup) console.log("[BMS] Sample soup edge: " + sampleSoup.substring(0, 80));

	console.log("[BMS] Components: " + components.length + " total (" +
		aComps.length + " A, " + bComps.length + " B). " +
		"A: " + aInside.length + " inside, " + aOutside.length + " outside. " +
		"B: " + bInside.length + " inside, " + bOutside.length + " outside.");

	return {
		aInside: aInside,
		aOutside: aOutside,
		bInside: bInside,
		bOutside: bOutside
	};
}

/**
 * Classify a mesh's components as inside/outside.
 *
 * If boundaryVerts is provided (open mesh): component touching boundary = outside.
 * If boundaryVerts is null (closed mesh): largest component = outside.
 *
 * @param {Array} comps - Components for this mesh
 * @param {Array} megaSoup - Full mega soup
 * @param {Object|null} boundaryVerts - Boundary vertex keys, or null for closed mesh
 * @param {Array} insideOut - Output array for inside triangles
 * @param {Array} outsideOut - Output array for outside triangles
 */
function classifyMeshComponents(comps, megaSoup, boundaryVerts, insideOut, outsideOut) {
	if (comps.length === 0) return;

	// If only one component, it's all outside (no intersection cut it)
	if (comps.length === 1) {
		var tris1 = comps[0].triIndices;
		for (var i1 = 0; i1 < tris1.length; i1++) {
			var t1 = megaSoup[tris1[i1]];
			outsideOut.push({ v0: t1.v0, v1: t1.v1, v2: t1.v2 });
		}
		return;
	}

	if (boundaryVerts) {
		// Open mesh: check which components touch the boundary
		for (var ci = 0; ci < comps.length; ci++) {
			var comp = comps[ci];
			var touchesBoundary = false;

			for (var ti = 0; ti < comp.triIndices.length; ti++) {
				var tri = megaSoup[comp.triIndices[ti]];
				var vs = [vKey(tri.v0), vKey(tri.v1), vKey(tri.v2)];
				for (var vi = 0; vi < 3; vi++) {
					if (boundaryVerts[vs[vi]]) {
						touchesBoundary = true;
						break;
					}
				}
				if (touchesBoundary) break;
			}

			// Touches boundary → outside, doesn't → inside
			var target = touchesBoundary ? outsideOut : insideOut;
			for (var oi = 0; oi < comp.triIndices.length; oi++) {
				var ot = megaSoup[comp.triIndices[oi]];
				target.push({ v0: ot.v0, v1: ot.v1, v2: ot.v2 });
			}
		}
	} else {
		// Closed mesh: largest component = outside, rest = inside
		var maxIdx = 0;
		for (var mi = 1; mi < comps.length; mi++) {
			if (comps[mi].triCount > comps[maxIdx].triCount) maxIdx = mi;
		}

		for (var ci2 = 0; ci2 < comps.length; ci2++) {
			var target2 = (ci2 === maxIdx) ? outsideOut : insideOut;
			var tris2 = comps[ci2].triIndices;
			for (var ti2 = 0; ti2 < tris2.length; ti2++) {
				var t2 = megaSoup[tris2[ti2]];
				target2.push({ v0: t2.v0, v1: t2.v1, v2: t2.v2 });
			}
		}
	}
}

/**
 * @module bms/bmsClose
 *
 * Build a single mesh edge polygon per mesh that connects ALL intersection
 * polylines together via graph-walks and traces the mesh's open boundary.
 *
 * The mesh edge poly is ONE continuous closed polygon:
 *   boundary(magenta) → graphWalk(magenta) → IL1(yellow) → graphWalk(magenta) →
 *   IL2(yellow) → graphWalk(magenta) → boundary(magenta) → back to start
 *
 * This polygon divides the mesh into inside (enclosed by intersection lines)
 * and outside (connected to the boundary).
 */

import { vKey, edgeKey, distSq3 } from "../util/math.js";

// ── Boundary extraction ──

/**
 * Extract ordered boundary loop(s) from a triangle soup.
 * Returns the largest loop as an ordered array of {key, vertex}.
 */
function extractBoundaryLoop(tris) {
	var edgeCount = {};
	var edgeVerts = {};

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(ks[e], ks[ne]);
			if (!edgeCount[ek]) { edgeCount[ek] = 0; edgeVerts[ek] = { ka: ks[e], kb: ks[ne], a: vs[e], b: vs[ne] }; }
			edgeCount[ek]++;
		}
	}

	// Build boundary adjacency (edges with count === 1)
	var bdryAdj = {};
	var bdryVertMap = {};
	for (var ek2 in edgeCount) {
		if (edgeCount[ek2] !== 1) continue;
		var ev = edgeVerts[ek2];
		if (!bdryAdj[ev.ka]) bdryAdj[ev.ka] = [];
		bdryAdj[ev.ka].push(ev.kb);
		if (!bdryAdj[ev.kb]) bdryAdj[ev.kb] = [];
		bdryAdj[ev.kb].push(ev.ka);
		bdryVertMap[ev.ka] = ev.a;
		bdryVertMap[ev.kb] = ev.b;
	}

	// Walk the largest boundary loop
	var visited = {};
	var bestLoop = null;

	for (var startKey in bdryAdj) {
		if (visited[startKey]) continue;
		var loop = [];
		var current = startKey;
		while (current && !visited[current]) {
			visited[current] = true;
			loop.push({ key: current, vertex: bdryVertMap[current] });
			var neighbors = bdryAdj[current];
			var next = null;
			if (neighbors) {
				for (var ni = 0; ni < neighbors.length; ni++) {
					if (!visited[neighbors[ni]]) { next = neighbors[ni]; break; }
				}
			}
			current = next;
		}
		if (!bestLoop || loop.length > bestLoop.length) bestLoop = loop;
	}

	return bestLoop || [];
}

// ── Graph walk (BFS with parent tracking) ──

/**
 * Build full mesh vertex adjacency for graph-walking.
 * Optionally excludes barrier edges (intersection segments) so walks
 * go AROUND intersections, not through them.
 *
 * @param {Array} tris - Triangle soup
 * @param {Object} [barrierEdgeSet] - Set of edge keys to exclude
 * @returns {{ adj, vertMap }}
 */
function buildMeshVertexAdj(tris, barrierEdgeSet) {
	var adj = {};
	var vertMap = {};
	var seen = {};
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(ks[e], ks[ne]);
			if (!seen[ek]) {
				seen[ek] = true;
				// Skip barrier edges — walks must go around intersections
				if (barrierEdgeSet && barrierEdgeSet[ek]) {
					// Still register the vertices in vertMap, just don't connect them
					if (!vertMap[ks[e]]) vertMap[ks[e]] = vs[e];
					if (!vertMap[ks[ne]]) vertMap[ks[ne]] = vs[ne];
					continue;
				}
				if (!adj[ks[e]]) adj[ks[e]] = [];
				if (!adj[ks[ne]]) adj[ks[ne]] = [];
				adj[ks[e]].push(ks[ne]);
				adj[ks[ne]].push(ks[e]);
			}
			if (!vertMap[ks[e]]) vertMap[ks[e]] = vs[e];
			if (!vertMap[ks[ne]]) vertMap[ks[ne]] = vs[ne];
		}
	}
	return { adj: adj, vertMap: vertMap };
}

/**
 * BFS shortest path from startKey to targetKey through mesh vertex adjacency.
 * Returns array of vertex objects (inclusive of start and end), or null.
 */
function graphWalk(startKey, targetKey, meshAdj, meshVertMap, maxSteps) {
	if (startKey === targetKey) return meshVertMap[startKey] ? [meshVertMap[startKey]] : null;
	if (!meshAdj[startKey]) return null;

	var parent = {};
	parent[startKey] = null;
	var queue = [startKey];
	var head = 0;
	var found = null;

	while (head < queue.length && head < maxSteps) {
		var cur = queue[head++];
		var nbrs = meshAdj[cur];
		if (!nbrs) continue;
		for (var ni = 0; ni < nbrs.length; ni++) {
			var nk = nbrs[ni];
			if (parent[nk] !== undefined) continue;
			parent[nk] = cur;
			if (nk === targetKey) { found = nk; break; }
			queue.push(nk);
		}
		if (found) break;
	}

	if (!found) return null;

	var pathKeys = [];
	var k = found;
	while (k !== null) { pathKeys.push(k); k = parent[k]; }
	pathKeys.reverse();

	var path = [];
	for (var pi = 0; pi < pathKeys.length; pi++) {
		var v = meshVertMap[pathKeys[pi]];
		if (v) path.push(v);
	}
	return path.length > 0 ? path : null;
}

/**
 * BFS from startKey to the nearest key in targetSet.
 * Returns {path: [...vertices], targetKey: key} or null.
 */
function graphWalkToSet(startKey, targetSet, meshAdj, meshVertMap, maxSteps) {
	if (targetSet[startKey]) return { path: meshVertMap[startKey] ? [meshVertMap[startKey]] : [], targetKey: startKey };

	var parent = {};
	parent[startKey] = null;
	var queue = [startKey];
	var head = 0;
	var found = null;

	while (head < queue.length && head < maxSteps) {
		var cur = queue[head++];
		var nbrs = meshAdj[cur];
		if (!nbrs) continue;
		for (var ni = 0; ni < nbrs.length; ni++) {
			var nk = nbrs[ni];
			if (parent[nk] !== undefined) continue;
			parent[nk] = cur;
			if (targetSet[nk]) { found = nk; break; }
			queue.push(nk);
		}
		if (found) break;
	}

	if (!found) return null;

	var pathKeys = [];
	var k = found;
	while (k !== null) { pathKeys.push(k); k = parent[k]; }
	pathKeys.reverse();

	var path = [];
	for (var pi = 0; pi < pathKeys.length; pi++) {
		var v = meshVertMap[pathKeys[pi]];
		if (v) path.push(v);
	}
	return { path: path, targetKey: found };
}

/**
 * Walk along boundary loop from index startIdx to endIdx (inclusive).
 * Walks in the forward direction (wrapping around).
 */
function walkBoundarySegment(loop, startIdx, endIdx) {
	var result = [];
	var n = loop.length;
	var i = startIdx;
	while (true) {
		result.push(loop[i].vertex);
		if (i === endIdx) break;
		i = (i + 1) % n;
		if (result.length > n + 1) break; // safety
	}
	return result;
}

// ── Main entry point ──

/**
 * Build mesh edge polygons and closed polylines.
 *
 * For each mesh, builds ONE closed polygon connecting all intersection
 * chains via graph-walks and the mesh's open boundary.
 *
 * @param {Array<Array<PoolVertex>>} polylines - From bmsChain
 * @param {Array} trisA - Original mesh A triangles
 * @param {Array} trisB - Original mesh B triangles
 * @returns {{
 *   closedPolylines: Array<Array<Object>>,
 *   meshEdgePolys: {
 *     A: { segments: Array<{verts: Array, type: string}>, closed: boolean },
 *     B: { segments: Array<{verts: Array, type: string}>, closed: boolean }
 *   }
 * }}
 */
export function bmsClosePolylines(polylines, trisA, trisB, megaSoup, segments) {
	if (polylines.length === 0) {
		return {
			closedPolylines: [],
			meshEdgePolys: {
				A: { segments: [], closed: false },
				B: { segments: [], closed: false }
			}
		};
	}

	// Build barrier edge set from intersection segments
	var barrierEdgeSet = {};
	if (segments) {
		for (var si = 0; si < segments.length; si++) {
			var seg = segments[si];
			var sk0 = vKey(seg.p0);
			var sk1 = vKey(seg.p1);
			barrierEdgeSet[edgeKey(sk0, sk1)] = true;
		}
	}

	// Extract mega soup triangles per mesh (includes pool vertices from splits)
	var megaSoupA = [];
	var megaSoupB = [];
	if (megaSoup) {
		for (var mi = 0; mi < megaSoup.length; mi++) {
			if (megaSoup[mi].mesh === "A") megaSoupA.push(megaSoup[mi]);
			else megaSoupB.push(megaSoup[mi]);
		}
	}

	// Build mesh edge poly for each mesh
	// Use mega soup (with pool vertices) for graph-walking, original tris for boundary
	// Pass barrier edges so walks go AROUND intersections
	var meshEpA = buildMeshEdgePoly(polylines, trisA, megaSoupA.length > 0 ? megaSoupA : trisA, barrierEdgeSet);
	var meshEpB = buildMeshEdgePoly(polylines, trisB, megaSoupB.length > 0 ? megaSoupB : trisB, barrierEdgeSet);

	// Build combined closed polylines from the mesh edge polys
	var closedPolylines = [];
	// The intersection chains themselves (for barrier purposes)
	for (var pi = 0; pi < polylines.length; pi++) {
		closedPolylines.push(polylines[pi]);
	}

	return {
		closedPolylines: closedPolylines,
		meshEdgePolys: {
			A: meshEpA,
			B: meshEpB
		}
	};
}

/**
 * Build ONE mesh edge polygon for a single mesh.
 *
 * Connects all intersection chains via graph-walks and traces the
 * mesh's open boundary. Returns an ordered list of segments, each
 * tagged as "intersection" (yellow) or "walk" (magenta).
 *
 * @param {Array<Array<PoolVertex>>} chains - All intersection polylines
 * @param {Array} meshTris - This mesh's triangles
 * @returns {{ segments: Array<{verts: Array<Object>, type: string}>, closed: boolean }}
 */
function buildMeshEdgePoly(chains, meshTris, graphTris, barrierEdgeSet) {
	if (chains.length === 0) return { segments: [], closed: false };

	// Step 1: Extract boundary loop from ORIGINAL mesh (not mega soup)
	var boundaryLoop = extractBoundaryLoop(meshTris);
	var hasBoundary = boundaryLoop.length > 0;

	if (!hasBoundary) {
		var segs = [];
		for (var ci = 0; ci < chains.length; ci++) {
			segs.push({ verts: chains[ci].slice(), type: "intersection" });
		}
		return { segments: segs, closed: false };
	}

	// Step 2: Build mesh vertex adjacency from GRAPH TRIS (mega soup with pool vertices)
	// This ensures pool vertex keys are in the adjacency graph
	// Pass barrier edges so graph-walks go AROUND intersections, not through them
	var meshGraph = buildMeshVertexAdj(graphTris, barrierEdgeSet);

	// Build boundary vertex set and loop index map
	var bdryVertSet = {};
	var bdryKeyToIdx = {};
	for (var bi = 0; bi < boundaryLoop.length; bi++) {
		bdryVertSet[boundaryLoop[bi].key] = true;
		bdryKeyToIdx[boundaryLoop[bi].key] = bi;
	}

	// Step 3: For each chain, find its nearest boundary attachment point
	// Find the chain vertex closest to any boundary vertex, then graph-walk
	// from that chain vertex to the boundary to get the attachment.
	var chainAttachments = [];

	for (var ci2 = 0; ci2 < chains.length; ci2++) {
		var chain = chains[ci2];

		// Find the chain vertex nearest to the boundary
		// Use graph-walk from first chain vertex to boundary
		var chainVertKeys = {};
		for (var cvi = 0; cvi < chain.length; cvi++) {
			chainVertKeys[vKey(chain[cvi])] = cvi;
		}

		// Try graph-walk from each end of the chain to the boundary
		var firstKey = vKey(chain[0]);
		var gw = graphWalkToSet(firstKey, bdryVertSet, meshGraph.adj, meshGraph.vertMap, 10000);

		if (!gw) {
			// Chain can't reach boundary — skip
			continue;
		}

		var bdryIdx = bdryKeyToIdx[gw.targetKey];
		chainAttachments.push({
			chainIdx: ci2,
			chain: chain,
			chainEntryKey: firstKey,
			chainEntryIdx: 0,
			graphWalkToBoundary: gw.path,
			boundaryKey: gw.targetKey,
			boundaryLoopIdx: bdryIdx !== undefined ? bdryIdx : 0
		});
	}

	if (chainAttachments.length === 0) {
		// No chains could reach boundary
		var fallbackSegs = [];
		for (var fi = 0; fi < chains.length; fi++) {
			fallbackSegs.push({ verts: chains[fi].slice(), type: "intersection" });
		}
		return { segments: fallbackSegs, closed: false };
	}

	// Step 4: Sort chain attachments by their position along the boundary loop
	chainAttachments.sort(function (a, b) { return a.boundaryLoopIdx - b.boundaryLoopIdx; });

	// Step 5: Build the mesh edge poly
	// Walk along boundary, detouring into each chain via graph-walks
	var resultSegments = [];
	var n = chainAttachments.length;

	for (var ai = 0; ai < n; ai++) {
		var att = chainAttachments[ai];
		var nextAtt = chainAttachments[(ai + 1) % n];

		// 5a) Graph-walk from boundary to chain entry point (magenta)
		var gwIn = att.graphWalkToBoundary.slice().reverse(); // boundary→chain, so reverse the chain→boundary path
		if (gwIn.length >= 2) {
			resultSegments.push({ verts: gwIn, type: "walk" });
		}

		// 5b) Follow the intersection chain (yellow)
		resultSegments.push({ verts: att.chain.slice(), type: "intersection" });

		// 5c) Graph-walk from chain back to boundary (magenta)
		// For closed chains, we end up back at the entry point, so the walk back
		// is the same as the walk in (reversed)
		var chainEndKey = vKey(att.chain[att.chain.length - 1]);
		var isClosed = (chainEndKey === att.chainEntryKey) || (att.chain[att.chain.length - 1] === att.chain[0]);

		if (isClosed) {
			// Closed chain — walk back the same way we came in
			if (att.graphWalkToBoundary.length >= 2) {
				resultSegments.push({ verts: att.graphWalkToBoundary.slice(), type: "walk" });
			}
		} else {
			// Open chain — graph-walk from the chain END to boundary
			var gwOut = graphWalkToSet(chainEndKey, bdryVertSet, meshGraph.adj, meshGraph.vertMap, 10000);
			if (gwOut && gwOut.path.length >= 2) {
				resultSegments.push({ verts: gwOut.path, type: "walk" });
			}
		}

		// 5d) Edge-walk along boundary to next chain's attachment (magenta)
		var fromBdryIdx = att.boundaryLoopIdx;
		var toBdryIdx = nextAtt.boundaryLoopIdx;

		// Walk forward along boundary from current to next
		if (fromBdryIdx !== toBdryIdx) {
			var bdryWalk = walkBoundarySegment(boundaryLoop, fromBdryIdx, toBdryIdx);
			if (bdryWalk.length >= 2) {
				resultSegments.push({ verts: bdryWalk, type: "walk" });
			}
		}
	}

	return { segments: resultSegments, closed: true };
}

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
 * chainedOpenEdge — Walk the complete open boundary of a mesh as a CLOSED polygon.
 *
 * Uses a half-edge structure to correctly navigate bowtie (non-manifold)
 * vertices. At each boundary vertex, the next boundary half-edge is found
 * by walking the triangle fan around the vertex until the next boundary
 * edge is reached.
 *
 * Returns the largest loop as an ordered array of {key, vertex},
 * with the first vertex repeated at the end to close the polygon.
 * Returns [] if the mesh has no open edges.
 */
function chainedOpenEdge(tris) {
	// Step 1: Build half-edge structure
	// Each directed half-edge is keyed as "fromKey|toKey"
	var vertMap = {};     // vertKey → vertex object
	var halfEdges = {};   // "from|to" → true (exists)
	var heNextInTri = {}; // "from|to" → "to|next" (next half-edge in same triangle)

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];

		for (var e = 0; e < 3; e++) {
			vertMap[ks[e]] = vs[e];
			var ne = (e + 1) % 3;
			var nne = (e + 2) % 3;
			var heKey = ks[e] + "|" + ks[ne];
			halfEdges[heKey] = true;
			// Keep first occurrence — prevents non-manifold edges from
			// overwriting with a different triangle's fan data
			if (heNextInTri[heKey] === undefined) {
				heNextInTri[heKey] = ks[ne] + "|" + ks[nne];
			}
		}
	}

	// Step 2: Find boundary half-edges (no twin exists)
	var boundary = {};  // "from|to" → true
	var bdryFromVert = {}; // vertKey → ["from|to", ...] (boundary half-edges starting from this vert)

	for (var hk in halfEdges) {
		var sep = hk.indexOf("|");
		var fromK = hk.substring(0, sep);
		var toK = hk.substring(sep + 1);
		var twin = toK + "|" + fromK;
		if (!halfEdges[twin]) {
			boundary[hk] = true;
			if (!bdryFromVert[fromK]) bdryFromVert[fromK] = [];
			bdryFromVert[fromK].push(hk);
		}
	}

	if (Object.keys(boundary).length === 0) return [];

	// Step 3: Build "next boundary" map
	// For boundary half-edge A→V, find the next boundary half-edge V→B
	// by walking the triangle fan around V:
	//   A→V is in some triangle → next in that triangle is V→C
	//   if V→C is boundary → done (next = V→C)
	//   if V→C is interior → find twin C→V → next in twin's triangle is V→D
	//   repeat until we find a boundary half-edge
	var nextBoundary = {}; // "A|V" → "V|B"

	for (var bhk in boundary) {
		var sep2 = bhk.indexOf("|");
		var toV = bhk.substring(sep2 + 1);

		// Walk the fan around V starting from the next half-edge in A→V's triangle
		var cursor = heNextInTri[bhk]; // V→C in the same triangle as A→V
		var visited = {};  // cycle detection
		visited[bhk] = true;
		var safety = 1000;

		while (safety-- > 0) {
			if (!cursor || visited[cursor]) break;
			visited[cursor] = true;
			if (boundary[cursor]) {
				nextBoundary[bhk] = cursor;
				break;
			}
			// cursor is interior V→D — find twin D→V, then get next in that triangle
			var csep = cursor.indexOf("|");
			var cFrom = cursor.substring(0, csep);
			var cTo = cursor.substring(csep + 1);
			var cTwin = cTo + "|" + cFrom;
			if (!halfEdges[cTwin]) break; // broken mesh
			cursor = heNextInTri[cTwin]; // next in twin's triangle = V→E
		}
	}

	// Step 4: Walk boundary loops using nextBoundary
	var used = {};
	var bestLoop = null;

	for (var startHE in boundary) {
		if (used[startHE]) continue;

		var loop = [];
		var cur = startHE;
		var safety2 = Object.keys(boundary).length + 2;

		while (safety2-- > 0) {
			if (used[cur]) {
				// If we closed back to start, add closing vertex
				if (cur === startHE && loop.length > 0) {
					var csep2 = cur.indexOf("|");
					var closingKey = cur.substring(0, csep2);
					loop.push({ key: closingKey, vertex: vertMap[closingKey] });
				}
				break;
			}
			used[cur] = true;
			var csep3 = cur.indexOf("|");
			var curFrom = cur.substring(0, csep3);
			loop.push({ key: curFrom, vertex: vertMap[curFrom] });

			cur = nextBoundary[cur];
			if (!cur) break;
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
export { chainedOpenEdge };

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

	// Step 1: Trace open edges — complete closed boundary polygon
	var boundaryLoop = chainedOpenEdge(meshTris);
	var hasBoundary = boundaryLoop.length > 0;

	if (!hasBoundary) {
		// Closed mesh — just trace intersection(s)
		var segs = [];
		for (var ci = 0; ci < chains.length; ci++) {
			segs.push({ verts: chains[ci].slice(), type: "intersection" });
		}
		var isClosed = chains.length > 0 && chains[0].length > 2 &&
			chains[0][0] === chains[0][chains[0].length - 1];
		return { segments: segs, closed: isClosed };
	}

	// Step 2: Build mesh vertex adjacency (barriers excluded — walks can't cross intersection)
	var meshGraph = buildMeshVertexAdj(graphTris, barrierEdgeSet);

	// Build boundary vertex set and index map
	var bdryVertSet = {};
	var bdryKeyToIdx = {};
	for (var bi = 0; bi < boundaryLoop.length; bi++) {
		bdryVertSet[boundaryLoop[bi].key] = true;
		bdryKeyToIdx[boundaryLoop[bi].key] = bi;
	}
	var bdryLen = boundaryLoop.length - 1; // edges (loop is closed, first=last)

	// Step 3: For EACH chain, find graph walks to boundary.
	//
	// Closed chains (loops): ONE graph walk — enter and exit at the same vertex.
	// Open chains: TWO graph walks — enter at one endpoint, exit at the other.
	//   gwIn:  boundary → chain entry point
	//   gwOut: chain exit point → boundary
	//
	// connections[] stores: { chainIdx, gwIn, gwOut, bdryIdxIn, bdryIdxOut }
	var connections = [];
	var MAX_BFS = 50000;

	for (var ci2 = 0; ci2 < chains.length; ci2++) {
		var chain = chains[ci2];
		var chainIsClosed = chain.length > 2 && chain[0] === chain[chain.length - 1];

		if (chainIsClosed) {
			// Closed loop: find shortest walk from ANY loop vertex to boundary
			var bestGW = null;
			var bestLen = MAX_BFS;
			var bestVertIdx = -1;
			for (var cvi = 0; cvi < chain.length; cvi++) {
				var cvKey = vKey(chain[cvi]);
				var gw = graphWalkToSet(cvKey, bdryVertSet, meshGraph.adj, meshGraph.vertMap, bestLen);
				if (gw && gw.path.length < bestLen) {
					bestLen = gw.path.length;
					bestGW = gw;
					bestVertIdx = cvi;
				}
			}
			if (bestGW) {
				var bIdx = bdryKeyToIdx[bestGW.targetKey];
				connections.push({
					chainIdx: ci2,
					entryVertIdx: bestVertIdx,
					gwIn: bestGW.path.slice().reverse(),   // boundary → intersection
					gwOut: bestGW.path.slice(),             // intersection → boundary (same path)
					bdryIdxIn: bIdx !== undefined ? bIdx : 0,
					bdryIdxOut: bIdx !== undefined ? bIdx : 0
				});
			}
		} else {
			// Open chain: find walks from BOTH endpoints
			var startKey = vKey(chain[0]);
			var endKey = vKey(chain[chain.length - 1]);
			var gwStart = graphWalkToSet(startKey, bdryVertSet, meshGraph.adj, meshGraph.vertMap, MAX_BFS);
			var gwEnd = graphWalkToSet(endKey, bdryVertSet, meshGraph.adj, meshGraph.vertMap, MAX_BFS);

			if (gwStart && gwEnd) {
				// Enter at start, exit at end
				var bIdxIn = bdryKeyToIdx[gwStart.targetKey];
				var bIdxOut = bdryKeyToIdx[gwEnd.targetKey];
				connections.push({
					chainIdx: ci2,
					entryVertIdx: 0,
					gwIn: gwStart.path.slice().reverse(),  // boundary → chain[0]
					gwOut: gwEnd.path.slice(),              // chain[last] → boundary
					bdryIdxIn: bIdxIn !== undefined ? bIdxIn : 0,
					bdryIdxOut: bIdxOut !== undefined ? bIdxOut : 0
				});
			} else if (gwStart) {
				// Only start reached boundary — use same walk in/out
				var bIdx2 = bdryKeyToIdx[gwStart.targetKey];
				connections.push({
					chainIdx: ci2,
					entryVertIdx: 0,
					gwIn: gwStart.path.slice().reverse(),
					gwOut: gwStart.path.slice(),
					bdryIdxIn: bIdx2 !== undefined ? bIdx2 : 0,
					bdryIdxOut: bIdx2 !== undefined ? bIdx2 : 0
				});
			} else if (gwEnd) {
				// Only end reached boundary — reverse chain direction
				var bIdx3 = bdryKeyToIdx[gwEnd.targetKey];
				connections.push({
					chainIdx: ci2,
					entryVertIdx: chain.length - 1,
					gwIn: gwEnd.path.slice().reverse(),
					gwOut: gwEnd.path.slice(),
					bdryIdxIn: bIdx3 !== undefined ? bIdx3 : 0,
					bdryIdxOut: bIdx3 !== undefined ? bIdx3 : 0
				});
			}
			// If neither endpoint reached boundary, skip this chain
		}
	}

	if (connections.length === 0) {
		// No chain could reach the boundary — fallback
		var fallbackSegs = [];
		for (var fi = 0; fi < chains.length; fi++) {
			fallbackSegs.push({ verts: chains[fi].slice(), type: "intersection" });
		}
		return { segments: fallbackSegs, closed: false };
	}

	// Step 4: Sort connections by boundary entry index (position around the loop).
	// This ensures we visit intersections in order as we walk the boundary.
	connections.sort(function (a, b) { return a.bdryIdxIn - b.bdryIdxIn; });

	// Step 5: Build ONE continuous closed polygon.
	//
	// Algorithm (unidirectional, visits each intersection in boundary order):
	//   START at first connection's entry boundary point
	//   for each connection i:
	//     walk boundary → to connection[i].bdryIdxIn
	//     graph walk IN → from boundary to chain entry point
	//     traverse chain (entry → exit)
	//     graph walk OUT → from chain exit to boundary
	//   walk remaining boundary → back to start
	//   = CLOSED
	var resultSegments = [];
	var startBdryIdx = connections[0].bdryIdxIn;
	// Track current position on boundary (index into boundaryLoop)
	var curBdryIdx = startBdryIdx;

	for (var ci3 = 0; ci3 < connections.length; ci3++) {
		var conn = connections[ci3];

		// 5a) Boundary segment: from current position to this connection's entry
		if (ci3 > 0) {
			var fromIdx = curBdryIdx;
			var toIdx = conn.bdryIdxIn;
			if (fromIdx !== toIdx) {
				var bdrySegVerts = [];
				if (toIdx > fromIdx) {
					for (var bsi = fromIdx; bsi <= toIdx; bsi++) {
						bdrySegVerts.push(boundaryLoop[bsi].vertex);
					}
				} else {
					// Wrap around boundary
					for (var bsi2 = fromIdx; bsi2 < bdryLen; bsi2++) {
						bdrySegVerts.push(boundaryLoop[bsi2].vertex);
					}
					for (var bsi3 = 0; bsi3 <= toIdx; bsi3++) {
						bdrySegVerts.push(boundaryLoop[bsi3].vertex);
					}
				}
				if (bdrySegVerts.length >= 2) {
					resultSegments.push({ verts: bdrySegVerts, type: "walk" });
				}
			}
		}

		// 5b) Graph walk IN: boundary → chain entry vertex
		if (conn.gwIn.length >= 2) {
			resultSegments.push({ verts: conn.gwIn, type: "walk" });
		}

		// 5c) Orient chain so entry vertex is at [0].
		var chain = chains[conn.chainIdx].slice();
		var chainIsClosed = chain.length > 2 && chain[0] === chain[chain.length - 1];
		if (conn.entryVertIdx > 0) {
			if (chainIsClosed) {
				// Rotate closed loop: walk vertex at [0] and repeated at [end]
				var rotChain = [];
				for (var rci = conn.entryVertIdx; rci < chain.length - 1; rci++) {
					rotChain.push(chain[rci]);
				}
				for (var rci2 = 0; rci2 <= conn.entryVertIdx; rci2++) {
					rotChain.push(chain[rci2]);
				}
				chain = rotChain;
			} else if (conn.entryVertIdx === chain.length - 1) {
				// Open chain entered at last vertex — reverse to enter at [0]
				chain.reverse();
			}
		}
		resultSegments.push({ verts: chain, type: "intersection" });

		// 5d) Graph walk OUT: chain exit vertex → boundary
		if (conn.gwOut.length >= 2) {
			resultSegments.push({ verts: conn.gwOut, type: "walk" });
		}

		// Update current boundary position to exit point
		curBdryIdx = conn.bdryIdxOut;
	}

	// 5e) Final boundary segment: from last exit back to first entry (closing).
	var closingVerts = [];
	if (curBdryIdx !== startBdryIdx) {
		// Walk forward from last exit to first entry (wrapping around)
		for (var cbi = curBdryIdx; cbi < bdryLen; cbi++) {
			closingVerts.push(boundaryLoop[cbi].vertex);
		}
		for (var cbi2 = 0; cbi2 <= startBdryIdx; cbi2++) {
			closingVerts.push(boundaryLoop[cbi2].vertex);
		}
	} else {
		// Same position — full boundary loop
		for (var cbi3 = startBdryIdx; cbi3 < bdryLen; cbi3++) {
			closingVerts.push(boundaryLoop[cbi3].vertex);
		}
		for (var cbi4 = 0; cbi4 <= startBdryIdx; cbi4++) {
			closingVerts.push(boundaryLoop[cbi4].vertex);
		}
	}
	if (closingVerts.length >= 2) {
		resultSegments.push({ verts: closingVerts, type: "walk" });
	}

	return { segments: resultSegments, closed: true };
}

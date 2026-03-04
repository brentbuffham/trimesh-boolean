/**
 * @module repair/fillOpenLoops
 *
 * Fill closed boundary loops with fan triangles.
 *
 * Finds open edges (used by exactly 1 triangle), chains them into
 * polylines, and for each closed loop fills the hole with a fan from
 * vertex 0.  Winding is matched to the adjacent existing triangle so
 * that normals stay consistent.
 *
 * Exports:
 *  - fillOpenEdgeLoops(soup, tolerance)
 */

/**
 * Fill closed open-edge loops in a triangle soup with fan triangles.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup
 * @param {number} [tolerance=1e-6] - Vertex snapping tolerance for chaining
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Soup with fill triangles appended
 */
export function fillOpenEdgeLoops(soup, tolerance) {
	if (!soup || soup.length === 0) return soup;
	if (tolerance === undefined) tolerance = 1e-6;

	var PREC = 6;
	function vk(v) { return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC); }
	function ek(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

	// Step 1) Find open edges and record half-edge directions for winding
	var edgeCount = {};
	var edgeVerts = {};
	// halfEdgeDir[ek] = { from: vk, to: vk } — direction in the existing mesh
	var halfEdgeDir = {};
	for (var i = 0; i < soup.length; i++) {
		var tri = soup[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vk(vs[0]), vk(vs[1]), vk(vs[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var key = ek(ks[e], ks[ne]);
			if (!edgeCount[key]) {
				edgeCount[key] = 0;
				edgeVerts[key] = [vs[e], vs[ne]];
			}
			edgeCount[key]++;
			// Record the half-edge direction from this triangle
			halfEdgeDir[key] = { from: ks[e], to: ks[ne] };
		}
	}

	// Step 2) Collect open edges as directed segments
	var openEdges = [];
	for (var k in edgeCount) {
		if (edgeCount[k] === 1) {
			openEdges.push({ p0: edgeVerts[k][0], p1: edgeVerts[k][1], key: k });
		}
	}
	if (openEdges.length === 0) return soup;

	// Step 3) Chain open edges into polylines via vertex-key adjacency
	var vertToEdges = {};
	for (var oi = 0; oi < openEdges.length; oi++) {
		var k0 = vk(openEdges[oi].p0);
		var k1 = vk(openEdges[oi].p1);
		if (!vertToEdges[k0]) vertToEdges[k0] = [];
		vertToEdges[k0].push(oi);
		if (!vertToEdges[k1]) vertToEdges[k1] = [];
		vertToEdges[k1].push(oi);
	}

	var used = {};
	var loops = [];

	for (var seed = 0; seed < openEdges.length; seed++) {
		if (used[seed]) continue;
		used[seed] = true;

		// Build chain starting from this seed edge
		var chain = [openEdges[seed].p0, openEdges[seed].p1];
		var chainKeys = [vk(openEdges[seed].p0), vk(openEdges[seed].p1)];
		// Track which edge keys are in this chain (for winding later)
		var chainEdgeKeys = [openEdges[seed].key];

		// Step 3a) Extend from the tail
		var extending = true;
		while (extending) {
			extending = false;
			var tailKey = chainKeys[chainKeys.length - 1];
			var candidates = vertToEdges[tailKey];
			if (!candidates) break;
			for (var ci = 0; ci < candidates.length; ci++) {
				var cIdx = candidates[ci];
				if (used[cIdx]) continue;
				var ce = openEdges[cIdx];
				var ck0 = vk(ce.p0);
				var ck1 = vk(ce.p1);
				if (ck0 === tailKey) {
					used[cIdx] = true;
					chain.push(ce.p1);
					chainKeys.push(ck1);
					chainEdgeKeys.push(ce.key);
					extending = true;
					break;
				} else if (ck1 === tailKey) {
					used[cIdx] = true;
					chain.push(ce.p0);
					chainKeys.push(ck0);
					chainEdgeKeys.push(ce.key);
					extending = true;
					break;
				}
			}
		}

		// Step 3b) Extend from the head
		extending = true;
		while (extending) {
			extending = false;
			var headKey = chainKeys[0];
			var candidates2 = vertToEdges[headKey];
			if (!candidates2) break;
			for (var ci2 = 0; ci2 < candidates2.length; ci2++) {
				var cIdx2 = candidates2[ci2];
				if (used[cIdx2]) continue;
				var ce2 = openEdges[cIdx2];
				var ck02 = vk(ce2.p0);
				var ck12 = vk(ce2.p1);
				if (ck02 === headKey) {
					used[cIdx2] = true;
					chain.unshift(ce2.p1);
					chainKeys.unshift(ck12);
					chainEdgeKeys.unshift(ce2.key);
					extending = true;
					break;
				} else if (ck12 === headKey) {
					used[cIdx2] = true;
					chain.unshift(ce2.p0);
					chainKeys.unshift(ck02);
					chainEdgeKeys.unshift(ce2.key);
					extending = true;
					break;
				}
			}
		}

		// Step 3c) Check if chain forms a closed loop
		if (chainKeys[0] === chainKeys[chainKeys.length - 1] && chain.length >= 4) {
			// Remove duplicate closing vertex
			chain.pop();
			chainKeys.pop();
			loops.push({ verts: chain, keys: chainKeys, edgeKeys: chainEdgeKeys });
		}
	}

	if (loops.length === 0) return soup;

	// Step 4) Fan-fill each closed loop
	var result = soup.slice();
	for (var li = 0; li < loops.length; li++) {
		var loop = loops[li];
		var lv = loop.verts;
		if (lv.length < 3) continue;

		// Step 4a) Determine winding from an adjacent existing triangle.
		// Look at the first edge of the loop and check the half-edge direction
		// in the existing mesh. The fill triangle should traverse that edge in
		// the OPPOSITE direction for consistent normals.
		var firstEdgeKey = loop.edgeKeys[0];
		var heDir = halfEdgeDir[firstEdgeKey];
		var v0Key = loop.keys[0];
		var v1Key = loop.keys[1];

		// The existing mesh traverses firstEdge as heDir.from -> heDir.to.
		// For consistent winding, the fill should traverse it as heDir.to -> heDir.from.
		// In the fan from vertex 0: Triangle(V0, V1, V2).
		// The edge V0->V1 corresponds to the first loop edge.
		// If V0->V1 matches heDir.from->heDir.to, we need to REVERSE the loop.
		var needReverse = (v0Key === heDir.from && v1Key === heDir.to);
		if (needReverse) {
			lv = lv.slice().reverse();
		}

		// Step 4b) Fan from vertex 0 to all consecutive pairs
		var fanOrigin = lv[0];
		for (var fi = 1; fi < lv.length - 1; fi++) {
			result.push({
				v0: { x: fanOrigin.x, y: fanOrigin.y, z: fanOrigin.z },
				v1: { x: lv[fi].x, y: lv[fi].y, z: lv[fi].z },
				v2: { x: lv[fi + 1].x, y: lv[fi + 1].y, z: lv[fi + 1].z }
			});
		}
	}

	return result;
}

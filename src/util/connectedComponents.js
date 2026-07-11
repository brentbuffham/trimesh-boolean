/**
 * @module util/connectedComponents
 *
 * Find connected components in a triangle soup via shared-edge adjacency.
 */

/**
 * Split a triangle soup into its connected components.
 *
 * Two triangles are connected if they share an edge (two vertices with
 * matching coordinates). Returns an array of soups, one per component,
 * ordered largest-first.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup
 * @returns {Array<Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>>}
 */
export function findConnectedComponents(soup) {
	if (!soup || soup.length === 0) return [];
	if (soup.length === 1) return [soup.slice()];

	var PREC = 6;
	function vk(v) { return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC); }
	function ek(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

	// Step 1) Build edge -> triangle index map
	var edgeToTris = {};
	for (var i = 0; i < soup.length; i++) {
		var tri = soup[i];
		var ks = [vk(tri.v0), vk(tri.v1), vk(tri.v2)];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var key = ek(ks[e], ks[ne]);
			if (!edgeToTris[key]) edgeToTris[key] = [];
			edgeToTris[key].push(i);
		}
	}

	// Step 2) Build per-triangle neighbor list
	var neighbors = new Array(soup.length);
	for (var ni = 0; ni < soup.length; ni++) neighbors[ni] = [];

	for (var ek2 in edgeToTris) {
		var tris = edgeToTris[ek2];
		for (var a = 0; a < tris.length; a++) {
			for (var b = a + 1; b < tris.length; b++) {
				neighbors[tris[a]].push(tris[b]);
				neighbors[tris[b]].push(tris[a]);
			}
		}
	}

	// Step 3) BFS to find connected components
	var visited = new Uint8Array(soup.length);
	var components = [];

	for (var seed = 0; seed < soup.length; seed++) {
		if (visited[seed]) continue;
		var component = [];
		var queue = [seed];
		visited[seed] = 1;
		var head = 0;

		while (head < queue.length) {
			var cur = queue[head++];
			component.push(soup[cur]);
			var nbrs = neighbors[cur];
			for (var n = 0; n < nbrs.length; n++) {
				if (!visited[nbrs[n]]) {
					visited[nbrs[n]] = 1;
					queue.push(nbrs[n]);
				}
			}
		}
		components.push(component);
	}

	// Step 4) Sort largest-first
	components.sort(function(a, b) { return b.length - a.length; });
	return components;
}

/**
 * Integer-id ("pooled") twin of {@link findConnectedComponents} — an opt-in fast
 * path for large soups. Identical shared-EDGE adjacency and largest-first ordering
 * as the default, but each distinct vertex is assigned an integer id via a quantized
 * hash, so the edge map is keyed by pure integers (`lo * P + hi`) instead of
 * `toFixed(6)` string concatenations. At millions of triangles this removes the
 * string hashing that dominates the default's time + heap.
 *
 * Results are identical to `findConnectedComponents` on clean input (the two share
 * the same 6-dp quantization by default), so this is a drop-in accelerator — the
 * default function is left untouched.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup
 * @param {{ tolerance?: number }} [options] `tolerance` = vertex-weld quantization in
 *        world units (default `1e-6`, mirroring the default's 6-decimal rounding).
 * @returns {Array<Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>>} components, largest-first
 */
export function findConnectedComponentsPooled(soup, options) {
	if (!soup || soup.length === 0) return [];
	if (soup.length === 1) return [soup.slice()];

	var tolerance = (options && options.tolerance != null) ? options.tolerance : 1e-6;
	var inv = 1 / tolerance;

	// Step 1) Assign each distinct vertex a small integer id via a quantized hash.
	// One (short) key per vertex — 3 per triangle — replaces the default's long
	// toFixed keys; the edge map below is then pure-integer keyed.
	var vertId = new Map();
	function id(v) {
		var key = Math.round(v.x * inv) + "," + Math.round(v.y * inv) + "," + Math.round(v.z * inv);
		var i = vertId.get(key);
		if (i === undefined) { i = vertId.size; vertId.set(key, i); }
		return i;
	}
	var triIds = new Array(soup.length);
	for (var t = 0; t < soup.length; t++) {
		var tri = soup[t];
		triIds[t] = [id(tri.v0), id(tri.v1), id(tri.v2)];
	}
	// Edge-key stride. Both endpoint ids are < P, so lo*P+hi is a unique integer key
	// while P*P stays within 2^53 (safe up to ~94M distinct vertices — far past scale).
	var P = vertId.size;

	// Step 2) Build edge -> triangle index map (integer keys, no strings).
	var edgeToTris = new Map();
	function addEdge(a, b, ti) {
		var lo = a < b ? a : b;
		var hi = a < b ? b : a;
		var key = lo * P + hi;
		var arr = edgeToTris.get(key);
		if (!arr) { arr = []; edgeToTris.set(key, arr); }
		arr.push(ti);
	}
	for (var i2 = 0; i2 < soup.length; i2++) {
		var ids = triIds[i2];
		addEdge(ids[0], ids[1], i2);
		addEdge(ids[1], ids[2], i2);
		addEdge(ids[2], ids[0], i2);
	}

	// Step 3) Per-triangle neighbor list.
	var neighbors = new Array(soup.length);
	for (var ni = 0; ni < soup.length; ni++) neighbors[ni] = [];
	edgeToTris.forEach(function(tris) {
		for (var a = 0; a < tris.length; a++) {
			for (var b = a + 1; b < tris.length; b++) {
				neighbors[tris[a]].push(tris[b]);
				neighbors[tris[b]].push(tris[a]);
			}
		}
	});

	// Step 4) BFS to find connected components.
	var visited = new Uint8Array(soup.length);
	var components = [];
	for (var seed = 0; seed < soup.length; seed++) {
		if (visited[seed]) continue;
		var component = [];
		var queue = [seed];
		visited[seed] = 1;
		var head = 0;
		while (head < queue.length) {
			var cur = queue[head++];
			component.push(soup[cur]);
			var nbrs = neighbors[cur];
			for (var n = 0; n < nbrs.length; n++) {
				if (!visited[nbrs[n]]) { visited[nbrs[n]] = 1; queue.push(nbrs[n]); }
			}
		}
		components.push(component);
	}

	// Step 5) Sort largest-first.
	components.sort(function(a, b) { return b.length - a.length; });
	return components;
}

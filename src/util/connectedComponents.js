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

/**
 * @module util/indexedComponents
 *
 * Connected-component decomposition of ALREADY-INDEXED triangle groups — the indexed
 * twin of {@link module:boolean/booleanOp.splitToComponents}, without soup or toFixed
 * string keys.
 *
 * A boolean split's four groups (aInside/aOutside/bInside/bOutside) each break into one
 * or more connected pieces. The soup version flood-fills a mega-soup keyed by vertex
 * coordinate strings — heavy allocations that OOM at millions of triangles. Here the
 * triangles already reference a shared vertex pool by INTEGER index (as produced by
 * {@link module:util/indexGroups.indexGroups} or `bmsBooleanOp({ indexed: true })`), so
 * components are a plain union-find over those indices: O(N·α(N)), no soup, no strings.
 *
 * NOTE: connectivity here is shared-VERTEX (two triangles sharing any pool vertex are in
 * the same component), which is the natural relation on an indexed mesh. On a clean,
 * seam-welded boolean result this agrees with the soup path's shared-EDGE relation; on
 * meshes with genuine vertex-only touches it is (deliberately) coarser. For an exact
 * edge-based equivalent on soup, use `findConnectedComponentsPooled`.
 *
 * Pure — no globals, no THREE, no deps.
 */

/**
 * Union-find (disjoint set) over vertex indices, grouping triangles that share any
 * vertex into connected components.
 *
 * @param {Array<Array<number>>} tris - triangles as [i,j,k] index triples into a shared pool
 * @returns {Array<Array<Array<number>>>} array of components, each an array of its triangles
 */
export function connectedComponentsIndexed(tris) {
	var parent = new Map();

	function find(x) {
		if (!parent.has(x)) { parent.set(x, x); return x; }
		var root = x;
		while (parent.get(root) !== root) root = parent.get(root);
		// path compression
		while (parent.get(x) !== root) { var next = parent.get(x); parent.set(x, root); x = next; }
		return root;
	}
	function union(a, b) {
		var ra = find(a), rb = find(b);
		if (ra !== rb) parent.set(ra, rb);
	}

	for (var t = 0; t < tris.length; t++) {
		var tr = tris[t];
		find(tr[0]); // ensure present
		union(tr[0], tr[1]);
		union(tr[1], tr[2]);
	}

	// Bucket triangles by their component root, preserving first-seen order.
	var byRoot = new Map();
	var order = [];
	for (var t2 = 0; t2 < tris.length; t2++) {
		var root = find(tris[t2][0]);
		var arr = byRoot.get(root);
		if (!arr) { arr = []; byRoot.set(root, arr); order.push(root); }
		arr.push(tris[t2]);
	}
	var out = [];
	for (var i = 0; i < order.length; i++) out.push(byRoot.get(order[i]));
	return out;
}

var GROUP_META = [
	{ key: "aInside", mesh: "A", side: "inside" },
	{ key: "aOutside", mesh: "A", side: "outside" },
	{ key: "bInside", mesh: "B", side: "inside" },
	{ key: "bOutside", mesh: "B", side: "outside" }
];

/**
 * Decompose the four indexed groups into connected components, mirroring the shape of
 * `splitToComponents` so the same consumer code works unchanged — but each component
 * carries INDEXED triangles ([i,j,k] into the shared `points`), not soup.
 *
 * @param {{ points: Array, groups: { aInside, aOutside, bInside, bOutside } }} indexed
 *        as returned by `indexGroups` or `bmsBooleanOp(..., { indexed: true }).indexed`
 * @param {number} [smallThreshold=0] - components with fewer triangles than this are
 *        merged into the largest component of their group (matches mergeSmallComponents)
 * @returns {Array<{ mesh, side, group, index, points, triangles, triCount }>}
 */
export function decomposeIndexedGroups(indexed, smallThreshold) {
	var points = indexed.points;
	var out = [];
	for (var g = 0; g < GROUP_META.length; g++) {
		var meta = GROUP_META[g];
		var tris = indexed.groups[meta.key] || [];
		if (tris.length === 0) continue;
		var comps = connectedComponentsIndexed(tris);
		if (smallThreshold && smallThreshold > 0 && comps.length > 1) {
			comps = mergeSmallIndexedComponents(comps, smallThreshold);
		}
		for (var c = 0; c < comps.length; c++) {
			out.push({
				mesh: meta.mesh, side: meta.side, group: meta.key, index: c,
				points: points, triangles: comps[c], triCount: comps[c].length
			});
		}
	}
	return out;
}

/**
 * Fold components below `threshold` triangles into the largest component (so a boolean
 * seam doesn't leave dozens of stray slivers as their own regions). Mirrors
 * `mergeSmallComponents` for the indexed representation.
 *
 * @param {Array<Array<Array<number>>>} comps
 * @param {number} threshold
 * @returns {Array<Array<Array<number>>>}
 */
export function mergeSmallIndexedComponents(comps, threshold) {
	if (comps.length <= 1) return comps;
	var largest = 0;
	for (var i = 1; i < comps.length; i++) if (comps[i].length > comps[largest].length) largest = i;
	var keep = [], strays = [];
	for (var j = 0; j < comps.length; j++) {
		if (j === largest || comps[j].length >= threshold) keep.push(comps[j]);
		else strays.push(comps[j]);
	}
	if (strays.length) {
		var big = comps[largest];
		for (var s = 0; s < strays.length; s++) for (var k = 0; k < strays[s].length; k++) big.push(strays[s][k]);
	}
	return keep;
}

/**
 * @module bms/bmsChain
 *
 * Chain intersection segments into ordered polylines using pool vertex
 * identity (integer ID lookup). No distance threshold — two segments
 * that share a pool vertex are connected by definition.
 */

/**
 * Chain intersection segments into ordered polylines.
 *
 * Uses pool vertex IDs for O(1) adjacency lookup. Two segments sharing
 * the same PoolVertex are guaranteed to connect (same object reference).
 *
 * @param {Array<{ p0: PoolVertex, p1: PoolVertex, idxA: number, idxB: number }>} segments
 * @returns {Array<Array<PoolVertex>>} Array of polylines (each an array of pool vertices)
 */
export function bmsChain(segments) {
	if (segments.length === 0) return [];

	// Build adjacency: poolVertex.id -> [{segIdx, otherEnd: PoolVertex}]
	var adj = {};

	for (var i = 0; i < segments.length; i++) {
		var seg = segments[i];
		var id0 = seg.p0.id;
		var id1 = seg.p1.id;

		if (!adj[id0]) adj[id0] = [];
		adj[id0].push({ segIdx: i, otherEnd: seg.p1 });

		if (!adj[id1]) adj[id1] = [];
		adj[id1].push({ segIdx: i, otherEnd: seg.p0 });
	}

	var used = new Uint8Array(segments.length);
	var polylines = [];

	for (var s = 0; s < segments.length; s++) {
		if (used[s]) continue;
		used[s] = 1;

		// Seed: start with this segment
		var tailChain = [segments[s].p0, segments[s].p1];
		var headChain = [];

		// Extend tail
		var extending = true;
		while (extending) {
			extending = false;
			var tailVert = tailChain[tailChain.length - 1];
			var neighbors = adj[tailVert.id];
			if (!neighbors) break;

			for (var ni = 0; ni < neighbors.length; ni++) {
				var nb = neighbors[ni];
				if (used[nb.segIdx]) continue;

				// Check if this would close the loop
				if (nb.otherEnd === tailChain[0]) {
					// Close the loop — don't add the vertex again,
					// the caller checks first === last by reference
					used[nb.segIdx] = 1;
					tailChain.push(nb.otherEnd);
					return buildResult(headChain, tailChain, polylines, used, segments, adj);
				}

				used[nb.segIdx] = 1;
				tailChain.push(nb.otherEnd);
				extending = true;
				break; // Only follow one neighbor per step
			}
		}

		// Extend head
		extending = true;
		while (extending) {
			extending = false;
			var headVert = headChain.length > 0 ? headChain[headChain.length - 1] : tailChain[0];
			var headNeighbors = adj[headVert.id];
			if (!headNeighbors) break;

			for (var hi = 0; hi < headNeighbors.length; hi++) {
				var hb = headNeighbors[hi];
				if (used[hb.segIdx]) continue;

				used[hb.segIdx] = 1;
				headChain.push(hb.otherEnd);
				extending = true;
				break;
			}
		}

		// Combine: reverse headChain + tailChain
		var chain;
		if (headChain.length > 0) {
			headChain.reverse();
			chain = headChain.concat(tailChain);
		} else {
			chain = tailChain;
		}

		polylines.push(chain);
	}

	return polylines;
}

/**
 * Helper to finish building result when a loop closes during tail extension.
 * Continues chaining remaining unused segments.
 */
function buildResult(headChain, tailChain, polylines, used, segments, adj) {
	// Combine current chain
	var chain;
	if (headChain.length > 0) {
		headChain.reverse();
		chain = headChain.concat(tailChain);
	} else {
		chain = tailChain;
	}
	polylines.push(chain);

	// Continue with remaining unused segments
	for (var s = 0; s < segments.length; s++) {
		if (used[s]) continue;
		used[s] = 1;

		var tChain = [segments[s].p0, segments[s].p1];
		var hChain = [];

		// Extend tail
		var extending = true;
		while (extending) {
			extending = false;
			var tailVert = tChain[tChain.length - 1];
			var neighbors = adj[tailVert.id];
			if (!neighbors) break;
			for (var ni = 0; ni < neighbors.length; ni++) {
				if (used[neighbors[ni].segIdx]) continue;
				used[neighbors[ni].segIdx] = 1;
				tChain.push(neighbors[ni].otherEnd);
				extending = true;
				break;
			}
		}

		// Extend head
		extending = true;
		while (extending) {
			extending = false;
			var headVert = hChain.length > 0 ? hChain[hChain.length - 1] : tChain[0];
			var headNeighbors = adj[headVert.id];
			if (!headNeighbors) break;
			for (var hi = 0; hi < headNeighbors.length; hi++) {
				if (used[headNeighbors[hi].segIdx]) continue;
				used[headNeighbors[hi].segIdx] = 1;
				hChain.push(headNeighbors[hi].otherEnd);
				extending = true;
				break;
			}
		}

		if (hChain.length > 0) {
			hChain.reverse();
			polylines.push(hChain.concat(tChain));
		} else {
			polylines.push(tChain);
		}
	}

	return polylines;
}

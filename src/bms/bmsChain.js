/**
 * @module bms/bmsChain
 *
 * Chain intersection segments into ordered polylines using pool vertex
 * identity (integer ID lookup). No distance threshold — two segments
 * that share a pool vertex are connected by definition.
 *
 * At junction vertices (degree 3+), picks the smoothest continuation
 * by comparing outgoing directions against the incoming direction.
 */

/**
 * Chain intersection segments into ordered polylines.
 *
 * Uses pool vertex IDs for O(1) adjacency lookup. Two segments sharing
 * the same PoolVertex are guaranteed to connect (same object reference).
 *
 * At junction vertices where multiple unused segments meet, the algorithm
 * picks the segment whose direction is most aligned with the incoming
 * direction (largest dot product), preventing U-turns and backtracks.
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

	/**
	 * Compute unit direction from prev to curr.
	 * Returns null if the points are coincident.
	 */
	function direction(prev, curr) {
		var dx = curr.x - prev.x;
		var dy = curr.y - prev.y;
		var dz = curr.z - prev.z;
		var len = Math.sqrt(dx * dx + dy * dy + dz * dz);
		if (len < 1e-15) return null;
		return { x: dx / len, y: dy / len, z: dz / len };
	}

	/**
	 * Pick the best unused neighbor at `vert`. When `inDir` is provided
	 * (junction resolution), pick the neighbor whose outgoing direction
	 * has the largest dot product with inDir (smoothest continuation).
	 * When inDir is null (first step), pick any unused neighbor.
	 */
	function pickBest(vert, inDir) {
		var neighbors = adj[vert.id];
		if (!neighbors) return null;

		var best = null;
		var bestDot = -Infinity;

		for (var ni = 0; ni < neighbors.length; ni++) {
			var nb = neighbors[ni];
			if (used[nb.segIdx]) continue;

			if (!inDir) {
				// No incoming direction — return first available
				return nb;
			}

			// Compute outgoing direction and score by alignment
			var dx = nb.otherEnd.x - vert.x;
			var dy = nb.otherEnd.y - vert.y;
			var dz = nb.otherEnd.z - vert.z;
			var len = Math.sqrt(dx * dx + dy * dy + dz * dz);
			if (len < 1e-15) {
				// Degenerate segment — lowest priority
				if (!best) { best = nb; bestDot = -Infinity; }
				continue;
			}

			var dot = (dx * inDir.x + dy * inDir.y + dz * inDir.z) / len;
			if (dot > bestDot) {
				bestDot = dot;
				best = nb;
			}
		}

		return best;
	}

	var polylines = [];

	for (var s = 0; s < segments.length; s++) {
		if (used[s]) continue;
		used[s] = 1;

		// Seed: start with this segment
		var tailChain = [segments[s].p0, segments[s].p1];
		var headChain = [];

		// Extend tail with angle-based junction resolution
		while (true) {
			var tailVert = tailChain[tailChain.length - 1];
			var tailPrev = tailChain[tailChain.length - 2];
			var inDir = direction(tailPrev, tailVert);
			var nb = pickBest(tailVert, inDir);
			if (!nb) break;

			// Check if this would close the loop
			var chainStart = headChain.length > 0 ? headChain[headChain.length - 1] : tailChain[0];
			if (nb.otherEnd === chainStart) {
				used[nb.segIdx] = 1;
				tailChain.push(nb.otherEnd);
				break; // Loop closed
			}

			used[nb.segIdx] = 1;
			tailChain.push(nb.otherEnd);
		}

		// Extend head with angle-based junction resolution
		while (true) {
			var headVert, headPrev;
			if (headChain.length >= 2) {
				headVert = headChain[headChain.length - 1];
				headPrev = headChain[headChain.length - 2];
			} else if (headChain.length === 1) {
				headVert = headChain[0];
				headPrev = tailChain[0];
			} else {
				headVert = tailChain[0];
				headPrev = tailChain[1];
			}
			var hDir = direction(headPrev, headVert);
			var hNb = pickBest(headVert, hDir);
			if (!hNb) break;

			used[hNb.segIdx] = 1;
			headChain.push(hNb.otherEnd);
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

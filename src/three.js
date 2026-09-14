/**
 * trimesh-boolean/three
 *
 * Optional Three.js adapter. Converts between THREE.Mesh/Group and
 * triangle soup format used by the core library.
 *
 * @module trimesh-boolean/three
 */

import * as THREE from "three";
import { boolean as coreBooleanOp } from "./boolean/booleanOp.js";
import { booleanAuto } from "./booleanAuto.js";
import { repairMesh as coreRepairMesh } from "./repair/repairMesh.js";
import { intersectMeshPairTagged as coreIntersect } from "./intersect/intersectMeshPair.js";

/**
 * Convert a THREE.Mesh or THREE.Group to triangle soup.
 *
 * Traverses all child meshes, applies their world transforms,
 * and extracts position data as {v0, v1, v2} triangles.
 *
 * @param {THREE.Object3D} object - THREE.Mesh or THREE.Group
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangle soup
 */
export function meshToSoup(object) {
	var soup = [];

	object.updateMatrixWorld(true);

	object.traverse(function (child) {
		if (!child.isMesh) return;

		var geometry = child.geometry;
		if (!geometry) return;

		var posAttr = geometry.getAttribute("position");
		if (!posAttr) return;

		var matrix = child.matrixWorld;
		var index = geometry.index;

		var v = new THREE.Vector3();

		function getVertex(idx) {
			v.set(posAttr.getX(idx), posAttr.getY(idx), posAttr.getZ(idx));
			v.applyMatrix4(matrix);
			return { x: v.x, y: v.y, z: v.z };
		}

		if (index) {
			for (var i = 0; i < index.count; i += 3) {
				soup.push({
					v0: getVertex(index.getX(i)),
					v1: getVertex(index.getX(i + 1)),
					v2: getVertex(index.getX(i + 2))
				});
			}
		} else {
			for (var j = 0; j < posAttr.count; j += 3) {
				soup.push({
					v0: getVertex(j),
					v1: getVertex(j + 1),
					v2: getVertex(j + 2)
				});
			}
		}
	});

	return soup;
}

/**
 * Convert triangle soup to a THREE.Mesh with BufferGeometry.
 *
 * The geometry is built in a LOCAL frame — vertices are translated by the soup
 * centroid and the centroid is put on `mesh.position`, so the mesh lands in the
 * same world place. This is not cosmetic. THREE stores positions as Float32,
 * whose spacing at a UTM northing of 7.4e6 is 0.5 m; writing absolute survey
 * coordinates straight in silently collapses any two vertices closer together
 * than that. Measured on realistic coordinates: 7444123.456 lands on 7444123.5,
 * an error of 0.044 m, and 6771845.678 lands on 6771845.5, an error of 0.178 m.
 * In the local frame the same values carry ~1e-6 m of error.
 *
 * Pass `{ recenter: false }` for the pre-0.7.1 behaviour (absolute coordinates
 * in the attribute, mesh at the origin). Only safe near the origin.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup
 * @param {Object} [options]
 * @param {number|string} [options.color=0x4488FF] - Mesh color
 * @param {boolean} [options.doubleSide=true] - Use DoubleSide material
 * @param {boolean} [options.wireframe=false] - Wireframe mode
 * @param {boolean} [options.recenter=true] - Build in a local frame (see above)
 * @returns {THREE.Mesh}
 */
export function soupToMesh(soup, options) {
	if (!options) options = {};

	var cx = 0, cy = 0, cz = 0;
	var recenter = options.recenter !== false;
	if (recenter && soup.length > 0) {
		for (var c = 0; c < soup.length; c++) {
			var t = soup[c];
			cx += t.v0.x + t.v1.x + t.v2.x;
			cy += t.v0.y + t.v1.y + t.v2.y;
			cz += t.v0.z + t.v1.z + t.v2.z;
		}
		var n = soup.length * 3;
		cx /= n; cy /= n; cz /= n;
	}

	var positions = new Float32Array(soup.length * 9);
	for (var i = 0; i < soup.length; i++) {
		var tri = soup[i];
		var offset = i * 9;
		positions[offset] = tri.v0.x - cx;
		positions[offset + 1] = tri.v0.y - cy;
		positions[offset + 2] = tri.v0.z - cz;
		positions[offset + 3] = tri.v1.x - cx;
		positions[offset + 4] = tri.v1.y - cy;
		positions[offset + 5] = tri.v1.z - cz;
		positions[offset + 6] = tri.v2.x - cx;
		positions[offset + 7] = tri.v2.y - cy;
		positions[offset + 8] = tri.v2.z - cz;
	}

	var geometry = new THREE.BufferGeometry();
	geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
	geometry.computeVertexNormals();

	var material = new THREE.MeshPhongMaterial({
		color: options.color !== undefined ? options.color : 0x4488FF,
		side: options.doubleSide !== false ? THREE.DoubleSide : THREE.FrontSide,
		wireframe: !!options.wireframe
	});

	var mesh = new THREE.Mesh(geometry, material);
	if (recenter) mesh.position.set(cx, cy, cz);
	return mesh;
}

/**
 * Perform a boolean operation on two THREE.Mesh/Group objects.
 *
 * Runs the BMS pipeline through {@link booleanAuto}: shared Steiner vertex pool,
 * hybrid classification with auto heffalump fallback, and gated finishing so the
 * result is correctly wound with no duplicate triangles or T-junctions.
 *
 * Before 0.7.1 this called the classic flood-fill/half-space path, which does
 * not target open or non-manifold surfaces — so the documented Three.js
 * one-liner missed the engine the library exists for. Pass
 * `{ engine: "classic" }` for the old behaviour.
 *
 * @param {THREE.Object3D} meshA - First mesh
 * @param {THREE.Object3D} meshB - Second mesh
 * @param {"subtract"|"union"|"intersect"} operation
 * @param {Object} [options] - Passed to soupToMesh, plus:
 * @param {"bms"|"classic"} [options.engine="bms"] - Pipeline to use
 * @param {"strict"|"raw"} [options.quality="strict"] - Finishing level (BMS only)
 * @param {number} [options.tolerance] - Vertex tolerance
 * @returns {THREE.Mesh|null} Result mesh, or null on failure
 */
export function booleanFromMeshes(meshA, meshB, operation, options) {
	var opts = options || {};
	var soupA = meshToSoup(meshA);
	var soupB = meshToSoup(meshB);

	if (opts.engine === "classic") {
		var classic = coreBooleanOp(soupA, soupB, operation);
		if (!classic) return null;
		return soupToMesh(classic.soup, opts);
	}

	var result = booleanAuto(soupA, soupB, operation, {
		quality: opts.quality,
		classifier: opts.classifier,
		tolerance: opts.tolerance,
		preRepair: opts.preRepair,
		coplanar: opts.coplanar
	});
	if (!result || !result.soup || result.soup.length === 0) return null;

	return soupToMesh(result.soup, opts);
}

/**
 * Compute intersection segments between two THREE.Mesh/Group objects.
 *
 * @param {THREE.Object3D} meshA
 * @param {THREE.Object3D} meshB
 * @returns {Array<{ p0: {x,y,z}, p1: {x,y,z}, idxA: number, idxB: number }>}
 */
export function intersectFromMeshes(meshA, meshB) {
	var soupA = meshToSoup(meshA);
	var soupB = meshToSoup(meshB);
	return coreIntersect(soupA, soupB);
}

/**
 * Repair a THREE.Mesh/Group and return a new THREE.Mesh.
 *
 * @param {THREE.Object3D} mesh - Input mesh
 * @param {Object} [config] - Repair config (closeMode, snapTolerance, etc.)
 * @param {Function} [onProgress] - Progress callback
 * @param {Object} [meshOptions] - Options for soupToMesh
 * @returns {Promise<THREE.Mesh>} Repaired mesh
 */
export async function repairFromMesh(mesh, config, onProgress, meshOptions) {
	var soup = meshToSoup(mesh);
	var result = await coreRepairMesh(soup, config, onProgress);
	return soupToMesh(result.soup, meshOptions);
}

// Re-export core API for convenience
export { coreBooleanOp as boolean, coreRepairMesh as repair, coreIntersect as intersect };
export { booleanAuto };

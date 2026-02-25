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
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup
 * @param {Object} [options]
 * @param {number|string} [options.color=0x4488FF] - Mesh color
 * @param {boolean} [options.doubleSide=true] - Use DoubleSide material
 * @param {boolean} [options.wireframe=false] - Wireframe mode
 * @returns {THREE.Mesh}
 */
export function soupToMesh(soup, options) {
	if (!options) options = {};

	var positions = new Float32Array(soup.length * 9);
	for (var i = 0; i < soup.length; i++) {
		var tri = soup[i];
		var offset = i * 9;
		positions[offset] = tri.v0.x;
		positions[offset + 1] = tri.v0.y;
		positions[offset + 2] = tri.v0.z;
		positions[offset + 3] = tri.v1.x;
		positions[offset + 4] = tri.v1.y;
		positions[offset + 5] = tri.v1.z;
		positions[offset + 6] = tri.v2.x;
		positions[offset + 7] = tri.v2.y;
		positions[offset + 8] = tri.v2.z;
	}

	var geometry = new THREE.BufferGeometry();
	geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
	geometry.computeVertexNormals();

	var material = new THREE.MeshPhongMaterial({
		color: options.color !== undefined ? options.color : 0x4488FF,
		side: options.doubleSide !== false ? THREE.DoubleSide : THREE.FrontSide,
		wireframe: !!options.wireframe
	});

	return new THREE.Mesh(geometry, material);
}

/**
 * Perform a boolean operation on two THREE.Mesh/Group objects.
 *
 * @param {THREE.Object3D} meshA - First mesh
 * @param {THREE.Object3D} meshB - Second mesh
 * @param {"subtract"|"union"|"intersect"} operation
 * @param {Object} [options] - Options passed to soupToMesh for the result
 * @returns {THREE.Mesh|null} Result mesh, or null on failure
 */
export function booleanFromMeshes(meshA, meshB, operation, options) {
	var soupA = meshToSoup(meshA);
	var soupB = meshToSoup(meshB);

	var result = coreBooleanOp(soupA, soupB, operation);
	if (!result) return null;

	return soupToMesh(result.soup, options);
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

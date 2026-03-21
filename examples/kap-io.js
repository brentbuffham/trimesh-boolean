/**
 * Minimal Kirra KAP (ZIP) read/write for the trimesh-boolean demo.
 * Compatible with surfaces.json produced by Kirra KAPWriter (triangle vertices).
 */

import JSZip from "jszip";
import { computeSignedVolume } from "../src/index.js";

/**
 * @param {Array} soup - triangle soup { v0, v1, v2 }
 * @returns {boolean}
 */
export function estimateClosedFromSoup(soup) {
	if (!soup || soup.length === 0) return false;
	try {
		var v = Math.abs(computeSignedVolume(soup));
		return v > 1e-9;
	} catch (e) {
		return false;
	}
}

/**
 * @param {Object} p - point { x, y, z }
 * @returns {{ x: number, y: number, z: number }}
 */
function copyPoint(p) {
	return { x: Number(p.x), y: Number(p.y), z: Number(p.z) };
}

/**
 * Kirra surface record -> triangle soup. Skips textured-only surfaces without triangles.
 * @param {Object} surface
 * @returns {Array}
 */
export function kirraSurfaceToSoup(surface) {
	var soup = [];
	var tris = surface.triangles;
	var pts = surface.points;
	if (!tris || !tris.length) return soup;

	for (var i = 0; i < tris.length; i++) {
		var t = tris[i];
		var v0, v1, v2;
		if (t && t.vertices && t.vertices.length >= 3) {
			v0 = copyPoint(t.vertices[0]);
			v1 = copyPoint(t.vertices[1]);
			v2 = copyPoint(t.vertices[2]);
		} else if (pts && t && (typeof t[0] === "number" || typeof t.a === "number")) {
			var i0 = t[0] !== undefined ? t[0] : t.a;
			var i1 = t[1] !== undefined ? t[1] : t.b;
			var i2 = t[2] !== undefined ? t[2] : t.c;
			if (i0 >= 0 && i1 >= 0 && i2 >= 0 && i0 < pts.length && i1 < pts.length && i2 < pts.length) {
				v0 = copyPoint(pts[i0]);
				v1 = copyPoint(pts[i1]);
				v2 = copyPoint(pts[i2]);
			}
		}
		if (v0 && v1 && v2) {
			soup.push({ v0: v0, v1: v1, v2: v2 });
		}
	}
	return soup;
}

/**
 * @param {File|Blob} file
 * @returns {Promise<{ surfaces: Array, warnings: Array, manifest: Object|null }>}
 */
export async function parseKapSurfaces(file) {
	var zip = await JSZip.loadAsync(file);
	var warnings = [];
	var manifest = null;
	var mf = zip.file("manifest.json");
	if (mf) {
		try {
			manifest = JSON.parse(await mf.async("string"));
		} catch (e) {
			warnings.push("manifest.json: " + e.message);
		}
	}

	var sf = zip.file("surfaces.json");
	if (!sf) {
		throw new Error("No surfaces.json in KAP (not a Kirra project export or missing surfaces)");
	}

	var surfacesData = JSON.parse(await sf.async("string"));
	if (!Array.isArray(surfacesData)) {
		throw new Error("surfaces.json must be an array");
	}

	var out = [];
	for (var si = 0; si < surfacesData.length; si++) {
		var sd = surfacesData[si];
		if (sd.isTexturedMesh && (!sd.triangles || sd.triangles.length === 0)) {
			warnings.push("Skipped textured surface without triangles: " + (sd.id || sd.name || String(si)));
			continue;
		}
		var soup = kirraSurfaceToSoup(sd);
		if (soup.length === 0) {
			warnings.push("No triangles usable: " + (sd.id || sd.name || String(si)));
			continue;
		}
		var id = sd.id || ("import-" + si);
		var name = sd.name || id;
		var closed = estimateClosedFromSoup(soup);
		var label = "KAP: " + name + " (" + soup.length + " tris)";
		out.push({
			id: id,
			name: name,
			soup: soup,
			closed: closed,
			label: label
		});
	}

	if (out.length === 0) {
		throw new Error("No triangulated surfaces found in KAP");
	}

	return { surfaces: out, warnings: warnings, manifest: manifest };
}

/**
 * Triangle soup -> Kirra-style triangles array
 * @param {Array} soup
 * @returns {Array}
 */
export function soupToKirraTriangles(soup) {
	var triangles = [];
	for (var i = 0; i < soup.length; i++) {
		var tri = soup[i];
		triangles.push({
			vertices: [
				{ x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
				{ x: tri.v1.x, y: tri.v1.y, z: tri.v1.z },
				{ x: tri.v2.x, y: tri.v2.y, z: tri.v2.z }
			]
		});
	}
	return triangles;
}

/**
 * Build a minimal .kap blob (manifest + surfaces.json) from two triangle soups (Mesh A / B).
 * @param {Object} opts
 * @param {Array} opts.soupA
 * @param {Array} opts.soupB
 * @param {string} [opts.nameA]
 * @param {string} [opts.nameB]
 * @param {string} [opts.projectName]
 * @returns {Promise<Blob>}
 */
export async function buildMinimalKapBlob(opts) {
	var soupA = opts.soupA;
	var soupB = opts.soupB;
	var nameA = opts.nameA || "MeshA";
	var nameB = opts.nameB || "MeshB";
	var projectName = opts.projectName || "trimesh-boolean-demo";

	var zip = new JSZip();
	var now = new Date().toISOString();

	zip.file(
		"manifest.json",
		JSON.stringify(
			{
				kapVersion: "demo-1",
				application: "trimesh-boolean-demo",
				created: now,
				projectName: projectName,
				counts: {
					surfaces: 2,
					holes: 0,
					drawings: 0,
					images: 0,
					products: 0,
					charging: 0,
					configs: 0
				},
				note: "Minimal export from trimesh-boolean demo (Mesh A and Mesh B only). Open in Kirra or re-import here."
			},
			null,
			2
		)
	);

	var surfacesData = [
		{
			id: "demo-mesh-a",
			name: nameA,
			type: "triangulated",
			visible: true,
			triangles: soupToKirraTriangles(soupA),
			metadata: { source: "trimesh-boolean-demo", role: "meshA" }
		},
		{
			id: "demo-mesh-b",
			name: nameB,
			type: "triangulated",
			visible: true,
			triangles: soupToKirraTriangles(soupB),
			metadata: { source: "trimesh-boolean-demo", role: "meshB" }
		}
	];

	zip.file("surfaces.json", JSON.stringify(surfacesData));

	var blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
	return blob;
}

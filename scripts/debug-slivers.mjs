import { bmsIntersect, bmsSplit } from "../src/index.js";

function createGiantFloor() {
	var a = { x: 0, y: 0, z: 0 }, b = { x: 100, y: 0, z: 0 };
	var c = { x: 100, y: 100, z: 0 }, d = { x: 0, y: 100, z: 0 };
	return [
		{ v0: a, v1: b, v2: c },
		{ v0: a, v1: c, v2: d }
	];
}
function createFence(y0, y1, step) {
	var tris = [];
	for (var y = y0; y < y1 - 1e-9; y += step) {
		var p00 = { x: 50, y: y, z: -1 };
		var p01 = { x: 50, y: y + step, z: -1 };
		var p10 = { x: 50, y: y, z: 1 };
		var p11 = { x: 50, y: y + step, z: 1 };
		tris.push({ v0: p00, v1: p01, v2: p11 });
		tris.push({ v0: p00, v1: p11, v2: p10 });
	}
	return tris;
}
function aspectRatio(tri) {
	var e = [[tri.v0, tri.v1], [tri.v1, tri.v2], [tri.v2, tri.v0]];
	var maxLenSq = 0;
	for (var i = 0; i < 3; i++) {
		var dx = e[i][1].x - e[i][0].x, dy = e[i][1].y - e[i][0].y, dz = e[i][1].z - e[i][0].z;
		var l = dx * dx + dy * dy + dz * dz;
		if (l > maxLenSq) maxLenSq = l;
	}
	var ax = tri.v1.x - tri.v0.x, ay = tri.v1.y - tri.v0.y, az = tri.v1.z - tri.v0.z;
	var bx = tri.v2.x - tri.v0.x, by = tri.v2.y - tri.v0.y, bz = tri.v2.z - tri.v0.z;
	var cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
	var area = Math.sqrt(cx * cx + cy * cy + cz * cz) * 0.5;
	if (area < 1e-20) return Infinity;
	return (maxLenSq / area) / 2.309;
}

var floor = createGiantFloor();
var fence = createFence(10, 90, 0.5);
var isect = bmsIntersect(floor, fence);
var megaSoup = bmsSplit(floor, fence, isect);

var needles = [];
var total = 0;
for (var i = 0; i < megaSoup.length; i++) {
	if (megaSoup[i].mesh !== "A") continue;
	total++;
	var ar = aspectRatio(megaSoup[i]);
	if (ar > 100) needles.push({ ar: ar, t: megaSoup[i] });
}
needles.sort(function (a, b) { return b.ar - a.ar; });
console.log("A-side subtris:", total, " needles>100:", needles.length);
for (var n = 0; n < Math.min(needles.length, 40); n++) {
	var t = needles[n].t;
	console.log(
		needles[n].ar.toFixed(0),
		JSON.stringify([[t.v0.x, t.v0.y], [t.v1.x, t.v1.y], [t.v2.x, t.v2.y]])
	);
}

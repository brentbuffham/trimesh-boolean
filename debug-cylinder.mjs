import { boolean, splitMeshPair, countOpenEdges, weldVertices, weldedToSoup, estimateAvgEdge, resolveTJunctions, weldBoundaryVertices } from './src/index.js';
import { readFileSync } from 'fs';

var kirraData = JSON.parse(readFileSync('./examples/kirra-surfaces.json', 'utf8'));
var terrainSoup = kirraData.terrain.soup;
var cylinderSoup = kirraData.cylinder.soup;

// Step 1) Pre-repair
var avgA = estimateAvgEdge(terrainSoup);
var avgB = estimateAvgEdge(cylinderSoup);
terrainSoup = resolveTJunctions(terrainSoup, avgA * 0.01, 3);
terrainSoup = weldBoundaryVertices(terrainSoup, avgA * 0.01);
cylinderSoup = resolveTJunctions(cylinderSoup, avgB * 0.01, 3);
cylinderSoup = weldBoundaryVertices(cylinderSoup, avgB * 0.01);

console.log("Terrain:", terrainSoup.length, "tris, Cylinder:", cylinderSoup.length, "tris");

// Step 2) Split
var split = splitMeshPair(terrainSoup, cylinderSoup);
var grp = split.groups;
console.log("aInside:", grp.aInside.length, "aOutside:", grp.aOutside.length,
    "bInside:", grp.bInside.length, "bOutside:", grp.bOutside.length);

// Step 3) B-A merges: bOutside + aInside (flipped)
var PREC = 6;
function vk(v) { return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC); }
function ek(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

// Step 4) Find open/non-manifold edges in the merged B-A result
var merged = [];
for (var i = 0; i < grp.bOutside.length; i++) merged.push(grp.bOutside[i]);
for (var j = 0; j < grp.aInside.length; j++) {
    var t = grp.aInside[j];
    merged.push({ v0: t.v0, v1: t.v2, v2: t.v1 });
}
console.log("Merged B-A soup:", merged.length, "tris");

var edgeCount = {};
var edgeVerts = {};
var edgeTris = {};
for (var mi = 0; mi < merged.length; mi++) {
    var tri = merged[mi];
    var vs = [tri.v0, tri.v1, tri.v2];
    var ks = [vk(vs[0]), vk(vs[1]), vk(vs[2])];
    for (var e = 0; e < 3; e++) {
        var ne = (e + 1) % 3;
        var key = ek(ks[e], ks[ne]);
        if (!edgeCount[key]) { edgeCount[key] = 0; edgeVerts[key] = [vs[e], vs[ne]]; edgeTris[key] = []; }
        edgeCount[key]++;
        edgeTris[key].push(mi);
    }
}

var openEdges = [];
var nonManifold = [];
for (var k in edgeCount) {
    if (edgeCount[k] === 1) openEdges.push(k);
    if (edgeCount[k] > 2) nonManifold.push(k);
}
console.log("\nOpen edges:", openEdges.length);
console.log("Non-manifold edges:", nonManifold.length);

// Step 5) Print details of non-manifold edges
for (var nm = 0; nm < nonManifold.length; nm++) {
    var nmk = nonManifold[nm];
    var nmvs = edgeVerts[nmk];
    var nmTris = edgeTris[nmk];
    console.log("\n  Non-manifold edge #" + nm + ": count=" + edgeCount[nmk]);
    console.log("    V0:", JSON.stringify(nmvs[0]));
    console.log("    V1:", JSON.stringify(nmvs[1]));
    for (var nmt = 0; nmt < nmTris.length; nmt++) {
        var ti = nmTris[nmt];
        var src = ti < grp.bOutside.length ? "bOutside[" + ti + "]" : "aInside[" + (ti - grp.bOutside.length) + "] (flipped)";
        console.log("    tri " + ti + " (" + src + "):", JSON.stringify(merged[ti]));
    }
}

// Step 6) Print open edge details
console.log("\nOpen edge verts:");
for (var oe = 0; oe < openEdges.length; oe++) {
    var oek = openEdges[oe];
    var oevs = edgeVerts[oek];
    var oeTris = edgeTris[oek];
    var src2 = oeTris[0] < grp.bOutside.length ? "bOutside[" + oeTris[0] + "]" : "aInside[" + (oeTris[0] - grp.bOutside.length) + "]";
    console.log("  edge #" + oe + " from " + src2 + ": (" +
        oevs[0].x.toFixed(2) + "," + oevs[0].y.toFixed(2) + "," + oevs[0].z.toFixed(2) + ") -> (" +
        oevs[1].x.toFixed(2) + "," + oevs[1].y.toFixed(2) + "," + oevs[1].z.toFixed(2) + ")");
}

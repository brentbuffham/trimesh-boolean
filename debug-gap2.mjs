import { boolean, splitMeshPair } from "./src/boolean/booleanOp.js";
import { resolveTJunctions } from "./src/repair/resolveTJunctions.js";
import { weldBoundaryVertices } from "./src/repair/weldBoundary.js";
import { estimateAvgEdge } from "./src/intersect/spatialGrid.js";
import fs from "fs";

var d = JSON.parse(fs.readFileSync("./examples/kirra-surfaces.json", "utf8"));
var terrSoup = d.terrain.soup;
var cupSoup = d.cup.soup;

var avgA = estimateAvgEdge(terrSoup);
var avgB = estimateAvgEdge(cupSoup);
terrSoup = resolveTJunctions(terrSoup, avgA * 0.01, 3);
terrSoup = weldBoundaryVertices(terrSoup, avgA * 0.01);
cupSoup = resolveTJunctions(cupSoup, avgB * 0.01, 3);
cupSoup = weldBoundaryVertices(cupSoup, avgB * 0.01);

// Run split to get 4 groups
var split = splitMeshPair(cupSoup, terrSoup);
if (!split) { console.log("No split!"); process.exit(); }

var groups = split.groups;
console.log("Groups: aInside=" + groups.aInside.length +
    " aOutside=" + groups.aOutside.length +
    " bInside=" + groups.bInside.length +
    " bOutside=" + groups.bOutside.length);

var PREC = 6;
function vk(v) { return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC); }
function ek(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

// Open verts from the gap
var openVerts = [
    { x: -41.277275, y: 58.218652, z: 9.761270, label: "V0" },
    { x: -41.495236, y: 58.108271, z: 9.660147, label: "V1" },
    { x: -40.569353, y: 58.572998, z: 10.067396, label: "V2" },
    { x: -40.499013, y: 58.380366, z: 10.031526, label: "V3" },
    { x: -39.783900, y: 56.308955, z: 9.412379, label: "V4" }
];
var ovKeys = {};
var ovLabels = {};
for (var i = 0; i < openVerts.length; i++) {
    var k = vk(openVerts[i]);
    ovKeys[k] = i;
    ovLabels[k] = openVerts[i].label;
}

function labelVert(v) {
    var k = vk(v);
    return ovLabels[k] || "orig";
}

// Check each group for triangles touching open verts
var groupNames = ["aInside (cup inside terrain)", "aOutside (cup outside terrain)",
    "bInside (terrain inside cup)", "bOutside (terrain outside cup)"];
var groupArrays = [groups.aInside, groups.aOutside, groups.bInside, groups.bOutside];

for (var gi = 0; gi < 4; gi++) {
    var grp = groupArrays[gi];
    var touching = [];
    for (var ti = 0; ti < grp.length; ti++) {
        var tri = grp[ti];
        var vs = [tri.v0, tri.v1, tri.v2];
        var matchCount = 0;
        for (var vi = 0; vi < 3; vi++) {
            if (ovKeys[vk(vs[vi])] !== undefined) matchCount++;
        }
        if (matchCount >= 1) {
            touching.push({ idx: ti, tri: tri, matches: matchCount });
        }
    }
    if (touching.length === 0) continue;

    console.log("\n=== " + groupNames[gi] + " === (" + touching.length + " tris touch open verts)");
    for (var j = 0; j < touching.length; j++) {
        var t = touching[j];
        console.log("  Tri " + t.idx + " (matches=" + t.matches + "): " +
            labelVert(t.tri.v0) + "(" + t.tri.v0.x.toFixed(3) + "," + t.tri.v0.y.toFixed(3) + "," + t.tri.v0.z.toFixed(3) + ") " +
            labelVert(t.tri.v1) + "(" + t.tri.v1.x.toFixed(3) + "," + t.tri.v1.y.toFixed(3) + "," + t.tri.v1.z.toFixed(3) + ") " +
            labelVert(t.tri.v2) + "(" + t.tri.v2.x.toFixed(3) + "," + t.tri.v2.y.toFixed(3) + "," + t.tri.v2.z.toFixed(3) + ")");
    }
}

// Now check the B-A result for open edges
console.log("\n=== B-A subtract result open edge analysis ===");
var result = boolean(cupSoup, terrSoup, "subtract");
if (!result) { console.log("Null result!"); process.exit(); }
var soup = result.soup;
var edgeCount = {};
var edgeVerts = {};
for (var i2 = 0; i2 < soup.length; i2++) {
    var tri2 = soup[i2];
    if (!tri2 || !tri2.v0) continue;
    var vs2 = [tri2.v0, tri2.v1, tri2.v2];
    var ks2 = [vk(vs2[0]), vk(vs2[1]), vk(vs2[2])];
    for (var e = 0; e < 3; e++) {
        var ne = (e + 1) % 3;
        var key = ek(ks2[e], ks2[ne]);
        if (!edgeCount[key]) { edgeCount[key] = 0; edgeVerts[key] = [vs2[e], vs2[ne]]; }
        edgeCount[key]++;
    }
}
var openEdges = [];
for (var k2 in edgeCount) {
    if (edgeCount[k2] === 1) openEdges.push({ key: k2, verts: edgeVerts[k2] });
}
console.log("Open edges: " + openEdges.length);
for (var oe = 0; oe < openEdges.length; oe++) {
    var a = openEdges[oe].verts[0], b = openEdges[oe].verts[1];
    console.log("  " + labelVert(a) + "(" + a.x.toFixed(3) + "," + a.y.toFixed(3) + "," + a.z.toFixed(3) + ") -> " +
        labelVert(b) + "(" + b.x.toFixed(3) + "," + b.y.toFixed(3) + "," + b.z.toFixed(3) + ")");
}

import { fanTriangulate, retriangulateWithSteinerPoints } from "./src/boolean/splitTriangles.js";
import { intersectMeshPairTagged } from "./src/intersect/intersectMeshPair.js";
import { resolveTJunctions } from "./src/repair/resolveTJunctions.js";
import { weldBoundaryVertices } from "./src/repair/weldBoundary.js";
import { estimateAvgEdge } from "./src/intersect/spatialGrid.js";
import { weldVertices, weldedToSoup } from "./src/repair/weldVertices.js";
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

var soupA = cupSoup;
var soupB = terrSoup;

var tagged = intersectMeshPairTagged(soupA, soupB);
console.log("Tagged segments:", tagged.length);

var crossedA = {};
var crossedB = {};
for (var s = 0; s < tagged.length; s++) {
    var seg = tagged[s];
    if (!crossedA[seg.idxA]) crossedA[seg.idxA] = [];
    crossedA[seg.idxA].push(seg);
    if (!crossedB[seg.idxB]) crossedB[seg.idxB] = [];
    crossedB[seg.idxB].push(seg);
}

var PREC = 6;
function vk(v) { return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC); }
function ek(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

var openVerts = [
    { x: -41.277275, y: 58.218652, z: 9.761270 },
    { x: -41.495236, y: 58.108271, z: 9.660147 },
    { x: -40.569353, y: 58.572998, z: 10.067396 },
    { x: -40.499013, y: 58.380366, z: 10.031526 },
    { x: -39.783900, y: 56.308955, z: 9.412379 }
];
var ovKeys = {};
for (var i = 0; i < openVerts.length; i++) {
    ovKeys[vk(openVerts[i])] = i;
}

console.log("\n=== Checking TERRAIN (B) crossed tris near gap ===");
for (var tb in crossedB) {
    var ti = parseInt(tb);
    var tri = soupB[ti];
    var subSegs = crossedB[tb];

    // Check if any segment endpoint matches an open vert
    var relevant = false;
    for (var s2 = 0; s2 < subSegs.length; s2++) {
        if (ovKeys[vk(subSegs[s2].p0)] !== undefined || ovKeys[vk(subSegs[s2].p1)] !== undefined) {
            relevant = true;
            break;
        }
    }
    if (!relevant) continue;

    console.log("\nTerrain tri " + ti + " (" + subSegs.length + " segs):");
    console.log("  orig v0=(" + tri.v0.x.toFixed(3) + "," + tri.v0.y.toFixed(3) + "," + tri.v0.z.toFixed(3) + ")");
    console.log("  orig v1=(" + tri.v1.x.toFixed(3) + "," + tri.v1.y.toFixed(3) + "," + tri.v1.z.toFixed(3) + ")");
    console.log("  orig v2=(" + tri.v2.x.toFixed(3) + "," + tri.v2.y.toFixed(3) + "," + tri.v2.z.toFixed(3) + ")");
    for (var s3 = 0; s3 < subSegs.length; s3++) {
        var ss = subSegs[s3];
        var m0 = ovKeys[vk(ss.p0)] !== undefined ? " [OPEN V" + ovKeys[vk(ss.p0)] + "]" : "";
        var m1 = ovKeys[vk(ss.p1)] !== undefined ? " [OPEN V" + ovKeys[vk(ss.p1)] + "]" : "";
        console.log("  seg " + s3 + ": (" + ss.p0.x.toFixed(4) + "," + ss.p0.y.toFixed(4) + "," + ss.p0.z.toFixed(4) + ")" + m0 + " -> (" + ss.p1.x.toFixed(4) + "," + ss.p1.y.toFixed(4) + "," + ss.p1.z.toFixed(4) + ")" + m1);
    }

    var fanSubs = fanTriangulate(tri, subSegs);
    var cdtSubs = retriangulateWithSteinerPoints(tri, subSegs);
    console.log("  Fan: " + fanSubs.length + " sub-tris, CDT: " + cdtSubs.length + " sub-tris");
    var usedCDT = (fanSubs.length === cdtSubs.length);

    console.log("  Fan sub-triangles:");
    for (var f = 0; f < fanSubs.length; f++) {
        var ft = fanSubs[f];
        var vs = [ft.v0, ft.v1, ft.v2];
        var markers = "";
        var openCount = 0;
        for (var v = 0; v < 3; v++) {
            if (ovKeys[vk(vs[v])] !== undefined) {
                markers += " [OPEN V" + ovKeys[vk(vs[v])] + "]";
                openCount++;
            }
        }
        console.log("    fan " + f + ": (" + ft.v0.x.toFixed(4) + "," + ft.v0.y.toFixed(4) + "," + ft.v0.z.toFixed(4) + ") (" + ft.v1.x.toFixed(4) + "," + ft.v1.y.toFixed(4) + "," + ft.v1.z.toFixed(4) + ") (" + ft.v2.x.toFixed(4) + "," + ft.v2.y.toFixed(4) + "," + ft.v2.z.toFixed(4) + ")" + markers);
    }

    // Check which open edges the fan produces
    var fanEdges = {};
    for (var f2 = 0; f2 < fanSubs.length; f2++) {
        var ft2 = fanSubs[f2];
        var fvs = [ft2.v0, ft2.v1, ft2.v2];
        var fks = [vk(fvs[0]), vk(fvs[1]), vk(fvs[2])];
        for (var fe = 0; fe < 3; fe++) {
            var fne = (fe + 1) % 3;
            // Only care about edges between open verts
            if (ovKeys[fks[fe]] !== undefined && ovKeys[fks[fne]] !== undefined) {
                var fek = ek(fks[fe], fks[fne]);
                if (!fanEdges[fek]) fanEdges[fek] = 0;
                fanEdges[fek]++;
            }
        }
    }
    if (Object.keys(fanEdges).length > 0) {
        console.log("  Open-vert edges in fan tris:");
        for (var fek2 in fanEdges) {
            console.log("    " + fek2 + " count=" + fanEdges[fek2]);
        }
    }
}

console.log("\n=== Checking CUP (A) crossed tris near gap ===");
for (var ta in crossedA) {
    var ti2 = parseInt(ta);
    var tri2 = soupA[ti2];
    var subSegs2 = crossedA[ta];

    var relevant2 = false;
    for (var s4 = 0; s4 < subSegs2.length; s4++) {
        if (ovKeys[vk(subSegs2[s4].p0)] !== undefined || ovKeys[vk(subSegs2[s4].p1)] !== undefined) {
            relevant2 = true;
            break;
        }
    }
    if (!relevant2) continue;

    console.log("\nCup tri " + ti2 + " (" + subSegs2.length + " segs):");
    console.log("  orig v0=(" + tri2.v0.x.toFixed(3) + "," + tri2.v0.y.toFixed(3) + "," + tri2.v0.z.toFixed(3) + ")");
    console.log("  orig v1=(" + tri2.v1.x.toFixed(3) + "," + tri2.v1.y.toFixed(3) + "," + tri2.v1.z.toFixed(3) + ")");
    console.log("  orig v2=(" + tri2.v2.x.toFixed(3) + "," + tri2.v2.y.toFixed(3) + "," + tri2.v2.z.toFixed(3) + ")");
    for (var s5 = 0; s5 < subSegs2.length; s5++) {
        var ss2 = subSegs2[s5];
        var m02 = ovKeys[vk(ss2.p0)] !== undefined ? " [OPEN V" + ovKeys[vk(ss2.p0)] + "]" : "";
        var m12 = ovKeys[vk(ss2.p1)] !== undefined ? " [OPEN V" + ovKeys[vk(ss2.p1)] + "]" : "";
        console.log("  seg " + s5 + ": (" + ss2.p0.x.toFixed(4) + "," + ss2.p0.y.toFixed(4) + "," + ss2.p0.z.toFixed(4) + ")" + m02 + " -> (" + ss2.p1.x.toFixed(4) + "," + ss2.p1.y.toFixed(4) + "," + ss2.p1.z.toFixed(4) + ")" + m12);
    }

    var fanSubs2 = fanTriangulate(tri2, subSegs2);
    console.log("  Fan: " + fanSubs2.length + " sub-tris");
    for (var f3 = 0; f3 < fanSubs2.length; f3++) {
        var ft3 = fanSubs2[f3];
        var vs2 = [ft3.v0, ft3.v1, ft3.v2];
        var markers2 = "";
        for (var v2 = 0; v2 < 3; v2++) {
            if (ovKeys[vk(vs2[v2])] !== undefined) markers2 += " [OPEN V" + ovKeys[vk(vs2[v2])] + "]";
        }
        console.log("    fan " + f3 + ": (" + ft3.v0.x.toFixed(4) + "," + ft3.v0.y.toFixed(4) + "," + ft3.v0.z.toFixed(4) + ") (" + ft3.v1.x.toFixed(4) + "," + ft3.v1.y.toFixed(4) + "," + ft3.v1.z.toFixed(4) + ") (" + ft3.v2.x.toFixed(4) + "," + ft3.v2.y.toFixed(4) + "," + ft3.v2.z.toFixed(4) + ")" + markers2);
    }

    var fanEdges2 = {};
    for (var f4 = 0; f4 < fanSubs2.length; f4++) {
        var ft4 = fanSubs2[f4];
        var fvs2 = [ft4.v0, ft4.v1, ft4.v2];
        var fks2 = [vk(fvs2[0]), vk(fvs2[1]), vk(fvs2[2])];
        for (var fe2 = 0; fe2 < 3; fe2++) {
            var fne2 = (fe2 + 1) % 3;
            if (ovKeys[fks2[fe2]] !== undefined && ovKeys[fks2[fne2]] !== undefined) {
                var fek3 = ek(fks2[fe2], fks2[fne2]);
                if (!fanEdges2[fek3]) fanEdges2[fek3] = 0;
                fanEdges2[fek3]++;
            }
        }
    }
    if (Object.keys(fanEdges2).length > 0) {
        console.log("  Open-vert edges in fan tris:");
        for (var fek4 in fanEdges2) {
            console.log("    " + fek4 + " count=" + fanEdges2[fek4]);
        }
    }
}

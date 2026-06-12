import { bmsIntersect, bmsChain } from "../src/index.js";
import { createCube } from "../test/fixtures/meshes.js";

// Mirror the demo's cube + cube-offset pair (examples use offset 0.5-ish)
var cubeA = createCube(0, 0, 0, 2);
var cubeB = createCube(1, 0.5, 0, 2); // demo's "Cube (offset)"

var isect = bmsIntersect(cubeA, cubeB);
console.log("segments:", isect.segments.length);
var chains = bmsChain(isect.segments);
console.log("chains:", chains.length);
for (var i = 0; i < chains.length; i++) {
	var c = chains[i];
	var f = c[0], l = c[c.length - 1];
	console.log("chain", i, "len", c.length,
		"first id", f.id, [f.x.toFixed(4), f.y.toFixed(4), f.z.toFixed(4)].join(","),
		"last id", l.id, [l.x.toFixed(4), l.y.toFixed(4), l.z.toFixed(4)].join(","));
}

// All segment endpoints by id for gap inspection
var endpointUse = {};
for (var s = 0; s < isect.segments.length; s++) {
	var sg = isect.segments[s];
	endpointUse[sg.p0.id] = (endpointUse[sg.p0.id] || 0) + 1;
	endpointUse[sg.p1.id] = (endpointUse[sg.p1.id] || 0) + 1;
}
var odd = Object.keys(endpointUse).filter(function (k) { return endpointUse[k] % 2 === 1; });
console.log("pool vertices with odd segment use (chain break candidates):", odd.length);

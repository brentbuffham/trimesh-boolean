import { readFileSync } from "fs";
import { bmsBooleanOp } from "../src/index.js";

var data = JSON.parse(readFileSync(new URL("../examples/public/kirra-surfaces.json", import.meta.url), "utf8"));
var terrain = data.terrain.soup;
var cylinder = data.cylinder.soup;

function zRange(soup) {
	var min = Infinity, max = -Infinity;
	for (var i = 0; i < soup.length; i++) {
		var t = soup[i];
		var zs = [t.v0.z, t.v1.z, t.v2.z];
		for (var j = 0; j < 3; j++) {
			if (zs[j] < min) min = zs[j];
			if (zs[j] > max) max = zs[j];
		}
	}
	return { min: min, max: max };
}

console.log("terrain z:", JSON.stringify(zRange(terrain)));
console.log("cylinder z:", JSON.stringify(zRange(cylinder)));

var hyb = bmsBooleanOp(terrain, cylinder, null, { classifier: "hybrid", preRepair: true });
var hef = bmsBooleanOp(terrain, cylinder, null, { classifier: "heffalump", preRepair: true });

console.log("hybrid   : A", hyb.groups.aInside.length, "/", hyb.groups.aOutside.length,
	"B", hyb.groups.bInside.length, "/", hyb.groups.bOutside.length,
	"bInside z:", JSON.stringify(zRange(hyb.groups.bInside)));
console.log("heffalump: A", hef.groups.aInside.length, "/", hef.groups.aOutside.length,
	"B", hef.groups.bInside.length, "/", hef.groups.bOutside.length,
	"bInside z:", JSON.stringify(zRange(hef.groups.bInside)));

// Spike detection: B-inside (cylinder below terrain) shouldn't reach far above terrain max
var tMax = zRange(terrain).max;
function spikes(group) {
	var n = 0;
	for (var i = 0; i < group.length; i++) {
		var t = group[i];
		if (Math.max(t.v0.z, t.v1.z, t.v2.z) > tMax) n++;
	}
	return n;
}
console.log("hybrid    bInside tris reaching above terrain max:", spikes(hyb.groups.bInside));
console.log("heffalump bInside tris reaching above terrain max:", spikes(hef.groups.bInside));
console.log("hybrid    aInside tris reaching above terrain max:", spikes(hyb.groups.aInside));
console.log("heffalump aInside tris reaching above terrain max:", spikes(hef.groups.aInside));

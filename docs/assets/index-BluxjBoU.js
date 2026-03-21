import{e as $n,b as Qu,t as th,q as eh,a as nh,d as El,v as ue,D as ih,C as rh,c as _r,r as Bs,w as zs,f as ts,i as sh,g as wl,s as Tl,h as ur,j as ks,k as Vs,l as ah,m as oh,n as lh,o as ch,p as uh}from"./booleanOp-BhCmmezw.js";const Wo="183",pr={ROTATE:0,DOLLY:1,PAN:2},hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hh=0,Al=1,fh=2,Is=1,dh=2,Or=3,Si=0,nn=1,dn=2,Qn=0,mr=1,Cl=2,Rl=3,Pl=4,ph=5,Di=100,mh=101,gh=102,_h=103,vh=104,xh=200,yh=201,Sh=202,Mh=203,Ya=204,ja=205,bh=206,Eh=207,wh=208,Th=209,Ah=210,Ch=211,Rh=212,Ph=213,Dh=214,Za=0,Ka=1,$a=2,vr=3,Ja=4,Qa=5,to=6,eo=7,Xo=0,Ih=1,Lh=2,On=0,jc=1,Zc=2,Kc=3,$c=4,Jc=5,Qc=6,tu=7,eu=300,Oi=301,xr=302,aa=303,oa=304,js=306,no=1e3,Jn=1001,io=1002,Oe=1003,Uh=1004,es=1005,Xe=1006,la=1007,Li=1008,an=1009,nu=1010,iu=1011,Wr=1012,qo=1013,zn=1014,Nn=1015,ni=1016,Yo=1017,jo=1018,Xr=1020,ru=35902,su=35899,au=1021,ou=1022,En=1023,ii=1026,Ui=1027,lu=1028,Zo=1029,yr=1030,Ko=1031,$o=1033,Ls=33776,Us=33777,Ns=33778,Fs=33779,ro=35840,so=35841,ao=35842,oo=35843,lo=36196,co=37492,uo=37496,ho=37488,fo=37489,po=37490,mo=37491,go=37808,_o=37809,vo=37810,xo=37811,yo=37812,So=37813,Mo=37814,bo=37815,Eo=37816,wo=37817,To=37818,Ao=37819,Co=37820,Ro=37821,Po=36492,Do=36494,Io=36495,Lo=36283,Uo=36284,No=36285,Fo=36286,Nh=3200,cu=0,Fh=1,vi="",hn="srgb",Sr="srgb-linear",Hs="linear",oe="srgb",Wi=7680,Dl=519,Oh=512,Bh=513,zh=514,Jo=515,kh=516,Vh=517,Qo=518,Hh=519,Oo=35044,Il="300 es",Fn=2e3,qr=2001;function Gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){const i=Gs("canvas");return i.style.display="block",i}const Ll={};function Ws(...i){const t="THREE."+i.shift();console.log(t,...i)}function uu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=uu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=uu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xs(...i){const t=i.join(" ");t in Ll||(Ll[t]=!0,Gt(...i))}function Xh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const qh={[Za]:Ka,[$a]:to,[Ja]:eo,[vr]:Qa,[Ka]:Za,[to]:$a,[eo]:Ja,[Qa]:vr};class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const Hr=Math.PI/180,Yr=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function tl(i,t){return(i%t+t)%t}function Yh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function jh(i,t,e){return i!==t?(e-i)/(t-i):0}function Gr(i,t,e){return(1-e)*i+e*t}function Zh(i,t,e,n){return Gr(i,t,1-Math.exp(-e*n))}function Kh(i,t=1){return t-Math.abs(tl(i,t*2)-t)}function $h(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function tf(i,t){return i+Math.random()*(t-i)}function ef(i){return i*(.5-Math.random())}function nf(i){i!==void 0&&(Ul=i);let t=Ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rf(i){return i*Hr}function sf(i){return i*Yr}function af(i){return(i&i-1)===0&&i!==0}function of(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cf(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),d=a((t+n)/2),m=s((t-n)/2),h=a((t-n)/2),u=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*d,l*m,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*m,o*c);break;case"ZXZ":i.set(l*m,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*u,o*c);break;case"YXY":i.set(l*u,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*u,o*d,o*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hu={DEG2RAD:Hr,RAD2DEG:Yr,generateUUID:ti,clamp:qt,euclideanModulo:tl,mapLinear:Yh,inverseLerp:jh,lerp:Gr,damp:Zh,pingpong:Kh,smoothstep:$h,smootherstep:Jh,randInt:Qh,randFloat:tf,randFloatSpread:ef,seededRandom:nf,degToRad:rf,radToDeg:sf,isPowerOfTwo:af,ceilPowerOfTwo:of,floorPowerOfTwo:lf,setQuaternionFromProperEuler:cf,normalize:le,denormalize:Mn};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],m=n[r+3],h=s[a+0],u=s[a+1],g=s[a+2],_=s[a+3];if(m!==_||l!==h||c!==u||d!==g){let p=l*h+c*u+d*g+m*_;p<0&&(h=-h,u=-u,g=-g,_=-_,p=-p);let f=1-o;if(p<.9995){const v=Math.acos(p),S=Math.sin(v);f=Math.sin(f*v)/S,o=Math.sin(o*v)/S,l=l*f+h*o,c=c*f+u*o,d=d*f+g*o,m=m*f+_*o}else{l=l*f+h*o,c=c*f+u*o,d=d*f+g*o,m=m*f+_*o;const v=1/Math.sqrt(l*l+c*c+d*d+m*m);l*=v,c*=v,d*=v,m*=v}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],m=s[a],h=s[a+1],u=s[a+2],g=s[a+3];return t[e]=o*g+d*m+l*u-c*h,t[e+1]=l*g+d*h+c*m-o*u,t[e+2]=c*g+d*u+o*h-l*m,t[e+3]=d*g-o*m-l*h-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),m=o(s/2),h=l(n/2),u=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*d*m+c*u*g,this._y=c*u*m-h*d*g,this._z=c*d*g+h*u*m,this._w=c*d*m-h*u*g;break;case"YXZ":this._x=h*d*m+c*u*g,this._y=c*u*m-h*d*g,this._z=c*d*g-h*u*m,this._w=c*d*m+h*u*g;break;case"ZXY":this._x=h*d*m-c*u*g,this._y=c*u*m+h*d*g,this._z=c*d*g+h*u*m,this._w=c*d*m-h*u*g;break;case"ZYX":this._x=h*d*m-c*u*g,this._y=c*u*m+h*d*g,this._z=c*d*g-h*u*m,this._w=c*d*m+h*u*g;break;case"YZX":this._x=h*d*m+c*u*g,this._y=c*u*m+h*d*g,this._z=c*d*g-h*u*m,this._w=c*d*m-h*u*g;break;case"XZY":this._x=h*d*m-c*u*g,this._y=c*u*m-h*d*g,this._z=c*d*g+h*u*m,this._w=c*d*m+h*u*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],m=e[10],h=n+o+m;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-l)*u,this._y=(s-c)*u,this._z=(a-r)*u}else if(n>o&&n>m){const u=2*Math.sqrt(1+n-o-m);this._w=(d-l)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+c)/u}else if(o>m){const u=2*Math.sqrt(1+o-n-m);this._w=(s-c)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+m-n-o);this._w=(a-r)/u,this._x=(s+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,n=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),d=2*(o*e-s*r),m=2*(s*n-a*e);return this.x=e+l*c+a*m-o*d,this.y=n+l*d+o*c-s*m,this.z=r+l*m+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new j,Nl=new Mi;class jt{constructor(t,e,n,r,s,a,o,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],m=n[7],h=n[2],u=n[5],g=n[8],_=r[0],p=r[3],f=r[6],v=r[1],S=r[4],w=r[7],A=r[2],P=r[5],D=r[8];return s[0]=a*_+o*v+l*A,s[3]=a*p+o*S+l*P,s[6]=a*f+o*w+l*D,s[1]=c*_+d*v+m*A,s[4]=c*p+d*S+m*P,s[7]=c*f+d*w+m*D,s[2]=h*_+u*v+g*A,s[5]=h*p+u*S+g*P,s[8]=h*f+u*w+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],m=d*a-o*c,h=o*l-d*s,u=c*s-a*l,g=e*m+n*h+r*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=m*_,t[1]=(r*c-d*n)*_,t[2]=(o*n-r*a)*_,t[3]=h*_,t[4]=(d*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new jt,Fl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uf(){const i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===oe&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?Hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:t,whitePoint:n,transfer:Hs,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const ne=uf();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class hf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xi===void 0&&(Xi=Gs("canvas")),Xi.width=t.width,Xi.height=t.height;const r=Xi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ei(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ff=0;class el{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ha(r[a].image)):s.push(ha(r[a]))}else s=ha(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let df=0;const fa=new j;class $e extends zi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=Jn,r=Jn,s=Xe,a=Li,o=En,l=an,c=$e.DEFAULT_ANISOTROPY,d=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=ti(),this.name="",this.source=new el(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=eu;$e.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],m=l[8],h=l[1],u=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(m-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,w=(u+1)/2,A=(f+1)/2,P=(d+h)/4,D=(m+_)/4,E=(g+p)/4;return S>w&&S>A?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=P/n,s=D/n):w>A?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=P/r,s=E/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=D/s,r=E/s),this.set(n,r,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(m-_)*(m-_)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(m-_)/v,this.z=(h-d)/v,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pf extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new $e(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new el(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends pf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fu extends $e{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mf extends $e{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _e{constructor(t,e,n,r,s,a,o,l,c,d,m,h,u,g,_,p){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,d,m,h,u,g,_,p)}set(t,e,n,r,s,a,o,l,c,d,m,h,u,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=m,f[14]=h,f[3]=u,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/qi.setFromMatrixColumn(t,0).length(),s=1/qi.setFromMatrixColumn(t,1).length(),a=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const h=a*d,u=a*m,g=o*d,_=o*m;e[0]=l*d,e[4]=-l*m,e[8]=c,e[1]=u+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,u=l*m,g=c*d,_=c*m;e[0]=h+_*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*m,e[5]=a*d,e[9]=-o,e[2]=u*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,u=l*m,g=c*d,_=c*m;e[0]=h-_*o,e[4]=-a*m,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*d,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,u=a*m,g=o*d,_=o*m;e[0]=l*d,e[4]=g*c-u,e[8]=h*c+_,e[1]=l*m,e[5]=_*c+h,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*d,e[4]=_-h*m,e[8]=g*m+u,e[1]=m,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=u*m+g,e[10]=h-_*m}else if(t.order==="XZY"){const h=a*l,u=a*c,g=o*l,_=o*c;e[0]=l*d,e[4]=-m,e[8]=c*d,e[1]=h*m+_,e[5]=a*d,e[9]=u*m-g,e[2]=g*m-u,e[6]=o*d,e[10]=_*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gf,t,_f)}lookAt(t,e,n){const r=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ci.crossVectors(n,rn),ci.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ci.crossVectors(n,rn)),ci.normalize(),ns.crossVectors(rn,ci),r[0]=ci.x,r[4]=ns.x,r[8]=rn.x,r[1]=ci.y,r[5]=ns.y,r[9]=rn.y,r[2]=ci.z,r[6]=ns.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],m=n[5],h=n[9],u=n[13],g=n[2],_=n[6],p=n[10],f=n[14],v=n[3],S=n[7],w=n[11],A=n[15],P=r[0],D=r[4],E=r[8],T=r[12],z=r[1],F=r[5],R=r[9],L=r[13],x=r[2],O=r[6],X=r[10],B=r[14],at=r[3],q=r[7],ct=r[11],H=r[15];return s[0]=a*P+o*z+l*x+c*at,s[4]=a*D+o*F+l*O+c*q,s[8]=a*E+o*R+l*X+c*ct,s[12]=a*T+o*L+l*B+c*H,s[1]=d*P+m*z+h*x+u*at,s[5]=d*D+m*F+h*O+u*q,s[9]=d*E+m*R+h*X+u*ct,s[13]=d*T+m*L+h*B+u*H,s[2]=g*P+_*z+p*x+f*at,s[6]=g*D+_*F+p*O+f*q,s[10]=g*E+_*R+p*X+f*ct,s[14]=g*T+_*L+p*B+f*H,s[3]=v*P+S*z+w*x+A*at,s[7]=v*D+S*F+w*O+A*q,s[11]=v*E+S*R+w*X+A*ct,s[15]=v*T+S*L+w*B+A*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],m=t[6],h=t[10],u=t[14],g=t[3],_=t[7],p=t[11],f=t[15],v=l*u-c*h,S=o*u-c*m,w=o*h-l*m,A=a*u-c*d,P=a*h-l*d,D=a*m-o*d;return e*(_*v-p*S+f*w)-n*(g*v-p*A+f*P)+r*(g*S-_*A+f*D)-s*(g*w-_*P+p*D)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],m=t[9],h=t[10],u=t[11],g=t[12],_=t[13],p=t[14],f=t[15],v=e*o-n*a,S=e*l-r*a,w=e*c-s*a,A=n*l-r*o,P=n*c-s*o,D=r*c-s*l,E=d*_-m*g,T=d*p-h*g,z=d*f-u*g,F=m*p-h*_,R=m*f-u*_,L=h*f-u*p,x=v*L-S*R+w*F+A*z-P*T+D*E;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/x;return t[0]=(o*L-l*R+c*F)*O,t[1]=(r*R-n*L-s*F)*O,t[2]=(_*D-p*P+f*A)*O,t[3]=(h*P-m*D-u*A)*O,t[4]=(l*z-a*L-c*T)*O,t[5]=(e*L-r*z+s*T)*O,t[6]=(p*w-g*D-f*S)*O,t[7]=(d*D-h*w+u*S)*O,t[8]=(a*R-o*z+c*E)*O,t[9]=(n*z-e*R-s*E)*O,t[10]=(g*P-_*w+f*v)*O,t[11]=(m*w-d*P-u*v)*O,t[12]=(o*T-a*F-l*E)*O,t[13]=(e*F-n*T+r*E)*O,t[14]=(_*S-g*A-p*v)*O,t[15]=(d*A-m*S+h*v)*O,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,m=o+o,h=s*c,u=s*d,g=s*m,_=a*d,p=a*m,f=o*m,v=l*c,S=l*d,w=l*m,A=n.x,P=n.y,D=n.z;return r[0]=(1-(_+f))*A,r[1]=(u+w)*A,r[2]=(g-S)*A,r[3]=0,r[4]=(u-w)*P,r[5]=(1-(h+f))*P,r[6]=(p+v)*P,r[7]=0,r[8]=(g+S)*D,r[9]=(p-v)*D,r[10]=(1-(h+_))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),l=qi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),vn.copy(this);const c=1/a,d=1/o,m=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=d,vn.elements[5]*=d,vn.elements[6]*=d,vn.elements[8]*=m,vn.elements[9]*=m,vn.elements[10]*=m,e.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,a,o=Fn,l=!1){const c=this.elements,d=2*s/(e-t),m=2*s/(n-r),h=(e+t)/(e-t),u=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Fn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===qr)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Fn,l=!1){const c=this.elements,d=2/(e-t),m=2/(n-r),h=-(e+t)/(e-t),u=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Fn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===qr)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qi=new j,vn=new _e,gf=new j(0,0,0),_f=new j(1,1,1),ci=new j,ns=new j,rn=new j,Bl=new _e,zl=new Mi;class kn{constructor(t=0,e=0,n=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],m=r[2],h=r[6],u=r[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vf=0;const kl=new j,Yi=new Mi,Xn=new _e,is=new j,Cr=new j,xf=new j,yf=new Mi,Vl=new j(1,0,0),Hl=new j(0,1,0),Gl=new j(0,0,1),Wl={type:"added"},Sf={type:"removed"},ji={type:"childadded",child:null},da={type:"childremoved",child:null};class Be extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new j,e=new kn,n=new Mi,r=new j(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?is.copy(t):is.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Cr,is,this.up):Xn.lookAt(is,Cr,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wl),ji.child=t,this.dispatchEvent(ji),ji.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wl),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const m=l[c];s(t.shapes,m)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),m=a(t.shapes),h=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Be.DEFAULT_UP=new j(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fr extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mf={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=d.position.distanceTo(m.position),u=.02,g=.005;c.inputState.pinching&&h>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},rs={h:0,s:0,l:0};function ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ne.workingColorSpace){if(t=tl(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ma(a,s,t+1/3),this.g=ma(a,s,t),this.b=ma(a,s,t-1/3)}return ne.colorSpaceToWorking(this,r),this}setStyle(t,e=hn){function n(s){s!==void 0&&parseFloat(s)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ne.workingToColorSpace(Ge.copy(this),t),Math.round(qt(Ge.r*255,0,255))*65536+Math.round(qt(Ge.g*255,0,255))*256+Math.round(qt(Ge.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,r=Ge.g,s=Ge.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=d<=.5?m/(a+o):m/(2-a-o),a){case n:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-n)/m+2;break;case s:l=(n-r)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=hn){ne.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,r=Ge.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(rs);const n=Gr(ui.h,rs.h,e),r=Gr(ui.s,rs.s,e),s=Gr(ui.l,rs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Qt;Qt.NAMES=pu;class bf extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xn=new j,qn=new j,ga=new j,Yn=new j,Zi=new j,Ki=new j,Xl=new j,_a=new j,va=new j,xa=new j,ya=new he,Sa=new he,Ma=new he;class bn{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),xn.subVectors(t,e),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){xn.subVectors(r,e),qn.subVectors(n,e),ga.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(qn),l=xn.dot(ga),c=qn.dot(qn),d=qn.dot(ga),m=a*c-o*o;if(m===0)return s.set(0,0,0),null;const h=1/m,u=(c*l-o*d)*h,g=(a*d-o*l)*h;return s.set(1-u-g,g,u)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return ya.setScalar(0),Sa.setScalar(0),Ma.setScalar(0),ya.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ya,s.x),a.addScaledVector(Sa,s.y),a.addScaledVector(Ma,s.z),a}static isFrontFacing(t,e,n,r){return xn.subVectors(n,e),qn.subVectors(t,e),xn.cross(qn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),xn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Zi.subVectors(r,n),Ki.subVectors(s,n),_a.subVectors(t,n);const l=Zi.dot(_a),c=Ki.dot(_a);if(l<=0&&c<=0)return e.copy(n);va.subVectors(t,r);const d=Zi.dot(va),m=Ki.dot(va);if(d>=0&&m<=d)return e.copy(r);const h=l*m-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Zi,a);xa.subVectors(t,s);const u=Zi.dot(xa),g=Ki.dot(xa);if(g>=0&&u<=g)return e.copy(s);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ki,o);const p=d*g-u*m;if(p<=0&&m-d>=0&&u-g>=0)return Xl.subVectors(s,r),o=(m-d)/(m-d+(u-g)),e.copy(r).addScaledVector(Xl,o);const f=1/(p+_+h);return a=_*f,o=h*f,e.copy(n).addScaledVector(Zi,a).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ri{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(t.matrixWorld),this.union(ss)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),as.subVectors(this.max,Rr),$i.subVectors(t.a,Rr),Ji.subVectors(t.b,Rr),Qi.subVectors(t.c,Rr),hi.subVectors(Ji,$i),fi.subVectors(Qi,Ji),wi.subVectors($i,Qi);let e=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-wi.z,wi.y,hi.z,0,-hi.x,fi.z,0,-fi.x,wi.z,0,-wi.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-wi.y,wi.x,0];return!ba(e,$i,Ji,Qi,as)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,$i,Ji,Qi,as))?!1:(os.crossVectors(hi,fi),e=[os.x,os.y,os.z],ba(e,$i,Ji,Qi,as))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const jn=[new j,new j,new j,new j,new j,new j,new j,new j],yn=new j,ss=new ri,$i=new j,Ji=new j,Qi=new j,hi=new j,fi=new j,wi=new j,Rr=new j,as=new j,os=new j,Ti=new j;function ba(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ti.fromArray(i,s);const o=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),d=n.dot(Ti);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Te=new j,ls=new Ht;let Ef=0;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ef++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oo,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),r=le(r,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oo&&(t.usage=this.usage),t}}class mu extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gu extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class De extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}const wf=new ri,Pr=new j,Ea=new j;class br{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);const e=Pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Pr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(Ea)),this.expandByPoint(Pr.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Tf=0;const un=new _e,wa=new Be,tr=new j,sn=new ri,Dr=new ri,Pe=new j;class Ye extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?gu:mu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(sn.min,Dr.min),sn.expandByPoint(Pe),Pe.addVectors(sn.max,Dr.max),sn.expandByPoint(Pe)):(sn.expandByPoint(Dr.min),sn.expandByPoint(Dr.max))}sn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Pe.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(t,c),Pe.add(tr)),r=Math.max(r,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let E=0;E<n.count;E++)o[E]=new j,l[E]=new j;const c=new j,d=new j,m=new j,h=new Ht,u=new Ht,g=new Ht,_=new j,p=new j;function f(E,T,z){c.fromBufferAttribute(n,E),d.fromBufferAttribute(n,T),m.fromBufferAttribute(n,z),h.fromBufferAttribute(s,E),u.fromBufferAttribute(s,T),g.fromBufferAttribute(s,z),d.sub(c),m.sub(c),u.sub(h),g.sub(h);const F=1/(u.x*g.y-g.x*u.y);isFinite(F)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(m,-u.y).multiplyScalar(F),p.copy(m).multiplyScalar(u.x).addScaledVector(d,-g.x).multiplyScalar(F),o[E].add(_),o[T].add(_),o[z].add(_),l[E].add(p),l[T].add(p),l[z].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let E=0,T=v.length;E<T;++E){const z=v[E],F=z.start,R=z.count;for(let L=F,x=F+R;L<x;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const S=new j,w=new j,A=new j,P=new j;function D(E){A.fromBufferAttribute(r,E),P.copy(A);const T=o[E];S.copy(T),S.sub(A.multiplyScalar(A.dot(T))).normalize(),w.crossVectors(P,T);const F=w.dot(l[E])<0?-1:1;a.setXYZW(E,S.x,S.y,S.z,F)}for(let E=0,T=v.length;E<T;++E){const z=v[E],F=z.start,R=z.count;for(let L=F,x=F+R;L<x;L+=3)D(t.getX(L+0)),D(t.getX(L+1)),D(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,d=new j,m=new j;if(t)for(let h=0,u=t.count;h<u;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,u=e.count;h<u;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,m=o.normalized,h=new c.constructor(l.length*d);let u=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*d;for(let f=0;f<d;f++)h[g++]=c[u++]}return new on(h,d,m)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,m=c.length;d<m;d++){const h=c[d],u=t(h,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let m=0,h=c.length;m<h;m++){const u=c[m];d.push(u.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],m=s[c];for(let h=0,u=m.length;h<u;h++)d.push(m[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Af{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oo,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new j;class xi{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),r=le(r,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Cf=0;class Er extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=mr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=ja,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Zn=new j,Ta=new j,cs=new j,di=new j,Aa=new j,us=new j,Ca=new j;class nl{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ta.copy(t).add(e).multiplyScalar(.5),cs.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Ta);const s=t.distanceTo(e)*.5,a=-this.direction.dot(cs),o=di.dot(this.direction),l=-di.dot(cs),c=di.lengthSq(),d=Math.abs(1-a*a);let m,h,u,g;if(d>0)if(m=a*l-o,h=a*o-l,g=s*d,m>=0)if(h>=-g)if(h<=g){const _=1/d;m*=_,h*=_,u=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=s,m=Math.max(0,-(a*h+o)),u=-m*m+h*(h+2*l)+c;else h=-s,m=Math.max(0,-(a*h+o)),u=-m*m+h*(h+2*l)+c;else h<=-g?(m=Math.max(0,-(-a*s+o)),h=m>0?-s:Math.min(Math.max(-s,-l),s),u=-m*m+h*(h+2*l)+c):h<=g?(m=0,h=Math.min(Math.max(-s,-l),s),u=h*(h+2*l)+c):(m=Math.max(0,-(a*s+o)),h=m>0?s:Math.min(Math.max(-s,-l),s),u=-m*m+h*(h+2*l)+c);else h=a>0?-s:s,m=Math.max(0,-(a*h+o)),u=-m*m+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Ta).addScaledVector(cs,h),u}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),r=Zn.dot(Zn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),d>=0?(s=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(t.min.z-h.z)*m,l=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,l=(t.min.z-h.z)*m),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,r,s){Aa.subVectors(e,t),us.subVectors(n,t),Ca.crossVectors(Aa,us);let a=this.direction.dot(Ca),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(us.crossVectors(di,us));if(l<0)return null;const c=o*this.direction.dot(Aa.cross(di));if(c<0||l+c>a)return null;const d=-o*di.dot(Ca);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _u extends Er{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ql=new _e,Ai=new nl,hs=new br,Yl=new j,fs=new j,ds=new j,ps=new j,Ra=new j,ms=new j,jl=new j,gs=new j;class wn extends Be{constructor(t=new Ye,e=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],m=s[l];d!==0&&(Ra.fromBufferAttribute(m,t),a?ms.addScaledVector(Ra,d):ms.addScaledVector(Ra.sub(e),d))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),Ai.copy(t.ray).recast(t.near),!(hs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(hs,Yl)===null||Ai.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(ql.copy(s).invert(),Ai.copy(t.ray).applyMatrix4(ql),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,h=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=a[p.materialIndex],v=Math.max(p.start,u.start),S=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let w=v,A=S;w<A;w+=3){const P=o.getX(w),D=o.getX(w+1),E=o.getX(w+2);r=_s(this,f,t,n,c,d,m,P,D,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let p=g,f=_;p<f;p+=3){const v=o.getX(p),S=o.getX(p+1),w=o.getX(p+2);r=_s(this,a,t,n,c,d,m,v,S,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=a[p.materialIndex],v=Math.max(p.start,u.start),S=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let w=v,A=S;w<A;w+=3){const P=w,D=w+1,E=w+2;r=_s(this,f,t,n,c,d,m,P,D,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,f=_;p<f;p+=3){const v=p,S=p+1,w=p+2;r=_s(this,a,t,n,c,d,m,v,S,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Rf(i,t,e,n,r,s,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Si,o),l===null)return null;gs.copy(o),gs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(gs);return c<e.near||c>e.far?null:{distance:c,point:gs.clone(),object:i}}function _s(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,fs),i.getVertexPosition(l,ds),i.getVertexPosition(c,ps);const d=Rf(i,t,e,n,fs,ds,ps,jl);if(d){const m=new j;bn.getBarycoord(jl,fs,ds,ps,m),r&&(d.uv=bn.getInterpolatedAttribute(r,o,l,c,m,new Ht)),s&&(d.uv1=bn.getInterpolatedAttribute(s,o,l,c,m,new Ht)),a&&(d.normal=bn.getInterpolatedAttribute(a,o,l,c,m,new j),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new j,materialIndex:0};bn.getNormal(fs,ds,ps,h.normal),d.face=h,d.barycoord=m}return d}class Pf extends $e{constructor(t=null,e=1,n=1,r,s,a,o,l,c=Oe,d=Oe,m,h){super(null,a,o,l,c,d,r,s,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=new j,Df=new j,If=new jt;class gi{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Pa.subVectors(n,e).cross(Df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||If.getNormalMatrix(t),r=this.coplanarPoint(Pa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new br,Lf=new Ht(.5,.5),vs=new j;class il{constructor(t=new gi,e=new gi,n=new gi,r=new gi,s=new gi,a=new gi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],m=s[5],h=s[6],u=s[7],g=s[8],_=s[9],p=s[10],f=s[11],v=s[12],S=s[13],w=s[14],A=s[15];if(r[0].setComponents(c-a,u-d,f-g,A-v).normalize(),r[1].setComponents(c+a,u+d,f+g,A+v).normalize(),r[2].setComponents(c+o,u+m,f+_,A+S).normalize(),r[3].setComponents(c-o,u-m,f-_,A-S).normalize(),n)r[4].setComponents(l,h,p,w).normalize(),r[5].setComponents(c-l,u-h,f-p,A-w).normalize();else if(r[4].setComponents(c-l,u-h,f-p,A-w).normalize(),e===Fn)r[5].setComponents(c+l,u+h,f+p,A+w).normalize();else if(e===qr)r[5].setComponents(l,h,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){Ci.center.set(0,0,0);const e=Lf.distanceTo(t.center);return Ci.radius=.7071067811865476+e,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(vs.x=r.normal.x>0?t.max.x:t.min.x,vs.y=r.normal.y>0?t.max.y:t.min.y,vs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zs extends Er{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qs=new j,Ys=new j,Zl=new _e,Ir=new nl,xs=new br,Da=new j,Kl=new j;class Uf extends Be{constructor(t=new Ye,e=new Zs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)qs.fromBufferAttribute(e,r-1),Ys.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=qs.distanceTo(Ys);t.setAttribute("lineDistance",new De(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),xs.radius+=s,t.ray.intersectsSphere(xs)===!1)return;Zl.copy(r).invert(),Ir.copy(t.ray).applyMatrix4(Zl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=u,p=g-1;_<p;_+=c){const f=d.getX(_),v=d.getX(_+1),S=ys(this,t,Ir,l,f,v,_);S&&e.push(S)}if(this.isLineLoop){const _=d.getX(g-1),p=d.getX(u),f=ys(this,t,Ir,l,_,p,g-1);f&&e.push(f)}}else{const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=u,p=g-1;_<p;_+=c){const f=ys(this,t,Ir,l,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=ys(this,t,Ir,l,g-1,u,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ys(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(qs.fromBufferAttribute(o,r),Ys.fromBufferAttribute(o,s),e.distanceSqToSegment(qs,Ys,Da,Kl)>n)return;Da.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Da);if(!(c<t.near||c>t.far))return{distance:c,point:Kl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const $l=new j,Jl=new j;class rl extends Uf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)$l.fromBufferAttribute(e,r),Jl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+$l.distanceTo(Jl);t.setAttribute("lineDistance",new De(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vu extends $e{constructor(t=[],e=Oi,n,r,s,a,o,l,c,d){super(t,e,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jr extends $e{constructor(t,e,n=zn,r,s,a,o=Oe,l=Oe,c,d=ii,m=1){if(d!==ii&&d!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:m};super(h,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new el(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Nf extends jr{constructor(t,e=zn,n=Oi,r,s,a=Oe,o=Oe,l,c=ii){const d={width:t,height:t,depth:1},m=[d,d,d,d,d,d];super(t,t,e,n,r,s,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xu extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kr extends Ye{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],m=[];let h=0,u=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(m,2));function g(_,p,f,v,S,w,A,P,D,E,T){const z=w/D,F=A/E,R=w/2,L=A/2,x=P/2,O=D+1,X=E+1;let B=0,at=0;const q=new j;for(let ct=0;ct<X;ct++){const H=ct*F-L;for(let k=0;k<O;k++){const dt=k*z-R;q[_]=dt*v,q[p]=H*S,q[f]=x,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[f]=P>0?1:-1,d.push(q.x,q.y,q.z),m.push(k/D),m.push(1-ct/E),B+=1}}for(let ct=0;ct<E;ct++)for(let H=0;H<D;H++){const k=h+H+O*ct,dt=h+H+O*(ct+1),gt=h+(H+1)+O*(ct+1),ft=h+(H+1)+O*ct;l.push(k,dt,ft),l.push(dt,gt,ft),at+=6}o.addGroup(u,at,T),u+=at,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ks extends Ye{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,m=t/o,h=e/l,u=[],g=[],_=[],p=[];for(let f=0;f<d;f++){const v=f*h-a;for(let S=0;S<c;S++){const w=S*m-s;g.push(w,-v,0),_.push(0,0,1),p.push(S/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const S=v+c*f,w=v+c*(f+1),A=v+1+c*(f+1),P=v+1+c*f;u.push(S,w,P),u.push(w,A,P)}this.setIndex(u),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ff extends Ye{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,r=new j,s=new j;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const m=l[c],h=m.start,u=m.count;for(let g=h,_=h+u;g<_;g+=3)for(let p=0;p<3;p++){const f=o.getX(g+p),v=o.getX(g+(p+1)%3);r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,v),Ql(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const d=3*o+c,m=3*o+(c+1)%3;r.fromBufferAttribute(a,d),s.fromBufferAttribute(a,m),Ql(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new De(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Ql(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}function Mr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=Mr(i[e]);for(const r in n)t[r]=n[r]}return t}function Of(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const sl={clone:Mr,merge:Ke};var Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Er{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kf extends Tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vf extends Er{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qt(16777215),this.specular=new Qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Xo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hf extends Er{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gf extends Er{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Su extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Ia=new _e,tc=new j,ec=new j;class Wf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===qr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ss=new j,Ms=new Mi,Rn=new j;class Mu extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ss,Ms,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ss,Ms,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Ss,Ms,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ss,Ms,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new j,nc=new Ht,ic=new Ht;class fn extends Mu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,nc,ic),e.subVectors(ic,nc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class al extends Mu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xf extends Wf{constructor(){super(new al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qf extends Su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Xf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Yf extends Su{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class jf extends Ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const er=-90,nr=1;class Zf extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(er,nr,t,e);r.layers=this.layers,this.add(r);const s=new fn(er,nr,t,e);s.layers=this.layers,this.add(s);const a=new fn(er,nr,t,e);a.layers=this.layers,this.add(a);const o=new fn(er,nr,t,e);o.layers=this.layers,this.add(o);const l=new fn(er,nr,t,e);l.layers=this.layers,this.add(l);const c=new fn(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(m,h,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kf extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Bo extends Af{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class rc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const sc=new j,bs=new j,ir=new j,rr=new j,La=new j,$f=new j,Jf=new j;class Qf{constructor(t=new j,e=new j){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){sc.subVectors(t,this.start),bs.subVectors(this.end,this.start);const n=bs.dot(bs);let s=bs.dot(sc)/n;return e&&(s=qt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=$f,n=Jf){const r=10000000000000001e-32;let s,a;const o=this.start,l=t.start,c=this.end,d=t.end;ir.subVectors(c,o),rr.subVectors(d,l),La.subVectors(o,l);const m=ir.dot(ir),h=rr.dot(rr),u=rr.dot(La);if(m<=r&&h<=r)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(m<=r)s=0,a=u/h,a=qt(a,0,1);else{const g=ir.dot(La);if(h<=r)a=0,s=qt(-g/m,0,1);else{const _=ir.dot(rr),p=m*h-_*_;p!==0?s=qt((_*u-g*h)/p,0,1):s=0,a=(_*s+u)/h,a<0?(a=0,s=qt(-g/m,0,1)):a>1&&(a=1,s=qt((_-g)/m,0,1))}}return e.copy(o).addScaledVector(ir,s),n.copy(l).addScaledVector(rr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class td extends rl{constructor(t=10,e=10,n=4473924,r=8947848){n=new Qt(n),r=new Qt(r);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let h=0,u=0,g=-o;h<=e;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=h===s?n:r;_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3}const d=new Ye;d.setAttribute("position",new De(l,3)),d.setAttribute("color",new De(c,3));const m=new Zs({vertexColors:!0,toneMapped:!1});super(d,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ed extends rl{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ye;r.setAttribute("position",new De(e,3)),r.setAttribute("color",new De(n,3));const s=new Zs({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new Qt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class nd extends zi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Gt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ac(i,t,e,n){const r=id(n);switch(e){case au:return i*t;case lu:return i*t/r.components*r.byteLength;case Zo:return i*t/r.components*r.byteLength;case yr:return i*t*2/r.components*r.byteLength;case Ko:return i*t*2/r.components*r.byteLength;case ou:return i*t*3/r.components*r.byteLength;case En:return i*t*4/r.components*r.byteLength;case $o:return i*t*4/r.components*r.byteLength;case Ls:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:case oo:return Math.max(i,16)*Math.max(t,8)/4;case ro:case ao:return Math.max(i,8)*Math.max(t,8)/2;case lo:case co:case ho:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uo:case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Po:case Do:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lo:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function id(i){switch(i){case an:case nu:return{byteLength:1,components:1};case Wr:case iu:case ni:return{byteLength:2,components:1};case Yo:case jo:return{byteLength:2,components:4};case zn:case qo:case Nn:return{byteLength:4,components:1};case ru:case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);function bu(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function rd(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,m=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){const d=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,d);else{m.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<m.length;u++){const g=m[h],_=m[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,m[h]=_)}m.length=h+1;for(let u=0,g=m.length;u<g;u++){const _=m[u];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$d=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:sd,alphahash_pars_fragment:ad,alphamap_fragment:od,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:ud,aomap_fragment:hd,aomap_pars_fragment:fd,batching_pars_vertex:dd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:_d,iridescence_fragment:vd,bumpmap_pars_fragment:xd,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:bd,color_fragment:Ed,color_pars_fragment:wd,color_pars_vertex:Td,color_vertex:Ad,common:Cd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Dd,displacementmap_vertex:Id,emissivemap_fragment:Ld,emissivemap_pars_fragment:Ud,colorspace_fragment:Nd,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:$d,envmap_vertex:Vd,fog_vertex:Hd,fog_pars_vertex:Gd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:qd,lightmap_pars_fragment:Yd,lights_lambert_fragment:jd,lights_lambert_pars_fragment:Zd,lights_pars_begin:Kd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Qd,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:rp,lights_fragment_maps:sp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:up,map_fragment:hp,map_pars_fragment:fp,map_particle_fragment:dp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphinstance_vertex:_p,morphcolor_vertex:vp,morphnormal_vertex:xp,morphtarget_pars_vertex:yp,morphtarget_vertex:Sp,normal_fragment_begin:Mp,normal_fragment_maps:bp,normal_pars_fragment:Ep,normal_pars_vertex:wp,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Dp,opaque_fragment:Ip,packing:Lp,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:Fp,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Gp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:jp,specularmap_pars_fragment:Zp,tonemapping_fragment:Kp,tonemapping_pars_fragment:$p,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:rm,background_frag:sm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:um,depth_frag:hm,distance_vert:fm,distance_frag:dm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:vm,meshbasic_frag:xm,meshlambert_vert:ym,meshlambert_frag:Sm,meshmatcap_vert:Mm,meshmatcap_frag:bm,meshnormal_vert:Em,meshnormal_frag:wm,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Cm,meshphysical_frag:Rm,meshtoon_vert:Pm,meshtoon_frag:Dm,points_vert:Im,points_frag:Lm,shadow_vert:Um,shadow_frag:Nm,sprite_vert:Fm,sprite_frag:Om},Ct={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},en={basic:{uniforms:Ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ke([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ke([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ke([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ke([Ct.points,Ct.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ke([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ke([Ct.common,Ct.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ke([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ke([Ct.sprite,Ct.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Ke([Ct.common,Ct.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Ke([Ct.lights,Ct.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};en.physical={uniforms:Ke([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Es={r:0,b:0,g:0},Ri=new kn,Bm=new _e;function zm(i,t,e,n,r,s){const a=new Qt(0);let o=r===!0?0:1,l,c,d=null,m=0,h=null;function u(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const w=v.backgroundBlurriness>0;S=t.get(S,w)}return S}function g(v){let S=!1;const w=u(v);w===null?p(a,o):w&&w.isColor&&(p(w,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,S){const w=u(S);w&&(w.isCubeTexture||w.mapping===js)?(c===void 0&&(c=new wn(new Kr(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Mr(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ri.copy(S.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Ri)),c.material.toneMapped=ne.getTransfer(w.colorSpace)!==oe,(d!==w||m!==w.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,m=w.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new wn(new Ks(2,2),new Tn({name:"BackgroundMaterial",uniforms:Mr(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ne.getTransfer(w.colorSpace)!==oe,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||m!==w.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,m=w.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(Es,yu(i)),e.buffers.color.setClear(Es.r,Es.g,Es.b,S,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:f}}function km(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(F,R,L,x,O){let X=!1;const B=m(F,x,L,R);s!==B&&(s=B,c(s.object)),X=u(F,x,L,O),X&&g(F,x,L,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,w(F,R,L,x),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function d(F){return i.deleteVertexArray(F)}function m(F,R,L,x){const O=x.wireframe===!0;let X=n[R.id];X===void 0&&(X={},n[R.id]=X);const B=F.isInstancedMesh===!0?F.id:0;let at=X[B];at===void 0&&(at={},X[B]=at);let q=at[L.id];q===void 0&&(q={},at[L.id]=q);let ct=q[O];return ct===void 0&&(ct=h(l()),q[O]=ct),ct}function h(F){const R=[],L=[],x=[];for(let O=0;O<e;O++)R[O]=0,L[O]=0,x[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:x,object:F,attributes:{},index:null}}function u(F,R,L,x){const O=s.attributes,X=R.attributes;let B=0;const at=L.getAttributes();for(const q in at)if(at[q].location>=0){const H=O[q];let k=X[q];if(k===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(k=F.instanceColor)),H===void 0||H.attribute!==k||k&&H.data!==k.data)return!0;B++}return s.attributesNum!==B||s.index!==x}function g(F,R,L,x){const O={},X=R.attributes;let B=0;const at=L.getAttributes();for(const q in at)if(at[q].location>=0){let H=X[q];H===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(H=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(H=F.instanceColor));const k={};k.attribute=H,H&&H.data&&(k.data=H.data),O[q]=k,B++}s.attributes=O,s.attributesNum=B,s.index=x}function _(){const F=s.newAttributes;for(let R=0,L=F.length;R<L;R++)F[R]=0}function p(F){f(F,0)}function f(F,R){const L=s.newAttributes,x=s.enabledAttributes,O=s.attributeDivisors;L[F]=1,x[F]===0&&(i.enableVertexAttribArray(F),x[F]=1),O[F]!==R&&(i.vertexAttribDivisor(F,R),O[F]=R)}function v(){const F=s.newAttributes,R=s.enabledAttributes;for(let L=0,x=R.length;L<x;L++)R[L]!==F[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function S(F,R,L,x,O,X,B){B===!0?i.vertexAttribIPointer(F,R,L,O,X):i.vertexAttribPointer(F,R,L,x,O,X)}function w(F,R,L,x){_();const O=x.attributes,X=L.getAttributes(),B=R.defaultAttributeValues;for(const at in X){const q=X[at];if(q.location>=0){let ct=O[at];if(ct===void 0&&(at==="instanceMatrix"&&F.instanceMatrix&&(ct=F.instanceMatrix),at==="instanceColor"&&F.instanceColor&&(ct=F.instanceColor)),ct!==void 0){const H=ct.normalized,k=ct.itemSize,dt=t.get(ct);if(dt===void 0)continue;const gt=dt.buffer,ft=dt.type,it=dt.bytesPerElement,ht=ft===i.INT||ft===i.UNSIGNED_INT||ct.gpuType===qo;if(ct.isInterleavedBufferAttribute){const lt=ct.data,yt=lt.stride,wt=ct.offset;if(lt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<q.locationSize;Mt++)f(q.location+Mt,lt.meshPerAttribute);F.isInstancedMesh!==!0&&x._maxInstanceCount===void 0&&(x._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)p(q.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Mt=0;Mt<q.locationSize;Mt++)S(q.location+Mt,k/q.locationSize,ft,H,yt*it,(wt+k/q.locationSize*Mt)*it,ht)}else{if(ct.isInstancedBufferAttribute){for(let lt=0;lt<q.locationSize;lt++)f(q.location+lt,ct.meshPerAttribute);F.isInstancedMesh!==!0&&x._maxInstanceCount===void 0&&(x._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let lt=0;lt<q.locationSize;lt++)p(q.location+lt);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let lt=0;lt<q.locationSize;lt++)S(q.location+lt,k/q.locationSize,ft,H,k*it,k/q.locationSize*lt*it,ht)}}else if(B!==void 0){const H=B[at];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(q.location,H);break;case 3:i.vertexAttrib3fv(q.location,H);break;case 4:i.vertexAttrib4fv(q.location,H);break;default:i.vertexAttrib1fv(q.location,H)}}}}v()}function A(){T();for(const F in n){const R=n[F];for(const L in R){const x=R[L];for(const O in x){const X=x[O];for(const B in X)d(X[B].object),delete X[B];delete x[O]}}delete n[F]}}function P(F){if(n[F.id]===void 0)return;const R=n[F.id];for(const L in R){const x=R[L];for(const O in x){const X=x[O];for(const B in X)d(X[B].object),delete X[B];delete x[O]}}delete n[F.id]}function D(F){for(const R in n){const L=n[R];for(const x in L){const O=L[x];if(O[F.id]===void 0)continue;const X=O[F.id];for(const B in X)d(X[B].object),delete X[B];delete O[F.id]}}}function E(F){for(const R in n){const L=n[R],x=F.isInstancedMesh===!0?F.id:0,O=L[x];if(O!==void 0){for(const X in O){const B=O[X];for(const at in B)d(B[at].object),delete B[at];delete O[X]}delete L[x],Object.keys(L).length===0&&delete n[R]}}}function T(){z(),a=!0,s!==r&&(s=r,c(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Vm(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,m){m!==0&&(i.drawArraysInstanced(n,c,d,m),e.update(d,n,m))}function o(c,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,m);let u=0;for(let g=0;g<m;g++)u+=d[g];e.update(u,n,1)}function l(c,d,m,h){if(m===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],d[g],h[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,m);let g=0;for(let _=0;_<m;_++)g+=d[_]*h[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==En&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const E=D===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==an&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Nn&&!E)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(Gt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const m=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:w,maxSamples:A,samples:P}}function Gm(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new gi,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const u=m.length!==0||h||n!==0||r;return r=h,n=m.length,u},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){e=d(m,h,0)},this.setState=function(m,h,u){const g=m.clippingPlanes,_=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!r||g===null||g.length===0||s&&!p)s?d(null):c();else{const v=s?0:n,S=v*4;let w=f.clippingState||null;l.value=w,w=d(g,h,S,u);for(let A=0;A!==S;++A)w[A]=e[A];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,h,u,g){const _=m!==null?m.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=u+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,w=u;S!==_;++S,w+=4)a.copy(m[S]).applyMatrix4(v,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}const yi=4,oc=[.125,.215,.35,.446,.526,.582],Ii=20,Wm=256,Lr=new al,lc=new Qt;let Ua=null,Na=0,Fa=0,Oa=!1;const Xm=new j;class cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=Xm}=s;Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=Oa,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:ni,format:En,colorSpace:Sr,depthBuffer:!1},r=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qm(s)),this._blurMaterial=jm(s,t,e),this._ggxMaterial=Ym(s,t,e)}return r}_compileMaterial(t){const e=new wn(new Ye,t);this._renderer.compile(e,Lr)}_sceneToCubeUV(t,e,n,r,s){const l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,u=m.toneMapping;m.getClearColor(lc),m.toneMapping=On,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new Kr,new _u({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let f=!1;const v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,f=!0):(p.color.copy(lc),f=!0);for(let S=0;S<6;S++){const w=S%3;w===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[S],s.y,s.z)):w===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[S]));const A=this._cubeSize;sr(r,w*A,S>2?A:0,A,A),m.setRenderTarget(r),f&&m.render(_,l),m.render(t,l)}m.toneMapping=u,m.autoClear=h,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Oi||t.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-d*d),h=0+c*1.25,u=m*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-yi?n-g+yi:0),f=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=g-e,sr(s,p,f,3*_,2*_),r.setRenderTarget(s),r.render(o,Lr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,sr(t,p,f,3*_,2*_),r.setRenderTarget(t),r.render(o,Lr)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&re("blur direction must be either latitudinal or longitudinal!");const d=3,m=this._lodMeshes[r];m.material=c;const h=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Ii-1),_=s/g,p=isFinite(s)?1+Math.floor(d*_):Ii;p>Ii&&Gt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);const f=[];let v=0;for(let D=0;D<Ii;++D){const E=D/_,T=Math.exp(-E*E/2);f.push(T),D===0?v+=T:D<p&&(v+=2*T)}for(let D=0;D<f.length;D++)f[D]=f[D]/v;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const w=this._sizeLods[r],A=3*w*(r>S-yi?r-S+yi:0),P=4*(this._cubeSize-w);sr(e,A,P,3*w,2*w),l.setRenderTarget(e),l.render(m,Lr)}}function qm(i){const t=[],e=[],n=[];let r=i;const s=i-yi+1+oc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-yi?l=oc[a-i+yi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),d=-c,m=1+c,h=[d,d,m,d,m,m,d,d,m,m,d,m],u=6,g=6,_=3,p=2,f=1,v=new Float32Array(_*g*u),S=new Float32Array(p*g*u),w=new Float32Array(f*g*u);for(let P=0;P<u;P++){const D=P%3*2/3-1,E=P>2?0:-1,T=[D,E,0,D+2/3,E,0,D+2/3,E+1,0,D,E,0,D+2/3,E+1,0,D,E+1,0];v.set(T,_*g*P),S.set(h,p*g*P);const z=[P,P,P,P,P,P];w.set(z,f*g*P)}const A=new Ye;A.setAttribute("position",new on(v,_)),A.setAttribute("uv",new on(S,p)),A.setAttribute("faceIndex",new on(w,f)),n.push(new wn(A,null)),r>yi&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function uc(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ym(i,t,e){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$s(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function jm(i,t,e){const n=new Float32Array(Ii),r=new j(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function hc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function fc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function $s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Eu extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new vu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Kr(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Qn});s.uniforms.tEquirect.value=e;const a=new wn(r,s),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=Xe),new Zf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function Zm(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,u=!1){return h==null?null:u?a(h):s(h)}function s(h){if(h&&h.isTexture){const u=h.mapping;if(u===aa||u===oa)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Eu(g.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const u=h.mapping,g=u===aa||u===oa,_=u===Oi||u===xr;if(g||_){let p=e.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new cc(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const v=h.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new cc(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function o(h,u){return u===aa?h.mapping=Oi:u===oa&&(h.mapping=xr),h}function l(h){let u=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&u++;return u===g}function c(h){const u=h.target;u.removeEventListener("dispose",c);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function d(h){const u=h.target;u.removeEventListener("dispose",d);const g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:m}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Xs("WebGLRenderer: "+n+" extension not supported."),r}}}function $m(i,t,e,n){const r={},s=new WeakMap;function a(m){const h=m.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const u=s.get(h);u&&(t.remove(u),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(m,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(m){const h=m.attributes;for(const u in h)t.update(h[u],i.ARRAY_BUFFER)}function c(m){const h=[],u=m.index,g=m.attributes.position;let _=0;if(g===void 0)return;if(u!==null){const v=u.array;_=u.version;for(let S=0,w=v.length;S<w;S+=3){const A=v[S+0],P=v[S+1],D=v[S+2];h.push(A,P,P,D,D,A)}}else{const v=g.array;_=g.version;for(let S=0,w=v.length/3-1;S<w;S+=3){const A=S+0,P=S+1,D=S+2;h.push(A,P,P,D,D,A)}}const p=new(g.count>=65535?gu:mu)(h,1);p.version=_;const f=s.get(m);f&&t.remove(f),s.set(m,p)}function d(m){const h=s.get(m);if(h){const u=m.index;u!==null&&h.version<u.version&&c(m)}else c(m);return s.get(m)}return{get:o,update:l,getWireframeAttribute:d}}function Jm(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,s,h*a),e.update(u,n,1)}function c(h,u,g){g!==0&&(i.drawElementsInstanced(n,u,s,h*a,g),e.update(u,n,g))}function d(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,g);let p=0;for(let f=0;f<g;f++)p+=u[f];e.update(p,n,1)}function m(h,u,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/a,u[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,s,h,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=u[v]*_[v];e.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Qm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function tg(i,t,e){const n=new WeakMap,r=new he;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==m){let T=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;u===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let w=o.attributes.position.count*S,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const P=new Float32Array(w*A*4*m),D=new fu(P,w,A,m);D.type=Nn,D.needsUpdate=!0;const E=S*4;for(let z=0;z<m;z++){const F=p[z],R=f[z],L=v[z],x=w*A*4*z;for(let O=0;O<F.count;O++){const X=O*E;u===!0&&(r.fromBufferAttribute(F,O),P[x+X+0]=r.x,P[x+X+1]=r.y,P[x+X+2]=r.z,P[x+X+3]=0),g===!0&&(r.fromBufferAttribute(R,O),P[x+X+4]=r.x,P[x+X+5]=r.y,P[x+X+6]=r.z,P[x+X+7]=0),_===!0&&(r.fromBufferAttribute(L,O),P[x+X+8]=r.x,P[x+X+9]=r.y,P[x+X+10]=r.z,P[x+X+11]=L.itemSize===4?r.w:1)}}h={count:m,texture:D,size:new Ht(w,A)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];const g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function eg(i,t,e,n,r){let s=new WeakMap;function a(c){const d=r.render.frame,m=c.geometry,h=t.get(c,m);if(s.get(h)!==d&&(t.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==d&&(u.update(),s.set(u,d))}return h}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const ng={[jc]:"LINEAR_TONE_MAPPING",[Zc]:"REINHARD_TONE_MAPPING",[Kc]:"CINEON_TONE_MAPPING",[$c]:"ACES_FILMIC_TONE_MAPPING",[Qc]:"AGX_TONE_MAPPING",[tu]:"NEUTRAL_TONE_MAPPING",[Jc]:"CUSTOM_TONE_MAPPING"};function ig(i,t,e,n,r){const s=new Bn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new Bn(t,e,{type:ni,depthBuffer:!1,stencilBuffer:!1}),o=new Ye;o.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new De([0,2,0,0,2,0],2));const l=new kf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new wn(o,l),d=new al(-1,1,1,-1,0,1);let m=null,h=null,u=!1,g,_=null,p=[],f=!1;this.setSize=function(v,S){s.setSize(v,S),a.setSize(v,S);for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){p=v,f=p.length>0&&p[0].isRenderPass===!0;const S=s.width,w=s.height;for(let A=0;A<p.length;A++){const P=p[A];P.setSize&&P.setSize(S,w)}},this.begin=function(v,S){if(u||v.toneMapping===On&&p.length===0)return!1;if(_=S,S!==null){const w=S.width,A=S.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return f===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=On,!0},this.hasRenderPass=function(){return f},this.end=function(v,S){v.toneMapping=g,u=!0;let w=s,A=a;for(let P=0;P<p.length;P++){const D=p[P];if(D.enabled!==!1&&(D.render(v,A,w,S),D.needsSwap!==!1)){const E=w;w=A,A=E}}if(m!==v.outputColorSpace||h!==v.toneMapping){m=v.outputColorSpace,h=v.toneMapping,l.defines={},ne.getTransfer(m)===oe&&(l.defines.SRGB_TRANSFER="");const P=ng[h];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(_),v.render(c,d),_=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const wu=new $e,zo=new jr(1,1),Tu=new fu,Au=new mf,Cu=new vu,dc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),_c=new Float32Array(4);function wr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=dc[r];if(s===void 0&&(s=new Float32Array(r),dc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Js(i,t){let e=pc[t];e===void 0&&(e=new Int32Array(t),pc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;_c.set(n),i.uniformMatrix2fv(this.addr,!1,_c),Re(e,n)}}function cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;gc.set(n),i.uniformMatrix3fv(this.addr,!1,gc),Re(e,n)}}function ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;mc.set(n),i.uniformMatrix4fv(this.addr,!1,mc),Re(e,n)}}function hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function xg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zo.compareFunction=e.isReversedDepthBuffer()?Qo:Jo,s=zo):s=wu,e.setTexture2D(t||s,r)}function yg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Au,r)}function Sg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Cu,r)}function Mg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Tu,r)}function bg(i){switch(i){case 5126:return rg;case 35664:return sg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Mg}}function Eg(i,t){i.uniform1fv(this.addr,t)}function wg(i,t){const e=wr(t,this.size,2);i.uniform2fv(this.addr,e)}function Tg(i,t){const e=wr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){const e=wr(t,this.size,4);i.uniform4fv(this.addr,e)}function Cg(i,t){const e=wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rg(i,t){const e=wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){const e=wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dg(i,t){i.uniform1iv(this.addr,t)}function Ig(i,t){i.uniform2iv(this.addr,t)}function Lg(i,t){i.uniform3iv(this.addr,t)}function Ug(i,t){i.uniform4iv(this.addr,t)}function Ng(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){const n=this.cache,r=t.length,s=Js(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=zo:a=wu;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function kg(i,t,e){const n=this.cache,r=t.length,s=Js(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Au,s[a])}function Vg(i,t,e){const n=this.cache,r=t.length,s=Js(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Cu,s[a])}function Hg(i,t,e){const n=this.cache,r=t.length,s=Js(e,r);Ce(n,s)||(i.uniform1iv(this.addr,s),Re(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Tu,s[a])}function Gg(i){switch(i){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Cg;case 35675:return Rg;case 35676:return Pg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Hg}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bg(e.type)}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}}class qg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function vc(i,t){i.seq.push(t),i.map[t.id]=t}function Yg(i,t,e){const n=i.name,r=n.length;for(Ba.lastIndex=0;;){const s=Ba.exec(n),a=Ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vc(e,c===void 0?new Wg(o,i,t):new Xg(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new qg(o),vc(e,m)),e=m}}}class Os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Yg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jg=37297;let Zg=0;function Kg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const yc=new jt;function $g(i){ne._getMatrix(yc,ne.workingColorSpace,i);const t=`mat3( ${yc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Hs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Kg(i.getShaderSource(t),o)}else return s}function Jg(i,t){const e=$g(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Qg={[jc]:"Linear",[Zc]:"Reinhard",[Kc]:"Cineon",[$c]:"ACESFilmic",[Qc]:"AgX",[tu]:"Neutral",[Jc]:"Custom"};function t_(i,t){const e=Qg[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ws=new j;function e_(){ne.getLuminanceCoefficients(ws);const i=ws.x.toFixed(4),t=ws.y.toFixed(4),e=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function i_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Br(i){return i!==""}function Mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(s_,o_)}const a_=new Map;function o_(i,t){let e=Zt[t];if(e===void 0){const n=a_.get(t);if(n!==void 0)e=Zt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ko(e)}const l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(i){return i.replace(l_,c_)}function c_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const u_={[Is]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function h_(i){return u_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f_={[Oi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE_UV"};function d_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":f_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const p_={[xr]:"ENVMAP_MODE_REFRACTION"};function m_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":p_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const g_={[Xo]:"ENVMAP_BLENDING_MULTIPLY",[Ih]:"ENVMAP_BLENDING_MIX",[Lh]:"ENVMAP_BLENDING_ADD"};function __(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":g_[i.combine]||"ENVMAP_BLENDING_NONE"}function v_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function x_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=h_(e),c=d_(e),d=m_(e),m=__(e),h=v_(e),u=n_(e),g=i_(s),_=r.createProgram();let p,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),f.length>0&&(f+=`
`)):(p=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),f=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Zt.tonemapping_pars_fragment:"",e.toneMapping!==On?t_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Jg("linearToOutputTexel",e.outputColorSpace),e_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),a=ko(a),a=Mc(a,e),a=bc(a,e),o=ko(o),o=Mc(o,e),o=bc(o,e),a=Ec(a),o=Ec(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=v+p+a,w=v+f+o,A=xc(r,r.VERTEX_SHADER,S),P=xc(r,r.FRAGMENT_SHADER,w);r.attachShader(_,A),r.attachShader(_,P),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(F){if(i.debug.checkShaderErrors){const R=r.getProgramInfoLog(_)||"",L=r.getShaderInfoLog(A)||"",x=r.getShaderInfoLog(P)||"",O=R.trim(),X=L.trim(),B=x.trim();let at=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,P);else{const ct=Sc(r,A,"vertex"),H=Sc(r,P,"fragment");re("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+ct+`
`+H)}else O!==""?Gt("WebGLProgram: Program Info Log:",O):(X===""||B==="")&&(q=!1);q&&(F.diagnostics={runnable:at,programLog:O,vertexShader:{log:X,prefix:p},fragmentShader:{log:B,prefix:f}})}r.deleteShader(A),r.deleteShader(P),E=new Os(r,_),T=r_(r,_)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(_,jg)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=P,this}let y_=0;class S_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M_(t),e.set(t,n)),n}}class M_{constructor(t){this.id=y_++,this.code=t,this.usedTimes=0}}function b_(i,t,e,n,r,s){const a=new du,o=new S_,l=new Set,c=[],d=new Map,m=n.logarithmicDepthBuffer;let h=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function _(E,T,z,F,R){const L=F.fog,x=R.geometry,O=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,B=t.get(E.envMap||O,X),at=B&&B.mapping===js?B.image.height:null,q=u[E.type];E.precision!==null&&(h=n.getMaxPrecision(E.precision),h!==E.precision&&Gt("WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const ct=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,H=ct!==void 0?ct.length:0;let k=0;x.morphAttributes.position!==void 0&&(k=1),x.morphAttributes.normal!==void 0&&(k=2),x.morphAttributes.color!==void 0&&(k=3);let dt,gt,ft,it;if(q){const $t=en[q];dt=$t.vertexShader,gt=$t.fragmentShader}else dt=E.vertexShader,gt=E.fragmentShader,o.update(E),ft=o.getVertexShaderID(E),it=o.getFragmentShaderID(E);const ht=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),yt=R.isInstancedMesh===!0,wt=R.isBatchedMesh===!0,Mt=!!E.map,Wt=!!E.matcap,zt=!!B,y=!!E.aoMap,J=!!E.lightMap,Y=!!E.bumpMap,U=!!E.normalMap,M=!!E.displacementMap,W=!!E.emissiveMap,Q=!!E.metalnessMap,rt=!!E.roughnessMap,V=E.anisotropy>0,C=E.clearcoat>0,b=E.dispersion>0,N=E.iridescence>0,Z=E.sheen>0,nt=E.transmission>0,$=V&&!!E.anisotropyMap,bt=C&&!!E.clearcoatMap,pt=C&&!!E.clearcoatNormalMap,Pt=C&&!!E.clearcoatRoughnessMap,Ot=N&&!!E.iridescenceMap,ut=N&&!!E.iridescenceThicknessMap,xt=Z&&!!E.sheenColorMap,Dt=Z&&!!E.sheenRoughnessMap,Tt=!!E.specularMap,Et=!!E.specularColorMap,At=!!E.specularIntensityMap,G=nt&&!!E.transmissionMap,_t=nt&&!!E.thicknessMap,vt=!!E.gradientMap,St=!!E.alphaMap,mt=E.alphaTest>0,ot=!!E.alphaHash,Ut=!!E.extensions;let Vt=On;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const te={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:dt,fragmentShader:gt,defines:E.defines,customVertexShaderID:ft,customFragmentShaderID:it,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:wt,batchingColor:wt&&R._colorsTexture!==null,instancing:yt,instancingColor:yt&&R.instanceColor!==null,instancingMorph:yt&&R.morphTexture!==null,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Sr,alphaToCoverage:!!E.alphaToCoverage,map:Mt,matcap:Wt,envMap:zt,envMapMode:zt&&B.mapping,envMapCubeUVHeight:at,aoMap:y,lightMap:J,bumpMap:Y,normalMap:U,displacementMap:M,emissiveMap:W,normalMapObjectSpace:U&&E.normalMapType===Fh,normalMapTangentSpace:U&&E.normalMapType===cu,metalnessMap:Q,roughnessMap:rt,anisotropy:V,anisotropyMap:$,clearcoat:C,clearcoatMap:bt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Pt,dispersion:b,iridescence:N,iridescenceMap:Ot,iridescenceThicknessMap:ut,sheen:Z,sheenColorMap:xt,sheenRoughnessMap:Dt,specularMap:Tt,specularColorMap:Et,specularIntensityMap:At,transmission:nt,transmissionMap:G,thicknessMap:_t,gradientMap:vt,opaque:E.transparent===!1&&E.blending===mr&&E.alphaToCoverage===!1,alphaMap:St,alphaTest:mt,alphaHash:ot,combine:E.combine,mapUv:Mt&&g(E.map.channel),aoMapUv:y&&g(E.aoMap.channel),lightMapUv:J&&g(E.lightMap.channel),bumpMapUv:Y&&g(E.bumpMap.channel),normalMapUv:U&&g(E.normalMap.channel),displacementMapUv:M&&g(E.displacementMap.channel),emissiveMapUv:W&&g(E.emissiveMap.channel),metalnessMapUv:Q&&g(E.metalnessMap.channel),roughnessMapUv:rt&&g(E.roughnessMap.channel),anisotropyMapUv:$&&g(E.anisotropyMap.channel),clearcoatMapUv:bt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(E.sheenRoughnessMap.channel),specularMapUv:Tt&&g(E.specularMap.channel),specularColorMapUv:Et&&g(E.specularColorMap.channel),specularIntensityMapUv:At&&g(E.specularIntensityMap.channel),transmissionMapUv:G&&g(E.transmissionMap.channel),thicknessMapUv:_t&&g(E.thicknessMap.channel),alphaMapUv:St&&g(E.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(U||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!x.attributes.uv&&(Mt||St),fog:!!L,useFog:E.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||x.attributes.normal===void 0&&U===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:lt,skinning:R.isSkinnedMesh===!0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:k,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Mt&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===oe,decodeVideoTextureEmissive:W&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function p(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)T.push(z),T.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(f(T,E),v(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function f(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){const T=u[E.type];let z;if(T){const F=en[T];z=sl.clone(F.uniforms)}else z=E.uniforms;return z}function w(E,T){let z=d.get(T);return z!==void 0?++z.usedTimes:(z=new x_(i,T,E,r),c.push(z),d.set(T,z)),z}function A(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),d.delete(E.cacheKey),E.destroy()}}function P(E){o.remove(E)}function D(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:P,programs:c,dispose:D}}function E_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function w_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Tc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ac(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,g,_,p,f){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:u,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:f},i[t]=v):(v.id=h.id,v.object=h,v.geometry=u,v.material=g,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=p,v.group=f),t++,v}function l(h,u,g,_,p,f){const v=o(h,u,g,_,p,f);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):e.push(v)}function c(h,u,g,_,p,f){const v=o(h,u,g,_,p,f);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):e.unshift(v)}function d(h,u){e.length>1&&e.sort(h||w_),n.length>1&&n.sort(u||Tc),r.length>1&&r.sort(u||Tc)}function m(){for(let h=t,u=i.length;h<u;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:m,sort:d}}function T_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ac,i.set(n,[a])):r>=s.length?(a=new Ac,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new Qt};break;case"SpotLight":e={position:new j,direction:new j,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function C_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let R_=0;function P_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D_(i){const t=new A_,e=C_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const r=new j,s=new _e,a=new _e;function o(c){let d=0,m=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let u=0,g=0,_=0,p=0,f=0,v=0,S=0,w=0,A=0,P=0,D=0;c.sort(P_);for(let T=0,z=c.length;T<z;T++){const F=c[T],R=F.color,L=F.intensity,x=F.distance;let O=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===yr?O=F.shadow.map.texture:O=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=R.r*L,m+=R.g*L,h+=R.b*L;else if(F.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(F.sh.coefficients[X],L);D++}else if(F.isDirectionalLight){const X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const B=F.shadow,at=e.get(F);at.shadowIntensity=B.intensity,at.shadowBias=B.bias,at.shadowNormalBias=B.normalBias,at.shadowRadius=B.radius,at.shadowMapSize=B.mapSize,n.directionalShadow[u]=at,n.directionalShadowMap[u]=O,n.directionalShadowMatrix[u]=F.shadow.matrix,v++}n.directional[u]=X,u++}else if(F.isSpotLight){const X=t.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(R).multiplyScalar(L),X.distance=x,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,n.spot[_]=X;const B=F.shadow;if(F.map&&(n.spotLightMap[A]=F.map,A++,B.updateMatrices(F),F.castShadow&&P++),n.spotLightMatrix[_]=B.matrix,F.castShadow){const at=e.get(F);at.shadowIntensity=B.intensity,at.shadowBias=B.bias,at.shadowNormalBias=B.normalBias,at.shadowRadius=B.radius,at.shadowMapSize=B.mapSize,n.spotShadow[_]=at,n.spotShadowMap[_]=O,w++}_++}else if(F.isRectAreaLight){const X=t.get(F);X.color.copy(R).multiplyScalar(L),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),n.rectArea[p]=X,p++}else if(F.isPointLight){const X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const B=F.shadow,at=e.get(F);at.shadowIntensity=B.intensity,at.shadowBias=B.bias,at.shadowNormalBias=B.normalBias,at.shadowRadius=B.radius,at.shadowMapSize=B.mapSize,at.shadowCameraNear=B.camera.near,at.shadowCameraFar=B.camera.far,n.pointShadow[g]=at,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=X,g++}else if(F.isHemisphereLight){const X=t.get(F);X.skyColor.copy(F.color).multiplyScalar(L),X.groundColor.copy(F.groundColor).multiplyScalar(L),n.hemi[f]=X,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=h;const E=n.hash;(E.directionalLength!==u||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==p||E.hemiLength!==f||E.numDirectionalShadows!==v||E.numPointShadows!==S||E.numSpotShadows!==w||E.numSpotMaps!==A||E.numLightProbes!==D)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+A-P,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,E.directionalLength=u,E.pointLength=g,E.spotLength=_,E.rectAreaLength=p,E.hemiLength=f,E.numDirectionalShadows=v,E.numPointShadows=S,E.numSpotShadows=w,E.numSpotMaps=A,E.numLightProbes=D,n.version=R_++)}function l(c,d){let m=0,h=0,u=0,g=0,_=0;const p=d.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const S=c[f];if(S.isDirectionalLight){const w=n.directional[m];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(S.isSpotLight){const w=n.spot[u];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),u++}else if(S.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const w=n.point[h];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Cc(i){const t=new D_(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function I_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Cc(i),t.set(r,[o])):s>=a.length?(o=new Cc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,N_=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],F_=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Rc=new _e,Ur=new j,za=new j;function O_(i,t,e){let n=new il;const r=new Ht,s=new Ht,a=new he,o=new Hf,l=new Gf,c={},d=e.maxTextureSize,m={[Si]:nn,[nn]:Si,[dn]:dn},h=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:L_,fragmentShader:U_}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let f=this.type;this.render=function(P,D,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;this.type===dh&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Is);const T=i.getRenderTarget(),z=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Qn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=f!==this.type;L&&D.traverse(function(x){x.material&&(Array.isArray(x.material)?x.material.forEach(O=>O.needsUpdate=!0):x.material.needsUpdate=!0)});for(let x=0,O=P.length;x<O;x++){const X=P[x],B=X.shadow;if(B===void 0){Gt("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const at=B.getFrameExtents();r.multiply(at),s.copy(B.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/at.x),r.x=s.x*at.x,B.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/at.y),r.y=s.y*at.y,B.mapSize.y=s.y));const q=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=q,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Or){if(X.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Bn(r.x,r.y,{format:yr,type:ni,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new jr(r.x,r.y,Nn),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=ii,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Oe,B.map.depthTexture.magFilter=Oe}else X.isPointLight?(B.map=new Eu(r.x),B.map.depthTexture=new Nf(r.x,zn)):(B.map=new Bn(r.x,r.y),B.map.depthTexture=new jr(r.x,r.y,zn)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=ii,this.type===Is?(B.map.depthTexture.compareFunction=q?Qo:Jo,B.map.depthTexture.minFilter=Xe,B.map.depthTexture.magFilter=Xe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Oe,B.map.depthTexture.magFilter=Oe);B.camera.updateProjectionMatrix()}const ct=B.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<ct;H++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,H),i.clear();else{H===0&&(i.setRenderTarget(B.map),i.clear());const k=B.getViewport(H);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),R.viewport(a)}if(X.isPointLight){const k=B.camera,dt=B.matrix,gt=X.distance||k.far;gt!==k.far&&(k.far=gt,k.updateProjectionMatrix()),Ur.setFromMatrixPosition(X.matrixWorld),k.position.copy(Ur),za.copy(k.position),za.add(N_[H]),k.up.copy(F_[H]),k.lookAt(za),k.updateMatrixWorld(),dt.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Rc.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Rc,k.coordinateSystem,k.reversedDepth)}else B.updateMatrices(X);n=B.getFrustum(),w(D,E,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===Or&&v(B,E),B.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(T,z,F)};function v(P,D){const E=t.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,u.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bn(r.x,r.y,{format:yr,type:ni})),h.uniforms.shadow_pass.value=P.map.depthTexture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,E,h,_,null),u.uniforms.shadow_pass.value=P.mapPass.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,E,u,_,null)}function S(P,D,E,T){let z=null;const F=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)z=F;else if(z=E.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const R=z.uuid,L=D.uuid;let x=c[R];x===void 0&&(x={},c[R]=x);let O=x[L];O===void 0&&(O=z.clone(),x[L]=O,D.addEventListener("dispose",A)),z=O}if(z.visible=D.visible,z.wireframe=D.wireframe,T===Or?z.side=D.shadowSide!==null?D.shadowSide:D.side:z.side=D.shadowSide!==null?D.shadowSide:m[D.side],z.alphaMap=D.alphaMap,z.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,z.map=D.map,z.clipShadows=D.clipShadows,z.clippingPlanes=D.clippingPlanes,z.clipIntersection=D.clipIntersection,z.displacementMap=D.displacementMap,z.displacementScale=D.displacementScale,z.displacementBias=D.displacementBias,z.wireframeLinewidth=D.wireframeLinewidth,z.linewidth=D.linewidth,E.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const R=i.properties.get(z);R.light=E}return z}function w(P,D,E,T,z){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&z===Or)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const L=t.update(P),x=P.material;if(Array.isArray(x)){const O=L.groups;for(let X=0,B=O.length;X<B;X++){const at=O[X],q=x[at.materialIndex];if(q&&q.visible){const ct=S(P,q,T,z);P.onBeforeShadow(i,P,D,E,L,ct,at),i.renderBufferDirect(E,null,L,ct,P,at),P.onAfterShadow(i,P,D,E,L,ct,at)}}}else if(x.visible){const O=S(P,x,T,z);P.onBeforeShadow(i,P,D,E,L,O,null),i.renderBufferDirect(E,null,L,O,P,null),P.onAfterShadow(i,P,D,E,L,O,null)}}const R=P.children;for(let L=0,x=R.length;L<x;L++)w(R[L],D,E,T,z)}function A(P){P.target.removeEventListener("dispose",A);for(const E in c){const T=c[E],z=P.target.uuid;z in T&&(T[z].dispose(),delete T[z])}}}function B_(i,t){function e(){let G=!1;const _t=new he;let vt=null;const St=new he(0,0,0,0);return{setMask:function(mt){vt!==mt&&!G&&(i.colorMask(mt,mt,mt,mt),vt=mt)},setLocked:function(mt){G=mt},setClear:function(mt,ot,Ut,Vt,te){te===!0&&(mt*=Vt,ot*=Vt,Ut*=Vt),_t.set(mt,ot,Ut,Vt),St.equals(_t)===!1&&(i.clearColor(mt,ot,Ut,Vt),St.copy(_t))},reset:function(){G=!1,vt=null,St.set(-1,0,0,0)}}}function n(){let G=!1,_t=!1,vt=null,St=null,mt=null;return{setReversed:function(ot){if(_t!==ot){const Ut=t.get("EXT_clip_control");ot?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),_t=ot;const Vt=mt;mt=null,this.setClear(Vt)}},getReversed:function(){return _t},setTest:function(ot){ot?ht(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(ot){vt!==ot&&!G&&(i.depthMask(ot),vt=ot)},setFunc:function(ot){if(_t&&(ot=qh[ot]),St!==ot){switch(ot){case Za:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case Ja:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case to:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=ot}},setLocked:function(ot){G=ot},setClear:function(ot){mt!==ot&&(mt=ot,_t&&(ot=1-ot),i.clearDepth(ot))},reset:function(){G=!1,vt=null,St=null,mt=null,_t=!1}}}function r(){let G=!1,_t=null,vt=null,St=null,mt=null,ot=null,Ut=null,Vt=null,te=null;return{setTest:function($t){G||($t?ht(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function($t){_t!==$t&&!G&&(i.stencilMask($t),_t=$t)},setFunc:function($t,Ie,Le){(vt!==$t||St!==Ie||mt!==Le)&&(i.stencilFunc($t,Ie,Le),vt=$t,St=Ie,mt=Le)},setOp:function($t,Ie,Le){(ot!==$t||Ut!==Ie||Vt!==Le)&&(i.stencilOp($t,Ie,Le),ot=$t,Ut=Ie,Vt=Le)},setLocked:function($t){G=$t},setClear:function($t){te!==$t&&(i.clearStencil($t),te=$t)},reset:function(){G=!1,_t=null,vt=null,St=null,mt=null,ot=null,Ut=null,Vt=null,te=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},m={},h=new WeakMap,u=[],g=null,_=!1,p=null,f=null,v=null,S=null,w=null,A=null,P=null,D=new Qt(0,0,0),E=0,T=!1,z=null,F=null,R=null,L=null,x=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(at)[1]),X=B>=1):at.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),X=B>=2);let q=null,ct={};const H=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),dt=new he().fromArray(H),gt=new he().fromArray(k);function ft(G,_t,vt,St){const mt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(G,ot),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<vt;Ut++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(_t+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ot}const it={};it[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),a.setFunc(vr),Y(!1),U(Al),ht(i.CULL_FACE),y(Qn);function ht(G){d[G]!==!0&&(i.enable(G),d[G]=!0)}function lt(G){d[G]!==!1&&(i.disable(G),d[G]=!1)}function yt(G,_t){return m[G]!==_t?(i.bindFramebuffer(G,_t),m[G]=_t,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=_t),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function wt(G,_t){let vt=u,St=!1;if(G){vt=h.get(_t),vt===void 0&&(vt=[],h.set(_t,vt));const mt=G.textures;if(vt.length!==mt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ut=mt.length;ot<Ut;ot++)vt[ot]=i.COLOR_ATTACHMENT0+ot;vt.length=mt.length,St=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,St=!0);St&&i.drawBuffers(vt)}function Mt(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const Wt={[Di]:i.FUNC_ADD,[mh]:i.FUNC_SUBTRACT,[gh]:i.FUNC_REVERSE_SUBTRACT};Wt[_h]=i.MIN,Wt[vh]=i.MAX;const zt={[xh]:i.ZERO,[yh]:i.ONE,[Sh]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[Ah]:i.SRC_ALPHA_SATURATE,[wh]:i.DST_COLOR,[bh]:i.DST_ALPHA,[Mh]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[Th]:i.ONE_MINUS_DST_COLOR,[Eh]:i.ONE_MINUS_DST_ALPHA,[Ch]:i.CONSTANT_COLOR,[Rh]:i.ONE_MINUS_CONSTANT_COLOR,[Ph]:i.CONSTANT_ALPHA,[Dh]:i.ONE_MINUS_CONSTANT_ALPHA};function y(G,_t,vt,St,mt,ot,Ut,Vt,te,$t){if(G===Qn){_===!0&&(lt(i.BLEND),_=!1);return}if(_===!1&&(ht(i.BLEND),_=!0),G!==ph){if(G!==p||$t!==T){if((f!==Di||w!==Di)&&(i.blendEquation(i.FUNC_ADD),f=Di,w=Di),$t)switch(G){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cl:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",G);break}else switch(G){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rl:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",G);break}v=null,S=null,A=null,P=null,D.set(0,0,0),E=0,p=G,T=$t}return}mt=mt||_t,ot=ot||vt,Ut=Ut||St,(_t!==f||mt!==w)&&(i.blendEquationSeparate(Wt[_t],Wt[mt]),f=_t,w=mt),(vt!==v||St!==S||ot!==A||Ut!==P)&&(i.blendFuncSeparate(zt[vt],zt[St],zt[ot],zt[Ut]),v=vt,S=St,A=ot,P=Ut),(Vt.equals(D)===!1||te!==E)&&(i.blendColor(Vt.r,Vt.g,Vt.b,te),D.copy(Vt),E=te),p=G,T=!1}function J(G,_t){G.side===dn?lt(i.CULL_FACE):ht(i.CULL_FACE);let vt=G.side===nn;_t&&(vt=!vt),Y(vt),G.blending===mr&&G.transparent===!1?y(Qn):y(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const St=G.stencilWrite;o.setTest(St),St&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),W(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(G){z!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),z=G)}function U(G){G!==hh?(ht(i.CULL_FACE),G!==F&&(G===Al?i.cullFace(i.BACK):G===fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),F=G}function M(G){G!==R&&(X&&i.lineWidth(G),R=G)}function W(G,_t,vt){G?(ht(i.POLYGON_OFFSET_FILL),(L!==_t||x!==vt)&&(L=_t,x=vt,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,vt))):lt(i.POLYGON_OFFSET_FILL)}function Q(G){G?ht(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function rt(G){G===void 0&&(G=i.TEXTURE0+O-1),q!==G&&(i.activeTexture(G),q=G)}function V(G,_t,vt){vt===void 0&&(q===null?vt=i.TEXTURE0+O-1:vt=q);let St=ct[vt];St===void 0&&(St={type:void 0,texture:void 0},ct[vt]=St),(St.type!==G||St.texture!==_t)&&(q!==vt&&(i.activeTexture(vt),q=vt),i.bindTexture(G,_t||it[G]),St.type=G,St.texture=_t)}function C(){const G=ct[q];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function Z(){try{i.texSubImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function nt(){try{i.texSubImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function pt(){try{i.texStorage2D(...arguments)}catch(G){re("WebGLState:",G)}}function Pt(){try{i.texStorage3D(...arguments)}catch(G){re("WebGLState:",G)}}function Ot(){try{i.texImage2D(...arguments)}catch(G){re("WebGLState:",G)}}function ut(){try{i.texImage3D(...arguments)}catch(G){re("WebGLState:",G)}}function xt(G){dt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),dt.copy(G))}function Dt(G){gt.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),gt.copy(G))}function Tt(G,_t){let vt=c.get(_t);vt===void 0&&(vt=new WeakMap,c.set(_t,vt));let St=vt.get(G);St===void 0&&(St=i.getUniformBlockIndex(_t,G.name),vt.set(G,St))}function Et(G,_t){const St=c.get(_t).get(G);l.get(_t)!==St&&(i.uniformBlockBinding(_t,St,G.__bindingPointIndex),l.set(_t,St))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},q=null,ct={},m={},h=new WeakMap,u=[],g=null,_=!1,p=null,f=null,v=null,S=null,w=null,A=null,P=null,D=new Qt(0,0,0),E=0,T=!1,z=null,F=null,R=null,L=null,x=null,dt.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ht,disable:lt,bindFramebuffer:yt,drawBuffers:wt,useProgram:Mt,setBlending:y,setMaterial:J,setFlipSided:Y,setCullFace:U,setLineWidth:M,setPolygonOffset:W,setScissorTest:Q,activeTexture:rt,bindTexture:V,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:N,texImage2D:Ot,texImage3D:ut,updateUBOMapping:Tt,uniformBlockBinding:Et,texStorage2D:pt,texStorage3D:Pt,texSubImage2D:Z,texSubImage3D:nt,compressedTexSubImage2D:$,compressedTexSubImage3D:bt,scissor:xt,viewport:Dt,reset:At}}function z_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,d=new WeakMap;let m;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return u?new OffscreenCanvas(C,b):Gs("canvas")}function _(C,b,N){let Z=1;const nt=V(C);if((nt.width>N||nt.height>N)&&(Z=N/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Z*nt.width),bt=Math.floor(Z*nt.height);m===void 0&&(m=g($,bt));const pt=b?g($,bt):m;return pt.width=$,pt.height=bt,pt.getContext("2d").drawImage(C,0,0,$,bt),Gt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+bt+")."),pt}else return"data"in C&&Gt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function p(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,b,N,Z,nt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=b;if(b===i.RED&&(N===i.FLOAT&&($=i.R32F),N===i.HALF_FLOAT&&($=i.R16F),N===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.R8UI),N===i.UNSIGNED_SHORT&&($=i.R16UI),N===i.UNSIGNED_INT&&($=i.R32UI),N===i.BYTE&&($=i.R8I),N===i.SHORT&&($=i.R16I),N===i.INT&&($=i.R32I)),b===i.RG&&(N===i.FLOAT&&($=i.RG32F),N===i.HALF_FLOAT&&($=i.RG16F),N===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.RG8UI),N===i.UNSIGNED_SHORT&&($=i.RG16UI),N===i.UNSIGNED_INT&&($=i.RG32UI),N===i.BYTE&&($=i.RG8I),N===i.SHORT&&($=i.RG16I),N===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.RGB8UI),N===i.UNSIGNED_SHORT&&($=i.RGB16UI),N===i.UNSIGNED_INT&&($=i.RGB32UI),N===i.BYTE&&($=i.RGB8I),N===i.SHORT&&($=i.RGB16I),N===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.RGBA8UI),N===i.UNSIGNED_SHORT&&($=i.RGBA16UI),N===i.UNSIGNED_INT&&($=i.RGBA32UI),N===i.BYTE&&($=i.RGBA8I),N===i.SHORT&&($=i.RGBA16I),N===i.INT&&($=i.RGBA32I)),b===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),b===i.RGBA){const bt=nt?Hs:ne.getTransfer(Z);N===i.FLOAT&&($=i.RGBA32F),N===i.HALF_FLOAT&&($=i.RGBA16F),N===i.UNSIGNED_BYTE&&($=bt===oe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function w(C,b){let N;return C?b===null||b===zn||b===Xr?N=i.DEPTH24_STENCIL8:b===Nn?N=i.DEPTH32F_STENCIL8:b===Wr&&(N=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===zn||b===Xr?N=i.DEPTH_COMPONENT24:b===Nn?N=i.DEPTH_COMPONENT32F:b===Wr&&(N=i.DEPTH_COMPONENT16),N}function A(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Oe&&C.minFilter!==Xe?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){const b=C.target;b.removeEventListener("dispose",P),E(b),b.isVideoTexture&&d.delete(b)}function D(C){const b=C.target;b.removeEventListener("dispose",D),z(b)}function E(C){const b=n.get(C);if(b.__webglInit===void 0)return;const N=C.source,Z=h.get(N);if(Z){const nt=Z[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&T(C),Object.keys(Z).length===0&&h.delete(N)}n.remove(C)}function T(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const N=C.source,Z=h.get(N);delete Z[b.__cacheKey],a.memory.textures--}function z(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let nt=0;nt<b.__webglFramebuffer[Z].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[Z][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const N=C.textures;for(let Z=0,nt=N.length;Z<nt;Z++){const $=n.get(N[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(N[Z])}n.remove(C)}let F=0;function R(){F=0}function L(){const C=F;return C>=r.maxTextures&&Gt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function x(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function O(C,b){const N=n.get(C);if(C.isVideoTexture&&Q(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const Z=C.image;if(Z===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(N,C,b);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+b)}function X(C,b){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){it(N,C,b);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+b)}function B(C,b){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){it(N,C,b);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+b)}function at(C,b){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){ht(N,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+b)}const q={[no]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},ct={[Oe]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[es]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},H={[Oh]:i.NEVER,[Hh]:i.ALWAYS,[Bh]:i.LESS,[Jo]:i.LEQUAL,[zh]:i.EQUAL,[Qo]:i.GEQUAL,[kh]:i.GREATER,[Vh]:i.NOTEQUAL};function k(C,b){if(b.type===Nn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Xe||b.magFilter===la||b.magFilter===es||b.magFilter===Li||b.minFilter===Xe||b.minFilter===la||b.minFilter===es||b.minFilter===Li)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,q[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,q[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,q[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ct[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,H[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Oe||b.minFilter!==es&&b.minFilter!==Li||b.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function dt(C,b){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",P));const Z=b.source;let nt=h.get(Z);nt===void 0&&(nt={},h.set(Z,nt));const $=x(b);if($!==C.__cacheKey){nt[$]===void 0&&(nt[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),nt[$].usedTimes++;const bt=nt[C.__cacheKey];bt!==void 0&&(nt[C.__cacheKey].usedTimes--,bt.usedTimes===0&&T(b)),C.__cacheKey=$,C.__webglTexture=nt[$].texture}return N}function gt(C,b,N){return Math.floor(Math.floor(C/N)/b)}function ft(C,b,N,Z){const $=C.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,N,Z,b.data);else{$.sort((ut,xt)=>ut.start-xt.start);let bt=0;for(let ut=1;ut<$.length;ut++){const xt=$[bt],Dt=$[ut],Tt=xt.start+xt.count,Et=gt(Dt.start,b.width,4),At=gt(xt.start,b.width,4);Dt.start<=Tt+1&&Et===At&&gt(Dt.start+Dt.count-1,b.width,4)===Et?xt.count=Math.max(xt.count,Dt.start+Dt.count-xt.start):(++bt,$[bt]=Dt)}$.length=bt+1;const pt=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ot=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ut=0,xt=$.length;ut<xt;ut++){const Dt=$[ut],Tt=Math.floor(Dt.start/4),Et=Math.ceil(Dt.count/4),At=Tt%b.width,G=Math.floor(Tt/b.width),_t=Et,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,At,G,_t,vt,N,Z,b.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ot)}}function it(C,b,N){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const nt=dt(C,b),$=b.source;e.bindTexture(Z,C.__webglTexture,i.TEXTURE0+N);const bt=n.get($);if($.version!==bt.__version||nt===!0){e.activeTexture(i.TEXTURE0+N);const pt=ne.getPrimaries(ne.workingColorSpace),Pt=b.colorSpace===vi?null:ne.getPrimaries(b.colorSpace),Ot=b.colorSpace===vi||pt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let ut=_(b.image,!1,r.maxTextureSize);ut=rt(b,ut);const xt=s.convert(b.format,b.colorSpace),Dt=s.convert(b.type);let Tt=S(b.internalFormat,xt,Dt,b.colorSpace,b.isVideoTexture);k(Z,b);let Et;const At=b.mipmaps,G=b.isVideoTexture!==!0,_t=bt.__version===void 0||nt===!0,vt=$.dataReady,St=A(b,ut);if(b.isDepthTexture)Tt=w(b.format===Ui,b.type),_t&&(G?e.texStorage2D(i.TEXTURE_2D,1,Tt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Tt,ut.width,ut.height,0,xt,Dt,null));else if(b.isDataTexture)if(At.length>0){G&&_t&&e.texStorage2D(i.TEXTURE_2D,St,Tt,At[0].width,At[0].height);for(let mt=0,ot=At.length;mt<ot;mt++)Et=At[mt],G?vt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Et.width,Et.height,xt,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,mt,Tt,Et.width,Et.height,0,xt,Dt,Et.data);b.generateMipmaps=!1}else G?(_t&&e.texStorage2D(i.TEXTURE_2D,St,Tt,ut.width,ut.height),vt&&ft(b,ut,xt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Tt,ut.width,ut.height,0,xt,Dt,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Tt,At[0].width,At[0].height,ut.depth);for(let mt=0,ot=At.length;mt<ot;mt++)if(Et=At[mt],b.format!==En)if(xt!==null)if(G){if(vt)if(b.layerUpdates.size>0){const Ut=ac(Et.width,Et.height,b.format,b.type);for(const Vt of b.layerUpdates){const te=Et.data.subarray(Vt*Ut/Et.data.BYTES_PER_ELEMENT,(Vt+1)*Ut/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Vt,Et.width,Et.height,1,xt,te)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Et.width,Et.height,ut.depth,xt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Tt,Et.width,Et.height,ut.depth,0,Et.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Et.width,Et.height,ut.depth,xt,Dt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Tt,Et.width,Et.height,ut.depth,0,xt,Dt,Et.data)}else{G&&_t&&e.texStorage2D(i.TEXTURE_2D,St,Tt,At[0].width,At[0].height);for(let mt=0,ot=At.length;mt<ot;mt++)Et=At[mt],b.format!==En?xt!==null?G?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Et.width,Et.height,xt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Tt,Et.width,Et.height,0,Et.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?vt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Et.width,Et.height,xt,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,mt,Tt,Et.width,Et.height,0,xt,Dt,Et.data)}else if(b.isDataArrayTexture)if(G){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Tt,ut.width,ut.height,ut.depth),vt)if(b.layerUpdates.size>0){const mt=ac(ut.width,ut.height,b.format,b.type);for(const ot of b.layerUpdates){const Ut=ut.data.subarray(ot*mt/ut.data.BYTES_PER_ELEMENT,(ot+1)*mt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,ut.width,ut.height,1,xt,Dt,Ut)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,xt,Dt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,ut.width,ut.height,ut.depth,0,xt,Dt,ut.data);else if(b.isData3DTexture)G?(_t&&e.texStorage3D(i.TEXTURE_3D,St,Tt,ut.width,ut.height,ut.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,xt,Dt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,ut.width,ut.height,ut.depth,0,xt,Dt,ut.data);else if(b.isFramebufferTexture){if(_t)if(G)e.texStorage2D(i.TEXTURE_2D,St,Tt,ut.width,ut.height);else{let mt=ut.width,ot=ut.height;for(let Ut=0;Ut<St;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Tt,mt,ot,0,xt,Dt,null),mt>>=1,ot>>=1}}else if(At.length>0){if(G&&_t){const mt=V(At[0]);e.texStorage2D(i.TEXTURE_2D,St,Tt,mt.width,mt.height)}for(let mt=0,ot=At.length;mt<ot;mt++)Et=At[mt],G?vt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,xt,Dt,Et):e.texImage2D(i.TEXTURE_2D,mt,Tt,xt,Dt,Et);b.generateMipmaps=!1}else if(G){if(_t){const mt=V(ut);e.texStorage2D(i.TEXTURE_2D,St,Tt,mt.width,mt.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Dt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Tt,xt,Dt,ut);p(b)&&f(Z),bt.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ht(C,b,N){if(b.image.length!==6)return;const Z=dt(C,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+N);const $=n.get(nt);if(nt.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const bt=ne.getPrimaries(ne.workingColorSpace),pt=b.colorSpace===vi?null:ne.getPrimaries(b.colorSpace),Pt=b.colorSpace===vi||bt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Ot=b.isCompressedTexture||b.image[0].isCompressedTexture,ut=b.image[0]&&b.image[0].isDataTexture,xt=[];for(let ot=0;ot<6;ot++)!Ot&&!ut?xt[ot]=_(b.image[ot],!0,r.maxCubemapSize):xt[ot]=ut?b.image[ot].image:b.image[ot],xt[ot]=rt(b,xt[ot]);const Dt=xt[0],Tt=s.convert(b.format,b.colorSpace),Et=s.convert(b.type),At=S(b.internalFormat,Tt,Et,b.colorSpace),G=b.isVideoTexture!==!0,_t=$.__version===void 0||Z===!0,vt=nt.dataReady;let St=A(b,Dt);k(i.TEXTURE_CUBE_MAP,b);let mt;if(Ot){G&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,At,Dt.width,Dt.height);for(let ot=0;ot<6;ot++){mt=xt[ot].mipmaps;for(let Ut=0;Ut<mt.length;Ut++){const Vt=mt[Ut];b.format!==En?Tt!==null?G?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ut,0,0,Vt.width,Vt.height,Tt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ut,At,Vt.width,Vt.height,0,Vt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ut,0,0,Vt.width,Vt.height,Tt,Et,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ut,At,Vt.width,Vt.height,0,Tt,Et,Vt.data)}}}else{if(mt=b.mipmaps,G&&_t){mt.length>0&&St++;const ot=V(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,At,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ut){G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,xt[ot].width,xt[ot].height,Tt,Et,xt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,At,xt[ot].width,xt[ot].height,0,Tt,Et,xt[ot].data);for(let Ut=0;Ut<mt.length;Ut++){const te=mt[Ut].image[ot].image;G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ut+1,0,0,te.width,te.height,Tt,Et,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ut+1,At,te.width,te.height,0,Tt,Et,te.data)}}else{G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Tt,Et,xt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,At,Tt,Et,xt[ot]);for(let Ut=0;Ut<mt.length;Ut++){const Vt=mt[Ut];G?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ut+1,0,0,Tt,Et,Vt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ut+1,At,Tt,Et,Vt.image[ot])}}}p(b)&&f(i.TEXTURE_CUBE_MAP),$.__version=nt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function lt(C,b,N,Z,nt,$){const bt=s.convert(N.format,N.colorSpace),pt=s.convert(N.type),Pt=S(N.internalFormat,bt,pt,N.colorSpace),Ot=n.get(b),ut=n.get(N);if(ut.__renderTarget=b,!Ot.__hasExternalTextures){const xt=Math.max(1,b.width>>$),Dt=Math.max(1,b.height>>$);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,Pt,xt,Dt,b.depth,0,bt,pt,null):e.texImage2D(nt,$,Pt,xt,Dt,0,bt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),W(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,nt,ut.__webglTexture,0,M(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,nt,ut.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,b,N){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const Z=b.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,$=w(b.stencilBuffer,nt),bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;W(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,M(b),$,b.width,b.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,M(b),$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,C)}else{const Z=b.textures;for(let nt=0;nt<Z.length;nt++){const $=Z[nt],bt=s.convert($.format,$.colorSpace),pt=s.convert($.type),Pt=S($.internalFormat,bt,pt,$.colorSpace);W(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,M(b),Pt,b.width,b.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,M(b),Pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(C,b,N){const Z=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(b.depthTexture);if(nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),k(i.TEXTURE_CUBE_MAP,b.depthTexture);const Ot=s.convert(b.depthTexture.format),ut=s.convert(b.depthTexture.type);let xt;b.depthTexture.format===ii?xt=i.DEPTH_COMPONENT24:b.depthTexture.format===Ui&&(xt=i.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,xt,b.width,b.height,0,Ot,ut,null)}}else O(b.depthTexture,0);const $=nt.__webglTexture,bt=M(b),pt=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Pt=b.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ii)W(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pt,pt,$,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,Pt,pt,$,0);else if(b.depthTexture.format===Ui)W(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pt,pt,$,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,Pt,pt,$,0);else throw new Error("Unknown depthTexture format")}function Mt(C){const b=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=Z}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(N)for(let Z=0;Z<6;Z++)wt(b.__webglFramebuffer[Z],C,Z);else{const Z=C.texture.mipmaps;Z&&Z.length>0?wt(b.__webglFramebuffer[0],C,0):wt(b.__webglFramebuffer,C,0)}else if(N){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),yt(b.__webglDepthbuffer[Z],C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,$)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),yt(b.__webglDepthbuffer,C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(C,b,N){const Z=n.get(C);b!==void 0&&lt(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Mt(C)}function zt(C){const b=C.texture,N=n.get(C),Z=n.get(b);C.addEventListener("dispose",D);const nt=C.textures,$=C.isWebGLCubeRenderTarget===!0,bt=nt.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),$){N.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[pt]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)N.__webglFramebuffer[pt][Pt]=i.createFramebuffer()}else N.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)N.__webglFramebuffer[pt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(bt)for(let pt=0,Pt=nt.length;pt<Pt;pt++){const Ot=n.get(nt[pt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&W(C)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){const Pt=nt[pt];N.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[pt]);const Ot=s.convert(Pt.format,Pt.colorSpace),ut=s.convert(Pt.type),xt=S(Pt.internalFormat,Ot,ut,Pt.colorSpace,C.isXRRenderTarget===!0),Dt=M(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,xt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,N.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),k(i.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)lt(N.__webglFramebuffer[pt][Pt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt);else lt(N.__webglFramebuffer[pt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let pt=0,Pt=nt.length;pt<Pt;pt++){const Ot=nt[pt],ut=n.get(Ot);let xt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,ut.__webglTexture),k(xt,Ot),lt(N.__webglFramebuffer,C,Ot,i.COLOR_ATTACHMENT0+pt,xt,0),p(Ot)&&f(xt)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Z.__webglTexture),k(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)lt(N.__webglFramebuffer[Pt],C,b,i.COLOR_ATTACHMENT0,pt,Pt);else lt(N.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,pt,0);p(b)&&f(pt),e.unbindTexture()}C.depthBuffer&&Mt(C)}function y(C){const b=C.textures;for(let N=0,Z=b.length;N<Z;N++){const nt=b[N];if(p(nt)){const $=v(C),bt=n.get(nt).__webglTexture;e.bindTexture($,bt),f($),e.unbindTexture()}}}const J=[],Y=[];function U(C){if(C.samples>0){if(W(C)===!1){const b=C.textures,N=C.width,Z=C.height;let nt=i.COLOR_BUFFER_BIT;const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(C),pt=b.length>1;if(pt)for(let Ot=0;Ot<b.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Pt=C.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ot=0;Ot<b.length;Ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ot]);const ut=n.get(b[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,nt,i.NEAREST),l===!0&&(J.length=0,Y.length=0,J.push(i.COLOR_ATTACHMENT0+Ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push($),Y.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Ot=0;Ot<b.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ot]);const ut=n.get(b[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function M(C){return Math.min(r.maxSamples,C.samples)}function W(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Q(C){const b=a.render.frame;d.get(C)!==b&&(d.set(C,b),C.update())}function rt(C,b){const N=C.colorSpace,Z=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Sr&&N!==vi&&(ne.getTransfer(N)===oe?(Z!==En||nt!==an)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",N)),b}function V(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=at,this.rebindTextures=Wt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=W,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function k_(i,t){function e(n,r=vi){let s;const a=ne.getTransfer(r);if(n===an)return i.UNSIGNED_BYTE;if(n===Yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nu)return i.BYTE;if(n===iu)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===qo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===ni)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===ou)return i.RGB;if(n===En)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===lu)return i.RED;if(n===Zo)return i.RED_INTEGER;if(n===yr)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Ls||n===Us||n===Ns||n===Fs)if(a===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===so||n===ao||n===oo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lo||n===co)return a===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ho)return s.COMPRESSED_R11_EAC;if(n===fo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===po)return s.COMPRESSED_RG11_EAC;if(n===mo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===go||n===_o||n===vo||n===xo||n===yo||n===So||n===Mo||n===bo||n===Eo||n===wo||n===To||n===Ao||n===Co||n===Ro)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===go)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_o)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Do||n===Io)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Po)return a===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lo||n===Uo||n===No||n===Fo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Lo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const V_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new xu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:V_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wn(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W_ extends zi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,m=null,h=null,u=null,g=null;const _=typeof XRWebGLBinding<"u",p=new G_,f={},v=e.getContextAttributes();let S=null,w=null;const A=[],P=[],D=new Ht;let E=null;const T=new fn;T.viewport=new he;const z=new fn;z.viewport=new he;const F=[T,z],R=new Kf;let L=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=A[it];return ht===void 0&&(ht=new pa,A[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=A[it];return ht===void 0&&(ht=new pa,A[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=A[it];return ht===void 0&&(ht=new pa,A[it]=ht),ht.getHandSpace()};function O(it){const ht=P.indexOf(it.inputSource);if(ht===-1)return;const lt=A[ht];lt!==void 0&&(lt.update(it.inputSource,it.frame,c||a),lt.dispatchEvent({type:it.type,data:it.inputSource}))}function X(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",B);for(let it=0;it<A.length;it++){const ht=P[it];ht!==null&&(P[it]=null,A[it].disconnect(ht))}L=null,x=null,p.reset();for(const it in f)delete f[it];t.setRenderTarget(S),u=null,h=null,m=null,r=null,w=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return m===null&&_&&(m=new XRWebGLBinding(r,e)),m},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",X),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,yt=null,wt=null;v.depth&&(wt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=v.stencil?Ui:ii,yt=v.stencil?Xr:zn);const Mt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(Mt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),w=new Bn(h.textureWidth,h.textureHeight,{format:En,type:an,depthTexture:new jr(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Bn(u.framebufferWidth,u.framebufferHeight,{format:En,type:an,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ft.setContext(r),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(it){for(let ht=0;ht<it.removed.length;ht++){const lt=it.removed[ht],yt=P.indexOf(lt);yt>=0&&(P[yt]=null,A[yt].disconnect(lt))}for(let ht=0;ht<it.added.length;ht++){const lt=it.added[ht];let yt=P.indexOf(lt);if(yt===-1){for(let Mt=0;Mt<A.length;Mt++)if(Mt>=P.length){P.push(lt),yt=Mt;break}else if(P[Mt]===null){P[Mt]=lt,yt=Mt;break}if(yt===-1)break}const wt=A[yt];wt&&wt.connect(lt)}}const at=new j,q=new j;function ct(it,ht,lt){at.setFromMatrixPosition(ht.matrixWorld),q.setFromMatrixPosition(lt.matrixWorld);const yt=at.distanceTo(q),wt=ht.projectionMatrix.elements,Mt=lt.projectionMatrix.elements,Wt=wt[14]/(wt[10]-1),zt=wt[14]/(wt[10]+1),y=(wt[9]+1)/wt[5],J=(wt[9]-1)/wt[5],Y=(wt[8]-1)/wt[0],U=(Mt[8]+1)/Mt[0],M=Wt*Y,W=Wt*U,Q=yt/(-Y+U),rt=Q*-Y;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(rt),it.translateZ(Q),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),wt[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const V=Wt+Q,C=zt+Q,b=M-rt,N=W+(yt-rt),Z=y*zt/C*V,nt=J*zt/C*V;it.projectionMatrix.makePerspective(b,N,Z,nt,V,C),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function H(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let ht=it.near,lt=it.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(lt=p.depthFar)),R.near=z.near=T.near=ht,R.far=z.far=T.far=lt,(L!==R.near||x!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,x=R.far),R.layers.mask=it.layers.mask|6,T.layers.mask=R.layers.mask&-5,z.layers.mask=R.layers.mask&-3;const yt=it.parent,wt=R.cameras;H(R,yt);for(let Mt=0;Mt<wt.length;Mt++)H(wt[Mt],yt);wt.length===2?ct(R,T,z):R.projectionMatrix.copy(T.projectionMatrix),k(it,R,yt)};function k(it,ht,lt){lt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(lt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Yr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(it){l=it,h!==null&&(h.fixedFoveation=it),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=it)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(R)},this.getCameraTexture=function(it){return f[it]};let dt=null;function gt(it,ht){if(d=ht.getViewerPose(c||a),g=ht,d!==null){const lt=d.views;u!==null&&(t.setRenderTargetFramebuffer(w,u.framebuffer),t.setRenderTarget(w));let yt=!1;lt.length!==R.cameras.length&&(R.cameras.length=0,yt=!0);for(let zt=0;zt<lt.length;zt++){const y=lt[zt];let J=null;if(u!==null)J=u.getViewport(y);else{const U=m.getViewSubImage(h,y);J=U.viewport,zt===0&&(t.setRenderTargetTextures(w,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(w))}let Y=F[zt];Y===void 0&&(Y=new fn,Y.layers.enable(zt),Y.viewport=new he,F[zt]=Y),Y.matrix.fromArray(y.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(y.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(J.x,J.y,J.width,J.height),zt===0&&(R.matrix.copy(Y.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),yt===!0&&R.cameras.push(Y)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){m=n.getBinding();const zt=m.getDepthInformation(lt[0]);zt&&zt.isValid&&zt.texture&&p.init(zt,r.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),m=n.getBinding();for(let zt=0;zt<lt.length;zt++){const y=lt[zt].camera;if(y){let J=f[y];J||(J=new xu,f[y]=J);const Y=m.getCameraImage(y);J.sourceTexture=Y}}}}for(let lt=0;lt<A.length;lt++){const yt=P[lt],wt=A[lt];yt!==null&&wt!==void 0&&wt.update(yt,ht,c||a)}dt&&dt(it,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}const ft=new bu;ft.setAnimationLoop(gt),this.setAnimationLoop=function(it){dt=it},this.dispose=function(){}}}const Pi=new kn,X_=new _e;function q_(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,yu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,v,S,w){f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),m(p,f)):f.isMeshPhongMaterial?(s(p,f),d(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&u(p,f,w)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,v,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=t.get(f),S=v.envMap,w=v.envMapRotation;S&&(p.envMap.value=S,Pi.copy(w),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),p.envMapRotation.value.setFromMatrix4(X_.makeRotationFromEuler(Pi)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=S*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const v=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Y_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const w=S.program;n.uniformBlockBinding(v,w)}function c(v,S){let w=r[v.id];w===void 0&&(g(v),w=d(v),r[v.id]=w,v.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(v,A);const P=t.render.frame;s[v.id]!==P&&(h(v),s[v.id]=P)}function d(v){const S=m();v.__bindingPointIndex=S;const w=i.createBuffer(),A=v.__size,P=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function m(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const S=r[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let P=0,D=w.length;P<D;P++){const E=Array.isArray(w[P])?w[P]:[w[P]];for(let T=0,z=E.length;T<z;T++){const F=E[T];if(u(F,P,T,A)===!0){const R=F.__offset,L=Array.isArray(F.value)?F.value:[F.value];let x=0;for(let O=0;O<L.length;O++){const X=L[O],B=_(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,R+x,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,x),x+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,S,w,A){const P=v.value,D=S+"_"+w;if(A[D]===void 0)return typeof P=="number"||typeof P=="boolean"?A[D]=P:A[D]=P.clone(),!0;{const E=A[D];if(typeof P=="number"||typeof P=="boolean"){if(E!==P)return A[D]=P,!0}else if(E.equals(P)===!1)return E.copy(P),!0}return!1}function g(v){const S=v.uniforms;let w=0;const A=16;for(let D=0,E=S.length;D<E;D++){const T=Array.isArray(S[D])?S[D]:[S[D]];for(let z=0,F=T.length;z<F;z++){const R=T[z],L=Array.isArray(R.value)?R.value:[R.value];for(let x=0,O=L.length;x<O;x++){const X=L[x],B=_(X),at=w%A,q=at%B.boundary,ct=at+q;w+=q,ct!==0&&A-ct<B.storage&&(w+=A-ct),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=B.storage}}}const P=w%A;return P>0&&(w+=A-P),v.__size=w,v.__cache={},this}function _(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Gt("WebGLRenderer: Unsupported uniform value type.",v),S}function p(v){const S=v.target;S.removeEventListener("dispose",p);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const j_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function Z_(){return Pn===null&&(Pn=new Pf(j_,16,16,yr,ni),Pn.name="DFG_LUT",Pn.minFilter=Xe,Pn.magFilter=Xe,Pn.wrapS=Jn,Pn.wrapT=Jn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class K_{constructor(t={}){const{canvas:e=Wh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:u=an}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=u,p=new Set([$o,Ko,Zo]),f=new Set([an,zn,Wr,Xr,Yo,jo]),v=new Uint32Array(4),S=new Int32Array(4);let w=null,A=null;const P=[],D=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let z=!1;this._outputColorSpace=hn;let F=0,R=0,L=null,x=-1,O=null;const X=new he,B=new he;let at=null;const q=new Qt(0);let ct=0,H=e.width,k=e.height,dt=1,gt=null,ft=null;const it=new he(0,0,H,k),ht=new he(0,0,H,k);let lt=!1;const yt=new il;let wt=!1,Mt=!1;const Wt=new _e,zt=new j,y=new he,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function U(){return L===null?dt:1}let M=n;function W(I,K){return e.getContext(I,K)}try{const I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wo}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",te,!1),M===null){const K="webgl2";if(M=W(K,I),M===null)throw W(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw re("WebGLRenderer: "+I.message),I}let Q,rt,V,C,b,N,Z,nt,$,bt,pt,Pt,Ot,ut,xt,Dt,Tt,Et,At,G,_t,vt,St;function mt(){Q=new Km(M),Q.init(),_t=new k_(M,Q),rt=new Hm(M,Q,t,_t),V=new B_(M,Q),rt.reversedDepthBuffer&&h&&V.buffers.depth.setReversed(!0),C=new Qm(M),b=new E_,N=new z_(M,Q,V,b,rt,_t,C),Z=new Zm(T),nt=new rd(M),vt=new km(M,nt),$=new $m(M,nt,C,vt),bt=new eg(M,$,nt,vt,C),Et=new tg(M,rt,N),xt=new Gm(b),pt=new b_(T,Z,Q,rt,vt,xt),Pt=new q_(T,b),Ot=new T_,ut=new I_(Q),Tt=new zm(T,Z,V,bt,g,l),Dt=new O_(T,bt,rt),St=new Y_(M,C,rt,V),At=new Vm(M,Q,C),G=new Jm(M,Q,C),C.programs=pt.programs,T.capabilities=rt,T.extensions=Q,T.properties=b,T.renderLists=Ot,T.shadowMap=Dt,T.state=V,T.info=C}mt(),_!==an&&(E=new ig(_,e.width,e.height,r,s));const ot=new W_(T,M);this.xr=ot,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const I=Q.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Q.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(I){I!==void 0&&(dt=I,this.setSize(H,k,!1))},this.getSize=function(I){return I.set(H,k)},this.setSize=function(I,K,st=!0){if(ot.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=I,k=K,e.width=Math.floor(I*dt),e.height=Math.floor(K*dt),st===!0&&(e.style.width=I+"px",e.style.height=K+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(H*dt,k*dt).floor()},this.setDrawingBufferSize=function(I,K,st){H=I,k=K,dt=st,e.width=Math.floor(I*st),e.height=Math.floor(K*st),this.setViewport(0,0,I,K)},this.setEffects=function(I){if(_===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let K=0;K<I.length;K++)if(I[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(X)},this.getViewport=function(I){return I.copy(it)},this.setViewport=function(I,K,st,et){I.isVector4?it.set(I.x,I.y,I.z,I.w):it.set(I,K,st,et),V.viewport(X.copy(it).multiplyScalar(dt).round())},this.getScissor=function(I){return I.copy(ht)},this.setScissor=function(I,K,st,et){I.isVector4?ht.set(I.x,I.y,I.z,I.w):ht.set(I,K,st,et),V.scissor(B.copy(ht).multiplyScalar(dt).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(I){V.setScissorTest(lt=I)},this.setOpaqueSort=function(I){gt=I},this.setTransparentSort=function(I){ft=I},this.getClearColor=function(I){return I.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(I=!0,K=!0,st=!0){let et=0;if(I){let tt=!1;if(L!==null){const Rt=L.texture.format;tt=p.has(Rt)}if(tt){const Rt=L.texture.type,Lt=f.has(Rt),It=Tt.getClearColor(),Nt=Tt.getClearAlpha(),Ft=It.r,Xt=It.g,Yt=It.b;Lt?(v[0]=Ft,v[1]=Xt,v[2]=Yt,v[3]=Nt,M.clearBufferuiv(M.COLOR,0,v)):(S[0]=Ft,S[1]=Xt,S[2]=Yt,S[3]=Nt,M.clearBufferiv(M.COLOR,0,S))}else et|=M.COLOR_BUFFER_BIT}K&&(et|=M.DEPTH_BUFFER_BIT),st&&(et|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&M.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",te,!1),Tt.dispose(),Ot.dispose(),ut.dispose(),b.dispose(),Z.dispose(),bt.dispose(),vt.dispose(),St.dispose(),pt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",si),ot.removeEventListener("sessionend",ze),je.stop()};function Ut(I){I.preventDefault(),Ws("WebGLRenderer: Context Lost."),z=!0}function Vt(){Ws("WebGLRenderer: Context Restored."),z=!1;const I=C.autoReset,K=Dt.enabled,st=Dt.autoUpdate,et=Dt.needsUpdate,tt=Dt.type;mt(),C.autoReset=I,Dt.enabled=K,Dt.autoUpdate=st,Dt.needsUpdate=et,Dt.type=tt}function te(I){re("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function $t(I){const K=I.target;K.removeEventListener("dispose",$t),Ie(K)}function Ie(I){Le(I),b.remove(I)}function Le(I){const K=b.get(I).programs;K!==void 0&&(K.forEach(function(st){pt.releaseProgram(st)}),I.isShaderMaterial&&pt.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,st,et,tt,Rt){K===null&&(K=J);const Lt=tt.isMesh&&tt.matrixWorld.determinant()<0,It=ta(I,K,st,et,tt);V.setMaterial(et,Lt);let Nt=st.index,Ft=1;if(et.wireframe===!0){if(Nt=$.getWireframeAttribute(st),Nt===void 0)return;Ft=2}const Xt=st.drawRange,Yt=st.attributes.position;let kt=Xt.start*Ft,se=(Xt.start+Xt.count)*Ft;Rt!==null&&(kt=Math.max(kt,Rt.start*Ft),se=Math.min(se,(Rt.start+Rt.count)*Ft)),Nt!==null?(kt=Math.max(kt,0),se=Math.min(se,Nt.count)):Yt!=null&&(kt=Math.max(kt,0),se=Math.min(se,Yt.count));const pe=se-kt;if(pe<0||pe===1/0)return;vt.setup(tt,et,It,st,Nt);let fe,ee=At;if(Nt!==null&&(fe=nt.get(Nt),ee=G,ee.setIndex(fe)),tt.isMesh)et.wireframe===!0?(V.setLineWidth(et.wireframeLinewidth*U()),ee.setMode(M.LINES)):ee.setMode(M.TRIANGLES);else if(tt.isLine){let me=et.linewidth;me===void 0&&(me=1),V.setLineWidth(me*U()),tt.isLineSegments?ee.setMode(M.LINES):tt.isLineLoop?ee.setMode(M.LINE_LOOP):ee.setMode(M.LINE_STRIP)}else tt.isPoints?ee.setMode(M.POINTS):tt.isSprite&&ee.setMode(M.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ee.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const me=tt._multiDrawStarts,Bt=tt._multiDrawCounts,ke=tt._multiDrawCount,Jt=Nt?nt.get(Nt).bytesPerElement:1,Ve=b.get(et).currentProgram.getUniforms();for(let ln=0;ln<ke;ln++)Ve.setValue(M,"_gl_DrawID",ln),ee.render(me[ln]/Jt,Bt[ln])}else if(tt.isInstancedMesh)ee.renderInstances(kt,pe,tt.count);else if(st.isInstancedBufferGeometry){const me=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Bt=Math.min(st.instanceCount,me);ee.renderInstances(kt,pe,Bt)}else ee.render(kt,pe)};function bi(I,K,st){I.transparent===!0&&I.side===dn&&I.forceSinglePass===!1?(I.side=nn,I.needsUpdate=!0,Vi(I,K,st),I.side=Si,I.needsUpdate=!0,Vi(I,K,st),I.side=dn):Vi(I,K,st)}this.compile=function(I,K,st=null){st===null&&(st=I),A=ut.get(st),A.init(K),D.push(A),st.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(A.pushLight(tt),tt.castShadow&&A.pushShadow(tt))}),I!==st&&I.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(A.pushLight(tt),tt.castShadow&&A.pushShadow(tt))}),A.setupLights();const et=new Set;return I.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Rt=tt.material;if(Rt)if(Array.isArray(Rt))for(let Lt=0;Lt<Rt.length;Lt++){const It=Rt[Lt];bi(It,st,tt),et.add(It)}else bi(Rt,st,tt),et.add(Rt)}),A=D.pop(),et},this.compileAsync=function(I,K,st=null){const et=this.compile(I,K,st);return new Promise(tt=>{function Rt(){if(et.forEach(function(Lt){b.get(Lt).currentProgram.isReady()&&et.delete(Lt)}),et.size===0){tt(I);return}setTimeout(Rt,10)}Q.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Vn=null;function Hn(I){Vn&&Vn(I)}function si(){je.stop()}function ze(){je.start()}const je=new bu;je.setAnimationLoop(Hn),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(I){Vn=I,ot.setAnimationLoop(I),I===null?je.stop():je.start()},ot.addEventListener("sessionstart",si),ot.addEventListener("sessionend",ze),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const st=ot.enabled===!0&&ot.isPresenting===!0,et=E!==null&&(L===null||st)&&E.begin(T,L);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(K),K=ot.getCamera()),I.isScene===!0&&I.onBeforeRender(T,I,K,L),A=ut.get(I,D.length),A.init(K),D.push(A),Wt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),yt.setFromProjectionMatrix(Wt,Fn,K.reversedDepth),Mt=this.localClippingEnabled,wt=xt.init(this.clippingPlanes,Mt),w=Ot.get(I,P.length),w.init(),P.push(w),ot.enabled===!0&&ot.isPresenting===!0){const Lt=T.xr.getDepthSensingMesh();Lt!==null&&mn(Lt,K,-1/0,T.sortObjects)}mn(I,K,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(gt,ft),Y=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Y&&Tt.addToRenderList(w,I),this.info.render.frame++,wt===!0&&xt.beginShadows();const tt=A.state.shadowsArray;if(Dt.render(tt,I,K),wt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&E.hasRenderPass())===!1){const Lt=w.opaque,It=w.transmissive;if(A.setupLights(),K.isArrayCamera){const Nt=K.cameras;if(It.length>0)for(let Ft=0,Xt=Nt.length;Ft<Xt;Ft++){const Yt=Nt[Ft];Tr(Lt,It,I,Yt)}Y&&Tt.render(I);for(let Ft=0,Xt=Nt.length;Ft<Xt;Ft++){const Yt=Nt[Ft];Ee(w,I,Yt,Yt.viewport)}}else It.length>0&&Tr(Lt,It,I,K),Y&&Tt.render(I),Ee(w,I,K)}L!==null&&R===0&&(N.updateMultisampleRenderTarget(L),N.updateRenderTargetMipmap(L)),et&&E.end(T),I.isScene===!0&&I.onAfterRender(T,I,K),vt.resetDefaultState(),x=-1,O=null,D.pop(),D.length>0?(A=D[D.length-1],wt===!0&&xt.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?w=P[P.length-1]:w=null};function mn(I,K,st,et){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)st=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)A.pushLight(I),I.castShadow&&A.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||yt.intersectsSprite(I)){et&&y.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Wt);const Lt=bt.update(I),It=I.material;It.visible&&w.push(I,Lt,It,st,y.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||yt.intersectsObject(I))){const Lt=bt.update(I),It=I.material;if(et&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),y.copy(I.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),y.copy(Lt.boundingSphere.center)),y.applyMatrix4(I.matrixWorld).applyMatrix4(Wt)),Array.isArray(It)){const Nt=Lt.groups;for(let Ft=0,Xt=Nt.length;Ft<Xt;Ft++){const Yt=Nt[Ft],kt=It[Yt.materialIndex];kt&&kt.visible&&w.push(I,Lt,kt,st,y.z,Yt)}}else It.visible&&w.push(I,Lt,It,st,y.z,null)}}const Rt=I.children;for(let Lt=0,It=Rt.length;Lt<It;Lt++)mn(Rt[Lt],K,st,et)}function Ee(I,K,st,et){const{opaque:tt,transmissive:Rt,transparent:Lt}=I;A.setupLightsView(st),wt===!0&&xt.setGlobalState(T.clippingPlanes,st),et&&V.viewport(X.copy(et)),tt.length>0&&ai(tt,K,st),Rt.length>0&&ai(Rt,K,st),Lt.length>0&&ai(Lt,K,st),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Tr(I,K,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[et.id]===void 0){const kt=Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[et.id]=new Bn(1,1,{generateMipmaps:!0,type:kt?ni:an,minFilter:Li,samples:rt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const Rt=A.state.transmissionRenderTarget[et.id],Lt=et.viewport||X;Rt.setSize(Lt.z*T.transmissionResolutionScale,Lt.w*T.transmissionResolutionScale);const It=T.getRenderTarget(),Nt=T.getActiveCubeFace(),Ft=T.getActiveMipmapLevel();T.setRenderTarget(Rt),T.getClearColor(q),ct=T.getClearAlpha(),ct<1&&T.setClearColor(16777215,.5),T.clear(),Y&&Tt.render(st);const Xt=T.toneMapping;T.toneMapping=On;const Yt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),A.setupLightsView(et),wt===!0&&xt.setGlobalState(T.clippingPlanes,et),ai(I,st,et),N.updateMultisampleRenderTarget(Rt),N.updateRenderTargetMipmap(Rt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let se=0,pe=K.length;se<pe;se++){const fe=K[se],{object:ee,geometry:me,material:Bt,group:ke}=fe;if(Bt.side===dn&&ee.layers.test(et.layers)){const Jt=Bt.side;Bt.side=nn,Bt.needsUpdate=!0,oi(ee,st,et,me,Bt,ke),Bt.side=Jt,Bt.needsUpdate=!0,kt=!0}}kt===!0&&(N.updateMultisampleRenderTarget(Rt),N.updateRenderTargetMipmap(Rt))}T.setRenderTarget(It,Nt,Ft),T.setClearColor(q,ct),Yt!==void 0&&(et.viewport=Yt),T.toneMapping=Xt}function ai(I,K,st){const et=K.isScene===!0?K.overrideMaterial:null;for(let tt=0,Rt=I.length;tt<Rt;tt++){const Lt=I[tt],{object:It,geometry:Nt,group:Ft}=Lt;let Xt=Lt.material;Xt.allowOverride===!0&&et!==null&&(Xt=et),It.layers.test(st.layers)&&oi(It,K,st,Nt,Xt,Ft)}}function oi(I,K,st,et,tt,Rt){I.onBeforeRender(T,K,st,et,tt,Rt),I.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),tt.onBeforeRender(T,K,st,et,I,Rt),tt.transparent===!0&&tt.side===dn&&tt.forceSinglePass===!1?(tt.side=nn,tt.needsUpdate=!0,T.renderBufferDirect(st,K,et,tt,I,Rt),tt.side=Si,tt.needsUpdate=!0,T.renderBufferDirect(st,K,et,tt,I,Rt),tt.side=dn):T.renderBufferDirect(st,K,et,tt,I,Rt),I.onAfterRender(T,K,st,et,tt,Rt)}function Vi(I,K,st){K.isScene!==!0&&(K=J);const et=b.get(I),tt=A.state.lights,Rt=A.state.shadowsArray,Lt=tt.state.version,It=pt.getParameters(I,tt.state,Rt,K,st),Nt=pt.getProgramCacheKey(It);let Ft=et.programs;et.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?K.environment:null,et.fog=K.fog;const Xt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;et.envMap=Z.get(I.envMap||et.environment,Xt),et.envMapRotation=et.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,Ft===void 0&&(I.addEventListener("dispose",$t),Ft=new Map,et.programs=Ft);let Yt=Ft.get(Nt);if(Yt!==void 0){if(et.currentProgram===Yt&&et.lightsStateVersion===Lt)return $r(I,It),Yt}else It.uniforms=pt.getUniforms(I),I.onBeforeCompile(It,T),Yt=pt.acquireProgram(It,Nt),Ft.set(Nt,Yt),et.uniforms=It.uniforms;const kt=et.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(kt.clippingPlanes=xt.uniform),$r(I,It),et.needsLights=ea(I),et.lightsStateVersion=Lt,et.needsLights&&(kt.ambientLightColor.value=tt.state.ambient,kt.lightProbe.value=tt.state.probe,kt.directionalLights.value=tt.state.directional,kt.directionalLightShadows.value=tt.state.directionalShadow,kt.spotLights.value=tt.state.spot,kt.spotLightShadows.value=tt.state.spotShadow,kt.rectAreaLights.value=tt.state.rectArea,kt.ltc_1.value=tt.state.rectAreaLTC1,kt.ltc_2.value=tt.state.rectAreaLTC2,kt.pointLights.value=tt.state.point,kt.pointLightShadows.value=tt.state.pointShadow,kt.hemisphereLights.value=tt.state.hemi,kt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,kt.spotLightMatrix.value=tt.state.spotLightMatrix,kt.spotLightMap.value=tt.state.spotLightMap,kt.pointShadowMatrix.value=tt.state.pointShadowMatrix),et.currentProgram=Yt,et.uniformsList=null,Yt}function Hi(I){if(I.uniformsList===null){const K=I.currentProgram.getUniforms();I.uniformsList=Os.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function $r(I,K){const st=b.get(I);st.outputColorSpace=K.outputColorSpace,st.batching=K.batching,st.batchingColor=K.batchingColor,st.instancing=K.instancing,st.instancingColor=K.instancingColor,st.instancingMorph=K.instancingMorph,st.skinning=K.skinning,st.morphTargets=K.morphTargets,st.morphNormals=K.morphNormals,st.morphColors=K.morphColors,st.morphTargetsCount=K.morphTargetsCount,st.numClippingPlanes=K.numClippingPlanes,st.numIntersection=K.numClipIntersection,st.vertexAlphas=K.vertexAlphas,st.vertexTangents=K.vertexTangents,st.toneMapping=K.toneMapping}function ta(I,K,st,et,tt){K.isScene!==!0&&(K=J),N.resetTextureUnits();const Rt=K.fog,Lt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?K.environment:null,It=L===null?T.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Sr,Nt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Ft=Z.get(et.envMap||Lt,Nt),Xt=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Yt=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),kt=!!st.morphAttributes.position,se=!!st.morphAttributes.normal,pe=!!st.morphAttributes.color;let fe=On;et.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=T.toneMapping);const ee=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,me=ee!==void 0?ee.length:0,Bt=b.get(et),ke=A.state.lights;if(wt===!0&&(Mt===!0||I!==O)){const Me=I===O&&et.id===x;xt.setState(et,I,Me)}let Jt=!1;et.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ke.state.version||Bt.outputColorSpace!==It||tt.isBatchedMesh&&Bt.batching===!1||!tt.isBatchedMesh&&Bt.batching===!0||tt.isBatchedMesh&&Bt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Bt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Bt.instancing===!1||!tt.isInstancedMesh&&Bt.instancing===!0||tt.isSkinnedMesh&&Bt.skinning===!1||!tt.isSkinnedMesh&&Bt.skinning===!0||tt.isInstancedMesh&&Bt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Bt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Bt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Bt.instancingMorph===!1&&tt.morphTexture!==null||Bt.envMap!==Ft||et.fog===!0&&Bt.fog!==Rt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==xt.numPlanes||Bt.numIntersection!==xt.numIntersection)||Bt.vertexAlphas!==Xt||Bt.vertexTangents!==Yt||Bt.morphTargets!==kt||Bt.morphNormals!==se||Bt.morphColors!==pe||Bt.toneMapping!==fe||Bt.morphTargetsCount!==me)&&(Jt=!0):(Jt=!0,Bt.__version=et.version);let Ve=Bt.currentProgram;Jt===!0&&(Ve=Vi(et,K,tt));let ln=!1,Gn=!1,li=!1;const ae=Ve.getUniforms(),we=Bt.uniforms;if(V.useProgram(Ve.program)&&(ln=!0,Gn=!0,li=!0),et.id!==x&&(x=et.id,Gn=!0),ln||O!==I){V.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),ae.setValue(M,"projectionMatrix",I.projectionMatrix),ae.setValue(M,"viewMatrix",I.matrixWorldInverse);const _n=ae.map.cameraPosition;_n!==void 0&&_n.setValue(M,zt.setFromMatrixPosition(I.matrixWorld)),rt.logarithmicDepthBuffer&&ae.setValue(M,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ae.setValue(M,"isOrthographic",I.isOrthographicCamera===!0),O!==I&&(O=I,Gn=!0,li=!0)}if(Bt.needsLights&&(ke.state.directionalShadowMap.length>0&&ae.setValue(M,"directionalShadowMap",ke.state.directionalShadowMap,N),ke.state.spotShadowMap.length>0&&ae.setValue(M,"spotShadowMap",ke.state.spotShadowMap,N),ke.state.pointShadowMap.length>0&&ae.setValue(M,"pointShadowMap",ke.state.pointShadowMap,N)),tt.isSkinnedMesh){ae.setOptional(M,tt,"bindMatrix"),ae.setOptional(M,tt,"bindMatrixInverse");const Me=tt.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ae.setValue(M,"boneTexture",Me.boneTexture,N))}tt.isBatchedMesh&&(ae.setOptional(M,tt,"batchingTexture"),ae.setValue(M,"batchingTexture",tt._matricesTexture,N),ae.setOptional(M,tt,"batchingIdTexture"),ae.setValue(M,"batchingIdTexture",tt._indirectTexture,N),ae.setOptional(M,tt,"batchingColorTexture"),tt._colorsTexture!==null&&ae.setValue(M,"batchingColorTexture",tt._colorsTexture,N));const gn=st.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Et.update(tt,st,Ve),(Gn||Bt.receiveShadow!==tt.receiveShadow)&&(Bt.receiveShadow=tt.receiveShadow,ae.setValue(M,"receiveShadow",tt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&K.environment!==null&&(we.envMapIntensity.value=K.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=Z_()),Gn&&(ae.setValue(M,"toneMappingExposure",T.toneMappingExposure),Bt.needsLights&&Ar(we,li),Rt&&et.fog===!0&&Pt.refreshFogUniforms(we,Rt),Pt.refreshMaterialUniforms(we,et,dt,k,A.state.transmissionRenderTarget[I.id]),Os.upload(M,Hi(Bt),we,N)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Os.upload(M,Hi(Bt),we,N),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ae.setValue(M,"center",tt.center),ae.setValue(M,"modelViewMatrix",tt.modelViewMatrix),ae.setValue(M,"normalMatrix",tt.normalMatrix),ae.setValue(M,"modelMatrix",tt.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Me=et.uniformsGroups;for(let _n=0,An=Me.length;_n<An;_n++){const Ei=Me[_n];St.update(Ei,Ve),St.bind(Ei,Ve)}}return Ve}function Ar(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function ea(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,K,st){const et=b.get(I);et.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),b.get(I.texture).__webglTexture=K,b.get(I.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,K){const st=b.get(I);st.__webglFramebuffer=K,st.__useDefaultFramebuffer=K===void 0};const Jr=M.createFramebuffer();this.setRenderTarget=function(I,K=0,st=0){L=I,F=K,R=st;let et=null,tt=!1,Rt=!1;if(I){const It=b.get(I);if(It.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(M.FRAMEBUFFER,It.__webglFramebuffer),X.copy(I.viewport),B.copy(I.scissor),at=I.scissorTest,V.viewport(X),V.scissor(B),V.setScissorTest(at),x=-1;return}else if(It.__webglFramebuffer===void 0)N.setupRenderTarget(I);else if(It.__hasExternalTextures)N.rebindTextures(I,b.get(I.texture).__webglTexture,b.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Xt=I.depthTexture;if(It.__boundDepthTexture!==Xt){if(Xt!==null&&b.has(Xt)&&(I.width!==Xt.image.width||I.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(I)}}const Nt=I.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Rt=!0);const Ft=b.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ft[K])?et=Ft[K][st]:et=Ft[K],tt=!0):I.samples>0&&N.useMultisampledRTT(I)===!1?et=b.get(I).__webglMultisampledFramebuffer:Array.isArray(Ft)?et=Ft[st]:et=Ft,X.copy(I.viewport),B.copy(I.scissor),at=I.scissorTest}else X.copy(it).multiplyScalar(dt).floor(),B.copy(ht).multiplyScalar(dt).floor(),at=lt;if(st!==0&&(et=Jr),V.bindFramebuffer(M.FRAMEBUFFER,et)&&V.drawBuffers(I,et),V.viewport(X),V.scissor(B),V.setScissorTest(at),tt){const It=b.get(I.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+K,It.__webglTexture,st)}else if(Rt){const It=K;for(let Nt=0;Nt<I.textures.length;Nt++){const Ft=b.get(I.textures[Nt]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Nt,Ft.__webglTexture,st,It)}}else if(I!==null&&st!==0){const It=b.get(I.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,It.__webglTexture,st)}x=-1},this.readRenderTargetPixels=function(I,K,st,et,tt,Rt,Lt,It=0){if(!(I&&I.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=b.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){V.bindFramebuffer(M.FRAMEBUFFER,Nt);try{const Ft=I.textures[It],Xt=Ft.format,Yt=Ft.type;if(I.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+It),!rt.textureFormatReadable(Xt)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Yt)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-et&&st>=0&&st<=I.height-tt&&M.readPixels(K,st,et,tt,_t.convert(Xt),_t.convert(Yt),Rt)}finally{const Ft=L!==null?b.get(L).__webglFramebuffer:null;V.bindFramebuffer(M.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(I,K,st,et,tt,Rt,Lt,It=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=b.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt)if(K>=0&&K<=I.width-et&&st>=0&&st<=I.height-tt){V.bindFramebuffer(M.FRAMEBUFFER,Nt);const Ft=I.textures[It],Xt=Ft.format,Yt=Ft.type;if(I.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+It),!rt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,kt),M.bufferData(M.PIXEL_PACK_BUFFER,Rt.byteLength,M.STREAM_READ),M.readPixels(K,st,et,tt,_t.convert(Xt),_t.convert(Yt),0);const se=L!==null?b.get(L).__webglFramebuffer:null;V.bindFramebuffer(M.FRAMEBUFFER,se);const pe=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Xh(M,pe,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,kt),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Rt),M.deleteBuffer(kt),M.deleteSync(pe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,K=null,st=0){const et=Math.pow(2,-st),tt=Math.floor(I.image.width*et),Rt=Math.floor(I.image.height*et),Lt=K!==null?K.x:0,It=K!==null?K.y:0;N.setTexture2D(I,0),M.copyTexSubImage2D(M.TEXTURE_2D,st,0,0,Lt,It,tt,Rt),V.unbindTexture()};const Gi=M.createFramebuffer(),ve=M.createFramebuffer();this.copyTextureToTexture=function(I,K,st=null,et=null,tt=0,Rt=0){let Lt,It,Nt,Ft,Xt,Yt,kt,se,pe;const fe=I.isCompressedTexture?I.mipmaps[Rt]:I.image;if(st!==null)Lt=st.max.x-st.min.x,It=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,Ft=st.min.x,Xt=st.min.y,Yt=st.isBox3?st.min.z:0;else{const we=Math.pow(2,-tt);Lt=Math.floor(fe.width*we),It=Math.floor(fe.height*we),I.isDataArrayTexture?Nt=fe.depth:I.isData3DTexture?Nt=Math.floor(fe.depth*we):Nt=1,Ft=0,Xt=0,Yt=0}et!==null?(kt=et.x,se=et.y,pe=et.z):(kt=0,se=0,pe=0);const ee=_t.convert(K.format),me=_t.convert(K.type);let Bt;K.isData3DTexture?(N.setTexture3D(K,0),Bt=M.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(N.setTexture2DArray(K,0),Bt=M.TEXTURE_2D_ARRAY):(N.setTexture2D(K,0),Bt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,K.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,K.unpackAlignment);const ke=M.getParameter(M.UNPACK_ROW_LENGTH),Jt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Ve=M.getParameter(M.UNPACK_SKIP_PIXELS),ln=M.getParameter(M.UNPACK_SKIP_ROWS),Gn=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,fe.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,fe.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ft),M.pixelStorei(M.UNPACK_SKIP_ROWS,Xt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Yt);const li=I.isDataArrayTexture||I.isData3DTexture,ae=K.isDataArrayTexture||K.isData3DTexture;if(I.isDepthTexture){const we=b.get(I),gn=b.get(K),Me=b.get(we.__renderTarget),_n=b.get(gn.__renderTarget);V.bindFramebuffer(M.READ_FRAMEBUFFER,Me.__webglFramebuffer),V.bindFramebuffer(M.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let An=0;An<Nt;An++)li&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,b.get(I).__webglTexture,tt,Yt+An),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,b.get(K).__webglTexture,Rt,pe+An)),M.blitFramebuffer(Ft,Xt,Lt,It,kt,se,Lt,It,M.DEPTH_BUFFER_BIT,M.NEAREST);V.bindFramebuffer(M.READ_FRAMEBUFFER,null),V.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(tt!==0||I.isRenderTargetTexture||b.has(I)){const we=b.get(I),gn=b.get(K);V.bindFramebuffer(M.READ_FRAMEBUFFER,Gi),V.bindFramebuffer(M.DRAW_FRAMEBUFFER,ve);for(let Me=0;Me<Nt;Me++)li?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,we.__webglTexture,tt,Yt+Me):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,we.__webglTexture,tt),ae?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,gn.__webglTexture,Rt,pe+Me):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,gn.__webglTexture,Rt),tt!==0?M.blitFramebuffer(Ft,Xt,Lt,It,kt,se,Lt,It,M.COLOR_BUFFER_BIT,M.NEAREST):ae?M.copyTexSubImage3D(Bt,Rt,kt,se,pe+Me,Ft,Xt,Lt,It):M.copyTexSubImage2D(Bt,Rt,kt,se,Ft,Xt,Lt,It);V.bindFramebuffer(M.READ_FRAMEBUFFER,null),V.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else ae?I.isDataTexture||I.isData3DTexture?M.texSubImage3D(Bt,Rt,kt,se,pe,Lt,It,Nt,ee,me,fe.data):K.isCompressedArrayTexture?M.compressedTexSubImage3D(Bt,Rt,kt,se,pe,Lt,It,Nt,ee,fe.data):M.texSubImage3D(Bt,Rt,kt,se,pe,Lt,It,Nt,ee,me,fe):I.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Rt,kt,se,Lt,It,ee,me,fe.data):I.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Rt,kt,se,fe.width,fe.height,ee,fe.data):M.texSubImage2D(M.TEXTURE_2D,Rt,kt,se,Lt,It,ee,me,fe);M.pixelStorei(M.UNPACK_ROW_LENGTH,ke),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Jt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ve),M.pixelStorei(M.UNPACK_SKIP_ROWS,ln),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Gn),Rt===0&&K.generateMipmaps&&M.generateMipmap(Bt),V.unbindTexture()},this.initRenderTarget=function(I){b.get(I).__webglFramebuffer===void 0&&N.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),V.unbindTexture()},this.resetState=function(){F=0,R=0,L=null,V.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const Pc={type:"change"},ol={type:"start"},Ru={type:"end"},Ts=new nl,Dc=new gi,$_=Math.cos(70*hu.DEG2RAD),Ae=new j,tn=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ka=1e-6;class J_ extends nd{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:hr.ROTATE,TWO:hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Mi,this._lastTargetPosition=new j,this._quat=new Mi().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rc,this._sphericalDelta=new rc,this._scale=1,this._panOffset=new j,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new j,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t0.bind(this),this._onPointerDown=Q_.bind(this),this._onPointerUp=e0.bind(this),this._onContextMenu=l0.bind(this),this._onMouseWheel=r0.bind(this),this._onKeyDown=s0.bind(this),this._onTouchStart=a0.bind(this),this._onTouchMove=o0.bind(this),this._onMouseDown=n0.bind(this),this._onMouseMove=i0.bind(this),this._interceptControlDown=c0.bind(this),this._interceptControlUp=u0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pc),this.update(),this.state=ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),r<-Math.PI?r+=tn:r>Math.PI&&(r-=tn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ae.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new j(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ts.origin.copy(this.object.position),Ts.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ts.direction))<$_?this.object.lookAt(this.target):(Dc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ts.intersectPlane(Dc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ka||this._lastTargetPosition.distanceToSquared(this.target)>ka?(this.dispatchEvent(Pc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ae.copy(r).sub(this.target);let s=Ae.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Q_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function t0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function e0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ru),this.state=ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function n0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case pr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case pr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ol)}function i0(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function r0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(ol),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ru))}function s0(i){this.enabled!==!1&&this._handleKeyDown(i)}function a0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ol)}function o0(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function l0(i){this.enabled!==!1&&i.preventDefault()}function c0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function u0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ic=new ri,As=new j;class Pu extends jf{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new De(t,3)),this.setAttribute("uv",new De(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Bo(e,6,1);return this.setAttribute("instanceStart",new xi(n,3,0)),this.setAttribute("instanceEnd",new xi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Bo(e,6,1);return this.setAttribute("instanceColorStart",new xi(n,3,0)),this.setAttribute("instanceColorEnd",new xi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ff(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Ic.setFromBufferAttribute(e),this.boundingBox.union(Ic))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)As.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(As)),As.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(As));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ct.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ht(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};en.line={uniforms:sl.merge([Ct.common,Ct.fog,Ct.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ln extends Tn{constructor(t){super({type:"LineMaterial",uniforms:sl.clone(en.line.uniforms),vertexShader:en.line.vertexShader,fragmentShader:en.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Va=new he,Lc=new j,Uc=new j,Ue=new he,Ne=new he,Dn=new he,Ha=new j,Ga=new _e,Fe=new Qf,Nc=new j,Cs=new ri,Rs=new br,In=new he;let Un,Fi;function Fc(i,t,e){return In.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),In.multiplyScalar(1/In.w),In.x=Fi/e.width,In.y=Fi/e.height,In.applyMatrix4(i.projectionMatrixInverse),In.multiplyScalar(1/In.w),Math.abs(Math.max(In.x,In.y))}function h0(i,t){const e=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,r.count);for(let o=0,l=a;o<l;o++){Fe.start.fromBufferAttribute(r,o),Fe.end.fromBufferAttribute(s,o),Fe.applyMatrix4(e);const c=new j,d=new j;Un.distanceSqToSegment(Fe.start,Fe.end,d,c),d.distanceTo(c)<Fi*.5&&t.push({point:d,pointOnLine:c,distance:Un.origin.distanceTo(d),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function f0(i,t,e){const n=t.projectionMatrix,s=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,d=Math.min(o.instanceCount,l.count),m=-t.near;Un.at(1,Dn),Dn.w=1,Dn.applyMatrix4(t.matrixWorldInverse),Dn.applyMatrix4(n),Dn.multiplyScalar(1/Dn.w),Dn.x*=s.x/2,Dn.y*=s.y/2,Dn.z=0,Ha.copy(Dn),Ga.multiplyMatrices(t.matrixWorldInverse,a);for(let h=0,u=d;h<u;h++){if(Ue.fromBufferAttribute(l,h),Ne.fromBufferAttribute(c,h),Ue.w=1,Ne.w=1,Ue.applyMatrix4(Ga),Ne.applyMatrix4(Ga),Ue.z>m&&Ne.z>m)continue;if(Ue.z>m){const S=Ue.z-Ne.z,w=(Ue.z-m)/S;Ue.lerp(Ne,w)}else if(Ne.z>m){const S=Ne.z-Ue.z,w=(Ne.z-m)/S;Ne.lerp(Ue,w)}Ue.applyMatrix4(n),Ne.applyMatrix4(n),Ue.multiplyScalar(1/Ue.w),Ne.multiplyScalar(1/Ne.w),Ue.x*=s.x/2,Ue.y*=s.y/2,Ne.x*=s.x/2,Ne.y*=s.y/2,Fe.start.copy(Ue),Fe.start.z=0,Fe.end.copy(Ne),Fe.end.z=0;const _=Fe.closestPointToPointParameter(Ha,!0);Fe.at(_,Nc);const p=hu.lerp(Ue.z,Ne.z,_),f=p>=-1&&p<=1,v=Ha.distanceTo(Nc)<Fi*.5;if(f&&v){Fe.start.fromBufferAttribute(l,h),Fe.end.fromBufferAttribute(c,h),Fe.start.applyMatrix4(a),Fe.end.applyMatrix4(a);const S=new j,w=new j;Un.distanceSqToSegment(Fe.start,Fe.end,w,S),e.push({point:w,pointOnLine:S,distance:Un.origin.distanceTo(w),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}class d0 extends wn{constructor(t=new Pu,e=new Ln({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Lc.fromBufferAttribute(e,a),Uc.fromBufferAttribute(n,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Lc.distanceTo(Uc);const s=new Bo(r,2,1);return t.setAttribute("instanceDistanceStart",new xi(s,1,0)),t.setAttribute("instanceDistanceEnd",new xi(s,1,1)),this}raycast(t,e){const n=this.material.worldUnits,r=t.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Un=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;Fi=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),Rs.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Fi*.5;else{const m=Math.max(r.near,Rs.distanceToPoint(Un.origin));c=Fc(r,m,l.resolution)}if(Rs.radius+=c,Un.intersectsSphere(Rs)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Cs.copy(o.boundingBox).applyMatrix4(a);let d;if(n)d=Fi*.5;else{const m=Math.max(r.near,Cs.distanceToPoint(Un.origin));d=Fc(r,m,l.resolution)}Cs.expandByScalar(d),Un.intersectsBox(Cs)!==!1&&(n?h0(this,e):f0(this,r,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Va),this.material.uniforms.resolution.value.set(Va.z,Va.w))}}class Ni extends Pu{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let r=0;r<e;r++)n[6*r]=t[r].x,n[6*r+1]=t[r].y,n[6*r+2]=t[r].z||0,n[6*r+3]=t[r+1].x,n[6*r+4]=t[r+1].y,n[6*r+5]=t[r+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class dr extends d0{constructor(t=new Ni,e=new Ln({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function ll(i){if(i.length===0)return 0;for(var t=0,e=0,n=0,r=i.length,s=0;s<r;s++)t+=i[s].v0.x+i[s].v1.x+i[s].v2.x,e+=i[s].v0.y+i[s].v1.y+i[s].v2.y,n+=i[s].v0.z+i[s].v1.z+i[s].v2.z;var a=1/(r*3);t*=a,e*=a,n*=a;for(var o=0,l=0;l<r;l++){var c=i[l].v0.x-t,d=i[l].v0.y-e,m=i[l].v0.z-n,h=i[l].v1.x-t,u=i[l].v1.y-e,g=i[l].v1.z-n,_=i[l].v2.x-t,p=i[l].v2.y-e,f=i[l].v2.z-n;o+=(c*(u*f-p*g)-h*(d*f-p*m)+_*(d*g-u*m))/6}return o}function Du(i){for(var t=0,e=0;e<i.length;e++){var n=i[e].v0,r=i[e].v1,s=i[e].v2,a=r.x-n.x,o=r.y-n.y,l=r.z-n.z,c=s.x-n.x,d=s.y-n.y,m=s.z-n.z,h=o*m-l*d,u=l*c-a*m,g=a*d-o*c;t+=.5*Math.sqrt(h*h+u*u+g*g)}return t}function p0(i){var t=i*2;t<1e-12&&(t=1e-6);var e={},n=[],r=0,s=i*i;function a(m,h,u){var g=Math.floor(m/t),_=Math.floor(h/t),p=Math.floor(u/t);return g+","+_+","+p}function o(m,h,u){for(var g=Math.floor(m/t),_=Math.floor(h/t),p=Math.floor(u/t),f=s,v=null,S=-1;S<=1;S++)for(var w=-1;w<=1;w++)for(var A=-1;A<=1;A++){var P=g+S+","+(_+w)+","+(p+A),D=e[P];if(D)for(var E=0;E<D.length;E++){var T=D[E],z=T.x-m,F=T.y-h,R=T.z-u,L=z*z+F*F+R*R;L<f&&(f=L,v=T)}}return v}function l(m,h,u,g){var _=o(m,h,u);if(_){if(g){for(var p=!1,f=0;f<_.triRefs.length;f++){var v=_.triRefs[f];if(v.mesh===g.mesh&&v.triIdx===g.triIdx){p=!0;break}}p||_.triRefs.push(g)}return _}var S={x:m,y:h,z:u,id:r++,triRefs:g?[g]:[]},w=a(m,h,u);return e[w]||(e[w]=[]),e[w].push(S),n.push(S),S}function c(){return n}function d(){return n.length}return{getOrCreate:l,getAll:c,size:d}}function Iu(i,t,e){for(var n=e||{},r=$n(i),s=$n(t),a=(r+s)/2,o=n.tolerance!==void 0?n.tolerance:a*.001,l=p0(o),c=Math.max(s*2,.1),d=Qu(t,c),m=[],h={},u={},g=0;g<i.length;g++)for(var _=i[g],p=th(_),f=eh(d,p,c),v=0;v<f.length;v++){var S=f[v],w=t[S],A=nh(_,w);if(A){var P=l.getOrCreate(A.p0.x,A.p0.y,A.p0.z,{mesh:"A",triIdx:g});l.getOrCreate(A.p0.x,A.p0.y,A.p0.z,{mesh:"B",triIdx:S});var D=l.getOrCreate(A.p1.x,A.p1.y,A.p1.z,{mesh:"A",triIdx:g});if(l.getOrCreate(A.p1.x,A.p1.y,A.p1.z,{mesh:"B",triIdx:S}),P!==D){var E={p0:P,p1:D,idxA:g,idxB:S};m.push(E),h[g]||(h[g]=[]),h[g].push(E),u[S]||(u[S]=[]),u[S].push(E)}}}return{segments:m,crossedSetA:h,crossedSetB:u,pool:l}}function cl(i){if(i.length===0)return[];for(var t={},e=0;e<i.length;e++){var n=i[e],r=n.p0.id,s=n.p1.id;t[r]||(t[r]=[]),t[r].push({segIdx:e,otherEnd:n.p1}),t[s]||(t[s]=[]),t[s].push({segIdx:e,otherEnd:n.p0})}for(var a=new Uint8Array(i.length),o=[],l=0;l<i.length;l++)if(!a[l]){a[l]=1;for(var c=[i[l].p0,i[l].p1],d=[],m=!0;m;){m=!1;var h=c[c.length-1],u=t[h.id];if(!u)break;for(var g=0;g<u.length;g++){var _=u[g];if(!a[_.segIdx]){if(_.otherEnd===c[0])return a[_.segIdx]=1,c.push(_.otherEnd),m0(d,c,o,a,i,t);a[_.segIdx]=1,c.push(_.otherEnd),m=!0;break}}}for(m=!0;m;){m=!1;var p=d.length>0?d[d.length-1]:c[0],f=t[p.id];if(!f)break;for(var v=0;v<f.length;v++){var S=f[v];if(!a[S.segIdx]){a[S.segIdx]=1,d.push(S.otherEnd),m=!0;break}}}var w;d.length>0?(d.reverse(),w=d.concat(c)):w=c,o.push(w)}return o}function m0(i,t,e,n,r,s){var a;i.length>0?(i.reverse(),a=i.concat(t)):a=t,e.push(a);for(var o=0;o<r.length;o++)if(!n[o]){n[o]=1;for(var l=[r[o].p0,r[o].p1],c=[],d=!0;d;){d=!1;var m=l[l.length-1],h=s[m.id];if(!h)break;for(var u=0;u<h.length;u++)if(!n[h[u].segIdx]){n[h[u].segIdx]=1,l.push(h[u].otherEnd),d=!0;break}}for(d=!0;d;){d=!1;var g=c.length>0?c[c.length-1]:l[0],_=s[g.id];if(!_)break;for(var p=0;p<_.length;p++)if(!n[_[p].segIdx]){n[_[p].segIdx]=1,c.push(_[p].otherEnd),d=!0;break}}c.length>0?(c.reverse(),e.push(c.concat(l))):e.push(l)}return e}function Kn(i,t){if(!t||t.length===0)return[i];var e=i.v1.x-i.v0.x,n=i.v1.y-i.v0.y,r=i.v1.z-i.v0.z,s=i.v2.x-i.v0.x,a=i.v2.y-i.v0.y,o=i.v2.z-i.v0.z,l=Math.sqrt(e*e+n*n+r*r);if(l<1e-12)return[i];var c=e/l,d=n/l,m=r/l,h=n*o-r*a,u=r*s-e*o,g=e*a-n*s,_=Math.sqrt(h*h+u*u+g*g);if(_<1e-12)return[i];var p=u*m-g*d,f=g*c-h*m,v=h*d-u*c,S=Math.sqrt(p*p+f*f+v*v);if(S<1e-12)return[i];p/=S,f/=S,v/=S;var w=i.v0.x,A=i.v0.y,P=i.v0.z;function D(ze){var je=ze.x-w,mn=ze.y-A,Ee=ze.z-P;return[je*c+mn*d+Ee*m,je*p+mn*f+Ee*v]}var E=D(i.v0),T=D(i.v1),z=D(i.v2),F=(T[1]-z[1])*(E[0]-z[0])+(z[0]-T[0])*(E[1]-z[1]);if(Math.abs(F)<1e-12)return[i];function R(ze,je){var mn=((T[1]-z[1])*(ze-z[0])+(z[0]-T[0])*(je-z[1]))/F,Ee=((z[1]-E[1])*(ze-z[0])+(E[0]-z[0])*(je-z[1]))/F;return[mn,Ee,1-mn-Ee]}var L=Math.abs(F)*.5,x=1e-8,O={},X=ue(i.v0),B=ue(i.v1),at=ue(i.v2),q=-1e-4,ct=[],H=[i.v0,i.v1,i.v2],k={},dt={};dt[X]=0,dt[B]=1,dt[at]=2;for(var gt=0;gt<t.length;gt++)for(var ft=t[gt],it=[ft.p0,ft.p1],ht=0;ht<2;ht++){var lt=it[ht],yt=ue(lt);if(yt===X||yt===B||yt===at){lt.id!==void 0&&(k[lt.id]=dt[yt]);continue}if(!(lt.id!==void 0&&O[lt.id])){lt.id!==void 0&&(O[lt.id]=!0);var wt=D(lt),Mt=R(wt[0],wt[1]);if(!(Mt[0]<q||Mt[1]<q||Mt[2]<q)){var Wt=H.length;H.push(lt),lt.id!==void 0&&(k[lt.id]=Wt),dt[yt]=Wt,ct.push(lt)}}}if(ct.length===0)return[i];for(var zt=H.length,y=new Float64Array(zt*2),J=0;J<zt;J++){var Y=D(H[J]);y[J*2]=Y[0],y[J*2+1]=Y[1]}var U;try{U=new ih(y)}catch{return[i]}try{for(var M=new rh(U),W=0;W<t.length;W++){var Q=t[W],rt,V;if(Q.p0.id!==void 0&&k[Q.p0.id]!==void 0?rt=k[Q.p0.id]:rt=dt[ue(Q.p0)],Q.p1.id!==void 0&&k[Q.p1.id]!==void 0?V=k[Q.p1.id]:V=dt[ue(Q.p1)],rt!==void 0&&V!==void 0&&rt!==V)try{M.constrainOne(rt,V)}catch{}}}catch{}for(var C=h,b=u,N=g,Z=[],nt=U.triangles,$=0;$<nt.length;$+=3){var bt=nt[$],pt=nt[$+1],Pt=nt[$+2],Ot=(y[bt*2]+y[pt*2]+y[Pt*2])/3,ut=(y[bt*2+1]+y[pt*2+1]+y[Pt*2+1])/3,xt=R(Ot,ut);if(!(xt[0]<-1e-6||xt[1]<-1e-6||xt[2]<-1e-6)){var Dt=y[bt*2],Tt=y[bt*2+1],Et=y[pt*2],At=y[pt*2+1],G=y[Pt*2],_t=y[Pt*2+1],vt=Math.abs((Et-Dt)*(_t-Tt)-(G-Dt)*(At-Tt))*.5;if(!(vt<L*x)){var St=H[bt],mt=H[pt],ot=H[Pt],Ut=mt.x-St.x,Vt=mt.y-St.y,te=mt.z-St.z,$t=ot.x-St.x,Ie=ot.y-St.y,Le=ot.z-St.z,bi=Vt*Le-te*Ie,Vn=te*$t-Ut*Le,Hn=Ut*Ie-Vt*$t,si=bi*C+Vn*b+Hn*N;si<0?Z.push({v0:St,v1:ot,v2:mt}):Z.push({v0:St,v1:mt,v2:ot})}}}return Z.length===0?[i]:Z}function Oc(i,t){if(!t||t.length===0)return[i];var e=cl(t);if(e.length!==1||e[0].length<2)return Kn(i,t);var n=e[0],r=[i.v0,i.v1,i.v2],s=i.v1.x-i.v0.x,a=i.v1.y-i.v0.y,o=i.v1.z-i.v0.z,l=i.v2.x-i.v0.x,c=i.v2.y-i.v0.y,d=i.v2.z-i.v0.z,m=Math.sqrt(s*s+a*a+o*o);if(m<1e-12)return Kn(i,t);var h=s/m,u=a/m,g=o/m,_=a*d-o*c,p=o*l-s*d,f=s*c-a*l,v=Math.sqrt(_*_+p*p+f*f);if(v<1e-12)return Kn(i,t);var S=p*g-f*u,w=f*h-_*g,A=_*u-p*h,P=Math.sqrt(S*S+w*w+A*A);if(P<1e-12)return Kn(i,t);S/=P,w/=P,A/=P;function D(At){var G=At.x-i.v0.x,_t=At.y-i.v0.y,vt=At.z-i.v0.z;return[G*h+_t*u+vt*g,G*S+_t*w+vt*A]}var E=D(i.v0),T=D(i.v1),z=D(i.v2),F=(T[1]-z[1])*(E[0]-z[0])+(z[0]-T[0])*(E[1]-z[1]);if(Math.abs(F)<1e-12)return Kn(i,t);function R(At,G){var _t=((T[1]-z[1])*(At-z[0])+(z[0]-T[0])*(G-z[1]))/F,vt=((z[1]-E[1])*(At-z[0])+(E[0]-z[0])*(G-z[1]))/F;return[_t,vt,1-_t-vt]}var L=.02,x=.02,O=D(n[0]),X=D(n[n.length-1]),B=R(O[0],O[1]),at=R(X[0],X[1]);function q(At){for(var G=0,_t=0;_t<3;_t++)At[_t]<x&&G++;return G>=2}if(q(B)||q(at))return Kn(i,t);function ct(At){return At[0]<L&&At[0]<=At[1]&&At[0]<=At[2]?0:At[1]<L&&At[1]<=At[0]&&At[1]<=At[2]?1:At[2]<L&&At[2]<=At[0]&&At[2]<=At[1]?2:-1}var H=ct(B),k=ct(at);if(H<0||k<0||H===k)return Kn(i,t);for(var dt=-1,gt=0;gt<3;gt++)if(gt!==H&&gt!==k){dt=gt;break}if(dt<0)return Kn(i,t);var ft=r[dt],it=r[k],ht=r[H],lt=a*d-o*c,yt=o*l-s*d,wt=s*c-a*l;function Mt(At,G,_t){var vt=G.x-At.x,St=G.y-At.y,mt=G.z-At.z,ot=_t.x-At.x,Ut=_t.y-At.y,Vt=_t.z-At.z,te=St*Vt-mt*Ut,$t=mt*ot-vt*Vt,Ie=vt*Ut-St*ot,Le=te*lt+$t*yt+Ie*wt;return Le<0?{v0:At,v1:_t,v2:G}:{v0:At,v1:G,v2:_t}}for(var Wt=[],zt=0;zt<n.length-1;zt++)Wt.push(Mt(ft,n[zt],n[zt+1]));for(var y=0,J=1/0,Y=0;Y<n.length;Y++){var U=El(it,n[Y]),M=El(ht,n[Y]),W=U<1e-20||M<1e-20?1/0:U<M?U/M:M/U,Q=Math.abs(1-W);Q<J&&(J=Q,y=Y)}y<1&&(y=1),y>n.length-2&&(y=n.length-2);for(var rt=0;rt<y;rt++)Wt.push(Mt(it,n[rt],n[rt+1]));Wt.push(Mt(it,n[y],ht));for(var V=y;V<n.length-1;V++)Wt.push(Mt(ht,n[V],n[V+1]));for(var C=v*.5,b=C*1e-8,N=[],Z=0;Z<Wt.length;Z++){var nt=Wt[Z],$=nt.v1.x-nt.v0.x,bt=nt.v1.y-nt.v0.y,pt=nt.v1.z-nt.v0.z,Pt=nt.v2.x-nt.v0.x,Ot=nt.v2.y-nt.v0.y,ut=nt.v2.z-nt.v0.z,xt=bt*ut-pt*Ot,Dt=pt*Pt-$*ut,Tt=$*Ot-bt*Pt,Et=Math.sqrt(xt*xt+Dt*Dt+Tt*Tt)*.5;Et>b&&N.push(nt)}return N.length>0?N:Kn(i,t)}function Lu(i,t,e){for(var n=e.crossedSetA,r=e.crossedSetB,s=[],a=0;a<i.length;a++)if(!n[a])s.push({v0:i[a].v0,v1:i[a].v1,v2:i[a].v2,mesh:"A",origIdx:a});else for(var o=Oc(i[a],n[a]),l=0;l<o.length;l++)s.push({v0:o[l].v0,v1:o[l].v1,v2:o[l].v2,mesh:"A",origIdx:a});for(var c=0;c<t.length;c++)if(!r[c])s.push({v0:t[c].v0,v1:t[c].v1,v2:t[c].v2,mesh:"B",origIdx:c});else for(var d=Oc(t[c],r[c]),m=0;m<d.length;m++)s.push({v0:d[m].v0,v1:d[m].v1,v2:d[m].v2,mesh:"B",origIdx:c});return s}function g0(i){for(var t={},e={},n=0;n<i.length;n++)for(var r=i[n],s=[r.v0,r.v1,r.v2],a=[ue(s[0]),ue(s[1]),ue(s[2])],o=0;o<3;o++){var l=(o+1)%3,c=_r(a[o],a[l]);t[c]||(t[c]=0,e[c]={ka:a[o],kb:a[l],a:s[o],b:s[l]}),t[c]++}var d={},m={};for(var h in t)if(t[h]===1){var u=e[h];d[u.ka]||(d[u.ka]=[]),d[u.ka].push(u.kb),d[u.kb]||(d[u.kb]=[]),d[u.kb].push(u.ka),m[u.ka]=u.a,m[u.kb]=u.b}var g={},_=null;for(var p in d)if(!g[p]){for(var f=[],v=p;v&&!g[v];){g[v]=!0,f.push({key:v,vertex:m[v]});var S=d[v],w=null;if(S){for(var A=0;A<S.length;A++)if(!g[S[A]]){w=S[A];break}}v=w}(!_||f.length>_.length)&&(_=f)}return _||[]}function _0(i,t){for(var e={},n={},r={},s=0;s<i.length;s++)for(var a=i[s],o=[a.v0,a.v1,a.v2],l=[ue(o[0]),ue(o[1]),ue(o[2])],c=0;c<3;c++){var d=(c+1)%3,m=_r(l[c],l[d]);if(!r[m]){if(r[m]=!0,t&&t[m]){n[l[c]]||(n[l[c]]=o[c]),n[l[d]]||(n[l[d]]=o[d]);continue}e[l[c]]||(e[l[c]]=[]),e[l[d]]||(e[l[d]]=[]),e[l[c]].push(l[d]),e[l[d]].push(l[c])}n[l[c]]||(n[l[c]]=o[c]),n[l[d]]||(n[l[d]]=o[d])}return{adj:e,vertMap:n}}function Bc(i,t,e,n,r){if(t[i])return{path:n[i]?[n[i]]:[],targetKey:i};var s={};s[i]=null;for(var a=[i],o=0,l=null;o<a.length&&o<r;){var c=a[o++],d=e[c];if(d){for(var m=0;m<d.length;m++){var h=d[m];if(s[h]===void 0){if(s[h]=c,t[h]){l=h;break}a.push(h)}}if(l)break}}if(!l)return null;for(var u=[],g=l;g!==null;)u.push(g),g=s[g];u.reverse();for(var _=[],p=0;p<u.length;p++){var f=n[u[p]];f&&_.push(f)}return{path:_,targetKey:l}}function v0(i,t,e){for(var n=[],r=i.length,s=t;n.push(i[s].vertex),!(s===e||(s=(s+1)%r,n.length>r+1)););return n}function Uu(i,t,e,n,r){if(i.length===0)return{closedPolylines:[],meshEdgePolys:{A:{segments:[],closed:!1},B:{segments:[],closed:!1}}};var s={};if(r)for(var a=0;a<r.length;a++){var o=r[a],l=ue(o.p0),c=ue(o.p1);s[_r(l,c)]=!0}var d=[],m=[];if(n)for(var h=0;h<n.length;h++)n[h].mesh==="A"?d.push(n[h]):m.push(n[h]);for(var u=zc(i,t,d.length>0?d:t,s),g=zc(i,e,m.length>0?m:e,s),_=[],p=0;p<i.length;p++)_.push(i[p]);return{closedPolylines:_,meshEdgePolys:{A:u,B:g}}}function zc(i,t,e,n){if(i.length===0)return{segments:[],closed:!1};var r=g0(t),s=r.length>0;if(!s){for(var a=[],o=0;o<i.length;o++)a.push({verts:i[o].slice(),type:"intersection"});return{segments:a,closed:!1}}for(var l=_0(e,n),c={},d={},m=0;m<r.length;m++)c[r[m].key]=!0,d[r[m].key]=m;for(var h=[],u=0;u<i.length;u++){for(var g=i[u],_={},p=0;p<g.length;p++)_[ue(g[p])]=p;var f=ue(g[0]),v=Bc(f,c,l.adj,l.vertMap,1e4);if(v){var S=d[v.targetKey];h.push({chainIdx:u,chain:g,chainEntryKey:f,chainEntryIdx:0,graphWalkToBoundary:v.path,boundaryKey:v.targetKey,boundaryLoopIdx:S!==void 0?S:0})}}if(h.length===0){for(var w=[],A=0;A<i.length;A++)w.push({verts:i[A].slice(),type:"intersection"});return{segments:w,closed:!1}}h.sort(function(at,q){return at.boundaryLoopIdx-q.boundaryLoopIdx});for(var P=[],D=h.length,E=0;E<D;E++){var T=h[E],z=h[(E+1)%D],F=T.graphWalkToBoundary.slice().reverse();F.length>=2&&P.push({verts:F,type:"walk"}),P.push({verts:T.chain.slice(),type:"intersection"});var R=ue(T.chain[T.chain.length-1]),L=R===T.chainEntryKey||T.chain[T.chain.length-1]===T.chain[0];if(L)T.graphWalkToBoundary.length>=2&&P.push({verts:T.graphWalkToBoundary.slice(),type:"walk"});else{var x=Bc(R,c,l.adj,l.vertMap,1e4);x&&x.path.length>=2&&P.push({verts:x.path,type:"walk"})}var O=T.boundaryLoopIdx,X=z.boundaryLoopIdx;if(O!==X){var B=v0(r,O,X);B.length>=2&&P.push({verts:B,type:"walk"})}}return{segments:P,closed:!0}}function kc(i){for(var t={},e={},n=0;n<i.length;n++)for(var r=i[n],s=[r.v0,r.v1,r.v2],a=[ue(s[0]),ue(s[1]),ue(s[2])],o=0;o<3;o++){var l=(o+1)%3,c=_r(a[o],a[l]);t[c]||(t[c]=0,e[c]=[a[o],a[l]]),t[c]++}var d={};for(var m in t)if(t[m]===1){var h=e[m];d[h[0]]=!0,d[h[1]]=!0}return d}function x0(i,t,e,n,r){for(var s=i.length,a={},o=0;o<e.length;o++){var l=e[o];if(l.p0!==l.p1){var c=ue(l.p0),d=ue(l.p1);if(c!==d){var m=_r(c,d);a[m]=!0}}}for(var h={},u=0;u<s;u++)for(var g=i[u],_=[ue(g.v0),ue(g.v1),ue(g.v2)],p=0;p<3;p++){var f=(p+1)%3,v=_r(_[p],_[f]);h[v]||(h[v]=[]),h[v].push(u)}for(var S=new Array(s),w=0;w<s;w++)S[w]=[];for(var A in h)if(!a[A])for(var P=h[A],D=0;D<P.length;D++)for(var E=D+1;E<P.length;E++)S[P[D]].push(P[E]),S[P[E]].push(P[D]);for(var T=new Int32Array(s),z=0;z<s;z++)T[z]=-1;for(var F=[],R=0,L=0;L<s;L++)if(!(T[L]>=0)){var x=R++,O=i[L].mesh,X=[],B=[L];T[L]=x;for(var at=0;at<B.length;){var q=B[at++];X.push(q);for(var ct=S[q],H=0;H<ct.length;H++){var k=ct[H];T[k]>=0||i[k].mesh===O&&(T[k]=x,B.push(k))}}F.push({id:x,mesh:O,triIndices:X,triCount:X.length})}for(var dt=kc(n),gt=kc(r),ft=Object.keys(dt).length>0,it=Object.keys(gt).length>0,ht=[],lt=[],yt=[],wt=[],Mt=[],Wt=[],zt=0;zt<F.length;zt++)F[zt].mesh==="A"?Mt.push(F[zt]):Wt.push(F[zt]);Vc(Mt,i,ft?dt:null,ht,lt),Vc(Wt,i,it?gt:null,yt,wt);var y=0,J=0;for(var Y in a)h[Y]?y++:J++;var U=[];for(var M in a)h[M]||U.push(M);if(console.log("[BMS] Barrier edges: "+Object.keys(a).length+" total, "+y+" found in soup edges, "+J+" missing"),U.length>0)for(var W=0;W<U.length;W++)console.log("[BMS] MISSING barrier: "+U[W]);console.log("[BMS] Total soup edges: "+Object.keys(h).length);var Q=Object.keys(a)[0],rt=Object.keys(h)[0];return Q&&console.log("[BMS] Sample barrier edge: "+Q.substring(0,80)),rt&&console.log("[BMS] Sample soup edge: "+rt.substring(0,80)),console.log("[BMS] Components: "+F.length+" total ("+Mt.length+" A, "+Wt.length+" B). A: "+ht.length+" inside, "+lt.length+" outside. B: "+yt.length+" inside, "+wt.length+" outside."),{aInside:ht,aOutside:lt,bInside:yt,bOutside:wt}}function Vc(i,t,e,n,r){if(i.length!==0){if(i.length===1){for(var s=i[0].triIndices,a=0;a<s.length;a++){var o=t[s[a]];r.push({v0:o.v0,v1:o.v1,v2:o.v2})}return}if(e)for(var l=0;l<i.length;l++){for(var c=i[l],d=!1,m=0;m<c.triIndices.length;m++){for(var h=t[c.triIndices[m]],u=[ue(h.v0),ue(h.v1),ue(h.v2)],g=0;g<3;g++)if(e[u[g]]){d=!0;break}if(d)break}for(var _=d?r:n,p=0;p<c.triIndices.length;p++){var f=t[c.triIndices[p]];_.push({v0:f.v0,v1:f.v1,v2:f.v2})}}else{for(var v=0,S=1;S<i.length;S++)i[S].triCount>i[v].triCount&&(v=S);for(var w=0;w<i.length;w++)for(var A=w===v?r:n,P=i[w].triIndices,D=0;D<P.length;D++){var E=t[P[D]];A.push({v0:E.v0,v1:E.v1,v2:E.v2})}}}}function Hc(i,t,e,n){if(!i||!t||i.length===0||t.length===0)return null;var r=n||{};if(r.preRepair){var s=r.tolerance!==void 0?r.tolerance:$n(i)*.01,a=r.tolerance!==void 0?r.tolerance:$n(t)*.01;i=Bs(i,s,3),i=zs(i,s),t=Bs(t,a,3),t=zs(t,a)}var o=Iu(i,t,{tolerance:r.tolerance});if(o.segments.length===0)return{groups:{aInside:[],aOutside:i.slice(),bInside:[],bOutside:t.slice()},segments:[],polylines:[],megaSoup:null,pool:o.pool};var l=Lu(i,t,o),c=cl(o.segments),d=Uu(c,i,t,l,o.segments),m=d.closedPolylines,h=d.meshEdgePolys,u=x0(l,m,o.segments,i,t);u.aInside.length>0&&(u.aInside=ts(u.aInside,1e-4)),u.aOutside.length>0&&(u.aOutside=ts(u.aOutside,1e-4)),u.bInside.length>0&&(u.bInside=ts(u.bInside,1e-4)),u.bOutside.length>0&&(u.bOutside=ts(u.bOutside,1e-4));var g={groups:u,segments:o.segments,polylines:m,rawPolylines:c,meshEdgePolys:h,megaSoup:l,pool:o.pool};return g}var Ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function y0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ds(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Wa={exports:{}};var Gc;function S0(){return Gc||(Gc=1,(function(i,t){(function(e){i.exports=e()})(function(){return(function e(n,r,s){function a(c,d){if(!r[c]){if(!n[c]){var m=typeof Ds=="function"&&Ds;if(!d&&m)return m(c,!0);if(o)return o(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var u=r[c]={exports:{}};n[c][0].call(u.exports,function(g){var _=n[c][1][g];return a(_||g)},u,u.exports,e,n,r,s)}return r[c].exports}for(var o=typeof Ds=="function"&&Ds,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(e,n,r){var s=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,d,m,h,u,g,_,p=[],f=0,v=l.length,S=v,w=s.getTypeOf(l)!=="string";f<l.length;)S=v-f,m=w?(c=l[f++],d=f<v?l[f++]:0,f<v?l[f++]:0):(c=l.charCodeAt(f++),d=f<v?l.charCodeAt(f++):0,f<v?l.charCodeAt(f++):0),h=c>>2,u=(3&c)<<4|d>>4,g=1<S?(15&d)<<2|m>>6:64,_=2<S?63&m:64,p.push(o.charAt(h)+o.charAt(u)+o.charAt(g)+o.charAt(_));return p.join("")},r.decode=function(l){var c,d,m,h,u,g,_=0,p=0,f="data:";if(l.substr(0,f.length)===f)throw new Error("Invalid base64 input, it looks like a data url.");var v,S=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&S--,l.charAt(l.length-2)===o.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|S):new Array(0|S);_<l.length;)c=o.indexOf(l.charAt(_++))<<2|(h=o.indexOf(l.charAt(_++)))>>4,d=(15&h)<<4|(u=o.indexOf(l.charAt(_++)))>>2,m=(3&u)<<6|(g=o.indexOf(l.charAt(_++))),v[p++]=c,u!==64&&(v[p++]=d),g!==64&&(v[p++]=m);return v}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(d,m,h,u,g){this.compressedSize=d,this.uncompressedSize=m,this.crc32=h,this.compression=u,this.compressedContent=g}c.prototype={getContentWorker:function(){var d=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),m=this;return d.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,m,h){return d.pipe(new o).pipe(new l("uncompressedSize")).pipe(m.compressWorker(h)).pipe(new l("compressedSize")).withStreamInfo("compression",m)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),a=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var d=0;d<8;d++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();n.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(c,d,m,h){var u=a,g=h+m;c^=-1;for(var _=h;_<g;_++)c=c>>>8^u[255&(c^d[_])];return-1^c})(0|l,o,o.length,0):(function(c,d,m,h){var u=a,g=h+m;c^=-1;for(var _=h;_<g;_++)c=c>>>8^u[255&(c^d.charCodeAt(_))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function d(m,h){l.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=h,this.meta={}}r.magic="\b\0",o.inherits(d,l),d.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,m.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(h){m.push({data:h,meta:m.meta})}},r.compressWorker=function(m){return new d("Deflate",m)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(u,g){var _,p="";for(_=0;_<g;_++)p+=String.fromCharCode(255&u),u>>>=8;return p}function a(u,g,_,p,f,v){var S,w,A=u.file,P=u.compression,D=v!==c.utf8encode,E=o.transformTo("string",v(A.name)),T=o.transformTo("string",c.utf8encode(A.name)),z=A.comment,F=o.transformTo("string",v(z)),R=o.transformTo("string",c.utf8encode(z)),L=T.length!==A.name.length,x=R.length!==z.length,O="",X="",B="",at=A.dir,q=A.date,ct={crc32:0,compressedSize:0,uncompressedSize:0};g&&!_||(ct.crc32=u.crc32,ct.compressedSize=u.compressedSize,ct.uncompressedSize=u.uncompressedSize);var H=0;g&&(H|=8),D||!L&&!x||(H|=2048);var k=0,dt=0;at&&(k|=16),f==="UNIX"?(dt=798,k|=(function(ft,it){var ht=ft;return ft||(ht=it?16893:33204),(65535&ht)<<16})(A.unixPermissions,at)):(dt=20,k|=(function(ft){return 63&(ft||0)})(A.dosPermissions)),S=q.getUTCHours(),S<<=6,S|=q.getUTCMinutes(),S<<=5,S|=q.getUTCSeconds()/2,w=q.getUTCFullYear()-1980,w<<=4,w|=q.getUTCMonth()+1,w<<=5,w|=q.getUTCDate(),L&&(X=s(1,1)+s(d(E),4)+T,O+="up"+s(X.length,2)+X),x&&(B=s(1,1)+s(d(F),4)+R,O+="uc"+s(B.length,2)+B);var gt="";return gt+=`
\0`,gt+=s(H,2),gt+=P.magic,gt+=s(S,2),gt+=s(w,2),gt+=s(ct.crc32,4),gt+=s(ct.compressedSize,4),gt+=s(ct.uncompressedSize,4),gt+=s(E.length,2),gt+=s(O.length,2),{fileRecord:m.LOCAL_FILE_HEADER+gt+E+O,dirRecord:m.CENTRAL_FILE_HEADER+s(dt,2)+gt+s(F.length,2)+"\0\0\0\0"+s(k,4)+s(p,4)+E+O+F}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),d=e("../crc32"),m=e("../signature");function h(u,g,_,p){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=_,this.encodeFileName=p,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(h,l),h.prototype.push=function(u){var g=u.meta.percent||0,_=this.entriesCount,p=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:_?(g+100*(_-p-1))/_:100}}))},h.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var g=this.streamFiles&&!u.file.dir;if(g){var _=a(u,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(u){this.accumulate=!1;var g=this.streamFiles&&!u.file.dir,_=a(u,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),g)this.push({data:(function(p){return m.DATA_DESCRIPTOR+s(p.crc32,4)+s(p.compressedSize,4)+s(p.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var u=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var _=this.bytesWritten-u,p=(function(f,v,S,w,A){var P=o.transformTo("string",A(w));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(f,2)+s(f,2)+s(v,4)+s(S,4)+s(P.length,2)+P})(this.dirRecords.length,_,u,this.zipComment,this.encodeFileName);this.push({data:p,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(u){this._sources.push(u);var g=this;return u.on("data",function(_){g.processChunk(_)}),u.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),u.on("error",function(_){g.error(_)}),this},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(u){var g=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var _=0;_<g.length;_++)try{g[_].error(u)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,g=0;g<u.length;g++)u[g].lock()},n.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),a=e("./ZipFileWorker");r.generateWorker=function(o,l,c){var d=new a(l.streamFiles,c,l.platform,l.encodeFileName),m=0;try{o.forEach(function(h,u){m++;var g=(function(v,S){var w=v||S,A=s[w];if(!A)throw new Error(w+" is not a valid compression method !");return A})(u.options.compression,l.compression),_=u.options.compressionOptions||l.compressionOptions||{},p=u.dir,f=u.date;u._compressWorker(g,_).withStreamInfo("file",{name:h,dir:p,date:f,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(d)}),d.entriesCount=m}catch(h){d.error(h)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),a=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function m(h){return new a.Promise(function(u,g){var _=h.decompressed.getContentWorker().pipe(new c);_.on("error",function(p){g(p)}).on("end",function(){_.streamInfo.crc32!==h.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(h,u){var g=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),d.isNode&&d.isStream(h)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",h,!0,u.optimizedBinaryString,u.base64).then(function(_){var p=new l(u);return p.load(_),p}).then(function(_){var p=[a.Promise.resolve(_)],f=_.files;if(u.checkCRC32)for(var v=0;v<f.length;v++)p.push(m(f[v]));return a.Promise.all(p)}).then(function(_){for(var p=_.shift(),f=p.files,v=0;v<f.length;v++){var S=f[v],w=S.fileNameStr,A=s.resolve(S.fileNameStr);g.file(A,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:u.createFolders}),S.dir||(g.file(A).unsafeOriginalName=w)}return p.zipComment.length&&(g.comment=p.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),a=e("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var d=this;o.on("data",function(m,h){d.push(m)||d._helper.pause(),c&&c(h)}).on("error",function(m){d.emit("error",m)}).on("end",function(){d.push(null)})}e("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(A,P,D){var E,T=o.getTypeOf(P),z=o.extend(D||{},d);z.date=z.date||new Date,z.compression!==null&&(z.compression=z.compression.toUpperCase()),typeof z.unixPermissions=="string"&&(z.unixPermissions=parseInt(z.unixPermissions,8)),z.unixPermissions&&16384&z.unixPermissions&&(z.dir=!0),z.dosPermissions&&16&z.dosPermissions&&(z.dir=!0),z.dir&&(A=f(A)),z.createFolders&&(E=p(A))&&v.call(this,E,!0);var F=T==="string"&&z.binary===!1&&z.base64===!1;D&&D.binary!==void 0||(z.binary=!F),(P instanceof m&&P.uncompressedSize===0||z.dir||!P||P.length===0)&&(z.base64=!1,z.binary=!0,P="",z.compression="STORE",T="string");var R=null;R=P instanceof m||P instanceof l?P:g.isNode&&g.isStream(P)?new _(A,P):o.prepareContent(A,P,z.binary,z.optimizedBinaryString,z.base64);var L=new h(A,R,z);this.files[A]=L}var a=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),d=e("./defaults"),m=e("./compressedObject"),h=e("./zipObject"),u=e("./generate"),g=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),p=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var P=A.lastIndexOf("/");return 0<P?A.substring(0,P):""},f=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},v=function(A,P){return P=P!==void 0?P:d.createFolders,A=f(A),this.files[A]||s.call(this,A,null,{dir:!0,createFolders:P}),this.files[A]};function S(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var P,D,E;for(P in this.files)E=this.files[P],(D=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&A(D,E)},filter:function(A){var P=[];return this.forEach(function(D,E){A(D,E)&&P.push(E)}),P},file:function(A,P,D){if(arguments.length!==1)return A=this.root+A,s.call(this,A,P,D),this;if(S(A)){var E=A;return this.filter(function(z,F){return!F.dir&&E.test(z)})}var T=this.files[this.root+A];return T&&!T.dir?T:null},folder:function(A){if(!A)return this;if(S(A))return this.filter(function(T,z){return z.dir&&A.test(T)});var P=this.root+A,D=v.call(this,P),E=this.clone();return E.root=D.name,E},remove:function(A){A=this.root+A;var P=this.files[A];if(P||(A.slice(-1)!=="/"&&(A+="/"),P=this.files[A]),P&&!P.dir)delete this.files[A];else for(var D=this.filter(function(T,z){return z.name.slice(0,A.length)===A}),E=0;E<D.length;E++)delete this.files[D[E].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var P,D={};try{if((D=o.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=D.type.toLowerCase(),D.compression=D.compression.toUpperCase(),D.type==="binarystring"&&(D.type="string"),!D.type)throw new Error("No output type specified.");o.checkSupport(D.type),D.platform!=="darwin"&&D.platform!=="freebsd"&&D.platform!=="linux"&&D.platform!=="sunos"||(D.platform="UNIX"),D.platform==="win32"&&(D.platform="DOS");var E=D.comment||this.comment||"";P=u.generateWorker(this,D,E)}catch(T){(P=new l("error")).error(T)}return new c(P,D.type||"string",D.mimeType)},generateAsync:function(A,P){return this.generateInternalStream(A).accumulate(P)},generateNodeStream:function(A,P){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(P)}};n.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),m=o.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===l&&this.data[h+1]===c&&this.data[h+2]===d&&this.data[h+3]===m)return h-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),m=o.charCodeAt(3),h=this.readData(4);return l===h[0]&&c===h[1]&&d===h[2]&&m===h[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=a},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),a=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");n.exports=function(m){var h=s.getTypeOf(m);return s.checkSupport(h),h!=="string"||a.uint8array?h==="nodebuffer"?new c(m):a.uint8array?new d(s.transformTo("uint8array",m)):new o(s.transformTo("array",m)):new l(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),a=e("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),a=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=s.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),d=e("../external"),m=null;if(c.nodestream)try{m=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(g,_){return new d.Promise(function(p,f){var v=[],S=g._internalType,w=g._outputType,A=g._mimeType;g.on("data",function(P,D){v.push(P),_&&_(D)}).on("error",function(P){v=[],f(P)}).on("end",function(){try{var P=(function(D,E,T){switch(D){case"blob":return s.newBlob(s.transformTo("arraybuffer",E),T);case"base64":return l.encode(E);default:return s.transformTo(D,E)}})(w,(function(D,E){var T,z=0,F=null,R=0;for(T=0;T<E.length;T++)R+=E[T].length;switch(D){case"string":return E.join("");case"array":return Array.prototype.concat.apply([],E);case"uint8array":for(F=new Uint8Array(R),T=0;T<E.length;T++)F.set(E[T],z),z+=E[T].length;return F;case"nodebuffer":return Buffer.concat(E);default:throw new Error("concat : unsupported type '"+D+"'")}})(S,v),A);p(P)}catch(D){f(D)}v=[]}).resume()})}function u(g,_,p){var f=_;switch(_){case"blob":case"arraybuffer":f="uint8array";break;case"base64":f="string"}try{this._internalType=f,this._outputType=_,this._mimeType=p,s.checkSupport(f),this._worker=g.pipe(new a(f)),g.lock()}catch(v){this._worker=new o("error"),this._worker.error(v)}}u.prototype={accumulate:function(g){return h(this,g)},on:function(g,_){var p=this;return g==="data"?this._worker.on(g,function(f){_.call(p,f.data,f.meta)}):this._worker.on(g,function(){s.delay(_,arguments,p)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function m(){l.call(this,"utf-8 decode"),this.leftOver=null}function h(){l.call(this,"utf-8 encode")}r.utf8encode=function(u){return a.nodebuffer?o.newBufferFrom(u,"utf-8"):(function(g){var _,p,f,v,S,w=g.length,A=0;for(v=0;v<w;v++)(64512&(p=g.charCodeAt(v)))==55296&&v+1<w&&(64512&(f=g.charCodeAt(v+1)))==56320&&(p=65536+(p-55296<<10)+(f-56320),v++),A+=p<128?1:p<2048?2:p<65536?3:4;for(_=a.uint8array?new Uint8Array(A):new Array(A),v=S=0;S<A;v++)(64512&(p=g.charCodeAt(v)))==55296&&v+1<w&&(64512&(f=g.charCodeAt(v+1)))==56320&&(p=65536+(p-55296<<10)+(f-56320),v++),p<128?_[S++]=p:(p<2048?_[S++]=192|p>>>6:(p<65536?_[S++]=224|p>>>12:(_[S++]=240|p>>>18,_[S++]=128|p>>>12&63),_[S++]=128|p>>>6&63),_[S++]=128|63&p);return _})(u)},r.utf8decode=function(u){return a.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):(function(g){var _,p,f,v,S=g.length,w=new Array(2*S);for(_=p=0;_<S;)if((f=g[_++])<128)w[p++]=f;else if(4<(v=c[f]))w[p++]=65533,_+=v-1;else{for(f&=v===2?31:v===3?15:7;1<v&&_<S;)f=f<<6|63&g[_++],v--;1<v?w[p++]=65533:f<65536?w[p++]=f:(f-=65536,w[p++]=55296|f>>10&1023,w[p++]=56320|1023&f)}return w.length!==p&&(w.subarray?w=w.subarray(0,p):w.length=p),s.applyFromCharCode(w)})(u=s.transformTo(a.uint8array?"uint8array":"array",u))},s.inherits(m,l),m.prototype.processChunk=function(u){var g=s.transformTo(a.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var _=g;(g=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),g.set(_,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var p=(function(v,S){var w;for((S=S||v.length)>v.length&&(S=v.length),w=S-1;0<=w&&(192&v[w])==128;)w--;return w<0||w===0?S:w+c[v[w]]>S?w:S})(g),f=g;p!==g.length&&(a.uint8array?(f=g.subarray(0,p),this.leftOver=g.subarray(p,g.length)):(f=g.slice(0,p),this.leftOver=g.slice(p,g.length))),this.push({data:r.utf8decode(f),meta:u.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=m,s.inherits(h,l),h.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(_){return _}function d(_,p){for(var f=0;f<_.length;++f)p[f]=255&_.charCodeAt(f);return p}e("setimmediate"),r.newBlob=function(_,p){r.checkSupport("blob");try{return new Blob([_],{type:p})}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return f.append(_),f.getBlob(p)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(_,p,f){var v=[],S=0,w=_.length;if(w<=f)return String.fromCharCode.apply(null,_);for(;S<w;)p==="array"||p==="nodebuffer"?v.push(String.fromCharCode.apply(null,_.slice(S,Math.min(S+f,w)))):v.push(String.fromCharCode.apply(null,_.subarray(S,Math.min(S+f,w)))),S+=f;return v.join("")},stringifyByChar:function(_){for(var p="",f=0;f<_.length;f++)p+=String.fromCharCode(_[f]);return p},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function h(_){var p=65536,f=r.getTypeOf(_),v=!0;if(f==="uint8array"?v=m.applyCanBeUsed.uint8array:f==="nodebuffer"&&(v=m.applyCanBeUsed.nodebuffer),v)for(;1<p;)try{return m.stringifyByChunk(_,f,p)}catch{p=Math.floor(p/2)}return m.stringifyByChar(_)}function u(_,p){for(var f=0;f<_.length;f++)p[f]=_[f];return p}r.applyFromCharCode=h;var g={};g.string={string:c,array:function(_){return d(_,new Array(_.length))},arraybuffer:function(_){return g.string.uint8array(_).buffer},uint8array:function(_){return d(_,new Uint8Array(_.length))},nodebuffer:function(_){return d(_,o.allocBuffer(_.length))}},g.array={string:h,array:c,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return o.newBufferFrom(_)}},g.arraybuffer={string:function(_){return h(new Uint8Array(_))},array:function(_){return u(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:c,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return o.newBufferFrom(new Uint8Array(_))}},g.uint8array={string:h,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:c,nodebuffer:function(_){return o.newBufferFrom(_)}},g.nodebuffer={string:h,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return g.nodebuffer.uint8array(_).buffer},uint8array:function(_){return u(_,new Uint8Array(_.length))},nodebuffer:c},r.transformTo=function(_,p){if(p=p||"",!_)return p;r.checkSupport(_);var f=r.getTypeOf(p);return g[f][_](p)},r.resolve=function(_){for(var p=_.split("/"),f=[],v=0;v<p.length;v++){var S=p[v];S==="."||S===""&&v!==0&&v!==p.length-1||(S===".."?f.pop():f.push(S))}return f.join("/")},r.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(_){var p,f,v="";for(f=0;f<(_||"").length;f++)v+="\\x"+((p=_.charCodeAt(f))<16?"0":"")+p.toString(16).toUpperCase();return v},r.delay=function(_,p,f){setImmediate(function(){_.apply(f||null,p||[])})},r.inherits=function(_,p){function f(){}f.prototype=p.prototype,_.prototype=new f},r.extend=function(){var _,p,f={};for(_=0;_<arguments.length;_++)for(p in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],p)&&f[p]===void 0&&(f[p]=arguments[_][p]);return f},r.prepareContent=function(_,p,f,v,S){return l.Promise.resolve(p).then(function(w){return s.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,P){var D=new FileReader;D.onload=function(E){A(E.target.result)},D.onerror=function(E){P(E.target.error)},D.readAsArrayBuffer(w)}):w}).then(function(w){var A=r.getTypeOf(w);return A?(A==="arraybuffer"?w=r.transformTo("uint8array",w):A==="string"&&(S?w=a.decode(w):f&&v!==!0&&(w=(function(P){return d(P,s.uint8array?new Uint8Array(P.length):new Array(P.length))})(w))),w):l.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function d(m){this.files=[],this.loadOptions=m}d.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(h)+", expected "+a.pretty(m)+")")}},isSignature:function(m,h){var u=this.reader.index;this.reader.setIndex(m);var g=this.reader.readString(4)===h;return this.reader.setIndex(u),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),h=c.uint8array?"uint8array":"array",u=a.transformTo(h,m);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,h,u,g=this.zip64EndOfCentralSize-44;0<g;)m=this.reader.readInt(2),h=this.reader.readInt(4),u=this.reader.readData(h),this.zip64ExtensibleData[m]={id:m,length:h,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,h;for(m=0;m<this.files.length;m++)h=this.files[m],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(m=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var h=m;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var g=h-u;if(0<g)this.isSignature(h,o.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(m){this.reader=s(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),d=e("./compressions"),m=e("./support");function h(u,g){this.options=u,this.loadOptions=g}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var g,_;if(u.skip(22),this.fileNameLength=u.readInt(2),_=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(p){for(var f in d)if(Object.prototype.hasOwnProperty.call(d,f)&&d[f].magic===p)return d[f];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,g,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var g=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(g),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var g,_,p,f=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<f;)g=u.readInt(2),_=u.readInt(2),p=u.readData(_),this.extraFields[g]={id:g,length:_,value:p};u.setIndex(f)},handleUTF8:function(){var u=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var _=a.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var p=this.findExtraFieldUnicodeComment();if(p!==null)this.fileCommentStr=p;else{var f=a.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(f)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var g=s(u.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var g=s(u.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(u.length-5))}return null}},n.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(g,_,p){this.name=g,this.dir=p.dir,this.date=p.date,this.comment=p.comment,this.unixPermissions=p.unixPermissions,this.dosPermissions=p.dosPermissions,this._data=_,this._dataBinary=p.binary,this.options={compression:p.compression,compressionOptions:p.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(g){var _=null,p="string";try{if(!g)throw new Error("No output type specified.");var f=(p=g.toLowerCase())==="string"||p==="text";p!=="binarystring"&&p!=="text"||(p="string"),_=this._decompressWorker();var v=!this._dataBinary;v&&!f&&(_=_.pipe(new l.Utf8EncodeWorker)),!v&&f&&(_=_.pipe(new l.Utf8DecodeWorker))}catch(S){(_=new d("error")).error(S)}return new a(_,p,"")},async:function(g,_){return this.internalStream(g).accumulate(_)},nodeStream:function(g,_){return this.internalStream(g||"nodebuffer").toNodejsStream(_)},_compressWorker:function(g,_){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var p=this._decompressWorker();return this._dataBinary||(p=p.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(p,g,_)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new o(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<m.length;u++)s.prototype[m[u]]=h;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,d=new l(g),m=s.document.createTextNode("");d.observe(m,{characterData:!0}),a=function(){m.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){g(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(g,0)};else{var h=new s.MessageChannel;h.port1.onmessage=g,a=function(){h.port2.postMessage(0)}}var u=[];function g(){var _,p;o=!0;for(var f=u.length;f;){for(p=u,u=[],_=-1;++_<f;)p[_]();f=u.length}o=!1}n.exports=function(_){u.push(_)!==1||o||a()}}).call(this,typeof Ps<"u"?Ps:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function m(f){if(typeof f!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,f!==a&&_(this,f)}function h(f,v,S){this.promise=f,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function u(f,v,S){s(function(){var w;try{w=v(S)}catch(A){return o.reject(f,A)}w===f?o.reject(f,new TypeError("Cannot resolve promise with itself")):o.resolve(f,w)})}function g(f){var v=f&&f.then;if(f&&(typeof f=="object"||typeof f=="function")&&typeof v=="function")return function(){v.apply(f,arguments)}}function _(f,v){var S=!1;function w(D){S||(S=!0,o.reject(f,D))}function A(D){S||(S=!0,o.resolve(f,D))}var P=p(function(){v(A,w)});P.status==="error"&&w(P.value)}function p(f,v){var S={};try{S.value=f(v),S.status="success"}catch(w){S.status="error",S.value=w}return S}(n.exports=m).prototype.finally=function(f){if(typeof f!="function")return this;var v=this.constructor;return this.then(function(S){return v.resolve(f()).then(function(){return S})},function(S){return v.resolve(f()).then(function(){throw S})})},m.prototype.catch=function(f){return this.then(null,f)},m.prototype.then=function(f,v){if(typeof f!="function"&&this.state===c||typeof v!="function"&&this.state===l)return this;var S=new this.constructor(a);return this.state!==d?u(S,this.state===c?f:v,this.outcome):this.queue.push(new h(S,f,v)),S},h.prototype.callFulfilled=function(f){o.resolve(this.promise,f)},h.prototype.otherCallFulfilled=function(f){u(this.promise,this.onFulfilled,f)},h.prototype.callRejected=function(f){o.reject(this.promise,f)},h.prototype.otherCallRejected=function(f){u(this.promise,this.onRejected,f)},o.resolve=function(f,v){var S=p(g,v);if(S.status==="error")return o.reject(f,S.value);var w=S.value;if(w)_(f,w);else{f.state=c,f.outcome=v;for(var A=-1,P=f.queue.length;++A<P;)f.queue[A].callFulfilled(v)}return f},o.reject=function(f,v){f.state=l,f.outcome=v;for(var S=-1,w=f.queue.length;++S<w;)f.queue[S].callRejected(v);return f},m.resolve=function(f){return f instanceof this?f:o.resolve(new this(a),f)},m.reject=function(f){var v=new this(a);return o.reject(v,f)},m.all=function(f){var v=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,w=!1;if(!S)return this.resolve([]);for(var A=new Array(S),P=0,D=-1,E=new this(a);++D<S;)T(f[D],D);return E;function T(z,F){v.resolve(z).then(function(R){A[F]=R,++P!==S||w||(w=!0,o.resolve(E,A))},function(R){w||(w=!0,o.reject(E,R))})}},m.race=function(f){var v=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,w=!1;if(!S)return this.resolve([]);for(var A=-1,P=new this(a);++A<S;)D=f[A],v.resolve(D).then(function(E){w||(w=!0,o.resolve(P,E))},function(E){w||(w=!0,o.reject(P,E))});var D;return P}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),d=Object.prototype.toString,m=0,h=-1,u=0,g=8;function _(f){if(!(this instanceof _))return new _(f);this.options=a.assign({level:h,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},f||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var S=s.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(S!==m)throw new Error(l[S]);if(v.header&&s.deflateSetHeader(this.strm,v.header),v.dictionary){var w;if(w=typeof v.dictionary=="string"?o.string2buf(v.dictionary):d.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(S=s.deflateSetDictionary(this.strm,w))!==m)throw new Error(l[S]);this._dict_set=!0}}function p(f,v){var S=new _(v);if(S.push(f,!0),S.err)throw S.msg||l[S.err];return S.result}_.prototype.push=function(f,v){var S,w,A=this.strm,P=this.options.chunkSize;if(this.ended)return!1;w=v===~~v?v:v===!0?4:0,typeof f=="string"?A.input=o.string2buf(f):d.call(f)==="[object ArrayBuffer]"?A.input=new Uint8Array(f):A.input=f,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new a.Buf8(P),A.next_out=0,A.avail_out=P),(S=s.deflate(A,w))!==1&&S!==m)return this.onEnd(S),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(A.output,A.next_out))):this.onData(a.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&S!==1);return w===4?(S=s.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===m):w!==2||(this.onEnd(m),!(A.avail_out=0))},_.prototype.onData=function(f){this.chunks.push(f)},_.prototype.onEnd=function(f){f===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},r.Deflate=_,r.deflate=p,r.deflateRaw=function(f,v){return(v=v||{}).raw=!0,p(f,v)},r.gzip=function(f,v){return(v=v||{}).gzip=!0,p(f,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),d=e("./zlib/zstream"),m=e("./zlib/gzheader"),h=Object.prototype.toString;function u(_){if(!(this instanceof u))return new u(_);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},_||{});var p=this.options;p.raw&&0<=p.windowBits&&p.windowBits<16&&(p.windowBits=-p.windowBits,p.windowBits===0&&(p.windowBits=-15)),!(0<=p.windowBits&&p.windowBits<16)||_&&_.windowBits||(p.windowBits+=32),15<p.windowBits&&p.windowBits<48&&(15&p.windowBits)==0&&(p.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var f=s.inflateInit2(this.strm,p.windowBits);if(f!==l.Z_OK)throw new Error(c[f]);this.header=new m,s.inflateGetHeader(this.strm,this.header)}function g(_,p){var f=new u(p);if(f.push(_,!0),f.err)throw f.msg||c[f.err];return f.result}u.prototype.push=function(_,p){var f,v,S,w,A,P,D=this.strm,E=this.options.chunkSize,T=this.options.dictionary,z=!1;if(this.ended)return!1;v=p===~~p?p:p===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof _=="string"?D.input=o.binstring2buf(_):h.call(_)==="[object ArrayBuffer]"?D.input=new Uint8Array(_):D.input=_,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new a.Buf8(E),D.next_out=0,D.avail_out=E),(f=s.inflate(D,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&T&&(P=typeof T=="string"?o.string2buf(T):h.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,f=s.inflateSetDictionary(this.strm,P)),f===l.Z_BUF_ERROR&&z===!0&&(f=l.Z_OK,z=!1),f!==l.Z_STREAM_END&&f!==l.Z_OK)return this.onEnd(f),!(this.ended=!0);D.next_out&&(D.avail_out!==0&&f!==l.Z_STREAM_END&&(D.avail_in!==0||v!==l.Z_FINISH&&v!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=o.utf8border(D.output,D.next_out),w=D.next_out-S,A=o.buf2string(D.output,S),D.next_out=w,D.avail_out=E-w,w&&a.arraySet(D.output,D.output,S,w,0),this.onData(A)):this.onData(a.shrinkBuf(D.output,D.next_out)))),D.avail_in===0&&D.avail_out===0&&(z=!0)}while((0<D.avail_in||D.avail_out===0)&&f!==l.Z_STREAM_END);return f===l.Z_STREAM_END&&(v=l.Z_FINISH),v===l.Z_FINISH?(f=s.inflateEnd(this.strm),this.onEnd(f),this.ended=!0,f===l.Z_OK):v!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(D.avail_out=0))},u.prototype.onData=function(_){this.chunks.push(_)},u.prototype.onEnd=function(_){_===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Inflate=u,r.inflate=g,r.inflateRaw=function(_,p){return(p=p||{}).raw=!0,g(_,p)},r.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var m in d)d.hasOwnProperty(m)&&(l[m]=d[m])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,d,m,h){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+m),h);else for(var u=0;u<m;u++)l[h+u]=c[d+u]},flattenChunks:function(l){var c,d,m,h,u,g;for(c=m=0,d=l.length;c<d;c++)m+=l[c].length;for(g=new Uint8Array(m),c=h=0,d=l.length;c<d;c++)u=l[c],g.set(u,h),h+=u.length;return g}},o={arraySet:function(l,c,d,m,h){for(var u=0;u<m;u++)l[h+u]=c[d+u]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(m,h){if(h<65537&&(m.subarray&&o||!m.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(m,h));for(var u="",g=0;g<h;g++)u+=String.fromCharCode(m[g]);return u}l[254]=l[254]=1,r.string2buf=function(m){var h,u,g,_,p,f=m.length,v=0;for(_=0;_<f;_++)(64512&(u=m.charCodeAt(_)))==55296&&_+1<f&&(64512&(g=m.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),_++),v+=u<128?1:u<2048?2:u<65536?3:4;for(h=new s.Buf8(v),_=p=0;p<v;_++)(64512&(u=m.charCodeAt(_)))==55296&&_+1<f&&(64512&(g=m.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),_++),u<128?h[p++]=u:(u<2048?h[p++]=192|u>>>6:(u<65536?h[p++]=224|u>>>12:(h[p++]=240|u>>>18,h[p++]=128|u>>>12&63),h[p++]=128|u>>>6&63),h[p++]=128|63&u);return h},r.buf2binstring=function(m){return d(m,m.length)},r.binstring2buf=function(m){for(var h=new s.Buf8(m.length),u=0,g=h.length;u<g;u++)h[u]=m.charCodeAt(u);return h},r.buf2string=function(m,h){var u,g,_,p,f=h||m.length,v=new Array(2*f);for(u=g=0;u<f;)if((_=m[u++])<128)v[g++]=_;else if(4<(p=l[_]))v[g++]=65533,u+=p-1;else{for(_&=p===2?31:p===3?15:7;1<p&&u<f;)_=_<<6|63&m[u++],p--;1<p?v[g++]=65533:_<65536?v[g++]=_:(_-=65536,v[g++]=55296|_>>10&1023,v[g++]=56320|1023&_)}return d(v,g)},r.utf8border=function(m,h){var u;for((h=h||m.length)>m.length&&(h=m.length),u=h-1;0<=u&&(192&m[u])==128;)u--;return u<0||u===0?h:u+l[m[u]]>h?u:h}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,a,o,l){for(var c=65535&s|0,d=s>>>16&65535|0,m=0;o!==0;){for(o-=m=2e3<o?2e3:o;d=d+(c=c+a[l++]|0)|0,--m;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();n.exports=function(a,o,l,c){var d=s,m=c+l;a^=-1;for(var h=c;h<m;h++)a=a>>>8^d[255&(a^o[h])];return-1^a}},{}],46:[function(e,n,r){var s,a=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),d=e("./messages"),m=0,h=4,u=0,g=-2,_=-1,p=4,f=2,v=8,S=9,w=286,A=30,P=19,D=2*w+1,E=15,T=3,z=258,F=z+T+1,R=42,L=113,x=1,O=2,X=3,B=4;function at(y,J){return y.msg=d[J],J}function q(y){return(y<<1)-(4<y?9:0)}function ct(y){for(var J=y.length;0<=--J;)y[J]=0}function H(y){var J=y.state,Y=J.pending;Y>y.avail_out&&(Y=y.avail_out),Y!==0&&(a.arraySet(y.output,J.pending_buf,J.pending_out,Y,y.next_out),y.next_out+=Y,J.pending_out+=Y,y.total_out+=Y,y.avail_out-=Y,J.pending-=Y,J.pending===0&&(J.pending_out=0))}function k(y,J){o._tr_flush_block(y,0<=y.block_start?y.block_start:-1,y.strstart-y.block_start,J),y.block_start=y.strstart,H(y.strm)}function dt(y,J){y.pending_buf[y.pending++]=J}function gt(y,J){y.pending_buf[y.pending++]=J>>>8&255,y.pending_buf[y.pending++]=255&J}function ft(y,J){var Y,U,M=y.max_chain_length,W=y.strstart,Q=y.prev_length,rt=y.nice_match,V=y.strstart>y.w_size-F?y.strstart-(y.w_size-F):0,C=y.window,b=y.w_mask,N=y.prev,Z=y.strstart+z,nt=C[W+Q-1],$=C[W+Q];y.prev_length>=y.good_match&&(M>>=2),rt>y.lookahead&&(rt=y.lookahead);do if(C[(Y=J)+Q]===$&&C[Y+Q-1]===nt&&C[Y]===C[W]&&C[++Y]===C[W+1]){W+=2,Y++;do;while(C[++W]===C[++Y]&&C[++W]===C[++Y]&&C[++W]===C[++Y]&&C[++W]===C[++Y]&&C[++W]===C[++Y]&&C[++W]===C[++Y]&&C[++W]===C[++Y]&&C[++W]===C[++Y]&&W<Z);if(U=z-(Z-W),W=Z-z,Q<U){if(y.match_start=J,rt<=(Q=U))break;nt=C[W+Q-1],$=C[W+Q]}}while((J=N[J&b])>V&&--M!=0);return Q<=y.lookahead?Q:y.lookahead}function it(y){var J,Y,U,M,W,Q,rt,V,C,b,N=y.w_size;do{if(M=y.window_size-y.lookahead-y.strstart,y.strstart>=N+(N-F)){for(a.arraySet(y.window,y.window,N,N,0),y.match_start-=N,y.strstart-=N,y.block_start-=N,J=Y=y.hash_size;U=y.head[--J],y.head[J]=N<=U?U-N:0,--Y;);for(J=Y=N;U=y.prev[--J],y.prev[J]=N<=U?U-N:0,--Y;);M+=N}if(y.strm.avail_in===0)break;if(Q=y.strm,rt=y.window,V=y.strstart+y.lookahead,C=M,b=void 0,b=Q.avail_in,C<b&&(b=C),Y=b===0?0:(Q.avail_in-=b,a.arraySet(rt,Q.input,Q.next_in,b,V),Q.state.wrap===1?Q.adler=l(Q.adler,rt,b,V):Q.state.wrap===2&&(Q.adler=c(Q.adler,rt,b,V)),Q.next_in+=b,Q.total_in+=b,b),y.lookahead+=Y,y.lookahead+y.insert>=T)for(W=y.strstart-y.insert,y.ins_h=y.window[W],y.ins_h=(y.ins_h<<y.hash_shift^y.window[W+1])&y.hash_mask;y.insert&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[W+T-1])&y.hash_mask,y.prev[W&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=W,W++,y.insert--,!(y.lookahead+y.insert<T)););}while(y.lookahead<F&&y.strm.avail_in!==0)}function ht(y,J){for(var Y,U;;){if(y.lookahead<F){if(it(y),y.lookahead<F&&J===m)return x;if(y.lookahead===0)break}if(Y=0,y.lookahead>=T&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+T-1])&y.hash_mask,Y=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),Y!==0&&y.strstart-Y<=y.w_size-F&&(y.match_length=ft(y,Y)),y.match_length>=T)if(U=o._tr_tally(y,y.strstart-y.match_start,y.match_length-T),y.lookahead-=y.match_length,y.match_length<=y.max_lazy_match&&y.lookahead>=T){for(y.match_length--;y.strstart++,y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+T-1])&y.hash_mask,Y=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart,--y.match_length!=0;);y.strstart++}else y.strstart+=y.match_length,y.match_length=0,y.ins_h=y.window[y.strstart],y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+1])&y.hash_mask;else U=o._tr_tally(y,0,y.window[y.strstart]),y.lookahead--,y.strstart++;if(U&&(k(y,!1),y.strm.avail_out===0))return x}return y.insert=y.strstart<T-1?y.strstart:T-1,J===h?(k(y,!0),y.strm.avail_out===0?X:B):y.last_lit&&(k(y,!1),y.strm.avail_out===0)?x:O}function lt(y,J){for(var Y,U,M;;){if(y.lookahead<F){if(it(y),y.lookahead<F&&J===m)return x;if(y.lookahead===0)break}if(Y=0,y.lookahead>=T&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+T-1])&y.hash_mask,Y=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),y.prev_length=y.match_length,y.prev_match=y.match_start,y.match_length=T-1,Y!==0&&y.prev_length<y.max_lazy_match&&y.strstart-Y<=y.w_size-F&&(y.match_length=ft(y,Y),y.match_length<=5&&(y.strategy===1||y.match_length===T&&4096<y.strstart-y.match_start)&&(y.match_length=T-1)),y.prev_length>=T&&y.match_length<=y.prev_length){for(M=y.strstart+y.lookahead-T,U=o._tr_tally(y,y.strstart-1-y.prev_match,y.prev_length-T),y.lookahead-=y.prev_length-1,y.prev_length-=2;++y.strstart<=M&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+T-1])&y.hash_mask,Y=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),--y.prev_length!=0;);if(y.match_available=0,y.match_length=T-1,y.strstart++,U&&(k(y,!1),y.strm.avail_out===0))return x}else if(y.match_available){if((U=o._tr_tally(y,0,y.window[y.strstart-1]))&&k(y,!1),y.strstart++,y.lookahead--,y.strm.avail_out===0)return x}else y.match_available=1,y.strstart++,y.lookahead--}return y.match_available&&(U=o._tr_tally(y,0,y.window[y.strstart-1]),y.match_available=0),y.insert=y.strstart<T-1?y.strstart:T-1,J===h?(k(y,!0),y.strm.avail_out===0?X:B):y.last_lit&&(k(y,!1),y.strm.avail_out===0)?x:O}function yt(y,J,Y,U,M){this.good_length=y,this.max_lazy=J,this.nice_length=Y,this.max_chain=U,this.func=M}function wt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*D),this.dyn_dtree=new a.Buf16(2*(2*A+1)),this.bl_tree=new a.Buf16(2*(2*P+1)),ct(this.dyn_ltree),ct(this.dyn_dtree),ct(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(E+1),this.heap=new a.Buf16(2*w+1),ct(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*w+1),ct(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Mt(y){var J;return y&&y.state?(y.total_in=y.total_out=0,y.data_type=f,(J=y.state).pending=0,J.pending_out=0,J.wrap<0&&(J.wrap=-J.wrap),J.status=J.wrap?R:L,y.adler=J.wrap===2?0:1,J.last_flush=m,o._tr_init(J),u):at(y,g)}function Wt(y){var J=Mt(y);return J===u&&(function(Y){Y.window_size=2*Y.w_size,ct(Y.head),Y.max_lazy_match=s[Y.level].max_lazy,Y.good_match=s[Y.level].good_length,Y.nice_match=s[Y.level].nice_length,Y.max_chain_length=s[Y.level].max_chain,Y.strstart=0,Y.block_start=0,Y.lookahead=0,Y.insert=0,Y.match_length=Y.prev_length=T-1,Y.match_available=0,Y.ins_h=0})(y.state),J}function zt(y,J,Y,U,M,W){if(!y)return g;var Q=1;if(J===_&&(J=6),U<0?(Q=0,U=-U):15<U&&(Q=2,U-=16),M<1||S<M||Y!==v||U<8||15<U||J<0||9<J||W<0||p<W)return at(y,g);U===8&&(U=9);var rt=new wt;return(y.state=rt).strm=y,rt.wrap=Q,rt.gzhead=null,rt.w_bits=U,rt.w_size=1<<rt.w_bits,rt.w_mask=rt.w_size-1,rt.hash_bits=M+7,rt.hash_size=1<<rt.hash_bits,rt.hash_mask=rt.hash_size-1,rt.hash_shift=~~((rt.hash_bits+T-1)/T),rt.window=new a.Buf8(2*rt.w_size),rt.head=new a.Buf16(rt.hash_size),rt.prev=new a.Buf16(rt.w_size),rt.lit_bufsize=1<<M+6,rt.pending_buf_size=4*rt.lit_bufsize,rt.pending_buf=new a.Buf8(rt.pending_buf_size),rt.d_buf=1*rt.lit_bufsize,rt.l_buf=3*rt.lit_bufsize,rt.level=J,rt.strategy=W,rt.method=Y,Wt(y)}s=[new yt(0,0,0,0,function(y,J){var Y=65535;for(Y>y.pending_buf_size-5&&(Y=y.pending_buf_size-5);;){if(y.lookahead<=1){if(it(y),y.lookahead===0&&J===m)return x;if(y.lookahead===0)break}y.strstart+=y.lookahead,y.lookahead=0;var U=y.block_start+Y;if((y.strstart===0||y.strstart>=U)&&(y.lookahead=y.strstart-U,y.strstart=U,k(y,!1),y.strm.avail_out===0)||y.strstart-y.block_start>=y.w_size-F&&(k(y,!1),y.strm.avail_out===0))return x}return y.insert=0,J===h?(k(y,!0),y.strm.avail_out===0?X:B):(y.strstart>y.block_start&&(k(y,!1),y.strm.avail_out),x)}),new yt(4,4,8,4,ht),new yt(4,5,16,8,ht),new yt(4,6,32,32,ht),new yt(4,4,16,16,lt),new yt(8,16,32,32,lt),new yt(8,16,128,128,lt),new yt(8,32,128,256,lt),new yt(32,128,258,1024,lt),new yt(32,258,258,4096,lt)],r.deflateInit=function(y,J){return zt(y,J,v,15,8,0)},r.deflateInit2=zt,r.deflateReset=Wt,r.deflateResetKeep=Mt,r.deflateSetHeader=function(y,J){return y&&y.state?y.state.wrap!==2?g:(y.state.gzhead=J,u):g},r.deflate=function(y,J){var Y,U,M,W;if(!y||!y.state||5<J||J<0)return y?at(y,g):g;if(U=y.state,!y.output||!y.input&&y.avail_in!==0||U.status===666&&J!==h)return at(y,y.avail_out===0?-5:g);if(U.strm=y,Y=U.last_flush,U.last_flush=J,U.status===R)if(U.wrap===2)y.adler=0,dt(U,31),dt(U,139),dt(U,8),U.gzhead?(dt(U,(U.gzhead.text?1:0)+(U.gzhead.hcrc?2:0)+(U.gzhead.extra?4:0)+(U.gzhead.name?8:0)+(U.gzhead.comment?16:0)),dt(U,255&U.gzhead.time),dt(U,U.gzhead.time>>8&255),dt(U,U.gzhead.time>>16&255),dt(U,U.gzhead.time>>24&255),dt(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),dt(U,255&U.gzhead.os),U.gzhead.extra&&U.gzhead.extra.length&&(dt(U,255&U.gzhead.extra.length),dt(U,U.gzhead.extra.length>>8&255)),U.gzhead.hcrc&&(y.adler=c(y.adler,U.pending_buf,U.pending,0)),U.gzindex=0,U.status=69):(dt(U,0),dt(U,0),dt(U,0),dt(U,0),dt(U,0),dt(U,U.level===9?2:2<=U.strategy||U.level<2?4:0),dt(U,3),U.status=L);else{var Q=v+(U.w_bits-8<<4)<<8;Q|=(2<=U.strategy||U.level<2?0:U.level<6?1:U.level===6?2:3)<<6,U.strstart!==0&&(Q|=32),Q+=31-Q%31,U.status=L,gt(U,Q),U.strstart!==0&&(gt(U,y.adler>>>16),gt(U,65535&y.adler)),y.adler=1}if(U.status===69)if(U.gzhead.extra){for(M=U.pending;U.gzindex<(65535&U.gzhead.extra.length)&&(U.pending!==U.pending_buf_size||(U.gzhead.hcrc&&U.pending>M&&(y.adler=c(y.adler,U.pending_buf,U.pending-M,M)),H(y),M=U.pending,U.pending!==U.pending_buf_size));)dt(U,255&U.gzhead.extra[U.gzindex]),U.gzindex++;U.gzhead.hcrc&&U.pending>M&&(y.adler=c(y.adler,U.pending_buf,U.pending-M,M)),U.gzindex===U.gzhead.extra.length&&(U.gzindex=0,U.status=73)}else U.status=73;if(U.status===73)if(U.gzhead.name){M=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>M&&(y.adler=c(y.adler,U.pending_buf,U.pending-M,M)),H(y),M=U.pending,U.pending===U.pending_buf_size)){W=1;break}W=U.gzindex<U.gzhead.name.length?255&U.gzhead.name.charCodeAt(U.gzindex++):0,dt(U,W)}while(W!==0);U.gzhead.hcrc&&U.pending>M&&(y.adler=c(y.adler,U.pending_buf,U.pending-M,M)),W===0&&(U.gzindex=0,U.status=91)}else U.status=91;if(U.status===91)if(U.gzhead.comment){M=U.pending;do{if(U.pending===U.pending_buf_size&&(U.gzhead.hcrc&&U.pending>M&&(y.adler=c(y.adler,U.pending_buf,U.pending-M,M)),H(y),M=U.pending,U.pending===U.pending_buf_size)){W=1;break}W=U.gzindex<U.gzhead.comment.length?255&U.gzhead.comment.charCodeAt(U.gzindex++):0,dt(U,W)}while(W!==0);U.gzhead.hcrc&&U.pending>M&&(y.adler=c(y.adler,U.pending_buf,U.pending-M,M)),W===0&&(U.status=103)}else U.status=103;if(U.status===103&&(U.gzhead.hcrc?(U.pending+2>U.pending_buf_size&&H(y),U.pending+2<=U.pending_buf_size&&(dt(U,255&y.adler),dt(U,y.adler>>8&255),y.adler=0,U.status=L)):U.status=L),U.pending!==0){if(H(y),y.avail_out===0)return U.last_flush=-1,u}else if(y.avail_in===0&&q(J)<=q(Y)&&J!==h)return at(y,-5);if(U.status===666&&y.avail_in!==0)return at(y,-5);if(y.avail_in!==0||U.lookahead!==0||J!==m&&U.status!==666){var rt=U.strategy===2?(function(V,C){for(var b;;){if(V.lookahead===0&&(it(V),V.lookahead===0)){if(C===m)return x;break}if(V.match_length=0,b=o._tr_tally(V,0,V.window[V.strstart]),V.lookahead--,V.strstart++,b&&(k(V,!1),V.strm.avail_out===0))return x}return V.insert=0,C===h?(k(V,!0),V.strm.avail_out===0?X:B):V.last_lit&&(k(V,!1),V.strm.avail_out===0)?x:O})(U,J):U.strategy===3?(function(V,C){for(var b,N,Z,nt,$=V.window;;){if(V.lookahead<=z){if(it(V),V.lookahead<=z&&C===m)return x;if(V.lookahead===0)break}if(V.match_length=0,V.lookahead>=T&&0<V.strstart&&(N=$[Z=V.strstart-1])===$[++Z]&&N===$[++Z]&&N===$[++Z]){nt=V.strstart+z;do;while(N===$[++Z]&&N===$[++Z]&&N===$[++Z]&&N===$[++Z]&&N===$[++Z]&&N===$[++Z]&&N===$[++Z]&&N===$[++Z]&&Z<nt);V.match_length=z-(nt-Z),V.match_length>V.lookahead&&(V.match_length=V.lookahead)}if(V.match_length>=T?(b=o._tr_tally(V,1,V.match_length-T),V.lookahead-=V.match_length,V.strstart+=V.match_length,V.match_length=0):(b=o._tr_tally(V,0,V.window[V.strstart]),V.lookahead--,V.strstart++),b&&(k(V,!1),V.strm.avail_out===0))return x}return V.insert=0,C===h?(k(V,!0),V.strm.avail_out===0?X:B):V.last_lit&&(k(V,!1),V.strm.avail_out===0)?x:O})(U,J):s[U.level].func(U,J);if(rt!==X&&rt!==B||(U.status=666),rt===x||rt===X)return y.avail_out===0&&(U.last_flush=-1),u;if(rt===O&&(J===1?o._tr_align(U):J!==5&&(o._tr_stored_block(U,0,0,!1),J===3&&(ct(U.head),U.lookahead===0&&(U.strstart=0,U.block_start=0,U.insert=0))),H(y),y.avail_out===0))return U.last_flush=-1,u}return J!==h?u:U.wrap<=0?1:(U.wrap===2?(dt(U,255&y.adler),dt(U,y.adler>>8&255),dt(U,y.adler>>16&255),dt(U,y.adler>>24&255),dt(U,255&y.total_in),dt(U,y.total_in>>8&255),dt(U,y.total_in>>16&255),dt(U,y.total_in>>24&255)):(gt(U,y.adler>>>16),gt(U,65535&y.adler)),H(y),0<U.wrap&&(U.wrap=-U.wrap),U.pending!==0?u:1)},r.deflateEnd=function(y){var J;return y&&y.state?(J=y.state.status)!==R&&J!==69&&J!==73&&J!==91&&J!==103&&J!==L&&J!==666?at(y,g):(y.state=null,J===L?at(y,-3):u):g},r.deflateSetDictionary=function(y,J){var Y,U,M,W,Q,rt,V,C,b=J.length;if(!y||!y.state||(W=(Y=y.state).wrap)===2||W===1&&Y.status!==R||Y.lookahead)return g;for(W===1&&(y.adler=l(y.adler,J,b,0)),Y.wrap=0,b>=Y.w_size&&(W===0&&(ct(Y.head),Y.strstart=0,Y.block_start=0,Y.insert=0),C=new a.Buf8(Y.w_size),a.arraySet(C,J,b-Y.w_size,Y.w_size,0),J=C,b=Y.w_size),Q=y.avail_in,rt=y.next_in,V=y.input,y.avail_in=b,y.next_in=0,y.input=J,it(Y);Y.lookahead>=T;){for(U=Y.strstart,M=Y.lookahead-(T-1);Y.ins_h=(Y.ins_h<<Y.hash_shift^Y.window[U+T-1])&Y.hash_mask,Y.prev[U&Y.w_mask]=Y.head[Y.ins_h],Y.head[Y.ins_h]=U,U++,--M;);Y.strstart=U,Y.lookahead=T-1,it(Y)}return Y.strstart+=Y.lookahead,Y.block_start=Y.strstart,Y.insert=Y.lookahead,Y.lookahead=0,Y.match_length=Y.prev_length=T-1,Y.match_available=0,y.next_in=rt,y.input=V,y.avail_in=Q,Y.wrap=W,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,a){var o,l,c,d,m,h,u,g,_,p,f,v,S,w,A,P,D,E,T,z,F,R,L,x,O;o=s.state,l=s.next_in,x=s.input,c=l+(s.avail_in-5),d=s.next_out,O=s.output,m=d-(a-s.avail_out),h=d+(s.avail_out-257),u=o.dmax,g=o.wsize,_=o.whave,p=o.wnext,f=o.window,v=o.hold,S=o.bits,w=o.lencode,A=o.distcode,P=(1<<o.lenbits)-1,D=(1<<o.distbits)-1;t:do{S<15&&(v+=x[l++]<<S,S+=8,v+=x[l++]<<S,S+=8),E=w[v&P];e:for(;;){if(v>>>=T=E>>>24,S-=T,(T=E>>>16&255)===0)O[d++]=65535&E;else{if(!(16&T)){if((64&T)==0){E=w[(65535&E)+(v&(1<<T)-1)];continue e}if(32&T){o.mode=12;break t}s.msg="invalid literal/length code",o.mode=30;break t}z=65535&E,(T&=15)&&(S<T&&(v+=x[l++]<<S,S+=8),z+=v&(1<<T)-1,v>>>=T,S-=T),S<15&&(v+=x[l++]<<S,S+=8,v+=x[l++]<<S,S+=8),E=A[v&D];n:for(;;){if(v>>>=T=E>>>24,S-=T,!(16&(T=E>>>16&255))){if((64&T)==0){E=A[(65535&E)+(v&(1<<T)-1)];continue n}s.msg="invalid distance code",o.mode=30;break t}if(F=65535&E,S<(T&=15)&&(v+=x[l++]<<S,(S+=8)<T&&(v+=x[l++]<<S,S+=8)),u<(F+=v&(1<<T)-1)){s.msg="invalid distance too far back",o.mode=30;break t}if(v>>>=T,S-=T,(T=d-m)<F){if(_<(T=F-T)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break t}if(L=f,(R=0)===p){if(R+=g-T,T<z){for(z-=T;O[d++]=f[R++],--T;);R=d-F,L=O}}else if(p<T){if(R+=g+p-T,(T-=p)<z){for(z-=T;O[d++]=f[R++],--T;);if(R=0,p<z){for(z-=T=p;O[d++]=f[R++],--T;);R=d-F,L=O}}}else if(R+=p-T,T<z){for(z-=T;O[d++]=f[R++],--T;);R=d-F,L=O}for(;2<z;)O[d++]=L[R++],O[d++]=L[R++],O[d++]=L[R++],z-=3;z&&(O[d++]=L[R++],1<z&&(O[d++]=L[R++]))}else{for(R=d-F;O[d++]=O[R++],O[d++]=O[R++],O[d++]=O[R++],2<(z-=3););z&&(O[d++]=O[R++],1<z&&(O[d++]=O[R++]))}break}}break}}while(l<c&&d<h);l-=z=S>>3,v&=(1<<(S-=z<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=d<h?h-d+257:257-(d-h),o.hold=v,o.bits=S}},{}],49:[function(e,n,r){var s=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),d=1,m=2,h=0,u=-2,g=1,_=852,p=592;function f(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(R){var L;return R&&R.state?(L=R.state,R.total_in=R.total_out=L.total=0,R.msg="",L.wrap&&(R.adler=1&L.wrap),L.mode=g,L.last=0,L.havedict=0,L.dmax=32768,L.head=null,L.hold=0,L.bits=0,L.lencode=L.lendyn=new s.Buf32(_),L.distcode=L.distdyn=new s.Buf32(p),L.sane=1,L.back=-1,h):u}function w(R){var L;return R&&R.state?((L=R.state).wsize=0,L.whave=0,L.wnext=0,S(R)):u}function A(R,L){var x,O;return R&&R.state?(O=R.state,L<0?(x=0,L=-L):(x=1+(L>>4),L<48&&(L&=15)),L&&(L<8||15<L)?u:(O.window!==null&&O.wbits!==L&&(O.window=null),O.wrap=x,O.wbits=L,w(R))):u}function P(R,L){var x,O;return R?(O=new v,(R.state=O).window=null,(x=A(R,L))!==h&&(R.state=null),x):u}var D,E,T=!0;function z(R){if(T){var L;for(D=new s.Buf32(512),E=new s.Buf32(32),L=0;L<144;)R.lens[L++]=8;for(;L<256;)R.lens[L++]=9;for(;L<280;)R.lens[L++]=7;for(;L<288;)R.lens[L++]=8;for(c(d,R.lens,0,288,D,0,R.work,{bits:9}),L=0;L<32;)R.lens[L++]=5;c(m,R.lens,0,32,E,0,R.work,{bits:5}),T=!1}R.lencode=D,R.lenbits=9,R.distcode=E,R.distbits=5}function F(R,L,x,O){var X,B=R.state;return B.window===null&&(B.wsize=1<<B.wbits,B.wnext=0,B.whave=0,B.window=new s.Buf8(B.wsize)),O>=B.wsize?(s.arraySet(B.window,L,x-B.wsize,B.wsize,0),B.wnext=0,B.whave=B.wsize):(O<(X=B.wsize-B.wnext)&&(X=O),s.arraySet(B.window,L,x-O,X,B.wnext),(O-=X)?(s.arraySet(B.window,L,x-O,O,0),B.wnext=O,B.whave=B.wsize):(B.wnext+=X,B.wnext===B.wsize&&(B.wnext=0),B.whave<B.wsize&&(B.whave+=X))),0}r.inflateReset=w,r.inflateReset2=A,r.inflateResetKeep=S,r.inflateInit=function(R){return P(R,15)},r.inflateInit2=P,r.inflate=function(R,L){var x,O,X,B,at,q,ct,H,k,dt,gt,ft,it,ht,lt,yt,wt,Mt,Wt,zt,y,J,Y,U,M=0,W=new s.Buf8(4),Q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return u;(x=R.state).mode===12&&(x.mode=13),at=R.next_out,X=R.output,ct=R.avail_out,B=R.next_in,O=R.input,q=R.avail_in,H=x.hold,k=x.bits,dt=q,gt=ct,J=h;t:for(;;)switch(x.mode){case g:if(x.wrap===0){x.mode=13;break}for(;k<16;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if(2&x.wrap&&H===35615){W[x.check=0]=255&H,W[1]=H>>>8&255,x.check=o(x.check,W,2,0),k=H=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&H)<<8)+(H>>8))%31){R.msg="incorrect header check",x.mode=30;break}if((15&H)!=8){R.msg="unknown compression method",x.mode=30;break}if(k-=4,y=8+(15&(H>>>=4)),x.wbits===0)x.wbits=y;else if(y>x.wbits){R.msg="invalid window size",x.mode=30;break}x.dmax=1<<y,R.adler=x.check=1,x.mode=512&H?10:12,k=H=0;break;case 2:for(;k<16;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if(x.flags=H,(255&x.flags)!=8){R.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){R.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=H>>8&1),512&x.flags&&(W[0]=255&H,W[1]=H>>>8&255,x.check=o(x.check,W,2,0)),k=H=0,x.mode=3;case 3:for(;k<32;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}x.head&&(x.head.time=H),512&x.flags&&(W[0]=255&H,W[1]=H>>>8&255,W[2]=H>>>16&255,W[3]=H>>>24&255,x.check=o(x.check,W,4,0)),k=H=0,x.mode=4;case 4:for(;k<16;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}x.head&&(x.head.xflags=255&H,x.head.os=H>>8),512&x.flags&&(W[0]=255&H,W[1]=H>>>8&255,x.check=o(x.check,W,2,0)),k=H=0,x.mode=5;case 5:if(1024&x.flags){for(;k<16;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}x.length=H,x.head&&(x.head.extra_len=H),512&x.flags&&(W[0]=255&H,W[1]=H>>>8&255,x.check=o(x.check,W,2,0)),k=H=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(q<(ft=x.length)&&(ft=q),ft&&(x.head&&(y=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),s.arraySet(x.head.extra,O,B,ft,y)),512&x.flags&&(x.check=o(x.check,O,ft,B)),q-=ft,B+=ft,x.length-=ft),x.length))break t;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(q===0)break t;for(ft=0;y=O[B+ft++],x.head&&y&&x.length<65536&&(x.head.name+=String.fromCharCode(y)),y&&ft<q;);if(512&x.flags&&(x.check=o(x.check,O,ft,B)),q-=ft,B+=ft,y)break t}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(q===0)break t;for(ft=0;y=O[B+ft++],x.head&&y&&x.length<65536&&(x.head.comment+=String.fromCharCode(y)),y&&ft<q;);if(512&x.flags&&(x.check=o(x.check,O,ft,B)),q-=ft,B+=ft,y)break t}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;k<16;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if(H!==(65535&x.check)){R.msg="header crc mismatch",x.mode=30;break}k=H=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),R.adler=x.check=0,x.mode=12;break;case 10:for(;k<32;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}R.adler=x.check=f(H),k=H=0,x.mode=11;case 11:if(x.havedict===0)return R.next_out=at,R.avail_out=ct,R.next_in=B,R.avail_in=q,x.hold=H,x.bits=k,2;R.adler=x.check=1,x.mode=12;case 12:if(L===5||L===6)break t;case 13:if(x.last){H>>>=7&k,k-=7&k,x.mode=27;break}for(;k<3;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}switch(x.last=1&H,k-=1,3&(H>>>=1)){case 0:x.mode=14;break;case 1:if(z(x),x.mode=20,L!==6)break;H>>>=2,k-=2;break t;case 2:x.mode=17;break;case 3:R.msg="invalid block type",x.mode=30}H>>>=2,k-=2;break;case 14:for(H>>>=7&k,k-=7&k;k<32;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if((65535&H)!=(H>>>16^65535)){R.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&H,k=H=0,x.mode=15,L===6)break t;case 15:x.mode=16;case 16:if(ft=x.length){if(q<ft&&(ft=q),ct<ft&&(ft=ct),ft===0)break t;s.arraySet(X,O,B,ft,at),q-=ft,B+=ft,ct-=ft,at+=ft,x.length-=ft;break}x.mode=12;break;case 17:for(;k<14;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if(x.nlen=257+(31&H),H>>>=5,k-=5,x.ndist=1+(31&H),H>>>=5,k-=5,x.ncode=4+(15&H),H>>>=4,k-=4,286<x.nlen||30<x.ndist){R.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;k<3;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}x.lens[Q[x.have++]]=7&H,H>>>=3,k-=3}for(;x.have<19;)x.lens[Q[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,Y={bits:x.lenbits},J=c(0,x.lens,0,19,x.lencode,0,x.work,Y),x.lenbits=Y.bits,J){R.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;yt=(M=x.lencode[H&(1<<x.lenbits)-1])>>>16&255,wt=65535&M,!((lt=M>>>24)<=k);){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if(wt<16)H>>>=lt,k-=lt,x.lens[x.have++]=wt;else{if(wt===16){for(U=lt+2;k<U;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if(H>>>=lt,k-=lt,x.have===0){R.msg="invalid bit length repeat",x.mode=30;break}y=x.lens[x.have-1],ft=3+(3&H),H>>>=2,k-=2}else if(wt===17){for(U=lt+3;k<U;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}k-=lt,y=0,ft=3+(7&(H>>>=lt)),H>>>=3,k-=3}else{for(U=lt+7;k<U;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}k-=lt,y=0,ft=11+(127&(H>>>=lt)),H>>>=7,k-=7}if(x.have+ft>x.nlen+x.ndist){R.msg="invalid bit length repeat",x.mode=30;break}for(;ft--;)x.lens[x.have++]=y}}if(x.mode===30)break;if(x.lens[256]===0){R.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,Y={bits:x.lenbits},J=c(d,x.lens,0,x.nlen,x.lencode,0,x.work,Y),x.lenbits=Y.bits,J){R.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,Y={bits:x.distbits},J=c(m,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,Y),x.distbits=Y.bits,J){R.msg="invalid distances set",x.mode=30;break}if(x.mode=20,L===6)break t;case 20:x.mode=21;case 21:if(6<=q&&258<=ct){R.next_out=at,R.avail_out=ct,R.next_in=B,R.avail_in=q,x.hold=H,x.bits=k,l(R,gt),at=R.next_out,X=R.output,ct=R.avail_out,B=R.next_in,O=R.input,q=R.avail_in,H=x.hold,k=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;yt=(M=x.lencode[H&(1<<x.lenbits)-1])>>>16&255,wt=65535&M,!((lt=M>>>24)<=k);){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if(yt&&(240&yt)==0){for(Mt=lt,Wt=yt,zt=wt;yt=(M=x.lencode[zt+((H&(1<<Mt+Wt)-1)>>Mt)])>>>16&255,wt=65535&M,!(Mt+(lt=M>>>24)<=k);){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}H>>>=Mt,k-=Mt,x.back+=Mt}if(H>>>=lt,k-=lt,x.back+=lt,x.length=wt,yt===0){x.mode=26;break}if(32&yt){x.back=-1,x.mode=12;break}if(64&yt){R.msg="invalid literal/length code",x.mode=30;break}x.extra=15&yt,x.mode=22;case 22:if(x.extra){for(U=x.extra;k<U;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}x.length+=H&(1<<x.extra)-1,H>>>=x.extra,k-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;yt=(M=x.distcode[H&(1<<x.distbits)-1])>>>16&255,wt=65535&M,!((lt=M>>>24)<=k);){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if((240&yt)==0){for(Mt=lt,Wt=yt,zt=wt;yt=(M=x.distcode[zt+((H&(1<<Mt+Wt)-1)>>Mt)])>>>16&255,wt=65535&M,!(Mt+(lt=M>>>24)<=k);){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}H>>>=Mt,k-=Mt,x.back+=Mt}if(H>>>=lt,k-=lt,x.back+=lt,64&yt){R.msg="invalid distance code",x.mode=30;break}x.offset=wt,x.extra=15&yt,x.mode=24;case 24:if(x.extra){for(U=x.extra;k<U;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}x.offset+=H&(1<<x.extra)-1,H>>>=x.extra,k-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){R.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(ct===0)break t;if(ft=gt-ct,x.offset>ft){if((ft=x.offset-ft)>x.whave&&x.sane){R.msg="invalid distance too far back",x.mode=30;break}it=ft>x.wnext?(ft-=x.wnext,x.wsize-ft):x.wnext-ft,ft>x.length&&(ft=x.length),ht=x.window}else ht=X,it=at-x.offset,ft=x.length;for(ct<ft&&(ft=ct),ct-=ft,x.length-=ft;X[at++]=ht[it++],--ft;);x.length===0&&(x.mode=21);break;case 26:if(ct===0)break t;X[at++]=x.length,ct--,x.mode=21;break;case 27:if(x.wrap){for(;k<32;){if(q===0)break t;q--,H|=O[B++]<<k,k+=8}if(gt-=ct,R.total_out+=gt,x.total+=gt,gt&&(R.adler=x.check=x.flags?o(x.check,X,gt,at-gt):a(x.check,X,gt,at-gt)),gt=ct,(x.flags?H:f(H))!==x.check){R.msg="incorrect data check",x.mode=30;break}k=H=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;k<32;){if(q===0)break t;q--,H+=O[B++]<<k,k+=8}if(H!==(4294967295&x.total)){R.msg="incorrect length check",x.mode=30;break}k=H=0}x.mode=29;case 29:J=1;break t;case 30:J=-3;break t;case 31:return-4;default:return u}return R.next_out=at,R.avail_out=ct,R.next_in=B,R.avail_in=q,x.hold=H,x.bits=k,(x.wsize||gt!==R.avail_out&&x.mode<30&&(x.mode<27||L!==4))&&F(R,R.output,R.next_out,gt-R.avail_out)?(x.mode=31,-4):(dt-=R.avail_in,gt-=R.avail_out,R.total_in+=dt,R.total_out+=gt,x.total+=gt,x.wrap&&gt&&(R.adler=x.check=x.flags?o(x.check,X,gt,R.next_out-gt):a(x.check,X,gt,R.next_out-gt)),R.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(dt==0&&gt===0||L===4)&&J===h&&(J=-5),J)},r.inflateEnd=function(R){if(!R||!R.state)return u;var L=R.state;return L.window&&(L.window=null),R.state=null,h},r.inflateGetHeader=function(R,L){var x;return R&&R.state?(2&(x=R.state).wrap)==0?u:((x.head=L).done=!1,h):u},r.inflateSetDictionary=function(R,L){var x,O=L.length;return R&&R.state?(x=R.state).wrap!==0&&x.mode!==11?u:x.mode===11&&a(1,L,O,0)!==x.check?-3:F(R,L,O,O)?(x.mode=31,-4):(x.havedict=1,h):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,m,h,u,g,_,p,f){var v,S,w,A,P,D,E,T,z,F=f.bits,R=0,L=0,x=0,O=0,X=0,B=0,at=0,q=0,ct=0,H=0,k=null,dt=0,gt=new s.Buf16(16),ft=new s.Buf16(16),it=null,ht=0;for(R=0;R<=15;R++)gt[R]=0;for(L=0;L<u;L++)gt[m[h+L]]++;for(X=F,O=15;1<=O&&gt[O]===0;O--);if(O<X&&(X=O),O===0)return g[_++]=20971520,g[_++]=20971520,f.bits=1,0;for(x=1;x<O&&gt[x]===0;x++);for(X<x&&(X=x),R=q=1;R<=15;R++)if(q<<=1,(q-=gt[R])<0)return-1;if(0<q&&(d===0||O!==1))return-1;for(ft[1]=0,R=1;R<15;R++)ft[R+1]=ft[R]+gt[R];for(L=0;L<u;L++)m[h+L]!==0&&(p[ft[m[h+L]]++]=L);if(D=d===0?(k=it=p,19):d===1?(k=a,dt-=257,it=o,ht-=257,256):(k=l,it=c,-1),R=x,P=_,at=L=H=0,w=-1,A=(ct=1<<(B=X))-1,d===1&&852<ct||d===2&&592<ct)return 1;for(;;){for(E=R-at,z=p[L]<D?(T=0,p[L]):p[L]>D?(T=it[ht+p[L]],k[dt+p[L]]):(T=96,0),v=1<<R-at,x=S=1<<B;g[P+(H>>at)+(S-=v)]=E<<24|T<<16|z|0,S!==0;);for(v=1<<R-1;H&v;)v>>=1;if(v!==0?(H&=v-1,H+=v):H=0,L++,--gt[R]==0){if(R===O)break;R=m[h+p[L]]}if(X<R&&(H&A)!==w){for(at===0&&(at=X),P+=x,q=1<<(B=R-at);B+at<O&&!((q-=gt[B+at])<=0);)B++,q<<=1;if(ct+=1<<B,d===1&&852<ct||d===2&&592<ct)return 1;g[w=H&A]=X<<24|B<<16|P-_|0}}return H!==0&&(g[P+H]=R-at<<24|64<<16|0),f.bits=X,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),a=0,o=1;function l(M){for(var W=M.length;0<=--W;)M[W]=0}var c=0,d=29,m=256,h=m+1+d,u=30,g=19,_=2*h+1,p=15,f=16,v=7,S=256,w=16,A=17,P=18,D=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],E=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],F=new Array(2*(h+2));l(F);var R=new Array(2*u);l(R);var L=new Array(512);l(L);var x=new Array(256);l(x);var O=new Array(d);l(O);var X,B,at,q=new Array(u);function ct(M,W,Q,rt,V){this.static_tree=M,this.extra_bits=W,this.extra_base=Q,this.elems=rt,this.max_length=V,this.has_stree=M&&M.length}function H(M,W){this.dyn_tree=M,this.max_code=0,this.stat_desc=W}function k(M){return M<256?L[M]:L[256+(M>>>7)]}function dt(M,W){M.pending_buf[M.pending++]=255&W,M.pending_buf[M.pending++]=W>>>8&255}function gt(M,W,Q){M.bi_valid>f-Q?(M.bi_buf|=W<<M.bi_valid&65535,dt(M,M.bi_buf),M.bi_buf=W>>f-M.bi_valid,M.bi_valid+=Q-f):(M.bi_buf|=W<<M.bi_valid&65535,M.bi_valid+=Q)}function ft(M,W,Q){gt(M,Q[2*W],Q[2*W+1])}function it(M,W){for(var Q=0;Q|=1&M,M>>>=1,Q<<=1,0<--W;);return Q>>>1}function ht(M,W,Q){var rt,V,C=new Array(p+1),b=0;for(rt=1;rt<=p;rt++)C[rt]=b=b+Q[rt-1]<<1;for(V=0;V<=W;V++){var N=M[2*V+1];N!==0&&(M[2*V]=it(C[N]++,N))}}function lt(M){var W;for(W=0;W<h;W++)M.dyn_ltree[2*W]=0;for(W=0;W<u;W++)M.dyn_dtree[2*W]=0;for(W=0;W<g;W++)M.bl_tree[2*W]=0;M.dyn_ltree[2*S]=1,M.opt_len=M.static_len=0,M.last_lit=M.matches=0}function yt(M){8<M.bi_valid?dt(M,M.bi_buf):0<M.bi_valid&&(M.pending_buf[M.pending++]=M.bi_buf),M.bi_buf=0,M.bi_valid=0}function wt(M,W,Q,rt){var V=2*W,C=2*Q;return M[V]<M[C]||M[V]===M[C]&&rt[W]<=rt[Q]}function Mt(M,W,Q){for(var rt=M.heap[Q],V=Q<<1;V<=M.heap_len&&(V<M.heap_len&&wt(W,M.heap[V+1],M.heap[V],M.depth)&&V++,!wt(W,rt,M.heap[V],M.depth));)M.heap[Q]=M.heap[V],Q=V,V<<=1;M.heap[Q]=rt}function Wt(M,W,Q){var rt,V,C,b,N=0;if(M.last_lit!==0)for(;rt=M.pending_buf[M.d_buf+2*N]<<8|M.pending_buf[M.d_buf+2*N+1],V=M.pending_buf[M.l_buf+N],N++,rt===0?ft(M,V,W):(ft(M,(C=x[V])+m+1,W),(b=D[C])!==0&&gt(M,V-=O[C],b),ft(M,C=k(--rt),Q),(b=E[C])!==0&&gt(M,rt-=q[C],b)),N<M.last_lit;);ft(M,S,W)}function zt(M,W){var Q,rt,V,C=W.dyn_tree,b=W.stat_desc.static_tree,N=W.stat_desc.has_stree,Z=W.stat_desc.elems,nt=-1;for(M.heap_len=0,M.heap_max=_,Q=0;Q<Z;Q++)C[2*Q]!==0?(M.heap[++M.heap_len]=nt=Q,M.depth[Q]=0):C[2*Q+1]=0;for(;M.heap_len<2;)C[2*(V=M.heap[++M.heap_len]=nt<2?++nt:0)]=1,M.depth[V]=0,M.opt_len--,N&&(M.static_len-=b[2*V+1]);for(W.max_code=nt,Q=M.heap_len>>1;1<=Q;Q--)Mt(M,C,Q);for(V=Z;Q=M.heap[1],M.heap[1]=M.heap[M.heap_len--],Mt(M,C,1),rt=M.heap[1],M.heap[--M.heap_max]=Q,M.heap[--M.heap_max]=rt,C[2*V]=C[2*Q]+C[2*rt],M.depth[V]=(M.depth[Q]>=M.depth[rt]?M.depth[Q]:M.depth[rt])+1,C[2*Q+1]=C[2*rt+1]=V,M.heap[1]=V++,Mt(M,C,1),2<=M.heap_len;);M.heap[--M.heap_max]=M.heap[1],(function($,bt){var pt,Pt,Ot,ut,xt,Dt,Tt=bt.dyn_tree,Et=bt.max_code,At=bt.stat_desc.static_tree,G=bt.stat_desc.has_stree,_t=bt.stat_desc.extra_bits,vt=bt.stat_desc.extra_base,St=bt.stat_desc.max_length,mt=0;for(ut=0;ut<=p;ut++)$.bl_count[ut]=0;for(Tt[2*$.heap[$.heap_max]+1]=0,pt=$.heap_max+1;pt<_;pt++)St<(ut=Tt[2*Tt[2*(Pt=$.heap[pt])+1]+1]+1)&&(ut=St,mt++),Tt[2*Pt+1]=ut,Et<Pt||($.bl_count[ut]++,xt=0,vt<=Pt&&(xt=_t[Pt-vt]),Dt=Tt[2*Pt],$.opt_len+=Dt*(ut+xt),G&&($.static_len+=Dt*(At[2*Pt+1]+xt)));if(mt!==0){do{for(ut=St-1;$.bl_count[ut]===0;)ut--;$.bl_count[ut]--,$.bl_count[ut+1]+=2,$.bl_count[St]--,mt-=2}while(0<mt);for(ut=St;ut!==0;ut--)for(Pt=$.bl_count[ut];Pt!==0;)Et<(Ot=$.heap[--pt])||(Tt[2*Ot+1]!==ut&&($.opt_len+=(ut-Tt[2*Ot+1])*Tt[2*Ot],Tt[2*Ot+1]=ut),Pt--)}})(M,W),ht(C,nt,M.bl_count)}function y(M,W,Q){var rt,V,C=-1,b=W[1],N=0,Z=7,nt=4;for(b===0&&(Z=138,nt=3),W[2*(Q+1)+1]=65535,rt=0;rt<=Q;rt++)V=b,b=W[2*(rt+1)+1],++N<Z&&V===b||(N<nt?M.bl_tree[2*V]+=N:V!==0?(V!==C&&M.bl_tree[2*V]++,M.bl_tree[2*w]++):N<=10?M.bl_tree[2*A]++:M.bl_tree[2*P]++,C=V,nt=(N=0)===b?(Z=138,3):V===b?(Z=6,3):(Z=7,4))}function J(M,W,Q){var rt,V,C=-1,b=W[1],N=0,Z=7,nt=4;for(b===0&&(Z=138,nt=3),rt=0;rt<=Q;rt++)if(V=b,b=W[2*(rt+1)+1],!(++N<Z&&V===b)){if(N<nt)for(;ft(M,V,M.bl_tree),--N!=0;);else V!==0?(V!==C&&(ft(M,V,M.bl_tree),N--),ft(M,w,M.bl_tree),gt(M,N-3,2)):N<=10?(ft(M,A,M.bl_tree),gt(M,N-3,3)):(ft(M,P,M.bl_tree),gt(M,N-11,7));C=V,nt=(N=0)===b?(Z=138,3):V===b?(Z=6,3):(Z=7,4)}}l(q);var Y=!1;function U(M,W,Q,rt){gt(M,(c<<1)+(rt?1:0),3),(function(V,C,b,N){yt(V),dt(V,b),dt(V,~b),s.arraySet(V.pending_buf,V.window,C,b,V.pending),V.pending+=b})(M,W,Q)}r._tr_init=function(M){Y||((function(){var W,Q,rt,V,C,b=new Array(p+1);for(V=rt=0;V<d-1;V++)for(O[V]=rt,W=0;W<1<<D[V];W++)x[rt++]=V;for(x[rt-1]=V,V=C=0;V<16;V++)for(q[V]=C,W=0;W<1<<E[V];W++)L[C++]=V;for(C>>=7;V<u;V++)for(q[V]=C<<7,W=0;W<1<<E[V]-7;W++)L[256+C++]=V;for(Q=0;Q<=p;Q++)b[Q]=0;for(W=0;W<=143;)F[2*W+1]=8,W++,b[8]++;for(;W<=255;)F[2*W+1]=9,W++,b[9]++;for(;W<=279;)F[2*W+1]=7,W++,b[7]++;for(;W<=287;)F[2*W+1]=8,W++,b[8]++;for(ht(F,h+1,b),W=0;W<u;W++)R[2*W+1]=5,R[2*W]=it(W,5);X=new ct(F,D,m+1,h,p),B=new ct(R,E,0,u,p),at=new ct(new Array(0),T,0,g,v)})(),Y=!0),M.l_desc=new H(M.dyn_ltree,X),M.d_desc=new H(M.dyn_dtree,B),M.bl_desc=new H(M.bl_tree,at),M.bi_buf=0,M.bi_valid=0,lt(M)},r._tr_stored_block=U,r._tr_flush_block=function(M,W,Q,rt){var V,C,b=0;0<M.level?(M.strm.data_type===2&&(M.strm.data_type=(function(N){var Z,nt=4093624447;for(Z=0;Z<=31;Z++,nt>>>=1)if(1&nt&&N.dyn_ltree[2*Z]!==0)return a;if(N.dyn_ltree[18]!==0||N.dyn_ltree[20]!==0||N.dyn_ltree[26]!==0)return o;for(Z=32;Z<m;Z++)if(N.dyn_ltree[2*Z]!==0)return o;return a})(M)),zt(M,M.l_desc),zt(M,M.d_desc),b=(function(N){var Z;for(y(N,N.dyn_ltree,N.l_desc.max_code),y(N,N.dyn_dtree,N.d_desc.max_code),zt(N,N.bl_desc),Z=g-1;3<=Z&&N.bl_tree[2*z[Z]+1]===0;Z--);return N.opt_len+=3*(Z+1)+5+5+4,Z})(M),V=M.opt_len+3+7>>>3,(C=M.static_len+3+7>>>3)<=V&&(V=C)):V=C=Q+5,Q+4<=V&&W!==-1?U(M,W,Q,rt):M.strategy===4||C===V?(gt(M,2+(rt?1:0),3),Wt(M,F,R)):(gt(M,4+(rt?1:0),3),(function(N,Z,nt,$){var bt;for(gt(N,Z-257,5),gt(N,nt-1,5),gt(N,$-4,4),bt=0;bt<$;bt++)gt(N,N.bl_tree[2*z[bt]+1],3);J(N,N.dyn_ltree,Z-1),J(N,N.dyn_dtree,nt-1)})(M,M.l_desc.max_code+1,M.d_desc.max_code+1,b+1),Wt(M,M.dyn_ltree,M.dyn_dtree)),lt(M),rt&&yt(M)},r._tr_tally=function(M,W,Q){return M.pending_buf[M.d_buf+2*M.last_lit]=W>>>8&255,M.pending_buf[M.d_buf+2*M.last_lit+1]=255&W,M.pending_buf[M.l_buf+M.last_lit]=255&Q,M.last_lit++,W===0?M.dyn_ltree[2*Q]++:(M.matches++,W--,M.dyn_ltree[2*(x[Q]+m+1)]++,M.dyn_dtree[2*k(W)]++),M.last_lit===M.lit_bufsize-1},r._tr_align=function(M){gt(M,2,3),ft(M,S,F),(function(W){W.bi_valid===16?(dt(W,W.bi_buf),W.bi_buf=0,W.bi_valid=0):8<=W.bi_valid&&(W.pending_buf[W.pending++]=255&W.bi_buf,W.bi_buf>>=8,W.bi_valid-=8)})(M)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,d,m,h=1,u={},g=!1,_=a.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(a);p=p&&p.setTimeout?p:a,l={}.toString.call(a.process)==="[object process]"?function(w){process.nextTick(function(){v(w)})}:(function(){if(a.postMessage&&!a.importScripts){var w=!0,A=a.onmessage;return a.onmessage=function(){w=!1},a.postMessage("","*"),a.onmessage=A,w}})()?(m="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",S,!1):a.attachEvent("onmessage",S),function(w){a.postMessage(m+w,"*")}):a.MessageChannel?((d=new MessageChannel).port1.onmessage=function(w){v(w.data)},function(w){d.port2.postMessage(w)}):_&&"onreadystatechange"in _.createElement("script")?(c=_.documentElement,function(w){var A=_.createElement("script");A.onreadystatechange=function(){v(w),A.onreadystatechange=null,c.removeChild(A),A=null},c.appendChild(A)}):function(w){setTimeout(v,0,w)},p.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var A=new Array(arguments.length-1),P=0;P<A.length;P++)A[P]=arguments[P+1];var D={callback:w,args:A};return u[h]=D,l(h),h++},p.clearImmediate=f}function f(w){delete u[w]}function v(w){if(g)setTimeout(v,0,w);else{var A=u[w];if(A){g=!0;try{(function(P){var D=P.callback,E=P.args;switch(E.length){case 0:D();break;case 1:D(E[0]);break;case 2:D(E[0],E[1]);break;case 3:D(E[0],E[1],E[2]);break;default:D.apply(o,E)}})(A)}finally{f(w),g=!1}}}}function S(w){w.source===a&&typeof w.data=="string"&&w.data.indexOf(m)===0&&v(+w.data.slice(m.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Ps<"u"?Ps:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Wa)),Wa.exports}var M0=S0();const Nu=y0(M0);function b0(i){if(!i||i.length===0)return!1;try{var t=Math.abs(ll(i));return t>1e-9}catch{return!1}}function ar(i){return{x:Number(i.x),y:Number(i.y),z:Number(i.z)}}function E0(i){var t=[],e=i.triangles,n=i.points;if(!e||!e.length)return t;for(var r=0;r<e.length;r++){var s=e[r],a,o,l;if(s&&s.vertices&&s.vertices.length>=3)a=ar(s.vertices[0]),o=ar(s.vertices[1]),l=ar(s.vertices[2]);else if(n&&s&&(typeof s[0]=="number"||typeof s.a=="number")){var c=s[0]!==void 0?s[0]:s.a,d=s[1]!==void 0?s[1]:s.b,m=s[2]!==void 0?s[2]:s.c;c>=0&&d>=0&&m>=0&&c<n.length&&d<n.length&&m<n.length&&(a=ar(n[c]),o=ar(n[d]),l=ar(n[m]))}a&&o&&l&&t.push({v0:a,v1:o,v2:l})}return t}async function w0(i){var t=await Nu.loadAsync(i),e=[],n=null,r=t.file("manifest.json");if(r)try{n=JSON.parse(await r.async("string"))}catch(_){e.push("manifest.json: "+_.message)}var s=t.file("surfaces.json");if(!s)throw new Error("No surfaces.json in KAP (not a Kirra project export or missing surfaces)");var a=JSON.parse(await s.async("string"));if(!Array.isArray(a))throw new Error("surfaces.json must be an array");for(var o=[],l=0;l<a.length;l++){var c=a[l];if(c.isTexturedMesh&&(!c.triangles||c.triangles.length===0)){e.push("Skipped textured surface without triangles: "+(c.id||c.name||String(l)));continue}var d=E0(c);if(d.length===0){e.push("No triangles usable: "+(c.id||c.name||String(l)));continue}var m=c.id||"import-"+l,h=c.name||m,u=b0(d),g="KAP: "+h+" ("+d.length+" tris)";o.push({id:m,name:h,soup:d,closed:u,label:g})}if(o.length===0)throw new Error("No triangulated surfaces found in KAP");return{surfaces:o,warnings:e,manifest:n}}function Wc(i){for(var t=[],e=0;e<i.length;e++){var n=i[e];t.push({vertices:[{x:n.v0.x,y:n.v0.y,z:n.v0.z},{x:n.v1.x,y:n.v1.y,z:n.v1.z},{x:n.v2.x,y:n.v2.y,z:n.v2.z}]})}return t}async function T0(i){var t=i.soupA,e=i.soupB,n=i.nameA||"MeshA",r=i.nameB||"MeshB",s=i.projectName||"trimesh-boolean-demo",a=new Nu,o=new Date().toISOString();a.file("manifest.json",JSON.stringify({kapVersion:"demo-1",application:"trimesh-boolean-demo",created:o,projectName:s,counts:{surfaces:2,holes:0,drawings:0,images:0,products:0,charging:0,configs:0},note:"Minimal export from trimesh-boolean demo (Mesh A and Mesh B only). Open in Kirra or re-import here."},null,2));var l=[{id:"demo-mesh-a",name:n,type:"triangulated",visible:!0,triangles:Wc(t),metadata:{source:"trimesh-boolean-demo",role:"meshA"}},{id:"demo-mesh-b",name:r,type:"triangulated",visible:!0,triangles:Wc(e),metadata:{source:"trimesh-boolean-demo",role:"meshB"}}];a.file("surfaces.json",JSON.stringify(l));var c=await a.generateAsync({type:"blob",compression:"DEFLATE"});return c}var qe={};try{var A0=await fetch("./kirra-surfaces.json"),Xc=await A0.json();for(var Xa in Xc)Xa!=="_meta"&&(qe[Xa]=Xc[Xa]);console.log("Loaded Kirra surfaces:",Object.keys(qe).join(", "))}catch(i){console.warn("Could not load kirra-surfaces.json:",i.message)}var de=document.getElementById("viewport"),ki=new bf;ki.background=new Qt(1710618);var Bi=new fn(50,1,.1,1e4);Bi.up.set(0,0,1);Bi.position.set(5,-5,5);var Qs=new K_({antialias:!0});de.appendChild(Qs.domElement);var Zr=new J_(Bi,Qs.domElement);Zr.enableDamping=!0;Zr.dampingFactor=.08;ki.add(new Yf(16777215,.6));var Fu=new qf(16777215,.8);Fu.position.set(5,-7,10);ki.add(Fu);var Ou=new td(300,30,3355443,2236962);Ou.rotation.x=Math.PI/2;ki.add(Ou);var C0=new ed(20);ki.add(C0);function Bu(){var i=de.clientWidth,t=de.clientHeight;Bi.aspect=i/t,Bi.updateProjectionMatrix(),Qs.setSize(i,t),typeof Kt<"u"&&Kt.traverse(function(e){e.material&&e.material.resolution&&e.material.resolution.set(i,t)})}window.addEventListener("resize",Bu);Bu();function zu(){requestAnimationFrame(zu),Zr.update(),Qs.render(ki,Bi)}zu();function qa(i,t,e,n){for(var r=n/2,s=[{x:i-r,y:t-r,z:e-r},{x:i+r,y:t-r,z:e-r},{x:i+r,y:t+r,z:e-r},{x:i-r,y:t+r,z:e-r},{x:i-r,y:t-r,z:e+r},{x:i+r,y:t-r,z:e+r},{x:i+r,y:t+r,z:e+r},{x:i-r,y:t+r,z:e+r}],a=[[0,2,1],[0,3,2],[4,5,6],[4,6,7],[0,1,5],[0,5,4],[2,3,7],[2,7,6],[0,4,7],[0,7,3],[1,2,6],[1,6,5]],o=[],l=0;l<a.length;l++){var c=a[l];o.push({v0:{x:s[c[0]].x,y:s[c[0]].y,z:s[c[0]].z},v1:{x:s[c[1]].x,y:s[c[1]].y,z:s[c[1]].z},v2:{x:s[c[2]].x,y:s[c[2]].y,z:s[c[2]].z}})}return o}function qc(i,t,e,n,r,s,a){for(var o=[],l=n/s,c=r/a,d=i-n/2,m=t-r/2,h=0;h<s;h++)for(var u=0;u<a;u++){var g=d+h*l,_=m+u*c,p=g+l,f=_+c;o.push({v0:{x:g,y:_,z:e},v1:{x:p,y:_,z:e},v2:{x:p,y:f,z:e}}),o.push({v0:{x:g,y:_,z:e},v1:{x:p,y:f,z:e},v2:{x:g,y:f,z:e}})}return o}function R0(i,t,e,n,r,s,a,o,l){var c=[],d=n/s,m=r/a,h=i-n/2,u=t-r/2;function g(A,P){return e+(A-i)*o+(P-t)*l}for(var _=0;_<s;_++)for(var p=0;p<a;p++){var f=h+_*d,v=u+p*m,S=f+d,w=v+m;c.push({v0:{x:f,y:v,z:g(f,v)},v1:{x:S,y:v,z:g(S,v)},v2:{x:S,y:w,z:g(S,w)}}),c.push({v0:{x:f,y:v,z:g(f,v)},v1:{x:S,y:w,z:g(S,w)},v2:{x:f,y:w,z:g(f,w)}})}return c}function P0(i,t,e,n,r,s,a){var o=[],l=n/s,c=r/s,d=i-n/2,m=t-r/2;function h(S,w){return e+a*Math.sin(S*.8)*Math.cos(w*.8)}for(var u=0;u<s;u++)for(var g=0;g<s;g++){var _=d+u*l,p=m+g*c,f=_+l,v=p+c;o.push({v0:{x:_,y:p,z:h(_,p)},v1:{x:f,y:p,z:h(f,p)},v2:{x:f,y:v,z:h(f,v)}}),o.push({v0:{x:_,y:p,z:h(_,p)},v1:{x:f,y:v,z:h(f,v)},v2:{x:_,y:v,z:h(_,v)}})}return o}function D0(i,t,e,n,r,s,a){for(var o=[],l=2*Math.PI/a,c=0;c<a;c++){var d=c*l,m=(c+1)*l,h=i+r*Math.cos(d),u=t+r*Math.sin(d),g=i+r*Math.cos(m),_=t+r*Math.sin(m),p=i+s*Math.cos(d),f=t+s*Math.sin(d),v=i+s*Math.cos(m),S=t+s*Math.sin(m);o.push({v0:{x:h,y:u,z:e},v1:{x:g,y:_,z:e},v2:{x:v,y:S,z:n}}),o.push({v0:{x:h,y:u,z:e},v1:{x:v,y:S,z:n},v2:{x:p,y:f,z:n}}),o.push({v0:{x:i,y:t,z:n},v1:{x:p,y:f,z:n},v2:{x:v,y:S,z:n}})}return o}var pn={cube:function(){return{soup:qa(0,0,0,2),label:"Cube (2x2x2)",closed:!0}},"cube-large":function(){return{soup:qa(0,0,0,3),label:"Large Cube (3x3x3)",closed:!0}},"cube-offset":function(){return{soup:qa(1,.5,0,2),label:"Cube (offset +1,+0.5)",closed:!0}},"flat-terrain":function(){return{soup:qc(0,0,0,8,8,5,5),label:"Flat Terrain (z=0, 8x8)",closed:!1}},"flat-cut":function(){return{soup:qc(0,0,.5,7,7,4,4),label:"Flat Cut (z=0.5, 7x7)",closed:!1}},"inclined-terrain":function(){return{soup:R0(0,0,0,8,8,5,5,.2,.15),label:"Inclined Terrain (8x8)",closed:!1}},"wavy-terrain":function(){return{soup:P0(0,0,0,8,8,8,1.5),label:"Wavy Terrain (8x8, amp 1.5)",closed:!1}},"pit-shell":function(){return{soup:D0(0,0,2,-1,3,.5,16),label:"Steep Pit Shell (80° walls)",closed:!1}}};qe.terrain&&(pn["kirra-terrain"]=function(){return{soup:qe.terrain.soup,label:qe.terrain.label,closed:qe.terrain.closed}});qe.cylinder&&(pn["kirra-cylinder"]=function(){return{soup:qe.cylinder.soup,label:qe.cylinder.label,closed:qe.cylinder.closed}});qe.cup&&(pn["kirra-cup"]=function(){return{soup:qe.cup.soup,label:qe.cup.label,closed:qe.cup.closed}});qe.convoluted&&(pn["kirra-convoluted"]=function(){return{soup:qe.convoluted.soup,label:"convoluted (32 tris, from Kirra)",closed:!1}});var lr="kap-user-";function I0(){for(var i in pn)pn.hasOwnProperty(i)&&i.indexOf(lr)===0&&delete pn[i];var t=document.getElementById("meshA"),e=document.getElementById("meshB"),n=t.querySelector("optgroup[data-kap-user]"),r=e.querySelector("optgroup[data-kap-user]");n&&n.remove(),r&&r.remove()}function L0(i){I0();for(var t=i.surfaces,e=0;e<t.length;e++)(function(p){var f=t[p],v=lr+p,S=f.soup;pn[v]=function(){return{soup:S,label:f.label,closed:f.closed}}})(e);var n="Imported KAP ("+t.length+")",r=document.getElementById("meshA"),s=document.getElementById("meshB"),a=document.createElement("optgroup");a.setAttribute("label",n),a.setAttribute("data-kap-user","1");var o=document.createElement("optgroup");o.setAttribute("label",n),o.setAttribute("data-kap-user","1");for(var l=0;l<t.length;l++){var c=t[l],d=lr+l,m=c.name+" ("+c.soup.length+" tris)",h=document.createElement("option");h.value=d,h.textContent=m,a.appendChild(h);var u=document.createElement("option");u.value=d,u.textContent=m,o.appendChild(u)}r.appendChild(a),s.appendChild(o),t.length>=1&&(r.value=lr+"0"),t.length>=2?s.value=lr+"1":t.length===1&&(s.value=lr+"0");var g="";if(i.warnings&&i.warnings.length>0){g=" ("+i.warnings.length+" warning(s) — see console)";for(var _=0;_<i.warnings.length;_++)console.warn("KAP import: "+i.warnings[_])}console.log("KAP import: "+t.length+" surface(s)"+g)}function Sn(i,t,e){for(var n=new Float32Array(i.length*9),r=0;r<i.length;r++){var s=i[r],a=r*9;n[a]=s.v0.x,n[a+1]=s.v0.y,n[a+2]=s.v0.z,n[a+3]=s.v1.x,n[a+4]=s.v1.y,n[a+5]=s.v1.z,n[a+6]=s.v2.x,n[a+7]=s.v2.y,n[a+8]=s.v2.z}var o=new Ye;o.setAttribute("position",new on(n,3)),o.computeVertexNormals();var l=new Vf({color:t,side:dn,transparent:e<1,opacity:e,depthWrite:e>=1});return new wn(o,l)}function or(i,t){for(var e=new Float32Array(i.length*18),n=0;n<i.length;n++){var r=i[n],s=n*18;e[s]=r.v0.x,e[s+1]=r.v0.y,e[s+2]=r.v0.z,e[s+3]=r.v1.x,e[s+4]=r.v1.y,e[s+5]=r.v1.z,e[s+6]=r.v1.x,e[s+7]=r.v1.y,e[s+8]=r.v1.z,e[s+9]=r.v2.x,e[s+10]=r.v2.y,e[s+11]=r.v2.z,e[s+12]=r.v2.x,e[s+13]=r.v2.y,e[s+14]=r.v2.z,e[s+15]=r.v0.x,e[s+16]=r.v0.y,e[s+17]=r.v0.z}var a=new Ye;return a.setAttribute("position",new on(e,3)),new rl(a,new Zs({color:t,transparent:!0,opacity:.4}))}function Nr(i,t,e){var n=6;function r(E){return E.x.toFixed(n)+","+E.y.toFixed(n)+","+E.z.toFixed(n)}function s(E,T){return E<T?E+"|"+T:T+"|"+E}for(var a={},o={},l=0;l<i.length;l++)for(var c=i[l],d=[c.v0,c.v1,c.v2],m=[r(d[0]),r(d[1]),r(d[2])],h=0;h<3;h++){var u=(h+1)%3,g=s(m[h],m[u]);a[g]||(a[g]=0,o[g]=[d[h],d[u]]),a[g]++}var _=[];for(var p in a)a[p]===1&&_.push(o[p]);if(_.length===0)return null;var f=new fr;f.userData.isOpenEdge=!0;for(var v=new Ln({color:t,linewidth:5,worldUnits:!1,dashed:!1,resolution:new Ht(e.clientWidth,e.clientHeight)}),S=0;S<_.length;S++){var w=_[S][0],A=_[S][1],P=new Ni;P.setPositions([w.x,w.y,w.z,A.x,A.y,A.z]);var D=new dr(P,v);D.computeLineDistances(),f.add(D)}return f}function U0(i){var t=6;function e(T){return T.x.toFixed(t)+","+T.y.toFixed(t)+","+T.z.toFixed(t)}function n(T,z){return T<z?T+"|"+z:z+"|"+T}for(var r={},s=0;s<i.length;s++)for(var a=i[s],o=[e(a.v0),e(a.v1),e(a.v2)],l=0;l<3;l++){var c=(l+1)%3,d=n(o[l],o[c]);r[d]||(r[d]=[]),r[d].push(s)}var m={},h=[];for(var u in r)if(r[u].length>2){for(var g=r[u],_=0;_<g.length;_++)m[g[_]]=!0;for(var p=i[g[0]],f=[p.v0,p.v1,p.v2],v=u.split("|"),S=null,w=null,A=0;A<3;A++){var P=e(f[A]);P===v[0]&&(S=f[A]),P===v[1]&&(w=f[A])}S&&w&&h.push([S,w])}var D=[];for(var E in m)D.push(i[Number(E)]);return{triangles:D,edges:h}}function Fr(i,t,e){var n=U0(i);if(n.triangles.length===0)return 0;var r=Sn(n.triangles,12720219,.6);if(r.material.side=dn,r.material.depthTest=!1,r.renderOrder=999,e.add(r),n.edges.length>0){for(var s=[],a=0;a<n.edges.length;a++){var o=n.edges[a][0],l=n.edges[a][1];s.push(o.x,o.y,o.z,l.x,l.y,l.z)}var c=new Ni;c.setPositions(s);var d=new Ln({color:16777215,linewidth:6,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Ht(t.clientWidth,t.clientHeight)}),m=new dr(c,d);m.computeLineDistances(),m.renderOrder=1e3,e.add(m)}return n.triangles.length}var Kt=new fr;Kt.name="result";ki.add(Kt);var Je="input";function N0(){for(;Kt.children.length>0;){var i=Kt.children[0];Kt.remove(i),i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()}}function Yc(i,t,e){var n=[];n.push("<b>"+t+"</b>"),n.push("Triangles: <b>"+i.length+"</b>"),n.push("Type: <b>"+(e?"Closed solid":"Open surface")+"</b>");var r=Du(i);if(n.push("Surface area: <b>"+r.toFixed(3)+"</b>"),e){var s=ll(i);n.push("Signed volume: <b>"+s.toFixed(3)+"</b>")}var a=$n(i);n.push("Avg edge length: <b>"+a.toFixed(4)+"</b>");try{var o=ur(i,1e-4),l=ks(o.triangles),c=Vs(l);n.push("Open edges: <b>"+c.openEdges+"</b> | Non-manifold: <b>"+c.overShared+"</b>")}catch{}return n.join("<br>")}function F0(i,t,e){if(!i||!i.soup||i.soup.length===0)return"Operation <b>"+t+'</b>: <span class="highlight">no result</span> ('+e+" ms)";var n=[],r=t;t==="subtract-inv"&&(r="subtract (B\\A)"),n.push("Operation: <b>"+r+"</b> ("+e+" ms)"),n.push("Result triangles: <b>"+i.soup.length+"</b>"),i.points&&n.push("Result vertices: <b>"+i.points.length+"</b>");var s=Du(i.soup);n.push("Surface area: <b>"+s.toFixed(3)+"</b>");var a=ll(i.soup);n.push("Signed volume: <b>"+a.toFixed(3)+"</b>");try{var o=ur(i.soup,1e-4),l=ks(o.triangles),c=Vs(l);n.push("Open edges: <b>"+c.openEdges+"</b> | Non-manifold: <b>"+c.overShared+"</b>")}catch{}return n.push(""),t==="subtract"?n.push('<span class="highlight">R = A \\ B</span>  (keep A-outside-B + B-inside-A flipped)'):t==="subtract-inv"?n.push('<span class="highlight">R = B \\ A</span>  (keep B-outside-A + A-inside-B flipped)'):t==="union"?n.push('<span class="highlight">R = A ∪ B</span>  (keep A-outside-B + B-outside-A)'):t==="intersect"&&n.push('<span class="highlight">R = A ∩ B</span>  (keep A-inside-B + B-inside-A)'),n.join("<br>")}var _i=!1,cr=!0,zr=!1,kr=!1,We=!1,Vr=!0,ku=!1,Vu=!1,Hu=!1,Vo=!1,Ho=!0,Go=!0,ie=!1;window.runOp=function(i){Je=i,N0();var t=document.getElementById("meshA").value,e=document.getElementById("meshB").value,n=pn[t](),r=pn[e]();if(Vr){var s=$n(n.soup),a=$n(r.soup);n.soup=Bs(n.soup,s*.01,3),n.soup=zs(n.soup,s*.01),r.soup=Bs(r.soup,a*.01,3),r.soup=zs(r.soup,a*.01)}document.querySelectorAll("#toolbar button").forEach(function(Cn){Cn.classList.remove("active")});var o="btn-"+i,l=document.getElementById(o);l&&l.classList.add("active");var c=document.getElementById("stat-inputs"),d=document.getElementById("stat-result"),m=Vr?'<br><span class="highlight">T-junction repair: ON</span>':"";if(c.innerHTML=Yc(n.soup,"A: "+n.label,n.closed)+"<br><br>"+Yc(r.soup,"B: "+r.label,r.closed)+m,i==="input"){var h=Sn(n.soup,13378082,.7),u=Sn(r.soup,8947848,.7);if(h.material.wireframe=_i,u.material.wireframe=_i,Kt.add(h),Kt.add(u),cr||We){var g=or(n.soup,We?16755302:16737860),_=or(r.soup,We?6728447:4491519);We&&(g.material.opacity=.9,_.material.opacity=.9),Kt.add(g),Kt.add(_)}if(zr){var p=Nr(n.soup,16711680,de);p&&Kt.add(p);var f=Nr(r.soup,16711680,de);f&&Kt.add(f)}kr&&(Fr(n.soup,de,Kt),Fr(r.soup,de,Kt));try{var v=sh(n.soup,r.soup);if(v&&v.length>0){for(var S=$n(n.soup),w=wl(v,S*.01),A=new Ln({color:16777215,linewidth:4,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Ht(de.clientWidth,de.clientHeight)}),P=0;P<w.length;P++){var D=w[P];if(!(D.length<2)){for(var E=[],T=0;T<D.length;T++)E.push(D[T].x,D[T].y,D[T].z);var z=new Ni;z.setPositions(E);var F=new dr(z,A);F.computeLineDistances(),F.renderOrder=999,Kt.add(F)}}d.innerHTML="Showing inputs<br>Intersection: <b>"+v.length+"</b> segments → <b>"+w.length+"</b> chains (yellow)"}else d.innerHTML="Showing inputs<br>No intersection detected"}catch{d.innerHTML="Showing inputs"}ie||mi();return}if(i==="splits"){var R=performance.now(),L;try{L=Tl(n.soup,r.soup)}catch(Cn){d.innerHTML='<span class="highlight">Split error: '+Cn.message+"</span>";return}var x=(performance.now()-R).toFixed(1);if(!L){d.innerHTML='<span class="highlight">No intersection — nothing to split</span>';var O=Sn(n.soup,3355443,.3),X=Sn(r.soup,3355443,.3);Kt.add(O),Kt.add(X),ie||mi();return}for(var B=L.groups,at={aInside:15079724,aOutside:16021792,bInside:4485828,bOutside:47042},q={aInside:7539734,aOutside:8010768,bInside:2242914,bOutside:23393},ct=[{key:"aInside",soup:B.aInside,label:"A inside B"},{key:"aOutside",soup:B.aOutside,label:"A outside B"},{key:"bInside",soup:B.bInside,label:"B inside A"},{key:"bOutside",soup:B.bOutside,label:"B outside A"}],H=0;H<ct.length;H++){var k=ct[H];if(k.soup.length!==0){var dt=We?.85:.75,gt=Sn(k.soup,at[k.key],dt);if(gt.material.wireframe=_i,Kt.add(gt),cr||We){var ft=We?at[k.key]:q[k.key],it=We?.9:.4,ht=or(k.soup,ft);ht.material.opacity=it,Kt.add(ht)}if(zr){var lt=Nr(k.soup,16711680,de);lt&&Kt.add(lt)}kr&&Fr(k.soup,de,Kt)}}if(L.segments&&L.segments.length>0){for(var yt=$n(n.soup),wt=[],Mt=0;Mt<L.segments.length;Mt++)wt.push({p0:L.segments[Mt].p0,p1:L.segments[Mt].p1});for(var Wt=wl(wt,yt*.01),zt=new Ln({color:16777215,linewidth:5,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Ht(de.clientWidth,de.clientHeight)}),y=0;y<Wt.length;y++){var J=Wt[y];if(!(J.length<2)){for(var Y=[],U=0;U<J.length;U++)Y.push(J[U].x,J[U].y,J[U].z);var M=new Ni;M.setPositions(Y);var W=new dr(M,zt);W.computeLineDistances(),W.renderOrder=999,Kt.add(W)}}}var Q=[];Q.push("Split completed in <b>"+x+"</b> ms"),Q.push("Segments: <b>"+(L.segments?L.segments.length:0)+"</b>"),Q.push("");for(var rt="",V=0;V<ct.length;V++){var C=ct[V],b="#"+at[C.key].toString(16).padStart(6,"0"),N="";if(C.soup.length>0)try{var Z=ur(C.soup,1e-4),nt=ks(Z.triangles),$=Vs(nt);N=" | open: "+$.openEdges,$.overShared>0&&(N+=" | nm: "+$.overShared)}catch{}rt+='<div class="split-legend"><span class="split-swatch" style="background:'+b+'"></span> <span>'+C.label+": <b>"+C.soup.length+"</b> tris"+N+"</span></div>"}Q.push(rt),We&&Q.push('<br><span class="highlight">Fan Tris: ON</span> (each sub-triangle edge visible)'),d.innerHTML=Q.join("<br>"),ie||mi();return}if(i==="bms-splits"){let Cn=function(cn,ra){if(!(!cn||cn.length<2)){for(var xe=[],ye=0;ye<cn.length;ye++)xe.push(cn[ye].x,cn[ye].y,cn[ye].z);var Se=new Ni;Se.setPositions(xe);var be=new dr(Se,ra);be.computeLineDistances(),be.renderOrder=999,Kt.add(be)}};var bt=performance.now(),pt;try{pt=Hc(n.soup,r.soup,null,{preRepair:Vr})}catch(cn){d.innerHTML='<span class="highlight">BMS error: '+cn.message+"</span>",console.error(cn);return}var Pt=(performance.now()-bt).toFixed(1);if(!pt){d.innerHTML='<span class="highlight">No BMS result — meshes may not intersect</span>',ie||mi();return}for(var Ot=pt.groups,ut={aInside:15079724,aOutside:16021792,bInside:4485828,bOutside:47042},xt={aInside:7539734,aOutside:8010768,bInside:2242914,bOutside:23393},Dt=[{key:"aInside",soup:Ot.aInside,label:"A inside B"},{key:"aOutside",soup:Ot.aOutside,label:"A outside B"},{key:"bInside",soup:Ot.bInside,label:"B inside A"},{key:"bOutside",soup:Ot.bOutside,label:"B outside A"}],Tt=0;Tt<Dt.length;Tt++){var Et=Dt[Tt];if(Et.soup.length!==0){var At=We?.85:.75,G=Sn(Et.soup,ut[Et.key],At);if(G.material.wireframe=_i,Kt.add(G),cr||We){var _t=We?ut[Et.key]:xt[Et.key],vt=We?.9:.4,St=or(Et.soup,_t);St.material.opacity=vt,Kt.add(St)}if(zr){var mt=Nr(Et.soup,16711680,de);mt&&Kt.add(mt)}kr&&Fr(Et.soup,de,Kt)}}for(var ot=[16768256,16746496,8978176,65416,35071,8913151,16711816,16777215],Ut=[16711935,65535,16737792,65382,16711782,6684927,6749952,26367],Vt=pt.meshEdgePolys||{},te=["A","B"],$t=0,Ie=0,Le=0,bi=0,Vn=0;Vn<te.length;Vn++){var Hn=Vt[te[Vn]];if(!(!Hn||!Hn.segments)){Hn.closed&&Ie++;for(var si=0;si<Hn.segments.length;si++){var ze=Hn.segments[si];if($t++,ze.type==="intersection"){if(Ho){var je=new Ln({color:ot[Le%ot.length],linewidth:5,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Ht(de.clientWidth,de.clientHeight)});Cn(ze.verts,je)}Le++}else{if(Go){var mn=new Ln({color:Ut[bi%Ut.length],linewidth:4,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Ht(de.clientWidth,de.clientHeight)});Cn(ze.verts,mn)}bi++}}}}var Ee=[];Ee.push('<span class="highlight">BMS Pipeline</span> ('+Pt+" ms)"),Ee.push("Segments: <b>"+pt.segments.length+"</b>"),Ee.push("Polylines: <b>"+(pt.polylines?pt.polylines.length:0)+"</b>"),pt.pool&&Ee.push("Pool vertices: <b>"+pt.pool.size()+"</b>"),Ee.push("");for(var Tr="",ai=0;ai<Dt.length;ai++){var oi=Dt[ai],Vi="#"+ut[oi.key].toString(16).padStart(6,"0"),Hi="";if(oi.soup.length>0)try{var $r=ur(oi.soup,1e-4),ta=ks($r.triangles),Ar=Vs(ta);Hi=" | open: "+Ar.openEdges,Ar.overShared>0&&(Hi+=" | nm: "+Ar.overShared)}catch{}Tr+='<div class="split-legend"><span class="split-swatch" style="background:'+Vi+'"></span> <span>'+oi.label+": <b>"+oi.soup.length+"</b> tris"+Hi+"</span></div>"}Ee.push(Tr),Ee.push('<br><span style="color:#ffdd00">&#9632;</span> Yellow = intersection'),Ee.push('<span style="color:#ff00ff">&#9632;</span> Magenta = graph/edge walk'),Ee.push("Edge poly segments: <b>"+$t+"</b> ("+Ie+"/2 meshes closed)"),Ee.push("Raw chains: <b>"+(pt.rawPolylines?pt.rawPolylines.length:0)+"</b>"),d.innerHTML=Ee.join("<br>"),ie||mi();return}if(i==="custom"){let cn=function(xe,ye){var Se=xe>>16&255,be=xe>>8&255,Qe=xe&255;return Se=Math.round(Se*ye),be=Math.round(be*ye),Qe=Math.round(Qe*ye),Se<<16|be<<8|Qe},ra=function(xe,ye){var Se=xe>>16&255,be=xe>>8&255,Qe=xe&255;return Se=Math.min(255,Math.round(Se+(255-Se)*ye)),be=Math.min(255,Math.round(be+(255-be)*ye)),Qe=Math.min(255,Math.round(Qe+(255-Qe)*ye)),Se<<16|be<<8|Qe};var ea=performance.now(),L,Jr=null;try{if(Vo){var Gi=Hc(n.soup,r.soup,null,{preRepair:Vr});if(!Gi){d.innerHTML="No BMS result";return}L={groups:Gi.groups,segments:Gi.segments},Jr=Gi.meshEdgePolys}else L=Tl(n.soup,r.soup)}catch(xe){d.innerHTML='<span class="highlight">Error: '+xe.message+"</span>",console.error(xe);return}if(!L){d.innerHTML="No split result (meshes may not intersect)";return}var ve=ah(L.groups);Hu&&(ve=lh(ve,50));for(var I=(performance.now()-ea).toFixed(1),K=[15079724,16021792,3781962,47042,4485828,3947660,9125792,12720219],st=K.length,P=0;P<ve.length;P++){var T=ve[P],et=Math.floor(P/st),tt=P%st,Rt=K[tt];et===0?T.color=Rt:et===1?T.color=cn(Rt,.5):T.color=ra(Rt,.5),T.visible=!0}if(window._customComps&&window._customComps.length===ve.length)for(var Lt=0;Lt<ve.length;Lt++)ve[Lt].visible=window._customComps[Lt].visible;window._customComps=ve;var It=Vo?'<span style="color:#39B54A">BMS Pipe</span>':"Old Pipe",Nt="<b>Custom splits</b> — "+It+" ("+I+" ms)<br>"+ve.length+" components from "+(L.segments?L.segments.length:0)+" segments<hr>";Nt+='<ul class="comp-list" id="comp-list">';for(var V=0;V<ve.length;V++){var Ft=ve[V],Xt=Ft.mesh+"-"+Ft.side+(Ft.index>0?" #"+Ft.index:""),Yt="#"+("000000"+Ft.color.toString(16)).slice(-6),kt=Ft.visible?"comp-eye":"comp-eye off",se=(Ft.visible,"&#128065;");Nt+='<li class="comp-item" data-idx="'+V+'"><span class="'+kt+'" data-idx="'+V+'">'+se+'</span><span class="comp-swatch" style="background:'+Yt+'"></span><span class="comp-label">'+Xt+" ("+Ft.triCount+")</span></li>"}Nt+="</ul>";for(var pe=0,fe=0,ee=0;ee<ve.length;ee++)ve[ee].visible&&(pe++,fe+=ve[ee].triCount);Nt+="<br>Visible: "+pe+"/"+ve.length+" ("+fe+" tris)",d.innerHTML=Nt;for(var me=0;me<ve.length;me++)if(ve[me].visible){var Bt=Sn(ve[me].soup,ve[me].color,.85);if(Bt.material.wireframe=_i,Bt.material.side=dn,Kt.add(Bt),cr){var ke=or(ve[me].soup,ve[me].color);ke.material.opacity=.5,Kt.add(ke)}}setTimeout(function(){var xe=document.getElementById("comp-list");xe&&xe.addEventListener("click",function(ye){for(var Se=ye.target;Se&&!Se.dataset.idx&&Se!==xe;)Se=Se.parentElement;if(!(!Se||Se.dataset.idx===void 0)){var be=parseInt(Se.dataset.idx);isNaN(be)||be<0||be>=window._customComps.length||(window._customComps[be].visible=!window._customComps[be].visible,ie=!0,runOp("custom"),ie=!1)}})},0);try{var Jt=Jr;if(!Jt){var Ve=Iu(n.soup,r.soup);if(Ve.segments.length>0){var ln=Lu(n.soup,r.soup,Ve),Gn=cl(Ve.segments),li=Uu(Gn,n.soup,r.soup,ln,Ve.segments);Jt=li.meshEdgePolys}}if(Jt){let xe=function(ye,Se){if(!(!ye||ye.length<2)){for(var be=[],Qe=0;Qe<ye.length;Qe++)be.push(ye[Qe].x,ye[Qe].y,ye[Qe].z);var bl=new Ni;bl.setPositions(be);var sa=new dr(bl,Se);sa.computeLineDistances(),sa.renderOrder=999,Kt.add(sa)}};for(var ae=[16768256,16746496,8978176,65416,35071,8913151,16711816,16777215],we=[16711935,65535,16737792,65382,16711782,6684927,6749952,26367],gn=0,Me=0,_n=["A","B"],An=0;An<_n.length;An++){var Ei=Jt[_n[An]];if(!(!Ei||!Ei.segments))for(var na=0;na<Ei.segments.length;na++){var ia=Ei.segments[na];if(ia.type==="intersection"){if(Ho){var Gu=new Ln({color:ae[gn%ae.length],linewidth:5,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Ht(de.clientWidth,de.clientHeight)});xe(ia.verts,Gu)}gn++}else{if(Go){var Wu=new Ln({color:we[Me%we.length],linewidth:4,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Ht(de.clientWidth,de.clientHeight)});xe(ia.verts,Wu)}Me++}}}}}catch(xe){console.warn("BMS overlay failed:",xe.message)}ie||mi();return}var ul=i,hl=n.soup,fl=r.soup;i==="subtract-inv"&&(ul="subtract",hl=r.soup,fl=n.soup);var Xu=performance.now(),ge;try{ge=oh(hl,fl,ul)}catch(Cn){d.innerHTML='<span class="highlight">Error: '+Cn.message+"</span>";return}var qu=(performance.now()-Xu).toFixed(1),Qr=[];if(ku&&ge&&ge.soup){var Yu=ge.soup.length;ge.soup=ch(ge.soup);var dl=ge.soup.length-Yu;dl>0&&Qr.push("Fill Gaps (Fan): +"+dl+" tris")}if(Vu&&ge&&ge.soup){for(var ju=ge.soup.length,pl=ur(ge.soup,1e-4),ml=uh(pl.points,pl.triangles),gl=[],y=0;y<ml.triangles.length;y++){var Wn=ml.triangles[y].vertices;gl.push({v0:{x:Wn[0].x,y:Wn[0].y,z:Wn[0].z},v1:{x:Wn[1].x,y:Wn[1].y,z:Wn[1].z},v2:{x:Wn[2].x,y:Wn[2].y,z:Wn[2].z}})}ge.soup=gl;var _l=ge.soup.length-ju;_l>0&&Qr.push("Force Close (Idx): +"+_l+" tris");var vl=ur(ge.soup,1e-4);ge.points=vl.points,ge.triangles=vl.triangles}if(d.innerHTML=F0(ge,i,qu),Qr.length>0&&(d.innerHTML+='<br><span class="highlight">'+Qr.join("<br>")+"</span>"),!ge||!ge.soup||ge.soup.length===0){var Zu=Sn(n.soup,3355443,.2),Ku=Sn(r.soup,3355443,.2);Kt.add(Zu),Kt.add(Ku),mi();return}var $u={subtract:16021792,"subtract-inv":4485828,union:3781962,intersect:9125792,custom:47042},xl=Sn(ge.soup,$u[i]||13421772,1);if(xl.material.wireframe=_i,Kt.add(xl),cr||We){var Ju={subtract:8010768,"subtract-inv":2242914,union:1858085,intersect:453e4,custom:23393},yl=or(ge.soup,Ju[i]||10066329);We&&(yl.material.opacity=.9),Kt.add(yl)}if(zr){var Sl=Nr(ge.soup,16711680,de);Sl&&Kt.add(Sl)}if(kr){var Ml=Fr(ge.soup,de,Kt);Ml>0&&(d.innerHTML+='<br><span class="highlight">Non-manifold tris: '+Ml+"</span>")}ie||mi()};function mi(){var i=new ri;if(Kt.traverse(function(s){if(s.isMesh||s.isLineSegments){s.geometry.computeBoundingBox();var a=s.geometry.boundingBox.clone();i.union(a)}}),!i.isEmpty()){var t=new j;i.getCenter(t);var e=new j;i.getSize(e);var n=Math.max(e.x,e.y,e.z),r=n*1.8;Zr.target.copy(t),Bi.position.set(t.x+r*.6,t.y-r*.7,t.z+r*.4),Zr.update()}}document.getElementById("meshA").addEventListener("change",function(){runOp(Je)});document.getElementById("meshB").addEventListener("change",function(){runOp(Je)});document.getElementById("chk-wireframe").addEventListener("change",function(i){_i=i.target.checked,Kt.traverse(function(t){t.isMesh&&(t.material.wireframe=_i)})});document.getElementById("chk-edges").addEventListener("change",function(i){cr=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-open-edges").addEventListener("change",function(i){zr=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-nonmanifold").addEventListener("change",function(i){kr=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-fan-tris").addEventListener("change",function(i){We=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-prerepair").addEventListener("change",function(i){Vr=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-fill-gaps").addEventListener("change",function(i){ku=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-force-close").addEventListener("change",function(i){Vu=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-merge-small").addEventListener("change",function(i){Hu=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-bms-pipe").addEventListener("change",function(i){Vo=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-show-isect").addEventListener("change",function(i){Ho=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("chk-show-walks").addEventListener("change",function(i){Go=i.target.checked,ie=!0,runOp(Je),ie=!1});document.getElementById("btn-kap-import").addEventListener("click",function(){document.getElementById("kap-file-input").click()});document.getElementById("kap-file-input").addEventListener("change",function(i){var t=i.target.files&&i.target.files[0];t&&(w0(t).then(function(e){L0(e),ie=!0,runOp(Je),ie=!1}).catch(function(e){alert("KAP import failed: "+e.message),console.error(e)}),i.target.value="")});document.getElementById("btn-kap-export").addEventListener("click",function(){var i=document.getElementById("meshA").value,t=document.getElementById("meshB").value,e=pn[i](),n=pn[t]();T0({soupA:e.soup,soupB:n.soup,nameA:e.label,nameB:n.label,projectName:"trimesh-boolean-demo"}).then(function(r){var s=URL.createObjectURL(r),a=document.createElement("a");a.href=s,a.download="trimesh-boolean-meshes.kap",a.click(),URL.revokeObjectURL(s)}).catch(function(r){alert("KAP export failed: "+r.message),console.error(r)})});runOp("input");

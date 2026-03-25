import{e as xi,b as ef,t as nf,q as rf,a as sf,d as pc,v as Zt,D as af,C as of,c as ri,f as Xi,s as lf,g as Ii,r as va,w as xa,h as Ls,i as cf,j as mc,k as ka,l as zi,m as ya,n as uf,o as hf,p as ff,u as df,x as pf}from"./booleanOp-Dw0YP5VW.js";const Al="183",Wr={ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mf=0,gc=1,gf=2,fa=1,_f=2,ds=3,qi=0,cn=1,Sn=2,Si=0,Xr=1,_c=2,vc=3,xc=4,vf=5,rr=100,xf=101,yf=102,Sf=103,Mf=104,bf=200,Ef=201,wf=202,Tf=203,Do=204,Lo=205,Af=206,Cf=207,Rf=208,Pf=209,If=210,Df=211,Lf=212,Uf=213,Nf=214,Uo=0,No=1,Fo=2,jr=3,Oo=4,Bo=5,zo=6,ko=7,Cl=0,Ff=1,Of=2,ei=0,ku=1,Vu=2,Hu=3,Gu=4,Wu=5,Xu=6,qu=7,Yu=300,hr=301,Zr=302,Va=303,Ha=304,Aa=306,Vo=1e3,yi=1001,Ho=1002,ze=1003,Bf=1004,Us=1005,We=1006,Ga=1007,or=1008,Mn=1009,ju=1010,Zu=1011,vs=1012,Rl=1013,si=1014,Jn=1015,Ei=1016,Pl=1017,Il=1018,xs=1020,Ku=35902,$u=35899,Ju=1021,Qu=1022,kn=1023,wi=1026,lr=1027,th=1028,Dl=1029,Kr=1030,Ll=1031,Ul=1033,da=33776,pa=33777,ma=33778,ga=33779,Go=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,jo=37492,Zo=37496,Ko=37488,$o=37489,Jo=37490,Qo=37491,tl=37808,el=37809,nl=37810,il=37811,rl=37812,sl=37813,al=37814,ol=37815,ll=37816,cl=37817,ul=37818,hl=37819,fl=37820,dl=37821,pl=36492,ml=36494,gl=36495,_l=36283,vl=36284,xl=36285,yl=36286,zf=3200,eh=0,kf=1,Hi="",An="srgb",$r="srgb-linear",Sa="linear",ue="srgb",_r=7680,yc=519,Vf=512,Hf=513,Gf=514,Nl=515,Wf=516,Xf=517,Fl=518,qf=519,Sl=35044,Sc="300 es",Qn=2e3,ys=2001;function Yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){const i=Ma("canvas");return i.style.display="block",i}const Mc={};function ba(...i){const t="THREE."+i.shift();console.log(t,...i)}function nh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=nh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=nh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ea(...i){const t=i.join(" ");t in Mc||(Mc[t]=!0,Xt(...i))}function Zf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Kf={[Uo]:No,[Fo]:zo,[Oo]:ko,[jr]:Bo,[No]:Uo,[zo]:Fo,[ko]:Oo,[Bo]:jr};class fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const gs=Math.PI/180,Ss=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Ol(i,t){return(i%t+t)%t}function $f(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Jf(i,t,e){return i!==t?(e-i)/(t-i):0}function _s(i,t,e){return(1-e)*i+e*t}function Qf(i,t,e,n){return _s(i,t,1-Math.exp(-e*n))}function td(i,t=1){return t-Math.abs(Ol(i,t*2)-t)}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function id(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rd(i,t){return i+Math.random()*(t-i)}function sd(i){return i*(.5-Math.random())}function ad(i){i!==void 0&&(bc=i);let t=bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function od(i){return i*gs}function ld(i){return i*Ss}function cd(i){return(i&i-1)===0&&i!==0}function ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fd(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),m=a((t+n)/2),d=s((t-n)/2),u=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*m,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*m,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*m,o*c);break;case"XZX":i.set(o*m,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*m,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*m,o*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ih={DEG2RAD:gs,RAD2DEG:Ss,generateUUID:Mi,clamp:jt,euclideanModulo:Ol,mapLinear:$f,inverseLerp:Jf,lerp:_s,damp:Qf,pingpong:td,smoothstep:ed,smootherstep:nd,randInt:id,randFloat:rd,randFloatSpread:sd,seededRandom:ad,degToRad:od,radToDeg:ld,isPowerOfTwo:cd,ceilPowerOfTwo:ud,floorPowerOfTwo:hd,setQuaternionFromProperEuler:fd,normalize:he,denormalize:Bn};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],m=n[r+2],d=n[r+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==u||c!==f||m!==g){let p=l*u+c*f+m*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let h=1-o;if(p<.9995){const v=Math.acos(p),x=Math.sin(v);h=Math.sin(h*v)/x,o=Math.sin(o*v)/x,l=l*h+u*o,c=c*h+f*o,m=m*h+g*o,d=d*h+_*o}else{l=l*h+u*o,c=c*h+f*o,m=m*h+g*o,d=d*h+_*o;const v=1/Math.sqrt(l*l+c*c+m*m+d*d);l*=v,c*=v,m*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=m,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],m=n[r+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+m*d+l*f-c*u,t[e+1]=l*g+m*u+c*d-o*f,t[e+2]=c*g+m*f+o*u-l*d,t[e+3]=m*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),m=o(r/2),d=o(s/2),u=l(n/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*m*d+c*f*g,this._y=c*f*d-u*m*g,this._z=c*m*g+u*f*d,this._w=c*m*d-u*f*g;break;case"YXZ":this._x=u*m*d+c*f*g,this._y=c*f*d-u*m*g,this._z=c*m*g-u*f*d,this._w=c*m*d+u*f*g;break;case"ZXY":this._x=u*m*d-c*f*g,this._y=c*f*d+u*m*g,this._z=c*m*g+u*f*d,this._w=c*m*d-u*f*g;break;case"ZYX":this._x=u*m*d-c*f*g,this._y=c*f*d+u*m*g,this._z=c*m*g-u*f*d,this._w=c*m*d+u*f*g;break;case"YZX":this._x=u*m*d+c*f*g,this._y=c*f*d+u*m*g,this._z=c*m*g-u*f*d,this._w=c*m*d-u*f*g;break;case"XZY":this._x=u*m*d-c*f*g,this._y=c*f*d-u*m*g,this._z=c*m*g+u*f*d,this._w=c*m*d+u*f*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],m=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(m-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(m-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+m)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+m)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,m=e._w;return this._x=n*m+a*o+r*c-s*l,this._y=r*m+a*l+s*o-n*c,this._z=s*m+a*c+n*l-r*o,this._w=a*m-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),m=Math.sin(c);l=Math.sin(l*c)/m,e=Math.sin(e*c)/m,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,n=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),m=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*m,this.y=n+l*m+o*c-s*d,this.z=r+l*d+s*m-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new j,Ec=new Yi;class $t{constructor(t,e,n,r,s,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const m=this.elements;return m[0]=t,m[1]=r,m[2]=o,m[3]=e,m[4]=s,m[5]=l,m[6]=n,m[7]=a,m[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],m=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=r[0],p=r[3],h=r[6],v=r[1],x=r[4],w=r[7],A=r[2],R=r[5],P=r[8];return s[0]=a*_+o*v+l*A,s[3]=a*p+o*x+l*R,s[6]=a*h+o*w+l*P,s[1]=c*_+m*v+d*A,s[4]=c*p+m*x+d*R,s[7]=c*h+m*w+d*P,s[2]=u*_+f*v+g*A,s[5]=u*p+f*x+g*R,s[8]=u*h+f*w+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],m=t[8];return e*a*m-e*o*c-n*s*m+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],m=t[8],d=m*a-o*c,u=o*l-m*s,f=c*s-a*l,g=e*d+n*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(r*c-m*n)*_,t[2]=(o*n-r*a)*_,t[3]=u*_,t[4]=(m*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new $t,wc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){const i={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ue&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?Sa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$r]:{primaries:t,whitePoint:n,transfer:Sa,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const ie=dd();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vr;class pd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vr===void 0&&(vr=Ma("canvas")),vr.width=t.width,vr.height=t.height;const r=vr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=vr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ma("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let md=0;class Bl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qa(r[a].image)):s.push(qa(r[a]))}else s=qa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let gd=0;const Ya=new j;class sn extends fr{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=yi,r=yi,s=We,a=or,o=kn,l=Mn,c=sn.DEFAULT_ANISOTROPY,m=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Mi(),this.name="",this.source=new Bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Yu;sn.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,r=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],m=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(m-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(m+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,w=(f+1)/2,A=(h+1)/2,R=(m+u)/4,P=(d+_)/4,S=(g+p)/4;return x>w&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=R/n,s=P/n):w>A?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=R/r,s=S/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=P/s,r=S/s),this.set(n,r,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-m)*(u-m));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(u-m)/v,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _d extends fr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new sn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Bl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends _d{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rh extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vd extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xe{constructor(t,e,n,r,s,a,o,l,c,m,d,u,f,g,_,p){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,m,d,u,f,g,_,p)}set(t,e,n,r,s,a,o,l,c,m,d,u,f,g,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=m,h[10]=d,h[14]=u,h[3]=f,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/xr.setFromMatrixColumn(t,0).length(),s=1/xr.setFromMatrixColumn(t,1).length(),a=1/xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),m=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*m,f=a*d,g=o*m,_=o*d;e[0]=l*m,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*m,f=l*d,g=c*m,_=c*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*m,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*m,f=l*d,g=c*m,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*m,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*m,f=a*d,g=o*m,_=o*d;e[0]=l*m,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*m,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*m,e[9]=-o*m,e[2]=-c*m,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*m,e[4]=-d,e[8]=c*m,e[1]=u*d+_,e[5]=a*m,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*m,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,yd)}lookAt(t,e,n){const r=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Di.crossVectors(n,xn),Di.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Di.crossVectors(n,xn)),Di.normalize(),Ns.crossVectors(xn,Di),r[0]=Di.x,r[4]=Ns.x,r[8]=xn.x,r[1]=Di.y,r[5]=Ns.y,r[9]=xn.y,r[2]=Di.z,r[6]=Ns.z,r[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],m=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],h=n[14],v=n[3],x=n[7],w=n[11],A=n[15],R=r[0],P=r[4],S=r[8],T=r[12],z=r[1],U=r[5],C=r[9],L=r[13],y=r[2],F=r[6],V=r[10],N=r[14],$=r[3],G=r[7],tt=r[11],H=r[15];return s[0]=a*R+o*z+l*y+c*$,s[4]=a*P+o*U+l*F+c*G,s[8]=a*S+o*C+l*V+c*tt,s[12]=a*T+o*L+l*N+c*H,s[1]=m*R+d*z+u*y+f*$,s[5]=m*P+d*U+u*F+f*G,s[9]=m*S+d*C+u*V+f*tt,s[13]=m*T+d*L+u*N+f*H,s[2]=g*R+_*z+p*y+h*$,s[6]=g*P+_*U+p*F+h*G,s[10]=g*S+_*C+p*V+h*tt,s[14]=g*T+_*L+p*N+h*H,s[3]=v*R+x*z+w*y+A*$,s[7]=v*P+x*U+w*F+A*G,s[11]=v*S+x*C+w*V+A*tt,s[15]=v*T+x*L+w*N+A*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],m=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],h=t[15],v=l*f-c*u,x=o*f-c*d,w=o*u-l*d,A=a*f-c*m,R=a*u-l*m,P=a*d-o*m;return e*(_*v-p*x+h*w)-n*(g*v-p*A+h*R)+r*(g*x-_*A+h*P)-s*(g*w-_*R+p*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],m=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],h=t[15],v=e*o-n*a,x=e*l-r*a,w=e*c-s*a,A=n*l-r*o,R=n*c-s*o,P=r*c-s*l,S=m*_-d*g,T=m*p-u*g,z=m*h-f*g,U=d*p-u*_,C=d*h-f*_,L=u*h-f*p,y=v*L-x*C+w*U+A*z-R*T+P*S;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/y;return t[0]=(o*L-l*C+c*U)*F,t[1]=(r*C-n*L-s*U)*F,t[2]=(_*P-p*R+h*A)*F,t[3]=(u*R-d*P-f*A)*F,t[4]=(l*z-a*L-c*T)*F,t[5]=(e*L-r*z+s*T)*F,t[6]=(p*w-g*P-h*x)*F,t[7]=(m*P-u*w+f*x)*F,t[8]=(a*C-o*z+c*S)*F,t[9]=(n*z-e*C-s*S)*F,t[10]=(g*R-_*w+h*v)*F,t[11]=(d*w-m*R-f*v)*F,t[12]=(o*T-a*U-l*S)*F,t[13]=(e*U-n*T+r*S)*F,t[14]=(_*x-g*A-p*v)*F,t[15]=(m*A-d*x+u*v)*F,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,m=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,m*o+n,m*l-r*a,0,c*l-r*o,m*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,m=a+a,d=o+o,u=s*c,f=s*m,g=s*d,_=a*m,p=a*d,h=o*d,v=l*c,x=l*m,w=l*d,A=n.x,R=n.y,P=n.z;return r[0]=(1-(_+h))*A,r[1]=(f+w)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(f-w)*R,r[5]=(1-(u+h))*R,r[6]=(p+v)*R,r[7]=0,r[8]=(g+x)*P,r[9]=(p-v)*P,r[10]=(1-(u+_))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let a=xr.set(r[0],r[1],r[2]).length();const o=xr.set(r[4],r[5],r[6]).length(),l=xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Un.copy(this);const c=1/a,m=1/o,d=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=m,Un.elements[5]*=m,Un.elements[6]*=m,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,a,o=Qn,l=!1){const c=this.elements,m=2*s/(e-t),d=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Qn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ys)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=m,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Qn,l=!1){const c=this.elements,m=2/(e-t),d=2/(n-r),u=-(e+t)/(e-t),f=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Qn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ys)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=m,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xr=new j,Un=new xe,xd=new j(0,0,0),yd=new j(1,1,1),Di=new j,Ns=new j,xn=new j,Ac=new xe,Cc=new Yi;class ai{constructor(t=0,e=0,n=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],m=r[9],d=r[2],u=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-m,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-m,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sd=0;const Rc=new j,yr=new Yi,hi=new xe,Fs=new j,ss=new j,Md=new j,bd=new Yi,Pc=new j(1,0,0),Ic=new j(0,1,0),Dc=new j(0,0,1),Lc={type:"added"},Ed={type:"removed"},Sr={type:"childadded",child:null},ja={type:"childremoved",child:null};class ke extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new j,e=new ai,n=new Yi,r=new j(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xe},normalMatrix:{value:new $t}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(Pc,t)}rotateY(t){return this.rotateOnAxis(Ic,t)}rotateZ(t){return this.rotateOnAxis(Dc,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pc,t)}translateY(t){return this.translateOnAxis(Ic,t)}translateZ(t){return this.translateOnAxis(Dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ss,Fs,this.up):hi.lookAt(Fs,ss,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(hi),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lc),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lc),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,m=l.length;c<m;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),m=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),m.length>0&&(n.images=m),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const m=o[c];delete m.metadata,l.push(m)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ke.DEFAULT_UP=new j(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hr extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wd={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const m=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=m.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Hr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Ka(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ie.workingColorSpace){if(t=Ol(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ka(a,s,t+1/3),this.g=Ka(a,s,t),this.b=Ka(a,s,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=An){function n(s){s!==void 0&&parseFloat(s)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const n=sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return ie.workingToColorSpace(He.copy(this),t),Math.round(jt(He.r*255,0,255))*65536+Math.round(jt(He.g*255,0,255))*256+Math.round(jt(He.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(He.copy(this),e);const n=He.r,r=He.g,s=He.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const m=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=m<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=m,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=An){ie.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,r=He.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Os);const n=_s(Li.h,Os.h,e),r=_s(Li.s,Os.s,e),s=_s(Li.l,Os.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new ee;ee.NAMES=sh;class Td extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Nn=new j,fi=new j,$a=new j,di=new j,Mr=new j,br=new j,Uc=new j,Ja=new j,Qa=new j,to=new j,eo=new me,no=new me,io=new me;class zn{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Nn.subVectors(t,e),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Nn.subVectors(r,e),fi.subVectors(n,e),$a.subVectors(t,e);const a=Nn.dot(Nn),o=Nn.dot(fi),l=Nn.dot($a),c=fi.dot(fi),m=fi.dot($a),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*m)*u,g=(a*m-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(eo,s.x),a.addScaledVector(no,s.y),a.addScaledVector(io,s.z),a}static isFrontFacing(t,e,n,r){return Nn.subVectors(n,e),fi.subVectors(t,e),Nn.cross(fi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Nn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return zn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Mr.subVectors(r,n),br.subVectors(s,n),Ja.subVectors(t,n);const l=Mr.dot(Ja),c=br.dot(Ja);if(l<=0&&c<=0)return e.copy(n);Qa.subVectors(t,r);const m=Mr.dot(Qa),d=br.dot(Qa);if(m>=0&&d<=m)return e.copy(r);const u=l*d-m*c;if(u<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Mr,a);to.subVectors(t,s);const f=Mr.dot(to),g=br.dot(to);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(br,o);const p=m*g-f*d;if(p<=0&&d-m>=0&&f-g>=0)return Uc.subVectors(s,r),o=(d-m)/(d-m+(f-g)),e.copy(r).addScaledVector(Uc,o);const h=1/(p+_+u);return a=_*h,o=u*h,e.copy(n).addScaledVector(Mr,a).addScaledVector(br,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ti{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),zs.subVectors(this.max,as),Er.subVectors(t.a,as),wr.subVectors(t.b,as),Tr.subVectors(t.c,as),Ui.subVectors(wr,Er),Ni.subVectors(Tr,wr),Ji.subVectors(Er,Tr);let e=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-Ji.z,Ji.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,Ji.z,0,-Ji.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-Ji.y,Ji.x,0];return!ro(e,Er,wr,Tr,zs)||(e=[1,0,0,0,1,0,0,0,1],!ro(e,Er,wr,Tr,zs))?!1:(ks.crossVectors(Ui,Ni),e=[ks.x,ks.y,ks.z],ro(e,Er,wr,Tr,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pi=[new j,new j,new j,new j,new j,new j,new j,new j],Fn=new j,Bs=new Ti,Er=new j,wr=new j,Tr=new j,Ui=new j,Ni=new j,Ji=new j,as=new j,zs=new j,ks=new j,Qi=new j;function ro(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Qi.fromArray(i,s);const o=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),m=n.dot(Qi);if(Math.max(-Math.max(l,c,m),Math.min(l,c,m))>o)return!1}return!0}const Re=new j,Vs=new Wt;let Ad=0;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sl&&(t.usage=this.usage),t}}class ah extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class oh extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xe extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Cd=new Ti,os=new j,so=new j;class Qr{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(os,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(so)),this.expandByPoint(os.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Rd=0;const Tn=new xe,ao=new ke,Ar=new j,yn=new Ti,ls=new Ti,Ue=new j;class Ye extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yf(t)?oh:ah)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return ao.lookAt(t),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(yn.min,ls.min),yn.expandByPoint(Ue),Ue.addVectors(yn.max,ls.max),yn.expandByPoint(Ue)):(yn.expandByPoint(ls.min),yn.expandByPoint(ls.max))}yn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,m=o.count;c<m;c++)Ue.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(t,c),Ue.add(Ar)),r=Math.max(r,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new j,l[S]=new j;const c=new j,m=new j,d=new j,u=new Wt,f=new Wt,g=new Wt,_=new j,p=new j;function h(S,T,z){c.fromBufferAttribute(n,S),m.fromBufferAttribute(n,T),d.fromBufferAttribute(n,z),u.fromBufferAttribute(s,S),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,z),m.sub(c),d.sub(c),f.sub(u),g.sub(u);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(m).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),p.copy(d).multiplyScalar(f.x).addScaledVector(m,-g.x).multiplyScalar(U),o[S].add(_),o[T].add(_),o[z].add(_),l[S].add(p),l[T].add(p),l[z].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let S=0,T=v.length;S<T;++S){const z=v[S],U=z.start,C=z.count;for(let L=U,y=U+C;L<y;L+=3)h(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const x=new j,w=new j,A=new j,R=new j;function P(S){A.fromBufferAttribute(r,S),R.copy(A);const T=o[S];x.copy(T),x.sub(A.multiplyScalar(A.dot(T))).normalize(),w.crossVectors(R,T);const U=w.dot(l[S])<0?-1:1;a.setXYZW(S,x.x,x.y,x.z,U)}for(let S=0,T=v.length;S<T;++S){const z=v[S],U=z.start,C=z.count;for(let L=U,y=U+C;L<y;L+=3)P(t.getX(L+0)),P(t.getX(L+1)),P(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,m=new j,d=new j;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),m.subVectors(a,s),d.subVectors(r,s),m.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(m),l.add(m),c.add(m),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),m.subVectors(a,s),d.subVectors(r,s),m.cross(d),n.setXYZ(u+0,m.x,m.y,m.z),n.setXYZ(u+1,m.x,m.y,m.z),n.setXYZ(u+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,m=o.itemSize,d=o.normalized,u=new c.constructor(l.length*m);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*m;for(let h=0;h<m;h++)u[g++]=c[f++]}return new un(u,m,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let m=0,d=c.length;m<d;m++){const u=c[m],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],m=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];m.push(f.toJSON(t.data))}m.length>0&&(r[l]=m,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const m=r[c];this.setAttribute(c,m.clone(e))}const s=t.morphAttributes;for(const c in s){const m=[],d=s[c];for(let u=0,f=d.length;u<f;u++)m.push(d[u].clone(e));this.morphAttributes[c]=m}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,m=a.length;c<m;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new j;class Gi{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Id=0;class ts extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Xr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Lo,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const mi=new j,oo=new j,Hs=new j,Fi=new j,lo=new j,Gs=new j,co=new j;class Ca{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){oo.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(oo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Hs),o=Fi.dot(this.direction),l=-Fi.dot(Hs),c=Fi.lengthSq(),m=Math.abs(1-a*a);let d,u,f,g;if(m>0)if(d=a*l-o,u=a*o-l,g=s*m,d>=0)if(u>=-g)if(u<=g){const _=1/m;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(oo).addScaledVector(Hs,u),f}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const n=mi.dot(this.direction),r=mi.dot(mi)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,m=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),m>=0?(s=(t.min.y-u.y)*m,a=(t.max.y-u.y)*m):(s=(t.max.y-u.y)*m,a=(t.min.y-u.y)*m),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,r,s){lo.subVectors(e,t),Gs.subVectors(n,t),co.crossVectors(lo,Gs);let a=this.direction.dot(co),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,t);const l=o*this.direction.dot(Gs.crossVectors(Fi,Gs));if(l<0)return null;const c=o*this.direction.dot(lo.cross(Fi));if(c<0||l+c>a)return null;const m=-o*Fi.dot(co);return m<0?null:this.at(m/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kl extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Nc=new xe,tr=new Ca,Ws=new Qr,Fc=new j,Xs=new j,qs=new j,Ys=new j,uo=new j,js=new j,Oc=new j,Zs=new j;class Rn extends ke{constructor(t=new Ye,e=new kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const m=o[l],d=s[l];m!==0&&(uo.fromBufferAttribute(d,t),a?js.addScaledVector(uo,m):js.addScaledVector(uo.sub(e),m))}e.add(js)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),tr.copy(t.ray).recast(t.near),!(Ws.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Ws,Fc)===null||tr.origin.distanceToSquared(Fc)>(t.far-t.near)**2))&&(Nc.copy(s).invert(),tr.copy(t.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,tr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,m=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],h=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let w=v,A=x;w<A;w+=3){const R=o.getX(w),P=o.getX(w+1),S=o.getX(w+2);r=Ks(this,h,t,n,c,m,d,R,P,S),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,h=_;p<h;p+=3){const v=o.getX(p),x=o.getX(p+1),w=o.getX(p+2);r=Ks(this,a,t,n,c,m,d,v,x,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],h=a[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=v,A=x;w<A;w+=3){const R=w,P=w+1,S=w+2;r=Ks(this,h,t,n,c,m,d,R,P,S),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,h=_;p<h;p+=3){const v=p,x=p+1,w=p+2;r=Ks(this,a,t,n,c,m,d,v,x,w),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Dd(i,t,e,n,r,s,a,o){let l;if(t.side===cn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===qi,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:i}}function Ks(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Xs),i.getVertexPosition(l,qs),i.getVertexPosition(c,Ys);const m=Dd(i,t,e,n,Xs,qs,Ys,Oc);if(m){const d=new j;zn.getBarycoord(Oc,Xs,qs,Ys,d),r&&(m.uv=zn.getInterpolatedAttribute(r,o,l,c,d,new Wt)),s&&(m.uv1=zn.getInterpolatedAttribute(s,o,l,c,d,new Wt)),a&&(m.normal=zn.getInterpolatedAttribute(a,o,l,c,d,new j),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new j,materialIndex:0};zn.getNormal(Xs,qs,Ys,u.normal),m.face=u,m.barycoord=d}return m}class Ld extends sn{constructor(t=null,e=1,n=1,r,s,a,o,l,c=ze,m=ze,d,u){super(null,a,o,l,c,m,r,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ho=new j,Ud=new j,Nd=new $t;class ki{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ho.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ho),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nd.getNormalMatrix(t),r=this.coplanarPoint(ho).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Qr,Fd=new Wt(.5,.5),$s=new j;class Vl{constructor(t=new ki,e=new ki,n=new ki,r=new ki,s=new ki,a=new ki){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],m=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],h=s[11],v=s[12],x=s[13],w=s[14],A=s[15];if(r[0].setComponents(c-a,f-m,h-g,A-v).normalize(),r[1].setComponents(c+a,f+m,h+g,A+v).normalize(),r[2].setComponents(c+o,f+d,h+_,A+x).normalize(),r[3].setComponents(c-o,f-d,h-_,A-x).normalize(),n)r[4].setComponents(l,u,p,w).normalize(),r[5].setComponents(c-l,f-u,h-p,A-w).normalize();else if(r[4].setComponents(c-l,f-u,h-p,A-w).normalize(),e===Qn)r[5].setComponents(c+l,f+u,h+p,A+w).normalize();else if(e===ys)r[5].setComponents(l,u,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(t){er.center.set(0,0,0);const e=Fd.distanceTo(t.center);return er.radius=.7071067811865476+e,er.applyMatrix4(t.matrixWorld),this.intersectsSphere(er)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if($s.x=r.normal.x>0?t.max.x:t.min.x,$s.y=r.normal.y>0?t.max.y:t.min.y,$s.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hl extends ts{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wa=new j,Ta=new j,Bc=new xe,cs=new Ca,Js=new Qr,fo=new j,zc=new j;class Od extends ke{constructor(t=new Ye,e=new Hl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)wa.fromBufferAttribute(e,r-1),Ta.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=wa.distanceTo(Ta);t.setAttribute("lineDistance",new Xe(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),Js.radius+=s,t.ray.intersectsSphere(Js)===!1)return;Bc.copy(r).invert(),cs.copy(t.ray).applyMatrix4(Bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,m=n.index,u=n.attributes.position;if(m!==null){const f=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const h=m.getX(_),v=m.getX(_+1),x=Qs(this,t,cs,l,h,v,_);x&&e.push(x)}if(this.isLineLoop){const _=m.getX(g-1),p=m.getX(f),h=Qs(this,t,cs,l,_,p,g-1);h&&e.push(h)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const h=Qs(this,t,cs,l,_,_+1,_);h&&e.push(h)}if(this.isLineLoop){const _=Qs(this,t,cs,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qs(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(wa.fromBufferAttribute(o,r),Ta.fromBufferAttribute(o,s),e.distanceSqToSegment(wa,Ta,fo,zc)>n)return;fo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fo);if(!(c<t.near||c>t.far))return{distance:c,point:zc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const kc=new j,Vc=new j;class lh extends Od{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)kc.fromBufferAttribute(e,r),Vc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+kc.distanceTo(Vc);t.setAttribute("lineDistance",new Xe(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ch extends sn{constructor(t=[],e=hr,n,r,s,a,o,l,c,m){super(t,e,n,r,s,a,o,l,c,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ms extends sn{constructor(t,e,n=si,r,s,a,o=ze,l=ze,c,m=wi,d=1){if(m!==wi&&m!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,r,s,a,o,l,m,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bd extends Ms{constructor(t,e=si,n=hr,r,s,a=ze,o=ze,l,c=wi){const m={width:t,height:t,depth:1},d=[m,m,m,m,m,m];super(t,t,e,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class uh extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Es extends Ye{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],m=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(m,3)),this.setAttribute("uv",new Xe(d,2));function g(_,p,h,v,x,w,A,R,P,S,T){const z=w/P,U=A/S,C=w/2,L=A/2,y=R/2,F=P+1,V=S+1;let N=0,$=0;const G=new j;for(let tt=0;tt<V;tt++){const H=tt*U-L;for(let k=0;k<F;k++){const dt=k*z-C;G[_]=dt*v,G[p]=H*x,G[h]=y,c.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[h]=R>0?1:-1,m.push(G.x,G.y,G.z),d.push(k/P),d.push(1-tt/S),N+=1}}for(let tt=0;tt<S;tt++)for(let H=0;H<P;H++){const k=u+H+F*tt,dt=u+H+F*(tt+1),at=u+(H+1)+F*(tt+1),ht=u+(H+1)+F*tt;l.push(k,dt,ht),l.push(dt,at,ht),$+=6}o.addGroup(f,$,T),f+=$,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ra extends Ye{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,m=l+1,d=t/o,u=e/l,f=[],g=[],_=[],p=[];for(let h=0;h<m;h++){const v=h*u-a;for(let x=0;x<c;x++){const w=x*d-s;g.push(w,-v,0),_.push(0,0,1),p.push(x/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const x=v+c*h,w=v+c*(h+1),A=v+1+c*(h+1),R=v+1+c*h;f.push(x,w,R),f.push(w,A,R)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.width,t.height,t.widthSegments,t.heightSegments)}}class zd extends Ye{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,r=new j,s=new j;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,m=l.length;c<m;++c){const d=l[c],u=d.start,f=d.count;for(let g=u,_=u+f;g<_;g+=3)for(let p=0;p<3;p++){const h=o.getX(g+p),v=o.getX(g+(p+1)%3);r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,v),Hc(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const m=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,d),Hc(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Xe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Hc(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}function Jr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=Jr(i[e]);for(const r in n)t[r]=n[r]}return t}function kd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Gl={clone:Jr,merge:rn};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gd extends Vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wd extends ts{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ee(16777215),this.specular=new ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Cl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xd extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qd extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fh extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const po=new xe,Gc=new j,Wc=new j;class Yd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===ys||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ta=new j,ea=new Yi,Xn=new j;class dh extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ta,ea,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ta,ea,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new j,Xc=new Wt,qc=new Wt;class Cn extends dh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,qc),e.subVectors(qc,Xc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Wl extends dh{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=m*this.view.offsetY,l=o-m*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jd extends Yd{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zd extends fh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new jd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Kd extends fh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $d extends Ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Cr=-90,Rr=1;class Jd extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(Cr,Rr,t,e);r.layers=this.layers,this.add(r);const s=new Cn(Cr,Rr,t,e);s.layers=this.layers,this.add(s);const a=new Cn(Cr,Rr,t,e);a.layers=this.layers,this.add(a);const o=new Cn(Cr,Rr,t,e);o.layers=this.layers,this.add(o);const l=new Cn(Cr,Rr,t,e);l.layers=this.layers,this.add(l);const c=new Cn(Cr,Rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,m]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qd extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ml extends Pd{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Yc=new xe;class tp{constructor(t,e,n=0,r=1/0){this.ray=new Ca(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yc),this}intersectObject(t,e=!0,n=[]){return bl(t,this,n,e),n.sort(jc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)bl(t[r],this,n,e);return n.sort(jc),n}}function jc(i,t){return i.distance-t.distance}function bl(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)bl(s[a],t,e,!0)}}class Zc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kc=new j,na=new j,Pr=new j,Ir=new j,mo=new j,ep=new j,np=new j;class ip{constructor(t=new j,e=new j){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Kc.subVectors(t,this.start),na.subVectors(this.end,this.start);const n=na.dot(na);let s=na.dot(Kc)/n;return e&&(s=jt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=ep,n=np){const r=10000000000000001e-32;let s,a;const o=this.start,l=t.start,c=this.end,m=t.end;Pr.subVectors(c,o),Ir.subVectors(m,l),mo.subVectors(o,l);const d=Pr.dot(Pr),u=Ir.dot(Ir),f=Ir.dot(mo);if(d<=r&&u<=r)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(d<=r)s=0,a=f/u,a=jt(a,0,1);else{const g=Pr.dot(mo);if(u<=r)a=0,s=jt(-g/d,0,1);else{const _=Pr.dot(Ir),p=d*u-_*_;p!==0?s=jt((_*f-g*u)/p,0,1):s=0,a=(_*s+f)/u,a<0?(a=0,s=jt(-g/d,0,1)):a>1&&(a=1,s=jt((_-g)/d,0,1))}}return e.copy(o).addScaledVector(Pr,s),n.copy(l).addScaledVector(Ir,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class rp extends lh{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ye;r.setAttribute("position",new Xe(e,3)),r.setAttribute("color",new Xe(n,3));const s=new Hl({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new ee,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class sp extends fr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Xt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $c(i,t,e,n){const r=ap(n);switch(e){case Ju:return i*t;case th:return i*t/r.components*r.byteLength;case Dl:return i*t/r.components*r.byteLength;case Kr:return i*t*2/r.components*r.byteLength;case Ll:return i*t*2/r.components*r.byteLength;case Qu:return i*t*3/r.components*r.byteLength;case kn:return i*t*4/r.components*r.byteLength;case Ul:return i*t*4/r.components*r.byteLength;case da:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:case qo:return Math.max(i,16)*Math.max(t,8)/4;case Go:case Xo:return Math.max(i,8)*Math.max(t,8)/2;case Yo:case jo:case Ko:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _l:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xl:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ap(i){switch(i){case Mn:case ju:return{byteLength:1,components:1};case vs:case Zu:case Ei:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case si:case Rl:case Jn:return{byteLength:4,components:1};case Ku:case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);function ph(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function op(i){const t=new WeakMap;function e(o,l){const c=o.array,m=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,m),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const m=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,m);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*m.BYTES_PER_ELEMENT,m,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const m=t.get(o);(!m||m.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
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
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ip=`#define PI 3.141592653589793
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
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
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
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
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
#endif`,am=`uniform sampler2D dfgLUT;
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
}`,om=`
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_m=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qm=`float getShadowMask() {
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
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,pg=`#if DEPTH_PACKING == 3200
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
}`,mg=`#define DISTANCE
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
}`,gg=`#define DISTANCE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,bg=`#define LAMBERT
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
}`,Eg=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Rg=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,Ig=`#define STANDARD
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
}`,Dg=`#define STANDARD
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
}`,Lg=`#define TOON
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
}`,Ug=`#define TOON
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
}`,Ng=`uniform float size;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:_p,begin_vertex:vp,beginnormal_vertex:xp,bsdfs:yp,iridescence_fragment:Sp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Cp,color_pars_vertex:Rp,color_vertex:Pp,common:Ip,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Hp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:tm,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:jp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Kp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Jp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:rm,lights_physical_fragment:sm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:dm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:_m,metalnessmap_fragment:vm,metalnessmap_pars_fragment:xm,morphinstance_vertex:ym,morphcolor_vertex:Sm,morphnormal_vertex:Mm,morphtarget_pars_vertex:bm,morphtarget_vertex:Em,normal_fragment_begin:wm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Cm,normal_vertex:Rm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:Bm,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:jm,skinning_vertex:Zm,skinnormal_vertex:Km,specularmap_fragment:$m,specularmap_pars_fragment:Jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:tg,transmission_fragment:eg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:rg,uv_vertex:sg,worldpos_vertex:ag,background_vert:og,background_frag:lg,backgroundCube_vert:cg,backgroundCube_frag:ug,cube_vert:hg,cube_frag:fg,depth_vert:dg,depth_frag:pg,distance_vert:mg,distance_frag:gg,equirect_vert:_g,equirect_frag:vg,linedashed_vert:xg,linedashed_frag:yg,meshbasic_vert:Sg,meshbasic_frag:Mg,meshlambert_vert:bg,meshlambert_frag:Eg,meshmatcap_vert:wg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:Cg,meshphong_vert:Rg,meshphong_frag:Pg,meshphysical_vert:Ig,meshphysical_frag:Dg,meshtoon_vert:Lg,meshtoon_frag:Ug,points_vert:Ng,points_frag:Fg,shadow_vert:Og,shadow_frag:Bg,sprite_vert:zg,sprite_frag:kg},Rt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ln={basic:{uniforms:rn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:rn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:rn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:rn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:rn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:rn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:rn([Rt.points,Rt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:rn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:rn([Rt.common,Rt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:rn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:rn([Rt.sprite,Rt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:rn([Rt.common,Rt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:rn([Rt.lights,Rt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ln.physical={uniforms:rn([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const ia={r:0,b:0,g:0},nr=new ai,Vg=new xe;function Hg(i,t,e,n,r,s){const a=new ee(0);let o=r===!0?0:1,l,c,m=null,d=0,u=null;function f(v){let x=v.isScene===!0?v.background:null;if(x&&x.isTexture){const w=v.backgroundBlurriness>0;x=t.get(x,w)}return x}function g(v){let x=!1;const w=f(v);w===null?p(a,o):w&&w.isColor&&(p(w,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||x)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,x){const w=f(x);w&&(w.isCubeTexture||w.mapping===Aa)?(c===void 0&&(c=new Rn(new Es(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Jr(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),nr.copy(x.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(nr)),c.material.toneMapped=ie.getTransfer(w.colorSpace)!==ue,(m!==w||d!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,m=w,d=w.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Rn(new Ra(2,2),new Vn({name:"BackgroundMaterial",uniforms:Jr(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ie.getTransfer(w.colorSpace)!==ue,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||d!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,m=w,d=w.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(ia,hh(i)),e.buffers.color.setClear(ia.r,ia.g,ia.b,x,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),o=x,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:h}}function Gg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(U,C,L,y,F){let V=!1;const N=d(U,y,L,C);s!==N&&(s=N,c(s.object)),V=f(U,y,L,F),V&&g(U,y,L,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,w(U,C,L,y),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function m(U){return i.deleteVertexArray(U)}function d(U,C,L,y){const F=y.wireframe===!0;let V=n[C.id];V===void 0&&(V={},n[C.id]=V);const N=U.isInstancedMesh===!0?U.id:0;let $=V[N];$===void 0&&($={},V[N]=$);let G=$[L.id];G===void 0&&(G={},$[L.id]=G);let tt=G[F];return tt===void 0&&(tt=u(l()),G[F]=tt),tt}function u(U){const C=[],L=[],y=[];for(let F=0;F<e;F++)C[F]=0,L[F]=0,y[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:y,object:U,attributes:{},index:null}}function f(U,C,L,y){const F=s.attributes,V=C.attributes;let N=0;const $=L.getAttributes();for(const G in $)if($[G].location>=0){const H=F[G];let k=V[G];if(k===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(k=U.instanceColor)),H===void 0||H.attribute!==k||k&&H.data!==k.data)return!0;N++}return s.attributesNum!==N||s.index!==y}function g(U,C,L,y){const F={},V=C.attributes;let N=0;const $=L.getAttributes();for(const G in $)if($[G].location>=0){let H=V[G];H===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(H=U.instanceColor));const k={};k.attribute=H,H&&H.data&&(k.data=H.data),F[G]=k,N++}s.attributes=F,s.attributesNum=N,s.index=y}function _(){const U=s.newAttributes;for(let C=0,L=U.length;C<L;C++)U[C]=0}function p(U){h(U,0)}function h(U,C){const L=s.newAttributes,y=s.enabledAttributes,F=s.attributeDivisors;L[U]=1,y[U]===0&&(i.enableVertexAttribArray(U),y[U]=1),F[U]!==C&&(i.vertexAttribDivisor(U,C),F[U]=C)}function v(){const U=s.newAttributes,C=s.enabledAttributes;for(let L=0,y=C.length;L<y;L++)C[L]!==U[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function x(U,C,L,y,F,V,N){N===!0?i.vertexAttribIPointer(U,C,L,F,V):i.vertexAttribPointer(U,C,L,y,F,V)}function w(U,C,L,y){_();const F=y.attributes,V=L.getAttributes(),N=C.defaultAttributeValues;for(const $ in V){const G=V[$];if(G.location>=0){let tt=F[$];if(tt===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor)),tt!==void 0){const H=tt.normalized,k=tt.itemSize,dt=t.get(tt);if(dt===void 0)continue;const at=dt.buffer,ht=dt.type,J=dt.bytesPerElement,ft=ht===i.INT||ht===i.UNSIGNED_INT||tt.gpuType===Rl;if(tt.isInterleavedBufferAttribute){const lt=tt.data,St=lt.stride,Mt=tt.offset;if(lt.isInstancedInterleavedBuffer){for(let yt=0;yt<G.locationSize;yt++)h(G.location+yt,lt.meshPerAttribute);U.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let yt=0;yt<G.locationSize;yt++)p(G.location+yt);i.bindBuffer(i.ARRAY_BUFFER,at);for(let yt=0;yt<G.locationSize;yt++)x(G.location+yt,k/G.locationSize,ht,H,St*J,(Mt+k/G.locationSize*yt)*J,ft)}else{if(tt.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)h(G.location+lt,tt.meshPerAttribute);U.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let lt=0;lt<G.locationSize;lt++)p(G.location+lt);i.bindBuffer(i.ARRAY_BUFFER,at);for(let lt=0;lt<G.locationSize;lt++)x(G.location+lt,k/G.locationSize,ht,H,k*J,k/G.locationSize*lt*J,ft)}}else if(N!==void 0){const H=N[$];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(G.location,H);break;case 3:i.vertexAttrib3fv(G.location,H);break;case 4:i.vertexAttrib4fv(G.location,H);break;default:i.vertexAttrib1fv(G.location,H)}}}}v()}function A(){T();for(const U in n){const C=n[U];for(const L in C){const y=C[L];for(const F in y){const V=y[F];for(const N in V)m(V[N].object),delete V[N];delete y[F]}}delete n[U]}}function R(U){if(n[U.id]===void 0)return;const C=n[U.id];for(const L in C){const y=C[L];for(const F in y){const V=y[F];for(const N in V)m(V[N].object),delete V[N];delete y[F]}}delete n[U.id]}function P(U){for(const C in n){const L=n[C];for(const y in L){const F=L[y];if(F[U.id]===void 0)continue;const V=F[U.id];for(const N in V)m(V[N].object),delete V[N];delete F[U.id]}}}function S(U){for(const C in n){const L=n[C],y=U.isInstancedMesh===!0?U.id:0,F=L[y];if(F!==void 0){for(const V in F){const N=F[V];for(const $ in N)m(N[$].object),delete N[$];delete F[V]}delete L[y],Object.keys(L).length===0&&delete n[C]}}}function T(){z(),a=!0,s!==r&&(s=r,c(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Wg(i,t,e){let n;function r(c){n=c}function s(c,m){i.drawArrays(n,c,m),e.update(m,n,1)}function a(c,m,d){d!==0&&(i.drawArraysInstanced(n,c,m,d),e.update(m,n,d))}function o(c,m,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,m,0,d);let f=0;for(let g=0;g<d;g++)f+=m[g];e.update(f,n,1)}function l(c,m,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],m[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,m,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=m[_]*u[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==kn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const S=P===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Jn&&!S)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const m=l(c);m!==c&&(Xt("WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:w,maxSamples:A,samples:R}}function qg(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ki,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||r;return r=u,n=d.length,f},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=m(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?m(null):c();else{const v=s?0:n,x=v*4;let w=h.clippingState||null;l.value=w,w=m(g,u,x,f);for(let A=0;A!==x;++A)w[A]=e[A];h.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function m(d,u,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=f+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,w=f;x!==_;++x,w+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}const Wi=4,Jc=[.125,.215,.35,.446,.526,.582],sr=20,Yg=256,us=new Wl,Qc=new ee;let go=null,_o=0,vo=0,xo=!1;const jg=new j;class tu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=jg}=s;go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(go,_o,vo),this._renderer.xr.enabled=xo,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Ei,format:kn,colorSpace:$r,depthBuffer:!1},r=eu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zg(s)),this._blurMaterial=$g(s,t,e),this._ggxMaterial=Kg(s,t,e)}return r}_compileMaterial(t){const e=new Rn(new Ye,t);this._renderer.compile(e,us)}_sceneToCubeUV(t,e,n,r,s){const l=new Cn(90,1,e,n),c=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Qc),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new Es,new kl({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let h=!1;const v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,h=!0):(p.color.copy(Qc),h=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+m[x],s.y,s.z)):w===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+m[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+m[x]));const A=this._cubeSize;Dr(r,w*A,x>2?A:0,A,A),d.setRenderTarget(r),h&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===hr||t.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,us)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-m*m),u=0+c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Wi?n-g+Wi:0),h=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Dr(s,p,h,3*_,2*_),r.setRenderTarget(s),r.render(o,us),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Dr(t,p,h,3*_,2*_),r.setRenderTarget(t),r.render(o,us)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ne("blur direction must be either latitudinal or longitudinal!");const m=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*sr-1),_=s/g,p=isFinite(s)?1+Math.floor(m*_):sr;p>sr&&Xt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const h=[];let v=0;for(let P=0;P<sr;++P){const S=P/_,T=Math.exp(-S*S/2);h.push(T),P===0?v+=T:P<p&&(v+=2*T)}for(let P=0;P<h.length;P++)h[P]=h[P]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const w=this._sizeLods[r],A=3*w*(r>x-Wi?r-x+Wi:0),R=4*(this._cubeSize-w);Dr(e,A,R,3*w,2*w),l.setRenderTarget(e),l.render(d,us)}}function Zg(i){const t=[],e=[],n=[];let r=i;const s=i-Wi+1+Jc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Wi?l=Jc[a-i+Wi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),m=-c,d=1+c,u=[m,m,d,m,d,d,m,m,d,d,m,d],f=6,g=6,_=3,p=2,h=1,v=new Float32Array(_*g*f),x=new Float32Array(p*g*f),w=new Float32Array(h*g*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,S=R>2?0:-1,T=[P,S,0,P+2/3,S,0,P+2/3,S+1,0,P,S,0,P+2/3,S+1,0,P,S+1,0];v.set(T,_*g*R),x.set(u,p*g*R);const z=[R,R,R,R,R,R];w.set(z,h*g*R)}const A=new Ye;A.setAttribute("position",new un(v,_)),A.setAttribute("uv",new un(x,p)),A.setAttribute("faceIndex",new un(w,h)),n.push(new Rn(A,null)),r>Wi&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function eu(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Kg(i,t,e){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function $g(i,t,e){const n=new Float32Array(sr),r=new j(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function nu(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function iu(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}class mh extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ch(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Es(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Si});s.uniforms.tEquirect.value=e;const a=new Rn(r,s),o=e.minFilter;return e.minFilter===or&&(e.minFilter=We),new Jd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function Jg(i){let t=new WeakMap,e=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Va||f===Ha)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new mh(g.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Va||f===Ha,_=f===hr||f===Zr;if(g||_){let p=e.get(u);const h=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new tu(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new tu(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",m),p.texture):null}}}return u}function o(u,f){return f===Va?u.mapping=hr:f===Ha&&(u.mapping=Zr),u}function l(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function m(u){const f=u.target;f.removeEventListener("dispose",m);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Qg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ea("WebGLRenderer: "+n+" extension not supported."),r}}}function t0(i,t,e,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let x=0,w=v.length;x<w;x+=3){const A=v[x+0],R=v[x+1],P=v[x+2];u.push(A,R,R,P,P,A)}}else{const v=g.array;_=g.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const A=x+0,R=x+1,P=x+2;u.push(A,R,R,P,P,A)}}const p=new(g.count>=65535?oh:ah)(u,1);p.version=_;const h=s.get(d);h&&t.remove(h),s.set(d,p)}function m(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:m}}function e0(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,u*a,g),e.update(f,n,g))}function m(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let p=0;for(let h=0;h<g;h++)p+=f[h];e.update(p,n,1)}function d(u,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<u.length;h++)c(u[h]/a,f[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,_,0,g);let h=0;for(let v=0;v<g;v++)h+=f[v]*_[v];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=m,this.renderMultiDrawInstances=d}function n0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function i0(i,t,e){const n=new WeakMap,r=new me;function s(a,o,l){const c=a.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=m!==void 0?m.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let T=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let w=o.attributes.position.count*x,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*A*4*d),P=new rh(R,w,A,d);P.type=Jn,P.needsUpdate=!0;const S=x*4;for(let z=0;z<d;z++){const U=p[z],C=h[z],L=v[z],y=w*A*4*z;for(let F=0;F<U.count;F++){const V=F*S;f===!0&&(r.fromBufferAttribute(U,F),R[y+V+0]=r.x,R[y+V+1]=r.y,R[y+V+2]=r.z,R[y+V+3]=0),g===!0&&(r.fromBufferAttribute(C,F),R[y+V+4]=r.x,R[y+V+5]=r.y,R[y+V+6]=r.z,R[y+V+7]=0),_===!0&&(r.fromBufferAttribute(L,F),R[y+V+8]=r.x,R[y+V+9]=r.y,R[y+V+10]=r.z,R[y+V+11]=L.itemSize===4?r.w:1)}}u={count:d,texture:P,size:new Wt(w,A)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function r0(i,t,e,n,r){let s=new WeakMap;function a(c){const m=r.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==m&&(t.update(u),s.set(u,m)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==m&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,m))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==m&&(f.update(),s.set(f,m))}return u}function o(){s=new WeakMap}function l(c){const m=c.target;m.removeEventListener("dispose",l),n.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:a,dispose:o}}const s0={[ku]:"LINEAR_TONE_MAPPING",[Vu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[Gu]:"ACES_FILMIC_TONE_MAPPING",[Xu]:"AGX_TONE_MAPPING",[qu]:"NEUTRAL_TONE_MAPPING",[Wu]:"CUSTOM_TONE_MAPPING"};function a0(i,t,e,n,r){const s=new ni(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new ni(t,e,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),o=new Ye;o.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xe([0,2,0,0,2,0],2));const l=new Gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Rn(o,l),m=new Wl(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,_=null,p=[],h=!1;this.setSize=function(v,x){s.setSize(v,x),a.setSize(v,x);for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(v,x)}},this.setEffects=function(v){p=v,h=p.length>0&&p[0].isRenderPass===!0;const x=s.width,w=s.height;for(let A=0;A<p.length;A++){const R=p[A];R.setSize&&R.setSize(x,w)}},this.begin=function(v,x){if(f||v.toneMapping===ei&&p.length===0)return!1;if(_=x,x!==null){const w=x.width,A=x.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return h===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=ei,!0},this.hasRenderPass=function(){return h},this.end=function(v,x){v.toneMapping=g,f=!0;let w=s,A=a;for(let R=0;R<p.length;R++){const P=p[R];if(P.enabled!==!1&&(P.render(v,A,w,x),P.needsSwap!==!1)){const S=w;w=A,A=S}}if(d!==v.outputColorSpace||u!==v.toneMapping){d=v.outputColorSpace,u=v.toneMapping,l.defines={},ie.getTransfer(d)===ue&&(l.defines.SRGB_TRANSFER="");const R=s0[u];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(_),v.render(c,m),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const gh=new sn,El=new Ms(1,1),_h=new rh,vh=new vd,xh=new ch,ru=[],su=[],au=new Float32Array(16),ou=new Float32Array(9),lu=new Float32Array(4);function es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ru[r];if(s===void 0&&(s=new Float32Array(r),ru[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ia(i,t){let e=su[t];e===void 0&&(e=new Int32Array(t),su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function o0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function h0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),Le(e,n)}}function f0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;ou.set(n),i.uniformMatrix3fv(this.addr,!1,ou),Le(e,n)}}function d0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),Le(e,n)}}function p0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function v0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function M0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(El.compareFunction=e.isReversedDepthBuffer()?Fl:Nl,s=El):s=gh,e.setTexture2D(t||s,r)}function b0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||vh,r)}function E0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||xh,r)}function w0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||_h,r)}function T0(i){switch(i){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return u0;case 35674:return h0;case 35675:return f0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return y0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}function A0(i,t){i.uniform1fv(this.addr,t)}function C0(i,t){const e=es(t,this.size,2);i.uniform2fv(this.addr,e)}function R0(i,t){const e=es(t,this.size,3);i.uniform3fv(this.addr,e)}function P0(i,t){const e=es(t,this.size,4);i.uniform4fv(this.addr,e)}function I0(i,t){const e=es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function D0(i,t){const e=es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function L0(i,t){const e=es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function U0(i,t){i.uniform1iv(this.addr,t)}function N0(i,t){i.uniform2iv(this.addr,t)}function F0(i,t){i.uniform3iv(this.addr,t)}function O0(i,t){i.uniform4iv(this.addr,t)}function B0(i,t){i.uniform1uiv(this.addr,t)}function z0(i,t){i.uniform2uiv(this.addr,t)}function k0(i,t){i.uniform3uiv(this.addr,t)}function V0(i,t){i.uniform4uiv(this.addr,t)}function H0(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=El:a=gh;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function G0(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||vh,s[a])}function W0(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||xh,s[a])}function X0(i,t,e){const n=this.cache,r=t.length,s=Ia(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||_h,s[a])}function q0(i){switch(i){case 5126:return A0;case 35664:return C0;case 35665:return R0;case 35666:return P0;case 35674:return I0;case 35675:return D0;case 35676:return L0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class Y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}}class j0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}}class Z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function cu(i,t){i.seq.push(t),i.map[t.id]=t}function K0(i,t,e){const n=i.name,r=n.length;for(yo.lastIndex=0;;){const s=yo.exec(n),a=yo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){cu(e,c===void 0?new Y0(o,i,t):new j0(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Z0(o),cu(e,d)),e=d}}}class _a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);K0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function uu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $0=37297;let J0=0;function Q0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const hu=new $t;function t_(i){ie._getMatrix(hu,ie.workingColorSpace,i);const t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Sa:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Q0(i.getShaderSource(t),o)}else return s}function e_(i,t){const e=t_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const n_={[ku]:"Linear",[Vu]:"Reinhard",[Hu]:"Cineon",[Gu]:"ACESFilmic",[Xu]:"AgX",[qu]:"Neutral",[Wu]:"Custom"};function i_(i,t){const e=n_[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ra=new j;function r_(){ie.getLuminanceCoefficients(ra);const i=ra.x.toFixed(4),t=ra.y.toFixed(4),e=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function a_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ps(i){return i!==""}function du(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(l_,u_)}const c_=new Map;function u_(i,t){let e=Jt[t];if(e===void 0){const n=c_.get(t);if(n!==void 0)e=Jt[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wl(e)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(h_,f_)}function f_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const d_={[fa]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function p_(i){return d_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m_={[hr]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function g_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":m_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const __={[Zr]:"ENVMAP_MODE_REFRACTION"};function v_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":__[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x_={[Cl]:"ENVMAP_BLENDING_MULTIPLY",[Ff]:"ENVMAP_BLENDING_MIX",[Of]:"ENVMAP_BLENDING_ADD"};function y_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x_[i.combine]||"ENVMAP_BLENDING_NONE"}function S_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function M_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=p_(e),c=g_(e),m=v_(e),d=y_(e),u=S_(e),f=s_(e),g=a_(s),_=r.createProgram();let p,h,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),h.length>0&&(h+=`
`)):(p=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),h=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+m:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Jt.tonemapping_pars_fragment:"",e.toneMapping!==ei?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,e_("linearToOutputTexel",e.outputColorSpace),r_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=wl(a),a=du(a,e),a=pu(a,e),o=wl(o),o=du(o,e),o=pu(o,e),a=mu(a),o=mu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+p+a,w=v+h+o,A=uu(r,r.VERTEX_SHADER,x),R=uu(r,r.FRAGMENT_SHADER,w);r.attachShader(_,A),r.attachShader(_,R),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(U){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(_)||"",L=r.getShaderInfoLog(A)||"",y=r.getShaderInfoLog(R)||"",F=C.trim(),V=L.trim(),N=y.trim();let $=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,R);else{const tt=fu(r,A,"vertex"),H=fu(r,R,"fragment");ne("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+tt+`
`+H)}else F!==""?Xt("WebGLProgram: Program Info Log:",F):(V===""||N==="")&&(G=!1);G&&(U.diagnostics={runnable:$,programLog:F,vertexShader:{log:V,prefix:p},fragmentShader:{log:N,prefix:h}})}r.deleteShader(A),r.deleteShader(R),S=new _a(r,_),T=o_(r,_)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(_,$0)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let b_=0;class E_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w_(t),e.set(t,n)),n}}class w_{constructor(t){this.id=b_++,this.code=t,this.usedTimes=0}}function T_(i,t,e,n,r,s){const a=new zl,o=new E_,l=new Set,c=[],m=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,T,z,U,C){const L=U.fog,y=C.geometry,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,N=t.get(S.envMap||F,V),$=N&&N.mapping===Aa?N.image.height:null,G=f[S.type];S.precision!==null&&(u=n.getMaxPrecision(S.precision),u!==S.precision&&Xt("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const tt=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,H=tt!==void 0?tt.length:0;let k=0;y.morphAttributes.position!==void 0&&(k=1),y.morphAttributes.normal!==void 0&&(k=2),y.morphAttributes.color!==void 0&&(k=3);let dt,at,ht,J;if(G){const Qt=ln[G];dt=Qt.vertexShader,at=Qt.fragmentShader}else dt=S.vertexShader,at=S.fragmentShader,o.update(S),ht=o.getVertexShaderID(S),J=o.getFragmentShaderID(S);const ft=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),St=C.isInstancedMesh===!0,Mt=C.isBatchedMesh===!0,yt=!!S.map,Ft=!!S.matcap,Pt=!!N,E=!!S.aoMap,et=!!S.lightMap,q=!!S.bumpMap,O=!!S.normalMap,b=!!S.displacementMap,Y=!!S.emissiveMap,it=!!S.metalnessMap,ct=!!S.roughnessMap,W=S.anisotropy>0,I=S.clearcoat>0,M=S.dispersion>0,B=S.iridescence>0,Z=S.sheen>0,rt=S.transmission>0,Q=W&&!!S.anisotropyMap,wt=I&&!!S.clearcoatMap,vt=I&&!!S.clearcoatNormalMap,It=I&&!!S.clearcoatRoughnessMap,Bt=B&&!!S.iridescenceMap,pt=B&&!!S.iridescenceThicknessMap,xt=Z&&!!S.sheenColorMap,Ut=Z&&!!S.sheenRoughnessMap,Tt=!!S.specularMap,Et=!!S.specularColorMap,bt=!!S.specularIntensityMap,X=rt&&!!S.transmissionMap,mt=rt&&!!S.thicknessMap,_t=!!S.gradientMap,At=!!S.alphaMap,gt=S.alphaTest>0,ut=!!S.alphaHash,Dt=!!S.extensions;let Ht=ei;S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ht=i.toneMapping);const se={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:dt,fragmentShader:at,defines:S.defines,customVertexShaderID:ht,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&C._colorsTexture!==null,instancing:St,instancingColor:St&&C.instanceColor!==null,instancingMorph:St&&C.morphTexture!==null,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:$r,alphaToCoverage:!!S.alphaToCoverage,map:yt,matcap:Ft,envMap:Pt,envMapMode:Pt&&N.mapping,envMapCubeUVHeight:$,aoMap:E,lightMap:et,bumpMap:q,normalMap:O,displacementMap:b,emissiveMap:Y,normalMapObjectSpace:O&&S.normalMapType===kf,normalMapTangentSpace:O&&S.normalMapType===eh,metalnessMap:it,roughnessMap:ct,anisotropy:W,anisotropyMap:Q,clearcoat:I,clearcoatMap:wt,clearcoatNormalMap:vt,clearcoatRoughnessMap:It,dispersion:M,iridescence:B,iridescenceMap:Bt,iridescenceThicknessMap:pt,sheen:Z,sheenColorMap:xt,sheenRoughnessMap:Ut,specularMap:Tt,specularColorMap:Et,specularIntensityMap:bt,transmission:rt,transmissionMap:X,thicknessMap:mt,gradientMap:_t,opaque:S.transparent===!1&&S.blending===Xr&&S.alphaToCoverage===!1,alphaMap:At,alphaTest:gt,alphaHash:ut,combine:S.combine,mapUv:yt&&g(S.map.channel),aoMapUv:E&&g(S.aoMap.channel),lightMapUv:et&&g(S.lightMap.channel),bumpMapUv:q&&g(S.bumpMap.channel),normalMapUv:O&&g(S.normalMap.channel),displacementMapUv:b&&g(S.displacementMap.channel),emissiveMapUv:Y&&g(S.emissiveMap.channel),metalnessMapUv:it&&g(S.metalnessMap.channel),roughnessMapUv:ct&&g(S.roughnessMap.channel),anisotropyMapUv:Q&&g(S.anisotropyMap.channel),clearcoatMapUv:wt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:vt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&g(S.sheenRoughnessMap.channel),specularMapUv:Tt&&g(S.specularMap.channel),specularColorMapUv:Et&&g(S.specularColorMap.channel),specularIntensityMapUv:bt&&g(S.specularIntensityMap.channel),transmissionMapUv:X&&g(S.transmissionMap.channel),thicknessMapUv:mt&&g(S.thicknessMap.channel),alphaMapUv:At&&g(S.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(O||W),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!y.attributes.uv&&(yt||At),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||y.attributes.normal===void 0&&O===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:lt,skinning:C.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:k,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===ue,decodeVideoTextureEmissive:Y&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Sn,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)T.push(z),T.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(h(T,S),v(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function h(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const T=f[S.type];let z;if(T){const U=ln[T];z=Gl.clone(U.uniforms)}else z=S.uniforms;return z}function w(S,T){let z=m.get(T);return z!==void 0?++z.usedTimes:(z=new M_(i,T,S,r),c.push(z),m.set(T,z)),z}function A(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),m.delete(S.cacheKey),S.destroy()}}function R(S){o.remove(S)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:P}}function A_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function _u(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vu(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,h){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:h},i[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=a(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=h),t++,v}function l(u,f,g,_,p,h){const v=o(u,f,g,_,p,h);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):e.push(v)}function c(u,f,g,_,p,h){const v=o(u,f,g,_,p,h);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):e.unshift(v)}function m(u,f){e.length>1&&e.sort(u||C_),n.length>1&&n.sort(f||_u),r.length>1&&r.sort(f||_u)}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:m}}function R_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new vu,i.set(n,[a])):r>=s.length?(a=new vu,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function P_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new ee};break;case"SpotLight":e={position:new j,direction:new j,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function I_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let D_=0;function L_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function U_(i){const t=new P_,e=I_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const r=new j,s=new xe,a=new xe;function o(c){let m=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,p=0,h=0,v=0,x=0,w=0,A=0,R=0,P=0;c.sort(L_);for(let T=0,z=c.length;T<z;T++){const U=c[T],C=U.color,L=U.intensity,y=U.distance;let F=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Kr?F=U.shadow.map.texture:F=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)m+=C.r*L,d+=C.g*L,u+=C.b*L;else if(U.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(U.sh.coefficients[V],L);P++}else if(U.isDirectionalLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const N=U.shadow,$=e.get(U);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=U.shadow.matrix,v++}n.directional[f]=V,f++}else if(U.isSpotLight){const V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(C).multiplyScalar(L),V.distance=y,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,n.spot[_]=V;const N=U.shadow;if(U.map&&(n.spotLightMap[A]=U.map,A++,N.updateMatrices(U),U.castShadow&&R++),n.spotLightMatrix[_]=N.matrix,U.castShadow){const $=e.get(U);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=F,w++}_++}else if(U.isRectAreaLight){const V=t.get(U);V.color.copy(C).multiplyScalar(L),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),n.rectArea[p]=V,p++}else if(U.isPointLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){const N=U.shadow,$=e.get(U);$.shadowIntensity=N.intensity,$.shadowBias=N.bias,$.shadowNormalBias=N.normalBias,$.shadowRadius=N.radius,$.shadowMapSize=N.mapSize,$.shadowCameraNear=N.camera.near,$.shadowCameraFar=N.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=U.shadow.matrix,x++}n.point[g]=V,g++}else if(U.isHemisphereLight){const V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(L),V.groundColor.copy(U.groundColor).multiplyScalar(L),n.hemi[h]=V,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=d,n.ambient[2]=u;const S=n.hash;(S.directionalLength!==f||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==h||S.numDirectionalShadows!==v||S.numPointShadows!==x||S.numSpotShadows!==w||S.numSpotMaps!==A||S.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=w+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,S.directionalLength=f,S.pointLength=g,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=h,S.numDirectionalShadows=v,S.numPointShadows=x,S.numSpotShadows=w,S.numSpotMaps=A,S.numLightProbes=P,n.version=D_++)}function l(c,m){let d=0,u=0,f=0,g=0,_=0;const p=m.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const x=c[h];if(x.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),d++}else if(x.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function xu(i){const t=new U_(i),e=[],n=[];function r(m){c.camera=m,e.length=0,n.length=0}function s(m){e.push(m)}function a(m){n.push(m)}function o(){t.setup(e)}function l(m){t.setupView(e,m)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function N_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new xu(i),t.set(r,[o])):s>=a.length?(o=new xu(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
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
}`,B_=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],z_=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],yu=new xe,hs=new j,So=new j;function k_(i,t,e){let n=new Vl;const r=new Wt,s=new Wt,a=new me,o=new Xd,l=new qd,c={},m=e.maxTextureSize,d={[qi]:cn,[cn]:qi,[Sn]:Sn},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:F_,fragmentShader:O_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let h=this.type;this.render=function(R,P,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===_f&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fa);const T=i.getRenderTarget(),z=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Si),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=h!==this.type;L&&P.traverse(function(y){y.material&&(Array.isArray(y.material)?y.material.forEach(F=>F.needsUpdate=!0):y.material.needsUpdate=!0)});for(let y=0,F=R.length;y<F;y++){const V=R[y],N=V.shadow;if(N===void 0){Xt("WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const $=N.getFrameExtents();r.multiply($),s.copy(N.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/$.x),r.x=s.x*$.x,N.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/$.y),r.y=s.y*$.y,N.mapSize.y=s.y));const G=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=G,N.map===null||L===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ds){if(V.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new ni(r.x,r.y,{format:Kr,type:Ei,minFilter:We,magFilter:We,generateMipmaps:!1}),N.map.texture.name=V.name+".shadowMap",N.map.depthTexture=new Ms(r.x,r.y,Jn),N.map.depthTexture.name=V.name+".shadowMapDepth",N.map.depthTexture.format=wi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ze,N.map.depthTexture.magFilter=ze}else V.isPointLight?(N.map=new mh(r.x),N.map.depthTexture=new Bd(r.x,si)):(N.map=new ni(r.x,r.y),N.map.depthTexture=new Ms(r.x,r.y,si)),N.map.depthTexture.name=V.name+".shadowMap",N.map.depthTexture.format=wi,this.type===fa?(N.map.depthTexture.compareFunction=G?Fl:Nl,N.map.depthTexture.minFilter=We,N.map.depthTexture.magFilter=We):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=ze,N.map.depthTexture.magFilter=ze);N.camera.updateProjectionMatrix()}const tt=N.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<tt;H++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,H),i.clear();else{H===0&&(i.setRenderTarget(N.map),i.clear());const k=N.getViewport(H);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),C.viewport(a)}if(V.isPointLight){const k=N.camera,dt=N.matrix,at=V.distance||k.far;at!==k.far&&(k.far=at,k.updateProjectionMatrix()),hs.setFromMatrixPosition(V.matrixWorld),k.position.copy(hs),So.copy(k.position),So.add(B_[H]),k.up.copy(z_[H]),k.lookAt(So),k.updateMatrixWorld(),dt.makeTranslation(-hs.x,-hs.y,-hs.z),yu.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),N._frustum.setFromProjectionMatrix(yu,k.coordinateSystem,k.reversedDepth)}else N.updateMatrices(V);n=N.getFrustum(),w(P,S,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===ds&&v(N,S),N.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(T,z,U)};function v(R,P){const S=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ni(r.x,r.y,{format:Kr,type:Ei})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,S,u,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,S,f,_,null)}function x(R,P,S,T){let z=null;const U=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)z=U;else if(z=S.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const C=z.uuid,L=P.uuid;let y=c[C];y===void 0&&(y={},c[C]=y);let F=y[L];F===void 0&&(F=z.clone(),y[L]=F,P.addEventListener("dispose",A)),z=F}if(z.visible=P.visible,z.wireframe=P.wireframe,T===ds?z.side=P.shadowSide!==null?P.shadowSide:P.side:z.side=P.shadowSide!==null?P.shadowSide:d[P.side],z.alphaMap=P.alphaMap,z.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,z.map=P.map,z.clipShadows=P.clipShadows,z.clippingPlanes=P.clippingPlanes,z.clipIntersection=P.clipIntersection,z.displacementMap=P.displacementMap,z.displacementScale=P.displacementScale,z.displacementBias=P.displacementBias,z.wireframeLinewidth=P.wireframeLinewidth,z.linewidth=P.linewidth,S.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const C=i.properties.get(z);C.light=S}return z}function w(R,P,S,T,z){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===ds)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const L=t.update(R),y=R.material;if(Array.isArray(y)){const F=L.groups;for(let V=0,N=F.length;V<N;V++){const $=F[V],G=y[$.materialIndex];if(G&&G.visible){const tt=x(R,G,T,z);R.onBeforeShadow(i,R,P,S,L,tt,$),i.renderBufferDirect(S,null,L,tt,R,$),R.onAfterShadow(i,R,P,S,L,tt,$)}}}else if(y.visible){const F=x(R,y,T,z);R.onBeforeShadow(i,R,P,S,L,F,null),i.renderBufferDirect(S,null,L,F,R,null),R.onAfterShadow(i,R,P,S,L,F,null)}}const C=R.children;for(let L=0,y=C.length;L<y;L++)w(C[L],P,S,T,z)}function A(R){R.target.removeEventListener("dispose",A);for(const S in c){const T=c[S],z=R.target.uuid;z in T&&(T[z].dispose(),delete T[z])}}}function V_(i,t){function e(){let X=!1;const mt=new me;let _t=null;const At=new me(0,0,0,0);return{setMask:function(gt){_t!==gt&&!X&&(i.colorMask(gt,gt,gt,gt),_t=gt)},setLocked:function(gt){X=gt},setClear:function(gt,ut,Dt,Ht,se){se===!0&&(gt*=Ht,ut*=Ht,Dt*=Ht),mt.set(gt,ut,Dt,Ht),At.equals(mt)===!1&&(i.clearColor(gt,ut,Dt,Ht),At.copy(mt))},reset:function(){X=!1,_t=null,At.set(-1,0,0,0)}}}function n(){let X=!1,mt=!1,_t=null,At=null,gt=null;return{setReversed:function(ut){if(mt!==ut){const Dt=t.get("EXT_clip_control");ut?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),mt=ut;const Ht=gt;gt=null,this.setClear(Ht)}},getReversed:function(){return mt},setTest:function(ut){ut?ft(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(ut){_t!==ut&&!X&&(i.depthMask(ut),_t=ut)},setFunc:function(ut){if(mt&&(ut=Kf[ut]),At!==ut){switch(ut){case Uo:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case jr:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=ut}},setLocked:function(ut){X=ut},setClear:function(ut){gt!==ut&&(gt=ut,mt&&(ut=1-ut),i.clearDepth(ut))},reset:function(){X=!1,_t=null,At=null,gt=null,mt=!1}}}function r(){let X=!1,mt=null,_t=null,At=null,gt=null,ut=null,Dt=null,Ht=null,se=null;return{setTest:function(Qt){X||(Qt?ft(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(Qt){mt!==Qt&&!X&&(i.stencilMask(Qt),mt=Qt)},setFunc:function(Qt,je,Ze){(_t!==Qt||At!==je||gt!==Ze)&&(i.stencilFunc(Qt,je,Ze),_t=Qt,At=je,gt=Ze)},setOp:function(Qt,je,Ze){(ut!==Qt||Dt!==je||Ht!==Ze)&&(i.stencilOp(Qt,je,Ze),ut=Qt,Dt=je,Ht=Ze)},setLocked:function(Qt){X=Qt},setClear:function(Qt){se!==Qt&&(i.clearStencil(Qt),se=Qt)},reset:function(){X=!1,mt=null,_t=null,At=null,gt=null,ut=null,Dt=null,Ht=null,se=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let m={},d={},u=new WeakMap,f=[],g=null,_=!1,p=null,h=null,v=null,x=null,w=null,A=null,R=null,P=new ee(0,0,0),S=0,T=!1,z=null,U=null,C=null,L=null,y=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec($)[1]),V=N>=1):$.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=N>=2);let G=null,tt={};const H=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),dt=new me().fromArray(H),at=new me().fromArray(k);function ht(X,mt,_t,At){const gt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(X,ut),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<_t;Dt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(mt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return ut}const J={};J[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(jr),q(!1),O(gc),ft(i.CULL_FACE),E(Si);function ft(X){m[X]!==!0&&(i.enable(X),m[X]=!0)}function lt(X){m[X]!==!1&&(i.disable(X),m[X]=!1)}function St(X,mt){return d[X]!==mt?(i.bindFramebuffer(X,mt),d[X]=mt,X===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),X===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Mt(X,mt){let _t=f,At=!1;if(X){_t=u.get(mt),_t===void 0&&(_t=[],u.set(mt,_t));const gt=X.textures;if(_t.length!==gt.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Dt=gt.length;ut<Dt;ut++)_t[ut]=i.COLOR_ATTACHMENT0+ut;_t.length=gt.length,At=!0}}else _t[0]!==i.BACK&&(_t[0]=i.BACK,At=!0);At&&i.drawBuffers(_t)}function yt(X){return g!==X?(i.useProgram(X),g=X,!0):!1}const Ft={[rr]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[yf]:i.FUNC_REVERSE_SUBTRACT};Ft[Sf]=i.MIN,Ft[Mf]=i.MAX;const Pt={[bf]:i.ZERO,[Ef]:i.ONE,[wf]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[If]:i.SRC_ALPHA_SATURATE,[Rf]:i.DST_COLOR,[Af]:i.DST_ALPHA,[Tf]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[Pf]:i.ONE_MINUS_DST_COLOR,[Cf]:i.ONE_MINUS_DST_ALPHA,[Df]:i.CONSTANT_COLOR,[Lf]:i.ONE_MINUS_CONSTANT_COLOR,[Uf]:i.CONSTANT_ALPHA,[Nf]:i.ONE_MINUS_CONSTANT_ALPHA};function E(X,mt,_t,At,gt,ut,Dt,Ht,se,Qt){if(X===Si){_===!0&&(lt(i.BLEND),_=!1);return}if(_===!1&&(ft(i.BLEND),_=!0),X!==vf){if(X!==p||Qt!==T){if((h!==rr||w!==rr)&&(i.blendEquation(i.FUNC_ADD),h=rr,w=rr),Qt)switch(X){case Xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",X);break}else switch(X){case Xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vc:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",X);break}v=null,x=null,A=null,R=null,P.set(0,0,0),S=0,p=X,T=Qt}return}gt=gt||mt,ut=ut||_t,Dt=Dt||At,(mt!==h||gt!==w)&&(i.blendEquationSeparate(Ft[mt],Ft[gt]),h=mt,w=gt),(_t!==v||At!==x||ut!==A||Dt!==R)&&(i.blendFuncSeparate(Pt[_t],Pt[At],Pt[ut],Pt[Dt]),v=_t,x=At,A=ut,R=Dt),(Ht.equals(P)===!1||se!==S)&&(i.blendColor(Ht.r,Ht.g,Ht.b,se),P.copy(Ht),S=se),p=X,T=!1}function et(X,mt){X.side===Sn?lt(i.CULL_FACE):ft(i.CULL_FACE);let _t=X.side===cn;mt&&(_t=!_t),q(_t),X.blending===Xr&&X.transparent===!1?E(Si):E(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const At=X.stencilWrite;o.setTest(At),At&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Y(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(X){z!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),z=X)}function O(X){X!==mf?(ft(i.CULL_FACE),X!==U&&(X===gc?i.cullFace(i.BACK):X===gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),U=X}function b(X){X!==C&&(V&&i.lineWidth(X),C=X)}function Y(X,mt,_t){X?(ft(i.POLYGON_OFFSET_FILL),(L!==mt||y!==_t)&&(L=mt,y=_t,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,_t))):lt(i.POLYGON_OFFSET_FILL)}function it(X){X?ft(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function ct(X){X===void 0&&(X=i.TEXTURE0+F-1),G!==X&&(i.activeTexture(X),G=X)}function W(X,mt,_t){_t===void 0&&(G===null?_t=i.TEXTURE0+F-1:_t=G);let At=tt[_t];At===void 0&&(At={type:void 0,texture:void 0},tt[_t]=At),(At.type!==X||At.texture!==mt)&&(G!==_t&&(i.activeTexture(_t),G=_t),i.bindTexture(X,mt||J[X]),At.type=X,At.texture=mt)}function I(){const X=tt[G];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(X){ne("WebGLState:",X)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(X){ne("WebGLState:",X)}}function Z(){try{i.texSubImage2D(...arguments)}catch(X){ne("WebGLState:",X)}}function rt(){try{i.texSubImage3D(...arguments)}catch(X){ne("WebGLState:",X)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(X){ne("WebGLState:",X)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){ne("WebGLState:",X)}}function vt(){try{i.texStorage2D(...arguments)}catch(X){ne("WebGLState:",X)}}function It(){try{i.texStorage3D(...arguments)}catch(X){ne("WebGLState:",X)}}function Bt(){try{i.texImage2D(...arguments)}catch(X){ne("WebGLState:",X)}}function pt(){try{i.texImage3D(...arguments)}catch(X){ne("WebGLState:",X)}}function xt(X){dt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),dt.copy(X))}function Ut(X){at.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),at.copy(X))}function Tt(X,mt){let _t=c.get(mt);_t===void 0&&(_t=new WeakMap,c.set(mt,_t));let At=_t.get(X);At===void 0&&(At=i.getUniformBlockIndex(mt,X.name),_t.set(X,At))}function Et(X,mt){const At=c.get(mt).get(X);l.get(mt)!==At&&(i.uniformBlockBinding(mt,At,X.__bindingPointIndex),l.set(mt,At))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},G=null,tt={},d={},u=new WeakMap,f=[],g=null,_=!1,p=null,h=null,v=null,x=null,w=null,A=null,R=null,P=new ee(0,0,0),S=0,T=!1,z=null,U=null,C=null,L=null,y=null,dt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ft,disable:lt,bindFramebuffer:St,drawBuffers:Mt,useProgram:yt,setBlending:E,setMaterial:et,setFlipSided:q,setCullFace:O,setLineWidth:b,setPolygonOffset:Y,setScissorTest:it,activeTexture:ct,bindTexture:W,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:Bt,texImage3D:pt,updateUBOMapping:Tt,uniformBlockBinding:Et,texStorage2D:vt,texStorage3D:It,texSubImage2D:Z,texSubImage3D:rt,compressedTexSubImage2D:Q,compressedTexSubImage3D:wt,scissor:xt,viewport:Ut,reset:bt}}function H_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,m=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,M){return f?new OffscreenCanvas(I,M):Ma("canvas")}function _(I,M,B){let Z=1;const rt=W(I);if((rt.width>B||rt.height>B)&&(Z=B/Math.max(rt.width,rt.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Q=Math.floor(Z*rt.width),wt=Math.floor(Z*rt.height);d===void 0&&(d=g(Q,wt));const vt=M?g(Q,wt):d;return vt.width=Q,vt.height=wt,vt.getContext("2d").drawImage(I,0,0,Q,wt),Xt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Q+"x"+wt+")."),vt}else return"data"in I&&Xt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),I;return I}function p(I){return I.generateMipmaps}function h(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,M,B,Z,rt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=M;if(M===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),M===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),M===i.RGBA){const wt=rt?Sa:ie.getTransfer(Z);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=wt===ue?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function w(I,M){let B;return I?M===null||M===si||M===xs?B=i.DEPTH24_STENCIL8:M===Jn?B=i.DEPTH32F_STENCIL8:M===vs&&(B=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===si||M===xs?B=i.DEPTH_COMPONENT24:M===Jn?B=i.DEPTH_COMPONENT32F:M===vs&&(B=i.DEPTH_COMPONENT16),B}function A(I,M){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==ze&&I.minFilter!==We?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function R(I){const M=I.target;M.removeEventListener("dispose",R),S(M),M.isVideoTexture&&m.delete(M)}function P(I){const M=I.target;M.removeEventListener("dispose",P),z(M)}function S(I){const M=n.get(I);if(M.__webglInit===void 0)return;const B=I.source,Z=u.get(B);if(Z){const rt=Z[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&T(I),Object.keys(Z).length===0&&u.delete(B)}n.remove(I)}function T(I){const M=n.get(I);i.deleteTexture(M.__webglTexture);const B=I.source,Z=u.get(B);delete Z[M.__cacheKey],a.memory.textures--}function z(I){const M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let rt=0;rt<M.__webglFramebuffer[Z].length;rt++)i.deleteFramebuffer(M.__webglFramebuffer[Z][rt]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=I.textures;for(let Z=0,rt=B.length;Z<rt;Z++){const Q=n.get(B[Z]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(I)}let U=0;function C(){U=0}function L(){const I=U;return I>=r.maxTextures&&Xt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),U+=1,I}function y(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function F(I,M){const B=n.get(I);if(I.isVideoTexture&&it(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&B.__version!==I.version){const Z=I.image;if(Z===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,I,M);return}}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function V(I,M){const B=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){J(B,I,M);return}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function N(I,M){const B=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){J(B,I,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function $(I,M){const B=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&B.__version!==I.version){ft(B,I,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const G={[Vo]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},tt={[ze]:i.NEAREST,[Bf]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Ga]:i.LINEAR_MIPMAP_NEAREST,[or]:i.LINEAR_MIPMAP_LINEAR},H={[Vf]:i.NEVER,[qf]:i.ALWAYS,[Hf]:i.LESS,[Nl]:i.LEQUAL,[Gf]:i.EQUAL,[Fl]:i.GEQUAL,[Wf]:i.GREATER,[Xf]:i.NOTEQUAL};function k(I,M){if(M.type===Jn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===We||M.magFilter===Ga||M.magFilter===Us||M.magFilter===or||M.minFilter===We||M.minFilter===Ga||M.minFilter===Us||M.minFilter===or)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,G[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,G[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,G[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,tt[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,tt[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,H[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ze||M.minFilter!==Us&&M.minFilter!==or||M.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function dt(I,M){let B=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",R));const Z=M.source;let rt=u.get(Z);rt===void 0&&(rt={},u.set(Z,rt));const Q=y(M);if(Q!==I.__cacheKey){rt[Q]===void 0&&(rt[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),rt[Q].usedTimes++;const wt=rt[I.__cacheKey];wt!==void 0&&(rt[I.__cacheKey].usedTimes--,wt.usedTimes===0&&T(M)),I.__cacheKey=Q,I.__webglTexture=rt[Q].texture}return B}function at(I,M,B){return Math.floor(Math.floor(I/B)/M)}function ht(I,M,B,Z){const Q=I.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,B,Z,M.data);else{Q.sort((pt,xt)=>pt.start-xt.start);let wt=0;for(let pt=1;pt<Q.length;pt++){const xt=Q[wt],Ut=Q[pt],Tt=xt.start+xt.count,Et=at(Ut.start,M.width,4),bt=at(xt.start,M.width,4);Ut.start<=Tt+1&&Et===bt&&at(Ut.start+Ut.count-1,M.width,4)===Et?xt.count=Math.max(xt.count,Ut.start+Ut.count-xt.start):(++wt,Q[wt]=Ut)}Q.length=wt+1;const vt=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let pt=0,xt=Q.length;pt<xt;pt++){const Ut=Q[pt],Tt=Math.floor(Ut.start/4),Et=Math.ceil(Ut.count/4),bt=Tt%M.width,X=Math.floor(Tt/M.width),mt=Et,_t=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,bt,X,mt,_t,B,Z,M.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Bt)}}function J(I,M,B){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const rt=dt(I,M),Q=M.source;e.bindTexture(Z,I.__webglTexture,i.TEXTURE0+B);const wt=n.get(Q);if(Q.version!==wt.__version||rt===!0){e.activeTexture(i.TEXTURE0+B);const vt=ie.getPrimaries(ie.workingColorSpace),It=M.colorSpace===Hi?null:ie.getPrimaries(M.colorSpace),Bt=M.colorSpace===Hi||vt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let pt=_(M.image,!1,r.maxTextureSize);pt=ct(M,pt);const xt=s.convert(M.format,M.colorSpace),Ut=s.convert(M.type);let Tt=x(M.internalFormat,xt,Ut,M.colorSpace,M.isVideoTexture);k(Z,M);let Et;const bt=M.mipmaps,X=M.isVideoTexture!==!0,mt=wt.__version===void 0||rt===!0,_t=Q.dataReady,At=A(M,pt);if(M.isDepthTexture)Tt=w(M.format===lr,M.type),mt&&(X?e.texStorage2D(i.TEXTURE_2D,1,Tt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Tt,pt.width,pt.height,0,xt,Ut,null));else if(M.isDataTexture)if(bt.length>0){X&&mt&&e.texStorage2D(i.TEXTURE_2D,At,Tt,bt[0].width,bt[0].height);for(let gt=0,ut=bt.length;gt<ut;gt++)Et=bt[gt],X?_t&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,xt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,gt,Tt,Et.width,Et.height,0,xt,Ut,Et.data);M.generateMipmaps=!1}else X?(mt&&e.texStorage2D(i.TEXTURE_2D,At,Tt,pt.width,pt.height),_t&&ht(M,pt,xt,Ut)):e.texImage2D(i.TEXTURE_2D,0,Tt,pt.width,pt.height,0,xt,Ut,pt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Tt,bt[0].width,bt[0].height,pt.depth);for(let gt=0,ut=bt.length;gt<ut;gt++)if(Et=bt[gt],M.format!==kn)if(xt!==null)if(X){if(_t)if(M.layerUpdates.size>0){const Dt=$c(Et.width,Et.height,M.format,M.type);for(const Ht of M.layerUpdates){const se=Et.data.subarray(Ht*Dt/Et.data.BYTES_PER_ELEMENT,(Ht+1)*Dt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Ht,Et.width,Et.height,1,xt,se)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,pt.depth,xt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Tt,Et.width,Et.height,pt.depth,0,Et.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,pt.depth,xt,Ut,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Tt,Et.width,Et.height,pt.depth,0,xt,Ut,Et.data)}else{X&&mt&&e.texStorage2D(i.TEXTURE_2D,At,Tt,bt[0].width,bt[0].height);for(let gt=0,ut=bt.length;gt<ut;gt++)Et=bt[gt],M.format!==kn?xt!==null?X?_t&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,xt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Tt,Et.width,Et.height,0,Et.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?_t&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,xt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,gt,Tt,Et.width,Et.height,0,xt,Ut,Et.data)}else if(M.isDataArrayTexture)if(X){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Tt,pt.width,pt.height,pt.depth),_t)if(M.layerUpdates.size>0){const gt=$c(pt.width,pt.height,M.format,M.type);for(const ut of M.layerUpdates){const Dt=pt.data.subarray(ut*gt/pt.data.BYTES_PER_ELEMENT,(ut+1)*gt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,pt.width,pt.height,1,xt,Ut,Dt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,xt,Ut,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,pt.width,pt.height,pt.depth,0,xt,Ut,pt.data);else if(M.isData3DTexture)X?(mt&&e.texStorage3D(i.TEXTURE_3D,At,Tt,pt.width,pt.height,pt.depth),_t&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,xt,Ut,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,pt.width,pt.height,pt.depth,0,xt,Ut,pt.data);else if(M.isFramebufferTexture){if(mt)if(X)e.texStorage2D(i.TEXTURE_2D,At,Tt,pt.width,pt.height);else{let gt=pt.width,ut=pt.height;for(let Dt=0;Dt<At;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Tt,gt,ut,0,xt,Ut,null),gt>>=1,ut>>=1}}else if(bt.length>0){if(X&&mt){const gt=W(bt[0]);e.texStorage2D(i.TEXTURE_2D,At,Tt,gt.width,gt.height)}for(let gt=0,ut=bt.length;gt<ut;gt++)Et=bt[gt],X?_t&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,xt,Ut,Et):e.texImage2D(i.TEXTURE_2D,gt,Tt,xt,Ut,Et);M.generateMipmaps=!1}else if(X){if(mt){const gt=W(pt);e.texStorage2D(i.TEXTURE_2D,At,Tt,gt.width,gt.height)}_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ut,pt)}else e.texImage2D(i.TEXTURE_2D,0,Tt,xt,Ut,pt);p(M)&&h(Z),wt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function ft(I,M,B){if(M.image.length!==6)return;const Z=dt(I,M),rt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+B);const Q=n.get(rt);if(rt.version!==Q.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const wt=ie.getPrimaries(ie.workingColorSpace),vt=M.colorSpace===Hi?null:ie.getPrimaries(M.colorSpace),It=M.colorSpace===Hi||wt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Bt=M.isCompressedTexture||M.image[0].isCompressedTexture,pt=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let ut=0;ut<6;ut++)!Bt&&!pt?xt[ut]=_(M.image[ut],!0,r.maxCubemapSize):xt[ut]=pt?M.image[ut].image:M.image[ut],xt[ut]=ct(M,xt[ut]);const Ut=xt[0],Tt=s.convert(M.format,M.colorSpace),Et=s.convert(M.type),bt=x(M.internalFormat,Tt,Et,M.colorSpace),X=M.isVideoTexture!==!0,mt=Q.__version===void 0||Z===!0,_t=rt.dataReady;let At=A(M,Ut);k(i.TEXTURE_CUBE_MAP,M);let gt;if(Bt){X&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,bt,Ut.width,Ut.height);for(let ut=0;ut<6;ut++){gt=xt[ut].mipmaps;for(let Dt=0;Dt<gt.length;Dt++){const Ht=gt[Dt];M.format!==kn?Tt!==null?X?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,0,0,Ht.width,Ht.height,Tt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,bt,Ht.width,Ht.height,0,Ht.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,0,0,Ht.width,Ht.height,Tt,Et,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt,bt,Ht.width,Ht.height,0,Tt,Et,Ht.data)}}}else{if(gt=M.mipmaps,X&&mt){gt.length>0&&At++;const ut=W(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,bt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(pt){X?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,xt[ut].width,xt[ut].height,Tt,Et,xt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,bt,xt[ut].width,xt[ut].height,0,Tt,Et,xt[ut].data);for(let Dt=0;Dt<gt.length;Dt++){const se=gt[Dt].image[ut].image;X?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,0,0,se.width,se.height,Tt,Et,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,bt,se.width,se.height,0,Tt,Et,se.data)}}else{X?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Tt,Et,xt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,bt,Tt,Et,xt[ut]);for(let Dt=0;Dt<gt.length;Dt++){const Ht=gt[Dt];X?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,0,0,Tt,Et,Ht.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Dt+1,bt,Tt,Et,Ht.image[ut])}}}p(M)&&h(i.TEXTURE_CUBE_MAP),Q.__version=rt.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function lt(I,M,B,Z,rt,Q){const wt=s.convert(B.format,B.colorSpace),vt=s.convert(B.type),It=x(B.internalFormat,wt,vt,B.colorSpace),Bt=n.get(M),pt=n.get(B);if(pt.__renderTarget=M,!Bt.__hasExternalTextures){const xt=Math.max(1,M.width>>Q),Ut=Math.max(1,M.height>>Q);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,Q,It,xt,Ut,M.depth,0,wt,vt,null):e.texImage2D(rt,Q,It,xt,Ut,0,wt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Y(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,rt,pt.__webglTexture,0,b(M)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,rt,pt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(I,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){const Z=M.depthTexture,rt=Z&&Z.isDepthTexture?Z.type:null,Q=w(M.stencilBuffer,rt),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Y(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,b(M),Q,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,b(M),Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,I)}else{const Z=M.textures;for(let rt=0;rt<Z.length;rt++){const Q=Z[rt],wt=s.convert(Q.format,Q.colorSpace),vt=s.convert(Q.type),It=x(Q.internalFormat,wt,vt,Q.colorSpace);Y(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,b(M),It,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,b(M),It,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,It,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(I,M,B){const Z=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(M.depthTexture);if(rt.__renderTarget=M,(!rt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),k(i.TEXTURE_CUBE_MAP,M.depthTexture);const Bt=s.convert(M.depthTexture.format),pt=s.convert(M.depthTexture.type);let xt;M.depthTexture.format===wi?xt=i.DEPTH_COMPONENT24:M.depthTexture.format===lr&&(xt=i.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,xt,M.width,M.height,0,Bt,pt,null)}}else F(M.depthTexture,0);const Q=rt.__webglTexture,wt=b(M),vt=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,It=M.depthTexture.format===lr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===wi)Y(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,vt,Q,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,It,vt,Q,0);else if(M.depthTexture.format===lr)Y(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,vt,Q,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,It,vt,Q,0);else throw new Error("Unknown depthTexture format")}function yt(I){const M=n.get(I),B=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",rt)};Z.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=Z}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)Mt(M.__webglFramebuffer[Z],I,Z);else{const Z=I.texture.mipmaps;Z&&Z.length>0?Mt(M.__webglFramebuffer[0],I,0):Mt(M.__webglFramebuffer,I,0)}else if(B){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),St(M.__webglDepthbuffer[Z],I,!1);else{const rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Q)}}else{const Z=I.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),St(M.__webglDepthbuffer,I,!1);else{const rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(I,M,B){const Z=n.get(I);M!==void 0&&lt(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&yt(I)}function Pt(I){const M=I.texture,B=n.get(I),Z=n.get(M);I.addEventListener("dispose",P);const rt=I.textures,Q=I.isWebGLCubeRenderTarget===!0,wt=rt.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,a.memory.textures++),Q){B.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[vt]=[];for(let It=0;It<M.mipmaps.length;It++)B.__webglFramebuffer[vt][It]=i.createFramebuffer()}else B.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let vt=0;vt<M.mipmaps.length;vt++)B.__webglFramebuffer[vt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(wt)for(let vt=0,It=rt.length;vt<It;vt++){const Bt=n.get(rt[vt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Y(I)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let vt=0;vt<rt.length;vt++){const It=rt[vt];B.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[vt]);const Bt=s.convert(It.format,It.colorSpace),pt=s.convert(It.type),xt=x(It.internalFormat,Bt,pt,It.colorSpace,I.isXRRenderTarget===!0),Ut=b(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,B.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),St(B.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),k(i.TEXTURE_CUBE_MAP,M);for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0)for(let It=0;It<M.mipmaps.length;It++)lt(B.__webglFramebuffer[vt][It],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It);else lt(B.__webglFramebuffer[vt],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);p(M)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let vt=0,It=rt.length;vt<It;vt++){const Bt=rt[vt],pt=n.get(Bt);let xt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,pt.__webglTexture),k(xt,Bt),lt(B.__webglFramebuffer,I,Bt,i.COLOR_ATTACHMENT0+vt,xt,0),p(Bt)&&h(xt)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Z.__webglTexture),k(vt,M),M.mipmaps&&M.mipmaps.length>0)for(let It=0;It<M.mipmaps.length;It++)lt(B.__webglFramebuffer[It],I,M,i.COLOR_ATTACHMENT0,vt,It);else lt(B.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,vt,0);p(M)&&h(vt),e.unbindTexture()}I.depthBuffer&&yt(I)}function E(I){const M=I.textures;for(let B=0,Z=M.length;B<Z;B++){const rt=M[B];if(p(rt)){const Q=v(I),wt=n.get(rt).__webglTexture;e.bindTexture(Q,wt),h(Q),e.unbindTexture()}}}const et=[],q=[];function O(I){if(I.samples>0){if(Y(I)===!1){const M=I.textures,B=I.width,Z=I.height;let rt=i.COLOR_BUFFER_BIT;const Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(I),vt=M.length>1;if(vt)for(let Bt=0;Bt<M.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const It=I.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Bt=0;Bt<M.length;Bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Bt]);const pt=n.get(M[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,rt,i.NEAREST),l===!0&&(et.length=0,q.length=0,et.push(i.COLOR_ATTACHMENT0+Bt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(et.push(Q),q.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Bt=0;Bt<M.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Bt]);const pt=n.get(M[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function b(I){return Math.min(r.maxSamples,I.samples)}function Y(I){const M=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function it(I){const M=a.render.frame;m.get(I)!==M&&(m.set(I,M),I.update())}function ct(I,M){const B=I.colorSpace,Z=I.format,rt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||B!==$r&&B!==Hi&&(ie.getTransfer(B)===ue?(Z!==kn||rt!==Mn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",B)),M}function W(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=$,this.rebindTextures=Ft,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=E,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Y,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function G_(i,t){function e(n,r=Hi){let s;const a=ie.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ju)return i.BYTE;if(n===Zu)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===Ju)return i.ALPHA;if(n===Qu)return i.RGB;if(n===kn)return i.RGBA;if(n===wi)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===th)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Kr)return i.RG;if(n===Ll)return i.RG_INTEGER;if(n===Ul)return i.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(a===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Wo||n===Xo||n===qo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===jo||n===Zo||n===Ko||n===$o||n===Jo||n===Qo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yo||n===jo)return a===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zo)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ko)return s.COMPRESSED_R11_EAC;if(n===$o)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Jo)return s.COMPRESSED_RG11_EAC;if(n===Qo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===pl)return a===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===vl||n===xl||n===yl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===_l)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
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

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new uh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new Ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y_ extends fr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,m=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new q_,h={},v=e.getContextAttributes();let x=null,w=null;const A=[],R=[],P=new Wt;let S=null;const T=new Cn;T.viewport=new me;const z=new Cn;z.viewport=new me;const U=[T,z],C=new Qd;let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=A[J];return ft===void 0&&(ft=new Za,A[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=A[J];return ft===void 0&&(ft=new Za,A[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=A[J];return ft===void 0&&(ft=new Za,A[J]=ft),ft.getHandSpace()};function F(J){const ft=R.indexOf(J.inputSource);if(ft===-1)return;const lt=A[ft];lt!==void 0&&(lt.update(J.inputSource,J.frame,c||a),lt.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",N);for(let J=0;J<A.length;J++){const ft=R[J];ft!==null&&(R[J]=null,A[J].disconnect(ft))}L=null,y=null,p.reset();for(const J in h)delete h[J];t.setRenderTarget(x),f=null,u=null,d=null,r=null,w=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,St=null,Mt=null;v.depth&&(Mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=v.stencil?lr:wi,St=v.stencil?xs:si);const yt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(yt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new ni(u.textureWidth,u.textureHeight,{format:kn,type:Mn,depthTexture:new Ms(u.textureWidth,u.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new ni(f.framebufferWidth,f.framebufferHeight,{format:kn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(J){for(let ft=0;ft<J.removed.length;ft++){const lt=J.removed[ft],St=R.indexOf(lt);St>=0&&(R[St]=null,A[St].disconnect(lt))}for(let ft=0;ft<J.added.length;ft++){const lt=J.added[ft];let St=R.indexOf(lt);if(St===-1){for(let yt=0;yt<A.length;yt++)if(yt>=R.length){R.push(lt),St=yt;break}else if(R[yt]===null){R[yt]=lt,St=yt;break}if(St===-1)break}const Mt=A[St];Mt&&Mt.connect(lt)}}const $=new j,G=new j;function tt(J,ft,lt){$.setFromMatrixPosition(ft.matrixWorld),G.setFromMatrixPosition(lt.matrixWorld);const St=$.distanceTo(G),Mt=ft.projectionMatrix.elements,yt=lt.projectionMatrix.elements,Ft=Mt[14]/(Mt[10]-1),Pt=Mt[14]/(Mt[10]+1),E=(Mt[9]+1)/Mt[5],et=(Mt[9]-1)/Mt[5],q=(Mt[8]-1)/Mt[0],O=(yt[8]+1)/yt[0],b=Ft*q,Y=Ft*O,it=St/(-q+O),ct=it*-q;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ct),J.translateZ(it),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Mt[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const W=Ft+it,I=Pt+it,M=b-ct,B=Y+(St-ct),Z=E*Pt/I*W,rt=et*Pt/I*W;J.projectionMatrix.makePerspective(M,B,Z,rt,W,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function H(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ft=J.near,lt=J.far;p.texture!==null&&(p.depthNear>0&&(ft=p.depthNear),p.depthFar>0&&(lt=p.depthFar)),C.near=z.near=T.near=ft,C.far=z.far=T.far=lt,(L!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,y=C.far),C.layers.mask=J.layers.mask|6,T.layers.mask=C.layers.mask&-5,z.layers.mask=C.layers.mask&-3;const St=J.parent,Mt=C.cameras;H(C,St);for(let yt=0;yt<Mt.length;yt++)H(Mt[yt],St);Mt.length===2?tt(C,T,z):C.projectionMatrix.copy(T.projectionMatrix),k(J,C,St)};function k(J,ft,lt){lt===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(lt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ss*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(C)},this.getCameraTexture=function(J){return h[J]};let dt=null;function at(J,ft){if(m=ft.getViewerPose(c||a),g=ft,m!==null){const lt=m.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let St=!1;lt.length!==C.cameras.length&&(C.cameras.length=0,St=!0);for(let Pt=0;Pt<lt.length;Pt++){const E=lt[Pt];let et=null;if(f!==null)et=f.getViewport(E);else{const O=d.getViewSubImage(u,E);et=O.viewport,Pt===0&&(t.setRenderTargetTextures(w,O.colorTexture,O.depthStencilTexture),t.setRenderTarget(w))}let q=U[Pt];q===void 0&&(q=new Cn,q.layers.enable(Pt),q.viewport=new me,U[Pt]=q),q.matrix.fromArray(E.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(E.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(et.x,et.y,et.width,et.height),Pt===0&&(C.matrix.copy(q.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),St===!0&&C.cameras.push(q)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Pt=d.getDepthInformation(lt[0]);Pt&&Pt.isValid&&Pt.texture&&p.init(Pt,r.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Pt=0;Pt<lt.length;Pt++){const E=lt[Pt].camera;if(E){let et=h[E];et||(et=new uh,h[E]=et);const q=d.getCameraImage(E);et.sourceTexture=q}}}}for(let lt=0;lt<A.length;lt++){const St=R[lt],Mt=A[lt];St!==null&&Mt!==void 0&&Mt.update(St,ft,c||a)}dt&&dt(J,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}const ht=new ph;ht.setAnimationLoop(at),this.setAnimationLoop=function(J){dt=J},this.dispose=function(){}}}const ir=new ai,j_=new xe;function Z_(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,hh(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,v,x,w){h.isMeshBasicMaterial?s(p,h):h.isMeshLambertMaterial?(s(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),m(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(p,h),u(p,h),h.isMeshPhysicalMaterial&&f(p,h,w)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,v,x):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===cn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===cn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const v=t.get(h),x=v.envMap,w=v.envMapRotation;x&&(p.envMap.value=x,ir.copy(w),ir.x*=-1,ir.y*=-1,ir.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),p.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(ir)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,v,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*v,p.scale.value=x*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function m(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function u(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,v){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const v=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function K_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const w=x.program;n.uniformBlockBinding(v,w)}function c(v,x){let w=r[v.id];w===void 0&&(g(v),w=m(v),r[v.id]=w,v.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(v,A);const R=t.render.frame;s[v.id]!==R&&(u(v),s[v.id]=R)}function m(v){const x=d();v.__bindingPointIndex=x;const w=i.createBuffer(),A=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=r[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,P=w.length;R<P;R++){const S=Array.isArray(w[R])?w[R]:[w[R]];for(let T=0,z=S.length;T<z;T++){const U=S[T];if(f(U,R,T,A)===!0){const C=U.__offset,L=Array.isArray(U.value)?U.value:[U.value];let y=0;for(let F=0;F<L.length;F++){const V=L[F],N=_(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,C+y,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,y),y+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,w,A){const R=v.value,P=x+"_"+w;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{const S=A[P];if(typeof R=="number"||typeof R=="boolean"){if(S!==R)return A[P]=R,!0}else if(S.equals(R)===!1)return S.copy(R),!0}return!1}function g(v){const x=v.uniforms;let w=0;const A=16;for(let P=0,S=x.length;P<S;P++){const T=Array.isArray(x[P])?x[P]:[x[P]];for(let z=0,U=T.length;z<U;z++){const C=T[z],L=Array.isArray(C.value)?C.value:[C.value];for(let y=0,F=L.length;y<F;y++){const V=L[y],N=_(V),$=w%A,G=$%N.boundary,tt=$+G;w+=G,tt!==0&&A-tt<N.storage&&(w+=A-tt),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=N.storage}}}const R=w%A;return R>0&&(w+=A-R),v.__size=w,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xt("WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const $_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qn=null;function J_(){return qn===null&&(qn=new Ld($_,16,16,Kr,Ei),qn.name="DFG_LUT",qn.minFilter=We,qn.magFilter=We,qn.wrapS=yi,qn.wrapT=yi,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}class Q_{constructor(t={}){const{canvas:e=jf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,p=new Set([Ul,Ll,Dl]),h=new Set([Mn,si,vs,xs,Pl,Il]),v=new Uint32Array(4),x=new Int32Array(4);let w=null,A=null;const R=[],P=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let z=!1;this._outputColorSpace=An;let U=0,C=0,L=null,y=-1,F=null;const V=new me,N=new me;let $=null;const G=new ee(0);let tt=0,H=e.width,k=e.height,dt=1,at=null,ht=null;const J=new me(0,0,H,k),ft=new me(0,0,H,k);let lt=!1;const St=new Vl;let Mt=!1,yt=!1;const Ft=new xe,Pt=new j,E=new me,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function O(){return L===null?dt:1}let b=n;function Y(D,K){return e.getContext(D,K)}try{const D={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:m,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Al}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",se,!1),b===null){const K="webgl2";if(b=Y(K,D),b===null)throw Y(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw ne("WebGLRenderer: "+D.message),D}let it,ct,W,I,M,B,Z,rt,Q,wt,vt,It,Bt,pt,xt,Ut,Tt,Et,bt,X,mt,_t,At;function gt(){it=new Qg(b),it.init(),mt=new G_(b,it),ct=new Xg(b,it,t,mt),W=new V_(b,it),ct.reversedDepthBuffer&&u&&W.buffers.depth.setReversed(!0),I=new n0(b),M=new A_,B=new H_(b,it,W,M,ct,mt,I),Z=new Jg(T),rt=new op(b),_t=new Gg(b,rt),Q=new t0(b,rt,I,_t),wt=new r0(b,Q,rt,_t,I),Et=new i0(b,ct,B),xt=new qg(M),vt=new T_(T,Z,it,ct,_t,xt),It=new Z_(T,M),Bt=new R_,pt=new N_(it),Tt=new Hg(T,Z,W,wt,g,l),Ut=new k_(T,wt,ct),At=new K_(b,I,ct,W),bt=new Wg(b,it,I),X=new e0(b,it,I),I.programs=vt.programs,T.capabilities=ct,T.extensions=it,T.properties=M,T.renderLists=Bt,T.shadowMap=Ut,T.state=W,T.info=I}gt(),_!==Mn&&(S=new a0(_,e.width,e.height,r,s));const ut=new Y_(T,b);this.xr=ut,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const D=it.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=it.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(D){D!==void 0&&(dt=D,this.setSize(H,k,!1))},this.getSize=function(D){return D.set(H,k)},this.setSize=function(D,K,ot=!0){if(ut.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=D,k=K,e.width=Math.floor(D*dt),e.height=Math.floor(K*dt),ot===!0&&(e.style.width=D+"px",e.style.height=K+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(H*dt,k*dt).floor()},this.setDrawingBufferSize=function(D,K,ot){H=D,k=K,dt=ot,e.width=Math.floor(D*ot),e.height=Math.floor(K*ot),this.setViewport(0,0,D,K)},this.setEffects=function(D){if(_===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let K=0;K<D.length;K++)if(D[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,K,ot,st){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,K,ot,st),W.viewport(V.copy(J).multiplyScalar(dt).round())},this.getScissor=function(D){return D.copy(ft)},this.setScissor=function(D,K,ot,st){D.isVector4?ft.set(D.x,D.y,D.z,D.w):ft.set(D,K,ot,st),W.scissor(N.copy(ft).multiplyScalar(dt).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(D){W.setScissorTest(lt=D)},this.setOpaqueSort=function(D){at=D},this.setTransparentSort=function(D){ht=D},this.getClearColor=function(D){return D.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(D=!0,K=!0,ot=!0){let st=0;if(D){let nt=!1;if(L!==null){const Lt=L.texture.format;nt=p.has(Lt)}if(nt){const Lt=L.texture.type,Nt=h.has(Lt),Ct=Tt.getClearColor(),zt=Tt.getClearAlpha(),kt=Ct.r,qt=Ct.g,Kt=Ct.b;Nt?(v[0]=kt,v[1]=qt,v[2]=Kt,v[3]=zt,b.clearBufferuiv(b.COLOR,0,v)):(x[0]=kt,x[1]=qt,x[2]=Kt,x[3]=zt,b.clearBufferiv(b.COLOR,0,x))}else st|=b.COLOR_BUFFER_BIT}K&&(st|=b.DEPTH_BUFFER_BIT),ot&&(st|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&b.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",se,!1),Tt.dispose(),Bt.dispose(),pt.dispose(),M.dispose(),Z.dispose(),wt.dispose(),_t.dispose(),At.dispose(),vt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Hn),ut.removeEventListener("sessionend",Ci),we.stop()};function Dt(D){D.preventDefault(),ba("WebGLRenderer: Context Lost."),z=!0}function Ht(){ba("WebGLRenderer: Context Restored."),z=!1;const D=I.autoReset,K=Ut.enabled,ot=Ut.autoUpdate,st=Ut.needsUpdate,nt=Ut.type;gt(),I.autoReset=D,Ut.enabled=K,Ut.autoUpdate=ot,Ut.needsUpdate=st,Ut.type=nt}function se(D){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Qt(D){const K=D.target;K.removeEventListener("dispose",Qt),je(K)}function je(D){Ze(D),M.remove(D)}function Ze(D){const K=M.get(D).programs;K!==void 0&&(K.forEach(function(ot){vt.releaseProgram(ot)}),D.isShaderMaterial&&vt.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ot,st,nt,Lt){K===null&&(K=et);const Nt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ct=fe(D,K,ot,st,nt);W.setMaterial(st,Nt);let zt=ot.index,kt=1;if(st.wireframe===!0){if(zt=Q.getWireframeAttribute(ot),zt===void 0)return;kt=2}const qt=ot.drawRange,Kt=ot.attributes.position;let Ot=qt.start*kt,ae=(qt.start+qt.count)*kt;Lt!==null&&(Ot=Math.max(Ot,Lt.start*kt),ae=Math.min(ae,(Lt.start+Lt.count)*kt)),zt!==null?(Ot=Math.max(Ot,0),ae=Math.min(ae,zt.count)):Kt!=null&&(Ot=Math.max(Ot,0),ae=Math.min(ae,Kt.count));const ve=ae-Ot;if(ve<0||ve===1/0)return;_t.setup(nt,st,Ct,ot,zt);let de,le=bt;if(zt!==null&&(de=rt.get(zt),le=X,le.setIndex(de)),nt.isMesh)st.wireframe===!0?(W.setLineWidth(st.wireframeLinewidth*O()),le.setMode(b.LINES)):le.setMode(b.TRIANGLES);else if(nt.isLine){let Ce=st.linewidth;Ce===void 0&&(Ce=1),W.setLineWidth(Ce*O()),nt.isLineSegments?le.setMode(b.LINES):nt.isLineLoop?le.setMode(b.LINE_LOOP):le.setMode(b.LINE_STRIP)}else nt.isPoints?le.setMode(b.POINTS):nt.isSprite&&le.setMode(b.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Ea("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))le.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Ce=nt._multiDrawStarts,Vt=nt._multiDrawCounts,$e=nt._multiDrawCount,te=zt?rt.get(zt).bytesPerElement:1,gn=M.get(st).currentProgram.getUniforms();for(let Me=0;Me<$e;Me++)gn.setValue(b,"_gl_DrawID",Me),le.render(Ce[Me]/te,Vt[Me])}else if(nt.isInstancedMesh)le.renderInstances(Ot,ve,nt.count);else if(ot.isInstancedBufferGeometry){const Ce=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Vt=Math.min(ot.instanceCount,Ce);le.renderInstances(Ot,ve,Vt)}else le.render(Ot,ve)};function Ai(D,K,ot){D.transparent===!0&&D.side===Sn&&D.forceSinglePass===!1?(D.side=cn,D.needsUpdate=!0,Ke(D,K,ot),D.side=qi,D.needsUpdate=!0,Ke(D,K,ot),D.side=Sn):Ke(D,K,ot)}this.compile=function(D,K,ot=null){ot===null&&(ot=D),A=pt.get(ot),A.init(K),P.push(A),ot.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(A.pushLight(nt),nt.castShadow&&A.pushShadow(nt))}),D!==ot&&D.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(A.pushLight(nt),nt.castShadow&&A.pushShadow(nt))}),A.setupLights();const st=new Set;return D.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Lt=nt.material;if(Lt)if(Array.isArray(Lt))for(let Nt=0;Nt<Lt.length;Nt++){const Ct=Lt[Nt];Ai(Ct,ot,nt),st.add(Ct)}else Ai(Lt,ot,nt),st.add(Lt)}),A=P.pop(),st},this.compileAsync=function(D,K,ot=null){const st=this.compile(D,K,ot);return new Promise(nt=>{function Lt(){if(st.forEach(function(Nt){M.get(Nt).currentProgram.isReady()&&st.delete(Nt)}),st.size===0){nt(D);return}setTimeout(Lt,10)}it.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ee=null;function fn(D){Ee&&Ee(D)}function Hn(){we.stop()}function Ci(){we.start()}const we=new ph;we.setAnimationLoop(fn),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(D){Ee=D,ut.setAnimationLoop(D),D===null?we.stop():we.start()},ut.addEventListener("sessionstart",Hn),ut.addEventListener("sessionend",Ci),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const ot=ut.enabled===!0&&ut.isPresenting===!0,st=S!==null&&(L===null||ot)&&S.begin(T,L);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(K),K=ut.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,K,L),A=pt.get(D,P.length),A.init(K),P.push(A),Ft.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),St.setFromProjectionMatrix(Ft,Qn,K.reversedDepth),yt=this.localClippingEnabled,Mt=xt.init(this.clippingPlanes,yt),w=Bt.get(D,R.length),w.init(),R.push(w),ut.enabled===!0&&ut.isPresenting===!0){const Nt=T.xr.getDepthSensingMesh();Nt!==null&&Pn(Nt,K,-1/0,T.sortObjects)}Pn(D,K,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(at,ht),q=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,q&&Tt.addToRenderList(w,D),this.info.render.frame++,Mt===!0&&xt.beginShadows();const nt=A.state.shadowsArray;if(Ut.render(nt,D,K),Mt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&S.hasRenderPass())===!1){const Nt=w.opaque,Ct=w.transmissive;if(A.setupLights(),K.isArrayCamera){const zt=K.cameras;if(Ct.length>0)for(let kt=0,qt=zt.length;kt<qt;kt++){const Kt=zt[kt];ji(Nt,Ct,D,Kt)}q&&Tt.render(D);for(let kt=0,qt=zt.length;kt<qt;kt++){const Kt=zt[kt];oi(w,D,Kt,Kt.viewport)}}else Ct.length>0&&ji(Nt,Ct,D,K),q&&Tt.render(D),oi(w,D,K)}L!==null&&C===0&&(B.updateMultisampleRenderTarget(L),B.updateRenderTargetMipmap(L)),st&&S.end(T),D.isScene===!0&&D.onAfterRender(T,D,K),_t.resetDefaultState(),y=-1,F=null,P.pop(),P.length>0?(A=P[P.length-1],Mt===!0&&xt.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?w=R[R.length-1]:w=null};function Pn(D,K,ot,st){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ot=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)A.pushLight(D),D.castShadow&&A.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||St.intersectsSprite(D)){st&&E.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ft);const Nt=wt.update(D),Ct=D.material;Ct.visible&&w.push(D,Nt,Ct,ot,E.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||St.intersectsObject(D))){const Nt=wt.update(D),Ct=D.material;if(st&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),E.copy(D.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),E.copy(Nt.boundingSphere.center)),E.applyMatrix4(D.matrixWorld).applyMatrix4(Ft)),Array.isArray(Ct)){const zt=Nt.groups;for(let kt=0,qt=zt.length;kt<qt;kt++){const Kt=zt[kt],Ot=Ct[Kt.materialIndex];Ot&&Ot.visible&&w.push(D,Nt,Ot,ot,E.z,Kt)}}else Ct.visible&&w.push(D,Nt,Ct,ot,E.z,null)}}const Lt=D.children;for(let Nt=0,Ct=Lt.length;Nt<Ct;Nt++)Pn(Lt[Nt],K,ot,st)}function oi(D,K,ot,st){const{opaque:nt,transmissive:Lt,transparent:Nt}=D;A.setupLightsView(ot),Mt===!0&&xt.setGlobalState(T.clippingPlanes,ot),st&&W.viewport(V.copy(st)),nt.length>0&&En(nt,K,ot),Lt.length>0&&En(Lt,K,ot),Nt.length>0&&En(Nt,K,ot),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function ji(D,K,ot,st){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[st.id]===void 0){const Ot=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[st.id]=new ni(1,1,{generateMipmaps:!0,type:Ot?Ei:Mn,minFilter:or,samples:ct.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const Lt=A.state.transmissionRenderTarget[st.id],Nt=st.viewport||V;Lt.setSize(Nt.z*T.transmissionResolutionScale,Nt.w*T.transmissionResolutionScale);const Ct=T.getRenderTarget(),zt=T.getActiveCubeFace(),kt=T.getActiveMipmapLevel();T.setRenderTarget(Lt),T.getClearColor(G),tt=T.getClearAlpha(),tt<1&&T.setClearColor(16777215,.5),T.clear(),q&&Tt.render(ot);const qt=T.toneMapping;T.toneMapping=ei;const Kt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),A.setupLightsView(st),Mt===!0&&xt.setGlobalState(T.clippingPlanes,st),En(D,ot,st),B.updateMultisampleRenderTarget(Lt),B.updateRenderTargetMipmap(Lt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ae=0,ve=K.length;ae<ve;ae++){const de=K[ae],{object:le,geometry:Ce,material:Vt,group:$e}=de;if(Vt.side===Sn&&le.layers.test(st.layers)){const te=Vt.side;Vt.side=cn,Vt.needsUpdate=!0,Ri(le,ot,st,Ce,Vt,$e),Vt.side=te,Vt.needsUpdate=!0,Ot=!0}}Ot===!0&&(B.updateMultisampleRenderTarget(Lt),B.updateRenderTargetMipmap(Lt))}T.setRenderTarget(Ct,zt,kt),T.setClearColor(G,tt),Kt!==void 0&&(st.viewport=Kt),T.toneMapping=qt}function En(D,K,ot){const st=K.isScene===!0?K.overrideMaterial:null;for(let nt=0,Lt=D.length;nt<Lt;nt++){const Nt=D[nt],{object:Ct,geometry:zt,group:kt}=Nt;let qt=Nt.material;qt.allowOverride===!0&&st!==null&&(qt=st),Ct.layers.test(ot.layers)&&Ri(Ct,K,ot,zt,qt,kt)}}function Ri(D,K,ot,st,nt,Lt){D.onBeforeRender(T,K,ot,st,nt,Lt),D.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),nt.onBeforeRender(T,K,ot,st,D,Lt),nt.transparent===!0&&nt.side===Sn&&nt.forceSinglePass===!1?(nt.side=cn,nt.needsUpdate=!0,T.renderBufferDirect(ot,K,st,nt,D,Lt),nt.side=qi,nt.needsUpdate=!0,T.renderBufferDirect(ot,K,st,nt,D,Lt),nt.side=Sn):T.renderBufferDirect(ot,K,st,nt,D,Lt),D.onAfterRender(T,K,ot,st,nt,Lt)}function Ke(D,K,ot){K.isScene!==!0&&(K=et);const st=M.get(D),nt=A.state.lights,Lt=A.state.shadowsArray,Nt=nt.state.version,Ct=vt.getParameters(D,nt.state,Lt,K,ot),zt=vt.getProgramCacheKey(Ct);let kt=st.programs;st.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?K.environment:null,st.fog=K.fog;const qt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;st.envMap=Z.get(D.envMap||st.environment,qt),st.envMapRotation=st.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,kt===void 0&&(D.addEventListener("dispose",Qt),kt=new Map,st.programs=kt);let Kt=kt.get(zt);if(Kt!==void 0){if(st.currentProgram===Kt&&st.lightsStateVersion===Nt)return Zi(D,Ct),Kt}else Ct.uniforms=vt.getUniforms(D),D.onBeforeCompile(Ct,T),Kt=vt.acquireProgram(Ct,zt),kt.set(zt,Kt),st.uniforms=Ct.uniforms;const Ot=st.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ot.clippingPlanes=xt.uniform),Zi(D,Ct),st.needsLights=pn(D),st.lightsStateVersion=Nt,st.needsLights&&(Ot.ambientLightColor.value=nt.state.ambient,Ot.lightProbe.value=nt.state.probe,Ot.directionalLights.value=nt.state.directional,Ot.directionalLightShadows.value=nt.state.directionalShadow,Ot.spotLights.value=nt.state.spot,Ot.spotLightShadows.value=nt.state.spotShadow,Ot.rectAreaLights.value=nt.state.rectArea,Ot.ltc_1.value=nt.state.rectAreaLTC1,Ot.ltc_2.value=nt.state.rectAreaLTC2,Ot.pointLights.value=nt.state.point,Ot.pointLightShadows.value=nt.state.pointShadow,Ot.hemisphereLights.value=nt.state.hemi,Ot.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ot.spotLightMatrix.value=nt.state.spotLightMatrix,Ot.spotLightMap.value=nt.state.spotLightMap,Ot.pointShadowMatrix.value=nt.state.pointShadowMatrix),st.currentProgram=Kt,st.uniformsList=null,Kt}function dr(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=_a.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Zi(D,K){const ot=M.get(D);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function fe(D,K,ot,st,nt){K.isScene!==!0&&(K=et),B.resetTextureUnits();const Lt=K.fog,Nt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?K.environment:null,Ct=L===null?T.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:$r,zt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,kt=Z.get(st.envMap||Nt,zt),qt=st.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Kt=!!ot.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Ot=!!ot.morphAttributes.position,ae=!!ot.morphAttributes.normal,ve=!!ot.morphAttributes.color;let de=ei;st.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(de=T.toneMapping);const le=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ce=le!==void 0?le.length:0,Vt=M.get(st),$e=A.state.lights;if(Mt===!0&&(yt===!0||D!==F)){const Te=D===F&&st.id===y;xt.setState(st,D,Te)}let te=!1;st.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==$e.state.version||Vt.outputColorSpace!==Ct||nt.isBatchedMesh&&Vt.batching===!1||!nt.isBatchedMesh&&Vt.batching===!0||nt.isBatchedMesh&&Vt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Vt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Vt.instancing===!1||!nt.isInstancedMesh&&Vt.instancing===!0||nt.isSkinnedMesh&&Vt.skinning===!1||!nt.isSkinnedMesh&&Vt.skinning===!0||nt.isInstancedMesh&&Vt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Vt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Vt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Vt.instancingMorph===!1&&nt.morphTexture!==null||Vt.envMap!==kt||st.fog===!0&&Vt.fog!==Lt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==xt.numPlanes||Vt.numIntersection!==xt.numIntersection)||Vt.vertexAlphas!==qt||Vt.vertexTangents!==Kt||Vt.morphTargets!==Ot||Vt.morphNormals!==ae||Vt.morphColors!==ve||Vt.toneMapping!==de||Vt.morphTargetsCount!==Ce)&&(te=!0):(te=!0,Vt.__version=st.version);let gn=Vt.currentProgram;te===!0&&(gn=Ke(st,K,nt));let Me=!1,_n=!1,li=!1;const Gt=gn.getUniforms(),Pe=Vt.uniforms;if(W.useProgram(gn.program)&&(Me=!0,_n=!0,li=!0),st.id!==y&&(y=st.id,_n=!0),Me||F!==D){W.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Gt.setValue(b,"projectionMatrix",D.projectionMatrix),Gt.setValue(b,"viewMatrix",D.matrixWorldInverse);const Dn=Gt.map.cameraPosition;Dn!==void 0&&Dn.setValue(b,Pt.setFromMatrixPosition(D.matrixWorld)),ct.logarithmicDepthBuffer&&Gt.setValue(b,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Gt.setValue(b,"isOrthographic",D.isOrthographicCamera===!0),F!==D&&(F=D,_n=!0,li=!0)}if(Vt.needsLights&&($e.state.directionalShadowMap.length>0&&Gt.setValue(b,"directionalShadowMap",$e.state.directionalShadowMap,B),$e.state.spotShadowMap.length>0&&Gt.setValue(b,"spotShadowMap",$e.state.spotShadowMap,B),$e.state.pointShadowMap.length>0&&Gt.setValue(b,"pointShadowMap",$e.state.pointShadowMap,B)),nt.isSkinnedMesh){Gt.setOptional(b,nt,"bindMatrix"),Gt.setOptional(b,nt,"bindMatrixInverse");const Te=nt.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),Gt.setValue(b,"boneTexture",Te.boneTexture,B))}nt.isBatchedMesh&&(Gt.setOptional(b,nt,"batchingTexture"),Gt.setValue(b,"batchingTexture",nt._matricesTexture,B),Gt.setOptional(b,nt,"batchingIdTexture"),Gt.setValue(b,"batchingIdTexture",nt._indirectTexture,B),Gt.setOptional(b,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Gt.setValue(b,"batchingColorTexture",nt._colorsTexture,B));const In=ot.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Et.update(nt,ot,gn),(_n||Vt.receiveShadow!==nt.receiveShadow)&&(Vt.receiveShadow=nt.receiveShadow,Gt.setValue(b,"receiveShadow",nt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&K.environment!==null&&(Pe.envMapIntensity.value=K.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=J_()),_n&&(Gt.setValue(b,"toneMappingExposure",T.toneMappingExposure),Vt.needsLights&&dn(Pe,li),Lt&&st.fog===!0&&It.refreshFogUniforms(Pe,Lt),It.refreshMaterialUniforms(Pe,st,dt,k,A.state.transmissionRenderTarget[D.id]),_a.upload(b,dr(Vt),Pe,B)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(_a.upload(b,dr(Vt),Pe,B),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Gt.setValue(b,"center",nt.center),Gt.setValue(b,"modelViewMatrix",nt.modelViewMatrix),Gt.setValue(b,"normalMatrix",nt.normalMatrix),Gt.setValue(b,"modelMatrix",nt.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Te=st.uniformsGroups;for(let Dn=0,Pi=Te.length;Dn<Pi;Dn++){const mr=Te[Dn];At.update(mr,gn),At.bind(mr,gn)}}return gn}function dn(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function pn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(D,K,ot){const st=M.get(D);st.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),M.get(D.texture).__webglTexture=K,M.get(D.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ot,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,K){const ot=M.get(D);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0};const mn=b.createFramebuffer();this.setRenderTarget=function(D,K=0,ot=0){L=D,U=K,C=ot;let st=null,nt=!1,Lt=!1;if(D){const Ct=M.get(D);if(Ct.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(b.FRAMEBUFFER,Ct.__webglFramebuffer),V.copy(D.viewport),N.copy(D.scissor),$=D.scissorTest,W.viewport(V),W.scissor(N),W.setScissorTest($),y=-1;return}else if(Ct.__webglFramebuffer===void 0)B.setupRenderTarget(D);else if(Ct.__hasExternalTextures)B.rebindTextures(D,M.get(D.texture).__webglTexture,M.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const qt=D.depthTexture;if(Ct.__boundDepthTexture!==qt){if(qt!==null&&M.has(qt)&&(D.width!==qt.image.width||D.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(D)}}const zt=D.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Lt=!0);const kt=M.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(kt[K])?st=kt[K][ot]:st=kt[K],nt=!0):D.samples>0&&B.useMultisampledRTT(D)===!1?st=M.get(D).__webglMultisampledFramebuffer:Array.isArray(kt)?st=kt[ot]:st=kt,V.copy(D.viewport),N.copy(D.scissor),$=D.scissorTest}else V.copy(J).multiplyScalar(dt).floor(),N.copy(ft).multiplyScalar(dt).floor(),$=lt;if(ot!==0&&(st=mn),W.bindFramebuffer(b.FRAMEBUFFER,st)&&W.drawBuffers(D,st),W.viewport(V),W.scissor(N),W.setScissorTest($),nt){const Ct=M.get(D.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ct.__webglTexture,ot)}else if(Lt){const Ct=K;for(let zt=0;zt<D.textures.length;zt++){const kt=M.get(D.textures[zt]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+zt,kt.__webglTexture,ot,Ct)}}else if(D!==null&&ot!==0){const Ct=M.get(D.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ct.__webglTexture,ot)}y=-1},this.readRenderTargetPixels=function(D,K,ot,st,nt,Lt,Nt,Ct=0){if(!(D&&D.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=M.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){W.bindFramebuffer(b.FRAMEBUFFER,zt);try{const kt=D.textures[Ct],qt=kt.format,Kt=kt.type;if(D.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ct),!ct.textureFormatReadable(qt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Kt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-st&&ot>=0&&ot<=D.height-nt&&b.readPixels(K,ot,st,nt,mt.convert(qt),mt.convert(Kt),Lt)}finally{const kt=L!==null?M.get(L).__webglFramebuffer:null;W.bindFramebuffer(b.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(D,K,ot,st,nt,Lt,Nt,Ct=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=M.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt)if(K>=0&&K<=D.width-st&&ot>=0&&ot<=D.height-nt){W.bindFramebuffer(b.FRAMEBUFFER,zt);const kt=D.textures[Ct],qt=kt.format,Kt=kt.type;if(D.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ct),!ct.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ot=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ot),b.bufferData(b.PIXEL_PACK_BUFFER,Lt.byteLength,b.STREAM_READ),b.readPixels(K,ot,st,nt,mt.convert(qt),mt.convert(Kt),0);const ae=L!==null?M.get(L).__webglFramebuffer:null;W.bindFramebuffer(b.FRAMEBUFFER,ae);const ve=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Zf(b,ve,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ot),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Lt),b.deleteBuffer(Ot),b.deleteSync(ve),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,K=null,ot=0){const st=Math.pow(2,-ot),nt=Math.floor(D.image.width*st),Lt=Math.floor(D.image.height*st),Nt=K!==null?K.x:0,Ct=K!==null?K.y:0;B.setTexture2D(D,0),b.copyTexSubImage2D(b.TEXTURE_2D,ot,0,0,Nt,Ct,nt,Lt),W.unbindTexture()};const Ki=b.createFramebuffer(),pr=b.createFramebuffer();this.copyTextureToTexture=function(D,K,ot=null,st=null,nt=0,Lt=0){let Nt,Ct,zt,kt,qt,Kt,Ot,ae,ve;const de=D.isCompressedTexture?D.mipmaps[Lt]:D.image;if(ot!==null)Nt=ot.max.x-ot.min.x,Ct=ot.max.y-ot.min.y,zt=ot.isBox3?ot.max.z-ot.min.z:1,kt=ot.min.x,qt=ot.min.y,Kt=ot.isBox3?ot.min.z:0;else{const Pe=Math.pow(2,-nt);Nt=Math.floor(de.width*Pe),Ct=Math.floor(de.height*Pe),D.isDataArrayTexture?zt=de.depth:D.isData3DTexture?zt=Math.floor(de.depth*Pe):zt=1,kt=0,qt=0,Kt=0}st!==null?(Ot=st.x,ae=st.y,ve=st.z):(Ot=0,ae=0,ve=0);const le=mt.convert(K.format),Ce=mt.convert(K.type);let Vt;K.isData3DTexture?(B.setTexture3D(K,0),Vt=b.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(B.setTexture2DArray(K,0),Vt=b.TEXTURE_2D_ARRAY):(B.setTexture2D(K,0),Vt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,K.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,K.unpackAlignment);const $e=b.getParameter(b.UNPACK_ROW_LENGTH),te=b.getParameter(b.UNPACK_IMAGE_HEIGHT),gn=b.getParameter(b.UNPACK_SKIP_PIXELS),Me=b.getParameter(b.UNPACK_SKIP_ROWS),_n=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,de.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,de.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,kt),b.pixelStorei(b.UNPACK_SKIP_ROWS,qt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Kt);const li=D.isDataArrayTexture||D.isData3DTexture,Gt=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const Pe=M.get(D),In=M.get(K),Te=M.get(Pe.__renderTarget),Dn=M.get(In.__renderTarget);W.bindFramebuffer(b.READ_FRAMEBUFFER,Te.__webglFramebuffer),W.bindFramebuffer(b.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Pi=0;Pi<zt;Pi++)li&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,M.get(D).__webglTexture,nt,Kt+Pi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,M.get(K).__webglTexture,Lt,ve+Pi)),b.blitFramebuffer(kt,qt,Nt,Ct,Ot,ae,Nt,Ct,b.DEPTH_BUFFER_BIT,b.NEAREST);W.bindFramebuffer(b.READ_FRAMEBUFFER,null),W.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(nt!==0||D.isRenderTargetTexture||M.has(D)){const Pe=M.get(D),In=M.get(K);W.bindFramebuffer(b.READ_FRAMEBUFFER,Ki),W.bindFramebuffer(b.DRAW_FRAMEBUFFER,pr);for(let Te=0;Te<zt;Te++)li?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Pe.__webglTexture,nt,Kt+Te):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Pe.__webglTexture,nt),Gt?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,In.__webglTexture,Lt,ve+Te):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,In.__webglTexture,Lt),nt!==0?b.blitFramebuffer(kt,qt,Nt,Ct,Ot,ae,Nt,Ct,b.COLOR_BUFFER_BIT,b.NEAREST):Gt?b.copyTexSubImage3D(Vt,Lt,Ot,ae,ve+Te,kt,qt,Nt,Ct):b.copyTexSubImage2D(Vt,Lt,Ot,ae,kt,qt,Nt,Ct);W.bindFramebuffer(b.READ_FRAMEBUFFER,null),W.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Gt?D.isDataTexture||D.isData3DTexture?b.texSubImage3D(Vt,Lt,Ot,ae,ve,Nt,Ct,zt,le,Ce,de.data):K.isCompressedArrayTexture?b.compressedTexSubImage3D(Vt,Lt,Ot,ae,ve,Nt,Ct,zt,le,de.data):b.texSubImage3D(Vt,Lt,Ot,ae,ve,Nt,Ct,zt,le,Ce,de):D.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Lt,Ot,ae,Nt,Ct,le,Ce,de.data):D.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Lt,Ot,ae,de.width,de.height,le,de.data):b.texSubImage2D(b.TEXTURE_2D,Lt,Ot,ae,Nt,Ct,le,Ce,de);b.pixelStorei(b.UNPACK_ROW_LENGTH,$e),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,te),b.pixelStorei(b.UNPACK_SKIP_PIXELS,gn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Me),b.pixelStorei(b.UNPACK_SKIP_IMAGES,_n),Lt===0&&K.generateMipmaps&&b.generateMipmap(Vt),W.unbindTexture()},this.initRenderTarget=function(D){M.get(D).__webglFramebuffer===void 0&&B.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?B.setTextureCube(D,0):D.isData3DTexture?B.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?B.setTexture2DArray(D,0):B.setTexture2D(D,0),W.unbindTexture()},this.resetState=function(){U=0,C=0,L=null,W.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const Su={type:"change"},Xl={type:"start"},yh={type:"end"},sa=new Ca,Mu=new ki,tv=Math.cos(70*ih.DEG2RAD),Ie=new j,on=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mo=1e-6;class ev extends sp{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Yi,this._lastTargetPosition=new j,this._quat=new Yi().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zc,this._sphericalDelta=new Zc,this._scale=1,this._panOffset=new j,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new j,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iv.bind(this),this._onPointerDown=nv.bind(this),this._onPointerUp=rv.bind(this),this._onContextMenu=hv.bind(this),this._onMouseWheel=ov.bind(this),this._onKeyDown=lv.bind(this),this._onTouchStart=cv.bind(this),this._onTouchMove=uv.bind(this),this._onMouseDown=sv.bind(this),this._onMouseMove=av.bind(this),this._interceptControlDown=fv.bind(this),this._interceptControlUp=dv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Su),this.update(),this.state=pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ie.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new j(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(sa.origin.copy(this.object.position),sa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sa.direction))<tv?this.object.lookAt(this.target):(Mu.setFromNormalAndCoplanarPoint(this.object.up,this.target),sa.intersectPlane(Mu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Mo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mo||this._lastTargetPosition.distanceToSquared(this.target)>Mo?(this.dispatchEvent(Su),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ie.copy(r).sub(this.target);let s=Ie.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function rv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yh),this.state=pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pe.DOLLY;break;case Wr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}break;case Wr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Xl)}function av(i){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ov(i){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(i.preventDefault(),this.dispatchEvent(Xl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yh))}function lv(i){this.enabled!==!1&&this._handleKeyDown(i)}function cv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pe.TOUCH_ROTATE;break;case Vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case Vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pe.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Xl)}function uv(i){switch(this._trackPointer(i),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pe.NONE}}function hv(i){this.enabled!==!1&&i.preventDefault()}function fv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const bu=new Ti,aa=new j;class Sh extends $d{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Xe(t,3)),this.setAttribute("uv",new Xe(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Ml(e,6,1);return this.setAttribute("instanceStart",new Gi(n,3,0)),this.setAttribute("instanceEnd",new Gi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Ml(e,6,1);return this.setAttribute("instanceColorStart",new Gi(n,3,0)),this.setAttribute("instanceColorEnd",new Gi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new zd(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),bu.setFromBufferAttribute(e),this.boundingBox.union(bu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)aa.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(aa)),aa.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(aa));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Rt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Wt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ln.line={uniforms:Gl.merge([Rt.common,Rt.fog,Rt.line]),vertexShader:`
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
		`};class Kn extends Vn{constructor(t){super({type:"LineMaterial",uniforms:Gl.clone(ln.line.uniforms),vertexShader:ln.line.vertexShader,fragmentShader:ln.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const bo=new me,Eu=new j,wu=new j,Fe=new me,Oe=new me,Yn=new me,Eo=new j,wo=new xe,Be=new ip,Tu=new j,oa=new Ti,la=new Qr,jn=new me;let $n,ur;function Au(i,t,e){return jn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),jn.multiplyScalar(1/jn.w),jn.x=ur/e.width,jn.y=ur/e.height,jn.applyMatrix4(i.projectionMatrixInverse),jn.multiplyScalar(1/jn.w),Math.abs(Math.max(jn.x,jn.y))}function pv(i,t){const e=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,r.count);for(let o=0,l=a;o<l;o++){Be.start.fromBufferAttribute(r,o),Be.end.fromBufferAttribute(s,o),Be.applyMatrix4(e);const c=new j,m=new j;$n.distanceSqToSegment(Be.start,Be.end,m,c),m.distanceTo(c)<ur*.5&&t.push({point:m,pointOnLine:c,distance:$n.origin.distanceTo(m),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function mv(i,t,e){const n=t.projectionMatrix,s=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,m=Math.min(o.instanceCount,l.count),d=-t.near;$n.at(1,Yn),Yn.w=1,Yn.applyMatrix4(t.matrixWorldInverse),Yn.applyMatrix4(n),Yn.multiplyScalar(1/Yn.w),Yn.x*=s.x/2,Yn.y*=s.y/2,Yn.z=0,Eo.copy(Yn),wo.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,f=m;u<f;u++){if(Fe.fromBufferAttribute(l,u),Oe.fromBufferAttribute(c,u),Fe.w=1,Oe.w=1,Fe.applyMatrix4(wo),Oe.applyMatrix4(wo),Fe.z>d&&Oe.z>d)continue;if(Fe.z>d){const x=Fe.z-Oe.z,w=(Fe.z-d)/x;Fe.lerp(Oe,w)}else if(Oe.z>d){const x=Oe.z-Fe.z,w=(Oe.z-d)/x;Oe.lerp(Fe,w)}Fe.applyMatrix4(n),Oe.applyMatrix4(n),Fe.multiplyScalar(1/Fe.w),Oe.multiplyScalar(1/Oe.w),Fe.x*=s.x/2,Fe.y*=s.y/2,Oe.x*=s.x/2,Oe.y*=s.y/2,Be.start.copy(Fe),Be.start.z=0,Be.end.copy(Oe),Be.end.z=0;const _=Be.closestPointToPointParameter(Eo,!0);Be.at(_,Tu);const p=ih.lerp(Fe.z,Oe.z,_),h=p>=-1&&p<=1,v=Eo.distanceTo(Tu)<ur*.5;if(h&&v){Be.start.fromBufferAttribute(l,u),Be.end.fromBufferAttribute(c,u),Be.start.applyMatrix4(a),Be.end.applyMatrix4(a);const x=new j,w=new j;$n.distanceSqToSegment(Be.start,Be.end,w,x),e.push({point:w,pointOnLine:x,distance:$n.origin.distanceTo(w),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}class gv extends Rn{constructor(t=new Sh,e=new Kn({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Eu.fromBufferAttribute(e,a),wu.fromBufferAttribute(n,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Eu.distanceTo(wu);const s=new Ml(r,2,1);return t.setAttribute("instanceDistanceStart",new Gi(s,1,0)),t.setAttribute("instanceDistanceEnd",new Gi(s,1,1)),this}raycast(t,e){const n=this.material.worldUnits,r=t.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;$n=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;ur=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),la.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=ur*.5;else{const d=Math.max(r.near,la.distanceToPoint($n.origin));c=Au(r,d,l.resolution)}if(la.radius+=c,$n.intersectsSphere(la)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),oa.copy(o.boundingBox).applyMatrix4(a);let m;if(n)m=ur*.5;else{const d=Math.max(r.near,oa.distanceToPoint($n.origin));m=Au(r,d,l.resolution)}oa.expandByScalar(m),$n.intersectsBox(oa)!==!1&&(n?pv(this,e):mv(this,r,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(bo),this.material.uniforms.resolution.value.set(bo.z,bo.w))}}class cr extends Sh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let r=0;r<e;r++)n[6*r]=t[r].x,n[6*r+1]=t[r].y,n[6*r+2]=t[r].z||0,n[6*r+3]=t[r+1].x,n[6*r+4]=t[r+1].y,n[6*r+5]=t[r+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class Gr extends gv{constructor(t=new cr,e=new Kn({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function ql(i){if(i.length===0)return 0;for(var t=0,e=0,n=0,r=i.length,s=0;s<r;s++)t+=i[s].v0.x+i[s].v1.x+i[s].v2.x,e+=i[s].v0.y+i[s].v1.y+i[s].v2.y,n+=i[s].v0.z+i[s].v1.z+i[s].v2.z;var a=1/(r*3);t*=a,e*=a,n*=a;for(var o=0,l=0;l<r;l++){var c=i[l].v0.x-t,m=i[l].v0.y-e,d=i[l].v0.z-n,u=i[l].v1.x-t,f=i[l].v1.y-e,g=i[l].v1.z-n,_=i[l].v2.x-t,p=i[l].v2.y-e,h=i[l].v2.z-n;o+=(c*(f*h-p*g)-u*(m*h-p*d)+_*(m*g-f*d))/6}return o}function Mh(i){for(var t=0,e=0;e<i.length;e++){var n=i[e].v0,r=i[e].v1,s=i[e].v2,a=r.x-n.x,o=r.y-n.y,l=r.z-n.z,c=s.x-n.x,m=s.y-n.y,d=s.z-n.z,u=o*d-l*m,f=l*c-a*d,g=a*m-o*c;t+=.5*Math.sqrt(u*u+f*f+g*g)}return t}function _v(i){var t=i*2;t<1e-12&&(t=1e-6);var e={},n=[],r=0,s=i*i;function a(d,u,f){var g=Math.floor(d/t),_=Math.floor(u/t),p=Math.floor(f/t);return g+","+_+","+p}function o(d,u,f){for(var g=Math.floor(d/t),_=Math.floor(u/t),p=Math.floor(f/t),h=s,v=null,x=-1;x<=1;x++)for(var w=-1;w<=1;w++)for(var A=-1;A<=1;A++){var R=g+x+","+(_+w)+","+(p+A),P=e[R];if(P)for(var S=0;S<P.length;S++){var T=P[S],z=T.x-d,U=T.y-u,C=T.z-f,L=z*z+U*U+C*C;L<h&&(h=L,v=T)}}return v}function l(d,u,f,g){var _=o(d,u,f);if(_){if(g){for(var p=!1,h=0;h<_.triRefs.length;h++){var v=_.triRefs[h];if(v.mesh===g.mesh&&v.triIdx===g.triIdx){p=!0;break}}p||_.triRefs.push(g)}return _}var x={x:d,y:u,z:f,id:r++,triRefs:g?[g]:[]},w=a(d,u,f);return e[w]||(e[w]=[]),e[w].push(x),n.push(x),x}function c(){return n}function m(){return n.length}return{getOrCreate:l,getAll:c,size:m}}function bh(i,t,e){for(var n=e||{},r=xi(i),s=xi(t),a=(r+s)/2,o=n.tolerance!==void 0?n.tolerance:a*.001,l=_v(o),c=Math.max(s*2,.1),m=ef(t,c),d=[],u={},f={},g=0;g<i.length;g++)for(var _=i[g],p=nf(_),h=rf(m,p,c),v=0;v<h.length;v++){var x=h[v],w=t[x],A=sf(_,w);if(A){var R=l.getOrCreate(A.p0.x,A.p0.y,A.p0.z,{mesh:"A",triIdx:g});l.getOrCreate(A.p0.x,A.p0.y,A.p0.z,{mesh:"B",triIdx:x});var P=l.getOrCreate(A.p1.x,A.p1.y,A.p1.z,{mesh:"A",triIdx:g});if(l.getOrCreate(A.p1.x,A.p1.y,A.p1.z,{mesh:"B",triIdx:x}),R!==P){var S={p0:R,p1:P,idxA:g,idxB:x};d.push(S),u[g]||(u[g]=[]),u[g].push(S),f[x]||(f[x]=[]),f[x].push(S)}}}return{segments:d,crossedSetA:u,crossedSetB:f,pool:l}}function Yl(i){if(i.length===0)return[];for(var t={},e=0;e<i.length;e++){var n=i[e],r=n.p0.id,s=n.p1.id;t[r]||(t[r]=[]),t[r].push({segIdx:e,otherEnd:n.p1}),t[s]||(t[s]=[]),t[s].push({segIdx:e,otherEnd:n.p0})}var a=new Uint8Array(i.length);function o(P,S){var T=S.x-P.x,z=S.y-P.y,U=S.z-P.z,C=Math.sqrt(T*T+z*z+U*U);return C<1e-15?null:{x:T/C,y:z/C,z:U/C}}function l(P,S){var T=t[P.id];if(!T)return null;for(var z=null,U=-1/0,C=0;C<T.length;C++){var L=T[C];if(!a[L.segIdx]){if(!S)return L;var y=L.otherEnd.x-P.x,F=L.otherEnd.y-P.y,V=L.otherEnd.z-P.z,N=Math.sqrt(y*y+F*F+V*V);if(N<1e-15){z||(z=L,U=-1/0);continue}var $=(y*S.x+F*S.y+V*S.z)/N;$>U&&(U=$,z=L)}}return z}for(var c=[],m=0;m<i.length;m++)if(!a[m]){a[m]=1;for(var d=[i[m].p0,i[m].p1],u=[];;){var f=d[d.length-1],g=d[d.length-2],_=o(g,f),p=l(f,_);if(!p)break;var h=u.length>0?u[u.length-1]:d[0];if(p.otherEnd===h){a[p.segIdx]=1,d.push(p.otherEnd);break}a[p.segIdx]=1,d.push(p.otherEnd)}for(;;){var v,x;u.length>=2?(v=u[u.length-1],x=u[u.length-2]):u.length===1?(v=u[0],x=d[0]):(v=d[0],x=d[1]);var w=o(x,v),A=l(v,w);if(!A)break;a[A.segIdx]=1,u.push(A.otherEnd)}var R;u.length>0?(u.reverse(),R=u.concat(d)):R=d,c.push(R)}return c}function vv(i,t){for(i=i<0n?-i:i,t=t<0n?-t:t;t!==0n;){const e=t;t=i%t,i=e}return i}function Lr(i){if(!isFinite(i))throw new RangeError("Cannot convert non-finite number to Rational");if(i===0)return new ti(0n,1n);const t=String(i),e=t.charCodeAt(0)===45,n=e?t.slice(1):t,r=n.indexOf("e");if(r!==-1){const s=n.slice(0,r),a=parseInt(n.slice(r+1),10),o=Cu(s,e),l=10n**BigInt(Math.abs(a));return a>=0?new ti(o.numerator*l,o.denominator):new ti(o.numerator,o.denominator*l)}return Cu(n,e)}function Cu(i,t){const e=i.indexOf(".");if(e===-1){const l=t?-BigInt(i):BigInt(i);return new ti(l,1n)}const n=i.slice(0,e)||"0",r=i.slice(e+1),s=n+r,a=t?-BigInt(s):BigInt(s),o=10n**BigInt(r.length);return new ti(a,o)}class ti{constructor(t,e=1n){let n=BigInt(t),r=BigInt(e);if(r===0n)throw new RangeError("Denominator must not be zero");r<0n&&(n=-n,r=-r);const s=vv(n<0n?-n:n,r);this.numerator=n/s,this.denominator=r/s}add(t){return new ti(this.numerator*t.denominator+t.numerator*this.denominator,this.denominator*t.denominator)}subtract(t){return new ti(this.numerator*t.denominator-t.numerator*this.denominator,this.denominator*t.denominator)}multiply(t){return new ti(this.numerator*t.numerator,this.denominator*t.denominator)}divide(t){if(t.numerator===0n)throw new RangeError("Division by zero");return new ti(this.numerator*t.denominator,this.denominator*t.numerator)}sign(){return this.numerator===0n?0:this.numerator>0n?1:-1}isZero(){return this.numerator===0n}toNumber(){return Number(this.numerator)/Number(this.denominator)}toString(){return this.denominator===1n?String(this.numerator):`${this.numerator}/${this.denominator}`}}function To(i,t,e){const n=Lr(i.x),r=Lr(i.y),s=Lr(t.x),a=Lr(t.y),o=Lr(e.x),l=Lr(e.y),c=s.subtract(n),m=a.subtract(r),d=o.subtract(n),u=l.subtract(r);return c.multiply(u).subtract(d.multiply(m)).sign()}function gi(i,t){if(!t||t.length===0)return[i];var e=i.v1.x-i.v0.x,n=i.v1.y-i.v0.y,r=i.v1.z-i.v0.z,s=i.v2.x-i.v0.x,a=i.v2.y-i.v0.y,o=i.v2.z-i.v0.z,l=Math.sqrt(e*e+n*n+r*r);if(l<1e-12)return[i];var c=e/l,m=n/l,d=r/l,u=n*o-r*a,f=r*s-e*o,g=e*a-n*s,_=Math.sqrt(u*u+f*f+g*g);if(_<1e-12)return[i];var p=f*d-g*m,h=g*c-u*d,v=u*m-f*c,x=Math.sqrt(p*p+h*h+v*v);if(x<1e-12)return[i];p/=x,h/=x,v/=x;var w=i.v0.x,A=i.v0.y,R=i.v0.z;function P(fe){var dn=fe.x-w,pn=fe.y-A,mn=fe.z-R;return[dn*c+pn*m+mn*d,dn*p+pn*h+mn*v]}var S=P(i.v0),T=P(i.v1),z=P(i.v2),U=(T[1]-z[1])*(S[0]-z[0])+(z[0]-T[0])*(S[1]-z[1]);if(Math.abs(U)<1e-12)return[i];function C(fe,dn){var pn=((T[1]-z[1])*(fe-z[0])+(z[0]-T[0])*(dn-z[1]))/U,mn=((z[1]-S[1])*(fe-z[0])+(S[0]-z[0])*(dn-z[1]))/U;return[pn,mn,1-pn-mn]}var L=Math.abs(U)*.5,y=1e-8,F={},V=Zt(i.v0),N=Zt(i.v1),$=Zt(i.v2),G=[],tt=[i.v0,i.v1,i.v2],H={},k={};k[V]=0,k[N]=1,k[$]=2;var dt=Math.abs(u),at=Math.abs(f),ht=Math.abs(g),J,ft;dt>=at&&dt>=ht?(J=function(fe){return fe.y},ft=function(fe){return fe.z}):at>=ht?(J=function(fe){return fe.x},ft=function(fe){return fe.z}):(J=function(fe){return fe.x},ft=function(fe){return fe.y});var lt={x:J(i.v0),y:ft(i.v0)},St={x:J(i.v1),y:ft(i.v1)},Mt={x:J(i.v2),y:ft(i.v2)};function yt(fe){var dn={x:J(fe),y:ft(fe)},pn=To(lt,St,dn),mn=To(St,Mt,dn),Ki=To(Mt,lt,dn),pr=pn<0||mn<0||Ki<0,D=pn>0||mn>0||Ki>0;return!(pr&&D)}for(var Ft=-1e-4,Pt=0;Pt<t.length;Pt++)for(var E=t[Pt],et=[E.p0,E.p1],q=0;q<2;q++){var O=et[q],b=Zt(O);if(b===V||b===N||b===$){O.id!==void 0&&(H[O.id]=k[b]);continue}if(!(O.id!==void 0&&F[O.id])){if(O.id!==void 0&&(F[O.id]=!0),!yt(O)){var Y=P(O),it=C(Y[0],Y[1]);if(it[0]<Ft||it[1]<Ft||it[2]<Ft){var ct=Math.min(it[0],it[1],it[2]);if(ct<-.01)continue}}var W=tt.length;tt.push(O),O.id!==void 0&&(H[O.id]=W),k[b]=W,G.push(O)}}if(G.length===0)return[i];for(var I=tt.length,M=new Float64Array(I*2),B=0;B<I;B++){var Z=P(tt[B]);M[B*2]=Z[0],M[B*2+1]=Z[1]}var rt;try{rt=new af(M)}catch{return[i]}try{for(var Q=new of(rt),wt=0;wt<t.length;wt++){var vt=t[wt],It,Bt;if(vt.p0.id!==void 0&&H[vt.p0.id]!==void 0?It=H[vt.p0.id]:It=k[Zt(vt.p0)],vt.p1.id!==void 0&&H[vt.p1.id]!==void 0?Bt=H[vt.p1.id]:Bt=k[Zt(vt.p1)],It!==void 0&&Bt!==void 0&&It!==Bt)try{Q.constrainOne(It,Bt)}catch{}}}catch{}for(var pt=u,xt=f,Ut=g,Tt=[],Et=rt.triangles,bt=0;bt<Et.length;bt+=3){var X=Et[bt],mt=Et[bt+1],_t=Et[bt+2],At=(M[X*2]+M[mt*2]+M[_t*2])/3,gt=(M[X*2+1]+M[mt*2+1]+M[_t*2+1])/3,ut=C(At,gt);if(!(ut[0]<-1e-6||ut[1]<-1e-6||ut[2]<-1e-6)){var Dt=M[X*2],Ht=M[X*2+1],se=M[mt*2],Qt=M[mt*2+1],je=M[_t*2],Ze=M[_t*2+1],Ai=Math.abs((se-Dt)*(Ze-Ht)-(je-Dt)*(Qt-Ht))*.5;if(!(Ai<L*y)){var Ee=tt[X],fn=tt[mt],Hn=tt[_t],Ci=fn.x-Ee.x,we=fn.y-Ee.y,Pn=fn.z-Ee.z,oi=Hn.x-Ee.x,ji=Hn.y-Ee.y,En=Hn.z-Ee.z,Ri=we*En-Pn*ji,Ke=Pn*oi-Ci*En,dr=Ci*ji-we*oi,Zi=Ri*pt+Ke*xt+dr*Ut;Zi<0?Tt.push({v0:Ee,v1:Hn,v2:fn}):Tt.push({v0:Ee,v1:fn,v2:Hn})}}}return Tt.length===0?[i]:Tt}function Ru(i,t){if(!t||t.length===0)return[i];var e=Yl(t);if(e.length!==1||e[0].length<2)return gi(i,t);var n=e[0],r=[i.v0,i.v1,i.v2],s=i.v1.x-i.v0.x,a=i.v1.y-i.v0.y,o=i.v1.z-i.v0.z,l=i.v2.x-i.v0.x,c=i.v2.y-i.v0.y,m=i.v2.z-i.v0.z,d=Math.sqrt(s*s+a*a+o*o);if(d<1e-12)return gi(i,t);var u=s/d,f=a/d,g=o/d,_=a*m-o*c,p=o*l-s*m,h=s*c-a*l,v=Math.sqrt(_*_+p*p+h*h);if(v<1e-12)return gi(i,t);var x=p*g-h*f,w=h*u-_*g,A=_*f-p*u,R=Math.sqrt(x*x+w*w+A*A);if(R<1e-12)return gi(i,t);x/=R,w/=R,A/=R;function P(bt){var X=bt.x-i.v0.x,mt=bt.y-i.v0.y,_t=bt.z-i.v0.z;return[X*u+mt*f+_t*g,X*x+mt*w+_t*A]}var S=P(i.v0),T=P(i.v1),z=P(i.v2),U=(T[1]-z[1])*(S[0]-z[0])+(z[0]-T[0])*(S[1]-z[1]);if(Math.abs(U)<1e-12)return gi(i,t);function C(bt,X){var mt=((T[1]-z[1])*(bt-z[0])+(z[0]-T[0])*(X-z[1]))/U,_t=((z[1]-S[1])*(bt-z[0])+(S[0]-z[0])*(X-z[1]))/U;return[mt,_t,1-mt-_t]}var L=.02,y=.02,F=P(n[0]),V=P(n[n.length-1]),N=C(F[0],F[1]),$=C(V[0],V[1]);function G(bt){for(var X=0,mt=0;mt<3;mt++)bt[mt]<y&&X++;return X>=2}if(G(N)||G($))return gi(i,t);function tt(bt){return bt[0]<L&&bt[0]<=bt[1]&&bt[0]<=bt[2]?0:bt[1]<L&&bt[1]<=bt[0]&&bt[1]<=bt[2]?1:bt[2]<L&&bt[2]<=bt[0]&&bt[2]<=bt[1]?2:-1}var H=tt(N),k=tt($);if(H<0||k<0||H===k)return gi(i,t);for(var dt=-1,at=0;at<3;at++)if(at!==H&&at!==k){dt=at;break}if(dt<0)return gi(i,t);var ht=r[dt],J=r[k],ft=r[H],lt=a*m-o*c,St=o*l-s*m,Mt=s*c-a*l;function yt(bt,X,mt){var _t=X.x-bt.x,At=X.y-bt.y,gt=X.z-bt.z,ut=mt.x-bt.x,Dt=mt.y-bt.y,Ht=mt.z-bt.z,se=At*Ht-gt*Dt,Qt=gt*ut-_t*Ht,je=_t*Dt-At*ut,Ze=se*lt+Qt*St+je*Mt;return Ze<0?{v0:bt,v1:mt,v2:X}:{v0:bt,v1:X,v2:mt}}for(var Ft=[],Pt=0;Pt<n.length-1;Pt++)Ft.push(yt(ht,n[Pt],n[Pt+1]));for(var E=0,et=1/0,q=0;q<n.length;q++){var O=pc(J,n[q]),b=pc(ft,n[q]),Y=O<1e-20||b<1e-20?1/0:O<b?O/b:b/O,it=Math.abs(1-Y);it<et&&(et=it,E=q)}E<1&&(E=1),E>n.length-2&&(E=n.length-2);for(var ct=0;ct<E;ct++)Ft.push(yt(J,n[ct],n[ct+1]));Ft.push(yt(J,n[E],ft));for(var W=E;W<n.length-1;W++)Ft.push(yt(ft,n[W],n[W+1]));for(var I=v*.5,M=I*1e-8,B=[],Z=0;Z<Ft.length;Z++){var rt=Ft[Z],Q=rt.v1.x-rt.v0.x,wt=rt.v1.y-rt.v0.y,vt=rt.v1.z-rt.v0.z,It=rt.v2.x-rt.v0.x,Bt=rt.v2.y-rt.v0.y,pt=rt.v2.z-rt.v0.z,xt=wt*pt-vt*Bt,Ut=vt*It-Q*pt,Tt=Q*Bt-wt*It,Et=Math.sqrt(xt*xt+Ut*Ut+Tt*Tt)*.5;Et>M&&B.push(rt)}return B.length>0?B:gi(i,t)}function Eh(i,t,e){for(var n=e.crossedSetA,r=e.crossedSetB,s=[],a=0;a<i.length;a++)if(!n[a])s.push({v0:i[a].v0,v1:i[a].v1,v2:i[a].v2,mesh:"A",origIdx:a});else for(var o=Ru(i[a],n[a]),l=0;l<o.length;l++)s.push({v0:o[l].v0,v1:o[l].v1,v2:o[l].v2,mesh:"A",origIdx:a});for(var c=0;c<t.length;c++)if(!r[c])s.push({v0:t[c].v0,v1:t[c].v1,v2:t[c].v2,mesh:"B",origIdx:c});else for(var m=Ru(t[c],r[c]),d=0;d<m.length;d++)s.push({v0:m[d].v0,v1:m[d].v1,v2:m[d].v2,mesh:"B",origIdx:c});return s}function xv(i){for(var t={},e={},n={},r=0;r<i.length;r++)for(var s=i[r],a=[s.v0,s.v1,s.v2],o=[Zt(a[0]),Zt(a[1]),Zt(a[2])],l=0;l<3;l++){t[o[l]]=a[l];var c=(l+1)%3,m=(l+2)%3,d=o[l]+"|"+o[c];e[d]=!0,n[d]===void 0&&(n[d]=o[c]+"|"+o[m])}var u={},f={};for(var g in e){var _=g.indexOf("|"),p=g.substring(0,_),h=g.substring(_+1),v=h+"|"+p;e[v]||(u[g]=!0,f[p]||(f[p]=[]),f[p].push(g))}if(Object.keys(u).length===0)return[];var x={};for(var w in u){var A=w.indexOf("|");w.substring(A+1);var R=n[w],P={};P[w]=!0;for(var S=1e3;S-- >0&&!(!R||P[R]);){if(P[R]=!0,u[R]){x[w]=R;break}var T=R.indexOf("|"),z=R.substring(0,T),U=R.substring(T+1),C=U+"|"+z;if(!e[C])break;R=n[C]}}var L={},y=null;for(var F in u)if(!L[F]){for(var V=[],N=F,$=Object.keys(u).length+2;$-- >0;){if(L[N]){if(N===F&&V.length>0){var G=N.indexOf("|"),tt=N.substring(0,G);V.push({key:tt,vertex:t[tt]})}break}L[N]=!0;var H=N.indexOf("|"),k=N.substring(0,H);if(V.push({key:k,vertex:t[k]}),N=x[N],!N)break}(!y||V.length>y.length)&&(y=V)}return y||[]}function yv(i,t){for(var e={},n={},r={},s=0;s<i.length;s++)for(var a=i[s],o=[a.v0,a.v1,a.v2],l=[Zt(o[0]),Zt(o[1]),Zt(o[2])],c=0;c<3;c++){var m=(c+1)%3,d=ri(l[c],l[m]);if(!r[d]){if(r[d]=!0,t&&t[d]){n[l[c]]||(n[l[c]]=o[c]),n[l[m]]||(n[l[m]]=o[m]);continue}e[l[c]]||(e[l[c]]=[]),e[l[m]]||(e[l[m]]=[]),e[l[c]].push(l[m]),e[l[m]].push(l[c])}n[l[c]]||(n[l[c]]=o[c]),n[l[m]]||(n[l[m]]=o[m])}return{adj:e,vertMap:n}}function Ao(i,t,e,n,r){if(t[i])return{path:n[i]?[n[i]]:[],targetKey:i};var s={};s[i]=null;for(var a=[i],o=0,l=null;o<a.length&&o<r;){var c=a[o++],m=e[c];if(m){for(var d=0;d<m.length;d++){var u=m[d];if(s[u]===void 0){if(s[u]=c,t[u]){l=u;break}a.push(u)}}if(l)break}}if(!l)return null;for(var f=[],g=l;g!==null;)f.push(g),g=s[g];f.reverse();for(var _=[],p=0;p<f.length;p++){var h=n[f[p]];h&&_.push(h)}return{path:_,targetKey:l}}function wh(i,t,e,n,r){if(i.length===0)return{closedPolylines:[],meshEdgePolys:{A:{segments:[],closed:!1},B:{segments:[],closed:!1}}};var s={};if(r)for(var a=0;a<r.length;a++){var o=r[a],l=Zt(o.p0),c=Zt(o.p1);s[ri(l,c)]=!0}var m=[],d=[];if(n)for(var u=0;u<n.length;u++)n[u].mesh==="A"?m.push(n[u]):d.push(n[u]);for(var f=Pu(i,t,m.length>0?m:t,s),g=Pu(i,e,d.length>0?d:e,s),_=[],p=0;p<i.length;p++)_.push(i[p]);return{closedPolylines:_,meshEdgePolys:{A:f,B:g}}}function Pu(i,t,e,n){if(i.length===0)return{segments:[],closed:!1};var r=xv(t),s=r.length>0;if(!s){for(var a=[],o=0;o<i.length;o++)a.push({verts:i[o].slice(),type:"intersection"});var l=i.length>0&&i[0].length>2&&i[0][0]===i[0][i[0].length-1];return{segments:a,closed:l}}for(var c=yv(e,n),m={},d={},u=0;u<r.length;u++)m[r[u].key]=!0,d[r[u].key]=u;for(var f=r.length-1,g=[],_=5e4,p=0;p<i.length;p++){var h=i[p],v=h.length>2&&h[0]===h[h.length-1];if(v){for(var x=null,w=_,A=-1,R=0;R<h.length;R++){var P=Zt(h[R]),S=Ao(P,m,c.adj,c.vertMap,w);S&&S.path.length<w&&(w=S.path.length,x=S,A=R)}if(x){var T=d[x.targetKey];g.push({chainIdx:p,entryVertIdx:A,gwIn:x.path.slice().reverse(),gwOut:x.path.slice(),bdryIdxIn:T!==void 0?T:0,bdryIdxOut:T!==void 0?T:0})}}else{var z=Zt(h[0]),U=Zt(h[h.length-1]),C=Ao(z,m,c.adj,c.vertMap,_),L=Ao(U,m,c.adj,c.vertMap,_);if(C&&L){var y=d[C.targetKey],F=d[L.targetKey];g.push({chainIdx:p,entryVertIdx:0,gwIn:C.path.slice().reverse(),gwOut:L.path.slice(),bdryIdxIn:y!==void 0?y:0,bdryIdxOut:F!==void 0?F:0})}else if(C){var V=d[C.targetKey];g.push({chainIdx:p,entryVertIdx:0,gwIn:C.path.slice().reverse(),gwOut:C.path.slice(),bdryIdxIn:V!==void 0?V:0,bdryIdxOut:V!==void 0?V:0})}else if(L){var N=d[L.targetKey];g.push({chainIdx:p,entryVertIdx:h.length-1,gwIn:L.path.slice().reverse(),gwOut:L.path.slice(),bdryIdxIn:N!==void 0?N:0,bdryIdxOut:N!==void 0?N:0})}}}if(g.length===0){for(var $=[],G=0;G<i.length;G++)$.push({verts:i[G].slice(),type:"intersection"});return{segments:$,closed:!1}}g.sort(function(Y,it){return Y.bdryIdxIn-it.bdryIdxIn});for(var tt=[],H=g[0].bdryIdxIn,k=H,dt=0;dt<g.length;dt++){var at=g[dt];if(dt>0){var ht=k,J=at.bdryIdxIn;if(ht!==J){var ft=[];if(J>ht)for(var lt=ht;lt<=J;lt++)ft.push(r[lt].vertex);else{for(var St=ht;St<f;St++)ft.push(r[St].vertex);for(var Mt=0;Mt<=J;Mt++)ft.push(r[Mt].vertex)}ft.length>=2&&tt.push({verts:ft,type:"walk"})}}at.gwIn.length>=2&&tt.push({verts:at.gwIn,type:"walk"});var h=i[at.chainIdx].slice(),v=h.length>2&&h[0]===h[h.length-1];if(at.entryVertIdx>0)if(v){for(var yt=[],Ft=at.entryVertIdx;Ft<h.length-1;Ft++)yt.push(h[Ft]);for(var Pt=0;Pt<=at.entryVertIdx;Pt++)yt.push(h[Pt]);h=yt}else at.entryVertIdx===h.length-1&&h.reverse();tt.push({verts:h,type:"intersection"}),at.gwOut.length>=2&&tt.push({verts:at.gwOut,type:"walk"}),k=at.bdryIdxOut}var E=[];if(k!==H){for(var et=k;et<f;et++)E.push(r[et].vertex);for(var q=0;q<=H;q++)E.push(r[q].vertex)}else{for(var O=H;O<f;O++)E.push(r[O].vertex);for(var b=0;b<=H;b++)E.push(r[b].vertex)}return E.length>=2&&tt.push({verts:E,type:"walk"}),{segments:tt,closed:!0}}function Iu(i){for(var t={},e={},n=0;n<i.length;n++)for(var r=i[n],s=[r.v0,r.v1,r.v2],a=[Zt(s[0]),Zt(s[1]),Zt(s[2])],o=0;o<3;o++){var l=(o+1)%3,c=a[o]<a[l]?a[o]+"|"+a[l]:a[l]+"|"+a[o];t[c]||(t[c]=0,e[c]=[a[o],a[l]]),t[c]++}var m={};for(var d in t)if(t[d]===1){var u=e[d];m[u[0]]=!0,m[u[1]]=!0}return m}function Sv(i,t,e){for(var n=0;n<i.triIndices.length;n++)for(var r=t[i.triIndices[n]],s=[Zt(r.v0),Zt(r.v1),Zt(r.v2)],a=0;a<3;a++)if(e[s[a]])return!1;return!0}function Du(i){if(!i||!i.segments)return{};for(var t={},e=null,n=0;n<i.segments.length;n++)for(var r=i.segments[n],s=0;s<r.verts.length;s++){var a=r.verts[s];if(e){var o=Zt(e),l=Zt(a);if(o!==l){var c=ri(o,l);t[c]={dx:a.x-e.x,dy:a.y-e.y,dz:a.z-e.z,mx:(e.x+a.x)*.5,my:(e.y+a.y)*.5,mz:(e.z+a.z)*.5}}}e=a}return t}function Lu(i,t,e,n){for(var r=i.mesh,s=0,a=0,o={},l=0;l<i.triIndices.length;l++)for(var c=i.triIndices[l],m=t[c],d=[m.v0,m.v1,m.v2],u=[Zt(d[0]),Zt(d[1]),Zt(d[2])],f=0;f<3;f++){var g=(f+1)%3,_=ri(u[f],u[g]);if(e[_]&&!o[_]){o[_]=!0;var p=3-f-g,h=d[p],v=d[f],x=d[g],w=(v.x+x.x)*.5,A=(v.y+x.y)*.5,R=(v.z+x.z)*.5,P=h.x-w,S=h.y-A,T=h.z-R,z=Math.sqrt(P*P+S*S+T*T);if(!(z<1e-12)){P/=z,S/=z,T/=z;var U=n[_];if(U){for(var C=0,L=0,y=0,F=!1,V=0;V<U.length;V++){var N=t[U[V]];if(N.mesh!==r){var $=N.v1.x-N.v0.x,G=N.v1.y-N.v0.y,tt=N.v1.z-N.v0.z,H=N.v2.x-N.v0.x,k=N.v2.y-N.v0.y,dt=N.v2.z-N.v0.z;C=G*dt-tt*k,L=tt*H-$*dt,y=$*k-G*H,F=!0;break}}if(F){var at=Math.sqrt(C*C+L*L+y*y);at<1e-12||(C/=at,L/=at,y/=at,s+=P*C+S*L+T*y,a++)}}}}}return a===0?!1:s/a<0}function Mv(i,t,e){for(var n={},r={},s=0;s<i.triIndices.length;s++)for(var a=t[i.triIndices[s]],o=[a.v0,a.v1,a.v2],l=[Zt(o[0]),Zt(o[1]),Zt(o[2])],c=0;c<3;c++){var m=(c+1)%3,d=l[c]+"|"+l[m];n[d]||(n[d]=0,r[d]={fromVert:o[c],toVert:o[m]}),n[d]++}var u=[];for(var f in n){var g=f.split("|"),_=g[0],p=g[1],h=p+"|"+_,v=ri(_,p),x=!!e[v],w=!!n[h];if(!w||x){var A=r[f];u.push({from:_,to:p,fromVert:A.fromVert,toVert:A.toVert,type:x?"intersection":"walk"})}}if(u.length===0)return[];for(var R={},P=0;P<u.length;P++){var S=u[P].from;R[S]||(R[S]=[]),R[S].push(P)}for(var T=new Array(u.length),z=0;z<T.length;z++)T[z]=!1;for(var U=[],C=0;C<u.length;C++)if(!T[C]){var L=[],y=C;T[y]=!0,L.push(y);for(var F=u[y].to,V=u.length+1,N=0;F!==u[C].from&&N<V;){N++;var $=R[F];if(!$||$.length===0)break;for(var G=-1,tt=0;tt<$.length;tt++)if(!T[$[tt]]){G=$[tt];break}if(G===-1)break;T[G]=!0,L.push(G),F=u[G].to}if(!(L.length<2)){for(var H=u[L[0]].type,k=[u[L[0]].fromVert,u[L[0]].toVert],dt=1;dt<L.length;dt++){var at=u[L[dt]];at.type===H?k.push(at.toVert):(U.push({verts:k,type:H}),H=at.type,k=[at.fromVert,at.toVert])}U.push({verts:k,type:H})}}return U}function bv(i,t,e,n,r,s){for(var a=i.length,o={},l=0;l<e.length;l++){var c=e[l];if(c.p0!==c.p1){var m=Zt(c.p0),d=Zt(c.p1);m!==d&&(o[ri(m,d)]=!0)}}for(var u={},f=0;f<a;f++)for(var g=i[f],_=[Zt(g.v0),Zt(g.v1),Zt(g.v2)],p=0;p<3;p++){var h=(p+1)%3,v=ri(_[p],_[h]);u[v]||(u[v]=[]),u[v].push(f)}for(var x=new Array(a),w=0;w<a;w++)x[w]=[];for(var A in u)if(!o[A])for(var R=u[A],P=0;P<R.length;P++)for(var S=P+1;S<R.length;S++)x[R[P]].push(R[S]),x[R[S]].push(R[P]);for(var T=new Int32Array(a),z=0;z<a;z++)T[z]=-1;for(var U=[],C=0,L=0;L<a;L++)if(!(T[L]>=0)){var y=i[L].mesh,F=C++,V=[],N=[L];T[L]=F;for(var $=0;$<N.length;){var G=N[$++];V.push(G);for(var tt=x[G],H=0;H<tt.length;H++){var k=tt[H];T[k]>=0||i[k].mesh===y&&(T[k]=F,N.push(k))}}U.push({id:F,mesh:y,triIndices:V,triCount:V.length})}var dt=Iu(n),at=Iu(r),ht=Object.keys(dt).length>0,J=Object.keys(at).length>0;s&&(ht&&s.A&&Du(s.A),J&&s.B&&Du(s.B));for(var ft=[],lt=[],St=[],Mt=[],yt=[],Ft=0;Ft<U.length;Ft++){var Pt=U[Ft],E;if(Pt.triCount!==0){for(var et=0,q=0;q<U.length;q++)U[q].mesh===Pt.mesh&&et++;if(et===1)E=!1;else{var O=Pt.mesh==="A"?ht:J,b=Pt.mesh==="A"?dt:at;if(O){var Y=!Sv(Pt,i,b);Y?E=!1:E=Lu(Pt,i,o,u)}else E=Lu(Pt,i,o,u)}for(var it=E?"inside":"outside",ct=Pt.mesh==="A"?ft:St,W=Pt.mesh==="A"?lt:Mt,I=E?ct:W,M=0;M<Pt.triIndices.length;M++){var B=i[Pt.triIndices[M]];I.push({v0:B.v0,v1:B.v1,v2:B.v2})}var Z=Mv(Pt,i,o);yt.push({mesh:Pt.mesh,side:it,triCount:Pt.triCount,segments:Z})}}return console.log("[BMS] Classification (walk): A: "+ft.length+" inside, "+lt.length+" outside"+(ht?" (walk)":" (dot)")+". B: "+St.length+" inside, "+Mt.length+" outside"+(J?" (walk)":" (dot)")+". Components: "+U.length+"."),{aInside:ft,aOutside:lt,bInside:St,bOutside:Mt,componentWalks:yt}}function Ev(i,t,e,n){for(var r=0,s=0;s<n.length;s++){var a=n[s],o=a.v0.x,l=a.v0.y,c=a.v0.z,m=a.v1.x,d=a.v1.y,u=a.v1.z,f=a.v2.x,g=a.v2.y,_=a.v2.z,p=(i-m)*(l-d)-(o-m)*(t-d),h=(i-f)*(d-g)-(m-f)*(t-g),v=(i-o)*(g-l)-(f-o)*(t-l),x=p<0||h<0||v<0,w=p>0||h>0||v>0;if(!(x&&w)){var A=(d-g)*(o-f)+(f-m)*(l-g);if(!(Math.abs(A)<1e-20)){var R=1/A,P=((d-g)*(i-f)+(f-m)*(t-g))*R,S=((g-l)*(i-f)+(o-f)*(t-g))*R,T=1-P-S,z=P*c+S*u+T*_;z>e&&r++}}}return r%2===1}function wv(i,t,e,n){for(var r=1/0,s=0,a=0;a<n.length;a++){var o=n[a],l=(o.v0.x+o.v1.x+o.v2.x)/3,c=(o.v0.y+o.v1.y+o.v2.y)/3,m=(o.v0.z+o.v1.z+o.v2.z)/3,d=i-l,u=t-c,f=e-m,g=d*d+u*u+f*f;if(g<r){r=g;var _=o.v1.x-o.v0.x,p=o.v1.y-o.v0.y,h=o.v1.z-o.v0.z,v=o.v2.x-o.v0.x,x=o.v2.y-o.v0.y,w=o.v2.z-o.v0.z,A=p*w-h*x,R=h*v-_*w,P=_*x-p*v;s=d*A+u*R+f*P}}return s<0}function Uu(i,t,e){for(var n={},r={},s=0;s<i.triIndices.length;s++)for(var a=t[i.triIndices[s]],o=[a.v0,a.v1,a.v2],l=[Zt(o[0]),Zt(o[1]),Zt(o[2])],c=0;c<3;c++){var m=(c+1)%3,d=l[c]+"|"+l[m];n[d]||(n[d]=0,r[d]={fromVert:o[c],toVert:o[m]}),n[d]++}var u=[];for(var f in n){var g=f.split("|"),_=g[0],p=g[1],h=p+"|"+_,v=ri(_,p),x=!!e[v],w=!!n[h];if(!w||x){var A=r[f];u.push({from:_,to:p,fromVert:A.fromVert,toVert:A.toVert,type:x?"intersection":"walk"})}}if(u.length===0)return[];for(var R={},P=0;P<u.length;P++){var S=u[P].from;R[S]||(R[S]=[]),R[S].push(P)}for(var T=new Array(u.length),z=0;z<T.length;z++)T[z]=!1;for(var U=[],C=0;C<u.length;C++)if(!T[C]){var L=[],y=C;T[y]=!0,L.push(y);for(var F=u[y].to,V=u.length+1,N=0;F!==u[C].from&&N<V;){N++;var $=R[F];if(!$||$.length===0)break;for(var G=-1,tt=0;tt<$.length;tt++)if(!T[$[tt]]){G=$[tt];break}if(G===-1)break;T[G]=!0,L.push(G),F=u[G].to}if(!(L.length<2)){for(var H=u[L[0]].type,k=[u[L[0]].fromVert,u[L[0]].toVert],dt=1;dt<L.length;dt++){var at=u[L[dt]];at.type===H?k.push(at.toVert):(U.push({verts:k,type:H}),H=at.type,k=[at.fromVert,at.toVert])}U.push({verts:k,type:H})}}return U}function Tv(i,t,e,n,r){for(var s=i.length,a={},o=0;o<t.length;o++){var l=t[o];if(l.p0!==l.p1){var c=Zt(l.p0),m=Zt(l.p1);c!==m&&(a[ri(c,m)]=!0)}}for(var d={},u=0;u<s;u++)for(var f=i[u],g=[Zt(f.v0),Zt(f.v1),Zt(f.v2)],_=0;_<3;_++){var p=(_+1)%3,h=ri(g[_],g[p]);d[h]||(d[h]=[]),d[h].push(u)}for(var v=new Array(s),x=0;x<s;x++)v[x]=[];for(var w in d)if(!a[w])for(var A=d[w],R=0;R<A.length;R++)for(var P=R+1;P<A.length;P++)v[A[R]].push(A[P]),v[A[P]].push(A[R]);for(var S=new Int32Array(s),T=0;T<s;T++)S[T]=-1;for(var z=[],U=0,C=0;C<s;C++)if(!(S[C]>=0)){var L=i[C].mesh,y=U++,F=[],V=[C];S[C]=y;for(var N=0;N<V.length;){var $=V[N++];F.push($);for(var G=v[$],tt=0;tt<G.length;tt++){var H=G[tt];S[H]>=0||i[H].mesh===L&&(S[H]=y,V.push(H))}}z.push({id:y,mesh:L,triIndices:F,triCount:F.length})}for(var k=Xi(e),dt=Xi(n),at=k.openEdges<Math.max(10,k.total*.02),ht=dt.openEdges<Math.max(10,dt.total*.02),J=[],ft=[],lt=[],St=[],Mt=[],yt=0;yt<z.length;yt++){var Ft=z[yt];if(Ft.triCount!==0){var Pt=Ft.mesh==="A"?ht:at,E=Ft.mesh==="A"?n:e,et=Ft.mesh==="A"?J:lt,q=Ft.mesh==="A"?ft:St;if(Pt){for(var O=0;O<Ft.triIndices.length;O++){var b=i[Ft.triIndices[O]],Y=(b.v0.x+b.v1.x+b.v2.x)/3,it=(b.v0.y+b.v1.y+b.v2.y)/3,ct=(b.v0.z+b.v1.z+b.v2.z)/3;Ev(Y,it,ct,E)?et.push({v0:b.v0,v1:b.v1,v2:b.v2}):q.push({v0:b.v0,v1:b.v1,v2:b.v2})}var W=Uu(Ft,i,a);Mt.push({mesh:Ft.mesh,side:"mixed",triCount:Ft.triCount,segments:W})}else{for(var I=0;I<Ft.triIndices.length;I++){var M=i[Ft.triIndices[I]],B=(M.v0.x+M.v1.x+M.v2.x)/3,Z=(M.v0.y+M.v1.y+M.v2.y)/3,rt=(M.v0.z+M.v1.z+M.v2.z)/3;wv(B,Z,rt,E)?et.push({v0:M.v0,v1:M.v1,v2:M.v2}):q.push({v0:M.v0,v1:M.v1,v2:M.v2})}var Q=Uu(Ft,i,a);Mt.push({mesh:Ft.mesh,side:"mixed",triCount:Ft.triCount,segments:Q})}}}return console.log("[heffalump] Classification: A: "+J.length+" inside, "+ft.length+" outside. B: "+lt.length+" inside, "+St.length+" outside. Components: "+z.length+"."),{aInside:J,aOutside:ft,bInside:lt,bOutside:St,componentWalks:Mt}}function Av(i,t,e,n){var r=t.toLowerCase()+(e==="inside"?"Inside":"Outside"),s=t.toLowerCase()+(e==="inside"?"Outside":"Inside"),a=i[r],o=i[s];if(!a||!o||n<0||n>=a.length)return 0;var l=6;function c(F){return F.x.toFixed(l)+","+F.y.toFixed(l)+","+F.z.toFixed(l)}function m(F,V){return F<V?F+"|"+V:V+"|"+F}for(var d={},u=0;u<a.length;u++)for(var f=a[u],g=[c(f.v0),c(f.v1),c(f.v2)],_=0;_<3;_++){var p=(_+1)%3,h=m(g[_],g[p]);d[h]||(d[h]=[]),d[h].push(u)}var v={};v[n]=!0;for(var x=[n],w=0;w<x.length;)for(var A=x[w++],R=a[A],P=[c(R.v0),c(R.v1),c(R.v2)],S=0;S<3;S++){var T=(S+1)%3,z=m(P[S],P[T]),U=d[z];if(U)for(var C=0;C<U.length;C++)v[U[C]]||(v[U[C]]=!0,x.push(U[C]))}for(var L=Object.keys(v).map(Number).sort(function(F,V){return V-F}),y=0;y<L.length;y++)o.push(a.splice(L[y],1)[0]);return L.length}function Cv(i,t){var e=Xi(i),n=Xi(t);return e.overShared>0||n.overShared>0}function Co(i,t,e,n){if(!i||!t||i.length===0||t.length===0)return null;var r=n||{},s=lf(i,t),a=s.x,o=s.y,l=s.z;if(i=Ii(i,-a,-o,-l),t=Ii(t,-a,-o,-l),r.preRepair){var c=r.tolerance!==void 0?r.tolerance:xi(i)*.01,m=r.tolerance!==void 0?r.tolerance:xi(t)*.01;i=va(i,c,3),i=xa(i,c),t=va(t,m,3),t=xa(t,m)}var d=bh(i,t,{tolerance:r.tolerance});if(d.segments.length===0)return{groups:{aInside:[],aOutside:Ii(i,a,o,l),bInside:[],bOutside:Ii(t,a,o,l)},segments:[],polylines:[],megaSoup:null,pool:d.pool};var u=Eh(i,t,d),f=Yl(d.segments),g=r.forceHeffalump||Cv(i,t),_,p,h;if(g){for(var v={segments:[],closed:!1},x={segments:[],closed:!1},w=0;w<f.length;w++)v.segments.push({verts:f[w].slice(),type:"intersection"}),x.segments.push({verts:f[w].slice(),type:"intersection"});_=f,p={A:v,B:x},h=Tv(u,d.segments,i,t)}else{var A=wh(f,i,t,u,d.segments);_=A.closedPolylines,p=A.meshEdgePolys,h=bv(u,_,d.segments,i,t,p)}var R={aInside:h.aInside,aOutside:h.aOutside,bInside:h.bInside,bOutside:h.bOutside};R.aInside.length>0&&(R.aInside=Ii(Ls(R.aInside,1e-4),a,o,l)),R.aOutside.length>0&&(R.aOutside=Ii(Ls(R.aOutside,1e-4),a,o,l)),R.bInside.length>0&&(R.bInside=Ii(Ls(R.bInside,1e-4),a,o,l)),R.bOutside.length>0&&(R.bOutside=Ii(Ls(R.bOutside,1e-4),a,o,l));function P(G){if(G)for(var tt=["A","B"],H=0;H<tt.length;H++){var k=G[tt[H]];if(!(!k||!k.segments))for(var dt=0;dt<k.segments.length;dt++){var at=k.segments[dt].verts;if(at)for(var ht=0;ht<at.length;ht++)at[ht]={x:at[ht].x+a,y:at[ht].y+o,z:at[ht].z+l}}}}if(P(p),h.componentWalks)for(var S=0;S<h.componentWalks.length;S++)for(var T=h.componentWalks[S].segments,z=0;z<T.length;z++){var U=T[z].verts;if(U)for(var C=0;C<U.length;C++)U[C]={x:U[C].x+a,y:U[C].y+o,z:U[C].z+l}}for(var L=0;L<d.segments.length;L++){var y=d.segments[L];y.p0={x:y.p0.x+a,y:y.p0.y+o,z:y.p0.z+l,id:y.p0.id},y.p1={x:y.p1.x+a,y:y.p1.y+o,z:y.p1.z+l,id:y.p1.id}}if(f)for(var F=0;F<f.length;F++)for(var V=f[F],N=0;N<V.length;N++)V[N]={x:V[N].x+a,y:V[N].y+o,z:V[N].z+l,id:V[N].id};var $={groups:R,segments:d.segments,polylines:_,rawPolylines:f,meshEdgePolys:p,componentWalks:h.componentWalks,megaSoup:u,pool:d.pool};return $}var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ua(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ro={exports:{}};var Nu;function Pv(){return Nu||(Nu=1,(function(i,t){(function(e){i.exports=e()})(function(){return(function e(n,r,s){function a(c,m){if(!r[c]){if(!n[c]){var d=typeof ua=="function"&&ua;if(!m&&d)return d(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=r[c]={exports:{}};n[c][0].call(f.exports,function(g){var _=n[c][1][g];return a(_||g)},f,f.exports,e,n,r,s)}return r[c].exports}for(var o=typeof ua=="function"&&ua,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(e,n,r){var s=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,m,d,u,f,g,_,p=[],h=0,v=l.length,x=v,w=s.getTypeOf(l)!=="string";h<l.length;)x=v-h,d=w?(c=l[h++],m=h<v?l[h++]:0,h<v?l[h++]:0):(c=l.charCodeAt(h++),m=h<v?l.charCodeAt(h++):0,h<v?l.charCodeAt(h++):0),u=c>>2,f=(3&c)<<4|m>>4,g=1<x?(15&m)<<2|d>>6:64,_=2<x?63&d:64,p.push(o.charAt(u)+o.charAt(f)+o.charAt(g)+o.charAt(_));return p.join("")},r.decode=function(l){var c,m,d,u,f,g,_=0,p=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var v,x=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&x--,l.charAt(l.length-2)===o.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|x):new Array(0|x);_<l.length;)c=o.indexOf(l.charAt(_++))<<2|(u=o.indexOf(l.charAt(_++)))>>4,m=(15&u)<<4|(f=o.indexOf(l.charAt(_++)))>>2,d=(3&f)<<6|(g=o.indexOf(l.charAt(_++))),v[p++]=c,f!==64&&(v[p++]=m),g!==64&&(v[p++]=d);return v}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(m,d,u,f,g){this.compressedSize=m,this.uncompressedSize=d,this.crc32=u,this.compression=f,this.compressedContent=g}c.prototype={getContentWorker:function(){var m=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return m.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),m},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(m,d,u){return m.pipe(new o).pipe(new l("uncompressedSize")).pipe(d.compressWorker(u)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),a=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var m=0;m<8;m++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();n.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(c,m,d,u){var f=a,g=u+d;c^=-1;for(var _=u;_<g;_++)c=c>>>8^f[255&(c^m[_])];return-1^c})(0|l,o,o.length,0):(function(c,m,d,u){var f=a,g=u+d;c^=-1;for(var _=u;_<g;_++)c=c>>>8^f[255&(c^m.charCodeAt(_))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function m(d,u){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=u,this.meta={}}r.magic="\b\0",o.inherits(m,l),m.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,d.data),!1)},m.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},m.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},m.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(u){d.push({data:u,meta:d.meta})}},r.compressWorker=function(d){return new m("Deflate",d)},r.uncompressWorker=function(){return new m("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(f,g){var _,p="";for(_=0;_<g;_++)p+=String.fromCharCode(255&f),f>>>=8;return p}function a(f,g,_,p,h,v){var x,w,A=f.file,R=f.compression,P=v!==c.utf8encode,S=o.transformTo("string",v(A.name)),T=o.transformTo("string",c.utf8encode(A.name)),z=A.comment,U=o.transformTo("string",v(z)),C=o.transformTo("string",c.utf8encode(z)),L=T.length!==A.name.length,y=C.length!==z.length,F="",V="",N="",$=A.dir,G=A.date,tt={crc32:0,compressedSize:0,uncompressedSize:0};g&&!_||(tt.crc32=f.crc32,tt.compressedSize=f.compressedSize,tt.uncompressedSize=f.uncompressedSize);var H=0;g&&(H|=8),P||!L&&!y||(H|=2048);var k=0,dt=0;$&&(k|=16),h==="UNIX"?(dt=798,k|=(function(ht,J){var ft=ht;return ht||(ft=J?16893:33204),(65535&ft)<<16})(A.unixPermissions,$)):(dt=20,k|=(function(ht){return 63&(ht||0)})(A.dosPermissions)),x=G.getUTCHours(),x<<=6,x|=G.getUTCMinutes(),x<<=5,x|=G.getUTCSeconds()/2,w=G.getUTCFullYear()-1980,w<<=4,w|=G.getUTCMonth()+1,w<<=5,w|=G.getUTCDate(),L&&(V=s(1,1)+s(m(S),4)+T,F+="up"+s(V.length,2)+V),y&&(N=s(1,1)+s(m(U),4)+C,F+="uc"+s(N.length,2)+N);var at="";return at+=`
\0`,at+=s(H,2),at+=R.magic,at+=s(x,2),at+=s(w,2),at+=s(tt.crc32,4),at+=s(tt.compressedSize,4),at+=s(tt.uncompressedSize,4),at+=s(S.length,2),at+=s(F.length,2),{fileRecord:d.LOCAL_FILE_HEADER+at+S+F,dirRecord:d.CENTRAL_FILE_HEADER+s(dt,2)+at+s(U.length,2)+"\0\0\0\0"+s(k,4)+s(p,4)+S+F+U}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),m=e("../crc32"),d=e("../signature");function u(f,g,_,p){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=_,this.encodeFileName=p,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(u,l),u.prototype.push=function(f){var g=f.meta.percent||0,_=this.entriesCount,p=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:_?(g+100*(_-p-1))/_:100}}))},u.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var g=this.streamFiles&&!f.file.dir;if(g){var _=a(f,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(f){this.accumulate=!1;var g=this.streamFiles&&!f.file.dir,_=a(f,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),g)this.push({data:(function(p){return d.DATA_DESCRIPTOR+s(p.crc32,4)+s(p.compressedSize,4)+s(p.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var f=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var _=this.bytesWritten-f,p=(function(h,v,x,w,A){var R=o.transformTo("string",A(w));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(v,4)+s(x,4)+s(R.length,2)+R})(this.dirRecords.length,_,f,this.zipComment,this.encodeFileName);this.push({data:p,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(f){this._sources.push(f);var g=this;return f.on("data",function(_){g.processChunk(_)}),f.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),f.on("error",function(_){g.error(_)}),this},u.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(f){var g=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var _=0;_<g.length;_++)try{g[_].error(f)}catch{}return!0},u.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,g=0;g<f.length;g++)f[g].lock()},n.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),a=e("./ZipFileWorker");r.generateWorker=function(o,l,c){var m=new a(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{o.forEach(function(u,f){d++;var g=(function(v,x){var w=v||x,A=s[w];if(!A)throw new Error(w+" is not a valid compression method !");return A})(f.options.compression,l.compression),_=f.options.compressionOptions||l.compressionOptions||{},p=f.dir,h=f.date;f._compressWorker(g,_).withStreamInfo("file",{name:u,dir:p,date:h,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(m)}),m.entriesCount=d}catch(u){m.error(u)}return m}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),a=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),m=e("./nodejsUtils");function d(u){return new a.Promise(function(f,g){var _=u.decompressed.getContentWorker().pipe(new c);_.on("error",function(p){g(p)}).on("end",function(){_.streamInfo.crc32!==u.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}n.exports=function(u,f){var g=this;return f=s.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),m.isNode&&m.isStream(u)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",u,!0,f.optimizedBinaryString,f.base64).then(function(_){var p=new l(f);return p.load(_),p}).then(function(_){var p=[a.Promise.resolve(_)],h=_.files;if(f.checkCRC32)for(var v=0;v<h.length;v++)p.push(d(h[v]));return a.Promise.all(p)}).then(function(_){for(var p=_.shift(),h=p.files,v=0;v<h.length;v++){var x=h[v],w=x.fileNameStr,A=s.resolve(x.fileNameStr);g.file(A,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:f.createFolders}),x.dir||(g.file(A).unsafeOriginalName=w)}return p.zipComment.length&&(g.comment=p.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),a=e("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(m){c.push({data:m,meta:{percent:0}})}).on("error",function(m){c.isPaused?this.generatedError=m:c.error(m)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var m=this;o.on("data",function(d,u){m.push(d)||m._helper.pause(),c&&c(u)}).on("error",function(d){m.emit("error",d)}).on("end",function(){m.push(null)})}e("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(A,R,P){var S,T=o.getTypeOf(R),z=o.extend(P||{},m);z.date=z.date||new Date,z.compression!==null&&(z.compression=z.compression.toUpperCase()),typeof z.unixPermissions=="string"&&(z.unixPermissions=parseInt(z.unixPermissions,8)),z.unixPermissions&&16384&z.unixPermissions&&(z.dir=!0),z.dosPermissions&&16&z.dosPermissions&&(z.dir=!0),z.dir&&(A=h(A)),z.createFolders&&(S=p(A))&&v.call(this,S,!0);var U=T==="string"&&z.binary===!1&&z.base64===!1;P&&P.binary!==void 0||(z.binary=!U),(R instanceof d&&R.uncompressedSize===0||z.dir||!R||R.length===0)&&(z.base64=!1,z.binary=!0,R="",z.compression="STORE",T="string");var C=null;C=R instanceof d||R instanceof l?R:g.isNode&&g.isStream(R)?new _(A,R):o.prepareContent(A,R,z.binary,z.optimizedBinaryString,z.base64);var L=new u(A,C,z);this.files[A]=L}var a=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),m=e("./defaults"),d=e("./compressedObject"),u=e("./zipObject"),f=e("./generate"),g=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),p=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var R=A.lastIndexOf("/");return 0<R?A.substring(0,R):""},h=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},v=function(A,R){return R=R!==void 0?R:m.createFolders,A=h(A),this.files[A]||s.call(this,A,null,{dir:!0,createFolders:R}),this.files[A]};function x(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var R,P,S;for(R in this.files)S=this.files[R],(P=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&A(P,S)},filter:function(A){var R=[];return this.forEach(function(P,S){A(P,S)&&R.push(S)}),R},file:function(A,R,P){if(arguments.length!==1)return A=this.root+A,s.call(this,A,R,P),this;if(x(A)){var S=A;return this.filter(function(z,U){return!U.dir&&S.test(z)})}var T=this.files[this.root+A];return T&&!T.dir?T:null},folder:function(A){if(!A)return this;if(x(A))return this.filter(function(T,z){return z.dir&&A.test(T)});var R=this.root+A,P=v.call(this,R),S=this.clone();return S.root=P.name,S},remove:function(A){A=this.root+A;var R=this.files[A];if(R||(A.slice(-1)!=="/"&&(A+="/"),R=this.files[A]),R&&!R.dir)delete this.files[A];else for(var P=this.filter(function(T,z){return z.name.slice(0,A.length)===A}),S=0;S<P.length;S++)delete this.files[P[S].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var R,P={};try{if((P=o.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");o.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var S=P.comment||this.comment||"";R=f.generateWorker(this,P,S)}catch(T){(R=new l("error")).error(T)}return new c(R,P.type||"string",P.mimeType)},generateAsync:function(A,R){return this.generateInternalStream(A).accumulate(R)},generateNodeStream:function(A,R){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(R)}};n.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),m=o.charCodeAt(2),d=o.charCodeAt(3),u=this.length-4;0<=u;--u)if(this.data[u]===l&&this.data[u+1]===c&&this.data[u+2]===m&&this.data[u+3]===d)return u-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),m=o.charCodeAt(2),d=o.charCodeAt(3),u=this.readData(4);return l===u[0]&&c===u[1]&&m===u[2]&&d===u[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=a},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),a=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),m=e("./Uint8ArrayReader");n.exports=function(d){var u=s.getTypeOf(d);return s.checkSupport(u),u!=="string"||a.uint8array?u==="nodebuffer"?new c(d):a.uint8array?new m(s.transformTo("uint8array",d)):new o(s.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),a=e("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),a=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(m){c.dataIsReady=!0,c.data=m,c.max=m&&m.length||0,c.type=s.getTypeOf(m),c.isPaused||c._tickAndRepeat()},function(m){c.error(m)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),m=e("../external"),d=null;if(c.nodestream)try{d=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function u(g,_){return new m.Promise(function(p,h){var v=[],x=g._internalType,w=g._outputType,A=g._mimeType;g.on("data",function(R,P){v.push(R),_&&_(P)}).on("error",function(R){v=[],h(R)}).on("end",function(){try{var R=(function(P,S,T){switch(P){case"blob":return s.newBlob(s.transformTo("arraybuffer",S),T);case"base64":return l.encode(S);default:return s.transformTo(P,S)}})(w,(function(P,S){var T,z=0,U=null,C=0;for(T=0;T<S.length;T++)C+=S[T].length;switch(P){case"string":return S.join("");case"array":return Array.prototype.concat.apply([],S);case"uint8array":for(U=new Uint8Array(C),T=0;T<S.length;T++)U.set(S[T],z),z+=S[T].length;return U;case"nodebuffer":return Buffer.concat(S);default:throw new Error("concat : unsupported type '"+P+"'")}})(x,v),A);p(R)}catch(P){h(P)}v=[]}).resume()})}function f(g,_,p){var h=_;switch(_){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=_,this._mimeType=p,s.checkSupport(h),this._worker=g.pipe(new a(h)),g.lock()}catch(v){this._worker=new o("error"),this._worker.error(v)}}f.prototype={accumulate:function(g){return u(this,g)},on:function(g,_){var p=this;return g==="data"?this._worker.on(g,function(h){_.call(p,h.data,h.meta)}):this._worker.on(g,function(){s.delay(_,arguments,p)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),m=0;m<256;m++)c[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function u(){l.call(this,"utf-8 encode")}r.utf8encode=function(f){return a.nodebuffer?o.newBufferFrom(f,"utf-8"):(function(g){var _,p,h,v,x,w=g.length,A=0;for(v=0;v<w;v++)(64512&(p=g.charCodeAt(v)))==55296&&v+1<w&&(64512&(h=g.charCodeAt(v+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),v++),A+=p<128?1:p<2048?2:p<65536?3:4;for(_=a.uint8array?new Uint8Array(A):new Array(A),v=x=0;x<A;v++)(64512&(p=g.charCodeAt(v)))==55296&&v+1<w&&(64512&(h=g.charCodeAt(v+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),v++),p<128?_[x++]=p:(p<2048?_[x++]=192|p>>>6:(p<65536?_[x++]=224|p>>>12:(_[x++]=240|p>>>18,_[x++]=128|p>>>12&63),_[x++]=128|p>>>6&63),_[x++]=128|63&p);return _})(f)},r.utf8decode=function(f){return a.nodebuffer?s.transformTo("nodebuffer",f).toString("utf-8"):(function(g){var _,p,h,v,x=g.length,w=new Array(2*x);for(_=p=0;_<x;)if((h=g[_++])<128)w[p++]=h;else if(4<(v=c[h]))w[p++]=65533,_+=v-1;else{for(h&=v===2?31:v===3?15:7;1<v&&_<x;)h=h<<6|63&g[_++],v--;1<v?w[p++]=65533:h<65536?w[p++]=h:(h-=65536,w[p++]=55296|h>>10&1023,w[p++]=56320|1023&h)}return w.length!==p&&(w.subarray?w=w.subarray(0,p):w.length=p),s.applyFromCharCode(w)})(f=s.transformTo(a.uint8array?"uint8array":"array",f))},s.inherits(d,l),d.prototype.processChunk=function(f){var g=s.transformTo(a.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var _=g;(g=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),g.set(_,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var p=(function(v,x){var w;for((x=x||v.length)>v.length&&(x=v.length),w=x-1;0<=w&&(192&v[w])==128;)w--;return w<0||w===0?x:w+c[v[w]]>x?w:x})(g),h=g;p!==g.length&&(a.uint8array?(h=g.subarray(0,p),this.leftOver=g.subarray(p,g.length)):(h=g.slice(0,p),this.leftOver=g.slice(p,g.length))),this.push({data:r.utf8decode(h),meta:f.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=d,s.inherits(u,l),u.prototype.processChunk=function(f){this.push({data:r.utf8encode(f.data),meta:f.meta})},r.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(_){return _}function m(_,p){for(var h=0;h<_.length;++h)p[h]=255&_.charCodeAt(h);return p}e("setimmediate"),r.newBlob=function(_,p){r.checkSupport("blob");try{return new Blob([_],{type:p})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(_),h.getBlob(p)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(_,p,h){var v=[],x=0,w=_.length;if(w<=h)return String.fromCharCode.apply(null,_);for(;x<w;)p==="array"||p==="nodebuffer"?v.push(String.fromCharCode.apply(null,_.slice(x,Math.min(x+h,w)))):v.push(String.fromCharCode.apply(null,_.subarray(x,Math.min(x+h,w)))),x+=h;return v.join("")},stringifyByChar:function(_){for(var p="",h=0;h<_.length;h++)p+=String.fromCharCode(_[h]);return p},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function u(_){var p=65536,h=r.getTypeOf(_),v=!0;if(h==="uint8array"?v=d.applyCanBeUsed.uint8array:h==="nodebuffer"&&(v=d.applyCanBeUsed.nodebuffer),v)for(;1<p;)try{return d.stringifyByChunk(_,h,p)}catch{p=Math.floor(p/2)}return d.stringifyByChar(_)}function f(_,p){for(var h=0;h<_.length;h++)p[h]=_[h];return p}r.applyFromCharCode=u;var g={};g.string={string:c,array:function(_){return m(_,new Array(_.length))},arraybuffer:function(_){return g.string.uint8array(_).buffer},uint8array:function(_){return m(_,new Uint8Array(_.length))},nodebuffer:function(_){return m(_,o.allocBuffer(_.length))}},g.array={string:u,array:c,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return o.newBufferFrom(_)}},g.arraybuffer={string:function(_){return u(new Uint8Array(_))},array:function(_){return f(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:c,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return o.newBufferFrom(new Uint8Array(_))}},g.uint8array={string:u,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:c,nodebuffer:function(_){return o.newBufferFrom(_)}},g.nodebuffer={string:u,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return g.nodebuffer.uint8array(_).buffer},uint8array:function(_){return f(_,new Uint8Array(_.length))},nodebuffer:c},r.transformTo=function(_,p){if(p=p||"",!_)return p;r.checkSupport(_);var h=r.getTypeOf(p);return g[h][_](p)},r.resolve=function(_){for(var p=_.split("/"),h=[],v=0;v<p.length;v++){var x=p[v];x==="."||x===""&&v!==0&&v!==p.length-1||(x===".."?h.pop():h.push(x))}return h.join("/")},r.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(_){var p,h,v="";for(h=0;h<(_||"").length;h++)v+="\\x"+((p=_.charCodeAt(h))<16?"0":"")+p.toString(16).toUpperCase();return v},r.delay=function(_,p,h){setImmediate(function(){_.apply(h||null,p||[])})},r.inherits=function(_,p){function h(){}h.prototype=p.prototype,_.prototype=new h},r.extend=function(){var _,p,h={};for(_=0;_<arguments.length;_++)for(p in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],p)&&h[p]===void 0&&(h[p]=arguments[_][p]);return h},r.prepareContent=function(_,p,h,v,x){return l.Promise.resolve(p).then(function(w){return s.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,R){var P=new FileReader;P.onload=function(S){A(S.target.result)},P.onerror=function(S){R(S.target.error)},P.readAsArrayBuffer(w)}):w}).then(function(w){var A=r.getTypeOf(w);return A?(A==="arraybuffer"?w=r.transformTo("uint8array",w):A==="string"&&(x?w=a.decode(w):h&&v!==!0&&(w=(function(R){return m(R,s.uint8array?new Uint8Array(R.length):new Array(R.length))})(w))),w):l.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function m(d){this.files=[],this.loadOptions=d}m.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var u=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(u)+", expected "+a.pretty(d)+")")}},isSignature:function(d,u){var f=this.reader.index;this.reader.setIndex(d);var g=this.reader.readString(4)===u;return this.reader.setIndex(f),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),u=c.uint8array?"uint8array":"array",f=a.transformTo(u,d);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,u,f,g=this.zip64EndOfCentralSize-44;0<g;)d=this.reader.readInt(2),u=this.reader.readInt(4),f=this.reader.readData(u),this.zip64ExtensibleData[d]={id:d,length:u,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,u;for(d=0;d<this.files.length;d++)u=this.files[d],this.reader.setIndex(u.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),u.readLocalPart(this.reader),u.handleUTF8(),u.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var u=d;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var g=u-f;if(0<g)this.isSignature(u,o.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(d){this.reader=s(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=m},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),m=e("./compressions"),d=e("./support");function u(f,g){this.options=f,this.loadOptions=g}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var g,_;if(f.skip(22),this.fileNameLength=f.readInt(2),_=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(p){for(var h in m)if(Object.prototype.hasOwnProperty.call(m,h)&&m[h].magic===p)return m[h];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,g,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var g=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(g),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var g,_,p,h=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<h;)g=f.readInt(2),_=f.readInt(2),p=f.readData(_),this.extraFields[g]={id:g,length:_,value:p};f.setIndex(h)},handleUTF8:function(){var f=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var _=a.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var p=this.findExtraFieldUnicodeComment();if(p!==null)this.fileCommentStr=p;else{var h=a.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var g=s(f.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var g=s(f.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(f.length-5))}return null}},n.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(g,_,p){this.name=g,this.dir=p.dir,this.date=p.date,this.comment=p.comment,this.unixPermissions=p.unixPermissions,this.dosPermissions=p.dosPermissions,this._data=_,this._dataBinary=p.binary,this.options={compression:p.compression,compressionOptions:p.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),m=e("./stream/GenericWorker");s.prototype={internalStream:function(g){var _=null,p="string";try{if(!g)throw new Error("No output type specified.");var h=(p=g.toLowerCase())==="string"||p==="text";p!=="binarystring"&&p!=="text"||(p="string"),_=this._decompressWorker();var v=!this._dataBinary;v&&!h&&(_=_.pipe(new l.Utf8EncodeWorker)),!v&&h&&(_=_.pipe(new l.Utf8DecodeWorker))}catch(x){(_=new m("error")).error(x)}return new a(_,p,"")},async:function(g,_){return this.internalStream(g).accumulate(_)},nodeStream:function(g,_){return this.internalStream(g||"nodebuffer").toNodejsStream(_)},_compressWorker:function(g,_){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var p=this._decompressWorker();return this._dataBinary||(p=p.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(p,g,_)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof m?this._data:new o(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],u=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<d.length;f++)s.prototype[d[f]]=u;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,m=new l(g),d=s.document.createTextNode("");m.observe(d,{characterData:!0}),a=function(){d.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){g(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(g,0)};else{var u=new s.MessageChannel;u.port1.onmessage=g,a=function(){u.port2.postMessage(0)}}var f=[];function g(){var _,p;o=!0;for(var h=f.length;h;){for(p=f,f=[],_=-1;++_<h;)p[_]();h=f.length}o=!1}n.exports=function(_){f.push(_)!==1||o||a()}}).call(this,typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],m=["PENDING"];function d(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=m,this.queue=[],this.outcome=void 0,h!==a&&_(this,h)}function u(h,v,x){this.promise=h,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function f(h,v,x){s(function(){var w;try{w=v(x)}catch(A){return o.reject(h,A)}w===h?o.reject(h,new TypeError("Cannot resolve promise with itself")):o.resolve(h,w)})}function g(h){var v=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof v=="function")return function(){v.apply(h,arguments)}}function _(h,v){var x=!1;function w(P){x||(x=!0,o.reject(h,P))}function A(P){x||(x=!0,o.resolve(h,P))}var R=p(function(){v(A,w)});R.status==="error"&&w(R.value)}function p(h,v){var x={};try{x.value=h(v),x.status="success"}catch(w){x.status="error",x.value=w}return x}(n.exports=d).prototype.finally=function(h){if(typeof h!="function")return this;var v=this.constructor;return this.then(function(x){return v.resolve(h()).then(function(){return x})},function(x){return v.resolve(h()).then(function(){throw x})})},d.prototype.catch=function(h){return this.then(null,h)},d.prototype.then=function(h,v){if(typeof h!="function"&&this.state===c||typeof v!="function"&&this.state===l)return this;var x=new this.constructor(a);return this.state!==m?f(x,this.state===c?h:v,this.outcome):this.queue.push(new u(x,h,v)),x},u.prototype.callFulfilled=function(h){o.resolve(this.promise,h)},u.prototype.otherCallFulfilled=function(h){f(this.promise,this.onFulfilled,h)},u.prototype.callRejected=function(h){o.reject(this.promise,h)},u.prototype.otherCallRejected=function(h){f(this.promise,this.onRejected,h)},o.resolve=function(h,v){var x=p(g,v);if(x.status==="error")return o.reject(h,x.value);var w=x.value;if(w)_(h,w);else{h.state=c,h.outcome=v;for(var A=-1,R=h.queue.length;++A<R;)h.queue[A].callFulfilled(v)}return h},o.reject=function(h,v){h.state=l,h.outcome=v;for(var x=-1,w=h.queue.length;++x<w;)h.queue[x].callRejected(v);return h},d.resolve=function(h){return h instanceof this?h:o.resolve(new this(a),h)},d.reject=function(h){var v=new this(a);return o.reject(v,h)},d.all=function(h){var v=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=h.length,w=!1;if(!x)return this.resolve([]);for(var A=new Array(x),R=0,P=-1,S=new this(a);++P<x;)T(h[P],P);return S;function T(z,U){v.resolve(z).then(function(C){A[U]=C,++R!==x||w||(w=!0,o.resolve(S,A))},function(C){w||(w=!0,o.reject(S,C))})}},d.race=function(h){var v=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=h.length,w=!1;if(!x)return this.resolve([]);for(var A=-1,R=new this(a);++A<x;)P=h[A],v.resolve(P).then(function(S){w||(w=!0,o.resolve(R,S))},function(S){w||(w=!0,o.reject(R,S))});var P;return R}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),m=Object.prototype.toString,d=0,u=-1,f=0,g=8;function _(h){if(!(this instanceof _))return new _(h);this.options=a.assign({level:u,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},h||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var x=s.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(x!==d)throw new Error(l[x]);if(v.header&&s.deflateSetHeader(this.strm,v.header),v.dictionary){var w;if(w=typeof v.dictionary=="string"?o.string2buf(v.dictionary):m.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(x=s.deflateSetDictionary(this.strm,w))!==d)throw new Error(l[x]);this._dict_set=!0}}function p(h,v){var x=new _(v);if(x.push(h,!0),x.err)throw x.msg||l[x.err];return x.result}_.prototype.push=function(h,v){var x,w,A=this.strm,R=this.options.chunkSize;if(this.ended)return!1;w=v===~~v?v:v===!0?4:0,typeof h=="string"?A.input=o.string2buf(h):m.call(h)==="[object ArrayBuffer]"?A.input=new Uint8Array(h):A.input=h,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new a.Buf8(R),A.next_out=0,A.avail_out=R),(x=s.deflate(A,w))!==1&&x!==d)return this.onEnd(x),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(A.output,A.next_out))):this.onData(a.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&x!==1);return w===4?(x=s.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===d):w!==2||(this.onEnd(d),!(A.avail_out=0))},_.prototype.onData=function(h){this.chunks.push(h)},_.prototype.onEnd=function(h){h===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=_,r.deflate=p,r.deflateRaw=function(h,v){return(v=v||{}).raw=!0,p(h,v)},r.gzip=function(h,v){return(v=v||{}).gzip=!0,p(h,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),m=e("./zlib/zstream"),d=e("./zlib/gzheader"),u=Object.prototype.toString;function f(_){if(!(this instanceof f))return new f(_);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},_||{});var p=this.options;p.raw&&0<=p.windowBits&&p.windowBits<16&&(p.windowBits=-p.windowBits,p.windowBits===0&&(p.windowBits=-15)),!(0<=p.windowBits&&p.windowBits<16)||_&&_.windowBits||(p.windowBits+=32),15<p.windowBits&&p.windowBits<48&&(15&p.windowBits)==0&&(p.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,p.windowBits);if(h!==l.Z_OK)throw new Error(c[h]);this.header=new d,s.inflateGetHeader(this.strm,this.header)}function g(_,p){var h=new f(p);if(h.push(_,!0),h.err)throw h.msg||c[h.err];return h.result}f.prototype.push=function(_,p){var h,v,x,w,A,R,P=this.strm,S=this.options.chunkSize,T=this.options.dictionary,z=!1;if(this.ended)return!1;v=p===~~p?p:p===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof _=="string"?P.input=o.binstring2buf(_):u.call(_)==="[object ArrayBuffer]"?P.input=new Uint8Array(_):P.input=_,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new a.Buf8(S),P.next_out=0,P.avail_out=S),(h=s.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&T&&(R=typeof T=="string"?o.string2buf(T):u.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,h=s.inflateSetDictionary(this.strm,R)),h===l.Z_BUF_ERROR&&z===!0&&(h=l.Z_OK,z=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&h!==l.Z_STREAM_END&&(P.avail_in!==0||v!==l.Z_FINISH&&v!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=o.utf8border(P.output,P.next_out),w=P.next_out-x,A=o.buf2string(P.output,x),P.next_out=w,P.avail_out=S-w,w&&a.arraySet(P.output,P.output,x,w,0),this.onData(A)):this.onData(a.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(z=!0)}while((0<P.avail_in||P.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(v=l.Z_FINISH),v===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):v!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},f.prototype.onData=function(_){this.chunks.push(_)},f.prototype.onEnd=function(_){_===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Inflate=f,r.inflate=g,r.inflateRaw=function(_,p){return(p=p||{}).raw=!0,g(_,p)},r.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var m=c.shift();if(m){if(typeof m!="object")throw new TypeError(m+"must be non-object");for(var d in m)m.hasOwnProperty(d)&&(l[d]=m[d])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,m,d,u){if(c.subarray&&l.subarray)l.set(c.subarray(m,m+d),u);else for(var f=0;f<d;f++)l[u+f]=c[m+f]},flattenChunks:function(l){var c,m,d,u,f,g;for(c=d=0,m=l.length;c<m;c++)d+=l[c].length;for(g=new Uint8Array(d),c=u=0,m=l.length;c<m;c++)f=l[c],g.set(f,u),u+=f.length;return g}},o={arraySet:function(l,c,m,d,u){for(var f=0;f<d;f++)l[u+f]=c[m+f]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function m(d,u){if(u<65537&&(d.subarray&&o||!d.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(d,u));for(var f="",g=0;g<u;g++)f+=String.fromCharCode(d[g]);return f}l[254]=l[254]=1,r.string2buf=function(d){var u,f,g,_,p,h=d.length,v=0;for(_=0;_<h;_++)(64512&(f=d.charCodeAt(_)))==55296&&_+1<h&&(64512&(g=d.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),_++),v+=f<128?1:f<2048?2:f<65536?3:4;for(u=new s.Buf8(v),_=p=0;p<v;_++)(64512&(f=d.charCodeAt(_)))==55296&&_+1<h&&(64512&(g=d.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),_++),f<128?u[p++]=f:(f<2048?u[p++]=192|f>>>6:(f<65536?u[p++]=224|f>>>12:(u[p++]=240|f>>>18,u[p++]=128|f>>>12&63),u[p++]=128|f>>>6&63),u[p++]=128|63&f);return u},r.buf2binstring=function(d){return m(d,d.length)},r.binstring2buf=function(d){for(var u=new s.Buf8(d.length),f=0,g=u.length;f<g;f++)u[f]=d.charCodeAt(f);return u},r.buf2string=function(d,u){var f,g,_,p,h=u||d.length,v=new Array(2*h);for(f=g=0;f<h;)if((_=d[f++])<128)v[g++]=_;else if(4<(p=l[_]))v[g++]=65533,f+=p-1;else{for(_&=p===2?31:p===3?15:7;1<p&&f<h;)_=_<<6|63&d[f++],p--;1<p?v[g++]=65533:_<65536?v[g++]=_:(_-=65536,v[g++]=55296|_>>10&1023,v[g++]=56320|1023&_)}return m(v,g)},r.utf8border=function(d,u){var f;for((u=u||d.length)>d.length&&(u=d.length),f=u-1;0<=f&&(192&d[f])==128;)f--;return f<0||f===0?u:f+l[d[f]]>u?f:u}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,a,o,l){for(var c=65535&s|0,m=s>>>16&65535|0,d=0;o!==0;){for(o-=d=2e3<o?2e3:o;m=m+(c=c+a[l++]|0)|0,--d;);c%=65521,m%=65521}return c|m<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();n.exports=function(a,o,l,c){var m=s,d=c+l;a^=-1;for(var u=c;u<d;u++)a=a>>>8^m[255&(a^o[u])];return-1^a}},{}],46:[function(e,n,r){var s,a=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),m=e("./messages"),d=0,u=4,f=0,g=-2,_=-1,p=4,h=2,v=8,x=9,w=286,A=30,R=19,P=2*w+1,S=15,T=3,z=258,U=z+T+1,C=42,L=113,y=1,F=2,V=3,N=4;function $(E,et){return E.msg=m[et],et}function G(E){return(E<<1)-(4<E?9:0)}function tt(E){for(var et=E.length;0<=--et;)E[et]=0}function H(E){var et=E.state,q=et.pending;q>E.avail_out&&(q=E.avail_out),q!==0&&(a.arraySet(E.output,et.pending_buf,et.pending_out,q,E.next_out),E.next_out+=q,et.pending_out+=q,E.total_out+=q,E.avail_out-=q,et.pending-=q,et.pending===0&&(et.pending_out=0))}function k(E,et){o._tr_flush_block(E,0<=E.block_start?E.block_start:-1,E.strstart-E.block_start,et),E.block_start=E.strstart,H(E.strm)}function dt(E,et){E.pending_buf[E.pending++]=et}function at(E,et){E.pending_buf[E.pending++]=et>>>8&255,E.pending_buf[E.pending++]=255&et}function ht(E,et){var q,O,b=E.max_chain_length,Y=E.strstart,it=E.prev_length,ct=E.nice_match,W=E.strstart>E.w_size-U?E.strstart-(E.w_size-U):0,I=E.window,M=E.w_mask,B=E.prev,Z=E.strstart+z,rt=I[Y+it-1],Q=I[Y+it];E.prev_length>=E.good_match&&(b>>=2),ct>E.lookahead&&(ct=E.lookahead);do if(I[(q=et)+it]===Q&&I[q+it-1]===rt&&I[q]===I[Y]&&I[++q]===I[Y+1]){Y+=2,q++;do;while(I[++Y]===I[++q]&&I[++Y]===I[++q]&&I[++Y]===I[++q]&&I[++Y]===I[++q]&&I[++Y]===I[++q]&&I[++Y]===I[++q]&&I[++Y]===I[++q]&&I[++Y]===I[++q]&&Y<Z);if(O=z-(Z-Y),Y=Z-z,it<O){if(E.match_start=et,ct<=(it=O))break;rt=I[Y+it-1],Q=I[Y+it]}}while((et=B[et&M])>W&&--b!=0);return it<=E.lookahead?it:E.lookahead}function J(E){var et,q,O,b,Y,it,ct,W,I,M,B=E.w_size;do{if(b=E.window_size-E.lookahead-E.strstart,E.strstart>=B+(B-U)){for(a.arraySet(E.window,E.window,B,B,0),E.match_start-=B,E.strstart-=B,E.block_start-=B,et=q=E.hash_size;O=E.head[--et],E.head[et]=B<=O?O-B:0,--q;);for(et=q=B;O=E.prev[--et],E.prev[et]=B<=O?O-B:0,--q;);b+=B}if(E.strm.avail_in===0)break;if(it=E.strm,ct=E.window,W=E.strstart+E.lookahead,I=b,M=void 0,M=it.avail_in,I<M&&(M=I),q=M===0?0:(it.avail_in-=M,a.arraySet(ct,it.input,it.next_in,M,W),it.state.wrap===1?it.adler=l(it.adler,ct,M,W):it.state.wrap===2&&(it.adler=c(it.adler,ct,M,W)),it.next_in+=M,it.total_in+=M,M),E.lookahead+=q,E.lookahead+E.insert>=T)for(Y=E.strstart-E.insert,E.ins_h=E.window[Y],E.ins_h=(E.ins_h<<E.hash_shift^E.window[Y+1])&E.hash_mask;E.insert&&(E.ins_h=(E.ins_h<<E.hash_shift^E.window[Y+T-1])&E.hash_mask,E.prev[Y&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=Y,Y++,E.insert--,!(E.lookahead+E.insert<T)););}while(E.lookahead<U&&E.strm.avail_in!==0)}function ft(E,et){for(var q,O;;){if(E.lookahead<U){if(J(E),E.lookahead<U&&et===d)return y;if(E.lookahead===0)break}if(q=0,E.lookahead>=T&&(E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+T-1])&E.hash_mask,q=E.prev[E.strstart&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=E.strstart),q!==0&&E.strstart-q<=E.w_size-U&&(E.match_length=ht(E,q)),E.match_length>=T)if(O=o._tr_tally(E,E.strstart-E.match_start,E.match_length-T),E.lookahead-=E.match_length,E.match_length<=E.max_lazy_match&&E.lookahead>=T){for(E.match_length--;E.strstart++,E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+T-1])&E.hash_mask,q=E.prev[E.strstart&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=E.strstart,--E.match_length!=0;);E.strstart++}else E.strstart+=E.match_length,E.match_length=0,E.ins_h=E.window[E.strstart],E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+1])&E.hash_mask;else O=o._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++;if(O&&(k(E,!1),E.strm.avail_out===0))return y}return E.insert=E.strstart<T-1?E.strstart:T-1,et===u?(k(E,!0),E.strm.avail_out===0?V:N):E.last_lit&&(k(E,!1),E.strm.avail_out===0)?y:F}function lt(E,et){for(var q,O,b;;){if(E.lookahead<U){if(J(E),E.lookahead<U&&et===d)return y;if(E.lookahead===0)break}if(q=0,E.lookahead>=T&&(E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+T-1])&E.hash_mask,q=E.prev[E.strstart&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=E.strstart),E.prev_length=E.match_length,E.prev_match=E.match_start,E.match_length=T-1,q!==0&&E.prev_length<E.max_lazy_match&&E.strstart-q<=E.w_size-U&&(E.match_length=ht(E,q),E.match_length<=5&&(E.strategy===1||E.match_length===T&&4096<E.strstart-E.match_start)&&(E.match_length=T-1)),E.prev_length>=T&&E.match_length<=E.prev_length){for(b=E.strstart+E.lookahead-T,O=o._tr_tally(E,E.strstart-1-E.prev_match,E.prev_length-T),E.lookahead-=E.prev_length-1,E.prev_length-=2;++E.strstart<=b&&(E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+T-1])&E.hash_mask,q=E.prev[E.strstart&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=E.strstart),--E.prev_length!=0;);if(E.match_available=0,E.match_length=T-1,E.strstart++,O&&(k(E,!1),E.strm.avail_out===0))return y}else if(E.match_available){if((O=o._tr_tally(E,0,E.window[E.strstart-1]))&&k(E,!1),E.strstart++,E.lookahead--,E.strm.avail_out===0)return y}else E.match_available=1,E.strstart++,E.lookahead--}return E.match_available&&(O=o._tr_tally(E,0,E.window[E.strstart-1]),E.match_available=0),E.insert=E.strstart<T-1?E.strstart:T-1,et===u?(k(E,!0),E.strm.avail_out===0?V:N):E.last_lit&&(k(E,!1),E.strm.avail_out===0)?y:F}function St(E,et,q,O,b){this.good_length=E,this.max_lazy=et,this.nice_length=q,this.max_chain=O,this.func=b}function Mt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*P),this.dyn_dtree=new a.Buf16(2*(2*A+1)),this.bl_tree=new a.Buf16(2*(2*R+1)),tt(this.dyn_ltree),tt(this.dyn_dtree),tt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(S+1),this.heap=new a.Buf16(2*w+1),tt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*w+1),tt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function yt(E){var et;return E&&E.state?(E.total_in=E.total_out=0,E.data_type=h,(et=E.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?C:L,E.adler=et.wrap===2?0:1,et.last_flush=d,o._tr_init(et),f):$(E,g)}function Ft(E){var et=yt(E);return et===f&&(function(q){q.window_size=2*q.w_size,tt(q.head),q.max_lazy_match=s[q.level].max_lazy,q.good_match=s[q.level].good_length,q.nice_match=s[q.level].nice_length,q.max_chain_length=s[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=T-1,q.match_available=0,q.ins_h=0})(E.state),et}function Pt(E,et,q,O,b,Y){if(!E)return g;var it=1;if(et===_&&(et=6),O<0?(it=0,O=-O):15<O&&(it=2,O-=16),b<1||x<b||q!==v||O<8||15<O||et<0||9<et||Y<0||p<Y)return $(E,g);O===8&&(O=9);var ct=new Mt;return(E.state=ct).strm=E,ct.wrap=it,ct.gzhead=null,ct.w_bits=O,ct.w_size=1<<ct.w_bits,ct.w_mask=ct.w_size-1,ct.hash_bits=b+7,ct.hash_size=1<<ct.hash_bits,ct.hash_mask=ct.hash_size-1,ct.hash_shift=~~((ct.hash_bits+T-1)/T),ct.window=new a.Buf8(2*ct.w_size),ct.head=new a.Buf16(ct.hash_size),ct.prev=new a.Buf16(ct.w_size),ct.lit_bufsize=1<<b+6,ct.pending_buf_size=4*ct.lit_bufsize,ct.pending_buf=new a.Buf8(ct.pending_buf_size),ct.d_buf=1*ct.lit_bufsize,ct.l_buf=3*ct.lit_bufsize,ct.level=et,ct.strategy=Y,ct.method=q,Ft(E)}s=[new St(0,0,0,0,function(E,et){var q=65535;for(q>E.pending_buf_size-5&&(q=E.pending_buf_size-5);;){if(E.lookahead<=1){if(J(E),E.lookahead===0&&et===d)return y;if(E.lookahead===0)break}E.strstart+=E.lookahead,E.lookahead=0;var O=E.block_start+q;if((E.strstart===0||E.strstart>=O)&&(E.lookahead=E.strstart-O,E.strstart=O,k(E,!1),E.strm.avail_out===0)||E.strstart-E.block_start>=E.w_size-U&&(k(E,!1),E.strm.avail_out===0))return y}return E.insert=0,et===u?(k(E,!0),E.strm.avail_out===0?V:N):(E.strstart>E.block_start&&(k(E,!1),E.strm.avail_out),y)}),new St(4,4,8,4,ft),new St(4,5,16,8,ft),new St(4,6,32,32,ft),new St(4,4,16,16,lt),new St(8,16,32,32,lt),new St(8,16,128,128,lt),new St(8,32,128,256,lt),new St(32,128,258,1024,lt),new St(32,258,258,4096,lt)],r.deflateInit=function(E,et){return Pt(E,et,v,15,8,0)},r.deflateInit2=Pt,r.deflateReset=Ft,r.deflateResetKeep=yt,r.deflateSetHeader=function(E,et){return E&&E.state?E.state.wrap!==2?g:(E.state.gzhead=et,f):g},r.deflate=function(E,et){var q,O,b,Y;if(!E||!E.state||5<et||et<0)return E?$(E,g):g;if(O=E.state,!E.output||!E.input&&E.avail_in!==0||O.status===666&&et!==u)return $(E,E.avail_out===0?-5:g);if(O.strm=E,q=O.last_flush,O.last_flush=et,O.status===C)if(O.wrap===2)E.adler=0,dt(O,31),dt(O,139),dt(O,8),O.gzhead?(dt(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),dt(O,255&O.gzhead.time),dt(O,O.gzhead.time>>8&255),dt(O,O.gzhead.time>>16&255),dt(O,O.gzhead.time>>24&255),dt(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),dt(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(dt(O,255&O.gzhead.extra.length),dt(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(E.adler=c(E.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(dt(O,0),dt(O,0),dt(O,0),dt(O,0),dt(O,0),dt(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),dt(O,3),O.status=L);else{var it=v+(O.w_bits-8<<4)<<8;it|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(it|=32),it+=31-it%31,O.status=L,at(O,it),O.strstart!==0&&(at(O,E.adler>>>16),at(O,65535&E.adler)),E.adler=1}if(O.status===69)if(O.gzhead.extra){for(b=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>b&&(E.adler=c(E.adler,O.pending_buf,O.pending-b,b)),H(E),b=O.pending,O.pending!==O.pending_buf_size));)dt(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>b&&(E.adler=c(E.adler,O.pending_buf,O.pending-b,b)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){b=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>b&&(E.adler=c(E.adler,O.pending_buf,O.pending-b,b)),H(E),b=O.pending,O.pending===O.pending_buf_size)){Y=1;break}Y=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,dt(O,Y)}while(Y!==0);O.gzhead.hcrc&&O.pending>b&&(E.adler=c(E.adler,O.pending_buf,O.pending-b,b)),Y===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){b=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>b&&(E.adler=c(E.adler,O.pending_buf,O.pending-b,b)),H(E),b=O.pending,O.pending===O.pending_buf_size)){Y=1;break}Y=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,dt(O,Y)}while(Y!==0);O.gzhead.hcrc&&O.pending>b&&(E.adler=c(E.adler,O.pending_buf,O.pending-b,b)),Y===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&H(E),O.pending+2<=O.pending_buf_size&&(dt(O,255&E.adler),dt(O,E.adler>>8&255),E.adler=0,O.status=L)):O.status=L),O.pending!==0){if(H(E),E.avail_out===0)return O.last_flush=-1,f}else if(E.avail_in===0&&G(et)<=G(q)&&et!==u)return $(E,-5);if(O.status===666&&E.avail_in!==0)return $(E,-5);if(E.avail_in!==0||O.lookahead!==0||et!==d&&O.status!==666){var ct=O.strategy===2?(function(W,I){for(var M;;){if(W.lookahead===0&&(J(W),W.lookahead===0)){if(I===d)return y;break}if(W.match_length=0,M=o._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++,M&&(k(W,!1),W.strm.avail_out===0))return y}return W.insert=0,I===u?(k(W,!0),W.strm.avail_out===0?V:N):W.last_lit&&(k(W,!1),W.strm.avail_out===0)?y:F})(O,et):O.strategy===3?(function(W,I){for(var M,B,Z,rt,Q=W.window;;){if(W.lookahead<=z){if(J(W),W.lookahead<=z&&I===d)return y;if(W.lookahead===0)break}if(W.match_length=0,W.lookahead>=T&&0<W.strstart&&(B=Q[Z=W.strstart-1])===Q[++Z]&&B===Q[++Z]&&B===Q[++Z]){rt=W.strstart+z;do;while(B===Q[++Z]&&B===Q[++Z]&&B===Q[++Z]&&B===Q[++Z]&&B===Q[++Z]&&B===Q[++Z]&&B===Q[++Z]&&B===Q[++Z]&&Z<rt);W.match_length=z-(rt-Z),W.match_length>W.lookahead&&(W.match_length=W.lookahead)}if(W.match_length>=T?(M=o._tr_tally(W,1,W.match_length-T),W.lookahead-=W.match_length,W.strstart+=W.match_length,W.match_length=0):(M=o._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++),M&&(k(W,!1),W.strm.avail_out===0))return y}return W.insert=0,I===u?(k(W,!0),W.strm.avail_out===0?V:N):W.last_lit&&(k(W,!1),W.strm.avail_out===0)?y:F})(O,et):s[O.level].func(O,et);if(ct!==V&&ct!==N||(O.status=666),ct===y||ct===V)return E.avail_out===0&&(O.last_flush=-1),f;if(ct===F&&(et===1?o._tr_align(O):et!==5&&(o._tr_stored_block(O,0,0,!1),et===3&&(tt(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),H(E),E.avail_out===0))return O.last_flush=-1,f}return et!==u?f:O.wrap<=0?1:(O.wrap===2?(dt(O,255&E.adler),dt(O,E.adler>>8&255),dt(O,E.adler>>16&255),dt(O,E.adler>>24&255),dt(O,255&E.total_in),dt(O,E.total_in>>8&255),dt(O,E.total_in>>16&255),dt(O,E.total_in>>24&255)):(at(O,E.adler>>>16),at(O,65535&E.adler)),H(E),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?f:1)},r.deflateEnd=function(E){var et;return E&&E.state?(et=E.state.status)!==C&&et!==69&&et!==73&&et!==91&&et!==103&&et!==L&&et!==666?$(E,g):(E.state=null,et===L?$(E,-3):f):g},r.deflateSetDictionary=function(E,et){var q,O,b,Y,it,ct,W,I,M=et.length;if(!E||!E.state||(Y=(q=E.state).wrap)===2||Y===1&&q.status!==C||q.lookahead)return g;for(Y===1&&(E.adler=l(E.adler,et,M,0)),q.wrap=0,M>=q.w_size&&(Y===0&&(tt(q.head),q.strstart=0,q.block_start=0,q.insert=0),I=new a.Buf8(q.w_size),a.arraySet(I,et,M-q.w_size,q.w_size,0),et=I,M=q.w_size),it=E.avail_in,ct=E.next_in,W=E.input,E.avail_in=M,E.next_in=0,E.input=et,J(q);q.lookahead>=T;){for(O=q.strstart,b=q.lookahead-(T-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[O+T-1])&q.hash_mask,q.prev[O&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=O,O++,--b;);q.strstart=O,q.lookahead=T-1,J(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=T-1,q.match_available=0,E.next_in=ct,E.input=W,E.avail_in=it,q.wrap=Y,f},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,a){var o,l,c,m,d,u,f,g,_,p,h,v,x,w,A,R,P,S,T,z,U,C,L,y,F;o=s.state,l=s.next_in,y=s.input,c=l+(s.avail_in-5),m=s.next_out,F=s.output,d=m-(a-s.avail_out),u=m+(s.avail_out-257),f=o.dmax,g=o.wsize,_=o.whave,p=o.wnext,h=o.window,v=o.hold,x=o.bits,w=o.lencode,A=o.distcode,R=(1<<o.lenbits)-1,P=(1<<o.distbits)-1;t:do{x<15&&(v+=y[l++]<<x,x+=8,v+=y[l++]<<x,x+=8),S=w[v&R];e:for(;;){if(v>>>=T=S>>>24,x-=T,(T=S>>>16&255)===0)F[m++]=65535&S;else{if(!(16&T)){if((64&T)==0){S=w[(65535&S)+(v&(1<<T)-1)];continue e}if(32&T){o.mode=12;break t}s.msg="invalid literal/length code",o.mode=30;break t}z=65535&S,(T&=15)&&(x<T&&(v+=y[l++]<<x,x+=8),z+=v&(1<<T)-1,v>>>=T,x-=T),x<15&&(v+=y[l++]<<x,x+=8,v+=y[l++]<<x,x+=8),S=A[v&P];n:for(;;){if(v>>>=T=S>>>24,x-=T,!(16&(T=S>>>16&255))){if((64&T)==0){S=A[(65535&S)+(v&(1<<T)-1)];continue n}s.msg="invalid distance code",o.mode=30;break t}if(U=65535&S,x<(T&=15)&&(v+=y[l++]<<x,(x+=8)<T&&(v+=y[l++]<<x,x+=8)),f<(U+=v&(1<<T)-1)){s.msg="invalid distance too far back",o.mode=30;break t}if(v>>>=T,x-=T,(T=m-d)<U){if(_<(T=U-T)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break t}if(L=h,(C=0)===p){if(C+=g-T,T<z){for(z-=T;F[m++]=h[C++],--T;);C=m-U,L=F}}else if(p<T){if(C+=g+p-T,(T-=p)<z){for(z-=T;F[m++]=h[C++],--T;);if(C=0,p<z){for(z-=T=p;F[m++]=h[C++],--T;);C=m-U,L=F}}}else if(C+=p-T,T<z){for(z-=T;F[m++]=h[C++],--T;);C=m-U,L=F}for(;2<z;)F[m++]=L[C++],F[m++]=L[C++],F[m++]=L[C++],z-=3;z&&(F[m++]=L[C++],1<z&&(F[m++]=L[C++]))}else{for(C=m-U;F[m++]=F[C++],F[m++]=F[C++],F[m++]=F[C++],2<(z-=3););z&&(F[m++]=F[C++],1<z&&(F[m++]=F[C++]))}break}}break}}while(l<c&&m<u);l-=z=x>>3,v&=(1<<(x-=z<<3))-1,s.next_in=l,s.next_out=m,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=m<u?u-m+257:257-(m-u),o.hold=v,o.bits=x}},{}],49:[function(e,n,r){var s=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),m=1,d=2,u=0,f=-2,g=1,_=852,p=592;function h(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(C){var L;return C&&C.state?(L=C.state,C.total_in=C.total_out=L.total=0,C.msg="",L.wrap&&(C.adler=1&L.wrap),L.mode=g,L.last=0,L.havedict=0,L.dmax=32768,L.head=null,L.hold=0,L.bits=0,L.lencode=L.lendyn=new s.Buf32(_),L.distcode=L.distdyn=new s.Buf32(p),L.sane=1,L.back=-1,u):f}function w(C){var L;return C&&C.state?((L=C.state).wsize=0,L.whave=0,L.wnext=0,x(C)):f}function A(C,L){var y,F;return C&&C.state?(F=C.state,L<0?(y=0,L=-L):(y=1+(L>>4),L<48&&(L&=15)),L&&(L<8||15<L)?f:(F.window!==null&&F.wbits!==L&&(F.window=null),F.wrap=y,F.wbits=L,w(C))):f}function R(C,L){var y,F;return C?(F=new v,(C.state=F).window=null,(y=A(C,L))!==u&&(C.state=null),y):f}var P,S,T=!0;function z(C){if(T){var L;for(P=new s.Buf32(512),S=new s.Buf32(32),L=0;L<144;)C.lens[L++]=8;for(;L<256;)C.lens[L++]=9;for(;L<280;)C.lens[L++]=7;for(;L<288;)C.lens[L++]=8;for(c(m,C.lens,0,288,P,0,C.work,{bits:9}),L=0;L<32;)C.lens[L++]=5;c(d,C.lens,0,32,S,0,C.work,{bits:5}),T=!1}C.lencode=P,C.lenbits=9,C.distcode=S,C.distbits=5}function U(C,L,y,F){var V,N=C.state;return N.window===null&&(N.wsize=1<<N.wbits,N.wnext=0,N.whave=0,N.window=new s.Buf8(N.wsize)),F>=N.wsize?(s.arraySet(N.window,L,y-N.wsize,N.wsize,0),N.wnext=0,N.whave=N.wsize):(F<(V=N.wsize-N.wnext)&&(V=F),s.arraySet(N.window,L,y-F,V,N.wnext),(F-=V)?(s.arraySet(N.window,L,y-F,F,0),N.wnext=F,N.whave=N.wsize):(N.wnext+=V,N.wnext===N.wsize&&(N.wnext=0),N.whave<N.wsize&&(N.whave+=V))),0}r.inflateReset=w,r.inflateReset2=A,r.inflateResetKeep=x,r.inflateInit=function(C){return R(C,15)},r.inflateInit2=R,r.inflate=function(C,L){var y,F,V,N,$,G,tt,H,k,dt,at,ht,J,ft,lt,St,Mt,yt,Ft,Pt,E,et,q,O,b=0,Y=new s.Buf8(4),it=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(y=C.state).mode===12&&(y.mode=13),$=C.next_out,V=C.output,tt=C.avail_out,N=C.next_in,F=C.input,G=C.avail_in,H=y.hold,k=y.bits,dt=G,at=tt,et=u;t:for(;;)switch(y.mode){case g:if(y.wrap===0){y.mode=13;break}for(;k<16;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if(2&y.wrap&&H===35615){Y[y.check=0]=255&H,Y[1]=H>>>8&255,y.check=o(y.check,Y,2,0),k=H=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&H)<<8)+(H>>8))%31){C.msg="incorrect header check",y.mode=30;break}if((15&H)!=8){C.msg="unknown compression method",y.mode=30;break}if(k-=4,E=8+(15&(H>>>=4)),y.wbits===0)y.wbits=E;else if(E>y.wbits){C.msg="invalid window size",y.mode=30;break}y.dmax=1<<E,C.adler=y.check=1,y.mode=512&H?10:12,k=H=0;break;case 2:for(;k<16;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if(y.flags=H,(255&y.flags)!=8){C.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){C.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=H>>8&1),512&y.flags&&(Y[0]=255&H,Y[1]=H>>>8&255,y.check=o(y.check,Y,2,0)),k=H=0,y.mode=3;case 3:for(;k<32;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}y.head&&(y.head.time=H),512&y.flags&&(Y[0]=255&H,Y[1]=H>>>8&255,Y[2]=H>>>16&255,Y[3]=H>>>24&255,y.check=o(y.check,Y,4,0)),k=H=0,y.mode=4;case 4:for(;k<16;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}y.head&&(y.head.xflags=255&H,y.head.os=H>>8),512&y.flags&&(Y[0]=255&H,Y[1]=H>>>8&255,y.check=o(y.check,Y,2,0)),k=H=0,y.mode=5;case 5:if(1024&y.flags){for(;k<16;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}y.length=H,y.head&&(y.head.extra_len=H),512&y.flags&&(Y[0]=255&H,Y[1]=H>>>8&255,y.check=o(y.check,Y,2,0)),k=H=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(G<(ht=y.length)&&(ht=G),ht&&(y.head&&(E=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,F,N,ht,E)),512&y.flags&&(y.check=o(y.check,F,ht,N)),G-=ht,N+=ht,y.length-=ht),y.length))break t;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(G===0)break t;for(ht=0;E=F[N+ht++],y.head&&E&&y.length<65536&&(y.head.name+=String.fromCharCode(E)),E&&ht<G;);if(512&y.flags&&(y.check=o(y.check,F,ht,N)),G-=ht,N+=ht,E)break t}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(G===0)break t;for(ht=0;E=F[N+ht++],y.head&&E&&y.length<65536&&(y.head.comment+=String.fromCharCode(E)),E&&ht<G;);if(512&y.flags&&(y.check=o(y.check,F,ht,N)),G-=ht,N+=ht,E)break t}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;k<16;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if(H!==(65535&y.check)){C.msg="header crc mismatch",y.mode=30;break}k=H=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),C.adler=y.check=0,y.mode=12;break;case 10:for(;k<32;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}C.adler=y.check=h(H),k=H=0,y.mode=11;case 11:if(y.havedict===0)return C.next_out=$,C.avail_out=tt,C.next_in=N,C.avail_in=G,y.hold=H,y.bits=k,2;C.adler=y.check=1,y.mode=12;case 12:if(L===5||L===6)break t;case 13:if(y.last){H>>>=7&k,k-=7&k,y.mode=27;break}for(;k<3;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}switch(y.last=1&H,k-=1,3&(H>>>=1)){case 0:y.mode=14;break;case 1:if(z(y),y.mode=20,L!==6)break;H>>>=2,k-=2;break t;case 2:y.mode=17;break;case 3:C.msg="invalid block type",y.mode=30}H>>>=2,k-=2;break;case 14:for(H>>>=7&k,k-=7&k;k<32;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if((65535&H)!=(H>>>16^65535)){C.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&H,k=H=0,y.mode=15,L===6)break t;case 15:y.mode=16;case 16:if(ht=y.length){if(G<ht&&(ht=G),tt<ht&&(ht=tt),ht===0)break t;s.arraySet(V,F,N,ht,$),G-=ht,N+=ht,tt-=ht,$+=ht,y.length-=ht;break}y.mode=12;break;case 17:for(;k<14;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if(y.nlen=257+(31&H),H>>>=5,k-=5,y.ndist=1+(31&H),H>>>=5,k-=5,y.ncode=4+(15&H),H>>>=4,k-=4,286<y.nlen||30<y.ndist){C.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;k<3;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}y.lens[it[y.have++]]=7&H,H>>>=3,k-=3}for(;y.have<19;)y.lens[it[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,q={bits:y.lenbits},et=c(0,y.lens,0,19,y.lencode,0,y.work,q),y.lenbits=q.bits,et){C.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;St=(b=y.lencode[H&(1<<y.lenbits)-1])>>>16&255,Mt=65535&b,!((lt=b>>>24)<=k);){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if(Mt<16)H>>>=lt,k-=lt,y.lens[y.have++]=Mt;else{if(Mt===16){for(O=lt+2;k<O;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if(H>>>=lt,k-=lt,y.have===0){C.msg="invalid bit length repeat",y.mode=30;break}E=y.lens[y.have-1],ht=3+(3&H),H>>>=2,k-=2}else if(Mt===17){for(O=lt+3;k<O;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}k-=lt,E=0,ht=3+(7&(H>>>=lt)),H>>>=3,k-=3}else{for(O=lt+7;k<O;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}k-=lt,E=0,ht=11+(127&(H>>>=lt)),H>>>=7,k-=7}if(y.have+ht>y.nlen+y.ndist){C.msg="invalid bit length repeat",y.mode=30;break}for(;ht--;)y.lens[y.have++]=E}}if(y.mode===30)break;if(y.lens[256]===0){C.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,q={bits:y.lenbits},et=c(m,y.lens,0,y.nlen,y.lencode,0,y.work,q),y.lenbits=q.bits,et){C.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,q={bits:y.distbits},et=c(d,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,q),y.distbits=q.bits,et){C.msg="invalid distances set",y.mode=30;break}if(y.mode=20,L===6)break t;case 20:y.mode=21;case 21:if(6<=G&&258<=tt){C.next_out=$,C.avail_out=tt,C.next_in=N,C.avail_in=G,y.hold=H,y.bits=k,l(C,at),$=C.next_out,V=C.output,tt=C.avail_out,N=C.next_in,F=C.input,G=C.avail_in,H=y.hold,k=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;St=(b=y.lencode[H&(1<<y.lenbits)-1])>>>16&255,Mt=65535&b,!((lt=b>>>24)<=k);){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if(St&&(240&St)==0){for(yt=lt,Ft=St,Pt=Mt;St=(b=y.lencode[Pt+((H&(1<<yt+Ft)-1)>>yt)])>>>16&255,Mt=65535&b,!(yt+(lt=b>>>24)<=k);){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}H>>>=yt,k-=yt,y.back+=yt}if(H>>>=lt,k-=lt,y.back+=lt,y.length=Mt,St===0){y.mode=26;break}if(32&St){y.back=-1,y.mode=12;break}if(64&St){C.msg="invalid literal/length code",y.mode=30;break}y.extra=15&St,y.mode=22;case 22:if(y.extra){for(O=y.extra;k<O;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}y.length+=H&(1<<y.extra)-1,H>>>=y.extra,k-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;St=(b=y.distcode[H&(1<<y.distbits)-1])>>>16&255,Mt=65535&b,!((lt=b>>>24)<=k);){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if((240&St)==0){for(yt=lt,Ft=St,Pt=Mt;St=(b=y.distcode[Pt+((H&(1<<yt+Ft)-1)>>yt)])>>>16&255,Mt=65535&b,!(yt+(lt=b>>>24)<=k);){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}H>>>=yt,k-=yt,y.back+=yt}if(H>>>=lt,k-=lt,y.back+=lt,64&St){C.msg="invalid distance code",y.mode=30;break}y.offset=Mt,y.extra=15&St,y.mode=24;case 24:if(y.extra){for(O=y.extra;k<O;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}y.offset+=H&(1<<y.extra)-1,H>>>=y.extra,k-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){C.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(tt===0)break t;if(ht=at-tt,y.offset>ht){if((ht=y.offset-ht)>y.whave&&y.sane){C.msg="invalid distance too far back",y.mode=30;break}J=ht>y.wnext?(ht-=y.wnext,y.wsize-ht):y.wnext-ht,ht>y.length&&(ht=y.length),ft=y.window}else ft=V,J=$-y.offset,ht=y.length;for(tt<ht&&(ht=tt),tt-=ht,y.length-=ht;V[$++]=ft[J++],--ht;);y.length===0&&(y.mode=21);break;case 26:if(tt===0)break t;V[$++]=y.length,tt--,y.mode=21;break;case 27:if(y.wrap){for(;k<32;){if(G===0)break t;G--,H|=F[N++]<<k,k+=8}if(at-=tt,C.total_out+=at,y.total+=at,at&&(C.adler=y.check=y.flags?o(y.check,V,at,$-at):a(y.check,V,at,$-at)),at=tt,(y.flags?H:h(H))!==y.check){C.msg="incorrect data check",y.mode=30;break}k=H=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;k<32;){if(G===0)break t;G--,H+=F[N++]<<k,k+=8}if(H!==(4294967295&y.total)){C.msg="incorrect length check",y.mode=30;break}k=H=0}y.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;default:return f}return C.next_out=$,C.avail_out=tt,C.next_in=N,C.avail_in=G,y.hold=H,y.bits=k,(y.wsize||at!==C.avail_out&&y.mode<30&&(y.mode<27||L!==4))&&U(C,C.output,C.next_out,at-C.avail_out)?(y.mode=31,-4):(dt-=C.avail_in,at-=C.avail_out,C.total_in+=dt,C.total_out+=at,y.total+=at,y.wrap&&at&&(C.adler=y.check=y.flags?o(y.check,V,at,C.next_out-at):a(y.check,V,at,C.next_out-at)),C.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(dt==0&&at===0||L===4)&&et===u&&(et=-5),et)},r.inflateEnd=function(C){if(!C||!C.state)return f;var L=C.state;return L.window&&(L.window=null),C.state=null,u},r.inflateGetHeader=function(C,L){var y;return C&&C.state?(2&(y=C.state).wrap)==0?f:((y.head=L).done=!1,u):f},r.inflateSetDictionary=function(C,L){var y,F=L.length;return C&&C.state?(y=C.state).wrap!==0&&y.mode!==11?f:y.mode===11&&a(1,L,F,0)!==y.check?-3:U(C,L,F,F)?(y.mode=31,-4):(y.havedict=1,u):f},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(m,d,u,f,g,_,p,h){var v,x,w,A,R,P,S,T,z,U=h.bits,C=0,L=0,y=0,F=0,V=0,N=0,$=0,G=0,tt=0,H=0,k=null,dt=0,at=new s.Buf16(16),ht=new s.Buf16(16),J=null,ft=0;for(C=0;C<=15;C++)at[C]=0;for(L=0;L<f;L++)at[d[u+L]]++;for(V=U,F=15;1<=F&&at[F]===0;F--);if(F<V&&(V=F),F===0)return g[_++]=20971520,g[_++]=20971520,h.bits=1,0;for(y=1;y<F&&at[y]===0;y++);for(V<y&&(V=y),C=G=1;C<=15;C++)if(G<<=1,(G-=at[C])<0)return-1;if(0<G&&(m===0||F!==1))return-1;for(ht[1]=0,C=1;C<15;C++)ht[C+1]=ht[C]+at[C];for(L=0;L<f;L++)d[u+L]!==0&&(p[ht[d[u+L]]++]=L);if(P=m===0?(k=J=p,19):m===1?(k=a,dt-=257,J=o,ft-=257,256):(k=l,J=c,-1),C=y,R=_,$=L=H=0,w=-1,A=(tt=1<<(N=V))-1,m===1&&852<tt||m===2&&592<tt)return 1;for(;;){for(S=C-$,z=p[L]<P?(T=0,p[L]):p[L]>P?(T=J[ft+p[L]],k[dt+p[L]]):(T=96,0),v=1<<C-$,y=x=1<<N;g[R+(H>>$)+(x-=v)]=S<<24|T<<16|z|0,x!==0;);for(v=1<<C-1;H&v;)v>>=1;if(v!==0?(H&=v-1,H+=v):H=0,L++,--at[C]==0){if(C===F)break;C=d[u+p[L]]}if(V<C&&(H&A)!==w){for($===0&&($=V),R+=y,G=1<<(N=C-$);N+$<F&&!((G-=at[N+$])<=0);)N++,G<<=1;if(tt+=1<<N,m===1&&852<tt||m===2&&592<tt)return 1;g[w=H&A]=V<<24|N<<16|R-_|0}}return H!==0&&(g[R+H]=C-$<<24|64<<16|0),h.bits=V,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),a=0,o=1;function l(b){for(var Y=b.length;0<=--Y;)b[Y]=0}var c=0,m=29,d=256,u=d+1+m,f=30,g=19,_=2*u+1,p=15,h=16,v=7,x=256,w=16,A=17,R=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],U=new Array(2*(u+2));l(U);var C=new Array(2*f);l(C);var L=new Array(512);l(L);var y=new Array(256);l(y);var F=new Array(m);l(F);var V,N,$,G=new Array(f);function tt(b,Y,it,ct,W){this.static_tree=b,this.extra_bits=Y,this.extra_base=it,this.elems=ct,this.max_length=W,this.has_stree=b&&b.length}function H(b,Y){this.dyn_tree=b,this.max_code=0,this.stat_desc=Y}function k(b){return b<256?L[b]:L[256+(b>>>7)]}function dt(b,Y){b.pending_buf[b.pending++]=255&Y,b.pending_buf[b.pending++]=Y>>>8&255}function at(b,Y,it){b.bi_valid>h-it?(b.bi_buf|=Y<<b.bi_valid&65535,dt(b,b.bi_buf),b.bi_buf=Y>>h-b.bi_valid,b.bi_valid+=it-h):(b.bi_buf|=Y<<b.bi_valid&65535,b.bi_valid+=it)}function ht(b,Y,it){at(b,it[2*Y],it[2*Y+1])}function J(b,Y){for(var it=0;it|=1&b,b>>>=1,it<<=1,0<--Y;);return it>>>1}function ft(b,Y,it){var ct,W,I=new Array(p+1),M=0;for(ct=1;ct<=p;ct++)I[ct]=M=M+it[ct-1]<<1;for(W=0;W<=Y;W++){var B=b[2*W+1];B!==0&&(b[2*W]=J(I[B]++,B))}}function lt(b){var Y;for(Y=0;Y<u;Y++)b.dyn_ltree[2*Y]=0;for(Y=0;Y<f;Y++)b.dyn_dtree[2*Y]=0;for(Y=0;Y<g;Y++)b.bl_tree[2*Y]=0;b.dyn_ltree[2*x]=1,b.opt_len=b.static_len=0,b.last_lit=b.matches=0}function St(b){8<b.bi_valid?dt(b,b.bi_buf):0<b.bi_valid&&(b.pending_buf[b.pending++]=b.bi_buf),b.bi_buf=0,b.bi_valid=0}function Mt(b,Y,it,ct){var W=2*Y,I=2*it;return b[W]<b[I]||b[W]===b[I]&&ct[Y]<=ct[it]}function yt(b,Y,it){for(var ct=b.heap[it],W=it<<1;W<=b.heap_len&&(W<b.heap_len&&Mt(Y,b.heap[W+1],b.heap[W],b.depth)&&W++,!Mt(Y,ct,b.heap[W],b.depth));)b.heap[it]=b.heap[W],it=W,W<<=1;b.heap[it]=ct}function Ft(b,Y,it){var ct,W,I,M,B=0;if(b.last_lit!==0)for(;ct=b.pending_buf[b.d_buf+2*B]<<8|b.pending_buf[b.d_buf+2*B+1],W=b.pending_buf[b.l_buf+B],B++,ct===0?ht(b,W,Y):(ht(b,(I=y[W])+d+1,Y),(M=P[I])!==0&&at(b,W-=F[I],M),ht(b,I=k(--ct),it),(M=S[I])!==0&&at(b,ct-=G[I],M)),B<b.last_lit;);ht(b,x,Y)}function Pt(b,Y){var it,ct,W,I=Y.dyn_tree,M=Y.stat_desc.static_tree,B=Y.stat_desc.has_stree,Z=Y.stat_desc.elems,rt=-1;for(b.heap_len=0,b.heap_max=_,it=0;it<Z;it++)I[2*it]!==0?(b.heap[++b.heap_len]=rt=it,b.depth[it]=0):I[2*it+1]=0;for(;b.heap_len<2;)I[2*(W=b.heap[++b.heap_len]=rt<2?++rt:0)]=1,b.depth[W]=0,b.opt_len--,B&&(b.static_len-=M[2*W+1]);for(Y.max_code=rt,it=b.heap_len>>1;1<=it;it--)yt(b,I,it);for(W=Z;it=b.heap[1],b.heap[1]=b.heap[b.heap_len--],yt(b,I,1),ct=b.heap[1],b.heap[--b.heap_max]=it,b.heap[--b.heap_max]=ct,I[2*W]=I[2*it]+I[2*ct],b.depth[W]=(b.depth[it]>=b.depth[ct]?b.depth[it]:b.depth[ct])+1,I[2*it+1]=I[2*ct+1]=W,b.heap[1]=W++,yt(b,I,1),2<=b.heap_len;);b.heap[--b.heap_max]=b.heap[1],(function(Q,wt){var vt,It,Bt,pt,xt,Ut,Tt=wt.dyn_tree,Et=wt.max_code,bt=wt.stat_desc.static_tree,X=wt.stat_desc.has_stree,mt=wt.stat_desc.extra_bits,_t=wt.stat_desc.extra_base,At=wt.stat_desc.max_length,gt=0;for(pt=0;pt<=p;pt++)Q.bl_count[pt]=0;for(Tt[2*Q.heap[Q.heap_max]+1]=0,vt=Q.heap_max+1;vt<_;vt++)At<(pt=Tt[2*Tt[2*(It=Q.heap[vt])+1]+1]+1)&&(pt=At,gt++),Tt[2*It+1]=pt,Et<It||(Q.bl_count[pt]++,xt=0,_t<=It&&(xt=mt[It-_t]),Ut=Tt[2*It],Q.opt_len+=Ut*(pt+xt),X&&(Q.static_len+=Ut*(bt[2*It+1]+xt)));if(gt!==0){do{for(pt=At-1;Q.bl_count[pt]===0;)pt--;Q.bl_count[pt]--,Q.bl_count[pt+1]+=2,Q.bl_count[At]--,gt-=2}while(0<gt);for(pt=At;pt!==0;pt--)for(It=Q.bl_count[pt];It!==0;)Et<(Bt=Q.heap[--vt])||(Tt[2*Bt+1]!==pt&&(Q.opt_len+=(pt-Tt[2*Bt+1])*Tt[2*Bt],Tt[2*Bt+1]=pt),It--)}})(b,Y),ft(I,rt,b.bl_count)}function E(b,Y,it){var ct,W,I=-1,M=Y[1],B=0,Z=7,rt=4;for(M===0&&(Z=138,rt=3),Y[2*(it+1)+1]=65535,ct=0;ct<=it;ct++)W=M,M=Y[2*(ct+1)+1],++B<Z&&W===M||(B<rt?b.bl_tree[2*W]+=B:W!==0?(W!==I&&b.bl_tree[2*W]++,b.bl_tree[2*w]++):B<=10?b.bl_tree[2*A]++:b.bl_tree[2*R]++,I=W,rt=(B=0)===M?(Z=138,3):W===M?(Z=6,3):(Z=7,4))}function et(b,Y,it){var ct,W,I=-1,M=Y[1],B=0,Z=7,rt=4;for(M===0&&(Z=138,rt=3),ct=0;ct<=it;ct++)if(W=M,M=Y[2*(ct+1)+1],!(++B<Z&&W===M)){if(B<rt)for(;ht(b,W,b.bl_tree),--B!=0;);else W!==0?(W!==I&&(ht(b,W,b.bl_tree),B--),ht(b,w,b.bl_tree),at(b,B-3,2)):B<=10?(ht(b,A,b.bl_tree),at(b,B-3,3)):(ht(b,R,b.bl_tree),at(b,B-11,7));I=W,rt=(B=0)===M?(Z=138,3):W===M?(Z=6,3):(Z=7,4)}}l(G);var q=!1;function O(b,Y,it,ct){at(b,(c<<1)+(ct?1:0),3),(function(W,I,M,B){St(W),dt(W,M),dt(W,~M),s.arraySet(W.pending_buf,W.window,I,M,W.pending),W.pending+=M})(b,Y,it)}r._tr_init=function(b){q||((function(){var Y,it,ct,W,I,M=new Array(p+1);for(W=ct=0;W<m-1;W++)for(F[W]=ct,Y=0;Y<1<<P[W];Y++)y[ct++]=W;for(y[ct-1]=W,W=I=0;W<16;W++)for(G[W]=I,Y=0;Y<1<<S[W];Y++)L[I++]=W;for(I>>=7;W<f;W++)for(G[W]=I<<7,Y=0;Y<1<<S[W]-7;Y++)L[256+I++]=W;for(it=0;it<=p;it++)M[it]=0;for(Y=0;Y<=143;)U[2*Y+1]=8,Y++,M[8]++;for(;Y<=255;)U[2*Y+1]=9,Y++,M[9]++;for(;Y<=279;)U[2*Y+1]=7,Y++,M[7]++;for(;Y<=287;)U[2*Y+1]=8,Y++,M[8]++;for(ft(U,u+1,M),Y=0;Y<f;Y++)C[2*Y+1]=5,C[2*Y]=J(Y,5);V=new tt(U,P,d+1,u,p),N=new tt(C,S,0,f,p),$=new tt(new Array(0),T,0,g,v)})(),q=!0),b.l_desc=new H(b.dyn_ltree,V),b.d_desc=new H(b.dyn_dtree,N),b.bl_desc=new H(b.bl_tree,$),b.bi_buf=0,b.bi_valid=0,lt(b)},r._tr_stored_block=O,r._tr_flush_block=function(b,Y,it,ct){var W,I,M=0;0<b.level?(b.strm.data_type===2&&(b.strm.data_type=(function(B){var Z,rt=4093624447;for(Z=0;Z<=31;Z++,rt>>>=1)if(1&rt&&B.dyn_ltree[2*Z]!==0)return a;if(B.dyn_ltree[18]!==0||B.dyn_ltree[20]!==0||B.dyn_ltree[26]!==0)return o;for(Z=32;Z<d;Z++)if(B.dyn_ltree[2*Z]!==0)return o;return a})(b)),Pt(b,b.l_desc),Pt(b,b.d_desc),M=(function(B){var Z;for(E(B,B.dyn_ltree,B.l_desc.max_code),E(B,B.dyn_dtree,B.d_desc.max_code),Pt(B,B.bl_desc),Z=g-1;3<=Z&&B.bl_tree[2*z[Z]+1]===0;Z--);return B.opt_len+=3*(Z+1)+5+5+4,Z})(b),W=b.opt_len+3+7>>>3,(I=b.static_len+3+7>>>3)<=W&&(W=I)):W=I=it+5,it+4<=W&&Y!==-1?O(b,Y,it,ct):b.strategy===4||I===W?(at(b,2+(ct?1:0),3),Ft(b,U,C)):(at(b,4+(ct?1:0),3),(function(B,Z,rt,Q){var wt;for(at(B,Z-257,5),at(B,rt-1,5),at(B,Q-4,4),wt=0;wt<Q;wt++)at(B,B.bl_tree[2*z[wt]+1],3);et(B,B.dyn_ltree,Z-1),et(B,B.dyn_dtree,rt-1)})(b,b.l_desc.max_code+1,b.d_desc.max_code+1,M+1),Ft(b,b.dyn_ltree,b.dyn_dtree)),lt(b),ct&&St(b)},r._tr_tally=function(b,Y,it){return b.pending_buf[b.d_buf+2*b.last_lit]=Y>>>8&255,b.pending_buf[b.d_buf+2*b.last_lit+1]=255&Y,b.pending_buf[b.l_buf+b.last_lit]=255&it,b.last_lit++,Y===0?b.dyn_ltree[2*it]++:(b.matches++,Y--,b.dyn_ltree[2*(y[it]+d+1)]++,b.dyn_dtree[2*k(Y)]++),b.last_lit===b.lit_bufsize-1},r._tr_align=function(b){at(b,2,3),ht(b,x,U),(function(Y){Y.bi_valid===16?(dt(Y,Y.bi_buf),Y.bi_buf=0,Y.bi_valid=0):8<=Y.bi_valid&&(Y.pending_buf[Y.pending++]=255&Y.bi_buf,Y.bi_buf>>=8,Y.bi_valid-=8)})(b)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,m,d,u=1,f={},g=!1,_=a.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(a);p=p&&p.setTimeout?p:a,l={}.toString.call(a.process)==="[object process]"?function(w){process.nextTick(function(){v(w)})}:(function(){if(a.postMessage&&!a.importScripts){var w=!0,A=a.onmessage;return a.onmessage=function(){w=!1},a.postMessage("","*"),a.onmessage=A,w}})()?(d="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",x,!1):a.attachEvent("onmessage",x),function(w){a.postMessage(d+w,"*")}):a.MessageChannel?((m=new MessageChannel).port1.onmessage=function(w){v(w.data)},function(w){m.port2.postMessage(w)}):_&&"onreadystatechange"in _.createElement("script")?(c=_.documentElement,function(w){var A=_.createElement("script");A.onreadystatechange=function(){v(w),A.onreadystatechange=null,c.removeChild(A),A=null},c.appendChild(A)}):function(w){setTimeout(v,0,w)},p.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var A=new Array(arguments.length-1),R=0;R<A.length;R++)A[R]=arguments[R+1];var P={callback:w,args:A};return f[u]=P,l(u),u++},p.clearImmediate=h}function h(w){delete f[w]}function v(w){if(g)setTimeout(v,0,w);else{var A=f[w];if(A){g=!0;try{(function(R){var P=R.callback,S=R.args;switch(S.length){case 0:P();break;case 1:P(S[0]);break;case 2:P(S[0],S[1]);break;case 3:P(S[0],S[1],S[2]);break;default:P.apply(o,S)}})(A)}finally{h(w),g=!1}}}}function x(w){w.source===a&&typeof w.data=="string"&&w.data.indexOf(d)===0&&v(+w.data.slice(d.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ro)),Ro.exports}var Iv=Pv();const Th=Rv(Iv);function Dv(i){if(!i||i.length===0)return!1;try{var t=Math.abs(ql(i));return t>1e-9}catch{return!1}}function Ur(i){return{x:Number(i.x),y:Number(i.y),z:Number(i.z)}}function Lv(i){var t=[],e=i.triangles,n=i.points;if(!e||!e.length)return t;for(var r=0;r<e.length;r++){var s=e[r],a,o,l;if(s&&s.vertices&&s.vertices.length>=3)a=Ur(s.vertices[0]),o=Ur(s.vertices[1]),l=Ur(s.vertices[2]);else if(n&&s&&(typeof s[0]=="number"||typeof s.a=="number")){var c=s[0]!==void 0?s[0]:s.a,m=s[1]!==void 0?s[1]:s.b,d=s[2]!==void 0?s[2]:s.c;c>=0&&m>=0&&d>=0&&c<n.length&&m<n.length&&d<n.length&&(a=Ur(n[c]),o=Ur(n[m]),l=Ur(n[d]))}a&&o&&l&&t.push({v0:a,v1:o,v2:l})}return t}async function Uv(i){var t=await Th.loadAsync(i),e=[],n=null,r=t.file("manifest.json");if(r)try{n=JSON.parse(await r.async("string"))}catch(_){e.push("manifest.json: "+_.message)}var s=t.file("surfaces.json");if(!s)throw new Error("No surfaces.json in KAP (not a Kirra project export or missing surfaces)");var a=JSON.parse(await s.async("string"));if(!Array.isArray(a))throw new Error("surfaces.json must be an array");for(var o=[],l=0;l<a.length;l++){var c=a[l];if(c.isTexturedMesh&&(!c.triangles||c.triangles.length===0)){e.push("Skipped textured surface without triangles: "+(c.id||c.name||String(l)));continue}var m=Lv(c);if(m.length===0){e.push("No triangles usable: "+(c.id||c.name||String(l)));continue}var d=c.id||"import-"+l,u=c.name||d,f=Dv(m),g="KAP: "+u+" ("+m.length+" tris)";o.push({id:d,name:u,soup:m,closed:f,label:g})}if(o.length===0)throw new Error("No triangulated surfaces found in KAP");return{surfaces:o,warnings:e,manifest:n}}function Fu(i){for(var t=[],e=0;e<i.length;e++){var n=i[e];t.push({vertices:[{x:n.v0.x,y:n.v0.y,z:n.v0.z},{x:n.v1.x,y:n.v1.y,z:n.v1.z},{x:n.v2.x,y:n.v2.y,z:n.v2.z}]})}return t}async function Nv(i){var t=i.soupA,e=i.soupB,n=i.nameA||"MeshA",r=i.nameB||"MeshB",s=i.projectName||"trimesh-boolean-demo",a=new Th,o=new Date().toISOString();a.file("manifest.json",JSON.stringify({kapVersion:"demo-1",application:"trimesh-boolean-demo",created:o,projectName:s,counts:{surfaces:2,holes:0,drawings:0,images:0,products:0,charging:0,configs:0},note:"Minimal export from trimesh-boolean demo (Mesh A and Mesh B only). Open in Kirra or re-import here."},null,2));var l=[{id:"demo-mesh-a",name:n,type:"triangulated",visible:!0,triangles:Fu(t),metadata:{source:"trimesh-boolean-demo",role:"meshA"}},{id:"demo-mesh-b",name:r,type:"triangulated",visible:!0,triangles:Fu(e),metadata:{source:"trimesh-boolean-demo",role:"meshB"}}];a.file("surfaces.json",JSON.stringify(l));var c=await a.generateAsync({type:"blob",compression:"DEFLATE"});return c}var Se={};try{var Fv=await fetch("./kirra-surfaces.json"),Ou=await Fv.json();for(var Po in Ou)Po!=="_meta"&&(Se[Po]=Ou[Po]);console.log("Loaded Kirra surfaces:",Object.keys(Se).join(", "))}catch(i){console.warn("Could not load kirra-surfaces.json:",i.message)}var _e=document.getElementById("viewport"),ii=new Td;ii.background=new ee(1710618);var bn=new Cn(50,1,.1,1e4);bn.up.set(0,0,1);bn.position.set(5,-5,5);var vi=new Q_({antialias:!0});_e.appendChild(vi.domElement);var bs=new ev(bn,vi.domElement);bs.enableDamping=!0;bs.dampingFactor=.08;ii.add(new Kd(16777215,.6));var Ah=new Zd(16777215,.8);Ah.position.set(5,-7,10);ii.add(Ah);var Ov=new rp(20);ii.add(Ov);function Ch(){var i=_e.clientWidth,t=_e.clientHeight;bn.aspect=i/t,bn.updateProjectionMatrix(),vi.setSize(i,t),typeof Yt<"u"&&Yt.traverse(function(e){e.material&&e.material.resolution&&e.material.resolution.set(i,t)})}window.addEventListener("resize",Ch);Ch();function Rh(){requestAnimationFrame(Rh),bs.update(),vi.render(ii,bn)}Rh();function Io(i,t,e,n){for(var r=n/2,s=[{x:i-r,y:t-r,z:e-r},{x:i+r,y:t-r,z:e-r},{x:i+r,y:t+r,z:e-r},{x:i-r,y:t+r,z:e-r},{x:i-r,y:t-r,z:e+r},{x:i+r,y:t-r,z:e+r},{x:i+r,y:t+r,z:e+r},{x:i-r,y:t+r,z:e+r}],a=[[0,2,1],[0,3,2],[4,5,6],[4,6,7],[0,1,5],[0,5,4],[2,3,7],[2,7,6],[0,4,7],[0,7,3],[1,2,6],[1,6,5]],o=[],l=0;l<a.length;l++){var c=a[l];o.push({v0:{x:s[c[0]].x,y:s[c[0]].y,z:s[c[0]].z},v1:{x:s[c[1]].x,y:s[c[1]].y,z:s[c[1]].z},v2:{x:s[c[2]].x,y:s[c[2]].y,z:s[c[2]].z}})}return o}function Bu(i,t,e,n,r,s,a){for(var o=[],l=n/s,c=r/a,m=i-n/2,d=t-r/2,u=0;u<s;u++)for(var f=0;f<a;f++){var g=m+u*l,_=d+f*c,p=g+l,h=_+c;o.push({v0:{x:g,y:_,z:e},v1:{x:p,y:_,z:e},v2:{x:p,y:h,z:e}}),o.push({v0:{x:g,y:_,z:e},v1:{x:p,y:h,z:e},v2:{x:g,y:h,z:e}})}return o}function Bv(i,t,e,n,r,s,a,o,l){var c=[],m=n/s,d=r/a,u=i-n/2,f=t-r/2;function g(A,R){return e+(A-i)*o+(R-t)*l}for(var _=0;_<s;_++)for(var p=0;p<a;p++){var h=u+_*m,v=f+p*d,x=h+m,w=v+d;c.push({v0:{x:h,y:v,z:g(h,v)},v1:{x,y:v,z:g(x,v)},v2:{x,y:w,z:g(x,w)}}),c.push({v0:{x:h,y:v,z:g(h,v)},v1:{x,y:w,z:g(x,w)},v2:{x:h,y:w,z:g(h,w)}})}return c}function zv(i,t,e,n,r,s,a){var o=[],l=n/s,c=r/s,m=i-n/2,d=t-r/2;function u(x,w){return e+a*Math.sin(x*.8)*Math.cos(w*.8)}for(var f=0;f<s;f++)for(var g=0;g<s;g++){var _=m+f*l,p=d+g*c,h=_+l,v=p+c;o.push({v0:{x:_,y:p,z:u(_,p)},v1:{x:h,y:p,z:u(h,p)},v2:{x:h,y:v,z:u(h,v)}}),o.push({v0:{x:_,y:p,z:u(_,p)},v1:{x:h,y:v,z:u(h,v)},v2:{x:_,y:v,z:u(_,v)}})}return o}function kv(i,t,e,n,r,s,a){for(var o=[],l=2*Math.PI/a,c=0;c<a;c++){var m=c*l,d=(c+1)*l,u=i+r*Math.cos(m),f=t+r*Math.sin(m),g=i+r*Math.cos(d),_=t+r*Math.sin(d),p=i+s*Math.cos(m),h=t+s*Math.sin(m),v=i+s*Math.cos(d),x=t+s*Math.sin(d);o.push({v0:{x:u,y:f,z:e},v1:{x:g,y:_,z:e},v2:{x:v,y:x,z:n}}),o.push({v0:{x:u,y:f,z:e},v1:{x:v,y:x,z:n},v2:{x:p,y:h,z:n}}),o.push({v0:{x:i,y:t,z:n},v1:{x:p,y:h,z:n},v2:{x:v,y:x,z:n}})}return o}var hn={cube:function(){return{soup:Io(0,0,0,2),label:"Cube (2x2x2)",closed:!0}},"cube-large":function(){return{soup:Io(0,0,0,3),label:"Large Cube (3x3x3)",closed:!0}},"cube-offset":function(){return{soup:Io(1,.5,0,2),label:"Cube (offset +1,+0.5)",closed:!0}},"flat-terrain":function(){return{soup:Bu(0,0,0,8,8,5,5),label:"Flat Terrain (z=0, 8x8)",closed:!1}},"flat-cut":function(){return{soup:Bu(0,0,.5,7,7,4,4),label:"Flat Cut (z=0.5, 7x7)",closed:!1}},"inclined-terrain":function(){return{soup:Bv(0,0,0,8,8,5,5,.2,.15),label:"Inclined Terrain (8x8)",closed:!1}},"wavy-terrain":function(){return{soup:zv(0,0,0,8,8,8,1.5),label:"Wavy Terrain (8x8, amp 1.5)",closed:!1}},"pit-shell":function(){return{soup:kv(0,0,2,-1,3,.5,16),label:"Steep Pit Shell (80° walls)",closed:!1}}};Se.terrain&&(hn["kirra-terrain"]=function(){return{soup:Se.terrain.soup,label:Se.terrain.label,closed:Se.terrain.closed}});Se.cylinder&&(hn["kirra-cylinder"]=function(){return{soup:Se.cylinder.soup,label:Se.cylinder.label,closed:Se.cylinder.closed}});Se.cup&&(hn["kirra-cup"]=function(){return{soup:Se.cup.soup,label:Se.cup.label,closed:Se.cup.closed}});Se.convoluted&&(hn["kirra-convoluted"]=function(){return{soup:Se.convoluted.soup,label:"convoluted (32 tris, from Kirra)",closed:!1}});Se.shell&&(hn["kirra-shell"]=function(){return{soup:Se.shell.soup,label:Se.shell.label,closed:Se.shell.closed}});Se["presplit-a"]&&(hn["kirra-presplit-a"]=function(){return{soup:Se["presplit-a"].soup,label:Se["presplit-a"].label,closed:Se["presplit-a"].closed}});var Or="kap-user-";function Vv(){for(var i in hn)hn.hasOwnProperty(i)&&i.indexOf(Or)===0&&delete hn[i];var t=document.getElementById("meshA"),e=document.getElementById("meshB"),n=t.querySelector("optgroup[data-kap-user]"),r=e.querySelector("optgroup[data-kap-user]");n&&n.remove(),r&&r.remove()}function Hv(i){Vv();for(var t=i.surfaces,e=0;e<t.length;e++)(function(p){var h=t[p],v=Or+p,x=h.soup;hn[v]=function(){return{soup:x,label:h.label,closed:h.closed}}})(e);var n="Imported KAP ("+t.length+")",r=document.getElementById("meshA"),s=document.getElementById("meshB"),a=document.createElement("optgroup");a.setAttribute("label",n),a.setAttribute("data-kap-user","1");var o=document.createElement("optgroup");o.setAttribute("label",n),o.setAttribute("data-kap-user","1");for(var l=0;l<t.length;l++){var c=t[l],m=Or+l,d=c.name+" ("+c.soup.length+" tris)",u=document.createElement("option");u.value=m,u.textContent=d,a.appendChild(u);var f=document.createElement("option");f.value=m,f.textContent=d,o.appendChild(f)}r.appendChild(a),s.appendChild(o),t.length>=1&&(r.value=Or+"0"),t.length>=2?s.value=Or+"1":t.length===1&&(s.value=Or+"0");var g="";if(i.warnings&&i.warnings.length>0){g=" ("+i.warnings.length+" warning(s) — see console)";for(var _=0;_<i.warnings.length;_++)console.warn("KAP import: "+i.warnings[_])}console.log("KAP import: "+t.length+" surface(s)"+g)}function On(i,t,e){for(var n=window._displayOffset||{x:0,y:0,z:0},r=new Float32Array(i.length*9),s=0;s<i.length;s++){var a=i[s],o=s*9;r[o]=a.v0.x-n.x,r[o+1]=a.v0.y-n.y,r[o+2]=a.v0.z-n.z,r[o+3]=a.v1.x-n.x,r[o+4]=a.v1.y-n.y,r[o+5]=a.v1.z-n.z,r[o+6]=a.v2.x-n.x,r[o+7]=a.v2.y-n.y,r[o+8]=a.v2.z-n.z}var l=new Ye;l.setAttribute("position",new un(r,3)),l.computeVertexNormals();var c=new Wd({color:t,side:Sn,transparent:e<1,opacity:e,depthWrite:e>=1});return new Rn(l,c)}function Nr(i,t){for(var e=window._displayOffset||{x:0,y:0,z:0},n=new Float32Array(i.length*18),r=0;r<i.length;r++){var s=i[r],a=r*18;n[a]=s.v0.x-e.x,n[a+1]=s.v0.y-e.y,n[a+2]=s.v0.z-e.z,n[a+3]=s.v1.x-e.x,n[a+4]=s.v1.y-e.y,n[a+5]=s.v1.z-e.z,n[a+6]=s.v1.x-e.x,n[a+7]=s.v1.y-e.y,n[a+8]=s.v1.z-e.z,n[a+9]=s.v2.x-e.x,n[a+10]=s.v2.y-e.y,n[a+11]=s.v2.z-e.z,n[a+12]=s.v2.x-e.x,n[a+13]=s.v2.y-e.y,n[a+14]=s.v2.z-e.z,n[a+15]=s.v0.x-e.x,n[a+16]=s.v0.y-e.y,n[a+17]=s.v0.z-e.z}var o=new Ye;return o.setAttribute("position",new un(n,3)),new lh(o,new Hl({color:t,transparent:!0,opacity:.4}))}function Fr(i,t,e){var n=6;function r(S){return S.x.toFixed(n)+","+S.y.toFixed(n)+","+S.z.toFixed(n)}function s(S,T){return S<T?S+"|"+T:T+"|"+S}for(var a={},o={},l=0;l<i.length;l++)for(var c=i[l],m=[c.v0,c.v1,c.v2],d=[r(m[0]),r(m[1]),r(m[2])],u=0;u<3;u++){var f=(u+1)%3,g=s(d[u],d[f]);a[g]||(a[g]=0,o[g]=[m[u],m[f]]),a[g]++}var _=[];for(var p in a)a[p]===1&&_.push(o[p]);if(_.length===0)return null;var h=new Hr;h.userData.isOpenEdge=!0;for(var v=new Kn({color:t,linewidth:5,worldUnits:!1,dashed:!1,resolution:new Wt(e.clientWidth,e.clientHeight)}),x=0;x<_.length;x++){var w=_[x][0],A=_[x][1],R=new cr;R.setPositions([w.x,w.y,w.z,A.x,A.y,A.z]);var P=new Gr(R,v);P.computeLineDistances(),h.add(P)}return h}function Ph(i){var t=6;function e(T){return T.x.toFixed(t)+","+T.y.toFixed(t)+","+T.z.toFixed(t)}function n(T,z){return T<z?T+"|"+z:z+"|"+T}for(var r={},s=0;s<i.length;s++)for(var a=i[s],o=[e(a.v0),e(a.v1),e(a.v2)],l=0;l<3;l++){var c=(l+1)%3,m=n(o[l],o[c]);r[m]||(r[m]=[]),r[m].push(s)}var d={},u=[];for(var f in r)if(r[f].length>2){for(var g=r[f],_=0;_<g.length;_++)d[g[_]]=!0;for(var p=i[g[0]],h=[p.v0,p.v1,p.v2],v=f.split("|"),x=null,w=null,A=0;A<3;A++){var R=e(h[A]);R===v[0]&&(x=h[A]),R===v[1]&&(w=h[A])}x&&w&&u.push([x,w])}var P=[];for(var S in d)P.push(i[Number(S)]);return{triangles:P,edges:u}}function fs(i,t,e){var n=Ph(i);if(n.triangles.length===0)return 0;var r=On(n.triangles,12720219,.6);if(r.material.side=Sn,r.material.depthTest=!1,r.renderOrder=999,e.add(r),n.edges.length>0){for(var s=[],a=0;a<n.edges.length;a++){var o=n.edges[a][0],l=n.edges[a][1];s.push(o.x,o.y,o.z,l.x,l.y,l.z)}var c=new cr;c.setPositions(s);var m=new Kn({color:16777215,linewidth:6,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Wt(t.clientWidth,t.clientHeight)}),d=new Gr(c,m);d.computeLineDistances(),d.renderOrder=1e3,e.add(d)}return n.triangles.length}var Yt=new Hr;Yt.name="result";ii.add(Yt);window._scene=ii;window._camera=bn;window._resultGroup=Yt;var qe="input";function Gv(){for(;Yt.children.length>0;){var i=Yt.children[0];Yt.remove(i),i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()}}function zu(i,t,e){var n=[];n.push("<b>"+t+"</b>"),n.push("Triangles: <b>"+i.length+"</b>"),n.push("Type: <b>"+(e?"Closed solid":"Open surface")+"</b>");var r=Mh(i);if(n.push("Surface area: <b>"+r.toFixed(3)+"</b>"),e){var s=ql(i);n.push("Signed volume: <b>"+s.toFixed(3)+"</b>")}var a=xi(i);n.push("Avg edge length: <b>"+a.toFixed(4)+"</b>");try{var o=zi(i,1e-4),l=ya(o.triangles),c=Xi(l);n.push("Open edges: <b>"+c.openEdges+"</b> | Non-manifold: <b>"+c.overShared+"</b>")}catch{}return n.join("<br>")}function Wv(i,t,e){if(!i||!i.soup||i.soup.length===0)return"Operation <b>"+t+'</b>: <span class="highlight">no result</span> ('+e+" ms)";var n=[],r=t;t==="subtract-inv"&&(r="subtract (B\\A)"),n.push("Operation: <b>"+r+"</b> ("+e+" ms)"),n.push("Result triangles: <b>"+i.soup.length+"</b>"),i.points&&n.push("Result vertices: <b>"+i.points.length+"</b>");var s=Mh(i.soup);n.push("Surface area: <b>"+s.toFixed(3)+"</b>");var a=ql(i.soup);n.push("Signed volume: <b>"+a.toFixed(3)+"</b>");try{var o=zi(i.soup,1e-4),l=ya(o.triangles),c=Xi(l);n.push("Open edges: <b>"+c.openEdges+"</b> | Non-manifold: <b>"+c.overShared+"</b>")}catch{}return n.push(""),t==="subtract"?n.push('<span class="highlight">R = A \\ B</span>  (keep A-outside-B + B-inside-A flipped)'):t==="subtract-inv"?n.push('<span class="highlight">R = B \\ A</span>  (keep B-outside-A + A-inside-B flipped)'):t==="union"?n.push('<span class="highlight">R = A ∪ B</span>  (keep A-outside-B + B-outside-A)'):t==="intersect"?n.push('<span class="highlight">R = A ∩ B</span>  (keep A-inside-B + B-inside-A)'):t==="comp-union"?n.push('<span class="highlight">R = (A ∪ B)′</span>  (complement of union: A-inside + B-inside)'):t==="comp-intersect"?n.push('<span class="highlight">R = (A ∩ B)′</span>  (complement of intersection: A-outside + B-outside)'):t==="comp-subtract"&&n.push('<span class="highlight">R = (A \\ B)′</span>  (complement of difference: A-inside + B-outside + B-inside)'),n.join("<br>")}var Vi=!1,Br=!0,zr=!1,kr=!1,Ge=!1,ar=!0,jl=!1,Zl=!1,Ih=!1,Yr=!1,ms=!0,Tl=!0,Zn="bms",ye=null,_i=null;function ha(){var i=document.getElementById("meshA").value,t=document.getElementById("meshB").value;return i+"|"+t+"|"+Zn+"|"+ar+"|"+jl+"|"+Zl}function ns(){ye=null,_i=null}window.setPipeline=function(i){Zn=i,ns(),runOp(i==="bms"?"bms-splits":"splits")};var re=!1;window.runOp=function(i){qe=i,requestAnimationFrame(function(){for(var Ne=document.querySelectorAll("#toolbar button"),be=0;be<Ne.length;be++)Ne[be].classList.remove("active");Zn==="bms"?document.getElementById("btn-bms-splits").classList.add("active"):Zn==="orig"&&document.getElementById("btn-splits").classList.add("active");var wn=document.getElementById("btn-"+qe);wn&&wn.classList.add("active")}),Gv();var t=document.getElementById("meshA").value,e=document.getElementById("meshB").value,n=hn[t](),r=hn[e](),s=document.getElementById("mesh-warning");s.style.display="none";var a=0,o=0,l=0;if(n.soup.length>0&&r.soup.length>0){for(var c=0,m=0,d=0,u=0,f=0,g=0;g<n.soup.length;g++){var Ln=n.soup[g];d+=Ln.v0.x+Ln.v1.x+Ln.v2.x,u+=Ln.v0.y+Ln.v1.y+Ln.v2.y,f+=Ln.v0.z+Ln.v1.z+Ln.v2.z,c+=3}var _=d/c,p=u/c,h=f/c;d=0,u=0,f=0;for(var v=0;v<r.soup.length;v++){var x=r.soup[v];d+=x.v0.x+x.v1.x+x.v2.x,u+=x.v0.y+x.v1.y+x.v2.y,f+=x.v0.z+x.v1.z+x.v2.z,m+=3}var w=d/m,A=u/m,R=f/m;a=(_*c+w*m)/(c+m),o=(p*c+A*m)/(c+m),l=(h*c+R*m)/(c+m);var P=Math.sqrt((_-w)*(_-w)+(p-A)*(p-A)+(h-R)*(h-R)),S=Math.sqrt(n.soup.length)*2,T=Math.sqrt(r.soup.length)*2,z=Math.max(S,T)*50;P>z&&P>1e3&&(s.innerHTML="Mesh A and Mesh B seem to be a very long way apart.<br><br>Please check the mesh coordinates.",s.style.display="block")}if(window._displayOffset={x:a,y:o,z:l},ar){var U=xi(n.soup),C=xi(r.soup);n.soup=va(n.soup,U*.01,3),n.soup=xa(n.soup,U*.01),r.soup=va(r.soup,C*.01,3),r.soup=xa(r.soup,C*.01)}document.querySelectorAll("#toolbar button").forEach(function(Ne){Ne.classList.remove("active")});var L="btn-"+i,y=document.getElementById(L);y&&y.classList.add("active");var F=document.getElementById("stat-inputs"),V=document.getElementById("stat-result"),N=ar?'<br><span class="highlight">T-junction repair: ON</span>':"";if(F.innerHTML=zu(n.soup,"A: "+n.label,n.closed)+"<br><br>"+zu(r.soup,"B: "+r.label,r.closed)+N,i==="input"){var $=On(n.soup,13378082,.7),G=On(r.soup,8947848,.7);if($.material.wireframe=Vi,G.material.wireframe=Vi,Yt.add($),Yt.add(G),Br||Ge){var tt=Nr(n.soup,Ge?16755302:16737860),H=Nr(r.soup,Ge?6728447:4491519);Ge&&(tt.material.opacity=.9,H.material.opacity=.9),Yt.add(tt),Yt.add(H)}if(zr){var k=Fr(n.soup,16711680,_e);k&&Yt.add(k);var dt=Fr(r.soup,16711680,_e);dt&&Yt.add(dt)}kr&&(fs(n.soup,_e,Yt),fs(r.soup,_e,Yt));try{var at=cf(n.soup,r.soup);if(at&&at.length>0){for(var ht=xi(n.soup),J=mc(at,ht*.01),ft=new Kn({color:16777215,linewidth:4,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Wt(_e.clientWidth,_e.clientHeight)}),lt=0;lt<J.length;lt++){var St=J[lt];if(!(St.length<2)){for(var Mt=[],yt=0;yt<St.length;yt++){var Ft=window._displayOffset||{x:0,y:0,z:0};Mt.push(St[yt].x-Ft.x,St[yt].y-Ft.y,St[yt].z-Ft.z)}var Pt=new cr;Pt.setPositions(Mt);var E=new Gr(Pt,ft);E.computeLineDistances(),E.renderOrder=999,Yt.add(E)}}V.innerHTML="Showing inputs<br>Intersection: <b>"+at.length+"</b> segments → <b>"+J.length+"</b> chains (yellow)"}else V.innerHTML="Showing inputs<br>No intersection detected"}catch{V.innerHTML="Showing inputs"}re||Bi();return}if(i==="splits"&&Zn==="orig"){var et=performance.now(),q;try{q=ka(n.soup,r.soup)}catch(Ne){V.innerHTML='<span class="highlight">Split error: '+Ne.message+"</span>";return}var O=(performance.now()-et).toFixed(1);if(!q){V.innerHTML='<span class="highlight">No intersection — nothing to split</span>';var b=On(n.soup,3355443,.3),Y=On(r.soup,3355443,.3);Yt.add(b),Yt.add(Y),re||Bi();return}for(var it=q.groups,ct={aInside:15079724,aOutside:16021792,bInside:4485828,bOutside:47042},W={aInside:7539734,aOutside:8010768,bInside:2242914,bOutside:23393},I=[{key:"aInside",soup:it.aInside,label:"A inside B"},{key:"aOutside",soup:it.aOutside,label:"A outside B"},{key:"bInside",soup:it.bInside,label:"B inside A"},{key:"bOutside",soup:it.bOutside,label:"B outside A"}],M=0;M<I.length;M++){var B=I[M];if(B.soup.length!==0){var Z=Ge?.6:.5,rt=On(B.soup,ct[B.key],Z);if(rt.material.wireframe=Vi,Yt.add(rt),Br||Ge){var Q=Ge?ct[B.key]:W[B.key],wt=Ge?.9:.4,vt=Nr(B.soup,Q);vt.material.opacity=wt,Yt.add(vt)}if(zr){var It=Fr(B.soup,16711680,_e);It&&Yt.add(It)}kr&&fs(B.soup,_e,Yt)}}if(q.segments&&q.segments.length>0){for(var Bt=xi(n.soup),pt=[],xt=0;xt<q.segments.length;xt++)pt.push({p0:q.segments[xt].p0,p1:q.segments[xt].p1});for(var Ut=mc(pt,Bt*.01),Tt=new Kn({color:16777215,linewidth:5,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Wt(_e.clientWidth,_e.clientHeight)}),Et=0;Et<Ut.length;Et++){var bt=Ut[Et];if(!(bt.length<2)){for(var X=[],mt=0;mt<bt.length;mt++)X.push(bt[mt].x,bt[mt].y,bt[mt].z);var _t=new cr;_t.setPositions(X);var At=new Gr(_t,Tt);At.computeLineDistances(),At.renderOrder=999,Yt.add(At)}}}var gt=[];gt.push("Split completed in <b>"+O+"</b> ms"),gt.push("Segments: <b>"+(q.segments?q.segments.length:0)+"</b>"),gt.push("");for(var ut="",Dt=0;Dt<I.length;Dt++){var Ht=I[Dt],se="#"+ct[Ht.key].toString(16).padStart(6,"0"),Qt="";if(Ht.soup.length>0)try{var je=zi(Ht.soup,1e-4),Ze=ya(je.triangles),Ai=Xi(Ze);Qt=" | open: "+Ai.openEdges,Ai.overShared>0&&(Qt+=" | nm: "+Ai.overShared)}catch{}ut+='<div class="split-legend"><span class="split-swatch" style="background:'+se+'"></span> <span>'+Ht.label+": <b>"+Ht.soup.length+"</b> tris"+Qt+"</span></div>"}gt.push(ut),Ge&&gt.push('<br><span class="highlight">Fan Tris: ON</span> (each sub-triangle edge visible)'),V.innerHTML=gt.join("<br>"),re||Bi();return}if(i==="bms-splits"||i==="splits"&&Zn==="bms"){let Ne=function(be,wn){if(!(!be||be.length<2)){for(var vn=window._displayOffset||{x:0,y:0,z:0},ce=[],oe=0;oe<be.length;oe++)ce.push(be[oe].x-vn.x,be[oe].y-vn.y,be[oe].z-vn.z);var Ae=new cr;Ae.setPositions(ce);var en=new Gr(Ae,wn);en.computeLineDistances(),en.renderOrder=999,Yt.add(en)}};var Ee=ha();if(!ye||_i!==Ee){if(!window._bmsRunning){var fn=document.getElementById("processing-overlay");fn.textContent="BMS-Heffalump running...",fn.classList.add("active"),window._bmsRunning=!0,setTimeout(function(){runOp(i)},30);return}window._bmsRunning=!1,document.getElementById("processing-overlay").classList.remove("active");var Hn=performance.now();try{ye=Co(n.soup,r.soup,null,{preRepair:ar}),_i=Ee}catch(be){V.innerHTML='<span class="highlight">BMS error: '+be.message+"</span>",console.error(be);return}var Ci=(performance.now()-Hn).toFixed(1)}else{window._bmsRunning=!1,document.getElementById("processing-overlay").classList.remove("active");var Ci="cached"}var we=ye;if(!we){V.innerHTML='<span class="highlight">No BMS result — meshes may not intersect</span>',re||Bi();return}for(var Pn=we.groups,oi={aInside:15079724,aOutside:16021792,bInside:4485828,bOutside:47042},ji={aInside:7539734,aOutside:8010768,bInside:2242914,bOutside:23393},En=[{key:"aInside",soup:Pn.aInside,label:"A inside B"},{key:"aOutside",soup:Pn.aOutside,label:"A outside B"},{key:"bInside",soup:Pn.bInside,label:"B inside A"},{key:"bOutside",soup:Pn.bOutside,label:"B outside A"}],Ri=0;Ri<En.length;Ri++){var Ke=En[Ri];if(Ke.soup.length!==0){var dr=Ge?.6:.5,Zi=On(Ke.soup,oi[Ke.key],dr);if(Zi.material.wireframe=Vi,Yt.add(Zi),Br||Ge){var fe=Ge?oi[Ke.key]:ji[Ke.key],dn=Ge?.9:.4,pn=Nr(Ke.soup,fe);pn.material.opacity=dn,Yt.add(pn)}if(zr){var mn=Fr(Ke.soup,16711680,_e);mn&&Yt.add(mn)}kr&&fs(Ke.soup,_e,Yt)}}for(var Ki=[16768256,16746496,8978176,65416,35071,8913151,16711816,16777215],pr=[16711935,65535,16737792,65382,16711782,6684927,6749952,26367],D=we.meshEdgePolys||{},K=["A","B"],ot=0,st=0,nt=0,Lt=0,Nt=0;Nt<K.length;Nt++){var Ct=D[K[Nt]];if(!(!Ct||!Ct.segments)){Ct.closed&&st++;for(var zt=0;zt<Ct.segments.length;zt++){var kt=Ct.segments[zt];if(ot++,kt.type==="intersection"){if(ms){var qt=new Kn({color:Ki[nt%Ki.length],linewidth:5,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Wt(_e.clientWidth,_e.clientHeight)});Ne(kt.verts,qt)}nt++}else{if(Tl){var Kt=new Kn({color:pr[Lt%pr.length],linewidth:4,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Wt(_e.clientWidth,_e.clientHeight)});Ne(kt.verts,Kt)}Lt++}}}}var Ot=[];Ot.push('<span class="highlight">BMS-Heffalump Pipeline</span> ('+Ci+" ms)"),Ot.push("Segments: <b>"+we.segments.length+"</b>"),Ot.push("Polylines: <b>"+(we.polylines?we.polylines.length:0)+"</b>"),we.pool&&Ot.push("Pool vertices: <b>"+we.pool.size()+"</b>"),Ot.push("");for(var ae="",ve=0;ve<En.length;ve++){var de=En[ve],le="#"+oi[de.key].toString(16).padStart(6,"0"),Ce="";if(de.soup.length>0)try{var Vt=zi(de.soup,1e-4),$e=ya(Vt.triangles),te=Xi($e);Ce=" | open: "+te.openEdges,te.overShared>0&&(Ce+=" | nm: "+te.overShared)}catch{}ae+='<div class="split-legend"><span class="split-swatch" style="background:'+le+'"></span> <span>'+de.label+": <b>"+de.soup.length+"</b> tris"+Ce+"</span></div>"}Ot.push(ae),Ot.push('<br><span style="color:#ffdd00">&#9632;</span> Yellow = intersection'),Ot.push('<span style="color:#ff00ff">&#9632;</span> Magenta = graph/edge walk'),Ot.push("Edge poly segments: <b>"+ot+"</b> ("+st+"/2 meshes closed)"),Ot.push("Raw chains: <b>"+(we.rawPolylines?we.rawPolylines.length:0)+"</b>"),V.innerHTML=Ot.join("<br>"),re||Bi();return}if(i==="custom"){let be=function(ce,oe){var Ae=ce>>16&255,en=ce>>8&255,an=ce&255;return Ae=Math.round(Ae*oe),en=Math.round(en*oe),an=Math.round(an*oe),Ae<<16|en<<8|an},wn=function(ce,oe){var Ae=ce>>16&255,en=ce>>8&255,an=ce&255;return Ae=Math.min(255,Math.round(Ae+(255-Ae)*oe)),en=Math.min(255,Math.round(en+(255-en)*oe)),an=Math.min(255,Math.round(an+(255-an)*oe)),Ae<<16|en<<8|an},vn=function(ce,oe){if(!(!ce||ce.length<2)){for(var Ae=window._displayOffset||{x:0,y:0,z:0},en=[],an=0;an<ce.length;an++)en.push(ce[an].x-Ae.x,ce[an].y-Ae.y,ce[an].z-Ae.z);var dc=new cr;dc.setPositions(en);var za=new Gr(dc,oe);za.computeLineDistances(),za.renderOrder=999,Yt.add(za)}};var gn=performance.now(),q,Me=null;if(Yr&&window._reclassifyData)q={groups:window._reclassifyData.groups,segments:window._reclassifyData.segments},Me=window._reclassifyData.meshEdgePolys;else{var Ee=ha();if(!ye||_i!==Ee){if(!window._customRunning){var fn=document.getElementById("processing-overlay");fn.textContent=Zn==="bms"?"BMS-Heffalump running...":"Splitting...",fn.classList.add("active"),window._customRunning=!0,setTimeout(function(){runOp("custom")},30);return}window._customRunning=!1,document.getElementById("processing-overlay").classList.remove("active");try{if(Zn==="bms"){var _n=Co(n.soup,r.soup,null,{preRepair:ar});if(!_n){V.innerHTML="No BMS result";return}ye=_n}else{var li=ka(n.soup,r.soup);ye={groups:li.groups,segments:li.segments||[],meshEdgePolys:null,componentWalks:null}}_i=Ee}catch(oe){V.innerHTML='<span class="highlight">Error: '+oe.message+"</span>",console.error(oe);return}}else window._customRunning=!1,document.getElementById("processing-overlay").classList.remove("active");q={groups:ye.groups,segments:ye.segments||[]},Me=ye.meshEdgePolys,window._meshEdgePolys=Me,window._componentWalks=ye.componentWalks||null,window._reclassifyData={groups:ye.groups,segments:ye.segments,meshEdgePolys:Me}}if(!q){V.innerHTML="No split result (meshes may not intersect)";return}var Gt=uf(q.groups);Ih&&(Gt=ff(Gt,50));for(var Pe=(performance.now()-gn).toFixed(1),In=[15079724,16021792,3781962,47042,4485828,3947660,9125792,12720219],Te=In.length,lt=0;lt<Gt.length;lt++){var yt=Gt[lt],Dn=Math.floor(lt/Te),Pi=lt%Te,mr=In[Pi];Dn===0?yt.color=mr:Dn===1?yt.color=be(mr,.5):yt.color=wn(mr,.5),yt.visible=!0}if(window._customComps&&window._customComps.length===Gt.length)for(var ws=0;ws<Gt.length;ws++)Gt[ws].visible=window._customComps[ws].visible;window._customComps=Gt;var Dh=Zn==="bms"?'<span style="color:#39B54A">BMS-Heffalump</span>':"Orig Pipe",is="<b>Custom splits</b> — "+Dh+" ("+Pe+" ms)<br>"+Gt.length+" components from "+(q.segments?q.segments.length:0)+" segments<hr>";is+='<ul class="comp-list" id="comp-list">';for(var Dt=0;Dt<Gt.length;Dt++){var $i=Gt[Dt],Lh=$i.mesh+"-"+$i.side+($i.index>0?" #"+$i.index:""),Uh="#"+("000000"+$i.color.toString(16)).slice(-6),Nh=$i.visible?"comp-eye":"comp-eye off";is+='<li class="comp-item" data-idx="'+Dt+'"><span class="'+Nh+'" data-idx="'+Dt+'">&#128065;</span><span class="comp-swatch" style="background:'+Uh+'"></span><span class="comp-label">'+Lh+" ("+$i.triCount+")</span></li>"}is+="</ul>";for(var Kl=0,$l=0,Ts=0;Ts<Gt.length;Ts++)Gt[Ts].visible&&(Kl++,$l+=Gt[Ts].triCount);is+="<br>Visible: "+Kl+"/"+Gt.length+" ("+$l+" tris)",V.innerHTML=is;for(var ci=0;ci<Gt.length;ci++)if(Gt[ci].visible){var Da=On(Gt[ci].soup,Gt[ci].color,.55);if(Da.material.wireframe=Vi,Da.material.side=Sn,Yt.add(Da),Br){var Jl=Nr(Gt[ci].soup,Gt[ci].color);Jl.material.opacity=.5,Yt.add(Jl)}if(zr){var Ql=Fr(Gt[ci].soup,16711680,_e);Ql&&Yt.add(Ql)}if(kr){var tc=Ph(Gt[ci].soup);tc&&Yt.add(tc)}}var La=document.getElementById("comp-list");La&&La.addEventListener("click",function(ce){for(var oe=ce.target;oe&&!oe.dataset.idx&&oe!==La;)oe=oe.parentElement;if(!(!oe||oe.dataset.idx===void 0)){var Ae=parseInt(oe.dataset.idx);isNaN(Ae)||Ae<0||Ae>=window._customComps.length||(window._customComps[Ae].visible=!window._customComps[Ae].visible,re=!0,runOp("custom"),re=!1)}});try{var As=Me;if(!As){var Cs=bh(n.soup,r.soup);if(Cs.segments.length>0){var Fh=Eh(n.soup,r.soup,Cs),Oh=Yl(Cs.segments),Bh=wh(Oh,n.soup,r.soup,Fh,Cs.segments);As=Bh.meshEdgePolys}}if(As){for(var ec={A:!1,B:!1},Rs=0;Rs<Gt.length;Rs++)Gt[Rs].visible&&(ec[Gt[Rs].mesh]=!0);for(var zh=[16768256,65416],kh=[16711935,65535],Ua=["A","B"],gr=0;gr<Ua.length;gr++)if(ec[Ua[gr]]){var Ps=As[Ua[gr]];if(!(!Ps||!Ps.segments)&&Tl)for(var Vh=zh[gr],Hh=kh[gr],Na=0;Na<Ps.segments.length;Na++){var Fa=Ps.segments[Na],Gh=Fa.type==="intersection"&&ms?Vh:Hh,Wh=Fa.type==="intersection"&&ms?5:4,Xh=new Kn({color:Gh,linewidth:Wh,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Wt(_e.clientWidth,_e.clientHeight)});vn(Fa.verts,Xh)}}}}catch(ce){console.warn("BMS overlay failed:",ce.message)}if(ms&&q.segments&&q.segments.length>0){var qh=Me&&(Me.A&&Me.A.segments&&Me.A.segments.length>0||Me.B&&Me.B.segments&&Me.B.segments.length>0);if(!qh)for(var Yh=new Kn({color:65484,linewidth:5,worldUnits:!1,dashed:!1,depthTest:!1,transparent:!0,resolution:new Wt(_e.clientWidth,_e.clientHeight)}),Oa=0;Oa<q.segments.length;Oa++){var Is=q.segments[Oa];Is.p0&&Is.p1&&vn([Is.p0,Is.p1],Yh)}}re||Bi();return}var Je=i,jh=performance.now(),ge;try{if(Zn==="bms"){var Ee=ha();if(!ye||_i!==Ee){var _n=Co(n.soup,r.soup,null,{preRepair:ar});_n&&(ye=_n,_i=Ee)}if(ye){let be=function(wn){for(var vn=[],ce=0;ce<wn.length;ce++){var oe=wn[ce];vn.push({v0:oe.v0,v1:oe.v2,v2:oe.v1})}return vn};var Qe=ye.groups,Gn=[];if(Je==="subtract"?Gn=Qe.aOutside.concat(be(Qe.bInside)):Je==="subtract-inv"?Gn=Qe.bOutside.concat(be(Qe.aInside)):Je==="union"?Gn=Qe.aOutside.concat(Qe.bOutside):Je==="intersect"||Je==="comp-union"?Gn=Qe.aInside.concat(Qe.bInside):Je==="comp-intersect"?Gn=Qe.aOutside.concat(Qe.bOutside):Je==="comp-subtract"&&(Gn=Qe.aInside.concat(Qe.bOutside).concat(Qe.bInside)),Gn.length>0){var rs=zi(Gn,1e-4);ge={soup:Gn,points:rs.points,triangles:rs.triangles}}}}else{var nc=ha();if(!ye||_i!==nc){var Ba=ka(n.soup,r.soup);Ba&&(ye={groups:Ba.groups,segments:Ba.segments||[]},_i=nc)}if(ye){let Ne=function(be){for(var wn=[],vn=0;vn<be.length;vn++){var ce=be[vn];wn.push({v0:ce.v0,v1:ce.v2,v2:ce.v1})}return wn};var tn=ye.groups,Wn=[];if(Je==="subtract"?Wn=tn.aOutside.concat(Ne(tn.bInside)):Je==="subtract-inv"?Wn=tn.bOutside.concat(Ne(tn.aInside)):Je==="union"?Wn=tn.aOutside.concat(tn.bOutside):Je==="intersect"||Je==="comp-union"?Wn=tn.aInside.concat(tn.bInside):Je==="comp-intersect"?Wn=tn.aOutside.concat(tn.bOutside):Je==="comp-subtract"&&(Wn=tn.aInside.concat(tn.bOutside).concat(tn.bInside)),Wn.length>0){var ic=zi(Wn,1e-4);ge={soup:Wn,points:ic.points,triangles:ic.triangles}}}else ge=hf(n.soup,r.soup,Je)}}catch(Ne){V.innerHTML='<span class="highlight">Error: '+Ne.message+"</span>",console.error(Ne);return}var Ln=(performance.now()-jh).toFixed(1),Ds=[];if(jl&&ge&&ge.soup){var Zh=ge.soup.length;ge.soup=df(ge.soup);var rc=ge.soup.length-Zh;rc>0&&Ds.push("Fill Gaps (Fan): +"+rc+" tris")}if(Zl&&ge&&ge.soup){for(var Kh=ge.soup.length,rs=zi(ge.soup,1e-4),sc=pf(rs.points,rs.triangles),ac=[],Et=0;Et<sc.triangles.length;Et++){var ui=sc.triangles[Et].vertices;ac.push({v0:{x:ui[0].x,y:ui[0].y,z:ui[0].z},v1:{x:ui[1].x,y:ui[1].y,z:ui[1].z},v2:{x:ui[2].x,y:ui[2].y,z:ui[2].z}})}ge.soup=ac;var oc=ge.soup.length-Kh;oc>0&&Ds.push("Force Close (Idx): +"+oc+" tris");var lc=zi(ge.soup,1e-4);ge.points=lc.points,ge.triangles=lc.triangles}if(V.innerHTML=Wv(ge,i,Ln),Ds.length>0&&(V.innerHTML+='<br><span class="highlight">'+Ds.join("<br>")+"</span>"),!ge||!ge.soup||ge.soup.length===0){var $h=On(n.soup,3355443,.2),Jh=On(r.soup,3355443,.2);Yt.add($h),Yt.add(Jh),Bi();return}var Qh={subtract:16021792,"subtract-inv":4485828,union:3781962,intersect:9125792,"comp-union":12720219,"comp-intersect":35195,"comp-subtract":16740096,custom:47042},cc=On(ge.soup,Qh[i]||13421772,.7);if(cc.material.wireframe=Vi,Yt.add(cc),Br||Ge){var tf={subtract:8010768,"subtract-inv":2242914,union:1858085,intersect:453e4,custom:23393},uc=Nr(ge.soup,tf[i]||10066329);Ge&&(uc.material.opacity=.9),Yt.add(uc)}if(zr){var hc=Fr(ge.soup,16711680,_e);hc&&Yt.add(hc)}if(kr){var fc=fs(ge.soup,_e,Yt);fc>0&&(V.innerHTML+='<br><span class="highlight">Non-manifold tris: '+fc+"</span>")}re||Bi()};function Bi(){var i=new Ti;if(Yt.traverse(function(s){if(s.isMesh||s.isLineSegments){s.geometry.computeBoundingBox();var a=s.geometry.boundingBox.clone();i.union(a)}}),!i.isEmpty()){var t=new j;i.getCenter(t);var e=new j;i.getSize(e);var n=Math.max(e.x,e.y,e.z),r=n*1.8;bs.target.copy(t),bn.position.set(t.x+r*.6,t.y-r*.7,t.z+r*.4),bn.near=Math.max(.1,r*.001),bn.far=Math.max(1e4,r*10),bn.updateProjectionMatrix(),bs.update()}}document.getElementById("meshA").addEventListener("change",function(){ns(),runOp(qe)});document.getElementById("meshB").addEventListener("change",function(){ns(),runOp(qe)});document.getElementById("chk-wireframe").addEventListener("change",function(i){Vi=i.target.checked,Yt.traverse(function(t){t.isMesh&&(t.material.wireframe=Vi)})});document.getElementById("chk-edges").addEventListener("change",function(i){Br=i.target.checked,re=!0,runOp(qe),re=!1});document.getElementById("chk-open-edges").addEventListener("change",function(i){zr=i.target.checked,re=!0,runOp(qe),re=!1});document.getElementById("chk-nonmanifold").addEventListener("change",function(i){kr=i.target.checked,re=!0,runOp(qe),re=!1});document.getElementById("chk-fan-tris").addEventListener("change",function(i){Ge=i.target.checked,re=!0,runOp(qe),re=!1});document.getElementById("chk-prerepair").addEventListener("change",function(i){ar=i.target.checked,ns(),re=!0,runOp(qe),re=!1});document.getElementById("chk-fill-gaps").addEventListener("change",function(i){jl=i.target.checked,ns(),re=!0,runOp(qe),re=!1});document.getElementById("chk-force-close").addEventListener("change",function(i){Zl=i.target.checked,ns(),re=!0,runOp(qe),re=!1});document.getElementById("chk-merge-small").addEventListener("change",function(i){Ih=i.target.checked,re=!0,runOp(qe),re=!1});document.getElementById("chk-show-isect").addEventListener("change",function(i){ms=i.target.checked,re=!0,runOp(qe),re=!1});document.getElementById("chk-show-walks").addEventListener("change",function(i){Tl=i.target.checked,re=!0,runOp(qe),re=!1});document.getElementById("chk-reclassify").addEventListener("change",function(i){Yr=i.target.checked,document.getElementById("viewport").classList.toggle("reclassify-mode",Yr),document.getElementById("reclassify-hint").classList.toggle("active",Yr)});(function(){var i=new tp,t=new Wt,e=0,n=0,r=null,s=null,a=new Ye,o=new Float32Array(9);a.setAttribute("position",new un(o,3));var l=new kl({color:16776960,side:Sn,transparent:!0,opacity:.6,depthTest:!1});vi.domElement.addEventListener("pointermove",function(m){if(!Yr){s&&(ii.remove(s),s=null);return}var d=vi.domElement.getBoundingClientRect();t.x=(m.clientX-d.left)/d.width*2-1,t.y=-((m.clientY-d.top)/d.height)*2+1,i.setFromCamera(t,bn);var u=i.intersectObjects(Yt.children,!0);if(u.length===0||!u[0].face){s&&(ii.remove(s),s=null);return}for(var f=u[0],g=f.object.geometry.getAttribute("position"),_=f.face,p=f.object.matrixWorld,h=0;h<3;h++){var v=[_.a,_.b,_.c][h],x=new j(g.getX(v),g.getY(v),g.getZ(v));x.applyMatrix4(p),o[h*3]=x.x,o[h*3+1]=x.y,o[h*3+2]=x.z}a.attributes.position.needsUpdate=!0,a.computeBoundingSphere(),s||(s=new Rn(a,l),s.renderOrder=1e3),s.parent||ii.add(s)}),vi.domElement.addEventListener("pointerdown",function(m){e=m.clientX,n=m.clientY});function c(m,d,u,f){for(var g=["aInside","aOutside","bInside","bOutside"],_=1e-4,p=0;p<g.length;p++){var h=m[g[p]];if(h)for(var v=0;v<h.length;v++){var x=h[v],w=(x.v0.x+x.v1.x+x.v2.x)/3,A=(x.v0.y+x.v1.y+x.v2.y)/3,R=(x.v0.z+x.v1.z+x.v2.z)/3,P=w-d,S=A-u,T=R-f;if(P*P+S*S+T*T<_)return{key:g[p],idx:v}}}return null}window.doReclassify=function(m){var d=document.getElementById("reclassify-menu");if(d.style.display="none",!(!m||!r)){var u=r.groups,f=c(u,r.cx,r.cy,r.cz);if(f&&f.key!==m){var g=u[f.key],_=u[m];if(!(!g||!_)){if(r.shiftKey){var p={aInside:"A",aOutside:"A",bInside:"B",bOutside:"B"},h={aInside:"inside",aOutside:"outside",bInside:"inside",bOutside:"outside"},v=Av(u,p[f.key],h[f.key],f.idx);console.log("[reclassify] Region: "+v+" tris from "+f.key+" -> "+m)}else _.push(g.splice(f.idx,1)[0]),console.log("[reclassify] 1 tri from "+f.key+" -> "+m);re=!0,runOp(qe),re=!1}}}},vi.domElement.addEventListener("pointerup",function(m){if(Yr){var d=ye&&ye.groups?ye.groups:null;if(d){var u=m.clientX-e,f=m.clientY-n;if(!(u*u+f*f>25)){var g=vi.domElement.getBoundingClientRect();t.x=(m.clientX-g.left)/g.width*2-1,t.y=-((m.clientY-g.top)/g.height)*2+1,i.setFromCamera(t,bn);var _=i.intersectObjects(Yt.children,!0);if(_.length!==0){var p=_[0],h=p.face,v=p.object.geometry;if(!(!v||!h)){var x=v.getAttribute("position"),w=h.a,A=h.b,R=h.c,P=x.getX(w),S=x.getY(w),T=x.getZ(w),z=x.getX(A),U=x.getY(A),C=x.getZ(A),L=x.getX(R),y=x.getY(R),F=x.getZ(R),V=p.object.matrixWorld,N=new j(P,S,T).applyMatrix4(V),$=new j(z,U,C).applyMatrix4(V),G=new j(L,y,F).applyMatrix4(V),tt=window._displayOffset||{x:0,y:0,z:0},H=(N.x+$.x+G.x)/3+tt.x,k=(N.y+$.y+G.y)/3+tt.y,dt=(N.z+$.z+G.z)/3+tt.z,at=c(d,H,k,dt);if(at){r={cx:H,cy:k,cz:dt,shiftKey:m.shiftKey,groups:d};var ht=document.getElementById("reclassify-menu");ht.style.left=m.clientX+"px",ht.style.top=m.clientY+"px",ht.style.display="block";for(var J=ht.querySelectorAll("button"),ft=0;ft<J.length;ft++)J[ft].style.fontWeight="normal";ht.querySelector("div").textContent=(m.shiftKey?"Move region":"Move triangle")+" from "+at.key+" to:"}}}}}}}),document.addEventListener("pointerdown",function(m){var d=document.getElementById("reclassify-menu");d.style.display!=="none"&&!d.contains(m.target)&&(d.style.display="none")})})();document.getElementById("btn-kap-import").addEventListener("click",function(){document.getElementById("kap-file-input").click()});document.getElementById("kap-file-input").addEventListener("change",function(i){var t=i.target.files&&i.target.files[0];t&&(Uv(t).then(function(e){Hv(e),re=!0,runOp(qe),re=!1}).catch(function(e){alert("KAP import failed: "+e.message),console.error(e)}),i.target.value="")});document.getElementById("btn-kap-export").addEventListener("click",function(){var i=document.getElementById("meshA").value,t=document.getElementById("meshB").value,e=hn[i](),n=hn[t]();Nv({soupA:e.soup,soupB:n.soup,nameA:e.label,nameB:n.label,projectName:"trimesh-boolean-demo"}).then(function(r){var s=URL.createObjectURL(r),a=document.createElement("a");a.href=s,a.download="trimesh-boolean-meshes.kap",a.click(),URL.revokeObjectURL(s)}).catch(function(r){alert("KAP export failed: "+r.message),console.error(r)})});runOp("input");

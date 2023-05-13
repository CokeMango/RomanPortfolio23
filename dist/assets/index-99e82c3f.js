(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const iu="151",jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pm=0,Hu=1,Rm=2,ru=1,Dm=2,mo=3,Oi=0,_n=1,ii=2,nr=0,ws=1,Vu=2,Gu=3,Wu=4,Im=5,gs=100,Om=101,Nm=102,Xu=103,qu=104,Um=200,Fm=201,km=202,zm=203,pd=204,md=205,Bm=206,Hm=207,Vm=208,Gm=209,Wm=210,Xm=0,qm=1,jm=2,xc=3,Ym=4,Km=5,$m=6,Zm=7,gd=0,Jm=1,Qm=2,Di=0,eg=1,tg=2,_d=3,ng=4,ig=5,xd=300,Os=301,Ns=302,vc=303,yc=304,ll=306,Us=1e3,Hn=1001,Ya=1002,Rt=1003,Mc=1004,Na=1005,Jt=1006,vd=1007,Ir=1008,Or=1009,rg=1010,sg=1011,yd=1012,og=1013,Sr=1014,ji=1015,Uo=1016,ag=1017,lg=1018,Ts=1020,cg=1021,Vn=1023,ug=1024,hg=1025,Er=1026,Fs=1027,fg=1028,dg=1029,pg=1030,mg=1031,gg=1033,Ml=33776,Sl=33777,bl=33778,wl=33779,ju=35840,Yu=35841,Ku=35842,$u=35843,_g=36196,Zu=37492,Ju=37496,Qu=37808,eh=37809,th=37810,nh=37811,ih=37812,rh=37813,sh=37814,oh=37815,ah=37816,lh=37817,ch=37818,uh=37819,hh=37820,fh=37821,Tl=36492,xg=36283,dh=36284,ph=36285,mh=36286,Fo=2300,ks=2301,El=2302,gh=2400,_h=2401,xh=2402,vg=2500,yg=0,Md=1,Sc=2,Nr=3e3,lt=3001,Mg=3200,Sg=3201,Sd=0,bg=1,zn="srgb",zs="srgb-linear",bd="display-p3",Al=7680,wg=519,bc=35044,vh="300 es",wc=1035;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yh=1234567;const bo=Math.PI/180,Bs=180/Math.PI;function si(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[a&255]+Kt[a>>8&255]+Kt[a>>16&255]+Kt[a>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Xt(a,e,t){return Math.max(e,Math.min(t,a))}function su(a,e){return(a%e+e)%e}function Tg(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Eg(a,e,t){return a!==e?(t-a)/(e-a):0}function wo(a,e,t){return(1-t)*a+t*e}function Ag(a,e,t,n){return wo(a,e,1-Math.exp(-t*n))}function Cg(a,e=1){return e-Math.abs(su(a,e*2)-e)}function Lg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Pg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Rg(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Dg(a,e){return a+Math.random()*(e-a)}function Ig(a){return a*(.5-Math.random())}function Og(a){a!==void 0&&(yh=a);let e=yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(a){return a*bo}function Ug(a){return a*Bs}function Tc(a){return(a&a-1)===0&&a!==0}function wd(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Td(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Fg(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),d=r((n-e)/2),_=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*_,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*_,o*c);break;case"ZYZ":a.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pi(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function dt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const kg={DEG2RAD:bo,RAD2DEG:Bs,generateUUID:si,clamp:Xt,euclideanModulo:su,mapLinear:Tg,inverseLerp:Eg,lerp:wo,damp:Ag,pingpong:Cg,smoothstep:Lg,smootherstep:Pg,randInt:Rg,randFloat:Dg,randFloatSpread:Ig,seededRandom:Og,degToRad:Ng,radToDeg:Ug,isPowerOfTwo:Tc,ceilPowerOfTwo:wd,floorPowerOfTwo:Td,setQuaternionFromProperEuler:Fg,normalize:dt,denormalize:Pi};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],v=i[4],x=i[7],M=i[2],E=i[5],A=i[8];return r[0]=s*g+o*S+l*M,r[3]=s*m+o*v+l*E,r[6]=s*p+o*x+l*A,r[1]=c*g+u*S+h*M,r[4]=c*m+u*v+h*E,r[7]=c*p+u*x+h*A,r[2]=f*g+d*S+_*M,r[5]=f*m+d*v+_*E,r[8]=f*p+d*x+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*r,d=c*r-s*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*s)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new tt;function Ed(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ko(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Es(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ll(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const zg=new tt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Bg=new tt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Hg(a){return a.convertSRGBToLinear().applyMatrix3(Bg)}function Vg(a){return a.applyMatrix3(zg).convertLinearToSRGB()}const Gg={[zs]:a=>a,[zn]:a=>a.convertSRGBToLinear(),[bd]:Hg},Wg={[zs]:a=>a,[zn]:a=>a.convertLinearToSRGB(),[bd]:Vg},bn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return zs},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=Gg[e],i=Wg[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let Kr;class Ad{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kr===void 0&&(Kr=ko("canvas")),Kr.width=e.width,Kr.height=e.height;const n=Kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Es(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Es(t[n]/255)*255):t[n]=Es(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Cd{constructor(e=null){this.isSource=!0,this.uuid=si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Pl(i[s].image)):r.push(Pl(i[s]))}else r=Pl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ad.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xg=0;class Vt extends Wr{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Hn,i=Hn,r=Jt,s=Ir,o=Vn,l=Or,c=Vt.DEFAULT_ANISOTROPY,u=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=si(),this.name="",this.source=new Cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=xd;Vt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,M=(p+1)/2,E=(u+f)/4,A=(h+g)/4,P=(_+m)/4;return v>x&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=A/n):x>M?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=P/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=P/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ur extends Wr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ld extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qg extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],d=r[s+1],_=r[s+2],g=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-o;const p=l*f+c*d+u*_+h*g,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,p*S);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const x=o*S;if(l=l*m+f*x,c=c*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],d=r[s+2],_=r[s+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,f=-r*t-s*n-o*i;return this.x=c*l+f*-r+u*-o-h*-s,this.y=u*l+f*-s+h*-r-c*-o,this.z=h*l+f*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new H,Mh=new gi;class Fi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox),$r.applyMatrix4(e.matrixWorld),this.union($r);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,o=r.count;s<o;s++)Mi.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Mi)}else i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox),$r.applyMatrix4(e.matrixWorld),this.union($r)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),Jo.subVectors(this.max,no),Zr.subVectors(e.a,no),Jr.subVectors(e.b,no),Qr.subVectors(e.c,no),zi.subVectors(Jr,Zr),Bi.subVectors(Qr,Jr),fr.subVectors(Zr,Qr);let t=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-fr.z,fr.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,fr.z,0,-fr.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-fr.y,fr.x,0];return!Dl(t,Zr,Jr,Qr,Jo)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,Zr,Jr,Qr,Jo))?!1:(Qo.crossVectors(zi,Bi),t=[Qo.x,Qo.y,Qo.z],Dl(t,Zr,Jr,Qr,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new H,new H,new H,new H,new H,new H,new H,new H],Mi=new H,$r=new Fi,Zr=new H,Jr=new H,Qr=new H,zi=new H,Bi=new H,fr=new H,no=new H,Jo=new H,Qo=new H,dr=new H;function Dl(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){dr.fromArray(a,r);const o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),l=e.dot(dr),c=t.dot(dr),u=n.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jg=new Fi,io=new H,Il=new H;class ki{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(io,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Il)),this.expandByPoint(io.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new H,Ol=new H,ea=new H,Hi=new H,Nl=new H,ta=new H,Ul=new H;class ou{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ol.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Ol);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ea),o=Hi.dot(this.direction),l=-Hi.dot(ea),c=Hi.lengthSq(),u=Math.abs(1-s*s);let h,f,d,_;if(u>0)if(h=s*l-o,f=s*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ol).addScaledVector(ea,f),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){Nl.subVectors(t,e),ta.subVectors(n,e),Ul.crossVectors(Nl,ta);let s=this.direction.dot(Ul),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(ta.crossVectors(Hi,ta));if(l<0)return null;const c=o*this.direction.dot(Nl.cross(Hi));if(c<0||l+c>s)return null;const u=-o*Hi.dot(Ul);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,o,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),s=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,d=s*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-s*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=s*u,t[9]=g-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=s*l,d=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=s*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,Kg)}lookAt(e,t,n){const i=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Vi.crossVectors(n,wn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Vi.crossVectors(n,wn)),Vi.normalize(),na.crossVectors(wn,Vi),i[0]=Vi.x,i[4]=na.x,i[8]=wn.x,i[1]=Vi.y,i[5]=na.y,i[9]=wn.y,i[2]=Vi.z,i[6]=na.z,i[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],v=n[7],x=n[11],M=n[15],E=i[0],A=i[4],P=i[8],y=i[12],w=i[1],q=i[5],F=i[9],N=i[13],k=i[2],V=i[6],te=i[10],z=i[14],j=i[3],K=i[7],L=i[11],Me=i[15];return r[0]=s*E+o*w+l*k+c*j,r[4]=s*A+o*q+l*V+c*K,r[8]=s*P+o*F+l*te+c*L,r[12]=s*y+o*N+l*z+c*Me,r[1]=u*E+h*w+f*k+d*j,r[5]=u*A+h*q+f*V+d*K,r[9]=u*P+h*F+f*te+d*L,r[13]=u*y+h*N+f*z+d*Me,r[2]=_*E+g*w+m*k+p*j,r[6]=_*A+g*q+m*V+p*K,r[10]=_*P+g*F+m*te+p*L,r[14]=_*y+g*N+m*z+p*Me,r[3]=S*E+v*w+x*k+M*j,r[7]=S*A+v*q+x*V+M*K,r[11]=S*P+v*F+x*te+M*L,r[15]=S*y+v*N+x*z+M*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+r*s*f-i*s*d+i*c*u-r*l*u)+m*(+t*c*h-t*o*d-r*s*h+n*s*d+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=h*m*c-g*f*c+g*l*d-o*m*d-h*l*p+o*f*p,v=_*f*c-u*m*c-_*l*d+s*m*d+u*l*p-s*f*p,x=u*g*c-_*h*c+_*o*d-s*g*d-u*o*p+s*h*p,M=_*h*l-u*g*l-_*o*f+s*g*f+u*o*m-s*h*m,E=t*S+n*v+i*x+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=S*A,e[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*A,e[4]=v*A,e[5]=(u*m*r-_*f*r+_*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(_*l*r-s*m*r-_*i*c+t*m*c+s*i*p-t*l*p)*A,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*d+t*l*d)*A,e[8]=x*A,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*p-t*h*p)*A,e[10]=(s*g*r-_*o*r+_*n*c-t*g*c-s*n*p+t*o*p)*A,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*d-t*o*d)*A,e[12]=M*A,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*A,e[14]=(_*o*i-s*g*i-_*n*l+t*g*l+s*n*m-t*o*m)*A,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,f=r*c,d=r*u,_=r*h,g=s*u,m=s*h,p=o*h,S=l*c,v=l*u,x=l*h,M=n.x,E=n.y,A=n.z;return i[0]=(1-(g+p))*M,i[1]=(d+x)*M,i[2]=(_-v)*M,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(_+v)*A,i[9]=(m-S)*A,i[10]=(1-(f+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=es.set(i[0],i[1],i[2]).length();const s=es.set(i[4],i[5],i[6]).length(),o=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],$n.copy(this);const c=1/r,u=1/s,h=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+r)/(s-r),d=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,f=(n+i)*c,d=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new H,$n=new Qe,Yg=new H(0,0,0),Kg=new H(1,1,1),Vi=new H,na=new H,wn=new H,Sh=new Qe,bh=new gi;class cl{constructor(e=0,t=0,n=0,i=cl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bh.setFromEuler(this),this.setFromQuaternion(bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cl.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $g=0;const wh=new H,ts=new gi,bi=new Qe,ia=new H,ro=new H,Zg=new H,Jg=new gi,Th=new H(1,0,0),Eh=new H(0,1,0),Ah=new H(0,0,1),Qg={type:"added"},Ch={type:"removed"};class St extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new H,t=new cl,n=new gi,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new tt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return wh.copy(e).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ro,ia,this.up):bi.lookAt(ia,ro,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(bi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ch)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}St.DEFAULT_UP=new H(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new H,wi=new H,Fl=new H,Ti=new H,ns=new H,is=new H,Lh=new H,kl=new H,zl=new H,Bl=new H;let ra=!1;class ti{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zn.subVectors(e,t),i.cross(Zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Zn.subVectors(i,t),wi.subVectors(n,t),Fl.subVectors(e,t);const s=Zn.dot(Zn),o=Zn.dot(wi),l=Zn.dot(Fl),c=wi.dot(wi),u=wi.dot(Fl),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,_=(s*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ti),Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,n,i,r,s,o,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(e,t,n,i,r,s,o,l)}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,Ti),l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(s,Ti.y),l.addScaledVector(o,Ti.z),l}static isFrontFacing(e,t,n,i){return Zn.subVectors(n,t),wi.subVectors(e,t),Zn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Zn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;ns.subVectors(i,n),is.subVectors(r,n),kl.subVectors(e,n);const l=ns.dot(kl),c=is.dot(kl);if(l<=0&&c<=0)return t.copy(n);zl.subVectors(e,i);const u=ns.dot(zl),h=is.dot(zl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(ns,s);Bl.subVectors(e,r);const d=ns.dot(Bl),_=is.dot(Bl);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(is,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Lh.subVectors(r,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Lh,o);const p=1/(m+g+f);return s=g*p,o=f*p,t.copy(n).addScaledVector(ns,s).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let e_=0;class di extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=si(),this.name="",this.type="Material",this.blending=ws,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Al,this.stencilZFail=Al,this.stencilZPass=Al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Hl(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bn.workingColorSpace){return this.r=e,this.g=t,this.b=n,bn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bn.workingColorSpace){if(e=su(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Hl(s,r,e+1/3),this.g=Hl(s,r,e),this.b=Hl(s,r,e-1/3)}return bn.toWorkingColorSpace(this,i),this}setStyle(e,t=zn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,bn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,bn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){const n=Rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=Ll(e.r),this.g=Ll(e.g),this.b=Ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return bn.fromWorkingColorSpace($t.copy(this),e),Xt($t.r*255,0,255)<<16^Xt($t.g*255,0,255)<<8^Xt($t.b*255,0,255)<<0}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bn.workingColorSpace){bn.fromWorkingColorSpace($t.copy(this),t);const n=$t.r,i=$t.g,r=$t.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bn.workingColorSpace){return bn.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=zn){bn.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,i=$t.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Jn),Jn.h+=e,Jn.s+=t,Jn.l+=n,this.setHSL(Jn.h,Jn.s,Jn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(sa);const n=wo(Jn.h,sa.h,t),i=wo(Jn.s,sa.s,t),r=wo(Jn.l,sa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ke;Ke.NAMES=Rd;class Yi extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new H,oa=new qe;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Dd extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Id extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qn extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let t_=0;const Nn=new Qe,Vl=new St,rs=new H,Tn=new Fi,so=new Fi,zt=new H;class Kn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?Id:Dd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];so.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Tn.min,so.min),Tn.expandByPoint(zt),zt.addVectors(Tn.max,so.max),Tn.expandByPoint(zt)):(Tn.expandByPoint(so.min),Tn.expandByPoint(so.max))}Tn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),zt.add(rs)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new H,u[w]=new H;const h=new H,f=new H,d=new H,_=new qe,g=new qe,m=new qe,p=new H,S=new H;function v(w,q,F){h.fromArray(i,w*3),f.fromArray(i,q*3),d.fromArray(i,F*3),_.fromArray(s,w*2),g.fromArray(s,q*2),m.fromArray(s,F*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);const N=1/(g.x*m.y-m.x*g.y);isFinite(N)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(N),S.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(N),c[w].add(p),c[q].add(p),c[F].add(p),u[w].add(S),u[q].add(S),u[F].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let w=0,q=x.length;w<q;++w){const F=x[w],N=F.start,k=F.count;for(let V=N,te=N+k;V<te;V+=3)v(n[V+0],n[V+1],n[V+2])}const M=new H,E=new H,A=new H,P=new H;function y(w){A.fromArray(r,w*3),P.copy(A);const q=c[w];M.copy(q),M.sub(A.multiplyScalar(A.dot(q))).normalize(),E.crossVectors(P,q);const N=E.dot(u[w])<0?-1:1;l[w*4]=M.x,l[w*4+1]=M.y,l[w*4+2]=M.z,l[w*4+3]=N}for(let w=0,q=x.length;w<q;++w){const F=x[w],N=F.start,k=F.count;for(let V=N,te=N+k;V<te;V+=3)y(n[V+0]),y(n[V+1]),y(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new H,r=new H,s=new H,o=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Yt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new Qe,li=new ou,aa=new ki,Rh=new H,ss=new H,os=new H,as=new H,Gl=new H,la=new H,ca=new qe,ua=new qe,ha=new qe,Dh=new H,Ih=new H,Oh=new H,fa=new H,da=new H;class en extends St{constructor(e=new Kn,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Gl.fromBufferAttribute(h,e),s?la.addScaledVector(Gl,u):la.addScaledVector(Gl.sub(t),u))}t.add(la)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),li.copy(e.ray).recast(e.near),aa.containsPoint(li.origin)===!1&&(li.intersectSphere(aa,Rh)===null||li.origin.distanceToSquared(Rh)>(e.far-e.near)**2))||(Ph.copy(r).invert(),li.copy(e.ray).applyMatrix4(Ph),n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=i[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,M=v;x<M;x+=3){const E=o.getX(x),A=o.getX(x+1),P=o.getX(x+2);s=pa(this,p,e,li,c,u,h,E,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=pa(this,i,e,li,c,u,h,S,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=i[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,M=v;x<M;x+=3){const E=x,A=x+1,P=x+2;s=pa(this,p,e,li,c,u,h,E,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=m,v=m+1,x=m+2;s=pa(this,i,e,li,c,u,h,S,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function n_(a,e,t,n,i,r,s,o){let l;if(e.side===_n?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===Oi,o),l===null)return null;da.copy(o),da.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:a}}function pa(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,ss),a.getVertexPosition(l,os),a.getVertexPosition(c,as);const u=n_(a,e,t,n,ss,os,as,fa);if(u){i&&(ca.fromBufferAttribute(i,o),ua.fromBufferAttribute(i,l),ha.fromBufferAttribute(i,c),u.uv=ti.getInterpolation(fa,ss,os,as,ca,ua,ha,new qe)),r&&(ca.fromBufferAttribute(r,o),ua.fromBufferAttribute(r,l),ha.fromBufferAttribute(r,c),u.uv2=ti.getInterpolation(fa,ss,os,as,ca,ua,ha,new qe)),s&&(Dh.fromBufferAttribute(s,o),Ih.fromBufferAttribute(s,l),Oh.fromBufferAttribute(s,c),u.normal=ti.getInterpolation(fa,ss,os,as,Dh,Ih,Oh,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};ti.getNormal(ss,os,as,h.normal),u.face=h}return u}class Yo extends Kn{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,s,r,0),_("z","y","x",1,-1,n,t,-e,s,r,1),_("x","z","y",1,1,e,n,t,i,s,2),_("x","z","y",1,-1,e,n,-t,i,s,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qn(c,3)),this.setAttribute("normal",new qn(u,3)),this.setAttribute("uv",new qn(h,2));function _(g,m,p,S,v,x,M,E,A,P,y){const w=x/A,q=M/P,F=x/2,N=M/2,k=E/2,V=A+1,te=P+1;let z=0,j=0;const K=new H;for(let L=0;L<te;L++){const Me=L*q-N;for(let ue=0;ue<V;ue++){const Z=ue*w-F;K[g]=Z*S,K[m]=Me*v,K[p]=k,c.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[p]=E>0?1:-1,u.push(K.x,K.y,K.z),h.push(ue/A),h.push(1-L/P),z+=1}}for(let L=0;L<P;L++)for(let Me=0;Me<A;Me++){const ue=f+Me+V*L,Z=f+Me+V*(L+1),ee=f+(Me+1)+V*(L+1),de=f+(Me+1)+V*L;l.push(ue,Z,de),l.push(Z,ee,de),j+=6}o.addGroup(d,j,y),d+=j,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ln(a){const e={};for(let t=0;t<a.length;t++){const n=Hs(a[t]);for(const i in n)e[i]=n[i]}return e}function i_(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Od(a){return a.getRenderTarget()===null&&a.outputEncoding===lt?zn:zs}const r_={clone:Hs,merge:ln};var s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Nd=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class hn extends Nd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class a_ extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new hn(ls,cs,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new hn(ls,cs,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new hn(ls,cs,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new hn(ls,cs,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new hn(ls,cs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new hn(ls,cs,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Di,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ud extends Vt{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l_ extends Ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ud(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yo(5,5,5),r=new Fr({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:nr});r.uniforms.tEquirect.value=t;const s=new en(i,r),o=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Jt),new a_(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Wl=new H,c_=new H,u_=new tt;class _r{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Wl.subVectors(n,t).cross(c_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||u_.getNormalMatrix(e),i=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new ki,ma=new H;class au{constructor(e=new _r,t=new _r,n=new _r,i=new _r,r=new _r,s=new _r){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],_=n[10],g=n[11],m=n[12],p=n[13],S=n[14],v=n[15];return t[0].setComponents(o-i,h-l,g-f,v-m).normalize(),t[1].setComponents(o+i,h+l,g+f,v+m).normalize(),t[2].setComponents(o+r,h+c,g+d,v+p).normalize(),t[3].setComponents(o-r,h-c,g-d,v-p).normalize(),t[4].setComponents(o-s,h-u,g-_,v-S).normalize(),t[5].setComponents(o+s,h+u,g+_,v+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ma.x=i.normal.x>0?e.max.x:e.min.x,ma.y=i.normal.y>0?e.max.y:e.min.y,ma.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fd(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function h_(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=a.createBuffer();a.bindBuffer(u,d),a.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;a.bindBuffer(h,c),d.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class ul extends Kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*f-s;for(let v=0;v<c;v++){const x=v*h-r;_.push(x,-S,0),g.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const v=S+c*p,x=S+c*(p+1),M=S+1+c*(p+1),E=S+1+c*p;d.push(v,x,E),d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(g,3)),this.setAttribute("uv",new qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}var f_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,m_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,__=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_="vec3 transformed = vec3( position );",v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M_=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,S_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,R_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,I_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
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
}`,$_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,t0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,a0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,b0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,w0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,nx=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ix=`#ifdef USE_UV
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
#endif`,rx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,sx=`#ifdef USE_UV
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Sx=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ex=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Dx=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ox=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`uniform float size;
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
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,kx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$e={alphamap_fragment:f_,alphamap_pars_fragment:d_,alphatest_fragment:p_,alphatest_pars_fragment:m_,aomap_fragment:g_,aomap_pars_fragment:__,begin_vertex:x_,beginnormal_vertex:v_,bsdfs:y_,iridescence_fragment:M_,bumpmap_pars_fragment:S_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:w_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:E_,color_fragment:A_,color_pars_fragment:C_,color_pars_vertex:L_,color_vertex:P_,common:R_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:I_,displacementmap_pars_vertex:O_,displacementmap_vertex:N_,emissivemap_fragment:U_,emissivemap_pars_fragment:F_,encodings_fragment:k_,encodings_pars_fragment:z_,envmap_fragment:B_,envmap_common_pars_fragment:H_,envmap_pars_fragment:V_,envmap_pars_vertex:G_,envmap_physical_pars_fragment:t0,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:q_,fog_fragment:j_,fog_pars_fragment:Y_,gradientmap_pars_fragment:K_,lightmap_fragment:$_,lightmap_pars_fragment:Z_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:Q_,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:r0,lights_phong_pars_fragment:s0,lights_physical_fragment:o0,lights_physical_pars_fragment:a0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:u0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:_0,map_particle_pars_fragment:x0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:y0,morphcolor_vertex:M0,morphnormal_vertex:S0,morphtarget_pars_vertex:b0,morphtarget_vertex:w0,normal_fragment_begin:T0,normal_fragment_maps:E0,normal_pars_fragment:A0,normal_pars_vertex:C0,normal_vertex:L0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:O0,output_fragment:N0,packing:U0,premultiplied_alpha_fragment:F0,project_vertex:k0,dithering_fragment:z0,dithering_pars_fragment:B0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:q0,skinbase_vertex:j0,skinning_pars_vertex:Y0,skinning_vertex:K0,skinnormal_vertex:$0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:rx,uv_vertex:sx,worldpos_vertex:ox,background_vert:ax,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:ux,cube_vert:hx,cube_frag:fx,depth_vert:dx,depth_frag:px,distanceRGBA_vert:mx,distanceRGBA_frag:gx,equirect_vert:_x,equirect_frag:xx,linedashed_vert:vx,linedashed_frag:yx,meshbasic_vert:Mx,meshbasic_frag:Sx,meshlambert_vert:bx,meshlambert_frag:wx,meshmatcap_vert:Tx,meshmatcap_frag:Ex,meshnormal_vert:Ax,meshnormal_frag:Cx,meshphong_vert:Lx,meshphong_frag:Px,meshphysical_vert:Rx,meshphysical_frag:Dx,meshtoon_vert:Ix,meshtoon_frag:Ox,points_vert:Nx,points_frag:Ux,shadow_vert:Fx,shadow_frag:kx,sprite_vert:zx,sprite_frag:Bx},xe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaTest:{value:0}}},ui={basic:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:ln([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:ln([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:ln([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:ln([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:ln([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:ln([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:ln([xe.common,xe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:ln([xe.lights,xe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ui.physical={uniforms:ln([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ga={r:0,b:0,g:0};function Hx(a,e,t,n,i,r,s){const o=new Ke(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(m,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v));const x=a.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?g(o,l):v&&v.isColor&&(g(v,1),S=!0),(a.autoClear||S)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ll)?(u===void 0&&(u=new en(new Yo(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Hs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.encoding!==lt,(h!==v||f!==v.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new en(new ul(2,2),new Fr({name:"BackgroundMaterial",uniforms:Hs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.encoding!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(ga,Od(a)),n.buffers.color.setClear(ga.r,ga.g,ga.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Vx(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(k,V,te,z,j){let K=!1;if(s){const L=g(z,te,V);c!==L&&(c=L,d(c.object)),K=p(k,z,te,j),K&&S(k,z,te,j)}else{const L=V.wireframe===!0;(c.geometry!==z.id||c.program!==te.id||c.wireframe!==L)&&(c.geometry=z.id,c.program=te.id,c.wireframe=L,K=!0)}j!==null&&t.update(j,34963),(K||u)&&(u=!1,P(k,V,te,z),j!==null&&a.bindBuffer(34963,t.get(j).buffer))}function f(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function d(k){return n.isWebGL2?a.bindVertexArray(k):r.bindVertexArrayOES(k)}function _(k){return n.isWebGL2?a.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function g(k,V,te){const z=te.wireframe===!0;let j=o[k.id];j===void 0&&(j={},o[k.id]=j);let K=j[V.id];K===void 0&&(K={},j[V.id]=K);let L=K[z];return L===void 0&&(L=m(f()),K[z]=L),L}function m(k){const V=[],te=[],z=[];for(let j=0;j<i;j++)V[j]=0,te[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:z,object:k,attributes:{},index:null}}function p(k,V,te,z){const j=c.attributes,K=V.attributes;let L=0;const Me=te.getAttributes();for(const ue in Me)if(Me[ue].location>=0){const ee=j[ue];let de=K[ue];if(de===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(de=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(de=k.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;L++}return c.attributesNum!==L||c.index!==z}function S(k,V,te,z){const j={},K=V.attributes;let L=0;const Me=te.getAttributes();for(const ue in Me)if(Me[ue].location>=0){let ee=K[ue];ee===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor));const de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),j[ue]=de,L++}c.attributes=j,c.attributesNum=L,c.index=z}function v(){const k=c.newAttributes;for(let V=0,te=k.length;V<te;V++)k[V]=0}function x(k){M(k,0)}function M(k,V){const te=c.newAttributes,z=c.enabledAttributes,j=c.attributeDivisors;te[k]=1,z[k]===0&&(a.enableVertexAttribArray(k),z[k]=1),j[k]!==V&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,V),j[k]=V)}function E(){const k=c.newAttributes,V=c.enabledAttributes;for(let te=0,z=V.length;te<z;te++)V[te]!==k[te]&&(a.disableVertexAttribArray(te),V[te]=0)}function A(k,V,te,z,j,K){n.isWebGL2===!0&&(te===5124||te===5125)?a.vertexAttribIPointer(k,V,te,j,K):a.vertexAttribPointer(k,V,te,z,j,K)}function P(k,V,te,z){if(n.isWebGL2===!1&&(k.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=z.attributes,K=te.getAttributes(),L=V.defaultAttributeValues;for(const Me in K){const ue=K[Me];if(ue.location>=0){let Z=j[Me];if(Z===void 0&&(Me==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),Me==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),Z!==void 0){const ee=Z.normalized,de=Z.itemSize,fe=t.get(Z);if(fe===void 0)continue;const R=fe.buffer,D=fe.type,O=fe.bytesPerElement;if(Z.isInterleavedBufferAttribute){const X=Z.data,se=X.stride,re=Z.offset;if(X.isInstancedInterleavedBuffer){for(let ie=0;ie<ue.locationSize;ie++)M(ue.location+ie,X.meshPerAttribute);k.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ie=0;ie<ue.locationSize;ie++)x(ue.location+ie);a.bindBuffer(34962,R);for(let ie=0;ie<ue.locationSize;ie++)A(ue.location+ie,de/ue.locationSize,D,ee,se*O,(re+de/ue.locationSize*ie)*O)}else{if(Z.isInstancedBufferAttribute){for(let X=0;X<ue.locationSize;X++)M(ue.location+X,Z.meshPerAttribute);k.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let X=0;X<ue.locationSize;X++)x(ue.location+X);a.bindBuffer(34962,R);for(let X=0;X<ue.locationSize;X++)A(ue.location+X,de/ue.locationSize,D,ee,de*O,de/ue.locationSize*X*O)}}else if(L!==void 0){const ee=L[Me];if(ee!==void 0)switch(ee.length){case 2:a.vertexAttrib2fv(ue.location,ee);break;case 3:a.vertexAttrib3fv(ue.location,ee);break;case 4:a.vertexAttrib4fv(ue.location,ee);break;default:a.vertexAttrib1fv(ue.location,ee)}}}}E()}function y(){F();for(const k in o){const V=o[k];for(const te in V){const z=V[te];for(const j in z)_(z[j].object),delete z[j];delete V[te]}delete o[k]}}function w(k){if(o[k.id]===void 0)return;const V=o[k.id];for(const te in V){const z=V[te];for(const j in z)_(z[j].object),delete z[j];delete V[te]}delete o[k.id]}function q(k){for(const V in o){const te=o[V];if(te[k.id]===void 0)continue;const z=te[k.id];for(const j in z)_(z[j].object),delete z[j];delete te[k.id]}}function F(){N(),u=!0,c!==l&&(c=l,d(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:x,disableUnusedAttributes:E}}function Gx(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=a,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function Wx(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),d=a.getParameter(3379),_=a.getParameter(34076),g=a.getParameter(34921),m=a.getParameter(36347),p=a.getParameter(36348),S=a.getParameter(36349),v=f>0,x=s||e.has("OES_texture_float"),M=v&&x,E=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function Xx(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new _r,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=a.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,v=S*4;let x=p.clippingState||null;l.value=x,x=u(_,f,v,d);for(let M=0;M!==v;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==g;++v,x+=4)s.copy(h[v]).applyMatrix4(S,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function qx(a){let e=new WeakMap;function t(s,o){return o===vc?s.mapping=Os:o===yc&&(s.mapping=Ns),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===vc||o===yc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new l_(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class hl extends Nd{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,Nh=[.125,.215,.35,.446,.526,.582],Mr=20,Xl=new hl,Uh=new Ke;let ql=null;const xr=(1+Math.sqrt(5))/2,us=1/xr,Fh=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,xr,us),new H(0,xr,-us),new H(us,0,xr),new H(-us,0,xr),new H(xr,us,0),new H(-xr,us,0)];class kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ql=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ql),e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Uo,format:Vn,encoding:Nr,depthBuffer:!1},i=zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jx(r)),this._blurMaterial=Yx(r,e,t)}return i}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,n,i){const o=new hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Uh),u.toneMapping=Di,u.autoClear=!1;const d=new Yi({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new en(new Yo,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Uh),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;_a(i,S*v,p>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Os||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new en(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_a(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Xl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Fh[(i-1)%Fh.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mr-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Mr;m>Mr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const p=[];let S=0;for(let A=0;A<Mr;++A){const P=A/g,y=Math.exp(-P*P/2);p.push(y),A===0?S+=y:A<m&&(S+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const x=this._sizeLods[i],M=3*x*(i>v-vs?i-v+vs:0),E=4*(this._cubeSize-x);_a(t,M,E,3*x,2*x),l.setRenderTarget(t),l.render(h,Xl)}}function jx(a){const e=[],t=[],n=[];let i=a;const r=a-vs+1+Nh.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-vs?l=Nh[s-a+vs-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),v=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,P=E>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];S.set(y,g*_*E),v.set(f,m*_*E);const w=[E,E,E,E,E,E];x.set(w,p*_*E)}const M=new Kn;M.setAttribute("position",new Yt(S,g)),M.setAttribute("uv",new Yt(v,m)),M.setAttribute("faceIndex",new Yt(x,p)),e.push(M),i>vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zh(a,e,t){const n=new Ur(a,e,t);return n.texture.mapping=ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Yx(a,e,t){const n=new Float32Array(Mr),i=new H(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lu(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Bh(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Hh(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}function Kx(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vc||l===yc,u=l===Os||l===Ns;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new kh(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new kh(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function $x(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zx(a,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],34962)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let v=0,x=S.length;v<x;v+=3){const M=S[v+0],E=S[v+1],A=S[v+2];f.push(M,E,E,A,A,M)}}else{const S=_.array;g=_.version;for(let v=0,x=S.length/3-1;v<x;v+=3){const M=v+0,E=v+1,A=v+2;f.push(M,E,E,A,A,M)}}const m=new(Ed(f)?Id:Dd)(f,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Jx(a,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){a.drawElements(r,d,o,f*l),t.update(d,r,1)}function h(f,d,_){if(_===0)return;let g,m;if(i)g=a,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,o,f*l,_),t.update(d,r,_)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Qx(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ev(a,e){return a[0]-e[0]}function tv(a,e){return Math.abs(e[1])-Math.abs(a[1])}function nv(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let V=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var d=V;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),M===!0&&(y=3);let w=u.attributes.position.count*y,q=1;w>e.maxTextureSize&&(q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const F=new Float32Array(w*q*4*g),N=new Ld(F,w,q,g);N.type=ji,N.needsUpdate=!0;const k=y*4;for(let te=0;te<g;te++){const z=E[te],j=A[te],K=P[te],L=w*q*4*te;for(let Me=0;Me<z.count;Me++){const ue=Me*k;v===!0&&(s.fromBufferAttribute(z,Me),F[L+ue+0]=s.x,F[L+ue+1]=s.y,F[L+ue+2]=s.z,F[L+ue+3]=0),x===!0&&(s.fromBufferAttribute(j,Me),F[L+ue+4]=s.x,F[L+ue+5]=s.y,F[L+ue+6]=s.z,F[L+ue+7]=0),M===!0&&(s.fromBufferAttribute(K,Me),F[L+ue+8]=s.x,F[L+ue+9]=s.y,F[L+ue+10]=s.z,F[L+ue+11]=K.itemSize===4?s.w:1)}}m={count:g,texture:N,size:new qe(w,q)},r.set(u,m),u.addEventListener("dispose",V)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(a,"morphTargetBaseInfluence",S),h.getUniforms().setValue(a,"morphTargetInfluences",f),h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=f[x]}g.sort(tv);for(let x=0;x<8;x++)x<_&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(ev);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const M=o[x],E=M[0],A=M[1];E!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+x)!==m[E]&&u.setAttribute("morphTarget"+x,m[E]),p&&u.getAttribute("morphNormal"+x)!==p[E]&&u.setAttribute("morphNormal"+x,p[E]),i[x]=A,S+=A):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(a,"morphTargetBaseInfluence",v),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function iv(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const kd=new Vt,zd=new Ld,Bd=new qg,Hd=new Ud,Vh=[],Gh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function Zs(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Vh[i];if(r===void 0&&(r=new Float32Array(i),Vh[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Ut(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ft(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function fl(a,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function rv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function sv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;a.uniform2fv(this.addr,e),Ft(t,e)}}function ov(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;a.uniform3fv(this.addr,e),Ft(t,e)}}function av(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;a.uniform4fv(this.addr,e),Ft(t,e)}}function lv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;qh.set(n),a.uniformMatrix2fv(this.addr,!1,qh),Ft(t,n)}}function cv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Xh.set(n),a.uniformMatrix3fv(this.addr,!1,Xh),Ft(t,n)}}function uv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Wh.set(n),a.uniformMatrix4fv(this.addr,!1,Wh),Ft(t,n)}}function hv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function fv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;a.uniform2iv(this.addr,e),Ft(t,e)}}function dv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;a.uniform3iv(this.addr,e),Ft(t,e)}}function pv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;a.uniform4iv(this.addr,e),Ft(t,e)}}function mv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function gv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;a.uniform2uiv(this.addr,e),Ft(t,e)}}function _v(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;a.uniform3uiv(this.addr,e),Ft(t,e)}}function xv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;a.uniform4uiv(this.addr,e),Ft(t,e)}}function vv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||kd,i)}function yv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bd,i)}function Mv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hd,i)}function Sv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zd,i)}function bv(a){switch(a){case 5126:return rv;case 35664:return sv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}function wv(a,e){a.uniform1fv(this.addr,e)}function Tv(a,e){const t=Zs(e,this.size,2);a.uniform2fv(this.addr,t)}function Ev(a,e){const t=Zs(e,this.size,3);a.uniform3fv(this.addr,t)}function Av(a,e){const t=Zs(e,this.size,4);a.uniform4fv(this.addr,t)}function Cv(a,e){const t=Zs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Lv(a,e){const t=Zs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Pv(a,e){const t=Zs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Rv(a,e){a.uniform1iv(this.addr,e)}function Dv(a,e){a.uniform2iv(this.addr,e)}function Iv(a,e){a.uniform3iv(this.addr,e)}function Ov(a,e){a.uniform4iv(this.addr,e)}function Nv(a,e){a.uniform1uiv(this.addr,e)}function Uv(a,e){a.uniform2uiv(this.addr,e)}function Fv(a,e){a.uniform3uiv(this.addr,e)}function kv(a,e){a.uniform4uiv(this.addr,e)}function zv(a,e,t){const n=this.cache,i=e.length,r=fl(t,i);Ut(n,r)||(a.uniform1iv(this.addr,r),Ft(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||kd,r[s])}function Bv(a,e,t){const n=this.cache,i=e.length,r=fl(t,i);Ut(n,r)||(a.uniform1iv(this.addr,r),Ft(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Bd,r[s])}function Hv(a,e,t){const n=this.cache,i=e.length,r=fl(t,i);Ut(n,r)||(a.uniform1iv(this.addr,r),Ft(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Hd,r[s])}function Vv(a,e,t){const n=this.cache,i=e.length,r=fl(t,i);Ut(n,r)||(a.uniform1iv(this.addr,r),Ft(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||zd,r[s])}function Gv(a){switch(a){case 5126:return wv;case 35664:return Tv;case 35665:return Ev;case 35666:return Av;case 35674:return Cv;case 35675:return Lv;case 35676:return Pv;case 5124:case 35670:return Rv;case 35667:case 35671:return Dv;case 35668:case 35672:return Iv;case 35669:case 35673:return Ov;case 5125:return Nv;case 36294:return Uv;case 36295:return Fv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Vv}}class Wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=bv(t.type)}}class Xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Gv(t.type)}}class qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function jh(a,e){a.seq.push(e),a.map[e.id]=e}function jv(a,e,t){const n=a.name,i=n.length;for(jl.lastIndex=0;;){const r=jl.exec(n),s=jl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){jh(t,c===void 0?new Wv(o,a,e):new Xv(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new qv(o),jh(t,h)),t=h}}}class Ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);jv(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Yh(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Yv=0;function Kv(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function $v(a){switch(a){case Nr:return["Linear","( value )"];case lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Kh(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Kv(a.getShaderSource(e),s)}else return i}function Zv(a,e){const t=$v(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Jv(a,e){let t;switch(e){case eg:t="Linear";break;case tg:t="Reinhard";break;case _d:t="OptimizedCineon";break;case ng:t="ACESFilmic";break;case ig:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qv(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(go).join(`
`)}function ey(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ty(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function go(a){return a!==""}function $h(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(a){return a.replace(ny,iy)}function iy(a,e){const t=$e[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ec(t)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(a){return a.replace(ry,sy)}function sy(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oy(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Dm?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===mo&&(e="SHADOWMAP_TYPE_VSM"),e}function ay(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Os:case Ns:e="ENVMAP_TYPE_CUBE";break;case ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ly(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function cy(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case gd:e="ENVMAP_BLENDING_MULTIPLY";break;case Jm:e="ENVMAP_BLENDING_MIX";break;case Qm:e="ENVMAP_BLENDING_ADD";break}return e}function uy(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hy(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=oy(t),c=ay(t),u=ly(t),h=cy(t),f=uy(t),d=t.isWebGL2?"":Qv(t),_=ey(r),g=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(go).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(go).join(`
`),p.length>0&&(p+=`
`)):(m=[Qh(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),p=[d,Qh(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?$e.tonemapping_pars_fragment:"",t.toneMapping!==Di?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.encodings_pars_fragment,Zv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),s=Ec(s),s=$h(s,t),s=Zh(s,t),o=Ec(o),o=$h(o,t),o=Zh(o,t),s=Jh(s),o=Jh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+s,x=S+p+o,M=Yh(i,35633,v),E=Yh(i,35632,x);if(i.attachShader(g,M),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),a.debug.checkShaderErrors){const y=i.getProgramInfoLog(g).trim(),w=i.getShaderInfoLog(M).trim(),q=i.getShaderInfoLog(E).trim();let F=!0,N=!0;if(i.getProgramParameter(g,35714)===!1)if(F=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,M,E);else{const k=Kh(i,M,"vertex"),V=Kh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+y+`
`+k+`
`+V)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(w===""||q==="")&&(N=!1);N&&(this.diagnostics={runnable:F,programLog:y,vertexShader:{log:w,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(M),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Ua(i,g)),A};let P;return this.getAttributes=function(){return P===void 0&&(P=ty(i,g)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Yv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let fy=0;class dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new py(e),t.set(e,n)),n}}class py{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}}function my(a,e,t,n,i,r,s){const o=new Pd,l=new dy,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===1?"uv2":"uv"}function m(y,w,q,F,N){const k=F.fog,V=N.geometry,te=y.isMeshStandardMaterial?F.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||te),j=z&&z.mapping===ll?z.image.height:null,K=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const L=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Me=L!==void 0?L.length:0;let ue=0;V.morphAttributes.position!==void 0&&(ue=1),V.morphAttributes.normal!==void 0&&(ue=2),V.morphAttributes.color!==void 0&&(ue=3);let Z,ee,de,fe;if(K){const _e=ui[K];Z=_e.vertexShader,ee=_e.fragmentShader}else Z=y.vertexShader,ee=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),fe=l.getFragmentShaderID(y);const R=a.getRenderTarget(),D=N.isInstancedMesh===!0,O=!!y.map,X=!!y.matcap,se=!!z,re=!!y.aoMap,ie=!!y.lightMap,me=!!y.bumpMap,Ee=!!y.normalMap,Re=!!y.displacementMap,G=!!y.emissiveMap,Be=!!y.metalnessMap,we=!!y.roughnessMap,Xe=y.clearcoat>0,st=y.iridescence>0,C=y.sheen>0,b=y.transmission>0,J=Xe&&!!y.clearcoatMap,ce=Xe&&!!y.clearcoatNormalMap,ae=Xe&&!!y.clearcoatRoughnessMap,pe=st&&!!y.iridescenceMap,I=st&&!!y.iridescenceThicknessMap,oe=C&&!!y.sheenColorMap,Y=C&&!!y.sheenRoughnessMap,ge=!!y.specularMap,be=!!y.specularColorMap,Le=!!y.specularIntensityMap,ye=b&&!!y.transmissionMap,Ae=b&&!!y.thicknessMap,ke=!!y.gradientMap,ve=!!y.alphaMap,ct=y.alphaTest>0,U=!!y.extensions,Q=!!V.attributes.uv2;return{isWebGL2:u,shaderID:K,shaderName:y.type,vertexShader:Z,fragmentShader:ee,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:D,instancingColor:D&&N.instanceColor!==null,supportsVertexTextures:f,outputEncoding:R===null?a.outputEncoding:R.isXRRenderTarget===!0?R.texture.encoding:Nr,map:O,matcap:X,envMap:se,envMapMode:se&&z.mapping,envMapCubeUVHeight:j,aoMap:re,lightMap:ie,bumpMap:me,normalMap:Ee,displacementMap:f&&Re,emissiveMap:G,normalMapObjectSpace:Ee&&y.normalMapType===bg,normalMapTangentSpace:Ee&&y.normalMapType===Sd,decodeVideoTexture:O&&y.map.isVideoTexture===!0&&y.map.encoding===lt,metalnessMap:Be,roughnessMap:we,clearcoat:Xe,clearcoatMap:J,clearcoatNormalMap:ce,clearcoatRoughnessMap:ae,iridescence:st,iridescenceMap:pe,iridescenceThicknessMap:I,sheen:C,sheenColorMap:oe,sheenRoughnessMap:Y,specularMap:ge,specularColorMap:be,specularIntensityMap:Le,transmission:b,transmissionMap:ye,thicknessMap:Ae,gradientMap:ke,opaque:y.transparent===!1&&y.blending===ws,alphaMap:ve,alphaTest:ct,combine:y.combine,mapUv:O&&g(y.map.channel),aoMapUv:re&&g(y.aoMap.channel),lightMapUv:ie&&g(y.lightMap.channel),bumpMapUv:me&&g(y.bumpMap.channel),normalMapUv:Ee&&g(y.normalMap.channel),displacementMapUv:Re&&g(y.displacementMap.channel),emissiveMapUv:G&&g(y.emissiveMap.channel),metalnessMapUv:Be&&g(y.metalnessMap.channel),roughnessMapUv:we&&g(y.roughnessMap.channel),clearcoatMapUv:J&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:I&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Y&&g(y.sheenRoughnessMap.channel),specularMapUv:ge&&g(y.specularMap.channel),specularColorMapUv:be&&g(y.specularColorMap.channel),specularIntensityMapUv:Le&&g(y.specularIntensityMap.channel),transmissionMapUv:ye&&g(y.transmissionMap.channel),thicknessMapUv:Ae&&g(y.thicknessMap.channel),alphaMapUv:ve&&g(y.alphaMap.channel),vertexTangents:Ee&&!!V.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs2:Q,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(O||ve),fog:!!k,useFog:y.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&q.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:Di,useLegacyLights:a.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ii,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:U&&y.extensions.derivatives===!0,extensionFragDepth:U&&y.extensions.fragDepth===!0,extensionDrawBuffers:U&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)w.push(q),w.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(S(w,y),v(w,y),w.push(a.outputEncoding)),w.push(y.customProgramCacheKey),w.join()}function S(y,w){y.push(w.precision),y.push(w.outputEncoding),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUvs2&&o.enable(13),w.vertexTangents&&o.enable(14),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.decodeVideoTexture&&o.enable(17),w.opaque&&o.enable(18),w.pointsUvs&&o.enable(19),y.push(o.mask)}function x(y){const w=_[y.type];let q;if(w){const F=ui[w];q=r_.clone(F.uniforms)}else q=y.uniforms;return q}function M(y,w){let q;for(let F=0,N=c.length;F<N;F++){const k=c[F];if(k.cacheKey===w){q=k,++q.usedTimes;break}}return q===void 0&&(q=new hy(a,w,y,r),c.push(q)),q}function E(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:P}}function gy(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _y(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ef(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function tf(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,d,_,g,m){let p=a[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},a[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,f,d,_,g,m){const p=s(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=s(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||_y),n.length>1&&n.sort(f||ef),i.length>1&&i.sort(f||ef)}function u(){for(let h=e,f=a.length;h<f;h++){const d=a[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function xy(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new tf,a.set(n,[s])):i>=r.length?(s=new tf,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function vy(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ke};break;case"SpotLight":t={position:new H,direction:new H,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new H,halfWidth:new H,halfHeight:new H};break}return a[e.id]=t,t}}}function yy(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let My=0;function Sy(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function by(a,e){const t=new vy,n=yy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new Qe,o=new Qe;function l(u,h){let f=0,d=0,_=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let g=0,m=0,p=0,S=0,v=0,x=0,M=0,E=0,A=0,P=0;u.sort(Sy);const y=h===!0?Math.PI:1;for(let q=0,F=u.length;q<F;q++){const N=u[q],k=N.color,V=N.intensity,te=N.distance,z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=k.r*V*y,d+=k.g*V*y,_+=k.b*V*y;else if(N.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],V);else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*y),N.castShadow){const K=N.shadow,L=n.get(N);L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=N.shadow.matrix,x++}i.directional[g]=j,g++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(V*y),j.distance=te,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[p]=j;const K=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,K.updateMatrices(N),N.castShadow&&P++),i.spotLightMatrix[p]=K.matrix,N.castShadow){const L=n.get(N);L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,i.spotShadow[p]=L,i.spotShadowMap[p]=z,E++}p++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(k).multiplyScalar(V),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=j,S++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*y),j.distance=N.distance,j.decay=N.decay,N.castShadow){const K=N.shadow,L=n.get(N);L.shadowBias=K.bias,L.shadowNormalBias=K.normalBias,L.shadowRadius=K.radius,L.shadowMapSize=K.mapSize,L.shadowCameraNear=K.camera.near,L.shadowCameraFar=K.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=N.shadow.matrix,M++}i.point[m]=j,m++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(V*y),j.groundColor.copy(N.groundColor).multiplyScalar(V*y),i.hemi[v]=j,v++}}S>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==g||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==S||w.hemiLength!==v||w.numDirectionalShadows!==x||w.numPointShadows!==M||w.numSpotShadows!==E||w.numSpotMaps!==A)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,w.directionalLength=g,w.pointLength=m,w.spotLength=p,w.rectAreaLength=S,w.hemiLength=v,w.numDirectionalShadows=x,w.numPointShadows=M,w.numSpotShadows=E,w.numSpotMaps=A,i.version=My++)}function c(u,h){let f=0,d=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const x=u[S];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(x.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function nf(a,e){const t=new by(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function wy(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new nf(a,e),t.set(r,[l])):s>=o.length?(l=new nf(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ty extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ey extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ly(a,e,t){let n=new au;const i=new qe,r=new qe,s=new mt,o=new Ty({depthPacking:Sg}),l=new Ey,c={},u=t.maxTextureSize,h={[Oi]:_n,[_n]:Oi,[ii]:ii},f=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Ay,fragmentShader:Cy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Kn;_.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new en(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru,this.render=function(x,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const A=a.getRenderTarget(),P=a.getActiveCubeFace(),y=a.getActiveMipmapLevel(),w=a.state;w.setBlending(nr),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let q=0,F=x.length;q<F;q++){const N=x[q],k=N.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const V=k.getFrameExtents();if(i.multiply(V),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,k.mapSize.y=r.y)),k.map===null){const z=this.type!==mo?{minFilter:Rt,magFilter:Rt}:{};k.map=new Ur(i.x,i.y,z),k.map.texture.name=N.name+".shadowMap",k.camera.updateProjectionMatrix()}a.setRenderTarget(k.map),a.clear();const te=k.getViewportCount();for(let z=0;z<te;z++){const j=k.getViewport(z);s.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),w.viewport(s),k.updateMatrices(N,z),n=k.getFrustum(),v(M,E,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===mo&&p(k,E),k.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(A,P,y)};function p(x,M){const E=e.update(g);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Ur(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(M,null,E,f,g,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(M,null,E,d,g,null)}function S(x,M,E,A){let P=null;const y=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(y!==void 0)P=y;else if(P=E.isPointLight===!0?l:o,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const w=P.uuid,q=M.uuid;let F=c[w];F===void 0&&(F={},c[w]=F);let N=F[q];N===void 0&&(N=P.clone(),F[q]=N),P=N}if(P.visible=M.visible,P.wireframe=M.wireframe,A===mo?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:h[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const w=a.properties.get(P);w.light=E}return P}function v(x,M,E,A,P){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&P===mo)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const q=e.update(x),F=x.material;if(Array.isArray(F)){const N=q.groups;for(let k=0,V=N.length;k<V;k++){const te=N[k],z=F[te.materialIndex];if(z&&z.visible){const j=S(x,z,A,P);a.renderBufferDirect(E,null,q,j,x,te)}}}else if(F.visible){const N=S(x,F,A,P);a.renderBufferDirect(E,null,q,N,x,null)}}const w=x.children;for(let q=0,F=w.length;q<F;q++)v(w[q],M,E,A,P)}}function Py(a,e,t){const n=t.isWebGL2;function i(){let U=!1;const Q=new mt;let le=null;const _e=new mt(0,0,0,0);return{setMask:function(De){le!==De&&!U&&(a.colorMask(De,De,De,De),le=De)},setLocked:function(De){U=De},setClear:function(De,ot,rt,bt,ze){ze===!0&&(De*=bt,ot*=bt,rt*=bt),Q.set(De,ot,rt,bt),_e.equals(Q)===!1&&(a.clearColor(De,ot,rt,bt),_e.copy(Q))},reset:function(){U=!1,le=null,_e.set(-1,0,0,0)}}}function r(){let U=!1,Q=null,le=null,_e=null;return{setTest:function(De){De?R(2929):D(2929)},setMask:function(De){Q!==De&&!U&&(a.depthMask(De),Q=De)},setFunc:function(De){if(le!==De){switch(De){case Xm:a.depthFunc(512);break;case qm:a.depthFunc(519);break;case jm:a.depthFunc(513);break;case xc:a.depthFunc(515);break;case Ym:a.depthFunc(514);break;case Km:a.depthFunc(518);break;case $m:a.depthFunc(516);break;case Zm:a.depthFunc(517);break;default:a.depthFunc(515)}le=De}},setLocked:function(De){U=De},setClear:function(De){_e!==De&&(a.clearDepth(De),_e=De)},reset:function(){U=!1,Q=null,le=null,_e=null}}}function s(){let U=!1,Q=null,le=null,_e=null,De=null,ot=null,rt=null,bt=null,ze=null;return{setTest:function(Se){U||(Se?R(2960):D(2960))},setMask:function(Se){Q!==Se&&!U&&(a.stencilMask(Se),Q=Se)},setFunc:function(Se,he,Ie){(le!==Se||_e!==he||De!==Ie)&&(a.stencilFunc(Se,he,Ie),le=Se,_e=he,De=Ie)},setOp:function(Se,he,Ie){(ot!==Se||rt!==he||bt!==Ie)&&(a.stencilOp(Se,he,Ie),ot=Se,rt=he,bt=Ie)},setLocked:function(Se){U=Se},setClear:function(Se){ze!==Se&&(a.clearStencil(Se),ze=Se)},reset:function(){U=!1,Q=null,le=null,_e=null,De=null,ot=null,rt=null,bt=null,ze=null}}}const o=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,v=null,x=null,M=null,E=null,A=null,P=null,y=!1,w=null,q=null,F=null,N=null,k=null;const V=a.getParameter(35661);let te=!1,z=0;const j=a.getParameter(7938);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),te=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),te=z>=2);let K=null,L={};const Me=a.getParameter(3088),ue=a.getParameter(2978),Z=new mt().fromArray(Me),ee=new mt().fromArray(ue);function de(U,Q,le){const _e=new Uint8Array(4),De=a.createTexture();a.bindTexture(U,De),a.texParameteri(U,10241,9728),a.texParameteri(U,10240,9728);for(let ot=0;ot<le;ot++)a.texImage2D(Q+ot,0,6408,1,1,0,6408,5121,_e);return De}const fe={};fe[3553]=de(3553,3553,1),fe[34067]=de(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),R(2929),l.setFunc(xc),Re(!1),G(Hu),R(2884),me(nr);function R(U){f[U]!==!0&&(a.enable(U),f[U]=!0)}function D(U){f[U]!==!1&&(a.disable(U),f[U]=!1)}function O(U,Q){return d[U]!==Q?(a.bindFramebuffer(U,Q),d[U]=Q,n&&(U===36009&&(d[36160]=Q),U===36160&&(d[36009]=Q)),!0):!1}function X(U,Q){let le=g,_e=!1;if(U)if(le=_.get(Q),le===void 0&&(le=[],_.set(Q,le)),U.isWebGLMultipleRenderTargets){const De=U.texture;if(le.length!==De.length||le[0]!==36064){for(let ot=0,rt=De.length;ot<rt;ot++)le[ot]=36064+ot;le.length=De.length,_e=!0}}else le[0]!==36064&&(le[0]=36064,_e=!0);else le[0]!==1029&&(le[0]=1029,_e=!0);_e&&(t.isWebGL2?a.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function se(U){return m!==U?(a.useProgram(U),m=U,!0):!1}const re={[gs]:32774,[Om]:32778,[Nm]:32779};if(n)re[Xu]=32775,re[qu]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(re[Xu]=U.MIN_EXT,re[qu]=U.MAX_EXT)}const ie={[Um]:0,[Fm]:1,[km]:768,[pd]:770,[Wm]:776,[Vm]:774,[Bm]:772,[zm]:769,[md]:771,[Gm]:775,[Hm]:773};function me(U,Q,le,_e,De,ot,rt,bt){if(U===nr){p===!0&&(D(3042),p=!1);return}if(p===!1&&(R(3042),p=!0),U!==Im){if(U!==S||bt!==y){if((v!==gs||E!==gs)&&(a.blendEquation(32774),v=gs,E=gs),bt)switch(U){case ws:a.blendFuncSeparate(1,771,1,771);break;case Vu:a.blendFunc(1,1);break;case Gu:a.blendFuncSeparate(0,769,0,1);break;case Wu:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ws:a.blendFuncSeparate(770,771,1,771);break;case Vu:a.blendFunc(770,1);break;case Gu:a.blendFuncSeparate(0,769,0,1);break;case Wu:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,M=null,A=null,P=null,S=U,y=bt}return}De=De||Q,ot=ot||le,rt=rt||_e,(Q!==v||De!==E)&&(a.blendEquationSeparate(re[Q],re[De]),v=Q,E=De),(le!==x||_e!==M||ot!==A||rt!==P)&&(a.blendFuncSeparate(ie[le],ie[_e],ie[ot],ie[rt]),x=le,M=_e,A=ot,P=rt),S=U,y=!1}function Ee(U,Q){U.side===ii?D(2884):R(2884);let le=U.side===_n;Q&&(le=!le),Re(le),U.blending===ws&&U.transparent===!1?me(nr):me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const _e=U.stencilWrite;c.setTest(_e),_e&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?R(32926):D(32926)}function Re(U){w!==U&&(U?a.frontFace(2304):a.frontFace(2305),w=U)}function G(U){U!==Pm?(R(2884),U!==q&&(U===Hu?a.cullFace(1029):U===Rm?a.cullFace(1028):a.cullFace(1032))):D(2884),q=U}function Be(U){U!==F&&(te&&a.lineWidth(U),F=U)}function we(U,Q,le){U?(R(32823),(N!==Q||k!==le)&&(a.polygonOffset(Q,le),N=Q,k=le)):D(32823)}function Xe(U){U?R(3089):D(3089)}function st(U){U===void 0&&(U=33984+V-1),K!==U&&(a.activeTexture(U),K=U)}function C(U,Q,le){le===void 0&&(K===null?le=33984+V-1:le=K);let _e=L[le];_e===void 0&&(_e={type:void 0,texture:void 0},L[le]=_e),(_e.type!==U||_e.texture!==Q)&&(K!==le&&(a.activeTexture(le),K=le),a.bindTexture(U,Q||fe[U]),_e.type=U,_e.texture=Q)}function b(){const U=L[K];U!==void 0&&U.type!==void 0&&(a.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{a.compressedTexImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{a.compressedTexImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{a.texSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{a.texSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{a.texStorage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{a.texStorage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{a.texImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{a.texImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(U){Z.equals(U)===!1&&(a.scissor(U.x,U.y,U.z,U.w),Z.copy(U))}function Ae(U){ee.equals(U)===!1&&(a.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function ke(U,Q){let le=h.get(Q);le===void 0&&(le=new WeakMap,h.set(Q,le));let _e=le.get(U);_e===void 0&&(_e=a.getUniformBlockIndex(Q,U.name),le.set(U,_e))}function ve(U,Q){const _e=h.get(Q).get(U);u.get(Q)!==_e&&(a.uniformBlockBinding(Q,_e,U.__bindingPointIndex),u.set(Q,_e))}function ct(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},K=null,L={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,v=null,x=null,M=null,E=null,A=null,P=null,y=!1,w=null,q=null,F=null,N=null,k=null,Z.set(0,0,a.canvas.width,a.canvas.height),ee.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:R,disable:D,bindFramebuffer:O,drawBuffers:X,useProgram:se,setBlending:me,setMaterial:Ee,setFlipSided:Re,setCullFace:G,setLineWidth:Be,setPolygonOffset:we,setScissorTest:Xe,activeTexture:st,bindTexture:C,unbindTexture:b,compressedTexImage2D:J,compressedTexImage3D:ce,texImage2D:be,texImage3D:Le,updateUBOMapping:ke,uniformBlockBinding:ve,texStorage2D:Y,texStorage3D:ge,texSubImage2D:ae,texSubImage3D:pe,compressedTexSubImage2D:I,compressedTexSubImage3D:oe,scissor:ye,viewport:Ae,reset:ct}}function Ry(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,b){return p?new OffscreenCanvas(C,b):ko("canvas")}function v(C,b,J,ce){let ae=1;if((C.width>ce||C.height>ce)&&(ae=ce/Math.max(C.width,C.height)),ae<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const pe=b?Td:Math.floor,I=pe(ae*C.width),oe=pe(ae*C.height);g===void 0&&(g=S(I,oe));const Y=J?S(I,oe):g;return Y.width=I,Y.height=oe,Y.getContext("2d").drawImage(C,0,0,I,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+I+"x"+oe+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return Tc(C.width)&&Tc(C.height)}function M(C){return o?!1:C.wrapS!==Hn||C.wrapT!==Hn||C.minFilter!==Rt&&C.minFilter!==Jt}function E(C,b){return C.generateMipmaps&&b&&C.minFilter!==Rt&&C.minFilter!==Jt}function A(C){a.generateMipmap(C)}function P(C,b,J,ce,ae=!1){if(o===!1)return b;if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe=b;return b===6403&&(J===5126&&(pe=33326),J===5131&&(pe=33325),J===5121&&(pe=33321)),b===33319&&(J===5126&&(pe=33328),J===5131&&(pe=33327),J===5121&&(pe=33323)),b===6408&&(J===5126&&(pe=34836),J===5131&&(pe=34842),J===5121&&(pe=ce===lt&&ae===!1?35907:32856),J===32819&&(pe=32854),J===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function y(C,b,J){return E(C,J)===!0||C.isFramebufferTexture&&C.minFilter!==Rt&&C.minFilter!==Jt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){return C===Rt||C===Mc||C===Na?9728:9729}function q(C){const b=C.target;b.removeEventListener("dispose",q),N(b),b.isVideoTexture&&_.delete(b)}function F(C){const b=C.target;b.removeEventListener("dispose",F),V(b)}function N(C){const b=n.get(C);if(b.__webglInit===void 0)return;const J=C.source,ce=m.get(J);if(ce){const ae=ce[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&k(C),Object.keys(ce).length===0&&m.delete(J)}n.remove(C)}function k(C){const b=n.get(C);a.deleteTexture(b.__webglTexture);const J=C.source,ce=m.get(J);delete ce[b.__cacheKey],s.memory.textures--}function V(C){const b=C.texture,J=n.get(C),ce=n.get(b);if(ce.__webglTexture!==void 0&&(a.deleteTexture(ce.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)a.deleteFramebuffer(J.__webglFramebuffer[ae]),J.__webglDepthbuffer&&a.deleteRenderbuffer(J.__webglDepthbuffer[ae]);else{if(a.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&a.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&a.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ae=0;ae<J.__webglColorRenderbuffer.length;ae++)J.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(J.__webglColorRenderbuffer[ae]);J.__webglDepthRenderbuffer&&a.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ae=0,pe=b.length;ae<pe;ae++){const I=n.get(b[ae]);I.__webglTexture&&(a.deleteTexture(I.__webglTexture),s.memory.textures--),n.remove(b[ae])}n.remove(b),n.remove(C)}let te=0;function z(){te=0}function j(){const C=te;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),te+=1,C}function K(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function L(C,b){const J=n.get(C);if(C.isVideoTexture&&Xe(C),C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(J,C,b);return}}t.bindTexture(3553,J.__webglTexture,33984+b)}function Me(C,b){const J=n.get(C);if(C.version>0&&J.__version!==C.version){D(J,C,b);return}t.bindTexture(35866,J.__webglTexture,33984+b)}function ue(C,b){const J=n.get(C);if(C.version>0&&J.__version!==C.version){D(J,C,b);return}t.bindTexture(32879,J.__webglTexture,33984+b)}function Z(C,b){const J=n.get(C);if(C.version>0&&J.__version!==C.version){O(J,C,b);return}t.bindTexture(34067,J.__webglTexture,33984+b)}const ee={[Us]:10497,[Hn]:33071,[Ya]:33648},de={[Rt]:9728,[Mc]:9984,[Na]:9986,[Jt]:9729,[vd]:9985,[Ir]:9987};function fe(C,b,J){if(J?(a.texParameteri(C,10242,ee[b.wrapS]),a.texParameteri(C,10243,ee[b.wrapT]),(C===32879||C===35866)&&a.texParameteri(C,32882,ee[b.wrapR]),a.texParameteri(C,10240,de[b.magFilter]),a.texParameteri(C,10241,de[b.minFilter])):(a.texParameteri(C,10242,33071),a.texParameteri(C,10243,33071),(C===32879||C===35866)&&a.texParameteri(C,32882,33071),(b.wrapS!==Hn||b.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(C,10240,w(b.magFilter)),a.texParameteri(C,10241,w(b.minFilter)),b.minFilter!==Rt&&b.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Rt||b.minFilter!==Na&&b.minFilter!==Ir||b.type===ji&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Uo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(a.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function R(C,b){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",q));const ce=b.source;let ae=m.get(ce);ae===void 0&&(ae={},m.set(ce,ae));const pe=K(b);if(pe!==C.__cacheKey){ae[pe]===void 0&&(ae[pe]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,J=!0),ae[pe].usedTimes++;const I=ae[C.__cacheKey];I!==void 0&&(ae[C.__cacheKey].usedTimes--,I.usedTimes===0&&k(b)),C.__cacheKey=pe,C.__webglTexture=ae[pe].texture}return J}function D(C,b,J){let ce=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=35866),b.isData3DTexture&&(ce=32879);const ae=R(C,b),pe=b.source;t.bindTexture(ce,C.__webglTexture,33984+J);const I=n.get(pe);if(pe.version!==I.__version||ae===!0){t.activeTexture(33984+J),a.pixelStorei(37440,b.flipY),a.pixelStorei(37441,b.premultiplyAlpha),a.pixelStorei(3317,b.unpackAlignment),a.pixelStorei(37443,0);const oe=M(b)&&x(b.image)===!1;let Y=v(b.image,oe,!1,u);Y=st(b,Y);const ge=x(Y)||o,be=r.convert(b.format,b.encoding);let Le=r.convert(b.type),ye=P(b.internalFormat,be,Le,b.encoding,b.isVideoTexture);fe(ce,b,ge);let Ae;const ke=b.mipmaps,ve=o&&b.isVideoTexture!==!0,ct=I.__version===void 0||ae===!0,U=y(b,Y,ge);if(b.isDepthTexture)ye=6402,o?b.type===ji?ye=36012:b.type===Sr?ye=33190:b.type===Ts?ye=35056:ye=33189:b.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Er&&ye===6402&&b.type!==yd&&b.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Sr,Le=r.convert(b.type)),b.format===Fs&&ye===6402&&(ye=34041,b.type!==Ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ts,Le=r.convert(b.type))),ct&&(ve?t.texStorage2D(3553,1,ye,Y.width,Y.height):t.texImage2D(3553,0,ye,Y.width,Y.height,0,be,Le,null));else if(b.isDataTexture)if(ke.length>0&&ge){ve&&ct&&t.texStorage2D(3553,U,ye,ke[0].width,ke[0].height);for(let Q=0,le=ke.length;Q<le;Q++)Ae=ke[Q],ve?t.texSubImage2D(3553,Q,0,0,Ae.width,Ae.height,be,Le,Ae.data):t.texImage2D(3553,Q,ye,Ae.width,Ae.height,0,be,Le,Ae.data);b.generateMipmaps=!1}else ve?(ct&&t.texStorage2D(3553,U,ye,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,be,Le,Y.data)):t.texImage2D(3553,0,ye,Y.width,Y.height,0,be,Le,Y.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ve&&ct&&t.texStorage3D(35866,U,ye,ke[0].width,ke[0].height,Y.depth);for(let Q=0,le=ke.length;Q<le;Q++)Ae=ke[Q],b.format!==Vn?be!==null?ve?t.compressedTexSubImage3D(35866,Q,0,0,0,Ae.width,Ae.height,Y.depth,be,Ae.data,0,0):t.compressedTexImage3D(35866,Q,ye,Ae.width,Ae.height,Y.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage3D(35866,Q,0,0,0,Ae.width,Ae.height,Y.depth,be,Le,Ae.data):t.texImage3D(35866,Q,ye,Ae.width,Ae.height,Y.depth,0,be,Le,Ae.data)}else{ve&&ct&&t.texStorage2D(3553,U,ye,ke[0].width,ke[0].height);for(let Q=0,le=ke.length;Q<le;Q++)Ae=ke[Q],b.format!==Vn?be!==null?ve?t.compressedTexSubImage2D(3553,Q,0,0,Ae.width,Ae.height,be,Ae.data):t.compressedTexImage2D(3553,Q,ye,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage2D(3553,Q,0,0,Ae.width,Ae.height,be,Le,Ae.data):t.texImage2D(3553,Q,ye,Ae.width,Ae.height,0,be,Le,Ae.data)}else if(b.isDataArrayTexture)ve?(ct&&t.texStorage3D(35866,U,ye,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,be,Le,Y.data)):t.texImage3D(35866,0,ye,Y.width,Y.height,Y.depth,0,be,Le,Y.data);else if(b.isData3DTexture)ve?(ct&&t.texStorage3D(32879,U,ye,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,be,Le,Y.data)):t.texImage3D(32879,0,ye,Y.width,Y.height,Y.depth,0,be,Le,Y.data);else if(b.isFramebufferTexture){if(ct)if(ve)t.texStorage2D(3553,U,ye,Y.width,Y.height);else{let Q=Y.width,le=Y.height;for(let _e=0;_e<U;_e++)t.texImage2D(3553,_e,ye,Q,le,0,be,Le,null),Q>>=1,le>>=1}}else if(ke.length>0&&ge){ve&&ct&&t.texStorage2D(3553,U,ye,ke[0].width,ke[0].height);for(let Q=0,le=ke.length;Q<le;Q++)Ae=ke[Q],ve?t.texSubImage2D(3553,Q,0,0,be,Le,Ae):t.texImage2D(3553,Q,ye,be,Le,Ae);b.generateMipmaps=!1}else ve?(ct&&t.texStorage2D(3553,U,ye,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,be,Le,Y)):t.texImage2D(3553,0,ye,be,Le,Y);E(b,ge)&&A(ce),I.__version=pe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function O(C,b,J){if(b.image.length!==6)return;const ce=R(C,b),ae=b.source;t.bindTexture(34067,C.__webglTexture,33984+J);const pe=n.get(ae);if(ae.version!==pe.__version||ce===!0){t.activeTexture(33984+J),a.pixelStorei(37440,b.flipY),a.pixelStorei(37441,b.premultiplyAlpha),a.pixelStorei(3317,b.unpackAlignment),a.pixelStorei(37443,0);const I=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let Q=0;Q<6;Q++)!I&&!oe?Y[Q]=v(b.image[Q],!1,!0,c):Y[Q]=oe?b.image[Q].image:b.image[Q],Y[Q]=st(b,Y[Q]);const ge=Y[0],be=x(ge)||o,Le=r.convert(b.format,b.encoding),ye=r.convert(b.type),Ae=P(b.internalFormat,Le,ye,b.encoding),ke=o&&b.isVideoTexture!==!0,ve=pe.__version===void 0||ce===!0;let ct=y(b,ge,be);fe(34067,b,be);let U;if(I){ke&&ve&&t.texStorage2D(34067,ct,Ae,ge.width,ge.height);for(let Q=0;Q<6;Q++){U=Y[Q].mipmaps;for(let le=0;le<U.length;le++){const _e=U[le];b.format!==Vn?Le!==null?ke?t.compressedTexSubImage2D(34069+Q,le,0,0,_e.width,_e.height,Le,_e.data):t.compressedTexImage2D(34069+Q,le,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+Q,le,0,0,_e.width,_e.height,Le,ye,_e.data):t.texImage2D(34069+Q,le,Ae,_e.width,_e.height,0,Le,ye,_e.data)}}}else{U=b.mipmaps,ke&&ve&&(U.length>0&&ct++,t.texStorage2D(34067,ct,Ae,Y[0].width,Y[0].height));for(let Q=0;Q<6;Q++)if(oe){ke?t.texSubImage2D(34069+Q,0,0,0,Y[Q].width,Y[Q].height,Le,ye,Y[Q].data):t.texImage2D(34069+Q,0,Ae,Y[Q].width,Y[Q].height,0,Le,ye,Y[Q].data);for(let le=0;le<U.length;le++){const De=U[le].image[Q].image;ke?t.texSubImage2D(34069+Q,le+1,0,0,De.width,De.height,Le,ye,De.data):t.texImage2D(34069+Q,le+1,Ae,De.width,De.height,0,Le,ye,De.data)}}else{ke?t.texSubImage2D(34069+Q,0,0,0,Le,ye,Y[Q]):t.texImage2D(34069+Q,0,Ae,Le,ye,Y[Q]);for(let le=0;le<U.length;le++){const _e=U[le];ke?t.texSubImage2D(34069+Q,le+1,0,0,Le,ye,_e.image[Q]):t.texImage2D(34069+Q,le+1,Ae,Le,ye,_e.image[Q])}}}E(b,be)&&A(34067),pe.__version=ae.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function X(C,b,J,ce,ae){const pe=r.convert(J.format,J.encoding),I=r.convert(J.type),oe=P(J.internalFormat,pe,I,J.encoding);n.get(b).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,oe,b.width,b.height,b.depth,0,pe,I,null):t.texImage2D(ae,0,oe,b.width,b.height,0,pe,I,null)),t.bindFramebuffer(36160,C),we(b)?f.framebufferTexture2DMultisampleEXT(36160,ce,ae,n.get(J).__webglTexture,0,Be(b)):(ae===3553||ae>=34069&&ae<=34074)&&a.framebufferTexture2D(36160,ce,ae,n.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function se(C,b,J){if(a.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let ce=33189;if(J||we(b)){const ae=b.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ji?ce=36012:ae.type===Sr&&(ce=33190));const pe=Be(b);we(b)?f.renderbufferStorageMultisampleEXT(36161,pe,ce,b.width,b.height):a.renderbufferStorageMultisample(36161,pe,ce,b.width,b.height)}else a.renderbufferStorage(36161,ce,b.width,b.height);a.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const ce=Be(b);J&&we(b)===!1?a.renderbufferStorageMultisample(36161,ce,35056,b.width,b.height):we(b)?f.renderbufferStorageMultisampleEXT(36161,ce,35056,b.width,b.height):a.renderbufferStorage(36161,34041,b.width,b.height),a.framebufferRenderbuffer(36160,33306,36161,C)}else{const ce=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0;ae<ce.length;ae++){const pe=ce[ae],I=r.convert(pe.format,pe.encoding),oe=r.convert(pe.type),Y=P(pe.internalFormat,I,oe,pe.encoding),ge=Be(b);J&&we(b)===!1?a.renderbufferStorageMultisample(36161,ge,Y,b.width,b.height):we(b)?f.renderbufferStorageMultisampleEXT(36161,ge,Y,b.width,b.height):a.renderbufferStorage(36161,Y,b.width,b.height)}}a.bindRenderbuffer(36161,null)}function re(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),L(b.depthTexture,0);const ce=n.get(b.depthTexture).__webglTexture,ae=Be(b);if(b.depthTexture.format===Er)we(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ce,0,ae):a.framebufferTexture2D(36160,36096,3553,ce,0);else if(b.depthTexture.format===Fs)we(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ce,0,ae):a.framebufferTexture2D(36160,33306,3553,ce,0);else throw new Error("Unknown depthTexture format")}function ie(C){const b=n.get(C),J=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");re(b.__webglFramebuffer,C)}else if(J){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(36160,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]=a.createRenderbuffer(),se(b.__webglDepthbuffer[ce],C,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=a.createRenderbuffer(),se(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function me(C,b,J){const ce=n.get(C);b!==void 0&&X(ce.__webglFramebuffer,C,C.texture,36064,3553),J!==void 0&&ie(C)}function Ee(C){const b=C.texture,J=n.get(C),ce=n.get(b);C.addEventListener("dispose",F),C.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=a.createTexture()),ce.__version=b.version,s.memory.textures++);const ae=C.isWebGLCubeRenderTarget===!0,pe=C.isWebGLMultipleRenderTargets===!0,I=x(C)||o;if(ae){J.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)J.__webglFramebuffer[oe]=a.createFramebuffer()}else{if(J.__webglFramebuffer=a.createFramebuffer(),pe)if(i.drawBuffers){const oe=C.texture;for(let Y=0,ge=oe.length;Y<ge;Y++){const be=n.get(oe[Y]);be.__webglTexture===void 0&&(be.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&we(C)===!1){const oe=pe?b:[b];J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer);for(let Y=0;Y<oe.length;Y++){const ge=oe[Y];J.__webglColorRenderbuffer[Y]=a.createRenderbuffer(),a.bindRenderbuffer(36161,J.__webglColorRenderbuffer[Y]);const be=r.convert(ge.format,ge.encoding),Le=r.convert(ge.type),ye=P(ge.internalFormat,be,Le,ge.encoding,C.isXRRenderTarget===!0),Ae=Be(C);a.renderbufferStorageMultisample(36161,Ae,ye,C.width,C.height),a.framebufferRenderbuffer(36160,36064+Y,36161,J.__webglColorRenderbuffer[Y])}a.bindRenderbuffer(36161,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),se(J.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,ce.__webglTexture),fe(34067,b,I);for(let oe=0;oe<6;oe++)X(J.__webglFramebuffer[oe],C,b,36064,34069+oe);E(b,I)&&A(34067),t.unbindTexture()}else if(pe){const oe=C.texture;for(let Y=0,ge=oe.length;Y<ge;Y++){const be=oe[Y],Le=n.get(be);t.bindTexture(3553,Le.__webglTexture),fe(3553,be,I),X(J.__webglFramebuffer,C,be,36064+Y,3553),E(be,I)&&A(3553)}t.unbindTexture()}else{let oe=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?oe=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ce.__webglTexture),fe(oe,b,I),X(J.__webglFramebuffer,C,b,36064,oe),E(b,I)&&A(oe),t.unbindTexture()}C.depthBuffer&&ie(C)}function Re(C){const b=x(C)||o,J=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ce=0,ae=J.length;ce<ae;ce++){const pe=J[ce];if(E(pe,b)){const I=C.isWebGLCubeRenderTarget?34067:3553,oe=n.get(pe).__webglTexture;t.bindTexture(I,oe),A(I),t.unbindTexture()}}}function G(C){if(o&&C.samples>0&&we(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],J=C.width,ce=C.height;let ae=16384;const pe=[],I=C.stencilBuffer?33306:36096,oe=n.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let ge=0;ge<b.length;ge++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){pe.push(36064+ge),C.depthBuffer&&pe.push(I);const be=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(be===!1&&(C.depthBuffer&&(ae|=256),C.stencilBuffer&&(ae|=1024)),Y&&a.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[ge]),be===!0&&(a.invalidateFramebuffer(36008,[I]),a.invalidateFramebuffer(36009,[I])),Y){const Le=n.get(b[ge]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Le,0)}a.blitFramebuffer(0,0,J,ce,0,0,J,ce,ae,9728),d&&a.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let ge=0;ge<b.length;ge++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ge,36161,oe.__webglColorRenderbuffer[ge]);const be=n.get(b[ge]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ge,3553,be,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function Be(C){return Math.min(h,C.samples)}function we(C){const b=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(C){const b=s.render.frame;_.get(C)!==b&&(_.set(C,b),C.update())}function st(C,b){const J=C.encoding,ce=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===wc||J!==Nr&&(J===lt?o===!1?e.has("EXT_sRGB")===!0&&ce===Vn?(C.format=wc,C.minFilter=Jt,C.generateMipmaps=!1):b=Ad.sRGBToLinear(b):(ce!==Vn||ae!==Or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",J)),b}this.allocateTextureUnit=j,this.resetTextureUnits=z,this.setTexture2D=L,this.setTexture2DArray=Me,this.setTexture3D=ue,this.setTextureCube=Z,this.rebindTextures=me,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=X,this.useMultisampledRTT=we}function Dy(a,e,t){const n=t.isWebGL2;function i(r,s=null){let o;if(r===Or)return 5121;if(r===ag)return 32819;if(r===lg)return 32820;if(r===rg)return 5120;if(r===sg)return 5122;if(r===yd)return 5123;if(r===og)return 5124;if(r===Sr)return 5125;if(r===ji)return 5126;if(r===Uo)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===cg)return 6406;if(r===Vn)return 6408;if(r===ug)return 6409;if(r===hg)return 6410;if(r===Er)return 6402;if(r===Fs)return 34041;if(r===wc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===fg)return 6403;if(r===dg)return 36244;if(r===pg)return 33319;if(r===mg)return 33320;if(r===gg)return 36249;if(r===Ml||r===Sl||r===bl||r===wl)if(s===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ml)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ml)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ju||r===Yu||r===Ku||r===$u)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ju)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ku)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$u)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_g)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zu||r===Ju)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Zu)return s===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ju)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qu||r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===oh||r===ah||r===lh||r===ch||r===uh||r===hh||r===fh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Qu)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eh)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===th)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nh)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ih)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rh)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sh)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oh)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ah)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lh)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ch)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uh)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hh)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fh)return s===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Tl)return s===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===xg||r===dh||r===ph||r===mh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Tl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===dh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ph)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Iy extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ki extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oy={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Oy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ny extends Vt{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:Er,u!==Er&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Er&&(n=Sr),n===void 0&&u===Fs&&(n=Ts),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1}}class Uy extends Wr{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const S=[],v=[],x=new Set,M=new Map,E=new hn;E.layers.enable(1),E.viewport=new mt;const A=new hn;A.layers.enable(2),A.viewport=new mt;const P=[E,A],y=new Iy;y.layers.enable(1),y.layers.enable(2);let w=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Yl,S[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Yl,S[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Yl,S[Z]=ee),ee.getHandSpace()};function F(Z){const ee=v.indexOf(Z.inputSource);if(ee===-1)return;const de=S[ee];de!==void 0&&de.dispatchEvent({type:Z.type,data:Z.inputSource})}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",k);for(let Z=0;Z<S.length;Z++){const ee=v[Z];ee!==null&&(v[Z]=null,S[Z].disconnect(ee))}w=null,q=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),p=new Ur(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Or,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let ee=null,de=null,fe=null;g.depth&&(fe=g.stencil?35056:33190,ee=g.stencil?Fs:Er,de=g.stencil?Ts:Sr);const R={colorFormat:32856,depthFormat:fe,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(R),i.updateRenderState({layers:[f]}),p=new Ur(f.textureWidth,f.textureHeight,{format:Vn,type:Or,depthTexture:new Ny(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const D=e.properties.get(p);D.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function k(Z){for(let ee=0;ee<Z.removed.length;ee++){const de=Z.removed[ee],fe=v.indexOf(de);fe>=0&&(v[fe]=null,S[fe].disconnect(de))}for(let ee=0;ee<Z.added.length;ee++){const de=Z.added[ee];let fe=v.indexOf(de);if(fe===-1){for(let D=0;D<S.length;D++)if(D>=v.length){v.push(de),fe=D;break}else if(v[D]===null){v[D]=de,fe=D;break}if(fe===-1)break}const R=S[fe];R&&R.connect(de)}}const V=new H,te=new H;function z(Z,ee,de){V.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const fe=V.distanceTo(te),R=ee.projectionMatrix.elements,D=de.projectionMatrix.elements,O=R[14]/(R[10]-1),X=R[14]/(R[10]+1),se=(R[9]+1)/R[5],re=(R[9]-1)/R[5],ie=(R[8]-1)/R[0],me=(D[8]+1)/D[0],Ee=O*ie,Re=O*me,G=fe/(-ie+me),Be=G*-ie;ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Be),Z.translateZ(G),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const we=O+G,Xe=X+G,st=Ee-Be,C=Re+(fe-Be),b=se*X/Xe*we,J=re*X/Xe*we;Z.projectionMatrix.makePerspective(st,C,b,J,we,Xe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function j(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;y.near=A.near=E.near=Z.near,y.far=A.far=E.far=Z.far,(w!==y.near||q!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,q=y.far);const ee=Z.parent,de=y.cameras;j(y,ee);for(let fe=0;fe<de.length;fe++)j(de[fe],ee);de.length===2?z(y,E,A):y.projectionMatrix.copy(E.projectionMatrix),K(Z,y,ee)};function K(Z,ee,de){de===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0);const fe=Z.children;for(let R=0,D=fe.length;R<D;R++)fe[R].updateMatrixWorld(!0);Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Bs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.getPlanes=function(){return x};let L=null;function Me(Z,ee){if(u=ee.getViewerPose(c||s),_=ee,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let fe=!1;de.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let R=0;R<de.length;R++){const D=de[R];let O=null;if(d!==null)O=d.getViewport(D);else{const se=h.getViewSubImage(f,D);O=se.viewport,R===0&&(e.setRenderTargetTextures(p,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(p))}let X=P[R];X===void 0&&(X=new hn,X.layers.enable(R),X.viewport=new mt,P[R]=X),X.matrix.fromArray(D.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(D.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(O.x,O.y,O.width,O.height),R===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(X)}}for(let de=0;de<S.length;de++){const fe=v[de],R=S[de];fe!==null&&R!==void 0&&R.update(fe,ee,c||s)}if(L&&L(Z,ee),ee.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ee.detectedPlanes});let de=null;for(const fe of x)ee.detectedPlanes.has(fe)||(de===null&&(de=[]),de.push(fe));if(de!==null)for(const fe of de)x.delete(fe),M.delete(fe),n.dispatchEvent({type:"planeremoved",data:fe});for(const fe of ee.detectedPlanes)if(!x.has(fe))x.add(fe),M.set(fe,ee.lastChangedTime),n.dispatchEvent({type:"planeadded",data:fe});else{const R=M.get(fe);fe.lastChangedTime>R&&(M.set(fe,fe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:fe}))}}_=null}const ue=new Fd;ue.setAnimationLoop(Me),this.setAnimationLoop=function(Z){L=Z},this.dispose=function(){}}}function Fy(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Od(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ky(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(S,v){const x=v.program;n.uniformBlockBinding(S,x)}function c(S,v){let x=i[S.id];x===void 0&&(_(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(S,M);const E=e.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){const v=h();S.__bindingPointIndex=v;const x=a.createBuffer(),M=S.__size,E=S.usage;return a.bindBuffer(35345,x),a.bufferData(35345,M,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,v,x),x}function h(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=i[S.id],x=S.uniforms,M=S.__cache;a.bindBuffer(35345,v);for(let E=0,A=x.length;E<A;E++){const P=x[E];if(d(P,E,M)===!0){const y=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let F=0;F<w.length;F++){const N=w[F],k=g(N);typeof N=="number"?(P.__data[0]=N,a.bufferSubData(35345,y+q,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=N.elements[0],P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=N.elements[0],P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=N.elements[0]):(N.toArray(P.__data,q),q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,y,P.__data)}}a.bindBuffer(35345,null)}function d(S,v,x){const M=S.value;if(x[v]===void 0){if(typeof M=="number")x[v]=M;else{const E=Array.isArray(M)?M:[M],A=[];for(let P=0;P<E.length;P++)A.push(E[P].clone());x[v]=A}return!0}else if(typeof M=="number"){if(x[v]!==M)return x[v]=M,!0}else{const E=Array.isArray(x[v])?x[v]:[x[v]],A=Array.isArray(M)?M:[M];for(let P=0;P<E.length;P++){const y=E[P];if(y.equals(A[P])===!1)return y.copy(A[P]),!0}}return!1}function _(S){const v=S.uniforms;let x=0;const M=16;let E=0;for(let A=0,P=v.length;A<P;A++){const y=v[A],w={boundary:0,storage:0},q=Array.isArray(y.value)?y.value:[y.value];for(let F=0,N=q.length;F<N;F++){const k=q[F],V=g(k);w.boundary+=V.boundary,w.storage+=V.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=x,A>0){E=x%M;const F=M-E;E!==0&&F-w.boundary<0&&(x+=M-E,y.__offset=x)}x+=w.storage}return E=x%M,E>0&&(x+=M-E),S.__size=x,S.__cache={},this}function g(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const x=s.indexOf(v.__bindingPointIndex);s.splice(x,1),a.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const S in i)a.deleteBuffer(i[S]);s=[],i={},r={}}return{bind:l,update:c,dispose:p}}function zy(){const a=ko("canvas");return a.style.display="block",a}class Vd{constructor(e={}){const{canvas:t=zy(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=s;let d=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Nr,this.useLegacyLights=!0,this.toneMapping=Di,this.toneMappingExposure=1;const p=this;let S=!1,v=0,x=0,M=null,E=-1,A=null;const P=new mt,y=new mt;let w=null,q=t.width,F=t.height,N=1,k=null,V=null;const te=new mt(0,0,q,F),z=new mt(0,0,q,F);let j=!1;const K=new au;let L=!1,Me=!1,ue=null;const Z=new Qe,ee=new H,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return M===null?N:1}let R=n;function D(T,W){for(let $=0;$<T.length;$++){const B=T[$],ne=t.getContext(B,W);if(ne!==null)return ne}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${iu}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ve,!1),R===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),R=D(W,T),R===null)throw D(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let O,X,se,re,ie,me,Ee,Re,G,Be,we,Xe,st,C,b,J,ce,ae,pe,I,oe,Y,ge,be;function Le(){O=new $x(R),X=new Wx(R,O,e),O.init(X),Y=new Dy(R,O,X),se=new Py(R,O,X),re=new Qx,ie=new gy,me=new Ry(R,O,se,ie,X,Y,re),Ee=new qx(p),Re=new Kx(p),G=new h_(R,X),ge=new Vx(R,O,G,X),Be=new Zx(R,G,re,ge),we=new iv(R,Be,G,re),pe=new nv(R,X,me),J=new Xx(ie),Xe=new my(p,Ee,Re,O,X,ge,J),st=new Fy(p,ie),C=new xy,b=new wy(O,X),ae=new Hx(p,Ee,Re,se,we,f,l),ce=new Ly(p,we,X),be=new ky(R,re,X,se),I=new Gx(R,O,re,X),oe=new Jx(R,O,re,X),re.programs=Xe.programs,p.capabilities=X,p.extensions=O,p.properties=ie,p.renderLists=C,p.shadowMap=ce,p.state=se,p.info=re}Le();const ye=new Uy(p,R);this.xr=ye,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=O.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=O.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(q,F,!1))},this.getSize=function(T){return T.set(q,F)},this.setSize=function(T,W,$=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,F=W,t.width=Math.floor(T*N),t.height=Math.floor(W*N),$===!0&&(t.style.width=T+"px",t.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(q*N,F*N).floor()},this.setDrawingBufferSize=function(T,W,$){q=T,F=W,N=$,t.width=Math.floor(T*$),t.height=Math.floor(W*$),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,W,$,B){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,W,$,B),se.viewport(P.copy(te).multiplyScalar(N).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,W,$,B){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,W,$,B),se.scissor(y.copy(z).multiplyScalar(N).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){se.setScissorTest(j=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,W=!0,$=!0){let B=0;T&&(B|=16384),W&&(B|=256),$&&(B|=1024),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),C.dispose(),b.dispose(),ie.dispose(),Ee.dispose(),Re.dispose(),we.dispose(),ge.dispose(),be.dispose(),Xe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",De),ye.removeEventListener("sessionend",ot),ue&&(ue.dispose(),ue=null),rt.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=re.autoReset,W=ce.enabled,$=ce.autoUpdate,B=ce.needsUpdate,ne=ce.type;Le(),re.autoReset=T,ce.enabled=W,ce.autoUpdate=$,ce.needsUpdate=B,ce.type=ne}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ct(T){const W=T.target;W.removeEventListener("dispose",ct),U(W)}function U(T){Q(T),ie.remove(T)}function Q(T){const W=ie.get(T).programs;W!==void 0&&(W.forEach(function($){Xe.releaseProgram($)}),T.isShaderMaterial&&Xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,$,B,ne,Te){W===null&&(W=de);const Pe=ne.isMesh&&ne.matrixWorld.determinant()<0,Ce=Lt(T,W,$,B,ne);se.setMaterial(B,Pe);let Ue=$.index,We=1;B.wireframe===!0&&(Ue=Be.getWireframeAttribute($),We=2);const Ve=$.drawRange,Ne=$.attributes.position;let He=Ve.start*We,gt=(Ve.start+Ve.count)*We;Te!==null&&(He=Math.max(He,Te.start*We),gt=Math.min(gt,(Te.start+Te.count)*We)),Ue!==null?(He=Math.max(He,0),gt=Math.min(gt,Ue.count)):Ne!=null&&(He=Math.max(He,0),gt=Math.min(gt,Ne.count));const rn=gt-He;if(rn<0||rn===1/0)return;ge.setup(ne,B,Ce,$,Ue);let ai,_t=I;if(Ue!==null&&(ai=G.get(Ue),_t=oe,_t.setIndex(ai)),ne.isMesh)B.wireframe===!0?(se.setLineWidth(B.wireframeLinewidth*fe()),_t.setMode(1)):_t.setMode(4);else if(ne.isLine){let Ge=B.linewidth;Ge===void 0&&(Ge=1),se.setLineWidth(Ge*fe()),ne.isLineSegments?_t.setMode(1):ne.isLineLoop?_t.setMode(2):_t.setMode(3)}else ne.isPoints?_t.setMode(0):ne.isSprite&&_t.setMode(4);if(ne.isInstancedMesh)_t.renderInstances(He,rn,ne.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,vi=Math.min($.instanceCount,Ge);_t.renderInstances(He,rn,vi)}else _t.render(He,rn)},this.compile=function(T,W){function $(B,ne,Te){B.transparent===!0&&B.side===ii&&B.forceSinglePass===!1?(B.side=_n,B.needsUpdate=!0,Fe(B,ne,Te),B.side=Oi,B.needsUpdate=!0,Fe(B,ne,Te),B.side=ii):Fe(B,ne,Te)}_=b.get(T),_.init(),m.push(_),T.traverseVisible(function(B){B.isLight&&B.layers.test(W.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights(p.useLegacyLights),T.traverse(function(B){const ne=B.material;if(ne)if(Array.isArray(ne))for(let Te=0;Te<ne.length;Te++){const Pe=ne[Te];$(Pe,T,B)}else $(ne,T,B)}),m.pop(),_=null};let le=null;function _e(T){le&&le(T)}function De(){rt.stop()}function ot(){rt.start()}const rt=new Fd;rt.setAnimationLoop(_e),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(T){le=T,ye.setAnimationLoop(T),T===null?rt.stop():rt.start()},ye.addEventListener("sessionstart",De),ye.addEventListener("sessionend",ot),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(W),W=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,W,M),_=b.get(T,m.length),_.init(),m.push(_),Z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(Z),Me=this.localClippingEnabled,L=J.init(this.clippingPlanes,Me),d=C.get(T,g.length),d.init(),g.push(d),bt(T,W,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(k,V),L===!0&&J.beginShadows();const $=_.state.shadowsArray;if(ce.render($,T,W),L===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(d,T),_.setupLights(p.useLegacyLights),W.isArrayCamera){const B=W.cameras;for(let ne=0,Te=B.length;ne<Te;ne++){const Pe=B[ne];ze(d,T,Pe,Pe.viewport)}}else ze(d,T,W);M!==null&&(me.updateMultisampleRenderTarget(M),me.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(p,T,W),ge.resetDefaultState(),E=-1,A=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function bt(T,W,$,B){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){B&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const Pe=we.update(T),Ce=T.material;Ce.visible&&d.push(T,Pe,Ce,$,ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==re.render.frame&&(T.skeleton.update(),T.skeleton.frame=re.render.frame),!T.frustumCulled||K.intersectsObject(T))){B&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const Pe=we.update(T),Ce=T.material;if(Array.isArray(Ce)){const Ue=Pe.groups;for(let We=0,Ve=Ue.length;We<Ve;We++){const Ne=Ue[We],He=Ce[Ne.materialIndex];He&&He.visible&&d.push(T,Pe,He,$,ee.z,Ne)}}else Ce.visible&&d.push(T,Pe,Ce,$,ee.z,null)}}const Te=T.children;for(let Pe=0,Ce=Te.length;Pe<Ce;Pe++)bt(Te[Pe],W,$,B)}function ze(T,W,$,B){const ne=T.opaque,Te=T.transmissive,Pe=T.transparent;_.setupLightsView($),L===!0&&J.setGlobalState(p.clippingPlanes,$),Te.length>0&&Se(ne,Te,W,$),B&&se.viewport(P.copy(B)),ne.length>0&&he(ne,W,$),Te.length>0&&he(Te,W,$),Pe.length>0&&he(Pe,W,$),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Se(T,W,$,B){if(ue===null){const Ce=X.isWebGL2;ue=new Ur(1024,1024,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?Uo:Or,minFilter:Ir,samples:Ce&&o===!0?4:0})}const ne=p.getRenderTarget();p.setRenderTarget(ue),p.clear();const Te=p.toneMapping;p.toneMapping=Di,he(T,$,B),me.updateMultisampleRenderTarget(ue),me.updateRenderTargetMipmap(ue);let Pe=!1;for(let Ce=0,Ue=W.length;Ce<Ue;Ce++){const We=W[Ce],Ve=We.object,Ne=We.geometry,He=We.material,gt=We.group;if(He.side===ii&&Ve.layers.test(B.layers)){const rn=He.side;He.side=_n,He.needsUpdate=!0,Ie(Ve,$,B,Ne,He,gt),He.side=rn,He.needsUpdate=!0,Pe=!0}}Pe===!0&&(me.updateMultisampleRenderTarget(ue),me.updateRenderTargetMipmap(ue)),p.setRenderTarget(ne),p.toneMapping=Te}function he(T,W,$){const B=W.isScene===!0?W.overrideMaterial:null;for(let ne=0,Te=T.length;ne<Te;ne++){const Pe=T[ne],Ce=Pe.object,Ue=Pe.geometry,We=B===null?Pe.material:B,Ve=Pe.group;Ce.layers.test($.layers)&&Ie(Ce,W,$,Ue,We,Ve)}}function Ie(T,W,$,B,ne,Te){T.onBeforeRender(p,W,$,B,ne,Te),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ne.onBeforeRender(p,W,$,B,T,Te),ne.transparent===!0&&ne.side===ii&&ne.forceSinglePass===!1?(ne.side=_n,ne.needsUpdate=!0,p.renderBufferDirect($,W,B,ne,T,Te),ne.side=Oi,ne.needsUpdate=!0,p.renderBufferDirect($,W,B,ne,T,Te),ne.side=ii):p.renderBufferDirect($,W,B,ne,T,Te),T.onAfterRender(p,W,$,B,ne,Te)}function Fe(T,W,$){W.isScene!==!0&&(W=de);const B=ie.get(T),ne=_.state.lights,Te=_.state.shadowsArray,Pe=ne.state.version,Ce=Xe.getParameters(T,ne.state,Te,W,$),Ue=Xe.getProgramCacheKey(Ce);let We=B.programs;B.environment=T.isMeshStandardMaterial?W.environment:null,B.fog=W.fog,B.envMap=(T.isMeshStandardMaterial?Re:Ee).get(T.envMap||B.environment),We===void 0&&(T.addEventListener("dispose",ct),We=new Map,B.programs=We);let Ve=We.get(Ue);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===Pe)return je(T,Ce),Ve}else Ce.uniforms=Xe.getUniforms(T),T.onBuild($,Ce,p),T.onBeforeCompile(Ce,p),Ve=Xe.acquireProgram(Ce,Ue),We.set(Ue,Ve),B.uniforms=Ce.uniforms;const Ne=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=J.uniform),je(T,Ce),B.needsLights=xt(T),B.lightsStateVersion=Pe,B.needsLights&&(Ne.ambientLightColor.value=ne.state.ambient,Ne.lightProbe.value=ne.state.probe,Ne.directionalLights.value=ne.state.directional,Ne.directionalLightShadows.value=ne.state.directionalShadow,Ne.spotLights.value=ne.state.spot,Ne.spotLightShadows.value=ne.state.spotShadow,Ne.rectAreaLights.value=ne.state.rectArea,Ne.ltc_1.value=ne.state.rectAreaLTC1,Ne.ltc_2.value=ne.state.rectAreaLTC2,Ne.pointLights.value=ne.state.point,Ne.pointLightShadows.value=ne.state.pointShadow,Ne.hemisphereLights.value=ne.state.hemi,Ne.directionalShadowMap.value=ne.state.directionalShadowMap,Ne.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ne.spotShadowMap.value=ne.state.spotShadowMap,Ne.spotLightMatrix.value=ne.state.spotLightMatrix,Ne.spotLightMap.value=ne.state.spotLightMap,Ne.pointShadowMap.value=ne.state.pointShadowMap,Ne.pointShadowMatrix.value=ne.state.pointShadowMatrix);const He=Ve.getUniforms(),gt=Ua.seqWithValue(He.seq,Ne);return B.currentProgram=Ve,B.uniformsList=gt,Ve}function je(T,W){const $=ie.get(T);$.outputEncoding=W.outputEncoding,$.instancing=W.instancing,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Lt(T,W,$,B,ne){W.isScene!==!0&&(W=de),me.resetTextureUnits();const Te=W.fog,Pe=B.isMeshStandardMaterial?W.environment:null,Ce=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Nr,Ue=(B.isMeshStandardMaterial?Re:Ee).get(B.envMap||Pe),We=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ve=!!B.normalMap&&!!$.attributes.tangent,Ne=!!$.morphAttributes.position,He=!!$.morphAttributes.normal,gt=!!$.morphAttributes.color,rn=B.toneMapped?p.toneMapping:Di,ai=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_t=ai!==void 0?ai.length:0,Ge=ie.get(B),vi=_.state.lights;if(L===!0&&(Me===!0||T!==A)){const Sn=T===A&&B.id===E;J.setState(B,T,Sn)}let kt=!1;B.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==vi.state.version||Ge.outputEncoding!==Ce||ne.isInstancedMesh&&Ge.instancing===!1||!ne.isInstancedMesh&&Ge.instancing===!0||ne.isSkinnedMesh&&Ge.skinning===!1||!ne.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Ue||B.fog===!0&&Ge.fog!==Te||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==J.numPlanes||Ge.numIntersection!==J.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Ve||Ge.morphTargets!==Ne||Ge.morphNormals!==He||Ge.morphColors!==gt||Ge.toneMapping!==rn||X.isWebGL2===!0&&Ge.morphTargetsCount!==_t)&&(kt=!0):(kt=!0,Ge.__version=B.version);let ur=Ge.currentProgram;kt===!0&&(ur=Fe(B,W,ne));let zu=!1,to=!1,xl=!1;const sn=ur.getUniforms(),hr=Ge.uniforms;if(se.useProgram(ur.program)&&(zu=!0,to=!0,xl=!0),B.id!==E&&(E=B.id,to=!0),zu||A!==T){if(sn.setValue(R,"projectionMatrix",T.projectionMatrix),X.logarithmicDepthBuffer&&sn.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),A!==T&&(A=T,to=!0,xl=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Sn=sn.map.cameraPosition;Sn!==void 0&&Sn.setValue(R,ee.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&sn.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||ne.isSkinnedMesh)&&sn.setValue(R,"viewMatrix",T.matrixWorldInverse)}if(ne.isSkinnedMesh){sn.setOptional(R,ne,"bindMatrix"),sn.setOptional(R,ne,"bindMatrixInverse");const Sn=ne.skeleton;Sn&&(X.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),sn.setValue(R,"boneTexture",Sn.boneTexture,me),sn.setValue(R,"boneTextureSize",Sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vl=$.morphAttributes;if((vl.position!==void 0||vl.normal!==void 0||vl.color!==void 0&&X.isWebGL2===!0)&&pe.update(ne,$,ur),(to||Ge.receiveShadow!==ne.receiveShadow)&&(Ge.receiveShadow=ne.receiveShadow,sn.setValue(R,"receiveShadow",ne.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(hr.envMap.value=Ue,hr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),to&&(sn.setValue(R,"toneMappingExposure",p.toneMappingExposure),Ge.needsLights&&at(hr,xl),Te&&B.fog===!0&&st.refreshFogUniforms(hr,Te),st.refreshMaterialUniforms(hr,B,N,F,ue),Ua.upload(R,Ge.uniformsList,hr,me)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ua.upload(R,Ge.uniformsList,hr,me),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&sn.setValue(R,"center",ne.center),sn.setValue(R,"modelViewMatrix",ne.modelViewMatrix),sn.setValue(R,"normalMatrix",ne.normalMatrix),sn.setValue(R,"modelMatrix",ne.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Sn=B.uniformsGroups;for(let yl=0,Lm=Sn.length;yl<Lm;yl++)if(X.isWebGL2){const Bu=Sn[yl];be.update(Bu,ur),be.bind(Bu,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function at(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function xt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,W,$){ie.get(T.texture).__webglTexture=W,ie.get(T.depthTexture).__webglTexture=$;const B=ie.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=$===void 0,B.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,W){const $=ie.get(T);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,$=0){M=T,v=W,x=$;let B=!0,ne=null,Te=!1,Pe=!1;if(T){const Ue=ie.get(T);Ue.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),B=!1):Ue.__webglFramebuffer===void 0?me.setupRenderTarget(T):Ue.__hasExternalTextures&&me.rebindTextures(T,ie.get(T.texture).__webglTexture,ie.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Ve=ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ne=Ve[W],Te=!0):X.isWebGL2&&T.samples>0&&me.useMultisampledRTT(T)===!1?ne=ie.get(T).__webglMultisampledFramebuffer:ne=Ve,P.copy(T.viewport),y.copy(T.scissor),w=T.scissorTest}else P.copy(te).multiplyScalar(N).floor(),y.copy(z).multiplyScalar(N).floor(),w=j;if(se.bindFramebuffer(36160,ne)&&X.drawBuffers&&B&&se.drawBuffers(T,ne),se.viewport(P),se.scissor(y),se.setScissorTest(w),Te){const Ue=ie.get(T.texture);R.framebufferTexture2D(36160,36064,34069+W,Ue.__webglTexture,$)}else if(Pe){const Ue=ie.get(T.texture),We=W||0;R.framebufferTextureLayer(36160,36064,Ue.__webglTexture,$||0,We)}E=-1},this.readRenderTargetPixels=function(T,W,$,B,ne,Te,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ce=Ce[Pe]),Ce){se.bindFramebuffer(36160,Ce);try{const Ue=T.texture,We=Ue.format,Ve=Ue.type;if(We!==Vn&&Y.convert(We)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ve===Uo&&(O.has("EXT_color_buffer_half_float")||X.isWebGL2&&O.has("EXT_color_buffer_float"));if(Ve!==Or&&Y.convert(Ve)!==R.getParameter(35738)&&!(Ve===ji&&(X.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-B&&$>=0&&$<=T.height-ne&&R.readPixels(W,$,B,ne,Y.convert(We),Y.convert(Ve),Te)}finally{const Ue=M!==null?ie.get(M).__webglFramebuffer:null;se.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(T,W,$=0){const B=Math.pow(2,-$),ne=Math.floor(W.image.width*B),Te=Math.floor(W.image.height*B);me.setTexture2D(W,0),R.copyTexSubImage2D(3553,$,0,0,T.x,T.y,ne,Te),se.unbindTexture()},this.copyTextureToTexture=function(T,W,$,B=0){const ne=W.image.width,Te=W.image.height,Pe=Y.convert($.format),Ce=Y.convert($.type);me.setTexture2D($,0),R.pixelStorei(37440,$.flipY),R.pixelStorei(37441,$.premultiplyAlpha),R.pixelStorei(3317,$.unpackAlignment),W.isDataTexture?R.texSubImage2D(3553,B,T.x,T.y,ne,Te,Pe,Ce,W.image.data):W.isCompressedTexture?R.compressedTexSubImage2D(3553,B,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,Pe,W.mipmaps[0].data):R.texSubImage2D(3553,B,T.x,T.y,Pe,Ce,W.image),B===0&&$.generateMipmaps&&R.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(T,W,$,B,ne=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=T.max.x-T.min.x+1,Pe=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Ue=Y.convert(B.format),We=Y.convert(B.type);let Ve;if(B.isData3DTexture)me.setTexture3D(B,0),Ve=32879;else if(B.isDataArrayTexture)me.setTexture2DArray(B,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,B.flipY),R.pixelStorei(37441,B.premultiplyAlpha),R.pixelStorei(3317,B.unpackAlignment);const Ne=R.getParameter(3314),He=R.getParameter(32878),gt=R.getParameter(3316),rn=R.getParameter(3315),ai=R.getParameter(32877),_t=$.isCompressedTexture?$.mipmaps[0]:$.image;R.pixelStorei(3314,_t.width),R.pixelStorei(32878,_t.height),R.pixelStorei(3316,T.min.x),R.pixelStorei(3315,T.min.y),R.pixelStorei(32877,T.min.z),$.isDataTexture||$.isData3DTexture?R.texSubImage3D(Ve,ne,W.x,W.y,W.z,Te,Pe,Ce,Ue,We,_t.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ve,ne,W.x,W.y,W.z,Te,Pe,Ce,Ue,_t.data)):R.texSubImage3D(Ve,ne,W.x,W.y,W.z,Te,Pe,Ce,Ue,We,_t),R.pixelStorei(3314,Ne),R.pixelStorei(32878,He),R.pixelStorei(3316,gt),R.pixelStorei(3315,rn),R.pixelStorei(32877,ai),ne===0&&B.generateMipmaps&&R.generateMipmap(Ve),se.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?me.setTextureCube(T,0):T.isData3DTexture?me.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?me.setTexture2DArray(T,0):me.setTexture2D(T,0),se.unbindTexture()},this.resetState=function(){v=0,x=0,M=null,se.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class By extends Vd{}By.prototype.isWebGL1Renderer=!0;class Hy extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Vy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new H;class cu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const rf=new H,sf=new mt,of=new mt,Gy=new H,af=new Qe,hs=new H;class Wy extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)hs.fromBufferAttribute(t,n),this.applyBoneTransform(n,hs),this.boundingBox.expandByPoint(hs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)hs.fromBufferAttribute(t,n),this.applyBoneTransform(n,hs),this.boundingSphere.expandByPoint(hs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sf.fromBufferAttribute(i.attributes.skinIndex,e),of.fromBufferAttribute(i.attributes.skinWeight,e),rf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=of.getComponent(r);if(s!==0){const o=sf.getComponent(r);af.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Gy.copy(rf).applyMatrix4(af),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Gd extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xy extends Vt{constructor(e=null,t=1,n=1,i,r,s,o,l,c=Rt,u=Rt,h,f){super(null,s,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lf=new Qe,qy=new Qe;class uu{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:qy;lf.multiplyMatrices(o,t[r]),lf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new uu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=wd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xy(t,e,e,Vn,ji);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Gd),this.bones.push(s),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class cf extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new Qe,uf=new Qe,xa=[],hf=new Fi,jy=new Qe,oo=new en,ao=new ki;class Yy extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cf(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),hf.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(hf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),ao.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fs),uf.multiplyMatrices(n,fs),oo.matrixWorld=uf,oo.raycast(e,xa);for(let s=0,o=xa.length;s<o;s++){const l=xa[s];l.instanceId=r,l.object=this,t.push(l)}xa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Wd extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ff=new H,df=new H,pf=new Qe,Kl=new ou,va=new ki;class hu extends St{constructor(e=new Kn,t=new Wd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ff.fromBufferAttribute(t,i-1),df.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ff.distanceTo(df);e.setAttribute("lineDistance",new qn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;pf.copy(i).invert(),Kl.copy(e.ray).applyMatrix4(pf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new H,u=new H,h=new H,f=new H,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,s.start),S=Math.min(_.count,s.start+s.count);for(let v=p,x=S-1;v<x;v+=d){const M=_.getX(v),E=_.getX(v+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),Kl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),S=Math.min(m.count,s.start+s.count);for(let v=p,x=S-1;v<x;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Kl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const mf=new H,gf=new H;class Ky extends hu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)mf.fromBufferAttribute(t,i),gf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mf.distanceTo(gf);e.setAttribute("lineDistance",new qn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $y extends hu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xd extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _f=new Qe,Ac=new ou,ya=new ki,Ma=new H;class Zy extends St{constructor(e=new Kn,t=new Xd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;_f.copy(i).invert(),Ac.copy(e.ray).applyMatrix4(_f);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);Ma.fromBufferAttribute(h,m),xf(Ma,m,l,i,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let _=f,g=d;_<g;_++)Ma.fromBufferAttribute(h,_),xf(Ma,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xf(a,e,t,n,i,r,s){const o=Ac.distanceSqToPoint(a);if(o<t){const l=new H;Ac.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class Jy extends Vt{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:Jt,this.magFilter=r!==void 0?r:Jt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class fu extends Kn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],s=[],o=[],l=[],c=new H,u=new qe;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),s.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(s[f]/e+1)/2,u.y=(s[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qn(s,3)),this.setAttribute("normal",new qn(o,3)),this.setAttribute("uv",new qn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class br extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xr extends br{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Gi(a,e,t){return qd(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Sa(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function qd(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Qy(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function vf(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function jd(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class Ko{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class eM extends Ko{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case _h:r=e,o=2*t-n;break;case xh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _h:s=e,l=2*n-t;break;case xh:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,S=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*m+(1.5+d)*g+.5*_,x=d*m-d*g;for(let M=0;M!==o;++M)r[M]=p*s[u+M]+S*s[c+M]+v*s[l+M]+x*s[h+M];return r}}class tM extends Ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class nM extends Ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class xi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fo:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return El}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=Gi(n,r,s),this.values=Gi(this.values,r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&qd(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Gi(this.times),t=Gi(this.values),n=this.getValueSize(),i=this.getInterpolation()===El,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=Gi(e,0,s),this.values=Gi(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Gi(this.times,0),t=Gi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=ks;class Js extends xi{}Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Fo;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Yd extends xi{}Yd.prototype.ValueTypeName="color";class zo extends xi{}zo.prototype.ValueTypeName="number";class iM extends Ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)gi.slerpFlat(r,0,s,c-o,s,c,l);return r}}class kr extends xi{InterpolantFactoryMethodLinear(e){return new iM(this.times,this.values,this.getValueSize(),e)}}kr.prototype.ValueTypeName="quaternion";kr.prototype.DefaultInterpolation=ks;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends xi{}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Fo;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bo extends xi{}Bo.prototype.ValueTypeName="vector";class rM{constructor(e,t=-1,n,i=vg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(oM(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(xi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Qy(l);l=vf(l,1,u),c=vf(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new zo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];jd(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let S=0;S!==f[_].morphTargets.length;++S){const v=f[_];m.push(v.time),p.push(v.morphTarget===g?1:0)}i.push(new zo(".morphTargetInfluence["+g+"]",m,p))}l=d.length*s}else{const d=".bones["+t[h].name+"]";n(Bo,d+".position",f,"pos",i),n(kr,d+".quaternion",f,"rot",i),n(Bo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sM(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zo;case"vector":case"vector2":case"vector3":case"vector4":return Bo;case"color":return Yd;case"quaternion":return kr;case"bool":case"boolean":return Js;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function oM(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sM(a.type);if(a.times===void 0){const t=[],n=[];jd(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Vs={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class aM{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const lM=new aM;class eo{constructor(e){this.manager=e!==void 0?e:lM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ei={};class cM extends Error{constructor(e,t){super(e),this.response=t}}class Ka extends eo{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:i});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ei[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:v,value:x})=>{if(v)p.close();else{g+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let E=0,A=u.length;E<A;E++){const P=u[E];P.onProgress&&P.onProgress(M)}p.enqueue(x),S()}})}}});return new Response(m)}else throw new cM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Vs.add(e,c);const u=Ei[e];delete Ei[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class uM extends eo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Vs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=ko("img");function l(){u(),Vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class hM extends eo{constructor(e){super(e)}load(e,t,n,i){const r=new Vt,s=new uM(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class $o extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $l=new Qe,yf=new H,Mf=new H;class du{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new au,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),Mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mf),t.updateMatrixWorld(),$l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fM extends du{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dM extends $o{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new fM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sf=new Qe,lo=new H,Zl=new H;class pM extends du{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),n.position.copy(lo),Zl.copy(n.position),Zl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zl),n.updateMatrixWorld(),i.makeTranslation(-lo.x,-lo.y,-lo.z),Sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf)}}class mM extends $o{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gM extends du{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kd extends $o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new gM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _M extends $o{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bf extends $o{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Cc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xM extends eo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Vs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Vs.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const pu="\\[\\]\\.:\\/",vM=new RegExp("["+pu+"]","g"),mu="[^"+pu+"]",yM="[^"+pu.replace("\\.","")+"]",MM=/((?:WC+[\/:])*)/.source.replace("WC",mu),SM=/(WCOD+)?/.source.replace("WCOD",yM),bM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mu),wM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mu),TM=new RegExp("^"+MM+SM+bM+wM+"$"),EM=["material","materials","bones","map"];class AM{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vM,"")}static parseTrackName(e){const t=TM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);EM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=AM;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=iu);function CM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var zr={},LM={get exports(){return zr},set exports(a){zr=a}},As=typeof Reflect=="object"?Reflect:null,Tf=As&&typeof As.apply=="function"?As.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},Fa;As&&typeof As.ownKeys=="function"?Fa=As.ownKeys:Object.getOwnPropertySymbols?Fa=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Fa=function(e){return Object.getOwnPropertyNames(e)};function PM(a){console&&console.warn&&console.warn(a)}var $d=Number.isNaN||function(e){return e!==e};function ht(){ht.init.call(this)}LM.exports=ht;zr.once=OM;ht.EventEmitter=ht;ht.prototype._events=void 0;ht.prototype._eventsCount=0;ht.prototype._maxListeners=void 0;var Ef=10;function dl(a){if(typeof a!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof a)}Object.defineProperty(ht,"defaultMaxListeners",{enumerable:!0,get:function(){return Ef},set:function(a){if(typeof a!="number"||a<0||$d(a))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+a+".");Ef=a}});ht.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ht.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||$d(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Zd(a){return a._maxListeners===void 0?ht.defaultMaxListeners:a._maxListeners}ht.prototype.getMaxListeners=function(){return Zd(this)};ht.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",r=this._events;if(r!==void 0)i=i&&r.error===void 0;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var o=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw o.context=s,o}var l=r[e];if(l===void 0)return!1;if(typeof l=="function")Tf(l,this,t);else for(var c=l.length,u=np(l,c),n=0;n<c;++n)Tf(u[n],this,t);return!0};function Jd(a,e,t,n){var i,r,s;if(dl(t),r=a._events,r===void 0?(r=a._events=Object.create(null),a._eventsCount=0):(r.newListener!==void 0&&(a.emit("newListener",e,t.listener?t.listener:t),r=a._events),s=r[e]),s===void 0)s=r[e]=t,++a._eventsCount;else if(typeof s=="function"?s=r[e]=n?[t,s]:[s,t]:n?s.unshift(t):s.push(t),i=Zd(a),i>0&&s.length>i&&!s.warned){s.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=a,o.type=e,o.count=s.length,PM(o)}return a}ht.prototype.addListener=function(e,t){return Jd(this,e,t,!1)};ht.prototype.on=ht.prototype.addListener;ht.prototype.prependListener=function(e,t){return Jd(this,e,t,!0)};function RM(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Qd(a,e,t){var n={fired:!1,wrapFn:void 0,target:a,type:e,listener:t},i=RM.bind(n);return i.listener=t,n.wrapFn=i,i}ht.prototype.once=function(e,t){return dl(t),this.on(e,Qd(this,e,t)),this};ht.prototype.prependOnceListener=function(e,t){return dl(t),this.prependListener(e,Qd(this,e,t)),this};ht.prototype.removeListener=function(e,t){var n,i,r,s,o;if(dl(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(r=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,r=s;break}if(r<0)return this;r===0?n.shift():DM(n,r),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,o||t)}return this};ht.prototype.off=ht.prototype.removeListener;ht.prototype.removeAllListeners=function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var r=Object.keys(n),s;for(i=0;i<r.length;++i)s=r[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this};function ep(a,e,t){var n=a._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?IM(i):np(i,i.length)}ht.prototype.listeners=function(e){return ep(this,e,!0)};ht.prototype.rawListeners=function(e){return ep(this,e,!1)};ht.listenerCount=function(a,e){return typeof a.listenerCount=="function"?a.listenerCount(e):tp.call(a,e)};ht.prototype.listenerCount=tp;function tp(a){var e=this._events;if(e!==void 0){var t=e[a];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}ht.prototype.eventNames=function(){return this._eventsCount>0?Fa(this._events):[]};function np(a,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=a[n];return t}function DM(a,e){for(;e+1<a.length;e++)a[e]=a[e+1];a.pop()}function IM(a){for(var e=new Array(a.length),t=0;t<e.length;++t)e[t]=a[t].listener||a[t];return e}function OM(a,e){return new Promise(function(t,n){function i(s){a.removeListener(e,r),n(s)}function r(){typeof a.removeListener=="function"&&a.removeListener("error",i),t([].slice.call(arguments))}ip(a,e,r,{once:!0}),e!=="error"&&NM(a,i,{once:!0})})}function NM(a,e,t){typeof a.on=="function"&&ip(a,"error",e,t)}function ip(a,e,t,n){if(typeof a.on=="function")n.once?a.once(e,t):a.on(e,t);else if(typeof a.addEventListener=="function")a.addEventListener(e,function i(r){n.once&&a.removeEventListener(e,i),t(r)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof a)}class UM extends zr.EventEmitter{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.frustrum=5,this.width<968?this.device="mobile":this.device="desktop",window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.emit("resize"),this.width<968&&this.device!=="mobile"?(this.device="mobile",this.emit("switchdevice",this.device)):this.width>=968&&this.device!=="desktop"&&(this.device="desktop",this.emit("switchdevice",this.device))})}}class FM extends zr.EventEmitter{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.update()}update(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.emit("update"),window.requestAnimationFrame(()=>this.update())}}function Af(a,e){if(e===yg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Sc||e===Md){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Sc)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class kM extends eo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new GM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new eS(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Cc.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ka(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===rp){try{s[it.KHR_BINARY_GLTF]=new tS(e)}catch(h){i&&i(h);return}r=JSON.parse(s[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new pS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case it.KHR_MATERIALS_UNLIT:s[h]=new HM;break;case it.KHR_DRACO_MESH_COMPRESSION:s[h]=new nS(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:s[h]=new iS;break;case it.KHR_MESH_QUANTIZATION:s[h]=new rS;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function zM(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BM{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ke(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Kd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new mM(u),c.distance=h;break;case"spot":c=new dM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class HM{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Yi}extendParams(e,t,n){const i=[];e.color=new Ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,lt))}return Promise.all(i)}}class VM{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class GM{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(o,o)}return Promise.all(r)}}class WM{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class XM{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,lt)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class qM{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class jM{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ke(o[0],o[1],o[2]),Promise.all(r)}}class YM{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class KM{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Ke(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,lt)),Promise.all(r)}}class $M{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class ZM{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class JM{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class QM{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class eS{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new Qe,m=new H,p=new gi,S=new H(1,1,1),v=new Yy(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&S.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,g.compose(m,p,S));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);St.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const rp="glTF",co=12,Cf={JSON:1313821514,BIN:5130562};class tS{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-co,r=new DataView(e,co);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===Cf.JSON){const c=new Uint8Array(e,co+s,o);this.content=n.decode(c)}else if(l===Cf.BIN){const c=co+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=Lc[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=Lc[u]||u.toLowerCase();if(s[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Cs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const _=f.attributes[d],g=l[d];g!==void 0&&(_.normalized=g)}h(f)},o,c)})})}}class iS{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rS{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class sp extends Ko{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,S=1-m,v=p-f+h;for(let x=0;x!==o;x++){const M=s[g+x+o],E=s[g+x+l]*u,A=s[_+x+o],P=s[_+x]*u;r[x]=S*M+v*E+m*A+p*P}return r}}const sS=new gi;class oS extends sp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return sS.fromArray(r).normalize().toArray(r),r}}const Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lf={9728:Rt,9729:Jt,9984:Mc,9985:vd,9986:Na,9987:Ir},Pf={33071:Hn,33648:Ya,10497:Us},Jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aS={CUBICSPLINE:void 0,LINEAR:ks,STEP:Fo},Ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lS(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new br({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),a.DefaultMaterial}function uo(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cS(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function uS(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hS(a){const e=a.extensions&&a.extensions[it.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Rf(e.attributes):t=a.indices+":"+Rf(a.attributes)+":"+a.mode,t}function Rf(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Pc(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fS(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const dS=new Qe;class pS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new hM(this.options.manager):this.textureLoader=new xM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ka(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};uo(r,o,i),qi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(Cc.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=Jl[i.type],o=Cs[i.componentType],l=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new Yt(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=Jl[i.type],c=Cs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(S);v||(g=new c(o,p*d,i.count*d/u),v=new Vy(g,d/u),t.cache.add(S,v)),m=new cu(v,l,f%d/u,_)}else o===null?g=new c(i.count*l):g=new c(o,f,i.count*l),m=new Yt(g,l,_);if(i.sparse!==void 0){const p=Jl.SCALAR,S=Cs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,M=new S(s[1],v,i.sparse.count*p),E=new c(s[2],x,i.sparse.count*l);o!==null&&(m=new Yt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,P=M.length;A<P;A++){const y=M[A];if(m.setX(y,E[A*l]),l>=2&&m.setY(y,E[A*l+1]),l>=3&&m.setZ(y,E[A*l+2]),l>=4&&m.setW(y,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[s.sampler]||{};return u.magFilter=Lf[f.magFilter]||Jt,u.minFilter=Lf[f.minFilter]||Ir,u.wrapS=Pf[f.wrapS]||Us,u.wrapT=Pf[f.wrapT]||Us,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Vt(g);m.needsUpdate=!0,f(m)}),t.load(Cc.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=s.mimeType||fS(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Xd,di.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Wd,di.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return br}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){const h=i[it.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ke(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,lt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ii);const u=r.alphaMode||Ql.OPAQUE;if(u===Ql.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ql.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Yi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==Yi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Yi&&(o.emissive=new Ke().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==Yi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,lt)),Promise.all(c).then(function(){const h=new s(o);return r.name&&(h.name=r.name),qi(h,r),t.associations.set(h,{materials:e}),r.extensions&&uo(i,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Df(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=hS(c),h=i[u];if(h)s.push(h.promise);else{let f;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Df(new Kn,c,t),i[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?lS(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=s[d];let p;const S=c[d];if(m.mode===Fn.TRIANGLES||m.mode===Fn.TRIANGLE_STRIP||m.mode===Fn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Wy(g,S):new en(g,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Fn.TRIANGLE_STRIP?p.geometry=Af(p.geometry,Md):m.mode===Fn.TRIANGLE_FAN&&(p.geometry=Af(p.geometry,Sc));else if(m.mode===Fn.LINES)p=new Ky(g,S);else if(m.mode===Fn.LINE_STRIP)p=new hu(g,S);else if(m.mode===Fn.LINE_LOOP)p=new $y(g,S);else if(m.mode===Fn.POINTS)p=new Zy(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&uS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),qi(p,r),m.extensions&&uo(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new Ki;t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new hn(kg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){o.push(h);const f=new Qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new uu(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],s=[],o=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const f=n.channels[u],d=n.samplers[f.sampler],_=f.target,g=_.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,p=n.parameters!==void 0?n.parameters[d.output]:d.output;_.node!==void 0&&(r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),l.push(d),c.push(_))}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],d=u[2],_=u[3],g=u[4],m=[];for(let p=0,S=h.length;p<S;p++){const v=h[p],x=f[p],M=d[p],E=_[p],A=g[p];if(v===void 0)continue;v.updateMatrix();let P;switch(Wi[A.path]){case Wi.weights:P=zo;break;case Wi.rotation:P=kr;break;case Wi.position:case Wi.scale:default:P=Bo;break}const y=v.name?v.name:v.uuid,w=E.interpolation!==void 0?aS[E.interpolation]:ks,q=[];Wi[A.path]===Wi.weights?v.traverse(function(N){N.morphTargetInfluences&&q.push(N.name?N.name:N.uuid)}):q.push(y);let F=M.array;if(M.normalized){const N=Pc(F.constructor),k=new Float32Array(F.length);for(let V=0,te=F.length;V<te;V++)k[V]=F[V]*N;F=k}for(let N=0,k=q.length;N<k;N++){const V=new P(q[N]+"."+Wi[A.path],x.array,F,w);E.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(z){const j=this instanceof kr?oS:sp;return new j(this.times,this.values,this.getValueSize()/3,z)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(V)}}return new rM(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)s.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,dS)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Gd:c.length>1?u=new Ki:c.length===1?u=c[0]:u=new St,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),qi(u,r),r.extensions&&uo(n,u,r),r.matrix!==void 0){const h=new Qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ki;n.name&&(r.name=i.createUniqueName(n.name)),qi(r,n),n.extensions&&uo(t,r,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof di||f instanceof Vt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}}function mS(a,e,t){const n=e.attributes,i=new Fi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),o.normalized){const u=Pc(Cs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new H,l=new H;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Pc(Cs[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new ki;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function Df(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=Lc[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return qi(a,e),mS(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cS(a,e.targets,t):a})}const ec=new WeakMap;class gS extends eo{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Ka(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{this.parse(s,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,zn).catch(n)}decodeDracoFile(e,t,n,i,r=zs){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ec.has(e)){const l=ec.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,s=e.byteLength,o=this._getWorker(r,s).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),ec.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Kn;e.index&&t.setIndex(new Yt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,s=i.array,o=i.itemSize,l=new Yt(s,o);r==="color"&&this._assignVertexColorSpace(l,i.vertexColorSpace),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==zn)return;const n=new Ke;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ka(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=_S.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const s=r.data;switch(s.type){case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function _S(){let a,e;onmessage=function(s){const o=s.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(u){a.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{h.destroy(f)}});break}};function t(s,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const _=o.GetEncodedGeometryType(l);if(_===s.TRIANGULAR_MESH)f=new s.Mesh,d=o.DecodeArrayToMesh(l,l.byteLength,f);else if(_===s.POINT_CLOUD)f=new s.PointCloud,d=o.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let S,v;if(c.useUniqueIDs)v=u[m],S=o.GetAttributeByUniqueId(f,v);else{if(v=o.GetAttributeId(f,s[u[m]]),v===-1)continue;S=o.GetAttribute(f,v)}const x=i(s,o,f,m,p,S);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),g.attributes.push(x)}return _===s.TRIANGULAR_MESH&&(g.index=n(s,o,f)),s.destroy(f),g}function n(s,o,l){const u=l.num_faces()*3,h=u*4,f=s._malloc(h);o.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(s.HEAPF32.buffer,f,u).slice();return s._free(f),{array:d,itemSize:1}}function i(s,o,l,c,u,h){const f=h.num_components(),_=l.num_points()*f,g=_*u.BYTES_PER_ELEMENT,m=r(s,u),p=s._malloc(g);o.GetAttributeDataArrayForAllPoints(l,h,m,g,p);const S=new u(s.HEAPF32.buffer,p,_).slice();return s._free(p),{name:c,array:S,itemSize:f}}function r(s,o){switch(o){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}class xS extends zr.EventEmitter{constructor(e){super(),this.experience=new In,this.renderer=this.experience.renderer,this.assets=e,this.items={},this.queue=this.assets.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new kM,this.loaders.dracoLoader=new gS,this.loaders.dracoLoader.setDecoderPath("/draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}startLoading(){for(const e of this.assets)e.type==="glbModel"?this.loaders.gltfLoader.load(e.path,t=>{this.singleAssetLoaded(e,t)}):e.type==="videoTexture"&&(this.video={},this.videoTexture={},this.video[e.name]=document.createElement("video"),this.video[e.name].src=e.path,this.video[e.name].muted=!0,this.video[e.name].playsInline=!0,this.video[e.name].autoplay=!0,this.video[e.name].loop=!0,this.video[e.name].play(),this.videoTexture[e.name]=new Jy(this.video[e.name]),this.videoTexture[e.name].minFilter=Rt,this.videoTexture[e.name].magFilter=Rt,this.videoTexture[e.name].generateMipmaps=!1,this.videoTexture[e.name].encoding=lt,this.singleAssetLoaded(e,this.videoTexture[e.name]))}singleAssetLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.queue&&this.emit("ready")}}const vS=[{name:"room",type:"glbModel",path:"/models/RomanRoomPortfolio8(Mail)4.glb"},{name:"screen",type:"videoTexture",path:"/textures/screenVideo1.mp4"}],If={type:"change"},tc={type:"start"},Of={type:"end"};class yS extends Wr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",Xe),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(If),n.update(),r=i.NONE},this.update=function(){const I=new H,oe=new gi().setFromUnitVectors(e.up,new H(0,1,0)),Y=oe.clone().invert(),ge=new H,be=new gi,Le=2*Math.PI;return function(){const Ae=n.object.position;I.copy(Ae).sub(n.target),I.applyQuaternion(oe),o.setFromVector3(I),n.autoRotate&&r===i.NONE&&y(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ke=n.minAzimuthAngle,ve=n.maxAzimuthAngle;return isFinite(ke)&&isFinite(ve)&&(ke<-Math.PI?ke+=Le:ke>Math.PI&&(ke-=Le),ve<-Math.PI?ve+=Le:ve>Math.PI&&(ve-=Le),ke<=ve?o.theta=Math.max(ke,Math.min(ve,o.theta)):o.theta=o.theta>(ke+ve)/2?Math.max(ke,o.theta):Math.min(ve,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),I.setFromSpherical(o),I.applyQuaternion(Y),Ae.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ge.distanceToSquared(n.object.position)>s||8*(1-be.dot(n.object.quaternion))>s?(n.dispatchEvent(If),ge.copy(n.object.position),be.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",b),n.domElement.removeEventListener("pointerdown",me),n.domElement.removeEventListener("pointercancel",Re),n.domElement.removeEventListener("wheel",we),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",Re),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Xe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,o=new wf,l=new wf;let c=1;const u=new H;let h=!1;const f=new qe,d=new qe,_=new qe,g=new qe,m=new qe,p=new qe,S=new qe,v=new qe,x=new qe,M=[],E={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function P(){return Math.pow(.95,n.zoomSpeed)}function y(I){l.theta-=I}function w(I){l.phi-=I}const q=function(){const I=new H;return function(Y,ge){I.setFromMatrixColumn(ge,0),I.multiplyScalar(-Y),u.add(I)}}(),F=function(){const I=new H;return function(Y,ge){n.screenSpacePanning===!0?I.setFromMatrixColumn(ge,1):(I.setFromMatrixColumn(ge,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(Y),u.add(I)}}(),N=function(){const I=new H;return function(Y,ge){const be=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;I.copy(Le).sub(n.target);let ye=I.length();ye*=Math.tan(n.object.fov/2*Math.PI/180),q(2*Y*ye/be.clientHeight,n.object.matrix),F(2*ge*ye/be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(Y*(n.object.right-n.object.left)/n.object.zoom/be.clientWidth,n.object.matrix),F(ge*(n.object.top-n.object.bottom)/n.object.zoom/be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(I){n.object.isPerspectiveCamera?c/=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*I)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(I){n.object.isPerspectiveCamera?c*=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/I)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(I){f.set(I.clientX,I.clientY)}function z(I){S.set(I.clientX,I.clientY)}function j(I){g.set(I.clientX,I.clientY)}function K(I){d.set(I.clientX,I.clientY),_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const oe=n.domElement;y(2*Math.PI*_.x/oe.clientHeight),w(2*Math.PI*_.y/oe.clientHeight),f.copy(d),n.update()}function L(I){v.set(I.clientX,I.clientY),x.subVectors(v,S),x.y>0?k(P()):x.y<0&&V(P()),S.copy(v),n.update()}function Me(I){m.set(I.clientX,I.clientY),p.subVectors(m,g).multiplyScalar(n.panSpeed),N(p.x,p.y),g.copy(m),n.update()}function ue(I){I.deltaY<0?V(P()):I.deltaY>0&&k(P()),n.update()}function Z(I){let oe=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),oe=!0;break}oe&&(I.preventDefault(),n.update())}function ee(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const I=.5*(M[0].pageX+M[1].pageX),oe=.5*(M[0].pageY+M[1].pageY);f.set(I,oe)}}function de(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const I=.5*(M[0].pageX+M[1].pageX),oe=.5*(M[0].pageY+M[1].pageY);g.set(I,oe)}}function fe(){const I=M[0].pageX-M[1].pageX,oe=M[0].pageY-M[1].pageY,Y=Math.sqrt(I*I+oe*oe);S.set(0,Y)}function R(){n.enableZoom&&fe(),n.enablePan&&de()}function D(){n.enableZoom&&fe(),n.enableRotate&&ee()}function O(I){if(M.length==1)d.set(I.pageX,I.pageY);else{const Y=pe(I),ge=.5*(I.pageX+Y.x),be=.5*(I.pageY+Y.y);d.set(ge,be)}_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const oe=n.domElement;y(2*Math.PI*_.x/oe.clientHeight),w(2*Math.PI*_.y/oe.clientHeight),f.copy(d)}function X(I){if(M.length===1)m.set(I.pageX,I.pageY);else{const oe=pe(I),Y=.5*(I.pageX+oe.x),ge=.5*(I.pageY+oe.y);m.set(Y,ge)}p.subVectors(m,g).multiplyScalar(n.panSpeed),N(p.x,p.y),g.copy(m)}function se(I){const oe=pe(I),Y=I.pageX-oe.x,ge=I.pageY-oe.y,be=Math.sqrt(Y*Y+ge*ge);v.set(0,be),x.set(0,Math.pow(v.y/S.y,n.zoomSpeed)),k(x.y),S.copy(v)}function re(I){n.enableZoom&&se(I),n.enablePan&&X(I)}function ie(I){n.enableZoom&&se(I),n.enableRotate&&O(I)}function me(I){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",Ee),n.domElement.addEventListener("pointerup",Re)),J(I),I.pointerType==="touch"?st(I):G(I))}function Ee(I){n.enabled!==!1&&(I.pointerType==="touch"?C(I):Be(I))}function Re(I){ce(I),M.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",Re)),n.dispatchEvent(Of),r=i.NONE}function G(I){let oe;switch(I.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case jr.DOLLY:if(n.enableZoom===!1)return;z(I),r=i.DOLLY;break;case jr.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;j(I),r=i.PAN}else{if(n.enableRotate===!1)return;te(I),r=i.ROTATE}break;case jr.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;te(I),r=i.ROTATE}else{if(n.enablePan===!1)return;j(I),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(tc)}function Be(I){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(I);break;case i.DOLLY:if(n.enableZoom===!1)return;L(I);break;case i.PAN:if(n.enablePan===!1)return;Me(I);break}}function we(I){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(I.preventDefault(),n.dispatchEvent(tc),ue(I),n.dispatchEvent(Of))}function Xe(I){n.enabled===!1||n.enablePan===!1||Z(I)}function st(I){switch(ae(I),M.length){case 1:switch(n.touches.ONE){case Yr.ROTATE:if(n.enableRotate===!1)return;ee(),r=i.TOUCH_ROTATE;break;case Yr.PAN:if(n.enablePan===!1)return;de(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Yr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(),r=i.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(tc)}function C(I){switch(ae(I),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;O(I),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;X(I),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;re(I),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(I),n.update();break;default:r=i.NONE}}function b(I){n.enabled!==!1&&I.preventDefault()}function J(I){M.push(I)}function ce(I){delete E[I.pointerId];for(let oe=0;oe<M.length;oe++)if(M[oe].pointerId==I.pointerId){M.splice(oe,1);return}}function ae(I){let oe=E[I.pointerId];oe===void 0&&(oe=new qe,E[I.pointerId]=oe),oe.set(I.pageX,I.pageY)}function pe(I){const oe=I.pointerId===M[0].pointerId?M[1]:M[0];return E[oe.pointerId]}n.domElement.addEventListener("contextmenu",b),n.domElement.addEventListener("pointerdown",me),n.domElement.addEventListener("pointercancel",Re),n.domElement.addEventListener("wheel",we,{passive:!1}),this.update()}}class MS{constructor(){this.experience=new In,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.createPerspectiveCamera(),this.createOrthographicCamera(),this.setOrbitControls()}createPerspectiveCamera(){this.perspectiveCamera=new hn(35,this.sizes.aspect,.1,1e3),this.scene.add(this.perspectiveCamera),this.perspectiveCamera.position.x=29,this.perspectiveCamera.position.y=14,this.perspectiveCamera.position.z=12}createOrthographicCamera(){this.orthographicCamera=new hl(-this.sizes.aspect*this.sizes.frustrum/2,this.sizes.aspect*this.sizes.frustrum/2,this.sizes.frustrum/2,-this.sizes.frustrum/2,-50,50),this.orthographicCamera.position.y=6.65,this.orthographicCamera.position.z=10,this.orthographicCamera.rotation.x=-Math.PI/6,this.scene.add(this.orthographicCamera)}setOrbitControls(){this.controls=new yS(this.perspectiveCamera,this.canvas),this.controls.enableDamping=!0,this.controls.enableZoom=!1}resize(){this.perspectiveCamera.aspect=this.sizes.aspect,this.perspectiveCamera.updateProjectionMatrix(),this.orthographicCamera.left=-this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.right=this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.top=this.sizes.frustrum/2,this.orthographicCamera.bottom=-this.sizes.frustrum/2,this.orthographicCamera.updateProjectionMatrix()}update(){this.controls.update()}}class SS extends zr.EventEmitter{constructor(){super(),this.theme="light",this.toggleButton=document.querySelector(".toggle-button"),this.toggleCircle=document.querySelector(".toggle-circle"),this.setEventListeners()}setEventListeners(){this.toggleButton.addEventListener("click",()=>{this.toggleCircle.classList.toggle("slide"),this.theme=this.theme==="light"?"dark":"light",document.body.classList.toggle("dark-theme"),document.body.classList.toggle("light-theme"),this.emit("switch",this.theme)})}}class bS{constructor(){this.experience=new In,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setRenderer()}setRenderer(){this.renderer=new Vd({canvas:this.canvas,antialias:!0}),this.renderer.useLegacyLights=!0,this.renderer.outputEncoding=lt,this.renderer.toneMapping=_d,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ru,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}update(){this.renderer.setViewport(0,0,this.sizes.width,this.sizes.height),this.renderer.render(this.scene,this.camera.orthographicCamera)}}function Ai(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function op(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gs={duration:.5,overwrite:!1,delay:0},gu,tn,Dt,Gn=1e8,pt=1/Gn,Rc=Math.PI*2,wS=Rc/4,TS=0,ap=Math.sqrt,ES=Math.cos,AS=Math.sin,Gt=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Ni=function(e){return typeof e=="number"},_u=function(e){return typeof e>"u"},_i=function(e){return typeof e=="object"},xn=function(e){return e!==!1},xu=function(){return typeof window<"u"},ba=function(e){return Tt(e)||Gt(e)},lp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,Dc=/(?:-?\.?\d|\.)+/gi,cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,up=/[+-]=-?[.\d]+/,hp=/[^,'"\[\]\s]+/gi,CS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,kn,Ic,vu,On={},$a={},fp,dp=function(e){return($a=Br(e,On))&&Mn},yu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Za=function(e,t){return!t&&console.warn(e)},pp=function(e,t){return e&&(On[e]=t)&&$a&&($a[e]=t)||On},Ho=function(){return 0},LS={suppressEvents:!0,isStart:!0,kill:!1},ka={suppressEvents:!0,kill:!1},PS={suppressEvents:!0},Mu={},ir=[],Oc={},mp,Cn={},ic={},Nf=30,za=[],Su="",bu=function(e){var t=e[0],n,i;if(_i(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=za.length;i--&&!za[i].targetTest(t););n=za[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zp(e[i],n)))||e.splice(i,1);return e},Ar=function(e){return e._gsap||bu(Wn(e))[0]._gsap},gp=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():_u(n)&&e.getAttribute&&e.getAttribute(t)||n},vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},RS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ja=function(){var e=ir.length,t=ir.slice(0),n,i;for(Oc={},ir.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},_p=function(e,t,n,i){ir.length&&!tn&&Ja(),e.render(t,n,i||tn&&t<0&&(e._initted||e._startAt)),ir.length&&!tn&&Ja()},xp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hp).length<2?t:Gt(e)?e.trim():e},vp=function(e){return e},Yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},DS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Br=function(e,t){for(var n in t)e[n]=t[n];return e},Uf=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=_i(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Qa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},To=function(e){var t=e.parent||yt,n=e.keyframes?DS(nn(e.keyframes)):Yn;if(xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},IS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},yp=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},pl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Cr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},OS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nc=function(e,t,n,i){return e._startAt&&(tn?e._startAt.revert(ka):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},NS=function a(e){return!e||e._ts&&a(e.parent)},Ff=function(e){return e._repeat?Ws(e._tTime,e=e.duration()+e._rDelay)*e:0},Ws=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},el=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ml=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},gl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ml(e),n._dirty||Cr(n,e)),e},Mp=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=el(e.rawTime(),t),(!t._dur||Zo(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),Cr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},hi=function(e,t,n,i){return t.parent&&or(t),t._start=qt((Ni(n)?n:n||e!==yt?Un(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yp(e,t,"_first","_last",e._sort?"_start":0),Uc(t)||(e._recent=t),i||Mp(e,t),e._ts<0&&gl(e,e._tTime),e},Sp=function(e,t){return(On.ScrollTrigger||yu("scrollTrigger",t))&&On.ScrollTrigger.create(t,e)},bp=function(e,t,n,i,r){if(Tu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&mp!==Pn.frame)return ir.push(e),e._lazy=[r,i],1},US=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Uc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},FS=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&US(e)&&!(!e._initted&&Uc(e))||(e._ts<0||e._dp._ts<0)&&!Uc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Zo(0,e._tDur,t),u=Ws(l,o),e._yoyo&&u&1&&(s=1-s),u!==Ws(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||tn||i||e._zTime===pt||!t&&e._zTime){if(!e._initted&&bp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Nc(e,t,n,!0),e._onUpdate&&!n&&Xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&or(e,1),!n&&!tn&&(Xn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Xs=function(e,t,n,i){var r=e._repeat,s=qt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:qt(s*(r+1)+e._rDelay*r):s,o>0&&!i&&gl(e,e._tTime=e._tDur*o),e.parent&&ml(e),n||Cr(e.parent,e),e},kf=function(e){return e instanceof gn?Cr(e):Xs(e,e._dur)},zS={_start:0,endTime:Ho,totalDuration:Ho},Un=function a(e,t,n){var i=e.labels,r=e._recent||zS,s=e.duration()>=Gn?r.endTime(!1):e._dur,o,l,c;return Gt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(nn(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},Eo=function(e,t,n){var i=Ni(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;s.immediateRender=xn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Ot(t[0],s,t[r+1])},cr=function(e,t){return e||e===0?t(e):t},Zo=function(e,t,n){return n<e?e:n>t?t:n},Qt=function(e,t){return!Gt(e)||!(t=CS.exec(e))?"":t[1]},BS=function(e,t,n){return cr(n,function(i){return Zo(e,t,i)})},Fc=[].slice,wp=function(e,t){return e&&_i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_i(e[0]))&&!e.nodeType&&e!==kn},HS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Gt(i)&&!t||wp(i,1)?(r=n).push.apply(r,Wn(i)):n.push(i)})||n},Wn=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):Gt(e)&&!n&&(Ic||!qs())?Fc.call((t||vu).querySelectorAll(e),0):nn(e)?HS(e,n):wp(e)?Fc.call(e,0):e?[e]:[]},kc=function(e){return e=Wn(e)[0]||Za("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wn(t,n.querySelectorAll?n:n===e?Za("Invalid scope")||vu.createElement("div"):e)}},Tp=function(e){return e.sort(function(){return .5-Math.random()})},Ep=function(e){if(Tt(e))return e;var t=_i(e)?e:{each:e},n=Lr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Gt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=s[g],p,S,v,x,M,E,A,P,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Gn])[1],!y){for(A=-Gn;A<(A=_[y++].getBoundingClientRect().left)&&y<g;);y--}for(m=s[g]=[],p=l?Math.min(y,g)*u-.5:i%y,S=y===Gn?0:l?g*h/y-.5:i/y|0,A=0,P=Gn,E=0;E<g;E++)v=E%y-p,x=S-(E/y|0),m[E]=M=c?Math.abs(c==="y"?x:v):ap(v*v+x*x),M>A&&(A=M),M<P&&(P=M);i==="random"&&Tp(m),m.max=A-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Qt(t.amount||t.each)||0,n=n&&g<0?Up(n):n}return g=(m[f]-m.min)/m.max||0,qt(m.b+(n?n(g):g)*m.v)+m.u}},zc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ni(n)?0:Qt(n))}},Ap=function(e,t){var n=nn(e),i,r;return!n&&_i(e)&&(i=n=e.radius||Gn,e.values?(e=Wn(e.values),(r=!Ni(e[0]))&&(i*=i)):e=zc(e.increment)),cr(t,n?Tt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Gn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||Ni(s)?u:u+Qt(s)}:zc(e))},Cp=function(e,t,n,i){return cr(nn(e)?!t:n===!0?!!(n=0):!i,function(){return nn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},VS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},GS=function(e,t){return function(n){return e(parseFloat(n))+(t||Qt(n))}},WS=function(e,t,n){return Pp(e,t,0,1,n)},Lp=function(e,t,n){return cr(n,function(i){return e[~~t(i)]})},XS=function a(e,t,n){var i=t-e;return nn(e)?Lp(e,a(0,e.length),t):cr(n,function(r){return(i+(r-e)%i)%i+e})},qS=function a(e,t,n){var i=t-e,r=i*2;return nn(e)?Lp(e,a(0,e.length-1),t):cr(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Vo=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?hp:Dc),n+=e.substr(t,i-t)+Cp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Pp=function(e,t,n,i,r){var s=t-e,o=i-n;return cr(r,function(l){return n+((l-e)/s*o||0)})},jS=function a(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=Gt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(nn(e)&&!nn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Br(nn(e)?[]:{},e));if(!u){for(l in t)wu.call(o,e,l,"get",t[l]);r=function(_){return Cu(_,o)||(s?e.p:e)}}}return cr(n,r)},zf=function(e,t,n){var i=e.labels,r=Gn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Xn=function(e,t,n){var i=e.vars,r=i[t],s=Dt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ir.length&&Ja(),o&&(Dt=o),u=l?r.apply(c,l):r.call(c),Dt=s,u},_o=function(e){return or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&Xn(e,"onInterrupt"),e},Ms,Rp=[],Dp=function(e){if(!xu()){Rp.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ho,render:Cu,add:wu,kill:cb,modifier:lb,rawVars:0},s={targetTest:0,get:0,getSetter:Au,aliases:{},register:0};if(qs(),e!==i){if(Cn[t])return;Yn(i,Yn(Qa(e,r),s)),Br(i.prototype,Br(r,Qa(e,s))),Cn[i.prop=t]=i,e.targetTest&&(za.push(i),Mu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}pp(t,i),e.register&&e.register(Mn,i,yn)},ft=255,xo={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},rc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ft+.5|0},Ip=function(e,t,n){var i=e?Ni(e)?[e>>16,e>>8&ft,e&ft]:0:xo.black,r,s,o,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xo[e])i=xo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ft,i&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Dc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=rc(l+1/3,r,s),i[1]=rc(l,r,s),i[2]=rc(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(cp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Dc)||xo.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/ft,s=i[1]/ft,o=i[2]/ft,h=Math.max(r,s,o),f=Math.min(r,s,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(s-o)/d+(s<o?6:0):h===s?(o-r)/d+2:(r-s)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Op=function(e){var t=[],n=[],i=-1;return e.split(rr).forEach(function(r){var s=r.match(ys)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Bf=function(e,t,n){var i="",r=(e+i).match(rr),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Ip(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Op(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(rr,"1").split(ys),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(rr),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},rr=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xo)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),YS=/hsl[a]?\(/,Np=function(e){var t=e.join(" "),n;if(rr.lastIndex=0,rr.test(t))return n=YS.test(t),e[1]=Bf(e[1],n),e[0]=Bf(e[0],n,Op(e[1])),!0},Go,Pn=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,f,d,_=function g(m){var p=a()-i,S=m===!0,v,x,M,E;if(p>e&&(n+=p-t),i+=p,M=i-n,v=M-s,(v>0||S)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,s+=v+(v>=r?4:r-v),x=1),S||(l=c(g)),x)for(d=0;d<o.length;d++)o[d](M,f,E,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){fp&&(!Ic&&xu()&&(kn=Ic=window,vu=kn.document||{},On.gsap=Mn,(kn.gsapVersions||(kn.gsapVersions=[])).push(Mn.version),dp($a||kn.GreenSockGlobals||!kn.gsap&&kn||{}),u=kn.requestAnimationFrame,Rp.forEach(Dp)),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Go=1,_(2))},sleep:function(){(u?kn.cancelAnimationFrame:clearTimeout)(l),Go=0,c=Ho},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,p,S){var v=p?function(x,M,E,A){m(x,M,E,A),h.remove(v)}:m;return h.remove(m),o[S?"unshift":"push"](v),qs(),v},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),qs=function(){return!Go&&Pn.wake()},nt={},KS=/^[\d.\-M][\d.\-,\s]/,$S=/["']/g,ZS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace($S,"").trim():+c,i=l.substr(o+1).trim();return t},JS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},QS=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ZS(t[1])]:JS(e).split(",").map(xp)):nt._CE&&KS.test(e)?nt._CE("",e):n},Up=function(e){return function(t){return 1-e(1-t)}},Fp=function a(e,t){for(var n=e._first,i;n;)n instanceof gn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Lr=function(e,t){return e&&(Tt(e)?e:nt[e]||QS(e))||t},qr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return vn(e,function(o){nt[o]=On[o]=r,nt[s=o.toLowerCase()]=n;for(var l in r)nt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=nt[o+"."+l]=r[l]}),r},kp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sc=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/Rc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*AS((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kp(o);return r=Rc/r,l.config=function(c,u){return a(e,c,u)},l},oc=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:kp(n);return i.config=function(r){return a(e,r)},i};vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;qr(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;qr("Elastic",sc("in"),sc("out"),sc());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};qr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);qr("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});qr("Circ",function(a){return-(ap(1-a*a)-1)});qr("Sine",function(a){return a===1?1:-ES(a*wS)+1});qr("Back",oc("in"),oc("out"),oc());nt.SteppedEase=nt.steps=On.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-pt;return function(o){return((i*Zo(0,s,o)|0)+r)*n}}};Gs.ease=nt["quad.out"];vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Su+=a+","+a+"Params,"});var zp=function(e,t){this.id=TS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:gp,this.set=t?t.getSetter:Au},js=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xs(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Go||Pn.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(qs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(gl(this,n),!r._dp||r.parent||Mp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),_p(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ff(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ff(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ws(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?el(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(Zo(-Math.abs(this._delay),this._tDur,i),!0),ml(this),OS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?el(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=PS);var i=tn;return tn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,kf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,kf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Un(this,n),xn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-pt)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=Tt(n)?n:vp,o=function(){var c=i.then;i.then=null,Tt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){_o(this)},a}();Yn(js.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var gn=function(a){op(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=xn(n.sortChildren),yt&&hi(n.parent||yt,Ai(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Sp(Ai(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return Eo(0,arguments,this),this},t.from=function(i,r,s){return Eo(1,arguments,this),this},t.fromTo=function(i,r,s,o){return Eo(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,To(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ot(i,r,Un(this,s),1),this},t.call=function(i,r,s){return hi(this,Ot.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Ot(i,s,Un(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,To(s).immediateRender=xn(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,To(o).immediateRender=xn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:qt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,S,v,x,M,E,A;if(this!==yt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,x=this._start,v=this._ts,p=!v,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(f=qt(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),M=Ws(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),E&&g&1&&(f=c-f,A=1),g!==M&&!this._lock){var P=E&&M&1,y=P===(E&&g&1);if(g<M&&(P=!P),o=P?0:c,this._lock=1,this.render(o||(A?0:qt(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Fp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=kS(this,qt(o),qt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!g&&(Xn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=-pt);break}}d=_}else{d=this._last;for(var w=i<0?i:f;d;){if(_=d._prev,(d._act||w<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,r,s||tn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=w?-pt:pt);break}}d=_}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-pt)._zTime=f>=o?1:-1,this._ts))return this._start=x,ml(this),this.render(i,r,s);this._onUpdate&&!r&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&or(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Ni(r)||(r=Un(this,r,i)),!(i instanceof js)){if(nn(i))return i.forEach(function(o){return s.add(o,r)}),this;if(Gt(i))return this.addLabel(i,r);if(Tt(i))i=Ot.delayedCall(0,i);else return this}return this!==i?hi(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ot?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Gt(i)?this.removeLabel(i):Tt(i)?this.killTweensOf(i):(pl(this,i),i===this._recent&&(this._recent=this._last),Cr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(Pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Un(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=Ot.delayedCall(0,r||Ho,s);return o.data="isPause",this._hasPause=1,hi(this,o,Un(this,i))},t.removePause=function(i){var r=this._first;for(i=Un(this,i);r;)r._start===i&&r.data==="isPause"&&or(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)$i!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=Wn(i),l=this._first,c=Ni(r),u;l;)l instanceof Ot?RS(l._targets,o)&&(c?(!$i||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=Un(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Ot.to(s,Yn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||pt,onStart:function(){if(s.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==m&&Xs(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,Yn({startAt:{time:Un(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),zf(this,Un(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),zf(this,Un(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Cr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Cr(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=Gn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,hi(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Xs(s,s===yt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(yt._ts&&(_p(yt,el(i,yt)),mp=Pn.frame),Pn.frame>=Nf){Nf+=Dn.autoSleep||120;var r=yt._first;if((!r||!r._ts)&&Dn.autoSleep&&Pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Pn.sleep()}}},e}(js);Yn(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var eb=function(e,t,n,i,r,s,o){var l=new yn(this._pt,e,t,0,1,Xp,null,r),c=0,u=0,h,f,d,_,g,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Vo(i)),s&&(S=[n,i],s(S,e,t),n=S[0],i=S[1]),f=n.match(nc)||[];h=nc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ls(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=nc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(up.test(i)||p)&&(l.e=0),this._pt=l,l},wu=function(e,t,n,i,r,s,o,l,c,u){Tt(i)&&(i=i(r||0,e,s));var h=e[t],f=n!=="get"?n:Tt(h)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Tt(h)?c?sb:Gp:Eu,_;if(Gt(i)&&(~i.indexOf("random(")&&(i=Vo(i)),i.charAt(1)==="="&&(_=Ls(f,i)+(Qt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Bc)return!isNaN(f*i)&&i!==""?(_=new yn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?ab:Wp,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&yu(t,i),eb.call(this,e,t,f,i,d,l||Dn.stringFilter,c))},tb=function(e,t,n,i,r){if(Tt(e)&&(e=Ao(e,r,t,n,i)),!_i(e)||e.style&&e.nodeType||nn(e)||lp(e))return Gt(e)?Ao(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=Ao(e[o],r,t,n,i);return s},Bp=function(e,t,n,i,r,s){var o,l,c,u;if(Cn[e]&&(o=new Cn[e]).init(r,o.rawVars?t[e]:tb(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new yn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Ms))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},$i,Bc,Tu=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=e._dur,p=e._startAt,S=e._targets,v=e.parent,x=v&&v.data==="nested"?v.vars.targets:S,M=e._overwrite==="auto"&&!gu,E=e.timeline,A,P,y,w,q,F,N,k,V,te,z,j,K;if(E&&(!_||!r)&&(r="none"),e._ease=Lr(r,Gs.ease),e._yEase=d?Up(Lr(d===!0?r:d,Gs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(k=S[0]?Ar(S[0]).harness:0,j=k&&i[k.prop],A=Qa(i,Mu),p&&(p._zTime<0&&p.progress(1),t<0&&f&&o&&!g?p.render(-1,!0):p.revert(f&&m?ka:LS),p._lazy=0),s){if(or(e._startAt=Ot.set(S,Yn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&xn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!o&&!g)&&e._startAt.revert(ka),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(o=!1),y=Yn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&xn(l),immediateRender:o,stagger:0,parent:v},A),j&&(y[k.prop]=j),or(e._startAt=Ot.set(S,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(ka):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&xn(l)||l&&!m,P=0;P<S.length;P++){if(q=S[P],N=q._gsap||bu(S)[P]._gsap,e._ptLookup[P]=te={},Oc[N.id]&&ir.length&&Ja(),z=x===S?P:x.indexOf(q),k&&(V=new k).init(q,j||A,e,z,x)!==!1&&(e._pt=w=new yn(e._pt,q,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(L){te[L]=w}),V.priority&&(F=1)),!k||j)for(y in A)Cn[y]&&(V=Bp(y,A,e,z,q,x))?V.priority&&(F=1):te[y]=w=wu.call(e,q,y,"get",A[y],z,x,0,i.stringFilter);e._op&&e._op[P]&&e.kill(q,e._op[P]),M&&e._pt&&($i=e,yt.killTweensOf(q,te,e.globalTime(t)),K=!e.parent,$i=0),e._pt&&l&&(Oc[N.id]=1)}F&&qp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,_&&t<=0&&E.render(Gn,!0,!0)},nb=function(e,t,n,i,r,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Bc=1,e.vars[t]="+=0",Tu(e,o),Bc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=Ct(n)+Qt(u.e)),u.b&&(u.b=c.s+Qt(u.b))},ib=function(e,t){var n=e[0]?Ar(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Br({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},rb=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(nn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},Ao=function(e,t,n,i,r){return Tt(e)?e.call(t,n,i,r):Gt(e)&&~e.indexOf("random(")?Vo(e):e},Hp=Su+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vp={};vn(Hp+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Vp[a]=1});var Ot=function(a){op(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:To(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||yt,v=(nn(n)||lp(n)?Ni(n[0]):"length"in i)?[n]:Wn(n),x,M,E,A,P,y,w,q;if(o._targets=v.length?bu(v):Za("GSAP target "+n+" not found. https://greensock.com",!Dn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||ba(c)||ba(u)){if(i=o.vars,x=o.timeline=new gn({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:v}),x.kill(),x.parent=x._dp=Ai(o),x._start=0,f||ba(c)||ba(u)){if(A=v.length,w=f&&Ep(f),_i(f))for(P in f)~Hp.indexOf(P)&&(q||(q={}),q[P]=f[P]);for(M=0;M<A;M++)E=Qa(i,Vp),E.stagger=0,p&&(E.yoyoEase=p),q&&Br(E,q),y=v[M],E.duration=+Ao(c,Ai(o),M,y,v),E.delay=(+Ao(u,Ai(o),M,y,v)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),x.to(y,E,w?w(M,y,v):0),x._ease=nt.none;x.duration()?c=u=0:o.timeline=0}else if(_){To(Yn(x.vars.defaults,{ease:"none"})),x._ease=Lr(_.ease||i.ease||"none");var F=0,N,k,V;if(nn(_))_.forEach(function(te){return x.to(v,te,">")}),x.duration();else{E={};for(P in _)P==="ease"||P==="easeEach"||rb(P,_[P],E,_.easeEach);for(P in E)for(N=E[P].sort(function(te,z){return te.t-z.t}),F=0,M=0;M<N.length;M++)k=N[M],V={ease:k.e,duration:(k.t-(M?N[M-1].t:0))/100*c},V[P]=k.v,x.to(v,V,F),F+=V.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!gu&&($i=Ai(o),yt.killTweensOf(v),$i=0),hi(S,Ai(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===qt(S._time)&&xn(h)&&NS(Ai(o))&&S.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-u)||0)),m&&Sp(Ai(o),m),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-pt&&!u?l:i<pt?0:i,f,d,_,g,m,p,S,v,x;if(!c)FS(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,s);if(f=qt(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===h/g&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,f=c-f),m=Ws(this._tTime,g),f===o&&!s&&this._initted)return this._tTime=h,this;_!==m&&(v&&this._yEase&&Fp(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=s=1,this.render(qt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(bp(this,u?i:f,s,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!r&&!_&&(Xn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;v&&v.render(i<0?i:!f&&p?-pt:v._dur*v._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Nc(this,i,r,s),Xn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Xn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Nc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&or(this,1),!r&&!(u&&!o)&&(h||o||p)&&(Xn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o){Go||Pn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Tu(this,l),c=this._ease(l/this._dur),nb(this,i,r,s,o,c,l)?this.resetTo(i,r,s,o):(gl(this,0),this.parent||yp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?_o(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,$i&&$i.vars.overwrite!==!0)._first||_o(this),this.parent&&s!==this.timeline.totalDuration()&&Xs(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?Wn(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!r||r==="all")&&IS(o,l))return r==="all"&&(this._pt=0),_o(this);for(h=this._op=this._op||[],r!=="all"&&(Gt(r)&&(g={},vn(r,function(S){return g[S]=1}),r=g),r=ib(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(h[p]=r,_=f,d={}):(d=h[p]=h[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&pl(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&_o(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Eo(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return Eo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return yt.killTweensOf(i,r,s)},e}(js);Yn(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vn("staggerTo,staggerFrom,staggerFromTo",function(a){Ot[a]=function(){var e=new gn,t=Fc.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Eu=function(e,t,n){return e[t]=n},Gp=function(e,t,n){return e[t](n)},sb=function(e,t,n,i){return e[t](i.fp,n)},ob=function(e,t,n){return e.setAttribute(t,n)},Au=function(e,t){return Tt(e[t])?Gp:_u(e[t])&&e.setAttribute?ob:Eu},Wp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ab=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Cu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lb=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},cb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?pl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ub=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qp=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},yn=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||Wp,this.d=l||this,this.set=c||Eu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ub,this.m=n,this.mt=r,this.tween=i},a}();vn(Su+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Mu[a]=1});On.TweenMax=On.TweenLite=Ot;On.TimelineLite=On.TimelineMax=gn;yt=new gn({sortChildren:!1,defaults:Gs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Dn.stringFilter=Np;var Ys=[],Ba={},hb=[],Hf=0,ac=function(e){return(Ba[e]||hb).map(function(t){return t()})},Hc=function(){var e=Date.now(),t=[];e-Hf>2&&(ac("matchMediaInit"),Ys.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=kn.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),ac("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Hf=e,ac("matchMedia"))},jp=function(){function a(t,n){this.selector=n&&kc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){Tt(n)&&(r=i,i=n,n=Tt);var s=this,o=function(){var c=Dt,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=kc(r)),Dt=s,h=i.apply(s,arguments),Tt(h)&&s._r.push(h),Dt=c,s.selector=u,s.isReverted=!1,h};return s.last=o,n===Tt?o(s):n?s[n]=o:o},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof js)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Ys.indexOf(this);~o&&Ys.splice(o,1)}},e.revert=function(n){this.kill(n||{})},a}(),fb=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,r){_i(n)||(n={matches:n});var s=new jp(0,r||this.scope),o=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=kn.matchMedia(n[c]),l&&(Ys.indexOf(s)<0&&Ys.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Hc):l.addEventListener("change",Hc)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),tl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Dp(i)})},timeline:function(e){return new gn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Gt(e)&&(e=Wn(e)[0]);var r=Ar(e||{}).get,s=n?vp:xp;return n==="native"&&(n=""),e&&(t?s((Cn[t]&&Cn[t].get||r)(e,t,n,i)):function(o,l,c){return s((Cn[o]&&Cn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Wn(e),e.length>1){var i=e.map(function(u){return Mn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=Cn[t],o=Ar(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;Ms._pt=0,h.init(e,n?u+n:u,Ms,0,[e]),h.render(1,h),Ms._pt&&Cu(1,Ms)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Mn.to(e,Br((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Lr(e.ease,Gs.ease)),Uf(Gs,e||{})},config:function(e){return Uf(Dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Cn[o]&&!On[o]&&Za(t+" effect requires "+o+" plugin.")}),ic[t]=function(o,l,c){return n(Wn(o),Yn(l||{},r),c)},s&&(gn.prototype[t]=function(o,l,c){return this.add(ic[t](o,_i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){nt[e]=Lr(t)},parseEase:function(e,t){return arguments.length?Lr(e,t):nt},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new gn(e),i,r;for(n.smoothChildTiming=xn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&hi(n,i,i._start-i._delay),i=r;return hi(yt,n,0),n},context:function(e,t){return e?new jp(e,t):Dt},matchMedia:function(e){return new fb(e)},matchMediaRefresh:function(){return Ys.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hc()},addEventListener:function(e,t){var n=Ba[e]||(Ba[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ba[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:XS,wrapYoyo:qS,distribute:Ep,random:Cp,snap:Ap,normalize:WS,getUnit:Qt,clamp:BS,splitColor:Ip,toArray:Wn,selector:kc,mapRange:Pp,pipe:VS,unitize:GS,interpolate:jS,shuffle:Tp},install:dp,effects:ic,ticker:Pn,updateRoot:gn.updateRoot,plugins:Cn,globalTimeline:yt,core:{PropTween:yn,globals:pp,Tween:Ot,Timeline:gn,Animation:js,getCache:Ar,_removeLinkedListItem:pl,reverting:function(){return tn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return gu=e}}};vn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return tl[a]=Ot[a]});Pn.add(gn.updateRoot);Ms=tl.to({},{duration:0});var db=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},pb=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=db(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},lc=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(Gt(r)&&(l={},vn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}pb(o,r)}}}},Mn=tl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lc("roundProps",zc),lc("modifiers"),lc("snap",Ap))||tl;Ot.version=gn.version=Mn.version="3.11.5";fp=1;xu()&&qs();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vf,Zi,Ps,Lu,wr,Gf,Pu,mb=function(){return typeof window<"u"},Ui={},vr=180/Math.PI,Rs=Math.PI/180,ds=Math.atan2,Wf=1e8,Ru=/([A-Z])/g,gb=/(left|right|width|margin|padding|x)/i,_b=/[\s,\(]\S/,fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Yp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Mb=function(e,t,n){return e.style[t]=n},Sb=function(e,t,n){return e.style.setProperty(t,n)},bb=function(e,t,n){return e._gsap[t]=n},wb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Tb=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},Eb=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},Mt="transform",oi=Mt+"Origin",Ab=function a(e,t){var n=this,i=this.target,r=i.style;if(e in Ui){if(this.tfm=this.tfm||{},e!=="transform")e=fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=Ci(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Ci(i,e);else return fi.transform.split(",").forEach(function(s){return a.call(n,s,t)});if(this.props.indexOf(Mt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=Mt}(r||t)&&this.props.push(e,t,r[e])},$p=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Cb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ru,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Pu(),(!r||!r.isStart)&&!n[Mt]&&($p(n),i.uncache=1)}},Zp=function(e,t){var n={target:e,props:[],revert:Cb,save:Ab};return e._gsap||Mn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Jp,Gc=function(e,t){var n=Zi.createElementNS?Zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zi.createElement(e);return n.style?n:Zi.createElement(e)},pi=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ru,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Ks(t)||t,1)||""},Xf="O,Moz,ms,Ms,Webkit".split(","),Ks=function(e,t,n){var i=t||wr,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Xf[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Xf[s]:"")+e},Wc=function(){mb()&&window.document&&(Vf=window,Zi=Vf.document,Ps=Zi.documentElement,wr=Gc("div")||{style:{}},Gc("div"),Mt=Ks(Mt),oi=Mt+"Origin",wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jp=!!Ks("perspective"),Pu=Mn.core.reverting,Lu=1)},cc=function a(e){var t=Gc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(Ps.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ps.removeChild(t),this.style.cssText=r,s},qf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qp=function(e){var t;try{t=e.getBBox()}catch{t=cc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===cc||(t=cc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+qf(e,["x","cx","x1"])||0,y:+qf(e,["y","cy","y1"])||0,width:0,height:0}:t},em=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qp(e))},Wo=function(e,t){if(t){var n=e.style;t in Ui&&t!==oi&&(t=Mt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Ru,"-$1").toLowerCase())):n.removeAttribute(t)}},Ji=function(e,t,n,i,r,s){var o=new yn(e._pt,t,n,0,1,s?Kp:Yp);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},jf={deg:1,rad:1,turn:1},Lb={grid:1,flex:1},ar=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=wr.style,l=gb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;return i===s||!r||jf[i]||jf[s]?r:(s!=="px"&&!f&&(r=a(e,t,n,"px")),p=e.getCTM&&em(e),(d||s==="%")&&(Ui[t]||~t.indexOf("adius"))?(_=p?e.getBBox()[l?"width":"height"]:e[u],Ct(d?r/_*h:r/100*_)):(o[l?"width":"height"]=h+(f?s:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Zi||!g.appendChild)&&(g=Zi.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Pn.time&&!m.uncache?Ct(r/m.width*h):((d||s==="%")&&!Lb[pi(g,"display")]&&(o.position=pi(e,"position")),g===e&&(o.position="static"),g.appendChild(wr),_=wr[u],g.removeChild(wr),o.position="absolute",l&&d&&(m=Ar(g),m.time=Pn.time,m.width=g[u]),Ct(f?_*r/h:_&&r?h/_*r:0))))},Ci=function(e,t,n,i){var r;return Lu||Wc(),t in fi&&t!=="transform"&&(t=fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ui[t]&&t!=="transform"?(r=qo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:il(pi(e,oi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=nl[t]&&nl[t](e,t,n)||pi(e,t)||gp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ar(e,t,r,n)+n:r},Pb=function(e,t,n,i){if(!n||n==="none"){var r=Ks(t,e,1),s=r&&pi(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=pi(e,"borderTopColor"))}var o=new yn(this._pt,e.style,t,0,1,Xp),l=0,c=0,u,h,f,d,_,g,m,p,S,v,x,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=pi(e,t)||i,e.style[t]=n),u=[n,i],Np(u),n=u[0],i=u[1],f=n.match(ys)||[],M=i.match(ys)||[],M.length){for(;h=ys.exec(i);)m=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=Ls(d,m)+x),p=parseFloat(m),v=m.substr((p+"").length),l=ys.lastIndex-v.length,v||(v=v||Dn.units[t]||x,l===i.length&&(i+=v,o.e+=v)),x!==v&&(d=ar(e,t,g,v)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Kp:Yp;return up.test(i)&&(o.e=0),this._pt=o,o},Yf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Rb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Yf[n]||n,t[1]=Yf[i]||i,t.join(" ")},Db=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ui[o]&&(l=1,o=o==="transformOrigin"?oi:Mt),Wo(n,o);l&&(Wo(n,Mt),s&&(s.svg&&n.removeAttribute("transform"),qo(n,1),s.uncache=1,$p(i)))}},nl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new yn(e._pt,t,n,0,0,Db);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Xo=[1,0,0,1,0,0],tm={},nm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kf=function(e){var t=pi(e,Mt);return nm(t)?Xo:t.substr(7).match(cp).map(Ct)},Du=function(e,t){var n=e._gsap||Ar(e),i=e.style,r=Kf(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Xo:r):(r===Xo&&!e.offsetParent&&e!==Ps&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ps.appendChild(e)),r=Kf(e),l?i.display=l:Wo(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):Ps.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Xc=function(e,t,n,i,r,s){var o=e._gsap,l=r||Du(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],v=t.split(" "),x=parseFloat(v[0])||0,M=parseFloat(v[1])||0,E,A,P,y;n?l!==Xo&&(A=d*m-_*g)&&(P=x*(m/A)+M*(-g/A)+(g*S-m*p)/A,y=x*(-_/A)+M*(d/A)-(d*S-_*p)/A,x=P,M=y):(E=Qp(e),x=E.x+(~v[0].indexOf("%")?x/100*E.width:x),M=E.y+(~(v[1]||v[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(p=x-c,S=M-u,o.xOffset=h+(p*d+S*g)-p,o.yOffset=f+(p*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[oi]="0px 0px",s&&(Ji(s,o,"xOrigin",c,x),Ji(s,o,"yOrigin",u,M),Ji(s,o,"xOffset",h,o.xOffset),Ji(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},qo=function(e,t){var n=e._gsap||new zp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=pi(e,oi)||"0",u,h,f,d,_,g,m,p,S,v,x,M,E,A,P,y,w,q,F,N,k,V,te,z,j,K,L,Me,ue,Z,ee,de;return u=h=f=g=m=p=S=v=x=0,d=_=1,n.svg=!!(e.getCTM&&em(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),i.scale=i.rotate=i.translate="none"),A=Du(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Xc(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==Xo&&(q=A[0],F=A[1],N=A[2],k=A[3],u=V=A[4],h=te=A[5],A.length===6?(d=Math.sqrt(q*q+F*F),_=Math.sqrt(k*k+N*N),g=q||F?ds(F,q)*vr:0,S=N||k?ds(N,k)*vr+g:0,S&&(_*=Math.abs(Math.cos(S*Rs))),n.svg&&(u-=M-(M*q+E*N),h-=E-(M*F+E*k))):(de=A[6],Z=A[7],L=A[8],Me=A[9],ue=A[10],ee=A[11],u=A[12],h=A[13],f=A[14],P=ds(de,ue),m=P*vr,P&&(y=Math.cos(-P),w=Math.sin(-P),z=V*y+L*w,j=te*y+Me*w,K=de*y+ue*w,L=V*-w+L*y,Me=te*-w+Me*y,ue=de*-w+ue*y,ee=Z*-w+ee*y,V=z,te=j,de=K),P=ds(-N,ue),p=P*vr,P&&(y=Math.cos(-P),w=Math.sin(-P),z=q*y-L*w,j=F*y-Me*w,K=N*y-ue*w,ee=k*w+ee*y,q=z,F=j,N=K),P=ds(F,q),g=P*vr,P&&(y=Math.cos(P),w=Math.sin(P),z=q*y+F*w,j=V*y+te*w,F=F*y-q*w,te=te*y-V*w,q=z,V=j),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Ct(Math.sqrt(q*q+F*F+N*N)),_=Ct(Math.sqrt(te*te+de*de)),P=ds(V,te),S=Math.abs(P)>2e-4?P*vr:0,x=ee?1/(ee<0?-ee:ee):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!nm(pi(e,Mt)),z&&e.setAttribute("transform",z))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Ct(d),n.scaleY=Ct(_),n.rotation=Ct(g)+o,n.rotationX=Ct(m)+o,n.rotationY=Ct(p)+o,n.skewX=S+o,n.skewY=v+o,n.transformPerspective=x+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[oi]=il(c)),n.xOffset=n.yOffset=0,n.force3D=Dn.force3D,n.renderTransform=n.svg?Ob:Jp?im:Ib,n.uncache=0,n},il=function(e){return(e=e.split(" "))[0]+" "+e[1]},uc=function(e,t,n){var i=Qt(t);return Ct(parseFloat(t)+parseFloat(ar(e,"x",n+"px",i)))+i},Ib=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,im(e,t)},mr="0deg",ho="0px",gr=") ",im=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,v=n.zOrigin,x="",M=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==mr||u!==mr)){var E=parseFloat(u)*Rs,A=Math.sin(E),P=Math.cos(E),y;E=parseFloat(h)*Rs,y=Math.cos(E),s=uc(S,s,A*y*-v),o=uc(S,o,-Math.sin(E)*-v),l=uc(S,l,P*y*-v+v)}m!==ho&&(x+="perspective("+m+gr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(M||s!==ho||o!==ho||l!==ho)&&(x+=l!==ho||M?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+gr),c!==mr&&(x+="rotate("+c+gr),u!==mr&&(x+="rotateY("+u+gr),h!==mr&&(x+="rotateX("+h+gr),(f!==mr||d!==mr)&&(x+="skew("+f+", "+d+gr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+gr),S.style[Mt]=x||"translate(0, 0)"},Ob=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,v=parseFloat(s),x=parseFloat(o),M,E,A,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Rs,c*=Rs,M=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Rs,y=Math.tan(c-u),y=Math.sqrt(1+y*y),A*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),M*=y,E*=y)),M=Ct(M),E=Ct(E),A=Ct(A),P=Ct(P)):(M=h,P=f,E=A=0),(v&&!~(s+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(v=ar(d,"x",s,"px"),x=ar(d,"y",o,"px")),(_||g||m||p)&&(v=Ct(v+_-(_*M+g*A)+m),x=Ct(x+g-(_*E+g*P)+p)),(i||r)&&(y=d.getBBox(),v=Ct(v+i/100*y.width),x=Ct(x+r/100*y.height)),y="matrix("+M+","+E+","+A+","+P+","+v+","+x+")",d.setAttribute("transform",y),S&&(d.style[Mt]=y)},Nb=function(e,t,n,i,r){var s=360,o=Gt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?vr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*Wf)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*Wf)%s-~~(c/s)*s)),e._pt=f=new yn(e._pt,t,n,i,c,xb),f.e=u,f.u="deg",e._props.push(n),f},$f=function(e,t){for(var n in t)e[n]=t[n];return e},Ub=function(e,t,n){var i=$f({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Mt]=t,o=qo(n,1),Wo(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],s[Mt]=t,o=qo(n,1),s[Mt]=c);for(l in Ui)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Qt(c),_=Qt(u),h=d!==_?ar(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new yn(e._pt,o,l,h,f-h,Vc),e._pt.u=_||0,e._props.push(l));$f(o,i)};vn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});nl[e>1?"border"+a:a]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=s.map(function(_){return Ci(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},s.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var rm={name:"css",register:Wc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,S,v,x,M,E,A,P;Lu||Wc(),this.styles=this.styles||Zp(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Cn[g]&&Bp(g,t,n,i,e,r)))){if(d=typeof u,_=nl[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Vo(u)),_)_(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",rr.lastIndex=0,rr.test(c)||(m=Qt(c),p=Qt(u)),p?m!==p&&(c=ar(e,g,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,g),s.push(g),P.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Gt(c)&&~c.indexOf("random(")&&(c=Vo(c)),Qt(c+"")||(c+=Dn.units[g]||Qt(Ci(e,g))||""),(c+"").charAt(1)==="="&&(c=Ci(e,g))):c=Ci(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in fi&&(g==="autoAlpha"&&(f===1&&Ci(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),Ji(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=fi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Ui,v){if(this.styles.save(g),x||(M=e._gsap,M.renderTransform&&!t.parseTransform||qo(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new yn(this._pt,o,Mt,0,1,M.renderTransform,M,0,-1),x.dep=1),g==="scale")this._pt=new yn(this._pt,M,"scaleY",M.scaleY,(S?Ls(M.scaleY,S+h):h)-M.scaleY||0,Vc),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(oi,0,o[oi]),u=Rb(u),M.svg?Xc(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Ji(this,M,"zOrigin",M.zOrigin,p),Ji(this,o,g,il(c),il(u)));continue}else if(g==="svgOrigin"){Xc(e,u,1,E,0,this);continue}else if(g in tm){Nb(this,M,g,f,S?Ls(f,S+u):u);continue}else if(g==="smoothOrigin"){Ji(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){Ub(this,u,e);continue}}else g in o||(g=Ks(g)||g);if(v||(h||h===0)&&(f||f===0)&&!_b.test(u)&&g in o)m=(c+"").substr((f+"").length),h||(h=0),p=Qt(u)||(g in Dn.units?Dn.units[g]:m),m!==p&&(f=ar(e,g,c,p)),this._pt=new yn(this._pt,v?M:o,g,f,(S?Ls(f,S+h):h)-f,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?yb:Vc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=vb);else if(g in o)Pb.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,r);else if(g!=="parseTransform"){yu(g,u);continue}v||(g in o?P.push(g,0,o[g]):P.push(g,1,c||e[g])),s.push(g)}}A&&qp(this)},render:function(e,t){if(t.tween._time||!Pu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ci,aliases:fi,getSetter:function(e,t,n){var i=fi[t];return i&&i.indexOf(",")<0&&(t=i),t in Ui&&t!==oi&&(e._gsap.x||Ci(e,"x"))?n&&Gf===n?t==="scale"?wb:bb:(Gf=n||{})&&(t==="scale"?Tb:Eb):e.style&&!_u(e.style[t])?Mb:~t.indexOf("-")?Sb:Au(e,t)},core:{_removeProperty:Wo,_getMatrix:Du}};Mn.utils.checkPrefix=Ks;Mn.core.getStyleSaver=Zp;(function(a,e,t,n){var i=vn(a+","+e+","+t,function(r){Ui[r]=1});vn(e,function(r){Dn.units[r]="deg",tm[r]=1}),fi[i[13]]=a+","+e,vn(n,function(r){var s=r.split(":");fi[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Dn.units[a]="px"});Mn.registerPlugin(rm);var At=Mn.registerPlugin(rm)||Mn;At.core.Tween;class Fb{constructor(){this.experience=new In,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.room=this.resources.items.room,this.actualRoom=this.room.scene,this.lerp={current:0,target:0,ease:.1},this.setModel(),this.onMouseMove()}setModel(){this.actualRoom.children.forEach(c=>{c.castShadow=!0,c.receiveShadow=!0,c instanceof Ki&&c.children.forEach(u=>{u.castShadow=!0,u.receiveShadow=!0}),c.name==="Screen"&&(c.material=new Yi({map:this.resources.items.screen}))});const e=1,t=1,n=3,i=new bf(16777215,n,e,t);i.position.set(-4,15,2),i.rotation.x=-Math.PI/2,i.rotation.z=-Math.PI/3,this.actualRoom.add(i);const r=1,s=1,o=2,l=new bf(16777215,o,r,s);l.position.set(2,12,2),l.lookAt(20,16,-20),this.actualRoom.add(l),this.scene.add(this.actualRoom),this.actualRoom.scale.set(.11,.11,.11)}onMouseMove(){window.addEventListener("mousemove",e=>{this.rotation=(e.clientX-window.innerWidth/2)*2/window.innerWidth,this.lerp.target=this.rotation*.1})}resize(){}update(){this.lerp.current=At.utils.interpolate(this.lerp.current,this.lerp.target,this.lerp.ease),this.actualRoom.rotation.y=this.lerp.current}}class kb{constructor(){this.experience=new In,this.scene=this.experience.scene,this.setFloor(),this.setCircles()}setFloor(){this.geometry=new ul(100,100),this.material=new br({color:7039593,side:ii}),this.plane=new en(this.geometry,this.material),this.scene.add(this.plane),this.plane.rotation.x=Math.PI/2,this.plane.position.y=-.3,this.plane.receiveShadow=!0}setCircles(){const e=new fu(5,64),t=new br({color:16579318}),n=new br({color:8623565}),i=new br({color:8048812});this.circleFirst=new en(e,t),this.circleSecond=new en(e,n),this.circleThird=new en(e,i),this.circleFirst.position.y=-.28,this.circleSecond.position.y=-.27,this.circleThird.position.y=-.26,this.circleFirst.scale.set(0,0,0),this.circleSecond.scale.set(0,0,0),this.circleThird.scale.set(0,0,0),this.circleFirst.rotation.x=this.circleSecond.rotation.x=this.circleThird.rotation.x=-Math.PI/2,this.circleFirst.receiveShadow=this.circleSecond.receiveShadow=this.circleThird.receiveShadow=!0,this.scene.add(this.circleFirst),this.scene.add(this.circleSecond),this.scene.add(this.circleThird)}resize(){}update(){}}function Zf(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function zb(a,e,t){return e&&Zf(a.prototype,e),t&&Zf(a,t),a}/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,qc,Rn,Qi,er,Ds,sm,yr,Co,om,Ri,Qn,am,lm=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},cm=1,Ss=[],Je=[],mi=[],Lo=Date.now,jc=function(e,t){return t},Bb=function(){var e=Co.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Je),i.push.apply(i,mi),Je=n,mi=i,jc=function(s,o){return t[s](o)}},sr=function(e,t){return~mi.indexOf(e)&&mi[mi.indexOf(e)+1][t]},Po=function(e){return!!~om.indexOf(e)},pn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},wa="scrollLeft",Ta="scrollTop",Yc=function(){return Ri&&Ri.isPressed||Je.cache++},rl=function(e,t){var n=function i(r){if(r||r===0){cm&&(Rn.history.scrollRestoration="manual");var s=Ri&&Ri.isPressed;r=i.v=Math.round(r)||(Ri&&Ri.iOS?1:0),e(r),i.cacheID=Je.cache,s&&jc("ss",r)}else(t||Je.cache!==i.cacheID||jc("ref"))&&(i.cacheID=Je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},fn={s:wa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rl(function(a){return arguments.length?Rn.scrollTo(a,Nt.sc()):Rn.pageXOffset||Qi[wa]||er[wa]||Ds[wa]||0})},Nt={s:Ta,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:fn,sc:rl(function(a){return arguments.length?Rn.scrollTo(fn.sc(),a):Rn.pageYOffset||Qi[Ta]||er[Ta]||Ds[Ta]||0})},mn=function(e){return jt.utils.toArray(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},lr=function(e,t){var n=t.s,i=t.sc;Po(e)&&(e=Qi.scrollingElement||er);var r=Je.indexOf(e),s=i===Nt.sc?1:2;!~r&&(r=Je.push(e)-1),Je[r+s]||e.addEventListener("scroll",Yc);var o=Je[r+s],l=o||(Je[r+s]=rl(sr(e,n),!0)||(Po(e)?i:rl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},Kc=function(e,t,n){var i=e,r=e,s=Lo(),o=s,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Lo();g||m-s>l?(r=i,i=_,o=s,s=m):n?i+=_:i=r+(_-r)/(m-o)*(s-o)},h=function(){r=i=n?0:i,o=s=0},f=function(_){var g=o,m=r,p=Lo();return(_||_===0)&&_!==i&&u(_),s===o||p-o>c?0:(i+(n?m:-m))/((n?p:s)-g)*1e3};return{update:u,reset:h,getVelocity:f}},fo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Jf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},um=function(){Co=jt.core.globals().ScrollTrigger,Co&&Co.core&&Bb()},hm=function(e){return jt=e||lm(),jt&&typeof document<"u"&&document.body&&(Rn=window,Qi=document,er=Qi.documentElement,Ds=Qi.body,om=[Rn,Qi,er,Ds],jt.utils.clamp,am=jt.core.context||function(){},yr="onpointerenter"in Ds?"pointer":"mouse",sm=It.isTouch=Rn.matchMedia&&Rn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Rn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Qn=It.eventTypes=("ontouchstart"in er?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in er?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cm=0},500),um(),qc=1),qc};fn.op=Nt;Je.cache=0;var It=function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(n){qc||hm(jt)||console.warn("Please gsap.registerPlugin(Observer)"),Co||um();var i=n.tolerance,r=n.dragMinimum,s=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,v=n.onPress,x=n.onRelease,M=n.onRight,E=n.onLeft,A=n.onUp,P=n.onDown,y=n.onChangeX,w=n.onChangeY,q=n.onChange,F=n.onToggleX,N=n.onToggleY,k=n.onHover,V=n.onHoverEnd,te=n.onMove,z=n.ignoreCheck,j=n.isNormalizer,K=n.onGestureStart,L=n.onGestureEnd,Me=n.onWheel,ue=n.onEnable,Z=n.onDisable,ee=n.onClick,de=n.scrollSpeed,fe=n.capture,R=n.allowClicks,D=n.lockAxis,O=n.onLockAxis;this.target=o=mn(o)||er,this.vars=n,d&&(d=jt.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,de=de||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Rn.getComputedStyle(Ds).lineHeight)||22);var X,se,re,ie,me,Ee,Re,G=this,Be=0,we=0,Xe=lr(o,fn),st=lr(o,Nt),C=Xe(),b=st(),J=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Qn[0]==="pointerdown",ce=Po(o),ae=o.ownerDocument||Qi,pe=[0,0,0],I=[0,0,0],oe=0,Y=function(){return oe=Lo()},ge=function(Se,he){return(G.event=Se)&&d&&~d.indexOf(Se.target)||he&&J&&Se.pointerType!=="touch"||z&&z(Se,he)},be=function(){G._vx.reset(),G._vy.reset(),se.pause(),h&&h(G)},Le=function(){var Se=G.deltaX=Jf(pe),he=G.deltaY=Jf(I),Ie=Math.abs(Se)>=i,Fe=Math.abs(he)>=i;q&&(Ie||Fe)&&q(G,Se,he,pe,I),Ie&&(M&&G.deltaX>0&&M(G),E&&G.deltaX<0&&E(G),y&&y(G),F&&G.deltaX<0!=Be<0&&F(G),Be=G.deltaX,pe[0]=pe[1]=pe[2]=0),Fe&&(P&&G.deltaY>0&&P(G),A&&G.deltaY<0&&A(G),w&&w(G),N&&G.deltaY<0!=we<0&&N(G),we=G.deltaY,I[0]=I[1]=I[2]=0),(ie||re)&&(te&&te(G),re&&(S(G),re=!1),ie=!1),Ee&&!(Ee=!1)&&O&&O(G),me&&(Me(G),me=!1),X=0},ye=function(Se,he,Ie){pe[Ie]+=Se,I[Ie]+=he,G._vx.update(Se),G._vy.update(he),c?X||(X=requestAnimationFrame(Le)):Le()},Ae=function(Se,he){D&&!Re&&(G.axis=Re=Math.abs(Se)>Math.abs(he)?"x":"y",Ee=!0),Re!=="y"&&(pe[2]+=Se,G._vx.update(Se,!0)),Re!=="x"&&(I[2]+=he,G._vy.update(he,!0)),c?X||(X=requestAnimationFrame(Le)):Le()},ke=function(Se){if(!ge(Se,1)){Se=fo(Se,u);var he=Se.clientX,Ie=Se.clientY,Fe=he-G.x,je=Ie-G.y,Lt=G.isDragging;G.x=he,G.y=Ie,(Lt||Math.abs(G.startX-he)>=r||Math.abs(G.startY-Ie)>=r)&&(S&&(re=!0),Lt||(G.isDragging=!0),Ae(Fe,je),Lt||m&&m(G))}},ve=G.onPress=function(ze){ge(ze,1)||ze&&ze.button||(G.axis=Re=null,se.pause(),G.isPressed=!0,ze=fo(ze),Be=we=0,G.startX=G.x=ze.clientX,G.startY=G.y=ze.clientY,G._vx.reset(),G._vy.reset(),pn(j?o:ae,Qn[1],ke,u,!0),G.deltaX=G.deltaY=0,v&&v(G))},ct=G.onRelease=function(ze){if(!ge(ze,1)){an(j?o:ae,Qn[1],ke,!0);var Se=!isNaN(G.y-G.startY),he=G.isDragging&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ie=fo(ze);!he&&Se&&(G._vx.reset(),G._vy.reset(),u&&R&&jt.delayedCall(.08,function(){if(Lo()-oe>300&&!ze.defaultPrevented){if(ze.target.click)ze.target.click();else if(ae.createEvent){var Fe=ae.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,Rn,1,Ie.screenX,Ie.screenY,Ie.clientX,Ie.clientY,!1,!1,!1,!1,0,null),ze.target.dispatchEvent(Fe)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&!j&&se.restart(!0),p&&he&&p(G),x&&x(G,he)}},U=function(Se){return Se.touches&&Se.touches.length>1&&(G.isGesturing=!0)&&K(Se,G.isDragging)},Q=function(){return(G.isGesturing=!1)||L(G)},le=function(Se){if(!ge(Se)){var he=Xe(),Ie=st();ye((he-C)*de,(Ie-b)*de,1),C=he,b=Ie,h&&se.restart(!0)}},_e=function(Se){if(!ge(Se)){Se=fo(Se,u),Me&&(me=!0);var he=(Se.deltaMode===1?l:Se.deltaMode===2?Rn.innerHeight:1)*_;ye(Se.deltaX*he,Se.deltaY*he,0),h&&!j&&se.restart(!0)}},De=function(Se){if(!ge(Se)){var he=Se.clientX,Ie=Se.clientY,Fe=he-G.x,je=Ie-G.y;G.x=he,G.y=Ie,ie=!0,(Fe||je)&&Ae(Fe,je)}},ot=function(Se){G.event=Se,k(G)},rt=function(Se){G.event=Se,V(G)},bt=function(Se){return ge(Se)||fo(Se,u)&&ee(G)};se=G._dc=jt.delayedCall(f||.25,be).pause(),G.deltaX=G.deltaY=0,G._vx=Kc(0,50,!0),G._vy=Kc(0,50,!0),G.scrollX=Xe,G.scrollY=st,G.isDragging=G.isGesturing=G.isPressed=!1,am(this),G.enable=function(ze){return G.isEnabled||(pn(ce?ae:o,"scroll",Yc),s.indexOf("scroll")>=0&&pn(ce?ae:o,"scroll",le,u,fe),s.indexOf("wheel")>=0&&pn(o,"wheel",_e,u,fe),(s.indexOf("touch")>=0&&sm||s.indexOf("pointer")>=0)&&(pn(o,Qn[0],ve,u,fe),pn(ae,Qn[2],ct),pn(ae,Qn[3],ct),R&&pn(o,"click",Y,!1,!0),ee&&pn(o,"click",bt),K&&pn(ae,"gesturestart",U),L&&pn(ae,"gestureend",Q),k&&pn(o,yr+"enter",ot),V&&pn(o,yr+"leave",rt),te&&pn(o,yr+"move",De)),G.isEnabled=!0,ze&&ze.type&&ve(ze),ue&&ue(G)),G},G.disable=function(){G.isEnabled&&(Ss.filter(function(ze){return ze!==G&&Po(ze.target)}).length||an(ce?ae:o,"scroll",Yc),G.isPressed&&(G._vx.reset(),G._vy.reset(),an(j?o:ae,Qn[1],ke,!0)),an(ce?ae:o,"scroll",le,fe),an(o,"wheel",_e,fe),an(o,Qn[0],ve,fe),an(ae,Qn[2],ct),an(ae,Qn[3],ct),an(o,"click",Y,!0),an(o,"click",bt),an(ae,"gesturestart",U),an(ae,"gestureend",Q),an(o,yr+"enter",ot),an(o,yr+"leave",rt),an(o,yr+"move",De),G.isEnabled=G.isPressed=G.isDragging=!1,Z&&Z(G))},G.kill=G.revert=function(){G.disable();var ze=Ss.indexOf(G);ze>=0&&Ss.splice(ze,1),Ri===G&&(Ri=0)},Ss.push(G),j&&Po(o)&&(Ri=G),G.enable(g)},zb(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();It.version="3.11.5";It.create=function(a){return new It(a)};It.register=hm;It.getAll=function(){return Ss.slice()};It.getById=function(a){return Ss.filter(function(e){return e.vars.id===a})[0]};lm()&&jt.registerPlugin(It);/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,_s,et,vt,ni,wt,fm,sl,ol,bs,Ha,Ea,Zt,_l,$c,cn,Qf,ed,xs,dm,hc,pm,En,mm,gm,_m,Xi,Zc,Iu,fc,Aa=1,un=Date.now,dc=un(),jn=0,vo=0,Hb=function a(){return vo&&requestAnimationFrame(a)},td=function(){return _l=1},nd=function(){return _l=0},ci=function(e){return e},yo=function(e){return Math.round(e*1e5)/1e5||0},xm=function(){return typeof window<"u"},vm=function(){return Oe||xm()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},Hr=function(e){return!!~fm.indexOf(e)},ym=function(e){return sr(e,"getBoundingClientRect")||(Hr(e)?function(){return ja.width=et.innerWidth,ja.height=et.innerHeight,ja}:function(){return Li(e)})},Vb=function(e,t,n){var i=n.d,r=n.d2,s=n.a;return(s=sr(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?et["inner"+r]:e["client"+r])||0}},Gb=function(e,t){return!t||~mi.indexOf(e)?ym(e):function(){return ja}},tr=function(e,t){var n=t.s,i=t.d2,r=t.d,s=t.a;return Math.max(0,(n="scroll"+i)&&(s=sr(e,n))?s()-ym(e)()[r]:Hr(e)?(ni[n]||wt[n])-(et["inner"+i]||ni["client"+i]||wt["client"+i]):e[n]-e["offset"+i])},Ca=function(e,t){for(var n=0;n<xs.length;n+=3)(!t||~t.indexOf(xs[n+1]))&&e(xs[n],xs[n+1],xs[n+2])},ei=function(e){return typeof e=="string"},dn=function(e){return typeof e=="function"},Mo=function(e){return typeof e=="number"},Va=function(e){return typeof e=="object"},po=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},pc=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ps=Math.abs,Mm="left",Sm="top",Ou="right",Nu="bottom",Pr="width",Rr="height",Ro="Right",Do="Left",Io="Top",Oo="Bottom",Et="padding",Bn="margin",$s="Width",Uu="Height",Wt="px",ri=function(e){return et.getComputedStyle(e)},Wb=function(e){var t=ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},id=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Li=function(e,t){var n=t&&ri(e)[$c]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Jc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},bm=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Xb=function(e){return function(t){return Oe.utils.snap(bm(e),t)}},Fu=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,s){s===void 0&&(s=.001);var o;if(!r)return t(i);if(r>0){for(i-=s,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=s;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,s){s===void 0&&(s=.001);var o=t(i);return!r||Math.abs(o-i)<s||o-i<0==r<0?o:t(r<0?i-e:i+e)}},qb=function(e){return function(t,n){return Fu(bm(e))(t,n.direction)}},La=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ht=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Bt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Pa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},rd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ra={toggleActions:"play",anticipatePin:0},al={top:0,left:0,center:.5,bottom:1,right:1},Ga=function(e,t){if(ei(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in al?al[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Da=function(e,t,n,i,r,s,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,_=vt.createElement("div"),g=Hr(n)||sr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?wt:n,S=e.indexOf("start")!==-1,v=S?c:u,x="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Nt?Ou:Nu)+":"+(s+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Wa(_,0,i,S),_},Wa=function(e,t,n,i){var r={display:"block"},s=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+s+$s]=1,r["border"+o+$s]=0,r[n.p]=t+"px",Oe.set(e,r)},Ze=[],Qc={},jo,sd=function(){return un()-jn>34&&(jo||(jo=requestAnimationFrame(Ii)))},ms=function(){(!En||!En.isPressed||En.startX>wt.clientWidth)&&(Je.cache++,En?jo||(jo=requestAnimationFrame(Ii)):Ii(),jn||Gr("scrollStart"),jn=un())},mc=function(){_m=et.innerWidth,gm=et.innerHeight},So=function(){Je.cache++,!Zt&&!pm&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!mm||_m!==et.innerWidth||Math.abs(et.innerHeight-gm)>et.innerHeight*.25)&&sl.restart(!0)},Vr={},jb=[],wm=function a(){return Bt(Ye,"scrollEnd",a)||Tr(!0)},Gr=function(e){return Vr[e]&&Vr[e].map(function(t){return t()})||jb},An=[],Tm=function(e){for(var t=0;t<An.length;t+=5)(!e||An[t+4]&&An[t+4].query===e)&&(An[t].style.cssText=An[t+1],An[t].getBBox&&An[t].setAttribute("transform",An[t+2]||""),An[t+3].uncache=1)},ku=function(e,t){var n;for(cn=0;cn<Ze.length;cn++)n=Ze[cn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Tm(t),t||Gr("revert")},Em=function(e,t){Je.cache++,(t||!Ln)&&Je.forEach(function(n){return dn(n)&&n.cacheID++&&(n.rec=0)}),ei(e)&&(et.history.scrollRestoration=Iu=e)},Ln,Dr=0,od,Yb=function(){if(od!==Dr){var e=od=Dr;requestAnimationFrame(function(){return e===Dr&&Tr(!0)})}},Tr=function(e,t){if(jn&&!e){Ht(Ye,"scrollEnd",wm);return}Ln=Ye.isRefreshing=!0,Je.forEach(function(i){return dn(i)&&i.cacheID++&&(i.rec=i())});var n=Gr("refreshInit");dm&&Ye.sort(),t||ku(),Je.forEach(function(i){dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ze.slice(0).forEach(function(i){return i.refresh()}),Ze.forEach(function(i,r){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ze.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,tr(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Je.forEach(function(i){dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Em(Iu,1),sl.pause(),Dr++,Ln=2,Ii(2),Ze.forEach(function(i){return dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ln=Ye.isRefreshing=!1,Gr("refresh")},eu=0,Xa=1,No,Ii=function(e){if(!Ln||e===2){Ye.isUpdating=!0,No&&No.update(0);var t=Ze.length,n=un(),i=n-dc>=50,r=t&&Ze[0].scroll();if(Xa=eu>r?-1:1,Ln||(eu=r),i&&(jn&&!_l&&n-jn>200&&(jn=0,Gr("scrollEnd")),Ha=dc,dc=n),Xa<0){for(cn=t;cn-- >0;)Ze[cn]&&Ze[cn].update(0,i);Xa=1}else for(cn=0;cn<t;cn++)Ze[cn]&&Ze[cn].update(0,i);Ye.isUpdating=!1}jo=0},tu=[Mm,Sm,Nu,Ou,Bn+Oo,Bn+Ro,Bn+Io,Bn+Do,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],qa=tu.concat([Pr,Rr,"boxSizing","max"+$s,"max"+Uu,"position",Bn,Et,Et+Io,Et+Ro,Et+Oo,Et+Do]),Kb=function(e,t,n){Is(n);var i=e._gsap;if(i.spacerIsNative)Is(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},gc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=tu.length,s=t.style,o=e.style,l;r--;)l=tu[r],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),o[Nu]=o[Ou]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Pr]=Jc(e,fn)+Wt,s[Rr]=Jc(e,Nt)+Wt,s[Et]=o[Bn]=o[Sm]=o[Mm]="0",Is(i),o[Pr]=o["max"+$s]=n[Pr],o[Rr]=o["max"+Uu]=n[Rr],o[Et]=n[Et],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},$b=/([A-Z])/g,Is=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,s;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],r=e[i],s?t[r]=s:t[r]&&t.removeProperty(r.replace($b,"-$1").toLowerCase())}},Ia=function(e){for(var t=qa.length,n=e.style,i=[],r=0;r<t;r++)i.push(qa[r],n[qa[r]]);return i.t=e,i},Zb=function(e,t,n){for(var i=[],r=e.length,s=n?8:0,o;s<r;s+=2)o=e[s],i.push(o,o in t?t[o]:e[s+1]);return i.t=e.t,i},ja={left:0,top:0},ad=function(e,t,n,i,r,s,o,l,c,u,h,f,d){dn(e)&&(e=e(l)),ei(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ga("0"+e.substr(3),n):0));var _=d?d.time():0,g,m,p;if(d&&d.seek(0),Mo(e))d&&(e=Oe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Wa(o,n,i,!0);else{dn(t)&&(t=t(l));var S=(e||"0").split(" "),v,x,M,E;p=mn(t)||wt,v=Li(p)||{},(!v||!v.left&&!v.top)&&ri(p).display==="none"&&(E=p.style.display,p.style.display="block",v=Li(p),E?p.style.display=E:p.style.removeProperty("display")),x=Ga(S[0],v[i.d]),M=Ga(S[1]||"0",n),e=v[i.p]-c[i.p]-u+x+r-M,o&&Wa(o,M,i,n-M<20||o._isStart&&M>20),n-=n-M}if(s){var A=e+n,P=s._isStart;g="scroll"+i.d2,Wa(s,A,i,P&&A>20||!P&&(h?Math.max(wt[g],ni[g]):s.parentNode[g])<=A+1),h&&(c=Li(o),h&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+Wt))}return d&&p&&(g=Li(p),d.seek(f),m=Li(p),d._caScrollDist=g[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},Jb=/(webkit|moz|length|cssText|inset)/i,ld=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,s,o;if(t===wt){e._stOrig=r.cssText,o=ri(e);for(s in o)!+s&&!Jb.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=n,r.left=i}else r.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},Am=function(e,t,n){var i=t,r=i;return function(s){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(s=o,n&&n()),r=i,i=s,s}},cd=function(e,t){var n=lr(e,t),i="_scroll"+t.p2,r=function s(o,l,c,u,h){var f=s.tween,d=l.onComplete,_={};c=c||n();var g=Am(n,c,function(){f.kill(),s.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Je.cache++,Ii()},l.onComplete=function(){s.tween=0,d&&d.call(f)},f=s.tween=Oe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ht(e,"wheel",n.wheelHandler),Ye.isTouch&&Ht(e,"touchmove",n.wheelHandler),r},Ye=function(){function a(t,n){_s||a.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=a.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!vo){this.update=this.refresh=this.kill=ci;return}n=id(ei(n)||Mo(n)||n.nodeType?{trigger:n}:n,Ra);var r=n,s=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,S=r.onSnapComplete,v=r.once,x=r.snap,M=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,P=r.fastScrollEnd,y=r.preventOverlaps,w=n.horizontal||n.containerAnimation&&n.horizontal!==!1?fn:Nt,q=!h&&h!==0,F=mn(n.scroller||et),N=Oe.core.getCache(F),k=Hr(F),V=("pinType"in n?n.pinType:sr(F,"pinType")||k&&"fixed")==="fixed",te=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=q&&n.toggleActions.split(" "),j="markers"in n?n.markers:Ra.markers,K=k?0:parseFloat(ri(F)["border"+w.p2+$s])||0,L=this,Me=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ue=Vb(F,k,w),Z=Gb(F,k),ee=0,de=0,fe=lr(F,w),R,D,O,X,se,re,ie,me,Ee,Re,G,Be,we,Xe,st,C,b,J,ce,ae,pe,I,oe,Y,ge,be,Le,ye,Ae,ke,ve,ct,U,Q,le,_e,De,ot,rt;if(Zc(L),L._dir=w,m*=45,L.scroller=F,L.scroll=A?A.time.bind(A):fe,X=fe(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(dm=1,n.refreshPriority===-9999&&(No=L)),N.tweenScroll=N.tweenScroll||{top:cd(F,Nt),left:cd(F,fn)},L.tweenTo=R=N.tweenScroll[w.p],L.scrubDuration=function(he){ct=Mo(he)&&he,ct?ve?ve.duration(he):ve=Oe.to(i,{ease:"expo",totalProgress:"+=0.001",duration:ct,paused:!0,onComplete:function(){return p&&p(L)}}):(ve&&ve.progress(1).kill(),ve=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),ve&&ve.resetTo&&ve.resetTo("totalProgress",0),Ae=0,l||(l=i.vars.id)),Ze.push(L),x&&((!Va(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in wt.style&&Oe.set(k?[wt,ni]:F,{scrollBehavior:"auto"}),Je.forEach(function(he){return dn(he)&&he.target===(k?vt.scrollingElement||ni:F)&&(he.smooth=!1)}),O=dn(x.snapTo)?x.snapTo:x.snapTo==="labels"?Xb(i):x.snapTo==="labelsDirectional"?qb(i):x.directional!==!1?function(he,Ie){return Fu(x.snapTo)(he,un()-de<500?0:Ie.direction)}:Oe.utils.snap(x.snapTo),U=x.duration||{min:.1,max:2},U=Va(U)?bs(U.min,U.max):bs(U,U),Q=Oe.delayedCall(x.delay||ct/2||.1,function(){var he=fe(),Ie=un()-de<500,Fe=R.tween;if((Ie||Math.abs(L.getVelocity())<10)&&!Fe&&!_l&&ee!==he){var je=(he-re)/we,Lt=i&&!q?i.totalProgress():je,at=Ie?0:(Lt-ke)/(un()-Ha)*1e3||0,xt=Oe.utils.clamp(-je,1-je,ps(at/2)*at/.185),T=je+(x.inertia===!1?0:xt),W=bs(0,1,O(T,L)),$=Math.round(re+W*we),B=x,ne=B.onStart,Te=B.onInterrupt,Pe=B.onComplete;if(he<=ie&&he>=re&&$!==he){if(Fe&&!Fe._initted&&Fe.data<=ps($-he))return;x.inertia===!1&&(xt=W-je),R($,{duration:U(ps(Math.max(ps(T-Lt),ps(W-Lt))*.185/at/.05||0)),ease:x.ease||"power3",data:ps($-he),onInterrupt:function(){return Q.restart(!0)&&Te&&Te(L)},onComplete:function(){L.update(),ee=fe(),Ae=ke=i&&!q?i.totalProgress():L.progress,S&&S(L),Pe&&Pe(L)}},he,xt*we,$-he-xt*we),ne&&ne(L,R.tween)}}else L.isActive&&ee!==he&&Q.restart(!0)}).pause()),l&&(Qc[l]=L),f=L.trigger=mn(f||d),rt=f&&f._gsap&&f._gsap.stRevert,rt&&(rt=rt(L)),d=d===!0?f:mn(d),ei(o)&&(o={targets:f,className:o}),d&&(_===!1||_===Bn||(_=!_&&d.parentNode&&d.parentNode.style&&ri(d.parentNode).display==="flex"?!1:Et),L.pin=d,D=Oe.core.getCache(d),D.spacer?Xe=D.pinState:(E&&(E=mn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),D.spacerIsNative=!!E,E&&(D.spacerState=Ia(E))),D.spacer=b=E||vt.createElement("div"),b.classList.add("pin-spacer"),l&&b.classList.add("pin-spacer-"+l),D.pinState=Xe=Ia(d)),n.force3D!==!1&&Oe.set(d,{force3D:!0}),L.spacer=b=D.spacer,ye=ri(d),oe=ye[_+w.os2],ce=Oe.getProperty(d),ae=Oe.quickSetter(d,w.a,Wt),gc(d,b,ye),C=Ia(d)),j){Be=Va(j)?id(j,rd):rd,Re=Da("scroller-start",l,F,w,Be,0),G=Da("scroller-end",l,F,w,Be,0,Re),J=Re["offset"+w.op.d2];var bt=mn(sr(F,"content")||F);me=this.markerStart=Da("start",l,bt,w,Be,J,0,A),Ee=this.markerEnd=Da("end",l,bt,w,Be,J,0,A),A&&(ot=Oe.quickSetter([me,Ee],w.a,Wt)),!V&&!(mi.length&&sr(F,"fixedMarkers")===!0)&&(Wb(k?wt:F),Oe.set([Re,G],{force3D:!0}),ge=Oe.quickSetter(Re,w.a,Wt),Le=Oe.quickSetter(G,w.a,Wt))}if(A){var ze=A.vars.onUpdate,Se=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){L.update(0,0,1),ze&&ze.apply(A,Se||[])})}L.previous=function(){return Ze[Ze.indexOf(L)-1]},L.next=function(){return Ze[Ze.indexOf(L)+1]},L.revert=function(he,Ie){if(!Ie)return L.kill(!0);var Fe=he!==!1||!L.enabled,je=Zt;Fe!==L.isReverted&&(Fe&&(_e=Math.max(fe(),L.scroll.rec||0),le=L.progress,De=i&&i.progress()),me&&[me,Ee,Re,G].forEach(function(Lt){return Lt.style.display=Fe?"none":"block"}),Fe&&(Zt=L,L.update(Fe)),d&&(!M||!L.isActive)&&(Fe?Kb(d,b,Xe):gc(d,b,ri(d),Y)),Fe||L.update(Fe),Zt=je,L.isReverted=Fe)},L.refresh=function(he,Ie){if(!((Zt||!L.enabled)&&!Ie)){if(d&&he&&jn){Ht(a,"scrollEnd",wm);return}!Ln&&Me&&Me(L),Zt=L,de=un(),R.tween&&(R.tween.kill(),R.tween=0),ve&&ve.pause(),g&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;for(var Fe=ue(),je=Z(),Lt=A?A.duration():tr(F,w),at=we<=.01,xt=0,T=0,W=n.end,$=n.endTrigger||f,B=n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),ne=L.pinnedContainer=n.pinnedContainer&&mn(n.pinnedContainer),Te=f&&Math.max(0,Ze.indexOf(L))||0,Pe=Te,Ce,Ue,We,Ve,Ne,He,gt,rn,ai,_t,Ge;Pe--;)He=Ze[Pe],He.end||He.refresh(0,1)||(Zt=L),gt=He.pin,gt&&(gt===f||gt===d||gt===ne)&&!He.isReverted&&(_t||(_t=[]),_t.unshift(He),He.revert(!0,!0)),He!==Ze[Pe]&&(Te--,Pe--);for(dn(B)&&(B=B(L)),re=ad(B,f,Fe,w,fe(),me,Re,L,je,K,V,Lt,A)||(d?-.001:0),dn(W)&&(W=W(L)),ei(W)&&!W.indexOf("+=")&&(~W.indexOf(" ")?W=(ei(B)?B.split(" ")[0]:"")+W:(xt=Ga(W.substr(2),Fe),W=ei(B)?B:(A?Oe.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,re):re)+xt,$=f)),ie=Math.max(re,ad(W||($?"100% 0":Lt),$,Fe,w,fe()+xt,Ee,G,L,je,K,V,Lt,A))||-.001,we=ie-re||(re-=.01)&&.001,xt=0,Pe=Te;Pe--;)He=Ze[Pe],gt=He.pin,gt&&He.start-He._pinPush<=re&&!A&&He.end>0&&(Ce=He.end-He.start,(gt===f&&He.start-He._pinPush<re||gt===ne)&&!Mo(B)&&(xt+=Ce*(1-He.progress)),gt===d&&(T+=Ce));if(re+=xt,ie+=xt,at&&(le=Oe.utils.clamp(0,1,Oe.utils.normalize(re,ie,_e))),L._pinPush=T,me&&xt&&(Ce={},Ce[w.a]="+="+xt,ne&&(Ce[w.p]="-="+fe()),Oe.set([me,Ee],Ce)),d)Ce=ri(d),Ve=w===Nt,We=fe(),pe=parseFloat(ce(w.a))+T,!Lt&&ie>1&&(Ge=(k?vt.scrollingElement||ni:F).style,Ge={style:Ge,value:Ge["overflow"+w.a.toUpperCase()]},Ge.style["overflow"+w.a.toUpperCase()]="scroll"),gc(d,b,Ce),C=Ia(d),Ue=Li(d,!0),rn=V&&lr(F,Ve?fn:Nt)(),_&&(Y=[_+w.os2,we+T+Wt],Y.t=b,Pe=_===Et?Jc(d,w)+we+T:0,Pe&&Y.push(w.d,Pe+Wt),Is(Y),ne&&Ze.forEach(function(vi){vi.pin===ne&&vi.vars.pinSpacing!==!1&&(vi._subPinOffset=!0)}),V&&fe(_e)),V&&(Ne={top:Ue.top+(Ve?We-re:rn)+Wt,left:Ue.left+(Ve?rn:We-re)+Wt,boxSizing:"border-box",position:"fixed"},Ne[Pr]=Ne["max"+$s]=Math.ceil(Ue.width)+Wt,Ne[Rr]=Ne["max"+Uu]=Math.ceil(Ue.height)+Wt,Ne[Bn]=Ne[Bn+Io]=Ne[Bn+Ro]=Ne[Bn+Oo]=Ne[Bn+Do]="0",Ne[Et]=Ce[Et],Ne[Et+Io]=Ce[Et+Io],Ne[Et+Ro]=Ce[Et+Ro],Ne[Et+Oo]=Ce[Et+Oo],Ne[Et+Do]=Ce[Et+Do],st=Zb(Xe,Ne,M),Ln&&fe(0)),i?(ai=i._initted,hc(1),i.render(i.duration(),!0,!0),I=ce(w.a)-pe+we+T,be=Math.abs(we-I)>1,V&&be&&st.splice(st.length-2,2),i.render(0,!0,!0),ai||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),hc(0)):I=we,Ge&&(Ge.value?Ge.style["overflow"+w.a.toUpperCase()]=Ge.value:Ge.style.removeProperty("overflow-"+w.a));else if(f&&fe()&&!A)for(Ue=f.parentNode;Ue&&Ue!==wt;)Ue._pinOffset&&(re-=Ue._pinOffset,ie-=Ue._pinOffset),Ue=Ue.parentNode;_t&&_t.forEach(function(vi){return vi.revert(!1,!0)}),L.start=re,L.end=ie,X=se=Ln?_e:fe(),!A&&!Ln&&(X<_e&&fe(_e),L.scroll.rec=0),L.revert(!1,!0),Q&&(ee=-1,L.isActive&&fe(re+we*le),Q.restart(!0)),Zt=0,i&&q&&(i._initted||De)&&i.progress()!==De&&i.progress(De,!0).render(i.time(),!0,!0),(at||le!==L.progress||A)&&(i&&!q&&i.totalProgress(A&&re<-.001&&!le?Oe.utils.normalize(re,ie,0):le,!0),L.progress=(X-re)/we===le?0:le),d&&_&&(b._pinOffset=Math.round(L.progress*I)),ve&&ve.invalidate(),u&&!Ln&&u(L)}},L.getVelocity=function(){return(fe()-se)/(un()-Ha)*1e3||0},L.endAnimation=function(){po(L.callbackAnimation),i&&(ve?ve.progress(1):i.paused()?q||po(i,L.direction<0,1):po(i,i.reversed()))},L.labelToScroll=function(he){return i&&i.labels&&(re||L.refresh()||re)+i.labels[he]/i.duration()*we||0},L.getTrailing=function(he){var Ie=Ze.indexOf(L),Fe=L.direction>0?Ze.slice(0,Ie).reverse():Ze.slice(Ie+1);return(ei(he)?Fe.filter(function(je){return je.vars.preventOverlaps===he}):Fe).filter(function(je){return L.direction>0?je.end<=re:je.start>=ie})},L.update=function(he,Ie,Fe){if(!(A&&!Fe&&!he)){var je=Ln===!0?_e:L.scroll(),Lt=he?0:(je-re)/we,at=Lt<0?0:Lt>1?1:Lt||0,xt=L.progress,T,W,$,B,ne,Te,Pe,Ce;if(Ie&&(se=X,X=A?fe():je,x&&(ke=Ae,Ae=i&&!q?i.totalProgress():at)),m&&!at&&d&&!Zt&&!Aa&&jn&&re<je+(je-se)/(un()-Ha)*m&&(at=1e-4),at!==xt&&L.enabled){if(T=L.isActive=!!at&&at<1,W=!!xt&&xt<1,Te=T!==W,ne=Te||!!at!=!!xt,L.direction=at>xt?1:-1,L.progress=at,ne&&!Zt&&($=at&&!xt?0:at===1?1:xt===1?2:3,q&&(B=!Te&&z[$+1]!=="none"&&z[$+1]||z[$],Ce=i&&(B==="complete"||B==="reset"||B in i))),y&&(Te||Ce)&&(Ce||h||!i)&&(dn(y)?y(L):L.getTrailing(y).forEach(function(Ne){return Ne.endAnimation()})),q||(ve&&!Zt&&!Aa?(ve._dp._time-ve._start!==ve._time&&ve.render(ve._dp._time-ve._start),ve.resetTo?ve.resetTo("totalProgress",at,i._tTime/i._tDur):(ve.vars.totalProgress=at,ve.invalidate().restart())):i&&i.totalProgress(at,!!Zt)),d){if(he&&_&&(b.style[_+w.os2]=oe),!V)ae(yo(pe+I*at));else if(ne){if(Pe=!he&&at>xt&&ie+1>je&&je+1>=tr(F,w),M)if(!he&&(T||Pe)){var Ue=Li(d,!0),We=je-re;ld(d,wt,Ue.top+(w===Nt?We:0)+Wt,Ue.left+(w===Nt?0:We)+Wt)}else ld(d,b);Is(T||Pe?st:C),be&&at<1&&T||ae(pe+(at===1&&!Pe?I:0))}}x&&!R.tween&&!Zt&&!Aa&&Q.restart(!0),o&&(Te||v&&at&&(at<1||!fc))&&ol(o.targets).forEach(function(Ne){return Ne.classList[T||v?"add":"remove"](o.className)}),s&&!q&&!he&&s(L),ne&&!Zt?(q&&(Ce&&(B==="complete"?i.pause().totalProgress(1):B==="reset"?i.restart(!0).pause():B==="restart"?i.restart(!0):i[B]()),s&&s(L)),(Te||!fc)&&(c&&Te&&pc(L,c),te[$]&&pc(L,te[$]),v&&(at===1?L.kill(!1,1):te[$]=0),Te||($=at===1?1:3,te[$]&&pc(L,te[$]))),P&&!T&&Math.abs(L.getVelocity())>(Mo(P)?P:2500)&&(po(L.callbackAnimation),ve?ve.progress(1):po(i,B==="reverse"?1:!at,1))):q&&s&&!Zt&&s(L)}if(Le){var Ve=A?je/A.duration()*(A._caScrollDist||0):je;ge(Ve+(Re._isFlipped?1:0)),Le(Ve)}ot&&ot(-je/A.duration()*(A._caScrollDist||0))}},L.enable=function(he,Ie){L.enabled||(L.enabled=!0,Ht(F,"resize",So),Ht(k?vt:F,"scroll",ms),Me&&Ht(a,"refreshInit",Me),he!==!1&&(L.progress=le=0,X=se=ee=fe()),Ie!==!1&&L.refresh())},L.getTween=function(he){return he&&R?R.tween:ve},L.setPositions=function(he,Ie){d&&(pe+=he-re,I+=Ie-he-we,_===Et&&L.adjustPinSpacing(Ie-he-we)),L.start=re=he,L.end=ie=Ie,we=Ie-he,L.update()},L.adjustPinSpacing=function(he){if(Y&&he){var Ie=Y.indexOf(w.d)+1;Y[Ie]=parseFloat(Y[Ie])+he+Wt,Y[1]=parseFloat(Y[1])+he+Wt,Is(Y)}},L.disable=function(he,Ie){if(L.enabled&&(he!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Ie||ve&&ve.pause(),_e=0,D&&(D.uncache=1),Me&&Bt(a,"refreshInit",Me),Q&&(Q.pause(),R.tween&&R.tween.kill()&&(R.tween=0)),!k)){for(var Fe=Ze.length;Fe--;)if(Ze[Fe].scroller===F&&Ze[Fe]!==L)return;Bt(F,"resize",So),Bt(F,"scroll",ms)}},L.kill=function(he,Ie){L.disable(he,Ie),ve&&!Ie&&ve.kill(),l&&delete Qc[l];var Fe=Ze.indexOf(L);Fe>=0&&Ze.splice(Fe,1),Fe===cn&&Xa>0&&cn--,Fe=0,Ze.forEach(function(je){return je.scroller===L.scroller&&(Fe=1)}),Fe||Ln||(L.scroll.rec=0),i&&(i.scrollTrigger=null,he&&i.revert({kill:!1}),Ie||i.kill()),me&&[me,Ee,Re,G].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),No===L&&(No=0),d&&(D&&(D.uncache=1),Fe=0,Ze.forEach(function(je){return je.pin===d&&Fe++}),Fe||(D.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),rt&&rt(L),!i||!i.add||we?L.refresh():Oe.delayedCall(.01,function(){return re||ie||L.refresh()})&&(we=.01)&&(re=ie=0),d&&Yb()},a.register=function(n){return _s||(Oe=n||vm(),xm()&&window.document&&a.enable(),_s=vo),_s},a.defaults=function(n){if(n)for(var i in n)Ra[i]=n[i];return Ra},a.disable=function(n,i){vo=0,Ze.forEach(function(s){return s[i?"kill":"disable"](n)}),Bt(et,"wheel",ms),Bt(vt,"scroll",ms),clearInterval(Ea),Bt(vt,"touchcancel",ci),Bt(wt,"touchstart",ci),La(Bt,vt,"pointerdown,touchstart,mousedown",td),La(Bt,vt,"pointerup,touchend,mouseup",nd),sl.kill(),Ca(Bt);for(var r=0;r<Je.length;r+=3)Pa(Bt,Je[r],Je[r+1]),Pa(Bt,Je[r],Je[r+2])},a.enable=function(){if(et=window,vt=document,ni=vt.documentElement,wt=vt.body,Oe&&(ol=Oe.utils.toArray,bs=Oe.utils.clamp,Zc=Oe.core.context||ci,hc=Oe.core.suppressOverwrites||ci,Iu=et.history.scrollRestoration||"auto",eu=et.pageYOffset,Oe.core.globals("ScrollTrigger",a),wt)){vo=1,Hb(),It.register(Oe),a.isTouch=It.isTouch,Xi=It.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ht(et,"wheel",ms),fm=[et,vt,ni,wt],Oe.matchMedia?(a.matchMedia=function(l){var c=Oe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Oe.addEventListener("matchMediaInit",function(){return ku()}),Oe.addEventListener("matchMediaRevert",function(){return Tm()}),Oe.addEventListener("matchMedia",function(){Tr(0,1),Gr("matchMedia")}),Oe.matchMedia("(orientation: portrait)",function(){return mc(),mc})):console.warn("Requires GSAP 3.11.0 or later"),mc(),Ht(vt,"scroll",ms);var n=wt.style,i=n.borderTopStyle,r=Oe.core.Animation.prototype,s,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",s=Li(wt),Nt.m=Math.round(s.top+Nt.sc())||0,fn.m=Math.round(s.left+fn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ea=setInterval(sd,250),Oe.delayedCall(.5,function(){return Aa=0}),Ht(vt,"touchcancel",ci),Ht(wt,"touchstart",ci),La(Ht,vt,"pointerdown,touchstart,mousedown",td),La(Ht,vt,"pointerup,touchend,mouseup",nd),$c=Oe.utils.checkPrefix("transform"),qa.push($c),_s=un(),sl=Oe.delayedCall(.2,Tr).pause(),xs=[vt,"visibilitychange",function(){var l=et.innerWidth,c=et.innerHeight;vt.hidden?(Qf=l,ed=c):(Qf!==l||ed!==c)&&So()},vt,"DOMContentLoaded",Tr,et,"load",Tr,et,"resize",So],Ca(Ht),Ze.forEach(function(l){return l.enable(0,1)}),o=0;o<Je.length;o+=3)Pa(Bt,Je[o],Je[o+1]),Pa(Bt,Je[o],Je[o+2])}},a.config=function(n){"limitCallbacks"in n&&(fc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ea)||(Ea=i)&&setInterval(sd,i),"ignoreMobileResize"in n&&(mm=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ca(Bt)||Ca(Ht,n.autoRefreshEvents||"none"),pm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,i){var r=mn(n),s=Je.indexOf(r),o=Hr(r);~s&&Je.splice(s,o?6:2),i&&(o?mi.unshift(et,i,wt,i,ni,i):mi.unshift(r,i))},a.clearMatchMedia=function(n){Ze.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},a.isInViewport=function(n,i,r){var s=(ei(n)?mn(n):n).getBoundingClientRect(),o=s[r?Pr:Rr]*i||0;return r?s.right-o>0&&s.left+o<et.innerWidth:s.bottom-o>0&&s.top+o<et.innerHeight},a.positionInViewport=function(n,i,r){ei(n)&&(n=mn(n));var s=n.getBoundingClientRect(),o=s[r?Pr:Rr],l=i==null?o/2:i in al?al[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(s.left+l)/et.innerWidth:(s.top+l)/et.innerHeight},a.killAll=function(n){if(Ze.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Vr.killAll||[];Vr={},i.forEach(function(r){return r()})}},a}();Ye.version="3.11.5";Ye.saveStyles=function(a){return a?ol(a).forEach(function(e){if(e&&e.style){var t=An.indexOf(e);t>=0&&An.splice(t,5),An.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),Zc())}}):An};Ye.revert=function(a,e){return ku(!a,e)};Ye.create=function(a,e){return new Ye(a,e)};Ye.refresh=function(a){return a?So():(_s||Ye.register())&&Tr(!0)};Ye.update=function(a){return++Je.cache&&Ii(a===!0?2:0)};Ye.clearScrollMemory=Em;Ye.maxScroll=function(a,e){return tr(a,e?fn:Nt)};Ye.getScrollFunc=function(a,e){return lr(mn(a),e?fn:Nt)};Ye.getById=function(a){return Qc[a]};Ye.getAll=function(){return Ze.filter(function(a){return a.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!jn};Ye.snapDirectional=Fu;Ye.addEventListener=function(a,e){var t=Vr[a]||(Vr[a]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(a,e){var t=Vr[a],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(a,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,s=function(c,u){var h=[],f=[],d=Oe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),r<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&dn(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return dn(r)&&(r=r(),Ht(Ye,"refresh",function(){return r=e.batchMax()})),ol(a).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ye.create(c))}),t};var ud=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},_c=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(It.isTouch?" pinch-zoom":""):"none",e===ni&&a(wt,t)},Oa={auto:1,scroll:1},Qb=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||Oe.core.getCache(r),o=un(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r!==wt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Oa[(l=ri(r)).overflowY]||Oa[l.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==n&&!Hr(r)&&(Oa[(l=ri(r)).overflowY]||Oa[l.overflowX]),s._isScrollT=o}(s._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Cm=function(e,t,n,i){return It.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Qb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ht(vt,It.eventTypes[0],fd,!1,!0)},onDisable:function(){return Bt(vt,It.eventTypes[0],fd,!0)}})},ew=/(input|label|select|textarea)/i,hd,fd=function(e){var t=ew.test(e.target.tagName);(t||hd)&&(e._gsapAllow=!0,hd=t)},tw=function(e){Va(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,s=t.onRelease,o,l,c=mn(e.target)||ni,u=Oe.core.globals().ScrollSmoother,h=u&&u.get(),f=Xi&&(e.content&&mn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=lr(c,Nt),_=lr(c,fn),g=1,m=(It.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,p=0,S=dn(i)?function(){return i(o)}:function(){return i||2.8},v,x,M=Cm(c,e.type,!0,r),E=function(){return x=!1},A=ci,P=ci,y=function(){l=tr(c,Nt),P=bs(Xi?1:0,l),n&&(A=bs(0,tr(c,fn))),v=Dr},w=function(){f._gsap.y=yo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},q=function(){if(x){requestAnimationFrame(E);var j=yo(o.deltaY/2),K=P(d.v-j);if(f&&K!==d.v+d.offset){d.offset=K-d.v;var L=yo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=Je.cache,Ii()}return!0}d.offset&&w(),x=!0},F,N,k,V,te=function(){y(),F.isActive()&&F.vars.scrollY>l&&(d()>l?F.progress(1)&&d(l):F.resetTo("scrollY",l))};return f&&Oe.set(f,{y:"+=0"}),e.ignoreCheck=function(z){return Xi&&z.type==="touchmove"&&q()||g>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){x=!1;var z=g;g=yo((et.visualViewport&&et.visualViewport.scale||1)/m),F.pause(),z!==g&&_c(c,g>1.01?!0:n?!1:"x"),N=_(),k=d(),y(),v=Dr},e.onRelease=e.onGestureStart=function(z,j){if(d.offset&&w(),!j)V.restart(!0);else{Je.cache++;var K=S(),L,Me;n&&(L=_(),Me=L+K*.05*-z.velocityX/.227,K*=ud(_,L,Me,tr(c,fn)),F.vars.scrollX=A(Me)),L=d(),Me=L+K*.05*-z.velocityY/.227,K*=ud(d,L,Me,tr(c,Nt)),F.vars.scrollY=P(Me),F.invalidate().duration(K).play(.01),(Xi&&F.vars.scrollY>=l||L>=l-1)&&Oe.to({},{onUpdate:te,duration:K})}s&&s(z)},e.onWheel=function(){F._ts&&F.pause(),un()-p>1e3&&(v=0,p=un())},e.onChange=function(z,j,K,L,Me){if(Dr!==v&&y(),j&&n&&_(A(L[2]===j?N+(z.startX-z.x):_()+j-L[1])),K){d.offset&&w();var ue=Me[2]===K,Z=ue?k+z.startY-z.y:d()+K-Me[1],ee=P(Z);ue&&Z!==ee&&(k+=ee-Z),d(ee)}(K||j)&&Ii()},e.onEnable=function(){_c(c,n?!1:"x"),Ye.addEventListener("refresh",te),Ht(et,"resize",te),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),M.enable()},e.onDisable=function(){_c(c,!0),Bt(et,"resize",te),Ye.removeEventListener("refresh",te),M.kill()},e.lockAxis=e.lockAxis!==!1,o=new It(e),o.iOS=Xi,Xi&&!d()&&d(1),Xi&&Oe.ticker.add(ci),V=o._dc,F=Oe.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Am(d,d(),function(){return F.pause()})},onUpdate:Ii,onComplete:V.vars.onComplete}),o};Ye.sort=function(a){return Ze.sort(a||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(a){return new It(a)};Ye.normalizeScroll=function(a){if(typeof a>"u")return En;if(a===!0&&En)return En.enable();if(a===!1)return En&&En.kill();var e=a instanceof It?a:tw(a);return En&&En.target===e.target&&En.kill(),Hr(e.target)&&(En=e),e};Ye.core={_getVelocityProp:Kc,_inputObserver:Cm,_scrollers:Je,_proxies:mi,bridge:{ss:function(){jn||Gr("scrollStart"),jn=un()},ref:function(){return Zt}}};vm()&&Oe.registerPlugin(Ye);var nu={},nw={get exports(){return nu},set exports(a){nu=a}};(function(a,e){(function(n,i){a.exports=i()})(self,function(){return function(){var t={672:function(s){const o={html:document.documentElement,body:document.body,window:{w:window.innerWidth,h:window.innerHeight}};s.exports=o},336:function(s){s.exports=function(l,c){let u=null;return function(){clearTimeout(u);const h=arguments,f=this;u=setTimeout(function(){l.apply(f,h)},c)}}}},n={};function i(s){var o=n[s];if(o!==void 0)return o.exports;var l=n[s]={exports:{}};return t[s](l,l.exports,i),l.exports}(function(){i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,{a:o}),o}})(),function(){i.d=function(s,o){for(var l in o)i.o(o,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:o[l]})}}(),function(){i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)}}();var r={};return function(){i.d(r,{default:function(){return fe}});var s=i(336),o=i.n(s),l=i(672),c=i.n(l);function u(){if(!(this instanceof u))return new u;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var h=window.document.documentElement,f=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector;u.prototype.matchesSelector=function(R,D){return f.call(R,D)},u.prototype.querySelectorAll=function(R,D){return D.querySelectorAll(R)},u.prototype.indexes=[];var d=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;u.prototype.indexes.push({name:"ID",selector:function(D){var O;if(O=D.match(d))return O[0].slice(1)},element:function(D){if(D.id)return[D.id]}});var _=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;u.prototype.indexes.push({name:"CLASS",selector:function(D){var O;if(O=D.match(_))return O[0].slice(1)},element:function(D){var O=D.className;if(O){if(typeof O=="string")return O.split(/\s/);if(typeof O=="object"&&"baseVal"in O)return O.baseVal.split(/\s/)}}});var g=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;u.prototype.indexes.push({name:"TAG",selector:function(D){var O;if(O=D.match(g))return O[0].toUpperCase()},element:function(D){return[D.nodeName.toUpperCase()]}}),u.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var m;typeof window.Map=="function"?m=window.Map:m=function(){function R(){this.map={}}return R.prototype.get=function(D){return this.map[D+" "]},R.prototype.set=function(D,O){this.map[D+" "]=O},R}();var p=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function S(R,D){R=R.slice(0).concat(R.default);var O=R.length,X,se,re,ie,me=D,Ee,Re,G=[];do if(p.exec(""),(re=p.exec(me))&&(me=re[3],re[2]||!me)){for(X=0;X<O;X++)if(Re=R[X],Ee=Re.selector(re[1])){for(se=G.length,ie=!1;se--;)if(G[se].index===Re&&G[se].key===Ee){ie=!0;break}ie||G.push({index:Re,key:Ee});break}}while(re);return G}function v(R,D){var O,X,se;for(O=0,X=R.length;O<X;O++)if(se=R[O],D.isPrototypeOf(se))return se}u.prototype.logDefaultIndexUsed=function(){},u.prototype.add=function(R,D){var O,X,se,re,ie,me,Ee,Re,G=this.activeIndexes,Be=this.selectors,we=this.selectorObjects;if(typeof R=="string"){for(O={id:this.uid++,selector:R,data:D},we[O.id]=O,Ee=S(this.indexes,R),X=0;X<Ee.length;X++)Re=Ee[X],re=Re.key,se=Re.index,ie=v(G,se),ie||(ie=Object.create(se),ie.map=new m,G.push(ie)),se===this.indexes.default&&this.logDefaultIndexUsed(O),me=ie.map.get(re),me||(me=[],ie.map.set(re,me)),me.push(O);this.size++,Be.push(R)}},u.prototype.remove=function(R,D){if(typeof R=="string"){var O,X,se,re,ie,me,Ee,Re,G=this.activeIndexes,Be=this.selectors=[],we=this.selectorObjects,Xe={},st=arguments.length===1;for(O=S(this.indexes,R),se=0;se<O.length;se++)for(X=O[se],re=G.length;re--;)if(me=G[re],X.index.isPrototypeOf(me)){if(Ee=me.map.get(X.key),Ee)for(ie=Ee.length;ie--;)Re=Ee[ie],Re.selector===R&&(st||Re.data===D)&&(Ee.splice(ie,1),Xe[Re.id]=!0);break}for(se in Xe)delete we[se],this.size--;for(se in we)Be.push(we[se].selector)}};function x(R,D){return R.id-D.id}u.prototype.queryAll=function(R){if(!this.selectors.length)return[];var D={},O=[],X=this.querySelectorAll(this.selectors.join(", "),R),se,re,ie,me,Ee,Re,G,Be;for(se=0,ie=X.length;se<ie;se++)for(Ee=X[se],Re=this.matches(Ee),re=0,me=Re.length;re<me;re++)Be=Re[re],D[Be.id]?G=D[Be.id]:(G={id:Be.id,selector:Be.selector,data:Be.data,elements:[]},D[Be.id]=G,O.push(G)),G.elements.push(Ee);return O.sort(x)},u.prototype.matches=function(R){if(!R)return[];var D,O,X,se,re,ie,me,Ee,Re,G,Be,we=this.activeIndexes,Xe={},st=[];for(D=0,se=we.length;D<se;D++)if(me=we[D],Ee=me.element(R),Ee){for(O=0,re=Ee.length;O<re;O++)if(Re=me.map.get(Ee[O]))for(X=0,ie=Re.length;X<ie;X++)G=Re[X],Be=G.id,!Xe[Be]&&this.matchesSelector(R,G.selector)&&(Xe[Be]=!0,st.push(G))}return st.sort(x)};const M={},E={},A=["mouseenter","mouseleave","pointerenter","pointerleave"];function P(R){E[R]===void 0&&(E[R]=[])}function y(R,D){if(E[R])for(let O=0;O<E[R].length;O++)E[R][O](...D)}function w(R){return typeof R=="string"?document.querySelectorAll(R):R}function q(R){let D=F(M[R.type],R.target);if(D.length)for(let O=0;O<D.length;O++)for(let X=0;X<D[O].stack.length;X++)A.indexOf(R.type)!==-1?(N(R,D[O].delegatedTarget),R.target===D[O].delegatedTarget&&D[O].stack[X].data(R)):(N(R,D[O].delegatedTarget),D[O].stack[X].data(R))}function F(R,D){const O=[];let X=D;do{if(X.nodeType!==1)break;const se=R.matches(X);se.length&&O.push({delegatedTarget:X,stack:se})}while(X=X.parentElement);return O}function N(R,D){Object.defineProperty(R,"currentTarget",{configurable:!0,enumerable:!0,get:()=>D})}function k(R){return JSON.parse(JSON.stringify(R))}class V{bindAll(D,O){O||(O=Object.getOwnPropertyNames(Object.getPrototypeOf(D)));for(let X=0;X<O.length;X++)D[O[X]]=D[O[X]].bind(D)}on(D,O,X,se){const re=D.split(" ");for(let ie=0;ie<re.length;ie++){if(typeof O=="function"&&X===void 0){P(re[ie]),E[re[ie]].push(O);continue}if(O.nodeType&&O.nodeType===1||O===window||O===document){O.addEventListener(re[ie],X,se);continue}O=w(O);for(let me=0;me<O.length;me++)O[me].addEventListener(re[ie],X,se)}}delegate(D,O,X){const se=D.split(" ");for(let re=0;re<se.length;re++){let ie=M[se[re]];ie===void 0&&(ie=new u,M[se[re]]=ie,A.indexOf(se[re])!==-1?document.addEventListener(se[re],q,!0):document.addEventListener(se[re],q)),ie.add(O,X)}}off(D,O,X,se){const re=D.split(" ");for(let ie=0;ie<re.length;ie++){if(O===void 0){E[re[ie]]=[];continue}if(typeof O=="function"){P(re[ie]);for(let Ee=0;Ee<E[re[ie]].length;Ee++)E[re[ie]][Ee]===O&&E[re[ie]].splice(Ee,1);continue}const me=M[re[ie]];if(me!==void 0&&(me.remove(O,X),me.size===0)){delete M[re[ie]],A.indexOf(re[ie])!==-1?document.removeEventListener(re[ie],q,!0):document.removeEventListener(re[ie],q);continue}if(O.removeEventListener!==void 0){O.removeEventListener(re[ie],X,se);continue}O=w(O);for(let Ee=0;Ee<O.length;Ee++)O[Ee].removeEventListener(re[ie],X,se)}}emit(D,...O){y(D,O)}debugDelegated(){return k(M)}debugBus(){return k(E)}}var z=new V;function j(R,D,O){return D in R?Object.defineProperty(R,D,{value:O,enumerable:!0,configurable:!0,writable:!0}):R[D]=O,R}class K{constructor(D={}){j(this,"onRaf",()=>{z.emit(K.INTERNALRAF),!this.options.disableRaf&&requestAnimationFrame(this.onRaf)}),this.options=D,this.addEvents()}addEvents(){this.options.disableRaf||requestAnimationFrame(this.onRaf),this.options.disableResize||z.on("resize",window,o()(()=>{this.onResize()},150)),this.onScroll(),"ontouchstart"in document.documentElement&&(c().isTouch=!0,this.detectMouse())}onScroll(){z.on("wheel",window,D=>{z.emit(K.WHEEL,{event:D})},{passive:!1}),z.on("scroll",window,D=>{z.emit(K.INTERNALSCROLL,{event:D})},{passive:!0})}onResize({width:D,height:O}={}){c().window.w=D||window.innerWidth,c().window.h=O||window.innerHeight,z.emit(K.RESIZE)}detectMouse(){window.addEventListener("mousemove",function D(O){(Math.abs(O.movementX)>0||Math.abs(O.movementY)>0)&&(c().isTouch=!1,z.emit(K.MOUSEDETECTED),window.removeEventListener("mousemove",D))})}}j(K,"INTERNALRAF","raf:internal"),j(K,"EXTERNALRAF","raf:external"),j(K,"WHEEL","wheel"),j(K,"INTERNALSCROLL","scroll:internal"),j(K,"EXTERNALSCROLL","scroll:external"),j(K,"RESIZE","resize"),j(K,"MOUSEDETECTED","mouseDetected"),j(K,"SCROLLEND","scrollEnd");function L(R,D,O){return D in R?Object.defineProperty(R,D,{value:O,enumerable:!0,configurable:!0,writable:!0}):R[D]=O,R}class Me{constructor(D){L(this,"onMouseMove",O=>{this.mouseDown&&(this.mousePos=O.clientY,this.position-=this.prevMousePos-this.mousePos,this.position=Math.min(Math.max(this.position,0),this.maxY),this.prevMousePos=this.mousePos,this.controller.targetPos=this.position/this.maxY*this.controller.maxScroll,this.controller.clamp(),this.controller.syncScroll=!0,this.transform(),z.emit(K.EXTERNALSCROLL,-this.controller.targetPos))}),L(this,"onMouseDown",O=>{this.mousePos=this.prevMousePos=O.clientY,this.mouseDown=!0,c().body.style.userSelect="none",this.el.classList.add("active")}),L(this,"onMouseUp",()=>{this.mouseDown=!1,c().body.style.removeProperty("user-select"),this.el.classList.remove("active")}),this.controller=D,this.addHTML(),this.el=document.querySelector(this.controller.options.scrollbarEl),this.handle=document.querySelector(this.controller.options.scrollbarHandleEl),this.position=0,this.mousePos=0,this.prevMousePos=0,this.addStyles(),this.addEvents()}transform(){let D;this.mouseDown?D=this.position:(D=-this.controller.targetPos/-this.controller.maxScroll*(c().window.h-this.handleHeight),this.position=D),this.handle.style.transform=`translate3d(0, ${D}px, 0)`}show(){this.el.classList.add("show")}hide(){this.el.classList.remove("show")}addEvents(){z.on("mousedown",this.handle,this.onMouseDown),z.on("mousemove",window,this.onMouseMove),z.on("mouseup",window,this.onMouseUp)}onResize(){if(this.scale=(-this.controller.maxScroll+c().window.h)/c().window.h,this.scale<=1){this.handle.style.height=0;return}this.trueSize=c().window.h/this.scale,this.handleHeight=Math.max(this.trueSize,40),this.handle.style.height=`${this.handleHeight}px`,this.maxY=c().window.h-this.handleHeight}addHTML(){if(document.querySelector(this.controller.options.scrollbarEl))return;const D=document.createElement("div");D.classList.add(this.controller.options.scrollbarEl.substring(1)),D.innerHTML=`<div class="${this.controller.options.scrollbarHandleEl.substring(1)}"><div></div></div>`,document.body.appendChild(D)}addStyles(){if(!this.controller.options.disableNativeScrollbar&&!this.controller.options.scrollbarStyles)return;let D="";this.controller.options.disableNativeScrollbar&&(D+="html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}"),this.controller.options.scrollbarStyles&&(D+=`${this.controller.options.scrollbarEl} {position:fixed;top:0;right:0;width:20px;height:100%;z-index:900;}.is-touch ${this.controller.options.scrollbarEl} {display:none;}${this.controller.options.scrollbarEl} > div {padding:6px 0;width:10px;height:0;margin:0 auto;visibility:hidden;}${this.controller.options.scrollbarEl} > div > div {width:100%;height:100%;border-radius:10px;opacity:0.3;background-color:#000;}${this.controller.options.scrollbarEl} > div > div:hover {opacity:0.9;}${this.controller.options.scrollbarEl}:hover > div, ${this.controller.options.scrollbarEl}.show > div, ${this.controller.options.scrollbarEl}.active > div {visibility:visible;}${this.controller.options.scrollbarEl}.active > div > div {opacity:0.9;}`);const O=document.createElement("style");O.styleSheet?O.styleSheet.cssText=D:O.appendChild(document.createTextNode(D)),document.getElementsByTagName("head")[0].appendChild(O)}destroy(){z.off("mousedown",this.handle,this.onMouseDown),z.off("mousemove",window,this.onMouseMove),z.off("mouseup",window,this.onMouseUp)}}function ue(R,D,O){return D in R?Object.defineProperty(R,D,{value:O,enumerable:!0,configurable:!0,writable:!0}):R[D]=O,R}class Z{constructor(D={}){ue(this,"onScroll",({event:O})=>{this.scrolling||(this.toggleIframes(),this.scrolling=!0);const X=this.targetPos;if(!c().isTouch&&O.type==="wheel")O.preventDefault(),this.syncScroll=!0,this.wheeling=!0,this.targetPos+=O.deltaY*-1;else{if(this.preventResizeScroll){this.preventResizeScroll=!1;return}if(this.wheeling)return;c().isTouch&&this.options.touchScrollType==="scrollTop"?this.targetPos=this.horizontalScroll?-this.containerElement.scrollLeft:-this.containerElement.scrollTop:c().isTouch&&this.options.touchScrollType==="transform"&&this.options.lockIOSBrowserUI?this.targetPos=this.horizontalScroll?-document.body.scrollLeft:-document.body.scrollTop:this.targetPos=-window.scrollY,c().isTouch&&this.options.touchScrollType!=="transform"&&(this.currentPos=this.targetPos)}this.clamp(),X!==this.targetPos&&(z.emit(K.EXTERNALSCROLL,-this.targetPos),this.options.customScrollbar&&this.scrollbar.show()),this.options.customScrollbar&&this.scrollbar.transform()}),ue(this,"onRAF",()=>{if(this.testFps&&this.options.limitLerpRate&&(this.time=performance.now()*.001,this.delta=Math.min((this.time-this.startTime)*60,1),this.startTime=this.time),!this.render)return;Math.abs(this.targetPos-this.currentPos)<.5?(this.currentPos=this.targetPos,this.scrolling&&!this.syncScroll&&(this.scrolling=!1,this.options.customScrollbar&&this.scrollbar.hide(),this.toggleIframes(!0),z.emit(K.SCROLLEND,-this.targetPos)),this.syncScroll&&(window.scrollTo(0,-this.targetPos),this.syncScroll=!1,this.wheeling=!1)):this.currentPos+=(this.targetPos-this.currentPos)*this.ease*this.delta;const O=this.horizontalScroll?this.currentPos:0,X=this.horizontalScroll?0:this.currentPos;this.applyTransform(O,X),z.emit(K.EXTERNALRAF,{targetPos:-this.targetPos,currentPos:-this.currentPos})}),ue(this,"onResize",()=>{if(this.scrollElementsLength>1){const X=this.scrollElements[this.scrollElementsLength-1],se=window.getComputedStyle(X),re=parseFloat(this.horizontalScroll?se.marginRight:se.marginBottom),ie=X.getBoundingClientRect(),me=this.horizontalScroll?ie.right:ie.bottom;this.scrollLength=me+re-this.currentPos}else this.scrollLength=this.horizontalScroll?this.scrollElements[0].scrollWidth:this.scrollElements[0].scrollHeight;const O=this.horizontalScroll?c().window.w:c().window.h;this.maxScroll=this.scrollLength>O?-(this.scrollLength-O):0,this.clamp(),this.firstResize||(this.preventResizeScroll=!0),c().isTouch&&this.options.lockIOSBrowserUI?this.containerElement.style.height=this.scrollLength+"px":c().body.style.height=this.scrollLength+"px",this.options.customScrollbar&&this.scrollbar.onResize(),this.firstResize=!1}),ue(this,"toggleFixedContainer",()=>{this.containerElement.style.position="static";const O=this.currentPos;this.applyTransform(0,0),requestAnimationFrame(()=>{this.containerElement.style.position="fixed";const X=this.horizontalScroll?O:0,se=this.horizontalScroll?0:O;this.applyTransform(X,se)})}),this.options=D,this.targetPos=this.currentPos=this.prevScrollPos=this.maxScroll=0,this.enabled=!1,this.render=!1,this.scrolling=!1,this.wheeling=!1,this.syncScroll=!1,this.horizontalScroll=!1,this.firstResize=!0,this.preventResizeScroll=!1,this.nativeScroll=!0,this.ease=c().isTouch?this.options.touchEase:this.options.ease,this.originalScrollbarSetting=this.options.customScrollbar,this.testFps=!0,this.delta=1,this.time=this.startTime=performance.now(),this.setElements(),c().isTouch?(this.options.customScrollbar=!1,this.options.touchScrollType==="transform"?this.setupSmoothScroll():this.options.touchScrollType==="scrollTop"&&(document.documentElement.classList.add("asscroll-touch"),this.addTouchStyles(),z.on("scroll",this.containerElement,O=>{z.emit(K.INTERNALSCROLL,{event:O})},{passive:!0}))):this.setupSmoothScroll(),this.addEvents()}setElements(){this.containerElement=typeof this.options.containerElement=="string"?document.querySelector(this.options.containerElement):this.options.containerElement,this.containerElement===null&&console.error("ASScroll: could not find container element"),this.containerElement.setAttribute("asscroll-container",""),this.scrollElements=typeof this.options.scrollElements=="string"?document.querySelectorAll(this.options.scrollElements):this.options.scrollElements,this.scrollElements.length&&(this.scrollElements=[...this.scrollElements]),this.scrollElements=this.scrollElements.length?this.scrollElements:[this.containerElement.firstElementChild],this.scrollElementsLength=this.scrollElements.length,this.scrollElements.forEach(D=>D.setAttribute("asscroll",""))}setupSmoothScroll(){this.nativeScroll=!1,c().isTouch&&this.options.lockIOSBrowserUI?(Object.assign(document.body.style,{position:"fixed",width:"100%",height:"100%",overflowY:"auto"}),c().html.style.overflow="hidden",this.scrollElements.forEach(D=>{D.style.position="fixed"}),z.on("scroll",document.body,D=>{z.emit(K.INTERNALSCROLL,{event:D})})):Object.assign(this.containerElement.style,{position:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",contain:"content"}),this.options.customScrollbar&&(this.scrollbar=new Me(this)),z.on(K.INTERNALRAF,this.onRAF),z.on(K.RESIZE,this.onResize),this.options.limitLerpRate&&setTimeout(()=>{this.testFps=!1,this.delta=Math.round(this.delta*10)*.1},2e3)}applyTransform(D,O){for(let X=0;X<this.scrollElementsLength;X++)this.scrollElements[X].style.transform=`translate3d(${D}px, ${O}px, 0px)`}enable({newScrollElements:D=!1,reset:O=!1,restore:X=!1,horizontalScroll:se=!1}={}){this.enabled||(this.enabled=!0,this.render=!0,this.horizontalScroll=se,D&&(this.scrollElements=D.length?[...D]:[D],this.scrollElementsLength=this.scrollElements.length,this.scrollElements.forEach(re=>re.setAttribute("asscroll","")),c().isTouch&&this.options.touchScrollType==="transform"&&this.options.lockIOSBrowserUI&&this.scrollElements.forEach(re=>{re.style.position="fixed"})),this.iframes=this.containerElement.querySelectorAll("iframe"),c().isTouch&&this.options.touchScrollType!=="transform"?(this.options.touchScrollType==="scrollTop"&&this.containerElement.style.removeProperty("overflow"),this.maxScroll=-this.containerElement.scrollHeight,O&&(this.targetPos=this.currentPos=0,this.scrollTo(0,!1))):(this.firstResize=!0,O&&(this.targetPos=this.currentPos=0,this.applyTransform(0,0)),this.onResize()),c().isTouch&&this.options.touchScrollType==="transform"&&this.options.lockIOSBrowserUI&&(c().body.style.overflowY="auto",O&&document.body.scrollTo(0,0)),X&&this.scrollTo(this.prevScrollPos,!1),z.on(K.WHEEL,this.onScroll),z.on(K.INTERNALSCROLL,this.onScroll))}disable({inputOnly:D=!1}={}){this.enabled&&(this.enabled=!1,D||(this.render=!1),z.off(K.WHEEL,this.onScroll),z.off(K.INTERNALSCROLL,this.onScroll),this.prevScrollPos=this.targetPos,c().isTouch?this.options.touchScrollType==="scrollTop"?this.containerElement.style.overflow="hidden":this.options.touchScrollType==="transform"&&this.options.lockIOSBrowserUI&&(c().body.style.overflowY="hidden"):c().body.style.height="0px")}clamp(){this.targetPos=Math.max(Math.min(this.targetPos,0),this.maxScroll)}scrollTo(D,O=!0){this.targetPos=D,c().isTouch&&this.options.touchScrollType!=="transform"&&(this.options.touchScrollType==="scrollTop"?this.horizontalScroll?this.containerElement.scrollTo(-this.targetPos,0):this.containerElement.scrollTo(0,-this.targetPos):window.scrollTo(0,-this.targetPos)),this.clamp(),this.syncScroll=!0,O&&z.emit(K.EXTERNALSCROLL,-this.targetPos)}toggleIframes(D){for(let O=0;O<this.iframes.length;O++)this.iframes[O].style.pointerEvents=D?"auto":"none"}blockScrollEvent(D){D.stopPropagation()}addEvents(){z.on(K.MOUSEDETECTED,()=>{this.options.touchScrollType!=="transform"&&(this.options.customScrollbar=this.originalScrollbarSetting,this.ease=this.options.ease,this.setupSmoothScroll(),this.onResize())}),c().isTouch||(z.on("mouseleave",document,()=>{window.scrollTo(0,-this.targetPos)}),z.on("keydown",window,D=>{(D.key==="ArrowUp"||D.key==="ArrowDown"||D.key==="PageUp"||D.key==="PageDown"||D.key==="Home"||D.key==="End"||D.key==="Tab")&&window.scrollTo(0,-this.targetPos),D.key==="Tab"&&this.toggleFixedContainer()}),z.delegate("click",'a[href^="#"]',this.toggleFixedContainer),z.delegate("wheel",this.options.blockScrollClass,this.blockScrollEvent))}addTouchStyles(){const D=".asscroll-touch [asscroll-container] {position:absolute;top:0;left:0;right:0;bottom:-0.1px;overflow-y: auto;} .asscroll-touch [asscroll] {margin-bottom:0.1px;}",O=document.createElement("style");O.styleSheet?O.styleSheet.cssText=D:O.appendChild(document.createTextNode(D)),document.getElementsByTagName("head")[0].appendChild(O)}}function ee(R,D,O){return D in R?Object.defineProperty(R,D,{value:O,enumerable:!0,configurable:!0,writable:!0}):R[D]=O,R}class de{constructor(D={}){ee(this,"update",()=>{this.events.onRaf()}),ee(this,"resize",J=>{this.events.onResize(J)});const{containerElement:O="[asscroll-container]",scrollElements:X="[asscroll]",ease:se=.075,touchEase:re=1,touchScrollType:ie="none",lockIOSBrowserUI:me=!1,scrollbarEl:Ee=".asscrollbar",scrollbarHandleEl:Re=".asscrollbar__handle",customScrollbar:G=!0,scrollbarStyles:Be=!0,disableNativeScrollbar:we=!0,disableRaf:Xe=!1,disableResize:st=!1,limitLerpRate:C=!0,blockScrollClass:b=".asscroll-block"}=D;this.events=new K({disableRaf:Xe,disableResize:st}),this.controller=new Z({containerElement:O,scrollElements:X,ease:se,touchEase:re,customScrollbar:G,lockIOSBrowserUI:me,scrollbarEl:Ee,scrollbarHandleEl:Re,scrollbarStyles:Be,disableNativeScrollbar:we,touchScrollType:ie,limitLerpRate:C,blockScrollClass:b})}enable(D){D!==void 0&&typeof D!="object"&&console.warn("ASScroll: Please pass an object with your parameters. Since 2.0"),this.controller.enable(D)}disable(D){D!==void 0&&typeof D!="object"&&console.warn("ASScroll: Please pass an object with your parameters. Since 2.0"),this.controller.disable(D)}on(D,O){if(typeof O!="function"){console.error("ASScroll: Function not provided as second parameter");return}if(D==="scroll"){z.on(K.EXTERNALSCROLL,O);return}if(D==="update"){z.on(K.EXTERNALRAF,O);return}if(D==="scrollEnd"){z.on(K.SCROLLEND,O);return}console.warn(`ASScroll: "${D}" is not a valid event`)}off(D,O){if(typeof O!="function"){console.error("ASScroll: Function not provided as second parameter");return}if(D==="scroll"){z.off(K.EXTERNALSCROLL,O);return}if(D==="update"){z.off(K.EXTERNALRAF,O);return}if(D==="scrollEnd"){z.off(K.SCROLLEND,O);return}console.warn(`ASScroll: "${D}" is not a valid event`)}scrollTo(D,O=!0){this.controller.scrollTo(-D,O)}get targetPos(){return-this.controller.targetPos}get currentPos(){return-this.controller.currentPos}set currentPos(D){this.controller.targetPos=this.controller.currentPos=-D}get maxScroll(){return-this.controller.maxScroll}get containerElement(){return this.controller.containerElement}get scrollElements(){return this.controller.scrollElements}get isHorizontal(){return this.controller.horizontalScroll}get isScrollJacking(){return!this.controller.nativeScroll&&this.controller.enabled}get scrollPos(){}get smoothScrollPos(){}onRaf(){}onResize(){}}var fe=de}(),r=r.default,r}()})})(nw);const iw=CM(nu);class rw{constructor(){this.experience=new In,this.scene=this.experience.scene,this.sizes=this.experience.sizes,this.resources=this.experience.resources,this.time=this.experience.time,this.camera=this.experience.camera,this.room=this.experience.world.room.actualRoom,this.room.children.forEach(e=>{e.type==="RectAreaLight"&&(this.rectLight=e)}),this.circleFirst=this.experience.world.floor.circleFirst,this.circleSecond=this.experience.world.floor.circleSecond,this.circleThird=this.experience.world.floor.circleThird,At.registerPlugin(Ye),this.setSmoothScroll(),this.setScrollTrigger()}setupASScroll(){const e=new iw({disableRaf:!0});return At.ticker.add(e.update),Ye.defaults({scroller:e.containerElement}),Ye.scrollerProxy(e.containerElement,{scrollTop(t){if(arguments.length){e.currentPos=t;return}return e.currentPos},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},fixedMarkers:!0}),e.on("update",Ye.update),Ye.addEventListener("refresh",e.resize),requestAnimationFrame(()=>{e.enable({newScrollElements:document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]")})}),e}setSmoothScroll(){this.asscroll=this.setupASScroll()}setScrollTrigger(){Ye.matchMedia({"(min-width: 969px)":()=>{this.room.scale.set(.11,.11,.11),this.rectLight.width=.5,this.rectLight.height=.7,this.firstMoveTimeline=new At.timeline({scrollTrigger:{trigger:".first-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}),this.firstMoveTimeline.to(this.room.position,{x:()=>this.sizes.width*.0014}),this.secondMoveTimeline=new At.timeline({scrollTrigger:{trigger:".second-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.room.position,{x:()=>1,z:()=>this.sizes.height*.0032},"same").to(this.room.scale,{x:.4,y:.4,z:.4},"same").to(this.rectLight,{width:.5*4,height:.7*4},"same"),console.log(this.rectLight.scale),this.thirdMoveTimeline=new At.timeline({scrollTrigger:{trigger:".third-move2",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.room.position,{y:1.4,z:-3.1})},"(max-width: 968px)":()=>{console.log("fired mobile"),this.room.scale.set(.07,.07,.07),this.room.position.set(0,0,0),this.rectLight.width=.3,this.rectLight.height=.4,this.firstMoveTimeline=new At.timeline({scrollTrigger:{trigger:".first-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.room.scale,{x:.1,y:.1,z:.1}),this.secondMoveTimeline=new At.timeline({scrollTrigger:{trigger:".second-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.room.scale,{x:.25,y:.25,z:.25},"same").to(this.rectLight,{width:.3*3.4,height:.4*3.4},"same").to(this.room.position,{x:1.5},"same"),this.thirdMoveTimeline=new At.timeline({scrollTrigger:{trigger:".third-move2",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}})},all:()=>{this.firstCircle=new At.timeline({scrollTrigger:{trigger:".first-move",start:"top top",end:"bottom bottom",scrub:.6}}).to(this.circleFirst.scale,{x:3,y:3,z:3}),this.secondCircle=new At.timeline({scrollTrigger:{trigger:".second-move",start:"top top",end:"bottom bottom",scrub:.6}}).to(this.circleSecond.scale,{x:3,y:3,z:3},"same").to(this.room.position,{y:.7},"same"),this.thirdCircle=new At.timeline({scrollTrigger:{trigger:".third-move",start:"top top",end:"bottom bottom",scrub:.6}}).to(this.circleThird.scale,{x:3,y:3,z:3})}})}resize(){}update(){}}class sw{constructor(){this.experience=new In,this.scene=this.experience.scene,this.resources=this.experience.resources,this.obj={colorObj:{r:0,g:0,b:0},intensity:3},this.setSunlight()}setGUI(){this.gui.addColor(this.obj,"colorObj").onChange(()=>{this.sunLight.color.copy(this.obj.colorObj),this.ambientLight.color.copy(this.obj.colorObj)}),this.gui.add(this.obj,"intensity",0,10).onChange(()=>{this.sunLight.intensity=this.obj.intensity,this.ambientLight.intensity=this.obj.intensity,console.log(this.obj.colorObj)})}setSunlight(){this.sunLight=new Kd("#ffffff",3),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.far=20,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(1.5,7,3),this.scene.add(this.sunLight),this.ambientLight=new _M("#ffffff",1),this.scene.add(this.ambientLight)}switchTheme(e){e==="dark"?(At.to(this.sunLight.color,{b:.4627450980392157,g:.28627450980392155,r:.1803921568627451}),At.to(this.ambientLight.color,{b:.4627450980392157,g:.28627450980392155,r:.1803921568627451}),At.to(this.sunLight,{intensity:.78}),At.to(this.ambientLight,{intensity:.78})):(At.to(this.sunLight.color,{r:255/255,g:255/255,b:255/255}),At.to(this.ambientLight.color,{r:255/255,g:255/255,b:255/255}),At.to(this.sunLight,{intensity:3}),At.to(this.ambientLight,{intensity:1}))}resize(){}update(){}}class ow{constructor(){this.experience=new In,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.resources=this.experience.resources,this.theme=this.experience.theme,this.resources.on("ready",()=>{this.environment=new sw,this.floor=new kb,this.room=new Fb,this.controls=new rw}),this.theme.on("switch",e=>{this.switchTheme(e)})}switchTheme(e){this.environment&&this.environment.switchTheme(e)}resize(){}update(){this.room&&this.room.update(),this.controls&&this.controls.update()}}class In{constructor(e){if(In.instance)return In.instance;In.instance=this,this.canvas=e,this.scene=new Hy,this.time=new FM,this.sizes=new UM,this.camera=new MS,this.renderer=new bS,this.resources=new xS(vS),this.theme=new SS,this.world=new ow,this.time.on("update",()=>{this.update()}),this.sizes.on("resize",()=>{this.resize()})}resize(){this.camera.resize(),this.renderer.resize(),this.world.resize()}update(){this.camera.update(),this.renderer.update(),this.world.update()}}new In(document.querySelector(".experience-canvas"));let aw=document.querySelector(".intro");document.querySelector(".logo-header");let dd=document.querySelectorAll(".logo");window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{dd.forEach((a,e)=>setTimeout(()=>{a.classList.add("active")},(e+1)*400)),setTimeout(()=>{dd.forEach((a,e)=>{setTimeout(()=>{a.classList.remove("active"),a.classList.add("fade")},(e+1)*10)})},2e3),setTimeout(()=>{aw.style.top="-100vh"},2300)},500)});

(()=>{var t={};t.id=989,t.ids=[989],t.modules={20399:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},82361:t=>{"use strict";t.exports=require("events")},57147:t=>{"use strict";t.exports=require("fs")},87561:t=>{"use strict";t.exports=require("node:fs")},49411:t=>{"use strict";t.exports=require("node:path")},71017:t=>{"use strict";t.exports=require("path")},73837:t=>{"use strict";t.exports=require("util")},25456:(t,e,r)=>{"use strict";r.r(e),r.d(e,{originalPathname:()=>w,patchFetch:()=>m,requestAsyncStorage:()=>I,routeModule:()=>v,serverHooks:()=>E,staticGenerationAsyncStorage:()=>U});var i={};r.r(i),r.d(i,{POST:()=>y});var n=r(49303),o=r(88716),s=r(60670),a=r(87070),l=r(57435);let d=require("node:http");var u=r.n(d);let c=require("node:https");var h=r.n(c),f=r(63767),p=r.n(f);async function g(t){try{let e=[];return await new Promise((r,i)=>{("https"===`${t||""}`.substring(0,5)?h():u()).get(new URL(t),function(t){t.on("data",function(t){e.push(t)}).on("end",function(){let t=Buffer.concat(e);try{let e=p()(t,function(t){t&&i(t)});r(e)}catch(t){i(t)}}).on("error",function(t){i(t)})})})}catch(t){throw t}}async function y(t){try{let{imageURL:e}=await t.json(),r=await g(e);return a.NextResponse.json({data:r})}catch(t){return l.Z.log("/api/files/get-image-size",t),a.NextResponse.json({errors:[t.message]})}}let v=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/files/get-image-size/route",pathname:"/api/files/get-image-size",filename:"route",bundlePath:"app/api/files/get-image-size/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/files/get-image-size/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:I,staticGenerationAsyncStorage:U,serverHooks:E}=v,w="/api/files/get-image-size/route";function m(){return(0,s.patchFetch)({serverHooks:E,staticGenerationAsyncStorage:U})}},57435:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var i=r(87561),n=r.n(i),o=r(49411),s=r.n(o),a=r(51744),l=r.n(a);function d(t,...e){let r=l()(new Date).format("YYYYMMDD"),i=s().resolve(`logs/${r}`);n().existsSync(i)||n().mkdirSync(i);let o=`${new Date().toUTCString()} ${JSON.stringify([...e])}
`,a=`${i}/${t}`;n().appendFileSync(a,o)}let u={log:(...t)=>{d("logs.txt",...t)},error:(...t)=>{d("errors.txt",...t)},appError:(...t)=>{d("app_errors.txt",...t)}}},52016:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.detector=void 0;let i=r(65409),n=Object.keys(i.typeHandlers),o={56:"psd",66:"bmp",68:"dds",71:"gif",73:"tiff",77:"tiff",82:"webp",105:"icns",137:"png",255:"jpg"};e.detector=function(t){let e=t[0];if(e in o){let r=o[e];if(r&&i.typeHandlers[r].validate(t))return r}return n.find(e=>i.typeHandlers[e].validate(t))}},63767:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.types=e.setConcurrency=e.disableTypes=e.disableFS=e.imageSize=void 0;let i=r(57147),n=r(71017),o=r(6663),s=r(65409),a=r(52016),l=new o.default({concurrency:100,autostart:!0}),d={disabledFS:!1,disabledTypes:[]};function u(t,e){let r=(0,a.detector)(t);if(void 0!==r){if(d.disabledTypes.indexOf(r)>-1)throw TypeError("disabled file type: "+r);if(r in s.typeHandlers){let i=s.typeHandlers[r].calculate(t,e);if(void 0!==i)return i.type=i.type??r,i}}throw TypeError("unsupported file type: "+r+" (file: "+e+")")}async function c(t){let e=await i.promises.open(t,"r");try{let{size:t}=await e.stat();if(t<=0)throw Error("Empty file");let r=Math.min(t,524288),i=new Uint8Array(r);return await e.read(i,0,r,0),i}finally{await e.close()}}function h(t,e){if(t instanceof Uint8Array)return u(t);if("string"!=typeof t||d.disabledFS)throw TypeError("invalid invocation. input should be a Uint8Array");let r=n.resolve(t);if("function"!=typeof e)return u(function(t){let e=i.openSync(t,"r");try{let{size:t}=i.fstatSync(e);if(t<=0)throw Error("Empty file");let r=Math.min(t,524288),n=new Uint8Array(r);return i.readSync(e,n,0,r,0),n}finally{i.closeSync(e)}}(r),r);l.push(()=>c(r).then(t=>process.nextTick(e,null,u(t,r))).catch(e))}t.exports=e=h,e.default=h,e.imageSize=h,e.disableFS=t=>{d.disabledFS=t},e.disableTypes=t=>{d.disabledTypes=t},e.setConcurrency=t=>{l.concurrency=t},e.types=Object.keys(s.typeHandlers)},47449:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BMP=void 0;let i=r(54754);e.BMP={validate:t=>"BM"===(0,i.toUTF8String)(t,0,2),calculate:t=>({height:Math.abs((0,i.readInt32LE)(t,22)),width:(0,i.readUInt32LE)(t,18)})}},15323:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CUR=void 0;let i=r(84212),n=r(54754);e.CUR={validate(t){let e=(0,n.readUInt16LE)(t,0),r=(0,n.readUInt16LE)(t,4);return 0===e&&0!==r&&2===(0,n.readUInt16LE)(t,2)},calculate:t=>i.ICO.calculate(t)}},11878:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DDS=void 0;let i=r(54754);e.DDS={validate:t=>542327876===(0,i.readUInt32LE)(t,0),calculate:t=>({height:(0,i.readUInt32LE)(t,12),width:(0,i.readUInt32LE)(t,16)})}},94083:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GIF=void 0;let i=r(54754),n=/^GIF8[79]a/;e.GIF={validate:t=>n.test((0,i.toUTF8String)(t,0,6)),calculate:t=>({height:(0,i.readUInt16LE)(t,8),width:(0,i.readUInt16LE)(t,6)})}},45641:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HEIF=void 0;let i=r(54754),n={avif:"avif",mif1:"heif",msf1:"heif",heic:"heic",heix:"heic",hevc:"heic",hevx:"heic"};e.HEIF={validate(t){let e=(0,i.toUTF8String)(t,4,8),r=(0,i.toUTF8String)(t,8,12);return"ftyp"===e&&r in n},calculate(t){let e=(0,i.findBox)(t,"meta",0),r=e&&(0,i.findBox)(t,"iprp",e.offset+12),n=r&&(0,i.findBox)(t,"ipco",r.offset+8),o=n&&(0,i.findBox)(t,"ispe",n.offset+8);if(o)return{height:(0,i.readUInt32BE)(t,o.offset+16),width:(0,i.readUInt32BE)(t,o.offset+12),type:(0,i.toUTF8String)(t,8,12)};throw TypeError("Invalid HEIF, no size found")}}},35409:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ICNS=void 0;let i=r(54754),n={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function o(t,e){let r=e+4;return[(0,i.toUTF8String)(t,e,r),(0,i.readUInt32BE)(t,r)]}function s(t){let e=n[t];return{width:e,height:e,type:t}}e.ICNS={validate:t=>"icns"===(0,i.toUTF8String)(t,0,4),calculate(t){let e=t.length,r=(0,i.readUInt32BE)(t,4),n=8,a=o(t,8),l=s(a[0]);if((n+=a[1])===r)return l;let d={height:l.height,images:[l],width:l.width};for(;n<r&&n<e;)l=s((a=o(t,n))[0]),n+=a[1],d.images.push(l);return d}}},84212:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ICO=void 0;let i=r(54754);function n(t,e){let r=t[e];return 0===r?256:r}function o(t,e){let r=6+16*e;return{height:n(t,r+1),width:n(t,r)}}e.ICO={validate(t){let e=(0,i.readUInt16LE)(t,0),r=(0,i.readUInt16LE)(t,4);return 0===e&&0!==r&&1===(0,i.readUInt16LE)(t,2)},calculate(t){let e=(0,i.readUInt16LE)(t,4),r=o(t,0);if(1===e)return r;let n=[r];for(let r=1;r<e;r+=1)n.push(o(t,r));return{height:r.height,images:n,width:r.width}}}},65409:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.typeHandlers=void 0;let i=r(47449),n=r(15323),o=r(11878),s=r(94083),a=r(45641),l=r(35409),d=r(84212),u=r(37116),c=r(54470),h=r(2019),f=r(4053),p=r(45647),g=r(25252),y=r(52071),v=r(55792),I=r(23026),U=r(99164),E=r(85754);e.typeHandlers={bmp:i.BMP,cur:n.CUR,dds:o.DDS,gif:s.GIF,heif:a.HEIF,icns:l.ICNS,ico:d.ICO,j2c:u.J2C,jp2:c.JP2,jpg:h.JPG,ktx:f.KTX,png:p.PNG,pnm:g.PNM,psd:y.PSD,svg:v.SVG,tga:I.TGA,tiff:U.TIFF,webp:E.WEBP}},37116:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.J2C=void 0;let i=r(54754);e.J2C={validate:t=>"ff4fff51"===(0,i.toHexString)(t,0,4),calculate:t=>({height:(0,i.readUInt32BE)(t,12),width:(0,i.readUInt32BE)(t,8)})}},54470:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JP2=void 0;let i=r(54754);e.JP2={validate(t){if(1783636e3!==(0,i.readUInt32BE)(t,4)||1>(0,i.readUInt32BE)(t,0))return!1;let e=(0,i.findBox)(t,"ftyp",0);return!!e&&1718909296===(0,i.readUInt32BE)(t,e.offset+4)},calculate(t){let e=(0,i.findBox)(t,"jp2h",0),r=e&&(0,i.findBox)(t,"ihdr",e.offset+8);if(r)return{height:(0,i.readUInt32BE)(t,r.offset+8),width:(0,i.readUInt32BE)(t,r.offset+12)};throw TypeError("Unsupported JPEG 2000 format")}}},2019:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JPG=void 0;let i=r(54754);e.JPG={validate:t=>"ffd8"===(0,i.toHexString)(t,0,2),calculate(t){let e,r;for(t=t.slice(4);t.length;){var n,o,s;let a=(0,i.readUInt16BE)(t,0);if(255!==t[a]){t=t.slice(1);continue}if(n=t,"45786966"===(0,i.toHexString)(n,2,6)&&(e=function(t,e){let r=t.slice(2,e),n=(0,i.toHexString)(r,6,8),o="4d4d"===n;if(o||"4949"===n)return function(t,e){let r=(0,i.readUInt)(t,16,14,e);for(let n=0;n<r;n++){let r=16+12*n,o=r+12;if(r>t.length)return;let s=t.slice(r,o);if(274===(0,i.readUInt)(s,16,0,e)){if(3!==(0,i.readUInt)(s,16,2,e)||1!==(0,i.readUInt)(s,32,4,e))return;return(0,i.readUInt)(s,16,8,e)}}}(r,o)}(t,a)),function(t,e){if(e>t.length)throw TypeError("Corrupt JPG, exceeded buffer limits")}(t,a),192===(r=t[a+1])||193===r||194===r){let r=(o=t,s=a+5,{height:(0,i.readUInt16BE)(o,s),width:(0,i.readUInt16BE)(o,s+2)});if(!e)return r;return{height:r.height,orientation:e,width:r.width}}t=t.slice(a+2)}throw TypeError("Invalid JPG, no size found")}}},4053:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.KTX=void 0;let i=r(54754);e.KTX={validate:t=>["KTX 11","KTX 20"].includes((0,i.toUTF8String)(t,1,7)),calculate:t=>{let e=49===t[5]?"ktx":"ktx2",r="ktx"===e?36:20;return{height:(0,i.readUInt32LE)(t,r+4),width:(0,i.readUInt32LE)(t,r),type:e}}}},45647:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PNG=void 0;let i=r(54754),n="CgBI";e.PNG={validate(t){if("PNG\r\n\x1a\n"===(0,i.toUTF8String)(t,1,8)){let e=(0,i.toUTF8String)(t,12,16);if(e===n&&(e=(0,i.toUTF8String)(t,28,32)),"IHDR"!==e)throw TypeError("Invalid PNG");return!0}return!1},calculate:t=>(0,i.toUTF8String)(t,12,16)===n?{height:(0,i.readUInt32BE)(t,36),width:(0,i.readUInt32BE)(t,32)}:{height:(0,i.readUInt32BE)(t,20),width:(0,i.readUInt32BE)(t,16)}}},25252:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PNM=void 0;let i=r(54754),n={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},o={default:t=>{let e=[];for(;t.length>0;){let r=t.shift();if("#"!==r[0]){e=r.split(" ");break}}if(2===e.length)return{height:parseInt(e[1],10),width:parseInt(e[0],10)};throw TypeError("Invalid PNM")},pam:t=>{let e={};for(;t.length>0;){let r=t.shift();if(r.length>16||r.charCodeAt(0)>128)continue;let[i,n]=r.split(" ");if(i&&n&&(e[i.toLowerCase()]=parseInt(n,10)),e.height&&e.width)break}if(e.height&&e.width)return{height:e.height,width:e.width};throw TypeError("Invalid PAM")}};e.PNM={validate:t=>(0,i.toUTF8String)(t,0,2) in n,calculate(t){let e=n[(0,i.toUTF8String)(t,0,2)],r=(0,i.toUTF8String)(t,3).split(/[\r\n]+/);return(o[e]||o.default)(r)}}},52071:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PSD=void 0;let i=r(54754);e.PSD={validate:t=>"8BPS"===(0,i.toUTF8String)(t,0,4),calculate:t=>({height:(0,i.readUInt32BE)(t,14),width:(0,i.readUInt32BE)(t,18)})}},55792:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SVG=void 0;let i=r(54754),n=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,o={height:/\sheight=(['"])([^%]+?)\1/,root:n,viewbox:/\sviewBox=(['"])(.+?)\1/i,width:/\swidth=(['"])([^%]+?)\1/},s={in:96,cm:37.79527559055118,em:16,ex:8,m:37.79527559055118*100,mm:37.79527559055118/10,pc:96/72/12,pt:96/72,px:1},a=RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(s).join("|")})?$`);function l(t){let e=a.exec(t);if(e)return Math.round(Number(e[1])*(s[e[2]]||1))}e.SVG={validate:t=>n.test((0,i.toUTF8String)(t,0,1e3)),calculate(t){let e=(0,i.toUTF8String)(t).match(o.root);if(e){let t=function(t){let e=t.match(o.width),r=t.match(o.height),i=t.match(o.viewbox);return{height:r&&l(r[2]),viewbox:i&&function(t){let e=t.split(" ");return{height:l(e[3]),width:l(e[2])}}(i[2]),width:e&&l(e[2])}}(e[0]);if(t.width&&t.height)return{height:t.height,width:t.width};if(t.viewbox)return function(t,e){let r=e.width/e.height;return t.width?{height:Math.floor(t.width/r),width:t.width}:t.height?{height:t.height,width:Math.floor(t.height*r)}:{height:e.height,width:e.width}}(t,t.viewbox)}throw TypeError("Invalid SVG")}}},23026:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TGA=void 0;let i=r(54754);e.TGA={validate:t=>0===(0,i.readUInt16LE)(t,0)&&0===(0,i.readUInt16LE)(t,4),calculate:t=>({height:(0,i.readUInt16LE)(t,14),width:(0,i.readUInt16LE)(t,12)})}},99164:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TIFF=void 0;let i=r(57147),n=r(54754),o=["49492a00","4d4d002a"];e.TIFF={validate:t=>o.includes((0,n.toHexString)(t,0,4)),calculate(t,e){if(!e)throw TypeError("Tiff doesn't support buffer");let r="BE"===function(t){let e=(0,n.toUTF8String)(t,0,2);return"II"===e?"LE":"MM"===e?"BE":void 0}(t),o=function(t,e){let r={},i=t;for(;i&&i.length;){let t=(0,n.readUInt)(i,16,0,e),o=(0,n.readUInt)(i,16,2,e),s=(0,n.readUInt)(i,32,4,e);if(0===t)break;1===s&&(3===o||4===o)&&(r[t]=function(t,e){let r=(0,n.readUInt)(t,16,8,e);return((0,n.readUInt)(t,16,10,e)<<16)+r}(i,e)),i=function(t){if(t.length>24)return t.slice(12)}(i)}return r}(function(t,e,r){let o=(0,n.readUInt)(t,32,4,r),s=1024,a=i.statSync(e).size;o+s>a&&(s=a-o-10);let l=new Uint8Array(s),d=i.openSync(e,"r");return i.readSync(d,l,0,s,o),i.closeSync(d),l.slice(2)}(t,e,r),r),s=o[256],a=o[257];if(!s||!a)throw TypeError("Invalid Tiff. Missing tags");return{height:a,width:s}}}},54754:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.findBox=e.readUInt=e.readUInt32LE=e.readUInt32BE=e.readInt32LE=e.readUInt24LE=e.readUInt16LE=e.readUInt16BE=e.readInt16LE=e.toHexString=e.toUTF8String=void 0;let r=new TextDecoder;e.toUTF8String=(t,e=0,i=t.length)=>r.decode(t.slice(e,i)),e.toHexString=(t,e=0,r=t.length)=>t.slice(e,r).reduce((t,e)=>t+("0"+e.toString(16)).slice(-2),""),e.readInt16LE=(t,e=0)=>{let r=t[e]+256*t[e+1];return r|(32768&r)*131070},e.readUInt16BE=(t,e=0)=>256*t[e]+t[e+1],e.readUInt16LE=(t,e=0)=>t[e]+256*t[e+1],e.readUInt24LE=(t,e=0)=>t[e]+256*t[e+1]+65536*t[e+2],e.readInt32LE=(t,e=0)=>t[e]+256*t[e+1]+65536*t[e+2]+(t[e+3]<<24),e.readUInt32BE=(t,e=0)=>16777216*t[e]+65536*t[e+1]+256*t[e+2]+t[e+3],e.readUInt32LE=(t,e=0)=>t[e]+256*t[e+1]+65536*t[e+2]+16777216*t[e+3];let i={readUInt16BE:e.readUInt16BE,readUInt16LE:e.readUInt16LE,readUInt32BE:e.readUInt32BE,readUInt32LE:e.readUInt32LE};e.readUInt=function(t,e,r,n){return r=r||0,i["readUInt"+e+(n?"BE":"LE")](t,r)},e.findBox=function(t,r,i){for(;i<t.length;){let n=function(t,r){if(t.length-r<4)return;let i=(0,e.readUInt32BE)(t,r);if(!(t.length-r<i))return{name:(0,e.toUTF8String)(t,4+r,8+r),offset:r,size:i}}(t,i);if(!n)break;if(n.name===r)return n;i+=n.size}}},85754:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WEBP=void 0;let i=r(54754);e.WEBP={validate(t){let e="RIFF"===(0,i.toUTF8String)(t,0,4),r="WEBP"===(0,i.toUTF8String)(t,8,12),n="VP8"===(0,i.toUTF8String)(t,12,15);return e&&r&&n},calculate(t){var e,r,n;let o=(0,i.toUTF8String)(t,12,16);if(t=t.slice(20,30),"VP8X"===o){let r=t[0];if((192&r)==0&&(1&r)==0)return e=t,{height:1+(0,i.readUInt24LE)(e,7),width:1+(0,i.readUInt24LE)(e,4)};throw TypeError("Invalid WebP")}if("VP8 "===o&&47!==t[0])return r=t,{height:16383&(0,i.readInt16LE)(r,8),width:16383&(0,i.readInt16LE)(r,6)};let s=(0,i.toHexString)(t,3,6);if("VP8L"===o&&"9d012a"!==s)return{height:1+((15&(n=t)[4])<<10|n[3]<<2|(192&n[2])>>6),width:1+((63&n[2])<<8|n[1])};throw TypeError("Invalid WebP")}}},84874:(t,e,r)=>{try{var i=r(73837);if("function"!=typeof i.inherits)throw"";t.exports=i.inherits}catch(e){t.exports=r(17141)}},17141:t=>{"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},6663:(t,e,r)=>{var i=r(84874),n=r(82361).EventEmitter;function o(t){if(!(this instanceof o))return new o(t);n.call(this),t=t||{},this.concurrency=t.concurrency||1/0,this.timeout=t.timeout||0,this.autostart=t.autostart||!1,this.results=t.results||null,this.pending=0,this.session=0,this.running=!1,this.jobs=[],this.timers={}}function s(){for(var t in this.timers){var e=this.timers[t];delete this.timers[t],clearTimeout(e)}}function a(t){var e=this;function r(t){e.end(t)}this.on("error",r),this.on("end",function i(n){e.removeListener("error",r),e.removeListener("end",i),t(n,this.results)})}function l(t){this.session++,this.running=!1,this.emit("end",t)}t.exports=o,t.exports.default=o,i(o,n),["pop","shift","indexOf","lastIndexOf"].forEach(function(t){o.prototype[t]=function(){return Array.prototype[t].apply(this.jobs,arguments)}}),o.prototype.slice=function(t,e){return this.jobs=this.jobs.slice(t,e),this},o.prototype.reverse=function(){return this.jobs.reverse(),this},["push","unshift","splice"].forEach(function(t){o.prototype[t]=function(){var e=Array.prototype[t].apply(this.jobs,arguments);return this.autostart&&this.start(),e}}),Object.defineProperty(o.prototype,"length",{get:function(){return this.pending+this.jobs.length}}),o.prototype.start=function(t){if(t&&a.call(this,t),this.running=!0,!(this.pending>=this.concurrency)){if(0===this.jobs.length){0===this.pending&&l.call(this);return}var e=this,r=this.jobs.shift(),i=!0,n=this.session,o=null,s=!1,d=null,u=r.hasOwnProperty("timeout")?r.timeout:this.timeout;u&&(o=setTimeout(function(){s=!0,e.listeners("timeout").length>0?e.emit("timeout",h,r):h()},u),this.timers[o]=o),this.results&&(d=this.results.length,this.results[d]=null),this.pending++,e.emit("start",r);var c=r(h);c&&c.then&&"function"==typeof c.then&&c.then(function(t){return h(null,t)}).catch(function(t){return h(t||!0)}),this.running&&this.jobs.length>0&&this.start()}function h(t,a){i&&e.session===n&&(i=!1,e.pending--,null!==o&&(delete e.timers[o],clearTimeout(o)),t?e.emit("error",t,r):!1===s&&(null!==d&&(e.results[d]=Array.prototype.slice.call(arguments,1)),e.emit("success",a,r)),e.session===n&&(0===e.pending&&0===e.jobs.length?l.call(e):e.running&&e.start()))}},o.prototype.stop=function(){this.running=!1},o.prototype.end=function(t){s.call(this),this.jobs.length=0,this.pending=0,l.call(this,t)}}};var e=require("../../../../webpack-runtime.js");e.C(t);var r=t=>e(e.s=t),i=e.X(0,[1633,1744,5059],()=>r(25456));module.exports=i})();
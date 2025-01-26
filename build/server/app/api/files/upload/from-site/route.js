(()=>{var e={};e.id=953,e.ids=[953],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58359:()=>{},93739:()=>{},57095:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>y,patchFetch:()=>m,requestAsyncStorage:()=>p,routeModule:()=>d,serverHooks:()=>g,staticGenerationAsyncStorage:()=>f});var i={};r.r(i),r.d(i,{POST:()=>c});var a=r(49303),s=r(88716),n=r(60670),o=r(87070),l=r(57435),u=r(47080);async function c(e){try{let t=await e.json(),r=await (0,u.uploadFileFromSite)(t);return o.NextResponse.json(r)}catch(e){return l.Z.error("[GET] /api/files/upload/from-site",e.message),o.NextResponse.json({errors:["Internal Error"]})}}let d=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/files/upload/from-site/route",pathname:"/api/files/upload/from-site",filename:"route",bundlePath:"app/api/files/upload/from-site/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/files/upload/from-site/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:p,staticGenerationAsyncStorage:f,serverHooks:g}=d,y="/api/files/upload/from-site/route";function m(){return(0,n.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:f})}},47080:(e,t,r)=>{"use strict";r.r(t),r.d(t,{getFiles:()=>g,uploadFile:()=>y,uploadFileFromSite:()=>m});var i=r(24330);r(60166);var a=r(9576),s=r(61460),n=r(89114),o=r(57435),l=r(44652),u=r(66267),c=r(59271),d=r(49530),p=r(20123),f=r(40618);let g=n.Re;async function y(e,t){let r={success:!1,data:null};try{for(let i of(await (0,u.isAllowed)(["upload_files"]),Array.from(e.entries()))){let[n,o]=i;if("object"==typeof o){let i=Buffer.from(await o.arrayBuffer()),n=e.get("fileId")?.toString()||(0,a.Z)(),u={...(0,l.R)(e.get("metadata")?.toString()||"{}")},c=(e.get("size")?function(e,t){if("0"==`${e}`)return 0;let r=`${e||""}`.replaceAll(" ",""),[i,a]=(r=r.includes(".")?r.replaceAll(",",""):r.split(",").length>2?r.replaceAll(",",""):r.replaceAll(",",".")).split("."),s=!i||isNaN(Number(i))?"":i;return""==(s+=!a||isNaN(Number(a))?"":`.${a}`)||void 0===s||isNaN(Number(s))?t?.notNull?0:null:Number(s)}((0,l.R)(e.get("size")?.toString())):0)||o.size,d=e.get("filename")?.toString()||o.name,p=[n,d].filter(e=>e).join("__");(u.width||u.height)&&(p=`${p}?w=${u.width}&h=${u.height}`),r=await (0,s.G)({fileId:n,data:i,filename:p,size:c,contentType:e.get("contentType")?.toString()||o.type,metadata:u},t)}}}catch(e){r.success=!1,r.errors=[e.message],o.Z.error("uploadFile ERROR",e.message)}finally{return r}}async function m({fileId:e,siteURL:t}){try{let r=await (0,p.QF)({links:[t]});if(r.errors)throw Error(r.errors.join(", "));let{data:[i]}=r;if(!i)throw Error(`Site (${t}) was not found!`);let a=await (0,c.U)({baseURL:i.link,apiKey:i.apiKey}),o=await (0,n._I)(e);if(o.errors)throw Error(o.errors.join(", "));if(o?.data){let t=d.Z.stringify({...o.data.metadata});return t=t?`?${t}`:"",{data:{fileId:e,fileURL:[process.env.NEXT_PUBLIC_APP_URL,`/files/${e}${t}`].join("")}}}let l=(await a.get(`/api/files/${e}/download`)).data;if(l.errors)throw Error(l.errors.join(", "));if(!l.data)return{errors:["File not found"],data:null};await (0,s.G)({fileId:e,data:l.data.data,filename:l.data.filename,size:l.data.size,contentType:l.data.contentType,metadata:{...l.data.metadata}});let u=d.Z.stringify({...l.data.metadata});return u=u?`?${u}`:"",{data:{fileId:e,fileURL:[i.link,`/files/${e}${u}`].join("")}}}catch(e){return o.Z.error("downloadFileFromSite ERROR",e.message),{data:null,errors:[e.message]}}}(0,f.h)([g,y,m]),(0,i.j)("b8b7f31dbd943dea24b6f50846c5726097eed2b6",g),(0,i.j)("c0510f4977b119cc8ad2ab30703dd3471188c2de",y),(0,i.j)("eda86c5135bf9ed42d0ba911e5e86f10d5e38f37",m)},61460:(e,t,r)=>{"use strict";r.d(t,{G:()=>l});var i=r(88317),a=r(57435),s=r(10413),n=r(88182),o=r(89114);async function l(e,t){let r={success:!1,data:null};try{if(!e.fileId)throw Error("Missing fileId");if(!e.data)throw Error("No file uploaded");await s.Z.insert(n.files).values(e);let a=await (0,o._I)(e.fileId);if(!a)throw Error("Failed to upload file");r.success=!0,r.data=a.data,a.data&&t?.broadcastAction!==!1&&i.Z.emit("file_uploaded")}catch(e){r.success=!1,r.errors=[e.message],a.Z.error("_uploadFile ERROR",e.message)}finally{return r}}},89114:(e,t,r)=>{"use strict";r.d(t,{_I:()=>u,Re:()=>g,KU:()=>l});var i=r(57745),a=r(10413),s=r(88182),n=r(57435),o=r(44380);async function l(e){try{let t=await a.Z.query.files.findFirst({where:(0,i.eq)(s.files.fileId,e)});return{data:t?{...t,url:(0,o.TI)(`/files/${t.fileId}`)}:null}}catch(e){return n.Z.error("_getFiles ERROR",e.message),{errors:[e.message],data:null}}}async function u(e){try{let t=await a.Z.query.files.findFirst({where:(0,i.eq)(s.files.fileId,e),columns:{contentType:!0,fileId:!0,filename:!0,size:!0,metadata:!0,createdAt:!0}});return{data:t?{...t,url:(0,o.TI)(`/files/${t.fileId}`)}:null}}catch(e){return n.Z.error("_getFiles ERROR",e.message),{errors:[e.message],data:null}}}var c=r(34149),d=r(60938),p=r(81445),f=r(41502);async function g(e){try{let{filesIds:t,archived:r,searchValue:n,limit:l,page:u=1,uploadDateGTE:g,uploadDateLTE:y}={...e},m=Math.max(0,u),h=n?["%",n,"%"].join(""):"",x=[r?(0,i.K0)(s.files.deletedAt):(0,i.Ft)(s.files.deletedAt),...t?.length?[(0,i.d3)(s.files.fileId,t)]:[],...h?[(0,c.i6)`LOWER(screens.name) like LOWER(${h})`]:[],g?(0,i.eg)(s.files.createdAt,"string"==typeof g?new Date(g):g):void 0,y?(0,i.G)(s.files.createdAt,"string"==typeof y?new Date(y):y):void 0],b=a.Z.select({count:(0,d.QX)()}).from(s.files);x.length&&b.where((0,i.xD)(...x));let[{count:w}]=await b.execute(),R=1;w&&(R=(0,f.x)(l)?1:Math.ceil(w/l),m=Math.min(m,R));let j=(0,f.x)(l)?void 0:Math.max(0,(m-1)*l);return{data:(await a.Z.query.files.findMany({where:x.length?(0,i.xD)(...x):void 0,limit:l,offset:j,orderBy:(0,p.C)(s.files.createdAt),columns:{fileId:!0,contentType:!0,filename:!0,size:!0,metadata:!0,createdAt:!0}})).map(e=>({...e,url:(0,o.TI)(`/files/${e.fileId}`)})),searchValue:n,totalPages:R,totalRows:w,page:m,limit:l}}catch(e){return n.Z.error("_getFiles ERROR",e.message),{errors:[e.message],data:[],totalPages:0,totalRows:0,page:1}}}},20123:(e,t,r)=>{"use strict";r.d(t,{Ng:()=>c,_U:()=>g,QF:()=>u,YF:()=>f});var i=r(57745),a=r(81445),s=r(30900),n=r(10413),o=r(88182),l=r(57435);async function u(e){try{let{sitesIds:t,types:r=[],envs:l=[],links:u=[]}={...e},c=t||[],d=c?.length?(0,i.d3)(o.sites.siteId,c.filter(e=>s.Z(e))):void 0;u.length&&[...u].forEach(e=>{u.push(e.replace("http:","https:")),u.push(e.replace("https","http"))});let p=[(0,i.Ft)(o.sites.deletedAt),d,r.length?(0,i.d3)(o.sites.type,r):void 0,l.length?(0,i.d3)(o.sites.env,l):void 0,u.length?(0,i.d3)(o.sites.link,u):void 0];return{data:(await n.Z.select({site:o.sites}).from(o.sites).where(p.length?(0,i.xD)(...p):void 0).orderBy((0,a.d)(o.sites.id))).map(e=>e.site)}}catch(e){return l.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function c(e){let{siteId:t}={...e};try{if(!t)throw Error("Missing siteId");let e=s.Z(t)?(0,i.eq)(o.sites.siteId,t):void 0;return{data:await n.Z.query.sites.findFirst({where:(0,i.xD)((0,i.Ft)(o.sites.deletedAt),e)})}}catch(e){return l.Z.error("_getSite ERROR",e.message),{errors:[e.message]}}}var d=r(8328);let p=()=>{let e=(0,d.w)();return{webeditor:{name:"Local editor",siteId:"fb76af5a-bf86-4050-821e-44f1bf316bf4",link:e.origin,type:"webeditor",apiKey:"localhost"},nodeapi:{name:"Local editor",siteId:"5cb4aa54-2cfe-49e2-9cdd-392a9b8c124e",link:e.origin,type:"webeditor",apiKey:"localhost"}}};async function f(e){try{let{types:t=[]}={...e},r=[...t.length?[(0,i.d3)(o.sites.type,t)]:[]],a=await n.Z.query.sites.findMany({where:r.length?(0,i.xD)(...r):void 0,columns:{siteId:!0,type:!0,name:!0,link:!0}});return p(),{data:[...a]}}catch(e){return l.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function g(e){try{let t=await n.Z.query.sites.findFirst({where:(0,i.eq)(o.sites.siteId,e),columns:{apiKey:!0,link:!0}}),r=t||null;if(!t){let t=p();Object.values(t).forEach(t=>{t.siteId===e&&(r={link:t.link,apiKey:t.apiKey})})}return{data:r}}catch(e){return l.Z.error("_getSiteApiKey ERROR",e.message),{data:null,errors:[e.message]}}}},59271:(e,t,r)=>{"use strict";r.d(t,{U:()=>a});var i=r(29712);async function a(e){let t=e.baseURL,r=e.apiKey;if(!t)throw Error("MISSING: link");if(!r)throw Error("MISSING: apiKey");let a=i.Z.create({baseURL:t});return a.interceptors.request.use(async e=>(e.headers&&(e.headers["x-api-key"]=r),e)),a.interceptors.response.use(e=>e,e=>new Promise((t,r)=>r(e))),a}},8328:(e,t,r)=>{"use strict";r.d(t,{w:()=>a});var i=r(71615);function a(){let e=(0,i.headers)(),t=e.get("x-api-key"),r=e.get("x-bearer-token"),a=e.get("x-url"),s=e.get("x-next-url-host"),n=e.get("x-next-url-href"),o=e.get("x-next-url-port"),l=e.get("x-next-url-hostname"),u=e.get("x-next-url-pathname"),c=e.get("x-next-url-search"),d=e.get("x-next-url-protocol"),p=e.get("x-next-url-username"),f=e.get("x-next-url-locale"),g=e.get("x-next-url-origin"),y=e.get("x-geo-city"),m=e.get("x-geo-country");return{apiKey:t,bearerToken:r,url:a||"",host:s||"",href:n||"",port:o||"",hostname:l||"",pathname:u||"",search:c||"",protocol:d||"",username:p||"",locale:f||"",origin:g||"",city:y||"",country:m||"",region:e.get("x-geo-region")||"",latitude:e.get("x-geo-latitude")||"",longitude:e.get("x-geo-longitude")||""}}},44652:(e,t,r)=>{"use strict";function i(e){try{return JSON.parse(e)}catch(e){return null}}r.d(t,{R:()=>i})},88317:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let i=(0,r(55802).io)(process.env.NEXT_PUBLIC_APP_URL)},44380:(e,t,r)=>{"use strict";function i(e=""){let t=process.env.NEXT_PUBLIC_APP_URL||"";return"/"===t.substring(t.length-1,t.length)&&(t=t.substring(0,t.length-1)),"/"===e[0]&&(e=e.substring(1,e.length)),[t,e].filter(e=>e).join("/")}function a(e=""){try{return new URL(e),!0}catch(e){return!1}}r.d(t,{TI:()=>i,jv:()=>a})},49530:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var i={};r.r(i),r.d(i,{exclude:()=>j,extract:()=>m,parse:()=>h,parseUrl:()=>b,pick:()=>R,stringify:()=>x,stringifyUrl:()=>w});let a="%[a-f0-9]{2}",s=RegExp("("+a+")|([^%]+?)","gi"),n=RegExp("("+a+")+","gi");function o(e,t){if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];let r=e.indexOf(t);return -1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}let l=e=>null==e,u=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),c=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function p(e,t){return t.encode?t.strict?u(e):encodeURIComponent(e):e}function f(e,t){return t.decode?function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){let t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let t=e.match(s)||[];for(let r=1;r<t.length;r++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch{}if(1===t.length)return t;r=r||1;let i=t.slice(0,r),a=t.slice(r);return Array.prototype.concat.call([],e(i),e(a))})(t,r).join("")).match(s)||[];return e}}(r[0]);e!==r[0]&&(t[r[0]]=e)}r=n.exec(e)}for(let r of(t["%C2"]="�",Object.keys(t)))e=e.replace(RegExp(r,"g"),t[r]);return e}(e)}}(e):e}function g(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function m(e){let t=(e=g(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function h(e,t){d((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,i)=>{if(t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!t){i[e]=r;return}void 0===i[e]&&(i[e]={}),i[e][t[1]]=r};case"bracket":return(e,r,i)=>{if(t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[...i[e],r]};case"colon-list-separator":return(e,r,i)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[...i[e],r]};case"comma":case"separator":return(t,r,i)=>{let a="string"==typeof r&&r.includes(e.arrayFormatSeparator),s="string"==typeof r&&!a&&f(r,e).includes(e.arrayFormatSeparator);r=s?f(r,e):r;let n=a||s?r.split(e.arrayFormatSeparator).map(t=>f(t,e)):null===r?r:f(r,e);i[t]=n};case"bracket-separator":return(t,r,i)=>{let a=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!a){i[t]=r?f(r,e):r;return}let s=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>f(t,e));if(void 0===i[t]){i[t]=s;return}i[t]=[...i[t],...s]};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[...[r[e]].flat(),t]}}}(t),i=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return i;for(let a of e.split("&")){if(""===a)continue;let e=t.decode?a.replaceAll("+"," "):a,[s,n]=o(e,"=");void 0===s&&(s=e),n=void 0===n?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?n:f(n,t),r(f(s,t),n,i)}for(let[e,r]of Object.entries(i))if("object"==typeof r&&null!==r)for(let[e,i]of Object.entries(r))r[e]=y(i,t);else i[e]=y(r,t);return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce((e,t)=>{let r=i[t];return e[t]=r&&"object"==typeof r&&!Array.isArray(r)?function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):r,e},Object.create(null))}function x(e,t){if(!e)return"";d((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);let r=r=>t.skipNull&&l(e[r])||t.skipEmptyString&&""===e[r],i=function(e){switch(e.arrayFormat){case"index":return t=>(r,i)=>{let a=r.length;return void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[p(t,e),"[",a,"]"].join("")]:[...r,[p(t,e),"[",p(a,e),"]=",p(i,e)].join("")]};case"bracket":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[p(t,e),"[]"].join("")]:[...r,[p(t,e),"[]=",p(i,e)].join("")];case"colon-list-separator":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[p(t,e),":list="].join("")]:[...r,[p(t,e),":list=",p(i,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(i,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?i:(a=null===a?"":a,0===i.length)?[[p(r,e),t,p(a,e)].join("")]:[[i,p(a,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,p(t,e)]:[...r,[p(t,e),"=",p(i,e)].join("")]}}(t),a={};for(let[t,i]of Object.entries(e))r(t)||(a[t]=i);let s=Object.keys(a);return!1!==t.sort&&s.sort(t.sort),s.map(r=>{let a=e[r];return void 0===a?"":null===a?p(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?p(r,t)+"[]":a.reduce(i(r),[]).join("&"):p(r,t)+"="+p(a,t)}).filter(e=>e.length>0).join("&")}function b(e,t){t={decode:!0,...t};let[r,i]=o(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:h(m(e),t),...t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:f(i,t)}:{}}}function w(e,t){t={encode:!0,strict:!0,[c]:!0,...t};let r=g(e.url).split("?")[0]||"",i=x({...h(m(e.url),{sort:!1}),...e.query},t);i&&=`?${i}`;let a=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);if("string"==typeof e.fragmentIdentifier){let i=new URL(r);i.hash=e.fragmentIdentifier,a=t[c]?i.hash:`#${e.fragmentIdentifier}`}return`${r}${i}${a}`}function R(e,t,r){let{url:i,query:a,fragmentIdentifier:s}=b(e,r={parseFragmentIdentifier:!0,[c]:!1,...r});return w({url:i,query:function(e,t){let r={};if(Array.isArray(t))for(let i of t){let t=Object.getOwnPropertyDescriptor(e,i);t?.enumerable&&Object.defineProperty(r,i,t)}else for(let i of Reflect.ownKeys(e)){let a=Object.getOwnPropertyDescriptor(e,i);if(a.enumerable){let s=e[i];t(i,s,e)&&Object.defineProperty(r,i,a)}}return r}(a,t),fragmentIdentifier:s},r)}function j(e,t,r){return R(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}let v=i}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[1633,1744,9937,3788,1490,9092,5802,5059,9712,413,6267],()=>r(57095));module.exports=i})();
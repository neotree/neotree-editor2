"use strict";(()=>{var e={};e.id=4851,e.ids=[4851],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},14216:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>x,patchFetch:()=>h,requestAsyncStorage:()=>g,routeModule:()=>f,serverHooks:()=>m,staticGenerationAsyncStorage:()=>y});var n={};r.r(n),r.d(n,{GET:()=>d,POST:()=>p});var s=r(49303),o=r(88716),i=r(60670),a=r(87070),l=r(57435),u=r(72761),c=r(87845);async function p(e){try{if(!(await (0,u.$)()).yes)return a.NextResponse.json({errors:["Unauthorised"]},{status:200});let t=(await e.json()).data,r=await (0,c.saveScriptsWithItems)({data:t});return a.NextResponse.json(r,{status:200})}catch(e){return l.Z.error("[POST] /api/scripts/with-items",e.message),a.NextResponse.json({errors:["Internal Error"]},{status:200})}}async function d(e){try{if(!(await (0,u.$)()).yes)return a.NextResponse.json({errors:["Unauthorised"]},{status:200});let t=e.nextUrl.searchParams.get("scriptsIds"),r=t?JSON.parse(t):void 0,{errors:n,data:s}=await (0,c.getScriptsWithItems)({scriptsIds:r});if(n?.length)return a.NextResponse.json({errors:n},{status:200});return a.NextResponse.json({data:s},{status:200})}catch(e){return l.Z.error("[GET] /api/scripts/with-items",e.message),a.NextResponse.json({errors:["Internal Error"]},{status:200})}}let f=new s.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/scripts/with-items/route",pathname:"/api/scripts/with-items",filename:"route",bundlePath:"app/api/scripts/with-items/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/scripts/with-items/route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:g,staticGenerationAsyncStorage:y,serverHooks:m}=f,x="/api/scripts/with-items/route";function h(){return(0,i.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:y})}},20123:(e,t,r)=>{r.d(t,{Ng:()=>c,_U:()=>g,QF:()=>u,YF:()=>f});var n=r(57745),s=r(81445),o=r(30900),i=r(10413),a=r(43509),l=r(57435);async function u(e){try{let{sitesIds:t,types:r=[],envs:l=[],links:u=[]}={...e},c=t||[],p=c?.length?(0,n.d3)(a.sites.siteId,c.filter(e=>o.Z(e))):void 0;u.length&&[...u].forEach(e=>{u.push(e.replace("http:","https:")),u.push(e.replace("https","http"))});let d=[(0,n.Ft)(a.sites.deletedAt),p,r.length?(0,n.d3)(a.sites.type,r):void 0,l.length?(0,n.d3)(a.sites.env,l):void 0,u.length?(0,n.d3)(a.sites.link,u):void 0];return{data:(await i.Z.select({site:a.sites}).from(a.sites).where(d.length?(0,n.xD)(...d):void 0).orderBy((0,s.d)(a.sites.id))).map(e=>e.site)}}catch(e){return l.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function c(e){let{siteId:t}={...e};try{if(!t)throw Error("Missing siteId");let e=o.Z(t)?(0,n.eq)(a.sites.siteId,t):void 0;return{data:await i.Z.query.sites.findFirst({where:(0,n.xD)((0,n.Ft)(a.sites.deletedAt),e)})}}catch(e){return l.Z.error("_getSite ERROR",e.message),{errors:[e.message]}}}var p=r(8328);let d=()=>{let e=(0,p.w)();return{webeditor:{name:"Local editor",siteId:"fb76af5a-bf86-4050-821e-44f1bf316bf4",link:e.origin,type:"webeditor",apiKey:"localhost"},nodeapi:{name:"Local editor",siteId:"5cb4aa54-2cfe-49e2-9cdd-392a9b8c124e",link:e.origin,type:"webeditor",apiKey:"localhost"}}};async function f(e){try{let{types:t=[]}={...e},r=[...t.length?[(0,n.d3)(a.sites.type,t)]:[]],s=await i.Z.query.sites.findMany({where:r.length?(0,n.xD)(...r):void 0,columns:{siteId:!0,type:!0,name:!0,link:!0}});return d(),{data:[...s]}}catch(e){return l.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function g(e){try{let t=await i.Z.query.sites.findFirst({where:(0,n.eq)(a.sites.siteId,e),columns:{apiKey:!0,link:!0}}),r=t||null;if(!t){let t=d();Object.values(t).forEach(t=>{t.siteId===e&&(r={link:t.link,apiKey:t.apiKey})})}return{data:r}}catch(e){return l.Z.error("_getSiteApiKey ERROR",e.message),{data:null,errors:[e.message]}}}},8328:(e,t,r)=>{r.d(t,{w:()=>s});var n=r(71615);function s(){let e=(0,n.headers)(),t=e.get("x-api-key"),r=e.get("x-bearer-token"),s=e.get("x-url"),o=e.get("x-next-url-host"),i=e.get("x-next-url-href"),a=e.get("x-next-url-port"),l=e.get("x-next-url-hostname"),u=e.get("x-next-url-pathname"),c=e.get("x-next-url-search"),p=e.get("x-next-url-protocol"),d=e.get("x-next-url-username"),f=e.get("x-next-url-locale"),g=e.get("x-next-url-origin"),y=e.get("x-geo-city"),m=e.get("x-geo-country");return{apiKey:t,bearerToken:r,url:s||"",host:o||"",href:i||"",port:a||"",hostname:l||"",pathname:u||"",search:c||"",protocol:p||"",username:d||"",locale:f||"",origin:g||"",city:y||"",country:m||"",region:e.get("x-geo-region")||"",latitude:e.get("x-geo-latitude")||"",longitude:e.get("x-geo-longitude")||""}}},49530:(e,t,r)=>{r.d(t,{Z:()=>k});var n={};r.r(n),r.d(n,{exclude:()=>w,extract:()=>m,parse:()=>x,parseUrl:()=>b,pick:()=>q,stringify:()=>h,stringifyUrl:()=>j});let s="%[a-f0-9]{2}",o=RegExp("("+s+")|([^%]+?)","gi"),i=RegExp("("+s+")+","gi");function a(e,t){if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];let r=e.indexOf(t);return -1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}let l=e=>null==e,u=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),c=Symbol("encodeFragmentIdentifier");function p(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function d(e,t){return t.encode?t.strict?u(e):encodeURIComponent(e):e}function f(e,t){return t.decode?function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){let t={"%FE%FF":"��","%FF%FE":"��"},r=i.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let t=e.match(o)||[];for(let r=1;r<t.length;r++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch{}if(1===t.length)return t;r=r||1;let n=t.slice(0,r),s=t.slice(r);return Array.prototype.concat.call([],e(n),e(s))})(t,r).join("")).match(o)||[];return e}}(r[0]);e!==r[0]&&(t[r[0]]=e)}r=i.exec(e)}for(let r of(t["%C2"]="�",Object.keys(t)))e=e.replace(RegExp(r,"g"),t[r]);return e}(e)}}(e):e}function g(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function m(e){let t=(e=g(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function x(e,t){p((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{if(t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!t){n[e]=r;return}void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return(e,r,n)=>{if(t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[...n[e],r]};case"colon-list-separator":return(e,r,n)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[...n[e],r]};case"comma":case"separator":return(t,r,n)=>{let s="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!s&&f(r,e).includes(e.arrayFormatSeparator);r=o?f(r,e):r;let i=s||o?r.split(e.arrayFormatSeparator).map(t=>f(t,e)):null===r?r:f(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{let s=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!s){n[t]=r?f(r,e):r;return}let o=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>f(t,e));if(void 0===n[t]){n[t]=o;return}n[t]=[...n[t],...o]};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[...[r[e]].flat(),t]}}}(t),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let s of e.split("&")){if(""===s)continue;let e=t.decode?s.replaceAll("+"," "):s,[o,i]=a(e,"=");void 0===o&&(o=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:f(i,t),r(f(o,t),i,n)}for(let[e,r]of Object.entries(n))if("object"==typeof r&&null!==r)for(let[e,n]of Object.entries(r))r[e]=y(n,t);else n[e]=y(r,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{let r=n[t];return e[t]=r&&"object"==typeof r&&!Array.isArray(r)?function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):r,e},Object.create(null))}function h(e,t){if(!e)return"";p((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);let r=r=>t.skipNull&&l(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let s=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[d(t,e),"[",s,"]"].join("")]:[...r,[d(t,e),"[",d(s,e),"]=",d(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[d(t,e),"[]"].join("")]:[...r,[d(t,e),"[]=",d(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[d(t,e),":list="].join("")]:[...r,[d(t,e),":list=",d(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?n:(s=null===s?"":s,0===n.length)?[[d(r,e),t,d(s,e)].join("")]:[[n,d(s,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,d(t,e)]:[...r,[d(t,e),"=",d(n,e)].join("")]}}(t),s={};for(let[t,n]of Object.entries(e))r(t)||(s[t]=n);let o=Object.keys(s);return!1!==t.sort&&o.sort(t.sort),o.map(r=>{let s=e[r];return void 0===s?"":null===s?d(r,t):Array.isArray(s)?0===s.length&&"bracket-separator"===t.arrayFormat?d(r,t)+"[]":s.reduce(n(r),[]).join("&"):d(r,t)+"="+d(s,t)}).filter(e=>e.length>0).join("&")}function b(e,t){t={decode:!0,...t};let[r,n]=a(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:x(m(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:f(n,t)}:{}}}function j(e,t){t={encode:!0,strict:!0,[c]:!0,...t};let r=g(e.url).split("?")[0]||"",n=h({...x(m(e.url),{sort:!1}),...e.query},t);n&&=`?${n}`;let s=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);if("string"==typeof e.fragmentIdentifier){let n=new URL(r);n.hash=e.fragmentIdentifier,s=t[c]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${s}`}function q(e,t,r){let{url:n,query:s,fragmentIdentifier:o}=b(e,r={parseFragmentIdentifier:!0,[c]:!1,...r});return j({url:n,query:function(e,t){let r={};if(Array.isArray(t))for(let n of t){let t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(let n of Reflect.ownKeys(e)){let s=Object.getOwnPropertyDescriptor(e,n);if(s.enumerable){let o=e[n];t(n,o,e)&&Object.defineProperty(r,n,s)}}return r}(s,t),fragmentIdentifier:o},r)}function w(e,t,r){return q(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}let k=n}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[1633,1744,1381,3788,1490,9092,5802,5059,9712,413,6267,5209,1966,7845],()=>r(14216));module.exports=n})();
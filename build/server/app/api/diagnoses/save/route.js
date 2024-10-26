"use strict";(()=>{var e={};e.id=4171,e.ids=[4171],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},81547:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>m,patchFetch:()=>x,requestAsyncStorage:()=>f,routeModule:()=>d,serverHooks:()=>y,staticGenerationAsyncStorage:()=>g});var n={};t.r(n),t.d(n,{POST:()=>p});var o=t(49303),i=t(88716),a=t(60670),s=t(87070),l=t(72761),u=t(13442),c=t(57435);async function p(e){try{if(!(await (0,l.$)()).yes)return s.NextResponse.json({errors:["Unauthorised"]},{status:200});let r=await e.json(),t=await (0,u.saveDiagnoses)(r);return s.NextResponse.json(t)}catch(e){return c.Z.log("/api/diagnoses/save",e),s.NextResponse.json({errors:[e.message]})}}let d=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/diagnoses/save/route",pathname:"/api/diagnoses/save",filename:"route",bundlePath:"app/api/diagnoses/save/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/diagnoses/save/route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:f,staticGenerationAsyncStorage:g,serverHooks:y}=d,m="/api/diagnoses/save/route";function x(){return(0,a.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:g})}},20123:(e,r,t)=>{t.d(r,{Ng:()=>c,_U:()=>g,QF:()=>u,YF:()=>f});var n=t(57745),o=t(81445),i=t(30900),a=t(10413),s=t(57418),l=t(57435);async function u(e){try{let{sitesIds:r,types:t=[],envs:l=[]}={...e},u=r||[],c=u?.length?(0,n.d3)(s.sites.siteId,u.filter(e=>i.Z(e))):void 0,p=[(0,n.Ft)(s.sites.deletedAt),c,t.length?(0,n.d3)(s.sites.type,t):void 0,l.length?(0,n.d3)(s.sites.env,l):void 0];return{data:(await a.Z.select({site:s.sites}).from(s.sites).where(p.length?(0,n.xD)(...p):void 0).orderBy((0,o.d)(s.sites.id))).map(e=>e.site)}}catch(e){return l.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function c(e){let{siteId:r}={...e};try{if(!r)throw Error("Missing siteId");let e=i.Z(r)?(0,n.eq)(s.sites.siteId,r):void 0;return{data:await a.Z.query.sites.findFirst({where:(0,n.xD)((0,n.Ft)(s.sites.deletedAt),e)})}}catch(e){return l.Z.error("_getSite ERROR",e.message),{errors:[e.message]}}}var p=t(8328);let d=()=>{let e=(0,p.w)();return{webeditor:{name:"Local editor",siteId:"fb76af5a-bf86-4050-821e-44f1bf316bf4",link:e.origin,type:"webeditor",apiKey:"localhost"},nodeapi:{name:"Local editor",siteId:"5cb4aa54-2cfe-49e2-9cdd-392a9b8c124e",link:e.origin,type:"webeditor",apiKey:"localhost"}}};async function f(e){try{let{types:r=[]}={...e},t=[...r.length?[(0,n.d3)(s.sites.type,r)]:[]],o=await a.Z.query.sites.findMany({where:t.length?(0,n.xD)(...t):void 0,columns:{siteId:!0,type:!0,name:!0,link:!0}});return d(),{data:[...o]}}catch(e){return l.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function g(e){try{let r=await a.Z.query.sites.findFirst({where:(0,n.eq)(s.sites.siteId,e),columns:{apiKey:!0,link:!0}}),t=r||null;if(!r){let r=d();Object.values(r).forEach(r=>{r.siteId===e&&(t={link:r.link,apiKey:r.apiKey})})}return{data:t}}catch(e){return l.Z.error("_getSiteApiKey ERROR",e.message),{data:null,errors:[e.message]}}}},8328:(e,r,t)=>{t.d(r,{w:()=>o});var n=t(71615);function o(){let e=(0,n.headers)(),r=e.get("x-api-key"),t=e.get("x-bearer-token"),o=e.get("x-url"),i=e.get("x-next-url-host"),a=e.get("x-next-url-href"),s=e.get("x-next-url-port"),l=e.get("x-next-url-hostname"),u=e.get("x-next-url-pathname"),c=e.get("x-next-url-search"),p=e.get("x-next-url-protocol"),d=e.get("x-next-url-username"),f=e.get("x-next-url-locale"),g=e.get("x-next-url-origin"),y=e.get("x-geo-city"),m=e.get("x-geo-country");return{apiKey:r,bearerToken:t,url:o||"",host:i||"",href:a||"",port:s||"",hostname:l||"",pathname:u||"",search:c||"",protocol:p||"",username:d||"",locale:f||"",origin:g||"",city:y||"",country:m||"",region:e.get("x-geo-region")||"",latitude:e.get("x-geo-latitude")||"",longitude:e.get("x-geo-longitude")||""}}},49530:(e,r,t)=>{t.d(r,{Z:()=>k});var n={};t.r(n),t.d(n,{exclude:()=>q,extract:()=>m,parse:()=>x,parseUrl:()=>b,pick:()=>j,stringify:()=>h,stringifyUrl:()=>v});let o="%[a-f0-9]{2}",i=RegExp("("+o+")|([^%]+?)","gi"),a=RegExp("("+o+")+","gi");function s(e,r){if(!("string"==typeof e&&"string"==typeof r))throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===r)return[];let t=e.indexOf(r);return -1===t?[]:[e.slice(0,t),e.slice(t+r.length)]}let l=e=>null==e,u=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),c=Symbol("encodeFragmentIdentifier");function p(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function d(e,r){return r.encode?r.strict?u(e):encodeURIComponent(e):e}function f(e,r){return r.decode?function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){let r={"%FE%FF":"��","%FF%FE":"��"},t=a.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let r=e.match(i)||[];for(let t=1;t<r.length;t++)r=(e=(function e(r,t){try{return[decodeURIComponent(r.join(""))]}catch{}if(1===r.length)return r;t=t||1;let n=r.slice(0,t),o=r.slice(t);return Array.prototype.concat.call([],e(n),e(o))})(r,t).join("")).match(i)||[];return e}}(t[0]);e!==t[0]&&(r[t[0]]=e)}t=a.exec(e)}for(let t of(r["%C2"]="�",Object.keys(r)))e=e.replace(RegExp(t,"g"),r[t]);return e}(e)}}(e):e}function g(e){let r=e.indexOf("#");return -1!==r&&(e=e.slice(0,r)),e}function y(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):r.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function m(e){let r=(e=g(e)).indexOf("?");return -1===r?"":e.slice(r+1)}function x(e,r){p((r={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...r}).arrayFormatSeparator);let t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,n)=>{if(r=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!r){n[e]=t;return}void 0===n[e]&&(n[e]={}),n[e][r[1]]=t};case"bracket":return(e,t,n)=>{if(r=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!r){n[e]=t;return}if(void 0===n[e]){n[e]=[t];return}n[e]=[...n[e],t]};case"colon-list-separator":return(e,t,n)=>{if(r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!r){n[e]=t;return}if(void 0===n[e]){n[e]=[t];return}n[e]=[...n[e],t]};case"comma":case"separator":return(r,t,n)=>{let o="string"==typeof t&&t.includes(e.arrayFormatSeparator),i="string"==typeof t&&!o&&f(t,e).includes(e.arrayFormatSeparator);t=i?f(t,e):t;let a=o||i?t.split(e.arrayFormatSeparator).map(r=>f(r,e)):null===t?t:f(t,e);n[r]=a};case"bracket-separator":return(r,t,n)=>{let o=/(\[])$/.test(r);if(r=r.replace(/\[]$/,""),!o){n[r]=t?f(t,e):t;return}let i=null===t?[]:t.split(e.arrayFormatSeparator).map(r=>f(r,e));if(void 0===n[r]){n[r]=i;return}n[r]=[...n[r],...i]};default:return(e,r,t)=>{if(void 0===t[e]){t[e]=r;return}t[e]=[...[t[e]].flat(),r]}}}(r),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let o of e.split("&")){if(""===o)continue;let e=r.decode?o.replaceAll("+"," "):o,[i,a]=s(e,"=");void 0===i&&(i=e),a=void 0===a?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?a:f(a,r),t(f(i,r),a,n)}for(let[e,t]of Object.entries(n))if("object"==typeof t&&null!==t)for(let[e,n]of Object.entries(t))t[e]=y(n,r);else n[e]=y(t,r);return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((e,r)=>{let t=n[r];return e[r]=t&&"object"==typeof t&&!Array.isArray(t)?function e(r){return Array.isArray(r)?r.sort():"object"==typeof r?e(Object.keys(r)).sort((e,r)=>Number(e)-Number(r)).map(e=>r[e]):r}(t):t,e},Object.create(null))}function h(e,r){if(!e)return"";p((r={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...r}).arrayFormatSeparator);let t=t=>r.skipNull&&l(e[t])||r.skipEmptyString&&""===e[t],n=function(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{let o=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[d(r,e),"[",o,"]"].join("")]:[...t,[d(r,e),"[",d(o,e),"]=",d(n,e)].join("")]};case"bracket":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[d(r,e),"[]"].join("")]:[...t,[d(r,e),"[]=",d(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[d(r,e),":list="].join("")]:[...t,[d(r,e),":list=",d(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length)?[[d(t,e),r,d(o,e)].join("")]:[[n,d(o,e)].join(e.arrayFormatSeparator)]}default:return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,d(r,e)]:[...t,[d(r,e),"=",d(n,e)].join("")]}}(r),o={};for(let[r,n]of Object.entries(e))t(r)||(o[r]=n);let i=Object.keys(o);return!1!==r.sort&&i.sort(r.sort),i.map(t=>{let o=e[t];return void 0===o?"":null===o?d(t,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?d(t,r)+"[]":o.reduce(n(t),[]).join("&"):d(t,r)+"="+d(o,r)}).filter(e=>e.length>0).join("&")}function b(e,r){r={decode:!0,...r};let[t,n]=s(e,"#");return void 0===t&&(t=e),{url:t?.split("?")?.[0]??"",query:x(m(e),r),...r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:f(n,r)}:{}}}function v(e,r){r={encode:!0,strict:!0,[c]:!0,...r};let t=g(e.url).split("?")[0]||"",n=h({...x(m(e.url),{sort:!1}),...e.query},r);n&&=`?${n}`;let o=function(e){let r="",t=e.indexOf("#");return -1!==t&&(r=e.slice(t)),r}(e.url);if("string"==typeof e.fragmentIdentifier){let n=new URL(t);n.hash=e.fragmentIdentifier,o=r[c]?n.hash:`#${e.fragmentIdentifier}`}return`${t}${n}${o}`}function j(e,r,t){let{url:n,query:o,fragmentIdentifier:i}=b(e,t={parseFragmentIdentifier:!0,[c]:!1,...t});return v({url:n,query:function(e,r){let t={};if(Array.isArray(r))for(let n of r){let r=Object.getOwnPropertyDescriptor(e,n);r?.enumerable&&Object.defineProperty(t,n,r)}else for(let n of Reflect.ownKeys(e)){let o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){let i=e[n];r(n,i,e)&&Object.defineProperty(t,n,o)}}return t}(o,r),fragmentIdentifier:i},t)}function q(e,r,t){return j(e,Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t),t)}let k=n}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[1633,1744,1381,3788,1490,5059,9092,5802,9712,413,6267,5209,1966,3442],()=>t(81547));module.exports=n})();
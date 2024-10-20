(()=>{var e={};e.id=6953,e.ids=[6953],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58359:()=>{},93739:()=>{},17347:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>x,requestAsyncStorage:()=>f,routeModule:()=>d,serverHooks:()=>g,staticGenerationAsyncStorage:()=>y});var s={};r.r(s),r.d(s,{POST:()=>p});var n=r(49303),i=r(88716),o=r(60670),a=r(87070),u=r(72761),c=r(75262),l=r(57435);async function p(e){try{if(!(await (0,u.$)()).yes)return a.NextResponse.json({errors:["Unauthorised"]},{status:200});let t=await e.json(),r=await (0,c.saveScreens)(t);return a.NextResponse.json(r)}catch(e){return l.Z.log("/api/screens/save",e),a.NextResponse.json({errors:[e.message]})}}let d=new n.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/screens/save/route",pathname:"/api/screens/save",filename:"route",bundlePath:"app/api/screens/save/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/screens/save/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:f,staticGenerationAsyncStorage:y,serverHooks:g}=d,m="/api/screens/save/route";function x(){return(0,o.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:y})}},20123:(e,t,r)=>{"use strict";r.d(t,{Ng:()=>l,_U:()=>y,QF:()=>c,YF:()=>f});var s=r(57745),n=r(81445),i=r(30900),o=r(10413),a=r(57418),u=r(57435);async function c(e){try{let{sitesIds:t,types:r=[],envs:u=[]}={...e},c=t||[],l=c?.length?(0,s.d3)(a.sites.siteId,c.filter(e=>i.Z(e))):void 0,p=[(0,s.Ft)(a.sites.deletedAt),l,r.length?(0,s.d3)(a.sites.type,r):void 0,u.length?(0,s.d3)(a.sites.env,u):void 0];return{data:(await o.Z.select({site:a.sites}).from(a.sites).where(p.length?(0,s.xD)(...p):void 0).orderBy((0,n.d)(a.sites.id))).map(e=>e.site)}}catch(e){return u.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function l(e){let{siteId:t}={...e};try{if(!t)throw Error("Missing siteId");let e=i.Z(t)?(0,s.eq)(a.sites.siteId,t):void 0;return{data:await o.Z.query.sites.findFirst({where:(0,s.xD)((0,s.Ft)(a.sites.deletedAt),e)})}}catch(e){return u.Z.error("_getSite ERROR",e.message),{errors:[e.message]}}}var p=r(8328);let d=()=>{let e=(0,p.w)();return{webeditor:{name:"Local editor",siteId:"fb76af5a-bf86-4050-821e-44f1bf316bf4",link:e.origin,type:"webeditor",apiKey:"localhost"},nodeapi:{name:"Local editor",siteId:"5cb4aa54-2cfe-49e2-9cdd-392a9b8c124e",link:e.origin,type:"webeditor",apiKey:"localhost"}}};async function f(e){try{let{types:t=[]}={...e},r=[...t.length?[(0,s.d3)(a.sites.type,t)]:[]],n=await o.Z.query.sites.findMany({where:r.length?(0,s.xD)(...r):void 0,columns:{siteId:!0,type:!0,name:!0,link:!0}});return d(),{data:[...n]}}catch(e){return u.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function y(e){try{let t=await o.Z.query.sites.findFirst({where:(0,s.eq)(a.sites.siteId,e),columns:{apiKey:!0,link:!0}}),r=t||null;if(!t){let t=d();Object.values(t).forEach(t=>{t.siteId===e&&(r={link:t.link,apiKey:t.apiKey})})}return{data:r}}catch(e){return u.Z.error("_getSiteApiKey ERROR",e.message),{data:null,errors:[e.message]}}}},8328:(e,t,r)=>{"use strict";r.d(t,{w:()=>n});var s=r(71615);function n(){let e=(0,s.headers)(),t=e.get("x-api-key"),r=e.get("x-bearer-token"),n=e.get("x-url"),i=e.get("x-next-url-host"),o=e.get("x-next-url-href"),a=e.get("x-next-url-port"),u=e.get("x-next-url-hostname"),c=e.get("x-next-url-pathname"),l=e.get("x-next-url-search"),p=e.get("x-next-url-protocol"),d=e.get("x-next-url-username"),f=e.get("x-next-url-locale"),y=e.get("x-next-url-origin"),g=e.get("x-geo-city"),m=e.get("x-geo-country");return{apiKey:t,bearerToken:r,url:n||"",host:i||"",href:o||"",port:a||"",hostname:u||"",pathname:c||"",search:l||"",protocol:p||"",username:d||"",locale:f||"",origin:y||"",city:g||"",country:m||"",region:e.get("x-geo-region")||"",latitude:e.get("x-geo-latitude")||"",longitude:e.get("x-geo-longitude")||""}}},88317:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(55802).io)(process.env.NEXT_PUBLIC_APP_URL)},49530:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var s={};r.r(s),r.d(s,{exclude:()=>q,extract:()=>m,parse:()=>x,parseUrl:()=>b,pick:()=>j,stringify:()=>h,stringifyUrl:()=>v});let n="%[a-f0-9]{2}",i=RegExp("("+n+")|([^%]+?)","gi"),o=RegExp("("+n+")+","gi");function a(e,t){if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];let r=e.indexOf(t);return -1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}let u=e=>null==e,c=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),l=Symbol("encodeFragmentIdentifier");function p(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function d(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function f(e,t){return t.decode?function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){let t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let t=e.match(i)||[];for(let r=1;r<t.length;r++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch{}if(1===t.length)return t;r=r||1;let s=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],e(s),e(n))})(t,r).join("")).match(i)||[];return e}}(r[0]);e!==r[0]&&(t[r[0]]=e)}r=o.exec(e)}for(let r of(t["%C2"]="�",Object.keys(t)))e=e.replace(RegExp(r,"g"),t[r]);return e}(e)}}(e):e}function y(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function m(e){let t=(e=y(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function x(e,t){p((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,s)=>{if(t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!t){s[e]=r;return}void 0===s[e]&&(s[e]={}),s[e][t[1]]=r};case"bracket":return(e,r,s)=>{if(t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!t){s[e]=r;return}if(void 0===s[e]){s[e]=[r];return}s[e]=[...s[e],r]};case"colon-list-separator":return(e,r,s)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){s[e]=r;return}if(void 0===s[e]){s[e]=[r];return}s[e]=[...s[e],r]};case"comma":case"separator":return(t,r,s)=>{let n="string"==typeof r&&r.includes(e.arrayFormatSeparator),i="string"==typeof r&&!n&&f(r,e).includes(e.arrayFormatSeparator);r=i?f(r,e):r;let o=n||i?r.split(e.arrayFormatSeparator).map(t=>f(t,e)):null===r?r:f(r,e);s[t]=o};case"bracket-separator":return(t,r,s)=>{let n=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!n){s[t]=r?f(r,e):r;return}let i=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>f(t,e));if(void 0===s[t]){s[t]=i;return}s[t]=[...s[t],...i]};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[...[r[e]].flat(),t]}}}(t),s=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return s;for(let n of e.split("&")){if(""===n)continue;let e=t.decode?n.replaceAll("+"," "):n,[i,o]=a(e,"=");void 0===i&&(i=e),o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:f(o,t),r(f(i,t),o,s)}for(let[e,r]of Object.entries(s))if("object"==typeof r&&null!==r)for(let[e,s]of Object.entries(r))r[e]=g(s,t);else s[e]=g(r,t);return!1===t.sort?s:(!0===t.sort?Object.keys(s).sort():Object.keys(s).sort(t.sort)).reduce((e,t)=>{let r=s[t];return e[t]=r&&"object"==typeof r&&!Array.isArray(r)?function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):r,e},Object.create(null))}function h(e,t){if(!e)return"";p((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);let r=r=>t.skipNull&&u(e[r])||t.skipEmptyString&&""===e[r],s=function(e){switch(e.arrayFormat){case"index":return t=>(r,s)=>{let n=r.length;return void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?r:null===s?[...r,[d(t,e),"[",n,"]"].join("")]:[...r,[d(t,e),"[",d(n,e),"]=",d(s,e)].join("")]};case"bracket":return t=>(r,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?r:null===s?[...r,[d(t,e),"[]"].join("")]:[...r,[d(t,e),"[]=",d(s,e)].join("")];case"colon-list-separator":return t=>(r,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?r:null===s?[...r,[d(t,e),":list="].join("")]:[...r,[d(t,e),":list=",d(s,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(s,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?s:(n=null===n?"":n,0===s.length)?[[d(r,e),t,d(n,e)].join("")]:[[s,d(n,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?r:null===s?[...r,d(t,e)]:[...r,[d(t,e),"=",d(s,e)].join("")]}}(t),n={};for(let[t,s]of Object.entries(e))r(t)||(n[t]=s);let i=Object.keys(n);return!1!==t.sort&&i.sort(t.sort),i.map(r=>{let n=e[r];return void 0===n?"":null===n?d(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?d(r,t)+"[]":n.reduce(s(r),[]).join("&"):d(r,t)+"="+d(n,t)}).filter(e=>e.length>0).join("&")}function b(e,t){t={decode:!0,...t};let[r,s]=a(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:x(m(e),t),...t&&t.parseFragmentIdentifier&&s?{fragmentIdentifier:f(s,t)}:{}}}function v(e,t){t={encode:!0,strict:!0,[l]:!0,...t};let r=y(e.url).split("?")[0]||"",s=h({...x(m(e.url),{sort:!1}),...e.query},t);s&&=`?${s}`;let n=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);if("string"==typeof e.fragmentIdentifier){let s=new URL(r);s.hash=e.fragmentIdentifier,n=t[l]?s.hash:`#${e.fragmentIdentifier}`}return`${r}${s}${n}`}function j(e,t,r){let{url:s,query:n,fragmentIdentifier:i}=b(e,r={parseFragmentIdentifier:!0,[l]:!1,...r});return v({url:s,query:function(e,t){let r={};if(Array.isArray(t))for(let s of t){let t=Object.getOwnPropertyDescriptor(e,s);t?.enumerable&&Object.defineProperty(r,s,t)}else for(let s of Reflect.ownKeys(e)){let n=Object.getOwnPropertyDescriptor(e,s);if(n.enumerable){let i=e[s];t(s,i,e)&&Object.defineProperty(r,s,n)}}return r}(n,t),fragmentIdentifier:i},r)}function q(e,t,r){return j(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}let k=s}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1633,1381,1744,3788,1490,5059,9092,5802,9712,413,6267,3269,5262],()=>r(17347));module.exports=s})();
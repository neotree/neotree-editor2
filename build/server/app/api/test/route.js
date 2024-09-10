"use strict";(()=>{var e={};e.id=2329,e.ids=[2329],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},57147:e=>{e.exports=require("fs")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},4074:e=>{e.exports=require("perf_hooks")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},12455:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>g,patchFetch:()=>h,requestAsyncStorage:()=>d,routeModule:()=>f,serverHooks:()=>y,staticGenerationAsyncStorage:()=>m});var a={};t.r(a),t.d(a,{GET:()=>p});var n=t(49303),o=t(88716),i=t(60670),s=t(87070),l=t(49530),u=t(57435),c=t(47625);async function p(e){try{let r=l.Z.parse(e.nextUrl.searchParams.toString()),t={};if(r.email){let e=await (0,c.IQ)(r.email);t.user={userId:e?.userId,id:e?.id}}return s.NextResponse.json({status:"ok",data:t})}catch(e){return u.Z.error("[GET] /api/test",e),s.NextResponse.json({errors:[e.message||"Internal Error"]},{status:500})}}let f=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/test/route",pathname:"/api/test",filename:"route",bundlePath:"app/api/test/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/test/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:d,staticGenerationAsyncStorage:m,serverHooks:y}=f,g="/api/test/route";function h(){return(0,i.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:m})}},47625:(e,r,t)=>{t.d(r,{C:()=>d,IQ:()=>f,Ko:()=>y,yT:()=>g});var a=t(57745),n=t(34149),o=t(60938),i=t(81445),s=t(30900),l=t(10413),u=t(57418),c=t(41502),p=t(57435);async function f(e){let r=s.Z(e)?(0,a.eq)(u.users.userId,e):(0,a.eq)(u.users.email,e),t=await l.Z.query.users.findFirst({where:(0,a.xD)(r,(0,a.Ft)(u.users.deletedAt)),columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0,password:!0}});return{...t,isActive:!!t?.password}}async function d(e){let r=s.Z(e)?(0,a.eq)(u.users.userId,e):(0,a.eq)(u.users.email,e);return await l.Z.query.users.findFirst({where:(0,a.xD)(r,(0,a.Ft)(u.users.deletedAt))})}async function m({limit:e,roles:r,page:t=1,userIds:s,status:p,searchValue:f}){t=Math.max(0,t);let d=[(0,a.Ft)(u.users.deletedAt)];if(s?.length&&d.push((0,a.d3)(u.users.userId,s)),r?.length&&d.push((0,a.d3)(u.users.role,r)),"active"===p&&d.push((0,a.K0)(u.users.activationDate)),"inactive"===p&&d.push((0,a.Ft)(u.users.activationDate)),f=`${f||""}`.trim()){let e=["%",f,"%"].join("");d.push((0,n.i6)`(LOWER(users.email) like LOWER(${e}) OR LOWER(users.display_name) like LOWER(${e}) OR LOWER(users.first_name) like LOWER(${e}) OR LOWER(users.last_name) like LOWER(${e}))`)}let m=l.Z.select({count:(0,o.QX)()}).from(u.users);d.length&&m.where((0,a.xD)(...d));let[{count:y}]=await m.execute(),g=1;y&&(t=Math.min(t,g=(0,c.x)(e)?1:Math.ceil(y/e)));let h=(0,c.x)(e)?void 0:Math.max(0,(t-1)*e),x=await l.Z.query.users.findMany({where:d.length?(0,a.xD)(...d):void 0,limit:(0,c.x)(e)?void 0:e,orderBy:(0,i.C)(u.users.id),offset:h,columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0}});return{page:t,limit:e,data:x,totalRows:y,totalPages:g,searchValue:f,error:void 0}}let y={page:1,limit:void 0,totalRows:0,totalPages:1,data:[],searchValue:void 0,error:void 0};async function g(e){let r=y;try{r=await m(e)}catch(e){p.Z.error("_getUsers ERROR",e),r.error=e.message}finally{return r}}},41502:(e,r,t)=>{t.d(r,{x:()=>a});function a(e){return null==e||""===e}},57435:(e,r,t)=>{t.d(r,{Z:()=>c});var a=t(87561),n=t.n(a),o=t(49411),i=t.n(o),s=t(51744),l=t.n(s);function u(e,...r){let t=l()(new Date).format("YYYYMMDD"),a=i().resolve(`logs/${t}`);n().existsSync(a)||n().mkdirSync(a);let o=`${new Date().toUTCString()} ${JSON.stringify([...r])}
`,s=`${a}/${e}`;n().appendFileSync(s,o)}let c={log:(...e)=>{u("logs.txt",...e)},error:(...e)=>{u("errors.txt",...e)},appError:(...e)=>{u("app_errors.txt",...e)}}},30900:(e,r,t)=>{t.d(r,{Z:()=>n});let a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i,n=function(e){return"string"==typeof e&&a.test(e)}},60938:(e,r,t)=>{t.d(r,{QX:()=>n});var a=t(34149);function n(e){return(0,a.i6)`count(${e||a.i6.raw("*")})`.mapWith(Number)}},49530:(e,r,t)=>{t.d(r,{Z:()=>F});var a={};t.r(a),t.d(a,{exclude:()=>k,extract:()=>g,parse:()=>h,parseUrl:()=>v,pick:()=>j,stringify:()=>x,stringifyUrl:()=>b});let n="%[a-f0-9]{2}",o=RegExp("("+n+")|([^%]+?)","gi"),i=RegExp("("+n+")+","gi");function s(e,r){if(!("string"==typeof e&&"string"==typeof r))throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===r)return[];let t=e.indexOf(r);return -1===t?[]:[e.slice(0,t),e.slice(t+r.length)]}let l=e=>null==e,u=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),c=Symbol("encodeFragmentIdentifier");function p(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function f(e,r){return r.encode?r.strict?u(e):encodeURIComponent(e):e}function d(e,r){return r.decode?function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){let r={"%FE%FF":"��","%FF%FE":"��"},t=i.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let r=e.match(o)||[];for(let t=1;t<r.length;t++)r=(e=(function e(r,t){try{return[decodeURIComponent(r.join(""))]}catch{}if(1===r.length)return r;t=t||1;let a=r.slice(0,t),n=r.slice(t);return Array.prototype.concat.call([],e(a),e(n))})(r,t).join("")).match(o)||[];return e}}(t[0]);e!==t[0]&&(r[t[0]]=e)}t=i.exec(e)}for(let t of(r["%C2"]="�",Object.keys(r)))e=e.replace(RegExp(t,"g"),r[t]);return e}(e)}}(e):e}function m(e){let r=e.indexOf("#");return -1!==r&&(e=e.slice(0,r)),e}function y(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):r.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function g(e){let r=(e=m(e)).indexOf("?");return -1===r?"":e.slice(r+1)}function h(e,r){p((r={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...r}).arrayFormatSeparator);let t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,a)=>{if(r=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!r){a[e]=t;return}void 0===a[e]&&(a[e]={}),a[e][r[1]]=t};case"bracket":return(e,t,a)=>{if(r=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!r){a[e]=t;return}if(void 0===a[e]){a[e]=[t];return}a[e]=[...a[e],t]};case"colon-list-separator":return(e,t,a)=>{if(r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!r){a[e]=t;return}if(void 0===a[e]){a[e]=[t];return}a[e]=[...a[e],t]};case"comma":case"separator":return(r,t,a)=>{let n="string"==typeof t&&t.includes(e.arrayFormatSeparator),o="string"==typeof t&&!n&&d(t,e).includes(e.arrayFormatSeparator);t=o?d(t,e):t;let i=n||o?t.split(e.arrayFormatSeparator).map(r=>d(r,e)):null===t?t:d(t,e);a[r]=i};case"bracket-separator":return(r,t,a)=>{let n=/(\[])$/.test(r);if(r=r.replace(/\[]$/,""),!n){a[r]=t?d(t,e):t;return}let o=null===t?[]:t.split(e.arrayFormatSeparator).map(r=>d(r,e));if(void 0===a[r]){a[r]=o;return}a[r]=[...a[r],...o]};default:return(e,r,t)=>{if(void 0===t[e]){t[e]=r;return}t[e]=[...[t[e]].flat(),r]}}}(r),a=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return a;for(let n of e.split("&")){if(""===n)continue;let e=r.decode?n.replaceAll("+"," "):n,[o,i]=s(e,"=");void 0===o&&(o=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?i:d(i,r),t(d(o,r),i,a)}for(let[e,t]of Object.entries(a))if("object"==typeof t&&null!==t)for(let[e,a]of Object.entries(t))t[e]=y(a,r);else a[e]=y(t,r);return!1===r.sort?a:(!0===r.sort?Object.keys(a).sort():Object.keys(a).sort(r.sort)).reduce((e,r)=>{let t=a[r];return e[r]=t&&"object"==typeof t&&!Array.isArray(t)?function e(r){return Array.isArray(r)?r.sort():"object"==typeof r?e(Object.keys(r)).sort((e,r)=>Number(e)-Number(r)).map(e=>r[e]):r}(t):t,e},Object.create(null))}function x(e,r){if(!e)return"";p((r={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...r}).arrayFormatSeparator);let t=t=>r.skipNull&&l(e[t])||r.skipEmptyString&&""===e[t],a=function(e){switch(e.arrayFormat){case"index":return r=>(t,a)=>{let n=t.length;return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?t:null===a?[...t,[f(r,e),"[",n,"]"].join("")]:[...t,[f(r,e),"[",f(n,e),"]=",f(a,e)].join("")]};case"bracket":return r=>(t,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?t:null===a?[...t,[f(r,e),"[]"].join("")]:[...t,[f(r,e),"[]=",f(a,e)].join("")];case"colon-list-separator":return r=>(t,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?t:null===a?[...t,[f(r,e),":list="].join("")]:[...t,[f(r,e),":list=",f(a,e)].join("")];case"comma":case"separator":case"bracket-separator":{let r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(a,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?a:(n=null===n?"":n,0===a.length)?[[f(t,e),r,f(n,e)].join("")]:[[a,f(n,e)].join(e.arrayFormatSeparator)]}default:return r=>(t,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?t:null===a?[...t,f(r,e)]:[...t,[f(r,e),"=",f(a,e)].join("")]}}(r),n={};for(let[r,a]of Object.entries(e))t(r)||(n[r]=a);let o=Object.keys(n);return!1!==r.sort&&o.sort(r.sort),o.map(t=>{let n=e[t];return void 0===n?"":null===n?f(t,r):Array.isArray(n)?0===n.length&&"bracket-separator"===r.arrayFormat?f(t,r)+"[]":n.reduce(a(t),[]).join("&"):f(t,r)+"="+f(n,r)}).filter(e=>e.length>0).join("&")}function v(e,r){r={decode:!0,...r};let[t,a]=s(e,"#");return void 0===t&&(t=e),{url:t?.split("?")?.[0]??"",query:h(g(e),r),...r&&r.parseFragmentIdentifier&&a?{fragmentIdentifier:d(a,r)}:{}}}function b(e,r){r={encode:!0,strict:!0,[c]:!0,...r};let t=m(e.url).split("?")[0]||"",a=x({...h(g(e.url),{sort:!1}),...e.query},r);a&&=`?${a}`;let n=function(e){let r="",t=e.indexOf("#");return -1!==t&&(r=e.slice(t)),r}(e.url);if("string"==typeof e.fragmentIdentifier){let a=new URL(t);a.hash=e.fragmentIdentifier,n=r[c]?a.hash:`#${e.fragmentIdentifier}`}return`${t}${a}${n}`}function j(e,r,t){let{url:a,query:n,fragmentIdentifier:o}=v(e,t={parseFragmentIdentifier:!0,[c]:!1,...t});return b({url:a,query:function(e,r){let t={};if(Array.isArray(r))for(let a of r){let r=Object.getOwnPropertyDescriptor(e,a);r?.enumerable&&Object.defineProperty(t,a,r)}else for(let a of Reflect.ownKeys(e)){let n=Object.getOwnPropertyDescriptor(e,a);if(n.enumerable){let o=e[a];r(a,o,e)&&Object.defineProperty(t,a,n)}}return t}(n,r),fragmentIdentifier:o},t)}function k(e,r,t){return j(e,Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t),t)}let F=a}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[5822,1744,5059,413],()=>t(12455));module.exports=a})();
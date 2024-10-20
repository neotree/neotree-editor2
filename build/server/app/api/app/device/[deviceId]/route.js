(()=>{var e={};e.id=9666,e.ids=[9666],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58359:()=>{},93739:()=>{},51667:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>R,patchFetch:()=>Z,requestAsyncStorage:()=>I,routeModule:()=>D,serverHooks:()=>b,staticGenerationAsyncStorage:()=>K});var s={};r.r(s),r.d(s,{POST:()=>w});var i=r(49303),n=r(88716),a=r(60670),o=r(87070),c=r(41482),l=r.n(c),u=r(57435),d=r(72761),f=r(25060),p=r(18496),g=r(17137),y=r(81339),m=r(55249),h=r(75262),v=r(8328);let x={newData:!1,deviceId:"",deviceHash:"",deviceScriptsCount:0,dataVersion:0,lastPublishDate:null,latestChangesDate:null,scripts:[],configKeys:[]};async function w(e,{params:{deviceId:t}}){let r={...x,deviceId:t};try{if(u.Z.log(`[POST] /api/app/device/${t}`),!(await (0,d.$)()).yes)return o.NextResponse.json({errors:["Unauthorised"],data:r});let{bearerToken:s}=(0,v.w)(),i=!1;s&&(i=!!await new Promise((e,t)=>{l().verify(s,process.env.JWT_SECRET||"",(r,s)=>{r?t(r):s?e({email:s.email,userId:s.userId}):e(null)})}));let{lastSyncDate:n,dataVersion:a,forceSync:c,hospitalId:x,sessionsCount:w}=await e.json(),D=await (0,y.$s)({deviceId:t});if(D?.errors?.length)return o.NextResponse.json({errors:D.errors,data:r});let I=D.data;I||(I=(await (0,m.w)({returnSaved:!0,data:[{deviceId:t,details:{scripts_count:0}}]})).inserted[0]),r.deviceHash=I?.deviceHash||"",r.deviceScriptsCount=I?.details?.scripts_count;let K=await (0,p.y)(),b={...K.data};if(K?.errors?.length)return o.NextResponse.json({errors:K.errors,data:r});r.lastPublishDate=b.lastPublishDate,r.dataVersion=b.dataVersion;let R=await (0,f.Nb)();if(R?.errors?.length)return o.NextResponse.json({errors:R.errors,data:r});let Z=R.data.latestChangesDate,q=n?new Date(n):null;if(r.latestChangesDate=Z,x&&i&&(c||!n||b.dataVersion!==a||Z&&q&&Z.getTime()>q.getTime())){let e=await (0,g.aP)({returnDraftsIfExist:!0}),t=await (0,h.getScriptsWithItems)({hospitalIds:[x],returnDraftsIfExist:!0});r.configKeys=e.data,r.scripts=t.data,r.newData=!0}return o.NextResponse.json({data:r})}catch(e){return u.Z.error(`[POST_ERROR] /api/app/device/${t}`,e.message),o.NextResponse.json({errors:["Internal Error"],responseData:r})}}let D=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/app/device/[deviceId]/route",pathname:"/api/app/device/[deviceId]",filename:"route",bundlePath:"app/api/app/device/[deviceId]/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/app/device/[deviceId]/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:I,staticGenerationAsyncStorage:K,serverHooks:b}=D,R="/api/app/device/[deviceId]/route";function Z(){return(0,a.patchFetch)({serverHooks:b,staticGenerationAsyncStorage:K})}},55249:(e,t,r)=>{"use strict";r.d(t,{w:()=>l});var s=r(57745),i=r(57435),n=r(10413),a=r(57418),o=r(88317),c=r(81339);async function l({data:e,returnSaved:t}){let r={success:!1,inserted:[]};try{let i=e.map(e=>e.deviceId).filter(e=>e),o=i.length?await n.Z.query.devices.findMany({where:(0,s.d3)(a.devices.deviceId,i),columns:{deviceId:!0,deviceHash:!0,id:!0}}):[],l=e.filter(e=>o.map(e=>e.deviceId).includes(e.deviceId)),u=e.filter(e=>!l.map(e=>e.deviceId).includes(e.deviceId)),d=[];for(let{deviceId:e,...i}of l)try{let o=n.Z.update(a.devices).set(i).where((0,s.or)((0,s.eq)(a.devices.deviceId,e)));if(t){let e=await o.returning();r.inserted=e.map(e=>({...e,details:e.details}))}else await o.execute()}catch(e){d.push(e.message)}if(u.length){let e=[];for(let t of u){let r=await (0,c.pb)(t.deviceId);e.push({...t,deviceHash:r})}let s=n.Z.insert(a.devices).values(e);if(t){let e=await s.returning();r.inserted=e.map(e=>({...e,details:e.details}))}else await s.execute()}d.length?r.errors=d:r.success=!0}catch(e){r.success=!1,r.errors=[e.message],i.Z.error("_saveDevices ERROR",e.message)}finally{return r?.errors?.length||o.Z.emit("data_changed","save_devices"),r}}},17137:(e,t,r)=>{"use strict";r.d(t,{G$:()=>p,ZV:()=>f,SL:()=>u,aP:()=>l});var s=r(57745),i=r(30900),n=r(9576),a=r(10413),o=r(57418),c=r(57435);async function l(e){try{let{configKeysIds:t,returnDraftsIfExist:r}={...e},c=t||[],l=c?.length?(0,s.d3)(o.configKeysDrafts.configKeyDraftId,c.map(e=>i.Z(e)?e:n.Z())):void 0,u=[...l?[l]:[]],d=r?await a.Z.query.configKeysDrafts.findMany({where:(0,s.xD)(...u)}):[];c=c.filter(e=>!d.map(e=>e.configKeyDraftId).includes(e));let f=d.length?(0,s.Nl)(o.configKeys.configKeyId,d.map(e=>e.configKeyDraftId)):void 0,p=c?.length?(0,s.d3)(o.configKeys.configKeyId,c.filter(e=>i.Z(e))):void 0,g=c?.length?(0,s.d3)(o.configKeys.oldConfigKeyId,c.filter(e=>!i.Z(e))):void 0,y=[(0,s.Ft)(o.configKeys.deletedAt),(0,s.Ft)(o.pendingDeletion),...p&&g?[(0,s.or)(p,g)]:[],f],m=(await a.Z.select({configKey:o.configKeys,pendingDeletion:o.pendingDeletion}).from(o.configKeys).leftJoin(o.pendingDeletion,(0,s.eq)(o.pendingDeletion.configKeyId,o.configKeys.configKeyId)).where(y.length?(0,s.xD)(...y):void 0)).map(e=>e.configKey),h=m.length?await a.Z.query.pendingDeletion.findMany({where:(0,s.d3)(o.pendingDeletion.configKeyId,m.map(e=>e.configKeyId)),columns:{configKeyId:!0}}):[];return{data:[...m.map(e=>({...e,isDraft:!1,isDeleted:!1})),...d.map(e=>({...e.data,isDraft:!0,isDeleted:!1}))].sort((e,t)=>e.position-t.position).filter(e=>!h.map(e=>e.configKeyId).includes(e.configKeyId))}}catch(e){return c.Z.error("_getConfigKeys ERROR",e.message),{data:[],errors:[e.message]}}}async function u(e){let{configKeyId:t,returnDraftIfExists:r}={...e};try{if(!t)throw Error("Missing configKeyId");let e=i.Z(t)?(0,s.eq)(o.configKeys.configKeyId,t):void 0,n=i.Z(t)?void 0:(0,s.eq)(o.configKeys.oldConfigKeyId,t),c=e?(0,s.eq)(o.configKeysDrafts.configKeyDraftId,t):void 0,l=r&&c?await a.Z.query.configKeysDrafts.findFirst({where:e}):void 0,u=l?{...l.data,isDraft:!1,isDeleted:!1}:null;if(u)return{data:u};let d=await a.Z.query.configKeys.findFirst({where:(0,s.xD)((0,s.Ft)(o.configKeys.deletedAt),e||n),with:{draft:!0}});l=r?d?.draft:void 0;let f=l?.data||d;if(!(u=f?{...f,isDraft:!1,isDeleted:!1}:null))return{data:null};return{data:u}}catch(e){return c.Z.error("_getConfigKey ERROR",e.message),{errors:[e.message]}}}var d=r(60938);let f={allPublished:0,publishedWithDrafts:0,allDrafts:0,newDrafts:0,pendingDeletion:0};async function p(){try{let[{count:e}]=await a.Z.select({count:(0,d.QX)()}).from(o.configKeysDrafts),[{count:t}]=await a.Z.select({count:(0,d.QX)()}).from(o.configKeysDrafts).where((0,s.Ft)(o.configKeysDrafts.configKeyId)),[{count:r}]=await a.Z.select({count:(0,d.QX)()}).from(o.configKeysDrafts).where((0,s.K0)(o.configKeysDrafts.configKeyId)),[{count:i}]=await a.Z.select({count:(0,d.QX)()}).from(o.pendingDeletion).where((0,s.K0)(o.pendingDeletion.configKeyId)),[{count:n}]=await a.Z.select({count:(0,d.QX)()}).from(o.configKeys);return{data:{allPublished:n,publishedWithDrafts:r,allDrafts:e,newDrafts:t,pendingDeletion:i}}}catch(e){return c.Z.error("_getConfigKeys ERROR",e.message),{data:f,errors:[e.message]}}}},81339:(e,t,r)=>{"use strict";r.d(t,{$s:()=>d,pb:()=>u});var s=r(60938),i=r(57745),n=r(10413),a=r(57418),o=r(57435);function c(e="",t=4){e=`${e||""}`.replace(/[\W_]+/g,"");let r="";for(let s=0;s<t;s++)r+=e.charAt(Math.floor(Math.random()*e.length));return r.toUpperCase()}async function l(e){let[{count:t}]=await n.Z.select({count:(0,s.QX)()}).from(a.devices).where((0,i.eq)(a.devices.deviceHash,e));return!t}async function u(e,t=4){let r=c(e,t);return await l(r)&&(r=await c(e,t)),r}async function d(e){try{let{deviceHash:t,deviceId:r,id:s}={...e},o=[...t?[(0,i.eq)(a.devices.deviceHash,t)]:[],...r?[(0,i.eq)(a.devices.deviceId,r)]:[],...s?[(0,i.eq)(a.devices.id,s)]:[]],c=o.length?await n.Z.query.devices.findFirst({where:(0,i.or)(...o)}):null;return{data:c?{...c,details:c.details}:null}}catch(e){return o.Z.error("_getDevices ERROR",e.message),{data:null,errors:[e.message]}}}},18496:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});var s=r(10413),i=r(57435);async function n(){try{return{data:await s.Z.query.editorInfo.findFirst()||null}}catch(e){return i.Z.error("_getEditorInfo ERROR",e.message),{data:null,errors:[e.message]}}}},25060:(e,t,r)=>{"use strict";r.d(t,{Yi:()=>f,Ur:()=>u,Nb:()=>l,Ic:()=>d});var s=r(60938),i=r(57435),n=r(57418),a=r(10413),o=r(81445);let c={configKeys:null,diagnoses:null,screens:null,scripts:null,configKeysDrafts:null,diagnosesDrafts:null,screensDrafts:null,scriptsDrafts:null,pendingDeletion:null,lastPublished:null,latestChangesDate:null};async function l(){try{let{lastPublishDate:e}={...await a.Z.query.editorInfo.findFirst()},t=await a.Z.select({configKeysDrafts:n.configKeysDrafts.updatedAt}).from(n.configKeysDrafts).orderBy((0,o.C)(n.configKeysDrafts.updatedAt)).limit(1),r=await a.Z.select({diagnosesDrafts:n.diagnosesDrafts.updatedAt}).from(n.diagnosesDrafts).orderBy((0,o.C)(n.diagnosesDrafts.updatedAt)).limit(1),s=await a.Z.select({screensDrafts:n.screensDrafts.updatedAt}).from(n.screensDrafts).orderBy((0,o.C)(n.screensDrafts.updatedAt)).limit(1),i=await a.Z.select({scriptsDrafts:n.scriptsDrafts.updatedAt}).from(n.scriptsDrafts).orderBy((0,o.C)(n.scriptsDrafts.updatedAt)).limit(1),l=await a.Z.select({configKeys:n.configKeys.updatedAt}).from(n.configKeys).orderBy((0,o.C)(n.configKeys.updatedAt)).limit(1),u=await a.Z.select({diagnoses:n.diagnoses.updatedAt}).from(n.diagnoses).orderBy((0,o.C)(n.diagnoses.updatedAt)).limit(1),d=await a.Z.select({screens:n.screens.updatedAt}).from(n.screens).orderBy((0,o.C)(n.screens.updatedAt)).limit(1),f=await a.Z.select({scripts:n.scripts.updatedAt}).from(n.scripts).orderBy((0,o.C)(n.scripts.updatedAt)).limit(1),p=await a.Z.select({pendingDeletion:n.pendingDeletion.createdAt}).from(n.pendingDeletion).orderBy((0,o.C)(n.pendingDeletion.createdAt)).limit(1),g={...c,...t[0],...r[0],...s[0],...i[0],...l[0],...u[0],...d[0],...f[0],...p[0],lastPublished:e||null},y=[e?new Date(e).getTime():null,...Object.values(g).filter(e=>e).map(e=>new Date(e).getTime())].filter(e=>e),m=e;return y.length&&(m=new Date(Math.max(...y))),{data:{...g,latestChangesDate:m}}}catch(e){return i.Z.error("_getDatesWhenUpdatesWereMade ERROR",e.message),{data:c,errors:[e.message]}}}async function u(){try{let e=await a.Z.select({count:(0,s.QX)()}).from(n.pendingDeletion);return{total:e[0]?.count||0}}catch(e){return i.Z.error("_countPendingDeletion ERROR",e.message),{total:0,errors:[e.message]}}}let d={scripts:0,screens:0,diagnoses:0,configKeys:0,total:0};async function f(){let e={...d};try{let t=await a.Z.select({count:(0,s.QX)()}).from(n.scriptsDrafts);e.scripts=t[0]?.count||0;let r=await a.Z.select({count:(0,s.QX)()}).from(n.screensDrafts);e.screens=r[0]?.count||0;let i=await a.Z.select({count:(0,s.QX)()}).from(n.diagnosesDrafts);e.diagnoses=i[0]?.count||0;let o=await a.Z.select({count:(0,s.QX)()}).from(n.configKeysDrafts);return e.configKeys=o[0]?.count||0,e.total=e.configKeys+e.diagnoses+e.screens+e.scripts,{...e}}catch(t){return i.Z.error("_countDrafts ERROR",t.message),{...e,errors:[t.message]}}}},20123:(e,t,r)=>{"use strict";r.d(t,{Ng:()=>u,_U:()=>g,QF:()=>l,YF:()=>p});var s=r(57745),i=r(81445),n=r(30900),a=r(10413),o=r(57418),c=r(57435);async function l(e){try{let{sitesIds:t,types:r=[],envs:c=[]}={...e},l=t||[],u=l?.length?(0,s.d3)(o.sites.siteId,l.filter(e=>n.Z(e))):void 0,d=[(0,s.Ft)(o.sites.deletedAt),u,r.length?(0,s.d3)(o.sites.type,r):void 0,c.length?(0,s.d3)(o.sites.env,c):void 0];return{data:(await a.Z.select({site:o.sites}).from(o.sites).where(d.length?(0,s.xD)(...d):void 0).orderBy((0,i.d)(o.sites.id))).map(e=>e.site)}}catch(e){return c.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function u(e){let{siteId:t}={...e};try{if(!t)throw Error("Missing siteId");let e=n.Z(t)?(0,s.eq)(o.sites.siteId,t):void 0;return{data:await a.Z.query.sites.findFirst({where:(0,s.xD)((0,s.Ft)(o.sites.deletedAt),e)})}}catch(e){return c.Z.error("_getSite ERROR",e.message),{errors:[e.message]}}}var d=r(8328);let f=()=>{let e=(0,d.w)();return{webeditor:{name:"Local editor",siteId:"fb76af5a-bf86-4050-821e-44f1bf316bf4",link:e.origin,type:"webeditor",apiKey:"localhost"},nodeapi:{name:"Local editor",siteId:"5cb4aa54-2cfe-49e2-9cdd-392a9b8c124e",link:e.origin,type:"webeditor",apiKey:"localhost"}}};async function p(e){try{let{types:t=[]}={...e},r=[...t.length?[(0,s.d3)(o.sites.type,t)]:[]],i=await a.Z.query.sites.findMany({where:r.length?(0,s.xD)(...r):void 0,columns:{siteId:!0,type:!0,name:!0,link:!0}});return f(),{data:[...i]}}catch(e){return c.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function g(e){try{let t=await a.Z.query.sites.findFirst({where:(0,s.eq)(o.sites.siteId,e),columns:{apiKey:!0,link:!0}}),r=t||null;if(!t){let t=f();Object.values(t).forEach(t=>{t.siteId===e&&(r={link:t.link,apiKey:t.apiKey})})}return{data:r}}catch(e){return c.Z.error("_getSiteApiKey ERROR",e.message),{data:null,errors:[e.message]}}}},8328:(e,t,r)=>{"use strict";r.d(t,{w:()=>i});var s=r(71615);function i(){let e=(0,s.headers)(),t=e.get("x-api-key"),r=e.get("x-bearer-token"),i=e.get("x-url"),n=e.get("x-next-url-host"),a=e.get("x-next-url-href"),o=e.get("x-next-url-port"),c=e.get("x-next-url-hostname"),l=e.get("x-next-url-pathname"),u=e.get("x-next-url-search"),d=e.get("x-next-url-protocol"),f=e.get("x-next-url-username"),p=e.get("x-next-url-locale"),g=e.get("x-next-url-origin"),y=e.get("x-geo-city"),m=e.get("x-geo-country");return{apiKey:t,bearerToken:r,url:i||"",host:n||"",href:a||"",port:o||"",hostname:c||"",pathname:l||"",search:u||"",protocol:d||"",username:f||"",locale:p||"",origin:g||"",city:y||"",country:m||"",region:e.get("x-geo-region")||"",latitude:e.get("x-geo-latitude")||"",longitude:e.get("x-geo-longitude")||""}}},88317:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(55802).io)(process.env.NEXT_PUBLIC_APP_URL)},49530:(e,t,r)=>{"use strict";r.d(t,{Z:()=>K});var s={};r.r(s),r.d(s,{exclude:()=>I,extract:()=>m,parse:()=>h,parseUrl:()=>x,pick:()=>D,stringify:()=>v,stringifyUrl:()=>w});let i="%[a-f0-9]{2}",n=RegExp("("+i+")|([^%]+?)","gi"),a=RegExp("("+i+")+","gi");function o(e,t){if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];let r=e.indexOf(t);return -1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}let c=e=>null==e,l=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),u=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function f(e,t){return t.encode?t.strict?l(e):encodeURIComponent(e):e}function p(e,t){return t.decode?function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){let t={"%FE%FF":"��","%FF%FE":"��"},r=a.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let t=e.match(n)||[];for(let r=1;r<t.length;r++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch{}if(1===t.length)return t;r=r||1;let s=t.slice(0,r),i=t.slice(r);return Array.prototype.concat.call([],e(s),e(i))})(t,r).join("")).match(n)||[];return e}}(r[0]);e!==r[0]&&(t[r[0]]=e)}r=a.exec(e)}for(let r of(t["%C2"]="�",Object.keys(t)))e=e.replace(RegExp(r,"g"),t[r]);return e}(e)}}(e):e}function g(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function m(e){let t=(e=g(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function h(e,t){d((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,s)=>{if(t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!t){s[e]=r;return}void 0===s[e]&&(s[e]={}),s[e][t[1]]=r};case"bracket":return(e,r,s)=>{if(t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!t){s[e]=r;return}if(void 0===s[e]){s[e]=[r];return}s[e]=[...s[e],r]};case"colon-list-separator":return(e,r,s)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){s[e]=r;return}if(void 0===s[e]){s[e]=[r];return}s[e]=[...s[e],r]};case"comma":case"separator":return(t,r,s)=>{let i="string"==typeof r&&r.includes(e.arrayFormatSeparator),n="string"==typeof r&&!i&&p(r,e).includes(e.arrayFormatSeparator);r=n?p(r,e):r;let a=i||n?r.split(e.arrayFormatSeparator).map(t=>p(t,e)):null===r?r:p(r,e);s[t]=a};case"bracket-separator":return(t,r,s)=>{let i=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!i){s[t]=r?p(r,e):r;return}let n=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>p(t,e));if(void 0===s[t]){s[t]=n;return}s[t]=[...s[t],...n]};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[...[r[e]].flat(),t]}}}(t),s=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return s;for(let i of e.split("&")){if(""===i)continue;let e=t.decode?i.replaceAll("+"," "):i,[n,a]=o(e,"=");void 0===n&&(n=e),a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:p(a,t),r(p(n,t),a,s)}for(let[e,r]of Object.entries(s))if("object"==typeof r&&null!==r)for(let[e,s]of Object.entries(r))r[e]=y(s,t);else s[e]=y(r,t);return!1===t.sort?s:(!0===t.sort?Object.keys(s).sort():Object.keys(s).sort(t.sort)).reduce((e,t)=>{let r=s[t];return e[t]=r&&"object"==typeof r&&!Array.isArray(r)?function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):r,e},Object.create(null))}function v(e,t){if(!e)return"";d((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);let r=r=>t.skipNull&&c(e[r])||t.skipEmptyString&&""===e[r],s=function(e){switch(e.arrayFormat){case"index":return t=>(r,s)=>{let i=r.length;return void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?r:null===s?[...r,[f(t,e),"[",i,"]"].join("")]:[...r,[f(t,e),"[",f(i,e),"]=",f(s,e)].join("")]};case"bracket":return t=>(r,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?r:null===s?[...r,[f(t,e),"[]"].join("")]:[...r,[f(t,e),"[]=",f(s,e)].join("")];case"colon-list-separator":return t=>(r,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?r:null===s?[...r,[f(t,e),":list="].join("")]:[...r,[f(t,e),":list=",f(s,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(s,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?s:(i=null===i?"":i,0===s.length)?[[f(r,e),t,f(i,e)].join("")]:[[s,f(i,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?r:null===s?[...r,f(t,e)]:[...r,[f(t,e),"=",f(s,e)].join("")]}}(t),i={};for(let[t,s]of Object.entries(e))r(t)||(i[t]=s);let n=Object.keys(i);return!1!==t.sort&&n.sort(t.sort),n.map(r=>{let i=e[r];return void 0===i?"":null===i?f(r,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?f(r,t)+"[]":i.reduce(s(r),[]).join("&"):f(r,t)+"="+f(i,t)}).filter(e=>e.length>0).join("&")}function x(e,t){t={decode:!0,...t};let[r,s]=o(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:h(m(e),t),...t&&t.parseFragmentIdentifier&&s?{fragmentIdentifier:p(s,t)}:{}}}function w(e,t){t={encode:!0,strict:!0,[u]:!0,...t};let r=g(e.url).split("?")[0]||"",s=v({...h(m(e.url),{sort:!1}),...e.query},t);s&&=`?${s}`;let i=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);if("string"==typeof e.fragmentIdentifier){let s=new URL(r);s.hash=e.fragmentIdentifier,i=t[u]?s.hash:`#${e.fragmentIdentifier}`}return`${r}${s}${i}`}function D(e,t,r){let{url:s,query:i,fragmentIdentifier:n}=x(e,r={parseFragmentIdentifier:!0,[u]:!1,...r});return w({url:s,query:function(e,t){let r={};if(Array.isArray(t))for(let s of t){let t=Object.getOwnPropertyDescriptor(e,s);t?.enumerable&&Object.defineProperty(r,s,t)}else for(let s of Reflect.ownKeys(e)){let i=Object.getOwnPropertyDescriptor(e,s);if(i.enumerable){let n=e[s];t(s,n,e)&&Object.defineProperty(r,s,i)}}return r}(i,t),fragmentIdentifier:n},r)}function I(e,t,r){return D(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}let K=s}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1633,1381,1744,3788,1490,5059,9092,5802,9712,1482,413,6267,3269,5262],()=>r(51667));module.exports=s})();
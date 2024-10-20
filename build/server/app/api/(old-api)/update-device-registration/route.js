(()=>{var e={};e.id=5010,e.ids=[5010],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58359:()=>{},93739:()=>{},46682:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>f,requestAsyncStorage:()=>h,routeModule:()=>p,serverHooks:()=>y,staticGenerationAsyncStorage:()=>v});var s={};r.r(s),r.d(s,{POST:()=>d});var a=r(49303),i=r(88716),n=r(60670),u=r(87070),o=r(57435),c=r(72761),l=r(55249);async function d(e){try{if(!(await (0,c.$)()).yes)return u.NextResponse.json({errors:["Unauthorised"]});let t=await e.json();o.Z.log(`[POST]: ${e.url}`,t);let r=await (0,l.w)({data:[t],returnSaved:!0});if(r.errors?.length)return u.NextResponse.json({errors:r.errors});return u.NextResponse.json({device:r.inserted[0]})}catch(e){return o.Z.error("[POST] /api/update-device-registration",e.message),u.NextResponse.json({errors:["Internal Error"]})}}let p=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/(old-api)/update-device-registration/route",pathname:"/api/update-device-registration",filename:"route",bundlePath:"app/api/(old-api)/update-device-registration/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/(old-api)/update-device-registration/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:h,staticGenerationAsyncStorage:v,serverHooks:y}=p,m="/api/(old-api)/update-device-registration/route";function f(){return(0,n.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:v})}},40801:(e,t,r)=>{"use strict";r.r(t),r.d(t,{getAuthenticatedUser:()=>o,getAuthenticatedUserWithRoles:()=>c,getSession:()=>u});var s=r(24330);r(60166);var a=r(75571),i=r(56543),n=r(47625);async function u(){return await (0,a.getServerSession)(i.L)}async function o(){try{let e=await u();if(!e?.user?.email)return null;return await n.IQ(e.user.email)||null}catch(e){return null}}async function c(){try{let e=await o(),t=e?.role==="admin",r=e?.role==="super_user";return{isAdmin:t,isSuperUser:r,isDefaultUser:!t&&!r,authenticatedUser:e}}catch(e){return{isAdmin:!1,isSuperUser:!1,isDefaultUser:!1,user:null}}}(0,r(40618).h)([u,o,c]),(0,s.j)("3054c9aa3ede38673855ee3dff9f25ad492b7d73",u),(0,s.j)("576365f197acb2f10e29644ba43ca25aec52e8b7",o),(0,s.j)("103d82a5a607c9f7f049ac9bfe2bb62dc7128462",c)},72761:(e,t,r)=>{"use strict";r.d(t,{$:()=>v});var s=r(71615),a=r(57435),i=r(57745),n=r(10413),u=r(57418);async function o(e){try{let t=[(0,i.or)((0,i.Ft)(u.apiKeys.validUntil),(0,i.eg)(u.apiKeys.validUntil,new Date)),...e?.apiKeys?.length?[(0,i.d3)(u.apiKeys.apiKey,e.apiKeys)]:[],...e?.apiKeysIds?.length?[(0,i.d3)(u.apiKeys.apiKeyId,e.apiKeysIds)]:[]];return{data:await n.Z.query.apiKeys.findMany({where:t.length?(0,i.xD)(...t):void 0,columns:{apiKeyId:!0,apiKey:!0}})}}catch(e){return a.Z.error("_getApiKeys ERROR",e.message),{data:[],errors:[e.message]}}}async function c(e){try{let t=[(0,i.or)((0,i.Ft)(u.authClients.validUntil),(0,i.eg)(u.authClients.validUntil,new Date)),...e?.usersIds?.length?[(0,i.d3)(u.authClients.userId,e.usersIds)]:[],...e?.clientIds?.length?[(0,i.d3)(u.authClients.clientId,e.clientIds)]:[],...e?.clientTokens?.length?[(0,i.d3)(u.authClients.clientToken,e.clientTokens)]:[]];return{data:await n.Z.query.authClients.findMany({where:t.length?(0,i.xD)(...t):void 0,columns:{clientId:!0,clientToken:!0,userId:!0}})}}catch(e){return a.Z.error("_getAuthClients ERROR",e.message),{data:[],errors:[e.message]}}}async function l(e,t){let r=(0,s.headers)().get(e);return!!r&&t(r)}async function d(e,t){try{if(!t)return!1;let{data:r}=await c("token"===e?{clientTokens:[t]}:{clientIds:[t]});return!!r.length}catch(e){return a.Z.error("validateAuthClient ERROR:",e.message),!1}}async function p(e){try{if(!e)return!1;let{data:t}=await o({apiKeys:[e]});return!!t.length}catch(e){return a.Z.error("validateApiKey ERROR:",e.message),!1}}var h=r(40801);async function v(){try{let e=await l("x-api-key",p);e||(e=await l("x-auth-token",e=>d("token",e)));let t=null;return e||(e=!!(t=await (0,h.getAuthenticatedUser)())),{yes:e,user:t}}catch(e){return a.Z.error("isAuthenticated ERROR",e),{yes:!1,user:null}}}},55249:(e,t,r)=>{"use strict";r.d(t,{w:()=>c});var s=r(57745),a=r(57435),i=r(10413),n=r(57418),u=r(88317),o=r(81339);async function c({data:e,returnSaved:t}){let r={success:!1,inserted:[]};try{let a=e.map(e=>e.deviceId).filter(e=>e),u=a.length?await i.Z.query.devices.findMany({where:(0,s.d3)(n.devices.deviceId,a),columns:{deviceId:!0,deviceHash:!0,id:!0}}):[],c=e.filter(e=>u.map(e=>e.deviceId).includes(e.deviceId)),l=e.filter(e=>!c.map(e=>e.deviceId).includes(e.deviceId)),d=[];for(let{deviceId:e,...a}of c)try{let u=i.Z.update(n.devices).set(a).where((0,s.or)((0,s.eq)(n.devices.deviceId,e)));if(t){let e=await u.returning();r.inserted=e.map(e=>({...e,details:e.details}))}else await u.execute()}catch(e){d.push(e.message)}if(l.length){let e=[];for(let t of l){let r=await (0,o.pb)(t.deviceId);e.push({...t,deviceHash:r})}let s=i.Z.insert(n.devices).values(e);if(t){let e=await s.returning();r.inserted=e.map(e=>({...e,details:e.details}))}else await s.execute()}d.length?r.errors=d:r.success=!0}catch(e){r.success=!1,r.errors=[e.message],a.Z.error("_saveDevices ERROR",e.message)}finally{return r?.errors?.length||u.Z.emit("data_changed","save_devices"),r}}},81339:(e,t,r)=>{"use strict";r.d(t,{$s:()=>d,pb:()=>l});var s=r(60938),a=r(57745),i=r(10413),n=r(57418),u=r(57435);function o(e="",t=4){e=`${e||""}`.replace(/[\W_]+/g,"");let r="";for(let s=0;s<t;s++)r+=e.charAt(Math.floor(Math.random()*e.length));return r.toUpperCase()}async function c(e){let[{count:t}]=await i.Z.select({count:(0,s.QX)()}).from(n.devices).where((0,a.eq)(n.devices.deviceHash,e));return!t}async function l(e,t=4){let r=o(e,t);return await c(r)&&(r=await o(e,t)),r}async function d(e){try{let{deviceHash:t,deviceId:r,id:s}={...e},u=[...t?[(0,a.eq)(n.devices.deviceHash,t)]:[],...r?[(0,a.eq)(n.devices.deviceId,r)]:[],...s?[(0,a.eq)(n.devices.id,s)]:[]],o=u.length?await i.Z.query.devices.findFirst({where:(0,a.or)(...u)}):null;return{data:o?{...o,details:o.details}:null}}catch(e){return u.Z.error("_getDevices ERROR",e.message),{data:null,errors:[e.message]}}}},47625:(e,t,r)=>{"use strict";r.d(t,{C:()=>h,IQ:()=>p,Ko:()=>y,yT:()=>m});var s=r(57745),a=r(34149),i=r(60938),n=r(81445),u=r(30900),o=r(10413),c=r(57418),l=r(41502),d=r(57435);async function p(e){let t=u.Z(e)?(0,s.eq)(c.users.userId,e):(0,s.eq)(c.users.email,e),r=await o.Z.query.users.findFirst({where:(0,s.xD)(t,(0,s.Ft)(c.users.deletedAt)),columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0,password:!0}});return r?{...r,isActive:!!r?.password}:null}async function h(e){let t=u.Z(e)?(0,s.eq)(c.users.userId,e):(0,s.eq)(c.users.email,e);return o.Z.query.users.findFirst({where:(0,s.xD)(t,(0,s.Ft)(c.users.deletedAt))})}async function v({limit:e,roles:t,page:r=1,userIds:u,status:d,searchValue:p}){r=Math.max(0,r);let h=[(0,s.Ft)(c.users.deletedAt)];if(u?.length&&h.push((0,s.d3)(c.users.userId,u)),t?.length&&h.push((0,s.d3)(c.users.role,t)),"active"===d&&h.push((0,s.K0)(c.users.activationDate)),"inactive"===d&&h.push((0,s.Ft)(c.users.activationDate)),p=`${p||""}`.trim()){let e=["%",p,"%"].join("");h.push((0,a.i6)`(LOWER(users.email) like LOWER(${e}) OR LOWER(users.display_name) like LOWER(${e}) OR LOWER(users.first_name) like LOWER(${e}) OR LOWER(users.last_name) like LOWER(${e}))`)}let v=o.Z.select({count:(0,i.QX)()}).from(c.users);h.length&&v.where((0,s.xD)(...h));let[{count:y}]=await v.execute(),m=1;y&&(r=Math.min(r,m=(0,l.x)(e)?1:Math.ceil(y/e)));let f=(0,l.x)(e)?void 0:Math.max(0,(r-1)*e),g=await o.Z.query.users.findMany({where:h.length?(0,s.xD)(...h):void 0,limit:(0,l.x)(e)?void 0:e,orderBy:(0,n.C)(c.users.id),offset:f,columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0}});return{page:r,limit:e,data:g,totalRows:y,totalPages:m,searchValue:p,error:void 0}}let y={page:1,limit:void 0,totalRows:0,totalPages:1,data:[],searchValue:void 0,error:void 0};async function m(e){let t=y;try{t=await v(e)}catch(e){d.Z.error("_getUsers ERROR",e),t.error=e.message}finally{return t}}},56543:(e,t,r)=>{"use strict";r.d(t,{L:()=>d});var s=r(67096),a=r.n(s),i=r(53797),n=r(77234),u=r(57745),o=r(24118),c=r(10413),l=r(57418);let d={adapter:(0,o.J)(c.Z),providers:[(0,n.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,i.Z)({name:"credentials",credentials:{email:{label:"email",type:"text"},password:{label:"email",type:"text"},code:{label:"code",type:"text"}},async authorize(e){if(!e?.email||!(e?.password||e?.code))throw Error("Missing credentials");let t=await c.Z.query.users.findFirst({where:(0,u.xD)((0,u.eq)(l.users.email,e.email))});if(!t)throw Error("Invalid credentials");if(e.code){let r=await c.Z.query.tokens.findFirst({where:(0,u.xD)((0,u.eq)(l.tokens.token,Number(e.code)),(0,u.eq)(l.tokens.userId,t.userId))});if(!r)throw Error("That code wasn&apos;t valid. Have another go!");await c.Z.delete(l.tokens).where((0,u.eq)(l.tokens.id,r.id))}else if(e.password){if(!await a().compare(e.password,`${t.password}`))throw Error("Invalid credentials")}else if(!t)throw Error("Invalid credentials");let r={lastLoginDate:new Date};return t.activationDate||(r.activationDate=new Date),await c.Z.update(l.users).set(r).where((0,u.eq)(l.users.userId,t.userId)),{id:t.userId,email:t.email,emailVerified:t.activationDate||r.activationDate,name:t.displayName,image:null}}})],debug:!1,session:{strategy:"jwt"},secret:process.env.NEXTAUTH_SECRET,callbacks:{redirect:async({baseUrl:e,url:t})=>t.startsWith("/")?`${e}${t}`:new URL(t).origin===e?t:e}}},41502:(e,t,r)=>{"use strict";function s(e){return null==e||""===e}r.d(t,{x:()=>s})},57435:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(87561),a=r.n(s),i=r(49411),n=r.n(i),u=r(51744),o=r.n(u);function c(e,...t){let r=o()(new Date).format("YYYYMMDD"),s=n().resolve(`logs/${r}`);a().existsSync(s)||a().mkdirSync(s);let i=`${new Date().toUTCString()} ${JSON.stringify([...t])}
`,u=`${s}/${e}`;a().appendFileSync(u,i)}let l={log:(...e)=>{c("logs.txt",...e)},error:(...e)=>{c("errors.txt",...e)},appError:(...e)=>{c("app_errors.txt",...e)}}},88317:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(55802).io)(process.env.NEXT_PUBLIC_APP_URL)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1633,1381,1744,3788,1490,5059,9092,5802,413],()=>r(46682));module.exports=s})();
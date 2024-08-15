"use strict";(()=>{var e={};e.id=799,e.ids=[799],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},86838:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>m,patchFetch:()=>f,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>y,staticGenerationAsyncStorage:()=>h});var a={};t.r(a),t.d(a,{POST:()=>d});var s=t(49303),i=t(88716),n=t(60670),o=t(87070),u=t(57435),l=t(72761);async function d(e){try{if(!(await (0,l.$)()).yes)return o.NextResponse.json({errors:["Unauthorised"]});let r=await e.json();return u.Z.error("[APP ERROR]: ",r),o.NextResponse.json({success:!0})}catch(e){return u.Z.error("[POST] /app/errors",e.message),o.NextResponse.json({errors:["Internal Error"]})}}let c=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/app/errors/route",pathname:"/api/app/errors",filename:"route",bundlePath:"app/api/app/errors/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/app/errors/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:h,serverHooks:y}=c,m="/api/app/errors/route";function f(){return(0,n.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:h})}},40801:(e,r,t)=>{t.r(r),t.d(r,{getAuthenticatedUser:()=>u,getAuthenticatedUserWithRoles:()=>l,getSession:()=>o});var a=t(24330);t(60166);var s=t(75571),i=t(56543),n=t(47625);async function o(){return await (0,s.getServerSession)(i.L)}async function u(){try{let e=await o();if(!e?.user?.email)return null;return await n.IQ(e.user.email)||null}catch(e){return null}}async function l(){try{let e=await u(),r=e?.role==="admin",t=e?.role==="super_user";return{isAdmin:r,isSuperUser:t,isDefaultUser:!r&&!t,authenticatedUser:e}}catch(e){return{isAdmin:!1,isSuperUser:!1,isDefaultUser:!1,user:null}}}(0,t(40618).h)([o,u,l]),(0,a.j)("25ea7ea3dd7527b3c13d4af3d456f9d5e4cff350",o),(0,a.j)("44218771357d06d79311b6d6641a20c018bafd37",u),(0,a.j)("0b2fbd1c3a054fb1b76c33cf025c25b5d80cbadf",l)},72761:(e,r,t)=>{t.d(r,{$:()=>y});var a=t(71615),s=t(57435),i=t(57745),n=t(10413),o=t(57418);async function u(e){try{let r=[(0,i.or)((0,i.Ft)(o.apiKeys.validUntil),(0,i.eg)(o.apiKeys.validUntil,new Date)),...e?.apiKeys?.length?[(0,i.d3)(o.apiKeys.apiKey,e.apiKeys)]:[],...e?.apiKeysIds?.length?[(0,i.d3)(o.apiKeys.apiKeyId,e.apiKeysIds)]:[]];return{data:await n.Z.query.apiKeys.findMany({where:r.length?(0,i.xD)(...r):void 0,columns:{apiKeyId:!0,apiKey:!0}})}}catch(e){return s.Z.error("_getApiKeys ERROR",e.message),{data:[],errors:[e.message]}}}async function l(e){try{let r=[(0,i.or)((0,i.Ft)(o.authClients.validUntil),(0,i.eg)(o.authClients.validUntil,new Date)),...e?.usersIds?.length?[(0,i.d3)(o.authClients.userId,e.usersIds)]:[],...e?.clientIds?.length?[(0,i.d3)(o.authClients.clientId,e.clientIds)]:[],...e?.clientTokens?.length?[(0,i.d3)(o.authClients.clientToken,e.clientTokens)]:[]];return{data:await n.Z.query.authClients.findMany({where:r.length?(0,i.xD)(...r):void 0,columns:{clientId:!0,clientToken:!0,userId:!0}})}}catch(e){return s.Z.error("_getAuthClients ERROR",e.message),{data:[],errors:[e.message]}}}async function d(e,r){let t=(0,a.headers)().get(e);return!!t&&r(t)}async function c(e,r){try{if(!r)return!1;let{data:t}=await l("token"===e?{clientTokens:[r]}:{clientIds:[r]});return!!t.length}catch(e){return s.Z.error("validateAuthClient ERROR:",e.message),!1}}async function p(e){try{if(!e)return!1;let{data:r}=await u({apiKeys:[e]});return!!r.length}catch(e){return s.Z.error("validateApiKey ERROR:",e.message),!1}}var h=t(40801);async function y(){try{let e=await d("x-api-key",p);e||(e=await d("x-auth-token",e=>c("token",e)));let r=null;return e||(e=!!(r=await (0,h.getAuthenticatedUser)())),{yes:e,user:r}}catch(e){return s.Z.error("isAuthenticated ERROR",e),{yes:!1,user:null}}}},47625:(e,r,t)=>{t.d(r,{C:()=>h,IQ:()=>p,Ko:()=>m,yT:()=>f});var a=t(57745),s=t(34149),i=t(60938),n=t(81445),o=t(30900),u=t(10413),l=t(57418),d=t(41502),c=t(57435);async function p(e){let r=o.Z(e)?(0,a.eq)(l.users.userId,e):(0,a.eq)(l.users.email,e);return await u.Z.query.users.findFirst({where:(0,a.xD)(r,(0,a.Ft)(l.users.deletedAt)),columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0}})}async function h(e){let r=o.Z(e)?(0,a.eq)(l.users.userId,e):(0,a.eq)(l.users.email,e);return await u.Z.query.users.findFirst({where:(0,a.xD)(r,(0,a.Ft)(l.users.deletedAt))})}async function y({limit:e,roles:r,page:t=1,userIds:o,status:c,searchValue:p}){t=Math.max(0,t);let h=[];if(o?.length&&h.push((0,a.d3)(l.users.userId,o)),r?.length&&h.push((0,a.d3)(l.users.role,r)),"active"===c&&h.push((0,a.K0)(l.users.activationDate)),"inactive"===c&&h.push((0,a.Ft)(l.users.activationDate)),p=`${p||""}`.trim()){let e=["%",p,"%"].join("");h.push((0,s.i6)`(LOWER(users.email) like LOWER(${e}) OR LOWER(users.display_name) like LOWER(${e}) OR LOWER(users.first_name) like LOWER(${e}) OR LOWER(users.last_name) like LOWER(${e}))`)}let y=u.Z.select({count:(0,i.QX)()}).from(l.users);h.length&&y.where((0,a.xD)(...h));let[{count:m}]=await y.execute(),f=1;m&&(t=Math.min(t,f=(0,d.x)(e)?1:Math.ceil(m/e)));let x=(0,d.x)(e)?void 0:Math.max(0,(t-1)*e),g=await u.Z.query.users.findMany({where:h.length?(0,a.xD)(...h):void 0,limit:(0,d.x)(e)?void 0:e,orderBy:(0,n.C)(l.users.id),offset:x,columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0}});return{page:t,limit:e,data:g,totalRows:m,totalPages:f,searchValue:p,error:void 0}}let m={page:1,limit:void 0,totalRows:0,totalPages:1,data:[],searchValue:void 0,error:void 0};async function f(e){let r=m;try{r=await y(e)}catch(e){c.Z.error("_getUsers ERROR",e),r.error=e.message}finally{return r}}},56543:(e,r,t)=>{t.d(r,{L:()=>c});var a=t(67096),s=t.n(a),i=t(53797),n=t(77234),o=t(57745),u=t(24118),l=t(10413),d=t(57418);let c={adapter:(0,u.J)(l.Z),providers:[(0,n.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,i.Z)({name:"credentials",credentials:{email:{label:"email",type:"text"},password:{label:"email",type:"text"},code:{label:"code",type:"text"}},async authorize(e){if(!e?.email||!(e?.password||e?.code))throw Error("Missing credentials");let r=await l.Z.query.users.findFirst({where:(0,o.xD)((0,o.eq)(d.users.email,e.email))});if(!r)throw Error("Invalid credentials");if(e.code){let t=await l.Z.query.tokens.findFirst({where:(0,o.xD)((0,o.eq)(d.tokens.token,Number(e.code)),(0,o.eq)(d.tokens.userId,r.userId))});if(!t)throw Error("That code wasn&apos;t valid. Have another go!");await l.Z.delete(d.tokens).where((0,o.eq)(d.tokens.id,t.id))}else if(e.password){if(!await s().compare(e.password,`${r.password}`))throw Error("Invalid credentials")}else if(!r)throw Error("Invalid credentials");let t={lastLoginDate:new Date};return r.activationDate||(t.activationDate=new Date),await l.Z.update(d.users).set(t).where((0,o.eq)(d.users.userId,r.userId)),{id:r.userId,email:r.email,emailVerified:r.activationDate||t.activationDate,name:r.displayName,image:null}}})],debug:!1,session:{strategy:"jwt"},secret:process.env.NEXTAUTH_SECRET,callbacks:{redirect:async({baseUrl:e,url:r})=>r.startsWith("/")?`${e}${r}`:new URL(r).origin===e?r:e}}},41502:(e,r,t)=>{t.d(r,{x:()=>a});function a(e){return null==e||""===e}},57435:(e,r,t)=>{t.d(r,{Z:()=>d});var a=t(87561),s=t.n(a),i=t(49411),n=t.n(i),o=t(51744),u=t.n(o);function l(e,...r){let t=u()(new Date).format("YYYYMMDD"),a=n().resolve(`logs/${t}`);s().existsSync(a)||s().mkdirSync(a);let i=`${new Date().toUTCString()} ${JSON.stringify([...r,__filename])}
`,o=`${a}/logs.txt`;"error"===e&&(o=`${a}/errors.txt`),s().appendFileSync(o,i)}let d={log:(...e)=>{l("log",...e)},error:(...e)=>{try{l("error",...e)}catch(e){console.log(e)}}}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[5822,3788,1744,1490,5972,413],()=>t(86838));module.exports=a})();
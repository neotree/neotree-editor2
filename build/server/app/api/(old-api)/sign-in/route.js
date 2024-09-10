"use strict";(()=>{var e={};e.id=4678,e.ids=[4678],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},25008:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>f,patchFetch:()=>v,requestAsyncStorage:()=>m,routeModule:()=>y,serverHooks:()=>x,staticGenerationAsyncStorage:()=>g});var a={};r.r(a),r.d(a,{POST:()=>h});var s=r(49303),i=r(88716),n=r(60670),o=r(87070),l=r(67096),u=r.n(l),d=r(57435),c=r(72761),p=r(47625);async function h(e){try{if(d.Z.log(`[POST]: ${e.url}`),!(await (0,c.$)()).yes)return o.NextResponse.json({errors:["Unauthorised"]});let{username:t,password:r}=await e.json(),a=t?await (0,p.C)(t):null;if(!a||!await u().compare(r,`${a.password}`))return o.NextResponse.json({errors:["Invalid credentials"]});let s={id:a.id,displayName:a.displayName,userId:a.userId,email:a.email,role:a.role};return o.NextResponse.json({user:s})}catch(e){return d.Z.error("[POST] /api/sign-in",e.message),o.NextResponse.json({errors:["Internal Error"]})}}let y=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/(old-api)/sign-in/route",pathname:"/api/sign-in",filename:"route",bundlePath:"app/api/(old-api)/sign-in/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/(old-api)/sign-in/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:g,serverHooks:x}=y,f="/api/(old-api)/sign-in/route";function v(){return(0,n.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:g})}},40801:(e,t,r)=>{r.r(t),r.d(t,{getAuthenticatedUser:()=>l,getAuthenticatedUserWithRoles:()=>u,getSession:()=>o});var a=r(24330);r(60166);var s=r(75571),i=r(56543),n=r(47625);async function o(){return await (0,s.getServerSession)(i.L)}async function l(){try{let e=await o();if(!e?.user?.email)return null;return await n.IQ(e.user.email)||null}catch(e){return null}}async function u(){try{let e=await l(),t=e?.role==="admin",r=e?.role==="super_user";return{isAdmin:t,isSuperUser:r,isDefaultUser:!t&&!r,authenticatedUser:e}}catch(e){return{isAdmin:!1,isSuperUser:!1,isDefaultUser:!1,user:null}}}(0,r(40618).h)([o,l,u]),(0,a.j)("25ea7ea3dd7527b3c13d4af3d456f9d5e4cff350",o),(0,a.j)("44218771357d06d79311b6d6641a20c018bafd37",l),(0,a.j)("0b2fbd1c3a054fb1b76c33cf025c25b5d80cbadf",u)},72761:(e,t,r)=>{r.d(t,{$:()=>y});var a=r(71615),s=r(57435),i=r(57745),n=r(10413),o=r(57418);async function l(e){try{let t=[(0,i.or)((0,i.Ft)(o.apiKeys.validUntil),(0,i.eg)(o.apiKeys.validUntil,new Date)),...e?.apiKeys?.length?[(0,i.d3)(o.apiKeys.apiKey,e.apiKeys)]:[],...e?.apiKeysIds?.length?[(0,i.d3)(o.apiKeys.apiKeyId,e.apiKeysIds)]:[]];return{data:await n.Z.query.apiKeys.findMany({where:t.length?(0,i.xD)(...t):void 0,columns:{apiKeyId:!0,apiKey:!0}})}}catch(e){return s.Z.error("_getApiKeys ERROR",e.message),{data:[],errors:[e.message]}}}async function u(e){try{let t=[(0,i.or)((0,i.Ft)(o.authClients.validUntil),(0,i.eg)(o.authClients.validUntil,new Date)),...e?.usersIds?.length?[(0,i.d3)(o.authClients.userId,e.usersIds)]:[],...e?.clientIds?.length?[(0,i.d3)(o.authClients.clientId,e.clientIds)]:[],...e?.clientTokens?.length?[(0,i.d3)(o.authClients.clientToken,e.clientTokens)]:[]];return{data:await n.Z.query.authClients.findMany({where:t.length?(0,i.xD)(...t):void 0,columns:{clientId:!0,clientToken:!0,userId:!0}})}}catch(e){return s.Z.error("_getAuthClients ERROR",e.message),{data:[],errors:[e.message]}}}async function d(e,t){let r=(0,a.headers)().get(e);return!!r&&t(r)}async function c(e,t){try{if(!t)return!1;let{data:r}=await u("token"===e?{clientTokens:[t]}:{clientIds:[t]});return!!r.length}catch(e){return s.Z.error("validateAuthClient ERROR:",e.message),!1}}async function p(e){try{if(!e)return!1;let{data:t}=await l({apiKeys:[e]});return!!t.length}catch(e){return s.Z.error("validateApiKey ERROR:",e.message),!1}}var h=r(40801);async function y(){try{let e=await d("x-api-key",p);e||(e=await d("x-auth-token",e=>c("token",e)));let t=null;return e||(e=!!(t=await (0,h.getAuthenticatedUser)())),{yes:e,user:t}}catch(e){return s.Z.error("isAuthenticated ERROR",e),{yes:!1,user:null}}}},47625:(e,t,r)=>{r.d(t,{C:()=>h,IQ:()=>p,Ko:()=>m,yT:()=>g});var a=r(57745),s=r(34149),i=r(60938),n=r(81445),o=r(30900),l=r(10413),u=r(57418),d=r(41502),c=r(57435);async function p(e){let t=o.Z(e)?(0,a.eq)(u.users.userId,e):(0,a.eq)(u.users.email,e),r=await l.Z.query.users.findFirst({where:(0,a.xD)(t,(0,a.Ft)(u.users.deletedAt)),columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0,password:!0}});return{...r,isActive:!!r?.password}}async function h(e){let t=o.Z(e)?(0,a.eq)(u.users.userId,e):(0,a.eq)(u.users.email,e);return await l.Z.query.users.findFirst({where:(0,a.xD)(t,(0,a.Ft)(u.users.deletedAt))})}async function y({limit:e,roles:t,page:r=1,userIds:o,status:c,searchValue:p}){r=Math.max(0,r);let h=[(0,a.Ft)(u.users.deletedAt)];if(o?.length&&h.push((0,a.d3)(u.users.userId,o)),t?.length&&h.push((0,a.d3)(u.users.role,t)),"active"===c&&h.push((0,a.K0)(u.users.activationDate)),"inactive"===c&&h.push((0,a.Ft)(u.users.activationDate)),p=`${p||""}`.trim()){let e=["%",p,"%"].join("");h.push((0,s.i6)`(LOWER(users.email) like LOWER(${e}) OR LOWER(users.display_name) like LOWER(${e}) OR LOWER(users.first_name) like LOWER(${e}) OR LOWER(users.last_name) like LOWER(${e}))`)}let y=l.Z.select({count:(0,i.QX)()}).from(u.users);h.length&&y.where((0,a.xD)(...h));let[{count:m}]=await y.execute(),g=1;m&&(r=Math.min(r,g=(0,d.x)(e)?1:Math.ceil(m/e)));let x=(0,d.x)(e)?void 0:Math.max(0,(r-1)*e),f=await l.Z.query.users.findMany({where:h.length?(0,a.xD)(...h):void 0,limit:(0,d.x)(e)?void 0:e,orderBy:(0,n.C)(u.users.id),offset:x,columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0}});return{page:r,limit:e,data:f,totalRows:m,totalPages:g,searchValue:p,error:void 0}}let m={page:1,limit:void 0,totalRows:0,totalPages:1,data:[],searchValue:void 0,error:void 0};async function g(e){let t=m;try{t=await y(e)}catch(e){c.Z.error("_getUsers ERROR",e),t.error=e.message}finally{return t}}},56543:(e,t,r)=>{r.d(t,{L:()=>c});var a=r(67096),s=r.n(a),i=r(53797),n=r(77234),o=r(57745),l=r(24118),u=r(10413),d=r(57418);let c={adapter:(0,l.J)(u.Z),providers:[(0,n.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,i.Z)({name:"credentials",credentials:{email:{label:"email",type:"text"},password:{label:"email",type:"text"},code:{label:"code",type:"text"}},async authorize(e){if(!e?.email||!(e?.password||e?.code))throw Error("Missing credentials");let t=await u.Z.query.users.findFirst({where:(0,o.xD)((0,o.eq)(d.users.email,e.email))});if(!t)throw Error("Invalid credentials");if(e.code){let r=await u.Z.query.tokens.findFirst({where:(0,o.xD)((0,o.eq)(d.tokens.token,Number(e.code)),(0,o.eq)(d.tokens.userId,t.userId))});if(!r)throw Error("That code wasn&apos;t valid. Have another go!");await u.Z.delete(d.tokens).where((0,o.eq)(d.tokens.id,r.id))}else if(e.password){if(!await s().compare(e.password,`${t.password}`))throw Error("Invalid credentials")}else if(!t)throw Error("Invalid credentials");let r={lastLoginDate:new Date};return t.activationDate||(r.activationDate=new Date),await u.Z.update(d.users).set(r).where((0,o.eq)(d.users.userId,t.userId)),{id:t.userId,email:t.email,emailVerified:t.activationDate||r.activationDate,name:t.displayName,image:null}}})],debug:!1,session:{strategy:"jwt"},secret:process.env.NEXTAUTH_SECRET,callbacks:{redirect:async({baseUrl:e,url:t})=>t.startsWith("/")?`${e}${t}`:new URL(t).origin===e?t:e}}},41502:(e,t,r)=>{r.d(t,{x:()=>a});function a(e){return null==e||""===e}},57435:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(87561),s=r.n(a),i=r(49411),n=r.n(i),o=r(51744),l=r.n(o);function u(e,...t){let r=l()(new Date).format("YYYYMMDD"),a=n().resolve(`logs/${r}`);s().existsSync(a)||s().mkdirSync(a);let i=`${new Date().toUTCString()} ${JSON.stringify([...t])}
`,o=`${a}/${e}`;s().appendFileSync(o,i)}let d={log:(...e)=>{u("logs.txt",...e)},error:(...e)=>{u("errors.txt",...e)},appError:(...e)=>{u("app_errors.txt",...e)}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[5822,1744,3788,1490,5059,413],()=>r(25008));module.exports=a})();
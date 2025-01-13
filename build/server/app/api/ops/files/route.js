(()=>{var e={};e.id=9797,e.ids=[9797],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58359:()=>{},93739:()=>{},23992:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>E,patchFetch:()=>Z,requestAsyncStorage:()=>I,routeModule:()=>v,serverHooks:()=>q,staticGenerationAsyncStorage:()=>R});var s={};r.r(s),r.d(s,{GET:()=>x});var a=r(49303),i=r(88716),n=r(60670),l=r(87070),o=r(9576),u=r(57745),c=r(29712),d=r(72761),p=r(57435),f=r(10413),g=r(43509),m=r(61460),h=r(44380);let y=e=>!(!e?.data||e?.fileId),w=async e=>{let t=e.map(e=>{let[,t]=(e?.data||"").split(",");if(!t||!y(e))return e;let r=(0,o.Z)(),s=[r,e.filename].filter(e=>e).join("__");return{...e,fileId:r,filename:s,data:Buffer.from(t,"base64")}}),r=0;for(let e of t){if(e){let{data:s,fileId:a,type:i,size:n,filename:l}=e,o=l;await (0,m.G)({data:s,contentType:i,fileId:a,filename:l,size:n,metadata:{}});let d=(0,h.TI)("/api/files/"+a),p={...(await c.Z.post((0,h.TI)("/api/files/get-image-size"),{imageURL:d})).data.data};(p.width||p.height)&&(l=`${l}?w=${p.width}&h=${p.height}`,d=`${d}?w=${p.width}&h=${p.height}`),await f.Z.update(g.files).set({filename:l,metadata:p}).where((0,u.eq)(g.files.fileId,a)),t[r].data=d,t[r].filename=o}r++}return t};async function x(e){try{if(!(await (0,d.$)()).yes)return l.NextResponse.json({errors:["Unauthorised"]},{status:200});let e=(await f.Z.query.screens.findMany({where:(0,u.or)((0,u.K0)(g.screens.image1),(0,u.K0)(g.screens.image2),(0,u.K0)(g.screens.image3)),columns:{screenId:!0,image1:!0,image2:!0,image3:!0}})).filter(e=>y(e.image1)||y(e.image2)||y(e.image3)),t=0;for(let r of e){let s=await w([r.image1,r.image2,r.image3]);e[t].image1=s[0],e[t].image2=s[1],e[t].image3=s[2],await f.Z.update(g.screens).set(r).where((0,u.eq)(g.screens.screenId,r.screenId)),t++}let r=(await f.Z.query.diagnoses.findMany({where:(0,u.or)((0,u.K0)(g.diagnoses.image1),(0,u.K0)(g.diagnoses.image2),(0,u.K0)(g.diagnoses.image3)),columns:{diagnosisId:!0,image1:!0,image2:!0,image3:!0}})).filter(e=>y(e.image1)||y(e.image2)||y(e.image3));for(let e of r){let s=await w([e.image1,e.image2,e.image3]);r[t].image1=s[0],r[t].image2=s[1],r[t].image3=s[2],await f.Z.update(g.diagnoses).set(e).where((0,u.eq)(g.diagnoses.diagnosisId,e.diagnosisId))}return l.NextResponse.json({screens:e,diagnoses:r})}catch(e){return p.Z.log("/api/ops/files",e),l.NextResponse.json({errors:[e.message]})}}let v=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/ops/files/route",pathname:"/api/ops/files",filename:"route",bundlePath:"app/api/ops/files/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/ops/files/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:I,staticGenerationAsyncStorage:R,serverHooks:q}=v,E="/api/ops/files/route";function Z(){return(0,n.patchFetch)({serverHooks:q,staticGenerationAsyncStorage:R})}},40801:(e,t,r)=>{"use strict";r.r(t),r.d(t,{getAuthenticatedUser:()=>o,getAuthenticatedUserWithRoles:()=>u,getSession:()=>l});var s=r(24330);r(60166);var a=r(75571),i=r(56543),n=r(47625);async function l(){return await (0,a.getServerSession)(i.L)}async function o(){try{let e=await l();if(!e?.user?.email)return null;return await n.IQ(e.user.email)||null}catch(e){return null}}async function u(){try{let e=await o(),t=e?.role==="admin",r=e?.role==="super_user";return{isAdmin:t,isSuperUser:r,isDefaultUser:!t&&!r,authenticatedUser:e}}catch(e){return{isAdmin:!1,isSuperUser:!1,isDefaultUser:!1,user:null}}}(0,r(40618).h)([l,o,u]),(0,s.j)("3054c9aa3ede38673855ee3dff9f25ad492b7d73",l),(0,s.j)("576365f197acb2f10e29644ba43ca25aec52e8b7",o),(0,s.j)("103d82a5a607c9f7f049ac9bfe2bb62dc7128462",u)},72761:(e,t,r)=>{"use strict";r.d(t,{$:()=>g});var s=r(71615),a=r(57435),i=r(57745),n=r(10413),l=r(43509);async function o(e){try{let t=[(0,i.or)((0,i.Ft)(l.apiKeys.validUntil),(0,i.eg)(l.apiKeys.validUntil,new Date)),...e?.apiKeys?.length?[(0,i.d3)(l.apiKeys.apiKey,e.apiKeys)]:[],...e?.apiKeysIds?.length?[(0,i.d3)(l.apiKeys.apiKeyId,e.apiKeysIds)]:[]];return{data:await n.Z.query.apiKeys.findMany({where:t.length?(0,i.xD)(...t):void 0,columns:{apiKeyId:!0,apiKey:!0}})}}catch(e){return a.Z.error("_getApiKeys ERROR",e.message),{data:[],errors:[e.message]}}}async function u(e){try{let t=[(0,i.or)((0,i.Ft)(l.authClients.validUntil),(0,i.eg)(l.authClients.validUntil,new Date)),...e?.usersIds?.length?[(0,i.d3)(l.authClients.userId,e.usersIds)]:[],...e?.clientIds?.length?[(0,i.d3)(l.authClients.clientId,e.clientIds)]:[],...e?.clientTokens?.length?[(0,i.d3)(l.authClients.clientToken,e.clientTokens)]:[]];return{data:await n.Z.query.authClients.findMany({where:t.length?(0,i.xD)(...t):void 0,columns:{clientId:!0,clientToken:!0,userId:!0}})}}catch(e){return a.Z.error("_getAuthClients ERROR",e.message),{data:[],errors:[e.message]}}}async function c(e,t){let r=(0,s.headers)().get(e);return!!r&&t(r)}async function d(e,t){try{if(!t)return!1;let{data:r}=await u("token"===e?{clientTokens:[t]}:{clientIds:[t]});return!!r.length}catch(e){return a.Z.error("validateAuthClient ERROR:",e.message),!1}}async function p(e){try{if(!e)return!1;let{data:t}=await o({apiKeys:[e]});return!!t.length}catch(e){return a.Z.error("validateApiKey ERROR:",e.message),!1}}var f=r(40801);async function g(){try{let e=await c("x-api-key",p);e||(e=await c("x-auth-token",e=>d("token",e)));let t=null;return e||(e=!!(t=await (0,f.getAuthenticatedUser)())),{yes:e,user:t}}catch(e){return a.Z.error("isAuthenticated ERROR",e),{yes:!1,user:null}}}},61460:(e,t,r)=>{"use strict";r.d(t,{G:()=>o});var s=r(88317),a=r(57435),i=r(10413),n=r(43509),l=r(89114);async function o(e,t){let r={success:!1,data:null};try{if(!e.fileId)throw Error("Missing fileId");if(!e.data)throw Error("No file uploaded");await i.Z.insert(n.files).values(e);let a=await (0,l._I)(e.fileId);if(!a)throw Error("Failed to upload file");r.success=!0,r.data=a.data,a.data&&t?.broadcastAction!==!1&&s.Z.emit("file_uploaded")}catch(e){r.success=!1,r.errors=[e.message],a.Z.error("_uploadFile ERROR",e.message)}finally{return r}}},89114:(e,t,r)=>{"use strict";r.d(t,{_I:()=>u,Re:()=>g,KU:()=>o});var s=r(57745),a=r(10413),i=r(43509),n=r(57435),l=r(44380);async function o(e){try{let t=await a.Z.query.files.findFirst({where:(0,s.eq)(i.files.fileId,e)});return{data:t?{...t,url:(0,l.TI)(`/files/${t.fileId}`)}:null}}catch(e){return n.Z.error("_getFiles ERROR",e.message),{errors:[e.message],data:null}}}async function u(e){try{let t=await a.Z.query.files.findFirst({where:(0,s.eq)(i.files.fileId,e),columns:{contentType:!0,fileId:!0,filename:!0,size:!0,metadata:!0,createdAt:!0}});return{data:t?{...t,url:(0,l.TI)(`/files/${t.fileId}`)}:null}}catch(e){return n.Z.error("_getFiles ERROR",e.message),{errors:[e.message],data:null}}}var c=r(34149),d=r(60938),p=r(81445),f=r(41502);async function g(e){try{let{filesIds:t,archived:r,searchValue:n,limit:o,page:u=1,uploadDateGTE:g,uploadDateLTE:m}={...e},h=Math.max(0,u),y=n?["%",n,"%"].join(""):"",w=[r?(0,s.K0)(i.files.deletedAt):(0,s.Ft)(i.files.deletedAt),...t?.length?[(0,s.d3)(i.files.fileId,t)]:[],...y?[(0,c.i6)`LOWER(screens.name) like LOWER(${y})`]:[],g?(0,s.eg)(i.files.createdAt,"string"==typeof g?new Date(g):g):void 0,m?(0,s.G)(i.files.createdAt,"string"==typeof m?new Date(m):m):void 0],x=a.Z.select({count:(0,d.QX)()}).from(i.files);w.length&&x.where((0,s.xD)(...w));let[{count:v}]=await x.execute(),I=1;v&&(I=(0,f.x)(o)?1:Math.ceil(v/o),h=Math.min(h,I));let R=(0,f.x)(o)?void 0:Math.max(0,(h-1)*o);return{data:(await a.Z.query.files.findMany({where:w.length?(0,s.xD)(...w):void 0,limit:o,offset:R,orderBy:(0,p.C)(i.files.createdAt),columns:{fileId:!0,contentType:!0,filename:!0,size:!0,metadata:!0,createdAt:!0}})).map(e=>({...e,url:(0,l.TI)(`/files/${e.fileId}`)})),searchValue:n,totalPages:I,totalRows:v,page:h,limit:o}}catch(e){return n.Z.error("_getFiles ERROR",e.message),{errors:[e.message],data:[],totalPages:0,totalRows:0,page:1}}}},47625:(e,t,r)=>{"use strict";r.d(t,{C:()=>f,IQ:()=>p,Ko:()=>m,yT:()=>h});var s=r(57745),a=r(34149),i=r(60938),n=r(81445),l=r(30900),o=r(10413),u=r(43509),c=r(41502),d=r(57435);async function p(e){let t=l.Z(e)?(0,s.eq)(u.users.userId,e):(0,s.eq)(u.users.email,e),r=await o.Z.query.users.findFirst({where:(0,s.xD)(t,(0,s.Ft)(u.users.deletedAt)),columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0,password:!0}});return r?{...r,isActive:!!r?.password}:null}async function f(e){let t=l.Z(e)?(0,s.eq)(u.users.userId,e):(0,s.eq)(u.users.email,e);return o.Z.query.users.findFirst({where:(0,s.xD)(t,(0,s.Ft)(u.users.deletedAt))})}async function g({limit:e,roles:t,page:r=1,userIds:l,status:d,searchValue:p}){r=Math.max(0,r);let f=[(0,s.Ft)(u.users.deletedAt)];if(l?.length&&f.push((0,s.d3)(u.users.userId,l)),t?.length&&f.push((0,s.d3)(u.users.role,t)),"active"===d&&f.push((0,s.K0)(u.users.activationDate)),"inactive"===d&&f.push((0,s.Ft)(u.users.activationDate)),p=`${p||""}`.trim()){let e=["%",p,"%"].join("");f.push((0,a.i6)`(LOWER(users.email) like LOWER(${e}) OR LOWER(users.display_name) like LOWER(${e}) OR LOWER(users.first_name) like LOWER(${e}) OR LOWER(users.last_name) like LOWER(${e}))`)}let g=o.Z.select({count:(0,i.QX)()}).from(u.users);f.length&&g.where((0,s.xD)(...f));let[{count:m}]=await g.execute(),h=1;m&&(r=Math.min(r,h=(0,c.x)(e)?1:Math.ceil(m/e)));let y=(0,c.x)(e)?void 0:Math.max(0,(r-1)*e),w=await o.Z.query.users.findMany({where:f.length?(0,s.xD)(...f):void 0,limit:(0,c.x)(e)?void 0:e,orderBy:(0,n.C)(u.users.id),offset:y,columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0}});return{page:r,limit:e,data:w,totalRows:m,totalPages:h,searchValue:p,error:void 0}}let m={page:1,limit:void 0,totalRows:0,totalPages:1,data:[],searchValue:void 0,error:void 0};async function h(e){let t=m;try{t=await g(e)}catch(e){d.Z.error("_getUsers ERROR",e),t.error=e.message}finally{return t}}},56543:(e,t,r)=>{"use strict";r.d(t,{L:()=>d});var s=r(67096),a=r.n(s),i=r(53797),n=r(77234),l=r(57745),o=r(24118),u=r(10413),c=r(43509);let d={adapter:(0,o.J)(u.Z),providers:[(0,n.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,i.Z)({name:"credentials",credentials:{email:{label:"email",type:"text"},password:{label:"email",type:"text"},code:{label:"code",type:"text"}},async authorize(e){if(!e?.email||!(e?.password||e?.code))throw Error("Missing credentials");let t=await u.Z.query.users.findFirst({where:(0,l.xD)((0,l.eq)(c.users.email,e.email))});if(!t)throw Error("Invalid credentials");if(e.code){let r=await u.Z.query.tokens.findFirst({where:(0,l.xD)((0,l.eq)(c.tokens.token,Number(e.code)),(0,l.eq)(c.tokens.userId,t.userId))});if(!r)throw Error("That code wasn&apos;t valid. Have another go!");await u.Z.delete(c.tokens).where((0,l.eq)(c.tokens.id,r.id))}else if(e.password){if(!await a().compare(e.password,`${t.password}`))throw Error("Invalid credentials")}else if(!t)throw Error("Invalid credentials");let r={lastLoginDate:new Date};return t.activationDate||(r.activationDate=new Date),await u.Z.update(c.users).set(r).where((0,l.eq)(c.users.userId,t.userId)),{id:t.userId,email:t.email,emailVerified:t.activationDate||r.activationDate,name:t.displayName,image:null}}})],debug:!1,session:{strategy:"jwt"},secret:process.env.NEXTAUTH_SECRET,callbacks:{redirect:async({baseUrl:e,url:t})=>t.startsWith("/")?`${e}${t}`:new URL(t).origin===e?t:e}}},41502:(e,t,r)=>{"use strict";function s(e){return null==e||""===e}r.d(t,{x:()=>s})},57435:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(87561),a=r.n(s),i=r(49411),n=r.n(i),l=r(51744),o=r.n(l);function u(e,...t){let r=o()(new Date).format("YYYYMMDD"),s=n().resolve(`logs/${r}`);a().existsSync(s)||a().mkdirSync(s);let i=`${new Date().toUTCString()} ${JSON.stringify([...t])}
`,l=`${s}/${e}`;a().appendFileSync(l,i)}let c={log:(...e)=>{u("logs.txt",...e)},error:(...e)=>{u("errors.txt",...e)},appError:(...e)=>{u("app_errors.txt",...e)}}},88317:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(55802).io)(process.env.NEXT_PUBLIC_APP_URL)},44380:(e,t,r)=>{"use strict";function s(e=""){let t=process.env.NEXT_PUBLIC_APP_URL||"";return"/"===t.substring(t.length-1,t.length)&&(t=t.substring(0,t.length-1)),"/"===e[0]&&(e=e.substring(1,e.length)),[t,e].filter(e=>e).join("/")}function a(e=""){try{return new URL(e),!0}catch(e){return!1}}r.d(t,{TI:()=>s,jv:()=>a})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1633,1744,1381,3788,1490,9092,5802,5059,9712,413],()=>r(23992));module.exports=s})();
exports.id=2814,exports.ids=[2814],exports.modules={58359:()=>{},93739:()=>{},40801:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getAuthenticatedUser:()=>o,getSession:()=>l});var r=a(24330);a(60166);var s=a(75571),i=a(56543),n=a(47625);async function l(){return await (0,s.getServerSession)(i.L)}async function o(){try{let e=await l();if(!e?.user?.email)return null;return await n.IQ(e.user.email)||null}catch(e){return null}}(0,a(40618).h)([l,o]),(0,r.j)("25ea7ea3dd7527b3c13d4af3d456f9d5e4cff350",l),(0,r.j)("44218771357d06d79311b6d6641a20c018bafd37",o)},66267:(e,t,a)=>{"use strict";a.r(t),a.d(t,{canAccessPage:()=>n,isAllowed:()=>l});var r=a(24330);a(60166);var s=a(72761),i=a(57435);async function n(e){let t={yes:!1,user:null};try{t=await l(e)}catch(e){i.Z.error("canAccessPage ERROR",e.message)}finally{return t}}async function l(e){let t=await (0,s.$)();if(!t.yes)throw Error("Unauthenticated");let a=!0;if(e)for(let r of"string"==typeof e?[e]:e)"users_page"===r&&(a=t.user?.role!=="user");return{...t,yes:a}}(0,a(40618).h)([n,l]),(0,r.j)("1d060a829ac08f6adb4ed6f259c6c0d117feea4b",n),(0,r.j)("c474998fd6b8a9785a09ad9fa5995661f28c6c5b",l)},72761:(e,t,a)=>{"use strict";a.d(t,{$:()=>g});var r=a(71615),s=a(57435),i=a(57745),n=a(10413),l=a(57418);async function o(e){try{let t=[(0,i.or)((0,i.Ft)(l.apiKeys.validUntil),(0,i.eg)(l.apiKeys.validUntil,new Date)),...e?.apiKeys?.length?[(0,i.d3)(l.apiKeys.apiKey,e.apiKeys)]:[],...e?.apiKeysIds?.length?[(0,i.d3)(l.apiKeys.apiKeyId,e.apiKeysIds)]:[]];return{data:await n.Z.query.apiKeys.findMany({where:t.length?(0,i.xD)(...t):void 0,columns:{apiKeyId:!0,apiKey:!0}})}}catch(e){return s.Z.error("_getApiKeys ERROR",e.message),{data:[],errors:[e.message]}}}async function u(e){try{let t=[(0,i.or)((0,i.Ft)(l.authClients.validUntil),(0,i.eg)(l.authClients.validUntil,new Date)),...e?.usersIds?.length?[(0,i.d3)(l.authClients.userId,e.usersIds)]:[],...e?.clientIds?.length?[(0,i.d3)(l.authClients.clientId,e.clientIds)]:[],...e?.clientTokens?.length?[(0,i.d3)(l.authClients.clientToken,e.clientTokens)]:[]];return{data:await n.Z.query.authClients.findMany({where:t.length?(0,i.xD)(...t):void 0,columns:{clientId:!0,clientToken:!0,userId:!0}})}}catch(e){return s.Z.error("_getAuthClients ERROR",e.message),{data:[],errors:[e.message]}}}async function c(e,t){let a=(0,r.headers)().get(e);return!!a&&t(a)}async function d(e,t){try{if(!t)return!1;let{data:a}=await u("token"===e?{clientTokens:[t]}:{clientIds:[t]});return!!a.length}catch(e){return s.Z.error("validateAuthClient ERROR:",e.message),!1}}async function y(e){try{if(!e)return!1;let{data:t}=await o({apiKeys:[e]});return!!t.length}catch(e){return s.Z.error("validateApiKey ERROR:",e.message),!1}}var h=a(40801);async function g(){try{let e=await c("x-api-key",y);e||(e=await c("x-auth-token",e=>d("token",e)));let t=null;return e||(e=!!(t=await (0,h.getAuthenticatedUser)())),{yes:e,user:t}}catch(e){return s.Z.error("isAuthenticated ERROR",e),{yes:!1,user:null}}}},92237:(e,t,a)=>{"use strict";a.d(t,{_:()=>c,Q:()=>u});var r=a(57745),s=a(10413),i=a(57418),n=a(57435),l=a(71615);let o=()=>{let e=function(){let e=(0,l.headers)(),t=e.get("x-url"),a=e.get("x-next-url-host"),r=e.get("x-next-url-href"),s=e.get("x-next-url-port"),i=e.get("x-next-url-hostname"),n=e.get("x-next-url-pathname"),o=e.get("x-next-url-search"),u=e.get("x-next-url-protocol"),c=e.get("x-next-url-username"),d=e.get("x-next-url-locale"),y=e.get("x-next-url-origin"),h=e.get("x-geo-city"),g=e.get("x-geo-country");return{url:t||"",host:a||"",href:r||"",port:s||"",hostname:i||"",pathname:n||"",search:o||"",protocol:u||"",username:c||"",locale:d||"",origin:y||"",city:h||"",country:g||"",region:e.get("x-geo-region")||"",latitude:e.get("x-geo-latitude")||"",longitude:e.get("x-geo-longitude")||""}}();return{webeditor:{name:"Local editor",siteId:"fb76af5a-bf86-4050-821e-44f1bf316bf4",link:e.origin,type:"webeditor",apiKey:"localhost"},nodeapi:{name:"Local editor",siteId:"5cb4aa54-2cfe-49e2-9cdd-392a9b8c124e",link:e.origin,type:"webeditor",apiKey:"localhost"}}};async function u(e){try{let{types:t=[]}={...e},a=[...t.length?[(0,r.d3)(i.sites.type,t)]:[]],n=await s.Z.query.sites.findMany({where:a.length?(0,r.xD)(...a):void 0,columns:{siteId:!0,type:!0,name:!0,link:!0}});return o(),{data:[...n]}}catch(e){return n.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function c(e){try{let t=await s.Z.query.sites.findFirst({where:(0,r.eq)(i.sites.siteId,e),columns:{apiKey:!0,link:!0}}),a=t||null;if(!t){let t=o();Object.values(t).forEach(t=>{t.siteId===e&&(a={link:t.link,apiKey:t.apiKey})})}return{data:a}}catch(e){return n.Z.error("_getSiteApiKey ERROR",e.message),{data:null,errors:[e.message]}}}},47625:(e,t,a)=>{"use strict";a.d(t,{C:()=>h,IQ:()=>y,Ko:()=>f,yT:()=>m});var r=a(57745),s=a(34149),i=a(60938),n=a(81445),l=a(30900),o=a(10413),u=a(57418),c=a(41502),d=a(57435);async function y(e){let t=l.Z(e)?(0,r.eq)(u.users.userId,e):(0,r.eq)(u.users.email,e);return await o.Z.query.users.findFirst({where:(0,r.xD)(t,(0,r.Ft)(u.users.deletedAt)),columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0}})}async function h(e){let t=l.Z(e)?(0,r.eq)(u.users.userId,e):(0,r.eq)(u.users.email,e);return await o.Z.query.users.findFirst({where:(0,r.xD)(t,(0,r.Ft)(u.users.deletedAt))})}async function g({limit:e,roles:t,page:a=1,userIds:l,status:d,searchValue:y}){a=Math.max(0,a);let h=[];if(l?.length&&h.push((0,r.d3)(u.users.userId,l)),t?.length&&h.push((0,r.d3)(u.users.role,t)),"active"===d&&h.push((0,r.K0)(u.users.activationDate)),"inactive"===d&&h.push((0,r.Ft)(u.users.activationDate)),y=`${y||""}`.trim()){let e=["%",y,"%"].join("");h.push((0,s.i6)`(LOWER(users.email) like LOWER(${e}) OR LOWER(users.display_name) like LOWER(${e}) OR LOWER(users.first_name) like LOWER(${e}) OR LOWER(users.last_name) like LOWER(${e}))`)}let g=o.Z.select({count:(0,i.QX)()}).from(u.users);h.length&&g.where((0,r.xD)(...h));let[{count:f}]=await g.execute(),m=1;f&&(a=Math.min(a,m=(0,c.x)(e)?1:Math.ceil(f/e)));let p=(0,c.x)(e)?void 0:Math.max(0,(a-1)*e),w=await o.Z.query.users.findMany({where:h.length?(0,r.xD)(...h):void 0,limit:(0,c.x)(e)?void 0:e,orderBy:(0,n.C)(u.users.id),offset:p,columns:{id:!0,userId:!0,displayName:!0,firstName:!0,lastName:!0,avatar:!0,avatar_md:!0,avatar_sm:!0,activationDate:!0,email:!0,role:!0,createdAt:!0,lastLoginDate:!0}});return{page:a,limit:e,data:w,totalRows:f,totalPages:m,searchValue:y,error:void 0}}let f={page:1,limit:void 0,totalRows:0,totalPages:1,data:[],searchValue:void 0,error:void 0};async function m(e){let t=f;try{t=await g(e)}catch(e){d.Z.error("_getUsers ERROR",e),t.error=e.message}finally{return t}}},56543:(e,t,a)=>{"use strict";a.d(t,{L:()=>d});var r=a(67096),s=a.n(r),i=a(53797),n=a(77234),l=a(57745),o=a(24118),u=a(10413),c=a(57418);let d={adapter:(0,o.J)(u.Z),providers:[(0,n.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,i.Z)({name:"credentials",credentials:{email:{label:"email",type:"text"},password:{label:"email",type:"text"},code:{label:"code",type:"text"}},async authorize(e){if(!e?.email||!(e?.password||e?.code))throw Error("Missing credentials");let t=await u.Z.query.users.findFirst({where:(0,l.xD)((0,l.eq)(c.users.email,e.email))});if(!t)throw Error("Invalid credentials");if(e.code){let a=await u.Z.query.tokens.findFirst({where:(0,l.xD)((0,l.eq)(c.tokens.token,Number(e.code)),(0,l.eq)(c.tokens.userId,t.userId))});if(!a)throw Error("That code wasn&apos;t valid. Have another go!");await u.Z.delete(c.tokens).where((0,l.eq)(c.tokens.id,a.id))}else if(e.password){if(!await s().compare(e.password,`${t.password}`))throw Error("Invalid credentials")}else if(!t)throw Error("Invalid credentials");let a={lastLoginDate:new Date};return t.activationDate||(a.activationDate=new Date),await u.Z.update(c.users).set(a).where((0,l.eq)(c.users.userId,t.userId)),{id:t.userId,email:t.email,emailVerified:t.activationDate||a.activationDate,name:t.displayName,image:null}}})],debug:!1,session:{strategy:"jwt"},secret:process.env.NEXTAUTH_SECRET,callbacks:{redirect:async({baseUrl:e,url:t})=>t.startsWith("/")?`${e}${t}`:new URL(t).origin===e?t:e}}},41502:(e,t,a)=>{"use strict";function r(e){return null==e||""===e}a.d(t,{x:()=>r})},57435:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r=a(87561),s=a.n(r),i=a(49411),n=a.n(i),l=a(51744),o=a.n(l);function u(e,...t){let a=o()(new Date).format("YYYYMMDD"),r=n().resolve(`logs/${a}`);s().existsSync(r)||s().mkdirSync(r);let i=`${new Date().toUTCString()} ${JSON.stringify([...t,__filename])}
`,l=`${r}/logs.txt`;"error"===e&&(l=`${r}/errors.txt`),s().appendFileSync(l,i)}let c={log:(...e)=>{u("log",...e)},error:(...e)=>{try{u("error",...e)}catch(e){console.log(e)}}}},88317:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(55802);console.log("process.env.NEXT_PUBLIC_APP_URL","http://localhost:85");let s=(0,r.io)("http://localhost:85")}};
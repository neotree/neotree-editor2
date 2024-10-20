(()=>{var e={};e.id=4353,e.ids=[4353],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58359:()=>{},93739:()=>{},90977:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>y,serverHooks:()=>K,staticGenerationAsyncStorage:()=>p});var s={};r.r(s),r.d(s,{DELETE:()=>u,GET:()=>d});var i=r(49303),n=r(88716),o=r(60670),a=r(87070),c=r(57435),f=r(72761),g=r(14171);async function d(e){try{if(!(await (0,f.$)()).yes)return a.NextResponse.json({errors:["Unauthorised"]});let t=JSON.parse(e.nextUrl.searchParams.get("data")||"{}"),r=await (0,g.getConfigKeys)(t);return a.NextResponse.json(r)}catch(e){return c.Z.error("[GET] /api/config-keys",e.message),a.NextResponse.json({errors:["Internal Error"]})}}async function u(e){try{if(!(await (0,f.$)()).yes)return a.NextResponse.json({errors:["Unauthorised"]});let t=JSON.parse(e.nextUrl.searchParams.get("data")||"{}"),r=await (0,g.deleteConfigKeys)(t);return a.NextResponse.json(r)}catch(e){return c.Z.error("[GET] /api/config-keys",e.message),a.NextResponse.json({errors:["Internal Error"]})}}let y=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/config-keys/route",pathname:"/api/config-keys",filename:"route",bundlePath:"app/api/config-keys/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/config-keys/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:p,serverHooks:K}=y,h="/api/config-keys/route";function m(){return(0,o.patchFetch)({serverHooks:K,staticGenerationAsyncStorage:p})}},14171:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_0:()=>h,$$ACTION_1:()=>D,$$ACTION_2:()=>x,$$ACTION_3:()=>I,$$ACTION_4:()=>R,countConfigKeys:()=>m,deleteConfigKeys:()=>K,getConfigKey:()=>q,getConfigKeys:()=>w,saveConfigKeys:()=>Z});var s=r(24330);r(60166);var i=r(57745),n=r(81445),o=r(9576),a=r(57435),c=r(10413),f=r(57418),g=r(88317);async function d({data:e,broadcastAction:t}){let r={success:!1};try{let t=[];for(let{configKeyId:r,...s}of e)try{let e=r||o.Z();if(!t.length){let t=r?await c.Z.query.configKeysDrafts.findFirst({where:(0,i.eq)(f.configKeysDrafts.configKeyDraftId,e)}):null,o=t||!r?null:await c.Z.query.configKeys.findFirst({where:(0,i.eq)(f.configKeys.configKeyId,e)});if(t){let r={...t.data,...s};await c.Z.update(f.configKeysDrafts).set({data:r,position:r.position}).where((0,i.eq)(f.configKeysDrafts.configKeyDraftId,e))}else{let t=s.position||o?.position;if(!t){let e=await c.Z.query.configKeys.findFirst({columns:{position:!0},orderBy:(0,n.C)(f.configKeys.position)}),r=await c.Z.query.configKeysDrafts.findFirst({columns:{position:!0},orderBy:(0,n.C)(f.configKeysDrafts.position)});t=Math.max(0,e?.position||0,r?.position||0)+1}let r={...o,...s,configKeyId:e,version:o?.version?o.version+1:1,position:t};await c.Z.insert(f.configKeysDrafts).values({data:r,configKeyDraftId:e,position:r.position,configKeyId:o?.configKeyId})}}}catch(e){t.push(e.message)}t.length?r.errors=t:r.success=!0}catch(e){r.success=!1,r.errors=[e.message],a.Z.error("_saveConfigKeys ERROR",e.message)}finally{return!r?.errors?.length&&t&&g.Z.emit("data_changed","save_config_keys"),r}}async function u({configKeysIds:e,broadcastAction:t}){let r={success:!1};try{if(e.length){await c.Z.delete(f.configKeysDrafts).where((0,i.d3)(f.configKeysDrafts.configKeyDraftId,e));let t=(await c.Z.select({configKeyId:f.configKeys.configKeyId,pendingDeletion:f.pendingDeletion.configKeyId}).from(f.configKeys).leftJoin(f.pendingDeletion,(0,i.eq)(f.pendingDeletion.configKeyId,f.configKeys.configKeyId)).where((0,i.d3)(f.configKeys.configKeyId,e))).filter(e=>!e.pendingDeletion);t.length&&await c.Z.insert(f.pendingDeletion).values(t)}r.success=!0}catch(e){r.success=!1,r.errors=[e.message],a.Z.error("_deleteConfigKeys ERROR",e.message)}finally{return!r?.errors?.length&&t&&g.Z.emit("data_changed","delete_config_keys"),r}}var y=r(17137),l=r(66267),p=r(40618);let K=(0,s.j)("3e57a2adfc2cec65456c01a6565befe9e8547c8e",h);async function h(...e){try{return await (0,l.isAllowed)(),await u(...e)}catch(e){return a.Z.error("deleteConfigKeys ERROR",e.message),{errors:[e.message],success:!1}}}let m=(0,s.j)("6c95086071eff422ebd1d4b6e6ee155a3c46f6c8",D);async function D(...e){try{return await (0,l.isAllowed)(),await (0,y.G$)(...e)}catch(e){return a.Z.error("countConfigKeys ERROR",e.message),{errors:[e.message],data:y.ZV}}}let w=(0,s.j)("62ea292ea7bd062ae9a55ba7a3503f9e7e599915",x);async function x(...e){try{return await (0,l.isAllowed)(),await (0,y.aP)(...e)}catch(e){return a.Z.error("getConfigKeys ERROR",e.message),{errors:[e.message],data:[]}}}let q=(0,s.j)("0629ec683958ae4ac80748c94405db82a154b329",I);async function I(...e){return await (0,l.isAllowed)(),await (0,y.SL)(...e)}let Z=(0,s.j)("e21a375b945716611ba084403261b4c7e40dc61a",R);async function R(...e){try{return await (0,l.isAllowed)(),await d(...e)}catch(e){return a.Z.error("getSys ERROR",e.message),{errors:[e.message],data:void 0,success:!1}}}(0,p.h)([K,m,w,q,Z]),(0,s.j)("a45f560dc70d04c51017497cf228b59b14e3a61d",K),(0,s.j)("1e8712a78e06b07381786906141b4f76aa034282",m),(0,s.j)("9ccd5e094cc921f03b8ebcce1344ce01a782dc1f",w),(0,s.j)("906e186afa6b5cb43aeb047dacac6e3a441a2909",q),(0,s.j)("3dbb234f8b6b79574e997d6aa6ac1c27bbfca65a",Z)},17137:(e,t,r)=>{"use strict";r.d(t,{G$:()=>y,ZV:()=>u,SL:()=>g,aP:()=>f});var s=r(57745),i=r(30900),n=r(9576),o=r(10413),a=r(57418),c=r(57435);async function f(e){try{let{configKeysIds:t,returnDraftsIfExist:r}={...e},c=t||[],f=c?.length?(0,s.d3)(a.configKeysDrafts.configKeyDraftId,c.map(e=>i.Z(e)?e:n.Z())):void 0,g=[...f?[f]:[]],d=r?await o.Z.query.configKeysDrafts.findMany({where:(0,s.xD)(...g)}):[];c=c.filter(e=>!d.map(e=>e.configKeyDraftId).includes(e));let u=d.length?(0,s.Nl)(a.configKeys.configKeyId,d.map(e=>e.configKeyDraftId)):void 0,y=c?.length?(0,s.d3)(a.configKeys.configKeyId,c.filter(e=>i.Z(e))):void 0,l=c?.length?(0,s.d3)(a.configKeys.oldConfigKeyId,c.filter(e=>!i.Z(e))):void 0,p=[(0,s.Ft)(a.configKeys.deletedAt),(0,s.Ft)(a.pendingDeletion),...y&&l?[(0,s.or)(y,l)]:[],u],K=(await o.Z.select({configKey:a.configKeys,pendingDeletion:a.pendingDeletion}).from(a.configKeys).leftJoin(a.pendingDeletion,(0,s.eq)(a.pendingDeletion.configKeyId,a.configKeys.configKeyId)).where(p.length?(0,s.xD)(...p):void 0)).map(e=>e.configKey),h=K.length?await o.Z.query.pendingDeletion.findMany({where:(0,s.d3)(a.pendingDeletion.configKeyId,K.map(e=>e.configKeyId)),columns:{configKeyId:!0}}):[];return{data:[...K.map(e=>({...e,isDraft:!1,isDeleted:!1})),...d.map(e=>({...e.data,isDraft:!0,isDeleted:!1}))].sort((e,t)=>e.position-t.position).filter(e=>!h.map(e=>e.configKeyId).includes(e.configKeyId))}}catch(e){return c.Z.error("_getConfigKeys ERROR",e.message),{data:[],errors:[e.message]}}}async function g(e){let{configKeyId:t,returnDraftIfExists:r}={...e};try{if(!t)throw Error("Missing configKeyId");let e=i.Z(t)?(0,s.eq)(a.configKeys.configKeyId,t):void 0,n=i.Z(t)?void 0:(0,s.eq)(a.configKeys.oldConfigKeyId,t),c=e?(0,s.eq)(a.configKeysDrafts.configKeyDraftId,t):void 0,f=r&&c?await o.Z.query.configKeysDrafts.findFirst({where:e}):void 0,g=f?{...f.data,isDraft:!1,isDeleted:!1}:null;if(g)return{data:g};let d=await o.Z.query.configKeys.findFirst({where:(0,s.xD)((0,s.Ft)(a.configKeys.deletedAt),e||n),with:{draft:!0}});f=r?d?.draft:void 0;let u=f?.data||d;if(!(g=u?{...u,isDraft:!1,isDeleted:!1}:null))return{data:null};return{data:g}}catch(e){return c.Z.error("_getConfigKey ERROR",e.message),{errors:[e.message]}}}var d=r(60938);let u={allPublished:0,publishedWithDrafts:0,allDrafts:0,newDrafts:0,pendingDeletion:0};async function y(){try{let[{count:e}]=await o.Z.select({count:(0,d.QX)()}).from(a.configKeysDrafts),[{count:t}]=await o.Z.select({count:(0,d.QX)()}).from(a.configKeysDrafts).where((0,s.Ft)(a.configKeysDrafts.configKeyId)),[{count:r}]=await o.Z.select({count:(0,d.QX)()}).from(a.configKeysDrafts).where((0,s.K0)(a.configKeysDrafts.configKeyId)),[{count:i}]=await o.Z.select({count:(0,d.QX)()}).from(a.pendingDeletion).where((0,s.K0)(a.pendingDeletion.configKeyId)),[{count:n}]=await o.Z.select({count:(0,d.QX)()}).from(a.configKeys);return{data:{allPublished:n,publishedWithDrafts:r,allDrafts:e,newDrafts:t,pendingDeletion:i}}}catch(e){return c.Z.error("_getConfigKeys ERROR",e.message),{data:u,errors:[e.message]}}}},88317:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(55802).io)(process.env.NEXT_PUBLIC_APP_URL)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1633,1381,1744,3788,1490,5059,9092,5802,413,6267],()=>r(90977));module.exports=s})();
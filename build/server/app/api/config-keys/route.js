(()=>{var e={};e.id=4353,e.ids=[4353],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58359:()=>{},93739:()=>{},16498:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>m,requestAsyncStorage:()=>y,routeModule:()=>l,serverHooks:()=>K,staticGenerationAsyncStorage:()=>p});var s={};r.r(s),r.d(s,{DELETE:()=>u,GET:()=>g});var i=r(49303),n=r(88716),o=r(60670),a=r(87070),c=r(57435),f=r(72761),d=r(14171);async function g(e){try{if(!(await (0,f.$)()).yes)return a.NextResponse.json({errors:["Unauthorised"]});let t=JSON.parse(e.nextUrl.searchParams.get("data")||"{}"),r=await (0,d.getConfigKeys)(t);return a.NextResponse.json(r)}catch(e){return c.Z.error("[GET] /api/config-keys",e.message),a.NextResponse.json({errors:["Internal Error"]})}}async function u(e){try{if(!(await (0,f.$)()).yes)return a.NextResponse.json({errors:["Unauthorised"]});let t=JSON.parse(e.nextUrl.searchParams.get("data")||"{}"),r=await (0,d.deleteConfigKeys)(t);return a.NextResponse.json(r)}catch(e){return c.Z.error("[GET] /api/config-keys",e.message),a.NextResponse.json({errors:["Internal Error"]})}}let l=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/config-keys/route",pathname:"/api/config-keys",filename:"route",bundlePath:"app/api/config-keys/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/config-keys/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:y,staticGenerationAsyncStorage:p,serverHooks:K}=l,h="/api/config-keys/route";function m(){return(0,o.patchFetch)({serverHooks:K,staticGenerationAsyncStorage:p})}},14171:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_0:()=>h,$$ACTION_1:()=>D,$$ACTION_2:()=>x,$$ACTION_3:()=>b,$$ACTION_4:()=>Z,countConfigKeys:()=>m,deleteConfigKeys:()=>K,getConfigKey:()=>q,getConfigKeys:()=>w,saveConfigKeys:()=>I});var s=r(24330);r(60166);var i=r(57745),n=r(81445),o=r(9576),a=r(57435),c=r(10413),f=r(57418),d=r(88317);async function g({data:e,broadcastAction:t}){let r={success:!1};try{let t=[];for(let{configKeyId:r,...s}of e)try{let e=r||o.Z();if(!t.length){let t=r?await c.Z.query.configKeysDrafts.findFirst({where:(0,i.eq)(f.configKeysDrafts.configKeyDraftId,e)}):null,o=t||!r?null:await c.Z.query.configKeys.findFirst({where:(0,i.eq)(f.configKeys.configKeyId,e)});if(t){let r={...t.data,...s};await c.Z.update(f.configKeysDrafts).set({data:r,position:r.position}).where((0,i.eq)(f.configKeysDrafts.configKeyDraftId,e))}else{let t=s.position||o?.position;if(!t){let e=await c.Z.query.configKeys.findFirst({columns:{position:!0},orderBy:(0,n.C)(f.configKeys.position)}),r=await c.Z.query.configKeysDrafts.findFirst({columns:{position:!0},orderBy:(0,n.C)(f.configKeysDrafts.position)});t=Math.max(0,e?.position||0,r?.position||0)+1}let r={...o,...s,configKeyId:e,version:o?.version?o.version+1:1,position:t};await c.Z.insert(f.configKeysDrafts).values({data:r,configKeyDraftId:e,position:r.position,configKeyId:o?.configKeyId})}}}catch(e){t.push(e.message)}t.length?r.errors=t:r.success=!0}catch(e){r.success=!1,r.errors=[e.message],a.Z.error("_saveConfigKeys ERROR",e.message)}finally{return!r?.errors?.length&&t&&d.Z.emit("data_changed","save_config_keys"),r}}async function u({configKeysIds:e,broadcastAction:t}){let r={success:!1};try{if(e.length){await c.Z.delete(f.configKeysDrafts).where((0,i.d3)(f.configKeysDrafts.configKeyDraftId,e));let t=(await c.Z.select({configKeyId:f.configKeys.configKeyId,pendingDeletion:f.pendingDeletion.configKeyId}).from(f.configKeys).leftJoin(f.pendingDeletion,(0,i.eq)(f.pendingDeletion.configKeyId,f.configKeys.configKeyId)).where((0,i.d3)(f.configKeys.configKeyId,e))).filter(e=>!e.pendingDeletion);t.length&&await c.Z.insert(f.pendingDeletion).values(t)}r.success=!0}catch(e){r.success=!1,r.errors=[e.message],a.Z.error("_deleteConfigKeys ERROR",e.message)}finally{return!r?.errors?.length&&t&&d.Z.emit("data_changed","delete_config_keys"),r}}var l=r(17137),y=r(66267),p=r(40618);let K=(0,s.j)("c2b12aa0d7aed4712e9b15cabd142f1bcb0ce3bc",h);async function h(...e){try{return await (0,y.isAllowed)(),await u(...e)}catch(e){return a.Z.error("deleteConfigKeys ERROR",e.message),{errors:[e.message],success:!1}}}let m=(0,s.j)("33c0d361eb7190bfd0fec7650477a9f43745f63b",D);async function D(...e){try{return await (0,y.isAllowed)(),await (0,l.G$)(...e)}catch(e){return a.Z.error("countConfigKeys ERROR",e.message),{errors:[e.message],data:l.ZV}}}let w=(0,s.j)("cb2ccf083bb4a6d9c0b9bd2b6edf1dbb53ae0def",x);async function x(...e){try{return await (0,y.isAllowed)(),await (0,l.aP)(...e)}catch(e){return a.Z.error("getConfigKeys ERROR",e.message),{errors:[e.message],data:[]}}}let q=(0,s.j)("9d451b8f2a93c9c12dfa54622e92bfc58cb710dc",b);async function b(...e){return await (0,y.isAllowed)(),await (0,l.SL)(...e)}let I=(0,s.j)("3adc2d5b06a0defdb2c31b839b695e1963d6b01f",Z);async function Z(...e){try{return await (0,y.isAllowed)(),await g(...e)}catch(e){return a.Z.error("getSys ERROR",e.message),{errors:[e.message],data:void 0,success:!1}}}(0,p.h)([K,m,w,q,I]),(0,s.j)("3a6e02f88090d92649810542b3b40ef156568a23",K),(0,s.j)("8dd8b6f0870c03a2646c2ee913593315f92fa8d8",m),(0,s.j)("5af1d282c02d9979c16b4296103bc97cd2c560fb",w),(0,s.j)("5af2d5491020f5b5094bc9ebd753d26d3f8c486f",q),(0,s.j)("8091dff533da28f1485fd3c33b345f0e3595bf53",I)},17137:(e,t,r)=>{"use strict";r.d(t,{G$:()=>l,ZV:()=>u,SL:()=>d,aP:()=>f});var s=r(57745),i=r(30900),n=r(9576),o=r(10413),a=r(57418),c=r(57435);async function f(e){try{let{configKeysIds:t,returnDraftsIfExist:r}={...e},c=t||[],f=c?.length?(0,s.d3)(a.configKeysDrafts.configKeyDraftId,c.map(e=>i.Z(e)?e:n.Z())):void 0,d=[...f?[f]:[]],g=r?await o.Z.query.configKeysDrafts.findMany({where:(0,s.xD)(...d)}):[];c=c.filter(e=>!g.map(e=>e.configKeyDraftId).includes(e));let u=g.length?(0,s.Nl)(a.configKeys.configKeyId,g.map(e=>e.configKeyDraftId)):void 0,l=c?.length?(0,s.d3)(a.configKeys.configKeyId,c.filter(e=>i.Z(e))):void 0,y=c?.length?(0,s.d3)(a.configKeys.oldConfigKeyId,c.filter(e=>!i.Z(e))):void 0,p=[(0,s.Ft)(a.configKeys.deletedAt),(0,s.Ft)(a.pendingDeletion),...l&&y?[(0,s.or)(l,y)]:[],u],K=(await o.Z.select({configKey:a.configKeys,pendingDeletion:a.pendingDeletion}).from(a.configKeys).leftJoin(a.pendingDeletion,(0,s.eq)(a.pendingDeletion.configKeyId,a.configKeys.configKeyId)).where(p.length?(0,s.xD)(...p):void 0)).map(e=>e.configKey),h=K.length?await o.Z.query.pendingDeletion.findMany({where:(0,s.d3)(a.pendingDeletion.configKeyId,K.map(e=>e.configKeyId)),columns:{configKeyId:!0}}):[];return{data:[...K.map(e=>({...e,isDraft:!1,isDeleted:!1})),...g.map(e=>({...e.data,isDraft:!0,isDeleted:!1}))].sort((e,t)=>e.position-t.position).filter(e=>!h.map(e=>e.configKeyId).includes(e.configKeyId))}}catch(e){return c.Z.error("_getConfigKeys ERROR",e.message),{data:[],errors:[e.message]}}}async function d(e){let{configKeyId:t,returnDraftIfExists:r}={...e};try{if(!t)throw Error("Missing configKeyId");let e=i.Z(t)?(0,s.eq)(a.configKeys.configKeyId,t):void 0,n=i.Z(t)?void 0:(0,s.eq)(a.configKeys.oldConfigKeyId,t),c=e?(0,s.eq)(a.configKeysDrafts.configKeyDraftId,t):void 0,f=r&&c?await o.Z.query.configKeysDrafts.findFirst({where:e}):void 0,d=f?{...f.data,isDraft:!1,isDeleted:!1}:null;if(d)return{data:d};let g=await o.Z.query.configKeys.findFirst({where:(0,s.xD)((0,s.Ft)(a.configKeys.deletedAt),e||n),with:{draft:!0}});f=r?g?.draft:void 0;let u=f?.data||g;if(!(d=u?{...u,isDraft:!1,isDeleted:!1}:null))return{data:null};return{data:d}}catch(e){return c.Z.error("_getConfigKey ERROR",e.message),{errors:[e.message]}}}var g=r(60938);let u={allPublished:0,publishedWithDrafts:0,allDrafts:0,newDrafts:0,pendingDeletion:0};async function l(){try{let[{count:e}]=await o.Z.select({count:(0,g.QX)()}).from(a.configKeysDrafts),[{count:t}]=await o.Z.select({count:(0,g.QX)()}).from(a.configKeysDrafts).where((0,s.Ft)(a.configKeysDrafts.configKeyId)),[{count:r}]=await o.Z.select({count:(0,g.QX)()}).from(a.configKeysDrafts).where((0,s.K0)(a.configKeysDrafts.configKeyId)),[{count:i}]=await o.Z.select({count:(0,g.QX)()}).from(a.pendingDeletion).where((0,s.K0)(a.pendingDeletion.configKeyId)),[{count:n}]=await o.Z.select({count:(0,g.QX)()}).from(a.configKeys);return{data:{allPublished:n,publishedWithDrafts:r,allDrafts:e,newDrafts:t,pendingDeletion:i}}}catch(e){return c.Z.error("_getConfigKeys ERROR",e.message),{data:u,errors:[e.message]}}}},88317:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(55802).io)(process.env.NEXT_PUBLIC_APP_URL)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[5822,1744,3788,1490,5802,5059,413,6267],()=>r(16498));module.exports=s})();
"use strict";(()=>{var e={};e.id=5205,e.ids=[5205],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},916:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>w,patchFetch:()=>y,requestAsyncStorage:()=>h,routeModule:()=>c,serverHooks:()=>x,staticGenerationAsyncStorage:()=>f});var r={};a.r(r),a.d(r,{POST:()=>u});var s=a(49303),i=a(88716),o=a(60670),l=a(87070),n=a(72761),p=a(5973),d=a(57435);async function u(e){try{if(!(await (0,n.$)()).yes)return l.NextResponse.json({errors:["Unauthorised"]},{status:200});let t=await e.json(),a=await (0,p.updateHospitals)(t.data);return l.NextResponse.json(a)}catch(e){return d.Z.log("/api/hospitals/update",e),l.NextResponse.json({errors:[e.message]})}}let c=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/hospitals/update/route",pathname:"/api/hospitals/update",filename:"route",bundlePath:"app/api/hospitals/update/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/hospitals/update/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:h,staticGenerationAsyncStorage:f,serverHooks:x}=c,w="/api/hospitals/update/route";function y(){return(0,o.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:f})}},5973:(e,t,a)=>{a.r(t),a.d(t,{$$ACTION_0:()=>H,$$ACTION_1:()=>O,$$ACTION_2:()=>F,$$ACTION_3:()=>N,createHospitals:()=>$,deleteHospitals:()=>_,getFullHospital:()=>I,getHospital:()=>v,getHospitals:()=>A,searchHospitals:()=>Z,updateHospitals:()=>E});var r=a(24330);a(60166);var s=a(57745),i=a(9576),o=a(10413),l=a(57418),n=a(34149),p=a(60938),d=a(81445),u=a(30900),c=a(41502),h=a(57435);async function f(e){let t=u.Z(e)?(0,s.eq)(l.hospitals.hospitalId,e):(0,s.eq)(l.hospitals.oldHospitalId,e);return await o.Z.query.hospitals.findFirst({where:(0,s.xD)(t,(0,s.Ft)(l.hospitals.deletedAt)),columns:{id:!0,hospitalId:!0,name:!0,oldHospitalId:!0}})}async function x(e){let t=u.Z(e)?(0,s.eq)(l.hospitals.hospitalId,e):(0,s.eq)(l.hospitals.oldHospitalId,e);return await o.Z.query.hospitals.findFirst({where:(0,s.xD)(t,(0,s.Ft)(l.hospitals.deletedAt))})}async function w({limit:e,archived:t,page:a=1,hospitalIds:r,searchValue:i}){a=Math.max(0,a);let u=[];if(t?u.push((0,s.K0)(l.hospitals.deletedAt)):u.push((0,s.Ft)(l.hospitals.deletedAt)),r?.length&&u.push((0,s.d3)(l.hospitals.hospitalId,r)),i=`${i||""}`.trim()){let e=["%",i,"%"].join("");u.push((0,n.i6)`LOWER(hospitals.name) like LOWER(${e})`)}let h=o.Z.select({count:(0,p.QX)()}).from(l.hospitals);u.length&&h.where((0,s.xD)(...u));let[{count:f}]=await h.execute(),x=1;f&&(a=Math.min(a,x=(0,c.x)(e)?1:Math.ceil(f/e)));let w=(0,c.x)(e)?void 0:Math.max(0,(a-1)*e),y=await o.Z.query.hospitals.findMany({where:u.length?(0,s.xD)(...u):void 0,limit:(0,c.x)(e)?void 0:e,orderBy:(0,d.C)(l.hospitals.id),offset:w,columns:{id:!0,hospitalId:!0,name:!0,oldHospitalId:!0}});return{page:a,limit:e,data:y,totalRows:f,totalPages:x,searchValue:i,error:void 0}}let y={page:1,limit:void 0,totalRows:0,totalPages:1,data:[],searchValue:void 0,error:void 0};async function q(e){let t=y;try{t=await w(e)}catch(e){h.Z.error("_getHospitals ERROR",e),t.error=e.message}finally{return t}}async function b(e){if(e.length){let t=(0,s.d3)(l.hospitals.hospitalId,e),a=new Date;await o.Z.update(l.hospitals).set({deletedAt:a}).where(t)}return!0}async function g(e,t){let a=[];for(let t of e)a.push({...t,hospitalId:t.hospitalId||(0,i.Z)()});let r={inserted:[],success:!1};try{if(await o.Z.insert(l.hospitals).values(a),t?.returnInserted){let e=await q({hospitalIds:a.map(e=>e.hospitalId)});r.inserted=e.data}r.success=!0}catch(e){r.error=e.message}finally{return r}}async function m(e,t){let a=[];for(let{hospitalId:r,data:i}of e)try{delete i.id,delete i.createdAt,delete i.updatedAt,delete i.oldHospitalId,delete i.hospitalId,await o.Z.update(l.hospitals).set(i).where((0,s.eq)(l.hospitals.hospitalId,r));let e=t?.returnUpdated?await f(r):void 0;a.push({hospitalId:r,hospital:e})}catch(e){a.push({hospitalId:r,error:e.message})}return a}var R=a(66267),j=a(40618);async function v(e){try{return await (0,R.isAllowed)("get_hospital"),await f(e)||null}catch(e){return h.Z.error("getHospital ERROR:",e),null}}async function I(e){try{return await (0,R.isAllowed)("get_hospital"),await x(e)||null}catch(e){return h.Z.error("getFullHospital ERROR:",e),null}}let A=(0,r.j)("722df2eb81d6901644ad9eadd578284b693e02df",H);async function H(...e){try{return await (0,R.isAllowed)("get_hospitals"),await q(...e)}catch(e){return{...y,error:e.message}}}let Z=(0,r.j)("7badc5813153ab449d43a950ee717949bee4b73f",O);async function O(...e){try{return await (0,R.isAllowed)("search_hospitals"),await q(...e)}catch(e){return{...y,error:e.message}}}async function _(e){return await (0,R.isAllowed)("delete_hospitals"),e.length&&await b(e),!0}let $=(0,r.j)("0e3c0ad7f0b4a17c9ea85569d6f68d67646b35e7",F);async function F(...e){try{return await (0,R.isAllowed)("create_hospitals"),await g(...e)}catch(e){throw h.Z.error("createHospitals ERROR",e),e}}let E=(0,r.j)("ad451422ee0e8d7be85f07dd8f65cc186afee186",N);async function N(...e){try{return await (0,R.isAllowed)("update_hospitals"),await m(...e)}catch(e){throw h.Z.error("updateHospitals ERROR",e),e}}(0,j.h)([v,I,A,Z,_,$,E]),(0,r.j)("6cb2303157c9ed693f7ae3c03b0c029c027238e6",v),(0,r.j)("cfc91cdfe0ca46d2ac7380d818a5b5b06b272f50",I),(0,r.j)("7ddbd6d73a428b212e13712785bbe2a47dba0f7e",A),(0,r.j)("0fdec2a36177cba16f69e460c423861bbf404e5b",Z),(0,r.j)("4e8ea467f6e3c24a6d19367ff4f150839963fa5c",_),(0,r.j)("8d0e8853fd9e4c89d36268a7f266efbb50bdf11c",$),(0,r.j)("58d233f62675141721c552c27bec89c6ba4be640",E)}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[5822,1744,3788,1490,5059,413,6267],()=>a(916));module.exports=r})();
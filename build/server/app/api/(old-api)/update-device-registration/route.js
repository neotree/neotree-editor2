"use strict";(()=>{var e={};e.id=5010,e.ids=[5010],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},46682:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>h,patchFetch:()=>v,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>g,staticGenerationAsyncStorage:()=>q});var s={};t.r(s),t.d(s,{POST:()=>x});var o=t(49303),i=t(88716),n=t(60670),a=t(87070),p=t(57435),u=t(72761),d=t(55249);async function x(e){try{if(!(await (0,u.$)()).yes)return a.NextResponse.json({errors:["Unauthorised"]});let r=await e.json();p.Z.log(`[POST]: ${e.url}`,r);let t=await (0,d.w)({data:[r],returnSaved:!0});if(t.errors?.length)return a.NextResponse.json({errors:t.errors});return a.NextResponse.json({device:t.inserted[0]})}catch(e){return p.Z.error("[POST] /api/update-device-registration",e.message),a.NextResponse.json({errors:["Internal Error"]})}}let c=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/(old-api)/update-device-registration/route",pathname:"/api/update-device-registration",filename:"route",bundlePath:"app/api/(old-api)/update-device-registration/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/(old-api)/update-device-registration/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:q,serverHooks:g}=c,h="/api/(old-api)/update-device-registration/route";function v(){return(0,n.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:q})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[1633,1381,1744,3788,1490,9092,5802,5059,413,6427],()=>t(46682));module.exports=s})();
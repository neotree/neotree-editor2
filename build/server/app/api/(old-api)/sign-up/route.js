"use strict";(()=>{var e={};e.id=7598,e.ids=[7598],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},9523:e=>{e.exports=require("dns")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},9549:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>h,patchFetch:()=>f,requestAsyncStorage:()=>c,routeModule:()=>q,serverHooks:()=>m,staticGenerationAsyncStorage:()=>g});var s={};t.r(s),t.d(s,{POST:()=>d});var o=t(49303),i=t(88716),n=t(60670),p=t(87070),a=t(57435),u=t(72761),x=t(47625),l=t(5803);async function d(e){try{if(a.Z.log(`[POST]: ${e.url}`),!(await (0,u.$)()).yes)return p.NextResponse.json({errors:["Unauthorised"]});let{username:r,password:t,password2:s}=await e.json(),{errors:o}=await (0,l.setPassword)({email:r,password:t,passwordConfirm:s});if(o?.length)return p.NextResponse.json({errors:o});let i=r?await (0,x.C)(r):null;if(!i)return p.NextResponse.json({errors:["Something went wrong, try again!"]});let n={id:i.id,displayName:i.displayName,userId:i.userId,email:i.email,role:i.role};return p.NextResponse.json({user:n})}catch(e){return a.Z.error("[POST] /api/sign-up",e.message),p.NextResponse.json({errors:["Internal Error"]})}}let q=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/(old-api)/sign-up/route",pathname:"/api/sign-up",filename:"route",bundlePath:"app/api/(old-api)/sign-up/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/(old-api)/sign-up/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:g,serverHooks:m}=q,h="/api/(old-api)/sign-up/route";function f(){return(0,n.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:g})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[5822,1744,3788,1490,5972,5245,413,6267,5803],()=>t(9549));module.exports=s})();
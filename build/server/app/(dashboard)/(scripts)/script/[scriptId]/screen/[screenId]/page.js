"use strict";(()=>{var e={};e.id=7181,e.ids=[7181],e.modules={67096:e=>{e.exports=require("bcrypt")},47849:e=>{e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},13625:(e,r,t)=>{t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>l,pages:()=>c,routeModule:()=>x,tree:()=>p}),t(49888),t(72215),t(423),t(49246),t(57890),t(95602),t(17162),t(56367),t(12699),t(69684),t(96560);var s=t(23191),i=t(88716),o=t(37922),a=t.n(o),n=t(95231),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(r,d);let p=["",{children:["(dashboard)",{children:["(scripts)",{children:["script",{children:["[scriptId]",{children:["screen",{children:["[screenId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,49888)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/[scriptId]/screen/[screenId]/page.tsx"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,72215)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/[scriptId]/screen/[screenId]/loading.tsx"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,423)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/[scriptId]/screen/loading.tsx"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,49246)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/[scriptId]/loading.tsx"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,57890)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,95602)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,17162)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,56367)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,12699)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,69684)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,96560)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/not-found.tsx"]}],c=["/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/[scriptId]/screen/[screenId]/page.tsx"],l="/(dashboard)/(scripts)/script/[scriptId]/screen/[screenId]/page",u={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(dashboard)/(scripts)/script/[scriptId]/screen/[screenId]/page",pathname:"/script/[scriptId]/screen/[screenId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},72215:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var s=t(19510),i=t(62553);function o(){return s.jsx(i.a,{overlay:!0})}},49888:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var s=t(19510),i=t(97283),o=t(85431),a=t(86098),n=t(70305),d=t(41236);async function p({params:{screenId:e,scriptId:r}}){let[t,p]=await Promise.all([(0,i.getScreen)({screenId:e,returnDraftIfExists:!0}),(0,i.getScript)({scriptId:r,returnDraftIfExists:!0})]);return p.data?t.data?(0,s.jsxs)(s.Fragment,{children:[s.jsx(o.D,{children:"Edit screen - "+t.data.title}),s.jsx(d._,{title:"Edit screen",backLink:`/script/${r}`,children:s.jsx(n.J,{scriptId:r,formData:t.data})})]}):s.jsx(a.b,{title:"Not found",message:"Screen was not found or it might have been deleted!",redirectTo:`/script/${r}?section=screens`}):s.jsx(a.b,{title:"Error",message:"Failed to load script!",redirectTo:`/script/${r}?section=screens`})}},423:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var s=t(19510),i=t(62553);function o(){return s.jsx(i.a,{overlay:!0})}}};var r=require("../../../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[5822,1744,3788,1490,5802,4084,7708,6620,9387,7938,4723,1813,6943,6318,8214,3024,5325,413,6267,8151,3911,3856,3269,7283,565,7228,1548,2475,3118],()=>t(13625));module.exports=s})();
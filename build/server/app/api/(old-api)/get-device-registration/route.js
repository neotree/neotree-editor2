(()=>{var e={};e.id=5938,e.ids=[5938],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},58359:()=>{},93739:()=>{},64872:(e,r,t)=>{"use strict";t.r(r),t.d(r,{originalPathname:()=>v,patchFetch:()=>h,requestAsyncStorage:()=>l,routeModule:()=>d,serverHooks:()=>g,staticGenerationAsyncStorage:()=>q});var s={};t.r(s),t.d(s,{GET:()=>x});var i=t(49303),o=t(88716),u=t(60670),n=t(87070),p=t(57435),a=t(72761),c=t(92570);async function x(e){try{if(p.Z.log(`[GET]: ${e.url}`),!(await (0,a.$)()).yes)return n.NextResponse.json({errors:["Unauthorised"]});let r=e.nextUrl.searchParams.get("deviceId"),t=await (0,c._)(r);if(t.errors?.length)return n.NextResponse.json({errors:t.errors});return n.NextResponse.json({...t})}catch(e){return p.Z.error("[GET] /api/get-device-registration",e.message),n.NextResponse.json({errors:["Internal Error"]})}}let d=new i.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/(old-api)/get-device-registration/route",pathname:"/api/get-device-registration",filename:"route",bundlePath:"app/api/(old-api)/get-device-registration/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/(old-api)/get-device-registration/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:q,serverHooks:g}=d,v="/api/(old-api)/get-device-registration/route";function h(){return(0,u.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:q})}},88317:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s=(0,t(55802).io)(process.env.NEXT_PUBLIC_APP_URL)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[1633,1744,1381,3788,1490,5059,9092,5802,413,7345],()=>t(64872));module.exports=s})();
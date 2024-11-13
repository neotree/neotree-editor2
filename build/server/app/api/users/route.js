"use strict";(()=>{var e={};e.id=5701,e.ids=[5701],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},1564:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>m,patchFetch:()=>x,requestAsyncStorage:()=>w,routeModule:()=>f,serverHooks:()=>y,staticGenerationAsyncStorage:()=>h});var s={};t.r(s),t.d(s,{DELETE:()=>p,GET:()=>l});var a=t(49303),o=t(88716),n=t(60670),i=t(87070),u=t(57435),c=t(72761),d=t(73508);async function l(e){try{if(!(await (0,c.$)()).yes)return i.NextResponse.json({errors:["Unauthorised"]});let r=JSON.parse(e.nextUrl.searchParams.get("data")||"{}"),t=await (0,d.getUsers)(r);return i.NextResponse.json(t)}catch(e){return u.Z.error("[GET] /api/users",e.message),i.NextResponse.json({errors:["Internal Error"]})}}async function p(e){try{if(!(await (0,c.$)()).yes)return i.NextResponse.json({errors:["Unauthorised"]});let r=JSON.parse(e.nextUrl.searchParams.get("data")||"{}"),t=await (0,d.deleteUsers)(r);return i.NextResponse.json(t)}catch(e){return u.Z.error("[GET] /api/users",e.message),i.NextResponse.json({errors:["Internal Error"]})}}let f=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/users/route",pathname:"/api/users",filename:"route",bundlePath:"app/api/users/route"},resolvedPagePath:"/home/farai/Workbench/Neotree/neotree-editor-master/app/api/users/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:w,staticGenerationAsyncStorage:h,serverHooks:y}=f,m="/api/users/route";function x(){return(0,n.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:h})}},73508:(e,r,t)=>{t.r(r),t.d(r,{$$ACTION_0:()=>j,$$ACTION_1:()=>E,$$ACTION_2:()=>A,$$ACTION_3:()=>_,$$ACTION_4:()=>Z,createUsers:()=>U,deleteUsers:()=>I,getFullUser:()=>q,getUser:()=>b,getUsers:()=>R,isEmailRegistered:()=>g,searchUsers:()=>v,setPassword:()=>O,updateUsers:()=>N});var s=t(24330);t(60166);var a=t(67096),o=t.n(a),n=t(57745),i=t(9576),u=t(30900),c=t(10413),d=t(43509),l=t(47625);async function p(e){for(let r of e){let e=new Date;await c.Z.update(d.users).set({deletedAt:e,email:r,displayName:"Former user",firstName:null,lastName:null,avatar:null,avatar_md:null,avatar_sm:null}).where((0,n.eq)(d.users.userId,r))}return!0}async function f(e,r){let t=[];for(let r of e){let e=await o().genSalt(10),s=await o().hash(r.password||(0,i.Z)(),e);t.push({...r,password:s,userId:r.userId||(0,i.Z)()})}let s={inserted:[],success:!1};try{if(await c.Z.insert(d.users).values(t),r?.returnInserted){let e=await (0,l.yT)({userIds:t.map(e=>e.userId)});s.inserted=e.data}s.success=!0}catch(e){s.error=e.message}finally{return s}}async function w(e,r){let t=[];for(let{userId:s,data:a}of e)try{let e=(0,u.Z)(s)?(0,n.eq)(d.users.userId,s):(0,n.eq)(d.users.email,s);delete a.id,delete a.createdAt,delete a.updatedAt,delete a.email,delete a.userId,await c.Z.update(d.users).set(a).where(e);let o=r?.returnUpdated?await (0,l.IQ)(s):void 0;t.push({userId:s,user:o})}catch(e){t.push({userId:s,error:e.message})}return t}var h=t(57435),y=t(70733),m=t(66267),x=t(40618);async function g(e){try{let r=await (0,l.IQ)(e);return{yes:!!r,isActive:!!r?.isActive}}catch(e){return h.Z.error("getUser ERROR:",e),{errors:[e.message],yes:!1}}}async function b(e){try{return await (0,m.isAllowed)("get_user"),await (0,l.IQ)(e)||null}catch(e){return h.Z.error("getUser ERROR:",e),null}}async function q(e){try{return await (0,m.isAllowed)("get_user"),await (0,l.C)(e)||null}catch(e){return h.Z.error("getFullUser ERROR:",e),null}}let R=(0,s.j)("7ed58da9bdd1fcaabea1b4a8c01155185ea42d50",j);async function j(...e){try{return await (0,m.isAllowed)("get_users"),await (0,l.yT)(...e)}catch(e){return{...l.Ko,error:e.message}}}let v=(0,s.j)("30776f4c4a368e78980f8117cefaf77df1f67743",E);async function E(...e){try{return await (0,m.isAllowed)("search_users"),await (0,l.yT)(...e)}catch(e){return{...l.Ko,error:e.message}}}async function I(e){if(await (0,m.isAllowed)("delete_users"),e.length){let{data:r}=await (0,l.yT)({userIds:e});await p(e)}return!0}let U=(0,s.j)("46092427241ea6fbfbd33cf01bdd70a14cf92f90",A);async function A(...e){try{await (0,m.isAllowed)("create_users");let r=await f(...e);for(let r of e[0])try{await (0,y.n)({userId:r.userId,hoursValid:1})}catch(e){}return r}catch(e){throw h.Z.error("createUsers ERROR",e),e}}let N=(0,s.j)("e643f22d4242e305446816ef0c71ada1ec53143f",_);async function _(...e){try{return await (0,m.isAllowed)("update_users"),await w(...e)}catch(e){throw h.Z.error("updateUsers ERROR",e),e}}let O=(0,s.j)("2c56cdafc83bcdd180a689448b216edb18936af9",Z);async function Z(e){try{if(!e.password)throw Error("Missing: password");if(!e.email)throw Error("Missing: email");if(e.password.length<6)throw Error("Password is too short: min 6 characters");if(e.password!==e.passwordConfirm)throw Error("Password confirmation does not match!");let r=await o().genSalt(10),t=await o().hash(e.password,r),s=await w([{userId:e.email,data:{password:t}}]);if(s.filter(e=>e.error).length)throw Error(s.filter(e=>e.error).map(e=>e.error).join(", "));return{success:!0}}catch(e){return h.Z.error("setPassword ERROR",e),{success:!1,errors:[e.message]}}}(0,x.h)([g,b,q,R,v,I,U,N,O]),(0,s.j)("8002a85e229f7939cdcf277a95e859c8310681f6",g),(0,s.j)("15e9024c7a317568a0bfe153647ab40d4a782996",b),(0,s.j)("67f588a162fcecb1a75791f69b6cff347ad9923a",q),(0,s.j)("38db96d8998f5107454ecf82118abd7af347d295",R),(0,s.j)("1977ec2d9d02f9d05c365f2b0c361b6bda56d4b9",v),(0,s.j)("cdb03413b17de7f459a06c1da6dcecd39449a521",I),(0,s.j)("1a887bafa5bdbb80006e55a4af6cb4a8b6c64b5d",U),(0,s.j)("86bb37e35f63659c1e7cf3ba878f97f6925e4521",N),(0,s.j)("1d50295030f25981c6202bf941a3b2576a09a317",O)},70733:(e,r,t)=>{t.d(r,{n:()=>i});var s=t(51744),a=t.n(s),o=t(10413),n=t(43509);async function i({userId:e,hoursValid:r}){return(await o.Z.insert(n.tokens).values({userId:e,validUntil:a()(new Date).add(r,"hour").toDate(),token:Math.floor(1e5+9e5*Math.random())}).returning())[0]}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[1633,1744,1381,3788,1490,5059,413,6267],()=>t(1564));module.exports=s})();
"use strict";(()=>{var e={};e.id=4832,e.ids=[4832],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},45962:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>w,patchFetch:()=>b,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>f,staticGenerationAsyncStorage:()=>p});var s={};t.r(s),t.d(s,{POST:()=>d});var a=t(49303),o=t(88716),i=t(60670),n=t(87070),u=t(73508);async function d(e){let r=await e.json(),t=await (0,u.setPassword)(r);return n.NextResponse.json(t)}let c=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/users/set-password/route",pathname:"/api/users/set-password",filename:"route",bundlePath:"app/api/users/set-password/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/users/set-password/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:p,serverHooks:f}=c,w="/api/users/set-password/route";function b(){return(0,i.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:p})}},73508:(e,r,t)=>{t.r(r),t.d(r,{$$ACTION_0:()=>v,$$ACTION_1:()=>A,$$ACTION_2:()=>_,$$ACTION_3:()=>E,$$ACTION_4:()=>P,createUsers:()=>U,deleteUsers:()=>I,getFullUser:()=>q,getUser:()=>g,getUsers:()=>j,isEmailRegistered:()=>x,searchUsers:()=>R,setPassword:()=>Z,updateUsers:()=>O});var s=t(24330);t(60166);var a=t(67096),o=t.n(a),i=t(57745),n=t(9576),u=t(30900),d=t(10413),c=t(57418),l=t(47625);async function p(e){for(let r of e){let e=new Date;await d.Z.update(c.users).set({deletedAt:e,email:r,displayName:"Former user",firstName:null,lastName:null,avatar:null,avatar_md:null,avatar_sm:null}).where((0,i.eq)(c.users.userId,r))}return!0}async function f(e,r){let t=[];for(let r of e){let e=await o().genSalt(10),s=await o().hash(r.password||(0,n.Z)(),e);t.push({...r,password:s,userId:r.userId||(0,n.Z)()})}let s={inserted:[],success:!1};try{if(await d.Z.insert(c.users).values(t),r?.returnInserted){let e=await (0,l.yT)({userIds:t.map(e=>e.userId)});s.inserted=e.data}s.success=!0}catch(e){s.error=e.message}finally{return s}}async function w(e,r){let t=[];for(let{userId:s,data:a}of e)try{let e=(0,u.Z)(s)?(0,i.eq)(c.users.userId,s):(0,i.eq)(c.users.email,s);delete a.id,delete a.createdAt,delete a.updatedAt,delete a.email,delete a.userId,await d.Z.update(c.users).set(a).where(e);let o=r?.returnUpdated?await (0,l.IQ)(s):void 0;t.push({userId:s,user:o})}catch(e){t.push({userId:s,error:e.message})}return t}var b=t(57435),h=t(70733),y=t(66267),m=t(40618);async function x(e){try{let r=await (0,l.IQ)(e);return{yes:!!r,isActive:!!r?.isActive}}catch(e){return b.Z.error("getUser ERROR:",e),{errors:[e.message],yes:!1}}}async function g(e){try{return await (0,y.isAllowed)("get_user"),await (0,l.IQ)(e)||null}catch(e){return b.Z.error("getUser ERROR:",e),null}}async function q(e){try{return await (0,y.isAllowed)("get_user"),await (0,l.C)(e)||null}catch(e){return b.Z.error("getFullUser ERROR:",e),null}}let j=(0,s.j)("5882312855a480b48e4a548efe7ab3b4b7be1cbd",v);async function v(...e){try{return await (0,y.isAllowed)("get_users"),await (0,l.yT)(...e)}catch(e){return{...l.Ko,error:e.message}}}let R=(0,s.j)("4f324e3ae3e95d4bfe179d6c364878b829b5679f",A);async function A(...e){try{return await (0,y.isAllowed)("search_users"),await (0,l.yT)(...e)}catch(e){return{...l.Ko,error:e.message}}}async function I(e){if(await (0,y.isAllowed)("delete_users"),e.length){let{data:r}=await (0,l.yT)({userIds:e});await p(e)}return!0}let U=(0,s.j)("e3b5e0f3bf52df374364240f2245074b5ed484f1",_);async function _(...e){try{await (0,y.isAllowed)("create_users");let r=await f(...e);for(let r of e[0])try{await (0,h.n)({userId:r.userId,hoursValid:1})}catch(e){}return r}catch(e){throw b.Z.error("createUsers ERROR",e),e}}let O=(0,s.j)("1e2ece632c05346b91ecbbe64716357a90904f1c",E);async function E(...e){try{return await (0,y.isAllowed)("update_users"),await w(...e)}catch(e){throw b.Z.error("updateUsers ERROR",e),e}}let Z=(0,s.j)("f943206d994a6c059b7a83fb53bb2461ea73c0f9",P);async function P(e){try{if(!e.password)throw Error("Missing: password");if(!e.email)throw Error("Missing: email");if(e.password.length<6)throw Error("Password is too short: min 6 characters");if(e.password!==e.passwordConfirm)throw Error("Password confirmation does not match!");let r=await o().genSalt(10),t=await o().hash(e.password,r),s=await w([{userId:e.email,data:{password:t}}]);if(s.filter(e=>e.error).length)throw Error(s.filter(e=>e.error).map(e=>e.error).join(", "));return{success:!0}}catch(e){return b.Z.error("setPassword ERROR",e),{success:!1,errors:[e.message]}}}(0,m.h)([x,g,q,j,R,I,U,O,Z]),(0,s.j)("e14de0855656a139be38da1eb195d1260aab939f",x),(0,s.j)("3b283529780cec927ba8cf799424ba93a64cf967",g),(0,s.j)("3668a8b3d9cb731ce980e807e685806a5e398296",q),(0,s.j)("1632ab3ee9c3ed1d9c642ca6d6aad0d465c2b78d",j),(0,s.j)("7dea9d27942bd3f422efbcb2759f2a1e6f0e47b0",R),(0,s.j)("f473c495622b12310fe5bb30b7bd203dd6af5dd6",I),(0,s.j)("b0f3eb0c3196b639a47bea345c9cc318d1f0ee7d",U),(0,s.j)("8d2db919828d70c401076c38fa1f04c6336f324c",O),(0,s.j)("fa4dbf779724bf266c414c4e02f67703fb4d21fe",Z)},70733:(e,r,t)=>{t.d(r,{n:()=>n});var s=t(51744),a=t.n(s),o=t(10413),i=t(57418);async function n({userId:e,hoursValid:r}){return(await o.Z.insert(i.tokens).values({userId:e,validUntil:a()(new Date).add(r,"hour").toDate(),token:Math.floor(1e5+9e5*Math.random())}).returning())[0]}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[1633,1744,1381,3788,1490,5059,413,6267],()=>t(45962));module.exports=s})();
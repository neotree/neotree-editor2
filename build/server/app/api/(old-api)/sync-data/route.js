"use strict";(()=>{var e={};e.id=3699,e.ids=[3699],e.modules={67096:e=>{e.exports=require("bcrypt")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},49411:e=>{e.exports=require("node:path")},22037:e=>{e.exports=require("os")},4074:e=>{e.exports=require("perf_hooks")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},71527:(e,t,i)=>{i.r(t),i.d(t,{originalPathname:()=>w,patchFetch:()=>v,requestAsyncStorage:()=>x,routeModule:()=>I,serverHooks:()=>A,staticGenerationAsyncStorage:()=>K});var r={};i.r(r),i.d(r,{GET:()=>h});var s=i(49303),a=i(88716),n=i(60670),o=i(87070),d=i(57435),l=i(72761),c=i(13269),p=i(17137),u=i(88453);function f(e){return{id:e.id,config_key_id:e.oldConfigKeyId||e.configKeyId,position:e.position,deletedAt:e.deletedAt,createdAt:e.createdAt,updatedAt:e.updatedAt,data:{configKey:e.key,configKeyId:e.oldConfigKeyId||e.configKeyId,createdAt:e.createdAt,label:e.label,source:e.source,summary:e.summary,updatedAt:e.updatedAt,position:e.position,id:e.id}}}function g(e){return{id:e.id,diagnosis_id:e.oldDiagnosisId||e.diagnosisId,position:e.position,script_id:e.oldScriptId||e.scriptId,deletedAt:e.deletedAt,createdAt:e.createdAt,updatedAt:e.updatedAt,data:{createdAt:e.createdAt,description:e.description,diagnosisId:e.oldDiagnosisId||e.diagnosisId,expression:e.expression,name:e.name,source:e.source,updatedAt:e.updatedAt,diagnosis_id:e.oldDiagnosisId||e.diagnosisId,scriptId:e.oldScriptId||e.scriptId,script_id:e.oldScriptId||e.scriptId,position:e.position,image1:e.image1,image2:e.image2,image3:e.image3,text1:e.text1,text2:e.text2,text3:e.text3,deletedAt:e.deletedAt,expressionMeaning:e.expressionMeaning,key:e.key,severity_order:e.severityOrder,symptoms:e.symptoms}}}function y(e){return{id:e.id,screen_id:e.oldScreenId||e.screenId,type:e.type,position:e.position,script_id:e.oldScriptId||e.scriptId,deletedAt:e.deletedAt,createdAt:e.createdAt,updatedAt:e.updatedAt,data:{skippable:e.skippable,condition:e.condition,epicId:e.epicId,storyId:e.storyId,refId:e.refId,step:e.step,title:e.title,title2:e.title2,title3:e.title3,title4:e.title4,sectionTitle:e.sectionTitle,actionText:e.actionText,contentText:e.contentText,instructions:e.instructions,instructions2:e.instructions2,instructions3:e.instructions3,instructions4:e.instructions4,hcwDiagnosesInstructions:e.hcwDiagnosesInstructions,suggestedDiagnosesInstructions:e.suggestedDiagnosesInstructions,notes:e.notes,type:e.type,screenId:e.oldScreenId||e.screenId,scriptId:e.oldScriptId||e.scriptId,script_id:e.oldScriptId||e.scriptId,screen_id:e.oldScreenId||e.screenId,position:e.position,createdAt:e.createdAt,updatedAt:e.updatedAt,deletedAt:e.deletedAt,source:e.source,infoText:e.infoText,printable:e.printable,refKey:e.refKey,prePopulate:e.prePopulate,id:e.id,previewTitle:e.previewTitle,previewPrintTitle:e.previewPrintTitle,metadata:{confidential:e.confidential,dataType:e.dataType,key:e.key,label:e.label,text3:e.text3,title1:e.title1,title2:e.title2,title3:e.title3,text1:e.text1,text2:e.text2,image1:e.image1,image2:e.image2,image3:e.image3,items:e.items,fields:e.fields,multiplier:e.multiplier,minValue:e.minValue,maxValue:e.maxValue,negativeLabel:e.negativeLabel,positiveLabel:e.positiveLabel,timerValue:e.timerValue}}}}function m(e){return{id:e.id,script_id:e.oldScriptId||e.scriptId,position:e.position,deletedAt:e.deletedAt,createdAt:e.createdAt,updatedAt:e.updatedAt,data:{createdAt:e.createdAt,description:e.description,position:e.position,scriptId:e.oldScriptId||e.scriptId,script_id:e.oldScriptId||e.scriptId,title:e.title,updatedAt:e.updatedAt,deletedAt:e.deletedAt,type:e.type,exportable:e.exportable,hospital:e.hospitalId,printTitle:e.printTitle,id:e.id,nuid_search_enabled:e.nuidSearchEnabled,nuidSearchFields:e.nuidSearchFields.map(e=>({calculation:e.calculation,condition:e.condition,confidential:e.confidential,dataType:e.dataType,defaultValue:e.defaultValue,format:e.format,type:e.type,key:e.key,refKey:e.refKey,label:e.label,minValue:e.minValue,maxValue:e.maxValue,optional:e.optional,minDate:e.minDate,maxDate:e.maxDate,minTime:e.minTime,maxTime:e.maxTime,minDateKey:e.minDateKey,maxDateKey:e.maxDateKey,minTimeKey:e.minTimeKey,maxTimeKey:e.maxTimeKey,values:e.values}))}}}var D=i(92570);async function h(e){try{if(d.Z.log(`[GET]: ${e.url}`),!(await (0,l.$)()).yes)return o.NextResponse.json({errors:["Unauthorised"]});let t=e.nextUrl.searchParams.get("deviceId"),{device:i,info:r,errors:s}=await (0,D._)(t);if(s)return o.NextResponse.json({errors:s});let[a,n,h,I,x]=await Promise.all([(0,u.O8)(),(0,c.Tw)({withDeleted:!1,returnDraftsIfExist:!0}),(0,c.uK)({withDeleted:!1,returnDraftsIfExist:!0}),(0,c.XA)({withDeleted:!1,returnDraftsIfExist:!0}),(0,p.aP)({withDeleted:!1,returnDraftsIfExist:!0})]),K=x.data.filter(e=>!e.isDeleted).map(e=>f(e)),A=x.data.filter(e=>e.isDeleted).map(e=>f(e)),w=n.data.filter(e=>!e.isDeleted).map(e=>{let t=a.data.filter(t=>t.hospitalId===e.hospitalId)[0]?.oldHospitalId;return m({...e,hospitalId:t||e.hospitalId})}),v=n.data.filter(e=>e.isDeleted).map(e=>{let t=a.data.filter(t=>t.hospitalId===e.hospitalId)[0]?.oldHospitalId;return m({...e,hospitalId:t||e.hospitalId})}),Z=h.data.filter(e=>!e.isDeleted).map(e=>y(e)),q=h.data.filter(e=>e.isDeleted).map(e=>y(e)),R=I.data.filter(e=>!e.isDeleted).map(e=>g(e)),_=I.data.filter(e=>e.isDeleted).map(e=>g(e));return o.NextResponse.json({device:i,webeditorInfo:r,configKeys:K,deletedConfigKeys:A,deletedDiagnoses:_,deletedScreens:q,deletedScripts:v,diagnoses:R,screens:Z,scripts:w})}catch(e){return d.Z.error("[GET] /api/sync",e.message),o.NextResponse.json({errors:["Internal Error"]})}}let I=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/(old-api)/sync-data/route",pathname:"/api/sync-data",filename:"route",bundlePath:"app/api/(old-api)/sync-data/route"},resolvedPagePath:"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/api/(old-api)/sync-data/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:x,staticGenerationAsyncStorage:K,serverHooks:A}=I,w="/api/(old-api)/sync-data/route";function v(){return(0,n.patchFetch)({serverHooks:A,staticGenerationAsyncStorage:K})}},92570:(e,t,i)=>{i.d(t,{_:()=>d});var r=i(57435),s=i(81339),a=i(25060),n=i(18496),o=i(55249);async function d(e){try{if(!e)throw Error("Device ID not provided!");let t=await (0,n.y)();if(t?.errors)throw Error(t.errors.join(", "));let i=e?await (0,s.$s)({deviceId:e}):{data:null};if(i?.errors)throw Error(i.errors.join(", "));let r=i.data;if(!r){let t=await (0,o.w)({data:[{deviceId:e,details:{scripts_count:0}}],returnSaved:!0});if(t?.errors)throw Error(t.errors.join(", "));r=t.inserted[0]}let d=await (0,a.Nb)(),l=Object.values(d.data).filter(e=>e).map(e=>new Date(e).getTime()),c=t.data?.lastPublishDate;return l.length&&(c=new Date(Math.max(...l))),{device:{id:r?.id,details:r?.details,device_id:r?.deviceId,device_hash:r?.deviceHash,deletedAt:r?.deletedAt,createdAt:r?.createdAt,updatedAt:r?.updatedAt},info:{id:t.data?.id,version:t.data?.dataVersion,should_track_usage:!1,last_backup_date:c}}}catch(e){return r.Z.error("getDevice ERROR",e.message),{errors:[e.message]}}}},17137:(e,t,i)=>{i.d(t,{G$:()=>f,ZV:()=>u,SL:()=>c,aP:()=>l});var r=i(57745),s=i(30900),a=i(9576),n=i(10413),o=i(57418),d=i(57435);async function l(e){try{let{configKeysIds:t,returnDraftsIfExist:i}={...e},d=t||[],l=d?.length?(0,r.d3)(o.configKeysDrafts.configKeyDraftId,d.map(e=>s.Z(e)?e:a.Z())):void 0,c=[...l?[l]:[]],p=i?await n.Z.query.configKeysDrafts.findMany({where:(0,r.xD)(...c)}):[];d=d.filter(e=>!p.map(e=>e.configKeyDraftId).includes(e));let u=p.length?(0,r.Nl)(o.configKeys.configKeyId,p.map(e=>e.configKeyDraftId)):void 0,f=d?.length?(0,r.d3)(o.configKeys.configKeyId,d.filter(e=>s.Z(e))):void 0,g=d?.length?(0,r.d3)(o.configKeys.oldConfigKeyId,d.filter(e=>!s.Z(e))):void 0,y=[(0,r.Ft)(o.configKeys.deletedAt),(0,r.Ft)(o.pendingDeletion),...f&&g?[(0,r.or)(f,g)]:[],u],m=(await n.Z.select({configKey:o.configKeys,pendingDeletion:o.pendingDeletion}).from(o.configKeys).leftJoin(o.pendingDeletion,(0,r.eq)(o.pendingDeletion.configKeyId,o.configKeys.configKeyId)).where(y.length?(0,r.xD)(...y):void 0)).map(e=>e.configKey),D=m.length?await n.Z.query.pendingDeletion.findMany({where:(0,r.d3)(o.pendingDeletion.configKeyId,m.map(e=>e.configKeyId)),columns:{configKeyId:!0}}):[];return{data:[...m.map(e=>({...e,isDraft:!1,isDeleted:!1})),...p.map(e=>({...e.data,isDraft:!0,isDeleted:!1}))].sort((e,t)=>e.position-t.position).filter(e=>!D.map(e=>e.configKeyId).includes(e.configKeyId))}}catch(e){return d.Z.error("_getConfigKeys ERROR",e.message),{data:[],errors:[e.message]}}}async function c(e){let{configKeyId:t,returnDraftIfExists:i}={...e};try{if(!t)throw Error("Missing configKeyId");let e=s.Z(t)?(0,r.eq)(o.configKeys.configKeyId,t):void 0,a=s.Z(t)?void 0:(0,r.eq)(o.configKeys.oldConfigKeyId,t),d=e?(0,r.eq)(o.configKeysDrafts.configKeyDraftId,t):void 0,l=i&&d?await n.Z.query.configKeysDrafts.findFirst({where:e}):void 0,c=l?{...l.data,isDraft:!1,isDeleted:!1}:null;if(c)return{data:c};let p=await n.Z.query.configKeys.findFirst({where:(0,r.xD)((0,r.Ft)(o.configKeys.deletedAt),e||a),with:{draft:!0}});l=i?p?.draft:void 0;let u=l?.data||p;if(!(c=u?{...u,isDraft:!1,isDeleted:!1}:null))return{data:null};return{data:c}}catch(e){return d.Z.error("_getConfigKey ERROR",e.message),{errors:[e.message]}}}var p=i(60938);let u={allPublished:0,publishedWithDrafts:0,allDrafts:0,newDrafts:0,pendingDeletion:0};async function f(){try{let[{count:e}]=await n.Z.select({count:(0,p.QX)()}).from(o.configKeysDrafts),[{count:t}]=await n.Z.select({count:(0,p.QX)()}).from(o.configKeysDrafts).where((0,r.Ft)(o.configKeysDrafts.configKeyId)),[{count:i}]=await n.Z.select({count:(0,p.QX)()}).from(o.configKeysDrafts).where((0,r.K0)(o.configKeysDrafts.configKeyId)),[{count:s}]=await n.Z.select({count:(0,p.QX)()}).from(o.pendingDeletion).where((0,r.K0)(o.pendingDeletion.configKeyId)),[{count:a}]=await n.Z.select({count:(0,p.QX)()}).from(o.configKeys);return{data:{allPublished:a,publishedWithDrafts:i,allDrafts:e,newDrafts:t,pendingDeletion:s}}}catch(e){return d.Z.error("_getConfigKeys ERROR",e.message),{data:u,errors:[e.message]}}}},18496:(e,t,i)=>{i.d(t,{y:()=>a});var r=i(10413),s=i(57435);async function a(){try{return{data:await r.Z.query.editorInfo.findFirst()||null}}catch(e){return s.Z.error("_getEditorInfo ERROR",e.message),{data:null,errors:[e.message]}}}},88453:(e,t,i)=>{i.d(t,{Py:()=>p,C9:()=>l,O8:()=>d});var r=i(57745),s=i(30900),a=i(10413),n=i(57418),o=i(57435);async function d(e){try{let{hospitalsIds:t}={...e},i=t||[],o=i?.length?(0,r.d3)(n.hospitals.hospitalId,i.filter(e=>s.Z(e))):void 0,d=i?.length?(0,r.d3)(n.hospitals.oldHospitalId,i.filter(e=>!s.Z(e))):void 0,l=[(0,r.Ft)(n.hospitals.deletedAt),...o&&d?[(0,r.or)(o,d)]:[]];return{data:(await a.Z.select({hospital:n.hospitals}).from(n.hospitals).where(l.length?(0,r.xD)(...l):void 0)).map(e=>e.hospital)}}catch(e){return o.Z.error("_getHospitals ERROR",e.message),{data:[],errors:[e.message]}}}async function l(e){let{hospitalId:t}={...e};try{if(!t)throw Error("Missing hospitalId");let e=s.Z(t)?(0,r.eq)(n.hospitals.hospitalId,t):void 0,i=s.Z(t)?void 0:(0,r.eq)(n.hospitals.oldHospitalId,t);return{data:await a.Z.query.hospitals.findFirst({where:(0,r.xD)((0,r.Ft)(n.hospitals.deletedAt),e||i)})}}catch(e){return o.Z.error("_getHospital ERROR",e.message),{errors:[e.message]}}}var c=i(60938);async function p(){try{let[{count:e}]=await a.Z.select({count:(0,c.QX)()}).from(n.hospitals);return{data:e}}catch(e){return o.Z.error("_getHospitals ERROR",e.message),{data:0,errors:[e.message]}}}},25060:(e,t,i)=>{i.d(t,{Yi:()=>u,Ur:()=>c,Nb:()=>l,Ic:()=>p});var r=i(60938),s=i(57435),a=i(57418),n=i(10413),o=i(81445);let d={configKeys:null,diagnoses:null,screens:null,scripts:null,configKeysDrafts:null,diagnosesDrafts:null,screensDrafts:null,scriptsDrafts:null,pendingDeletion:null,lastPublished:null};async function l(){try{let e=await n.Z.query.editorInfo.findFirst(),t=await n.Z.select({configKeysDrafts:a.configKeysDrafts.updatedAt}).from(a.configKeysDrafts).orderBy((0,o.C)(a.configKeysDrafts.updatedAt)).limit(1),i=await n.Z.select({diagnosesDrafts:a.diagnosesDrafts.updatedAt}).from(a.diagnosesDrafts).orderBy((0,o.C)(a.diagnosesDrafts.updatedAt)).limit(1),r=await n.Z.select({screensDrafts:a.screensDrafts.updatedAt}).from(a.screensDrafts).orderBy((0,o.C)(a.screensDrafts.updatedAt)).limit(1),s=await n.Z.select({scriptsDrafts:a.scriptsDrafts.updatedAt}).from(a.scriptsDrafts).orderBy((0,o.C)(a.scriptsDrafts.updatedAt)).limit(1),l=await n.Z.select({configKeys:a.configKeys.updatedAt}).from(a.configKeys).orderBy((0,o.C)(a.configKeys.updatedAt)).limit(1),c=await n.Z.select({diagnoses:a.diagnoses.updatedAt}).from(a.diagnoses).orderBy((0,o.C)(a.diagnoses.updatedAt)).limit(1),p=await n.Z.select({screens:a.screens.updatedAt}).from(a.screens).orderBy((0,o.C)(a.screens.updatedAt)).limit(1),u=await n.Z.select({scripts:a.scripts.updatedAt}).from(a.scripts).orderBy((0,o.C)(a.scripts.updatedAt)).limit(1),f=await n.Z.select({pendingDeletion:a.pendingDeletion.createdAt}).from(a.pendingDeletion).orderBy((0,o.C)(a.pendingDeletion.createdAt)).limit(1);return{data:{...d,...t[0],...i[0],...r[0],...s[0],...l[0],...c[0],...p[0],...u[0],...f[0],lastPublished:e?.lastPublishDate||null}}}catch(e){return s.Z.error("_getDatesWhenUpdatesWereMade ERROR",e.message),{data:d,errors:[e.message]}}}async function c(){try{let e=await n.Z.select({count:(0,r.QX)()}).from(a.pendingDeletion);return{total:e[0]?.count||0}}catch(e){return s.Z.error("_countPendingDeletion ERROR",e.message),{total:0,errors:[e.message]}}}let p={scripts:0,screens:0,diagnoses:0,configKeys:0,total:0};async function u(){let e={...p};try{let t=await n.Z.select({count:(0,r.QX)()}).from(a.scriptsDrafts);e.scripts=t[0]?.count||0;let i=await n.Z.select({count:(0,r.QX)()}).from(a.screensDrafts);e.screens=i[0]?.count||0;let s=await n.Z.select({count:(0,r.QX)()}).from(a.diagnosesDrafts);e.diagnoses=s[0]?.count||0;let o=await n.Z.select({count:(0,r.QX)()}).from(a.configKeysDrafts);return e.configKeys=o[0]?.count||0,e.total=e.configKeys+e.diagnoses+e.screens+e.scripts,{...e}}catch(t){return s.Z.error("_countDrafts ERROR",t.message),{...e,errors:[t.message]}}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[5822,1744,3788,1490,5802,5972,413,3269,6427],()=>i(71527));module.exports=r})();
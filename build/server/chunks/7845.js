"use strict";exports.id=7845,exports.ids=[7845],exports.modules={87845:(e,a,r)=>{r.r(a),r.d(a,{$$ACTION_0:()=>R,$$ACTION_1:()=>j,$$ACTION_10:()=>k,$$ACTION_11:()=>B,$$ACTION_12:()=>M,$$ACTION_13:()=>q,$$ACTION_14:()=>H,$$ACTION_15:()=>Q,$$ACTION_2:()=>v,$$ACTION_3:()=>A,$$ACTION_4:()=>Z,$$ACTION_5:()=>N,$$ACTION_6:()=>C,$$ACTION_7:()=>L,$$ACTION_8:()=>x,$$ACTION_9:()=>K,copyDiagnoses:()=>ec,copyScreens:()=>ei,copyScripts:()=>es,countDiagnoses:()=>T,countScreens:()=>I,countScripts:()=>W,deleteDiagnoses:()=>P,deleteScreens:()=>$,deleteScripts:()=>F,deleteScriptsItems:()=>ea,getDiagnoses:()=>D,getDiagnosis:()=>U,getScreen:()=>O,getScreens:()=>E,getScript:()=>Y,getScripts:()=>G,getScriptsMetadata:()=>y,getScriptsWithItems:()=>z,listScreens:()=>S,saveDiagnoses:()=>X,saveScreens:()=>_,saveScriptDiagnoses:()=>ee,saveScriptScreens:()=>V,saveScripts:()=>J,saveScriptsWithItems:()=>et});var t=r(24330);r(60166);var s=r(9576),i=r(49530),c=r(91966),o=r(17065),n=r(41771),d=r(57435),f=r(88317),l=r(29712),g=r(20123);async function u(e,a){let r=a?.link,t=a?.baseURL;if(!e)throw Error("AXIOS init error: missing siteId");if(!a){let a=await (0,g._U)(e);if(a.errors?.length)throw Error("AXIOS init error: "+a.errors.join(", "));if(!a.data)throw Error("AXIOS init error: site not found");r=a.data.link,t=a.data.apiKey}let s=l.Z.create({baseURL:r});return s.interceptors.request.use(async e=>(e.headers&&(e.headers["x-api-key"]=t),d.Z.log(`AXIOS [${e.method}]`,[`${r}/api`,e.url].join("")),e)),s.interceptors.response.use(e=>e,e=>new Promise((a,r)=>r(e))),s}var h=r(66267),b=r(44380),p=r(59271);let m=async(e,a)=>{let r=l.Z.create({baseURL:process.env.NEXT_PUBLIC_APP_URL});if(a){let{data:e,errors:t}=await (0,g.QF)({links:[a]});if(t?.length)throw Error(t.join(", "));if(!e[0])throw Error(`Failed to download images. Site (${a}) not found.`);r=await (0,p.U)({baseURL:a,apiKey:e[0].apiKey})}a=process.env.NEXT_PUBLIC_APP_URL;let t=e.data.split("/").filter((e,a)=>a<3).join("/"),s=[],i=!1;if(t!==a&&(0,b.jv)(t)&&e.fileId){let{errors:a,data:c}=(await r.post("/api/files/upload/from-site",{siteURL:t,fileId:e.fileId})).data;a?.length&&(s=a),c&&(e.data=c.fileURL,i=!0)}return{image:e,updated:i,errors:s}};var w=r(40618);let y=o.Sc,I=(0,t.j)("87e857cf3ff6395b6e2b0930ad3f852a82015e2f",R);async function R(...e){try{return await (0,h.isAllowed)(),await o.co(...e)}catch(e){return d.Z.error("countScreens ERROR",e.message),{errors:[e.message],data:o.W0}}}let E=(0,t.j)("4a894795d6b5cf7cc1b14b7c98dd07f683844ee4",j);async function j(...e){try{return await (0,h.isAllowed)(),await o.uK(...e)}catch(e){return d.Z.error("getScreens ERROR",e.message),{errors:[e.message],data:[]}}}let S=(0,t.j)("3aa0d4b564ff3dbb11cb61a669f66142ba12a143",v);async function v(...e){try{return await (0,h.isAllowed)(),await o.f(...e)}catch(e){return d.Z.error("listScreens ERROR",e.message),{errors:[e.message],data:[]}}}let O=(0,t.j)("d5e73aed69146feafc514cdc1db03d07428838d3",A);async function A(...e){return await (0,h.isAllowed)(),await o.NB(...e)}let $=(0,t.j)("571731a47b0bd5f8c21bbb3918be027b7d89353a",Z);async function Z(...e){try{return await (0,h.isAllowed)(),await c.GH(...e)}catch(e){return d.Z.error("deleteScreens ERROR",e.message),{errors:[e.message],success:!1}}}let _=(0,t.j)("cf54aed3f76af353b32cd33448010c74826dd22f",N);async function N(...e){try{return await (0,h.isAllowed)(),await c.uD(...e)}catch(e){return d.Z.error("getSys ERROR",e.message),{errors:[e.message],data:void 0,success:!1}}}let T=(0,t.j)("d9e27ef3b98ce1fa44c4ce962444115dab201438",C);async function C(...e){try{return await (0,h.isAllowed)(),await o.tW(...e)}catch(e){return d.Z.error("countDiagnoses ERROR",e.message),{errors:[e.message],data:o.GM}}}let D=(0,t.j)("088fa19297738e17a7ed36990d12307af0c86a1f",L);async function L(...e){try{return await (0,h.isAllowed)(),await o.XA(...e)}catch(e){return d.Z.error("getDiagnoses ERROR",e.message),{errors:[e.message],data:[]}}}let U=(0,t.j)("87ddbbf6cd0f1083bf65f89106c3f148043529fc",x);async function x(...e){return await (0,h.isAllowed)(),await o.Ew(...e)}let P=(0,t.j)("bb7aa47cfc098c92b59003ff9c78c51723cfc66a",K);async function K(...e){try{return await (0,h.isAllowed)(),await c.Bx(...e)}catch(e){return d.Z.error("deleteDiagnoses ERROR",e.message),{errors:[e.message],success:!1}}}let X=(0,t.j)("05e8ab2c1eb2ea66ff9bc82f207492cbd8f5533a",k);async function k(...e){try{return await (0,h.isAllowed)(),await c.Pk(...e)}catch(e){return d.Z.error("getSys ERROR",e.message),{errors:[e.message],data:void 0,success:!1}}}let W=(0,t.j)("42b6ca705452858f68242195eb1f03faae894d74",B);async function B(...e){try{return await (0,h.isAllowed)(),await o.ix(...e)}catch(e){return d.Z.error("countScripts ERROR",e.message),{errors:[e.message],data:o.Zu}}}let G=(0,t.j)("6288bb4804a3de82eaace6181af69c05430b78d8",M);async function M(...e){try{return await (0,h.isAllowed)(),await o.Tw(...e)}catch(e){return d.Z.error("getScripts ERROR",e.message),{errors:[e.message],data:[]}}}let Y=(0,t.j)("8d2e12b35a9b12947084a1f31cefeebcbace0cc1",q);async function q(...e){return await (0,h.isAllowed)(),await o.bK(...e)}let F=(0,t.j)("48cb3ad31d91b7da73f77bfa04744c1052bcfb9d",H);async function H(...e){try{return await (0,h.isAllowed)(),await c.Es(...e)}catch(e){return d.Z.error("deleteScripts ERROR",e.message),{errors:[e.message],success:!1}}}let J=(0,t.j)("1511c19ef4513922414003d6b9fb4bc42877a7d9",Q);async function Q(...e){try{return await (0,h.isAllowed)(),await c.Or(...e)}catch(e){return d.Z.error("getSys ERROR",e.message),{errors:[e.message],data:void 0,success:!1}}}async function z(e){let a=[],r=[];try{let t=e?.returnDraftsIfExist!==!1,s=await o.Tw({...e,returnDraftsIfExist:t});for(let e of(s.errors?.forEach(e=>r.push(e)),s.data)){let s=await o.uK({scriptsIds:[e.scriptId],returnDraftsIfExist:t}),i=await o.XA({scriptsIds:[e.scriptId],returnDraftsIfExist:t}),c=await o.pd({scriptsIds:[e.scriptId],returnDraftsIfExist:t});s.errors?.forEach(e=>r.push(e)),i.errors?.forEach(e=>r.push(e)),a.push({...e,screens:s.data,diagnoses:i.data,drugsLibrary:c.data})}if(r.length)return{errors:r,data:[]};return{data:a}}catch(e){return d.Z.error("getScriptsWithItems ERROR",e.message),{data:[],errors:[e.message]}}}async function V({screens:e,scriptId:a}){try{let r=0,t=[],i=await o.bK({scriptId:a,returnDraftIfExists:!0});if(i.errors?.length)throw Error(i.errors.join(", "));if(!i.data)throw Error("Script not found");for(let c of e){let{id:e,publishDate:o,createdAt:n,updatedAt:f,isDraft:l,deletedAt:g,version:u,oldScriptId:h,oldScreenId:b,screenId:p,scriptId:w,position:y,...I}=c,R=(0,s.Z)();try{if(I.image1){let e=await m(I.image1);I.image1=e.image}if(I.image2){let e=await m(I.image2);I.image2=e.image}if(I.image3){let e=await m(I.image3);I.image3=e.image}}catch(e){d.Z.error("process image",e.message)}let E=await _({data:[{...I,scriptId:a,oldScriptId:i.data.oldScriptId,screenId:R,version:1}]});E.errors?.forEach(e=>t.push(`(screenId=${p}) ${e||""}`)),!E.errors?.length&&r++}if(t.length)return{errors:t,saved:r,success:!1};return{saved:r,success:!0}}catch(e){return d.Z.error("saveScriptScreens ERROR",e.message),{saved:0,success:!1,errors:[e.message]}}}async function ee({diagnoses:e,scriptId:a}){try{let r=0,t=[],i=await o.bK({scriptId:a,returnDraftIfExists:!0});if(i.errors?.length)throw Error(i.errors.join(", "));if(!i.data)throw Error("Script not found");for(let c of e){let{id:e,publishDate:o,createdAt:n,updatedAt:f,isDraft:l,deletedAt:g,version:u,oldDiagnosisId:h,diagnosisId:b,scriptId:p,position:w,...y}=c,I=(0,s.Z)();try{if(y.image1){let e=await m(y.image1);y.image1=e.image}if(y.image2){let e=await m(y.image2);y.image2=e.image}if(y.image3){let e=await m(y.image3);y.image3=e.image}}catch(e){d.Z.error("process image",e.message)}let R=await X({data:[{...y,scriptId:a,oldScriptId:i.data.oldScriptId,diagnosisId:I,version:1}]});R.errors?.forEach(e=>t.push(`(diagnosisId=${b}) ${e||""}`)),!R.errors?.length&&r++}if(t.length)return{errors:t,saved:r,success:!1};return{saved:r,success:!0}}catch(e){return d.Z.error("saveScriptDiagnoses ERROR",e.message),{saved:0,success:!1,errors:[e.message]}}}async function ea({scriptsIds:e}){try{let a=[],r=await $({scriptsIds:e});r.errors?.forEach(e=>a.push(e));let t=await P({scriptsIds:e});if(t.errors?.forEach(e=>a.push(e)),a.length)return{errors:a,success:!1};return{success:!0}}catch(e){return d.Z.error("deleteScriptsItems ERROR",e.message),{success:!1,errors:[e.message]}}}let er={scripts:0,screens:0,diagnoses:0,drugsLibrary:0};async function et({data:e}){let a={...er};try{let r=[];for(let{overWriteScriptWithId:t,...i}of e){let e=t?await Y({scriptId:t,returnDraftIfExists:!0}):{data:null};if(e.errors?.forEach(e=>r.push(e)),r.length)continue;if(t&&!e?.data){r.push("Overwrite script was not found");continue}if(e?.data){let a=await ea({scriptsIds:[e.data.scriptId]});if(a.errors?.forEach(e=>r.push(e)),r.length)continue}let{id:c,screens:o=[],diagnoses:d=[],drugsLibrary:f=[],publishDate:l,createdAt:g,updatedAt:u,isDraft:h,deletedAt:b,version:p,oldScriptId:m,scriptId:w,position:y,...I}=i,R=e?.data?.scriptId||(0,s.Z)(),E=await J({data:[{...I,scriptId:R,version:1}]});if(E.errors?.forEach(e=>r.push(e)),r.length)continue;a.scripts++;let j=await V({scriptId:R,screens:o});a.screens+=j.saved;let S=await ee({scriptId:R,diagnoses:d});a.diagnoses+=S.saved,f.length&&(await n.cj({data:f.map(e=>({...e,itemId:(0,s.Z)(),createdAt:void 0,updatedAt:void 0,deletedAt:void 0,publishDate:void 0,id:void 0,position:void 0}))}),a.drugsLibrary+=f.length)}if(r.length)return{success:!1,errors:r,info:a};return{success:!0,info:a}}catch(e){return d.Z.error("saveScriptsWithItems ERROR",e.message),{success:!1,errors:[e.message],info:a}}}async function es(e){let a={...er},{scriptsIds:r=[],confirmCopyAll:t,toRemoteSiteId:s,fromRemoteSiteId:c,broadcastAction:o,overWriteScriptWithId:n}={...e};try{if(!r.length&&!t)throw Error("You&apos;re about copy all the scripts, please confirm this action!");let e=c?{data:[]}:await z({scriptsIds:r});if(e.errors)return{success:!1,errors:e.errors,info:a};if(c){let t=await u(c),s=await t.get("/api/scripts/with-items?"+i.Z.stringify({scriptsIds:JSON.stringify(r)})),o=s.data;if(o.errors)return{success:!1,errors:o.errors,info:a};e=o,console.log("axiosClient",s.config.baseURL),e.data.forEach(({screens:a,diagnoses:r},t)=>{let i=e=>{let a=s.config.baseURL||"";return"/"===a.substring(a.length-1,a.length)&&(a=a.substring(0,a.length-1)),"/"===e[0]&&(e=e.substring(1,e.length)),[a,e].filter(e=>e).join("/")};a.forEach((a,r)=>{a.image1?.data&&a.image1?.fileId&&!(0,b.jv)(a.image1.data)&&(e.data[t].screens[r].image1.data=i(a.image1.data)),a.image2?.data&&a.image2?.fileId&&!(0,b.jv)(a.image2.data)&&(e.data[t].screens[r].image2.data=i(a.image2.data)),a.image3?.data&&a.image3?.fileId&&!(0,b.jv)(a.image3.data)&&(e.data[t].screens[r].image3.data=i(a.image3.data))}),r.forEach((a,r)=>{a.image1?.data&&a.image1?.fileId&&!(0,b.jv)(a.image1.data)&&(e.data[t].diagnoses[r].image1.data=i(a.image1.data)),a.image2?.data&&a.image2?.fileId&&!(0,b.jv)(a.image2.data)&&(e.data[t].diagnoses[r].image2.data=i(a.image2.data)),a.image3?.data&&a.image3?.fileId&&!(0,b.jv)(a.image3.data)&&(e.data[t].diagnoses[r].image3.data=i(a.image3.data))})})}let d={success:!0,info:a};if(e.data.length){if(s){let a=await u(s);d=(await a.post("/api/scripts/with-items?",{data:e.data.map(e=>({...e,hospitalId:void 0,hospitalName:void 0}))})).data}else d=await et({data:e.data.map(e=>({...e,overWriteScriptWithId:n,hospitalId:void 0,hospitalName:void 0}))})}return o&&!d?.errors?.length&&f.Z.emit("data_changed","copy_scripts"),d}catch(e){return d.Z.error("copyScripts ERROR",e.response?.data?.errors?.join(", ")||e.message),{errors:e.response?.data?.errors||[e.message],success:!1,info:a}}}async function ei(e){let a=0,{screensIds:r=[],fromScriptsIds:t=[],toScriptsIds:s=[],confirmCopyAll:i,broadcastAction:c}={...e};try{let e=[];if(!t.length&&!r.length&&!i)throw Error("You&apos;re about to copy all the screens, please confirm this action!");let n=await o.uK({scriptsIds:t,screensIds:r,returnDraftsIfExist:!0});if(n.errors?.length)throw Error(n.errors.join(", "));if(s.length)for(let r of s){let t=await V({scriptId:r,screens:n.data});t.errors?.forEach(a=>e.push(a)),!e.length&&a++}else{let r=n.data.reduce((e,a)=>({...e,[a.scriptId]:[...e[a.scriptId]||[],a]}),{});for(let t of Object.keys(r)){let s=await V({scriptId:t,screens:r[t]});s.errors?.forEach(a=>e.push(a)),e.length||(a+=s.saved)}}return c&&!e.length&&f.Z.emit("data_changed","copy_scripts"),{copied:a,success:!e.length,errors:e.length?e:void 0}}catch(e){return d.Z.error("copyScreens ERROR",e.message),{errors:[e.message],success:!1,copied:a}}}async function ec(e){let a=0,{diagnosesIds:r=[],fromScriptsIds:t=[],toScriptsIds:s=[],confirmCopyAll:i,broadcastAction:c}={...e};try{let e=[];if(!t.length&&!r.length&&!i)throw Error("You&apos;re about to copy all the diagnoses, please confirm this action!");let n=await o.XA({scriptsIds:t,diagnosesIds:r,returnDraftsIfExist:!0});if(n.errors?.length)throw Error(n.errors.join(", "));if(s.length)for(let r of s){let t=await ee({scriptId:r,diagnoses:n.data});t.errors?.forEach(a=>e.push(a)),!e.length&&a++}else{let r=n.data.reduce((e,a)=>({...e,[a.scriptId]:[...e[a.scriptId]||[],a]}),{});for(let t of Object.keys(r)){let s=await ee({scriptId:t,diagnoses:r[t]});s.errors?.forEach(a=>e.push(a)),e.length||(a+=s.saved)}}return c&&!e.length&&f.Z.emit("data_changed","copy_scripts"),{copied:a,success:!e.length,errors:e.length?e:void 0}}catch(e){return d.Z.error("copyDiagnoses ERROR",e.message),{errors:[e.message],success:!1,copied:a}}}(0,w.h)([y,I,E,S,O,$,_,T,D,U,P,X,W,G,Y,F,J,z,V,ee,ea,et,es,ei,ec]),(0,t.j)("99af8c523cb129f7e27f77c5b13c3f95db4aa48b",y),(0,t.j)("d3dfb05b6962621e399227ba261983f9495fb5a5",I),(0,t.j)("d3ac4d264976b14d511e92b98e57e5020674ccae",E),(0,t.j)("44cb4379b90fc45300db3daa2b58f5659b2229fd",S),(0,t.j)("a5f91b7007fbfa597dab1634587268a6df569273",O),(0,t.j)("a7ca28e7614edaf2e6b5ccee56d7164c19c41000",$),(0,t.j)("ecc69ba9880b93912552464ca23f9c9f62aa03a7",_),(0,t.j)("0e38be4b50836504c7f67b93fb7ae3cf5f2e9c22",T),(0,t.j)("3b62f127aaaccc86f5c11a9cee428c085206a5bb",D),(0,t.j)("28f338ad272f084dccac4a17a825071030625cf4",U),(0,t.j)("41bf61e6499b298b6d973285db88ca8adb7ea40a",P),(0,t.j)("baaaf52a0b382f1efd6d584fc61203bd8b88d2b3",X),(0,t.j)("c423e270d97a3bdc414a4b6af94f0da37244d751",W),(0,t.j)("6e6440b75e5eca1d3f2e9eea168a2def1055ff65",G),(0,t.j)("81d6ee191490d4c72c2a4fbc7ff2d66823517be9",Y),(0,t.j)("6d5f825048092bdc85e12871d189e55584a9bd66",F),(0,t.j)("947e034f370ce58f143d0f5b4bdc00d9d653e029",J),(0,t.j)("797262d27036c70ce881164328adcd6c008a8872",z),(0,t.j)("02daafb4339f92c64aab36b56610977e13635f0f",V),(0,t.j)("e95ca417790d107bc4d49b348f1c83b1955f0c9a",ee),(0,t.j)("df94185aaee131de90c17c7b082714e1f780f1c1",ea),(0,t.j)("40e010843f3a8ebeab26c3e97be909c476c8560a",et),(0,t.j)("d85d59b51ce7aeff48d5f7157a5de30f048c58ef",es),(0,t.j)("09a000ab8c4a9178389156b1588727a549373f45",ei),(0,t.j)("4d3829ca121a05e07de85632383e564f5826b579",ec)},59271:(e,a,r)=>{r.d(a,{U:()=>s});var t=r(29712);async function s(e){let a=e.baseURL,r=e.apiKey;if(!a)throw Error("MISSING: link");if(!r)throw Error("MISSING: apiKey");let s=t.Z.create({baseURL:a});return s.interceptors.request.use(async e=>(e.headers&&(e.headers["x-api-key"]=r),e)),s.interceptors.response.use(e=>e,e=>new Promise((a,r)=>r(e))),s}},44380:(e,a,r)=>{function t(e=""){let a=process.env.NEXT_PUBLIC_APP_URL||"";return"/"===a.substring(a.length-1,a.length)&&(a=a.substring(0,a.length-1)),"/"===e[0]&&(e=e.substring(1,e.length)),[a,e].filter(e=>e).join("/")}function s(e=""){try{return new URL(e),!0}catch(e){return!1}}r.d(a,{TI:()=>t,jv:()=>s})}};
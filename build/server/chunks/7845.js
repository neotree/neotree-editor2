"use strict";exports.id=7845,exports.ids=[7845],exports.modules={87845:(e,t,a)=>{a.r(t),a.d(t,{$$ACTION_0:()=>R,$$ACTION_1:()=>j,$$ACTION_10:()=>X,$$ACTION_11:()=>q,$$ACTION_12:()=>M,$$ACTION_13:()=>G,$$ACTION_14:()=>Q,$$ACTION_15:()=>J,$$ACTION_2:()=>S,$$ACTION_3:()=>A,$$ACTION_4:()=>x,$$ACTION_5:()=>_,$$ACTION_6:()=>D,$$ACTION_7:()=>T,$$ACTION_8:()=>C,$$ACTION_9:()=>K,copyDiagnoses:()=>ec,copyScreens:()=>ei,copyScripts:()=>es,countDiagnoses:()=>N,countScreens:()=>I,countScripts:()=>F,deleteDiagnoses:()=>k,deleteScreens:()=>Z,deleteScripts:()=>Y,deleteScriptsItems:()=>et,getDiagnoses:()=>L,getDiagnosis:()=>U,getScreen:()=>O,getScreens:()=>E,getScript:()=>W,getScripts:()=>B,getScriptsMetadata:()=>y,getScriptsWithItems:()=>z,listScreens:()=>v,saveDiagnoses:()=>P,saveScreens:()=>$,saveScriptDiagnoses:()=>ee,saveScriptScreens:()=>V,saveScripts:()=>H,saveScriptsWithItems:()=>er});var r=a(24330);a(60166);var s=a(9576),i=a(49530),c=a(91966),o=a(17065),n=a(41771),d=a(57435),l=a(88317),f=a(29712),g=a(20123);async function u(e,t){let a=t?.link,r=t?.baseURL;if(!e)throw Error("AXIOS init error: missing siteId");if(!t){let t=await (0,g._U)(e);if(t.errors?.length)throw Error("AXIOS init error: "+t.errors.join(", "));if(!t.data)throw Error("AXIOS init error: site not found");a=t.data.link,r=t.data.apiKey}let s=f.Z.create({baseURL:a});return s.interceptors.request.use(async e=>(e.headers&&(e.headers["x-api-key"]=r),d.Z.log(`AXIOS [${e.method}]`,[`${a}/api`,e.url].join("")),e)),s.interceptors.response.use(e=>e,e=>new Promise((t,a)=>a(e))),s}var h=a(66267),p=a(44380),m=a(59271);let b=async(e,t)=>{let a=f.Z.create({baseURL:process.env.NEXT_PUBLIC_APP_URL});if(t){let{data:e,errors:r}=await (0,g.QF)({links:[t]});if(r?.length)throw Error(r.join(", "));if(!e[0])throw Error(`Failed to download images. Site (${t}) not found.`);a=await (0,m.U)({baseURL:t,apiKey:e[0].apiKey})}t=process.env.NEXT_PUBLIC_APP_URL;let r=e.data.split("/").filter((e,t)=>t<3).join("/"),s=[],i=!1;if(r!==t&&(0,p.jv)(r)&&e.fileId){let{errors:t,data:c}=(await a.post("/api/files/upload/from-site",{siteURL:r,fileId:e.fileId})).data;t?.length&&(s=t),c&&(e.data=c.fileURL,i=!0)}return{image:e,updated:i,errors:s}};var w=a(40618);let y=o.Sc,I=(0,r.j)("87e857cf3ff6395b6e2b0930ad3f852a82015e2f",R);async function R(...e){try{return await (0,h.isAllowed)(),await o.co(...e)}catch(e){return d.Z.error("countScreens ERROR",e.message),{errors:[e.message],data:o.W0}}}let E=(0,r.j)("4a894795d6b5cf7cc1b14b7c98dd07f683844ee4",j);async function j(...e){try{return await (0,h.isAllowed)(),await o.uK(...e)}catch(e){return d.Z.error("getScreens ERROR",e.message),{errors:[e.message],data:[]}}}let v=(0,r.j)("3aa0d4b564ff3dbb11cb61a669f66142ba12a143",S);async function S(...e){try{return await (0,h.isAllowed)(),await o.f(...e)}catch(e){return d.Z.error("listScreens ERROR",e.message),{errors:[e.message],data:[]}}}let O=(0,r.j)("d5e73aed69146feafc514cdc1db03d07428838d3",A);async function A(...e){return await (0,h.isAllowed)(),await o.NB(...e)}let Z=(0,r.j)("571731a47b0bd5f8c21bbb3918be027b7d89353a",x);async function x(...e){try{return await (0,h.isAllowed)(),await c.GH(...e)}catch(e){return d.Z.error("deleteScreens ERROR",e.message),{errors:[e.message],success:!1}}}let $=(0,r.j)("cf54aed3f76af353b32cd33448010c74826dd22f",_);async function _(...e){try{return await (0,h.isAllowed)(),await c.uD(...e)}catch(e){return d.Z.error("getSys ERROR",e.message),{errors:[e.message],data:void 0,success:!1}}}let N=(0,r.j)("d9e27ef3b98ce1fa44c4ce962444115dab201438",D);async function D(...e){try{return await (0,h.isAllowed)(),await o.tW(...e)}catch(e){return d.Z.error("countDiagnoses ERROR",e.message),{errors:[e.message],data:o.GM}}}let L=(0,r.j)("088fa19297738e17a7ed36990d12307af0c86a1f",T);async function T(...e){try{return await (0,h.isAllowed)(),await o.XA(...e)}catch(e){return d.Z.error("getDiagnoses ERROR",e.message),{errors:[e.message],data:[]}}}let U=(0,r.j)("87ddbbf6cd0f1083bf65f89106c3f148043529fc",C);async function C(...e){return await (0,h.isAllowed)(),await o.Ew(...e)}let k=(0,r.j)("bb7aa47cfc098c92b59003ff9c78c51723cfc66a",K);async function K(...e){try{return await (0,h.isAllowed)(),await c.Bx(...e)}catch(e){return d.Z.error("deleteDiagnoses ERROR",e.message),{errors:[e.message],success:!1}}}let P=(0,r.j)("05e8ab2c1eb2ea66ff9bc82f207492cbd8f5533a",X);async function X(...e){try{return await (0,h.isAllowed)(),await c.Pk(...e)}catch(e){return d.Z.error("getSys ERROR",e.message),{errors:[e.message],data:void 0,success:!1}}}let F=(0,r.j)("42b6ca705452858f68242195eb1f03faae894d74",q);async function q(...e){try{return await (0,h.isAllowed)(),await o.ix(...e)}catch(e){return d.Z.error("countScripts ERROR",e.message),{errors:[e.message],data:o.Zu}}}let B=(0,r.j)("6288bb4804a3de82eaace6181af69c05430b78d8",M);async function M(...e){try{return await (0,h.isAllowed)(),await o.Tw(...e)}catch(e){return d.Z.error("getScripts ERROR",e.message),{errors:[e.message],data:[]}}}let W=(0,r.j)("8d2e12b35a9b12947084a1f31cefeebcbace0cc1",G);async function G(...e){return await (0,h.isAllowed)(),await o.bK(...e)}let Y=(0,r.j)("48cb3ad31d91b7da73f77bfa04744c1052bcfb9d",Q);async function Q(...e){try{return await (0,h.isAllowed)(),await c.Es(...e)}catch(e){return d.Z.error("deleteScripts ERROR",e.message),{errors:[e.message],success:!1}}}let H=(0,r.j)("1511c19ef4513922414003d6b9fb4bc42877a7d9",J);async function J(...e){try{return await (0,h.isAllowed)(),await c.Or(...e)}catch(e){return d.Z.error("getSys ERROR",e.message),{errors:[e.message],data:void 0,success:!1}}}async function z(e){let t=[],a=[];try{let r=e?.returnDraftsIfExist!==!1,s=await o.Tw({...e,returnDraftsIfExist:r});for(let e of(s.errors?.forEach(e=>a.push(e)),s.data)){let s=await o.uK({scriptsIds:[e.scriptId],returnDraftsIfExist:r}),i=await o.XA({scriptsIds:[e.scriptId],returnDraftsIfExist:r}),c=await o.pd({scriptsIds:[e.scriptId],returnDraftsIfExist:r});s.errors?.forEach(e=>a.push(e)),i.errors?.forEach(e=>a.push(e)),t.push({...e,screens:s.data,diagnoses:i.data,drugsLibrary:c.data})}if(a.length)return{errors:a,data:[]};return{data:t}}catch(e){return d.Z.error("getScriptsWithItems ERROR",e.message),{data:[],errors:[e.message]}}}async function V({screens:e,scriptId:t}){try{let a=0,r=[],i=await o.bK({scriptId:t,returnDraftIfExists:!0});if(i.errors?.length)throw Error(i.errors.join(", "));if(!i.data)throw Error("Script not found");for(let c of e){let{id:e,publishDate:o,createdAt:n,updatedAt:l,isDraft:f,deletedAt:g,version:u,oldScriptId:h,oldScreenId:p,screenId:m,scriptId:w,position:y,...I}=c,R=(0,s.Z)();try{if(I.image1){let e=await b(I.image1);I.image1=e.image}if(I.image2){let e=await b(I.image2);I.image2=e.image}if(I.image3){let e=await b(I.image3);I.image3=e.image}}catch(e){d.Z.error("process image",e.message)}let E=await $({data:[{...I,scriptId:t,oldScriptId:i.data.oldScriptId,screenId:R,version:1}]});E.errors?.forEach(e=>r.push(`(screenId=${m}) ${e||""}`)),!E.errors?.length&&a++}if(r.length)return{errors:r,saved:a,success:!1};return{saved:a,success:!0}}catch(e){return d.Z.error("saveScriptScreens ERROR",e.message),{saved:0,success:!1,errors:[e.message]}}}async function ee({diagnoses:e,scriptId:t}){try{let a=0,r=[],i=await o.bK({scriptId:t,returnDraftIfExists:!0});if(i.errors?.length)throw Error(i.errors.join(", "));if(!i.data)throw Error("Script not found");for(let c of e){let{id:e,publishDate:o,createdAt:n,updatedAt:l,isDraft:f,deletedAt:g,version:u,oldDiagnosisId:h,diagnosisId:p,scriptId:m,position:w,...y}=c,I=(0,s.Z)();try{if(y.image1){let e=await b(y.image1);y.image1=e.image}if(y.image2){let e=await b(y.image2);y.image2=e.image}if(y.image3){let e=await b(y.image3);y.image3=e.image}}catch(e){d.Z.error("process image",e.message)}let R=await P({data:[{...y,scriptId:t,oldScriptId:i.data.oldScriptId,diagnosisId:I,version:1}]});R.errors?.forEach(e=>r.push(`(diagnosisId=${p}) ${e||""}`)),!R.errors?.length&&a++}if(r.length)return{errors:r,saved:a,success:!1};return{saved:a,success:!0}}catch(e){return d.Z.error("saveScriptDiagnoses ERROR",e.message),{saved:0,success:!1,errors:[e.message]}}}async function et({scriptsIds:e}){try{let t=[],a=await Z({scriptsIds:e});a.errors?.forEach(e=>t.push(e));let r=await k({scriptsIds:e});if(r.errors?.forEach(e=>t.push(e)),t.length)return{errors:t,success:!1};return{success:!0}}catch(e){return d.Z.error("deleteScriptsItems ERROR",e.message),{success:!1,errors:[e.message]}}}let ea={scripts:0,screens:0,diagnoses:0,drugsLibrary:0};async function er({data:e}){let t={...ea};try{let a=[];for(let{overWriteScriptWithId:r,...i}of e){let e=r?await W({scriptId:r,returnDraftIfExists:!0}):{data:null};if(e.errors?.forEach(e=>a.push(e)),a.length)continue;if(r&&!e?.data){a.push("Overwrite script was not found");continue}if(e?.data){let t=await et({scriptsIds:[e.data.scriptId]});if(t.errors?.forEach(e=>a.push(e)),a.length)continue}let{id:c,screens:o=[],diagnoses:d=[],drugsLibrary:l=[],publishDate:f,createdAt:g,updatedAt:u,isDraft:h,deletedAt:p,version:m,oldScriptId:b,scriptId:w,position:y,...I}=i,R=e?.data?.scriptId||(0,s.Z)(),E=await H({data:[{...I,scriptId:R,version:1}]});if(E.errors?.forEach(e=>a.push(e)),a.length)continue;t.scripts++;let j=await V({scriptId:R,screens:o});t.screens+=j.saved;let v=await ee({scriptId:R,diagnoses:d});t.diagnoses+=v.saved,l.length&&(await n.cj({data:l.map(e=>({...e,itemId:(0,s.Z)(),createdAt:void 0,updatedAt:void 0,deletedAt:void 0,publishDate:void 0,id:void 0,position:void 0}))}),t.drugsLibrary+=l.length)}if(a.length)return{success:!1,errors:a,info:t};return{success:!0,info:t}}catch(e){return d.Z.error("saveScriptsWithItems ERROR",e.message),{success:!1,errors:[e.message],info:t}}}async function es(e){let t={...ea},{scriptsIds:a=[],confirmCopyAll:r,toRemoteSiteId:s,fromRemoteSiteId:c,broadcastAction:o,overWriteScriptWithId:n}={...e};try{if(!a.length&&!r)throw Error("You&apos;re about copy all the scripts, please confirm this action!");let e=c?{data:[]}:await z({scriptsIds:a});if(e.errors)return{success:!1,errors:e.errors,info:t};if(c){let r=await u(c),s=await r.get("/api/scripts/with-items?"+i.Z.stringify({scriptsIds:JSON.stringify(a)})),o=s.data;if(o.errors)return{success:!1,errors:o.errors,info:t};e=o,console.log("axiosClient",s.config.baseURL),e.data.forEach(({screens:t,diagnoses:a},r)=>{let i=e=>{let t=s.config.baseURL||"";return"/"===t.substring(t.length-1,t.length)&&(t=t.substring(0,t.length-1)),"/"===e[0]&&(e=e.substring(1,e.length)),[t,e].filter(e=>e).join("/")};t.forEach((t,a)=>{t.image1?.data&&t.image1?.fileId&&!(0,p.jv)(t.image1.data)&&(e.data[r].screens[a].image1.data=i(t.image1.data)),t.image2?.data&&t.image2?.fileId&&!(0,p.jv)(t.image2.data)&&(e.data[r].screens[a].image2.data=i(t.image2.data)),t.image3?.data&&t.image3?.fileId&&!(0,p.jv)(t.image3.data)&&(e.data[r].screens[a].image3.data=i(t.image3.data))}),a.forEach((t,a)=>{t.image1?.data&&t.image1?.fileId&&!(0,p.jv)(t.image1.data)&&(e.data[r].diagnoses[a].image1.data=i(t.image1.data)),t.image2?.data&&t.image2?.fileId&&!(0,p.jv)(t.image2.data)&&(e.data[r].diagnoses[a].image2.data=i(t.image2.data)),t.image3?.data&&t.image3?.fileId&&!(0,p.jv)(t.image3.data)&&(e.data[r].diagnoses[a].image3.data=i(t.image3.data))})})}let d={success:!0,info:t};if(e.data.length){if(s){let t=await u(s);d=(await t.post("/api/scripts/with-items?",{data:e.data.map(e=>({...e,hospitalId:void 0,hospitalName:void 0}))})).data}else d=await er({data:e.data.map(e=>({...e,overWriteScriptWithId:n,hospitalId:void 0,hospitalName:void 0}))})}return o&&!d?.errors?.length&&l.Z.emit("data_changed","copy_scripts"),d}catch(e){return d.Z.error("copyScripts ERROR",e.response?.data?.errors?.join(", ")||e.message),{errors:e.response?.data?.errors||[e.message],success:!1,info:t}}}async function ei(e){let t=0,{screensIds:a=[],fromScriptsIds:r=[],toScriptsIds:s=[],confirmCopyAll:i,broadcastAction:c}={...e};try{let e=[];if(!r.length&&!a.length&&!i)throw Error("You&apos;re about to copy all the screens, please confirm this action!");let n=await o.uK({scriptsIds:r,screensIds:a,returnDraftsIfExist:!0});if(n.errors?.length)throw Error(n.errors.join(", "));if(s.length)for(let a of s){let r=await V({scriptId:a,screens:n.data});r.errors?.forEach(t=>e.push(t)),!e.length&&t++}else{let a=n.data.reduce((e,t)=>({...e,[t.scriptId]:[...e[t.scriptId]||[],t]}),{});for(let r of Object.keys(a)){let s=await V({scriptId:r,screens:a[r]});s.errors?.forEach(t=>e.push(t)),e.length||(t+=s.saved)}}return c&&!e.length&&l.Z.emit("data_changed","copy_scripts"),{copied:t,success:!e.length,errors:e.length?e:void 0}}catch(e){return d.Z.error("copyScreens ERROR",e.message),{errors:[e.message],success:!1,copied:t}}}async function ec(e){let t=0,{diagnosesIds:a=[],fromScriptsIds:r=[],toScriptsIds:s=[],confirmCopyAll:i,broadcastAction:c}={...e};try{let e=[];if(!r.length&&!a.length&&!i)throw Error("You&apos;re about to copy all the diagnoses, please confirm this action!");let n=await o.XA({scriptsIds:r,diagnosesIds:a,returnDraftsIfExist:!0});if(n.errors?.length)throw Error(n.errors.join(", "));if(s.length)for(let a of s){let r=await ee({scriptId:a,diagnoses:n.data});r.errors?.forEach(t=>e.push(t)),!e.length&&t++}else{let a=n.data.reduce((e,t)=>({...e,[t.scriptId]:[...e[t.scriptId]||[],t]}),{});for(let r of Object.keys(a)){let s=await ee({scriptId:r,diagnoses:a[r]});s.errors?.forEach(t=>e.push(t)),e.length||(t+=s.saved)}}return c&&!e.length&&l.Z.emit("data_changed","copy_scripts"),{copied:t,success:!e.length,errors:e.length?e:void 0}}catch(e){return d.Z.error("copyDiagnoses ERROR",e.message),{errors:[e.message],success:!1,copied:t}}}(0,w.h)([y,I,E,v,O,Z,$,N,L,U,k,P,F,B,W,Y,H,z,V,ee,et,er,es,ei,ec]),(0,r.j)("99af8c523cb129f7e27f77c5b13c3f95db4aa48b",y),(0,r.j)("d3dfb05b6962621e399227ba261983f9495fb5a5",I),(0,r.j)("d3ac4d264976b14d511e92b98e57e5020674ccae",E),(0,r.j)("44cb4379b90fc45300db3daa2b58f5659b2229fd",v),(0,r.j)("a5f91b7007fbfa597dab1634587268a6df569273",O),(0,r.j)("a7ca28e7614edaf2e6b5ccee56d7164c19c41000",Z),(0,r.j)("ecc69ba9880b93912552464ca23f9c9f62aa03a7",$),(0,r.j)("0e38be4b50836504c7f67b93fb7ae3cf5f2e9c22",N),(0,r.j)("3b62f127aaaccc86f5c11a9cee428c085206a5bb",L),(0,r.j)("28f338ad272f084dccac4a17a825071030625cf4",U),(0,r.j)("41bf61e6499b298b6d973285db88ca8adb7ea40a",k),(0,r.j)("baaaf52a0b382f1efd6d584fc61203bd8b88d2b3",P),(0,r.j)("c423e270d97a3bdc414a4b6af94f0da37244d751",F),(0,r.j)("6e6440b75e5eca1d3f2e9eea168a2def1055ff65",B),(0,r.j)("81d6ee191490d4c72c2a4fbc7ff2d66823517be9",W),(0,r.j)("6d5f825048092bdc85e12871d189e55584a9bd66",Y),(0,r.j)("947e034f370ce58f143d0f5b4bdc00d9d653e029",H),(0,r.j)("797262d27036c70ce881164328adcd6c008a8872",z),(0,r.j)("02daafb4339f92c64aab36b56610977e13635f0f",V),(0,r.j)("e95ca417790d107bc4d49b348f1c83b1955f0c9a",ee),(0,r.j)("df94185aaee131de90c17c7b082714e1f780f1c1",et),(0,r.j)("40e010843f3a8ebeab26c3e97be909c476c8560a",er),(0,r.j)("d85d59b51ce7aeff48d5f7157a5de30f048c58ef",es),(0,r.j)("09a000ab8c4a9178389156b1588727a549373f45",ei),(0,r.j)("4d3829ca121a05e07de85632383e564f5826b579",ec)},20123:(e,t,a)=>{a.d(t,{Ng:()=>l,_U:()=>h,QF:()=>d,YF:()=>u});var r=a(57745),s=a(81445),i=a(30900),c=a(10413),o=a(43509),n=a(57435);async function d(e){try{let{sitesIds:t,types:a=[],envs:n=[],links:d=[]}={...e},l=t||[],f=l?.length?(0,r.d3)(o.sites.siteId,l.filter(e=>i.Z(e))):void 0;d.length&&[...d].forEach(e=>{d.push(e.replace("http:","https:")),d.push(e.replace("https","http"))});let g=[(0,r.Ft)(o.sites.deletedAt),f,a.length?(0,r.d3)(o.sites.type,a):void 0,n.length?(0,r.d3)(o.sites.env,n):void 0,d.length?(0,r.d3)(o.sites.link,d):void 0];return{data:(await c.Z.select({site:o.sites}).from(o.sites).where(g.length?(0,r.xD)(...g):void 0).orderBy((0,s.d)(o.sites.id))).map(e=>e.site)}}catch(e){return n.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function l(e){let{siteId:t}={...e};try{if(!t)throw Error("Missing siteId");let e=i.Z(t)?(0,r.eq)(o.sites.siteId,t):void 0;return{data:await c.Z.query.sites.findFirst({where:(0,r.xD)((0,r.Ft)(o.sites.deletedAt),e)})}}catch(e){return n.Z.error("_getSite ERROR",e.message),{errors:[e.message]}}}var f=a(8328);let g=()=>{let e=(0,f.w)();return{webeditor:{name:"Local editor",siteId:"fb76af5a-bf86-4050-821e-44f1bf316bf4",link:e.origin,type:"webeditor",apiKey:"localhost"},nodeapi:{name:"Local editor",siteId:"5cb4aa54-2cfe-49e2-9cdd-392a9b8c124e",link:e.origin,type:"webeditor",apiKey:"localhost"}}};async function u(e){try{let{types:t=[]}={...e},a=[...t.length?[(0,r.d3)(o.sites.type,t)]:[]],s=await c.Z.query.sites.findMany({where:a.length?(0,r.xD)(...a):void 0,columns:{siteId:!0,type:!0,name:!0,link:!0}});return g(),{data:[...s]}}catch(e){return n.Z.error("_getSites ERROR",e.message),{data:[],errors:[e.message]}}}async function h(e){try{let t=await c.Z.query.sites.findFirst({where:(0,r.eq)(o.sites.siteId,e),columns:{apiKey:!0,link:!0}}),a=t||null;if(!t){let t=g();Object.values(t).forEach(t=>{t.siteId===e&&(a={link:t.link,apiKey:t.apiKey})})}return{data:a}}catch(e){return n.Z.error("_getSiteApiKey ERROR",e.message),{data:null,errors:[e.message]}}}},59271:(e,t,a)=>{a.d(t,{U:()=>s});var r=a(29712);async function s(e){let t=e.baseURL,a=e.apiKey;if(!t)throw Error("MISSING: link");if(!a)throw Error("MISSING: apiKey");let s=r.Z.create({baseURL:t});return s.interceptors.request.use(async e=>(e.headers&&(e.headers["x-api-key"]=a),e)),s.interceptors.response.use(e=>e,e=>new Promise((t,a)=>a(e))),s}},8328:(e,t,a)=>{a.d(t,{w:()=>s});var r=a(71615);function s(){let e=(0,r.headers)(),t=e.get("x-api-key"),a=e.get("x-bearer-token"),s=e.get("x-url"),i=e.get("x-next-url-host"),c=e.get("x-next-url-href"),o=e.get("x-next-url-port"),n=e.get("x-next-url-hostname"),d=e.get("x-next-url-pathname"),l=e.get("x-next-url-search"),f=e.get("x-next-url-protocol"),g=e.get("x-next-url-username"),u=e.get("x-next-url-locale"),h=e.get("x-next-url-origin"),p=e.get("x-geo-city"),m=e.get("x-geo-country");return{apiKey:t,bearerToken:a,url:s||"",host:i||"",href:c||"",port:o||"",hostname:n||"",pathname:d||"",search:l||"",protocol:f||"",username:g||"",locale:u||"",origin:h||"",city:p||"",country:m||"",region:e.get("x-geo-region")||"",latitude:e.get("x-geo-latitude")||"",longitude:e.get("x-geo-longitude")||""}}},44380:(e,t,a)=>{function r(e=""){let t=process.env.NEXT_PUBLIC_APP_URL||"";return"/"===t.substring(t.length-1,t.length)&&(t=t.substring(0,t.length-1)),"/"===e[0]&&(e=e.substring(1,e.length)),[t,e].filter(e=>e).join("/")}function s(e=""){try{return new URL(e),!0}catch(e){return!1}}a.d(t,{TI:()=>r,jv:()=>s})}};
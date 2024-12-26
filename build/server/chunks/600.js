exports.id=600,exports.ids=[600],exports.modules={58359:()=>{},93739:()=>{},38301:(e,s,t)=>{"use strict";t.d(s,{tW:()=>w,co:()=>h,ix:()=>g,GM:()=>y,W0:()=>D,Zu:()=>f,XA:()=>Z,Ew:()=>v,NB:()=>u,uK:()=>I,bK:()=>c,Tw:()=>o,Sc:()=>b,f:()=>m});var i=t(57745),r=t(30900),a=t(9576),n=t(10413),d=t(43509),l=t(57435);async function o(e){try{let{scriptsIds:s=[],hospitalIds:t=[],returnDraftsIfExist:l}={...e},o=s.filter(e=>!r.Z(e));s=s.filter(e=>r.Z(e));let c=t.filter(e=>!r.Z(e));if(t=t.filter(e=>r.Z(e)),o.length){let e=await n.Z.query.scripts.findMany({where:(0,i.d3)(d.scripts.oldScriptId,o),columns:{scriptId:!0,oldScriptId:!0}});o.forEach(t=>{let i=e.filter(e=>e.oldScriptId===t)[0];s.push(i?.scriptId||a.Z())})}if(c.length){let e=await n.Z.query.hospitals.findMany({where:(0,i.d3)(d.hospitals.oldHospitalId,c),columns:{hospitalId:!0,oldHospitalId:!0}});c.forEach(s=>{let i=e.filter(e=>e.oldHospitalId===s)[0];t.push(i?.hospitalId||a.Z())})}let p=(l?await n.Z.select({scriptDraft:d.scriptsDrafts,hospitalName:d.hospitals.name}).from(d.scriptsDrafts).leftJoin(d.hospitals,(0,i.eq)(d.hospitals.hospitalId,d.scriptsDrafts.hospitalId)).where((0,i.xD)(s?.length?(0,i.d3)(d.scriptsDrafts.scriptDraftId,s):void 0,t.length?(0,i.d3)(d.scriptsDrafts.hospitalId,t):void 0)):[]).map(e=>({...e.scriptDraft,hospitalName:e.hospitalName})),f=(await n.Z.select({script:d.scripts,pendingDeletion:d.pendingDeletion,hospitalName:d.hospitals.name}).from(d.scripts).leftJoin(d.pendingDeletion,(0,i.eq)(d.pendingDeletion.scriptId,d.scripts.scriptId)).leftJoin(d.scriptsDrafts,(0,i.eq)(d.scriptsDrafts.scriptId,d.scripts.scriptId)).leftJoin(d.hospitals,(0,i.xD)((0,i.eq)(d.hospitals.hospitalId,d.scripts.hospitalId),(0,i.Ft)(d.hospitals.deletedAt))).where((0,i.xD)((0,i.Ft)(d.scripts.deletedAt),(0,i.Ft)(d.pendingDeletion),l?(0,i.Ft)(d.scriptsDrafts.scriptId):void 0,s.length?(0,i.d3)(d.scripts.scriptId,s):void 0,t.length?(0,i.d3)(d.scripts.hospitalId,t):void 0))).map(e=>({...e.script,hospitalName:e.hospitalName})),g=f.length?await n.Z.query.pendingDeletion.findMany({where:(0,i.d3)(d.pendingDeletion.scriptId,f.map(e=>e.scriptId)),columns:{scriptId:!0}}):[];return{data:[...f.map(e=>({...e,isDraft:!1,isDeleted:!1})),...p.map(e=>({...e.data,hospitalName:e.hospitalName,isDraft:!0,isDeleted:!1}))].sort((e,s)=>e.position-s.position).filter(e=>!g.map(e=>e.scriptId).includes(e.scriptId)).map(e=>({...e,hospitalId:e.hospitalName?e.hospitalId:null}))}}catch(e){return l.Z.error("_getScripts ERROR",e.message),{data:[],errors:[e.message]}}}async function c(e){let{scriptId:s,returnDraftIfExists:t}={...e};try{if(!s)throw Error("Missing scriptId");let e=r.Z(s)?(0,i.eq)(d.scripts.scriptId,s):void 0,a=r.Z(s)?void 0:(0,i.eq)(d.scripts.oldScriptId,s),l=e?(0,i.eq)(d.scriptsDrafts.scriptDraftId,s):void 0,o=t&&l?await n.Z.query.scriptsDrafts.findFirst({where:l}):void 0,c=o?{...o.data,isDraft:!1,isDeleted:!1}:null;if(c)return{data:c};let p=await n.Z.select({script:d.scripts,pendingDeletion:d.pendingDeletion,draft:d.scriptsDrafts,hospitalName:d.hospitals.name}).from(d.scripts).leftJoin(d.hospitals,(0,i.xD)((0,i.eq)(d.hospitals.hospitalId,d.scripts.hospitalId),(0,i.Ft)(d.hospitals.deletedAt))).leftJoin(d.pendingDeletion,(0,i.eq)(d.pendingDeletion.scriptId,d.scripts.scriptId)).leftJoin(d.scriptsDrafts,(0,i.eq)(d.scripts.scriptId,d.scriptsDrafts.scriptDraftId)).where((0,i.xD)((0,i.Ft)(d.scripts.deletedAt),(0,i.Ft)(d.pendingDeletion),(0,i.or)(e,a))),f=p[0]?{...p[0].script,draft:p[0].draft||void 0,hospitalName:p[0].hospitalName||""}:null;o=t?f?.draft:void 0;let g=o?.data||f;if(!(c=g?{...g,isDraft:!1,isDeleted:!1,hospitalId:g.hospitalName?g.hospitalId:null}:null))return{data:null};return{data:c}}catch(e){return l.Z.error("_getScript ERROR",e.message),{errors:[e.message]}}}var p=t(60938);let f={allPublished:0,publishedWithDrafts:0,allDrafts:0,newDrafts:0,pendingDeletion:0};async function g(){try{let[{count:e}]=await n.Z.select({count:(0,p.QX)()}).from(d.scriptsDrafts),[{count:s}]=await n.Z.select({count:(0,p.QX)()}).from(d.scriptsDrafts).where((0,i.Ft)(d.scriptsDrafts.scriptId)),[{count:t}]=await n.Z.select({count:(0,p.QX)()}).from(d.scriptsDrafts).where((0,i.K0)(d.scriptsDrafts.scriptId)),[{count:r}]=await n.Z.select({count:(0,p.QX)()}).from(d.pendingDeletion).where((0,i.K0)(d.pendingDeletion.scriptId)),[{count:a}]=await n.Z.select({count:(0,p.QX)()}).from(d.scripts);return{data:{allPublished:a,publishedWithDrafts:t,allDrafts:e,newDrafts:s,pendingDeletion:r}}}catch(e){return l.Z.error("_getScripts ERROR",e.message),{data:f,errors:[e.message]}}}let D={allPublished:0,publishedWithDrafts:0,allDrafts:0,newDrafts:0,pendingDeletion:0};async function h(e){let{scriptsIds:s=[],types:t=[]}={...e};try{let e=s.length?(0,i.d3)(d.screens.scriptId,s):void 0,r=s.length?(0,i.d3)(d.screensDrafts.scriptId,s):void 0,a=t.length?(0,i.d3)(d.screens.type,t):void 0,l=t.length?(0,i.d3)(d.screensDrafts.type,t):void 0,[{count:o}]=await n.Z.select({count:(0,p.QX)()}).from(d.screensDrafts).where((0,i.xD)(r,l)),[{count:c}]=await n.Z.select({count:(0,p.QX)()}).from(d.screensDrafts).where((0,i.xD)(r,l,(0,i.Ft)(d.screensDrafts.screenId))),[{count:f}]=await n.Z.select({count:(0,p.QX)()}).from(d.screensDrafts).where((0,i.xD)(r,l,(0,i.K0)(d.screensDrafts.screenId))),[{count:g}]=await n.Z.select({count:(0,p.QX)()}).from(d.pendingDeletion).where((0,i.xD)(s.length?(0,i.or)((0,i.d3)(d.pendingDeletion.screenScriptId,s)):void 0,(0,i.K0)(d.pendingDeletion.screenId))),[{count:D}]=await n.Z.select({count:(0,p.QX)()}).from(d.screens).where((0,i.xD)(e,a));return{data:{allPublished:D,publishedWithDrafts:f,allDrafts:o,newDrafts:c,pendingDeletion:g}}}catch(e){return l.Z.error("_getScreens ERROR",e.message),{data:D,errors:[e.message]}}}async function I(e){try{let{scriptsIds:s=[],screensIds:t=[],returnDraftsIfExist:l,withImagesOnly:o}={...e},c=t.filter(e=>!r.Z(e));if(t=t.filter(e=>r.Z(e)),c.length){let e=await n.Z.query.screens.findMany({where:(0,i.d3)(d.screens.oldScreenId,c),columns:{screenId:!0,oldScreenId:!0}});c.forEach(s=>{let i=e.filter(e=>e.oldScreenId===s)[0];t.push(i?.screenId||a.Z())})}let p=(s=s.filter(e=>r.Z(e))).filter(e=>!r.Z(e));if(p.length){let e=await n.Z.query.scripts.findMany({where:(0,i.d3)(d.scripts.oldScriptId,p),columns:{scriptId:!0,oldScriptId:!0}});p.forEach(t=>{let i=e.filter(e=>e.oldScriptId===t)[0];s.push(i?.scriptId||a.Z())})}let f=l?await n.Z.query.screensDrafts.findMany({where:(0,i.xD)(s?.length?(0,i.or)((0,i.d3)(d.screensDrafts.scriptId,s),(0,i.d3)(d.screensDrafts.scriptDraftId,s)):void 0,t?.length?(0,i.d3)(d.screensDrafts.screenDraftId,t):void 0)}):[],g=(await n.Z.select({screen:d.screens,pendingDeletion:d.pendingDeletion,script:{title:d.scripts.title,hospitalId:d.scripts.hospitalId},hospital:{name:d.hospitals.name}}).from(d.screens).leftJoin(d.pendingDeletion,(0,i.eq)(d.pendingDeletion.screenId,d.screens.screenId)).leftJoin(d.screensDrafts,(0,i.eq)(d.screensDrafts.screenId,d.screens.screenId)).leftJoin(d.scripts,(0,i.eq)(d.scripts.scriptId,d.screens.scriptId)).leftJoin(d.hospitals,(0,i.xD)((0,i.eq)(d.scripts.scriptId,d.screens.scriptId),(0,i.eq)(d.scripts.hospitalId,d.hospitals.hospitalId))).where((0,i.xD)((0,i.Ft)(d.screens.deletedAt),(0,i.Ft)(d.pendingDeletion),l?(0,i.Ft)(d.screensDrafts.screenId):void 0,s?.length?(0,i.d3)(d.screens.scriptId,s):void 0,t?.length?(0,i.d3)(d.screens.screenId,t):void 0,o?(0,i.or)((0,i.K0)(d.screens.image1),(0,i.K0)(d.screens.image2),(0,i.K0)(d.screens.image3)):void 0))).map(e=>({...e.screen,scriptTitle:e.script?.title||"",hospitalName:e.hospital?.name||""})),D=g.length?await n.Z.query.pendingDeletion.findMany({where:(0,i.d3)(d.pendingDeletion.screenId,g.map(e=>e.screenId)),columns:{screenId:!0}}):[];return{data:[...g.map(e=>({...e,isDraft:!1,isDeleted:!1})),...f.map(e=>({...e.data,isDraft:!0,isDeleted:!1}))].sort((e,s)=>e.position-s.position).filter(e=>!D.map(e=>e.screenId).includes(e.screenId))}}catch(e){return l.Z.error("_getScreens ERROR",e.message),{data:[],errors:[e.message]}}}async function u(e){let{screenId:s,returnDraftIfExists:t}={...e};try{if(!s)throw Error("Missing screenId");let e=r.Z(s)?(0,i.eq)(d.screens.screenId,s):void 0,a=r.Z(s)?void 0:(0,i.eq)(d.screens.oldScreenId,s),l=e?(0,i.eq)(d.screensDrafts.screenDraftId,s):void 0,o=t&&l?await n.Z.query.screensDrafts.findFirst({where:l}):void 0,c=o?{...o.data,isDraft:!1,isDeleted:!1}:null;if(c)return{data:c};let p=await n.Z.select({screen:d.screens,pendingDeletion:d.pendingDeletion,draft:d.screensDrafts}).from(d.screens).leftJoin(d.pendingDeletion,(0,i.eq)(d.pendingDeletion.screenId,d.screens.screenId)).leftJoin(d.screensDrafts,(0,i.eq)(d.screens.screenId,d.screensDrafts.screenDraftId)).where((0,i.xD)((0,i.Ft)(d.screens.deletedAt),(0,i.Ft)(d.pendingDeletion),(0,i.or)(e,a))),f=p[0]?{...p[0].screen,draft:p[0].draft||void 0}:null;o=t?f?.draft:void 0;let g=o?.data||f;if(!(c=g?{...g,isDraft:!1,isDeleted:!1}:null))return{data:null};return{data:c}}catch(e){return l.Z.error("_getScreen ERROR",e.message),{errors:[e.message]}}}async function m(e){try{let{scriptsIds:s=[],screensIds:t=[],returnDraftsIfExist:l}={...e},o=t.filter(e=>!r.Z(e));if(t=t.filter(e=>r.Z(e)),o.length){let e=await n.Z.query.screens.findMany({where:(0,i.d3)(d.screens.oldScreenId,o),columns:{screenId:!0,oldScreenId:!0}});o.forEach(s=>{let i=e.filter(e=>e.oldScreenId===s)[0];t.push(i?.screenId||a.Z())})}let c=(s=s.filter(e=>r.Z(e))).filter(e=>!r.Z(e));if(c.length){let e=await n.Z.query.scripts.findMany({where:(0,i.d3)(d.scripts.oldScriptId,c),columns:{scriptId:!0,oldScriptId:!0}});c.forEach(t=>{let i=e.filter(e=>e.oldScriptId===t)[0];s.push(i?.scriptId||a.Z())})}let p=l?await n.Z.query.screensDrafts.findMany({where:(0,i.xD)(s?.length?(0,i.or)((0,i.d3)(d.screensDrafts.scriptId,s),(0,i.d3)(d.screensDrafts.scriptDraftId,s)):void 0,t?.length?(0,i.d3)(d.screensDrafts.screenDraftId,t):void 0)}):[],f=(await n.Z.select({screen:{title:d.screens.title,screenId:d.screens.screenId,oldScreenId:d.screens.oldScreenId,position:d.screens.position,type:d.screens.type,refId:d.screens.refId},pendingDeletion:d.pendingDeletion}).from(d.screens).leftJoin(d.pendingDeletion,(0,i.eq)(d.pendingDeletion.screenId,d.screens.screenId)).leftJoin(d.screensDrafts,(0,i.eq)(d.screensDrafts.screenId,d.screens.screenId)).where((0,i.xD)((0,i.Ft)(d.screens.deletedAt),(0,i.Ft)(d.pendingDeletion),l?(0,i.Ft)(d.screensDrafts.screenId):void 0,s?.length?(0,i.d3)(d.screens.scriptId,s):void 0,t?.length?(0,i.d3)(d.screens.screenId,t):void 0))).map(e=>e.screen),g=f.length?await n.Z.query.pendingDeletion.findMany({where:(0,i.d3)(d.pendingDeletion.screenId,f.map(e=>e.screenId)),columns:{screenId:!0}}):[];return{data:[...f.map(e=>({...e,isDraft:!1,isDeleted:!1})),...p.map(e=>({...e.data,isDraft:!0,isDeleted:!1}))].sort((e,s)=>e.position-s.position).filter(e=>!g.map(e=>e.screenId).includes(e.screenId)).map((e,s)=>({...e,position:s+1}))}}catch(e){return l.Z.error("_listScreens ERROR",e.message),{data:[],errors:[e.message]}}}let y={allPublished:0,publishedWithDrafts:0,allDrafts:0,newDrafts:0,pendingDeletion:0};async function w(e){let{scriptsIds:s=[]}={...e};try{let e=s.length?(0,i.d3)(d.diagnoses.scriptId,s):void 0,t=s.length?(0,i.d3)(d.diagnosesDrafts.scriptId,s):void 0,[{count:r}]=await n.Z.select({count:(0,p.QX)()}).from(d.diagnosesDrafts).where(t),[{count:a}]=await n.Z.select({count:(0,p.QX)()}).from(d.diagnosesDrafts).where((0,i.xD)(t,(0,i.Ft)(d.diagnosesDrafts.diagnosisId))),[{count:l}]=await n.Z.select({count:(0,p.QX)()}).from(d.diagnosesDrafts).where((0,i.xD)(t,(0,i.K0)(d.diagnosesDrafts.diagnosisId))),[{count:o}]=await n.Z.select({count:(0,p.QX)()}).from(d.pendingDeletion).where((0,i.xD)(s.length?(0,i.or)((0,i.d3)(d.pendingDeletion.diagnosisScriptId,s)):void 0,(0,i.K0)(d.pendingDeletion.diagnosisId))),[{count:c}]=await n.Z.select({count:(0,p.QX)()}).from(d.diagnoses).where(e);return{data:{allPublished:c,publishedWithDrafts:l,allDrafts:r,newDrafts:a,pendingDeletion:o}}}catch(e){return l.Z.error("_getDiagnoses ERROR",e.message),{data:y,errors:[e.message]}}}async function Z(e){try{let{scriptsIds:s=[],diagnosesIds:t=[],returnDraftsIfExist:l,withImagesOnly:o}={...e},c=t.filter(e=>!r.Z(e));if(t=t.filter(e=>r.Z(e)),c.length){let e=await n.Z.query.diagnoses.findMany({where:(0,i.d3)(d.diagnoses.oldDiagnosisId,c),columns:{diagnosisId:!0,oldDiagnosisId:!0}});c.forEach(s=>{let i=e.filter(e=>e.oldDiagnosisId===s)[0];t.push(i?.diagnosisId||a.Z())})}let p=(s=s.filter(e=>r.Z(e))).filter(e=>!r.Z(e));if(p.length){let e=await n.Z.query.scripts.findMany({where:(0,i.d3)(d.scripts.oldScriptId,p),columns:{scriptId:!0,oldScriptId:!0}});p.forEach(t=>{let i=e.filter(e=>e.oldScriptId===t)[0];s.push(i?.scriptId||a.Z())})}let f=l?await n.Z.query.diagnosesDrafts.findMany({where:(0,i.xD)(s?.length?(0,i.or)((0,i.d3)(d.diagnosesDrafts.scriptId,s),(0,i.d3)(d.diagnosesDrafts.scriptDraftId,s)):void 0,t?.length?(0,i.d3)(d.diagnosesDrafts.diagnosisDraftId,t):void 0)}):[],g=(await n.Z.select({diagnosis:d.diagnoses,pendingDeletion:d.pendingDeletion,script:{title:d.scripts.title,hospitalId:d.scripts.hospitalId},hospital:{name:d.hospitals.name}}).from(d.diagnoses).leftJoin(d.pendingDeletion,(0,i.eq)(d.pendingDeletion.diagnosisId,d.diagnoses.diagnosisId)).leftJoin(d.diagnosesDrafts,(0,i.eq)(d.diagnosesDrafts.diagnosisId,d.diagnoses.diagnosisId)).leftJoin(d.scripts,(0,i.eq)(d.scripts.scriptId,d.diagnoses.scriptId)).leftJoin(d.hospitals,(0,i.xD)((0,i.eq)(d.scripts.scriptId,d.diagnoses.scriptId),(0,i.eq)(d.scripts.hospitalId,d.hospitals.hospitalId))).where((0,i.xD)((0,i.Ft)(d.diagnoses.deletedAt),(0,i.Ft)(d.pendingDeletion),l?(0,i.Ft)(d.diagnosesDrafts.diagnosisId):void 0,s?.length?(0,i.d3)(d.diagnoses.scriptId,s):void 0,t?.length?(0,i.d3)(d.diagnoses.diagnosisId,t):void 0,o?(0,i.or)((0,i.K0)(d.diagnoses.image1),(0,i.K0)(d.diagnoses.image2),(0,i.K0)(d.diagnoses.image3)):void 0))).map(e=>({...e.diagnosis,scriptTitle:e.script?.title||"",hospitalName:e.hospital?.name||""})),D=g.length?await n.Z.query.pendingDeletion.findMany({where:(0,i.d3)(d.pendingDeletion.diagnosisId,g.map(e=>e.diagnosisId)),columns:{diagnosisId:!0}}):[];return{data:[...g.map(e=>({...e,isDraft:!1,isDeleted:!1})),...f.map(e=>({...e.data,isDraft:!0,isDeleted:!1}))].sort((e,s)=>e.position-s.position).filter(e=>!D.map(e=>e.diagnosisId).includes(e.diagnosisId)).map(e=>({...e,scriptTitle:e.scriptTitle||"",hospitalName:e.hospitalName||""}))}}catch(e){return l.Z.error("_getDiagnoses ERROR",e.message),{data:[],errors:[e.message]}}}async function v(e){let{diagnosisId:s,returnDraftIfExists:t}={...e};try{if(!s)throw Error("Missing diagnosisId");let e=r.Z(s)?(0,i.eq)(d.diagnoses.diagnosisId,s):void 0,a=r.Z(s)?void 0:(0,i.eq)(d.diagnoses.oldDiagnosisId,s),l=e?(0,i.eq)(d.diagnosesDrafts.diagnosisDraftId,s):void 0,o=t&&l?await n.Z.query.diagnosesDrafts.findFirst({where:l}):void 0,c=o?{...o.data,isDraft:!1,isDeleted:!1}:null;if(c)return{data:c};let p=await n.Z.select({diagnosis:d.diagnoses,pendingDeletion:d.pendingDeletion,draft:d.diagnosesDrafts}).from(d.diagnoses).leftJoin(d.pendingDeletion,(0,i.eq)(d.pendingDeletion.diagnosisId,d.diagnoses.diagnosisId)).leftJoin(d.diagnosesDrafts,(0,i.eq)(d.diagnoses.diagnosisId,d.diagnosesDrafts.diagnosisDraftId)).where((0,i.xD)((0,i.Ft)(d.diagnoses.deletedAt),(0,i.Ft)(d.pendingDeletion),(0,i.or)(e,a))),f=p[0]?{...p[0].diagnosis,draft:p[0].draft||void 0}:null;o=t?f?.draft:void 0;let g=o?.data||f;if(!(c=g?{...g,isDraft:!1,isDeleted:!1}:null))return{data:null};return{data:c}}catch(e){return l.Z.error("_getDiagnosis ERROR",e.message),{errors:[e.message]}}}async function b(e){try{let{scriptsIds:s=[],hospitalsIds:t=[],returnDraftsIfExist:r}={...e},a=await n.Z.query.hospitals.findMany({where:(0,i.xD)((0,i.Ft)(d.hospitals.deletedAt))}),l=s.length?(0,i.d3)(d.scripts.scriptId,s):void 0,o=t.length?(0,i.d3)(d.scripts.hospitalId,t):void 0,c=[l,o],p=await n.Z.query.scripts.findMany({where:c.length?(0,i.xD)(...c):void 0,with:{draft:!!r||void 0,screens:{with:{draft:!!r||void 0}}}});p=p.map(e=>({...e,...r&&e.draft?e.draft.data:null,screens:e.screens.sort((e,s)=>e.position-s.position)})).sort((e,s)=>e.position-s.position);let f=[];return p.forEach(e=>{let s=a.filter(s=>s.hospitalId===e.hospitalId)[0];f.push({scriptId:e.scriptId,title:e.title,hospitalName:s?.name||"",screens:e.screens.map(e=>{let s=e.items,t=e.fields,i=[{label:e.label,key:e.key,type:e.type,..."single_select"===e.type?{dataType:"single_select_option",value:null,valueLabel:null}:{dataType:e.dataType,value:null,valueLabel:null}}];switch(e.type){case"progress":case"edliz_summary_table":case"mwi_edliz_summary_table":case"zw_edliz_summary_table":case"management":i=[];break;case"yesno":i=[{value:"true",label:e.positiveLabel||"Yes"},{value:"false",label:e.negativeLabel||"Yes"}].map(s=>({label:e.label,key:e.key,type:e.type,dataType:"boolean",value:s.value,valueLabel:s.label}));break;case"diagnosis":i=s.map(s=>({value:s.id,valueLabel:s.label,label:s.label,key:s.id,type:e.type,dataType:"diagnosis"}));break;case"checklist":i=s.map(s=>({value:s.id,valueLabel:s.label,label:s.label,key:s.key,type:e.type,dataType:null}));break;case"form":i=t.map(e=>{let s=e.dataType;switch(e.type){case"datetime":s="datetime";break;case"date":s="date";break;case"time":s="time";break;case"dropdown":s="dropdown";break;case"number":s="number";break;case"text":s="string",("uid"===`${e.key}`.toLowerCase()||`${e.key}`.toLowerCase().includes("nuid"))&&(s="uid");break;default:s=e.dataType}return"dropdown"===e.type?(e.values||"").split("\n").map((e="")=>e.trim()).filter(e=>e).map(e=>({value:(e=e.split(","))[0],label:e[1]})).map(s=>({label:e.label,key:e.key,type:e.type,dataType:"dropdown",value:s.value,valueLabel:s.label})):[{label:e.label,key:e.key,type:e.type,dataType:s,value:null,valueLabel:null}]}).reduce((e,s)=>[...e,...s],[]);break;case"multi_select":i=s.map(s=>({label:s.label,key:s.id,type:e.type,dataType:"multi_select_option",value:s.id,valueLabel:s.label}))}return{screenId:e.screenId,type:e.type,title:e.title,ref:e.refId,fields:i}})})}),{data:f}}catch(e){return{errors:[e.message],data:[]}}}},88317:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});let i=(0,t(55802).io)(process.env.NEXT_PUBLIC_APP_URL)}};
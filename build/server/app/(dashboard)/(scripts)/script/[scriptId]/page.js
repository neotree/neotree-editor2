(()=>{var e={};e.id=9657,e.ids=[9657],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},61622:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),r(66317),r(49246),r(57890),r(95602),r(17162),r(56367),r(12699),r(69684),r(96560);var t=r(23191),a=r(88716),i=r(37922),n=r.n(i),l=r(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(s,o);let d=["",{children:["(dashboard)",{children:["(scripts)",{children:["script",{children:["[scriptId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,66317)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/[scriptId]/page.tsx"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,49246)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/[scriptId]/loading.tsx"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,57890)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,95602)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,17162)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,56367)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,12699)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,69684)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,96560)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/not-found.tsx"]}],c=["/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/script/[scriptId]/page.tsx"],u="/(dashboard)/(scripts)/script/[scriptId]/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(dashboard)/(scripts)/script/[scriptId]/page",pathname:"/script/[scriptId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},64545:(e,s,r)=>{Promise.resolve().then(r.bind(r,14286)),Promise.resolve().then(r.bind(r,12884)),Promise.resolve().then(r.bind(r,99985)),Promise.resolve().then(r.bind(r,96948)),Promise.resolve().then(r.bind(r,56349)),Promise.resolve().then(r.bind(r,10827)),Promise.resolve().then(r.t.bind(r,79404,23))},14286:(e,s,r)=>{"use strict";r.d(s,{DiagnosesTable:()=>W});var t=r(10326),a=r(69508),i=r(77228),n=r(11870),l=r(77863),o=r(3529),d=r(47035),c=r(43810),u=r(90772),p=r(29354);function h({disabled:e,selected:s,onDelete:r,onCopy:a}){return t.jsx(t.Fragment,{children:!!s.length&&(0,t.jsxs)(p.h,{children:[(0,t.jsxs)(u.z,{variant:"destructive",className:"h-auto w-auto",disabled:e,onClick:()=>r(),children:[t.jsx(d.Z,{className:"h-4 w-4 mr-1"}),t.jsx("span",{children:s.length>1?`Delete ${s.length} diagnoses`:"Delete diagnosis"})]}),(0,t.jsxs)(u.z,{className:"h-auto w-auto",disabled:e,onClick:()=>a(),children:[t.jsx(c.Z,{className:"h-4 w-4 mr-1"}),t.jsx("span",{children:s.length>1?`Copy ${s.length} diagnoses`:"Copy diagnosis"})]})]})})}var x=r(90434),m=r(35047),g=r(39447),f=r(12714),j=r(60097);function b({disabled:e,diagnosis:{diagnosisId:s},onDelete:r,onCopy:i}){let{scriptId:n}=(0,m.useParams)(),l=`/script/${n}/diagnosis/${s}`;return t.jsx(t.Fragment,{children:(0,t.jsxs)(j.h_,{children:[t.jsx(j.$F,{asChild:!0,children:t.jsx(u.z,{variant:"ghost",size:"icon",className:"p-0 h-auto w-auto transition-colors rounded-full hover:text-primary hover:bg-transparent",children:t.jsx(g.Z,{className:"h-4 w-4"})})}),(0,t.jsxs)(j.AW,{children:[t.jsx(j.Xi,{asChild:!0,children:t.jsx(x.default,{href:l,children:e?(0,t.jsxs)(t.Fragment,{children:[t.jsx(f.Z,{className:"mr-2 h-4 w-4"})," View"]}):(0,t.jsxs)(t.Fragment,{children:[t.jsx(a.Z,{className:"mr-2 h-4 w-4"})," Edit"]})})}),!e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(j.Xi,{onClick:()=>i(),children:[t.jsx(c.Z,{className:"h-4 w-4 mr-2"})," Copy"]}),(0,t.jsxs)(j.Xi,{onClick:r,className:"text-danger focus:bg-danger focus:text-danger-foreground",children:[t.jsx(d.Z,{className:"mr-2 h-4 w-4"}),t.jsx("span",{children:"Delete"})]})]})]})]})})}var v=r(17577),y=r(44099),w=r(46670),N=r(96221),C=r(82617),I=r(74723),S=r(34474),q=r(62288),P=r(31048),D=r(2025);function k({open:e,diagnosesIds:s,onOpenChange:r}){(0,m.useRouter)(),(0,m.useParams)();let{copyDiagnoses:a,getScripts:i}=(0,C.h)(),{alert:l}=(0,N.s)(),[o,d]=(0,v.useState)(!1),[c,p]=(0,v.useState)({data:[]}),{formState:{errors:h},reset:x,watch:g,setValue:f,register:j,handleSubmit:b}=(0,I.cI)({defaultValues:{scriptId:""}}),w=(0,v.useMemo)(()=>o,[o]);(0,v.useCallback)(async()=>{try{let e=(await y.Z.get("/api/scripts?data="+JSON.stringify({returnDraftsIfExist:!0}))).data;if(e.errors?.length)throw Error(e.errors.join(", "));p(e)}catch(e){l({title:"Error",message:"Failed to load sites: "+e.message,variant:"error",onClose:()=>r(!1)})}finally{d(!1)}},[i,l,r]);let k=b(async e=>{try{if(!e.scriptId)throw Error("Please select a script!");d(!0);let t=(await y.Z.post("/api/diagnoses/copy",{diagnosesIds:s,toScriptsIds:[e.scriptId],broadcastAction:!0})).data;if(t.errors?.length)throw Error(t.errors.join(", "));l({variant:"success",title:"Success",message:"Diagnosis copied successfully!",onClose:()=>{x({scriptId:""}),r(!1)}})}catch(e){l({variant:"error",title:"Error",message:"Failed to copy diagnosis: "+e.message})}finally{d(!1)}});return(0,t.jsxs)(t.Fragment,{children:[o&&t.jsx(n.a,{overlay:!0}),t.jsx(D.u,{open:e,onOpenChange:()=>{r(!1)},title:"Copy diagnoses",actions:(0,t.jsxs)(t.Fragment,{children:[t.jsx("span",{className:"text-xs text-danger",children:"* Required"}),t.jsx("div",{className:"flex-1"}),t.jsx(q.GG,{asChild:!0,children:t.jsx(u.z,{variant:"ghost",disabled:w,onClick:()=>r(!1),children:"Cancel"})}),t.jsx(u.z,{onClick:()=>k(),disabled:w,children:"Copy"})]}),children:t.jsx("div",{className:"flex flex-col gap-y-5",children:(0,t.jsxs)("div",{children:[t.jsx(P._,{htmlFor:"scriptId",children:"Script *"}),(0,t.jsxs)(S.Ph,{name:"scriptId",disabled:w,onValueChange:e=>f("scriptId",e,{shouldDirty:!0}),children:[t.jsx(S.i4,{children:t.jsx(S.ki,{placeholder:"Select script"})}),t.jsx(S.Bw,{children:(0,t.jsxs)(S.DI,{children:[t.jsx(S.n5,{children:"Scripts"}),c.data.map(({scriptId:e,title:s})=>t.jsx(S.Ql,{value:e,children:s},e))]})})]}),!!h.scriptId?.message&&t.jsx("div",{className:"text-xs text-danger mt-1",children:h.scriptId.message})]})})})]})}function W(e){let{diagnoses:s,loading:r,selected:d,disabled:c,diagnosesIdsToCopy:u,setDiagnosesIdsToCopy:p,onDelete:x,onSort:g,setSelected:f}=function({diagnoses:e}){let[s,r]=(0,v.useState)(e),[t,a]=(0,v.useState)(!1),[i,n]=(0,v.useState)([]),[l,d]=(0,v.useState)([]),c=(0,m.useRouter)(),{viewOnly:u}=(0,o.b)(),{confirm:p}=(0,w.t)(),{alert:h}=(0,N.s)(),{deleteDiagnoses:x,saveDiagnoses:g}=(0,C.h)(),f=(0,v.useCallback)(async e=>{p(async()=>{let t={...s};r(s=>({...s,data:s.data.filter(s=>!e.includes(s.diagnosisId))})),n([]),a(!0);let i=(await y.Z.delete("/api/diagnoses?data="+JSON.stringify({diagnosesIds:e,broadcastAction:!0}))).data;i.errors?.length?h({title:"Error",message:i.errors.join(", "),variant:"error",onClose:()=>r(t)}):(n([]),c.refresh(),h({title:"Success",message:"Diagnoses deleted successfully!",variant:"success"})),a(!1)},{danger:!0,title:"Delete diagnoses",message:"Are you sure you want to delete diagnoses?",positiveLabel:"Yes, delete"})},[x,p,h,c,s]),j=(0,v.useCallback)(async(e,t,a)=>{let i=[],n=a.map(({oldIndex:e,newIndex:r})=>{let t=s.data[e],a=t.position;return e!==r&&(a=s.data[r].position,i.push({diagnosisId:t.diagnosisId,position:a})),{...t,position:a}}).sort((e,s)=>e.position-s.position);r(e=>({...e,data:n})),await y.Z.post("/api/diagnoses/save",{data:i,broadcastAction:!0}),c.refresh()},[g,s,c]);return{diagnoses:s,loading:t,selected:i,disabled:(0,v.useMemo)(()=>u,[u]),diagnosesIdsToCopy:l,setDiagnosesIdsToCopy:d,onDelete:f,onSort:j,setDiagnoses:r,setLoading:a,setSelected:n}}(e),{sys:j,viewOnly:I}=(0,o.b)();return(0,t.jsxs)(t.Fragment,{children:[r&&t.jsx(n.a,{overlay:!0}),!!u.length&&t.jsx(k,{open:!0,diagnosesIds:u,onOpenChange:()=>{p([]),f([])}}),t.jsx("div",{className:"",children:t.jsx(i.DataTable,{selectedIndexes:d,onSelect:f,title:"",selectable:!c,sortable:!c,loading:r,maxRows:25,onSort:g,getRowOptions:({rowIndex:e})=>{let r=s.data[e];return r?{className:(0,l.cn)(!I&&r.isDraft&&"bg-danger/20 hover:bg-danger/30")}:{}},search:{inputPlaceholder:"Search diagnoses"},noDataMessage:t.jsx("div",{className:"mt-4 flex flex-col items-center justify-center gap-y-2",children:t.jsx("div",{children:"No diagnoses saved."})}),columns:[{name:"Position",cellClassName:"w-10",align:"center",cellRenderer:({rowIndex:e})=>e+1},{name:"Name"},{name:"Description"},{name:"Severity order"},{name:"Version",align:"right",cellClassName:(0,l.cn)("w-[100px]","yes"===j.data.hide_data_table_version&&"hidden"),cellRenderer(e){let r=s.data[e.rowIndex];if(!r)return null;let i=r.isDraft?Math.max(0,r.version-1):r.version;return(0,t.jsxs)("div",{className:"inline-flex w-full justify-end items-center gap-x-[2px]",children:[t.jsx("div",{className:(0,l.cn)("w-2 h-2 rounded-full",i?"bg-green-400":"bg-gray-300")}),t.jsx("span",{children:i||r.version}),r.isDraft&&t.jsx(a.Z,{className:"h-4 w-4 text-muted-foreground"})]})}},{name:"Action",align:"center",cellClassName:"w-10",cellRenderer(e){let r=s.data[e.rowIndex];return r?t.jsx(b,{diagnosis:r,disabled:c,onDelete:()=>x([r.diagnosisId]),onCopy:()=>p([r.diagnosisId])}):null}}],data:s.data.map(e=>[e.position,e.name,e.description,e.severityOrder||"",e.version,""])})}),t.jsx(h,{disabled:I,selected:d,diagnoses:s,onCopy:()=>p(d.map(e=>s.data[e]?.diagnosisId).filter(e=>e)),onDelete:()=>x(d.map(e=>s.data[e]?.diagnosisId).filter(e=>e))})]})}},12884:(e,s,r)=>{"use strict";r.d(s,{ScreensTable:()=>W});var t=r(10326),a=r(69508),i=r(77228),n=r(11870),l=r(77863),o=r(3529),d=r(47035),c=r(43810),u=r(90772),p=r(29354);function h({disabled:e,selected:s,onDelete:r,onCopy:a}){return t.jsx(t.Fragment,{children:!!s.length&&(0,t.jsxs)(p.h,{children:[(0,t.jsxs)(u.z,{variant:"destructive",className:"h-auto w-auto",disabled:e,onClick:()=>r(),children:[t.jsx(d.Z,{className:"h-4 w-4 mr-1"}),t.jsx("span",{children:s.length>1?`Delete ${s.length} screens`:"Delete screen"})]}),(0,t.jsxs)(u.z,{className:"h-auto w-auto",disabled:e,onClick:()=>a(),children:[t.jsx(c.Z,{className:"h-4 w-4 mr-1"}),t.jsx("span",{children:s.length>1?`Copy ${s.length} diagnoses`:"Copy diagnosis"})]})]})})}var x=r(90434),m=r(35047),g=r(39447),f=r(12714),j=r(60097);function b({disabled:e,screen:{screenId:s},onDelete:r,onCopy:i}){let{scriptId:n}=(0,m.useParams)(),l=`/script/${n}/screen/${s}`;return t.jsx(t.Fragment,{children:(0,t.jsxs)(j.h_,{children:[t.jsx(j.$F,{asChild:!0,children:t.jsx(u.z,{variant:"ghost",size:"icon",className:"p-0 h-auto w-auto transition-colors rounded-full hover:text-primary hover:bg-transparent",children:t.jsx(g.Z,{className:"h-4 w-4"})})}),(0,t.jsxs)(j.AW,{children:[t.jsx(j.Xi,{asChild:!0,children:t.jsx(x.default,{href:l,children:e?(0,t.jsxs)(t.Fragment,{children:[t.jsx(f.Z,{className:"mr-2 h-4 w-4"})," View"]}):(0,t.jsxs)(t.Fragment,{children:[t.jsx(a.Z,{className:"mr-2 h-4 w-4"})," Edit"]})})}),!e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(j.Xi,{onClick:()=>i(),children:[t.jsx(c.Z,{className:"h-4 w-4 mr-2"})," Copy"]}),(0,t.jsxs)(j.Xi,{onClick:r,className:"text-danger focus:bg-danger focus:text-danger-foreground",children:[t.jsx(d.Z,{className:"mr-2 h-4 w-4"}),t.jsx("span",{children:"Delete"})]})]})]})]})})}var v=r(17577),y=r(44099),w=r(46670),N=r(96221),C=r(82617),I=r(74723),S=r(34474),q=r(62288),P=r(31048),D=r(2025);function k({open:e,screensIds:s,onOpenChange:r}){(0,m.useRouter)(),(0,m.useParams)();let{copyScreens:a,getScripts:i}=(0,C.h)(),{alert:l}=(0,N.s)(),[o,d]=(0,v.useState)(!1),[c,p]=(0,v.useState)({data:[]}),{formState:{errors:h},reset:x,watch:g,setValue:f,register:j,handleSubmit:b}=(0,I.cI)({defaultValues:{scriptId:""}}),w=(0,v.useMemo)(()=>o,[o]);(0,v.useCallback)(async()=>{try{let e=(await y.Z.get("/api/scripts?data="+JSON.stringify({returnDraftsIfExist:!0}))).data;if(e.errors?.length)throw Error(e.errors.join(", "));p(e)}catch(e){l({title:"Error",message:"Failed to load sites: "+e.message,variant:"error",onClose:()=>r(!1)})}finally{d(!1)}},[i,l,r]);let k=b(async e=>{try{if(!e.scriptId)throw Error("Please select a script!");d(!0);let t=(await y.Z.post("/api/screens/copy",{screensIds:s,toScriptsIds:[e.scriptId],broadcastAction:!0})).data;if(t.errors?.length)throw Error(t.errors.join(", "));l({variant:"success",title:"Success",message:"Screen copied successfully!",onClose:()=>{x({scriptId:""}),r(!1)}})}catch(e){l({variant:"error",title:"Error",message:"Failed to copy screen: "+e.message})}finally{d(!1)}});return(0,t.jsxs)(t.Fragment,{children:[o&&t.jsx(n.a,{overlay:!0}),t.jsx(D.u,{open:e,onOpenChange:()=>{r(!1)},title:"Copy screens",actions:(0,t.jsxs)(t.Fragment,{children:[t.jsx("span",{className:"text-xs text-danger",children:"* Required"}),t.jsx("div",{className:"flex-1"}),t.jsx(q.GG,{asChild:!0,children:t.jsx(u.z,{variant:"ghost",disabled:w,onClick:()=>r(!1),children:"Cancel"})}),t.jsx(u.z,{onClick:()=>k(),disabled:w,children:"Copy"})]}),children:t.jsx("div",{className:"flex flex-col gap-y-5",children:(0,t.jsxs)("div",{children:[t.jsx(P._,{htmlFor:"scriptId",children:"Script *"}),(0,t.jsxs)(S.Ph,{name:"scriptId",disabled:w,onValueChange:e=>f("scriptId",e,{shouldDirty:!0}),children:[t.jsx(S.i4,{children:t.jsx(S.ki,{placeholder:"Select script"})}),t.jsx(S.Bw,{children:(0,t.jsxs)(S.DI,{children:[t.jsx(S.n5,{children:"Scripts"}),c.data.map(({scriptId:e,title:s})=>t.jsx(S.Ql,{value:e,children:s},e))]})})]}),!!h.scriptId?.message&&t.jsx("div",{className:"text-xs text-danger mt-1",children:h.scriptId.message})]})})})]})}function W(e){let{screens:s,loading:r,selected:d,disabled:c,screensIdsToCopy:u,setScreensIdsToCopy:p,onDelete:x,onSort:g,setSelected:f}=function({screens:e}){let[s,r]=(0,v.useState)(e),[t,a]=(0,v.useState)(!1),[i,n]=(0,v.useState)([]),[l,d]=(0,v.useState)([]),c=(0,m.useRouter)(),{viewOnly:u}=(0,o.b)(),{confirm:p}=(0,w.t)(),{alert:h}=(0,N.s)(),{deleteScreens:x,saveScreens:g}=(0,C.h)(),f=(0,v.useCallback)(async e=>{p(async()=>{let t={...s};r(s=>({...s,data:s.data.filter(s=>!e.includes(s.screenId))})),n([]),a(!0);let i=(await y.Z.delete("/api/screens?data="+JSON.stringify({screensIds:e,broadcastAction:!0}))).data;i.errors?.length?h({title:"Error",message:i.errors.join(", "),variant:"error",onClose:()=>r(t)}):(n([]),c.refresh(),h({title:"Success",message:"Screens deleted successfully!",variant:"success"})),a(!1)},{danger:!0,title:"Delete screens",message:"Are you sure you want to delete screens?",positiveLabel:"Yes, delete"})},[x,p,h,c,s]),j=(0,v.useCallback)(async(e,t,a)=>{let i=[],n=a.map(({oldIndex:e,newIndex:r})=>{let t=s.data[e],a=t.position;return e!==r&&(a=s.data[r].position,i.push({screenId:t.screenId,position:a})),{...t,position:a}}).sort((e,s)=>e.position-s.position);r(e=>({...e,data:n})),await y.Z.post("/api/screens/save",{data:i,broadcastAction:!0}),c.refresh()},[g,s,c]);return{screens:s,loading:t,selected:i,disabled:(0,v.useMemo)(()=>u,[u]),screensIdsToCopy:l,setScreensIdsToCopy:d,onDelete:f,onSort:j,setScreens:r,setLoading:a,setSelected:n}}(e),{sys:j,viewOnly:I}=(0,o.b)();return(0,t.jsxs)(t.Fragment,{children:[r&&t.jsx(n.a,{overlay:!0}),!!u.length&&t.jsx(k,{open:!0,screensIds:u,onOpenChange:()=>{p([]),f([])}}),t.jsx("div",{className:"",children:t.jsx(i.DataTable,{selectedIndexes:d,onSelect:f,title:"",selectable:!c,sortable:!c,loading:r,maxRows:25,onSort:g,getRowOptions:({rowIndex:e})=>{let r=s.data[e];return r?{className:(0,l.cn)(!I&&r.isDraft&&"bg-danger/20 hover:bg-danger/30")}:{}},search:{inputPlaceholder:"Search screens"},noDataMessage:t.jsx("div",{className:"mt-4 flex flex-col items-center justify-center gap-y-2",children:t.jsx("div",{children:"No screens saved."})}),columns:[{name:"Position",cellClassName:"w-10",align:"center",cellRenderer:({rowIndex:e})=>e+1},{name:"Type"},{name:"Epic"},{name:"Story"},{name:"Ref"},{name:"Title"},{name:"Version",align:"right",cellClassName:(0,l.cn)("w-[100px]","yes"===j.data.hide_data_table_version&&"hidden"),cellRenderer(e){let r=s.data[e.rowIndex];if(!r)return null;let i=r.isDraft?Math.max(0,r.version-1):r.version;return(0,t.jsxs)("div",{className:"inline-flex w-full justify-end items-center gap-x-[2px]",children:[t.jsx("div",{className:(0,l.cn)("w-2 h-2 rounded-full",i?"bg-green-400":"bg-gray-300")}),t.jsx("span",{children:i||r.version}),r.isDraft&&t.jsx(a.Z,{className:"h-4 w-4 text-muted-foreground"})]})}},{name:"Action",align:"center",cellClassName:"w-10",cellRenderer(e){let r=s.data[e.rowIndex];return r?t.jsx(b,{screen:r,disabled:c,onDelete:()=>x([r.screenId]),onCopy:()=>p([r.screenId])}):null}}],data:s.data.map(e=>[e.position,e.type,e.epicId,e.storyId,e.refId,e.title,e.version,""])})}),t.jsx(h,{disabled:I,selected:d,screens:s,onCopy:()=>p(d.map(e=>s.data[e]?.screenId).filter(e=>e)),onDelete:()=>x(d.map(e=>s.data[e]?.screenId).filter(e=>e))})]})}},29354:(e,s,r)=>{"use strict";r.d(s,{h:()=>n});var t=r(10326),a=r(38178),i=r(77863);function n({children:e,className:s}){return(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"h-16"}),t.jsx("div",{className:(0,i.cn)(`
                        fixed 
                        left-0 
                        bottom-0 
                        h-16 
                        w-full 
                        border-t 
                        border-t-border 
                        z-[1] 
                        bg-primary-foreground 
                        dark:bg-background 
                        shadow-md 
                        dark:shadow-foreground/10
                    `),children:t.jsx(a.V,{children:t.jsx("div",{className:(0,i.cn)("flex justify-end gap-x-4",s),children:e})})})]})}},96948:(e,s,r)=>{"use strict";r.d(s,{Alert:()=>i});var t=r(96221),a=r(35047);function i(e){(0,a.useRouter)();let{alert:s}=(0,t.s)();return null}r(17577)},56349:(e,s,r)=>{"use strict";r.d(s,{Tabs:()=>_});var t=r(10326),a=r(17577),i=r(90434),n=r(82561),l=r(93095),o=r(15594),d=r(9815),c=r(45226),u=r(17124),p=r(52067),h=r(88957),x="Tabs",[m,g]=(0,l.b)(x,[o.Pc]),f=(0,o.Pc)(),[j,b]=m(x),v=a.forwardRef((e,s)=>{let{__scopeTabs:r,value:a,onValueChange:i,defaultValue:n,orientation:l="horizontal",dir:o,activationMode:d="automatic",...x}=e,m=(0,u.gm)(o),[g,f]=(0,p.T)({prop:a,onChange:i,defaultProp:n});return(0,t.jsx)(j,{scope:r,baseId:(0,h.M)(),value:g,onValueChange:f,orientation:l,dir:m,activationMode:d,children:(0,t.jsx)(c.WV.div,{dir:m,"data-orientation":l,...x,ref:s})})});v.displayName=x;var y="TabsList",w=a.forwardRef((e,s)=>{let{__scopeTabs:r,loop:a=!0,...i}=e,n=b(y,r),l=f(r);return(0,t.jsx)(o.fC,{asChild:!0,...l,orientation:n.orientation,dir:n.dir,loop:a,children:(0,t.jsx)(c.WV.div,{role:"tablist","aria-orientation":n.orientation,...i,ref:s})})});w.displayName=y;var N="TabsTrigger",C=a.forwardRef((e,s)=>{let{__scopeTabs:r,value:a,disabled:i=!1,...l}=e,d=b(N,r),u=f(r),p=q(d.baseId,a),h=P(d.baseId,a),x=a===d.value;return(0,t.jsx)(o.ck,{asChild:!0,...u,focusable:!i,active:x,children:(0,t.jsx)(c.WV.button,{type:"button",role:"tab","aria-selected":x,"aria-controls":h,"data-state":x?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:p,...l,ref:s,onMouseDown:(0,n.M)(e.onMouseDown,e=>{i||0!==e.button||!1!==e.ctrlKey?e.preventDefault():d.onValueChange(a)}),onKeyDown:(0,n.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&d.onValueChange(a)}),onFocus:(0,n.M)(e.onFocus,()=>{let e="manual"!==d.activationMode;x||i||!e||d.onValueChange(a)})})})});C.displayName=N;var I="TabsContent",S=a.forwardRef((e,s)=>{let{__scopeTabs:r,value:i,forceMount:n,children:l,...o}=e,u=b(I,r),p=q(u.baseId,i),h=P(u.baseId,i),x=i===u.value,m=a.useRef(x);return a.useEffect(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,t.jsx)(d.z,{present:n||x,children:({present:r})=>(0,t.jsx)(c.WV.div,{"data-state":x?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!r,id:h,tabIndex:0,...o,ref:s,style:{...e.style,animationDuration:m.current?"0s":void 0},children:r&&l})})});function q(e,s){return`${e}-trigger-${s}`}function P(e,s){return`${e}-content-${s}`}S.displayName=I;var D=r(77863);let k=a.forwardRef(({className:e,...s},r)=>t.jsx(w,{ref:r,className:(0,D.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...s}));k.displayName=w.displayName;let W=a.forwardRef(({className:e,...s},r)=>t.jsx(C,{ref:r,className:(0,D.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...s}));W.displayName=C.displayName;let T=a.forwardRef(({className:e,...s},r)=>t.jsx(S,{ref:r,className:(0,D.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...s}));T.displayName=S.displayName;var F=r(12260),Z=r(15491);function _({options:e,searchParamsKey:s,onChange:r}){let n=(0,a.useRef)(null),[l,o]=(0,a.useState)(0),d=(0,F.l)(),c=(0,a.useMemo)(()=>s?d.parsed[s]:null,[d.parsed,s]),u=(0,a.useMemo)(()=>e.filter(e=>e.value===c)[0]?.value||e[0].value,[c,e]),p=(0,a.useMemo)(()=>!!s,[s]);return t.jsx("div",{ref:n,children:(0,t.jsxs)(v,{defaultValue:u,className:"w-full [&>div]:w-full",onValueChange:r,children:[t.jsx(k,{children:e.map(e=>t.jsx(W,{asChild:p,value:e.value,className:"flex-1",onClick:()=>o(n.current?.getBoundingClientRect()?.top||0),children:p?t.jsx(i.default,{href:`?${Z.Z.stringify({...d.parsed,[s]:e.value})}`,children:e.label}):e.label},e.value))}),e.map(e=>t.jsx(T,{value:e.value,className:"hidden"},e.value))]})})}},43810:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let t=(0,r(62881).Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},12714:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let t=(0,r(62881).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},69508:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let t=(0,r(62881).Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},49246:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>i});var t=r(19510),a=r(62553);function i(){return t.jsx(a.a,{overlay:!0})}},66317:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>S});var t=r(19510),a=r(2111),i=r(13442),n=r(85431),l=r(86098),o=r(68570);let d=(0,o.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/components/tabs.tsx`),{__esModule:c,$$typeof:u}=d;d.default;let p=(0,o.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/components/tabs.tsx#Tabs`);var h=r(68122),x=r(15578),m=r(41236);let g=(0,o.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/components/diagnoses/table.tsx`),{__esModule:f,$$typeof:j}=g;g.default;let b=(0,o.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/components/diagnoses/table.tsx#DiagnosesTable`);async function v({scriptId:e}){let[s]=await Promise.all([i.getDiagnoses({scriptsIds:[e],returnDraftsIfExist:!0})]);return t.jsx(t.Fragment,{children:t.jsx(b,{diagnoses:s})})}let y=(0,o.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/components/screens/table.tsx`),{__esModule:w,$$typeof:N}=y;y.default;let C=(0,o.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/components/screens/table.tsx#ScreensTable`);async function I({scriptId:e}){let[s]=await Promise.all([i.getScreens({scriptsIds:[e],returnDraftsIfExist:!0})]);return t.jsx(t.Fragment,{children:t.jsx(C,{screens:s})})}async function S({params:{scriptId:e},searchParams:{section:s}}){let[r,{data:o}]=await Promise.all([(0,a.getHospitals)(),(0,i.getScript)({scriptId:e,returnDraftIfExists:!0})]);return o?(0,t.jsxs)(t.Fragment,{children:[t.jsx(n.D,{children:"Edit script - "+o.title}),(0,t.jsxs)(m._,{title:"Edit script",backLink:"/",children:[t.jsx(x.H,{hospitals:r.data,formData:o}),(0,t.jsxs)("div",{className:"flex flex-col gap-y-4 mt-10",children:[t.jsx(p,{options:h.uh,searchParamsKey:"section"}),"diagnoses"===s?t.jsx(v,{scriptId:o.scriptId}):t.jsx(I,{scriptId:o.scriptId})]})]})]}):t.jsx(l.b,{title:"Not found",message:"Script was not found or it might have been deleted!",redirectTo:"/"})}},57890:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>i});var t=r(19510),a=r(62553);function i(){return t.jsx(a.a,{overlay:!0})}},86098:(e,s,r)=>{"use strict";r.d(s,{b:()=>l});var t=r(68570);let a=(0,t.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/components/alert.tsx`),{__esModule:i,$$typeof:n}=a;a.default;let l=(0,t.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/components/alert.tsx#Alert`)}};var s=require("../../../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[1633,1744,1381,3788,1490,9092,5802,7708,9712,6620,9387,7938,4723,1813,6943,6318,990,413,6267,5209,1966,1271,3856,3442,565,7228,1670,4295],()=>r(61622));module.exports=t})();
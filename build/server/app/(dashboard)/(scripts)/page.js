(()=>{var e={};e.id=2433,e.ids=[2433],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},49411:e=>{"use strict";e.exports=require("node:path")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},38098:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>h,tree:()=>c}),r(81438),r(95602),r(17162),r(56367),r(12699),r(69684),r(96560);var s=r(23191),a=r(88716),i=r(37922),n=r.n(i),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["(dashboard)",{children:["(scripts)",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,81438)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,95602)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,17162)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,56367)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,12699)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,69684)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,96560)),"/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/not-found.tsx"]}],d=["/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/page.tsx"],p="/(dashboard)/(scripts)/page",u={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(dashboard)/(scripts)/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},40267:(e,t,r)=>{Promise.resolve().then(r.bind(r,41998)),Promise.resolve().then(r.bind(r,10827))},69088:(e,t,r)=>{"use strict";r.d(t,{d:()=>g});var s=r(10326),a=r(17577),i=r(35047),n=r(74723),o=r(34474),l=r(62288),c=r(53313),d=r(96221),p=r(9645),u=r(82617),h=r(90772),x=r(11870),m=r(31048),f=r(2025),y=r(54432);function g({open:e,overWriteScriptWithId:t,onOpenChange:r,onImportSuccess:g}){let j=(0,i.useRouter)(),b=(0,i.useParams)(),{getSites:v}=(0,p.b)(),{copyScripts:w}=(0,u.h)(),{alert:N}=(0,d.s)(),[I,C]=(0,a.useState)(!1),[S,k]=(0,a.useState)({data:[]}),{formState:{errors:q},reset:E,watch:D,setValue:P,register:Z,handleSubmit:_}=(0,n.cI)({defaultValues:{siteId:"",scriptId:"",confirmed:!1}}),R=D("confirmed"),T=(0,a.useMemo)(()=>I,[I]);(0,a.useCallback)(async()=>{try{let e=await v({types:["webeditor"]});if(e.errors?.length)throw Error(e.errors.join(", "));k(e)}catch(e){N({title:"Error",message:"Failed to load sites: "+e.message,variant:"error",onClose:()=>r(!1)})}finally{C(!1)}},[v,N,r]);let F=_(async e=>{try{if(!e.siteId)throw Error("Please select a site!");if(!e.scriptId)throw Error("Please provide a script ID!");if(!e.confirmed)throw Error("Please confirm that you want to override this script!");C(!0);let s=await w({fromRemoteSiteId:e.siteId,scriptsIds:[e.scriptId],overWriteScriptWithId:t||b.scriptId,broadcastAction:!0});if(s.errors?.length)throw Error(s.errors.join(", "));j.refresh(),N({variant:"success",title:"Success",message:"Script imported successfully!",onClose:()=>{g?.(),E({siteId:"",scriptId:"",confirmed:!1}),r(!1)}})}catch(e){N({variant:"error",title:"Error",message:"Failed to import script: "+e.message})}finally{C(!1)}});return(0,s.jsxs)(s.Fragment,{children:[I&&s.jsx(x.a,{overlay:!0}),s.jsx(f.u,{open:e,onOpenChange:()=>{r(!1)},title:"Import script",actions:(0,s.jsxs)(s.Fragment,{children:[s.jsx("span",{className:"text-xs text-danger",children:"* Required"}),s.jsx("div",{className:"flex-1"}),s.jsx(l.GG,{asChild:!0,children:s.jsx(h.z,{variant:"ghost",disabled:T,onClick:()=>r(!1),children:"Cancel"})}),s.jsx(h.z,{onClick:()=>F(),disabled:T,children:"Import"})]}),children:(0,s.jsxs)("div",{className:"flex flex-col gap-y-5",children:[(0,s.jsxs)("div",{children:[s.jsx(m._,{htmlFor:"siteId",children:"Site *"}),(0,s.jsxs)(o.Ph,{name:"siteId",disabled:T,onValueChange:e=>P("siteId",e,{shouldDirty:!0}),children:[s.jsx(o.i4,{children:s.jsx(o.ki,{placeholder:"Select site"})}),s.jsx(o.Bw,{children:(0,s.jsxs)(o.DI,{children:[s.jsx(o.n5,{children:"Sites"}),S.data.map(({siteId:e,name:t})=>s.jsx(o.Ql,{value:e,children:t},e))]})})]}),!!q.siteId?.message&&s.jsx("div",{className:"text-xs text-danger mt-1",children:q.siteId.message})]}),(0,s.jsxs)("div",{children:[s.jsx(m._,{htmlFor:"scriptId",children:"Script ID *"}),s.jsx(y.I,{...Z("scriptId",{disabled:T,required:!0}),name:"scriptId"}),!!q.scriptId?.message&&s.jsx("div",{className:"text-xs text-danger mt-1",children:q.scriptId.message})]}),(0,s.jsxs)("div",{className:"flex gap-x-2",children:[s.jsx(c.X,{name:"confirmed",id:"confirmed",disabled:T,checked:R,onCheckedChange:()=>P("confirmed",!R,{shouldDirty:!0})}),s.jsx(m._,{secondary:!0,htmlFor:"exportable",children:"Confirm that you want to override this script"})]})]})})]})}},41998:(e,t,r)=>{"use strict";r.d(t,{ScriptsTable:()=>V});var s=r(10326),a=r(69508),i=r(77228),n=r(82617),o=r(11870),l=r(77863),c=r(9645),d=r(47035),p=r(63685),u=r(90772),h=r(29354);function x({selected:e,setScriptsIdsToExport:t,onDelete:r}){return e.length?s.jsx(s.Fragment,{children:!!e.length&&(0,s.jsxs)(h.h,{children:[(0,s.jsxs)(u.z,{variant:"destructive",className:"h-auto w-auto",onClick:()=>r(),children:[s.jsx(d.Z,{className:"h-4 w-4 mr-1"}),s.jsx("span",{children:e.length>1?`Delete ${e.length}`:"Delete"})]}),(0,s.jsxs)(u.z,{className:"h-auto w-auto",onClick:()=>t(),children:[s.jsx(p.Z,{className:"h-4 w-4 mr-1"}),s.jsx("span",{children:e.length>1?`Export ${e.length}`:"Export"})]})]})}):null}var m=r(90434),f=r(39447),y=r(12714);/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let g=(0,r(62881).Z)("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var j=r(43810),b=r(60097),v=r(17577),w=r(38599),N=r.n(w);let I=function(e){void 0===e&&(e={});var t=(0,v.useState)(e),r=t[0],s=t[1];return[r,(0,v.useCallback)(function(e){s(function(t){return Object.assign({},t,e instanceof Function?e(t):e)})},[])]},C=function(){var e,t=(e=(0,v.useRef)(!1),(0,v.useCallback)(function(){return e.current},[])),r=I({value:void 0,error:void 0,noUserInteraction:!0}),s=r[0],a=r[1];return[s,(0,v.useCallback)(function(e){if(t())try{if("string"!=typeof e&&"number"!=typeof e){var r,s,i=Error("Cannot copy typeof "+typeof e+" to clipboard, must be a string");a({value:e,error:i,noUserInteraction:!0});return}if(""===e){var i=Error("Cannot copy empty string to clipboard.");a({value:e,error:i,noUserInteraction:!0});return}s=e.toString(),r=N()(s),a({value:s,error:void 0,noUserInteraction:r})}catch(e){a({value:s,error:e,noUserInteraction:r})}},[])]};r(85999);var S=r(47463);function k(e){let[t,r]=C(),[s,a]=(0,v.useState)();return[t,(0,v.useCallback)(e=>(a((0,S.Z)()),r(e)),[r])]}function q({value:e,showValueOnToast:t=!1,...r}){let[a,i]=k({showValueOnToast:t});return s.jsx("div",{...r,onClick:(...t)=>{i(`${e}`),r.onClick?.(...t)}})}function E({item:e,disabled:t,setScriptsIdsToExport:r,onDelete:i,onDuplicate:n}){let[o,l]=k({showValueOnToast:!0});return e?s.jsx(s.Fragment,{children:(0,s.jsxs)(b.h_,{children:[s.jsx(b.$F,{asChild:!0,children:s.jsx(u.z,{variant:"ghost",size:"icon",className:"p-0 h-auto w-auto transition-colors rounded-full hover:text-primary hover:bg-transparent",children:s.jsx(f.Z,{className:"h-4 w-4"})})}),(0,s.jsxs)(b.AW,{children:[s.jsx(b.Xi,{asChild:!0,children:s.jsx(m.default,{href:`/script/${e.scriptId}`,children:s.jsx(s.Fragment,{children:t?(0,s.jsxs)(s.Fragment,{children:[s.jsx(y.Z,{className:"mr-2 h-4 w-4"})," View"]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.Z,{className:"mr-2 h-4 w-4"})," Edit"]})})})}),(0,s.jsxs)(b.Xi,{onClick:()=>n(),children:[s.jsx(g,{className:"mr-2 h-4 w-4"}),"Duplicate"]}),(0,s.jsxs)(b.Xi,{onClick:()=>r(),children:[s.jsx(p.Z,{className:"mr-2 h-4 w-4"}),"Export"]}),s.jsx(b.Xi,{asChild:!0,children:(0,s.jsxs)(q,{showValueOnToast:!0,value:e.scriptId,children:[s.jsx(j.Z,{className:"mr-2 h-4 w-4"}),"Copy ID"]})}),!t&&(0,s.jsxs)(b.Xi,{onClick:()=>i(),className:"text-danger focus:bg-danger focus:text-danger-foreground",children:[s.jsx(d.Z,{className:"mr-2 h-4 w-4"}),s.jsx("span",{children:"Delete"})]})]})]})}):null}var D=r(35047),P=r(74723),Z=r(62288),_=r(34474),R=r(96221),T=r(31048),F=r(2025);function W({open:e,scriptsIdsToExport:t,setScriptsIdsToExport:r,onOpenChange:a}){let{getSites:i}=(0,c.b)(),{copyScripts:l}=(0,n.h)(),{alert:d}=(0,R.s)(),p=(0,D.useRouter)(),[h,x]=(0,v.useState)(!1),[m,f]=(0,v.useState)({data:[]}),{formState:{errors:y},setValue:g,reset:j,handleSubmit:b}=(0,P.cI)({defaultValues:{siteId:""}}),w=(0,v.useMemo)(()=>h,[h]);(0,v.useCallback)(async()=>{try{let e=await i({types:["webeditor"]});if(e.errors?.length)throw Error(e.errors.join(", "));f(e)}catch(e){d({title:"Error",message:"Failed to load sites: "+e.message,variant:"error",onClose:()=>a(!1)})}finally{x(!1)}},[i,d,a]);let N=b(async e=>{try{if(!e.siteId)throw Error("Please select a site!");x(!0);let r=await l({toRemoteSiteId:e.siteId,scriptsIds:t,broadcastAction:!0});if(r.errors?.length)throw Error(r.errors.join(", "));p.refresh(),d({variant:"success",title:"Success",message:"Script exported successfully!",onClose:()=>{j({siteId:""}),a(!1)}})}catch(e){d({variant:"error",title:"Error",message:"Failed to export script: "+e.message})}finally{x(!1)}});return(0,s.jsxs)(s.Fragment,{children:[h&&s.jsx(o.a,{overlay:!0}),s.jsx(F.u,{open:e,onOpenChange:()=>{a(!1),e||r([])},title:"Export script",actions:(0,s.jsxs)(s.Fragment,{children:[s.jsx("span",{className:"text-xs text-danger",children:"* Required"}),s.jsx("div",{className:"flex-1"}),s.jsx(Z.GG,{asChild:!0,children:s.jsx(u.z,{variant:"ghost",disabled:w,onClick:()=>a(!1),children:"Cancel"})}),s.jsx(u.z,{onClick:()=>N(),disabled:w,children:"Export"})]}),children:s.jsx("div",{className:"flex flex-col gap-y-5",children:(0,s.jsxs)("div",{children:[s.jsx(T._,{htmlFor:"siteId",children:"Site *"}),(0,s.jsxs)(_.Ph,{name:"siteId",disabled:w,onValueChange:e=>g("siteId",e,{shouldDirty:!0}),children:[s.jsx(_.i4,{children:s.jsx(_.ki,{placeholder:"Select site"})}),s.jsx(_.Bw,{children:(0,s.jsxs)(_.DI,{children:[s.jsx(_.n5,{children:"Sites"}),m.data.map(({siteId:e,name:t})=>s.jsx(_.Ql,{value:e,children:t},e))]})})]}),!!y.siteId?.message&&s.jsx("div",{className:"text-xs text-danger mt-1",children:y.siteId.message})]})})})]})}var z=r(83855),U=r(69088);function A({disabled:e}){let[t,r]=(0,v.useState)(!1),a=(0,D.useRouter)();return e?null:(0,s.jsxs)(s.Fragment,{children:[s.jsx(U.d,{open:t,onOpenChange:r}),s.jsx("div",{className:" fixed bottom-5 right-10 z-[1] ",children:(0,s.jsxs)(b.h_,{children:[s.jsx(b.$F,{asChild:!0,children:s.jsx(u.z,{size:"icon",className:"rounded-full w-12 h-12",children:s.jsx(z.Z,{className:"h-6 w-6"})})}),(0,s.jsxs)(b.AW,{children:[s.jsx(b.Xi,{onClick:()=>a.push("/new-script"),children:"New script"}),s.jsx(b.Xi,{onClick:()=>r(!0),children:"Import script"})]})]})})]})}var M=r(46670);function V(e){let{scripts:t,selected:r,loading:d,scriptsIdsToExport:p,disabled:u,setSelected:h,setScriptsIdsToExport:m,onDelete:f,onSort:y,onDuplicate:g}=function({scripts:e}){let[t,r]=(0,v.useState)(e),[s,a]=(0,v.useState)([]),[i,o]=(0,v.useState)(!1),[l,d]=(0,v.useState)([]),p=(0,D.useRouter)(),{viewOnly:u}=(0,c.b)(),{confirm:h}=(0,M.t)(),{alert:x}=(0,R.s)(),{deleteScripts:m,saveScripts:f,copyScripts:y}=(0,n.h)(),g=(0,v.useCallback)(async e=>{h(async()=>{let s={...t};r(t=>({...t,data:t.data.filter(t=>!e.includes(t.scriptId))})),a([]),o(!0);let i=await m({scriptsIds:e,broadcastAction:!0});i.errors?.length?x({title:"Error",message:i.errors.join(", "),variant:"error",onClose:()=>r(s)}):(a([]),p.refresh(),x({title:"Success",message:"Scripts deleted successfully!",variant:"success"})),o(!1)},{danger:!0,title:"Delete scripts",message:"Are you sure you want to delete scripts?",positiveLabel:"Yes, delete"})},[m,h,x,p,t]),j=(0,v.useCallback)(async(e,s,a)=>{let i=[],n=a.map(({oldIndex:e,newIndex:r})=>{let s=t.data[e],a=s.position;return e!==r&&(a=r+1,i.push({scriptId:s.scriptId,position:a})),{...s,position:a}}).sort((e,t)=>e.position-t.position);r(e=>({...e,data:n})),await f({data:i,broadcastAction:!0}),p.refresh()},[f,t,p]),b=(0,v.useCallback)(async e=>{let r=(e=e.filter(e=>e)).map(e=>t.data.filter(t=>t.scriptId===e)[0]?.title||"");h(async()=>{try{if(!e.length)throw Error("No scripts selected");o(!0);let t=await y({scriptsIds:e,broadcastAction:!0});if(t.errors?.length)throw Error(t.errors.join(", "));p.refresh(),x({variant:"success",title:"Success",message:"Scripts duplicated successfully!"})}catch(e){x({variant:"error",title:"Error",message:"Failed to duplicate scripts: "+e.message})}finally{o(!1)}},{title:"Duplicate script",message:`<p>Are you sure you want to duplicate: ${r.map(e=>`<div><b>${e}</b></div>`).join("")}`,positiveLabel:"Yes, duplicate"})},[h,y,x,p,t]),w=(0,v.useMemo)(()=>u,[u]),N=(0,v.useMemo)(()=>t.data.filter(e=>l.includes(e.scriptId)),[l,t]);return{scripts:t,selected:s,loading:i,scriptsIdsToExport:l,disabled:w,scriptsToExport:N,setScripts:r,setSelected:a,setLoading:o,setScriptsIdsToExport:d,onDelete:g,onSort:j,onDuplicate:b}}(e),{sys:j,viewOnly:b}=(0,c.b)(),{hospitals:w}=(0,n.h)();return(0,s.jsxs)(s.Fragment,{children:[d&&s.jsx(o.a,{overlay:!0}),!!p.length&&s.jsx(W,{open:!0,scriptsIdsToExport:p,onOpenChange:()=>m([]),setScriptsIdsToExport:m}),s.jsx(A,{disabled:u}),s.jsx("div",{className:"",children:s.jsx(i.DataTable,{selectedIndexes:r,onSelect:h,title:"Scripts",selectable:!u,sortable:!u,loading:d,maxRows:25,onSort:y,getRowOptions:({rowIndex:e})=>{let r=t.data[e];return r?{className:(0,l.cn)(!b&&r.isDraft&&"bg-danger/20 hover:bg-danger/30")}:{}},search:{inputPlaceholder:"Search scripts"},noDataMessage:s.jsx("div",{className:"mt-4 flex flex-col items-center justify-center gap-y-2",children:s.jsx("div",{children:"No scripts saved."})}),columns:[{name:"Position",cellRenderer:({rowIndex:e})=>e+1},{name:"Title"},{name:"Description"},{name:"Hospital",cellRenderer({rowIndex:e}){let r=t.data[e];return r?w.data.filter(e=>e.hospitalId===r.hospitalId)[0]?.name||"":null}},{name:"Version",align:"right",cellClassName:(0,l.cn)("w-[100px]","yes"===j.data.hide_data_table_version&&"hidden"),cellRenderer(e){let r=t.data[e.rowIndex];if(!r)return null;let i=r.isDraft?Math.max(0,r.version-1):r.version;return(0,s.jsxs)("div",{className:"inline-flex w-full justify-end items-center gap-x-[2px]",children:[s.jsx("div",{className:(0,l.cn)("w-2 h-2 rounded-full",i?"bg-green-400":"bg-gray-300")}),s.jsx("span",{children:i||r.version}),r.isDraft&&s.jsx(a.Z,{className:"h-4 w-4 text-muted-foreground"})]})}},{name:"Action",align:"right",cellClassName:"w-10",cellRenderer({rowIndex:e}){let r=t.data[e];return r?s.jsx(E,{item:r,disabled:u,setScriptsIdsToExport:()=>m([r.scriptId]),onDelete:()=>f([r.scriptId]),onDuplicate:()=>g([r.scriptId])}):null}}],data:t.data.map(e=>[e.position,e.title||"",e.description||"",e.hospitalName||"",e.version,""])})}),s.jsx(x,{selected:r,onDelete:()=>f(r.map(e=>t.data[e].scriptId).filter(e=>e)),setScriptsIdsToExport:()=>m(r.map(e=>t.data[e].scriptId).filter(e=>e))})]})}},34474:(e,t,r)=>{"use strict";r.d(t,{Bw:()=>f,DI:()=>p,Ph:()=>d,Ql:()=>g,i4:()=>h,ki:()=>u,n5:()=>y});var s=r(10326),a=r(17577),i=r(18792),n=r(941),o=r(96633),l=r(32933),c=r(77863);let d=i.fC,p=i.ZA,u=i.B4,h=a.forwardRef(({className:e,children:t,error:r,...a},o)=>(0,s.jsxs)(i.xz,{ref:o,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r&&"border-danger",e),...a,children:[t,s.jsx(i.JO,{asChild:!0,children:s.jsx(n.Z,{className:"h-4 w-4 opacity-50"})})]}));h.displayName=i.xz.displayName;let x=a.forwardRef(({className:e,...t},r)=>s.jsx(i.u_,{ref:r,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:s.jsx(o.Z,{className:"h-4 w-4"})}));x.displayName=i.u_.displayName;let m=a.forwardRef(({className:e,...t},r)=>s.jsx(i.$G,{ref:r,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:s.jsx(n.Z,{className:"h-4 w-4"})}));m.displayName=i.$G.displayName;let f=a.forwardRef(({className:e,children:t,position:r="popper",...a},n)=>s.jsx(i.h_,{children:(0,s.jsxs)(i.VY,{ref:n,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...a,children:[s.jsx(x,{}),s.jsx(i.l_,{className:(0,c.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),s.jsx(m,{})]})}));f.displayName=i.VY.displayName;let y=a.forwardRef(({className:e,...t},r)=>s.jsx(i.__,{ref:r,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));y.displayName=i.__.displayName;let g=a.forwardRef(({className:e,children:t,...r},a)=>(0,s.jsxs)(i.ck,{ref:a,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[s.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(i.wU,{children:s.jsx(l.Z,{className:"h-4 w-4"})})}),s.jsx(i.eT,{children:t})]}));g.displayName=i.ck.displayName,a.forwardRef(({className:e,...t},r)=>s.jsx(i.Z0,{ref:r,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=i.Z0.displayName},38599:(e,t,r)=>{"use strict";var s=r(71467),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,i,n,o,l,c,d,p,u=!1;t||(t={}),n=t.debug||!1;try{if(l=s(),c=document.createRange(),d=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=a[t.format]||a.default;window.clipboardData.setData(s,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(p),c.selectNodeContents(p),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");u=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=r.replace(/#{\s*key\s*}/g,i),window.prompt(o,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),p&&document.body.removeChild(p),l()}return u}},43810:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62881).Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},39447:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62881).Z)("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]])},12714:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62881).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},83855:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62881).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},69508:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62881).Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},47035:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62881).Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},63685:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(62881).Z)("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]])},71467:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],s=0;s<e.rangeCount;s++)r.push(e.getRangeAt(s));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},81438:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(19510),a=r(3283),i=r(85431),n=r(24569),o=r(46697),l=r(68570);let c=(0,l.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/components/scripts-table.tsx`),{__esModule:d,$$typeof:p}=c;c.default;let u=(0,l.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/components/scripts-table.tsx#ScriptsTable`);async function h(){let e=await a.getScripts({returnDraftsIfExist:!0});return(0,s.jsxs)(s.Fragment,{children:[s.jsx(i.D,{children:"Scripts"}),s.jsx(n.V,{children:s.jsx(o.Zb,{className:"mb-20",children:s.jsx(o.aY,{className:"p-0",children:s.jsx(u,{scripts:e})})})})]})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[5822,1744,3788,1490,5802,4084,7025,231,4723,4666,6318,413,2814,3856,565,7228,3269,3283,1548,6851],()=>r(38098));module.exports=s})();
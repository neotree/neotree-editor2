(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2433],{35158:function(e,t,r){Promise.resolve().then(r.bind(r,34593)),Promise.resolve().then(r.bind(r,25704))},88519:function(e,t,r){"use strict";r.d(t,{d:function(){return j}});var s=r(57437),a=r(2265),n=r(16463),i=r(39343),l=r(38472),o=r(46294),c=r(90837),d=r(86466),u=r(53699),f=r(17647),p=r(15701),m=r(50495),h=r(39661),x=r(67135),g=r(9704),v=r(83102),y=r(37440);function j(e){var t,r;let{open:j,overWriteScriptWithId:b,onOpenChange:w,onImportSuccess:N}=e,C=(0,n.useRouter)(),I=(0,n.useParams)();b=b||I.scriptId;let{getSites:k}=(0,f.b)(),{copyScripts:E}=(0,p.h)(),{alert:S}=(0,u.s)(),[D,Z]=(0,a.useState)(!1),[R,_]=(0,a.useState)({data:[]}),{formState:{errors:T},reset:A,watch:F,setValue:P,register:z,handleSubmit:O}=(0,i.cI)({defaultValues:{siteId:"",scriptId:"",confirmed:!b}}),V=F("confirmed"),U=(0,a.useMemo)(()=>D,[D]),M=(0,a.useCallback)(async()=>{try{var e;let t=(await l.Z.get("/api/sites?data="+JSON.stringify({types:["webeditor"]}))).data;if(null===(e=t.errors)||void 0===e?void 0:e.length)throw Error(t.errors.join(", "));_(t)}catch(e){S({title:"Error",message:"Failed to load sites: "+e.message,variant:"error",onClose:()=>w(!1)})}finally{Z(!1)}},[k,S,w]),L=O(async e=>{try{var t;if(!e.siteId)throw Error("Please select a site!");if(!e.scriptId)throw Error("Please provide a script ID!");if(!e.confirmed)throw Error("Please confirm that you want to override this script!");Z(!0);let r=(await l.Z.post("/api/scripts/copy",{fromRemoteSiteId:e.siteId,scriptsIds:[e.scriptId],overWriteScriptWithId:b,broadcastAction:!0})).data;if(null===(t=r.errors)||void 0===t?void 0:t.length)throw Error(r.errors.join(", "));C.refresh(),S({variant:"success",title:"Success",message:"Script imported successfully!",onClose:()=>{null==N||N(),A({siteId:"",scriptId:"",confirmed:!1}),w(!1)}})}catch(e){S({variant:"error",title:"Error",message:"Failed to import script: "+e.message})}finally{Z(!1)}});return(0,a.useEffect)(()=>{j&&M()},[j,M]),(0,s.jsxs)(s.Fragment,{children:[D&&(0,s.jsx)(h.a,{overlay:!0}),(0,s.jsx)(g.u,{open:j,onOpenChange:()=>{w(!1)},title:"Import script",actions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-xs text-danger",children:"* Required"}),(0,s.jsx)("div",{className:"flex-1"}),(0,s.jsx)(c.GG,{asChild:!0,children:(0,s.jsx)(m.z,{variant:"ghost",disabled:U,onClick:()=>w(!1),children:"Cancel"})}),(0,s.jsx)(m.z,{onClick:()=>L(),disabled:U,children:"Import"})]}),children:(0,s.jsxs)("div",{className:"flex flex-col gap-y-5",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(x._,{htmlFor:"siteId",children:"Site *"}),(0,s.jsxs)(o.Ph,{name:"siteId",disabled:U,onValueChange:e=>P("siteId",e,{shouldDirty:!0}),children:[(0,s.jsx)(o.i4,{children:(0,s.jsx)(o.ki,{placeholder:"Select site"})}),(0,s.jsx)(o.Bw,{children:(0,s.jsxs)(o.DI,{children:[(0,s.jsx)(o.n5,{children:"Sites"}),R.data.map(e=>{let{siteId:t,name:r}=e;return(0,s.jsx)(o.Ql,{value:t,children:r},t)})]})})]}),!!(null===(t=T.siteId)||void 0===t?void 0:t.message)&&(0,s.jsx)("div",{className:"text-xs text-danger mt-1",children:T.siteId.message})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(x._,{htmlFor:"scriptId",children:"Script ID *"}),(0,s.jsx)(v.I,{...z("scriptId",{disabled:U,required:!0}),name:"scriptId"}),!!(null===(r=T.scriptId)||void 0===r?void 0:r.message)&&(0,s.jsx)("div",{className:"text-xs text-danger mt-1",children:T.scriptId.message})]}),(0,s.jsxs)("div",{className:(0,y.cn)("flex gap-x-2",!b&&"hidden"),children:[(0,s.jsx)(d.X,{name:"confirmed",id:"confirmed",disabled:U,checked:V,onCheckedChange:()=>P("confirmed",!V,{shouldDirty:!0})}),(0,s.jsx)(x._,{secondary:!0,htmlFor:"exportable",children:"Confirm that you want to override this script"})]})]})})]})}},34593:function(e,t,r){"use strict";r.d(t,{ScriptsTable:function(){return B}});var s=r(57437),a=r(6649),n=r(75944),i=r(15701),l=r(39661),o=r(37440),c=r(17647),d=r(90399),u=r(58184),f=r(50495),p=r(17501);function m(e){let{selected:t,setScriptsIdsToExport:r,onDelete:a}=e;return t.length?(0,s.jsx)(s.Fragment,{children:!!t.length&&(0,s.jsxs)(p.h,{children:[(0,s.jsxs)(f.z,{variant:"destructive",className:"h-auto w-auto",onClick:()=>a(),children:[(0,s.jsx)(d.Z,{className:"h-4 w-4 mr-1"}),(0,s.jsx)("span",{children:t.length>1?"Delete ".concat(t.length):"Delete"})]}),(0,s.jsxs)(f.z,{className:"h-auto w-auto",onClick:()=>r(),children:[(0,s.jsx)(u.Z,{className:"h-4 w-4 mr-1"}),(0,s.jsx)("span",{children:t.length>1?"Export ".concat(t.length):"Export"})]})]})}):null}var h=r(87138),x=r(45188),g=r(75733);/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let v=(0,r(78030).Z)("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var y=r(6884),j=r(46910),b=r(2265),w=r(80042),N=r.n(w),C=function(e){void 0===e&&(e={});var t=(0,b.useState)(e),r=t[0],s=t[1];return[r,(0,b.useCallback)(function(e){s(function(t){return Object.assign({},t,e instanceof Function?e(t):e)})},[])]},I=function(){var e,t,r=(e=(0,b.useRef)(!1),t=(0,b.useCallback)(function(){return e.current},[]),(0,b.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),t),s=C({value:void 0,error:void 0,noUserInteraction:!0}),a=s[0],n=s[1];return[a,(0,b.useCallback)(function(e){if(r())try{if("string"!=typeof e&&"number"!=typeof e){var t,s,a=Error("Cannot copy typeof "+typeof e+" to clipboard, must be a string");n({value:e,error:a,noUserInteraction:!0});return}if(""===e){var a=Error("Cannot copy empty string to clipboard.");n({value:e,error:a,noUserInteraction:!0});return}s=e.toString(),t=N()(s),n({value:s,error:void 0,noUserInteraction:t})}catch(e){n({value:s,error:e,noUserInteraction:t})}},[])]},k=r(27776),E=r(20920);function S(e){let[t,r]=I(),[s,a]=(0,b.useState)(),n=(0,b.useCallback)(e=>(a((0,E.Z)()),r(e)),[r]);return(0,b.useEffect)(()=>{s&&(a(void 0),t.error?k.Am.error("Unable to copy value: ".concat(t.error.message)):t.value&&k.Am.success("Copied"+((null==e?void 0:e.showValueOnToast)?": ".concat(t.value):""),{position:"bottom-center"}))},[s,t,e]),[t,n]}function D(e){let{value:t,showValueOnToast:r=!1,...a}=e,[n,i]=S({showValueOnToast:r});return(0,s.jsx)("div",{...a,onClick:function(){for(var e,r=arguments.length,s=Array(r),n=0;n<r;n++)s[n]=arguments[n];i("".concat(t)),null===(e=a.onClick)||void 0===e||e.call(a,...s)}})}function Z(e){let{item:t,disabled:r,setScriptsIdsToExport:n,onDelete:i,onDuplicate:l}=e,[o,c]=S({showValueOnToast:!0});return t?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(j.h_,{children:[(0,s.jsx)(j.$F,{asChild:!0,children:(0,s.jsx)(f.z,{variant:"ghost",size:"icon",className:"p-0 h-auto w-auto transition-colors rounded-full hover:text-primary hover:bg-transparent",children:(0,s.jsx)(x.Z,{className:"h-4 w-4"})})}),(0,s.jsxs)(j.AW,{children:[(0,s.jsx)(j.Xi,{asChild:!0,children:(0,s.jsx)(h.default,{href:"/script/".concat(t.scriptId),children:(0,s.jsx)(s.Fragment,{children:r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z,{className:"mr-2 h-4 w-4"})," View"]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{className:"mr-2 h-4 w-4"})," Edit"]})})})}),(0,s.jsxs)(j.Xi,{onClick:()=>l(),children:[(0,s.jsx)(v,{className:"mr-2 h-4 w-4"}),"Duplicate"]}),(0,s.jsxs)(j.Xi,{onClick:()=>n(),children:[(0,s.jsx)(u.Z,{className:"mr-2 h-4 w-4"}),"Export"]}),(0,s.jsx)(j.Xi,{asChild:!0,children:(0,s.jsxs)(D,{showValueOnToast:!0,value:t.scriptId,children:[(0,s.jsx)(y.Z,{className:"mr-2 h-4 w-4"}),"Copy ID"]})}),!r&&(0,s.jsxs)(j.Xi,{onClick:()=>i(),className:"text-danger focus:bg-danger focus:text-danger-foreground",children:[(0,s.jsx)(d.Z,{className:"mr-2 h-4 w-4"}),(0,s.jsx)("span",{children:"Delete"})]})]})]})}):null}var R=r(16463),_=r(39343),T=r(38472),A=r(90837),F=r(46294),P=r(53699),z=r(67135),O=r(9704);function V(e){var t;let{open:r,scriptsIdsToExport:a,setScriptsIdsToExport:n,onOpenChange:o}=e,{getSites:d}=(0,c.b)(),{copyScripts:u}=(0,i.h)(),{alert:p}=(0,P.s)(),m=(0,R.useRouter)(),[h,x]=(0,b.useState)(!1),[g,v]=(0,b.useState)({data:[]}),{formState:{errors:y},setValue:j,reset:w,handleSubmit:N}=(0,_.cI)({defaultValues:{siteId:""}}),C=(0,b.useMemo)(()=>h,[h]),I=(0,b.useCallback)(async()=>{try{var e;let t=(await T.Z.get("/api/sites?data="+JSON.stringify({types:["webeditor"]}))).data;if(null===(e=t.errors)||void 0===e?void 0:e.length)throw Error(t.errors.join(", "));v(t)}catch(e){p({title:"Error",message:"Failed to load sites: "+e.message,variant:"error",onClose:()=>o(!1)})}finally{x(!1)}},[d,p,o]),k=N(async e=>{try{var t;if(!e.siteId)throw Error("Please select a site!");x(!0);let r=(await T.Z.post("/api/scripts/copy",{toRemoteSiteId:e.siteId,scriptsIds:a,broadcastAction:!0})).data;if(null===(t=r.errors)||void 0===t?void 0:t.length)throw Error(r.errors.join(", "));m.refresh(),p({variant:"success",title:"Success",message:"Script exported successfully!",onClose:()=>{w({siteId:""}),o(!1)}})}catch(e){p({variant:"error",title:"Error",message:"Failed to export script: "+e.message})}finally{x(!1)}});return(0,b.useEffect)(()=>{r&&I()},[r,I]),(0,s.jsxs)(s.Fragment,{children:[h&&(0,s.jsx)(l.a,{overlay:!0}),(0,s.jsx)(O.u,{open:r,onOpenChange:()=>{o(!1),r||n([])},title:"Export script",actions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-xs text-danger",children:"* Required"}),(0,s.jsx)("div",{className:"flex-1"}),(0,s.jsx)(A.GG,{asChild:!0,children:(0,s.jsx)(f.z,{variant:"ghost",disabled:C,onClick:()=>o(!1),children:"Cancel"})}),(0,s.jsx)(f.z,{onClick:()=>k(),disabled:C,children:"Export"})]}),children:(0,s.jsx)("div",{className:"flex flex-col gap-y-5",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(z._,{htmlFor:"siteId",children:"Site *"}),(0,s.jsxs)(F.Ph,{name:"siteId",disabled:C,onValueChange:e=>j("siteId",e,{shouldDirty:!0}),children:[(0,s.jsx)(F.i4,{children:(0,s.jsx)(F.ki,{placeholder:"Select site"})}),(0,s.jsx)(F.Bw,{children:(0,s.jsxs)(F.DI,{children:[(0,s.jsx)(F.n5,{children:"Sites"}),g.data.map(e=>{let{siteId:t,name:r}=e;return(0,s.jsx)(F.Ql,{value:t,children:r},t)})]})})]}),!!(null===(t=y.siteId)||void 0===t?void 0:t.message)&&(0,s.jsx)("div",{className:"text-xs text-danger mt-1",children:y.siteId.message})]})})})]})}var U=r(92513),M=r(88519);function L(e){let{disabled:t}=e,[r,a]=(0,b.useState)(!1),n=(0,R.useRouter)();return t?null:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M.d,{open:r,onOpenChange:a}),(0,s.jsx)("div",{className:" fixed bottom-5 right-10 z-[1] ",children:(0,s.jsxs)(j.h_,{children:[(0,s.jsx)(j.$F,{asChild:!0,children:(0,s.jsx)(f.z,{size:"icon",className:"rounded-full w-12 h-12",children:(0,s.jsx)(U.Z,{className:"h-6 w-6"})})}),(0,s.jsxs)(j.AW,{children:[(0,s.jsx)(j.Xi,{onClick:()=>n.push("/new-script"),children:"New script"}),(0,s.jsx)(j.Xi,{onClick:()=>a(!0),children:"Import script"})]})]})})]})}var X=r(76230);function B(e){let{scripts:t,selected:r,loading:d,scriptsIdsToExport:u,disabled:f,setSelected:p,setScriptsIdsToExport:h,onDelete:x,onSort:g,onDuplicate:v}=function(e){let{scripts:t}=e,[r,s]=(0,b.useState)(t),[a,n]=(0,b.useState)([]),[l,o]=(0,b.useState)(!1),[d,u]=(0,b.useState)([]);(0,b.useEffect)(()=>{s(t)},[t]);let f=(0,R.useRouter)(),{viewOnly:p}=(0,c.b)(),{confirm:m}=(0,X.t)(),{alert:h}=(0,P.s)(),{deleteScripts:x,saveScripts:g,copyScripts:v}=(0,i.h)(),y=(0,b.useCallback)(async e=>{m(async()=>{var t;let a={...r};s(t=>({...t,data:t.data.filter(t=>!e.includes(t.scriptId))})),n([]),o(!0);let i=(await T.Z.delete("/api/scripts?data="+JSON.stringify({scriptsIds:e,broadcastAction:!0}))).data;(null===(t=i.errors)||void 0===t?void 0:t.length)?h({title:"Error",message:i.errors.join(", "),variant:"error",onClose:()=>s(a)}):(n([]),f.refresh(),h({title:"Success",message:"Scripts deleted successfully!",variant:"success"})),o(!1)},{danger:!0,title:"Delete scripts",message:"Are you sure you want to delete scripts?",positiveLabel:"Yes, delete"})},[x,m,h,f,r]),j=(0,b.useCallback)(async(e,t,a)=>{let n=[],i=a.map(e=>{let{oldIndex:t,newIndex:s}=e,a=r.data[t],i=a.position;return t!==s&&(i=r.data[s].position,n.push({scriptId:a.scriptId,position:i})),{...a,position:i}}).sort((e,t)=>e.position-t.position);s(e=>({...e,data:i})),await T.Z.post("/api/scripts/save",{data:n,broadcastAction:!0}),f.refresh()},[g,r,f]),w=(0,b.useCallback)(async e=>{let t=(e=e.filter(e=>e)).map(e=>{var t;return(null===(t=r.data.filter(t=>t.scriptId===e)[0])||void 0===t?void 0:t.title)||""});m(async()=>{try{var t;if(!e.length)throw Error("No scripts selected");o(!0);let r=(await T.Z.post("/api/scripts/copy",{scriptsIds:e,broadcastAction:!0})).data;if(null===(t=r.errors)||void 0===t?void 0:t.length)throw Error(r.errors.join(", "));f.refresh(),h({variant:"success",title:"Success",message:"Scripts duplicated successfully!"})}catch(e){h({variant:"error",title:"Error",message:"Failed to duplicate scripts: "+e.message})}finally{o(!1)}},{title:"Duplicate script",message:"<p>Are you sure you want to duplicate: ".concat(t.map(e=>"<div><b>".concat(e,"</b></div>")).join("")),positiveLabel:"Yes, duplicate"})},[m,v,h,f,r]),N=(0,b.useMemo)(()=>p,[p]),C=(0,b.useMemo)(()=>r.data.filter(e=>d.includes(e.scriptId)),[d,r]);return{scripts:r,selected:a,loading:l,scriptsIdsToExport:d,disabled:N,scriptsToExport:C,setScripts:s,setSelected:n,setLoading:o,setScriptsIdsToExport:u,onDelete:y,onSort:j,onDuplicate:w}}(e),{sys:y,viewOnly:j}=(0,c.b)(),{hospitals:w}=(0,i.h)();return(0,s.jsxs)(s.Fragment,{children:[d&&(0,s.jsx)(l.a,{overlay:!0}),!!u.length&&(0,s.jsx)(V,{open:!0,scriptsIdsToExport:u,onOpenChange:()=>h([]),setScriptsIdsToExport:h}),(0,s.jsx)(L,{disabled:f}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(n.DataTable,{selectedIndexes:r,onSelect:p,title:"Scripts",selectable:!f,sortable:!f,loading:d,maxRows:25,onSort:g,getRowOptions:e=>{let{rowIndex:r}=e,s=t.data[r];return s?{className:(0,o.cn)(!j&&s.isDraft&&"bg-danger/20 hover:bg-danger/30")}:{}},search:{inputPlaceholder:"Search scripts"},noDataMessage:(0,s.jsx)("div",{className:"mt-4 flex flex-col items-center justify-center gap-y-2",children:(0,s.jsx)("div",{children:"No scripts saved."})}),columns:[{name:"Position",cellRenderer(e){let{rowIndex:t}=e;return t+1}},{name:"Title"},{name:"Description"},{name:"Hospital",cellRenderer(e){var r;let{rowIndex:s}=e,a=t.data[s];return a?(null===(r=w.data.filter(e=>e.hospitalId===a.hospitalId)[0])||void 0===r?void 0:r.name)||"":null}},{name:"Version",align:"right",cellClassName:(0,o.cn)("w-[100px]","yes"===y.data.hide_data_table_version&&"hidden"),cellRenderer(e){let r=t.data[e.rowIndex];if(!r)return null;let n=r.isDraft?Math.max(0,r.version-1):r.version;return(0,s.jsxs)("div",{className:"inline-flex w-full justify-end items-center gap-x-[2px]",children:[(0,s.jsx)("div",{className:(0,o.cn)("w-2 h-2 rounded-full",n?"bg-green-400":"bg-gray-300")}),(0,s.jsx)("span",{children:n||r.version}),r.isDraft&&(0,s.jsx)(a.Z,{className:"h-4 w-4 text-muted-foreground"})]})}},{name:"Action",align:"right",cellClassName:"w-10",cellRenderer(e){let{rowIndex:r}=e,a=t.data[r];return a?(0,s.jsx)(Z,{item:a,disabled:f,setScriptsIdsToExport:()=>h([a.scriptId]),onDelete:()=>x([a.scriptId]),onDuplicate:()=>v([a.scriptId])}):null}}],data:t.data.map(e=>[e.position,e.title||"",e.description||"",e.hospitalName||"",e.version,""])})}),(0,s.jsx)(m,{selected:r,onDelete:()=>x(r.map(e=>t.data[e].scriptId).filter(e=>e)),setScriptsIdsToExport:()=>h(r.map(e=>t.data[e].scriptId).filter(e=>e))})]})}},17501:function(e,t,r){"use strict";r.d(t,{h:function(){return i}});var s=r(57437),a=r(77606),n=r(37440);function i(e){let{children:t,className:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"h-16"}),(0,s.jsx)("div",{className:(0,n.cn)("\n                        fixed \n                        left-0 \n                        bottom-0 \n                        h-16 \n                        w-full \n                        border-t \n                        border-t-border \n                        z-[1] \n                        bg-primary-foreground \n                        dark:bg-background \n                        shadow-md \n                        dark:shadow-foreground/10\n                    "),children:(0,s.jsx)(a.V,{children:(0,s.jsx)("div",{className:(0,n.cn)("flex justify-end gap-x-4",r),children:t})})})]})}},77606:function(e,t,r){"use strict";r.d(t,{V:function(){return n}});var s=r(57437),a=r(37440);function n(e){let{className:t,...r}=e;return(0,s.jsx)("div",{...r,className:(0,a.cn)("w-full max-w-screen-xl mx-auto p-5",t)})}},39661:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});var s=r(57437),a=r(89627);function n(e){let{overlay:t,transparent:r}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",...t?{height:"100%",position:"fixed",top:0,left:0,bottom:0,zIndex:999,backgroundColor:r?"transparent":"rgba(255,255,255,.6)"}:{padding:"50px 0"}},children:(0,s.jsx)(a.Z,{style:{height:24,width:24},className:"animate-spin"})})})}},9704:function(e,t,r){"use strict";r.d(t,{u:function(){return i}});var s=r(57437),a=r(90837),n=r(37440);function i(e){let{children:t,title:r,description:i,actions:l,trigger:o,contentProps:c,footerProps:d,...u}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a.Vq,{...u,children:[o,(0,s.jsxs)(a.cZ,{hideCloseButton:!0,className:(0,n.cn)("flex flex-col max-h-[90%] gap-y-4 p-0 m-0 sm:max-w-xl",null==c?void 0:c.className),...c,children:[(0,s.jsxs)(a.fK,{className:(0,n.cn)(r||i?"":"hidden","border-b border-b-border px-4 py-4"),children:[(0,s.jsx)(a.$N,{className:(0,n.cn)(r?"":"hidden"),children:r}),(0,s.jsx)(a.Be,{className:(0,n.cn)(i?"":"hidden"),children:i})]}),(0,s.jsx)("div",{className:"flex-1 flex flex-col overflow-y-auto px-4 py-2",children:t}),(0,s.jsx)(a.cN,{className:(0,n.cn)("border-t border-t-border px-4 py-2 items-center w-full",l?"":"hidden",null==d?void 0:d.className),...d,children:l})]})]})})}},58502:function(e,t,r){"use strict";r.d(t,{SocketEventsListener:function(){return i}});var s=r(2265),a=r(16463),n=r(7752);function i(e){let{events:t}=e,r=(0,s.useRef)({eventsTimeouts:{},eventsTimestamps:{}});(0,s.useRef)(new Date().getTime());let i=(0,a.useRouter)();return(0,s.useEffect)(()=>{t.forEach(e=>{let{name:t,action:s,delay:a=100,onEvent:l}=e;n.Z.on(t,function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];let c=()=>{var e,r;(!s||n[0]===s)&&(null===(e=l.callback)||void 0===e||e.call(l,...n),(null==l?void 0:l.refreshRouter)&&(console.log(t,"refreshing..."),i.refresh()),(null===(r=l.redirect)||void 0===r?void 0:r.to)&&(l.redirect.replace?i.replace(l.redirect.to):i.push(l.redirect.to)))},d=new Date().getTime();a?(clearTimeout(r.current.eventsTimeouts[t]),r.current.eventsTimeouts[t]=setTimeout(()=>{r.current.eventsTimestamps[t]=d,c()},a)):(r.current.eventsTimestamps[t]=new Date().getTime(),c())})})},[t,i]),null}},25704:function(e,t,r){"use strict";r.r(t),r.d(t,{Title:function(){return n}});var s=r(2265),a=r(20357);function n(e){let{children:t}=e;return(0,s.useEffect)(()=>{document.title=[a.env.NEXT_PUBLIC_APP_NAME,t].filter(e=>e).join(" - ")},[t]),(0,s.useEffect)(()=>()=>{document.title="".concat(a.env.NEXT_PUBLIC_APP_NAME)},[]),null}},90837:function(e,t,r){"use strict";r.d(t,{$N:function(){return x},Be:function(){return g},GG:function(){return u},Vq:function(){return o},cN:function(){return h},cZ:function(){return p},fK:function(){return m},hg:function(){return c}});var s=r(57437),a=r(2265),n=r(13304),i=r(74697),l=r(37440);let o=n.fC,c=n.xz,d=n.h_,u=n.x8,f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.aV,{ref:t,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a})});f.displayName=n.aV.displayName;let p=a.forwardRef((e,t)=>{let{className:r,children:a,hideCloseButton:o,...c}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(f,{}),(0,s.jsxs)(n.VY,{ref:t,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...c,children:[a,!0!==o&&(0,s.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(i.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=n.VY.displayName;let m=e=>{let{className:t,...r}=e;return(0,s.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};m.displayName="DialogHeader";let h=e=>{let{className:t,...r}=e;return(0,s.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};h.displayName="DialogFooter";let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",r),...a})});x.displayName=n.Dx.displayName;let g=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...a})});g.displayName=n.dk.displayName},67135:function(e,t,r){"use strict";r.d(t,{_:function(){return c}});var s=r(57437),a=r(2265),n=r(38364),i=r(12218),l=r(37440);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:r,secondary:a,error:i,...c}=e;return(0,s.jsx)(n.f,{ref:t,className:(0,l.cn)(o(),a&&"text-xs",i?"text-danger":"",r),...c})});c.displayName=n.f.displayName},46294:function(e,t,r){"use strict";r.d(t,{Bw:function(){return x},DI:function(){return u},Ph:function(){return d},Ql:function(){return v},i4:function(){return p},ki:function(){return f},n5:function(){return g}});var s=r(57437),a=r(2265),n=r(48297),i=r(42421),l=r(14392),o=r(22468),c=r(37440);let d=n.fC,u=n.ZA,f=n.B4,p=a.forwardRef((e,t)=>{let{className:r,children:a,error:l,...o}=e;return(0,s.jsxs)(n.xz,{ref:t,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",l&&"border-danger",r),...o,children:[a,(0,s.jsx)(n.JO,{asChild:!0,children:(0,s.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});p.displayName=n.xz.displayName;let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.u_,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,s.jsx)(l.Z,{className:"h-4 w-4"})})});m.displayName=n.u_.displayName;let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.$G,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})});h.displayName=n.$G.displayName;let x=a.forwardRef((e,t)=>{let{className:r,children:a,position:i="popper",...l}=e;return(0,s.jsx)(n.h_,{children:(0,s.jsxs)(n.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:i,...l,children:[(0,s.jsx)(m,{}),(0,s.jsx)(n.l_,{className:(0,c.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,s.jsx)(h,{})]})})});x.displayName=n.VY.displayName;let g=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.__,{ref:t,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...a})});g.displayName=n.__.displayName;let v=a.forwardRef((e,t)=>{let{className:r,children:a,...i}=e;return(0,s.jsxs)(n.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(n.wU,{children:(0,s.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(n.eT,{children:a})]})});v.displayName=n.ck.displayName,a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(n.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",r),...a})}).displayName=n.Z0.displayName},17647:function(e,t,r){"use strict";r.d(t,{AppContextProvider:function(){return g},b:function(){return x}});var s=r(57437),a=r(2265),n=r(79512),i=r(16463),l=r(23314),o=r(44785);let c=o.Z.get,d=o.Z.set;o.Z.remove;var u={get:c,set:d};function f(){let e=u.get("mode");return e||(e="view",u.set("mode",e,{expires:31536e7})),e}var p=r(7752),m=r(58502);let h=(0,a.createContext)(null),x=()=>(0,a.useContext)(h);function g(e){let{children:t,...r}=e,o=function(e){(0,i.useRouter)();let{isAdmin:t,isSuperUser:r,sys:s}=e,{setTheme:l}=(0,n.F)();(0,a.useEffect)(()=>{"yes"===s.data.hide_theme_toggle&&l("light")},[s]);let o=(0,a.useCallback)(()=>(t||r?f():"view")||"view",[r,t]),[c,d]=(0,a.useState)(o()),m=!t&&!r||"view"===c,h=(0,a.useCallback)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let s=function(e){return u.set("mode",e,{expires:31536e7}),f()}(...t);return p.Z.emit("mode_changed",o()),d(o()),s},[o]),x=(0,a.useCallback)(()=>{d(o())},[o]);return{...e,mode:c,viewOnly:m,onModeChange:x,getMode:f,setMode:h}}(r),[c,d]=(0,a.useState)(!1);return((0,l.Z)(()=>{d(!0)}),c)?(0,s.jsxs)(h.Provider,{value:o,children:[t,(0,s.jsx)(m.SocketEventsListener,{events:[{name:"mode_changed",onEvent:{callback:o.onModeChange}}]})]}):null}},15701:function(e,t,r){"use strict";r.d(t,{ScriptsContextProvider:function(){return d},h:function(){return c}});var s=r(57437),a=r(2265),n=r(16463),i=r(12491),l=r(23733);let o=(0,a.createContext)(null),c=()=>(0,a.useContext)(o);function d(e){let{children:t,...r}=e,c=function(e){let{}=e,t=(0,n.useRouter)(),{scriptId:r}=(0,n.useParams)(),{parsed:s}=(0,l.l)(),o=(0,a.useCallback)(()=>{t.push("/")},[t]),c=(0,a.useCallback)(()=>{t.push("/script/".concat(r,"?").concat(i.Z.stringify({...s,section:"screens"})))},[t,s,r]);return{onCancelDiagnosisForm:(0,a.useCallback)(()=>{t.push("/script/".concat(r,"?").concat(i.Z.stringify({...s,section:"diagnoses"})))},[t,s,r]),onCancelScreenForm:c,onCancelScriptForm:o}}(r);return(0,s.jsx)(o.Provider,{value:{...r,...c},children:t})}},53699:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var s=r(39099);let a={title:"",message:"",buttonLabel:"Ok",variant:"info",onClose:void 0},n=(0,s.Ue)(e=>({isOpen:!1,...a,alert:t=>e({isOpen:!0,...a,...t}),close:()=>e({isOpen:!1,onClose:void 0,...a})}))},76230:function(e,t,r){"use strict";r.d(t,{t:function(){return n}});var s=r(39099);let a={danger:!1,title:"Confirm",message:"Are you sure?",positiveLabel:"Ok",negativeLabel:"Cancel"},n=(0,s.Ue)(e=>({isOpen:!1,...a,confirm:(t,r)=>e({isOpen:!0,...a,...r,onConfirm:t}),close:()=>e({isOpen:!1,onConfirm:void 0,...a})}))},7752:function(e,t,r){"use strict";var s=r(34999),a=r(20357);let n=(0,s.io)(a.env.NEXT_PUBLIC_APP_URL);t.Z=n},80042:function(e,t,r){"use strict";var s=r(85786),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,n,i,l,o,c,d,u,f=!1;t||(t={}),i=t.debug||!1;try{if(o=s(),c=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=a[t.format]||a.default;window.clipboardData.setData(s,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(u),c.selectNodeContents(u),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(s){i&&console.error("unable to copy using execCommand: ",s),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(s){i&&console.error("unable to copy using clipboardData: ",s),i&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",n=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=r.replace(/#{\s*key\s*}/g,n),window.prompt(l,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),u&&document.body.removeChild(u),o()}return f}},6884:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(78030).Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},75733:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(78030).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},58184:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(78030).Z)("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]])},87138:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var s=r(231),a=r.n(s)},85786:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],s=0;s<e.rangeCount;s++)r.push(e.getRangeAt(s));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[4868,5360,8429,659,7776,9343,4199,7651,231,110,1816,8472,1344,7180,5944,7478,7023,1744],function(){return e(e.s=35158)}),_N_E=e.O()}]);
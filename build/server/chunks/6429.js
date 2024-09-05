exports.id=6429,exports.ids=[6429],exports.modules={64365:(e,s,t)=>{Promise.resolve().then(t.bind(t,79530)),Promise.resolve().then(t.bind(t,96948)),Promise.resolve().then(t.bind(t,10827)),Promise.resolve().then(t.t.bind(t,79404,23))},79530:(e,s,t)=>{"use strict";t.d(s,{DiagnosisForm:()=>E});var a=t(10326),i=t(17577),r=t(35047),l=t(90772),n=t(54432),d=t(87673),o=t(31048),c=t(8281),m=t(11870),h=t(77863),u=t(74723),x=t(47463),p=t(44099),g=t(82617),f=t(96221),j=t(3529),y=t(42954),v=t(61541),b=t(83855),N=t(39447),w=t(69508),k=t(47035),C=t(77228),D=t(62288),F=t(60097),I=t(46670),$=t(29354);function S({disabled:e,selected:s,onDelete:t,onCopy:i}){return a.jsx(a.Fragment,{children:!!s.length&&a.jsx($.h,{children:(0,a.jsxs)(l.z,{variant:"destructive",className:"h-auto w-auto",disabled:e,onClick:()=>t(),children:[a.jsx(k.Z,{className:"h-4 w-4 mr-1"}),a.jsx("span",{children:s.length>1?`Delete ${s.length} symptoms`:"Delete symptom"})]})})})}var z=t(2025),R=t(88846),Z=t(53313),_=t(61892),T=t(58464),P=t(69486);function W({children:e,symptom:s,form:t,disabled:r,...d}){let{data:c,index:m}={...s},[p,g]=(0,i.useState)(!1),f=(0,i.useCallback)(()=>({symptomId:c?.symptomId||(0,x.Z)(),expression:c?.expression||"",name:c?.name||"",weight:c?.weight||null,type:c?.type||T.ph[0].value,position:c?.position||1,printable:c?.printable||!0,...c}),[c]),{reset:j,watch:y,register:v,handleSubmit:b,setValue:N}=(0,u.cI)({defaultValues:f()}),w=y("type"),k=y("name"),C=y("printable"),F=(0,i.useMemo)(()=>!!r,[r]),I=b(e=>{!(0,_.x)(m)&&c?t.setValue("symptoms",t.getValues("symptoms").map((s,t)=>({...s,...t===m?e:null}))):t.setValue("symptoms",[...t.getValues("symptoms"),e],{shouldDirty:!0}),g(!1)});return a.jsx(a.Fragment,{children:a.jsx(z.u,{open:p,title:c?"Add symptom":"Edit symptom",trigger:"function"==typeof e?e({extraProps:d}):e,onOpenChange:e=>{g(e),j(f())},actions:(0,a.jsxs)(a.Fragment,{children:[a.jsx("span",{className:(0,h.cn)("text-danger text-xs",F&&"hidden"),children:"* Required"}),a.jsx("div",{className:"flex-1"}),a.jsx(D.GG,{asChild:!0,children:a.jsx(l.z,{variant:"ghost",children:"Cancel"})}),a.jsx(l.z,{disabled:F,onClick:()=>I(),children:"Save"})]}),children:(0,a.jsxs)("div",{className:"flex flex-col gap-y-5",children:[a.jsx(P.D,{children:"Type"}),a.jsx("div",{children:a.jsx(R.E,{disabled:F,defaultValue:w,onValueChange:e=>N("type",e,{shouldDirty:!0}),className:"flex flex-col gap-y-4",children:T.ph.map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[a.jsx(R.m,{value:e.value,id:e.value}),a.jsx(o._,{secondary:!0,htmlFor:e.value,children:e.label})]},e.value))})}),a.jsx(P.D,{children:"Properties"}),(0,a.jsxs)("div",{children:[a.jsx(o._,{error:!F&&!k,htmlFor:"name",children:"Name *"}),a.jsx(n.I,{...v("name",{disabled:F,required:!0}),name:"name",error:!F&&!k})]}),(0,a.jsxs)("div",{children:[a.jsx(o._,{htmlFor:"weight",children:"Weight "}),a.jsx(n.I,{...v("weight",{disabled:F}),name:"label",type:"number"}),(0,a.jsxs)("span",{className:"text-xs text-muted-foreground",children:["Must be in the range: 0.0 - 1.0 (",a.jsx("b",{children:"default 1.0"}),")"]})]}),(0,a.jsxs)("div",{children:[a.jsx(o._,{htmlFor:"expression",children:"Sign/Risk expression "}),a.jsx(n.I,{...v("expression",{disabled:F}),name:"label"}),(0,a.jsxs)("span",{className:"text-xs text-muted-foreground",children:["Example: ",a.jsx("b",{children:"($key = true and $key2 = false) or $key3 = 'HD'"})]})]}),a.jsx(P.D,{children:"Print"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex-1 flex items-center space-x-2",children:[a.jsx(Z.X,{id:"printable",disabled:F,checked:C,onCheckedChange:()=>N("printable",!C,{shouldDirty:!0})}),a.jsx(o._,{htmlFor:"printable",children:"Print"})]}),a.jsx("span",{className:"text-muted-foreground text-xs",children:"If not checked, data will not be display on the session summary and the printout."})]})]})})})}function M({form:e,disabled:s}){let[t,r]=(0,i.useState)([]),{confirm:n}=(0,I.t)(),d=e.watch("symptoms"),o=(0,i.useCallback)((s,t)=>{let a=(0,v.q)([...d],s,t);e.setValue("symptoms",a.map((e,s)=>({...e,position:s+1})),{shouldDirty:!0})},[e,d]),c=(0,i.useCallback)(s=>{let t=d.filter((e,t)=>s.includes(t)).map(e=>`<div class="font-bold text-danger">${e.name}</div>`).join("");n(()=>{let t=d.filter((e,t)=>!s.includes(t));e.setValue("symptoms",t.map((e,s)=>({...e,position:s+1})),{shouldDirty:!0}),r([])},{title:"Delete",message:`<p>Are you sure you want to delete ${s.length>1?`${s.length} symptoms: `:"symptom: "}</p> ${t}`,danger:!0,positiveLabel:"Delete"})},[e,d,n]),m=(0,i.useCallback)(s=>{let t=d.filter((e,t)=>s.includes(t)).map(e=>`<div class="font-bold">${e.name}</div>`).join("");n(()=>{let t=[...d,...d.filter((e,t)=>s.includes(t)).map((e,s)=>({...e,position:d.length+1+s}))];e.setValue("symptoms",t.map((e,s)=>({...e,position:s+1})),{shouldDirty:!0}),r([])},{title:"Duplicate",message:`<p>Are you sure you want to duplicate ${s.length>1?`${s.length} symptoms: `:"symptom: "}</p> ${t}`,positiveLabel:"Duplicate"})},[e,d,n]);return(0,a.jsxs)(a.Fragment,{children:[a.jsx(C.DataTable,{title:"Symptoms",sortable:!s,selectable:!s,onSort:o,selectedIndexes:t,onSelect:r,search:{inputPlaceholder:"Search symptoms"},headerActions:a.jsx(a.Fragment,{children:a.jsx(W,{form:e,disabled:s,children:!s&&a.jsx(D.hg,{asChild:!0,children:(0,a.jsxs)(l.z,{className:"text-primary border-primary",variant:"outline",children:[a.jsx(b.Z,{className:"h-4 w-4 mr-1"}),"New symptom"]})})})}),columns:[{name:"Type"},{name:"Name"},{name:"Action",align:"right",cellRenderer({rowIndex:t}){let i=d[t];return(0,a.jsxs)(F.h_,{children:[a.jsx(F.$F,{asChild:!0,children:a.jsx(l.z,{variant:"ghost",size:"icon",className:"p-0 h-auto w-auto transition-colors rounded-full hover:text-primary hover:bg-transparent",children:a.jsx(N.Z,{className:"h-4 w-4"})})}),(0,a.jsxs)(F.AW,{children:[a.jsx(F.Xi,{asChild:!0,children:a.jsx(W,{disabled:s,form:e,symptom:{data:i,index:t},children:({extraProps:e})=>(0,a.jsxs)(D.hg,{...e,className:(0,h.cn)(e?.className,"w-full"),children:[a.jsx(w.Z,{className:"w-4 h-4 mr-2"}),a.jsx("span",{children:s?"View":"Edit"})]})})}),(0,a.jsxs)(F.Xi,{onClick:()=>c([t]),className:(0,h.cn)("text-danger focus:bg-danger focus:text-danger-foreground"),disabled:s,children:[a.jsx(k.Z,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Delete"})]})]})]})}}],data:d.map(e=>[e.type,e.name,""])}),!s&&a.jsx(S,{disabled:s,selected:t,onDelete:()=>c(t),onCopy:()=>m(t)})]})}function E(e){let s=(0,r.useRouter)(),t=function({formData:e,scriptId:s}){let t=(0,r.useRouter)(),[a,l]=(0,i.useState)(!1),{saveDiagnoses:n}=(0,g.h)(),{alert:d}=(0,f.s)(),{viewOnly:o}=(0,j.b)(),c=(0,i.useMemo)(()=>`/script/${s}?section=diagnoses`,[s]),m=(0,i.useCallback)(()=>({version:e?.version||1,scriptId:e?.scriptId||s,diagnosisId:e?.diagnosisId||(0,x.Z)(),name:e?.name||"",description:e?.description||"",key:e?.key||"",expression:e?.expression||"",expressionMeaning:e?.expressionMeaning||"",severityOrder:e?.severityOrder||null,symptoms:e?.symptoms||[],text1:e?.text1||"",text2:e?.text2||"",text3:e?.text3||"",image1:e?.image1||null,image2:e?.image2||null,image3:e?.image3||null}),[e,s]),h=(0,u.cI)({defaultValues:m()}),{formState:{dirtyFields:y},handleSubmit:v}=h,b=(0,i.useMemo)(()=>!!Object.keys(y).length,[y]),N=v(async e=>{try{l(!0);let s={...e,severityOrder:e.severityOrder?Number(e.severityOrder):null};if(!s.scriptId)throw Error("Diagnosis is missing script reference!");let a=(await p.Z.post("/api/diagnoses/save",{data:[s],broadcastAction:!0})).data;if(a.errors?.length)throw Error(a.errors.join(", "));t.refresh(),d({variant:"success",message:"Diagnosis draft was saved successfully!",onClose:()=>t.push(c)})}catch(e){d({variant:"error",message:"Failed to save draft: "+e.message})}finally{l(!1)}}),w=(0,i.useMemo)(()=>a||o,[a,o]);return{...h,formIsDirty:b,saving:a,scriptPageHref:c,disabled:w,save:N,getDefaultValues:m}}(e),{formIsDirty:v,saving:b,scriptPageHref:N,disabled:w,register:k,watch:C,setValue:D,save:F}=t,I=C("name"),$=C("key"),S=C("image1"),z=C("image2"),R=C("image3"),Z=(0,i.useCallback)(()=>{s.push(N)},[s,N]);return(0,a.jsxs)(a.Fragment,{children:[b&&a.jsx(m.a,{overlay:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-5 [&>*]:px-4",children:[(0,a.jsxs)("div",{children:[a.jsx(o._,{htmlFor:"name",error:!w&&!I,children:"Name *"}),a.jsx(n.I,{...k("name",{disabled:w,required:!0}),name:"name",noRing:!1,error:!w&&!I})]}),(0,a.jsxs)("div",{className:"flex gap-x-2",children:[(0,a.jsxs)("div",{children:[a.jsx(o._,{htmlFor:"severityOrder",children:"Severity order"}),a.jsx(n.I,{...k("severityOrder",{disabled:w}),name:"severityOrder",noRing:!1,type:"number"})]}),(0,a.jsxs)("div",{className:"flex-1",children:[a.jsx(o._,{htmlFor:"key",error:!w&&!$,children:"Key *"}),a.jsx(n.I,{...k("key",{disabled:w,required:!0}),name:"key",noRing:!1,error:!w&&!$})]})]}),(0,a.jsxs)("div",{children:[a.jsx(o._,{htmlFor:"description",children:"Description"}),a.jsx(n.I,{...k("description",{disabled:w}),name:"description",noRing:!1})]}),(0,a.jsxs)("div",{children:[a.jsx(o._,{htmlFor:"expression",children:"Diagnosis expression (e.g. $Temp > 37 or $Gestation < 20)"}),a.jsx(n.I,{...k("expression",{disabled:w}),name:"expression",noRing:!1})]}),(0,a.jsxs)("div",{children:[a.jsx(o._,{htmlFor:"expressionMeaning",children:"Diagnosis expression (e.g. Temperature greater than 37 or Gestation period less than 20 weeks)"}),a.jsx(n.I,{...k("expressionMeaning",{disabled:w}),name:"expressionMeaning",noRing:!1})]}),[["text1",S],["text2",z],["text3",R]].map(([e,s],t)=>{let r=`image${t+1}`;return a.jsx(i.Fragment,{children:(0,a.jsxs)("div",{className:"flex gap-x-4",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsxs)(o._,{htmlFor:`imageTextFields.${t}.text`,children:["Text ",t+1]}),a.jsx(d.g,{...k(e,{disabled:w}),name:`text${t}`,noRing:!1,rows:5})]}),a.jsx(y.M,{disabled:w,image:s,onChange:e=>D(r,e,{shouldDirty:!0})})]})},`imageTextFields.${t}`)})]}),(0,a.jsxs)("div",{className:"flex items-center justify-end gap-x-2 py-6 px-4",children:[a.jsx("span",{className:(0,h.cn)("text-danger text-xs",w&&"hidden"),children:"* Required"}),a.jsx("div",{className:"flex-1"}),a.jsx(l.z,{variant:"ghost",onClick:()=>Z(),children:"Cancel"}),a.jsx(l.z,{disabled:w,onClick:()=>F(),children:"Save Draft"})]}),a.jsx(c.Z,{className:"my-20"}),a.jsx("div",{children:a.jsx(M,{disabled:w,form:t})})]})}},42954:(e,s,t)=>{"use strict";t.d(s,{M:()=>C});var a=t(10326),i=t(17577),r=t(83855),l=t(47035),n=t(2165),d=t(15491),o=t(44099),c=t(90772),m=t(46670),h=t(47463),u=t(63685),x=t(39572),p=t(2025),g=t(77863),f=t(11870),j=t(96221);async function y(e){return new Promise((s,t)=>{let a=new Image;a.onload=function(){s({width:a.width,height:a.height})},a.onerror=function(e,s,a,i,r){t(r||Error("Failed to load image"))},a.src=e})}var v=t(46226);function b({width:e=0,height:s=0,containerWidth:t,...i}){let r=i.sizes||"100vw",l={width:"100%",height:"auto"};if(s&&e&&t){r=void 0;let a=function({imageWidth:e,imageHeight:s,containerWidth:t}){return e>t&&(s=t/e*s,e=t),{imageWidth:e,imageHeight:s}}({imageWidth:e,imageHeight:s,containerWidth:t});l.width=a.imageWidth,l.height=a.imageHeight}return a.jsx(v.default,{...i,width:e,height:s,sizes:r,style:{...l,...i.style}})}function N({type:e,children:s,inputProps:t,fileDetails:r,onUpload:l,...d}){let[o,{width:m}]=(0,n.Z)(),[v,N]=(0,i.useState)(!1),[w,k]=(0,i.useState)([]),[C,D]=(0,i.useState)(!1),{alert:F}=(0,j.s)(),I=(0,i.useCallback)(async()=>{let e=t?.multiple?w:[w[0]];try{for(let{file:s,metadata:t,fileId:a}of(D(!0),e)){let e=new FormData;e.append("file",s),e.append("fileId",a||(0,h.Z)()),e.append("filename",s.name),e.append("contentType",s.type),e.append("size",`${s.size}`),e.append("metadata",JSON.stringify({...t})),r&&Object.keys(r).forEach(s=>{let t=r[s];e.append(s,JSON.stringify(t))}),await l(e)}N(!1),k([]),F({title:"Success",message:`File${e.length>1?"s":""} uploaded successfully!`,variant:"success"})}catch(s){F({title:"Error",message:`Failed to upload file${e.length>1?"s":""}: ${s.message}`,variant:"error"})}finally{D(!1)}},[l,F,w,t?.multiple,r]),$=(0,i.useCallback)(async e=>{try{let s=[];if(e.target.files?.length)for(let t=0;t<e.target.files.length;t++)s.push(e.target.files[t]);let t=[];for(let e of s){let s,a;let i=URL.createObjectURL(e),r={};if(`${e.type}`.includes("image"))try{let e=await y(i);r={...r,...e},s=i}catch(e){}t.push({fileId:(0,h.Z)(),file:e,url:i,imageURL:s,videoURL:a,metadata:r})}k(t)}catch(e){F({title:"Error",message:e.message})}},[F]);return(0,a.jsxs)(a.Fragment,{children:[C&&a.jsx(f.a,{overlay:!0}),a.jsx(p.u,{open:v,onOpenChange:e=>{N(e),k([])},title:"Upload file",trigger:s,...d,actions:(0,a.jsxs)(a.Fragment,{children:[!w.length&&a.jsx("div",{className:"flex-1"}),a.jsx(c.z,{variant:"ghost",onClick:()=>N(!1),children:"Cancel"}),!!w.length&&(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"flex-1"}),a.jsx(c.z,{variant:"destructive",onClick:()=>k([]),children:"Clear"}),(0,a.jsxs)(c.z,{disabled:!w.length,onClick:()=>I(),className:(0,g.cn)(!w.length&&"hidden"),children:[a.jsx(u.Z,{className:"h-4 w-4 mr-2"}),a.jsx("span",{children:"Upload"})]})]})]}),children:(0,a.jsxs)("div",{ref:o,children:[1===w.length&&w.map(e=>{let s=a.jsx(x.Z,{className:"w-20 h-20 text-muted-foreground"});return e.imageURL&&(s=a.jsx(b,{alt:"",width:e.metadata.width||0,height:e.metadata.height||0,containerWidth:m,src:e.imageURL||"/images/placeholder.png"})),(0,a.jsxs)("div",{className:(0,g.cn)(`
                                        flex
                                        flex-col
                                        gap-y-2
                                        w-full
                                        items-center
                                        justify-center
                                        text-xs
                                    `,!(e.imageURL||e.videoURL)&&""),children:[s,a.jsx("span",{children:e.file.name})]},e.fileId)}),!w.length&&(0,a.jsxs)("div",{className:(0,g.cn)(`
                                    relative
                                    w-full
                                    h-36
                                    bg-primary/20
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    text-primary
                                    uppercase
                                    font-bold
                                    rounded-md
                                    transition-colors
                                    hover:bg-primary/30
                                `,!!w.length&&"hidden"),children:[a.jsx("div",{children:t?.placeholder||"Choose file"}),a.jsx("input",{...t,type:"file",accept:e,value:"",className:(0,g.cn)(`
                                        absolute
                                        left-0
                                        top-0
                                        w-full
                                        h-full
                                        opacity-0
                                    `),onChange:$})]})]})})]})}var w=t(62288),k=t(82617);function C({image:e,disabled:s,onChange:t}){let[h,{width:u}]=(0,n.Z)(),{confirm:x}=(0,m.t)(),{uploadFile:p}=(0,k.h)(),g=(0,i.useCallback)(async e=>{let{file:s,errors:a}=(await o.Z.post("/api/files/upload",e)).data;if(a?.length)throw Error(a.join(", "));if(s){let e=d.Z.stringify({...s.metadata});e=e?`?${e}`:"",t({data:[process.env.NEXT_PUBLIC_APP_URL,`/files/${s.fileId}${e}`].join(""),fileId:s.fileId,filename:s.filename,size:s.size,contentType:s.contentType})}},[p,t]),f=`${e?.data||""}`.split("?").filter((e,s)=>s).join(""),{width:j,height:y}=d.Z.parse(f);return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{ref:h,className:"flex flex-col gap-y-2 min-w-60 max-w-60",children:[a.jsx("div",{className:"w-full flex flex-col items-center justify-center min-h-28",children:a.jsx(b,{alt:"",width:Number(j||"0"),height:Number(y||"0"),containerWidth:u,src:e?.data||"/images/placeholder.png"})}),(0,a.jsxs)("div",{className:"flex items-center justify-center gap-x-4",children:[a.jsx(N,{type:"image/*",onUpload:g,children:a.jsx(w.hg,{asChild:!0,children:a.jsx(c.z,{size:"icon",className:"w-8 h-8 rounded-full",disabled:s,children:a.jsx(r.Z,{className:"h-4 w-4"})})})}),!!e&&a.jsx(c.z,{variant:"destructive",size:"icon",className:"w-8 h-8 rounded-full",disabled:s,onClick:()=>x(()=>t(null),{title:"Delete image",message:"Are you sure you want to delete this image?",danger:!0}),children:a.jsx(l.Z,{className:"h-4 w-4"})})]})]})})}},69486:(e,s,t)=>{"use strict";t.d(s,{D:()=>r});var a=t(10326),i=t(77863);function r({children:e,className:s}){return a.jsx("div",{className:(0,i.cn)("pb-1 border-b border-b-primary",s),children:a.jsx("span",{className:"uppercase text-primary text-sm",children:e})})}},96948:(e,s,t)=>{"use strict";t.d(s,{Alert:()=>r});var a=t(96221),i=t(35047);function r(e){(0,i.useRouter)();let{alert:s}=(0,a.s)();return null}t(17577)},88846:(e,s,t)=>{"use strict";t.d(s,{E:()=>d,m:()=>o});var a=t(10326),i=t(17577),r=t(18623),l=t(53982),n=t(77863);let d=i.forwardRef(({className:e,...s},t)=>a.jsx(r.fC,{className:(0,n.cn)("grid gap-2",e),...s,ref:t}));d.displayName=r.fC.displayName;let o=i.forwardRef(({className:e,...s},t)=>a.jsx(r.ck,{ref:t,className:(0,n.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...s,children:a.jsx(r.z$,{className:"flex items-center justify-center",children:a.jsx(l.Z,{className:"h-2.5 w-2.5 fill-current text-current"})})}));o.displayName=r.ck.displayName},8281:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var a=t(10326),i=t(17577),r=t(90220),l=t(77863);let n=i.forwardRef(({className:e,orientation:s="horizontal",decorative:t=!0,...i},n)=>a.jsx(r.f,{ref:n,decorative:t,orientation:s,className:(0,l.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",e),...i}));n.displayName=r.f.displayName},87673:(e,s,t)=>{"use strict";t.d(s,{g:()=>l});var a=t(10326),i=t(17577),r=t(77863);let l=i.forwardRef(({className:e,noRing:s,...t},i)=>a.jsx("textarea",{className:(0,r.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s&&"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",e),ref:i,...t}));l.displayName="Textarea"},58464:(e,s,t)=>{"use strict";t.d(s,{Tf:()=>i,m1:()=>a,ph:()=>r});let a=[{label:"Admission",value:"admission"},{label:"Discharge",value:"discharge"},{label:"Neolab",value:"neolab"}],i=[{value:"checklist",label:"Checklist"},{value:"form",label:"Form"},{value:"management",label:"Management"},{value:"multi_select",label:"Multiple choice list"},{value:"single_select",label:"Single choice list"},{value:"progress",label:"Progress"},{value:"timer",label:"Timer"},{value:"yesno",label:"Yes/No"},{value:"zw_edliz_summary_table",label:"EDLIZ summary table (ZW)"},{value:"mwi_edliz_summary_table",label:"EDLIZ summary table (MWI)"},{value:"diagnosis",label:"Diagnosis"}],r=[{value:"risk",label:"Risk factor"},{value:"sign",label:"Sign/Symptom"}]},61892:(e,s,t)=>{"use strict";function a(e){return null==e||""===e}t.d(s,{x:()=>a})},89503:(e,s,t)=>{"use strict";t.d(s,{A:()=>n});var a=t(68570);let i=(0,a.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/components/diagnoses/form.tsx`),{__esModule:r,$$typeof:l}=i;i.default;let n=(0,a.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/app/(dashboard)/(scripts)/components/diagnoses/form.tsx#DiagnosisForm`)},41236:(e,s,t)=>{"use strict";t.d(s,{_:()=>d});var a=t(19510),i=t(57371),r=t(39755),l=t(24569),n=t(46697);function d({title:e,backLink:s,children:t}){return a.jsx("div",{className:"pb-20",children:a.jsx(l.V,{className:"flex flex-col gap-y-4",children:a.jsx(n.Zb,{children:(0,a.jsxs)(n.aY,{className:"p-0",children:[!!e&&(0,a.jsxs)("div",{className:"text-xl flex items-center gap-x-4 mb-4 p-4",children:[!!s&&a.jsx(i.default,{href:s,children:a.jsx(r.Z,{className:"h-5 w-5"})}),a.jsx("span",{children:e})]}),t]})})})})}},49246:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var a=t(19510),i=t(62553);function r(){return a.jsx(i.a,{overlay:!0})}},57890:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var a=t(19510),i=t(62553);function r(){return a.jsx(i.a,{overlay:!0})}},86098:(e,s,t)=>{"use strict";t.d(s,{b:()=>n});var a=t(68570);let i=(0,a.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/components/alert.tsx`),{__esModule:r,$$typeof:l}=i;i.default;let n=(0,a.createProxy)(String.raw`/Users/lafarai/Werq/BWS/NeoTree/neotree-webeditor/components/alert.tsx#Alert`)},34478:(e,s,t)=>{"use strict";t.d(s,{f:()=>n});var a=t(17577),i=t(45226),r=t(10326),l=a.forwardRef((e,s)=>(0,r.jsx)(i.WV.label,{...e,ref:s,onMouseDown:s=>{s.target.closest("button, input, select, textarea")||(e.onMouseDown?.(s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));l.displayName="Label";var n=l}};
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1368],{83898:function(e,s,n){Promise.resolve().then(n.bind(n,45427)),Promise.resolve().then(n.bind(n,95229)),Promise.resolve().then(n.bind(n,25704)),Promise.resolve().then(n.t.bind(n,231,23))},45427:function(e,s,n){"use strict";n.d(s,{DiagnosisForm:function(){return q}});var i=n(57437),t=n(2265),r=n(16463),l=n(50495),a=n(83102),o=n(93146),d=n(67135),c=n(64344),m=n(39661),x=n(37440),h=n(87861),u=n(39343),p=n(20920),j=n(38472),v=n(15701),g=n(53699),y=n(17647),f=n(83146),b=n(29439),k=n(12599),N=n(92513),w=n(45188),D=n(6649),C=n(90399),F=n(75944),I=n(90837),_=n(46910),M=n(76230),S=n(17501);function R(e){let{disabled:s,selected:n,onDelete:t,onCopy:r}=e;return(0,i.jsx)(i.Fragment,{children:!!n.length&&(0,i.jsx)(S.h,{children:(0,i.jsxs)(l.z,{variant:"destructive",className:"h-auto w-auto",disabled:s,onClick:()=>t(),children:[(0,i.jsx)(C.Z,{className:"h-4 w-4 mr-1"}),(0,i.jsx)("span",{children:n.length>1?"Delete ".concat(n.length," symptoms"):"Delete symptom"})]})})})}var V=n(9704),z=n(85070),Z=n(86466),O=n(21453),T=n(84760);function E(e){let{children:s,symptom:n,form:r,disabled:o,...c}=e,{data:m,index:h}={...n},[j,v]=(0,t.useState)(!1),g=(0,t.useCallback)(()=>({symptomId:(null==m?void 0:m.symptomId)||(0,p.Z)(),expression:(null==m?void 0:m.expression)||"",name:(null==m?void 0:m.name)||"",weight:(null==m?void 0:m.weight)||null,type:(null==m?void 0:m.type)||f.ph[0].value,position:(null==m?void 0:m.position)||1,printable:(null==m?void 0:m.printable)||!0,...m}),[m]),{reset:y,watch:b,register:k,handleSubmit:N,setValue:w}=(0,u.cI)({defaultValues:g()}),D=b("type"),C=b("name"),F=b("printable"),_=(0,t.useMemo)(()=>!!o,[o]),M=N(e=>{!(0,O.x)(h)&&m?r.setValue("symptoms",r.getValues("symptoms").map((s,n)=>({...s,...n===h?e:null}))):r.setValue("symptoms",[...r.getValues("symptoms"),e],{shouldDirty:!0}),v(!1)});return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(V.u,{open:j,title:m?"Add symptom":"Edit symptom",trigger:"function"==typeof s?s({extraProps:c}):s,onOpenChange:e=>{v(e),y(g())},actions:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:(0,x.cn)("text-danger text-xs",_&&"hidden"),children:"* Required"}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsx)(I.GG,{asChild:!0,children:(0,i.jsx)(l.z,{variant:"ghost",children:"Cancel"})}),(0,i.jsx)(l.z,{disabled:_,onClick:()=>M(),children:"Save"})]}),children:(0,i.jsxs)("div",{className:"flex flex-col gap-y-5",children:[(0,i.jsx)(T.D,{children:"Type"}),(0,i.jsx)("div",{children:(0,i.jsx)(z.E,{disabled:_,defaultValue:D,onValueChange:e=>w("type",e,{shouldDirty:!0}),className:"flex flex-col gap-y-4",children:f.ph.map(e=>(0,i.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,i.jsx)(z.m,{value:e.value,id:e.value}),(0,i.jsx)(d._,{secondary:!0,htmlFor:e.value,children:e.label})]},e.value))})}),(0,i.jsx)(T.D,{children:"Properties"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(d._,{error:!_&&!C,htmlFor:"name",children:"Name *"}),(0,i.jsx)(a.I,{...k("name",{disabled:_,required:!0}),name:"name",error:!_&&!C})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(d._,{htmlFor:"weight",children:"Weight "}),(0,i.jsx)(a.I,{...k("weight",{disabled:_}),name:"weight",type:"number"}),(0,i.jsxs)("span",{className:"text-xs text-muted-foreground",children:["Must be in the range: 0.0 - 1.0 (",(0,i.jsx)("b",{children:"default 1.0"}),")"]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(d._,{htmlFor:"expression",children:"Sign/Risk expression "}),(0,i.jsx)(a.I,{...k("expression",{disabled:_}),name:"expression"}),(0,i.jsxs)("span",{className:"text-xs text-muted-foreground",children:["Example: ",(0,i.jsx)("b",{children:"($key = true and $key2 = false) or $key3 = 'HD'"})]})]}),(0,i.jsx)(T.D,{children:"Print"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"flex-1 flex items-center space-x-2",children:[(0,i.jsx)(Z.X,{id:"printable",disabled:_,checked:F,onCheckedChange:()=>w("printable",!F,{shouldDirty:!0})}),(0,i.jsx)(d._,{htmlFor:"printable",children:"Print"})]}),(0,i.jsx)("span",{className:"text-muted-foreground text-xs",children:"If not checked, data will not be display on the session summary and the printout."})]})]})})})}function P(e){let{form:s,disabled:n}=e,[r,a]=(0,t.useState)([]),{confirm:o}=(0,M.t)(),d=s.watch("symptoms"),c=(0,t.useCallback)((e,n)=>{let i=(0,k.q)([...d],e,n);s.setValue("symptoms",i.map((e,s)=>({...e,position:s+1})),{shouldDirty:!0})},[s,d]),m=(0,t.useCallback)(e=>{let n=d.filter((s,n)=>e.includes(n)).map(e=>'<div class="font-bold text-danger">'.concat(e.name,"</div>")).join("");o(()=>{let n=d.filter((s,n)=>!e.includes(n));s.setValue("symptoms",n.map((e,s)=>({...e,position:s+1})),{shouldDirty:!0}),a([])},{title:"Delete",message:"<p>Are you sure you want to delete ".concat(e.length>1?"".concat(e.length," symptoms: "):"symptom: ","</p> ").concat(n),danger:!0,positiveLabel:"Delete"})},[s,d,o]),h=(0,t.useCallback)(e=>{let n=d.filter((s,n)=>e.includes(n)).map(e=>'<div class="font-bold">'.concat(e.name,"</div>")).join("");o(()=>{let n=[...d,...d.filter((s,n)=>e.includes(n)).map((e,s)=>({...e,position:d.length+1+s}))];s.setValue("symptoms",n.map((e,s)=>({...e,position:s+1})),{shouldDirty:!0}),a([])},{title:"Duplicate",message:"<p>Are you sure you want to duplicate ".concat(e.length>1?"".concat(e.length," symptoms: "):"symptom: ","</p> ").concat(n),positiveLabel:"Duplicate"})},[s,d,o]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F.DataTable,{title:"Symptoms",sortable:!n,selectable:!n,onSort:c,selectedIndexes:r,onSelect:a,search:{inputPlaceholder:"Search symptoms"},headerActions:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(E,{form:s,disabled:n,children:!n&&(0,i.jsx)(I.hg,{asChild:!0,children:(0,i.jsxs)(l.z,{className:"text-primary border-primary",variant:"outline",children:[(0,i.jsx)(N.Z,{className:"h-4 w-4 mr-1"}),"New symptom"]})})})}),columns:[{name:"Type"},{name:"Name"},{name:"Action",align:"right",cellRenderer(e){let{rowIndex:t}=e,r=d[t];return(0,i.jsxs)(_.h_,{children:[(0,i.jsx)(_.$F,{asChild:!0,children:(0,i.jsx)(l.z,{variant:"ghost",size:"icon",className:"p-0 h-auto w-auto transition-colors rounded-full hover:text-primary hover:bg-transparent",children:(0,i.jsx)(w.Z,{className:"h-4 w-4"})})}),(0,i.jsxs)(_.AW,{children:[(0,i.jsx)(_.Xi,{asChild:!0,children:(0,i.jsx)(E,{disabled:n,form:s,symptom:{data:r,index:t},children:e=>{let{extraProps:s}=e;return(0,i.jsxs)(I.hg,{...s,className:(0,x.cn)(null==s?void 0:s.className,"w-full"),children:[(0,i.jsx)(D.Z,{className:"w-4 h-4 mr-2"}),(0,i.jsx)("span",{children:n?"View":"Edit"})]})}})}),(0,i.jsxs)(_.Xi,{onClick:()=>m([t]),className:(0,x.cn)("text-danger focus:bg-danger focus:text-danger-foreground"),disabled:n,children:[(0,i.jsx)(C.Z,{className:"mr-2 h-4 w-4"}),(0,i.jsx)("span",{children:"Delete"})]})]})]})}}],data:d.map(e=>[e.type,e.name,""])}),!n&&(0,i.jsx)(R,{disabled:n,selected:r,onDelete:()=>m(r),onCopy:()=>h(r)})]})}function q(e){let s=(0,r.useRouter)(),n=function(e){let{formData:s,scriptId:n}=e,i=(0,r.useRouter)(),[l,a]=(0,t.useState)(!1),{saveDiagnoses:o}=(0,v.h)(),{alert:d}=(0,g.s)(),{viewOnly:c}=(0,y.b)(),m=(0,t.useMemo)(()=>"/script/".concat(n,"?section=diagnoses"),[n]),x=(0,t.useCallback)(()=>({version:(null==s?void 0:s.version)||1,scriptId:(null==s?void 0:s.scriptId)||n,diagnosisId:(null==s?void 0:s.diagnosisId)||(0,p.Z)(),name:(null==s?void 0:s.name)||"",description:(null==s?void 0:s.description)||"",key:(null==s?void 0:s.key)||"",expression:(null==s?void 0:s.expression)||"",expressionMeaning:(null==s?void 0:s.expressionMeaning)||"",severityOrder:(null==s?void 0:s.severityOrder)||null,symptoms:(null==s?void 0:s.symptoms)||[],text1:(null==s?void 0:s.text1)||"",text2:(null==s?void 0:s.text2)||"",text3:(null==s?void 0:s.text3)||"",image1:(null==s?void 0:s.image1)||null,image2:(null==s?void 0:s.image2)||null,image3:(null==s?void 0:s.image3)||null,preferences:(null==s?void 0:s.preferences)||f.$7}),[s,n]),h=(0,u.cI)({defaultValues:x()}),{formState:{dirtyFields:b},handleSubmit:k}=h,N=(0,t.useMemo)(()=>!!Object.keys(b).length,[b]),w=k(async e=>{try{var s;a(!0);let n={...e,severityOrder:e.severityOrder?Number(e.severityOrder):null};if(!n.scriptId)throw Error("Diagnosis is missing script reference!");let t=(await j.Z.post("/api/diagnoses/save",{data:[n],broadcastAction:!0})).data;if(null===(s=t.errors)||void 0===s?void 0:s.length)throw Error(t.errors.join(", "));i.refresh(),d({variant:"success",message:"Diagnosis draft was saved successfully!",onClose:()=>i.push(m)})}catch(e){d({variant:"error",message:"Failed to save draft: "+e.message})}finally{a(!1)}}),D=(0,t.useMemo)(()=>l||c,[l,c]);return{...h,formIsDirty:N,saving:l,scriptPageHref:m,disabled:D,save:w,getDefaultValues:x}}(e),{formIsDirty:k,saving:N,scriptPageHref:w,disabled:D,register:C,watch:F,setValue:I,save:_}=n,M=F("name"),S=F("key"),R=F("image1"),V=F("image2"),z=F("image3"),Z=F("preferences"),O=(0,t.useCallback)(()=>{s.push(w)},[s,w]);return(0,i.jsxs)(i.Fragment,{children:[N&&(0,i.jsx)(m.a,{overlay:!0}),(0,i.jsxs)("div",{className:"flex flex-col gap-y-5 [&>*]:px-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(d._,{htmlFor:"name",error:!D&&!M,children:"Name *"}),(0,i.jsx)(a.I,{...C("name",{disabled:D,required:!0}),name:"name",noRing:!1,error:!D&&!M})]}),(0,i.jsxs)("div",{className:"flex gap-x-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(d._,{htmlFor:"severityOrder",children:"Severity order"}),(0,i.jsx)(a.I,{...C("severityOrder",{disabled:D}),name:"severityOrder",noRing:!1,type:"number"})]}),(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsx)(d._,{htmlFor:"key",error:!D&&!S,children:"Key *"}),(0,i.jsx)(a.I,{...C("key",{disabled:D,required:!0}),name:"key",noRing:!1,error:!D&&!S})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(d._,{htmlFor:"description",children:"Description"}),(0,i.jsx)(a.I,{...C("description",{disabled:D}),name:"description",noRing:!1}),(0,i.jsx)(h.w,{id:"description",title:"Description",disabled:D,data:Z,onSave:e=>I("preferences",e,{shouldDirty:!0})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(d._,{htmlFor:"expression",children:"Diagnosis expression (e.g. $Temp > 37 or $Gestation < 20)"}),(0,i.jsx)(a.I,{...C("expression",{disabled:D}),name:"expression",noRing:!1})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(d._,{htmlFor:"expressionMeaning",children:"Diagnosis expression (e.g. Temperature greater than 37 or Gestation period less than 20 weeks)"}),(0,i.jsx)(a.I,{...C("expressionMeaning",{disabled:D}),name:"expressionMeaning",noRing:!1})]}),[["text1",R],["text2",V],["text3",z]].map((e,s)=>{let[n,r]=e,l="image".concat(s+1);return(0,i.jsx)(t.Fragment,{children:(0,i.jsxs)("div",{className:"flex gap-x-4",children:[(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsxs)(d._,{htmlFor:"imageTextFields.".concat(s,".text"),children:["Text ",s+1]}),(0,i.jsx)(o.g,{...C(n,{disabled:D}),name:"text".concat(s+1),noRing:!1,rows:5}),(0,i.jsx)(h.w,{id:n,title:"Text ".concat(s+1),disabled:D,data:Z,onSave:e=>I("preferences",e,{shouldDirty:!0})})]}),(0,i.jsx)(b.M,{disabled:D,image:r,onChange:e=>I(l,e,{shouldDirty:!0})})]})},"imageTextFields.".concat(s))})]}),(0,i.jsxs)("div",{className:"flex items-center justify-end gap-x-2 py-6 px-4",children:[(0,i.jsx)("span",{className:(0,x.cn)("text-danger text-xs",D&&"hidden"),children:"* Required"}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsx)(l.z,{variant:"ghost",onClick:()=>O(),children:"Cancel"}),(0,i.jsx)(l.z,{disabled:D,onClick:()=>_(),children:"Save Draft"})]}),(0,i.jsx)(c.Z,{className:"my-20"}),(0,i.jsx)("div",{children:(0,i.jsx)(P,{disabled:D,form:n})})]})}},89627:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,n(78030).Z)("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]])},48484:function(e,s,n){"use strict";n.d(s,{f:function(){return d}});var i=n(2265),t=n(25171),r=n(57437),l="horizontal",a=["horizontal","vertical"],o=i.forwardRef((e,s)=>{let{decorative:n,orientation:i=l,...o}=e,d=a.includes(i)?i:l;return(0,r.jsx)(t.WV.div,{"data-orientation":d,...n?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},...o,ref:s})});o.displayName="Separator";var d=o}}]);
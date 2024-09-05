(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6755],{28430:function(e,s,n){Promise.resolve().then(n.bind(n,45427)),Promise.resolve().then(n.bind(n,95229)),Promise.resolve().then(n.bind(n,25704)),Promise.resolve().then(n.t.bind(n,231,23))},45427:function(e,s,n){"use strict";n.d(s,{DiagnosisForm:function(){return T}});var t=n(57437),i=n(2265),l=n(16463),a=n(50495),r=n(83102),o=n(93146),d=n(67135),c=n(64344),m=n(39661),x=n(37440),h=n(39343),u=n(20920),p=n(38472),j=n(15701),g=n(53699),v=n(17647),y=n(87973),f=n(12599),b=n(92513),k=n(45188),N=n(6649),w=n(90399),D=n(75944),C=n(90837),F=n(46910),I=n(76230),M=n(17501);function _(e){let{disabled:s,selected:n,onDelete:i,onCopy:l}=e;return(0,t.jsx)(t.Fragment,{children:!!n.length&&(0,t.jsx)(M.h,{children:(0,t.jsxs)(a.z,{variant:"destructive",className:"h-auto w-auto",disabled:s,onClick:()=>i(),children:[(0,t.jsx)(w.Z,{className:"h-4 w-4 mr-1"}),(0,t.jsx)("span",{children:n.length>1?"Delete ".concat(n.length," symptoms"):"Delete symptom"})]})})})}var R=n(9704),V=n(85070),S=n(86466),Z=n(21453),O=n(83146),z=n(84760);function P(e){let{children:s,symptom:n,form:l,disabled:o,...c}=e,{data:m,index:p}={...n},[j,g]=(0,i.useState)(!1),v=(0,i.useCallback)(()=>({symptomId:(null==m?void 0:m.symptomId)||(0,u.Z)(),expression:(null==m?void 0:m.expression)||"",name:(null==m?void 0:m.name)||"",weight:(null==m?void 0:m.weight)||null,type:(null==m?void 0:m.type)||O.ph[0].value,position:(null==m?void 0:m.position)||1,printable:(null==m?void 0:m.printable)||!0,...m}),[m]),{reset:y,watch:f,register:b,handleSubmit:k,setValue:N}=(0,h.cI)({defaultValues:v()}),w=f("type"),D=f("name"),F=f("printable"),I=(0,i.useMemo)(()=>!!o,[o]),M=k(e=>{!(0,Z.x)(p)&&m?l.setValue("symptoms",l.getValues("symptoms").map((s,n)=>({...s,...n===p?e:null}))):l.setValue("symptoms",[...l.getValues("symptoms"),e],{shouldDirty:!0}),g(!1)});return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(R.u,{open:j,title:m?"Add symptom":"Edit symptom",trigger:"function"==typeof s?s({extraProps:c}):s,onOpenChange:e=>{g(e),y(v())},actions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:(0,x.cn)("text-danger text-xs",I&&"hidden"),children:"* Required"}),(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)(C.GG,{asChild:!0,children:(0,t.jsx)(a.z,{variant:"ghost",children:"Cancel"})}),(0,t.jsx)(a.z,{disabled:I,onClick:()=>M(),children:"Save"})]}),children:(0,t.jsxs)("div",{className:"flex flex-col gap-y-5",children:[(0,t.jsx)(z.D,{children:"Type"}),(0,t.jsx)("div",{children:(0,t.jsx)(V.E,{disabled:I,defaultValue:w,onValueChange:e=>N("type",e,{shouldDirty:!0}),className:"flex flex-col gap-y-4",children:O.ph.map(e=>(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(V.m,{value:e.value,id:e.value}),(0,t.jsx)(d._,{secondary:!0,htmlFor:e.value,children:e.label})]},e.value))})}),(0,t.jsx)(z.D,{children:"Properties"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(d._,{error:!I&&!D,htmlFor:"name",children:"Name *"}),(0,t.jsx)(r.I,{...b("name",{disabled:I,required:!0}),name:"name",error:!I&&!D})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(d._,{htmlFor:"weight",children:"Weight "}),(0,t.jsx)(r.I,{...b("weight",{disabled:I}),name:"label",type:"number"}),(0,t.jsxs)("span",{className:"text-xs text-muted-foreground",children:["Must be in the range: 0.0 - 1.0 (",(0,t.jsx)("b",{children:"default 1.0"}),")"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(d._,{htmlFor:"expression",children:"Sign/Risk expression "}),(0,t.jsx)(r.I,{...b("expression",{disabled:I}),name:"label"}),(0,t.jsxs)("span",{className:"text-xs text-muted-foreground",children:["Example: ",(0,t.jsx)("b",{children:"($key = true and $key2 = false) or $key3 = 'HD'"})]})]}),(0,t.jsx)(z.D,{children:"Print"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex-1 flex items-center space-x-2",children:[(0,t.jsx)(S.X,{id:"printable",disabled:I,checked:F,onCheckedChange:()=>N("printable",!F,{shouldDirty:!0})}),(0,t.jsx)(d._,{htmlFor:"printable",children:"Print"})]}),(0,t.jsx)("span",{className:"text-muted-foreground text-xs",children:"If not checked, data will not be display on the session summary and the printout."})]})]})})})}function E(e){let{form:s,disabled:n}=e,[l,r]=(0,i.useState)([]),{confirm:o}=(0,I.t)(),d=s.watch("symptoms"),c=(0,i.useCallback)((e,n)=>{let t=(0,f.q)([...d],e,n);s.setValue("symptoms",t.map((e,s)=>({...e,position:s+1})),{shouldDirty:!0})},[s,d]),m=(0,i.useCallback)(e=>{let n=d.filter((s,n)=>e.includes(n)).map(e=>'<div class="font-bold text-danger">'.concat(e.name,"</div>")).join("");o(()=>{let n=d.filter((s,n)=>!e.includes(n));s.setValue("symptoms",n.map((e,s)=>({...e,position:s+1})),{shouldDirty:!0}),r([])},{title:"Delete",message:"<p>Are you sure you want to delete ".concat(e.length>1?"".concat(e.length," symptoms: "):"symptom: ","</p> ").concat(n),danger:!0,positiveLabel:"Delete"})},[s,d,o]),h=(0,i.useCallback)(e=>{let n=d.filter((s,n)=>e.includes(n)).map(e=>'<div class="font-bold">'.concat(e.name,"</div>")).join("");o(()=>{let n=[...d,...d.filter((s,n)=>e.includes(n)).map((e,s)=>({...e,position:d.length+1+s}))];s.setValue("symptoms",n.map((e,s)=>({...e,position:s+1})),{shouldDirty:!0}),r([])},{title:"Duplicate",message:"<p>Are you sure you want to duplicate ".concat(e.length>1?"".concat(e.length," symptoms: "):"symptom: ","</p> ").concat(n),positiveLabel:"Duplicate"})},[s,d,o]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D.DataTable,{title:"Symptoms",sortable:!n,selectable:!n,onSort:c,selectedIndexes:l,onSelect:r,search:{inputPlaceholder:"Search symptoms"},headerActions:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(P,{form:s,disabled:n,children:!n&&(0,t.jsx)(C.hg,{asChild:!0,children:(0,t.jsxs)(a.z,{className:"text-primary border-primary",variant:"outline",children:[(0,t.jsx)(b.Z,{className:"h-4 w-4 mr-1"}),"New symptom"]})})})}),columns:[{name:"Type"},{name:"Name"},{name:"Action",align:"right",cellRenderer(e){let{rowIndex:i}=e,l=d[i];return(0,t.jsxs)(F.h_,{children:[(0,t.jsx)(F.$F,{asChild:!0,children:(0,t.jsx)(a.z,{variant:"ghost",size:"icon",className:"p-0 h-auto w-auto transition-colors rounded-full hover:text-primary hover:bg-transparent",children:(0,t.jsx)(k.Z,{className:"h-4 w-4"})})}),(0,t.jsxs)(F.AW,{children:[(0,t.jsx)(F.Xi,{asChild:!0,children:(0,t.jsx)(P,{disabled:n,form:s,symptom:{data:l,index:i},children:e=>{let{extraProps:s}=e;return(0,t.jsxs)(C.hg,{...s,className:(0,x.cn)(null==s?void 0:s.className,"w-full"),children:[(0,t.jsx)(N.Z,{className:"w-4 h-4 mr-2"}),(0,t.jsx)("span",{children:n?"View":"Edit"})]})}})}),(0,t.jsxs)(F.Xi,{onClick:()=>m([i]),className:(0,x.cn)("text-danger focus:bg-danger focus:text-danger-foreground"),disabled:n,children:[(0,t.jsx)(w.Z,{className:"mr-2 h-4 w-4"}),(0,t.jsx)("span",{children:"Delete"})]})]})]})}}],data:d.map(e=>[e.type,e.name,""])}),!n&&(0,t.jsx)(_,{disabled:n,selected:l,onDelete:()=>m(l),onCopy:()=>h(l)})]})}function T(e){let s=(0,l.useRouter)(),n=function(e){let{formData:s,scriptId:n}=e,t=(0,l.useRouter)(),[a,r]=(0,i.useState)(!1),{saveDiagnoses:o}=(0,j.h)(),{alert:d}=(0,g.s)(),{viewOnly:c}=(0,v.b)(),m=(0,i.useMemo)(()=>"/script/".concat(n,"?section=diagnoses"),[n]),x=(0,i.useCallback)(()=>({version:(null==s?void 0:s.version)||1,scriptId:(null==s?void 0:s.scriptId)||n,diagnosisId:(null==s?void 0:s.diagnosisId)||(0,u.Z)(),name:(null==s?void 0:s.name)||"",description:(null==s?void 0:s.description)||"",key:(null==s?void 0:s.key)||"",expression:(null==s?void 0:s.expression)||"",expressionMeaning:(null==s?void 0:s.expressionMeaning)||"",severityOrder:(null==s?void 0:s.severityOrder)||null,symptoms:(null==s?void 0:s.symptoms)||[],text1:(null==s?void 0:s.text1)||"",text2:(null==s?void 0:s.text2)||"",text3:(null==s?void 0:s.text3)||"",image1:(null==s?void 0:s.image1)||null,image2:(null==s?void 0:s.image2)||null,image3:(null==s?void 0:s.image3)||null}),[s,n]),y=(0,h.cI)({defaultValues:x()}),{formState:{dirtyFields:f},handleSubmit:b}=y,k=(0,i.useMemo)(()=>!!Object.keys(f).length,[f]),N=b(async e=>{try{var s;r(!0);let n={...e,severityOrder:e.severityOrder?Number(e.severityOrder):null};if(!n.scriptId)throw Error("Diagnosis is missing script reference!");let i=(await p.Z.post("/api/diagnoses/save",{data:[n],broadcastAction:!0})).data;if(null===(s=i.errors)||void 0===s?void 0:s.length)throw Error(i.errors.join(", "));t.refresh(),d({variant:"success",message:"Diagnosis draft was saved successfully!",onClose:()=>t.push(m)})}catch(e){d({variant:"error",message:"Failed to save draft: "+e.message})}finally{r(!1)}}),w=(0,i.useMemo)(()=>a||c,[a,c]);return{...y,formIsDirty:k,saving:a,scriptPageHref:m,disabled:w,save:N,getDefaultValues:x}}(e),{formIsDirty:f,saving:b,scriptPageHref:k,disabled:N,register:w,watch:D,setValue:C,save:F}=n,I=D("name"),M=D("key"),_=D("image1"),R=D("image2"),V=D("image3"),S=(0,i.useCallback)(()=>{s.push(k)},[s,k]);return(0,t.jsxs)(t.Fragment,{children:[b&&(0,t.jsx)(m.a,{overlay:!0}),(0,t.jsxs)("div",{className:"flex flex-col gap-y-5 [&>*]:px-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(d._,{htmlFor:"name",error:!N&&!I,children:"Name *"}),(0,t.jsx)(r.I,{...w("name",{disabled:N,required:!0}),name:"name",noRing:!1,error:!N&&!I})]}),(0,t.jsxs)("div",{className:"flex gap-x-2",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(d._,{htmlFor:"severityOrder",children:"Severity order"}),(0,t.jsx)(r.I,{...w("severityOrder",{disabled:N}),name:"severityOrder",noRing:!1,type:"number"})]}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)(d._,{htmlFor:"key",error:!N&&!M,children:"Key *"}),(0,t.jsx)(r.I,{...w("key",{disabled:N,required:!0}),name:"key",noRing:!1,error:!N&&!M})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(d._,{htmlFor:"description",children:"Description"}),(0,t.jsx)(r.I,{...w("description",{disabled:N}),name:"description",noRing:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(d._,{htmlFor:"expression",children:"Diagnosis expression (e.g. $Temp > 37 or $Gestation < 20)"}),(0,t.jsx)(r.I,{...w("expression",{disabled:N}),name:"expression",noRing:!1})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(d._,{htmlFor:"expressionMeaning",children:"Diagnosis expression (e.g. Temperature greater than 37 or Gestation period less than 20 weeks)"}),(0,t.jsx)(r.I,{...w("expressionMeaning",{disabled:N}),name:"expressionMeaning",noRing:!1})]}),[["text1",_],["text2",R],["text3",V]].map((e,s)=>{let[n,l]=e,a="image".concat(s+1);return(0,t.jsx)(i.Fragment,{children:(0,t.jsxs)("div",{className:"flex gap-x-4",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsxs)(d._,{htmlFor:"imageTextFields.".concat(s,".text"),children:["Text ",s+1]}),(0,t.jsx)(o.g,{...w(n,{disabled:N}),name:"text".concat(s),noRing:!1,rows:5})]}),(0,t.jsx)(y.M,{disabled:N,image:l,onChange:e=>C(a,e,{shouldDirty:!0})})]})},"imageTextFields.".concat(s))})]}),(0,t.jsxs)("div",{className:"flex items-center justify-end gap-x-2 py-6 px-4",children:[(0,t.jsx)("span",{className:(0,x.cn)("text-danger text-xs",N&&"hidden"),children:"* Required"}),(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)(a.z,{variant:"ghost",onClick:()=>S(),children:"Cancel"}),(0,t.jsx)(a.z,{disabled:N,onClick:()=>F(),children:"Save Draft"})]}),(0,t.jsx)(c.Z,{className:"my-20"}),(0,t.jsx)("div",{children:(0,t.jsx)(E,{disabled:N,form:n})})]})}},89627:function(e,s,n){"use strict";n.d(s,{Z:function(){return t}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let t=(0,n(78030).Z)("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]])},38364:function(e,s,n){"use strict";n.d(s,{f:function(){return r}});var t=n(2265),i=n(25171),l=n(57437),a=t.forwardRef((e,s)=>(0,l.jsx)(i.WV.label,{...e,ref:s,onMouseDown:s=>{var n;s.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));a.displayName="Label";var r=a}}]);
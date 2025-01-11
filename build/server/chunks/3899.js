"use strict";exports.id=3899,exports.ids=[3899],exports.modules={69486:(e,l,a)=>{a.d(l,{D:()=>i});var s=a(10326),r=a(77863);function i({children:e,className:l}){return s.jsx("div",{className:(0,r.cn)("pb-1 border-b border-b-primary",l),children:s.jsx("span",{className:"uppercase text-primary text-sm",children:e})})}},99463:(e,l,a)=>{a.d(l,{w:()=>h});var s=a(10326),r=a(17577),i=a(74723),d=a(58464),t=a(7890),n=a(34474),o=a(31048),c=a(53313),u=a(90772),x=a(77863);function h({id:e,label:l,hide:a,title:h,description:f,data:m,disabled:b,onSave:v}){let g=(0,r.useMemo)(()=>{let l=!1;return Object.values(m).forEach(a=>{a[e]&&(l=!0)}),l},[m,e]),{reset:p,watch:j,setValue:y,handleSubmit:N}=(0,i.cI)({defaultValues:{...d.$7,...m}}),C=j("fontSize"),k=j("fontWeight"),w=j("fontStyle"),D=j("textColor"),S=N(v),[$,_]=(0,r.useState)(!1);return a?null:s.jsx(s.Fragment,{children:(0,s.jsxs)(t.yo,{onOpenChange:e=>{p({...d.$7,...m}),_(e)},children:[s.jsx(t.aM,{asChild:!0,children:s.jsx(u.z,{variant:"link",className:(0,x.cn)("p-0 text-xs",!g&&"text-muted-foreground/80 hover:text-muted-foreground"),children:l||`${g?"Update":"Set"} preferences`})}),(0,s.jsxs)(t.ue,{hideCloseButton:!0,className:"px-0 py-0 flex flex-col gap-y-4 h-full",children:[(0,s.jsxs)(t.Tu,{className:"px-4 py-4 border-b border-b-border",children:[s.jsx(t.bC,{children:h}),s.jsx(t.Ei,{className:f?"":"hidden",children:f})]}),s.jsx("div",{className:"flex-1 overflow-y-auto px-4 flex flex-col gap-y-6",children:$&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex gap-x-2 items-center",children:[s.jsx(o._,{secondary:!0,htmlFor:`fontSize.${e}`,children:"Font size"}),s.jsx("div",{children:(0,s.jsxs)(n.Ph,{value:C[e]||"default",required:!0,name:`fontSize.${e}`,disabled:b,onValueChange:l=>{let a=l||void 0;"default"===a&&(a=void 0),y(`fontSize.${e}`,a,{shouldDirty:!0})},children:[s.jsx(n.i4,{children:s.jsx(n.ki,{placeholder:"Default"})}),s.jsx(n.Bw,{children:s.jsx(n.DI,{children:[{label:"Default",value:"default"},{label:"Extra small",value:"xs"},{label:"Small",value:"sm"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"}].map(e=>s.jsx(n.Ql,{value:e.value,children:e.label},e.value))})})]})})]}),s.jsx("div",{children:(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[!!D[e]&&(0,s.jsxs)("div",{className:"flex gap-x-2 items-center",children:[s.jsx(o._,{secondary:!0,htmlFor:`textColor.${e}`,children:"Text color"}),s.jsx("input",{type:"color",value:D[e],onChange:l=>y(`textColor.${e}`,l.target.value,{shouldDirty:!0})})]}),(0,s.jsxs)("div",{className:"flex gap-x-2",children:[s.jsx(c.X,{id:`defaultTextColor.${e}`,name:`defaultTextColor.${e}`,disabled:b,checked:!D[e],onCheckedChange:()=>{let l=D[e]?void 0:"#000000";y(`textColor.${e}`,l,{shouldDirty:!0})}}),s.jsx(o._,{secondary:!0,htmlFor:`defaultTextColor.${e}`,children:"Default text color"})]})]})}),(0,s.jsxs)("div",{className:"flex gap-4 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex gap-x-2",children:[s.jsx(c.X,{name:"bold",id:"bold",disabled:b,checked:"bold"===k[e],onCheckedChange:()=>y(`fontWeight.${e}`,k[e]?void 0:"bold",{shouldDirty:!0})}),s.jsx(o._,{secondary:!0,htmlFor:"bold",children:"Bold"})]}),(0,s.jsxs)("div",{className:"flex gap-x-2",children:[s.jsx(c.X,{name:"italic",id:"italic",disabled:b,checked:(w[e]||[]).includes("italic"),onCheckedChange:()=>{let l=w[e]||[];l.includes("italic")?l=l.filter(e=>"italic"!==e):l.push("italic"),l.length||(l=void 0),y(`fontStyle.${e}`,l,{shouldDirty:!0})}}),s.jsx(o._,{secondary:!0,htmlFor:"italic",children:"Italic"})]})]})]})}),(0,s.jsxs)(t.FF,{className:"px-4 py-4 border-t border-t-border",children:[s.jsx("div",{className:"ml-auto"}),s.jsx(t.sw,{asChild:!0,children:s.jsx(u.z,{variant:"outline",children:"Cancel"})}),s.jsx(t.sw,{asChild:!0,children:s.jsx(u.z,{disabled:b,onClick:()=>S(),children:"Save"})})]})]})]})})}},88846:(e,l,a)=>{a.d(l,{E:()=>n,m:()=>o});var s=a(10326),r=a(17577),i=a(18623),d=a(53982),t=a(77863);let n=r.forwardRef(({className:e,...l},a)=>s.jsx(i.fC,{className:(0,t.cn)("grid gap-2",e),...l,ref:a}));n.displayName=i.fC.displayName;let o=r.forwardRef(({className:e,...l},a)=>s.jsx(i.ck,{ref:a,className:(0,t.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...l,children:s.jsx(i.z$,{className:"flex items-center justify-center",children:s.jsx(d.Z,{className:"h-2.5 w-2.5 fill-current text-current"})})}));o.displayName=i.ck.displayName},87673:(e,l,a)=>{a.d(l,{g:()=>d});var s=a(10326),r=a(17577),i=a(77863);let d=r.forwardRef(({className:e,noRing:l,...a},r)=>s.jsx("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",l&&"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",e),ref:r,...a}));d.displayName="Textarea"},58464:(e,l,a)=>{a.d(l,{$7:()=>s,Tf:()=>d,m1:()=>i,ph:()=>t,uh:()=>r});let s={fontSize:{},fontWeight:{},fontStyle:{},textColor:{},backgroundColor:{},highlight:{}},r=[{value:"screens",label:"Screens"},{value:"diagnoses",label:"Diagnoses"},{value:"print",label:"Print"},{value:"drugs-library",label:"Drugs library"}],i=[{label:"Admission",value:"admission"},{label:"Discharge",value:"discharge"},{label:"Neolab",value:"neolab"}],d=[{value:"checklist",label:"Checklist"},{value:"form",label:"Form"},{value:"management",label:"Management"},{value:"multi_select",label:"Multiple choice list"},{value:"single_select",label:"Single choice list"},{value:"progress",label:"Progress"},{value:"timer",label:"Timer"},{value:"yesno",label:"Yes/No"},{value:"drugs",label:"Drug, Fluid and Feeds"},{value:"zw_edliz_summary_table",label:"EDLIZ summary table (ZW)"},{value:"mwi_edliz_summary_table",label:"EDLIZ summary table (MWI)"},{value:"diagnosis",label:"Diagnosis"}],t=[{value:"risk",label:"Risk factor"},{value:"sign",label:"Sign/Symptom"}]},61892:(e,l,a)=>{a.d(l,{x:()=>s});function s(e){return null==e||""===e}},41236:(e,l,a)=>{a.d(l,{_:()=>n});var s=a(19510),r=a(57371),i=a(39755),d=a(24569),t=a(46697);function n({title:e,backLink:l,children:a}){return s.jsx("div",{className:"pb-20",children:s.jsx(d.V,{className:"flex flex-col gap-y-4",children:s.jsx(t.Zb,{children:(0,s.jsxs)(t.aY,{className:"p-0",children:[!!e&&(0,s.jsxs)("div",{className:"text-xl flex items-center gap-x-4 mb-4 p-4",children:[!!l&&s.jsx(r.default,{href:l,children:s.jsx(i.Z,{className:"h-5 w-5"})}),s.jsx("span",{children:e})]}),a]})})})})}}};
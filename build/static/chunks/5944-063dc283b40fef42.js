"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5944],{75944:function(e,a,t){t.d(a,{DataTable:function(){return V}});var r=t(57437),l=t(2265),s=t(83046),n=t(12599),o=t(92095),d=t(37440);let i=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:a,className:(0,d.cn)("w-full caption-bottom text-sm",t),...l})})});i.displayName="Table";let c=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)("thead",{ref:a,className:(0,d.cn)("[&_tr]:border-b",t),...l})});c.displayName="TableHeader";let u=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)("tbody",{ref:a,className:(0,d.cn)("[&_tr:last-child]:border-0",t),...l})});u.displayName="TableBody",l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)("tfoot",{ref:a,className:(0,d.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...l})}).displayName="TableFooter";let m=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)("tr",{ref:a,className:(0,d.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...l})});m.displayName="TableRow";let f=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)("th",{ref:a,className:(0,d.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...l})});f.displayName="TableHead";let p=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)("td",{ref:a,className:(0,d.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...l})});p.displayName="TableCell",l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)("caption",{ref:a,className:(0,d.cn)("mt-4 text-sm text-muted-foreground",t),...l})}).displayName="TableCaption";var x=t(50495),h=t(86466);function b(e){let{className:a,...t}=e;return(0,r.jsx)("div",{className:(0,d.cn)("animate-pulse rounded-md bg-muted",a),...t})}var g=t(44839),v=t(46910),N=t(63541),y=t(55066),j=t(47019),w=t(1282);let C=[{value:"asc",label:"Asc",Icon:N.Z},{value:"desc",label:"Desc",Icon:y.Z},{value:"hide",label:"Hide",divider:!0,Icon:j.Z}],k=e=>{let{column:a,value:t,onFilter:l}=e,s=C.filter(e=>e.value===t)[0],n=(null==s?void 0:s.Icon)||w.Z;return(0,r.jsxs)(v.h_,{children:[(0,r.jsx)(v.$F,{asChild:!0,children:(0,r.jsxs)(x.z,{variant:"ghost",size:"sm",className:" focus-visible:ring-0  focus-visible:ring-transparent  focus-visible:ring-offset-0 ",children:[(0,r.jsx)("span",{className:"mr-2",children:a.name}),(0,r.jsx)(n,{className:"w-4 h-4"})]})}),(0,r.jsx)(v.AW,{align:"end",children:C.filter(e=>"hide"!==e.value||!1!==a.canHide).map(e=>(0,r.jsxs)(v.Xi,{onClick:()=>l(e.value),className:(0,d.cn)(e.divider?"border-t":""),children:[(0,r.jsx)(e.Icon,{className:"w-4 h-4 mr-2"}),e.label]},e.value))})]})};var I=t(39343),R=t(27776),z=t(5192),Z=t(83102),S=t(19573),T=t(23733);function _(e){let{inputPlaceholder:a}=e;(0,l.useRef)();let[t,{width:s}]=(0,z.Z)();(0,T.l)();let[n,o]=(0,l.useState)(!1),[d,i]=(0,l.useState)(!1),[c,u]=(0,l.useState)(),{watch:m,register:f,handleSubmit:p}=(0,I.cI)({defaultValues:{searchValue:""}}),x=m("searchValue");(0,l.useEffect)(()=>{x||o(!1)},[x]);let h=p(e=>{let{searchValue:a}=e;(async()=>{try{a||(u(void 0),o(!1))}catch(e){R.Am.error(e.message)}finally{i(!1)}})()});return(0,r.jsxs)(S.J2,{open:n,onOpenChange:e=>{o(e)},children:[(0,r.jsx)(S.xo,{disabled:!0,className:"w-full",children:(0,r.jsx)("form",{onSubmit:h,className:"",ref:t,children:(0,r.jsx)(Z.I,{...f("searchValue",{required:!0}),noRing:!0,type:"search",placeholder:a||"Search","data-search-input":"true"})})}),(0,r.jsx)(S.yk,{style:{width:s},className:"flex flex-col gap-y-2 p-0"})]})}function F(e){let{title:a,search:t,headerActions:l}=e;return t||a||l?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"px-4 py-4 flex flex-col gap-y-2",children:(0,r.jsxs)("div",{className:"flex flex-col gap-y-2 md:flex-row md:gap-y-0 md:gap-x-2",children:[(0,r.jsxs)("div",{className:(0,d.cn)("flex items-center gap-x-2",!a&&"hidden"),children:[!!a&&(0,r.jsx)("div",{className:(0,d.cn)("md:mr-auto","string"==typeof a?"text-2xl":""),children:a}),(0,r.jsx)("div",{className:"ml-auto"})]}),(0,r.jsx)("div",{className:(0,d.cn)("flex-1",!t&&"hidden"),children:!!t&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(_,{...t})})}),(0,r.jsx)("div",{className:(0,d.cn)("flex flex-row flex-wrap gap-x-2 gap-y-1 ml-auto",!l&&"hidden"),children:l})]})})}):null}let V=e=>{var a,t;let{selectable:v=!1,loading:N,sortable:y,tableClassname:j,tableRowClassname:w,tableBodyClassname:C,onSort:I}=e,R=(0,l.useRef)(null),{state:{columns:z,rows:Z,skeletonRows:S,selected:T},setState:_,setFilter:V,setSelected:E,toggleColumn:O}=function(e){let{props:a}=e,t=(0,l.useRef)(!1),{selectable:r,sortable:s,selectedIndexes:n,columns:o,data:d,maxRows:i,onSelect:c}=a,[u,m]=(0,l.useState)({selected:{},columns:[],rows:[],skeletonRows:[]}),f=(0,l.useCallback)(()=>r?{...null==n?void 0:n.reduce((e,a)=>({...e,[a]:!0}),{})}:{},[n,r]);(0,l.useEffect)(()=>{let e=[],a=i||25;for(let t=0;t<a;t++)e.push({id:"".concat(t),rowIndex:t,cells:o.map((e,a)=>({id:"".concat(t,".").concat(a),columnIndex:a,rowIndex:t,value:""}))});m(a=>({...a,columns:o.map((e,a)=>({...e,id:"".concat(a),columnIndex:a,filter:null,hidden:!1,cellClassName:(0,g.Z)(e.cellClassName,"py-2")})),skeletonRows:e,rows:d.map((e,a)=>({id:"".concat(a),rowIndex:a,cells:o.map((t,r)=>({id:"".concat(a,".").concat(r),rowIndex:a,columnIndex:r,value:e[r]||""}))}))})),t.current||(t.current=!0)},[o,d,i]),(0,l.useEffect)(()=>{m(e=>({...e,selected:f()}))},[s,n,f]);let p=(0,l.useCallback)(e=>{let a=[];m(t=>{let r=e.length===t.rows.length,l=Object.values(t.selected).filter(e=>e).length===t.rows.length,s={...t.selected};return e.forEach(e=>{s[e]=r?!l:!s[e]}),a=Object.keys(s).filter(e=>s[e]).map(e=>Number(e)),{...t,selected:s}}),null==c||c(a)},[m,c]);return{state:u,setState:m,setSelected:p,toggleColumn:e=>m(a=>{let t=[...a.columns].map(a=>({...a,filter:null,hidden:a.columnIndex===e?!a.hidden:a.hidden}));return{...a,columns:t}}),setFilter:(e,a)=>m(t=>{let r=[...t.columns].map(t=>{let r=t.columnIndex===e?a:null;return{...t,filter:r}}),l=r.filter(a=>a.columnIndex===e)[0],s=[...t.rows];return a&&(s=function(e){let{column:a,rows:t}=e;return t.sort((e,t)=>{let r=e.cells.filter(e=>e.columnIndex===a.columnIndex)[0].value||"",l=t.cells.filter(e=>e.columnIndex===a.columnIndex)[0].value||"",s=0;if("number"===a.filterType){let e=Number(r),t=Number(l);if(!(isNaN(e)||isNaN(t)))switch(a.filter){case"asc":s=e-t;break;case"desc":s=t-e}}else if("text"===a.filterType)switch(a.filter){case"asc":s=r.localeCompare(l);break;case"desc":s=l.localeCompare(r)}return s})}({rows:s,column:l})),{...t,columns:r,rows:s}})}}({props:e}),A=(0,l.useMemo)(()=>N?S:Z,[N,S,Z]),D=(0,l.useCallback)((e,a)=>{let t=[];_(r=>{let l=(0,n.q)([...r.rows],e,a);return t=l.map((e,a)=>({oldIndex:e.rowIndex,newIndex:a})),{...r,rows:l}}),null==I||I(e,a,t),E([])},[_,I,E]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F,{...e}),(0,r.jsx)(s.ZP,{allowDrag:!!y,onSortEnd:D,draggedItemClassName:"opacity-90 z-[9999999999999]",customHolderRef:R,children:(0,r.jsx)("div",{className:"space-y-4",children:(0,r.jsxs)(i,{className:(0,d.cn)("w-full overflow-x-auto",j),children:[(0,r.jsx)(c,{className:(0,d.cn)(e.theadClassName),children:(0,r.jsxs)(m,{children:[v&&(0,r.jsx)(f,{className:(0,d.cn)(null===(a=z[0])||void 0===a?void 0:a.cellClassName,"w-8"),children:(0,r.jsx)(h.X,{disabled:N,checked:!!A.length&&Object.values(T).filter(e=>e).length===A.length,onCheckedChange:()=>E(A.map(e=>e.rowIndex))})}),y&&(0,r.jsx)(f,{className:(0,d.cn)(null===(t=z[0])||void 0===t?void 0:t.cellClassName,"w-4")}),z.map(a=>(0,r.jsx)(f,{colSpan:a.colSpan,align:a.align,className:(0,d.cn)(e.cellClassName,e.thClassName,a.cellClassName,a.thClassName,"px-2",a.hidden?"hidden":"",a.align?({left:"text-left",center:"text-center",right:"text-right",justify:"text-justify",char:""})[a.align]:""),children:(()=>{switch(a.filterType){case"number":case"text":return(0,r.jsx)(k,{column:a,value:a.filter,onFilter:e=>{"hide"===e?O(a.columnIndex):V(a.columnIndex,e)}});default:return(0,r.jsx)(x.z,{variant:"ghost",size:"sm",className:" focus-visible:ring-0  focus-visible:ring-transparent  focus-visible:ring-offset-0 hover:bg-transparent hover:text-primary ",children:a.name||""})}})()},a.id))]})}),(0,r.jsxs)(u,{ref:R,className:C,children:[!A.length&&(0,r.jsx)(m,{className:"p-0",children:(0,r.jsx)(p,{colSpan:z.length+(v?1:0)+(y?1:0),className:"p-4 text-center text-muted-foreground",children:e.noDataMessage||"No data to display"})}),A.map(a=>{var t,n,i;let c={...null===(t=e.getRowOptions)||void 0===t?void 0:t.call(e,{rowIndex:a.rowIndex})};return(0,r.jsx)(s.TR,{children:(0,r.jsxs)(m,{...c,className:(0,d.cn)(e.trClassName,"hover:bg-primary/10",T[a.rowIndex]?"bg-primary/10":"",w,c.className),children:[v&&(0,r.jsx)(p,{className:(0,d.cn)(null===(n=z[0])||void 0===n?void 0:n.cellClassName,"w-8"),children:(0,r.jsx)(h.X,{disabled:N,checked:!!T[a.rowIndex],onCheckedChange:()=>E([a.rowIndex])})}),y&&(0,r.jsx)(p,{className:(0,d.cn)(null===(i=z[0])||void 0===i?void 0:i.cellClassName,"w-4 cursor-move"),children:(0,r.jsx)(s.TI,{children:(0,r.jsx)(o.Z,{className:"w-4 h-4 text-muted-foreground"})})}),a.cells.map(t=>{var s,n;let o=z[t.columnIndex],i={...null===(s=e.getCellOptions)||void 0===s?void 0:s.call(e,{rowIndex:a.rowIndex,columnIndex:t.columnIndex})};return(0,l.createElement)(p,{...i,key:t.id,colSpan:o.colSpan,align:o.align,className:(0,d.cn)(e.cellClassName,e.tdClassName,o.cellClassName,o.tdClassName,"px-4",i.className,o.hidden?"hidden":"")},N?(0,r.jsx)(b,{className:"h-4 w-[120px] bg-black/10 dark:bg-white/10"}):(null===(n=o.cellRenderer)||void 0===n?void 0:n.call(o,t))||t.value)})]})},a.id)})]})]})})})]})}},50495:function(e,a,t){t.d(a,{d:function(){return d},z:function(){return i}});var r=t(57437),l=t(2265),s=t(71538),n=t(12218),o=t(37440);let d=(0,n.j)("\n    inline-flex\n    items-center\n    justify-center\n    whitespace-nowrap\n    rounded-md\n    text-sm\n    font-medium\n    transition-colors\n    focus-visible:outline-none\n    disabled:pointer-events-none\n    disabled:opacity-50\n  ",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"border border-input bg-background hover:bg-primary/20","primary-outline":"border border-primary text-primary bg-transparent hover:bg-primary/20",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/90",ghost:"hover:bg-primary/20 hover:text-primary",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=l.forwardRef((e,a)=>{let{className:t,variant:l,size:n,asChild:i=!1,...c}=e,u=i?s.g7:"button";return(0,r.jsx)(u,{className:(0,o.cn)(d({variant:l,size:n,className:t})),ref:a,...c})});i.displayName="Button"},86466:function(e,a,t){t.d(a,{X:function(){return d}});var r=t(57437),l=t(2265),s=t(69324),n=t(22468),o=t(37440);let d=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)(s.fC,{ref:a,className:(0,o.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...l,children:(0,r.jsx)(s.z$,{className:(0,o.cn)("flex items-center justify-center text-current"),children:(0,r.jsx)(n.Z,{className:"h-4 w-4"})})})});d.displayName=s.fC.displayName},46910:function(e,a,t){t.d(a,{$F:function(){return u},AW:function(){return m},Ju:function(){return p},VD:function(){return x},Xi:function(){return f},h_:function(){return c}});var r=t(57437),l=t(2265),s=t(81622),n=t(87592),o=t(22468),d=t(28165),i=t(37440);let c=s.fC,u=s.xz;s.ZA,s.Uv,s.Tr,s.Ee,l.forwardRef((e,a)=>{let{className:t,inset:l,children:o,...d}=e;return(0,r.jsxs)(s.fF,{ref:a,className:(0,i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",l&&"pl-8",t),...d,children:[o,(0,r.jsx)(n.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=s.fF.displayName,l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)(s.tu,{ref:a,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...l})}).displayName=s.tu.displayName;let m=l.forwardRef((e,a)=>{let{className:t,sideOffset:l=4,...n}=e;return(0,r.jsx)(s.Uv,{children:(0,r.jsx)(s.VY,{ref:a,sideOffset:l,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})})});m.displayName=s.VY.displayName;let f=l.forwardRef((e,a)=>{let{className:t,inset:l,...n}=e;return(0,r.jsx)(s.ck,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",l&&"pl-8",t),...n})});f.displayName=s.ck.displayName,l.forwardRef((e,a)=>{let{className:t,children:l,checked:n,...d}=e;return(0,r.jsxs)(s.oC,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:n,...d,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.wU,{children:(0,r.jsx)(o.Z,{className:"h-4 w-4"})})}),l]})}).displayName=s.oC.displayName,l.forwardRef((e,a)=>{let{className:t,children:l,...n}=e;return(0,r.jsxs)(s.Rk,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.wU,{children:(0,r.jsx)(d.Z,{className:"h-2 w-2 fill-current"})})}),l]})}).displayName=s.Rk.displayName;let p=l.forwardRef((e,a)=>{let{className:t,inset:l,...n}=e;return(0,r.jsx)(s.__,{ref:a,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",l&&"pl-8",t),...n})});p.displayName=s.__.displayName;let x=l.forwardRef((e,a)=>{let{className:t,...l}=e;return(0,r.jsx)(s.Z0,{ref:a,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",t),...l})});x.displayName=s.Z0.displayName},83102:function(e,a,t){t.d(a,{I:function(){return n}});var r=t(57437),l=t(2265),s=t(37440);let n=l.forwardRef((e,a)=>{let{className:t,type:l,noRing:n,error:o,...d}=e;return(0,r.jsx)("input",{type:l,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n&&"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",o&&"border-danger",o&&!n&&"focus-visible:ring-danger",t),ref:a,...d})});n.displayName="Input"},19573:function(e,a,t){t.d(a,{J2:function(){return o},xo:function(){return d},yk:function(){return i}});var r=t(57437),l=t(2265),s=t(61485),n=t(37440);let o=s.fC,d=s.xz,i=l.forwardRef((e,a)=>{let{className:t,align:l="center",sideOffset:o=4,...d}=e;return(0,r.jsx)(s.h_,{children:(0,r.jsx)(s.VY,{ref:a,align:l,sideOffset:o,className:(0,n.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...d})})});i.displayName=s.VY.displayName},23733:function(e,a,t){t.d(a,{l:function(){return n}});var r=t(16463),l=t(12491),s=t(2265);function n(){let e=(0,r.useRouter)(),a=(0,r.useSearchParams)(),t=(0,s.useMemo)(()=>a.toString(),[a]),n=(0,s.useMemo)(()=>l.Z.parse(a.toString()),[a]),o=(0,s.useCallback)(e=>l.Z.stringify({...n,...e}),[n]),d=(0,s.useCallback)(a=>{e.push("?".concat(o(a)))},[o,e]);return{parsed:n,stringified:t,replace:(0,s.useCallback)(a=>{e.replace("?".concat(o(a)))},[o,e]),push:d,toSearchParams:o}}},37440:function(e,a,t){t.d(a,{cn:function(){return s}});var r=t(44839),l=t(96164);function s(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,l.m6)((0,r.W)(a))}}}]);
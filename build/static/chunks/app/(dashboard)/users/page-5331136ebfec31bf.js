(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7297],{40266:function(e,a,t){Promise.resolve().then(t.bind(t,57444)),Promise.resolve().then(t.bind(t,25704))},57444:function(e,a,t){"use strict";t.d(a,{UsersTable:function(){return q}});var s=t(57437),r=t(2265),l=t(27776),n=t(92940),i=t(19212),o=t.n(i),d=t(38472),c=t(27071),u=t(37440);let m=c.zt,f=c.fC,x=c.xz,p=r.forwardRef((e,a)=>{let{className:t,sideOffset:r=4,...l}=e;return(0,s.jsx)(c.VY,{ref:a,sideOffset:r,className:(0,u.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...l})});p.displayName=c.VY.displayName;var h=t(75944),v=t(99221),g=t(64344),j=t(39661),N=t(23733),b=t(76230),y=t(17647),w=t(30998),C=t(45188),k=t(90399),_=t(46910),I=t(50495);function P(e){var a,t;let{email:r,userId:l,userName:n,isActivated:i,onDelete:o}=e,d=(0,w.useSession)(),c=(0,N.l)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(_.h_,{children:[(0,s.jsx)(_.$F,{asChild:!0,children:(0,s.jsx)(I.z,{variant:"ghost",size:"icon",className:"p-0 h-auto w-auto transition-colors rounded-full hover:text-primary hover:bg-transparent",children:(0,s.jsx)(C.Z,{className:"h-4 w-4"})})}),(0,s.jsxs)(_.AW,{children:[(0,s.jsx)(_.Ju,{children:n}),(0,s.jsx)(_.VD,{}),(0,s.jsx)(_.Xi,{onClick:()=>c.push({userId:l}),children:"Edit"}),(0,s.jsx)(_.Xi,{disabled:i,children:"Send activation code"}),(0,s.jsx)(_.VD,{}),(0,s.jsxs)(_.Xi,{onClick:o,className:"text-danger focus:bg-danger focus:text-danger-foreground",disabled:r===(null===(t=d.data)||void 0===t?void 0:null===(a=t.user)||void 0===a?void 0:a.email),children:[(0,s.jsx)(k.Z,{className:"mr-2 h-4 w-4"}),(0,s.jsx)("span",{children:"Delete"})]})]})]})})}var S=t(42873),E=t(20920),R=t(39343),Z=t(95317),D=t(46294),F=t(83102),z=t(67135),U=t(53699),L=t(95974);let A=/\S+@\S+\.\S+/;function T(e){let{open:a,userId:t,roles:l,getUser:n,onClose:i,updateUsers:o,createUsers:c,onSaveSuccess:m}=e,{alert:f}=(0,U.s)(),{parsed:x,replace:p}=(0,N.l)(),h=t||x.userId,[v,g]=(0,r.useState)(!1),[b,y]=(0,r.useState)(!1),[,w]=(0,r.useState)(),[C,k]=(0,r.useState)(!h),{formState:{errors:_},watch:P,setValue:T,register:V,handleSubmit:O}=(0,R.cI)({defaultValues:{userId:h||(0,E.Z)(),email:"",displayName:"",firstName:"",lastName:"",role:"user",avatar:"",avatar_sm:"",avatar_md:""}}),B=(0,r.useCallback)(()=>{h&&(g(!0),n(h).then(e=>{w(e),e&&(T("userId",e.userId||""),T("email",e.email||""),T("displayName",e.displayName||""),T("firstName",e.firstName||""),T("lastName",e.lastName||""),T("role",e.role||"user"),T("avatar",e.avatar||""),T("avatar_sm",e.avatar_sm||""),T("avatar_md",e.avatar_md||""))}).catch(e=>f({title:"",message:"Failed to load user: "+e.message,variant:"error",onClose:()=>p({userId:void 0})})).finally(()=>g(!1)))},[h,p,f,T,n]);(0,L.q)(B);let M=O(e=>{(async()=>{try{y(!0),h?await d.Z.post("/api/users/update",{data:[{userId:h,data:e}]}):await d.Z.post("/api/users/add",{data:[e]}),m&&await m(),f({variant:"success",message:"User was saved successfully!",onClose:()=>{null==i||i(),p({userId:void 0})}})}catch(e){f({title:"",message:"Failed to save user: "+e.message,variant:"error"})}finally{y(!1)}})()}),q=P("role"),Q=P("email");return v?(0,s.jsx)(j.a,{overlay:!0}):(0,s.jsxs)(s.Fragment,{children:[b&&(0,s.jsx)(j.a,{overlay:!0}),(0,s.jsxs)(Z.yo,{open:a||!!x.userId,onOpenChange:()=>{null==i||i(),p({userId:void 0})},children:[(0,s.jsx)(Z.aM,{asChild:!0,children:(0,s.jsx)(I.z,{className:"md:hidden",variant:"ghost",children:(0,s.jsx)(S.Z,{className:"h-6 w-6"})})}),(0,s.jsxs)(Z.ue,{side:"right",className:"p-0 m-0 flex flex-col",children:[(0,s.jsx)(Z.Tu,{className:"py-2 px-4 border-b border-b-border",children:(0,s.jsxs)(Z.bC,{children:[h?"Edit":"New"," User"]})}),(0,s.jsxs)("div",{className:"flex-1 flex flex-col py-2 px-4 gap-y-4 overflow-y-auto",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(z._,{htmlFor:"role",children:"Role"}),(0,s.jsxs)(D.Ph,{value:q,required:!0,name:"role",disabled:b,onValueChange:e=>{T("role",e)},children:[(0,s.jsx)(D.i4,{children:(0,s.jsx)(D.ki,{placeholder:"Filter by status"})}),(0,s.jsx)(D.Bw,{children:(0,s.jsxs)(D.DI,{children:[(0,s.jsx)(D.n5,{children:"User role"}),l.map(e=>(0,s.jsx)(D.Ql,{value:e.name,children:e.description},e.name))]})})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,s.jsx)(z._,{htmlFor:"email",className:(0,u.cn)(C?"":"opacity-50"),children:"Email"}),C?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(F.I,{placeholder:"Email",type:"email",className:(0,u.cn)(_.email?"border-danger ring-danger focus-visible:ring-danger":""),...V("email",{required:!0,disabled:b,pattern:{value:A,message:"Incorrect email format"}})}),_.email&&(0,s.jsx)("span",{role:"alert",className:"text-xs text-danger",children:_.email.message})]}):(0,s.jsx)(F.I,{disabled:!0,value:Q,onChange:()=>{},className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(z._,{htmlFor:"displayName",children:"Display name"}),(0,s.jsx)(F.I,{...V("displayName",{required:!0,disabled:b}),placeholder:"Display name"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(z._,{htmlFor:"firstName",children:"First name"}),(0,s.jsx)(F.I,{...V("firstName",{required:!1,disabled:b}),placeholder:"First name"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(z._,{htmlFor:"lastName",children:"Last name"}),(0,s.jsx)(F.I,{...V("lastName",{required:!1,disabled:b}),placeholder:"Last name"})]})]}),(0,s.jsxs)("div",{className:"border-t border-t-border px-4 py-2 flex justify-end gap-x-2",children:[(0,s.jsx)(Z.sw,{asChild:!0,children:(0,s.jsx)(I.z,{variant:"outline",children:"Cancel"})}),(0,s.jsx)(I.z,{onClick:M,children:"Save"})]})]})]})]})}var V=t(92513);let O=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}];function B(e){let{selected:a,roles:t,getUsers:l,onDelete:n,toggleUserForm:i,searchUsers:o}=e,d=(0,N.l)(),[c,u]=(0,r.useState)(d.parsed.role||"all"),[m,f]=(0,r.useState)(d.parsed.status||"all");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:(0,s.jsxs)(D.Ph,{value:m,onValueChange:e=>{let a="all"===e?void 0:e;f(e),l({status:a},e=>!e&&d.push({status:a}))},children:[(0,s.jsx)(D.i4,{children:(0,s.jsx)(D.ki,{placeholder:"Filter by status"})}),(0,s.jsx)(D.Bw,{children:(0,s.jsxs)(D.DI,{children:[(0,s.jsx)(D.n5,{children:"User status"}),(0,s.jsx)(D.Ql,{value:"all",children:"All statuses"}),O.map(e=>(0,s.jsx)(D.Ql,{value:e.value,children:e.label},e.value))]})})]})}),(0,s.jsx)("div",{children:(0,s.jsxs)(D.Ph,{value:c,onValueChange:e=>{let a="all"===e?[]:[e];u(e),l({roles:a},e=>!e&&d.push({role:a[0]}))},children:[(0,s.jsx)(D.i4,{children:(0,s.jsx)(D.ki,{placeholder:"Filter by role"})}),(0,s.jsx)(D.Bw,{children:(0,s.jsxs)(D.DI,{children:[(0,s.jsx)(D.n5,{children:"User roles"}),(0,s.jsx)(D.Ql,{value:"all",children:"All roles"}),t.map(e=>(0,s.jsx)(D.Ql,{value:e.name,children:e.description},e.name))]})})]})}),(0,s.jsx)("div",{children:(0,s.jsxs)(I.z,{variant:"outline",className:"w-auto h-auto border-primary text-primary",onClick:()=>i(),children:[(0,s.jsx)(V.Z,{className:"w-4 h-4 mr-1"}),"New User"]})})]})}function M(e){let{open:a,userIds:t,roles:l,onClose:n,updateUsers:i,onSaveSuccess:o}=e,{alert:c}=(0,U.s)(),{parsed:u,replace:m}=(0,N.l)(),[f,x]=(0,r.useState)(!1),{watch:p,setValue:h,handleSubmit:v}=(0,R.cI)({defaultValues:{role:""}}),g=(0,r.useCallback)(()=>{null==n||n(),m({bulkEdit:void 0}),h("role","")},[n,m,h]),j=v(e=>{(async()=>{try{x(!0),t.length&&(await d.Z.post("/api/users/update",{data:t.map(a=>({userId:a,data:e}))}),o&&await o()),c({variant:"success",message:"Users updated",onClose:g})}catch(e){c({title:"",message:"Failed to update users: "+e.message,variant:"error"})}finally{x(!1)}})()});(0,r.useEffect)(()=>{t.length||g()},[t,g]);let b=p("role");return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(Z.yo,{open:"1"===u.bulkEdit,onOpenChange:e=>{e||g()},children:(0,s.jsxs)(Z.ue,{side:"right",className:"p-0 m-0 flex flex-col",children:[(0,s.jsx)(Z.Tu,{className:"py-2 px-4 border-b border-b-border",children:(0,s.jsx)(Z.bC,{children:"Bulk edit users"})}),(0,s.jsx)("div",{className:"flex-1 flex flex-col py-2 px-4 gap-y-4 overflow-y-auto",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(z._,{htmlFor:"role",children:"Role"}),(0,s.jsxs)(D.Ph,{value:b,required:!0,name:"role",disabled:f,onValueChange:e=>{h("role",e)},children:[(0,s.jsx)(D.i4,{children:(0,s.jsx)(D.ki,{placeholder:"-- select role --"})}),(0,s.jsx)(D.Bw,{children:(0,s.jsxs)(D.DI,{children:[(0,s.jsx)(D.n5,{children:"User role"}),l.map(e=>(0,s.jsx)(D.Ql,{value:e.name,children:e.description},e.name))]})})]})]})}),(0,s.jsxs)("div",{className:"border-t border-t-border px-4 py-2 flex justify-end gap-x-2",children:[(0,s.jsx)(Z.sw,{asChild:!0,children:(0,s.jsx)(I.z,{variant:"outline",children:"Cancel"})}),(0,s.jsx)(I.z,{onClick:j,disabled:!b,children:"Save"})]})]})})})}function q(e){let{users:a,roles:t,getUsers:i,deleteUsers:c,getUser:w,updateUsers:C,createUsers:k,searchUsers:_}=e,I=(0,N.l)(),{mode:S}=(0,y.b)(),[E,R]=(0,r.useState)(a),[Z,D]=(0,r.useState)(!1),[F,z]=(0,r.useState)([]),[U,L]=(0,r.useState)(!1),{confirm:A}=(0,b.t)(),V=(0,r.useCallback)(async(e,t)=>{D(!0);let s=(await d.Z.get("/api/users?data="+JSON.stringify({...I.parsed,roles:I.parsed.role?[I.parsed.role]:void 0,page:1,limit:a.limit,...e}))).data;s.error?l.Am.error(s.error):(R(s),z([])),null==t||t(s.error,s),D(!1)},[i,I,a]),O=(0,r.useCallback)((e,a)=>{let t=E.data.filter(a=>e.includes(a.userId)).map(e=>e.displayName);A(()=>{(async()=>{try{D(!0),await d.Z.delete("/api/users?data="+JSON.stringify(e)),await V(),null==a||a()}catch(e){l.Am.error(e.message)}finally{D(!1)}})()},{title:"Delete "+(t.length>1?"users":"user"),message:"<p>Are you sure you want to delete:</p> ".concat(t.map(e=>'<div class="font-bold text-danger">'.concat(e,"</div>")).join("")),negativeLabel:"Cancel",positiveLabel:"Delete",danger:!0})},[A,c,V,E]),q=I.parsed.userId||U?(0,s.jsx)(T,{roles:t,open:U,getUser:w,updateUsers:C,createUsers:k,onSaveSuccess:V,onClose:()=>L(!1)}):null,Q=(0,s.jsx)(M,{roles:t,open:U,userIds:F.map(e=>E.data[e].userId),updateUsers:C,onSaveSuccess:()=>V({page:E.page})}),X=(0,r.useMemo)(()=>"view"===S,[S]);return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)(h.DataTable,{title:"Users",selectable:!X,selectedIndexes:F,onSelect:z,search:{inputPlaceholder:"Search users"},headerActions:(0,s.jsx)(B,{users:E,roles:t,selected:F.map(e=>E.data[e].userId),onDelete:O,getUsers:V,searchUsers:_,toggleUserForm:()=>L(e=>!e)}),columns:[{name:"Display name"},{name:"Email"},{name:"Role"},{name:"Last login date"},{name:"Active",align:"right",cellRenderer(e){let a=E.data[e.rowIndex];return(0,s.jsx)(m,{delayDuration:0,children:(0,s.jsxs)(f,{children:[(0,s.jsx)(x,{asChild:!0,children:(0,s.jsx)(n.Z,{className:(0,u.cn)(a.activationDate?"text-green-400":"text-gray-400","w-4 h-4")})}),!!a.activationDate&&(0,s.jsx)(p,{children:(0,s.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Activation date: ",o()(a.activationDate).format("LLL")]})})]})})}},{name:"Action",align:"right",cellRenderer(e){let a=E.data[e.rowIndex];return(0,s.jsx)(P,{email:a.email,userId:a.userId,userName:a.displayName,isActivated:!!a.activationDate,onDelete:()=>O([a.userId])})}}],data:E.data.map(e=>{var a;return[e.displayName,e.email,(null===(a=t.filter(a=>a.name===e.role)[0])||void 0===a?void 0:a.description)||e.role,e.lastLoginDate?o()(e.lastLoginDate).format("LLL"):"",""]})}),(0,s.jsx)(g.Z,{}),(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(v.t,{currentPage:E.page,totalPages:E.totalPages,disabled:Z,limit:E.limit||E.totalRows,totalRows:E.totalRows,collectionName:"users",onPaginate:e=>V({page:e},(e,a)=>!e&&I.push({page:(null==a?void 0:a.page)||E.page})),hideControls:!1,hideSummary:!1})}),q,Q,Z&&(0,s.jsx)(j.a,{overlay:!0})]})}},39661:function(e,a,t){"use strict";t.d(a,{a:function(){return l}});var s=t(57437),r=t(89627);function l(e){let{overlay:a,transparent:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",...a?{height:"100%",position:"fixed",top:0,left:0,bottom:0,zIndex:999,backgroundColor:t?"transparent":"rgba(255,255,255,.6)"}:{padding:"50px 0"}},children:(0,s.jsx)(r.Z,{style:{height:24,width:24},className:"animate-spin"})})})}},99221:function(e,a,t){"use strict";t.d(a,{t:function(){return b}});var s=t(57437),r=t(2265),l=t(70518),n=t(87592),i=t(63550),o=t(37440),d=t(50495);let c=e=>{let{className:a,...t}=e;return(0,s.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,o.cn)("mx-auto flex w-full justify-center",a),...t})};c.displayName="Pagination";let u=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("ul",{ref:a,className:(0,o.cn)("flex flex-row items-center gap-1",t),...r})});u.displayName="PaginationContent";let m=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("li",{ref:a,className:(0,o.cn)("",t),...r})});m.displayName="PaginationItem";let f=e=>{let{className:a,isActive:t,size:r="icon",...l}=e;return(0,s.jsx)("a",{"aria-current":t?"page":void 0,className:(0,o.cn)((0,d.d)({variant:t?"outline":"ghost",size:r}),a),...l})};f.displayName="PaginationLink";let x=e=>{let{className:a,...t}=e;return(0,s.jsxs)(f,{"aria-label":"Go to previous page",size:"default",className:(0,o.cn)("gap-1 pl-2.5",a),...t,children:[(0,s.jsx)(l.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{children:"Previous"})]})};x.displayName="PaginationPrevious";let p=e=>{let{className:a,...t}=e;return(0,s.jsxs)(f,{"aria-label":"Go to next page",size:"default",className:(0,o.cn)("gap-1 pr-2.5",a),...t,children:[(0,s.jsx)("span",{children:"Next"}),(0,s.jsx)(n.Z,{className:"h-4 w-4"})]})};p.displayName="PaginationNext";let h=e=>{let{className:a,...t}=e;return(0,s.jsxs)("span",{"aria-hidden":!0,className:(0,o.cn)("flex h-9 w-9 items-center justify-center",a),...t,children:[(0,s.jsx)(i.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"More pages"})]})};h.displayName="PaginationEllipsis";var v=t(78448);let g="LEFT",j="RIGHT";function N(e,a){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=e,r=[];for(;s<=a;)r.push(s),s+=t;return r}function b(e){let{currentPage:a,totalPages:t,disabled:r,limit:l=1,totalRows:n,collectionName:i="results",hideControls:d,hideSummary:b,classes:y}=e,w=function(e){let{currentPage:a=1,totalPages:t=0,onPaginate:s}=e,r=[{id:"first",label:"Previous",disabled:a<2,isPrev:!0,isNext:!1,isEllipsis:!1,onClick:()=>s(a-1)}];return(function(e){let{totalPages:a=0,currentPage:t=1}=e;if(a>9){let e=[],s=t-2,r=t+2,l=a-1,n=s>2?s:2,i=r<l?r:l,o=7-(e=N(n,i)).length-1,d=n>2,c=i<l;return d&&!c?e=[g,...N(n-o,n-1),...e]:!d&&c?e=[...e,...N(i+1,i+o),j]:d&&c&&(e=[g,...e,j]),[1,...e,a]}return N(1,a)})(e).forEach(e=>{[g,j].includes(e)?r.push({label:"...",id:"".concat(e),disabled:!1,isPrev:!1,isNext:!1,isEllipsis:!0,onClick:()=>{}}):r.push({id:"".concat(e),label:"".concat(e),disabled:a===e,isPrev:!1,isNext:!1,isEllipsis:!1,onClick:()=>s(Number(e))})}),r.push({id:"last",label:"Next",disabled:t===a,isPrev:!1,isNext:!0,isEllipsis:!1,onClick:()=>s(a+1)}),r}(e);return d&&b?null:(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center gap-y-2",children:[!b&&(0,s.jsxs)("div",{className:"text-xs opacity-50 min-w-10",children:["Showing ",n?(0,v.c)((a-1)*l+1):0,"\xa0-\xa0",(0,v.c)(Math.min(n,a*l)),"\xa0of\xa0",(0,v.c)(n,{separator:" "})," ",i]}),!d&&(0,s.jsx)(c,{children:(0,s.jsx)(u,{children:w.map(e=>(0,s.jsx)(m,{children:(()=>{let l="".concat(a)==="".concat(e.label),n=e.disabled||r,i="opacity-50",d=()=>!n&&e.onClick();return e.isPrev?(n=n||1===a,(0,s.jsx)(x,{href:"#",className:(0,o.cn)(1===a?i:""),onClick:e=>{e.stopPropagation(),e.preventDefault(),d()}})):e.isEllipsis?(0,s.jsx)(h,{className:(0,o.cn)(n?i:"","hidden md:flex",null==y?void 0:y.pageNumber)}):e.isNext?(n=n||a===t,(0,s.jsx)(p,{href:"#",className:(0,o.cn)(n?i:""),onClick:e=>{e.stopPropagation(),e.preventDefault(),d()}})):(0,s.jsx)(f,{href:"#",className:(0,o.cn)(n?i:"","hidden md:flex",null==y?void 0:y.pageNumber),isActive:l,onClick:e=>{e.stopPropagation(),e.preventDefault(),d()},children:e.label})})()},e.id))})})]})}},58502:function(e,a,t){"use strict";t.d(a,{SocketEventsListener:function(){return n}});var s=t(2265),r=t(16463),l=t(7752);function n(e){let{events:a}=e,t=(0,s.useRef)({eventsTimeouts:{},eventsTimestamps:{}});(0,s.useRef)(new Date().getTime());let n=(0,r.useRouter)();return(0,s.useEffect)(()=>{a.forEach(e=>{let{name:a,action:s,delay:r=100,onEvent:i}=e;l.Z.on(a,function(){for(var e=arguments.length,l=Array(e),o=0;o<e;o++)l[o]=arguments[o];let d=()=>{var e,t;(!s||l[0]===s)&&(null===(e=i.callback)||void 0===e||e.call(i,...l),(null==i?void 0:i.refreshRouter)&&(console.log(a,"refreshing..."),n.refresh()),(null===(t=i.redirect)||void 0===t?void 0:t.to)&&(i.redirect.replace?n.replace(i.redirect.to):n.push(i.redirect.to)))},c=new Date().getTime();r?(clearTimeout(t.current.eventsTimeouts[a]),t.current.eventsTimeouts[a]=setTimeout(()=>{t.current.eventsTimestamps[a]=c,d()},r)):(t.current.eventsTimestamps[a]=new Date().getTime(),d())})})},[a,n]),null}},25704:function(e,a,t){"use strict";t.d(a,{Title:function(){return l}});var s=t(2265),r=t(20357);function l(e){let{children:a}=e;return(0,s.useEffect)(()=>{document.title=[r.env.NEXT_PUBLIC_APP_NAME,a].filter(e=>e).join(" - ")},[a]),(0,s.useEffect)(()=>()=>{document.title="".concat(r.env.NEXT_PUBLIC_APP_NAME)},[]),null}},67135:function(e,a,t){"use strict";t.d(a,{_:function(){return d}});var s=t(57437),r=t(2265),l=t(38364),n=t(12218),i=t(37440);let o=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef((e,a)=>{let{className:t,secondary:r,error:n,...d}=e;return(0,s.jsx)(l.f,{ref:a,className:(0,i.cn)(o(),r&&"text-xs",n?"text-danger":"",t),...d})});d.displayName=l.f.displayName},46294:function(e,a,t){"use strict";t.d(a,{Bw:function(){return h},DI:function(){return u},Ph:function(){return c},Ql:function(){return g},i4:function(){return f},ki:function(){return m},n5:function(){return v}});var s=t(57437),r=t(2265),l=t(48297),n=t(42421),i=t(14392),o=t(22468),d=t(37440);let c=l.fC,u=l.ZA,m=l.B4,f=r.forwardRef((e,a)=>{let{className:t,children:r,error:i,...o}=e;return(0,s.jsxs)(l.xz,{ref:a,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",i&&"border-danger",t),...o,children:[r,(0,s.jsx)(l.JO,{asChild:!0,children:(0,s.jsx)(n.Z,{className:"h-4 w-4 opacity-50"})})]})});f.displayName=l.xz.displayName;let x=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.u_,{ref:a,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})});x.displayName=l.u_.displayName;let p=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.$G,{ref:a,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,s.jsx)(n.Z,{className:"h-4 w-4"})})});p.displayName=l.$G.displayName;let h=r.forwardRef((e,a)=>{let{className:t,children:r,position:n="popper",...i}=e;return(0,s.jsx)(l.h_,{children:(0,s.jsxs)(l.VY,{ref:a,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:n,...i,children:[(0,s.jsx)(x,{}),(0,s.jsx)(l.l_,{className:(0,d.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,s.jsx)(p,{})]})})});h.displayName=l.VY.displayName;let v=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.__,{ref:a,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...r})});v.displayName=l.__.displayName;let g=r.forwardRef((e,a)=>{let{className:t,children:r,...n}=e;return(0,s.jsxs)(l.ck,{ref:a,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.wU,{children:(0,s.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(l.eT,{children:r})]})});g.displayName=l.ck.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.Z0,{ref:a,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",t),...r})}).displayName=l.Z0.displayName},64344:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var s=t(57437),r=t(2265),l=t(48484),n=t(37440);let i=r.forwardRef((e,a)=>{let{className:t,orientation:r="horizontal",decorative:i=!0,...o}=e;return(0,s.jsx)(l.f,{ref:a,decorative:i,orientation:r,className:(0,n.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",t),...o})});i.displayName=l.f.displayName},95317:function(e,a,t){"use strict";t.d(a,{Ei:function(){return j},FF:function(){return v},Tu:function(){return h},aM:function(){return c},bC:function(){return g},sw:function(){return u},ue:function(){return p},yo:function(){return d}});var s=t(57437),r=t(2265),l=t(13304),n=t(12218),i=t(74697),o=t(37440);let d=l.fC,c=l.xz,u=l.x8,m=l.h_,f=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r,ref:a})});f.displayName=l.aV.displayName;let x=(0,n.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),p=r.forwardRef((e,a)=>{let{side:t="right",className:r,children:n,hideCloseButton:d,...c}=e;return(0,s.jsxs)(m,{children:[(0,s.jsx)(f,{}),(0,s.jsxs)(l.VY,{ref:a,className:(0,o.cn)(x({side:t}),r),...c,children:[n,!0!==d&&(0,s.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(i.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=l.VY.displayName;let h=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",a),...t})};h.displayName="SheetHeader";let v=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t})};v.displayName="SheetFooter";let g=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.Dx,{ref:a,className:(0,o.cn)("text-lg font-semibold text-foreground",t),...r})});g.displayName=l.Dx.displayName;let j=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.dk,{ref:a,className:(0,o.cn)("text-sm text-muted-foreground",t),...r})});j.displayName=l.dk.displayName},17647:function(e,a,t){"use strict";t.d(a,{AppContextProvider:function(){return v},b:function(){return h}});var s=t(57437),r=t(2265),l=t(79512),n=t(16463),i=t(23314),o=t(44785);let d=o.Z.get,c=o.Z.set;o.Z.remove;var u={get:d,set:c};function m(){let e=u.get("mode");return e||(e="view",u.set("mode",e,{expires:31536e7})),e}var f=t(7752),x=t(58502);let p=(0,r.createContext)(null),h=()=>(0,r.useContext)(p);function v(e){let{children:a,...t}=e,o=function(e){(0,n.useRouter)();let{isAdmin:a,isSuperUser:t,sys:s}=e,{setTheme:i}=(0,l.F)();(0,r.useEffect)(()=>{"yes"===s.data.hide_theme_toggle&&i("light")},[s]);let o=(0,r.useCallback)(()=>(a||t?m():"view")||"view",[t,a]),[d,c]=(0,r.useState)(o()),x=!a&&!t||"view"===d,p=(0,r.useCallback)(function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];let s=function(e){return u.set("mode",e,{expires:31536e7}),m()}(...a);return f.Z.emit("mode_changed",o()),c(o()),s},[o]),h=(0,r.useCallback)(()=>{c(o())},[o]);return{...e,mode:d,viewOnly:x,onModeChange:h,getMode:m,setMode:p}}(t),[d,c]=(0,r.useState)(!1);return((0,i.Z)(()=>{c(!0)}),d)?(0,s.jsxs)(p.Provider,{value:o,children:[a,(0,s.jsx)(x.SocketEventsListener,{events:[{name:"mode_changed",onEvent:{callback:o.onModeChange}}]})]}):null}},53699:function(e,a,t){"use strict";t.d(a,{s:function(){return l}});var s=t(39099);let r={title:"",message:"",buttonLabel:"Ok",variant:"info",onClose:void 0},l=(0,s.Ue)(e=>({isOpen:!1,...r,alert:a=>e({isOpen:!0,...r,...a}),close:()=>e({isOpen:!1,onClose:void 0,...r})}))},76230:function(e,a,t){"use strict";t.d(a,{t:function(){return l}});var s=t(39099);let r={danger:!1,title:"Confirm",message:"Are you sure?",positiveLabel:"Ok",negativeLabel:"Cancel"},l=(0,s.Ue)(e=>({isOpen:!1,...r,confirm:(a,t)=>e({isOpen:!0,...r,...t,onConfirm:a}),close:()=>e({isOpen:!1,onConfirm:void 0,...r})}))},95974:function(e,a,t){"use strict";t.d(a,{q:function(){return r}});var s=t(2265);function r(e){let a=(0,s.useRef)(0);return(0,s.useEffect)(()=>{if(a.current+=1,1!==a.current)return e()},[e])}},78448:function(e,a,t){"use strict";function s(e,a){let{decimals:t=0,separator:s=" "}={...a};isNaN(e=Number("".concat(e).replace(/[^a-z0-9.]+/gi,"")))&&(e="0");let r=(e="".concat(Number(e).toFixed(t>=0?t:2))).toString().split(".");return r[0]=r[0].replace(/\B(?=(\d{3})+(?!\d))/g,s),r.join(".")}t.d(a,{c:function(){return s}})},7752:function(e,a,t){"use strict";var s=t(34999),r=t(20357);let l=(0,s.io)(r.env.NEXT_PUBLIC_APP_URL);a.Z=l}},function(e){e.O(0,[6990,4868,5360,8429,659,7776,9343,4199,7651,6927,8472,9948,220,8972,998,3496,5944,7478,7023,1744],function(){return e(e.s=40266)}),_N_E=e.O()}]);
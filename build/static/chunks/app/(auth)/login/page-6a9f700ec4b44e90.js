(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4665],{83091:function(e,t,n){Promise.resolve().then(n.bind(n,25185)),Promise.resolve().then(n.bind(n,25704))},25185:function(e,t,n){"use strict";n.d(t,{Form:function(){return M}});var r=n(57437),i=n(2265),o=n(39343),l=n(38472),a=n(83102),s=n(50495),u=n(53699);function c(e){let{email:t,sendAuthCode:n,onEmailVerified:c,isEmailRegistered:d}=e,{alert:f}=(0,u.s)(),[p,m]=(0,i.useState)(!1),{register:h,handleSubmit:v}=(0,o.cI)({shouldUnregister:!1,defaultValues:{email:t||""}}),g=v(async e=>{let{email:t}=e;try{m(!0);let e=await l.Z.get("/api/users/is-email-registered?email="+t),{errors:r,yes:i,isActive:o}=e.data;if(console.log(e),(null==r?void 0:r.length)||!i){var n;f({title:"Error",message:(null==r?void 0:null===(n=r.join)||void 0===n?void 0:n.call(r,", "))||"Email address not registered, are you sure that address is typed correctly?",variant:"error"})}else c({email:t,isActive:!!o})}catch(e){f({title:"Error",message:e.message,variant:"error"})}finally{m(!1)}});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{className:" flex flex-col gap-y-4 ",onSubmit:e=>{e.preventDefault(),g()},children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.I,{type:"email",placeholder:"Email address",...h("email",{required:!0,disabled:p})})}),(0,r.jsx)("div",{className:"flex flex-col gap-y-2",children:(0,r.jsx)(s.z,{type:"submit",disabled:p,className:"w-full",children:p?"Please wait...":"Continue"})})]})})}var d=n(30998),f=n(16463),p=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&b(e,n,t[n]);if(v)for(var n of v(t))y.call(t,n)&&b(e,n,t[n]);return e},w=(e,t)=>m(e,h(t)),E=(e,t)=>{var n={};for(var r in e)g.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&v)for(var r of v(e))0>t.indexOf(r)&&y.call(e,r)&&(n[r]=e[r]);return n},j=i.createContext({}),S=i.forwardRef((e,t)=>{let n;var r,o,l,a,s,{value:u,onChange:c,maxLength:d,textAlign:f="left",pattern:p="^\\d+$",inputMode:m="numeric",onComplete:h,pushPasswordManagerStrategy:v="increase-width",containerClassName:g,noScriptCSSFallback:y=C,render:b,children:S}=e,k=E(e,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]);let[N,R]=i.useState("string"==typeof k.defaultValue?k.defaultValue:""),T=null!=u?u:N,A=(n=i.useRef(),i.useEffect(()=>{n.current=T}),n.current),O=i.useCallback(e=>{null==c||c(e),R(e)},[c]),M=i.useMemo(()=>p?"string"==typeof p?new RegExp(p):p:null,[p]),I=i.useRef(null),D=i.useRef(null),F=i.useRef({value:T,onChange:O,isIOS:"undefined"!=typeof window&&(null==(o=null==(r=null==window?void 0:window.CSS)?void 0:r.supports)?void 0:o.call(r,"-webkit-touch-callout","none"))}),_=i.useRef({prev:[null==(l=I.current)?void 0:l.selectionStart,null==(a=I.current)?void 0:a.selectionEnd,null==(s=I.current)?void 0:s.selectionDirection]});i.useImperativeHandle(t,()=>I.current,[]),i.useEffect(()=>{let e=I.current,t=D.current;if(!e||!t)return;function n(){if(document.activeElement!==e){H(null),U(null);return}let t=e.selectionStart,n=e.selectionEnd,r=e.selectionDirection,i=e.maxLength,o=e.value,l=_.current.prev,a=-1,s=-1,u;if(0!==o.length&&null!==t&&null!==n){let e=t===n,r=t===o.length&&o.length<i;if(e&&!r){if(0===t)a=0,s=1,u="forward";else if(t===i)a=t-1,s=t,u="backward";else if(i>1&&o.length>1){let e=0;if(null!==l[0]&&null!==l[1]){u=t<l[1]?"backward":"forward";let n=l[0]===l[1]&&l[0]<i;"backward"!==u||n||(e=-1)}a=e+t,s=e+t+1}}-1!==a&&-1!==s&&a!==s&&I.current.setSelectionRange(a,s,u)}let c=-1!==a?a:t,d=-1!==s?s:n,f=null!=u?u:r;H(c),U(d),_.current.prev=[c,d,f]}if(F.current.value!==e.value&&F.current.onChange(e.value),_.current.prev=[e.selectionStart,e.selectionEnd,e.selectionDirection],document.addEventListener("selectionchange",n,{capture:!0}),n(),document.activeElement===e&&V(!0),!document.getElementById("input-otp-style")){let e=document.createElement("style");if(e.id="input-otp-style",document.head.appendChild(e),e.sheet){let t="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";P(e.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),P(e.sheet,`[data-input-otp]:autofill { ${t} }`),P(e.sheet,`[data-input-otp]:-webkit-autofill { ${t} }`),P(e.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),P(e.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let r=()=>{t&&t.style.setProperty("--root-height",`${e.clientHeight}px`)};r();let i=new ResizeObserver(r);return i.observe(e),()=>{document.removeEventListener("selectionchange",n,{capture:!0}),i.disconnect()}},[]);let[W,B]=i.useState(!1),[L,V]=i.useState(!1),[z,H]=i.useState(null),[$,U]=i.useState(null);i.useEffect(()=>{var e;setTimeout(e=()=>{var e,t,n,r;null==(e=I.current)||e.dispatchEvent(new Event("input"));let i=null==(t=I.current)?void 0:t.selectionStart,o=null==(n=I.current)?void 0:n.selectionEnd,l=null==(r=I.current)?void 0:r.selectionDirection;null!==i&&null!==o&&(H(i),U(o),_.current.prev=[i,o,l])},0),setTimeout(e,10),setTimeout(e,50)},[T,L]),i.useEffect(()=>{void 0!==A&&T!==A&&A.length<d&&T.length===d&&(null==h||h(T))},[d,h,A,T]);let Z=function({containerRef:e,inputRef:t,pushPasswordManagerStrategy:n,isFocused:r}){let o=i.useRef({done:!1,refocused:!1}),[l,a]=i.useState(!1),[s,u]=i.useState(!1),[c,d]=i.useState(!1),f=i.useMemo(()=>"none"!==n&&("increase-width"===n||"experimental-no-flickering"===n)&&l&&s,[l,s,n]),p=i.useCallback(()=>{let r=e.current,i=t.current;if(!r||!i||c||"none"===n)return;let l=r.getBoundingClientRect().left+r.offsetWidth,s=r.getBoundingClientRect().top+r.offsetHeight/2;if(!(0===document.querySelectorAll('[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]').length&&document.elementFromPoint(l-18,s)===r)&&(a(!0),d(!0),!o.current.refocused&&document.activeElement===i)){let e=[i.selectionStart,i.selectionEnd];i.blur(),i.focus(),i.setSelectionRange(e[0],e[1]),o.current.refocused=!0}},[e,t,c,n]);return i.useEffect(()=>{let t=e.current;if(!t||"none"===n)return;function r(){u(window.innerWidth-t.getBoundingClientRect().right>=40)}r();let i=setInterval(r,1e3);return()=>{clearInterval(i)}},[e,n]),i.useEffect(()=>{let e=r||document.activeElement===t.current;if("none"===n||!e)return;let i=setTimeout(p,0),o=setTimeout(p,2e3),l=setTimeout(p,5e3),a=setTimeout(()=>{d(!0)},6e3);return()=>{clearTimeout(i),clearTimeout(o),clearTimeout(l),clearTimeout(a)}},[t,r,n,p]),{hasPWMBadge:l,willPushPWMBadge:f,PWM_BADGE_SPACE_WIDTH:"40px"}}({containerRef:D,inputRef:I,pushPasswordManagerStrategy:v,isFocused:L}),q=i.useCallback(e=>{let t=e.currentTarget.value.slice(0,d);if(t.length>0&&M&&!M.test(t)){e.preventDefault();return}"string"==typeof A&&t.length<A.length&&document.dispatchEvent(new Event("selectionchange")),O(t)},[d,O,A,M]),G=i.useCallback(()=>{var e;if(I.current){let t=Math.min(I.current.value.length,d-1),n=I.current.value.length;null==(e=I.current)||e.setSelectionRange(t,n),H(t),U(n)}V(!0)},[d]),X=i.useCallback(e=>{var t,n;let r=I.current;if(!F.current.isIOS||!e.clipboardData||!r)return;let i=e.clipboardData.getData("text/plain");e.preventDefault();let o=null==(t=I.current)?void 0:t.selectionStart,l=null==(n=I.current)?void 0:n.selectionEnd,a=(o!==l?T.slice(0,o)+i+T.slice(l):T.slice(0,o)+i+T.slice(o)).slice(0,d);if(a.length>0&&M&&!M.test(a))return;r.value=a,O(a);let s=Math.min(a.length,d-1),u=a.length;r.setSelectionRange(s,u),H(s),U(u)},[d,O,M,T]),J=i.useMemo(()=>({position:"relative",cursor:k.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[k.disabled]),K=i.useMemo(()=>({position:"absolute",inset:0,width:Z.willPushPWMBadge?`calc(100% + ${Z.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:Z.willPushPWMBadge?`inset(0 ${Z.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:f,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[Z.PWM_BADGE_SPACE_WIDTH,Z.willPushPWMBadge,f]),Q=i.useMemo(()=>i.createElement("input",w(x({autoComplete:k.autoComplete||"one-time-code"},k),{"data-input-otp":!0,"data-input-otp-mss":z,"data-input-otp-mse":$,inputMode:m,pattern:null==M?void 0:M.source,style:K,maxLength:d,value:T,ref:I,onPaste:e=>{var t;X(e),null==(t=k.onPaste)||t.call(k,e)},onChange:q,onMouseOver:e=>{var t;B(!0),null==(t=k.onMouseOver)||t.call(k,e)},onMouseLeave:e=>{var t;B(!1),null==(t=k.onMouseLeave)||t.call(k,e)},onFocus:e=>{var t;G(),null==(t=k.onFocus)||t.call(k,e)},onBlur:e=>{var t;V(!1),null==(t=k.onBlur)||t.call(k,e)}})),[q,G,X,m,K,d,$,z,k,null==M?void 0:M.source,T]),Y=i.useMemo(()=>({slots:Array.from({length:d}).map((e,t)=>{let n=L&&null!==z&&null!==$&&(z===$&&t===z||t>=z&&t<$),r=void 0!==T[t]?T[t]:null;return{char:r,isActive:n,hasFakeCaret:n&&null===r}}),isFocused:L,isHovering:!k.disabled&&W}),[L,W,d,$,z,k.disabled,T]),ee=i.useMemo(()=>b?b(Y):i.createElement(j.Provider,{value:Y},S),[S,Y,b]);return i.createElement(i.Fragment,null,null!==y&&i.createElement("noscript",null,i.createElement("style",null,y)),i.createElement("div",{ref:D,"data-input-otp-container":!0,style:J,className:g},ee,i.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Q)))});function P(e,t){try{e.insertRule(t)}catch(e){console.error("input-otp could not insert CSS rule:",t)}}S.displayName="Input";var C=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let k=(0,n(78030).Z)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);var N=n(37440);let R=i.forwardRef((e,t)=>{let{className:n,containerClassName:i,...o}=e;return(0,r.jsx)(S,{ref:t,containerClassName:(0,N.cn)("flex items-center gap-2 has-[:disabled]:opacity-50",i),className:(0,N.cn)("disabled:cursor-not-allowed",n),...o})});R.displayName="InputOTP";let T=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("div",{ref:t,className:(0,N.cn)("flex items-center",n),...i})});T.displayName="InputOTPGroup";let A=i.forwardRef((e,t)=>{let{index:n,className:o,...l}=e,{char:a,hasFakeCaret:s,isActive:u}=i.useContext(j).slots[n];return(0,r.jsxs)("div",{ref:t,className:(0,N.cn)("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",u&&"z-10 ring-2 ring-ring ring-offset-background",o),...l,children:[a,s&&(0,r.jsx)("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:(0,r.jsx)("div",{className:"h-4 w-px animate-caret-blink bg-foreground duration-1000"})})]})});function O(e){let{email:t,onSendCode:n,sendAuthCode:c,setPassword:p,shouldSetPassword:m}=e,{alert:h}=(0,u.s)();(0,f.useRouter)();let[v,g]=(0,i.useState)(!1),[y,b]=(0,i.useState)(!1),[x,w]=(0,i.useState)(!0),{watch:E,setValue:j,register:S,handleSubmit:P}=(0,o.cI)({shouldUnregister:!1,defaultValues:{email:t,code:"",password:"",passwordConfirm:""}}),C=E("code"),k=P(async e=>{try{if(g(!0),m){let{errors:n}=(await l.Z.post("/api/users/set-password",{...e,email:t})).data;if(null==n?void 0:n.length)throw Error(n.join(", "))}let n=await (0,d.signIn)("credentials",{...e,email:t,redirect:!1});if(null==n?void 0:n.ok)window.location.href="/";else throw Error((null==n?void 0:n.error)||"Failed to sign in")}catch(e){h({title:"Error",message:e.message,variant:"error"})}finally{g(!1)}});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{className:" flex flex-col gap-y-4 ",onSubmit:e=>{e.preventDefault(),k()},children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.I,{type:"email",placeholder:"Email address",...S("email",{disabled:!0})})}),(0,r.jsx)("div",{className:(0,N.cn)("flex justify-center",y?"":"hidden"),children:(0,r.jsx)(R,{maxLength:6,value:C,required:y,onChange:e=>{j("code",e),6===e.length&&k()},children:(0,r.jsx)(T,{children:(()=>{let e=[];for(let t=0;t<6;t++)e.push((0,r.jsx)(A,{index:t,className:"w-14"},t));return e})()})})}),(0,r.jsx)("div",{className:(0,N.cn)(x?"":"hidden"),children:(0,r.jsx)(a.I,{type:"password",placeholder:"Password",...S("password",{required:x,disabled:v})})}),!!m&&(0,r.jsx)("div",{className:(0,N.cn)(x?"":"hidden"),children:(0,r.jsx)(a.I,{type:"password",placeholder:"Confirm password",...S("passwordConfirm",{required:!0,disabled:v})})}),(0,r.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,r.jsx)(s.z,{type:"submit",disabled:v,className:"w-full",children:v?"Please wait...":"Sign in"}),(0,r.jsxs)("div",{className:(0,N.cn)("flex flex-col items-end gap-y-1",m&&"hidden"),children:[(0,r.jsx)("a",{href:"#",className:(0,N.cn)("text text-sm transition-colors text-secondary/60 hover:text-secondary",v&&"opacity-20"),onClick:e=>{e.preventDefault(),v||(j("code",""),j("password",""),x?(w(!1),b(!0),c({email:t})):(w(!0),b(!1)))},children:x?"Email me a sign in code":"Sign in with password"}),y&&(0,r.jsx)("a",{href:"#",className:(0,N.cn)("text text-sm transition-colors text-secondary/60 hover:text-secondary",v&&"opacity-20"),onClick:e=>{e.preventDefault(),v||n()},children:"Resend code"})]})]})]})})}function M(e){let{sendAuthCode:t,isEmailRegistered:n,setPassword:o}=e,[l,a]=(0,i.useState)("verifyEmailForm"),[s,u]=(0,i.useState)(""),[d,f]=(0,i.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:["verifyEmailForm"===l&&(0,r.jsx)(c,{email:s,sendAuthCode:t,isEmailRegistered:n,onEmailVerified:e=>{let{email:t,isActive:n}=e;u(t),f(!n),a("signInForm")}}),"signInForm"===l&&(0,r.jsx)(O,{email:s,onSendCode:()=>{a("verifyEmailForm"),f(!1)},sendAuthCode:t,shouldSetPassword:d,setPassword:o})]})}A.displayName="InputOTPSlot",i.forwardRef((e,t)=>{let{...n}=e;return(0,r.jsx)("div",{ref:t,role:"separator",...n,children:(0,r.jsx)(k,{})})}).displayName="InputOTPSeparator"},25704:function(e,t,n){"use strict";n.d(t,{Title:function(){return o}});var r=n(2265),i=n(20357);function o(e){let{children:t}=e;return(0,r.useEffect)(()=>{document.title=[i.env.NEXT_PUBLIC_APP_NAME,t].filter(e=>e).join(" - ")},[t]),(0,r.useEffect)(()=>()=>{document.title="".concat(i.env.NEXT_PUBLIC_APP_NAME)},[]),null}},50495:function(e,t,n){"use strict";n.d(t,{d:function(){return s},z:function(){return u}});var r=n(57437),i=n(2265),o=n(71538),l=n(12218),a=n(37440);let s=(0,l.j)("\n    inline-flex\n    items-center\n    justify-center\n    whitespace-nowrap\n    rounded-md\n    text-sm\n    font-medium\n    transition-colors\n    focus-visible:outline-none\n    disabled:pointer-events-none\n    disabled:opacity-50\n  ",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"border border-input bg-background hover:bg-primary/20","primary-outline":"border border-primary text-primary bg-transparent hover:bg-primary/20",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/90",ghost:"hover:bg-primary/20 hover:text-primary",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:n,variant:i,size:l,asChild:u=!1,...c}=e,d=u?o.g7:"button";return(0,r.jsx)(d,{className:(0,a.cn)(s({variant:i,size:l,className:n})),ref:t,...c})});u.displayName="Button"},83102:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(57437),i=n(2265),o=n(37440);let l=i.forwardRef((e,t)=>{let{className:n,type:i,noRing:l,error:a,...s}=e;return(0,r.jsx)("input",{type:i,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",l&&"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",a&&"border-danger",a&&!l&&"focus-visible:ring-danger",n),ref:t,...s})});l.displayName="Input"},53699:function(e,t,n){"use strict";n.d(t,{s:function(){return o}});var r=n(39099);let i={title:"",message:"",buttonLabel:"Ok",variant:"info",onClose:void 0},o=(0,r.Ue)(e=>({isOpen:!1,...i,alert:t=>e({isOpen:!0,...i,...t}),close:()=>e({isOpen:!1,onClose:void 0,...i})}))},37440:function(e,t,n){"use strict";n.d(t,{cn:function(){return o}});var r=n(44839),i=n(96164);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m6)((0,r.W)(t))}},78030:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2265);/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:c,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...l,width:i,height:i,stroke:n,strokeWidth:s?24*Number(a)/Number(i):a,className:o("lucide",u),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),s=(e,t)=>{let n=(0,r.forwardRef)((n,l)=>{let{className:s,...u}=n;return(0,r.createElement)(a,{ref:l,iconNode:t,className:o("lucide-".concat(i(e)),s),...u})});return n.displayName="".concat(e),n}},16463:function(e,t,n){"use strict";var r=n(71169);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},20357:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(88081)},88081:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var s=[],u=!1,c=-1;function d(){u&&r&&(u=!1,r.length?s=r.concat(s):c=-1,s.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=s.length;t;){for(r=s,s=[];++c<t;)r&&r[c].run();c=-1,t=s.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},l=!0;try{t[e](o,o.exports,r),l=!1}finally{l&&delete n[e]}return o.exports}r.ab="//";var i=r(229);e.exports=i}()},1584:function(e,t,n){"use strict";n.d(t,{F:function(){return i},e:function(){return o}});var r=n(2265);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return r.useCallback(i(...e),e)}},71538:function(e,t,n){"use strict";n.d(t,{A4:function(){return s},g7:function(){return l}});var r=n(2265),i=n(1584),o=n(57437),l=r.forwardRef((e,t)=>{let{children:n,...i}=e,l=r.Children.toArray(n),s=l.find(u);if(s){let e=s.props.children,n=l.map(t=>t!==s?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,o.jsx)(a,{...i,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,o.jsx)(a,{...i,ref:t,children:n})});l.displayName="Slot";var a=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e,l;let a=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...e)=>{o(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...o}:"className"===r&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?(0,i.F)(t,a):a})}return r.Children.count(n)>1?r.Children.only(null):null});a.displayName="SlotClone";var s=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function u(e){return r.isValidElement(e)&&e.type===s}},12218:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r},o=(e,t)=>n=>{var o;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:l,defaultVariants:a}=t,s=Object.keys(l).map(e=>{let t=null==n?void 0:n[e],i=null==a?void 0:a[e];if(null===t)return null;let o=r(t)||r(i);return l[e][o]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return i(e,s,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...a,...u}[t]):({...a,...u})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}},function(e){e.O(0,[4868,9343,6927,8472,998,7478,7023,1744],function(){return e(e.s=83091)}),_N_E=e.O()}]);
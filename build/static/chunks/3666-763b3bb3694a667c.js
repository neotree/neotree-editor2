"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3666],{25704:function(e,t,n){n.r(t),n.d(t,{Title:function(){return l}});var r=n(2265);function l(e){let{children:t}=e;return(0,r.useEffect)(()=>{document.title=["Neotree",t].filter(e=>e).join(" - ")},[t]),(0,r.useEffect)(()=>()=>{document.title="".concat("Neotree")},[]),null}},50495:function(e,t,n){n.d(t,{d:function(){return u},z:function(){return s}});var r=n(57437),l=n(2265),o=n(71538),i=n(12218),a=n(37440);let u=(0,i.j)("\n    inline-flex\n    items-center\n    justify-center\n    whitespace-nowrap\n    rounded-md\n    text-sm\n    font-medium\n    transition-colors\n    focus-visible:outline-none\n    disabled:pointer-events-none\n    disabled:opacity-50\n  ",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"border border-input bg-background hover:bg-primary/20","primary-outline":"border border-primary text-primary bg-transparent hover:bg-primary/20",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/90",ghost:"hover:bg-primary/20 hover:text-primary",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),s=l.forwardRef((e,t)=>{let{className:n,variant:l,size:i,asChild:s=!1,...c}=e,d=s?o.g7:"button";return(0,r.jsx)(d,{className:(0,a.cn)(u({variant:l,size:i,className:n})),ref:t,...c})});s.displayName="Button"},32243:function(e,t,n){n.d(t,{Zn:function(){return x},hf:function(){return E},cY:function(){return S}});var r=n(57437),l=n(2265),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&d(e,n,t[n]);return e},p=(e,t)=>i(e,a(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))0>t.indexOf(r)&&c.call(e,r)&&(n[r]=e[r]);return n},g=l.createContext({}),v=l.forwardRef((e,t)=>{let n;var r,o,i,a,u,{value:s,onChange:c,maxLength:d,textAlign:v="left",pattern:y="^\\d+$",inputMode:w="numeric",onComplete:x,pushPasswordManagerStrategy:E="increase-width",containerClassName:S,noScriptCSSFallback:C=b,render:k,children:j}=e,P=m(e,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]);let[R,N]=l.useState("string"==typeof P.defaultValue?P.defaultValue:""),M=null!=s?s:R,O=(n=l.useRef(),l.useEffect(()=>{n.current=M}),n.current),A=l.useCallback(e=>{null==c||c(e),N(e)},[c]),W=l.useMemo(()=>y?"string"==typeof y?new RegExp(y):y:null,[y]),D=l.useRef(null),T=l.useRef(null),B=l.useRef({value:M,onChange:A,isIOS:"undefined"!=typeof window&&(null==(o=null==(r=null==window?void 0:window.CSS)?void 0:r.supports)?void 0:o.call(r,"-webkit-touch-callout","none"))}),I=l.useRef({prev:[null==(i=D.current)?void 0:i.selectionStart,null==(a=D.current)?void 0:a.selectionEnd,null==(u=D.current)?void 0:u.selectionDirection]});l.useImperativeHandle(t,()=>D.current,[]),l.useEffect(()=>{let e=D.current,t=T.current;if(!e||!t)return;function n(){if(document.activeElement!==e){$(null),G(null);return}let t=e.selectionStart,n=e.selectionEnd,r=e.selectionDirection,l=e.maxLength,o=e.value,i=I.current.prev,a=-1,u=-1,s;if(0!==o.length&&null!==t&&null!==n){let e=t===n,r=t===o.length&&o.length<l;if(e&&!r){if(0===t)a=0,u=1,s="forward";else if(t===l)a=t-1,u=t,s="backward";else if(l>1&&o.length>1){let e=0;if(null!==i[0]&&null!==i[1]){s=t<i[1]?"backward":"forward";let n=i[0]===i[1]&&i[0]<l;"backward"!==s||n||(e=-1)}a=e+t,u=e+t+1}}-1!==a&&-1!==u&&a!==u&&D.current.setSelectionRange(a,u,s)}let c=-1!==a?a:t,d=-1!==u?u:n,f=null!=s?s:r;$(c),G(d),I.current.prev=[c,d,f]}if(B.current.value!==e.value&&B.current.onChange(e.value),I.current.prev=[e.selectionStart,e.selectionEnd,e.selectionDirection],document.addEventListener("selectionchange",n,{capture:!0}),n(),document.activeElement===e&&H(!0),!document.getElementById("input-otp-style")){let e=document.createElement("style");if(e.id="input-otp-style",document.head.appendChild(e),e.sheet){let t="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";h(e.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),h(e.sheet,`[data-input-otp]:autofill { ${t} }`),h(e.sheet,`[data-input-otp]:-webkit-autofill { ${t} }`),h(e.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),h(e.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let r=()=>{t&&t.style.setProperty("--root-height",`${e.clientHeight}px`)};r();let l=new ResizeObserver(r);return l.observe(e),()=>{document.removeEventListener("selectionchange",n,{capture:!0}),l.disconnect()}},[]);let[_,F]=l.useState(!1),[L,H]=l.useState(!1),[V,$]=l.useState(null),[z,G]=l.useState(null);l.useEffect(()=>{var e;setTimeout(e=()=>{var e,t,n,r;null==(e=D.current)||e.dispatchEvent(new Event("input"));let l=null==(t=D.current)?void 0:t.selectionStart,o=null==(n=D.current)?void 0:n.selectionEnd,i=null==(r=D.current)?void 0:r.selectionDirection;null!==l&&null!==o&&($(l),G(o),I.current.prev=[l,o,i])},0),setTimeout(e,10),setTimeout(e,50)},[M,L]),l.useEffect(()=>{void 0!==O&&M!==O&&O.length<d&&M.length===d&&(null==x||x(M))},[d,x,O,M]);let Z=function({containerRef:e,inputRef:t,pushPasswordManagerStrategy:n,isFocused:r}){let o=l.useRef({done:!1,refocused:!1}),[i,a]=l.useState(!1),[u,s]=l.useState(!1),[c,d]=l.useState(!1),f=l.useMemo(()=>"none"!==n&&("increase-width"===n||"experimental-no-flickering"===n)&&i&&u,[i,u,n]),p=l.useCallback(()=>{let r=e.current,l=t.current;if(!r||!l||c||"none"===n)return;let i=r.getBoundingClientRect().left+r.offsetWidth,u=r.getBoundingClientRect().top+r.offsetHeight/2;if(!(0===document.querySelectorAll('[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]').length&&document.elementFromPoint(i-18,u)===r)&&(a(!0),d(!0),!o.current.refocused&&document.activeElement===l)){let e=[l.selectionStart,l.selectionEnd];l.blur(),l.focus(),l.setSelectionRange(e[0],e[1]),o.current.refocused=!0}},[e,t,c,n]);return l.useEffect(()=>{let t=e.current;if(!t||"none"===n)return;function r(){s(window.innerWidth-t.getBoundingClientRect().right>=40)}r();let l=setInterval(r,1e3);return()=>{clearInterval(l)}},[e,n]),l.useEffect(()=>{let e=r||document.activeElement===t.current;if("none"===n||!e)return;let l=setTimeout(p,0),o=setTimeout(p,2e3),i=setTimeout(p,5e3),a=setTimeout(()=>{d(!0)},6e3);return()=>{clearTimeout(l),clearTimeout(o),clearTimeout(i),clearTimeout(a)}},[t,r,n,p]),{hasPWMBadge:i,willPushPWMBadge:f,PWM_BADGE_SPACE_WIDTH:"40px"}}({containerRef:T,inputRef:D,pushPasswordManagerStrategy:E,isFocused:L}),q=l.useCallback(e=>{let t=e.currentTarget.value.slice(0,d);if(t.length>0&&W&&!W.test(t)){e.preventDefault();return}"string"==typeof O&&t.length<O.length&&document.dispatchEvent(new Event("selectionchange")),A(t)},[d,A,O,W]),U=l.useCallback(()=>{var e;if(D.current){let t=Math.min(D.current.value.length,d-1),n=D.current.value.length;null==(e=D.current)||e.setSelectionRange(t,n),$(t),G(n)}H(!0)},[d]),Y=l.useCallback(e=>{var t,n;let r=D.current;if(!B.current.isIOS||!e.clipboardData||!r)return;let l=e.clipboardData.getData("text/plain");e.preventDefault();let o=null==(t=D.current)?void 0:t.selectionStart,i=null==(n=D.current)?void 0:n.selectionEnd,a=(o!==i?M.slice(0,o)+l+M.slice(i):M.slice(0,o)+l+M.slice(o)).slice(0,d);if(a.length>0&&W&&!W.test(a))return;r.value=a,A(a);let u=Math.min(a.length,d-1),s=a.length;r.setSelectionRange(u,s),$(u),G(s)},[d,A,W,M]),J=l.useMemo(()=>({position:"relative",cursor:P.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[P.disabled]),K=l.useMemo(()=>({position:"absolute",inset:0,width:Z.willPushPWMBadge?`calc(100% + ${Z.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:Z.willPushPWMBadge?`inset(0 ${Z.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:v,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[Z.PWM_BADGE_SPACE_WIDTH,Z.willPushPWMBadge,v]),Q=l.useMemo(()=>l.createElement("input",p(f({autoComplete:P.autoComplete||"one-time-code"},P),{"data-input-otp":!0,"data-input-otp-mss":V,"data-input-otp-mse":z,inputMode:w,pattern:null==W?void 0:W.source,style:K,maxLength:d,value:M,ref:D,onPaste:e=>{var t;Y(e),null==(t=P.onPaste)||t.call(P,e)},onChange:q,onMouseOver:e=>{var t;F(!0),null==(t=P.onMouseOver)||t.call(P,e)},onMouseLeave:e=>{var t;F(!1),null==(t=P.onMouseLeave)||t.call(P,e)},onFocus:e=>{var t;U(),null==(t=P.onFocus)||t.call(P,e)},onBlur:e=>{var t;H(!1),null==(t=P.onBlur)||t.call(P,e)}})),[q,U,Y,w,K,d,z,V,P,null==W?void 0:W.source,M]),X=l.useMemo(()=>({slots:Array.from({length:d}).map((e,t)=>{let n=L&&null!==V&&null!==z&&(V===z&&t===V||t>=V&&t<z),r=void 0!==M[t]?M[t]:null;return{char:r,isActive:n,hasFakeCaret:n&&null===r}}),isFocused:L,isHovering:!P.disabled&&_}),[L,_,d,z,V,P.disabled,M]),ee=l.useMemo(()=>k?k(X):l.createElement(g.Provider,{value:X},j),[j,X,k]);return l.createElement(l.Fragment,null,null!==C&&l.createElement("noscript",null,l.createElement("style",null,C)),l.createElement("div",{ref:T,"data-input-otp-container":!0,style:J,className:S},ee,l.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Q)))});function h(e,t){try{e.insertRule(t)}catch(e){console.error("input-otp could not insert CSS rule:",t)}}v.displayName="Input";var b=`
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
 */let y=(0,n(78030).Z)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);var w=n(37440);let x=l.forwardRef((e,t)=>{let{className:n,containerClassName:l,...o}=e;return(0,r.jsx)(v,{ref:t,containerClassName:(0,w.cn)("flex items-center gap-2 has-[:disabled]:opacity-50",l),className:(0,w.cn)("disabled:cursor-not-allowed",n),...o})});x.displayName="InputOTP";let E=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("div",{ref:t,className:(0,w.cn)("flex items-center",n),...l})});E.displayName="InputOTPGroup";let S=l.forwardRef((e,t)=>{let{index:n,className:o,...i}=e,{char:a,hasFakeCaret:u,isActive:s}=l.useContext(g).slots[n];return(0,r.jsxs)("div",{ref:t,className:(0,w.cn)("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",s&&"z-10 ring-2 ring-ring ring-offset-background",o),...i,children:[a,u&&(0,r.jsx)("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:(0,r.jsx)("div",{className:"h-4 w-px animate-caret-blink bg-foreground duration-1000"})})]})});S.displayName="InputOTPSlot",l.forwardRef((e,t)=>{let{...n}=e;return(0,r.jsx)("div",{ref:t,role:"separator",...n,children:(0,r.jsx)(y,{})})}).displayName="InputOTPSeparator"},83102:function(e,t,n){n.d(t,{I:function(){return i}});var r=n(57437),l=n(2265),o=n(37440);let i=l.forwardRef((e,t)=>{let{className:n,type:l,noRing:i,error:a,...u}=e;return(0,r.jsx)("input",{type:l,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",i&&"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",a&&"border-danger",a&&!i&&"focus-visible:ring-danger",n),ref:t,...u})});i.displayName="Input"},37440:function(e,t,n){n.d(t,{cn:function(){return o}});var r=n(44839),l=n(96164);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,l.m6)((0,r.W)(t))}},78030:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2265);/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:u,className:s="",children:c,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...i,width:l,height:l,stroke:n,strokeWidth:u?24*Number(a)/Number(l):a,className:o("lucide",s),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),u=(e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:u,...s}=n;return(0,r.createElement)(a,{ref:i,iconNode:t,className:o("lucide-".concat(l(e)),u),...s})});return n.displayName="".concat(e),n}},1584:function(e,t,n){n.d(t,{F:function(){return l},e:function(){return o}});var r=n(2265);function l(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return r.useCallback(l(...e),e)}},71538:function(e,t,n){n.d(t,{A4:function(){return u},g7:function(){return i}});var r=n(2265),l=n(1584),o=n(57437),i=r.forwardRef((e,t)=>{let{children:n,...l}=e,i=r.Children.toArray(n),u=i.find(s);if(u){let e=u.props.children,n=i.map(t=>t!==u?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,o.jsx)(a,{...l,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,o.jsx)(a,{...l,ref:t,children:n})});i.displayName="Slot";var a=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e,i;let a=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let l=e[r],o=t[r];/^on[A-Z]/.test(r)?l&&o?n[r]=(...e)=>{o(...e),l(...e)}:l&&(n[r]=l):"style"===r?n[r]={...l,...o}:"className"===r&&(n[r]=[l,o].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?(0,l.F)(t,a):a})}return r.Children.count(n)>1?r.Children.only(null):null});a.displayName="SlotClone";var u=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===u}},12218:function(e,t,n){n.d(t,{j:function(){return o}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(l&&(l+=" "),l+=r);else for(n in t)t[n]&&(l&&(l+=" "),l+=n)}return l}(e))&&(r&&(r+=" "),r+=t);return r},o=(e,t)=>n=>{var o;if((null==t?void 0:t.variants)==null)return l(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:a}=t,u=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],l=null==a?void 0:a[e];if(null===t)return null;let o=r(t)||r(l);return i[e][o]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return l(e,u,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:n,className:r,...l}=t;return Object.entries(l).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...a,...s}[t]):({...a,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);
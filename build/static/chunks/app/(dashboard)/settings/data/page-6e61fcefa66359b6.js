(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2128],{80573:function(e,t,r){Promise.resolve().then(r.bind(r,76047)),Promise.resolve().then(r.bind(r,25704)),Promise.resolve().then(r.t.bind(r,231,23))},76047:function(e,t,r){"use strict";r.d(t,{StatsCard:function(){return a}});var n=r(57437),i=r(87138),s=r(23787),o=r(36013),c=r(78448);function a(e){let{children:t,mainCount:r,title:a,externalLink:l,moreStats:u=[],errors:f=[]}=e;return f.length?(0,n.jsx)(o.Zb,{className:"text-danger border-danger bg-danger/10 flex items-center justify-center",children:(0,n.jsx)(o.aY,{className:"p-4 text-xl text-center",children:f.join("\n")})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Zb,{children:(0,n.jsxs)(o.aY,{className:"p-4 relative",children:[!!l&&(0,n.jsx)(i.default,{href:l,className:"absolute top-4 right-4",children:(0,n.jsx)(s.Z,{className:"transition-colors text-muted-foreground hover:text-primary h-4 w-4 ml-2"})}),(0,n.jsxs)("div",{className:"flex items-centerflex flex-col items-start gap-y-4 sm:flex-row sm:items-center",children:[(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("div",{className:"text-sm mb-1",children:a}),(0,n.jsx)("div",{className:"text-4xl font-bold mb-1",children:(0,c.c)(r)}),!!u.length&&(0,n.jsx)("div",{className:"text-xs flex flex-col gap-y-1",children:u.map((e,t)=>{let{count:r,label:i}=e;return(0,n.jsxs)("div",{children:[(0,c.c)(r),"\xa0",(0,n.jsx)("span",{className:"text-muted-foreground",children:i})]},t)})})]}),(0,n.jsx)("div",{children:t})]})]})})})}},25704:function(e,t,r){"use strict";r.d(t,{Title:function(){return s}});var n=r(2265),i=r(20357);function s(e){let{children:t}=e;return(0,n.useEffect)(()=>{document.title=[i.env.NEXT_PUBLIC_APP_NAME,t].filter(e=>e).join(" - ")},[t]),(0,n.useEffect)(()=>()=>{document.title="".concat(i.env.NEXT_PUBLIC_APP_NAME)},[]),null}},36013:function(e,t,r){"use strict";r.d(t,{Ol:function(){return c},SZ:function(){return l},Zb:function(){return o},aY:function(){return u},ll:function(){return a}});var n=r(57437),i=r(2265),s=r(37440);let o=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...i})});o.displayName="Card";let c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...i})});c.displayName="CardHeader";let a=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...i})});a.displayName="CardTitle";let l=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...i})});l.displayName="CardDescription";let u=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...i})});u.displayName="CardContent",i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...i})}).displayName="CardFooter"},78448:function(e,t,r){"use strict";function n(e,t){let{decimals:r=0,separator:n=" "}={...t};isNaN(e=Number("".concat(e).replace(/[^a-z0-9.]+/gi,"")))&&(e="0");let i=(e="".concat(Number(e).toFixed(r>=0?r:2))).toString().split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,n),i.join(".")}r.d(t,{c:function(){return n}})},37440:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(44839),i=r(96164);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,n.W)(t))}},23787:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(78030).Z)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]])},87138:function(e,t,r){"use strict";r.d(t,{default:function(){return i.a}});var n=r(231),i=r.n(n)},20357:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(88081)},88081:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var a=[],l=!1,u=-1;function f(){l&&n&&(l=!1,n.length?a=n.concat(a):u=-1,a.length&&d())}function d(){if(!l){var e=c(f);l=!0;for(var t=a.length;t;){for(n=a,a=[];++u<t;)n&&n[u].run();u=-1,t=a.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new m(e,t)),1!==a.length||l||c(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()}},function(e){e.O(0,[8502,231,7478,7023,1744],function(){return e(e.s=80573)}),_N_E=e.O()}]);
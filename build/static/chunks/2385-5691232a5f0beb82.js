"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2385],{22468:function(t,e,n){n.d(e,{Z:function(){return r}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},87592:function(t,e,n){n.d(e,{Z:function(){return r}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},25510:function(t,e,n){n.d(e,{ee:function(){return tZ},Eh:function(){return t$},VY:function(){return tq},fC:function(){return tX},D7:function(){return tO}});var r=n(2265);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,a=Math.round,f=Math.floor,u=t=>({x:t,y:t}),c={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function d(t,e){return"function"==typeof t?t(e):t}function p(t){return t.split("-")[0]}function h(t){return t.split("-")[1]}function m(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function y(t){return["top","bottom"].includes(p(t))?"y":"x"}function v(t){return t.replace(/start|end/g,t=>s[t])}function w(t){return t.replace(/left|right|bottom|top/g,t=>c[t])}function x(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function b(t){let{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function R(t,e,n){let r,{reference:i,floating:o}=t,l=y(e),a=m(y(e)),f=g(a),u=p(e),c="y"===l,s=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,v=i[f]/2-o[f]/2;switch(u){case"top":r={x:s,y:i.y-o.height};break;case"bottom":r={x:s,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(h(e)){case"start":r[a]-=v*(n&&c?-1:1);break;case"end":r[a]+=v*(n&&c?-1:1)}return r}let A=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(e)),u=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:c,y:s}=R(u,r,f),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:g,y:y,data:v,reset:w}=await m({x:c,y:s,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:u,platform:l,elements:{reference:t,floating:e}});c=null!=g?g:c,s=null!=y?y:s,p={...p,[o]:{...p[o],...v}},w&&h<=50&&(h++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(u=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:c,y:s}=R(u,d,f)),n=-1)}return{x:c,y:s,placement:d,strategy:i,middlewareData:p}};async function E(t,e){var n;void 0===e&&(e={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:f}=t,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:s="floating",altBoundary:p=!1,padding:h=0}=d(e,t),m=x(h),g=a[p?"floating"===s?"reference":"floating":s],y=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:f})),v="floating"===s?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),R=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},A=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:w,strategy:f}):v);return{top:(y.top-A.top+m.top)/R.y,bottom:(A.bottom-y.bottom+m.bottom)/R.y,left:(y.left-A.left+m.left)/R.x,right:(A.right-y.right+m.right)/R.x}}function L(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function S(t){return i.some(e=>t[e]>=0)}async function T(t,e){let{placement:n,platform:r,elements:i}=t,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),a=h(n),f="y"===y(n),u=["left","top"].includes(l)?-1:1,c=o&&f?-1:1,s=d(e,t),{mainAxis:m,crossAxis:g,alignmentAxis:v}="number"==typeof s?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...s};return a&&"number"==typeof v&&(g="end"===a?-1*v:v),f?{x:g*c,y:m*u}:{x:m*u,y:g*c}}function C(t){return k(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function P(t){var e;return null==(e=(k(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function k(t){return t instanceof Node||t instanceof O(t).Node}function H(t){return t instanceof Element||t instanceof O(t).Element}function W(t){return t instanceof HTMLElement||t instanceof O(t).HTMLElement}function D(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof O(t).ShadowRoot)}function F(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function M(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function j(t){let e=V(),n=N(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function V(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function z(t){return["html","body","#document"].includes(C(t))}function N(t){return O(t).getComputedStyle(t)}function B(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function _(t){if("html"===C(t))return t;let e=t.assignedSlot||t.parentNode||D(t)&&t.host||P(t);return D(e)?e.host:e}function Y(t,e,n){var r;void 0===e&&(e=[]),void 0===n&&(n=!0);let i=function t(e){let n=_(e);return z(n)?e.ownerDocument?e.ownerDocument.body:e.body:W(n)&&F(n)?n:t(n)}(t),o=i===(null==(r=t.ownerDocument)?void 0:r.body),l=O(i);return o?e.concat(l,l.visualViewport||[],F(i)?i:[],l.frameElement&&n?Y(l.frameElement):[]):e.concat(i,Y(i,[],n))}function I(t){let e=N(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=W(t),o=i?t.offsetWidth:n,l=i?t.offsetHeight:r,f=a(n)!==o||a(r)!==l;return f&&(n=o,r=l),{width:n,height:r,$:f}}function X(t){return H(t)?t:t.contextElement}function Z(t){let e=X(t);if(!W(e))return u(1);let n=e.getBoundingClientRect(),{width:r,height:i,$:o}=I(e),l=(o?a(n.width):n.width)/r,f=(o?a(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),f&&Number.isFinite(f)||(f=1),{x:l,y:f}}let q=u(0);function $(t){let e=O(t);return V()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:q}function G(t,e,n,r){var i;void 0===e&&(e=!1),void 0===n&&(n=!1);let o=t.getBoundingClientRect(),l=X(t),a=u(1);e&&(r?H(r)&&(a=Z(r)):a=Z(t));let f=(void 0===(i=n)&&(i=!1),r&&(!i||r===O(l))&&i)?$(l):u(0),c=(o.left+f.x)/a.x,s=(o.top+f.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let t=O(l),e=r&&H(r)?O(r):r,n=t,i=n.frameElement;for(;i&&r&&e!==n;){let t=Z(i),e=i.getBoundingClientRect(),r=N(i),o=e.left+(i.clientLeft+parseFloat(r.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(r.paddingTop))*t.y;c*=t.x,s*=t.y,d*=t.x,p*=t.y,c+=o,s+=l,i=(n=O(i)).frameElement}}return b({width:d,height:p,x:c,y:s})}function J(t){return G(P(t)).left+B(t).scrollLeft}function K(t,e,n){let r;if("viewport"===e)r=function(t,e){let n=O(t),r=P(t),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,f=0;if(i){o=i.width,l=i.height;let t=V();(!t||t&&"fixed"===e)&&(a=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:a,y:f}}(t,n);else if("document"===e)r=function(t){let e=P(t),n=B(t),r=t.ownerDocument.body,i=l(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=l(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+J(t),f=-n.scrollTop;return"rtl"===N(r).direction&&(a+=l(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:f}}(P(t));else if(H(e))r=function(t,e){let n=G(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=W(t)?Z(t):u(1),l=t.clientWidth*o.x;return{width:l,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{let n=$(t);r={...e,x:e.x-n.x,y:e.y-n.y}}return b(r)}function Q(t){return"static"===N(t).position}function U(t,e){return W(t)&&"fixed"!==N(t).position?e?e(t):t.offsetParent:null}function tt(t,e){let n=O(t);if(M(t))return n;if(!W(t)){let e=_(t);for(;e&&!z(e);){if(H(e)&&!Q(e))return e;e=_(e)}return n}let r=U(t,e);for(;r&&["table","td","th"].includes(C(r))&&Q(r);)r=U(r,e);return r&&z(r)&&Q(r)&&!j(r)?n:r||function(t){let e=_(t);for(;W(e)&&!z(e)&&!M(e);){if(j(e))return e;e=_(e)}return null}(t)||n}let te=async function(t){let e=this.getOffsetParent||tt,n=this.getDimensions,r=await n(t.floating);return{reference:function(t,e,n){let r=W(e),i=P(e),o="fixed"===n,l=G(t,!0,o,e),a={scrollLeft:0,scrollTop:0},f=u(0);if(r||!r&&!o){if(("body"!==C(e)||F(i))&&(a=B(e)),r){let t=G(e,!0,o,e);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else i&&(f.x=J(i))}return{x:l.left+a.scrollLeft-f.x,y:l.top+a.scrollTop-f.y,width:l.width,height:l.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},tn={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t,o="fixed"===i,l=P(r),a=!!e&&M(e.floating);if(r===l||a&&o)return n;let f={scrollLeft:0,scrollTop:0},c=u(1),s=u(0),d=W(r);if((d||!d&&!o)&&(("body"!==C(r)||F(l))&&(f=B(r)),W(r))){let t=G(r);c=Z(r),s.x=t.x+r.clientLeft,s.y=t.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-f.scrollLeft*c.x+s.x,y:n.y*c.y-f.scrollTop*c.y+s.y}},getDocumentElement:P,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t,a=[..."clippingAncestors"===n?M(e)?[]:function(t,e){let n=e.get(t);if(n)return n;let r=Y(t,[],!1).filter(t=>H(t)&&"body"!==C(t)),i=null,o="fixed"===N(t).position,l=o?_(t):t;for(;H(l)&&!z(l);){let e=N(l),n=j(l);n||"fixed"!==e.position||(i=null),(o?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||F(l)&&!n&&function t(e,n){let r=_(e);return!(r===n||!H(r)||z(r))&&("fixed"===N(r).position||t(r,n))}(t,l))?r=r.filter(t=>t!==l):i=e,l=_(l)}return e.set(t,r),r}(e,this._c):[].concat(n),r],f=a[0],u=a.reduce((t,n)=>{let r=K(e,n,i);return t.top=l(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=l(r.left,t.left),t},K(e,f,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},getOffsetParent:tt,getElementRects:te,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=I(t);return{width:e,height:n}},getScale:Z,isElement:H,isRTL:function(t){return"rtl"===N(t).direction}},tr=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:r,placement:i,rects:a,platform:f,elements:u,middlewareData:c}=e,{element:s,padding:p=0}=d(t,e)||{};if(null==s)return{};let v=x(p),w={x:n,y:r},b=m(y(i)),R=g(b),A=await f.getDimensions(s),E="y"===b,L=E?"clientHeight":"clientWidth",S=a.reference[R]+a.reference[b]-w[b]-a.floating[R],T=w[b]-a.reference[b],C=await (null==f.getOffsetParent?void 0:f.getOffsetParent(s)),O=C?C[L]:0;O&&await (null==f.isElement?void 0:f.isElement(C))||(O=u.floating[L]||a.floating[R]);let P=O/2-A[R]/2-1,k=o(v[E?"top":"left"],P),H=o(v[E?"bottom":"right"],P),W=O-A[R]-H,D=O/2-A[R]/2+(S/2-T/2),F=l(k,o(D,W)),M=!c.arrow&&null!=h(i)&&D!==F&&a.reference[R]/2-(D<k?k:H)-A[R]/2<0,j=M?D<k?D-k:D-W:0;return{[b]:w[b]+j,data:{[b]:F,centerOffset:D-F-j,...M&&{alignmentOffset:j}},reset:M}}}),ti=(t,e,n)=>{let r=new Map,i={platform:tn,...n},o={...i.platform,_c:r};return A(t,e,{...i,platform:o})};var to=n(54887),tl="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function ta(t,e){let n,r,i;if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if((n=t.length)!==e.length)return!1;for(r=n;0!=r--;)if(!ta(t[r],e[r]))return!1;return!0}if((n=(i=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(e,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!t.$$typeof)&&!ta(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function tf(t){return"undefined"==typeof window?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function tu(t,e){let n=tf(t);return Math.round(e*n)/n}function tc(t){let e=r.useRef(t);return tl(()=>{e.current=t}),e}let ts=t=>({name:"arrow",options:t,fn(e){let{element:n,padding:r}="function"==typeof t?t(e):t;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?tr({element:n.current,padding:r}).fn(e):{}:n?tr({element:n,padding:r}).fn(e):{}}}),td=(t,e)=>{var n;return{...(void 0===(n=t)&&(n=0),{name:"offset",options:n,async fn(t){var e,r;let{x:i,y:o,placement:l,middlewareData:a}=t,f=await T(t,n);return l===(null==(e=a.offset)?void 0:e.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:l}}}}),options:[t,e]}},tp=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"shift",options:n,async fn(t){let{x:e,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:f=!1,limiter:u={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=d(n,t),s={x:e,y:r},h=await E(t,c),g=y(p(i)),v=m(g),w=s[v],x=s[g];if(a){let t="y"===v?"top":"left",e="y"===v?"bottom":"right",n=w+h[t],r=w-h[e];w=l(n,o(w,r))}if(f){let t="y"===g?"top":"left",e="y"===g?"bottom":"right",n=x+h[t],r=x-h[e];x=l(n,o(x,r))}let b=u.fn({...t,[v]:w,[g]:x});return{...b,data:{x:b.x-e,y:b.y-r}}}}),options:[t,e]}},th=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{options:n,fn(t){let{x:e,y:r,placement:i,rects:o,middlewareData:l}=t,{offset:a=0,mainAxis:f=!0,crossAxis:u=!0}=d(n,t),c={x:e,y:r},s=y(i),h=m(s),g=c[h],v=c[s],w=d(a,t),x="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(f){let t="y"===h?"height":"width",e=o.reference[h]-o.floating[t]+x.mainAxis,n=o.reference[h]+o.reference[t]-x.mainAxis;g<e?g=e:g>n&&(g=n)}if(u){var b,R;let t="y"===h?"width":"height",e=["top","left"].includes(p(i)),n=o.reference[s]-o.floating[t]+(e&&(null==(b=l.offset)?void 0:b[s])||0)+(e?0:x.crossAxis),r=o.reference[s]+o.reference[t]+(e?0:(null==(R=l.offset)?void 0:R[s])||0)-(e?x.crossAxis:0);v<n?v=n:v>r&&(v=r)}return{[h]:g,[s]:v}}}),options:[t,e]}},tm=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"flip",options:n,async fn(t){var e,r,i,o,l;let{placement:a,middlewareData:f,rects:u,initialPlacement:c,platform:s,elements:x}=t,{mainAxis:b=!0,crossAxis:R=!0,fallbackPlacements:A,fallbackStrategy:L="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:T=!0,...C}=d(n,t);if(null!=(e=f.arrow)&&e.alignmentOffset)return{};let O=p(a),P=y(c),k=p(c)===c,H=await (null==s.isRTL?void 0:s.isRTL(x.floating)),W=A||(k||!T?[w(c)]:function(t){let e=w(t);return[v(t),e,v(e)]}(c)),D="none"!==S;!A&&D&&W.push(...function(t,e,n,r){let i=h(t),o=function(t,e,n){let r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":if(n)return e?i:r;return e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(p(t),"start"===n,r);return i&&(o=o.map(t=>t+"-"+i),e&&(o=o.concat(o.map(v)))),o}(c,T,S,H));let F=[c,...W],M=await E(t,C),j=[],V=(null==(r=f.flip)?void 0:r.overflows)||[];if(b&&j.push(M[O]),R){let t=function(t,e,n){void 0===n&&(n=!1);let r=h(t),i=m(y(t)),o=g(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(l=w(l)),[l,w(l)]}(a,u,H);j.push(M[t[0]],M[t[1]])}if(V=[...V,{placement:a,overflows:j}],!j.every(t=>t<=0)){let t=((null==(i=f.flip)?void 0:i.index)||0)+1,e=F[t];if(e)return{data:{index:t,overflows:V},reset:{placement:e}};let n=null==(o=V.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:o.placement;if(!n)switch(L){case"bestFit":{let t=null==(l=V.filter(t=>{if(D){let e=y(t.placement);return e===P||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:l[0];t&&(n=t);break}case"initialPlacement":n=c}if(a!==n)return{reset:{placement:n}}}return{}}}),options:[t,e]}},tg=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"size",options:n,async fn(t){let e,r;let{placement:i,rects:a,platform:f,elements:u}=t,{apply:c=()=>{},...s}=d(n,t),m=await E(t,s),g=p(i),v=h(i),w="y"===y(i),{width:x,height:b}=a.floating;"top"===g||"bottom"===g?(e=g,r=v===(await (null==f.isRTL?void 0:f.isRTL(u.floating))?"start":"end")?"left":"right"):(r=g,e="end"===v?"top":"bottom");let R=b-m.top-m.bottom,A=x-m.left-m.right,L=o(b-m[e],R),S=o(x-m[r],A),T=!t.middlewareData.shift,C=L,O=S;if(w?O=v||T?o(S,A):A:C=v||T?o(L,R):R,T&&!v){let t=l(m.left,0),e=l(m.right,0),n=l(m.top,0),r=l(m.bottom,0);w?O=x-2*(0!==t||0!==e?t+e:l(m.left,m.right)):C=b-2*(0!==n||0!==r?n+r:l(m.top,m.bottom))}await c({...t,availableWidth:O,availableHeight:C});let P=await f.getDimensions(u.floating);return x!==P.width||b!==P.height?{reset:{rects:!0}}:{}}}),options:[t,e]}},ty=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"hide",options:n,async fn(t){let{rects:e}=t,{strategy:r="referenceHidden",...i}=d(n,t);switch(r){case"referenceHidden":{let n=L(await E(t,{...i,elementContext:"reference"}),e.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:S(n)}}}case"escaped":{let n=L(await E(t,{...i,altBoundary:!0}),e.floating);return{data:{escapedOffsets:n,escaped:S(n)}}}default:return{}}}}),options:[t,e]}},tv=(t,e)=>({...ts(t),options:[t,e]});var tw=n(25171),tx=n(57437),tb=r.forwardRef((t,e)=>{let{children:n,width:r=10,height:i=5,...o}=t;return(0,tx.jsx)(tw.WV.svg,{...o,ref:e,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:(0,tx.jsx)("polygon",{points:"0,0 30,0 15,10"})})});tb.displayName="Arrow";var tR=n(1584),tA=n(98324),tE=n(75137),tL=n(1336),tS=n(75238),tT="Popper",[tC,tO]=(0,tA.b)(tT),[tP,tk]=tC(tT),tH=t=>{let{__scopePopper:e,children:n}=t,[i,o]=r.useState(null);return(0,tx.jsx)(tP,{scope:e,anchor:i,onAnchorChange:o,children:n})};tH.displayName=tT;var tW="PopperAnchor",tD=r.forwardRef((t,e)=>{let{__scopePopper:n,virtualRef:i,...o}=t,l=tk(tW,n),a=r.useRef(null),f=(0,tR.e)(e,a);return r.useEffect(()=>{l.onAnchorChange((null==i?void 0:i.current)||a.current)}),i?null:(0,tx.jsx)(tw.WV.div,{...o,ref:f})});tD.displayName=tW;var tF="PopperContent",[tM,tj]=tC(tF),tV=r.forwardRef((t,e)=>{var n,i,a,u,c,s,d,p;let{__scopePopper:h,side:m="bottom",sideOffset:g=0,align:y="center",alignOffset:v=0,arrowPadding:w=0,avoidCollisions:x=!0,collisionBoundary:b=[],collisionPadding:R=0,sticky:A="partial",hideWhenDetached:E=!1,updatePositionStrategy:L="optimized",onPlaced:S,...T}=t,C=tk(tF,h),[O,k]=r.useState(null),H=(0,tR.e)(e,t=>k(t)),[W,D]=r.useState(null),F=(0,tS.t)(W),M=null!==(d=null==F?void 0:F.width)&&void 0!==d?d:0,j=null!==(p=null==F?void 0:F.height)&&void 0!==p?p:0,V="number"==typeof R?R:{top:0,right:0,bottom:0,left:0,...R},z=Array.isArray(b)?b:[b],N=z.length>0,B={padding:V,boundary:z.filter(t_),altBoundary:N},{refs:_,floatingStyles:I,placement:Z,isPositioned:q,middlewareData:$}=function(t){void 0===t&&(t={});let{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:f=!0,whileElementsMounted:u,open:c}=t,[s,d]=r.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(i);ta(p,i)||h(i);let[m,g]=r.useState(null),[y,v]=r.useState(null),w=r.useCallback(t=>{t!==A.current&&(A.current=t,g(t))},[]),x=r.useCallback(t=>{t!==E.current&&(E.current=t,v(t))},[]),b=l||m,R=a||y,A=r.useRef(null),E=r.useRef(null),L=r.useRef(s),S=null!=u,T=tc(u),C=tc(o),O=r.useCallback(()=>{if(!A.current||!E.current)return;let t={placement:e,strategy:n,middleware:p};C.current&&(t.platform=C.current),ti(A.current,E.current,t).then(t=>{let e={...t,isPositioned:!0};P.current&&!ta(L.current,e)&&(L.current=e,to.flushSync(()=>{d(e)}))})},[p,e,n,C]);tl(()=>{!1===c&&L.current.isPositioned&&(L.current.isPositioned=!1,d(t=>({...t,isPositioned:!1})))},[c]);let P=r.useRef(!1);tl(()=>(P.current=!0,()=>{P.current=!1}),[]),tl(()=>{if(b&&(A.current=b),R&&(E.current=R),b&&R){if(T.current)return T.current(b,R,O);O()}},[b,R,O,T,S]);let k=r.useMemo(()=>({reference:A,floating:E,setReference:w,setFloating:x}),[w,x]),H=r.useMemo(()=>({reference:b,floating:R}),[b,R]),W=r.useMemo(()=>{let t={position:n,left:0,top:0};if(!H.floating)return t;let e=tu(H.floating,s.x),r=tu(H.floating,s.y);return f?{...t,transform:"translate("+e+"px, "+r+"px)",...tf(H.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:e,top:r}},[n,f,H.floating,s.x,s.y]);return r.useMemo(()=>({...s,update:O,refs:k,elements:H,floatingStyles:W}),[s,O,k,H,W])}({strategy:"fixed",placement:m+("center"!==y?"-"+y:""),whileElementsMounted:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t,e,n,r){let i;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=X(t),h=a||u?[...p?Y(p):[],...Y(e)]:[];h.forEach(t=>{a&&t.addEventListener("scroll",n,{passive:!0}),u&&t.addEventListener("resize",n)});let m=p&&s?function(t,e){let n,r=null,i=P(t);function a(){var t;clearTimeout(n),null==(t=r)||t.disconnect(),r=null}return!function u(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),a();let{left:d,top:p,width:h,height:m}=t.getBoundingClientRect();if(c||e(),!h||!m)return;let g=f(p),y=f(i.clientWidth-(d+h)),v={rootMargin:-g+"px "+-y+"px "+-f(i.clientHeight-(p+m))+"px "+-f(d)+"px",threshold:l(0,o(1,s))||1},w=!0;function x(t){let e=t[0].intersectionRatio;if(e!==s){if(!w)return u();e?u(!1,e):n=setTimeout(()=>{u(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...v,root:i.ownerDocument})}catch(t){r=new IntersectionObserver(x,v)}r.observe(t)}(!0),a}(p,n):null,g=-1,y=null;c&&(y=new ResizeObserver(t=>{let[r]=t;r&&r.target===p&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var t;null==(t=y)||t.observe(e)})),n()}),p&&!d&&y.observe(p),y.observe(e));let v=d?G(t):null;return d&&function e(){let r=G(t);v&&(r.x!==v.x||r.y!==v.y||r.width!==v.width||r.height!==v.height)&&n(),v=r,i=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach(t=>{a&&t.removeEventListener("scroll",n),u&&t.removeEventListener("resize",n)}),null==m||m(),null==(t=y)||t.disconnect(),y=null,d&&cancelAnimationFrame(i)}}(...e,{animationFrame:"always"===L})},elements:{reference:C.anchor},middleware:[td({mainAxis:g+j,alignmentAxis:v}),x&&tp({mainAxis:!0,crossAxis:!1,limiter:"partial"===A?th():void 0,...B}),x&&tm({...B}),tg({...B,apply:t=>{let{elements:e,rects:n,availableWidth:r,availableHeight:i}=t,{width:o,height:l}=n.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width","".concat(r,"px")),a.setProperty("--radix-popper-available-height","".concat(i,"px")),a.setProperty("--radix-popper-anchor-width","".concat(o,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),W&&tv({element:W,padding:w}),tY({arrowWidth:M,arrowHeight:j}),E&&ty({strategy:"referenceHidden",...B})]}),[J,K]=tI(Z),Q=(0,tE.W)(S);(0,tL.b)(()=>{q&&(null==Q||Q())},[q,Q]);let U=null===(n=$.arrow)||void 0===n?void 0:n.x,tt=null===(i=$.arrow)||void 0===i?void 0:i.y,te=(null===(a=$.arrow)||void 0===a?void 0:a.centerOffset)!==0,[tn,tr]=r.useState();return(0,tL.b)(()=>{O&&tr(window.getComputedStyle(O).zIndex)},[O]),(0,tx.jsx)("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...I,transform:q?I.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:tn,"--radix-popper-transform-origin":[null===(u=$.transformOrigin)||void 0===u?void 0:u.x,null===(c=$.transformOrigin)||void 0===c?void 0:c.y].join(" "),...(null===(s=$.hide)||void 0===s?void 0:s.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,tx.jsx)(tM,{scope:h,placedSide:J,onArrowChange:D,arrowX:U,arrowY:tt,shouldHideArrow:te,children:(0,tx.jsx)(tw.WV.div,{"data-side":J,"data-align":K,...T,ref:H,style:{...T.style,animation:q?void 0:"none"}})})})});tV.displayName=tF;var tz="PopperArrow",tN={top:"bottom",right:"left",bottom:"top",left:"right"},tB=r.forwardRef(function(t,e){let{__scopePopper:n,...r}=t,i=tj(tz,n),o=tN[i.placedSide];return(0,tx.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,tx.jsx)(tb,{...r,ref:e,style:{...r.style,display:"block"}})})});function t_(t){return null!==t}tB.displayName=tz;var tY=t=>({name:"transformOrigin",options:t,fn(e){var n,r,i,o,l;let{placement:a,rects:f,middlewareData:u}=e,c=(null===(n=u.arrow)||void 0===n?void 0:n.centerOffset)!==0,s=c?0:t.arrowWidth,d=c?0:t.arrowHeight,[p,h]=tI(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(o=null===(r=u.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+s/2,y=(null!==(l=null===(i=u.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+d/2,v="",w="";return"bottom"===p?(v=c?m:"".concat(g,"px"),w="".concat(-d,"px")):"top"===p?(v=c?m:"".concat(g,"px"),w="".concat(f.floating.height+d,"px")):"right"===p?(v="".concat(-d,"px"),w=c?m:"".concat(y,"px")):"left"===p&&(v="".concat(f.floating.width+d,"px"),w=c?m:"".concat(y,"px")),{data:{x:v,y:w}}}});function tI(t){let[e,n="center"]=t.split("-");return[e,n]}var tX=tH,tZ=tD,tq=tV,t$=tB},75238:function(t,e,n){n.d(e,{t:function(){return o}});var r=n(2265),i=n(1336);function o(t){let[e,n]=r.useState(void 0);return(0,i.b)(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});let e=new ResizeObserver(e=>{let r,i;if(!Array.isArray(e)||!e.length)return;let o=e[0];if("borderBoxSize"in o){let t=o.borderBoxSize,e=Array.isArray(t)?t[0]:t;r=e.inlineSize,i=e.blockSize}else r=t.offsetWidth,i=t.offsetHeight;n({width:r,height:i})});return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}n(void 0)},[t]),e}}}]);
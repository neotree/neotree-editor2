"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8502],{78030:function(e,r,o){o.d(r,{Z:function(){return a}});var t=o(2265);/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return r.filter((e,r,o)=>!!e&&o.indexOf(e)===r).join(" ")};/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,t.forwardRef)((e,r)=>{let{color:o="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:d,iconNode:u,...p}=e;return(0,t.createElement)("svg",{ref:r,...i,width:n,height:n,stroke:o,strokeWidth:a?24*Number(s)/Number(n):s,className:l("lucide",c),...p},[...u.map(e=>{let[r,o]=e;return(0,t.createElement)(r,o)}),...Array.isArray(d)?d:[d]])}),a=(e,r)=>{let o=(0,t.forwardRef)((o,i)=>{let{className:a,...c}=o;return(0,t.createElement)(s,{ref:i,iconNode:r,className:l("lucide-".concat(n(e)),a),...c})});return o.displayName="".concat(e),o}},44839:function(e,r,o){function t(){for(var e,r,o=0,t="",n=arguments.length;o<n;o++)(e=arguments[o])&&(r=function e(r){var o,t,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(o=0;o<l;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(t&&(t+=" "),t+=r);return t}o.d(r,{W:function(){return t}}),r.Z=t},96164:function(e,r,o){o.d(r,{m6:function(){return O}});let t=/^\[(.+)\]$/;function n(e,r){let o=e;return r.split("-").forEach(e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o}let l=/\s+/;function i(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=function e(r){let o;if("string"==typeof r)return r;let t="";for(let n=0;n<r.length;n++)r[n]&&(o=e(r[n]))&&(t&&(t+=" "),t+=o);return t}(e))&&(t&&(t+=" "),t+=r);return t}function s(e){let r=r=>r[e]||[];return r.isThemeGetter=!0,r}let a=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,p=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,b=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,f=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,m=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function g(e){return w(e)||d.has(e)||c.test(e)}function h(e){return $(e,"length",M)}function w(e){return!!e&&!Number.isNaN(Number(e))}function x(e){return $(e,"number",w)}function y(e){return!!e&&Number.isInteger(Number(e))}function v(e){return e.endsWith("%")&&w(e.slice(0,-1))}function k(e){return a.test(e)}function z(e){return u.test(e)}let j=new Set(["length","size","percentage"]);function C(e){return $(e,j,I)}function N(e){return $(e,"position",I)}let E=new Set(["image","url"]);function S(e){return $(e,E,A)}function G(e){return $(e,"",W)}function P(){return!0}function $(e,r,o){let t=a.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))}function M(e){return p.test(e)&&!b.test(e)}function I(){return!1}function W(e){return f.test(e)}function A(e){return m.test(e)}let O=function(e,...r){let o,s,a;let c=function(l){var i;return s=(o={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,o=new Map,t=new Map;function n(n,l){o.set(n,l),++r>e&&(r=0,t=o,o=new Map)}return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}}((i=r.reduce((e,r)=>r(e),e())).cacheSize),splitModifiers:function(e){let r=e.separator,o=1===r.length,t=r[0],n=r.length;return function(e){let l;let i=[],s=0,a=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===s){if(d===t&&(o||e.slice(c,c+n)===r)){i.push(e.slice(a,c)),a=c+n;continue}if("/"===d){l=c;continue}}"["===d?s++:"]"===d&&s--}let c=0===i.length?e:e.substring(a),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:i,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:l&&l>a?l-a:void 0}}}(i),...function(e){let r=function(e){var r;let{theme:o,prefix:t}=e,l={nextPart:new Map,validators:[]};return(r=Object.entries(e.classGroups),t?r.map(([e,r])=>[e,r.map(e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[t+e,r])):e)]):r).forEach(([e,r])=>{(function e(r,o,t,l){r.forEach(r=>{if("string"==typeof r){(""===r?o:n(o,r)).classGroupId=t;return}if("function"==typeof r){if(r.isThemeGetter){e(r(l),o,t,l);return}o.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([r,i])=>{e(i,n(o,r),t,l)})})})(r,l,e,o)}),l}(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:function(e){let o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),function e(r,o){if(0===r.length)return o.classGroupId;let t=r[0],n=o.nextPart.get(t),l=n?e(r.slice(1),n):void 0;if(l)return l;if(0===o.validators.length)return;let i=r.join("-");return o.validators.find(({validator:e})=>e(i))?.classGroupId}(o,r)||function(e){if(t.test(e)){let r=t.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){let t=o[e]||[];return r&&l[e]?[...t,...l[e]]:t}}}(i)}).cache.get,a=o.cache.set,c=d,d(l)};function d(e){let r=s(e);if(r)return r;let t=function(e,r){let{splitModifiers:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,i=new Set;return e.trim().split(l).map(e=>{let{modifiers:r,hasImportantModifier:n,baseClassName:l,maybePostfixModifierPosition:i}=o(e),s=t(i?l.substring(0,i):l),a=!!i;if(!s){if(!i||!(s=t(l)))return{isTailwindClass:!1,originalClassName:e};a=!1}let c=(function(e){if(e.length<=1)return e;let r=[],o=[];return e.forEach(e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)}),r.push(...o.sort()),r})(r).join(":");return{isTailwindClass:!0,modifierId:n?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:a}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:r,classGroupId:o,hasPostfixModifier:t}=e,l=r+o;return!i.has(l)&&(i.add(l),n(o,t).forEach(e=>i.add(r+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,o);return a(e,t),t}return function(){return c(i.apply(null,arguments))}}(function(){let e=s("colors"),r=s("spacing"),o=s("blur"),t=s("brightness"),n=s("borderColor"),l=s("borderRadius"),i=s("borderSpacing"),a=s("borderWidth"),c=s("contrast"),d=s("grayscale"),u=s("hueRotate"),p=s("invert"),b=s("gap"),f=s("gradientColorStops"),m=s("gradientColorStopPositions"),j=s("inset"),E=s("margin"),$=s("opacity"),M=s("padding"),I=s("saturate"),W=s("scale"),A=s("sepia"),O=s("skew"),R=s("space"),_=s("translate"),T=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],Z=()=>["auto",k,r],q=()=>[k,r],B=()=>["",g,h],D=()=>["auto",w,k],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],H=()=>["solid","dashed","dotted","double","none"],J=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],K=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",k],U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[w,x],X=()=>[w,k];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[g,h],blur:["none","",z,k],brightness:V(),borderColor:[e],borderRadius:["none","","full",z,k],borderSpacing:q(),borderWidth:B(),contrast:V(),grayscale:Q(),hueRotate:X(),invert:Q(),gap:q(),gradientColorStops:[e],gradientColorStopPositions:[v,h],inset:Z(),margin:Z(),opacity:V(),padding:q(),saturate:V(),scale:V(),sepia:Q(),skew:X(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),k]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[j]}],"inset-x":[{"inset-x":[j]}],"inset-y":[{"inset-y":[j]}],start:[{start:[j]}],end:[{end:[j]}],top:[{top:[j]}],right:[{right:[j]}],bottom:[{bottom:[j]}],left:[{left:[j]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",y,k]}],basis:[{basis:Z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",y,k]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",y,k]},k]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[y,k]},k]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...K()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...K(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...K(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[E]}],mx:[{mx:[E]}],my:[{my:[E]}],ms:[{ms:[E]}],me:[{me:[E]}],mt:[{mt:[E]}],mr:[{mr:[E]}],mb:[{mb:[E]}],ml:[{ml:[E]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",k,r]}],"min-w":[{"min-w":[k,r,"min","max","fit"]}],"max-w":[{"max-w":[k,r,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[k,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[k,r,"auto","min","max","fit"]}],"font-size":[{text:["base",z,h]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",x]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",w,x]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,k]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[$]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[$]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",g,h]}],"underline-offset":[{"underline-offset":["auto",g,k]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[$]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),N]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",C]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},S]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[$]}],"border-style":[{border:[...H(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[$]}],"divide-style":[{divide:H()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...H()]}],"outline-offset":[{"outline-offset":[g,k]}],"outline-w":[{outline:[g,h]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[$]}],"ring-offset-w":[{"ring-offset":[g,h]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,G]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[$]}],"mix-blend":[{"mix-blend":[...J(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":J()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",z,k]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[I]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[$]}],"backdrop-saturate":[{"backdrop-saturate":[I]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[W]}],"scale-x":[{"scale-x":[W]}],"scale-y":[{"scale-y":[W]}],rotate:[{rotate:[y,k]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[O]}],"skew-y":[{"skew-y":[O]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,h,x]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);
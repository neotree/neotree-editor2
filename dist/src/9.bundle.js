(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{221:function(e,t,r){"use strict";(function(e){var a,o=r(7),n=r.n(o),i=r(11),c=r.n(i),l=r(0),d=r.n(l),s=r(2),u=r.n(s),f=r(29),p=r(12),b=r.n(p),h=r(92),m=r(250);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=Object(f.d)((function(){return{root:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},bg:function(e){return{backgroundColor:e.transparent?"transparent":"rgba(0,0,0,.2)"}}}})),y=function(e){var t=e.className,r=e.loaderProps,a=e.transparent,o=c()(e,["className","loaderProps","transparent"]),i=v({transparent:a});return d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,n()({},o,{className:b()(i.root,i.bg,t)}),d.a.createElement(m.a,n()({color:"primary"},r))))};g(y,"useStyles{classes}",(function(){return[v]})),y.propTypes={className:u.a.string,loaderProps:u.a.object,transparent:u.a.bool};var O,j,L=y;t.a=L,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(v,"useStyles","/home/farai/WorkBench/neotree-editor/src/components/OverlayLoader.js"),O.register(y,"OverlayLoader","/home/farai/WorkBench/neotree-editor/src/components/OverlayLoader.js"),O.register(L,"default","/home/farai/WorkBench/neotree-editor/src/components/OverlayLoader.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(8)(e))},225:function(e,t,r){"use strict";(function(e){var a,o=r(7),n=r.n(o),i=r(17),c=r.n(i),l=r(22),d=r.n(l),s=r(0),u=r.n(s),f=r(2),p=r.n(f),b=r(424),h=r(420),m=r(421),g=r(86),v=r(425),y=r(426),O=r(39),j=r(432),L=r(423),H=r(44),G=r.n(H),S=r(12),E=r.n(S),k=r(247),w=r.n(k),x=r(228);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},W=G()((function(e){return{table:{minWidth:800},headerWrap:{position:"relative",height:60},header:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",boxSizing:"border-box",padding:e.spacing()},dataItemRow:{"&:hover, &.selected":{backgroundColor:e.palette.action.hover}}}}));function C(e){var t=e.noDataMsg,r=e.title,a=e.selectable,o=e.renderRowAction,i=e.data,c=e.onSortData,l=e.displayFields,s=e.renderHeaderActions;a=!1!==a;var f=W(),p=u.a.useState([]),H=d()(p,2),G=H[0],S=H[1],k=u.a.useState(i),P=d()(k,2),M=P[0],C=P[1];return u.a.useEffect((function(){C(i)}),[i]),u.a.useEffect((function(){if(JSON.stringify(M)!==JSON.stringify(i)){var e=M.map((function(e,t){return D(D({},e),{},{position:t+1})}));C(e),c&&c(e)}}),[M]),u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{square:!0,elevation:0},u.a.createElement("div",{className:E()(f.headerWrap)},u.a.createElement("div",{className:E()(f.header)},u.a.createElement(O.a,{variant:"h6"},r),u.a.createElement("div",{style:{marginLeft:"auto"}}),s&&s({selected:G}))),u.a.createElement(L.a,null),M.length?u.a.createElement(b.a,{component:g.a},u.a.createElement(v.a,{className:E()(f.table)},u.a.createElement(y.a,null,u.a.createElement(h.a,null,a&&u.a.createElement(m.a,{padding:"none"},u.a.createElement(j.a,{indeterminate:G.length>0&&G.length<M.length,checked:M.length>0&&G.length===M.length,onChange:function(){return S((function(e){return e.length<M.length?M.map((function(e,t){return{row:e,rowIndex:t}})):[]}))}})),u.a.createElement(m.a,null),l.map((function(e,t){return u.a.createElement(m.a,n()({},e.cellProps,{key:"".concat(e.key).concat(t)}),u.a.createElement("b",null,e.label))})),o?u.a.createElement(m.a,{align:"right"},u.a.createElement("b",null,"Action")):null)),u.a.createElement(x.a,{rows:M,selectable:a,renderRowAction:o,classes:f,displayFields:l,selected:G,setSelected:S,useDragHandle:!0,onSortEnd:function(e){var t=e.oldIndex,r=e.newIndex;return C((function(e){return w()(e,{$splice:[[t,1],[r,0,e[t]]]})}))}}))):u.a.createElement("div",{style:{textAlign:"center",padding:25}},u.a.createElement(O.a,{color:"textSecondary"},t||"No data"))))}M(C,"useStyles{classes}\nuseState{[selected, setSelected]([])}\nuseState{[data, setData](_data)}\nuseEffect{}\nuseEffect{}",(function(){return[W]})),C.propTypes={noDataMsg:p.a.string,selectable:p.a.bool,renderRowAction:p.a.func,title:p.a.string.isRequired,displayFields:p.a.array.isRequired,renderHeaderActions:p.a.func,onSortData:p.a.func,data:p.a.array.isRequired};var B,T,F=C;t.a=F,(B="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(B.register(W,"useStyles","/home/farai/WorkBench/neotree-editor/src/components/DataTable/index.js"),B.register(C,"DataTable","/home/farai/WorkBench/neotree-editor/src/components/DataTable/index.js"),B.register(F,"default","/home/farai/WorkBench/neotree-editor/src/components/DataTable/index.js")),(T="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&T(e)}).call(this,r(8)(e))},228:function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),i=r(422),c=r(227),l=r(229);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,s,u=Object(c.a)((function(e){var t=e.rows,r=e.classes,a=e.selected,o=e.selectable,c=e.setSelected,d=e.displayFields,s=e.renderRowAction;return n.a.createElement(i.a,null,t.map((function(e,t){var i=t;return n.a.createElement(l.a,{key:"".concat(i).concat(t),row:e,index:t,rowIndex:t,classes:r,selectable:o,action:s?s(e,t)||n.a.createElement(n.a.Fragment,null):null,displayFields:d,selected:a,setSelected:c})})))}));t.a=u,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(u,"default","/home/farai/WorkBench/neotree-editor/src/components/DataTable/Body.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(8)(e))},229:function(e,t,r){"use strict";(function(e){var a,o=r(7),n=r.n(o),i=r(218),c=r.n(i),l=r(0),d=r.n(l),s=r(420),u=r(421),f=r(432),p=r(125),b=r(12),h=r.n(b),m=r(227),g=r(248),v=r.n(g);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var y,O,j=Object(m.c)((function(){return d.a.createElement(p.a,{style:{cursor:"move"}},d.a.createElement(v.a,null))})),L=Object(m.b)((function(e){var t=e.row,r=e.rowIndex,a=e.selectable,o=e.classes,i=e.selected,l=e.setSelected,p=e.displayFields,b=e.action;return d.a.createElement(s.a,{className:h()(o.dataItemRow,{selected:i.map((function(e){return e.rowIndex})).includes(r)})},a&&d.a.createElement(u.a,{padding:"none"},d.a.createElement(f.a,{checked:i.map((function(e){return e.rowIndex})).includes(r),onChange:function(){return l((function(e){return e.map((function(e){return e.rowIndex})).includes(r)?e.filter((function(e){return e.rowIndex!==r})):[].concat(c()(e),[{row:t,rowIndex:r}])}))}})),d.a.createElement(u.a,{padding:"none"},d.a.createElement(j,null)),p.map((function(e,a){var o=e.render?e.render({row:t,rowIndex:r,column:e.key,columnIndex:a}):(t.data||t)[e.key];return d.a.createElement(u.a,n()({},e.cellProps,{key:"".concat(r).concat(e.key).concat(a)}),o)})),b?d.a.createElement(u.a,{align:"right",padding:"none"},b):null)}));t.a=L,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(j,"DragHandle","/home/farai/WorkBench/neotree-editor/src/components/DataTable/Row.js"),y.register(L,"default","/home/farai/WorkBench/neotree-editor/src/components/DataTable/Row.js")),(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&O(e)}).call(this,r(8)(e))},231:function(e,t,r){"use strict";(function(e){r.d(t,"g",(function(){return u})),r.d(t,"i",(function(){return f})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return h})),r.d(t,"h",(function(){return m})),r.d(t,"c",(function(){return g})),r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return y}));var a,o=r(17),n=r.n(o),i=r(45);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,s,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/get-scripts",l({body:e},t))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/update-scripts",l({method:"POST",body:e},t))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/delete-script",l({method:"POST",body:e},t))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/duplicate-script",l({method:"POST",body:e},t))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/get-script",l({body:e},t))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/update-script",l({method:"POST",body:e},t))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/create-script",l({method:"POST",body:e},t))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/copy-screens",l({method:"POST",body:e},t))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/copy-diagnoses",l({method:"POST",body:e},t))};(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"getScripts","/home/farai/WorkBench/neotree-editor/src/api/scripts/index.js"),d.register(f,"updateScripts","/home/farai/WorkBench/neotree-editor/src/api/scripts/index.js"),d.register(p,"deleteScript","/home/farai/WorkBench/neotree-editor/src/api/scripts/index.js"),d.register(b,"duplicateScript","/home/farai/WorkBench/neotree-editor/src/api/scripts/index.js"),d.register(h,"getScript","/home/farai/WorkBench/neotree-editor/src/api/scripts/index.js"),d.register(m,"updateScript","/home/farai/WorkBench/neotree-editor/src/api/scripts/index.js"),d.register(g,"createScript","/home/farai/WorkBench/neotree-editor/src/api/scripts/index.js"),d.register(v,"copyScreens","/home/farai/WorkBench/neotree-editor/src/api/scripts/index.js"),d.register(y,"copyDiagnoses","/home/farai/WorkBench/neotree-editor/src/api/scripts/index.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(8)(e))},233:function(e,t,r){"use strict";function a(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function a(){for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];var i=this,c=function(){e.apply(i,o)};clearTimeout(t),t=setTimeout(c,r)}return a.clear=function(){clearTimeout(t)},a}r.d(t,"a",(function(){return a}))},234:function(e,t,r){"use strict";var a=r(28);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(0)),n=(0,a(r(130)).default)(o.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=n},236:function(e,t,r){"use strict";(function(e){var r;(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,o,n={PAGE_TITLE:"Scripts"};t.a=n,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(n,"default","/home/farai/WorkBench/neotree-editor/src/constants/copy/scripts.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,r(8)(e))},237:function(e,t,r){"use strict";(function(e){var a;r.d(t,"a",(function(){return i})),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var o,n;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function i(e){return e?(e.map?e:[e]).reduce((function(e,t){return"".concat(e).concat(function(e){return"string"==typeof e?e:e.msg||e.message||JSON.stringify(e)}(t),"\n")}),""):""}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(i,"getErrorMessage","/home/farai/WorkBench/neotree-editor/src/utils/getErrorMessage.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,r(8)(e))},250:function(e,t,r){"use strict";var a=r(1),o=r(3),n=r(0),i=(r(2),r(4)),c=r(5),l=r(10);function d(e){var t,r,a;return t=e,r=0,a=1,e=(Math.min(Math.max(r,t),a)-r)/(a-r),e=(e-=1)*e*e+1}var s=n.forwardRef((function(e,t){var r,c=e.classes,s=e.className,u=e.color,f=void 0===u?"primary":u,p=e.disableShrink,b=void 0!==p&&p,h=e.size,m=void 0===h?40:h,g=e.style,v=e.thickness,y=void 0===v?3.6:v,O=e.value,j=void 0===O?0:O,L=e.variant,H=void 0===L?"indeterminate":L,G=Object(o.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),S={},E={},k={};if("determinate"===H||"static"===H){var w=2*Math.PI*((44-y)/2);S.strokeDasharray=w.toFixed(3),k["aria-valuenow"]=Math.round(j),"static"===H?(S.strokeDashoffset="".concat(((100-j)/100*w).toFixed(3),"px"),E.transform="rotate(-90deg)"):(S.strokeDashoffset="".concat((r=(100-j)/100,r*r*w).toFixed(3),"px"),E.transform="rotate(".concat((270*d(j/70)).toFixed(3),"deg)"))}return n.createElement("div",Object(a.a)({className:Object(i.a)(c.root,s,"inherit"!==f&&c["color".concat(Object(l.a)(f))],{indeterminate:c.indeterminate,static:c.static}[H]),style:Object(a.a)({width:m,height:m},E,g),ref:t,role:"progressbar"},k,G),n.createElement("svg",{className:c.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},n.createElement("circle",{className:Object(i.a)(c.circle,b&&c.circleDisableShrink,{indeterminate:c.circleIndeterminate,static:c.circleStatic}[H]),style:S,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(s)},273:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return j}));var a,o=r(17),n=r.n(o),i=r(22),c=r.n(i),l=r(0),d=r.n(l),s=r(321),u=r(322),f=r(323),p=r(324);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=d.a.createContext(null),v=function(){return d.a.useContext(g)};m(v,"useContext{}");var y,O,j=function(e){return m((function(t){var r=d.a.useState({scripts:[]}),a=c()(r,2),o=a[0],n=a[1],i=function(e){return n((function(t){return h(h({},t),"function"==typeof e?e(t):e)}))},l=Object(s.a)({setState:i}),b=Object(u.a)({setState:i}),m=Object(f.a)({setState:i}),v=Object(p.a)({setState:i});return d.a.useEffect((function(){l()}),[]),d.a.createElement(g.Provider,{value:{state:o,setState:i,_setState:n,getScripts:l,deleteScripts:b,updateScripts:m,duplicateScripts:v}},d.a.createElement(e,t))}),"useState{[state, _setState]({\n    scripts: [],\n  })}\nuseEffect{}")};(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"ScriptsContext","/home/farai/WorkBench/neotree-editor/src/contexts/scripts/index.js"),y.register(v,"useScriptsContext","/home/farai/WorkBench/neotree-editor/src/contexts/scripts/index.js"),y.register(j,"provideScriptsContext","/home/farai/WorkBench/neotree-editor/src/contexts/scripts/index.js")),(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&O(e)}).call(this,r(8)(e))},275:function(e,t,r){"use strict";(function(e){var a,o=r(7),n=r.n(o),i=r(11),c=r.n(i),l=r(0),d=r.n(l),s=r(13),u=r(2),f=r.n(u),p=r(12),b=r.n(p),h=r(44),m=r.n(h);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=m()((function(){return{root:{position:"fixed",bottom:20,right:20,zIndex:10}}})),y=d.a.forwardRef(g((function(e,t){var r=e.className,a=c()(e,["className"]),o=v();return d.a.createElement(d.a.Fragment,null,Object(s.createPortal)(d.a.createElement("div",n()({},a,{ref:t,className:b()(r,o.root)})),document.body))}),"useStyles{classes}",(function(){return[v]})));y.propTypes={className:f.a.string};var O,j,L=y;t.a=L,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(v,"useStyles","/home/farai/WorkBench/neotree-editor/src/components/FabWrap.js"),O.register(y,"FabWrap","/home/farai/WorkBench/neotree-editor/src/components/FabWrap.js"),O.register(L,"default","/home/farai/WorkBench/neotree-editor/src/components/FabWrap.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(8)(e))},276:function(e,t,r){"use strict";var a=r(3),o=r(1),n=r(0),i=(r(2),r(4)),c=r(5),l=r(89),d=r(10),s=n.forwardRef((function(e,t){var r=e.children,c=e.classes,s=e.className,u=e.color,f=void 0===u?"default":u,p=e.component,b=void 0===p?"button":p,h=e.disabled,m=void 0!==h&&h,g=e.disableFocusRipple,v=void 0!==g&&g,y=e.focusVisibleClassName,O=e.size,j=void 0===O?"large":O,L=e.variant,H=void 0===L?"round":L,G=Object(a.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return n.createElement(l.a,Object(o.a)({className:Object(i.a)(c.root,s,"round"!==H&&c.extended,"large"!==j&&c["size".concat(Object(d.a)(j))],m&&c.disabled,{primary:c.primary,secondary:c.secondary,inherit:c.colorInherit}[f]),component:b,disabled:m,focusRipple:!v,focusVisibleClassName:Object(i.a)(c.focusVisible,y),ref:t},G),n.createElement("span",{className:c.label},r))}));t.a=Object(c.a)((function(e){return{root:Object(o.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(s)},299:function(e,t,r){"use strict";(function(e){var a,o=r(7),n=r.n(o),i=r(22),c=r.n(i),l=r(11),d=r.n(l),s=r(0),u=r.n(s),f=r(2),p=r.n(f),b=r(76),h=r(273);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=u.a.forwardRef(m((function(e,t){var r=e.children,a=e.ids,o=e.onClick,i=d()(e,["children","ids","onClick"]),l=a.length>1,s=Object(b.a)(),f=c()(s,2),p=f[0],m=f[1],g=Object(h.b)().deleteScripts;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",n()({},i,{ref:t,onClick:function(e){m(),o&&o(e)}}),r),p({title:"Delete script".concat(l?"s":""),message:"Are you sure you want to delete script".concat(l?"s":"","?"),onConfirm:function(){return g(a)}}))}),"useConfirmModal{[renderConfirmModal, confirm]}\nuseScriptsContext{{ deleteScripts }}",(function(){return[b.a,h.b]})));g.propTypes={onClick:p.a.func,children:p.a.node,ids:p.a.array.isRequired};var v,y,O=g;t.a=O,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(g,"DeleteScripts","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Forms/DeleteScripts.js"),v.register(O,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Forms/DeleteScripts.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,r(8)(e))},300:function(e,t,r){"use strict";(function(e){var a,o=r(7),n=r.n(o),i=r(218),c=r.n(i),l=r(22),d=r.n(l),s=r(11),u=r.n(s),f=r(0),p=r.n(f),b=r(2),h=r.n(b),m=r(221),g=r(231),v=r(237),y=r(273);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},j=p.a.forwardRef(O((function(e,t){var r=e.children,a=e.onClick,o=e.ids,i=u()(e,["children","onClick","ids"]),l=Object(y.b)().setState,s=p.a.useState(!1),f=d()(s,2),b=f[0],h=f[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",n()({},i,{ref:t,onClick:function(e){h(!0),g.e({id:o[0]}).catch((function(e){h(!1),alert(Object(v.a)(e))})).then((function(e){var t=e.script;h(!1),l((function(e){return{scripts:e.scripts.reduce((function(e,r){return[].concat(c()(e),[r],c()(o.includes(r.id)?[t]:[]))}),[])}}))})),a&&a(e)}}),r),b&&p.a.createElement(m.a,null))}),"useScriptsContext{{ setState: setScriptsState }}\nuseState{[loading, setLoading](false)}",(function(){return[y.b]})));j.propTypes={onClick:h.a.func,children:h.a.node,ids:h.a.array.isRequired};var L,H,G=j;t.a=G,(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(L.register(j,"DuplicateScripts","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Forms/DuplicateScripts.js"),L.register(G,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Forms/DuplicateScripts.js")),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&H(e)}).call(this,r(8)(e))},320:function(e,t,r){"use strict";r.r(t),function(e){var a,o=r(0),n=r.n(o),i=r(236),c=r(29),l=r(19),d=r(273),s=r(62),u=r(225),f=r(221);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(){Object(l.b)(i.a.PAGE_TITLE),Object(c.e)(i.a.PAGE_TITLE);var e=Object(d.b)(),t=e.updateScripts,a=e.setState,o=e.state,p=o.scripts,b=o.scriptsInitialised,h=o.loadingScripts,m=o.duplicatingScripts,g=o.deletingScripts;return n.a.createElement(n.a.Fragment,null,b?n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{noDataMsg:"No scripts",selectable:!1,title:i.a.PAGE_TITLE,data:p,renderHeaderActions:r(330).default,renderRowAction:r(331).default,displayFields:[{key:"title",label:"Title"},{key:"description",label:"Description"}],onSortData:function(e){a({scripts:e}),t(e.map((function(e){return{id:e.id,position:e.position}})))}})):null,h&&n.a.createElement(s.a,null),g||m?n.a.createElement(f.a,null):null)};p(b,"useScriptsContext{{\n    updateScripts,\n    setState,\n    state: {\n      scripts,\n      scriptsInitialised,\n      loadingScripts,\n      duplicatingScripts,\n      deletingScripts,\n    }\n  }}",(function(){return[d.b]}));var h,m,g=Object(d.a)(b);t.default=g,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(b,"ScriptsList","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/List/index.js"),h.register(g,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/List/index.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}.call(this,r(8)(e))},321:function(e,t,r){"use strict";(function(e){var a,o=r(17),n=r.n(o),i=r(231);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,s,u=function(e){var t=e.setState;return function(){t({loadingScripts:!0});var e=function(e,r){t(l(l({getScriptsError:e},r),{},{scriptsInitialised:!0,loadingScripts:!1}))};i.g().then((function(t){return e(t.errors,t)})).catch(e)}};t.a=u,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(u,"default","/home/farai/WorkBench/neotree-editor/src/contexts/scripts/_getScripts.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(8)(e))},322:function(e,t,r){"use strict";(function(e){var a,o=r(17),n=r.n(o),i=r(231);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,s,u=function(e){var t=e.setState;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length){t({deletingScripts:!0});var r=function(r){t((function(t){var a=t.scripts;return l({deleteScriptsError:r,deletingScripts:!1},r?null:{scripts:a.filter((function(t){return e.indexOf(t.id)<0}))})}))};i.d({id:e[0]}).then((function(e){return r(e.errors,e)})).catch(r)}}};t.a=u,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(u,"default","/home/farai/WorkBench/neotree-editor/src/contexts/scripts/_deleteScripts.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(8)(e))},323:function(e,t,r){"use strict";(function(e){var a,o=r(17),n=r.n(o),i=r(231);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,s,u=function(e){var t=e.setState;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length){t({updatingScripts:!0});var r=function(e,r){t(l(l({updateScriptsError:e},r),{},{updatingScripts:!1}))};i.i({scripts:e}).then((function(e){return r(e.errors,e)})).catch(r)}}};t.a=u,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(u,"default","/home/farai/WorkBench/neotree-editor/src/contexts/scripts/_updateScripts.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(8)(e))},324:function(e,t,r){"use strict";(function(e){var a,o=r(218),n=r.n(o),i=r(17),c=r.n(i),l=r(231);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,f,p=function(e){var t=e.setState;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length){t({duplicatingScripts:!0});var r=function(r,a){t((function(t){var o=t.scripts;return s({duplicateScriptsError:r,duplicatingScripts:!1},r?null:{scripts:o.reduce((function(t,r){return[].concat(n()(t),[r],n()(e.indexOf(r.id)<0?[]:[a.script]))}),[])})}))};l.e({id:e[0]}).then((function(e){return r(e.errors,e)})).catch(r)}}};t.a=p,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(p,"default","/home/farai/WorkBench/neotree-editor/src/contexts/scripts/_duplicateScripts.js"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(8)(e))},330:function(e,t,r){"use strict";r.r(t),function(e){var a,o=r(0),n=r.n(o),i=r(2),c=r.n(i),l=r(125),d=r(232),s=r.n(d),u=r(234),f=r.n(u),p=r(87),b=r(40),h=r(276),m=r(275),g=r(299),v=r(300);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function y(e){var t=e.selected;return n.a.createElement(n.a.Fragment,null,t.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{ids:t},n.a.createElement(p.a,null,"Duplicate")),n.a.createElement(g.a,{ids:t},n.a.createElement(l.a,null,n.a.createElement(f.a,null)))),n.a.createElement(b.b,{to:"/scripts/new"},n.a.createElement(l.a,null,n.a.createElement(s.a,null))),n.a.createElement(m.a,null,n.a.createElement(b.b,{to:"/scripts/new"},n.a.createElement(h.a,{color:"secondary"},n.a.createElement(s.a,null)))))}y.propTypes={selected:c.a.array.isRequired};var O,j,L=function(e){return n.a.createElement(y,e)};t.default=L,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(y,"Actions","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/List/_renderHeaderActions.js"),O.register(L,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/List/_renderHeaderActions.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}.call(this,r(8)(e))},331:function(e,t,r){"use strict";r.r(t),function(e){var a,o=r(22),n=r.n(o),i=r(0),c=r.n(i),l=r(2),d=r.n(l),s=r(125),u=r(238),f=r.n(u),p=r(407),b=r(427),h=r(39),m=r(40),g=r(299),v=r(300);function y(e){var t=e.row,r=c.a.useState(null),a=n()(r,2),o=a[0],i=a[1],l=function(){return i(null)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{onClick:function(e){return i(e.currentTarget)}},c.a.createElement(f.a,null)),c.a.createElement(p.a,{anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:l},c.a.createElement(b.a,{component:m.b,to:"/scripts/".concat(t.id),onClick:l},"Edit"),c.a.createElement(b.a,{onClick:l,ids:[t.id],component:v.a},"Duplicate"),c.a.createElement(b.a,{onClick:l,ids:[t.id],component:g.a},c.a.createElement(h.a,{color:"error"},"Delete"))))}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(y,"useState{[anchorEl, setAnchorEl](null)}"),y.propTypes={row:d.a.object.isRequired,rowIndex:d.a.number.isRequired};var O,j,L=function(e,t){return c.a.createElement(y,{row:e,rowIndex:t})};t.default=L,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(y,"Action","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/List/_renderRowAction.js"),O.register(L,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/List/_renderRowAction.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}.call(this,r(8)(e))}}]);
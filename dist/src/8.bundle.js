(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{274:function(e,t,r){"use strict";(function(e){var o,n=r(6),a=r.n(n),i=r(14),l=r.n(i),c=r(22),d=r.n(c),u=r(0),s=r.n(u),f=r(2),b=r.n(f),g=r(473),y=r(469),p=r(470),m=r(98),h=r(474),v=r(475),O=r(41),j=r(481),L=r(472),H=r(46),E=r.n(H),G=r(12),C=r.n(G),k=r(296),w=r.n(k),K=r(277);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},D=E()((function(e){return{table:{minWidth:800},headerWrap:{position:"relative",height:60},header:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",boxSizing:"border-box",padding:e.spacing()},dataItemRow:{"&:hover, &.selected":{backgroundColor:e.palette.action.hover}}}}));function W(e){var t=e.noDataMsg,r=e.title,o=e.selectable,n=e.renderRowAction,i=e.data,l=e.onSortData,c=e.displayFields,u=e.renderHeaderActions;o=!1!==o;var f=D(),b=s.a.useState([]),H=d()(b,2),E=H[0],G=H[1],k=s.a.useState(i),S=d()(k,2),x=S[0],W=S[1];return s.a.useEffect((function(){W(i)}),[i]),s.a.useEffect((function(){if(JSON.stringify(x)!==JSON.stringify(i)){var e=x.map((function(e,t){return P(P({},e),{},{position:t+1})}));W(e),l&&l(e)}}),[x]),s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{square:!0,elevation:0},s.a.createElement("div",{className:C()(f.headerWrap)},s.a.createElement("div",{className:C()(f.header)},s.a.createElement(O.a,{variant:"h6"},r),s.a.createElement("div",{style:{marginLeft:"auto"}}),u&&u({selected:E}))),s.a.createElement(L.a,null),x.length?s.a.createElement(g.a,{component:m.a},s.a.createElement(h.a,{className:C()(f.table)},s.a.createElement(v.a,null,s.a.createElement(y.a,null,o&&s.a.createElement(p.a,{padding:"none"},s.a.createElement(j.a,{indeterminate:E.length>0&&E.length<x.length,checked:x.length>0&&E.length===x.length,onChange:function(){return G((function(e){return e.length<x.length?x.map((function(e,t){return{row:e,rowIndex:t}})):[]}))}})),s.a.createElement(p.a,null),c.map((function(e,t){return s.a.createElement(p.a,a()({},e.cellProps,{key:"".concat(e.key).concat(t)}),s.a.createElement("b",null,e.label))})),n?s.a.createElement(p.a,{align:"right"},s.a.createElement("b",null,"Action")):null)),s.a.createElement(K.a,{rows:x,selectable:o,renderRowAction:n,classes:f,displayFields:c,selected:E,setSelected:G,useDragHandle:!0,onSortEnd:function(e){var t=e.oldIndex,r=e.newIndex;return W((function(e){return w()(e,{$splice:[[t,1],[r,0,e[t]]]})}))}}))):s.a.createElement("div",{style:{textAlign:"center",padding:25}},s.a.createElement(O.a,{color:"textSecondary"},t||"No data"))))}x(W,"useStyles{classes}\nuseState{[selected, setSelected]([])}\nuseState{[data, setData](_data)}\nuseEffect{}\nuseEffect{}",(function(){return[D]})),W.propTypes={noDataMsg:b.a.string,selectable:b.a.bool,renderRowAction:b.a.func,title:b.a.string.isRequired,displayFields:b.a.array.isRequired,renderHeaderActions:b.a.func,onSortData:b.a.func,data:b.a.array.isRequired};var M,B,F=W;t.a=F,(M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(M.register(D,"useStyles","/home/farai/WorkBench/neotree-editor/src/components/DataTable/index.js"),M.register(W,"DataTable","/home/farai/WorkBench/neotree-editor/src/components/DataTable/index.js"),M.register(F,"default","/home/farai/WorkBench/neotree-editor/src/components/DataTable/index.js")),(B="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&B(e)}).call(this,r(8)(e))},277:function(e,t,r){"use strict";(function(e){var o,n=r(0),a=r.n(n),i=r(471),l=r(276),c=r(278);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,s=Object(l.a)((function(e){var t=e.rows,r=e.classes,o=e.selected,n=e.selectable,l=e.setSelected,d=e.displayFields,u=e.renderRowAction;return a.a.createElement(i.a,null,t.map((function(e,t){var i=t;return a.a.createElement(c.a,{key:"".concat(i).concat(t),row:e,index:t,rowIndex:t,classes:r,selectable:n,action:u?u(e,t)||a.a.createElement(a.a.Fragment,null):null,displayFields:d,selected:o,setSelected:l})})))}));t.a=s,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(s,"default","/home/farai/WorkBench/neotree-editor/src/components/DataTable/Body.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(8)(e))},278:function(e,t,r){"use strict";(function(e){var o,n=r(6),a=r.n(n),i=r(269),l=r.n(i),c=r(0),d=r.n(c),u=r(469),s=r(470),f=r(481),b=r(152),g=r(12),y=r.n(g),p=r(276),m=r(297),h=r.n(m),v=r(467);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var O,j,L=Object(p.c)((function(){return d.a.createElement("div",null,d.a.createElement(v.a,{title:"Drag to reposition"},d.a.createElement(b.a,{style:{cursor:"move"}},d.a.createElement(h.a,null))))})),H=Object(p.b)((function(e){var t=e.row,r=e.rowIndex,o=e.selectable,n=e.classes,i=e.selected,c=e.setSelected,b=e.displayFields,g=e.action;return d.a.createElement(u.a,{className:y()(n.dataItemRow,{selected:i.map((function(e){return e.rowIndex})).includes(r)})},o&&d.a.createElement(s.a,{padding:"none"},d.a.createElement(f.a,{checked:i.map((function(e){return e.rowIndex})).includes(r),onChange:function(){return c((function(e){return e.map((function(e){return e.rowIndex})).includes(r)?e.filter((function(e){return e.rowIndex!==r})):[].concat(l()(e),[{row:t,rowIndex:r}])}))}})),d.a.createElement(s.a,{padding:"none"},d.a.createElement(L,null)),b.map((function(e,o){var n=e.render?e.render({row:t,rowIndex:r,column:e.key,columnIndex:o}):(t.data||t)[e.key];return d.a.createElement(s.a,a()({},e.cellProps,{key:"".concat(r).concat(e.key).concat(o)}),n)})),g?d.a.createElement(s.a,{align:"right",padding:"none"},g):null)}));t.a=H,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(L,"DragHandle","/home/farai/WorkBench/neotree-editor/src/components/DataTable/Row.js"),O.register(H,"default","/home/farai/WorkBench/neotree-editor/src/components/DataTable/Row.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(8)(e))},282:function(e,t,r){"use strict";function o(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];var i=this,l=function(){e.apply(i,n)};clearTimeout(t),t=setTimeout(l,r)}return o.clear=function(){clearTimeout(t)},o}r.d(t,"a",(function(){return o}))},283:function(e,t,r){"use strict";var o=r(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=(0,o(r(157)).default)(n.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=a},304:function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return s})),r.d(t,"f",(function(){return f})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return g})),r.d(t,"e",(function(){return y})),r.d(t,"a",(function(){return p}));var o,n=r(14),a=r.n(n),i=r(30);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/get-config-keys",c({body:e},t))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/update-config-keys",c({method:"POST",body:e},t))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/delete-config-key",c({method:"POST",body:e},t))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/duplicate-config-key",c({method:"POST",body:e},t))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/update-config-key",c({method:"POST",body:e},t))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/create-config-key",c({method:"POST",body:e},t))};(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(s,"getConfigKeys","/home/farai/WorkBench/neotree-editor/src/api/config-keys/index.js"),d.register(f,"updateConfigKeys","/home/farai/WorkBench/neotree-editor/src/api/config-keys/index.js"),d.register(b,"deleteConfigKey","/home/farai/WorkBench/neotree-editor/src/api/config-keys/index.js"),d.register(g,"duplicateConfigKey","/home/farai/WorkBench/neotree-editor/src/api/config-keys/index.js"),d.register(y,"updateConfigKey","/home/farai/WorkBench/neotree-editor/src/api/config-keys/index.js"),d.register(p,"createConfigKey","/home/farai/WorkBench/neotree-editor/src/api/config-keys/index.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(8)(e))},313:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return L}));var o,n=r(14),a=r.n(n),i=r(22),l=r.n(i),c=r(0),d=r.n(c),u=r(385),s=r(386),f=r(387),b=r(388),g=r(389);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=d.a.createContext(null),v=function(){return d.a.useContext(h)};m(v,"useContext{}");var O,j,L=function(e){return m((function(t){var r=d.a.useState({configKeys:[]}),o=l()(r,2),n=o[0],a=o[1],i=function(e){return a((function(t){return p(p({},t),"function"==typeof e?e(t):e)}))},c=Object(u.a)({setState:i}),y=Object(s.a)({setState:i}),m=Object(f.a)({setState:i}),v=Object(b.a)({setState:i}),O=Object(g.a)({state:n,setState:i});return d.a.useEffect((function(){c()}),[]),d.a.createElement(h.Provider,{value:{state:n,setState:i,_setState:a,getConfigKeys:c,deleteConfigKeys:y,updateConfigKeys:m,duplicateConfigKeys:v,saveConfigKey:O}},d.a.createElement(e,t))}),"useState{[state, _setState]({\n    configKeys: [],\n  })}\nuseEffect{}")};(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(h,"ConfigKeysContext","/home/farai/WorkBench/neotree-editor/src/contexts/config-keys/index.js"),O.register(v,"useConfigKeysContext","/home/farai/WorkBench/neotree-editor/src/contexts/config-keys/index.js"),O.register(L,"provideConfigKeysContext","/home/farai/WorkBench/neotree-editor/src/contexts/config-keys/index.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(8)(e))},324:function(e,t,r){"use strict";(function(e){var o,n=r(6),a=r.n(n),i=r(11),l=r.n(i),c=r(0),d=r.n(c),u=r(13),s=r(2),f=r.n(s),b=r(12),g=r.n(b),y=r(46),p=r.n(y);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=p()((function(){return{root:{position:"fixed",bottom:20,right:20,zIndex:10}}})),v=d.a.forwardRef(m((function(e,t){var r=e.className,o=l()(e,["className"]),n=h();return d.a.createElement(d.a.Fragment,null,Object(u.createPortal)(d.a.createElement("div",a()({},o,{ref:t,className:g()(r,n.root)})),document.body))}),"useStyles{classes}",(function(){return[h]})));v.propTypes={className:f.a.string};var O,j,L=v;t.a=L,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(h,"useStyles","/home/farai/WorkBench/neotree-editor/src/components/FabWrap.js"),O.register(v,"FabWrap","/home/farai/WorkBench/neotree-editor/src/components/FabWrap.js"),O.register(L,"default","/home/farai/WorkBench/neotree-editor/src/components/FabWrap.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(8)(e))},325:function(e,t,r){"use strict";var o=r(3),n=r(1),a=r(0),i=(r(2),r(4)),l=r(5),c=r(101),d=r(10),u=a.forwardRef((function(e,t){var r=e.children,l=e.classes,u=e.className,s=e.color,f=void 0===s?"default":s,b=e.component,g=void 0===b?"button":b,y=e.disabled,p=void 0!==y&&y,m=e.disableFocusRipple,h=void 0!==m&&m,v=e.focusVisibleClassName,O=e.size,j=void 0===O?"large":O,L=e.variant,H=void 0===L?"round":L,E=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return a.createElement(c.a,Object(n.a)({className:Object(i.a)(l.root,u,"round"!==H&&l.extended,"large"!==j&&l["size".concat(Object(d.a)(j))],p&&l.disabled,{primary:l.primary,secondary:l.secondary,inherit:l.colorInherit}[f]),component:g,disabled:p,focusRipple:!h,focusVisibleClassName:Object(i.a)(l.focusVisible,v),ref:t},E),a.createElement("span",{className:l.label},r))}));t.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(u)},349:function(e,t,r){"use strict";(function(e){var o,n=r(6),a=r.n(n),i=r(22),l=r.n(i),c=r(11),d=r.n(c),u=r(0),s=r.n(u),f=r(2),b=r.n(f),g=r(84),y=r(313);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=s.a.forwardRef(p((function(e,t){var r=e.children,o=e.ids,n=e.onClick,i=d()(e,["children","ids","onClick"]),c=o.length>1,u=Object(g.a)(),f=l()(u,2),b=f[0],p=f[1],m=Object(y.b)().deleteConfigKeys;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",a()({},i,{ref:t,onClick:function(e){p(),n&&n(e)}}),r),b({title:"Delete config key".concat(c?"s":""),message:"Are you sure you want to delete config key".concat(c?"s":"","?"),onConfirm:function(){return m(o)}}))}),"useConfirmModal{[renderConfirmModal, confirm]}\nuseConfigKeysContext{{ deleteConfigKeys }}",(function(){return[g.a,y.b]})));m.propTypes={onClick:b.a.func,children:b.a.node,ids:b.a.array.isRequired};var h,v,O=m;t.a=O,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(m,"DeleteConfigKeys","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/Forms/DeleteConfigKeys.js"),h.register(O,"default","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/Forms/DeleteConfigKeys.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,r(8)(e))},350:function(e,t,r){"use strict";(function(e){var o,n=r(6),a=r.n(n),i=r(22),l=r.n(i),c=r(11),d=r.n(c),u=r(0),s=r.n(u),f=r(2),b=r.n(f),g=r(84),y=r(313);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=s.a.forwardRef(p((function(e,t){var r=e.children,o=e.ids,n=e.onClick,i=d()(e,["children","ids","onClick"]),c=o.length>1,u=Object(y.b)().duplicateConfigKeys,f=Object(g.a)(),b=l()(f,2),p=b[0],m=b[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",a()({},i,{ref:t,onClick:function(e){m(),n&&n(e)}}),r),p({title:"Duplicate config key".concat(c?"s":""),message:"Are you sure you want to duplicate config key".concat(c?"s":"","?"),onConfirm:function(){return u(o)}}))}),"useConfigKeysContext{{ duplicateConfigKeys }}\nuseConfirmModal{[renderConfirmModal, confirm]}",(function(){return[y.b,g.a]})));m.propTypes={onClick:b.a.func,children:b.a.node,ids:b.a.array.isRequired};var h,v,O=m;t.a=O,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(m,"DuplicateConfigKeys","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/Forms/DuplicateConfigKeys.js"),h.register(O,"default","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/Forms/DuplicateConfigKeys.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,r(8)(e))},351:function(e,t,r){"use strict";(function(e){var o,n=r(6),a=r.n(n),i=r(14),l=r.n(i),c=r(22),d=r.n(c),u=r(11),s=r.n(u),f=r(0),b=r.n(f),g=r(2),y=r.n(g),p=r(313),m=r(242),h=r(233),v=r(234),O=r(235),j=r(99),L=r(479),H=r(236),E=r(41);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=b.a.forwardRef(k((function(e,t){var r=e.children,o=e.onClick,n=e.configKey,i=s()(e,["children","onClick","configKey"]),l=Object(p.b)().saveConfigKey,c=b.a.useState(!1),u=d()(c,2),f=u[0],g=u[1],y=b.a.useState(!1),G=d()(y,2),k=G[0],w=G[1],K=b.a.useState(null),S=d()(K,2),P=S[0],x=S[1],D=b.a.useState(null),W=d()(D,2),M=W[0],B=W[1],F=C({},n?n.data:{}),T=b.a.useState(F),R=d()(T,2),I=R[0],A=R[1],N=function(e){return A((function(t){return C(C({},t),"function"==typeof e?e(t):e)}))};return b.a.useEffect((function(){n&&N(n.data)}),[n]),b.a.useEffect((function(){N(F)}),[f]),b.a.useEffect((function(){var e=null;I.label||(e=C(C({},e),{},{label:"Label is required"})),I.configKey||(e=C(C({},e),{},{configKey:"Key is required"})),x(e||null),B(null)}),[I]),b.a.createElement(b.a.Fragment,null,b.a.createElement("div",a()({},i,{ref:t,onClick:function(e){g(!0),o&&o(e)}}),r),b.a.createElement(m.a,{open:f,maxWidth:"sm",fullWidth:!0,onClose:function(){return k?null:g(!1)}},b.a.createElement(h.a,null,n?"Edit":"Add"," config key"),b.a.createElement(v.a,null,b.a.createElement("div",null,b.a.createElement(L.a,{fullWidth:!0,required:!0,error:!!P&&!!P.label,value:I.configKey||"",label:"Key",onChange:function(e){return N({configKey:e.target.value})}})),b.a.createElement("br",null),b.a.createElement("div",null,b.a.createElement(L.a,{fullWidth:!0,required:!0,error:!!P&&!!P.configKey,value:I.label||"",label:"Label",onChange:function(e){return N({label:e.target.value})}})),b.a.createElement("br",null),b.a.createElement("div",null,b.a.createElement(L.a,{fullWidth:!0,value:I.summary||"",label:"Summary",onChange:function(e){return N({summary:e.target.value})}})),M?b.a.createElement("div",null,b.a.createElement("br",null),b.a.createElement(E.a,{variant:"caption",color:"error"},JSON.stringify(M))):null),b.a.createElement(O.a,null,k?b.a.createElement(j.a,null,b.a.createElement(H.a,{size:20})):b.a.createElement(b.a.Fragment,null,b.a.createElement(j.a,{onClick:function(){return g(!1)}},"Cancel"),b.a.createElement(j.a,{variant:"contained",color:"primary",disabled:!!P,onClick:function(){w(!0),l(n,I,(function(e){w(!1),B(e),g(!1)}))}},"Save")))))}),"useConfigKeysContext{{ saveConfigKey }}\nuseState{[open, setOpen](false)}\nuseState{[saving, setSaving](false)}\nuseState{[formError, setFormError](null)}\nuseState{[saveError, setSaveError](null)}\nuseState{[form, _setForm](defaultForm)}\nuseEffect{}\nuseEffect{}\nuseEffect{}",(function(){return[p.b]})));w.propTypes={onClick:y.a.func,children:y.a.node,configKey:y.a.object};var K,S,P=w;t.a=P,(K="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(K.register(w,"ConfigKeyForm","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/Forms/ConfigKeyForm.js"),K.register(P,"default","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/Forms/ConfigKeyForm.js")),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&S(e)}).call(this,r(8)(e))},383:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(0),a=r.n(n),i=r(384),l=r(26),c=r(17),d=r(313),u=r(65),s=r(274),f=r(103);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(){Object(c.b)(i.a.PAGE_TITLE),Object(l.e)(i.a.PAGE_TITLE);var e=Object(d.b)(),t=e.updateConfigKeys,o=e.setState,n=e.state,b=n.configKeys,g=n.configKeysInitialised,y=n.loadingConfigKeys,p=n.duplicatingConfigKeys,m=n.deletingConfigKeys;return a.a.createElement(a.a.Fragment,null,g?a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{noDataMsg:"No config keys",selectable:!1,title:i.a.PAGE_TITLE,data:b,renderHeaderActions:r(390).default,renderRowAction:r(391).default,displayFields:[{key:"configKey",label:"Key"},{key:"label",label:"Label"},{key:"summary",label:"Summary"}],onSortData:function(e){o({configKeys:e}),t(e.map((function(e){return{id:e.id,position:e.position}})))}})):null,y&&a.a.createElement(u.a,null),m||p?a.a.createElement(f.a,null):null)};b(g,"useConfigKeysContext{{\n    updateConfigKeys,\n    setState,\n    state: {\n      configKeys,\n      configKeysInitialised,\n      loadingConfigKeys,\n      duplicatingConfigKeys,\n      deletingConfigKeys,\n    }\n  }}",(function(){return[d.b]}));var y,p,m=Object(d.a)(g);t.default=m,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"ConfigKeysList","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/List/index.js"),y.register(m,"default","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/List/index.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,r(8)(e))},384:function(e,t,r){"use strict";(function(e){var r;(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,n,a={PAGE_TITLE:"Configuration"};t.a=a,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(a,"default","/home/farai/WorkBench/neotree-editor/src/constants/copy/configKeys.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,r(8)(e))},385:function(e,t,r){"use strict";(function(e){var o,n=r(14),a=r.n(n),i=r(304);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,s=function(e){var t=e.setState;return function(){t({loadingConfigKeys:!0});var e=function(e,r){t(c(c({getConfigKeysError:e},r),{},{configKeysInitialised:!0,loadingConfigKeys:!1}))};i.d().then((function(t){return e(t.errors,t)})).catch(e)}};t.a=s,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(s,"default","/home/farai/WorkBench/neotree-editor/src/contexts/config-keys/_getConfigKeys.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(8)(e))},386:function(e,t,r){"use strict";(function(e){var o,n=r(14),a=r.n(n),i=r(304);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,s=function(e){var t=e.setState;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length){t({deletingConfigKeys:!0});var r=function(r){t((function(t){var o=t.configKeys;return c({deleteConfigKeysError:r,deletingConfigKeys:!1},r?null:{configKeys:o.filter((function(t){return e.indexOf(t.id)<0}))})}))};i.b({id:e[0]}).then((function(e){return r(e.errors,e)})).catch(r)}}};t.a=s,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(s,"default","/home/farai/WorkBench/neotree-editor/src/contexts/config-keys/_deleteConfigKeys.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(8)(e))},387:function(e,t,r){"use strict";(function(e){var o,n=r(14),a=r.n(n),i=r(304);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,s=function(e){var t=e.setState;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length){t({updatingConfigKeys:!0});var r=function(e,r){t(c(c({updateConfigKeysError:e},r),{},{updatingConfigKeys:!1}))};i.f({configKeys:e}).then((function(e){return r(e.errors,e)})).catch(r)}}};t.a=s,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(s,"default","/home/farai/WorkBench/neotree-editor/src/contexts/config-keys/_updateConfigKeys.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(8)(e))},388:function(e,t,r){"use strict";(function(e){var o,n=r(269),a=r.n(n),i=r(14),l=r.n(i),c=r(304);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,f,b=function(e){var t=e.setState;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length){t({duplicatingConfigKeys:!0});var r=function(r,o){t((function(t){var n=t.configKeys;return u({duplicateConfigKeysError:r,duplicatingConfigKeys:!1},r?null:{configKeys:n.reduce((function(t,r){return[].concat(a()(t),[r],a()(e.indexOf(r.id)<0?[]:[o.configKey]))}),[])})}))};c.c({id:e[0]}).then((function(e){return r(e.errors,e)})).catch(r)}}};t.a=b,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(b,"default","/home/farai/WorkBench/neotree-editor/src/contexts/config-keys/_duplicateConfigKeys.js"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(8)(e))},389:function(e,t,r){"use strict";(function(e){var o,n=r(14),a=r.n(n),i=r(269),l=r.n(i),c=r(304);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,f,b=function(e){var t=e.setState;return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n=function(r,n){o&&o(r,n),t((function(t){var r=t.configKeys,o=l()(r);return n&&n.configKey&&(o=e?r.map((function(e){return e.id===n.configKey.id?n.configKey:e})):[].concat(l()(r),[n.configKey])),{configKeys:o}}))},a=e?c.e:c.a,i=JSON.stringify(u({},r));a(u(u({},e),{},{data:i})).then((function(e){return n(e.errors,e)})).catch(n)}};t.a=b,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(b,"default","/home/farai/WorkBench/neotree-editor/src/contexts/config-keys/_saveConfigKey.js"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(8)(e))},390:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(0),a=r.n(n),i=r(2),l=r.n(i),c=r(152),d=r(281),u=r.n(d),s=r(283),f=r.n(s),b=r(99),g=r(325),y=r(324),p=r(349),m=r(350),h=r(351);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function v(e){var t=e.selected;return a.a.createElement(a.a.Fragment,null,t.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{ids:t},a.a.createElement(b.a,null,"Duplicate")),a.a.createElement(p.a,{ids:t},a.a.createElement(c.a,null,a.a.createElement(f.a,null)))),a.a.createElement(h.a,null,a.a.createElement(c.a,null,a.a.createElement(u.a,null))),a.a.createElement(y.a,null,a.a.createElement(h.a,null,a.a.createElement(g.a,{color:"secondary"},a.a.createElement(u.a,null)))))}v.propTypes={selected:l.a.array.isRequired};var O,j,L=function(e){return a.a.createElement(v,e)};t.default=L,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(v,"Actions","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/List/_renderHeaderActions.js"),O.register(L,"default","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/List/_renderHeaderActions.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}.call(this,r(8)(e))},391:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(22),a=r.n(n),i=r(0),l=r.n(i),c=r(2),d=r.n(c),u=r(152),s=r(287),f=r.n(s),b=r(455),g=r(476),y=r(41),p=r(349),m=r(350),h=r(351);function v(e){var t=e.row,r=l.a.useState(null),o=a()(r,2),n=o[0],i=o[1],c=function(){return i(null)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{onClick:function(e){return i(e.currentTarget)}},l.a.createElement(f.a,null)),l.a.createElement(b.a,{anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:c},l.a.createElement(g.a,{onClick:c,configKey:t,component:h.a},"Edit"),l.a.createElement(g.a,{onClick:c,ids:[t.id],component:m.a},"Duplicate"),l.a.createElement(g.a,{onClick:c,ids:[t.id],component:p.a},l.a.createElement(y.a,{color:"error"},"Delete"))))}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(v,"useState{[anchorEl, setAnchorEl](null)}"),v.propTypes={row:d.a.object.isRequired,rowIndex:d.a.number.isRequired};var O,j,L=function(e,t){return l.a.createElement(v,{row:e,rowIndex:t})};t.default=L,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(v,"Action","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/List/_renderRowAction.js"),O.register(L,"default","/home/farai/WorkBench/neotree-editor/src/containers/ConfigKeys/List/_renderRowAction.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}.call(this,r(8)(e))}}]);
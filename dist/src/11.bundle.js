(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{269:function(e,t,n){"use strict";var a=n(14),r=n.n(a),l=n(15),o=n.n(l),c=n(25),i=n.n(c),s=n(0),u=n.n(s),d=n(4),f=n.n(d),m=n(383),p=n(345),b=n(346),h=n(256),v=n(348),E=n(349),g=n(142),y=n(362),w=n(382),O=n(17),j=n.n(O),x=n(10),C=n.n(x),k=n(286),S=n.n(k),N=n(347),D=n(272),I=n(264),P=n.n(I),F=n(254),T=n(287),W=n.n(T),L=n(380),B=Object(D.c)((function(){return u.a.createElement("div",null,u.a.createElement(L.a,{title:"Drag to reposition"},u.a.createElement(F.a,{style:{cursor:"move"}},u.a.createElement(W.a,null))))})),R=Object(D.b)((function(e){var t=e.row,n=e.rowIndex,a=e.selectable,r=e.classes,l=e.selected,c=e.setSelected,i=e.displayFields,s=e.action,d=e.sortable;return u.a.createElement(p.a,{className:C()(r.dataItemRow,{selected:l.map((function(e){return e.rowIndex})).includes(n)})},a&&u.a.createElement(b.a,{padding:"none"},u.a.createElement(y.a,{checked:l.map((function(e){return e.rowIndex})).includes(n),onChange:function(){return c((function(e){return e.map((function(e){return e.rowIndex})).includes(n)?e.filter((function(e){return e.rowIndex!==n})):[].concat(P()(e),[{row:t,rowIndex:n}])}))}})),d&&u.a.createElement(b.a,{padding:"none"},u.a.createElement(B,null)),i.map((function(e,a){var r=e.render?e.render({row:t,rowIndex:n,column:e.key,columnIndex:a}):t[e.key];return u.a.createElement(b.a,o()({},e.cellProps,{key:"".concat(n).concat(e.key).concat(a)}),r)})),s?u.a.createElement(b.a,{align:"right",padding:"none"},s):null)})),A=Object(D.a)((function(e){var t=e.rows,n=e.sortable,a=e.classes,r=e.selected,l=e.selectable,o=e.setSelected,c=e.displayFields,i=e.renderRowAction,s=e.filter;return u.a.createElement(N.a,null,t.map((function(e,t){var d=t;return s&&!s(e)?null:u.a.createElement(R,{key:"".concat(d).concat(t),row:e,sortable:n,index:t,rowIndex:t,classes:a,selectable:l,action:i?i(e,t)||u.a.createElement(u.a.Fragment,null):null,displayFields:c,selected:r,setSelected:o})})))}));function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=j()((function(e){return{table:{minWidth:800},headerWrap:{position:"relative",height:60},header:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",boxSizing:"border-box",padding:e.spacing()},dataItemRow:{"&:hover, &.selected":{backgroundColor:e.palette.action.hover}}}}));function _(e){var t=e.noDataMsg,n=e.title,a=e.selectable,r=e.renderRowAction,l=e.data,c=e.onSortData,s=e.displayFields,d=e.renderHeaderActions,f=e.filter;a=!1!==a;var O=H(),j=u.a.useState([]),x=i()(j,2),k=x[0],N=x[1],D=u.a.useState(l),I=i()(D,2),P=I[0],F=I[1];return u.a.useEffect((function(){JSON.stringify(P)!==JSON.stringify(l)&&F(l)}),[l]),u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,{square:!0,elevation:0},u.a.createElement("div",{className:C()(O.headerWrap)},u.a.createElement("div",{className:C()(O.header)},u.a.createElement(g.a,{variant:"h6"},n),u.a.createElement("div",{style:{marginLeft:"auto"}}),d&&d({selected:k}))),u.a.createElement(w.a,null),P.length?u.a.createElement(m.a,{component:h.a},u.a.createElement(v.a,{className:C()(O.table)},u.a.createElement(E.a,null,u.a.createElement(p.a,null,a&&u.a.createElement(b.a,{padding:"none"},u.a.createElement(y.a,{indeterminate:k.length>0&&k.length<P.length,checked:P.length>0&&k.length===P.length,onChange:function(){return N((function(e){return e.length<P.length?P.map((function(e,t){return{row:e,rowIndex:t}})):[]}))}})),!!c&&u.a.createElement(b.a,null),s.map((function(e,t){return u.a.createElement(b.a,o()({},e.cellProps,{key:"".concat(e.key).concat(t)}),u.a.createElement("b",null,e.label))})),r?u.a.createElement(b.a,{align:"right"},u.a.createElement("b",null,"Action")):null)),u.a.createElement(A,{rows:P,filter:f,selectable:a,renderRowAction:r,classes:O,displayFields:s,selected:k,setSelected:N,useDragHandle:!0,sortable:!!c,onSortEnd:function(e){var t=e.oldIndex,n=e.newIndex,a=S()(P,{$splice:[[t,1],[n,0,P[t]]]}).map((function(e,t){return z(z({},e),{},{position:t+1})}));F(a),c(a)}}))):u.a.createElement("div",{style:{textAlign:"center",padding:25}},u.a.createElement(g.a,{color:"textSecondary"},t||"No data"))))}_.propTypes={noDataMsg:f.a.string,selectable:f.a.bool,renderRowAction:f.a.func,title:f.a.string.isRequired,displayFields:f.a.array.isRequired,renderHeaderActions:f.a.func,onSortData:f.a.func,data:f.a.array.isRequired,filter:f.a.func};t.a=_},275:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d}));var a=n(14),r=n.n(a),l=n(62);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(l.a)("/get-hospitals",c({body:e},t))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(l.a)("/delete-hospitals",c({method:"POST",body:e},t))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(l.a)("/add-hospital",c({method:"POST",body:e},t))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(l.a)("/update-hospital",c({method:"POST",body:e},t))}},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),l=n(4),o=n.n(l),c=n(327),i=n(254),s=n(142),u=n(312),d=n.n(u),f=n(20);function m(e){var t=e.backLink,n=e.title,a=Object(f.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{container:!0,alignItems:"center",spacing:1},r.a.createElement(c.a,{item:!0,xs:1,sm:1},r.a.createElement(i.a,{onClick:function(){return t?a.push(t):a.goBack()}},r.a.createElement(d.a,null))),r.a.createElement(c.a,{item:!0,xs:11,sm:11},r.a.createElement(s.a,{variant:"h5"},n))))}m.propTypes={title:o.a.node,backLink:o.a.string}},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(45),r=n.n(a),l=n(25),o=n.n(l),c=n(34),i=n.n(c),s=n(0),u=n.n(s),d=n(4),f=n.n(d),m=n(143),p=n(231),b=n(227),h=n(228),v=n(229),E=n(225),g=n(393),y=n(142),w=n(309),O=n(362);function j(e){var t=e.scriptId,n=u.a.useState(""),a=o()(n,2),l=a[0],c=a[1],s=u.a.useState(""),d=o()(s,2),f=d[0],j=d[1],x=u.a.useState(!1),C=o()(x,2),k=C[0],S=C[1],N=u.a.useState(!1),D=o()(N,2),I=D[0],P=D[1],F=u.a.useState(null),T=o()(F,2),W=T[0],L=T[1],B=u.a.useState(!1),R=o()(B,2),A=R[0],M=R[1],z=function(){I||(M(!1),c(""),j(""),S(!1))};function H(){return(H=r()(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),L(null),e.next=5,fetch("/import-scripts",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({url:l,importScriptId:f,updateScriptId:t})});case 5:return n=e.sent,e.next=8,n.json();case 8:if(a=e.sent,!(r=a.error?[a.error]:a.errors)){e.next=12;break}throw new Error(r.map((function(e){return e.message||e.msg||e})).join("\n"));case 12:window.location.reload(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),L(e.t0.message);case 18:P(!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}return u.a.useEffect((function(){L(null)}),[l,f]),u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{onClick:function(){return M(!0)},color:"primary"},"Import"),u.a.createElement(p.a,{open:A,onClose:z,maxWidth:"xs",fullWidth:!0},u.a.createElement(b.a,null,"Import script"),u.a.createElement(h.a,null,u.a.createElement(g.a,{value:l,onChange:function(e){return c(e.target.value)},label:"Webeditor URL",fullWidth:!0,required:!0,error:!l,variant:"outlined"}),u.a.createElement(y.a,{variant:"caption",color:"textSecondary"},"e.g. ",u.a.createElement("b",null,"https://webeditor.neotree.org")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(g.a,{value:f,onChange:function(e){return j(e.target.value)},label:"Script ID",fullWidth:!0,required:!0,error:!f,variant:"outlined"}),!!t&&u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(w.a,{control:u.a.createElement(O.a,{checked:k,onChange:function(){return S((function(e){return!e}))}}),label:u.a.createElement(y.a,{variant:"caption",color:"error"},"Confirm that you'd like to override this script with the imported script")})),!!W&&u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(y.a,{variant:"caption",color:"error"},W))),u.a.createElement(v.a,null,u.a.createElement("div",{style:{marginLeft:"auto"}}),u.a.createElement(m.a,{onClick:z,disabled:I},"Cancel")," ",u.a.createElement(m.a,{variant:"contained",disableElevation:!0,color:"secondary",disabled:I||!(l&&f&&(!t||k)),onClick:function(){return H.apply(this,arguments)}},"Import"),I&&u.a.createElement(u.a.Fragment,null," ",u.a.createElement(E.a,{size:20})))))}j.propTypes={scriptId:f.a.string}},311:function(e,t,n){"use strict";var a=n(15),r=n.n(a),l=n(16),o=n.n(l),c=n(0),i=n.n(c),s=n(4),u=n.n(s),d=n(10),f=n.n(d),m=n(17),p=n.n(m),b=n(382),h=["className","color"],v=p()((function(e){return{backgroundColor:function(t){var n=t.color,a=e.palette[n]?e.palette[n].main:null;return a?{backgroundColor:a}:{}}}})),E=i.a.forwardRef((function(e,t){var n=e.className,a=e.color,l=o()(e,h),c=v({color:a});return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,r()({},l,{ref:t,className:f()(n,c.backgroundColor)})))}));E.propTypes={className:u.a.string},t.a=E},351:function(e,t,n){"use strict";var a=n(37),r=n(146);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(0)),o=(0,a(n(147)).default)(l.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.default=o},352:function(e,t,n){"use strict";var a=n(37),r=n(146);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(0)),o=(0,a(n(147)).default)(l.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},353:function(e,t,n){"use strict";var a=n(7),r=n(2),l=n(1),o=n(0),c=n(9),i=n(11),s=n(99),u=n(13),d=o.forwardRef((function(e,t){var n=e.classes,r=e.className,i=e.disabled,d=void 0!==i&&i,f=e.disableFocusRipple,m=void 0!==f&&f,p=e.fullWidth,b=e.icon,h=e.indicator,v=e.label,E=e.onChange,g=e.onClick,y=e.onFocus,w=e.selected,O=e.selectionFollowsFocus,j=e.textColor,x=void 0===j?"inherit":j,C=e.value,k=e.wrapped,S=void 0!==k&&k,N=Object(a.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return o.createElement(s.a,Object(l.a)({focusRipple:!m,className:Object(c.a)(n.root,n["textColor".concat(Object(u.a)(x))],r,d&&n.disabled,w&&n.selected,v&&b&&n.labelIcon,p&&n.fullWidth,S&&n.wrapped),ref:t,role:"tab","aria-selected":w,disabled:d,onClick:function(e){E&&E(e,C),g&&g(e)},onFocus:function(e){O&&!w&&E&&E(e,C),y&&y(e)},tabIndex:w?0:-1},N),o.createElement("span",{className:n.wrapper},b,v),h)}));t.a=Object(i.a)((function(e){var t;return{root:Object(l.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(r.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(r.a)(t,"overflow","hidden"),Object(r.a)(t,"whiteSpace","normal"),Object(r.a)(t,"textAlign","center"),Object(r.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(d)},361:function(e,t,n){"use strict";var a,r=n(1),l=n(7),o=n(2),c=n(0),i=(n(55),n(9)),s=n(104),u=n(63);function d(){if(a)return a;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),a="reverse",e.scrollLeft>0?a="default":(e.scrollLeft=1,0===e.scrollLeft&&(a="negative")),document.body.removeChild(e),a}function f(e,t){var n=e.scrollLeft;if("rtl"!==t)return n;switch(d()){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n;default:return n}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var p={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function b(e){var t=e.onChange,n=Object(l.a)(e,["onChange"]),a=c.useRef(),o=c.useRef(null),i=function(){a.current=o.current.offsetHeight-o.current.clientHeight};return c.useEffect((function(){var e=Object(s.a)((function(){var e=a.current;i(),e!==a.current&&t(a.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),c.useEffect((function(){i(),t(a.current)}),[t]),c.createElement("div",Object(r.a)({style:p,ref:o},n))}var h=n(11),v=n(13),E=c.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.color,s=e.orientation,u=Object(l.a)(e,["classes","className","color","orientation"]);return c.createElement("span",Object(r.a)({className:Object(i.a)(n.root,n["color".concat(Object(v.a)(o))],a,"vertical"===s&&n.vertical),ref:t},u))})),g=Object(h.a)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(E),y=n(58),w=Object(y.a)(c.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),O=Object(y.a)(c.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),j=n(99),x=c.createElement(w,{fontSize:"small"}),C=c.createElement(O,{fontSize:"small"}),k=c.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.direction,s=e.orientation,u=e.disabled,d=Object(l.a)(e,["classes","className","direction","orientation","disabled"]);return c.createElement(j.a,Object(r.a)({component:"div",className:Object(i.a)(n.root,a,u&&n.disabled,"vertical"===s&&n.vertical),ref:t,role:null,tabIndex:null},d),"left"===o?x:C)})),S=Object(h.a)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(k),N=n(28),D=n(61),I=c.forwardRef((function(e,t){var n=e["aria-label"],a=e["aria-labelledby"],p=e.action,h=e.centered,v=void 0!==h&&h,E=e.children,y=e.classes,w=e.className,O=e.component,j=void 0===O?"div":O,x=e.indicatorColor,C=void 0===x?"secondary":x,k=e.onChange,I=e.orientation,P=void 0===I?"horizontal":I,F=e.ScrollButtonComponent,T=void 0===F?S:F,W=e.scrollButtons,L=void 0===W?"auto":W,B=e.selectionFollowsFocus,R=e.TabIndicatorProps,A=void 0===R?{}:R,M=e.TabScrollButtonProps,z=e.textColor,H=void 0===z?"inherit":z,_=e.value,q=e.variant,U=void 0===q?"standard":q,$=Object(l.a)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),K=Object(D.a)(),Y="scrollable"===U,J="rtl"===K.direction,V="vertical"===P,X=V?"scrollTop":"scrollLeft",G=V?"top":"left",Q=V?"bottom":"right",Z=V?"clientHeight":"clientWidth",ee=V?"height":"width";var te=c.useState(!1),ne=te[0],ae=te[1],re=c.useState({}),le=re[0],oe=re[1],ce=c.useState({start:!1,end:!1}),ie=ce[0],se=ce[1],ue=c.useState({overflow:"hidden",marginBottom:null}),de=ue[0],fe=ue[1],me=new Map,pe=c.useRef(null),be=c.useRef(null),he=function(){var e,t,n=pe.current;if(n){var a=n.getBoundingClientRect();e={clientWidth:n.clientWidth,scrollLeft:n.scrollLeft,scrollTop:n.scrollTop,scrollLeftNormalized:f(n,K.direction),scrollWidth:n.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}if(n&&!1!==_){var r=be.current.children;if(r.length>0){var l=r[me.get(_)];0,t=l?l.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},ve=Object(N.a)((function(){var e,t=he(),n=t.tabsMeta,a=t.tabMeta,r=0;if(a&&n)if(V)r=a.top-n.top+n.scrollTop;else{var l=J?n.scrollLeftNormalized+n.clientWidth-n.scrollWidth:n.scrollLeft;r=a.left-n.left+l}var c=(e={},Object(o.a)(e,G,r),Object(o.a)(e,ee,a?a[ee]:0),e);if(isNaN(le[G])||isNaN(le[ee]))oe(c);else{var i=Math.abs(le[G]-c[G]),s=Math.abs(le[ee]-c[ee]);(i>=1||s>=1)&&oe(c)}})),Ee=function(e){!function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},l=a.ease,o=void 0===l?m:l,c=a.duration,i=void 0===c?300:c,s=null,u=t[e],d=!1,f=function(){d=!0},p=function a(l){if(d)r(new Error("Animation cancelled"));else{null===s&&(s=l);var c=Math.min(1,(l-s)/i);t[e]=o(c)*(n-u)+u,c>=1?requestAnimationFrame((function(){r(null)})):requestAnimationFrame(a)}};u===n?r(new Error("Element already at target position")):requestAnimationFrame(p)}(X,pe.current,e)},ge=function(e){var t=pe.current[X];V?t+=e:(t+=e*(J?-1:1),t*=J&&"reverse"===d()?-1:1),Ee(t)},ye=function(){ge(-pe.current[Z])},we=function(){ge(pe.current[Z])},Oe=c.useCallback((function(e){fe({overflow:null,marginBottom:-e})}),[]),je=Object(N.a)((function(){var e=he(),t=e.tabsMeta,n=e.tabMeta;if(n&&t)if(n[G]<t[G]){var a=t[X]+(n[G]-t[G]);Ee(a)}else if(n[Q]>t[Q]){var r=t[X]+(n[Q]-t[Q]);Ee(r)}})),xe=Object(N.a)((function(){if(Y&&"off"!==L){var e,t,n=pe.current,a=n.scrollTop,r=n.scrollHeight,l=n.clientHeight,o=n.scrollWidth,c=n.clientWidth;if(V)e=a>1,t=a<r-l-1;else{var i=f(pe.current,K.direction);e=J?i<o-c-1:i>1,t=J?i>1:i<o-c-1}e===ie.start&&t===ie.end||se({start:e,end:t})}}));c.useEffect((function(){var e=Object(s.a)((function(){ve(),xe()})),t=Object(u.a)(pe.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[ve,xe]);var Ce=c.useCallback(Object(s.a)((function(){xe()})));c.useEffect((function(){return function(){Ce.clear()}}),[Ce]),c.useEffect((function(){ae(!0)}),[]),c.useEffect((function(){ve(),xe()})),c.useEffect((function(){je()}),[je,le]),c.useImperativeHandle(p,(function(){return{updateIndicator:ve,updateScrollButtons:xe}}),[ve,xe]);var ke=c.createElement(g,Object(r.a)({className:y.indicator,orientation:P,color:C},A,{style:Object(r.a)({},le,A.style)})),Se=0,Ne=c.Children.map(E,(function(e){if(!c.isValidElement(e))return null;var t=void 0===e.props.value?Se:e.props.value;me.set(t,Se);var n=t===_;return Se+=1,c.cloneElement(e,{fullWidth:"fullWidth"===U,indicator:n&&!ne&&ke,selected:n,selectionFollowsFocus:B,onChange:k,textColor:H,value:t})})),De=function(){var e={};e.scrollbarSizeListener=Y?c.createElement(b,{className:y.scrollable,onChange:Oe}):null;var t=ie.start||ie.end,n=Y&&("auto"===L&&t||"desktop"===L||"on"===L);return e.scrollButtonStart=n?c.createElement(T,Object(r.a)({orientation:P,direction:J?"right":"left",onClick:ye,disabled:!ie.start,className:Object(i.a)(y.scrollButtons,"on"!==L&&y.scrollButtonsDesktop)},M)):null,e.scrollButtonEnd=n?c.createElement(T,Object(r.a)({orientation:P,direction:J?"left":"right",onClick:we,disabled:!ie.end,className:Object(i.a)(y.scrollButtons,"on"!==L&&y.scrollButtonsDesktop)},M)):null,e}();return c.createElement(j,Object(r.a)({className:Object(i.a)(y.root,w,V&&y.vertical),ref:t},$),De.scrollButtonStart,De.scrollbarSizeListener,c.createElement("div",{className:Object(i.a)(y.scroller,Y?y.scrollable:y.fixed),style:de,ref:pe,onScroll:Ce},c.createElement("div",{"aria-label":n,"aria-labelledby":a,className:Object(i.a)(y.flexContainer,V&&y.flexContainerVertical,v&&!Y&&y.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var n=null,a="vertical"!==P?"ArrowLeft":"ArrowUp",r="vertical"!==P?"ArrowRight":"ArrowDown";switch("vertical"!==P&&"rtl"===K.direction&&(a="ArrowRight",r="ArrowLeft"),e.key){case a:n=t.previousElementSibling||be.current.lastChild;break;case r:n=t.nextElementSibling||be.current.firstChild;break;case"Home":n=be.current.firstChild;break;case"End":n=be.current.lastChild}null!==n&&(n.focus(),e.preventDefault())}},ref:be,role:"tablist"},Ne),ne&&ke),De.scrollButtonEnd)}));t.a=Object(h.a)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:Object(o.a)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(I)},400:function(e,t,n){"use strict";n.r(t);var a=n(45),r=n.n(a),l=n(25),o=n.n(l),c=n(34),i=n.n(c),s=n(0),u=n.n(s),d=n(20),f=n(225),m=n(361),p=n(353),b=n(60),h=n(130),v=n(275),E=n(14),g=n.n(E),y=n(4),w=n.n(y),O=n(328),j=n(329),x=n(386),C=n(393),k=n(404),S=n(398),N=n(362),D=n(311),I=n(142),P=n(309),F=n(327),T=n(143),W=n(291),L=n(31),B=n(308),R=n(264),A=n.n(R),M=n(231),z=n(227),H=n(228),_=n(229),q=n(254),U=n(268),$=n.n(U),K=n(366),Y=n(259),J=n(269),V=n(352),X=n.n(V),G=n(274),Q=n.n(G),Z=n(351),ee=n.n(Z);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae={calculation:null,condition:"",confidential:!1,dataType:null,defaultValue:null,format:null,type:null,key:null,refKey:null,label:null,minValue:null,maxValue:null,optional:!1,minDate:null,maxDate:null,minTime:null,maxTime:null,minDateKey:"",maxDateKey:"",minTimeKey:"",maxTimeKey:"",values:""},re=[ne(ne({},ae),{},{type:"dropdown",key:"BabyTransfered",label:"Has the baby been transfered from another facility"}),ne(ne({},ae),{},{type:"text",key:"patientNUID",label:"Search patient's NUID",condition:"$BabyTransfered = 'Y'"}),ne(ne({},ae),{},{type:"dropdown",key:"BabyTwin",values:"Y,Yes\nN,No",label:"Does the baby have a twin?"}),ne(ne({},ae),{},{type:"text",key:"BabyTwinNUID",label:"Search twin's NUID",condition:"$BabyTwin = 'Y'"})],le=[ne(ne({},ae),{},{type:"text",key:"patientNUID",values:"Y,Yes\nN,No",label:"Search patient's NUID"})];function oe(e){var t=e.enabled,n=e.onChange,a=e.savedFields,r=e.fields,l=e.scriptType,c=Object(s.useState)(!1),i=o()(c,2),d=i[0],f=i[1],m=Object(s.useState)(!!t),p=o()(m,2),b=p[0],h=p[1],v=Object(s.useState)([]),E=o()(v,2),g=E[0],y=E[1],w=u.a.useState(null),O=o()(w,2),j=O[0],x=O[1],C=function(){return x(null)},k=function(e){y((function(t){return[].concat(A()(t),[e])})),x(null)},S=function(e){confirm("Are you sure you want to remove this field?")&&y((function(t){return t.filter((function(t,n){return e!==n}))}))},D="Enable NUID Search",F=function(){f(!0);var e="admission"===l?re:le;y(a||(r.length?r:e))};return u.a.createElement(u.a.Fragment,null,t?u.a.createElement("div",{style:{display:"flex",alignItems:"baseline"}},u.a.createElement(P.a,{control:u.a.createElement(N.a,null),value:"nuid_search_enabled",label:D,checked:b,onChange:function(){h(!b),n({enabled:!b,fields:g})}}),u.a.createElement(q.a,{onClick:function(){return F()}},u.a.createElement(ee.a,null))):u.a.createElement(T.a,{color:"primary",onClick:function(){return F()}},D),u.a.createElement(M.a,{open:d,maxWidth:"sm",fullWidth:!0,onClose:function(){return f(!1)},scroll:"paper"},u.a.createElement(z.a,null,"Configure NUID Search Page"),u.a.createElement(H.a,null,u.a.createElement(J.a,{selectable:!1,noDataMsg:"No fields added",title:"Fields",data:g,renderHeaderActions:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(T.a,{color:"primary",startIcon:u.a.createElement($.a,null),onClick:function(e){return x(e.currentTarget)}},"Add field"),u.a.createElement(K.a,{anchorEl:j,keepMounted:!0,open:Boolean(j),onClose:C},u.a.createElement(Y.a,null,u.a.createElement(ce,{field:ne(ne({},ae),{},{type:"dropdown",key:"",values:"",label:"",condition:""}),onChange:k},"Yes/No")),u.a.createElement(Y.a,null,u.a.createElement(ce,{field:ne(ne({},ae),{},{type:"text",key:"",values:"",label:"",condition:""}),onChange:k},"NUID Search"))))},renderRowAction:function(e,t){return u.a.createElement("div",{style:{display:"flex",alignItems:"center"}},u.a.createElement(I.a,{color:"error"},u.a.createElement(q.a,{color:"inherit",onClick:function(){return S(t)}},u.a.createElement(Q.a,{fontSize:"small"}))),u.a.createElement(ce,{field:e,onChange:function(e){return y((function(n){return n.map((function(n,a){return a!==t?n:ne(ne({},n),e)}))}))},onDelete:function(){return S(t)}},u.a.createElement(q.a,null,u.a.createElement(X.a,{fontSize:"small"}))))},displayFields:[{key:"type",label:"Type",render:function(e){return{dropdown:"Yes/No",text:"NUID Search"}[e.row.type]}},{key:"key",label:"Key"},{key:"label",label:"Label"},{key:"condition",label:"Condition"}],onSortData:function(e){return y(e)}})),u.a.createElement(_.a,null,u.a.createElement(T.a,{variant:"outlined",onClick:function(){return f(!1)}},"Cancel")," ",u.a.createElement(T.a,{variant:"contained",disableElevation:!0,disabled:!g.length,color:"primary",onClick:function(){n({enabled:!0,fields:g}),f(!1),h(!0)}},"Save"))))}function ce(e){var t=e.onChange,n=e.field,a=e.children,r=e.onDelete,l=Object(s.useState)(!1),c=o()(l,2),i=c[0],d=c[1],f=Object(s.useState)(n),m=o()(f,2),p=m[0],b=m[1],h=function(e){return b((function(t){return ne(ne({},t),e)}))};return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{role:"button",onClick:function(){d(!0),b(n)}},a),u.a.createElement(M.a,{open:i,maxWidth:"sm",fullWidth:!0,onClose:function(){return d(!1)}},u.a.createElement(H.a,null,u.a.createElement("div",null,u.a.createElement(C.a,{fullWidth:!0,required:!0,value:p.label,name:"label",label:"Label",error:!p.label,onChange:function(e){return h({label:e.target.value})}})),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(C.a,{fullWidth:!0,required:!0,value:p.key,name:"key",label:"Key",error:!p.key,onChange:function(e){return h({key:e.target.value})}})),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(C.a,{fullWidth:!0,value:p.condition,name:"condition",label:"Condition",onChange:function(e){return h({condition:e.target.value})}})),u.a.createElement("br",null),"dropdown"===p.type&&u.a.createElement("div",null,u.a.createElement(C.a,{fullWidth:!0,multiline:!0,minRows:5,value:p.values,name:"values",label:"Options",error:!p.values,onChange:function(e){return h({values:e.target.value})}})),u.a.createElement("br",null)),u.a.createElement(_.a,null,!!r&&u.a.createElement(I.a,{color:"error"},u.a.createElement(q.a,{color:"inherit",onClick:function(){return r()}},u.a.createElement(Q.a,null))),u.a.createElement("div",{style:{marginLeft:"auto"}}),u.a.createElement(T.a,{variant:"outlined",onClick:function(){return d(!1)}},"Cancel")," ",u.a.createElement(T.a,{variant:"contained",disableElevation:!0,disabled:!(p.label&&p.key&&("dropdown"!==p.type||p.values)),color:"primary",onClick:function(){t(p),d(!1)}},"Save"))))}function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e){var t=e.script,n=e.hospitals,a=Object(L.d)().state.viewMode,l=Object(d.g)(),c=u.a.useState(se({exportable:!0,nuid_search_enabled:!1,nuidSearchFields:[],hospital:""},t)),s=o()(c,2),f=s[0],m=s[1],p=function(e){return m((function(t){return se(se({},t),"function"==typeof e?e(t):e)}))},h=u.a.useState(!1),v=o()(h,2),E=v[0],g=v[1],y=u.a.useCallback((function(){r()(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,fetch(t?"/update-script":"/create-script",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(f)});case 4:return n=e.sent,e.next=7,n.json();case 7:if(!(n=e.sent).errors||!n.errors.length){e.next=10;break}return e.abrupt("return",alert(JSON.stringify(n.errors)));case 10:t?l.push("/scripts"):window.location.href="/scripts/".concat(n.script.script_id),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),alert("Ooops... ".concat(e.t0.message));case 16:g(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))()}));return u.a.createElement(u.a.Fragment,null,u.a.createElement(O.a,null,u.a.createElement(j.a,null,u.a.createElement(F.a,{container:!0},u.a.createElement(F.a,{item:!0,xs:10},u.a.createElement(W.a,{backLink:"/scripts",title:"".concat(t?"Edit":"Add"," script")})),u.a.createElement(F.a,{item:!0,xs:2,style:{textAlign:"right"}},!!t&&u.a.createElement(B.a,{scriptId:t.script_id}))),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(I.a,{variant:"caption"},"Hospital"),u.a.createElement("select",{value:f.hospital,onChange:function(e){return p({hospital:e.target.value})},style:{background:"transparent",border:"1px solid #999",padding:10,outline:"none !important",borderRadius:5,display:"block",width:"100%"}},u.a.createElement("option",{value:""},"-- select --"),n.map((function(e){return u.a.createElement("option",{key:e.hospital_id,value:e.hospital_id},e.name)})))),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(C.a,{fullWidth:!0,required:!0,error:!f.title,value:f.title||"",label:"Title",onChange:function(e){return p({title:e.target.value})}})),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(C.a,{fullWidth:!0,value:f.printTitle||"",label:"Print title",onChange:function(e){return p({printTitle:e.target.value})}})),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(C.a,{fullWidth:!0,value:f.description||"",label:"Description",onChange:function(e){return p({description:e.target.value})}})),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(I.a,{variant:"button",color:"primary"},"Type"),u.a.createElement(D.a,{color:"primary"}),u.a.createElement("br",null),u.a.createElement(k.a,{name:"type",value:f.type||"",onChange:function(e){var t=e.target.value;p({type:t})}},[{name:"admission",label:"Admission"},{name:"discharge",label:"Discharge"},{name:"neolab",label:"NeoLab"}].map((function(e){return u.a.createElement(P.a,{key:e.name,value:e.name,control:u.a.createElement(S.a,null),label:e.label})}))),u.a.createElement("br",null),u.a.createElement(P.a,{control:u.a.createElement(N.a,null),value:"exportable",label:"Exportable",checked:!1!==f.exportable,onChange:function(){return p({exportable:!f.exportable})}}),u.a.createElement("br",null),u.a.createElement(oe,{scriptType:f.type,enabled:!1!==f.nuid_search_enabled,fields:f.nuidSearchFields||[],savedFields:t.nuidSearchFields&&t.nuidSearchFields.length?t.nuidSearchFields:void 0,onChange:function(e){var t=e.enabled,n=e.fields;return p({nuid_search_enabled:t,nuidSearchFields:t?n:[]})}})),u.a.createElement(x.a,{style:{justifyContent:"flex-end"}},"view"===a&&u.a.createElement(I.a,{color:"error",variant:"caption"},"Can't save because you're in view mode"),u.a.createElement(T.a,{color:"primary",onClick:function(){return y()},disabled:"view"===a||!(f.title&&!E)},"Save"))),E?u.a.createElement(b.a,null):null)}oe.propTypes={enabled:w.a.bool,onChange:w.a.func,fields:w.a.arrayOf(w.a.any),scriptType:w.a.string},ue.propTypes={script:w.a.object,hospitals:w.a.array};var de=ue,fe=function(){return u.a.createElement("div",{style:{margin:25,textAlign:"center"}},u.a.createElement(f.a,null))},me=Object(h.a)((function(){return n.e(14).then(n.bind(null,388))}),{LoaderComponent:fe}),pe=Object(h.a)((function(){return n.e(13).then(n.bind(null,389))}),{LoaderComponent:fe});t.default=function(){var e=Object(d.g)(),t=Object(d.h)(),n=t.scriptId,a=t.scriptSection,l=u.a.useState([]),c=o()(l,2),s=c[0],f=c[1],h=u.a.useState(null),E=o()(h,2),g=E[0],y=E[1],w=u.a.useState(!1),O=o()(w,2),j=O[0],x=O[1],C=u.a.useState(!1),k=o()(C,2),S=k[0],N=k[1],D=u.a.useState(a||"screens"),I=o()(D,2),P=I[0],F=I[1];return u.a.useEffect((function(){r()(i.a.mark((function e(){var t,a,r,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,v.c();case 4:if(t=e.sent,a=t.hospitals,f(a||[]),"new"===n){e.next=16;break}return e.next=10,fetch("/get-script?scriptId=".concat(n));case 10:return r=e.sent,e.next=13,r.json();case 13:l=e.sent,o=l.script,y(o);case 16:e.next=20;break;case 18:e.prev=18,e.t0=e.catch(1);case 20:return e.prev=20,x(!0),N(!1),e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[1,18,20,24]])})))()}),[]),j?u.a.createElement(u.a.Fragment,null,u.a.createElement(de,{script:g,hospitals:s}),u.a.createElement("br",null),g?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{centered:!0,value:P,indicatorColor:"primary",textColor:"primary",onChange:function(t,n){F(n),e.push("/scripts/".concat(g.scriptId,"/").concat(n))}},u.a.createElement(p.a,{value:"screens",label:"Screens"}),u.a.createElement(p.a,{value:"diagnoses",label:"Diagnoses"})),"screens"===P&&u.a.createElement(me,{script:g}),"diagnoses"===P&&u.a.createElement(pe,{script:g})):null,S&&u.a.createElement(b.a,null)):u.a.createElement(b.a,null)}}}]);
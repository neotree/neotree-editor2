(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{287:function(e,t,r){"use strict";(function(e){var a,o=r(13),n=r.n(o),i=r(8),l=r.n(i),c=r(22),d=r.n(c),s=r(0),u=r.n(s),f=r(2),p=r.n(f),b=r(513),_=r(412),g=r(413),h=r(102),y=r(410),m=r(411),v=r(41),O=r(498),L=r(423),E=r(47),H=r.n(E),D=r(12),G=r.n(D),j=r(320),P=r.n(j),S=r(294);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},M=H()((function(e){return{table:{minWidth:800},headerWrap:{position:"relative",height:60},header:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",boxSizing:"border-box",padding:e.spacing()},dataItemRow:{"&:hover, &.selected":{backgroundColor:e.palette.action.hover}}}}));function x(e){var t=e.noDataMsg,r=e.title,a=e.selectable,o=e.renderRowAction,n=e.data,i=e.onSortData,c=e.displayFields,s=e.renderHeaderActions;a=!1!==a;var f=M(),p=u.a.useState([]),E=d()(p,2),H=E[0],D=E[1],j=u.a.useState(n),w=d()(j,2),C=w[0],x=w[1];return u.a.useEffect((function(){JSON.stringify(C)!==JSON.stringify(n)&&x(n)}),[n]),u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,{square:!0,elevation:0},u.a.createElement("div",{className:G()(f.headerWrap)},u.a.createElement("div",{className:G()(f.header)},u.a.createElement(v.a,{variant:"h6"},r),u.a.createElement("div",{style:{marginLeft:"auto"}}),s&&s({selected:H}))),u.a.createElement(L.a,null),C.length?u.a.createElement(b.a,{component:h.a},u.a.createElement(y.a,{className:G()(f.table)},u.a.createElement(m.a,null,u.a.createElement(_.a,null,a&&u.a.createElement(g.a,{padding:"none"},u.a.createElement(O.a,{indeterminate:H.length>0&&H.length<C.length,checked:C.length>0&&H.length===C.length,onChange:function(){return D((function(e){return e.length<C.length?C.map((function(e,t){return{row:e,rowIndex:t}})):[]}))}})),u.a.createElement(g.a,null),c.map((function(e,t){return u.a.createElement(g.a,l()({},e.cellProps,{key:"".concat(e.key).concat(t)}),u.a.createElement("b",null,e.label))})),o?u.a.createElement(g.a,{align:"right"},u.a.createElement("b",null,"Action")):null)),u.a.createElement(S.a,{rows:C,selectable:a,renderRowAction:o,classes:f,displayFields:c,selected:H,setSelected:D,useDragHandle:!0,onSortEnd:function(e){var t=e.oldIndex,r=e.newIndex,a=P()(C,{$splice:[[t,1],[r,0,C[t]]]}).map((function(e,t){return k(k({},e),{},{position:t+1})}));x(a),i(a)}}))):u.a.createElement("div",{style:{textAlign:"center",padding:25}},u.a.createElement(v.a,{color:"textSecondary"},t||"No data"))))}C(x,"useStyles{classes}\nuseState{[selected, setSelected]([])}\nuseState{[data, setData](_data)}\nuseEffect{}",(function(){return[M]})),x.propTypes={noDataMsg:p.a.string,selectable:p.a.bool,renderRowAction:p.a.func,title:p.a.string.isRequired,displayFields:p.a.array.isRequired,renderHeaderActions:p.a.func,onSortData:p.a.func,data:p.a.array.isRequired};var W,B,I=x;t.a=I,(W="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(W.register(M,"useStyles","/home/farai/WorkBench/neotree-editor/src/components/DataTable/index.js"),W.register(x,"DataTable","/home/farai/WorkBench/neotree-editor/src/components/DataTable/index.js"),W.register(I,"default","/home/farai/WorkBench/neotree-editor/src/components/DataTable/index.js")),(B="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&B(e)}).call(this,r(5)(e))},294:function(e,t,r){"use strict";(function(e){var a,o=r(0),n=r.n(o),i=r(414),l=r(291),c=r(295);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,s,u=Object(l.a)((function(e){var t=e.rows,r=e.classes,a=e.selected,o=e.selectable,l=e.setSelected,d=e.displayFields,s=e.renderRowAction;return n.a.createElement(i.a,null,t.map((function(e,t){var i=t;return n.a.createElement(c.a,{key:"".concat(i).concat(t),row:e,index:t,rowIndex:t,classes:r,selectable:o,action:s?s(e,t)||n.a.createElement(n.a.Fragment,null):null,displayFields:d,selected:a,setSelected:l})})))}));t.a=u,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(u,"default","/home/farai/WorkBench/neotree-editor/src/components/DataTable/Body.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(5)(e))},295:function(e,t,r){"use strict";(function(e){var a,o=r(8),n=r.n(o),i=r(281),l=r.n(i),c=r(0),d=r.n(c),s=r(412),u=r(413),f=r(498),p=r(157),b=r(12),_=r.n(b),g=r(291),h=r(321),y=r.n(h),m=r(512);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var v,O,L=Object(g.c)((function(){return d.a.createElement("div",null,d.a.createElement(m.a,{title:"Drag to reposition"},d.a.createElement(p.a,{style:{cursor:"move"}},d.a.createElement(y.a,null))))})),E=Object(g.b)((function(e){var t=e.row,r=e.rowIndex,a=e.selectable,o=e.classes,i=e.selected,c=e.setSelected,p=e.displayFields,b=e.action;return d.a.createElement(s.a,{className:_()(o.dataItemRow,{selected:i.map((function(e){return e.rowIndex})).includes(r)})},a&&d.a.createElement(u.a,{padding:"none"},d.a.createElement(f.a,{checked:i.map((function(e){return e.rowIndex})).includes(r),onChange:function(){return c((function(e){return e.map((function(e){return e.rowIndex})).includes(r)?e.filter((function(e){return e.rowIndex!==r})):[].concat(l()(e),[{row:t,rowIndex:r}])}))}})),d.a.createElement(u.a,{padding:"none"},d.a.createElement(L,null)),p.map((function(e,a){var o=e.render?e.render({row:t,rowIndex:r,column:e.key,columnIndex:a}):(t.data||t)[e.key];return d.a.createElement(u.a,n()({},e.cellProps,{key:"".concat(r).concat(e.key).concat(a)}),o)})),b?d.a.createElement(u.a,{align:"right",padding:"none"},b):null)}));t.a=E,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(L,"DragHandle","/home/farai/WorkBench/neotree-editor/src/components/DataTable/Row.js"),v.register(E,"default","/home/farai/WorkBench/neotree-editor/src/components/DataTable/Row.js")),(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&O(e)}).call(this,r(5)(e))},302:function(e,t,r){"use strict";(function(e){r.d(t,"d",(function(){return u})),r.d(t,"f",(function(){return f})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"e",(function(){return _})),r.d(t,"g",(function(){return g})),r.d(t,"a",(function(){return h}));var a,o=r(13),n=r.n(o),i=r(30);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,s,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/get-diagnoses",c({body:e},t))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/update-diagnoses",c({method:"POST",body:e},t))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/delete-diagnosis",c({method:"POST",body:e},t))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/duplicate-diagnosis",c({method:"POST",body:e},t))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/get-diagnosis",c({body:e},t))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/update-diagnosis",c({method:"POST",body:e},t))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(i.a)("/create-diagnosis",c({method:"POST",body:e},t))};(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(u,"getDiagnoses","/home/farai/WorkBench/neotree-editor/src/api/diagnoses/index.js"),d.register(f,"updateDiagnoses","/home/farai/WorkBench/neotree-editor/src/api/diagnoses/index.js"),d.register(p,"deleteDiagnosis","/home/farai/WorkBench/neotree-editor/src/api/diagnoses/index.js"),d.register(b,"duplicateDiagnosis","/home/farai/WorkBench/neotree-editor/src/api/diagnoses/index.js"),d.register(_,"getDiagnosis","/home/farai/WorkBench/neotree-editor/src/api/diagnoses/index.js"),d.register(g,"updateDiagnosis","/home/farai/WorkBench/neotree-editor/src/api/diagnoses/index.js"),d.register(h,"createDiagnosis","/home/farai/WorkBench/neotree-editor/src/api/diagnoses/index.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(5)(e))},358:function(e,t,r){"use strict";(function(e){var r;(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,o,n={PAGE_TITLE:"Diagnoses"};t.a=n,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(n,"default","/home/farai/WorkBench/neotree-editor/src/constants/copy/diagnoses.js"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,r(5)(e))},360:function(e,t,r){"use strict";(function(e){var a,o=r(8),n=r.n(o),i=r(22),l=r.n(i),c=r(11),d=r.n(c),s=r(0),u=r.n(s),f=r(2),p=r.n(f),b=r(251),_=r(244),g=r(243),h=r(242),y=r(103),m=r(41),v=r(245),O=r(290);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},E=u.a.forwardRef(L((function(e,t){var r=e.children,a=e.ids,o=e.type,i=e.onClick,c=e.onSuccess,s=d()(e,["children","ids","type","onClick","onSuccess"]),f=a.length>1,p=u.a.useState(!1),L=l()(p,2),E=L[0],H=L[1],D=u.a.useState(!1),G=l()(D,2),j=G[0],P=G[1],S=u.a.useState(!1),w=l()(S,2),k=w[0],C=w[1],M=u.a.useState([]),x=l()(M,2),W=x[0],B=x[1],I=u.a.useState(null),R=l()(I,2),A=R[0],T=R[1],q=u.a.useState(!1),K=l()(q,2),F=K[0],U=K[1],V=u.a.useState(""),N=l()(V,2),J=N[0],z=N[1],$=u.a.useState(!1),Q=l()($,2),X=Q[0],Y=Q[1];u.a.useEffect((function(){T(null),z(null),E&&!k&&(P(!0),O.g().then((function(e){var t=e.error,r=e.scripts;if(t)return T(t);B(r),C(!0),P(!1)})).then((function(e){T(e),P(!1)})))}),[E]);var Z=f?"diagnosis"===o?"diagnoses":"screens":o;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",n()({},s,{ref:t,onClick:function(e){H(!0),i&&i(e)}}),r),u.a.createElement(b.a,{open:E,onClose:function(){return H(!1)},fullWidth:!0,maxWidth:"sm"},u.a.createElement(h.a,null,"Copy ",Z),j?u.a.createElement(g.a,null,u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement(v.a,null))):u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,null,u.a.createElement(m.a,null,"Copy to"),u.a.createElement("select",{value:J||"",style:{maxWidth:200,background:"transparent",border:"1px solid #ddd",padding:10,outline:"none !important"},onChange:function(e){return z(e.target.value)}},u.a.createElement("option",{value:""},"Select script"),W.map((function(e,t){return u.a.createElement("option",{key:t,value:e.id},e.data.title)})))),u.a.createElement(_.a,null,u.a.createElement(y.a,{disabled:F,onClick:function(){return H(!1)}},"Cancel"),u.a.createElement(y.a,{color:"primary",variant:"contained",disabled:F||!J,onClick:function(){var e=null;switch(o){case"screen":e=O.b;break;case"diagnosis":e=O.a}e&&(U(!0),T(null),e({ids:a,script_id:J}).then((function(e){var t=e.error,r=e.items;T(t),U(!1),z(""),c&&c(r,J),Y(!0)})).catch((function(e){T(e),U(!1)})))}},"Copy"),A?u.a.createElement(m.a,{variant:"caption",color:"error"},A.msg||A.message||JSON.stringify(A)):null))),u.a.createElement(b.a,{open:X,onClose:function(){return Y(!1)},fullWidth:!0,maxWidth:"sm"},u.a.createElement(g.a,null,u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement(m.a,null,"Copied ",u.a.createElement("b",null,Z)," successfully."))),u.a.createElement(_.a,null,u.a.createElement(y.a,{accent:!0,onClick:function(){H(!1),Y(!1)}},"OK"))))}),"useState{[open, setOpen](false)}\nuseState{[loading, setLoading](false)}\nuseState{[scriptsLoaded, setScriptsLoaded](false)}\nuseState{[scripts, setScripts]([])}\nuseState{[error, setError](null)}\nuseState{[copying, setCopying](false)}\nuseState{[script_id, setScriptId]('')}\nuseState{[displaySuccessModal, setDisplaySuccessModal](false)}\nuseEffect{}"));E.propTypes={onClick:p.a.func,children:p.a.node,ids:p.a.array.isRequired,onSuccess:p.a.func,type:p.a.oneOf(["screen","diagnosis"]).isRequired};var H,D,G=E;t.a=G,(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(E,"CopyScriptItems","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/CopyScriptItems.js"),H.register(G,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/CopyScriptItems.js")),(D="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&D(e)}).call(this,r(5)(e))},361:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return f}));var a,o=r(0),n=r.n(o),i=r(487);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},c=n.a.createContext(null),d=function(){return n.a.useContext(c)};l(d,"useContext{}");var s,u,f=function(e){return l((function(t){var r=Object(i.a)(),a=r.router.match.params.scriptId;return n.a.useEffect((function(){r.getDiagnoses({script_id:a})}),[a]),n.a.createElement(c.Provider,{value:r},n.a.createElement(e,t))}),"useContextValue{value}\nuseEffect{}",(function(){return[i.a]}))};(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(c,"DiagnosesContext","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/index.js"),s.register(d,"useDiagnosesContext","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/index.js"),s.register(f,"provideDiagnosesContext","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/index.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(5)(e))},386:function(e,t,r){"use strict";r.r(t),function(e){var a;r.d(t,"defaultState",(function(){return i})),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,n,i={documentTitle:"",navSection:null};(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(i,"defaultState","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/ContextValue/_defaults.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}.call(this,r(5)(e))},387:function(e,t,r){"use strict";(function(e){var a,o=r(8),n=r.n(o),i=r(281),l=r.n(i),c=r(0),d=r.n(c),s=r(361),u=r(283),f=r(360);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var p,b,_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=d.a.forwardRef(_((function(e,t){var r=Object(u.b)().state.script,a=Object(s.b)().setState;return d.a.createElement(d.a.Fragment,null,d.a.createElement(f.a,n()({},e,{ref:t,type:"diagnosis",onSuccess:function(e,t){t===r.id&&a((function(t){return{diagnoses:[].concat(l()(t.diagnoses),l()(e))}}))}})))}),"useScriptContext{{ state: { script } }}\nuseDiagnosesContext{{ setState: setDiagnosesState }}",(function(){return[u.b,s.b]}))),h=g;t.a=h,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(g,"CopyDiagnoses","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/Forms/CopyDiagnoses.js"),p.register(h,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/Forms/CopyDiagnoses.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,r(5)(e))},486:function(e,t,r){"use strict";r.r(t),function(e){var a,o=r(13),n=r.n(o),i=r(0),l=r.n(i),c=r(361),d=r(287),s=r(106),u=r(245),f=r(358);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(){var e=Object(c.b)(),t=e.updateDiagnoses,a=e.setState,o=e.state,n=o.diagnoses,i=o.diagnosesInitialised,p=o.loadingDiagnoses,_=o.duplicatingDiagnoses,g=o.deletingDiagnoses;return l.a.createElement(l.a.Fragment,null,i?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{selectable:!0,noDataMsg:"No diagnoses",title:f.a.PAGE_TITLE,data:n.map((function(e){return b(b({},e),{},{data:b(b({},e.data),{},{position:e.position})})})),renderHeaderActions:r(494).default,renderRowAction:r(495).default,displayFields:[{key:"position",label:"Position",render:function(e){return e.row.position}},{key:"name",label:"Name"},{key:"description",label:"Description"}],onSortData:function(e){a({diagnoses:e}),t(e.map((function(e){return{id:e.id,position:e.position}})))}})):null,p&&l.a.createElement("div",{style:{margin:25,textAlign:"center"}},l.a.createElement(u.a,null)),g||_?l.a.createElement(s.a,null):null)};_(g,"useDiagnosesContext{{\n    updateDiagnoses,\n    setState,\n    state: {\n      diagnoses,\n      diagnosesInitialised,\n      loadingDiagnoses,\n      duplicatingDiagnoses,\n      deletingDiagnoses,\n    }\n  }}",(function(){return[c.b]}));var h,y,m=Object(c.a)(g);t.default=m,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(g,"DiagnosesList","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/List/index.js"),h.register(m,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/List/index.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,r(5)(e))},487:function(e,t,r){"use strict";(function(e){var a,o=r(22),n=r.n(o),i=r(0),l=r.n(i),c=r(330),d=r(488);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var s,u,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e){var t=Object(c.a)(),r=l.a.useState(d.b.defaultState),a=n()(r,2),o=a[0],i=a[1];return new d.a({props:e,state:o,router:t,setState:i})};f(p,"useRouter{router}\nuseState{[state, setState](defaults.defaultState)}",(function(){return[c.a]})),t.a=p,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(p,"default","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/ContextValue/index.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(5)(e))},488:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return ContextValue}));var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(110),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(111),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__),_defaults__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(386),enterModule;function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}__webpack_require__.d(__webpack_exports__,"b",(function(){return _defaults__WEBPACK_IMPORTED_MODULE_3__})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},ContextValue=function(){function ContextValue(e){var t=this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,ContextValue),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this,"setState",(function(e){return t._setState((function(t){return _objectSpread(_objectSpread({},t),"function"==typeof e?e(t):e)}))})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this,"init",__webpack_require__(489).default.bind(this)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this,"deleteDiagnoses",__webpack_require__(490).default.bind(this)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this,"duplicateDiagnoses",__webpack_require__(491).default.bind(this)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this,"getDiagnoses",__webpack_require__(492).default.bind(this)),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this,"updateDiagnoses",__webpack_require__(493).default.bind(this)),this.defaults=_defaults__WEBPACK_IMPORTED_MODULE_3__,this.init(e)}return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ContextValue,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ContextValue}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(ContextValue,"ContextValue","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/ContextValue/Value.js"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(5)(module))},489:function(e,t,r){"use strict";r.r(t),function(e){var a;r.d(t,"default",(function(){return i})),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var o,n;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function i(e){var t=e.state,r=e.setState,a=e.router;this.state=t,this._setState=r,this.router=a}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(i,"init","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/ContextValue/_init.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}.call(this,r(5)(e))},490:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",(function(){return u}));var a,o=r(13),n=r.n(o),i=r(302);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var d,s;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function u(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(t.length){this.setState({deletingDiagnoses:!0});var r=function(r){e.setState((function(e){var a=e.diagnoses;return c({deleteDiagnosesError:r,deletingDiagnoses:!1},r?null:{diagnoses:a.filter((function(e){return t.indexOf(e.id)<0}))})}))};i.b({id:t[0]}).then((function(e){return r(e.errors,e)})).catch(r)}}(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(u,"deleteDiagnoses","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/ContextValue/_deleteDiagnoses.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,r(5)(e))},491:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",(function(){return p}));var a,o=r(281),n=r.n(o),i=r(13),l=r.n(i),c=r(302);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var u,f;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function p(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(t.length){this.setState({duplicatingDiagnoses:!0});var r=function(r,a){e.setState((function(e){var o=e.diagnoses;return s({duplicateDiagnosesError:r,duplicatingDiagnoses:!1},r?null:{diagnoses:o.reduce((function(e,r){return[].concat(n()(e),[r],n()(t.indexOf(r.id)<0?[]:[a.diagnosis]))}),[])})}))};c.c({id:t[0]}).then((function(e){return r(e.errors,e)})).catch(r)}}(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(p,"duplicateDiagnoses","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/ContextValue/_duplicateDiagnoses.js"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}.call(this,r(5)(e))},492:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",(function(){return u}));var a,o=r(13),n=r.n(o),i=r(302);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var d,s;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function u(e){var t=this;this.setState({loadingDiagnoses:!0});var r=function(e,r){t.setState(c(c({getDiagnosesError:e},r),{},{diagnosesInitialised:!0,loadingDiagnoses:!1}))};i.d(e).then((function(e){return r(e.errors,e)})).catch(r)}(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(u,"getDiagnoses","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/ContextValue/_getDiagnoses.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,r(5)(e))},493:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",(function(){return u}));var a,o=r(13),n=r.n(o),i=r(302);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var d,s;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function u(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(t.length){this.setState({updatingDiagnoses:!0});var r=function(t,r){e.setState(c(c({updateDiagnosesError:t},r),{},{updatingDiagnoses:!1}))};i.f({diagnoses:t}).then((function(e){return r(e.errors,e)})).catch(r)}}(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(u,"updateDiagnoses","/home/farai/WorkBench/neotree-editor/src/contexts/diagnoses/ContextValue/_updateDiagnoses.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,r(5)(e))},494:function(e,t,r){"use strict";r.r(t),function(e){var a,o=r(0),n=r.n(o),i=r(2),l=r.n(i),c=r(157),d=r(286),s=r.n(d),u=r(103),f=r(283),p=r(42),b=r(512),_=r(387);function g(e){var t=e.selected,r=Object(f.b)().state.script;return n.a.createElement(n.a.Fragment,null,t.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement(_.a,{ids:t.map((function(e){return e.row.id}))},n.a.createElement(u.a,null,"Copy"))),n.a.createElement(p.b,{to:"/scripts/".concat(r.id,"/diagnoses/new")},n.a.createElement(b.a,{title:"New diagnosis"},n.a.createElement(c.a,null,n.a.createElement(s.a,null)))))}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(g,"useScriptContext{{ state: { script } }}",(function(){return[f.b]})),g.propTypes={selected:l.a.array.isRequired};var h,y,m=function(e){return n.a.createElement(g,e)};t.default=m,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(g,"Actions","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/List/_renderHeaderActions.js"),h.register(m,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/List/_renderHeaderActions.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,r(5)(e))},495:function(e,t,r){"use strict";r.r(t),function(e){var a,o=r(22),n=r.n(o),i=r(0),l=r.n(i),c=r(2),d=r.n(c),s=r(157),u=r(300),f=r.n(u),p=r(499),b=r(514),_=r(41),g=r(42),h=r(496),y=r(387);function m(e){var t=e.row,r=l.a.useState(null),a=n()(r,2),o=a[0],i=a[1],c=function(){return i(null)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{onClick:function(e){return i(e.currentTarget)}},l.a.createElement(f.a,null)),l.a.createElement(p.a,{anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:c},l.a.createElement(b.a,{component:g.b,to:"/scripts/".concat(t.script_id,"/diagnoses/").concat(t.id),onClick:c},"Edit"),l.a.createElement(b.a,{onClick:c,ids:[t.id],component:y.a},"Copy"),l.a.createElement(b.a,{onClick:c,ids:[t.id],component:h.a},l.a.createElement(_.a,{color:"error"},"Delete"))))}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(m,"useState{[anchorEl, setAnchorEl](null)}"),m.propTypes={row:d.a.object.isRequired,rowIndex:d.a.number.isRequired};var v,O,L=function(e,t){return l.a.createElement(m,{row:e,rowIndex:t})};t.default=L,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(m,"Action","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/List/_renderRowAction.js"),v.register(L,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/List/_renderRowAction.js")),(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&O(e)}.call(this,r(5)(e))},496:function(e,t,r){"use strict";(function(e){var a,o=r(8),n=r.n(o),i=r(22),l=r.n(i),c=r(11),d=r.n(c),s=r(0),u=r.n(s),f=r(2),p=r.n(f),b=r(85),_=r(361);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=u.a.forwardRef(g((function(e,t){var r=e.children,a=e.ids,o=e.onClick,i=d()(e,["children","ids","onClick"]),c=a.length>1,s=Object(b.a)(),f=l()(s,2),p=f[0],g=f[1],h=Object(_.b)().deleteDiagnoses;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",n()({},i,{ref:t,onClick:function(e){g(),o&&o(e)}}),r),p({title:"Delete diagnosis".concat(c?"s":""),message:"Are you sure you want to delete diagnosis".concat(c?"s":"","?"),onConfirm:function(){return h(a)}}))}),"useConfirmModal{[renderConfirmModal, confirm]}\nuseDiagnosesContext{{ deleteDiagnoses }}",(function(){return[b.a,_.b]})));h.propTypes={onClick:p.a.func,children:p.a.node,ids:p.a.array.isRequired};var y,m,v=h;t.a=v,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(h,"DeleteDiagnoses","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/Forms/DeleteDiagnoses.js"),y.register(v,"default","/home/farai/WorkBench/neotree-editor/src/containers/Scripts/Script/Diagnoses/Forms/DeleteDiagnoses.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,r(5)(e))}}]);
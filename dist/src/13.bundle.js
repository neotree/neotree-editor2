(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{458:function(e,t,a){"use strict";a.r(t),function(e){var n,r=a(0),o=a.n(r),i=a(459),c=a(461);(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).enterModule)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,s,d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null),o.a.createElement("br",null),o.a.createElement(i.a,null))},u=d;t.default=u,(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).default)&&(l.register(d,"IndexPage","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/index.js"),l.register(u,"default","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/index.js")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).leaveModule)&&s(e)}.call(this,a(4)(e))},459:function(e,t,a){"use strict";(function(e){var n,r=a(137),o=a.n(r),i=a(0),c=a.n(i),l=a(501),s=a(520),d=a(513),u=a(512),f=a(460),m=a.n(f),p=a(511),g=a(525),x=a(508),h=a(507),y=a(510),b=a(43);(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).enterModule)&&n(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},E=function(){var e=c.a.useRef(null),t=c.a.useState(!1),a=o()(t,2),n=a[0],r=a[1],i=c.a.useState(null),f=o()(i,2),v=f[0],E=f[1],S=c.a.useState(null),k=o()(S,2),w=k[0],G=k[1],j=c.a.useState(!1),H=o()(j,2),L=H[0],C=H[1],D=c.a.useState(!1),M=o()(D,2),I=M[0],W=M[1],z=c.a.useState(""),F=o()(z,2),O=F[0],K=F[1];c.a.useEffect(function(){b.a.get("/api/key").then(function(e){var t=e.payload.apiKey;r(!0),K(t||"")}).catch(function(e){r(!0),E(e)})},[]);var A=function(){W(!0),b.a.post("/api/generate-key",{apiKey:O}).then(function(e){var t=e.payload.apiKey;W(!1),K(t)}).catch(function(e){W(!1),G(e)})};return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{variant:"h5"},"Api keys"),c.a.createElement("br",null),n?c.a.createElement(c.a.Fragment,null,v?c.a.createElement(l.a,{color:"error"},v.msg||v.message||JSON.stringify(v)):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{container:!0,spacing:2,alignItems:"center"},c.a.createElement(p.a,{item:!0,xs:12,sm:4},c.a.createElement(s.a,{inputRef:e,value:O?O.key:"",disabled:!O||I,placeholder:"API KEY",fullWidth:!0,onChange:function(){},onFocus:function(e){e.target.select(),document.execCommand("copy")}})),c.a.createElement(p.a,{item:!0,xs:12,sm:8},O?c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{size:"small",onClick:function(){return e.current.focus()}},c.a.createElement(m.a,{fontSize:"small"})),"  ",c.a.createElement("a",{href:"/api/download-api-config",target:"__blank",style:{textDecoration:"none",outline:"none !important"}},c.a.createElement(d.a,{size:"small",color:"primary"},"Download api config file")),"  "):null,O?null:c.a.createElement(d.a,{size:"small",variant:"contained",color:"primary",disabled:I,onClick:function(){G(null),O?C(!0):A()}},"Genarate Api Key")),w?c.a.createElement(l.a,{color:"error",variant:"caption"},w.msg||w.message||JSON.stringify(w)):null))):c.a.createElement(y.a,{size:20}),c.a.createElement(g.a,{open:L,onClose:function(){return C(!1)}},c.a.createElement(h.a,null,c.a.createElement(l.a,null,"Are you sure you want to change the existing api key?")),c.a.createElement(x.a,null,c.a.createElement(d.a,{onClick:function(){C(!1)}},"No"),c.a.createElement(d.a,{color:"primary",onClick:function(){A(),C(!1)}},"Yes"))))};v(E,"useRef{inputRef}\nuseState{[initialised, setInitialised](false)}\nuseState{[initError, setInitErrror](null)}\nuseState{[keyGenError, setKeyGenError](null)}\nuseState{[openConfirmKeyGenModal, setOpenConfirmKeyGenModal](false)}\nuseState{[generatingKey, setGeneratingKey](false)}\nuseState{[apiKey, setApiKey]('')}\nuseEffect{}");var S,k,w=E;t.a=w,(S=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).default)&&(S.register(E,"ApiKey","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/ApiKey.js"),S.register(w,"default","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/ApiKey.js")),(k=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).leaveModule)&&k(e)}).call(this,a(4)(e))},460:function(e,t,a){"use strict";var n=a(191);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(225)).default)(r.default.createElement("path",{d:"M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"}),"FilterNoneRounded");t.default=o},461:function(e,t,a){"use strict";(function(e){var n,r=a(137),o=a.n(r),i=a(0),c=a.n(i),l=a(501),s=a(510),d=a(513),u=a(43);(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).enterModule)&&n(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(){var e=c.a.useState(!1),t=o()(e,2),a=t[0],n=t[1],r=c.a.useState(!1),i=o()(r,2),f=(i[0],i[1]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{variant:"h5"},"Export data"),c.a.createElement("br",null),a?c.a.createElement(s.a,{size:20}):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{size:"small",color:"primary",onClick:function(){return n(!0),f(null),void u.a.post("/export-to-firebase").then(function(e){return n(!1),e}).then(function(e){return console.log("RSLTS",e)}).catch(f)}},"Export to firebase")),c.a.createElement("br",null))};f(m,"useState{[exporting, setExporting](false)}\nuseState{[exportingError, setExportingError](false)}");var p,g,x=m;t.a=x,(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).default)&&(p.register(m,"ExportToFirebase","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/ExportToFirebase.js"),p.register(x,"default","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/ExportToFirebase.js")),(g=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).leaveModule)&&g(e)}).call(this,a(4)(e))},510:function(e,t,a){"use strict";var n=a(2),r=a(128),o=a(0),i=a.n(o),c=(a(3),a(129)),l=a(130),s=a(138);function d(e){var t,a,n;return t=e,a=0,n=1,e=(Math.min(Math.max(a,t),n)-a)/(n-a),e=(e-=1)*e*e+1}var u=i.a.forwardRef(function(e,t){var a,o=e.classes,l=e.className,u=e.color,f=void 0===u?"primary":u,m=e.disableShrink,p=void 0!==m&&m,g=e.size,x=void 0===g?40:g,h=e.style,y=e.thickness,b=void 0===y?3.6:y,v=e.value,E=void 0===v?0:v,S=e.variant,k=void 0===S?"indeterminate":S,w=Object(r.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),G={},j={},H={};if("determinate"===k||"static"===k){var L=2*Math.PI*((44-b)/2);G.strokeDasharray=L.toFixed(3),H["aria-valuenow"]=Math.round(E),"static"===k?(G.strokeDashoffset="".concat(((100-E)/100*L).toFixed(3),"px"),j.transform="rotate(-90deg)"):(G.strokeDashoffset="".concat((a=(100-E)/100,a*a*L).toFixed(3),"px"),j.transform="rotate(".concat((270*d(E/70)).toFixed(3),"deg)"))}return i.a.createElement("div",Object(n.a)({className:Object(c.a)(o.root,l,"inherit"!==f&&o["color".concat(Object(s.a)(f))],{indeterminate:o.indeterminate,static:o.static}[k]),style:Object(n.a)({width:x,height:x},j,{},h),ref:t,role:"progressbar"},H,w),i.a.createElement("svg",{className:o.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.a.createElement("circle",{className:Object(c.a)(o.circle,p&&o.circleDisableShrink,{indeterminate:o.circleIndeterminate,static:o.circleStatic}[k]),style:G,cx:44,cy:44,r:(44-b)/2,fill:"none",strokeWidth:b})))});t.a=Object(l.a)(function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},{name:"MuiCircularProgress",flip:!1})(u)},511:function(e,t,a){"use strict";var n=a(128),r=a(2),o=a(0),i=a.n(o),c=(a(3),a(129)),l=a(130),s=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var f=i.a.forwardRef(function(e,t){var a=e.alignContent,o=void 0===a?"stretch":a,l=e.alignItems,s=void 0===l?"stretch":l,d=e.classes,u=e.className,f=e.component,m=void 0===f?"div":f,p=e.container,g=void 0!==p&&p,x=e.direction,h=void 0===x?"row":x,y=e.item,b=void 0!==y&&y,v=e.justify,E=void 0===v?"flex-start":v,S=e.lg,k=void 0!==S&&S,w=e.md,G=void 0!==w&&w,j=e.sm,H=void 0!==j&&j,L=e.spacing,C=void 0===L?0:L,D=e.wrap,M=void 0===D?"wrap":D,I=e.xl,W=void 0!==I&&I,z=e.xs,F=void 0!==z&&z,O=e.zeroMinWidth,K=void 0!==O&&O,A=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),N=Object(c.a)(d.root,u,g&&[d.container,0!==C&&d["spacing-xs-".concat(String(C))]],b&&d.item,K&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==M&&d["wrap-xs-".concat(String(M))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==E&&d["justify-xs-".concat(String(E))],!1!==F&&d["grid-xs-".concat(String(F))],!1!==H&&d["grid-sm-".concat(String(H))],!1!==G&&d["grid-md-".concat(String(G))],!1!==k&&d["grid-lg-".concat(String(k))],!1!==W&&d["grid-xl-".concat(String(W))]);return i.a.createElement(m,Object(r.a)({className:N,ref:t},A))}),m=Object(l.a)(function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return s.forEach(function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})}),a}(e,"xs"),{},e.breakpoints.keys.reduce(function(t,a){return function(e,t,a){var n={};d.forEach(function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t},{}))},{name:"MuiGrid"})(f);t.a=m}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{457:function(e,t,a){"use strict";a.r(t),function(e){var n,r=a(0),i=a.n(r),o=a(458);(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).enterModule)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,l=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null))},d=l;t.default=d,(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).default)&&(c.register(l,"IndexPage","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/index.js"),c.register(d,"default","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/index.js")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).leaveModule)&&s(e)}.call(this,a(4)(e))},458:function(e,t,a){"use strict";(function(e){var n,r=a(138),i=a.n(r),o=a(0),c=a.n(o),s=a(500),l=a(519),d=a(512),u=a(511),f=a(459),m=a.n(f),p=a(510),g=a(524),x=a(507),y=a(506),v=a(509),h=a(43);(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).enterModule)&&n(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},k=function(){var e=c.a.useRef(null),t=c.a.useState(!1),a=i()(t,2),n=a[0],r=a[1],o=c.a.useState(null),f=i()(o,2),b=f[0],k=f[1],S=c.a.useState(null),E=i()(S,2),w=E[0],j=E[1],G=c.a.useState(!1),C=i()(G,2),D=C[0],H=C[1],M=c.a.useState(!1),I=i()(M,2),O=I[0],W=I[1],L=c.a.useState(""),K=i()(L,2),z=K[0],A=K[1];c.a.useEffect(function(){h.a.get("/api/key").then(function(e){var t=e.payload.apiKey;r(!0),A(t||"")}).catch(function(e){r(!0),k(e)})},[]);var N=function(){W(!0),h.a.post("/api/generate-key",{apiKey:z}).then(function(e){var t=e.payload.apiKey;W(!1),A(t)}).catch(function(e){W(!1),j(e)})};return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{variant:"h5"},"Api keys"),c.a.createElement("br",null),n?c.a.createElement(c.a.Fragment,null,b?c.a.createElement(s.a,{color:"error"},b.msg||b.message||JSON.stringify(b)):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{container:!0,spacing:2,alignItems:"center"},c.a.createElement(p.a,{item:!0,xs:12,sm:4},c.a.createElement(l.a,{inputRef:e,value:z?z.key:"",disabled:!z||O,placeholder:"API KEY",fullWidth:!0,onChange:function(){},onFocus:function(e){e.target.select(),document.execCommand("copy")}})),z?c.a.createElement(p.a,{item:!0,xs:2,sm:1},c.a.createElement(u.a,{onClick:function(){return e.current.focus()}},c.a.createElement(m.a,null))):null,c.a.createElement(p.a,{item:!0,xs:10,sm:7},c.a.createElement(d.a,{variant:"contained",color:"primary",disabled:O,onClick:function(){j(null),z?H(!0):N()}},"Genarate Api Key")),w?c.a.createElement(s.a,{color:"error",variant:"caption"},w.msg||w.message||JSON.stringify(w)):null))):c.a.createElement(v.a,{size:20}),c.a.createElement(g.a,{open:D,onClose:function(){return H(!1)}},c.a.createElement(y.a,null,c.a.createElement(s.a,null,"Are you sure you want to change the existing api key?")),c.a.createElement(x.a,null,c.a.createElement(d.a,{onClick:function(){H(!1)}},"No"),c.a.createElement(d.a,{color:"primary",onClick:function(){N(),H(!1)}},"Yes"))))};b(k,"useRef{inputRef}\nuseState{[initialised, setInitialised](false)}\nuseState{[initError, setInitErrror](null)}\nuseState{[keyGenError, setKeyGenError](null)}\nuseState{[openConfirmKeyGenModal, setOpenConfirmKeyGenModal](false)}\nuseState{[generatingKey, setGeneratingKey](false)}\nuseState{[apiKey, setApiKey]('')}\nuseEffect{}");var S,E,w=k;t.a=w,(S=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).default)&&(S.register(k,"ApiKey","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/ApiKey.js"),S.register(w,"default","/home/lamyfarai/Workbench/neotree-editor/src/App/Dashboard/Settings/IndexPage/ApiKey.js")),(E=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).leaveModule)&&E(e)}).call(this,a(4)(e))},459:function(e,t,a){"use strict";var n=a(191);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(224)).default)(r.default.createElement("path",{d:"M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"}),"FilterNoneRounded");t.default=i},509:function(e,t,a){"use strict";var n=a(2),r=a(128),i=a(0),o=a.n(i),c=(a(3),a(129)),s=a(130),l=a(137);function d(e){var t,a,n;return t=e,a=0,n=1,e=(Math.min(Math.max(a,t),n)-a)/(n-a),e=(e-=1)*e*e+1}var u=o.a.forwardRef(function(e,t){var a,i=e.classes,s=e.className,u=e.color,f=void 0===u?"primary":u,m=e.disableShrink,p=void 0!==m&&m,g=e.size,x=void 0===g?40:g,y=e.style,v=e.thickness,h=void 0===v?3.6:v,b=e.value,k=void 0===b?0:b,S=e.variant,E=void 0===S?"indeterminate":S,w=Object(r.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),j={},G={},C={};if("determinate"===E||"static"===E){var D=2*Math.PI*((44-h)/2);j.strokeDasharray=D.toFixed(3),C["aria-valuenow"]=Math.round(k),"static"===E?(j.strokeDashoffset="".concat(((100-k)/100*D).toFixed(3),"px"),G.transform="rotate(-90deg)"):(j.strokeDashoffset="".concat((a=(100-k)/100,a*a*D).toFixed(3),"px"),G.transform="rotate(".concat((270*d(k/70)).toFixed(3),"deg)"))}return o.a.createElement("div",Object(n.a)({className:Object(c.a)(i.root,s,"inherit"!==f&&i["color".concat(Object(l.a)(f))],{indeterminate:i.indeterminate,static:i.static}[E]),style:Object(n.a)({width:x,height:x},G,{},y),ref:t,role:"progressbar"},C,w),o.a.createElement("svg",{className:i.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},o.a.createElement("circle",{className:Object(c.a)(i.circle,p&&i.circleDisableShrink,{indeterminate:i.circleIndeterminate,static:i.circleStatic}[E]),style:j,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})))});t.a=Object(s.a)(function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}},{name:"MuiCircularProgress",flip:!1})(u)},510:function(e,t,a){"use strict";var n=a(128),r=a(2),i=a(0),o=a.n(i),c=(a(3),a(129)),s=a(130),l=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var f=o.a.forwardRef(function(e,t){var a=e.alignContent,i=void 0===a?"stretch":a,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,f=e.component,m=void 0===f?"div":f,p=e.container,g=void 0!==p&&p,x=e.direction,y=void 0===x?"row":x,v=e.item,h=void 0!==v&&v,b=e.justify,k=void 0===b?"flex-start":b,S=e.lg,E=void 0!==S&&S,w=e.md,j=void 0!==w&&w,G=e.sm,C=void 0!==G&&G,D=e.spacing,H=void 0===D?0:D,M=e.wrap,I=void 0===M?"wrap":M,O=e.xl,W=void 0!==O&&O,L=e.xs,K=void 0!==L&&L,z=e.zeroMinWidth,A=void 0!==z&&z,N=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(c.a)(d.root,u,g&&[d.container,0!==H&&d["spacing-xs-".concat(String(H))]],h&&d.item,A&&d.zeroMinWidth,"row"!==y&&d["direction-xs-".concat(String(y))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==i&&d["align-content-xs-".concat(String(i))],"flex-start"!==k&&d["justify-xs-".concat(String(k))],!1!==K&&d["grid-xs-".concat(String(K))],!1!==C&&d["grid-sm-".concat(String(C))],!1!==j&&d["grid-md-".concat(String(j))],!1!==E&&d["grid-lg-".concat(String(E))],!1!==W&&d["grid-xl-".concat(String(W))]);return o.a.createElement(m,Object(r.a)({className:F,ref:t},N))}),m=Object(s.a)(function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return l.forEach(function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})}),a}(e,"xs"),{},e.breakpoints.keys.reduce(function(t,a){return function(e,t,a){var n={};d.forEach(function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t},{}))},{name:"MuiGrid"})(f);t.a=m}}]);
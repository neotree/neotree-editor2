(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{289:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),l=a(2),c=a.n(l),i=a(324),o=a(248),u=a(137),s=a(308),m=a.n(s),p=a(15);function d(e){var t=e.backLink,a=e.title,n=Object(p.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{container:!0,alignItems:"center",spacing:1},r.a.createElement(i.a,{item:!0,xs:1,sm:1},r.a.createElement(o.a,{onClick:function(){return t?n.push(t):n.goBack()}},r.a.createElement(m.a,null))),r.a.createElement(i.a,{item:!0,xs:11,sm:11},r.a.createElement(u.a,{variant:"h5"},a))))}d.propTypes={title:c.a.node,backLink:c.a.string}},305:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(42),r=a.n(n),l=a(20),c=a.n(l),i=a(29),o=a.n(i),u=a(0),s=a.n(u),m=a(2),p=a.n(m),d=a(138),f=a(225),E=a(221),b=a(222),v=a(223),g=a(219),h=a(387),y=a(137),w=a(348),k=a(333);function O(e){var t=e.scriptId,a=s.a.useState(""),n=c()(a,2),l=n[0],i=n[1],u=s.a.useState(""),m=c()(u,2),p=m[0],O=m[1],C=s.a.useState(!1),j=c()(C,2),x=j[0],S=j[1],I=s.a.useState(!1),P=c()(I,2),T=P[0],F=P[1],D=s.a.useState(null),L=c()(D,2),N=L[0],W=L[1],J=s.a.useState(!1),A=c()(J,2),q=A[0],R=A[1],_=function(){T||(R(!1),i(""),O(""),S(!1))};function z(){return(z=r()(o.a.mark((function e(){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),W(null),e.next=5,fetch("/import-scripts",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({url:l,importScriptId:p,updateScriptId:t})});case 5:return a=e.sent,e.next=8,a.json();case 8:if(n=e.sent,!(r=n.error?[n.error]:n.errors)){e.next=12;break}throw new Error(r.map((function(e){return e.message||e.msg||e})).join("\n"));case 12:window.location.reload(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),W(e.t0.message);case 18:F(!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}return s.a.useEffect((function(){W(null)}),[l,p]),s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{onClick:function(){return R(!0)},color:"primary"},"Import"),s.a.createElement(f.a,{open:q,onClose:_,maxWidth:"xs",fullWidth:!0},s.a.createElement(E.a,null,"Import script"),s.a.createElement(b.a,null,s.a.createElement(h.a,{value:l,onChange:function(e){return i(e.target.value)},label:"Webeditor URL",fullWidth:!0,required:!0,error:!l,variant:"outlined"}),s.a.createElement(y.a,{variant:"caption",color:"textSecondary"},"e.g. ",s.a.createElement("b",null,"https://webeditor.neotree.org")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(h.a,{value:p,onChange:function(e){return O(e.target.value)},label:"Script ID",fullWidth:!0,required:!0,error:!p,variant:"outlined"}),!!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(w.a,{control:s.a.createElement(k.a,{checked:x,onChange:function(){return S((function(e){return!e}))}}),label:s.a.createElement(y.a,{variant:"caption",color:"error"},"Confirm that you'd like to override this script with the imported script")})),!!N&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(y.a,{variant:"caption",color:"error"},N))),s.a.createElement(v.a,null,s.a.createElement("div",{style:{marginLeft:"auto"}}),s.a.createElement(d.a,{onClick:_,disabled:T},"Cancel")," ",s.a.createElement(d.a,{variant:"contained",disableElevation:!0,color:"secondary",disabled:T||!(l&&p&&(!t||x)),onClick:function(){return z.apply(this,arguments)}},"Import"),T&&s.a.createElement(s.a.Fragment,null," ",s.a.createElement(g.a,{size:20})))))}O.propTypes={scriptId:p.a.string}},307:function(e,t,a){"use strict";var n=a(9),r=a.n(n),l=a(11),c=a.n(l),i=a(0),o=a.n(i),u=a(2),s=a.n(u),m=a(5),p=a.n(m),d=a(12),f=a.n(d),E=a(303),b=["className","color"],v=f()((function(e){return{backgroundColor:function(t){var a=t.color,n=e.palette[a]?e.palette[a].main:null;return n?{backgroundColor:n}:{}}}})),g=o.a.forwardRef((function(e,t){var a=e.className,n=e.color,l=c()(e,b),i=v({color:n});return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,r()({},l,{ref:t,className:p()(a,i.backgroundColor)})))}));g.propTypes={className:s.a.string},t.a=g},395:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a.n(n),l=a(20),c=a.n(l),i=a(29),o=a.n(i),u=a(0),s=a.n(u),m=a(15),p=a(219),d=a(388),f=a(380),E=a(57),b=a(124),v=a(10),g=a.n(v),h=a(2),y=a.n(h),w=a(325),k=a(326),O=a(379),C=a(387),j=a(399),x=a(393),S=a(307),I=a(137),P=a(348),T=a(324),F=a(138),D=a(289),L=a(26),N=a(305);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e){var t=e.script,a=Object(L.d)().state.viewMode,n=Object(m.g)(),l=s.a.useState(J({},t)),i=c()(l,2),u=i[0],p=i[1],d=function(e){return p((function(t){return J(J({},t),"function"==typeof e?e(t):e)}))},f=s.a.useState(!1),b=c()(f,2),v=b[0],g=b[1],h=s.a.useCallback((function(){r()(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,fetch(t?"/update-script":"/create-script",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(u)});case 4:return a=e.sent,e.next=7,a.json();case 7:if(!(a=e.sent).errors||!a.errors.length){e.next=10;break}return e.abrupt("return",alert(JSON.stringify(a.errors)));case 10:t?n.push("/scripts"):window.location.href="/scripts/".concat(a.script.script_id),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),alert("Ooops... ".concat(e.t0.message));case 16:g(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))()}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,null,s.a.createElement(k.a,null,s.a.createElement(T.a,{container:!0},s.a.createElement(T.a,{item:!0,xs:10},s.a.createElement(D.a,{backLink:"/scripts",title:"".concat(t?"Edit":"Add"," script")})),s.a.createElement(T.a,{item:!0,xs:2,style:{textAlign:"right"}},!!t&&s.a.createElement(N.a,{scriptId:t.script_id}))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(C.a,{fullWidth:!0,required:!0,error:!u.title,value:u.title||"",label:"Title",onChange:function(e){return d({title:e.target.value})}})),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(C.a,{fullWidth:!0,value:u.printTitle||"",label:"Print title",onChange:function(e){return d({printTitle:e.target.value})}})),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(C.a,{fullWidth:!0,value:u.description||"",label:"Description",onChange:function(e){return d({description:e.target.value})}})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(I.a,{variant:"button",color:"primary"},"Type"),s.a.createElement(S.a,{color:"primary"}),s.a.createElement("br",null),s.a.createElement(j.a,{name:"type",value:u.type||"",onChange:function(e){var t=e.target.value;d({type:t})}},[{name:"admission",label:"Admission"},{name:"discharge",label:"Discharge"},{name:"neolab",label:"NeoLab"}].map((function(e){return s.a.createElement(P.a,{key:e.name,value:e.name,control:s.a.createElement(x.a,null),label:e.label})})))),s.a.createElement(O.a,{style:{justifyContent:"flex-end"}},"view"===a&&s.a.createElement(I.a,{color:"error",variant:"caption"},"Can't save because you're in view mode"),s.a.createElement(F.a,{color:"primary",onClick:function(){return h()},disabled:"view"===a||!(u.title&&!v)},"Save"))),v?s.a.createElement(E.a,null):null)}A.propTypes={script:y.a.object};var q=A,R=function(){return s.a.createElement("div",{style:{margin:25,textAlign:"center"}},s.a.createElement(p.a,null))},_=Object(b.a)((function(){return Promise.all([a.e(1),a.e(11)]).then(a.bind(null,382))}),{LoaderComponent:R}),z=Object(b.a)((function(){return Promise.all([a.e(1),a.e(10)]).then(a.bind(null,383))}),{LoaderComponent:R});t.default=function(){var e=Object(m.g)(),t=Object(m.h)(),a=t.scriptId,n=t.scriptSection,l=s.a.useState(null),i=c()(l,2),u=i[0],p=i[1],b=s.a.useState(!1),v=c()(b,2),g=v[0],h=v[1],y=s.a.useState(!1),w=c()(y,2),k=w[0],O=w[1],C=s.a.useState(n||"screens"),j=c()(C,2),x=j[0],S=j[1];return s.a.useEffect((function(){r()(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(!0),"new"===a){e.next=16;break}return e.prev=2,e.next=5,fetch("/get-script?scriptId=".concat(a));case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,r=n.script,p(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),alert(e.t0.message);case 16:h(!0),O(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})))()}),[]),g?s.a.createElement(s.a.Fragment,null,s.a.createElement(q,{script:u}),s.a.createElement("br",null),u?s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{centered:!0,value:x,indicatorColor:"primary",textColor:"primary",onChange:function(t,a){S(a),e.push("/scripts/".concat(u.scriptId,"/").concat(a))}},s.a.createElement(f.a,{value:"screens",label:"Screens"}),s.a.createElement(f.a,{value:"diagnoses",label:"Diagnoses"})),"screens"===x&&s.a.createElement(_,{script:u}),"diagnoses"===x&&s.a.createElement(z,{script:u})):null,k&&s.a.createElement(E.a,null)):s.a.createElement(E.a,null)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{259:function(e,t,a){"use strict";a.r(t),function(e){var r,n=a(37),o=a.n(n),c=a(55),i=a.n(c),l=a(24),s=a.n(l),d=a(0),u=a.n(d),p=a(21),f=a(111),m=a(284),b=a(314);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=function(){var e=Object(p.d)().state.viewMode;Object(p.c)("scripts"),Object(p.b)(b.a.PAGE_TITLE);var t=u.a.useState([]),r=s()(t,2),n=r[0],c=r[1],l=u.a.useState(!1),d=s()(l,2),v=d[0],h=d[1],g=u.a.useState(!1),L=s()(g,2),G=L[0],H=L[1];return u.a.useEffect((function(){i()(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),e.prev=1,e.next=4,fetch("/get-scripts");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,r=a.scripts,c(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),alert(e.t0.message);case 15:h(!0),H(!1);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})))()}),[]),u.a.createElement(u.a.Fragment,null,v?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{noDataMsg:"No scripts",selectable:!1,title:b.a.PAGE_TITLE,data:n,renderHeaderActions:"view"===e?null:a(395).default,renderRowAction:a(396).default,displayFields:[{key:"position",label:"Position",render:function(e){return e.rowIndex+1}},{key:"title",label:"Title"},{key:"description",label:"Description"}],onSortData:"view"===e?void 0:function(e){c(e),i()(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/update-scripts",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({scripts:e.map((function(e){return{id:e.id,position:e.position}}))})});case 3:return a=t.sent,t.next=6,a.json();case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()}})):null,G&&u.a.createElement(f.a,null))};v(h,"useAppContext{{ state: { viewMode } }}\nuseState{[scripts, setScripts]([])}\nuseState{[scriptsInitialised, setScriptsInitialised](false)}\nuseState{[loadingScripts, setLoadingScripts](false)}\nuseEffect{}",(function(){return[p.d]}));var g,L,G=h;t.default=G,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(h,"Scripts","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/index.js"),g.register(G,"default","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/index.js")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}.call(this,a(8)(e))},314:function(e,t,a){"use strict";(function(e){var a;(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,n,o={PAGE_TITLE:"Scripts"};t.a=o,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(o,"default","/home/farai/WorkBench/neotree-editor/src/constants/copy/scripts.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a(8)(e))},362:function(e,t,a){"use strict";(function(e){var r,n=a(37),o=a.n(n),c=a(55),i=a.n(c),l=a(9),s=a.n(l),d=a(24),u=a.n(d),p=a(13),f=a.n(p),m=a(0),b=a.n(m),v=a(2),h=a.n(v),g=a(86),L=a(105);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},H=b.a.forwardRef(G((function(e,t){var a=e.children,r=e.scripts,n=e.onClick,c=f()(e,["children","scripts","onClick"]),l=r.length>1,d=Object(g.a)(),p=u()(d,2),m=p[0],v=p[1],h=b.a.useState(!1),G=u()(h,2),H=G[0],S=G[1];return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",s()({},c,{ref:t,onClick:function(e){v(),n&&n(e)}}),a),m({title:"Delete script".concat(l?"s":""),message:"Are you sure you want to delete script".concat(l?"s":"","?"),onConfirm:function(){i()(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,fetch("/delete-scripts",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({scripts:r})});case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,(n=a.errors)&&n.length?alert(JSON.stringify(n)):window.location.reload(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),alert(e.t0.message);case 15:S(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()}}),H?b.a.createElement(L.a,null):null)}),"useConfirmModal{[renderConfirmModal, confirm]}\nuseState{[deletingScripts, setDeletingScripts](false)}",(function(){return[g.a]})));H.propTypes={onClick:h.a.func,children:h.a.node,scripts:h.a.array.isRequired};var S,y,E=H;t.a=E,(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(S.register(H,"DeleteScripts","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/Forms/DeleteScripts.js"),S.register(E,"default","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/Forms/DeleteScripts.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,a(8)(e))},363:function(e,t,a){"use strict";(function(e){var r,n=a(9),o=a.n(n),c=a(37),i=a.n(c),l=a(55),s=a.n(l),d=a(24),u=a.n(d),p=a(13),f=a.n(p),m=a(0),b=a.n(m),v=a(2),h=a.n(v),g=a(105);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},G=b.a.forwardRef(L((function(e,t){var a=e.children,r=e.onClick,n=e.scripts,c=f()(e,["children","onClick","scripts"]),l=b.a.useState(!1),d=u()(l,2),p=d[0],m=d[1],v=b.a.useState(null),h=u()(v,2),L=(h[0],h[1]);return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",o()({},c,{ref:t,onClick:function(e){s()(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,fetch("/duplicate-scripts",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({scripts:n})});case 4:window.location.reload(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),L(e.t0);case 10:m(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))(),r&&r(e)}}),a),p&&b.a.createElement(g.a,null))}),"useState{[duplicatingScripts, setDuplicatingScripts](false)}\nuseState{[duplicateScriptsError, setDuplicateScriptsError](null)}"));G.propTypes={onClick:h.a.func,children:h.a.node,scripts:h.a.arrayOf(h.a.shape({scriptId:h.a.string})).isRequired};var H,S,y=G;t.a=y,(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(G,"DuplicateScripts","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/Forms/DuplicateScripts.js"),H.register(y,"default","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/Forms/DuplicateScripts.js")),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&S(e)}).call(this,a(8)(e))},395:function(e,t,a){"use strict";a.r(t),function(e){var r,n=a(0),o=a.n(n),c=a(2),i=a.n(c),l=a(101),s=a(281),d=a.n(s),u=a(286),p=a.n(u),f=a(84),m=a(457),b=a(30),v=a(364),h=a(361),g=a(362),L=a(363);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function G(e){var t=e.selected;return o.a.createElement(o.a.Fragment,null,t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(L.a,{scripts:t.map((function(e){return{scriptId:e.row.scriptId}}))},o.a.createElement(f.a,null,"Duplicate")),o.a.createElement(g.a,{scripts:t.map((function(e){return{scriptId:e.row.scriptId}}))},o.a.createElement(l.a,null,o.a.createElement(p.a,null)))),o.a.createElement(b.b,{to:"/scripts/new"},o.a.createElement(m.a,{title:"New script"},o.a.createElement(l.a,null,o.a.createElement(d.a,null)))),o.a.createElement(h.a,null,o.a.createElement(b.b,{to:"/scripts/new"},o.a.createElement(v.a,{color:"secondary"},o.a.createElement(d.a,null)))))}G.propTypes={selected:i.a.array.isRequired};var H,S,y=function(e){return o.a.createElement(G,e)};t.default=y,(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(G,"Actions","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/_renderHeaderActions.js"),H.register(y,"default","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/_renderHeaderActions.js")),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&S(e)}.call(this,a(8)(e))},396:function(e,t,a){"use strict";a.r(t),function(e){var r,n=a(24),o=a.n(n),c=a(0),i=a.n(c),l=a(2),s=a.n(l),d=a(101),u=a(287),p=a.n(u),f=a(445),m=a(61),b=a(27),v=a(30),h=a(21),g=a(362),L=a(363);function G(e){var t=e.row,a=Object(h.d)().state.viewMode,r=i.a.useState(null),n=o()(r,2),c=n[0],l=n[1],s=function(){return l(null)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{onClick:function(e){return l(e.currentTarget)}},i.a.createElement(p.a,null)),i.a.createElement(f.a,{anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:s},i.a.createElement(m.a,{component:v.b,to:"/scripts/".concat(t.scriptId),onClick:s},"view"===a?"View":"Edit"),"view"===a?null:i.a.createElement(m.a,{onClick:s,scripts:[t],component:L.a},"Duplicate"),"view"===a?null:i.a.createElement(m.a,{onClick:s,scripts:[{id:t.id}],component:g.a},i.a.createElement(b.a,{color:"error"},"Delete"))))}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(G,"useAppContext{{ state: { viewMode } }}\nuseState{[anchorEl, setAnchorEl](null)}",(function(){return[h.d]})),G.propTypes={row:s.a.object.isRequired,rowIndex:s.a.number.isRequired};var H,S,y=function(e,t){return i.a.createElement(G,{row:e,rowIndex:t})};t.default=y,(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(G,"Action","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/_renderRowAction.js"),H.register(y,"default","/home/farai/WorkBench/neotree-editor/src/containers/ScriptsPage/_renderRowAction.js")),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&S(e)}.call(this,a(8)(e))}}]);
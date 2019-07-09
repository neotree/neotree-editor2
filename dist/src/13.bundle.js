(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{188:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(2),o=function(e){var t=e.children,n=e.options;n=n||{allScripts:!0,allConfigKeys:!0};var r="";return Object.keys(n).forEach(function(e,t){r+="".concat(e,"=").concat(n[e]),t<Object.keys(n).length-1&&(r+="&")}),a.a.createElement("a",{target:"_blank",style:{color:"inherit",textDecoration:"none",fontWeight:"inherit"},rel:"noopener noreferrer",href:"/export-data?".concat(r)},t||"Export")};o.propTypes={options:n.n(i).a.object},t.a=o},401:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n.n(r),i=n(20),o=n.n(i),l=n(21),c=n.n(l),s=n(22),u=n.n(s),p=n(25),d=n.n(p),m=n(23),f=n.n(m),h=n(24),E=n.n(h),g=n(0),y=n.n(g),S=n(2),D=n.n(S),C=n(26),b=n(12),v=n(41),k=n(52),_=n(3),w=n.n(_),x=n(42),A=n.n(x),T=n(120),j=n(123),F=n(188),I=function(e){function t(e){var n;return a()(this,t),n=c()(this,u()(t).call(this,e)),E()(d()(n),"handleAddScriptClick",function(){return n.props.history.push("/dashboard/scripts/new")}),E()(d()(n),"handleEditScriptClick",function(e){return n.props.history.push("/dashboard/scripts/".concat(e))}),E()(d()(n),"handleDeleteClick",function(){var e=n.props.actions,t=n.state.scriptIdForAction;n.setState({deletingScript:!0}),e.post("delete-script",{id:t,onResponse:function(){return n.setState({deletingScript:!1})},onFailure:function(e){return n.setState({deleteScriptError:e})},onSuccess:function(){e.updateApiData(function(e){return{scripts:e.scripts.filter(function(e){return e.id!==t})}}),n.closeDeleteConfirmDialog()}})}),E()(d()(n),"handleDuplicateScript",function(e){var t=n.props.actions;n.setState({duplicatingScript:!0}),t.post("duplicate-script",{id:e,onResponse:function(){return n.setState({duplicatingScript:!1})},onFailure:function(e){return n.setState({duplicateScriptError:e})},onSuccess:function(n){var r=n.payload;t.updateApiData(function(t){var n=A()(t.scripts),a=n.map(function(t,n){return t.id===e?n:null}).filter(function(e){return null!==e})[0]||0;return n.splice(a+1,0,r.script),{scripts:n}})}})}),E()(d()(n),"openDeleteConfirmDialog",function(e){return n.setState(w()({},n.state,{openDeleteConfirmDialog:!0,scriptIdForAction:e}))}),E()(d()(n),"closeDeleteConfirmDialog",function(){return n.setState(w()({},n.state,{openDeleteConfirmDialog:!1,scriptIdForAction:null,deleteScriptError:null}))}),n.state={openDeleteConfirmDialog:!1,scriptIdForAction:null},n}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this,t=this.props.scripts,n=this.state,r=n.deletingScript,a=n.deleteScriptError,i={container:{display:"flex",boxSizing:"border-box",justifyContent:"center",height:"100%"},table:{width:"640px"},fab:{position:"fixed",bottom:24,right:24,zIndex:900}},o=y.a.createElement(T.Dialog,{open:this.state.openDeleteConfirmDialog},[y.a.createElement(T.DialogTitle,null,"Delete"),y.a.createElement(T.DialogContent,null,r?y.a.createElement(k.a,{className:"ui__flex ui__justifyContent_center"}):y.a.createElement("div",null,a?y.a.createElement("div",{className:"ui__dangerColor"},a.msg||a.message||JSON.stringify(a)):y.a.createElement("p",null,"Are you sure you want to delete this configuration key?"))),r?null:y.a.createElement(T.DialogActions,null,y.a.createElement(T.Button,{type:"button",onClick:this.handleDeleteClick,accent:!0},"Delete"),y.a.createElement(T.Button,{type:"button",onClick:this.closeDeleteConfirmDialog},"Cancel"))].map(function(e,t){return e&&y.a.cloneElement(e,{key:t})})),l=y.a.createElement("div",null,y.a.createElement(T.DataTable,{style:{width:"780px"},shadow:0,rows:t.map(function(e){return w()({id:e.id},e.data)})},y.a.createElement(T.TableHeader,{name:"title"},"Title"),y.a.createElement(T.TableHeader,{name:"description"},"Description"),y.a.createElement(T.TableHeader,{name:"id",style:{width:"64px"},cellFormatter:function(t,n,r){var a="more-user-action-menu".concat(r);return y.a.createElement("div",null,y.a.createElement("div",{style:{position:"relative",color:"#999999"},className:"ui__flex ui__alignItems_center"},y.a.createElement("div",{className:"ui__cursor_pointer",onClick:e.handleEditScriptClick.bind(e,t)},y.a.createElement(j.c,{style:{fontSize:"24px"}}))," ",y.a.createElement("div",{id:a,className:"ui__cursor_pointer"},y.a.createElement(j.f,{style:{fontSize:"24px"}})),y.a.createElement(T.Menu,{target:a,align:"right"},y.a.createElement(T.MenuItem,{onClick:e.openDeleteConfirmDialog.bind(e,t)},"Delete"),y.a.createElement(T.MenuItem,{onClick:function(){return e.handleDuplicateScript(t)}},"Duplicate"),y.a.createElement(T.MenuItem,null,y.a.createElement(F.a,{options:{script:t}})))))}}))),c=y.a.createElement(T.Card,{shadow:0,style:{width:"320px"}},y.a.createElement(T.CardTitle,null,"There are no scripts"),y.a.createElement(T.CardText,null,y.a.createElement("span",null,"To create your first script click on the orange icon at the bottom right of the window."),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("br",null)));return y.a.createElement("div",null,y.a.createElement(T.FABButton,{style:i.fab,colored:!0,ripple:!0,onClick:this.handleAddScriptClick},y.a.createElement(j.a,null)),y.a.createElement("div",{style:i.container},t.length?l:c),o)}}]),t}(g.Component);I.propTypes={scripts:D.a.array.isRequired,actions:D.a.object.isRequired};var N=I;n.d(t,"List",function(){return O});var O=function(e){function t(){var e,n;a()(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=c()(this,(e=u()(t)).call.apply(e,[this].concat(i))),E()(d()(n),"state",{}),n}return f()(t,e),o()(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.actions;this.setState({loadingScripts:!0}),t.get("get-scripts",{onResponse:function(){return e.setState({loadingScripts:!1})},onFailure:function(t){return e.setState({loadScriptsError:t})},onSuccess:function(n){var r=n.payload;e.setState({scripts:r.scripts}),t.updateApiData({scripts:r.scripts})}})}},{key:"componentWillUnmount",value:function(){this.props.actions.updateApiData({scripts:[]})}},{key:"render",value:function(){return this.state.loadingScripts?y.a.createElement(k.a,{className:"ui__flex ui__justifyContent_center"}):y.a.createElement(N,this.props)}}]),t}(y.a.Component);O.propTypes={scripts:D.a.array};t.default=Object(C.hot)(Object(b.f)(Object(v.a)(O,function(e){return{scripts:e.apiData.scripts||[]}})))}}]);
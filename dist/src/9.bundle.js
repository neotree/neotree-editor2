(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{272:function(e,a,n){"use strict";var t=n(1),o=n(59),r=n(7),c=n(0),i=n(9),l=n(103),d=n(274),u=n(11),s=n(254),m=c.forwardRef((function(e,a){var n=e.autoFocus,u=e.checked,m=e.checkedIcon,p=e.classes,b=e.className,f=e.defaultChecked,h=e.disabled,g=e.icon,v=e.id,O=e.inputProps,y=e.inputRef,E=e.name,S=e.onBlur,j=e.onChange,C=e.onFocus,P=e.readOnly,k=e.required,I=e.tabIndex,M=e.type,T=e.value,w=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),A=Object(l.a)({controlled:u,default:Boolean(f),name:"SwitchBase",state:"checked"}),N=Object(o.a)(A,2),B=N[0],R=N[1],G=Object(d.a)(),D=h;G&&void 0===D&&(D=G.disabled);var L="checkbox"===M||"radio"===M;return c.createElement(s.a,Object(t.a)({component:"span",className:Object(i.a)(p.root,b,B&&p.checked,D&&p.disabled),disabled:D,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),G&&G.onFocus&&G.onFocus(e)},onBlur:function(e){S&&S(e),G&&G.onBlur&&G.onBlur(e)},ref:a},w),c.createElement("input",Object(t.a)({autoFocus:n,checked:u,defaultChecked:f,className:p.input,disabled:D,id:L&&v,name:E,onChange:function(e){var a=e.target.checked;R(a),j&&j(e,a)},readOnly:P,ref:y,required:k,tabIndex:I,type:M,value:T},O)),B?m:g)}));a.a=Object(u.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},279:function(e,a,n){"use strict";n.d(a,"c",(function(){return l})),n.d(a,"b",(function(){return d})),n.d(a,"a",(function(){return u})),n.d(a,"d",(function(){return s}));var t=n(14),o=n.n(t),r=n(62);function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){o()(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return Object(r.a)("/get-hospitals",i({body:e},a))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return Object(r.a)("/delete-hospitals",i({method:"POST",body:e},a))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return Object(r.a)("/add-hospital",i({method:"POST",body:e},a))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return Object(r.a)("/update-hospital",i({method:"POST",body:e},a))}},293:function(e){e.exports=JSON.parse('[{"name":"Afghanistan","code":"AF"},{"name":"Åland Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"AndorrA","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D\'Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\'S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\'S Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia and Montenegro","code":"CS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom","code":"GB"},{"name":"United States","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}]')},299:function(e,a,n){"use strict";var t=n(1),o=n(7),r=n(0),c=n(9),i=n(272),l=n(58),d=Object(l.a)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(l.a)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),s=n(22),m=Object(l.a)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=n(13),b=n(11),f=r.createElement(u,null),h=r.createElement(d,null),g=r.createElement(m,null),v=r.forwardRef((function(e,a){var n=e.checkedIcon,l=void 0===n?f:n,d=e.classes,u=e.color,s=void 0===u?"secondary":u,m=e.icon,b=void 0===m?h:m,v=e.indeterminate,O=void 0!==v&&v,y=e.indeterminateIcon,E=void 0===y?g:y,S=e.inputProps,j=e.size,C=void 0===j?"medium":j,P=Object(o.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),k=O?E:b,I=O?E:l;return r.createElement(i.a,Object(t.a)({type:"checkbox",classes:{root:Object(c.a)(d.root,d["color".concat(Object(p.a)(s))],O&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:s,inputProps:Object(t.a)({"data-indeterminate":O},S),icon:r.cloneElement(k,{fontSize:void 0===k.props.fontSize&&"small"===C?C:k.props.fontSize}),checkedIcon:r.cloneElement(I,{fontSize:void 0===I.props.fontSize&&"small"===C?C:I.props.fontSize}),ref:a},P))}));a.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(v)},308:function(e,a,n){"use strict";var t=n(1),o=n(7),r=n(0),c=n(9),i=n(11),l=n(22),d=r.forwardRef((function(e,a){var n=e.absolute,i=void 0!==n&&n,l=e.classes,d=e.className,u=e.component,s=void 0===u?"hr":u,m=e.flexItem,p=void 0!==m&&m,b=e.light,f=void 0!==b&&b,h=e.orientation,g=void 0===h?"horizontal":h,v=e.role,O=void 0===v?"hr"!==s?"separator":void 0:v,y=e.variant,E=void 0===y?"fullWidth":y,S=Object(o.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(s,Object(t.a)({className:Object(c.a)(l.root,d,"fullWidth"!==E&&l[E],i&&l.absolute,p&&l.flexItem,f&&l.light,"vertical"===g&&l.vertical),role:O,ref:a},S))}));a.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(d)},311:function(e,a,n){"use strict";var t=n(1),o=n(7),r=n(0),c=n(9),i=n(274),l=n(11),d=n(142),u=n(13),s=r.forwardRef((function(e,a){e.checked;var n=e.classes,l=e.className,s=e.control,m=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,f=void 0===b?"end":b,h=(e.name,e.onChange,e.value,Object(o.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(i.a)(),v=m;void 0===v&&void 0!==s.props.disabled&&(v=s.props.disabled),void 0===v&&g&&(v=g.disabled);var O={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(a){void 0===s.props[a]&&void 0!==e[a]&&(O[a]=e[a])})),r.createElement("label",Object(t.a)({className:Object(c.a)(n.root,l,"end"!==f&&n["labelPlacement".concat(Object(u.a)(f))],v&&n.disabled),ref:a},h),r.cloneElement(s,O),r.createElement(d.a,{component:"span",className:Object(c.a)(n.label,v&&n.disabled)},p))}));a.a=Object(l.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(s)},318:function(e,a,n){"use strict";a.a={PAGE_TITLE:"Users"}},319:function(e,a,n){"use strict";var t=n(15),o=n.n(t),r=n(14),c=n.n(r),i=n(16),l=n.n(i),d=n(0),u=n.n(d),s=n(4),m=n.n(s),p=n(390),b=n(393),f=n(293);n.d(a,"a",(function(){return f}));var h=["onChange","onInputChange","value"];function g(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function v(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?g(Object(n),!0).forEach((function(a){c()(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function O(e){var a=e.onChange,n=e.onInputChange,t=e.value,r=l()(e,h);return u.a.createElement(b.a,{options:f,getOptionLabel:function(e){return e.name||""},onChange:a,onInputChange:n,value:v({},f.filter((function(e){return e.code===t}))[0]),renderInput:function(e){return u.a.createElement(p.a,o()({},e,r))}})}O.propTypes={onChange:m.a.func,onInputChange:m.a.func},a.b=O},392:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(318),c=n(31),i=n(45),l=n.n(i),d=n(14),u=n.n(d),s=n(25),m=n.n(s),p=n(34),b=n.n(p),f=n(349),h=n(350),g=n(348),v=n(347),O=n(346),y=n(330),E=n(331),S=n(384),j=n(62);function C(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function P(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?C(Object(n),!0).forEach((function(a){u()(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return Object(j.a)("/get-users",P({body:e},a))},I=n(279),M=n(264),T=n.n(M),w=n(4),A=n.n(w),N=n(254),B=n(269),R=n.n(B),G=n(231),D=n(228),L=n(229),F=n(143),x=n(142),z=n(15),U=n.n(z),H=n(390),K=n(381),W=n(230),V=n(1),J=n(7),q=n(9),Z=n(11),Y=n(76),_=t.forwardRef((function(e,a){var n=e.children,o=e.classes,r=e.className,c=e.disableTypography,i=void 0!==c&&c,l=e.inset,d=void 0!==l&&l,u=e.primary,s=e.primaryTypographyProps,m=e.secondary,p=e.secondaryTypographyProps,b=Object(J.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),f=t.useContext(Y.a).dense,h=null!=u?u:n;null==h||h.type===x.a||i||(h=t.createElement(x.a,Object(V.a)({variant:f?"body2":"body1",className:o.primary,component:"span",display:"block"},s),h));var g=m;return null==g||g.type===x.a||i||(g=t.createElement(x.a,Object(V.a)({variant:"body2",className:o.secondary,color:"textSecondary",display:"block"},p),g)),t.createElement("div",Object(V.a)({className:Object(q.a)(o.root,r,f&&o.dense,d&&o.inset,h&&g&&o.multiline),ref:a},b),h,g)})),Q=Object(Z.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(_),$=n(308),X=n(273),ee=n.n(X),ae=n(329),ne=n(319),te=n(393),oe=n(299),re=n(311);function ce(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function ie(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?ce(Object(n),!0).forEach((function(a){u()(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var le={email:"",role:1,countries:[],hospitals:[]},de=function(e){var a=e.onChange,n=e.user,r=e.hospitals,c=Object(t.useState)(le),i=m()(c,2),l=i[0],d=i[1],u=function(e){return d((function(a){return ie(ie({},a),"function"==typeof e?e(a):e)}))};return o.a.useEffect((function(){a(l)}),[l]),o.a.useEffect((function(){u(ie(ie({},n),{},{hospitals:n?n.data.hospitals:[],countries:n?n.data.countries:[]}))}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement(ae.a,{container:!0,spacing:2},o.a.createElement(ae.a,{item:!0,xs:12,sm:12},o.a.createElement(H.a,{fullWidth:!0,autoFocus:!0,label:"User email",value:l.email,required:!0,error:!l.email,onChange:function(e){return u({email:e.target.value})}})),o.a.createElement(ae.a,{item:!0,xs:12,sm:12},o.a.createElement(re.a,{control:o.a.createElement(oe.a,null),value:"isAdmin",label:"Is admin?",checked:2===l.role,onChange:function(){return u({role:1===l.role?2:1})}})),o.a.createElement(ae.a,{xs:12},o.a.createElement("br",null),o.a.createElement(x.a,{variant:"button"},"Countries"),o.a.createElement($.a,null),o.a.createElement("br",null)),o.a.createElement(ae.a,{item:!0,xs:12,sm:12},o.a.createElement(K.a,null,l.countries.map((function(e){var a=ne.a.filter((function(a){return a.code===e}))[0];return a?o.a.createElement(W.a,{key:e},o.a.createElement(Q,{primary:a.name}),o.a.createElement(N.a,{size:"small",onClick:function(){return u((function(a){return{countries:a.countries.filter((function(a){return a!==e}))}}))}},o.a.createElement(ee.a,null))):null}))),o.a.createElement(ne.b,{fullWidth:!0,label:"Add Country",onChange:function(e,a){var n=a.code;u((function(e){var a=e.countries;return{countries:[].concat(T()(a),T()(a.includes(n)?[]:[n]))}}))}})),o.a.createElement(ae.a,{item:!0,xs:12},o.a.createElement("br",null),o.a.createElement(x.a,{variant:"button"},"Hospitals"),o.a.createElement($.a,null)),o.a.createElement(ae.a,{item:!0,xs:12,sm:12},o.a.createElement(K.a,null,l.hospitals.map((function(e){var a=r.filter((function(a){return a.hospital_id===e}))[0];return a?o.a.createElement(W.a,{key:e},o.a.createElement(Q,{primary:a.name}),o.a.createElement(N.a,{size:"small",onClick:function(){return u((function(a){return{hospitals:a.hospitals.filter((function(a){return a!==e}))}}))}},o.a.createElement(ee.a,null))):null}))),o.a.createElement(te.a,{fullWidth:!0,options:(r||[]).filter((function(e){return!l.hospitals.includes(e.hospital_id)})),value:{},getOptionLabel:function(e){return e.name||""},onChange:function(e,a){var n=a.hospital_id;u((function(e){var a=e.hospitals;return{hospitals:[].concat(T()(a),T()(a.includes(n)?[]:[n]))}}))},renderInput:function(e){return o.a.createElement(H.a,U()({},e,{label:"Add Hospital"}))}}))))};de.propTypes={onChange:A.a.func.isRequired,user:A.a.object,hospitals:A.a.array.isRequired};var ue=de,se=function(e){var a=e.updateState,n=e.hospitals,r=Object(t.useState)(le),c=m()(r,2),i=c[0],l=c[1],d=Object(t.useState)(!1),u=m()(d,2),s=u[0],p=u[1],b=Object(t.useState)(null),f=m()(b,2),h=f[0],g=f[1],v=Object(t.useState)(!1),O=m()(v,2),y=O[0],E=O[1],S=function(e){s||(l(le),E(e))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,{size:"small",onClick:function(){return S(!0)}},o.a.createElement(R.a,null)),o.a.createElement(G.a,{open:y,onClose:function(){return S(!1)},fullWidth:!0,maxWidth:"sm"},o.a.createElement(D.a,null,o.a.createElement(ue,{hospitals:n,onChange:function(e){return l(e)}})),o.a.createElement(L.a,null,h?o.a.createElement(x.a,null,h.msg||h.message||JSON.stringify(h)):null,o.a.createElement(F.a,{color:"primary",variant:"contained",disableElevation:!0,disabled:!i.email,onClick:function(){p(!0),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return Object(j.a)("/add-user",P({method:"POST",body:e},a))}(i).then((function(e){var n=e.user;p(!1),S(!1),a((function(e){var a=e.users;return{users:[].concat(T()(a),[n])}}))})).catch((function(e){p(!1),g(e)}))}},"Save"))))};se.propTypes={updateState:A.a.func.isRequired,hospitals:A.a.array.isRequired};var me=se,pe=n(275),be=n.n(pe),fe=function(e){var a=e.user,n=e.updateState,r=e.disabled,c=Object(t.useState)(!1),i=m()(c,2),l=i[0],d=i[1],u=Object(t.useState)(null),s=m()(u,2),p=s[0],b=s[1],f=Object(t.useState)(!1),h=m()(f,2),g=h[0],v=h[1],O=function(e){l||(b(null),v(e))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,{size:"small",disabled:!0===r,onClick:function(){return O(!0)}},o.a.createElement(ee.a,null)),o.a.createElement(G.a,{open:g,onClose:function(){return O(!1)},fullWidth:!0,maxWidth:"sm"},o.a.createElement(D.a,null,o.a.createElement(x.a,null,"Are you sure you want to delete ",o.a.createElement("b",null,a.email),"?")),o.a.createElement(L.a,null,p?o.a.createElement(x.a,{variant:"caption",color:"error",style:{marginRight:"auto"}},p.msg||p.message||JSON.stringify(p)):null,o.a.createElement(F.a,{disabled:l,onClick:function(){return O(!1)}},"Cancel"),o.a.createElement(F.a,{disabled:r,color:"secondary",onClick:function(){d(!0),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return Object(j.a)("/delete-users",P({method:"POST",body:e},a))}({users:[{user_id:a.user_id}]}).then((function(){d(!1),O(!1),n((function(e){return{users:e.users.filter((function(e){return e.user_id!==a.user_id}))}}))})).catch((function(e){d(!1),b(e)}))}},l?"Deleting...":"Delete"))))};fe.propTypes={user:A.a.object.isRequired,updateState:A.a.func.isRequired,disabled:A.a.bool};var he=fe,ge=function(e){var a=e.updateState,n=e.user,r=e.authenticatedUser,c=e.hospitals,i=Object(t.useState)(le),l=m()(i,2),d=l[0],u=l[1],s=Object(t.useState)(!1),p=m()(s,2),b=p[0],f=p[1],h=Object(t.useState)(null),g=m()(h,2),v=g[0],O=g[1],y=Object(t.useState)(!1),E=m()(y,2),S=E[0],C=E[1],k=function(e){b||(u(le),C(e))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,{size:"small",onClick:function(){return k(!0)}},o.a.createElement(be.a,null)),o.a.createElement(G.a,{open:S,onClose:function(){return k(!1)},fullWidth:!0,maxWidth:"sm"},o.a.createElement(D.a,null,o.a.createElement(ue,{hospitals:c,user:n,onChange:function(e){return u(e)}})),o.a.createElement(L.a,null,v?o.a.createElement(x.a,null,v.msg||v.message||JSON.stringify(v)):null,o.a.createElement(he,{user:n,disabled:r.email===n.email,updateState:a}),o.a.createElement(F.a,{color:"primary",variant:"contained",disableElevation:!0,disabled:!d.email,onClick:function(){f(!0),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return Object(j.a)("/update-user",P({method:"POST",body:e},a))}(d).then((function(e){var n=e.user;f(!1),k(!1),a((function(e){return{users:e.users.map((function(e){return e.user_id!==n.user_id?e:n}))}}))})).catch((function(e){f(!1),O(e)}))}},"Save"))))};ge.propTypes={updateState:A.a.func.isRequired,user:A.a.object.isRequired,authenticatedUser:A.a.object,hospitals:A.a.array.isRequired};var ve=ge;function Oe(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function ye(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?Oe(Object(n),!0).forEach((function(a){u()(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var Ee=function(){var e=Object(c.d)().state,a=e.authenticatedUser,n=e.viewMode,t=o.a.useState({users:[],loading:!1,form:{name:"",code:""}}),r=m()(t,2),i=r[0],d=r[1],u=function(e){return d((function(a){return ye(ye({},a),"function"==typeof e?e(a):e)}))},s=i.users,p=i.hospitals;return o.a.useEffect((function(){l()(b.a.mark((function e(){var a,n,t,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u({loading:!0}),a=[],n=[],e.prev=3,e.next=6,k();case 6:t=e.sent,a=t.users,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),u({getUsersErrors:e.t0,loading:!1});case 13:return e.prev=13,e.next=16,Object(I.c)();case 16:o=e.sent,n=o.hospitals,e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),u({getHospitalsErrors:e.t1,loading:!1});case 23:u({users:a||[],hospitals:n||[],loading:!1});case 24:case"end":return e.stop()}}),e,null,[[3,10],[13,20]])})))()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,null,o.a.createElement(S.a,{action:"view"===n?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(me,{updateState:u,hospitals:p})),title:"Users"}),o.a.createElement(E.a,null,o.a.createElement(f.a,null,o.a.createElement(h.a,null,o.a.createElement(O.a,null,o.a.createElement(v.a,null,"Email"),"view"===n?null:o.a.createElement(v.a,{align:"right"},"Action"))),o.a.createElement(g.a,null,s.map((function(e,t){return o.a.createElement(O.a,{key:"user-".concat(t)},o.a.createElement(v.a,null,e.email),"view"===n?null:o.a.createElement(v.a,{align:"right"},o.a.createElement(ve,{user:e,hospitals:p,authenticatedUser:a,updateState:u})))})))))))};a.default=function(){return Object(c.b)(r.a.PAGE_TITLE),Object(c.c)("users"),o.a.createElement(o.a.Fragment,null,o.a.createElement(Ee,null))}}}]);
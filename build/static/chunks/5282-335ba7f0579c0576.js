"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5282],{80929:function(e,i,s){s.d(i,{A:function(){return N}});var a=s(57437),n=s(2265),t=s(16463),l=s(12491),r=s(20920),o=s(5192),d=s(95317),u=s(46294),c=s(50495),g=s(83102),m=s(93146),v=s(67135),h=s(39661),f=s(44371),x=s(83146),y=s(76230),b=s(74166);let p=[{value:"drug",label:"Drug"},{value:"fluid",label:"Fluid"}],j=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"drug";return{itemId:"".concat((null==e?void 0:e.itemId)||(0,r.Z)()),type:"".concat((null==e?void 0:e.type)||i),key:"".concat((null==e?void 0:e.key)||""),drug:"".concat((null==e?void 0:e.drug)||""),minGestation:"".concat((null==e?void 0:e.minGestation)===null?"":null==e?void 0:e.minGestation),maxGestation:"".concat((null==e?void 0:e.maxGestation)===null?"":null==e?void 0:e.maxGestation),minWeight:"".concat((null==e?void 0:e.minWeight)===null?"":null==e?void 0:e.minWeight),maxWeight:"".concat((null==e?void 0:e.maxWeight)===null?"":null==e?void 0:e.maxWeight),minAge:"".concat((null==e?void 0:e.minAge)===null?"":null==e?void 0:e.minAge),maxAge:"".concat((null==e?void 0:e.maxAge)===null?"":null==e?void 0:e.maxAge),dosage:"".concat((null==e?void 0:e.dosage)===null?"":null==e?void 0:e.dosage),dosageMultiplier:"".concat((null==e?void 0:e.dosageMultiplier)===null?"":null==e?void 0:e.dosageMultiplier),hourlyFeed:"".concat((null==e?void 0:e.hourlyFeed)===null?"":null==e?void 0:e.hourlyFeed),hourlyFeedMultiplier:"".concat((null==e?void 0:e.hourlyFeedMultiplier)===null?"":null==e?void 0:e.hourlyFeedMultiplier),dayOfLife:"".concat((null==e?void 0:e.dayOfLife)||""),dosageText:"".concat((null==e?void 0:e.dosageText)||""),managementText:"".concat((null==e?void 0:e.managementText)||""),gestationKey:"".concat((null==e?void 0:e.gestationKey)||""),weightKey:"".concat((null==e?void 0:e.weightKey)||""),diagnosisKey:"".concat((null==e?void 0:e.diagnosisKey)||""),condition:"".concat((null==e?void 0:e.condition)||""),administrationFrequency:"".concat((null==e?void 0:e.administrationFrequency)||""),drugUnit:"".concat((null==e?void 0:e.drugUnit)||""),routeOfAdministration:"".concat((null==e?void 0:e.routeOfAdministration)||""),ageKey:"".concat((null==e?void 0:e.ageKey)||"")}};function N(e){let{disabled:i,item:s,floating:r,onChange:N}=e,F=(0,t.useRouter)(),A=(0,t.useSearchParams)(),C=(0,n.useMemo)(()=>l.Z.parse(A.toString()),[A]),{itemId:w,addItem:M}=C,[I,k]=(0,o.Z)(),[G,K]=(0,o.Z)(),[W,_]=(0,n.useState)(!1),[T,S]=(0,n.useState)(j(s,M)),{keys:D,loading:E}=(0,f.a)(),{confirm:Z}=(0,y.t)();(0,n.useEffect)(()=>{_(!!w||!!M)},[w,M]),(0,n.useEffect)(()=>{S(j(s,M))},[s,M]);let O=(0,n.useCallback)(()=>{N({...T,minWeight:T.minWeight?Number(T.minWeight):null,maxWeight:T.maxWeight?Number(T.maxWeight):null,minGestation:T.minGestation?Number(T.minGestation):null,maxGestation:T.maxGestation?Number(T.maxGestation):null,hourlyFeed:T.hourlyFeed?Number(T.hourlyFeed):null,hourlyFeedMultiplier:T.hourlyFeedMultiplier?Number(T.hourlyFeedMultiplier):null,minAge:T.minAge?Number(T.minAge):null,maxAge:T.maxAge?Number(T.maxAge):null,dosage:T.dosage?Number(T.dosage):null,dosageMultiplier:T.dosageMultiplier?Number(T.dosageMultiplier):null,type:T.type})},[T,s,N]),U=(0,n.useCallback)(()=>{_(!1),S(j(void 0,M)),F.push("?".concat(l.Z.stringify({...C,itemId:void 0,addItem:void 0})));let e=(null==k?void 0:k.top)||0;setTimeout(()=>window.scrollTo({top:e}),500)},[C,k,F.push]),{isFormComplete:q,isDrug:L,isFluid:R}=(0,n.useMemo)(()=>{let e="drug"===T.type,i="fluid"===T.type,s=!!(T.type&&T.key&&T.drug&&T.minWeight&&T.minGestation&&T.maxWeight&&T.maxGestation&&T.minAge&&T.maxAge&&T.managementText&&T.dosageText&&T.administrationFrequency&&T.drugUnit&&T.routeOfAdministration&&T.ageKey&&T.dosage&&Number(T.minGestation||"0")<=Number(T.maxGestation||"0")&&Number(T.minWeight||"0")<=Number(T.maxWeight||"0")&&Number(T.minAge||"0")<=Number(T.maxAge||"0")&&Number(T.hourlyFeed||"0")<=Number(T.hourlyFeed||"0")&&Number(T.hourlyFeedMultiplier||"0")<=Number(T.hourlyFeedMultiplier||"0")&&(!e||T.diagnosisKey)&&(!i||T.condition&&T.hourlyFeed&&T.hourlyFeedMultiplier&&Number(T.hourlyFeed||"0")<=Number(T.hourlyFeed||"0")&&Number(T.hourlyFeedMultiplier||"0")<=Number(T.hourlyFeedMultiplier||"0")));return{isDrug:e,isFluid:i,isFormComplete:s}},[T,M]),P=(0,n.useCallback)(()=>!q||E||i,[q,E,i]),z=(0,a.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"type",children:"Type *"}),(0,a.jsxs)(u.Ph,{value:T.type,required:!0,name:"type",disabled:i,onValueChange:e=>{let i=j((null==s?void 0:s.type)===e?s:void 0,M);Z(()=>S(s=>({...s,type:e,hourlyFeed:i.hourlyFeed,hourlyFeedMultiplier:i.hourlyFeedMultiplier,condition:i.condition,diagnosisKey:i.diagnosisKey,drugUnit:i.drugUnit})),{danger:!0,title:"Confirm type change",message:'\n                                <p class="text-xl">Are you sure you want to change type?</p>\n                                <p>Some fields will be cleared as they do not apply on all types!</p>\n                            ',positiveLabel:"Yes, change type",negativeLabel:"No, keep the current type"})},children:[(0,a.jsx)(u.i4,{children:(0,a.jsx)(u.ki,{placeholder:"Select type"})}),(0,a.jsx)(u.Bw,{children:(0,a.jsx)(u.DI,{children:p.map(e=>(0,a.jsx)(u.Ql,{value:e.value,children:e.label},e.value))})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(v._,{secondary:!0,htmlFor:"drug",children:[(0,b.Z)(T.type)," *"]}),(0,a.jsx)(g.I,{name:"drug",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.drug,disabled:i,onChange:e=>S(i=>({...i,drug:e.target.value}))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"key",children:"Key *"}),(0,a.jsx)(g.I,{name:"key",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.key,disabled:i,onChange:e=>S(i=>({...i,key:e.target.value}))})]}),L&&(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"diagnosisKey",children:"Diagnosis Key *"}),(0,a.jsx)(m.g,{rows:3,name:"gestationKey",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.diagnosisKey,disabled:i,onChange:e=>S(i=>({...i,diagnosisKey:e.target.value}))}),(0,a.jsx)("span",{className:"font-bold opacity-50 text-xs",children:"e.g NSep,Premature,Dehyd"})]}),R&&(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"condition",children:"Condition *"}),(0,a.jsx)(m.g,{rows:3,name:"condition",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.condition,disabled:i,onChange:e=>S(i=>({...i,condition:e.target.value}))}),(0,a.jsxs)("span",{className:"font-bold opacity-50 text-xs",children:["e.g ",x._S]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"gestationKey",children:"Gestation Key *"}),(0,a.jsx)(g.I,{name:"gestationKey",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.gestationKey,disabled:i,onChange:e=>S(i=>({...i,gestationKey:e.target.value}))})]}),(0,a.jsxs)("div",{className:"flex gap-x-2",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"minGestation",children:"Min Gestation (weeks) *"}),(0,a.jsx)(g.I,{name:"minGestation",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.minGestation,type:"number",disabled:i,onChange:e=>{let i=e.target.value,s=T.maxGestation;i||(s=""),S(e=>({...e,minGestation:i,maxGestation:s}))}})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"maxGestation",error:Number(T.minGestation||"0")>Number(T.maxGestation||"0"),children:"Max Gestation (weeks) *"}),(0,a.jsx)(g.I,{name:"maxGestation",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.maxGestation,type:"number",disabled:i||!T.minGestation,min:T.minGestation,error:Number(T.minGestation||"0")>Number(T.maxGestation||"0"),onChange:e=>S(i=>({...i,maxGestation:e.target.value}))})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"weightKey",children:"Weight Key *"}),(0,a.jsx)(g.I,{name:"weightKey",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.weightKey,disabled:i,onChange:e=>S(i=>({...i,weightKey:e.target.value}))})]}),(0,a.jsxs)("div",{className:"flex gap-x-2",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"minWeight",children:"Min Weight (grams) *"}),(0,a.jsx)(g.I,{name:"minWeight",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.minWeight,type:"number",disabled:i,onChange:e=>{let i=e.target.value,s=T.maxWeight;i||(s=""),S(e=>({...e,minWeight:i,maxWeight:s}))}})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"maxWeight",error:Number(T.minWeight||"0")>Number(T.maxWeight||"0"),children:"Max Weight (grams) *"}),(0,a.jsx)(g.I,{name:"maxWeight",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.maxWeight,type:"number",disabled:i||!T.minWeight,min:T.minWeight,error:Number(T.minWeight||"0")>Number(T.maxWeight||"0"),onChange:e=>S(i=>({...i,maxWeight:e.target.value}))})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"ageKey",children:"Day of Life (Age) Key *"}),(0,a.jsx)(g.I,{name:"ageKey",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.ageKey,disabled:i,onChange:e=>S(i=>({...i,ageKey:e.target.value}))})]}),(0,a.jsxs)("div",{className:"flex gap-x-2",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"minAge",children:"Min Day of Life (Age - hours) *"}),(0,a.jsx)(g.I,{name:"minAge",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.minAge,type:"number",disabled:i,onChange:e=>{let i=e.target.value,s=T.maxAge;i||(s=""),S(e=>({...e,minAge:i,maxAge:s}))}})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"maxAge",error:Number(T.minAge||"0")>Number(T.maxAge||"0"),children:"Max Day of Life (Age - hours) *"}),(0,a.jsx)(g.I,{name:"maxAge",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.maxAge,type:"number",disabled:i||!T.minAge,min:T.minAge,error:Number(T.minAge||"0")>Number(T.maxAge||"0"),onChange:e=>S(i=>({...i,maxAge:e.target.value}))})]})]}),R&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex gap-x-2",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"hourlyFeed",children:"Hourly feed *"}),(0,a.jsx)(g.I,{name:"hourlyFeed",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.hourlyFeed,type:"number",disabled:i,onChange:e=>S(i=>({...i,hourlyFeed:e.target.value}))})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"hourlyFeed",children:"Hourly feed multiplier *"}),(0,a.jsx)(g.I,{name:"hourlyFeedMultiplier",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.hourlyFeedMultiplier,type:"number",disabled:i,onChange:e=>S(i=>({...i,hourlyFeedMultiplier:e.target.value}))})]})]})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(v._,{secondary:!0,htmlFor:"dosage",children:["Dose (e.g. ",R?"ml/kg":"mg/kg",") *"]}),(0,a.jsx)(g.I,{name:"dosage",type:"number",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.dosage,disabled:i,onChange:e=>S(i=>({...i,dosage:e.target.value}))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"dosageMultiplier",children:"Drug Dose Multiplier *"}),(0,a.jsx)(g.I,{name:"dosageMultiplier",type:"number",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.dosageMultiplier,disabled:i,onChange:e=>S(i=>({...i,dosageMultiplier:e.target.value}))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"drugUnit",children:"Drug Unit *"}),(0,a.jsx)(g.I,{name:"drugUnit",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.drugUnit,disabled:i,onChange:e=>S(i=>({...i,drugUnit:e.target.value}))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"administrationFrequency",children:"Administration Frequency *"}),(0,a.jsx)(g.I,{name:"administrationFrequency",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.administrationFrequency,disabled:i,onChange:e=>S(i=>({...i,administrationFrequency:e.target.value}))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"routeOfAdministration",children:"Route of Administration *"}),(0,a.jsx)(g.I,{name:"routeOfAdministration",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.routeOfAdministration,disabled:i,onChange:e=>S(i=>({...i,routeOfAdministration:e.target.value}))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"managementText",children:"Management text *"}),(0,a.jsx)(g.I,{name:"managementText",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.managementText,disabled:i,onChange:e=>S(i=>({...i,managementText:e.target.value}))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(v._,{secondary:!0,htmlFor:"weight",children:"Dosage text *"}),(0,a.jsx)(g.I,{name:"dosageText",className:"focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",value:T.dosageText,disabled:i,onChange:e=>S(i=>({...i,dosageText:e.target.value}))})]})]});return(0,a.jsxs)(a.Fragment,{children:[E&&(0,a.jsx)(h.a,{overlay:!0}),(0,a.jsx)("div",{ref:I,children:!1===r?z:(0,a.jsx)(d.yo,{open:W,onOpenChange:e=>{e||U()},children:(0,a.jsxs)(d.ue,{hideCloseButton:!0,side:"right",className:"p-0 m-0 flex flex-col w-full max-w-full sm:max-w-[80%] md:max-w-[80%] lg:max-w-[50%]",children:[(0,a.jsxs)(d.Tu,{className:"flex flex-row items-center py-2 px-4 border-b border-b-border text-left sm:text-left",children:[(0,a.jsxs)(d.bC,{children:[M?"Add":"",w?"Edit":""," ",(null==s?void 0:s.type)||M]}),(0,a.jsx)(d.Ei,{className:"hidden"})]}),(0,a.jsx)("div",{ref:G,className:"flex-1 py-2 px-0 overflow-y-auto",children:(0,a.jsx)("div",{className:"px-4",children:z})}),(0,a.jsxs)("div",{className:"border-t border-t-border px-4 py-2 flex gap-x-2",children:[(0,a.jsx)("span",{className:"text-danger text-xs my-auto",children:"* Required"}),(0,a.jsx)("div",{className:"ml-auto"}),(0,a.jsx)(d.sw,{asChild:!0,children:(0,a.jsx)(c.z,{variant:"ghost",onClick:()=>{},children:"Cancel"})}),(0,a.jsx)(d.sw,{asChild:!0,children:(0,a.jsx)(c.z,{onClick:()=>O(),disabled:P(),children:"Save"})})]})]})})})]})}},44371:function(e,i,s){s.d(i,{R:function(){return g},a:function(){return m}});var a=s(2265),n=s(16463),t=s(12491),l=s(38472),r=s(39099),o=s(53699),d=s(7752);let u={initialised:!1,loading:!1,keys:[],drugs:[]},c=(0,r.Ue)(e=>u);function g(){c.setState(u)}function m(){let e=c(),{drugs:i}=e,s=(0,n.useRouter)(),r=(0,n.useSearchParams)(),g=(0,a.useMemo)(()=>t.Z.parse(r.toString()),[r]),{itemId:m}=g,v=(0,a.useMemo)(()=>{var e;return null===(e=i.filter(e=>e.itemId===m||e.key===m)[0])||void 0===e?void 0:e.itemId},[m,i]),{alert:h}=(0,o.s)(),f=(0,a.useCallback)(async()=>{try{var e,i;c.setState({loading:!0});let s=await l.Z.get("/api/drugs-library?data="+JSON.stringify({returnDraftsIfExist:!0}));if(null===(e=s.data.errors)||void 0===e?void 0:e.length)throw Error(null===(i=s.data.errors)||void 0===i?void 0:i.join(", "));c.setState({drugs:s.data.data})}catch(e){h({title:"Error",message:e.message,variant:"error"})}finally{c.setState({loading:!1})}},[h]);!function(e){let{events:i}=e,s=(0,a.useMemo)(()=>i,[i]),t=(0,a.useRef)({eventsTimeouts:{},eventsTimestamps:{}});(0,a.useRef)(new Date().getTime());let l=(0,n.useRouter)();(0,a.useEffect)(()=>{s.forEach(e=>{let{name:i,action:s,delay:a=100,onEvent:n}=e;d.Z.on(i,function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];let d=()=>{var e,a;(!s||r[0]===s)&&(null===(e=n.callback)||void 0===e||e.call(n,...r),(null==n?void 0:n.refreshRouter)&&(console.log(i,"refreshing..."),l.refresh()),(null===(a=n.redirect)||void 0===a?void 0:a.to)&&(n.redirect.replace?l.replace(n.redirect.to):l.push(n.redirect.to)))},u=new Date().getTime();a?(clearTimeout(t.current.eventsTimeouts[i]),t.current.eventsTimeouts[i]=setTimeout(()=>{t.current.eventsTimestamps[i]=u,d()},a)):(t.current.eventsTimestamps[i]=new Date().getTime(),d())})})},[s,l])}({events:[{name:"data_changed",onEvent:{callback:async()=>{await f(),s.refresh()}}}]});let x=(0,a.useCallback)(async e=>{try{var i,a;c.setState(i=>({loading:!0,drugs:i.drugs.filter(i=>!e.includes(i.itemId))}));let n=await l.Z.delete("/api/drugs-library?data="+JSON.stringify({itemsIds:e}));if(null===(i=n.data.errors)||void 0===i?void 0:i.length)throw Error(null===(a=n.data.errors)||void 0===a?void 0:a.join(", "));s.refresh(),h({title:"",message:"Drug deleted successfully!",variant:"success"})}catch(e){h({title:"Error",message:e.message,variant:"error"})}finally{c.setState({loading:!1})}},[h,s.refresh]),y=(0,a.useCallback)(async e=>{try{var a,n;c.setState({loading:!0});let t=i;c.setState(i=>(t=!v&&e?[...i.drugs,e]:i.drugs.map(i=>i.itemId!==(null==e?void 0:e.itemId)?i:{...i,...e}),{loading:!0,drugs:t}));let r={data:e?[e]:t,broadcastAction:!0},o=await l.Z.post("/api/drugs-library/save",r);if(null===(a=o.data.errors)||void 0===a?void 0:a.length)throw Error(null===(n=o.data.errors)||void 0===n?void 0:n.join(", "));await f(),s.refresh(),h({title:"",message:"Drug".concat(e?"":"s"," saved successfully!"),variant:"success"})}catch(e){h({title:"Error",message:e.message,variant:"error"})}finally{c.setState({loading:!1})}},[i,v,s.refresh]),b=(0,a.useCallback)(async e=>{try{var i,a;c.setState({loading:!0});let n={data:e.map(e=>({itemId:e})),broadcastAction:!0},t=await l.Z.post("/api/drugs-library/copy",n);if(null===(i=t.data.errors)||void 0===i?void 0:i.length)throw Error(null===(a=t.data.errors)||void 0===a?void 0:a.join(", "));await f(),s.refresh(),h({title:"",message:"Drug".concat(e.length<2?"":"s"," copied successfully!"),variant:"success"})}catch(e){h({title:"Error",message:e.message,variant:"error"})}finally{c.setState({loading:!1})}},[s.refresh]);return(0,a.useEffect)(()=>{c.getState().initialised||(f(),c.setState({initialised:!0}))},[f]),(0,a.useCallback)(()=>{c.setState(u)},[]),{...e,selectedItemId:v,addLink:e=>"?".concat(t.Z.stringify({...g,addItem:e})),editLink:e=>"?".concat(t.Z.stringify({...g,itemId:e})),getDrugs:f,deleteDrugs:x,saveDrugs:y,copyDrugs:b}}},74166:function(e,i){i.Z=e=>"".concat(e||"").charAt(0).toUpperCase()+"".concat(e||"").slice(1)},87138:function(e,i,s){s.d(i,{default:function(){return n.a}});var a=s(231),n=s.n(a)}}]);
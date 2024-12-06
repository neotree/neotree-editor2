"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{10738:function(e,t,r){r.d(t,{x:function(){return Y}});var n=r(57437),s=r(2265),a=r(6460),i=r(40933),o=r(24241),u=r(19212),c=r.n(u),l=r(37440),d=r(50495),m=r(70518),f=r(87592),x=r(83045);function p(e){let{className:t,classNames:r,showOutsideDays:s=!0,...a}=e;return(0,n.jsx)(x._W,{showOutsideDays:s,className:(0,l.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,l.cn)((0,d.d)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,l.cn)((0,d.d)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-primary/20",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...r},components:{IconLeft:e=>{let{...t}=e;return(0,n.jsx)(m.Z,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,n.jsx)(f.Z,{className:"h-4 w-4"})}},...a})}p.displayName="Calendar";var h=r(19573),g=r(67135),y=r(83102);function w(e,t){let{max:r,min:n=0,loop:s=!1}=t,a=parseInt(e,10);return isNaN(a)?"00":(s?(a>r&&(a=n),a<n&&(a=r)):(a>r&&(a=r),a<n&&(a=n)),a.toString().padStart(2,"0"))}function v(e){return/^(0[0-9]|1[0-9]|2[0-3])$/.test(e)?e:w(e,{max:23})}function D(e){return/^(0[1-9]|1[0-2])$/.test(e)?e:w(e,{min:1,max:12})}function b(e){return/^[0-5][0-9]$/.test(e)?e:w(e,{max:59})}function j(e,t){let{min:r,max:n,step:s}=t,a=parseInt(e,10);return isNaN(a)?"00":w(String(a+=s),{min:r,max:n,loop:!0})}function N(e,t,r,n){switch(r){case"minutes":return function(e,t){let r=b(t);return e.setMinutes(parseInt(r,10)),e}(e,t);case"seconds":return function(e,t){let r=b(t);return e.setSeconds(parseInt(r,10)),e}(e,t);case"hours":return function(e,t){let r=v(t);return e.setHours(parseInt(r,10)),e}(e,t);case"12hours":if(!n)return e;return function(e,t,r){let n=function(e,t){if("PM"===t){if(e<=11)return e+12}else if("AM"===t&&12===e)return 0;return e}(parseInt(D(t),10),r);return e.setHours(n),e}(e,t,n);default:return e}}let _=s.forwardRef((e,t)=>{let{className:r,type:a="tel",value:i,id:o,name:u,date:c=new Date(new Date().setHours(0,0,0,0)),picker:d,period:m,setDate:f,onChange:x,onKeyDown:p,onLeftFocus:h,onRightFocus:g,...w}=e,[_,k]=s.useState(!1),[Y,M]=s.useState("0");s.useEffect(()=>{if(_){let e=setTimeout(()=>{k(!1)},2e3);return()=>clearTimeout(e)}},[_]);let S=s.useMemo(()=>(function(e,t){switch(t){case"minutes":return b(String(e.getMinutes()));case"seconds":return b(String(e.getSeconds()));case"hours":return v(String(e.getHours()));case"12hours":var r;return D(String(0===(r=e.getHours())||12===r?"12":r>=22?"".concat(r-12):r%12>9?"".concat(r):"0".concat(r%12)));default:return"00"}})(c,d),[c,d]),H=e=>"12hours"===d&&_&&"1"===S.slice(1,2)&&"0"===Y?"0"+e:_?S.slice(1,2)+e:"0"+e,I=e=>{if("Tab"!==e.key){if(e.preventDefault(),"ArrowRight"===e.key&&(null==g||g()),"ArrowLeft"===e.key&&(null==h||h()),["ArrowUp","ArrowDown"].includes(e.key)){let t=function(e,t,r){switch(r){case"minutes":case"seconds":return j(e,{min:0,max:59,step:t});case"hours":return j(e,{min:0,max:23,step:t});case"12hours":return j(e,{min:1,max:12,step:t});default:return"00"}}(S,"ArrowUp"===e.key?1:-1,d);_&&k(!1),f(N(new Date(c),t,d,m))}if(e.key>="0"&&e.key<="9"){"12hours"===d&&M(e.key);let t=H(e.key);_&&(null==g||g()),k(e=>!e),f(N(new Date(c),t,d,m))}}};return(0,n.jsx)(y.I,{ref:t,id:o||d,name:u||d,noRing:!0,className:(0,l.cn)("w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-primary/20 [&::-webkit-inner-spin-button]:appearance-none",r),value:i||S,onChange:e=>{e.preventDefault(),null==x||x(e)},type:a,inputMode:"decimal",onKeyDown:e=>{null==p||p(e),I(e)},...w})});function k(e){let{date:t,setDate:r}=e,a=(0,s.useRef)(null),o=(0,s.useRef)(null),u=(0,s.useRef)(null);return(0,n.jsxs)("div",{className:"flex items-end gap-2",children:[(0,n.jsxs)("div",{className:"grid gap-1 text-center",children:[(0,n.jsx)(g._,{htmlFor:"hours",className:"text-xs",children:"Hours"}),(0,n.jsx)(_,{picker:"hours",date:t,setDate:r,ref:o,onRightFocus:()=>{var e;return null===(e=a.current)||void 0===e?void 0:e.focus()}})]}),(0,n.jsxs)("div",{className:"grid gap-1 text-center",children:[(0,n.jsx)(g._,{htmlFor:"minutes",className:"text-xs",children:"Minutes"}),(0,n.jsx)(_,{picker:"minutes",date:t,setDate:r,ref:a,onLeftFocus:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.focus()},onRightFocus:()=>{var e;return null===(e=u.current)||void 0===e?void 0:e.focus()}})]}),(0,n.jsxs)("div",{className:"grid gap-1 text-center",children:[(0,n.jsx)(g._,{htmlFor:"seconds",className:"text-xs",children:"Seconds"}),(0,n.jsx)(_,{picker:"seconds",date:t,setDate:r,ref:u,onLeftFocus:()=>{var e;return null===(e=a.current)||void 0===e?void 0:e.focus()}})]}),(0,n.jsx)("div",{className:"flex h-10 items-center",children:(0,n.jsx)(i.Z,{className:"ml-2 h-4 w-4"})})]})}function Y(e){let{type:t="date",value:r,disabled:u,min:m,max:f,onChange:x}=e,{date:g}=(0,s.useMemo)(()=>{let e;if("time"===t){let t=c()().format("YYYY-MM-DD");e=r?new Date("".concat(t," ").concat(r)):void 0,e=c()(e).isValid()?e:void 0}else{if(e=r?new Date(r):void 0,(e=c()(e).isValid()?e:void 0)&&m){let t=c()(e).format("YYYY-MM-DD"),r=c()(m).format("YYYY-MM-DD");e=new Date(t).getTime()>=new Date(r).getTime()?e:void 0}if(e&&f){let t=c()(e).format("YYYY-MM-DD"),r=c()(f).format("YYYY-MM-DD");e=new Date(t).getTime()<=new Date(r).getTime()?e:void 0}}return{date:e,isDirty:!!e&&!!r&&e.toDateString()!==new Date(r).toDateString()}},[r,m,f,t]),y=(0,s.useMemo)(()=>{switch(t){case"date":return"PPP";case"time":return"HH:mm:ss";default:return"PPP HH:mm:ss"}},[t]);return(0,n.jsxs)(h.J2,{children:[(0,n.jsx)(h.xo,{asChild:!0,children:(0,n.jsxs)(d.z,{disabled:u,variant:"outline",className:(0,l.cn)("w-full justify-start text-left font-normal",!g&&"text-muted-foreground"),children:["time"===t?(0,n.jsx)(i.Z,{className:"mr-2 h-4 w-4"}):(0,n.jsx)(o.Z,{className:"mr-2 h-4 w-4"}),g?(0,a.WU)(g,y):(0,n.jsxs)("span",{children:["Pick ","time"===t?"time":"a date"]})]})}),(0,n.jsxs)(h.yk,{className:"w-auto p-0",children:["time"!==t&&(0,n.jsx)(p,{mode:"single",selected:g,onSelect:e=>x({date:e||null,time:e?c()(e).format("HH:mm:ss"):null}),initialFocus:!0,fromDate:m,toDate:f}),("datetime"===t||"time"===t)&&(0,n.jsx)("div",{className:"p-3 border-t border-border",children:(0,n.jsx)(k,{setDate:e=>{x({date:e||null,time:e?c()(e).format("HH:mm:ss"):null})},date:g})})]})]})}_.displayName="TimePickerInput"}}]);
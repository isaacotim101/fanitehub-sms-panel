(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[516],{389:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tables",function(){return s(5075)}])},6165:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(5893),r=s(7294),l=s(1664),a=s.n(l),c=s(1637),i=s(606);function o(e){let{label:t,icon:s,iconSize:l,href:o,target:d,type:u,color:h="white",className:x="",asAnchor:m=!1,small:j=!1,outline:f=!1,active:p=!1,disabled:b=!1,roundedFull:g=!1,onClick:w}=e,N=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",b?"cursor-not-allowed":"cursor-pointer",g?"rounded-full":"rounded",(0,c.pQ)(h,f,!b,p),x];!t&&s?N.push("p-1"):j?N.push("text-sm",g?"px-3 py-1":"p-1"):N.push("py-2",g?"px-6":"px-3"),b&&N.push(f?"opacity-50":"opacity-70");let v=N.join(" "),y=(0,n.jsxs)(n.Fragment,{children:[s&&(0,n.jsx)(i.Z,{path:s,size:l}),t&&(0,n.jsx)("span",{className:j&&s?"px-1":"px-2",children:t})]});return o&&!b?(0,n.jsx)(a(),{href:o,target:d,className:v,children:y}):r.createElement(m?"a":"button",{className:v,type:null!=u?u:"button",target:d,disabled:b,onClick:w},y)}},8951:function(e,t,s){"use strict";var n=s(5893),r=s(7294);let l=e=>{let{type:t="justify-start",mb:s="-mb-3",classAddon:l="mr-3 last:mr-0 mb-3",noWrap:a=!1,children:c}=e;return(0,n.jsx)("div",{className:"flex items-center ".concat(t," ").concat(s," ").concat(a?"flex-nowrap":"flex-wrap"),children:r.Children.map(c,e=>(0,r.cloneElement)(e,{className:"".concat(l," ").concat(e.props.className)}))})};t.Z=l},2708:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var n=s(5893),r=s(7294);function l(e){let{noPadding:t=!1,className:s,children:r}=e;return(0,n.jsx)("div",{className:"flex-1 ".concat(t?"":"p-6"," ").concat(s),children:r})}function a(e){let{className:t,children:s}=e;return(0,n.jsx)("footer",{className:"p-6 ".concat(t),children:s})}function c(e){let{rounded:t="rounded-2xl",flex:s="flex-col",className:c="",hasComponentLayout:i=!1,hasTable:o=!1,isHoverable:d=!1,isModal:u=!1,children:h,footer:x,onClick:m}=e,j=["bg-white flex",c,t,s,u?"dark:bg-slate-900":"dark:bg-slate-900/70"];return d&&j.push("hover:shadow-lg transition-shadow duration-500"),r.createElement("div",{className:j.join(" "),onClick:m},i?h:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{noPadding:o,children:h}),x&&(0,n.jsx)(a,{children:x})]}))}},3357:function(e,t,s){"use strict";var n=s(5893);s(7294);let r=()=>(0,n.jsx)("div",{className:"text-center py-24 text-gray-500 dark:text-slate-400",children:(0,n.jsx)("p",{children:"Nothing's here…"})});t.Z=r},1058:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(5893);s(7294);var r=s(1637),l=s(606);function a(e){let{icon:t,color:s,w:a="w-12",h:c="h-12",bg:i=!1,className:o=""}=e,d=i?r.RH[s]:"".concat(r.uK[s]," bg-gray-50 dark:bg-slate-800");return(0,n.jsx)(l.Z,{path:t,w:a,h:c,size:"24",className:"rounded-full ".concat(d," ").concat(o)})}},4062:function(e,t,s){"use strict";var n=s(5893),r=s(5317),l=s(7294),a=s(1637),c=s(6165),i=s(606);let o=e=>{let{outline:t=!1,children:s,...o}=e,d=t?a.bN[o.color]:a.RH[o.color],[u,h]=(0,l.useState)(!1),x=e=>{e.preventDefault(),h(!0)};return u?null:(0,n.jsx)("div",{className:"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150 ".concat(d),children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center mb-6 md:mb-0",children:[o.icon&&(0,n.jsx)(i.Z,{path:o.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",className:"md:mr-2"}),(0,n.jsx)("span",{className:"text-center md:text-left md:py-2",children:s})]}),o.button,!o.button&&(0,n.jsx)(c.Z,{icon:r.r5M,color:"white",onClick:x,small:!0,roundedFull:!0})]})})};t.Z=o},5301:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var n=s(5893);s(7294);var r=s(929);function l(e){let{children:t}=e;return(0,n.jsx)("section",{className:"p-6 ".concat(r.DV),children:t})}},3813:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(5893),r=s(5317),l=s(7294),a=s(6165),c=s(606),i=s(1058);function o(e){let{icon:t,title:s,main:o=!1,children:d}=e,u=!!l.Children.count(d);return(0,n.jsxs)("section",{className:"".concat(o?"":"pt-6"," mb-6 flex items-center justify-between"),children:[(0,n.jsxs)("div",{className:"flex items-center justify-start",children:[t&&o&&(0,n.jsx)(i.Z,{icon:t,color:"light",className:"mr-3",bg:!0}),t&&!o&&(0,n.jsx)(c.Z,{path:t,className:"mr-2",size:"20"}),(0,n.jsx)("h1",{className:"leading-tight ".concat(o?"text-3xl":"text-2xl"),children:s})]}),d,!u&&(0,n.jsx)(a.Z,{icon:r.Shd,color:"whiteDark"})]})}},5807:function(e,t,s){"use strict";var n=s(5893),r=s(5317),l=s(7294),a=s(7587),c=s(6165),i=s(8951),o=s(8492);let d=()=>{let{clients:e}=(0,a.X)(),[t,s]=(0,l.useState)(0),d=e.slice(5*t,5*(t+1)),u=e.length/5,h=[];for(let x=0;x<u;x++)h.push(x);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{}),(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Company"}),(0,n.jsx)("th",{children:"City"}),(0,n.jsx)("th",{children:"Progress"}),(0,n.jsx)("th",{children:"Created"}),(0,n.jsx)("th",{})]})}),(0,n.jsx)("tbody",{children:d.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"border-b-0 lg:w-6 before:hidden",children:(0,n.jsx)(o.Z,{username:e.name,className:"w-24 h-24 mx-auto lg:w-6 lg:h-6"})}),(0,n.jsx)("td",{"data-label":"Name",children:e.name}),(0,n.jsx)("td",{"data-label":"Company",children:e.company}),(0,n.jsx)("td",{"data-label":"City",children:e.city}),(0,n.jsx)("td",{"data-label":"Progress",className:"lg:w-32",children:(0,n.jsx)("progress",{className:"flex w-2/5 self-center lg:w-full",max:"100",value:e.progress,children:e.progress})}),(0,n.jsx)("td",{"data-label":"Created",className:"lg:w-1 whitespace-nowrap",children:(0,n.jsx)("small",{className:"text-gray-500 dark:text-slate-400",children:e.created})}),(0,n.jsx)("td",{className:"before:hidden lg:w-1 whitespace-nowrap",children:(0,n.jsxs)(i.Z,{type:"justify-start lg:justify-end",noWrap:!0,children:[(0,n.jsx)(c.Z,{color:"info",icon:r.rgx,small:!0}),(0,n.jsx)(c.Z,{color:"danger",icon:r.QGK,small:!0})]})})]},e.id))})]}),(0,n.jsx)("div",{className:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800",children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between py-3 md:py-0",children:[(0,n.jsx)(i.Z,{children:h.map(e=>(0,n.jsx)(c.Z,{active:e===t,label:e+1,color:e===t?"lightDark":"whiteDark",small:!0,onClick:()=>s(e)},e))}),(0,n.jsxs)("small",{className:"mt-6 md:mt-0",children:["Page ",t+1," of ",u]})]})})]})};t.Z=d},7587:function(e,t,s){"use strict";s.d(t,{X:function(){return l},p:function(){return a}});var n=s(8100);let r=e=>fetch(e).then(e=>e.json()),l=()=>{var e;let{data:t,error:s}=(0,n.ZP)("/admin-one-react-tailwind/data-sources/clients.json",r);return{clients:null!==(e=null==t?void 0:t.data)&&void 0!==e?e:[],isLoading:!s&&!t,isError:s}},a=()=>{var e;let{data:t,error:s}=(0,n.ZP)("/admin-one-react-tailwind/data-sources/history.json",r);return{transactions:null!==(e=null==t?void 0:t.data)&&void 0!==e?e:[],isLoading:!s&&!t,isError:s}}},5075:function(e,t,s){"use strict";s.r(t);var n=s(5893),r=s(5317),l=s(9008),a=s.n(l);s(7294);var c=s(6165),i=s(2708),o=s(3357),d=s(3810),u=s(4062),h=s(5301),x=s(3813),m=s(5807),j=s(929);let f=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsxs)("title",{children:["Tables - ",j.xw]})}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(x.Z,{icon:r.FYI,title:"Tables",main:!0,children:(0,n.jsx)(c.Z,{href:"https://github.com/justboil/admin-one-react-tailwind",target:"_blank",icon:r.LcO,label:"Star on GitHub",color:"contrast",roundedFull:!0,small:!0})}),(0,n.jsxs)(u.Z,{color:"info",icon:r.qOQ,children:[(0,n.jsx)("b",{children:"Responsive table."})," Collapses on mobile"]}),(0,n.jsx)(i.Z,{className:"mb-6",hasTable:!0,children:(0,n.jsx)(m.Z,{})}),(0,n.jsx)(x.Z,{icon:r.EYP,title:"Empty variation"}),(0,n.jsxs)(u.Z,{color:"danger",icon:r.EYP,children:[(0,n.jsx)("b",{children:"Empty card."})," When there's nothing to show"]}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(o.Z,{})})]})]});f.getLayout=function(e){return(0,n.jsx)(d.Z,{children:e})},t.default=f}},function(e){e.O(0,[702,664,392,810,774,888,179],function(){return e(e.s=389)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{528:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(9293)}])},3068:function(e,s,t){"use strict";t.d(s,{Z:function(){return i}});var n=t(5893);t(7294);var l=t(7594),r=t(5533),a=e=>{let{small:s=!1,className:t="",...l}=e;return(0,n.jsxs)("div",{className:"inline-flex items-center capitalize leading-none ".concat(s?"text-xs":"text-sm"," ").concat(t),children:[l.icon&&(0,n.jsx)(r.Z,{path:l.icon,h:"h-4",w:"w-4",className:s?"mr-1":"mr-2",size:s?14:null}),l.label&&(0,n.jsx)("span",{children:l.label})]})},i=e=>{let{small:s=!1,outline:t=!1,className:r="",...i}=e,c=t?l.bN[i.color]:l.RH[i.color];return(0,n.jsx)(a,{className:"border rounded-full ".concat(s?"py-1 px-3":"py-1.5 px-4"," ").concat(c," ").concat(r),icon:i.icon,label:i.label,small:s})}},9293:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return R}});var n=t(5893),l=t(5317),r=t(9008),a=t.n(r),i=t(7294),c=t(3067),o=t(3880),d=t(497),x=t(298),m=t(7594),u=t(5533),h=t(7669),f=t(2077),j=t.n(f),b=e=>{let{prefix:s="",suffix:t="",value:l,duration:r=500}=e,[a,c]=(0,i.useState)(0),o=a<1e3?a:j()(a).format("0,0"),d=[],x=e=>{let s=Math.ceil(a+e);if(s>l)return c(l),!1;c(s),d.push(setTimeout(()=>{x(e)},25))};return(0,i.useEffect)(()=>(x(l/(r/25)),()=>{d.forEach(e=>{clearTimeout(e)})})),(0,n.jsxs)("div",{children:[s,o,t]})},p=t(3068),g=e=>{let{small:s=!1,...t}=e,r={up:l.Waq,down:l.CW,success:l.k6A,danger:l.O8k,warning:l._gM,info:l.EaN}[t.type];return(0,n.jsx)(p.Z,{label:t.label,color:t.color,icon:r,small:s})},v=e=>(0,n.jsxs)(h.Z,{children:[e.trendLabel&&e.trendType&&e.trendColor&&(0,n.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,n.jsx)(g,{label:e.trendLabel,type:e.trendType,color:e.trendColor,small:!0}),(0,n.jsx)(c.Z,{icon:l.Shd,color:"lightDark",small:!0})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-lg leading-tight text-gray-500 dark:text-slate-400",children:e.label}),(0,n.jsx)("h1",{className:"text-3xl leading-tight font-semibold",children:(0,n.jsx)(b,{value:e.number,prefix:e.numberPrefix,suffix:e.numberSuffix})})]}),e.icon&&(0,n.jsx)(u.Z,{path:e.icon,size:"48",w:"",h:"h-16",className:m.uK[e.iconColor]})]})]}),w=t(5944),N=t(4164),y=e=>{let s={withdraw:l.fmS,deposit:l.X$m,invoice:l.IH$,payment:l.SoU}[e.transaction.type],t=()=>{switch(e.transaction.type){case"withdraw":return"danger";case"deposit":return"success";case"invoice":return"warning";case"payment":return"info"}};return(0,n.jsx)(h.Z,{className:"mb-6 last:mb-0",children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0",children:[(0,n.jsx)(N.Z,{icon:s,color:t(),className:"md:mr-6 mb-6 md:mb-0"}),(0,n.jsxs)("div",{className:"text-center space-y-1 md:text-left md:mr-6",children:[(0,n.jsxs)("h4",{className:"text-xl",children:["$",e.transaction.amount]}),(0,n.jsxs)("p",{className:"text-gray-500 dark:text-slate-400",children:[(0,n.jsx)("b",{children:e.transaction.date})," via ",e.transaction.business]})]})]}),(0,n.jsxs)("div",{className:"text-center md:text-right space-y-2",children:[(0,n.jsx)("p",{className:"text-sm text-gray-500",children:e.transaction.name}),(0,n.jsx)("div",{children:(0,n.jsx)(p.Z,{color:t(),label:e.transaction.type,small:!0})})]})]})})},Z=t(4996),C=e=>{let s=()=>e.client.progress>=60?"success":e.client.progress>=40?"warning":"danger",t={success:l.sIZ,warning:l.aE,danger:l.ic4}[s()];return(0,n.jsx)(h.Z,{className:"mb-6 last:mb-0",children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0",children:[(0,n.jsx)(Z.Z,{className:"w-12 h-12 md:mr-6 mb-6 md:mb-0",username:e.client.name}),(0,n.jsxs)("div",{className:"text-center md:text-left overflow-hidden",children:[(0,n.jsx)("h4",{className:"text-xl text-ellipsis",children:e.client.name}),(0,n.jsxs)("p",{className:"text-gray-500 dark:text-slate-400",children:[e.client.created," @ ",e.client.login]})]})]}),(0,n.jsx)(p.Z,{color:s(),icon:t,label:"".concat(e.client.progress,"%")})]})})},k=e=>{let{className:s="",children:t}=e;return(0,n.jsx)("div",{className:"".concat(s," rounded-2xl py-12 px-6 lg:px-12 text-center"),children:t})},_=()=>(0,n.jsxs)(k,{className:m.FA,children:[(0,n.jsxs)("h1",{className:"text-3xl text-white mb-6",children:["Like the project? Please star on ",(0,n.jsx)("b",{children:"GitHub"})," ;-)"]}),(0,n.jsx)("div",{children:(0,n.jsx)(c.Z,{href:"https://github.com/justboil/admin-one-react-tailwind",target:"_blank",icon:l.LcO,label:"GitHub",roundedFull:!0})})]});let S={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},T=e=>{let s=[];for(let t=0;t<e;t++)s.push(Math.round(200*Math.random()));return s},E=(e,s)=>({fill:!1,borderColor:S.default[e],borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:S.default[e],pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:S.default[e],pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:T(s),tension:.5,cubicInterpolationMode:"default"}),L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,s=[];for(let t=1;t<=e;t++)s.push("0".concat(t));return{labels:s,datasets:[E("primary",e),E("info",e),E("danger",e)]}};var O=t(6775),H=t(5376);O.kL.register(O.jn,O.od,O.ST,O.f$,O.uw,O.u);let D={responsive:!0,maintainAspectRatio:!1,scales:{y:{display:!1},x:{display:!0}},plugins:{legend:{display:!1}}};var M=e=>{let{data:s}=e;return(0,n.jsx)(H.x1,{options:D,data:s,className:"h-96"})},z=t(2133),B=t(9725),F=t(8725);let P=()=>{let{clients:e}=(0,w.X)(),{transactions:s}=(0,w.p)(),t=e.slice(0,4),[r,o]=(0,i.useState)(L());return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:(0,F.pz)("Dashboard")})}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(x.Z,{icon:l.M7S,title:"Overview",main:!0,children:(0,n.jsx)(c.Z,{href:"https://github.com/justboil/admin-one-react-tailwind",target:"_blank",icon:l.LcO,label:"Star on GitHub",color:"contrast",roundedFull:!0,small:!0})}),(0,n.jsxs)("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6",children:[(0,n.jsx)(v,{trendLabel:"12%",trendType:"up",trendColor:"success",icon:l.zr,iconColor:"success",number:512,label:"Clients"}),(0,n.jsx)(v,{trendLabel:"16%",trendType:"down",trendColor:"danger",icon:l.JKU,iconColor:"info",number:7770,numberPrefix:"$",label:"Sales"}),(0,n.jsx)(v,{trendLabel:"Overflow",trendType:"warning",trendColor:"warning",icon:l.M7S,iconColor:"danger",number:256,numberSuffix:"%",label:"Performance"})]}),(0,n.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[(0,n.jsx)("div",{className:"flex flex-col justify-between",children:s.map(e=>(0,n.jsx)(y,{transaction:e},e.id))}),(0,n.jsx)("div",{className:"flex flex-col justify-between",children:t.map(e=>(0,n.jsx)(C,{client:e},e.id))})]}),(0,n.jsx)("div",{className:"my-6",children:(0,n.jsx)(_,{})}),(0,n.jsx)(x.Z,{icon:l.Cld,title:"Trends overview",children:(0,n.jsx)(c.Z,{icon:l.vS,color:"whiteDark",onClick:e=>{e.preventDefault(),o(L())}})}),(0,n.jsx)(h.Z,{className:"mb-6",children:r&&(0,n.jsx)(M,{data:r})}),(0,n.jsx)(x.Z,{icon:l.zr,title:"Clients"}),(0,n.jsxs)(z.Z,{color:"info",icon:l.qOQ,children:[(0,n.jsx)("b",{children:"Responsive table."})," Collapses on mobile"]}),(0,n.jsx)(h.Z,{hasTable:!0,children:(0,n.jsx)(B.Z,{})})]})]})};P.getLayout=function(e){return(0,n.jsx)(o.Z,{children:e})};var R=P}},function(e){e.O(0,[702,757,664,374,734,517,184,299,774,888,179],function(){return e(e.s=528)}),_N_E=e.O()}]);
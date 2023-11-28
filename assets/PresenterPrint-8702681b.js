import{d as _,u as d,a as p,c as m,b as u,r as h,e as o,f as t,t as s,g as r,F as f,h as g,n as v,i as x,o as n,j as b,k as y,l as k,m as N,_ as P}from"./index-9424411a.js";import{N as w}from"./NoteDisplay-16bec39f.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},z={class:"font-bold flex gap-2"},B={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,l)=>(n(),o("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",D,[t("h1",L,s(r(m).title),1),t("div",S,s(new Date().toLocaleString()),1)]),(n(!0),o(f,null,g(i.value,(e,c)=>(n(),o("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",z,[t("div",B,s(e==null?void 0:e.no)+"/"+s(r(b)),1),y(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),o("hr",j)):N("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/blaze/Desktop/ppt/state_management/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};

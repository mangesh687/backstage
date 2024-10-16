/*! For license information please see 64ff9c5e.f04b868b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[498591],{408131:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=s(474848),r=s(28453);const o={id:"overview",title:"Kubernetes",sidebar_label:"Overview",description:"Monitoring Kubernetes based services with the software catalog"},i=void 0,a={id:"features/kubernetes/overview",title:"Kubernetes",description:"Monitoring Kubernetes based services with the software catalog",source:"@site/versioned_docs/version-stable/features/kubernetes/index.md",sourceDirName:"features/kubernetes",slug:"/features/kubernetes/",permalink:"/docs/features/kubernetes/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/features/kubernetes/index.md",tags:[],version:"stable",frontMatter:{id:"overview",title:"Kubernetes",sidebar_label:"Overview",description:"Monitoring Kubernetes based services with the software catalog"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/features/software-catalog/faq"},next:{title:"Installation",permalink:"/docs/features/kubernetes/installation"}},c={},l=[{value:"Let&#39;s use it!",id:"lets-use-it",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Kubernetes in Backstage is a tool that's designed around the needs of service\nowners, not cluster admins. Now developers can easily check the health of their\nservices no matter how or where those services are deployed \u2014 whether it's on a\nlocal host for testing or in production on dozens of clusters around the world."}),"\n",(0,n.jsx)(t.p,{children:"It will elevate the visibility of errors where identified, and provide drill\ndown about the deployments, pods, and other objects for a service."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Kubernetes plugin screenshot",src:s(986196).A+"",width:"1999",height:"1092"})}),"\n",(0,n.jsxs)(t.p,{children:["The feature is made up of two plugins:\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/kubernetes",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes"})}),"\nand\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/kubernetes-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-kubernetes-backend"})}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The frontend plugin exposes information to the end user in a digestible way,\nwhile the backend wraps the mechanics to connect to Kubernetes clusters to\ncollect the relevant information."}),"\n",(0,n.jsx)(t.h2,{id:"lets-use-it",children:"Let's use it!"}),"\n",(0,n.jsxs)(t.p,{children:["To get started, first you must ",(0,n.jsx)(t.a,{href:"/docs/features/kubernetes/installation",children:"install the Kubernetes plugins"}),"\nand then ",(0,n.jsx)(t.a,{href:"/docs/features/kubernetes/configuration",children:"configure them"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,t,s)=>{var n=s(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var n,o={},l=null,d=null;for(n in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,s)=>{e.exports=s(221020)},986196:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/backstage-k8s-2-deployments-36ca3f831747105e25f3e69e7e459032.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(296540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
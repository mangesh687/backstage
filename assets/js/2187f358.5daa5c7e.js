/*! For license information please see 2187f358.5daa5c7e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[270133],{177775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var r=t(474848),s=t(28453);const c={id:"plugin-kubernetes-cluster",title:"@backstage/plugin-kubernetes-cluster",description:"API Reference for @backstage/plugin-kubernetes-cluster"},i=void 0,l={id:"reference/plugin-kubernetes-cluster",title:"@backstage/plugin-kubernetes-cluster",description:"API Reference for @backstage/plugin-kubernetes-cluster",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-cluster.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-cluster",permalink:"/docs/reference/plugin-kubernetes-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-cluster.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-cluster",title:"@backstage/plugin-kubernetes-cluster",description:"API Reference for @backstage/plugin-kubernetes-cluster"}},u={},o=[{value:"Functions",id:"functions",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-cluster",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-kubernetes-cluster"})})]}),"\n",(0,r.jsx)(n.p,{children:"A Backstage plugin that integrates towards Kubernetes"}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Function"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-cluster.entitykubernetesclustercontent",children:"EntityKubernetesClusterContent(props)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Props of EntityKubernetesContent"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-cluster.iskubernetesclusteravailable",children:"isKubernetesClusterAvailable(entity)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-cluster.router",children:"Router()"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-kubernetes-cluster.entitykubernetesclustercontentprops",children:"EntityKubernetesClusterContentProps"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Props of EntityKubernetesContent"}),"\n"]})]})})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,c={},o=null,d=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!u.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:d,props:c,_owner:l.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(296540);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);
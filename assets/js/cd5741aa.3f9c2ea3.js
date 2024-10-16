/*! For license information please see cd5741aa.3f9c2ea3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[179461],{367631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=t(474848),r=t(28453);const i={id:"plugin-app-node",title:"@backstage/plugin-app-node",description:"API Reference for @backstage/plugin-app-node"},c=void 0,a={id:"reference/plugin-app-node",title:"@backstage/plugin-app-node",description:"API Reference for @backstage/plugin-app-node",source:"@site/../docs/reference/plugin-app-node.md",sourceDirName:"reference",slug:"/reference/plugin-app-node",permalink:"/docs/next/reference/plugin-app-node",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-app-node.md",tags:[],version:"current",frontMatter:{id:"plugin-app-node",title:"@backstage/plugin-app-node",description:"API Reference for @backstage/plugin-app-node"}},d={},o=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-app-node"})})]}),"\n",(0,s.jsx)(n.p,{children:"Node.js library for the app plugin."}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Function"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.loadcompiledconfigschema",children:"loadCompiledConfigSchema(appDistDir)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Loads the config schema that is embedded in the frontend build."}),"\n"]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.configschemaextensionpoint",children:"ConfigSchemaExtensionPoint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The interface for ",(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.configschemaextensionpoint",children:"configSchemaExtensionPoint"}),"."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.staticfallbackhandlerextensionpoint",children:"StaticFallbackHandlerExtensionPoint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["The interface for ",(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.staticfallbackhandlerextensionpoint",children:"staticFallbackHandlerExtensionPoint"}),"."]}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.configschemaextensionpoint",children:"configSchemaExtensionPoint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"An extension point the exposes the ability to override the config schema used by the frontend application."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/plugin-app-node.staticfallbackhandlerextensionpoint",children:"staticFallbackHandlerExtensionPoint"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"An extension point the exposes the ability to configure a static fallback handler for the app backend."}),"\n",(0,s.jsx)(n.p,{children:"The static fallback handler is a request handler to handle requests for static content that is not present in the app bundle."}),"\n",(0,s.jsx)(n.p,{children:"This can be used to avoid issues with clients on older deployment versions trying to access lazy loaded content that is no longer present. Typically the requests would fall back to a long-term object store where all recently deployed versions of the app are present."}),"\n",(0,s.jsxs)(n.p,{children:["Another option is to provide a ",(0,s.jsx)(n.code,{children:"database"})," that will take care of storing the static assets instead."]}),"\n",(0,s.jsxs)(n.p,{children:["If both ",(0,s.jsx)(n.code,{children:"database"})," and ",(0,s.jsx)(n.code,{children:"staticFallbackHandler"})," are provided, the ",(0,s.jsx)(n.code,{children:"database"})," will attempt to serve static assets first, and if they are not found, the ",(0,s.jsx)(n.code,{children:"staticFallbackHandler"})," will be called."]}),"\n"]})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var s,i={},o=null,l=null;for(s in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:o,ref:l,props:i,_owner:a.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(296540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
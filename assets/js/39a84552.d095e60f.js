/*! For license information please see 39a84552.d095e60f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[631056],{869367:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(474848),o=r(28453);const i={id:"plugin-auth-node.oauthenvironmenthandler.mapconfig",title:"OAuthEnvironmentHandler.mapConfig()",description:"API reference for OAuthEnvironmentHandler.mapConfig()"},c=void 0,a={id:"reference/plugin-auth-node.oauthenvironmenthandler.mapconfig",title:"OAuthEnvironmentHandler.mapConfig()",description:"API reference for OAuthEnvironmentHandler.mapConfig()",source:"@site/versioned_docs/version-stable/reference/plugin-auth-node.oauthenvironmenthandler.mapconfig.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.oauthenvironmenthandler.mapconfig",permalink:"/docs/reference/plugin-auth-node.oauthenvironmenthandler.mapconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-node.oauthenvironmenthandler.mapconfig.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-node.oauthenvironmenthandler.mapconfig",title:"OAuthEnvironmentHandler.mapConfig()",description:"API reference for OAuthEnvironmentHandler.mapConfig()"}},s={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.oauthenvironmenthandler",children:(0,t.jsx)(n.code,{children:"OAuthEnvironmentHandler"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.oauthenvironmenthandler.mapconfig",children:(0,t.jsx)(n.code,{children:"mapConfig"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"static mapConfig(config: Config, factoryFunc: (envConfig: Config) => AuthProviderRouteHandlers): OAuthEnvironmentHandler;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"config"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"factoryFunc"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["(envConfig: ",(0,t.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),") => ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.authproviderroutehandlers",children:"AuthProviderRouteHandlers"})]}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.oauthenvironmenthandler",children:"OAuthEnvironmentHandler"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,i={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!s.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:l,props:i,_owner:a.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var t=r(296540);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
/*! For license information please see e3282489.9fdd61f7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[48278],{485846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(474848),s=t(28453);const i={id:"backend-plugin-api.authservice.getpluginrequesttoken",title:"AuthService.getPluginRequestToken()",description:"API reference for AuthService.getPluginRequestToken()"},c=void 0,a={id:"reference/backend-plugin-api.authservice.getpluginrequesttoken",title:"AuthService.getPluginRequestToken()",description:"API reference for AuthService.getPluginRequestToken()",source:"@site/../docs/reference/backend-plugin-api.authservice.getpluginrequesttoken.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.authservice.getpluginrequesttoken",permalink:"/docs/next/reference/backend-plugin-api.authservice.getpluginrequesttoken",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.authservice.getpluginrequesttoken.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.authservice.getpluginrequesttoken",title:"AuthService.getPluginRequestToken()",description:"API reference for AuthService.getPluginRequestToken()"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.authservice",children:(0,r.jsx)(n.code,{children:"AuthService"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.authservice.getpluginrequesttoken",children:(0,r.jsx)(n.code,{children:"getPluginRequestToken"})})]}),"\n",(0,r.jsx)(n.p,{children:"Issue a token that can be used for authenticating calls towards other backend plugins."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getPluginRequestToken(options: {\n        onBehalfOf: BackstageCredentials;\n        targetPluginId: string;\n    }): Promise<{\n        token: string;\n    }>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["{ onBehalfOf: ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.backstagecredentials",children:"BackstageCredentials"}),"; targetPluginId: string; }"]}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsx)(n.p,{children:"Promise<{ token: string; }>"}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"This method should be called before each request. Do not hold on to the issued token and reuse it for future calls."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,r)&&!o.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(296540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
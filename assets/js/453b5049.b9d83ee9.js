/*! For license information please see 453b5049.b9d83ee9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[40375],{569112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(474848),i=n(28453);const s={id:"integration.getgiteafilecontentsurl",title:"getGiteaFileContentsUrl()",description:"API reference for getGiteaFileContentsUrl()"},c=void 0,o={id:"reference/integration.getgiteafilecontentsurl",title:"getGiteaFileContentsUrl()",description:"API reference for getGiteaFileContentsUrl()",source:"@site/../docs/reference/integration.getgiteafilecontentsurl.md",sourceDirName:"reference",slug:"/reference/integration.getgiteafilecontentsurl",permalink:"/docs/next/reference/integration.getgiteafilecontentsurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.getgiteafilecontentsurl.md",tags:[],version:"current",frontMatter:{id:"integration.getgiteafilecontentsurl",title:"getGiteaFileContentsUrl()",description:"API reference for getGiteaFileContentsUrl()"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration",children:(0,r.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.getgiteafilecontentsurl",children:(0,r.jsx)(t.code,{children:"getGiteaFileContentsUrl"})})]}),"\n",(0,r.jsx)(t.p,{children:"Given a URL pointing to a file, returns an api URL for fetching the contents of the data."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function getGiteaFileContentsUrl(config: GiteaIntegrationConfig, url: string): string;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"config"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.giteaintegrationconfig",children:"GiteaIntegrationConfig"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"The relevant provider config"}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"url"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"string"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"A URL pointing to a file"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:"string"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["Converts from: ",(0,r.jsx)(t.a,{href:"https://gitea.com/a/b/src/branch/branchname/path/to/c.yaml",children:"https://gitea.com/a/b/src/branch/branchname/path/to/c.yaml"})," to: ",(0,r.jsx)(t.a,{href:"https://gitea.com/api/v1/repos/a/b/contents/path/to/c.yaml?ref=branchname",children:"https://gitea.com/api/v1/repos/a/b/contents/path/to/c.yaml?ref=branchname"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(296540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
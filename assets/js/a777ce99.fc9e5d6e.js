/*! For license information please see a777ce99.fc9e5d6e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[421967],{708547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(474848),i=n(28453);const s={id:"integration.getgiteaeditcontentsurl",title:"getGiteaEditContentsUrl()",description:"API reference for getGiteaEditContentsUrl()"},o=void 0,c={id:"reference/integration.getgiteaeditcontentsurl",title:"getGiteaEditContentsUrl()",description:"API reference for getGiteaEditContentsUrl()",source:"@site/versioned_docs/version-stable/reference/integration.getgiteaeditcontentsurl.md",sourceDirName:"reference",slug:"/reference/integration.getgiteaeditcontentsurl",permalink:"/docs/reference/integration.getgiteaeditcontentsurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/integration.getgiteaeditcontentsurl.md",tags:[],version:"stable",frontMatter:{id:"integration.getgiteaeditcontentsurl",title:"getGiteaEditContentsUrl()",description:"API reference for getGiteaEditContentsUrl()"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/integration",children:(0,r.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/integration.getgiteaeditcontentsurl",children:(0,r.jsx)(t.code,{children:"getGiteaEditContentsUrl"})})]}),"\n",(0,r.jsx)(t.p,{children:"Given a URL pointing to a file, returns a URL for editing the contents of the data."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function getGiteaEditContentsUrl(config: GiteaIntegrationConfig, url: string): string;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"config"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration.giteaintegrationconfig",children:"GiteaIntegrationConfig"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"The relevant provider config"}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"url"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"string"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"A URL pointing to a file"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:"string"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["Converts from: ",(0,r.jsx)(t.a,{href:"https://gitea.com/a/b/src/branchname/path/to/c.yaml",children:"https://gitea.com/a/b/src/branchname/path/to/c.yaml"})," or: ",(0,r.jsx)(t.a,{href:"https://gitea.com/a/b/%5C_edit/branchname/path/to/c.yaml",children:"https://gitea.com/a/b/\\_edit/branchname/path/to/c.yaml"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(296540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
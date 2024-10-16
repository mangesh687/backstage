/*! For license information please see 7874b6e5.78dcc130.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[622445],{41430:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(474848),s=r(28453);const o={id:"plugin-techdocs-node.techdocscontainerrunner.runcontainer",title:"TechDocsContainerRunner.runContainer()",description:"API reference for TechDocsContainerRunner.runContainer()"},c=void 0,i={id:"reference/plugin-techdocs-node.techdocscontainerrunner.runcontainer",title:"TechDocsContainerRunner.runContainer()",description:"API reference for TechDocsContainerRunner.runContainer()",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs-node.techdocscontainerrunner.runcontainer.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-node.techdocscontainerrunner.runcontainer",permalink:"/docs/reference/plugin-techdocs-node.techdocscontainerrunner.runcontainer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-techdocs-node.techdocscontainerrunner.runcontainer.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs-node.techdocscontainerrunner.runcontainer",title:"TechDocsContainerRunner.runContainer()",description:"API reference for TechDocsContainerRunner.runContainer()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(e.a,{href:"/docs/reference/plugin-techdocs-node",children:(0,t.jsx)(e.code,{children:"@backstage/plugin-techdocs-node"})})," > ",(0,t.jsx)(e.a,{href:"/docs/reference/plugin-techdocs-node.techdocscontainerrunner",children:(0,t.jsx)(e.code,{children:"TechDocsContainerRunner"})})," > ",(0,t.jsx)(e.a,{href:"/docs/reference/plugin-techdocs-node.techdocscontainerrunner.runcontainer",children:(0,t.jsx)(e.code,{children:"runContainer"})})]}),"\n",(0,t.jsx)(e.p,{children:"Runs a container image to completion."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"runContainer(opts: {\n        imageName: string;\n        command?: string | string[];\n        args: string[];\n        logStream?: Writable;\n        mountDirs?: Record<string, string>;\n        workingDir?: string;\n        envVars?: Record<string, string>;\n        pullImage?: boolean;\n        defaultUser?: boolean;\n        pullOptions?: {\n            authconfig?: {\n                username?: string;\n                password?: string;\n                auth?: string;\n                email?: string;\n                serveraddress?: string;\n                [key: string]: unknown;\n            };\n            [key: string]: unknown;\n        };\n    }): Promise<void>;\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.th,{children:["\n",(0,t.jsx)(e.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(e.th,{children:["\n",(0,t.jsx)(e.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(e.th,{children:["\n",(0,t.jsx)(e.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:["\n",(0,t.jsx)(e.p,{children:"opts"}),"\n"]}),(0,t.jsxs)(e.td,{children:["\n",(0,t.jsx)(e.p,{children:"{ imageName: string; command?: string | string[]; args: string[]; logStream?: Writable; mountDirs?: Record<string, string>; workingDir?: string; envVars?: Record<string, string>; pullImage?: boolean; defaultUser?: boolean; pullOptions?: { authconfig?: { username?: string; password?: string; auth?: string; email?: string; serveraddress?: string; [key: string]: unknown; }; [key: string]: unknown; }; }"}),"\n"]}),(0,t.jsx)(e.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsx)(e.p,{children:"Promise<void>"})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},221020:(n,e,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,r){var t,o={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(l=e.ref),e)c.call(e,t)&&!a.hasOwnProperty(t)&&(o[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===o[t]&&(o[t]=e[t]);return{$$typeof:s,type:n,key:d,ref:l,props:o,_owner:i.current}}e.Fragment=o,e.jsx=d,e.jsxs=d},474848:(n,e,r)=>{n.exports=r(221020)},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>i});var t=r(296540);const s={},o=t.createContext(s);function c(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);
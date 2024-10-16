/*! For license information please see c3bd1e1e.78b39ece.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[724355],{176221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(474848),c=n(28453);const i={id:"plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",title:"createGitlabRepoPushAction()",description:"API reference for createGitlabRepoPushAction()"},o=void 0,a={id:"reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",title:"createGitlabRepoPushAction()",description:"API reference for createGitlabRepoPushAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",title:"createGitlabRepoPushAction()",description:"API reference for createGitlabRepoPushAction()"}},s={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-gitlab.creategitlabrepopushaction",children:(0,r.jsx)(t.code,{children:"createGitlabRepoPushAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Create a new action that commits into a gitlab repository."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'createGitlabRepoPushAction: (options: {\n    integrations: ScmIntegrationRegistry;\n}) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    branchName: string;\n    commitMessage: string;\n    sourcePath?: string | undefined;\n    targetPath?: string | undefined;\n    token?: string | undefined;\n    commitAction?: "update" | "delete" | "create" | undefined;\n}, import("@backstage/types").JsonObject>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ integrations: ",(0,r.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; branchName: string; commitMessage: string; sourcePath?: string | undefined; targetPath?: string | undefined; token?: string | undefined; commitAction?: "update" | "delete" | "create" | undefined; }, import("@backstage/types").',(0,r.jsx)(t.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:c,type:e,key:d,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(296540);const c={},i=r.createContext(c);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
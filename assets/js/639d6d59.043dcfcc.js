/*! For license information please see 639d6d59.043dcfcc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[561549],{953073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(474848),i=t(28453);const o={id:"plugin-scaffolder-backend-module-github.creategithubenvironmentaction",title:"createGithubEnvironmentAction()",description:"API reference for createGithubEnvironmentAction()"},c=void 0,s={id:"reference/plugin-scaffolder-backend-module-github.creategithubenvironmentaction",title:"createGithubEnvironmentAction()",description:"API reference for createGithubEnvironmentAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.creategithubenvironmentaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-github.creategithubenvironmentaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubenvironmentaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.creategithubenvironmentaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-github.creategithubenvironmentaction",title:"createGithubEnvironmentAction()",description:"API reference for createGithubEnvironmentAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend-module-github"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubenvironmentaction",children:(0,r.jsx)(n.code,{children:"createGithubEnvironmentAction"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Creates an ",(0,r.jsx)(n.code,{children:"github:environment:create"})," Scaffolder action that creates a Github Environment."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function createGithubEnvironmentAction(options: {\n    integrations: ScmIntegrationRegistry;\n    catalogClient?: CatalogApi;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    name: string;\n    deploymentBranchPolicy?: {\n        protected_branches: boolean;\n        custom_branch_policies: boolean;\n    } | undefined;\n    customBranchPolicyNames?: string[] | undefined;\n    customTagPolicyNames?: string[] | undefined;\n    environmentVariables?: {\n        [key: string]: string;\n    } | undefined;\n    secrets?: {\n        [key: string]: string;\n    } | undefined;\n    token?: string | undefined;\n    waitTimer?: number | undefined;\n    preventSelfReview?: boolean | undefined;\n    reviewers?: string[] | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["{ integrations: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; catalogClient?: ",(0,r.jsx)(n.a,{href:"/docs/reference/catalog-client.catalogapi",children:"CatalogApi"}),"; }"]}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; name: string; deploymentBranchPolicy?: { protected_branches: boolean; custom_branch_policies: boolean; } | undefined; customBranchPolicyNames?: string[] | undefined; customTagPolicyNames?: string[] | undefined; environmentVariables?: { [key: string]: string; } | undefined; secrets?: { [key: string]: string; } | undefined; token?: string | undefined; waitTimer?: number | undefined; preventSelfReview?: boolean | undefined; reviewers?: string[] | undefined; }, import("@backstage/types").',(0,r.jsx)(n.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:s.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(296540);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
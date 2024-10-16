/*! For license information please see d36adc60.18366e4c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[523710],{86041:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(474848),a=n(28453);const i={id:"plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",title:"createGitlabProjectVariableAction()",description:"API reference for createGitlabProjectVariableAction()"},c=void 0,o={id:"reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",title:"createGitlabProjectVariableAction()",description:"API reference for createGitlabProjectVariableAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",title:"createGitlabProjectVariableAction()",description:"API reference for createGitlabProjectVariableAction()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gitlab",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabprojectvariableaction",children:(0,t.jsx)(r.code,{children:"createGitlabProjectVariableAction"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Creates a ",(0,t.jsx)(r.code,{children:"gitlab:projectVariable:create"})," Scaffolder action."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'createGitlabProjectVariableAction: (options: {\n    integrations: ScmIntegrationRegistry;\n}) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    key: string;\n    value: string;\n    repoUrl: string;\n    projectId: string | number;\n    variableType: string;\n    raw?: boolean | undefined;\n    token?: string | undefined;\n    masked?: boolean | undefined;\n    environmentScope?: string | undefined;\n    variableProtected?: boolean | undefined;\n}, import("@backstage/types").JsonObject>\n'})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"options"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:["{ integrations: ",(0,t.jsx)(r.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; }"]}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"Templating configuration."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,t.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ key: string; value: string; repoUrl: string; projectId: string | number; variableType: string; raw?: boolean | undefined; token?: string | undefined; masked?: boolean | undefined; environmentScope?: string | undefined; variableProtected?: boolean | undefined; }, import("@backstage/types").',(0,t.jsx)(r.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function b(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,n)=>{var t=n(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,i={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,t)&&!s.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:a,type:e,key:l,ref:d,props:i,_owner:o.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>o});var t=n(296540);const a={},i=t.createContext(a);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);
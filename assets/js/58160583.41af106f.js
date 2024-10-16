/*! For license information please see 58160583.41af106f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[325795],{903094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(474848),c=n(28453);const a={id:"plugin-scaffolder-backend.createfetchcatalogentityaction",title:"createFetchCatalogEntityAction()",description:"API reference for createFetchCatalogEntityAction()"},i=void 0,o={id:"reference/plugin-scaffolder-backend.createfetchcatalogentityaction",title:"createFetchCatalogEntityAction()",description:"API reference for createFetchCatalogEntityAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend.createfetchcatalogentityaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createfetchcatalogentityaction",permalink:"/docs/reference/plugin-scaffolder-backend.createfetchcatalogentityaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend.createfetchcatalogentityaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend.createfetchcatalogentityaction",title:"createFetchCatalogEntityAction()",description:"API reference for createFetchCatalogEntityAction()"}},s={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.createfetchcatalogentityaction",children:(0,r.jsx)(t.code,{children:"createFetchCatalogEntityAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Returns entity or entities from the catalog by entity reference(s)."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'function createFetchCatalogEntityAction(options: {\n    catalogClient: CatalogApi;\n    auth?: AuthService;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    optional?: boolean | undefined;\n    defaultKind?: string | undefined;\n    defaultNamespace?: string | undefined;\n    entityRef?: string | undefined;\n    entityRefs?: string[] | undefined;\n}, {\n    entities?: any[] | undefined;\n    entity?: any;\n}>;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ catalogClient: ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogapi",children:"CatalogApi"}),"; auth?: ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-plugin-api.authservice",children:"AuthService"}),"; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),"<{ optional?: boolean | undefined; defaultKind?: string | undefined; defaultNamespace?: string | undefined; entityRef?: string | undefined; entityRefs?: string[] | undefined; }, { entities?: any[] | undefined; entity?: any; }>"]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:c,type:e,key:d,ref:l,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(296540);const c={},a=r.createContext(c);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
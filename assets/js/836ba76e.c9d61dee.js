/*! For license information please see 836ba76e.c9d61dee.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[312967],{729900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(474848),i=n(28453);const r={id:"frontend-integration",title:"Frontend Integration",description:"How to place your Backstage frontend components behind authorization"},s=void 0,a={id:"permissions/frontend-integration",title:"Frontend Integration",description:"How to place your Backstage frontend components behind authorization",source:"@site/versioned_docs/version-stable/permissions/frontend-integration.md",sourceDirName:"permissions",slug:"/permissions/frontend-integration",permalink:"/docs/permissions/frontend-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/permissions/frontend-integration.md",tags:[],version:"stable",frontMatter:{id:"frontend-integration",title:"Frontend Integration",description:"How to place your Backstage frontend components behind authorization"},sidebar:"docs",previous:{title:"Writing a permission policy",permalink:"/docs/permissions/writing-a-policy"},next:{title:"Defining custom permission rules",permalink:"/docs/permissions/custom-rules"}},c={},l=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Now that we understand how to ",(0,o.jsx)(t.a,{href:"/docs/permissions/writing-a-policy",children:"author a permission policy"}),", let's consider cases where we'll need to supplement our policy with authorization checks on the frontend."]}),"\n",(0,o.jsx)(t.p,{children:"In most cases, actual functionality that live within various plugins will already have been placed behind authorization by the plugin authors. The permission backend will use your permission policy to return an authorization result, and the plugin frontend will correspondingly show/hide/disable the relevant UI component."}),"\n",(0,o.jsx)(t.p,{children:"However, there are some cases where the integrator needs to supplement the policy on the frontend. One example is app level routing."}),"\n",(0,o.jsxs)(t.p,{children:["If your Backstage permission policy may return a ",(0,o.jsx)(t.code,{children:"DENY"})," for users requesting the ",(0,o.jsx)(t.code,{children:"catalogEntityCreatePermission"}),", it may make sense, for example, to remove access to the ",(0,o.jsx)(t.code,{children:"/catalog-import"})," page entirely:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"/* highlight-add-start */\nimport { RequirePermission } from '@backstage/plugin-permission-react';\nimport { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common';\n/* highlight-add-end */\n\nconst routes = (\n  <FlatRoutes>\n    {/* highlight-remove-next-line */}\n    <Route path=\"/catalog-import\" element={<CatalogImportPage />} />\n    {/* highlight-add-start */}\n    <Route\n      path=\"/catalog-import\"\n      element={\n        <RequirePermission permission={catalogEntityCreatePermission}>\n          <CatalogImportPage />\n        </RequirePermission>\n      }\n    />\n    {/* highlight-add-end */}\n    {/* ... */}\n  </FlatRoutes>\n);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["With this change, users who are denied the ",(0,o.jsx)(t.code,{children:"catalogEntityCreatePermission"})," should now be unable to access the ",(0,o.jsx)(t.code,{children:"/catalog-import"})," page."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},221020:(e,t,n)=>{var o=n(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,r={},l=null,p=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:i,type:e,key:l,ref:p,props:r,_owner:a.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(296540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
/*! For license information please see ab1ddd91.d27c7c2a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[640203],{399605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(474848),o=t(28453);const s={id:"plugin-techdocs-node.transformdirlocation",title:"transformDirLocation()",description:"API reference for transformDirLocation()"},i=void 0,c={id:"reference/plugin-techdocs-node.transformdirlocation",title:"transformDirLocation()",description:"API reference for transformDirLocation()",source:"@site/../docs/reference/plugin-techdocs-node.transformdirlocation.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-node.transformdirlocation",permalink:"/docs/next/reference/plugin-techdocs-node.transformdirlocation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-node.transformdirlocation.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-node.transformdirlocation",title:"transformDirLocation()",description:"API reference for transformDirLocation()"}},d={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-techdocs-node"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.transformdirlocation",children:(0,r.jsx)(n.code,{children:"transformDirLocation"})})]}),"\n",(0,r.jsxs)(n.p,{children:["TechDocs references of type ",(0,r.jsx)(n.code,{children:"dir"})," are relative the source location of the entity. This function transforms relative references to absolute ones, based on the location the entity was ingested from. If the entity was registered by a ",(0,r.jsx)(n.code,{children:"url"})," location, it returns a ",(0,r.jsx)(n.code,{children:"url"})," location with a resolved target that points to the targeted subfolder. If the entity was registered by a ",(0,r.jsx)(n.code,{children:"file"})," location, it returns an absolute ",(0,r.jsx)(n.code,{children:"dir"})," location."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"transformDirLocation: (entity: Entity, dirAnnotation: ParsedLocationAnnotation, scmIntegrations: ScmIntegrationRegistry) => {\n    type: 'dir' | 'url';\n    target: string;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"entity"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/catalog-model.entity",children:"Entity"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"the entity with annotations"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"dirAnnotation"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.parsedlocationannotation",children:"ParsedLocationAnnotation"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"the parsed techdocs-ref annotation of type 'dir'"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"scmIntegrations"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"access to the scmIntegration to do url transformations"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsx)(n.p,{children:"{ type: 'dir' | 'url'; target: string; }"}),"\n",(0,r.jsx)(n.p,{children:"the transformed location with an absolute target."}),"\n",(0,r.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,r.jsxs)(n.p,{children:["if the entity doesn't specify a ",(0,r.jsx)(n.code,{children:"dir"})," location or is ingested from an unsupported location."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,s={},a=null,l=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:c.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(296540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
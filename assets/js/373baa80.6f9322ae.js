/*! For license information please see 373baa80.6f9322ae.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[813200],{101815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(474848),o=n(28453);const a={id:"plugin-catalog-react.entitytable",title:"EntityTable",description:"API reference for EntityTable"},c=void 0,i={id:"reference/plugin-catalog-react.entitytable",title:"EntityTable",description:"API reference for EntityTable",source:"@site/../docs/reference/plugin-catalog-react.entitytable.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-react.entitytable",permalink:"/docs/next/reference/plugin-catalog-react.entitytable",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-react.entitytable.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-react.entitytable",title:"EntityTable",description:"API reference for EntityTable"}},l={},s=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-react",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-react"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/plugin-catalog-react.entitytable",children:(0,r.jsx)(t.code,{children:"EntityTable"})})]}),"\n",(0,r.jsx)(t.p,{children:"A general entity table component, that can be used for composing more specific entity tables."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'EntityTable: {\n    <T extends Entity>(props: EntityTableProps<T>): React.JSX.Element;\n    columns: Readonly<{\n        createEntityRefColumn<T_1 extends Entity>(options: {\n            defaultKind?: string | undefined;\n        }): TableColumn<T_1>;\n        createEntityRelationColumn<T_2 extends Entity>(options: {\n            title: string;\n            relation: string;\n            defaultKind?: string | undefined;\n            filter?: {\n                kind: string;\n            } | undefined;\n        }): TableColumn<T_2>;\n        createOwnerColumn<T_3 extends Entity>(): TableColumn<T_3>;\n        createDomainColumn<T_4 extends Entity>(): TableColumn<T_4>;\n        createSystemColumn<T_5 extends Entity>(): TableColumn<T_5>;\n        createMetadataDescriptionColumn<T_6 extends Entity>(): TableColumn<T_6>;\n        createSpecLifecycleColumn<T_7 extends Entity>(): TableColumn<T_7>;\n        createSpecTypeColumn<T_8 extends Entity>(): TableColumn<T_8>;\n    }>;\n    systemEntityColumns: TableColumn<import("@backstage/catalog-model").SystemEntity>[];\n    componentEntityColumns: TableColumn<import("@backstage/catalog-model").ComponentEntity>[];\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,d=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const o={},a=r.createContext(o);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
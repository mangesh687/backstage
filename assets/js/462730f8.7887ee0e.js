/*! For license information please see 462730f8.7887ee0e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[436279],{948888:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=r(474848),s=r(28453);const o={id:"plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",title:"NewlineDelimitedJsonCollatorFactory",description:"API reference for NewlineDelimitedJsonCollatorFactory"},i=void 0,l={id:"reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",title:"NewlineDelimitedJsonCollatorFactory",description:"API reference for NewlineDelimitedJsonCollatorFactory",source:"@site/../docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",permalink:"/docs/next/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",title:"NewlineDelimitedJsonCollatorFactory",description:"API reference for NewlineDelimitedJsonCollatorFactory"}},c={},d=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",children:(0,t.jsx)(n.code,{children:"NewlineDelimitedJsonCollatorFactory"})})]}),"\n",(0,t.jsx)(n.p,{children:'Factory class producing a collator that can be used to index documents sourced from the latest newline delimited JSON file matching a given search pattern. "Latest" is determined by the name of the file (last alphabetically is considered latest).'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class NewlineDelimitedJsonCollatorFactory implements DocumentCollatorFactory \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Implements:"})," ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-common.documentcollatorfactory",children:"DocumentCollatorFactory"})]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["The reader provided must implement the ",(0,t.jsx)(n.code,{children:"search()"})," method as well as the ",(0,t.jsx)(n.code,{children:"readUrl"})," method whose response includes the ",(0,t.jsx)(n.code,{children:"stream()"})," method. Naturally, the reader must also be configured to understand the given search pattern."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Here's an example configuration using Google Cloud Storage, which would return the latest file under the ",(0,t.jsx)(n.code,{children:"bucket"})," GCS bucket with files like ",(0,t.jsx)(n.code,{children:"xyz-2021.ndjson"})," or ",(0,t.jsx)(n.code,{children:"xyz-2022.ndjson"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"indexBuilder.addCollator({\n  schedule,\n  factory: NewlineDelimitedJsonCollatorFactory.fromConfig(env.config, {\n    type: 'techdocs',\n    searchPattern: 'https://storage.cloud.google.com/bucket/xyz-*',\n    reader: env.reader,\n    logger: env.logger,\n  })\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Property"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.type",children:"type"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"readonly"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"string"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.visibilitypermission",children:"visibilityPermission"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"readonly"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permission",children:"Permission"})," | undefined"]}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.fromconfig",children:"fromConfig(_config, options)"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"static"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Returns a NewlineDelimitedJsonCollatorFactory instance from configuration and a set of options."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.getcollator",children:"getCollator()"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsx)(n.td,{children:"\n"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,o={},d=null,a=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:a,props:o,_owner:l.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
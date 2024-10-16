/*! For license information please see 7c0b25cc.2a588bad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[644130],{505653:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var c=r(474848),t=r(28453);const s={id:"plugin-search-backend-node.searchengine",title:"SearchEngine",description:"API reference for SearchEngine"},i=void 0,d={id:"reference/plugin-search-backend-node.searchengine",title:"SearchEngine",description:"API reference for SearchEngine",source:"@site/../docs/reference/plugin-search-backend-node.searchengine.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.searchengine",permalink:"/docs/next/reference/plugin-search-backend-node.searchengine",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.searchengine.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.searchengine",title:"SearchEngine",description:"API reference for SearchEngine"}},a={},o=[{value:"Methods",id:"methods",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node",children:(0,c.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.searchengine",children:(0,c.jsx)(n.code,{children:"SearchEngine"})})]}),"\n",(0,c.jsx)(n.p,{children:"Interface that must be implemented by specific search engines, responsible for performing indexing and querying and translating abstract queries into concrete, search engine-specific queries."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"export interface SearchEngine \n"})}),"\n",(0,c.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Method"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.searchengine.getindexer",children:"getIndexer(type)"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"Factory method for getting a search engine indexer for a given document type."}),"\n"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.searchengine.query",children:"query(query, options)"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"Perform a search query against the SearchEngine."}),"\n"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/next/reference/plugin-search-backend-node.searchengine.settranslator",children:"setTranslator(translator)"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"Override the default translator provided by the SearchEngine."}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},221020:(e,n,r)=>{var c=r(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var c,s={},o=null,h=null;for(c in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,c)&&!a.hasOwnProperty(c)&&(s[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===s[c]&&(s[c]=n[c]);return{$$typeof:t,type:e,key:o,ref:h,props:s,_owner:d.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var c=r(296540);const t={},s=c.createContext(t);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);
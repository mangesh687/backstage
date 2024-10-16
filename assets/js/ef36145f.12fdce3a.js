/*! For license information please see ef36145f.12fdce3a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[941923],{435178:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var c=n(474848),s=n(28453);const a={id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.translator",title:"ElasticSearchSearchEngine.translator()",description:"API reference for ElasticSearchSearchEngine.translator()"},t=void 0,i={id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.translator",title:"ElasticSearchSearchEngine.translator()",description:"API reference for ElasticSearchSearchEngine.translator()",source:"@site/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.translator.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.translator",permalink:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.translator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.translator.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.translator",title:"ElasticSearchSearchEngine.translator()",description:"API reference for ElasticSearchSearchEngine.translator()"}},l={},o=[{value:"Parameters",id:"parameters",level:2}];function h(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch",children:(0,c.jsx)(r.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine",children:(0,c.jsx)(r.code,{children:"ElasticSearchSearchEngine"})})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.translator",children:(0,c.jsx)(r.code,{children:"translator"})})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-typescript",children:"protected translator(query: SearchQuery, options?: ElasticSearchQueryTranslatorOptions): ElasticSearchConcreteQuery;\n"})}),"\n",(0,c.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"query"}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/plugin-search-common.searchquery",children:"SearchQuery"})}),"\n"]}),(0,c.jsx)(r.td,{children:"\n"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"options"}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchquerytranslatoroptions",children:"ElasticSearchQueryTranslatorOptions"})}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"/docs/next/reference/plugin-search-backend-module-elasticsearch.elasticsearchconcretequery",children:"ElasticSearchConcreteQuery"})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},221020:(e,r,n)=>{var c=n(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var c,a={},o=null,h=null;for(c in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(h=r.ref),r)t.call(r,c)&&!l.hasOwnProperty(c)&&(a[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===a[c]&&(a[c]=r[c]);return{$$typeof:s,type:e,key:o,ref:h,props:a,_owner:i.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>i});var c=n(296540);const s={},a=c.createContext(s);function t(e){const r=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(a.Provider,{value:r},e.children)}}}]);
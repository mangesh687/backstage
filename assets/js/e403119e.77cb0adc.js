/*! For license information please see e403119e.77cb0adc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[762471],{323443:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var c=n(474848),s=n(28453);const o={id:"plugin-search-backend-module-pg.pgsearchengine.from",title:"PgSearchEngine.from()",description:"API reference for PgSearchEngine.from()"},i=void 0,t={id:"reference/plugin-search-backend-module-pg.pgsearchengine.from",title:"PgSearchEngine.from()",description:"API reference for PgSearchEngine.from()",source:"@site/versioned_docs/version-stable/reference/plugin-search-backend-module-pg.pgsearchengine.from.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-pg.pgsearchengine.from",permalink:"/docs/reference/plugin-search-backend-module-pg.pgsearchengine.from",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-search-backend-module-pg.pgsearchengine.from.md",tags:[],version:"stable",frontMatter:{id:"plugin-search-backend-module-pg.pgsearchengine.from",title:"PgSearchEngine.from()",description:"API reference for PgSearchEngine.from()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-pg",children:(0,c.jsx)(r.code,{children:"@backstage/plugin-search-backend-module-pg"})})," > ",(0,c.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-pg.pgsearchengine",children:(0,c.jsx)(r.code,{children:"PgSearchEngine"})})," > ",(0,c.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-pg.pgsearchengine.from",children:(0,c.jsx)(r.code,{children:"from"})})]}),"\n",(0,c.jsxs)(r.blockquote,{children:["\n",(0,c.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,c.jsx)(r.p,{children:"This will be removed in a future release, please use fromConfig instead"}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-typescript",children:"static from(options: {\n        database: DatabaseService;\n        config: Config;\n        logger?: LoggerService;\n    }): Promise<PgSearchEngine>;\n"})}),"\n",(0,c.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(r.th,{children:["\n",(0,c.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(r.tbody,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:["\n",(0,c.jsx)(r.p,{children:"options"}),"\n"]}),(0,c.jsxs)(r.td,{children:["\n",(0,c.jsxs)(r.p,{children:["{ database: ",(0,c.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.databaseservice",children:"DatabaseService"}),"; config: ",(0,c.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"}),"; logger?: ",(0,c.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; }"]}),"\n"]}),(0,c.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,c.jsxs)(r.p,{children:["Promise<",(0,c.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-pg.pgsearchengine",children:"PgSearchEngine"}),">"]})]})}function g(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var c=n(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var c,o={},d=null,l=null;for(c in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,c)&&!a.hasOwnProperty(c)&&(o[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===o[c]&&(o[c]=r[c]);return{$$typeof:s,type:e,key:d,ref:l,props:o,_owner:t.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>t});var c=n(296540);const s={},o=c.createContext(s);function i(e){const r=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(o.Provider,{value:r},e.children)}}}]);
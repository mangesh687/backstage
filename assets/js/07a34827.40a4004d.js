/*! For license information please see 07a34827.40a4004d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[410509],{886921:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var t=r(474848),s=r(28453);const d={id:"plugin-catalog-backend-module-ldap.mapstringattr",title:"mapStringAttr()",description:"API reference for mapStringAttr()"},a=void 0,i={id:"reference/plugin-catalog-backend-module-ldap.mapstringattr",title:"mapStringAttr()",description:"API reference for mapStringAttr()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-ldap.mapstringattr.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.mapstringattr",permalink:"/docs/reference/plugin-catalog-backend-module-ldap.mapstringattr",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-ldap.mapstringattr.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-ldap.mapstringattr",title:"mapStringAttr()",description:"API reference for mapStringAttr()"}},c={},l=[{value:"Parameters",id:"parameters",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.mapstringattr",children:(0,t.jsx)(n.code,{children:"mapStringAttr"})})]}),"\n",(0,t.jsx)(n.p,{children:"Maps a single-valued attribute to a consumer."}),"\n",(0,t.jsx)(n.p,{children:"This helper can be useful when implementing a user or group transformer."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function mapStringAttr(entry: SearchEntry, vendor: LdapVendor, attributeName: string | undefined, setter: (value: string) => void): void;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"entry"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"SearchEntry"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"The LDAP source entry"}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"vendor"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapvendor",children:"LdapVendor"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"The LDAP vendor"}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"attributeName"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"string | undefined"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"The source attribute to map. If the attribute is undefined the mapping will be silently ignored."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"setter"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"(value: string) => void"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"The function to be called with the decoded attribute from the source entry"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsx)(n.p,{children:"void"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,d={},l=null,o=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(d[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===d[t]&&(d[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:o,props:d,_owner:i.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(296540);const s={},d=t.createContext(s);function a(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);
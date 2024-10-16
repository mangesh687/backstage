/*! For license information please see daa552ff.7fe370fa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[519149],{849124:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=o(474848),c=o(28453);const s={id:"plugin-catalog-backend-module-ldap.ldaporgreaderprocessor._constructor_",title:"LdapOrgReaderProcessor.(constructor)",description:"API reference for LdapOrgReaderProcessor.(constructor)"},t=void 0,a={id:"reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor._constructor_",title:"LdapOrgReaderProcessor.(constructor)",description:"API reference for LdapOrgReaderProcessor.(constructor)",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor._constructor_.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor._constructor_",permalink:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor._constructor_",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor._constructor_.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.ldaporgreaderprocessor._constructor_",title:"LdapOrgReaderProcessor.(constructor)",description:"API reference for LdapOrgReaderProcessor.(constructor)"}},d={},l=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor",children:(0,n.jsx)(r.code,{children:"LdapOrgReaderProcessor"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor._constructor_",children:(0,n.jsx)(r.code,{children:"(constructor)"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Constructs a new instance of the ",(0,n.jsx)(r.code,{children:"LdapOrgReaderProcessor"})," class"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"constructor(options: {\n        providers: LdapProviderConfig[];\n        logger: LoggerService;\n        groupTransformer?: GroupTransformer;\n        userTransformer?: UserTransformer;\n    });\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["{ providers: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.ldapproviderconfig",children:"LdapProviderConfig"}),"[]; logger: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; groupTransformer?: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"}),"; userTransformer?: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"}),"; }"]}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},221020:(e,r,o)=>{var n=o(296540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,o){var n,s={},l=null,i=null;for(n in void 0!==o&&(l=""+o),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)t.call(r,n)&&!d.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:c,type:e,key:l,ref:i,props:s,_owner:a.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,o)=>{e.exports=o(221020)},28453:(e,r,o)=>{o.d(r,{R:()=>t,x:()=>a});var n=o(296540);const c={},s=n.createContext(c);function t(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
/*! For license information please see 87abc3b4.ef98f34c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[142253],{411767:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=t(474848),o=t(28453);const c={id:"plugin-scaffolder.scaffolderclient.autocomplete",title:"ScaffolderClient.autocomplete()",description:"API reference for ScaffolderClient.autocomplete()"},s=void 0,l={id:"reference/plugin-scaffolder.scaffolderclient.autocomplete",title:"ScaffolderClient.autocomplete()",description:"API reference for ScaffolderClient.autocomplete()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder.scaffolderclient.autocomplete.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder.scaffolderclient.autocomplete",permalink:"/docs/reference/plugin-scaffolder.scaffolderclient.autocomplete",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder.scaffolderclient.autocomplete.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder.scaffolderclient.autocomplete",title:"ScaffolderClient.autocomplete()",description:"API reference for ScaffolderClient.autocomplete()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder.scaffolderclient",children:(0,n.jsx)(r.code,{children:"ScaffolderClient"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder.scaffolderclient.autocomplete",children:(0,n.jsx)(r.code,{children:"autocomplete"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"autocomplete({ token, resource, provider, context, }: {\n        token: string;\n        provider: string;\n        resource: string;\n        context?: Record<string, string>;\n    }): Promise<{\n        results: {\n            title: string;\n        }[];\n    }>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"{ token, resource, provider, context, }"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"{ token: string; provider: string; resource: string; context?: Record<string, string>; }"}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:"Promise<{ results: { title: string; }[]; }>"})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,c={},d=null,a=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:d,ref:a,props:c,_owner:l.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var n=t(296540);const o={},c=n.createContext(o);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);
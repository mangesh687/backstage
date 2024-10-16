/*! For license information please see 953f4295.a16257f9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[455822],{222531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(474848),a=r(28453);const o={id:"plugin-auth-backend-module-aws-alb-provider.awsalbauthenticator",title:"awsAlbAuthenticator",description:"API reference for awsAlbAuthenticator"},s=void 0,c={id:"reference/plugin-auth-backend-module-aws-alb-provider.awsalbauthenticator",title:"awsAlbAuthenticator",description:"API reference for awsAlbAuthenticator",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend-module-aws-alb-provider.awsalbauthenticator.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend-module-aws-alb-provider.awsalbauthenticator",permalink:"/docs/reference/plugin-auth-backend-module-aws-alb-provider.awsalbauthenticator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-backend-module-aws-alb-provider.awsalbauthenticator.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend-module-aws-alb-provider.awsalbauthenticator",title:"awsAlbAuthenticator",description:"API reference for awsAlbAuthenticator"}},i={},l=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend-module-aws-alb-provider",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend-module-aws-alb-provider"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend-module-aws-alb-provider.awsalbauthenticator",children:(0,n.jsx)(t.code,{children:"awsAlbAuthenticator"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'awsAlbAuthenticator: import("@backstage/plugin-auth-node").ProxyAuthenticator<{\n    issuer: string;\n    signer: string | undefined;\n    getKey: (header: import("jose").JWTHeaderParameters) => Promise<import("crypto").KeyObject>;\n}, AwsAlbResult, {\n    accessToken: string;\n    expiresInSeconds: number;\n}>\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,t,r)=>{var n=r(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(296540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
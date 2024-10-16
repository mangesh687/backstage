/*! For license information please see e0e01a23.c0df448e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[598756],{671090:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>p,contentTitle:()=>n,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var t=i(474848),a=i(28453);const c={id:"integration-react.scmauth.createdefaultapifactory",title:"ScmAuth.createDefaultApiFactory()",description:"API reference for ScmAuth.createDefaultApiFactory()"},n=void 0,o={id:"reference/integration-react.scmauth.createdefaultapifactory",title:"ScmAuth.createDefaultApiFactory()",description:"API reference for ScmAuth.createDefaultApiFactory()",source:"@site/versioned_docs/version-stable/reference/integration-react.scmauth.createdefaultapifactory.md",sourceDirName:"reference",slug:"/reference/integration-react.scmauth.createdefaultapifactory",permalink:"/docs/reference/integration-react.scmauth.createdefaultapifactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/integration-react.scmauth.createdefaultapifactory.md",tags:[],version:"stable",frontMatter:{id:"integration-react.scmauth.createdefaultapifactory",title:"ScmAuth.createDefaultApiFactory()",description:"API reference for ScmAuth.createDefaultApiFactory()"}},p={},s=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/integration-react",children:(0,t.jsx)(r.code,{children:"@backstage/integration-react"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/integration-react.scmauth",children:(0,t.jsx)(r.code,{children:"ScmAuth"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/integration-react.scmauth.createdefaultapifactory",children:(0,t.jsx)(r.code,{children:"createDefaultApiFactory"})})]}),"\n",(0,t.jsx)(r.p,{children:"Creates an API factory that enables auth for each of the default SCM providers."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'static createDefaultApiFactory(): import("@backstage/core-plugin-api").ApiFactory<ScmAuthApi, ScmAuthApi, {\n        github: OAuthApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n        gitlab: OAuthApi & import("@backstage/core-plugin-api").OpenIdConnectApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n        azure: OAuthApi & import("@backstage/core-plugin-api").OpenIdConnectApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n        bitbucket: OAuthApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n    }>;\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:['import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.apifactory",children:"ApiFactory"}),"<",(0,t.jsx)(r.a,{href:"/docs/reference/integration-react.scmauthapi",children:"ScmAuthApi"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/integration-react.scmauthapi",children:"ScmAuthApi"}),", { github: ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.oauthapi",children:"OAuthApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfoapi",children:"ProfileInfoApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityapi",children:"BackstageIdentityApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:"SessionApi"}),"; gitlab: ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.oauthapi",children:"OAuthApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.openidconnectapi",children:"OpenIdConnectApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfoapi",children:"ProfileInfoApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityapi",children:"BackstageIdentityApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:"SessionApi"}),"; azure: ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.oauthapi",children:"OAuthApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.openidconnectapi",children:"OpenIdConnectApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfoapi",children:"ProfileInfoApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityapi",children:"BackstageIdentityApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:"SessionApi"}),"; bitbucket: ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.oauthapi",children:"OAuthApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfoapi",children:"ProfileInfoApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageidentityapi",children:"BackstageIdentityApi"}),' & import("@backstage/core-plugin-api").',(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.sessionapi",children:"SessionApi"}),"; }>"]})]})}function f(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,i)=>{var t=i(296540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,i){var t,c={},s=null,l=null;for(t in void 0!==i&&(s=""+i),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)n.call(r,t)&&!p.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:a,type:e,key:s,ref:l,props:c,_owner:o.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},474848:(e,r,i)=>{e.exports=i(221020)},28453:(e,r,i)=>{i.d(r,{R:()=>n,x:()=>o});var t=i(296540);const a={},c=t.createContext(a);function n(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);
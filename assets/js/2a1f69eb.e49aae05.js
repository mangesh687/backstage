/*! For license information please see 2a1f69eb.e49aae05.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[785775],{303895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var o=n(474848),a=n(28453);const s={id:"oauth",title:"OAuth and OpenID Connect",description:"This section describes how Backstage allows plugins to request OAuth Access Tokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth to various third party APIs"},i=void 0,r={id:"auth/oauth",title:"OAuth and OpenID Connect",description:"This section describes how Backstage allows plugins to request OAuth Access Tokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth to various third party APIs",source:"@site/../docs/auth/oauth.md",sourceDirName:"auth",slug:"/auth/oauth",permalink:"/docs/next/auth/oauth",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/oauth.md",tags:[],version:"current",frontMatter:{id:"oauth",title:"OAuth and OpenID Connect",description:"This section describes how Backstage allows plugins to request OAuth Access Tokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth to various third party APIs"},sidebar:"docs",previous:{title:"Sign-in Identities and Resolvers",permalink:"/docs/next/auth/identity-resolver"},next:{title:"OIDC provider from scratch",permalink:"/docs/next/auth/oidc"}},c={},h=[{value:"Summary",id:"summary",level:2},{value:"Background",id:"background",level:2},{value:"OAuth in @backstage/core-app-api and auth-backend",id:"oauth-in-backstagecore-app-api-and-auth-backend",level:2},{value:"OAuth Flow",id:"oauth-flow",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This section describes how Backstage allows plugins to request OAuth Access\nTokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth\nto various third party APIs."}),"\n",(0,o.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(t.p,{children:["There are occasions when the user wants to perform actions towards third party\nservices that require authorization via OAuth. Backstage provides standardized\n",(0,o.jsx)(t.a,{href:"/docs/next/api/utility-apis",children:"Utility APIs"})," such as the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/core-plugin-api/src/apis/definitions/auth.ts",children:"GoogleAuthApi"}),"\nfor that use-case. Backstage also includes a set of implementations of these\nAPIs that integrate with the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend",children:"auth-backend"}),"\nplugin to provide a popup-based OAuth flow."]}),"\n",(0,o.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,o.jsxs)(t.p,{children:["Access control in OAuth is implemented in terms of scope, which is a list of\npermissions given to the app. An OAuth service can issue Access Tokens that are\ntied to a certain set of scopes, such as viewing profile information, reading\nand/or writing user data in the service. The scope format and handling is\nspecific to each OAuth provider, and the set of available scopes are typically\nfound in the documentation describing the auth solution of the provider, for\nexample\n",(0,o.jsx)(t.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"developers.google.com/identity/protocols/oauth2/scopes"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"As a part of logging in with an OAuth provider, the user needs to consent to\nboth the login itself and the set of scopes that the app is requesting to use.\nThis is done by loading a page provided by the OAuth provider, where a user can\nchoose an account to log in with, and accept or reject the request. If the user\naccepts the login request, a token is issued, and any holder of the token can\nuse it to make authenticated requests towards the third party service."}),"\n",(0,o.jsx)(t.h2,{id:"oauth-in-backstagecore-app-api-and-auth-backend",children:"OAuth in @backstage/core-app-api and auth-backend"}),"\n",(0,o.jsx)(t.p,{children:"The default OAuth implementation in Backstage is based on an OAuth server-side\noffline access flow, which means that it uses the backend as a helper in order\nto trade credentials. A benefit of this type of flow is that it does not require\nthe use of third party cookies, and is robust on a wide selection of browsers\nand privacy browsing plugins, strict security settings, etc."}),"\n",(0,o.jsx)(t.p,{children:"The implementation also uses a popup-based flow, where auth requests are handled\nin a new popup window that is opened by the app. By using a popup-based flow it\nis possible to request authentication at any point in the app, without requiring\na redirect. Because of this there is no need to ask for all scopes upfront, or\ninterrupt the app with a redirect and forcing plugin authors to take care in\nrestoring state after a redirect has been made. All in all it makes it much\neasier to make authenticated requests inside a plugin."}),"\n",(0,o.jsx)(t.h2,{id:"oauth-flow",children:"OAuth Flow"}),"\n",(0,o.jsxs)(t.p,{children:["The following describes the OAuth flow implemented by the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend",children:"auth-backend"}),"\nand\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/core-app-api/src/lib/AuthConnector/DefaultAuthConnector.ts",children:"DefaultAuthConnector"}),"\nin ",(0,o.jsx)(t.code,{children:"@backstage/core-app-api"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Component and APIs can request Access or ID Tokens from any available Auth\nprovider. If there already exists a cached fresh token that covers (at least)\nthe requested scopes, it will be returned immediately. If the OAuth provider\nimplements token refreshes, this check will also trigger a token refresh attempt\nif no session is available."}),"\n",(0,o.jsx)(t.p,{children:"If new scopes are requested, or the user is not yet logged in with that\nprovider, a dialog is shown informing the user that they need to log in with the\nspecified provider. If the user agrees to continue, a separate popup window is\nopened that implements the entire consent flow."}),"\n",(0,o.jsxs)(t.p,{children:["The popup window is pointed to the ",(0,o.jsx)(t.code,{children:"/start"})," endpoint of the auth provider in the\n",(0,o.jsx)(t.code,{children:"auth-backend"})," plugin, which then redirects to the OAuth consent screen of the\nprovider. The consent screen is controlled by the OAuth provider, and will do\nthings like prompting the user to log in with an account, and possibly reviewing\nthe set of requested scopes. If the login request is accepted, the popup window\nwill be redirected back to the ",(0,o.jsx)(t.code,{children:"/handler/frame"})," endpoint of the auth backend.\nThe redirect URL will contain a short-term authorization code, which is picked\nup by the backend and exchanged for long-term tokens via a call to the OAuth\nprovider. The Access and possibly ID Token is then handed back to the main\nBackstage page via ",(0,o.jsx)(t.code,{children:"postMessage"}),". If the OAuth provider implements offline\nrefresh, a refresh token will be stored in an HTTP-only cookie scoped to the\nspecific provider in the ",(0,o.jsx)(t.code,{children:"auth-backend"})," plugin."]}),"\n",(0,o.jsxs)(t.p,{children:["To protect against certain attacks, the above flow also includes a simple nonce\ncheck and a lightweight CSRF protection header. The nonce check is done to\nprotect against attacks where an attacker tricks a user to log in with an\naccount of the attacker's choosing in order to gather data. In the first part of\nthe flow where the popup is directed to the ",(0,o.jsx)(t.code,{children:"/start"})," endpoint, a nonce is\ngenerated and placed in both a cookie and the OAuth state. The nonces received\nin the cookie and OAuth state in the redirect handler are then checked, and the\nauth attempt will fail if they're not valid. The CSRF protection for the\n",(0,o.jsx)(t.code,{children:"/refresh"})," and ",(0,o.jsx)(t.code,{children:"/logout"})," endpoints is implemented by simply checking for the\npresence of a ",(0,o.jsx)(t.code,{children:"X-Requested-With"})," header."]}),"\n",(0,o.jsxs)(t.p,{children:["The target origin of the ",(0,o.jsx)(t.code,{children:"postMessage"})," is also of importance to keep the flow\nsecure. It is configured to a single value for each auth provider and\nenvironment. Without a single configured origin, any page could open a popup and\nrequest an access token."]}),"\n",(0,o.jsx)(t.h3,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,o.jsx)(t.p,{children:"The following diagram visualizes the flow described in the previous section."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Sequence Diagram",src:n(403143).A+"",width:"1214",height:"1145"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var o=n(296540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var o,s={},h=null,d=null;for(o in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:a,type:e,key:h,ref:d,props:s,_owner:r.current}}t.Fragment=s,t.jsx=h,t.jsxs=h},474848:(e,t,n)=>{e.exports=n(221020)},403143:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/oauth-popup-flow-7431baabe02096c65743ce4eb4b4cd5a.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(296540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
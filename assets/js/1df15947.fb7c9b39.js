/*! For license information please see 1df15947.fb7c9b39.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[620198],{744057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(474848),o=t(28453);const a={id:"provider--old",title:"Auth0 Authentication Provider",sidebar_label:"Auth0",description:"Adding Auth0 as an authentication provider in Backstage"},r=void 0,s={id:"auth/auth0/provider--old",title:"Auth0 Authentication Provider",description:"Adding Auth0 as an authentication provider in Backstage",source:"@site/../docs/auth/auth0/provider--old.md",sourceDirName:"auth/auth0",slug:"/auth/auth0/provider--old",permalink:"/docs/next/auth/auth0/provider--old",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/auth0/provider--old.md",tags:[],version:"current",frontMatter:{id:"provider--old",title:"Auth0 Authentication Provider",sidebar_label:"Auth0",description:"Adding Auth0 as an authentication provider in Backstage"}},c={},d=[{value:"Create an Auth0 Application",id:"create-an-auth0-application",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Optional Configuration",id:"optional-configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This documentation is written for the old backend which has been replaced by\n",(0,i.jsx)(n.a,{href:"/docs/next/backend-system/",children:"the new backend system"}),", being the default since\nBackstage ",(0,i.jsx)(n.a,{href:"/docs/next/releases/v1.24.0",children:"version 1.24"}),". If have migrated to the new\nbackend system, you may want to read ",(0,i.jsx)(n.a,{href:"/docs/next/auth/auth0/provider",children:"its own article"}),"\ninstead. Otherwise, ",(0,i.jsx)(n.a,{href:"/docs/next/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,i.jsxs)(n.p,{children:["The Backstage ",(0,i.jsx)(n.code,{children:"core-plugin-api"})," package comes with an Auth0 authentication\nprovider that can authenticate users using OAuth."]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-auth0-application",children:"Create an Auth0 Application"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Log in to the ",(0,i.jsx)(n.a,{href:"https://manage.auth0.com/dashboard/",children:"Auth0 dashboard"})]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Applications"})]}),"\n",(0,i.jsxs)(n.li,{children:["Create an Application\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Name: Backstage (or your custom app name)"}),"\n",(0,i.jsx)(n.li,{children:"Application type: Single Page Web Application"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Click on the Settings tab"}),"\n",(0,i.jsxs)(n.li,{children:["Add under ",(0,i.jsx)(n.code,{children:"Application URIs"})," > ",(0,i.jsx)(n.code,{children:"Allowed Callback URLs"}),":\n",(0,i.jsx)(n.code,{children:"http://localhost:7007/api/auth/auth0/handler/frame"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Save Changes"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The provider configuration can then be added to your ",(0,i.jsx)(n.code,{children:"app-config.yaml"})," under the\nroot ",(0,i.jsx)(n.code,{children:"auth"})," configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    auth0:\n      development:\n        clientId: ${AUTH_AUTH0_CLIENT_ID}\n        clientSecret: ${AUTH_AUTH0_CLIENT_SECRET}\n        domain: ${AUTH_AUTH0_DOMAIN_ID}\n        audience: ${AUTH_AUTH0_AUDIENCE}\n        connection: ${AUTH_AUTH0_CONNECTION}\n        connectionScope: ${AUTH_AUTH0_CONNECTION_SCOPE}\n  session:\n    secret: ${AUTH_SESSION_SECRET}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The Auth0 provider is a structure with these configuration keys:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clientId"}),": The Application client ID, found on the Auth0 Application page"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clientSecret"}),": The Application client secret, found on the Auth0 Application\npage"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"domain"}),": The Application domain, found on the Auth0 Application page"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It additionally relies on the following configuration to function:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"session.secret"}),": The session secret is a key used for signing and/or encrypting cookies set by the application to maintain session state. In this case, 'your session secret' should be replaced with a long, complex, and unique string that only your application knows."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Auth0 requires a session, so you need to give the session a secret key."}),"\n",(0,i.jsx)(n.h2,{id:"optional-configuration",children:"Optional Configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"audience"}),": The intended recipients of the token"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"connection"}),": Social identity provider name. To check the available social connections, please visit ",(0,i.jsx)(n.a,{href:"https://marketplace.auth0.com/features/social-connections",children:"Auth0 Social Connections"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"connectionScope"}),": Additional scopes in the interactive token request. It should always be used in combination with the ",(0,i.jsx)(n.code,{children:"connection"})," parameter"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,i.jsxs)(n.p,{children:["To add the provider to the frontend, add the ",(0,i.jsx)(n.code,{children:"auth0AuthApi"})," reference and\n",(0,i.jsx)(n.code,{children:"SignInPage"})," component as shown in\n",(0,i.jsx)(n.a,{href:"/docs/next/auth/#sign-in-configuration",children:"Adding the provider to the sign-in page"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var i=t(296540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,a={},d=null,l=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,i)&&!c.hasOwnProperty(i)&&(a[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===a[i]&&(a[i]=n[i]);return{$$typeof:o,type:e,key:d,ref:l,props:a,_owner:s.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(296540);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
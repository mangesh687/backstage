/*! For license information please see b06880c5.8748a853.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[544963],{825033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(474848),r=n(28453);const i={id:"provider",title:"Cloudflare Access Provider",sidebar_label:"Cloudflare Access",description:"Adding Cloudflare Access as an authentication provider in Backstage"},a=void 0,s={id:"auth/cloudflare/provider",title:"Cloudflare Access Provider",description:"Adding Cloudflare Access as an authentication provider in Backstage",source:"@site/../docs/auth/cloudflare/provider.md",sourceDirName:"auth/cloudflare",slug:"/auth/cloudflare/provider",permalink:"/docs/next/auth/cloudflare/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/cloudflare/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Cloudflare Access Provider",sidebar_label:"Cloudflare Access",description:"Adding Cloudflare Access as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Bitbucket Server",permalink:"/docs/next/auth/bitbucketServer/provider"},next:{title:"GitHub",permalink:"/docs/next/auth/github/provider"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Similar to GCP IAP Proxy Provider or AWS ALB provider, developers can offload authentication\nsupport to Cloudflare Access."}),"\n",(0,o.jsx)(t.p,{children:"This tutorial shows how to use authentication on Cloudflare Access sitting in\nfront of Backstage."}),"\n",(0,o.jsx)(t.p,{children:"It is assumed a Cloudflare tunnel is already serving traffic in front of a\nBackstage instance configured to serve the frontend app from the backend and is\nalready gated using Cloudflare Access."}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["Let's start by adding the following ",(0,o.jsx)(t.code,{children:"auth"})," configuration in your\n",(0,o.jsx)(t.code,{children:"app-config.yaml"})," or ",(0,o.jsx)(t.code,{children:"app-config.production.yaml"})," or similar:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"auth:\n  providers:\n    cfaccess:\n      # You can find the team name in the Cloudflare Zero Trust dashboard.\n      teamName: <Team Name>\n      # This service tokens section is optional -- you only need it if you have\n      # some Cloudflare Service Tokens that you want to be able to log in to your\n      # Backstage instance.\n      serviceTokens:\n        - token: '1uh2fh19efvfh129f1f919u21f2f19jf2.access'\n          subject: 'bot-user@your-company.com'\n      # You can customize the header name that contains the jwt token, by default\n      # cf-access-jwt-assertion is used\n      jwtHeaderName: <my-header>\n      # You can customize the authorization cookie name, by default\n      # CF_Authorization is used\n      authorizationCookieName: <MY_CAUTHORIZATION_COOKIE_NAME>\n      # This picks what sign in resolver(s) you want to use.\n      signIn:\n        resolvers:\n          # See https://backstage.io/docs/auth/cloudflare/provider#resolvers for more resolvers\n          - resolver: emailMatchingUserEntityProfileEmail\n"})}),"\n",(0,o.jsx)(t.p,{children:"This config section must be in place for the provider to load at all."}),"\n",(0,o.jsx)(t.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,o.jsx)(t.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,o.jsx)(t.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,o.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,o.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,o.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"note",children:(0,o.jsxs)(t.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,o.jsx)(t.code,{children:"NotFoundError"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,o.jsx)(t.a,{href:"/docs/next/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,o.jsx)(t.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,o.jsx)(t.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-cloudflare-access-provider\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then we will need to add this line:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(\n  import('@backstage/plugin-auth-backend-module-cloudflare-access-provider'),\n);\n/* highlight-add-end */\n"})}),"\n",(0,o.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"/docs/next/auth/#sign-in-with-proxy-providers",children:"Sign-In with Proxy Providers"})," for pointers on how to set up the sign-in page, and to also make it work smoothly for local development. You'll use ",(0,o.jsx)(t.code,{children:"cfaccess"})," as the provider name."]}),"\n",(0,o.jsxs)(t.p,{children:["If you ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver#building-custom-resolvers",children:"provide a custom sign in resolver"}),", you can skip the ",(0,o.jsx)(t.code,{children:"signIn"})," block entirely."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,i={},c=null,l=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,o)&&!d.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(296540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
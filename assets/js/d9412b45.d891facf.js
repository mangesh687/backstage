/*! For license information please see d9412b45.d891facf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[577166],{471940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(474848),r=n(28453);const o={id:"provider",title:"Bitbucket Authentication Provider",sidebar_label:"Bitbucket",description:"Adding Bitbucket OAuth as an authentication provider in Backstage"},a=void 0,s={id:"auth/bitbucket/provider",title:"Bitbucket Authentication Provider",description:"Adding Bitbucket OAuth as an authentication provider in Backstage",source:"@site/versioned_docs/version-stable/auth/bitbucket/provider.md",sourceDirName:"auth/bitbucket",slug:"/auth/bitbucket/provider",permalink:"/docs/auth/bitbucket/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/auth/bitbucket/provider.md",tags:[],version:"stable",frontMatter:{id:"provider",title:"Bitbucket Authentication Provider",sidebar_label:"Bitbucket",description:"Adding Bitbucket OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Azure Easy Auth",permalink:"/docs/auth/microsoft/easy-auth"},next:{title:"Bitbucket Server",permalink:"/docs/auth/bitbucketServer/provider"}},c={},d=[{value:"Create an OAuth Consumer in Bitbucket",id:"create-an-oauth-consumer-in-bitbucket",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The Backstage ",(0,i.jsx)(t.code,{children:"core-plugin-api"})," package comes with a Bitbucket authentication\nprovider that can authenticate users using Bitbucket Cloud. This does ",(0,i.jsx)(t.strong,{children:"NOT"}),"\nwork with Bitbucket Server."]}),"\n",(0,i.jsx)(t.h2,{id:"create-an-oauth-consumer-in-bitbucket",children:"Create an OAuth Consumer in Bitbucket"}),"\n",(0,i.jsx)(t.p,{children:"To add Bitbucket Cloud authentication, you must create an OAuth Consumer."}),"\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.code,{children:"https://bitbucket.org/<your-project-name>/workspace/settings/api"})," ."]}),"\n",(0,i.jsx)(t.p,{children:"Click Add Consumer."}),"\n",(0,i.jsx)(t.p,{children:"Settings for local development:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Application name: Backstage (or your custom app name)"}),"\n",(0,i.jsxs)(t.li,{children:["Callback URL: ",(0,i.jsx)(t.code,{children:"http://localhost:7007/api/auth/bitbucket"})]}),"\n",(0,i.jsx)(t.li,{children:"Other are optional"}),"\n",(0,i.jsxs)(t.li,{children:["(IMPORTANT) ",(0,i.jsx)(t.strong,{children:"Permissions: Account - Read, Workspace membership - Read"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["The provider configuration can then be added to your ",(0,i.jsx)(t.code,{children:"app-config.yaml"})," under the\nroot ",(0,i.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    bitbucket:\n      development:\n        clientId: ${AUTH_BITBUCKET_CLIENT_ID}\n        clientSecret: ${AUTH_BITBUCKET_CLIENT_SECRET}\n        signIn:\n          resolvers:\n            # See https://backstage.io/docs/auth/bitbucket/provider#resolvers for more resolvers\n            - resolver: userIdMatchingUserEntityAnnotation\n"})}),"\n",(0,i.jsx)(t.p,{children:"The Bitbucket provider is a structure with two configuration keys:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"clientId"}),": The Key that you generated in Bitbucket, e.g.\n",(0,i.jsx)(t.code,{children:"b59241722e3c3b4816e2"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"clientSecret"}),": The Secret tied to the generated Key."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,i.jsx)(t.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,i.jsx)(t.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,i.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,i.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,i.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"userIdMatchingUserEntityAnnotation"}),": Matches the ",(0,i.jsx)(t.code,{children:"userId"})," from the auth provider with the User entity that has a matching ",(0,i.jsx)(t.code,{children:"bitbucket.org/user-id"})," annotation. If no match is found it will throw a ",(0,i.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"usernameMatchingUserEntityAnnotation"}),": Matches the ",(0,i.jsx)(t.code,{children:"username"})," from the auth provider with the User entity that has a matching ",(0,i.jsx)(t.code,{children:"bitbucket.org/username"})," annotation. If no match is found it will throw a ",(0,i.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(t.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,i.jsx)(t.code,{children:"NotFoundError"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,i.jsx)(t.a,{href:"/docs/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,i.jsx)(t.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,i.jsx)(t.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-bitbucket-provider\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then we will need to add this line:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-auth-backend-module-bitbucket-provider'));\n/* highlight-add-end */\n"})}),"\n",(0,i.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,i.jsxs)(t.p,{children:["To add the provider to the frontend, add the ",(0,i.jsx)(t.code,{children:"bitbucketAuthApi"})," reference and\n",(0,i.jsx)(t.code,{children:"SignInPage"})," component as shown in\n",(0,i.jsx)(t.a,{href:"/docs/auth/#sign-in-configuration",children:"Adding the provider to the sign-in page"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var i=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,o={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(296540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
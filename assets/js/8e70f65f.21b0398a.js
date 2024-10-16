/*! For license information please see 8e70f65f.21b0398a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[126250],{897431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(474848),r=n(28453);const a={id:"enable-public-entry",title:"Enabling a public entry point",description:"A guide for how to experiment with public and protected Backstage app bundles"},o="Enable Public Entry (Experimental)",s={id:"tutorials/enable-public-entry",title:"Enabling a public entry point",description:"A guide for how to experiment with public and protected Backstage app bundles",source:"@site/../docs/tutorials/enable-public-entry.md",sourceDirName:"tutorials",slug:"/tutorials/enable-public-entry",permalink:"/docs/next/tutorials/enable-public-entry",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/enable-public-entry.md",tags:[],version:"current",frontMatter:{id:"enable-public-entry",title:"Enabling a public entry point",description:"A guide for how to experiment with public and protected Backstage app bundles"},sidebar:"docs",previous:{title:"Migrating to New Auth Services",permalink:"/docs/next/tutorials/auth-service-migration"},next:{title:"Setup OpenTelemetry",permalink:"/docs/next/tutorials/setup-opentelemetry"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Step-by-step",id:"step-by-step",level:2},{value:"New Frontend System",id:"new-frontend-system",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"enable-public-entry-experimental",children:"Enable Public Entry (Experimental)"})}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial, you will learn how to restrict access to your main Backstage app bundle to authenticated users only."}),"\n",(0,i.jsx)(t.p,{children:"It is expected that the protected bundle feature will be refined in future development iterations, but for now, here is a simplified explanation of how it works:"}),"\n",(0,i.jsx)(t.p,{children:"Your Backstage app bundle is split into two code entries:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Public entry point containing login pages;"}),"\n",(0,i.jsx)(t.li,{children:"There is also a protected main entry point that contains the code for what you see after signing in."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"With that, Backstage's cli and backend will detect public entry point and serve it to unauthenticated users, while serving the main, protected entry point only to authenticated users."}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The app needs to be served by the ",(0,i.jsx)(t.code,{children:"app-backend"})," plugin, or this won't work;"]}),"\n",(0,i.jsxs)(t.li,{children:["Also it will only work for those using ",(0,i.jsx)(t.code,{children:"backstage-cli"})," to build and serve their Backstage app."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-by-step",children:"Step-by-step"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a ",(0,i.jsx)(t.code,{children:"index-public-experimental.tsx"})," in your app ",(0,i.jsx)(t.code,{children:"src"})," folder."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The filename is a convention, so it is not currently configurable."})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"This file is the public entry point for your application, and it should only contain what unauthenticated users should see:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="in packages/app/src/index-public-experimental.tsx"',children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createApp } from '@backstage/app-defaults';\nimport { AppRouter } from '@backstage/core-app-api';\nimport {\n  AlertDisplay,\n  OAuthRequestDialog,\n  SignInPage,\n} from '@backstage/core-components';\nimport {\n  configApiRef,\n  discoveryApiRef,\n  createApiFactory,\n} from '@backstage/core-plugin-api';\nimport { CookieAuthRedirect } from '@backstage/plugin-auth-react';\n\n// Notice that this is only setting up what is needed by the sign-in pages\nconst app = createApp({\n  // If you have any custom APIs that your sign-in page depends on, you need to add them here\n  apis: [],\n  components: {\n    SignInPage: props => {\n      return (\n        <SignInPage\n          {...props}\n          providers={['guest']}\n          title=\"Select a sign-in method\"\n        />\n      );\n    },\n  },\n});\n\nconst App = app.createRoot(\n  <>\n    <AlertDisplay transientTimeoutMs={2500} />\n    <OAuthRequestDialog />\n    <AppRouter>\n      {/* This component triggers an authenticated redirect to the main app, while staying on the same URL */}\n      <CookieAuthRedirect />\n    </AppRouter>\n  </>,\n);\n\nReactDOM.createRoot(document.getElementById('root')!).render(<App />);\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The frontend will handle cookie refreshing automatically, so you don't have to worry about it."})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Let's verify that everything is working locally. From your project root folder, run the following commands to build the app and start the backend:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# building the app package\nyarn workspace app start\n# starting the backend api\nyarn start-backend\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Visit ",(0,i.jsx)(t.a,{href:"http://localhost:7007",children:"http://localhost:7007"})," to see the public app and validate that the ",(0,i.jsx)(t.em,{children:"index.html"})," response only contains a minimal application."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Regular app serving will always serve protected apps without authenticating."})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Finally, as soon as you log in, you will be redirected to the main app home page (inspect the page and see that the protected bundle was served from the app backend after the redirect)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"That's it!"}),"\n",(0,i.jsx)(t.h2,{id:"new-frontend-system",children:"New Frontend System"}),"\n",(0,i.jsxs)(t.p,{children:["If your app uses the new frontend system, you can still use the public entry point feature. The ",(0,i.jsx)(t.code,{children:"index-public-experimental.tsx"})," file does end up looking a bit different in this case:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="in packages/app/src/index-public-experimental.tsx"',children:"import ReactDOM from 'react-dom/client';\nimport { signInPageModule } from './overrides/SignInPage';\nimport { createPublicSignInApp } from '@backstage/frontend-defaults';\n\nconst app = createPublicSignInApp({\n  features: [signInPageModule],\n});\n\nReactDOM.createRoot(document.getElementById('root')!).render(app.createRoot());\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,t,n)=>{var i=n(296540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,a={},c=null,p=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:p,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(296540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
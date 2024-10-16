/*! For license information please see 646561cb.dea27657.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[525438],{360816:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=i(474848),t=i(28453);const r={id:"overview",title:"Overview",description:"A high level overview of the Backstage permission framework"},o=void 0,a={id:"permissions/overview",title:"Overview",description:"A high level overview of the Backstage permission framework",source:"@site/versioned_docs/version-stable/permissions/overview.md",sourceDirName:"permissions",slug:"/permissions/overview",permalink:"/docs/permissions/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/permissions/overview.md",tags:[],version:"stable",frontMatter:{id:"overview",title:"Overview",description:"A high level overview of the Backstage permission framework"},sidebar:"docs",previous:{title:"Troubleshooting Auth",permalink:"/docs/auth/troubleshooting"},next:{title:"Concepts",permalink:"/docs/permissions/concepts"}},c={},h=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"How do I get started?",id:"how-do-i-get-started",level:2}];function l(e){const s={a:"a",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/auth/",children:"The previous section"})," covered the various ",(0,n.jsx)(s.em,{children:"authentication"})," methods of Backstage, but Backstage can also ",(0,n.jsx)(s.em,{children:"authorize"})," specific data, APIs, or interface actions - meaning that Backstage has the ability to enforce rules about what type of access is allowed for a given user of a system."]}),"\n",(0,n.jsx)(s.p,{children:"By default, Backstage endpoints are not protected, and all actions are available to anyone. However, configuring which users can access which resources and actions is a common need for many organizations. The permission framework allows integrators to achieve this through the use of granular permissioning for those resources and actions."}),"\n",(0,n.jsx)(s.p,{children:"The permission framework was designed with a few key properties in mind:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Flexibility: the framework allows integrators to configure many different authorization methods. This could include implementations like role-based access control (RBAC), attribute-based access control (ABAC), bespoke logic expressed in code, or integrations with external authorization providers."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Usability: the permission framework allows integrators to focus on configuring what they care about (the permission policy) by providing all of its moving parts out of the box. It also allows plugin authors to integrate support for permissions in their plugins without having to make any changes in Backstage core."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Plugin authors"})," can add permission support in their plugins by declaring which resources from their plugins can be placed behind authorization and what types of actions users may take upon those resources."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Contributors"})," can implement and share authorization methods (such as RBAC)."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Integrators"})," can author or configure policies that define which users can take certain actions upon which resources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"backstage framework overview",src:i(789747).A+"",width:"661",height:"259"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The user triggers a request to perform some action. The request specifies the authorization details using the permission specified by the plugin (in this case, a resource read action)."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The action may be triggered by a user interacting with the UI, but it can also be a direct request to the plugin's backend."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The plugin backend sends a request to the permission framework's backend with the authorization details."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The permission framework's backend delegates the authorization decision to the permission policy, which is specified by the integrator using code, a provided authorization method (such as RBAC), or integrations with external authorization providers."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"An authorization decision is sent to the plugin from the permission backend."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The user is either granted access or an error is shown. The plugin is responsible for implementing a response to the user."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-do-i-get-started",children:"How do I get started?"}),"\n",(0,n.jsxs)(s.p,{children:['See the "',(0,n.jsx)(s.a,{href:"/docs/permissions/getting-started",children:"getting started"}),'" permission documentation for Backstage integrators.']}),"\n",(0,n.jsxs)(s.p,{children:["If you are a plugin author, see the permission ",(0,n.jsx)(s.a,{href:"/docs/permissions/plugin-authors/01-setup",children:"documentation for plugin authors"})," on how to integrate permissions into your plugin."]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,s,i)=>{var n=i(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,s,i){var n,r={},h=null,l=null;for(n in void 0!==i&&(h=""+i),void 0!==s.key&&(h=""+s.key),void 0!==s.ref&&(l=s.ref),s)o.call(s,n)&&!c.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:t,type:e,key:h,ref:l,props:r,_owner:a.current}}s.Fragment=r,s.jsx=h,s.jsxs=h},474848:(e,s,i)=>{e.exports=i(221020)},789747:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/permission-framework-overview.drawio-cf5da11408bcfe25a2bbbf8b7751b436.svg"},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var n=i(296540);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);
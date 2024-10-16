/*! For license information please see d2c03476.efa143b6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[504038],{615728:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=n(474848),t=n(28453);const c={id:"plugin-catalog-backend-module-msgraph.microsoftgraphclient",title:"MicrosoftGraphClient",description:"API reference for MicrosoftGraphClient"},o=void 0,i={id:"reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",title:"MicrosoftGraphClient",description:"API reference for MicrosoftGraphClient",source:"@site/../docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",permalink:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-msgraph.microsoftgraphclient",title:"MicrosoftGraphClient",description:"API reference for MicrosoftGraphClient"}},d={},l=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",children:(0,s.jsx)(r.code,{children:"MicrosoftGraphClient"})})]}),"\n",(0,s.jsxs)(r.p,{children:["A HTTP Client that communicates with Microsoft Graph API. Simplify Authentication and API calls to get ",(0,s.jsx)(r.code,{children:"User"})," and ",(0,s.jsx)(r.code,{children:"Group"})," from Microsoft Graph"]}),"\n",(0,s.jsxs)(r.p,{children:["Uses ",(0,s.jsx)(r.code,{children:"msal-node"})," for authentication"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class MicrosoftGraphClient \n"})}),"\n",(0,s.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Constructor"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient._constructor_",children:"(constructor)(baseUrl, tokenCredential)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Constructs a new instance of the ",(0,s.jsx)(r.code,{children:"MicrosoftGraphClient"})," class"]}),"\n"]})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Method"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.create",children:"create(config)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"static"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Factory method that instantiate ",(0,s.jsx)(r.code,{children:"msal"})," client and return an instance of ",(0,s.jsx)(r.code,{children:"MicrosoftGraphClient"})]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupmembers",children:"getGroupMembers(groupId, query, queryMode)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Get a collection of ",(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/user",children:"User"})," belonging to a ",(0,s.jsx)(r.code,{children:"Group"})," from Graph API and return as ",(0,s.jsx)(r.code,{children:"AsyncIterable"})]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphoto",children:"getGroupPhoto(groupId, sizeId)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit",children:"getGroupPhotoWithSizeLimit(groupId, maxSize)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Get ",(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/profilephoto",children:"profilePhoto"})," of ",(0,s.jsx)(r.code,{children:"Group"})," from Graph API with size limit"]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroups",children:"getGroups(query, queryMode)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Get a collection of ",(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/group",children:"Group"})," from Graph API and return as ",(0,s.jsx)(r.code,{children:"AsyncIterable"})]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers",children:"getGroupUserMembers(groupId, query, queryMode)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Get a collection of ",(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/user",children:"User"})," belonging to a ",(0,s.jsx)(r.code,{children:"Group"})," from Graph API and return as ",(0,s.jsx)(r.code,{children:"AsyncIterable"})]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getorganization",children:"getOrganization(tenantId)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Get ",(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/organization",children:"Organization"})," from Graph API"]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getuserphoto",children:"getUserPhoto(userId, sizeId)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getuserphotowithsizelimit",children:"getUserPhotoWithSizeLimit(userId, maxSize)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Get ",(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/profilephoto",children:"profilePhoto"})," of ",(0,s.jsx)(r.code,{children:"User"})," from Graph API with size limit"]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getusers",children:"getUsers(query, queryMode)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Get a collection of ",(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/user",children:"User"})," from Graph API and return as ",(0,s.jsx)(r.code,{children:"AsyncIterable"})]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.requestapi",children:"requestApi(path, query, headers)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Abstract on top of ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.requestraw",children:"MicrosoftGraphClient.requestRaw()"})]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.requestcollection",children:"requestCollection(path, query, queryMode)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Get a collection of resource from Graph API and return an ",(0,s.jsx)(r.code,{children:"AsyncIterable"})," of that resource"]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.requestraw",children:"requestRaw(url, headers, retryCount)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Makes a HTTP call to Graph API with token"}),"\n"]})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,c={},l=null,h=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(h=r.ref),r)o.call(r,s)&&!d.hasOwnProperty(s)&&(c[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===c[s]&&(c[s]=r[s]);return{$$typeof:t,type:e,key:l,ref:h,props:c,_owner:i.current}}r.Fragment=c,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var s=n(296540);const t={},c=s.createContext(t);function o(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);
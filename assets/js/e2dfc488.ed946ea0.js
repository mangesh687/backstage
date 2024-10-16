/*! For license information please see e2dfc488.ed946ea0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[225229],{491485:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(474848),t=n(28453);const o={id:"plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg",title:"readMicrosoftGraphOrg()",description:"API reference for readMicrosoftGraphOrg()"},a=void 0,c={id:"reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg",title:"readMicrosoftGraphOrg()",description:"API reference for readMicrosoftGraphOrg()",source:"@site/../docs/reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg",permalink:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg",title:"readMicrosoftGraphOrg()",description:"API reference for readMicrosoftGraphOrg()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.readmicrosoftgraphorg",children:(0,s.jsx)(r.code,{children:"readMicrosoftGraphOrg"})})]}),"\n",(0,s.jsx)(r.p,{children:"Reads an entire org as Group and User entities."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"function readMicrosoftGraphOrg(client: MicrosoftGraphClient, tenantId: string, options: {\n    userExpand?: string;\n    userFilter?: string;\n    userSelect?: string[];\n    loadUserPhotos?: boolean;\n    userGroupMemberSearch?: string;\n    userGroupMemberFilter?: string;\n    groupExpand?: string;\n    groupSearch?: string;\n    groupFilter?: string;\n    groupSelect?: string[];\n    groupIncludeSubGroups?: boolean;\n    queryMode?: 'basic' | 'advanced';\n    userTransformer?: UserTransformer;\n    groupTransformer?: GroupTransformer;\n    organizationTransformer?: OrganizationTransformer;\n    logger: LoggerService;\n}): Promise<{\n    users: UserEntity[];\n    groups: GroupEntity[];\n}>;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"client"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",children:"MicrosoftGraphClient"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"tenantId"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"string"}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"options"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["{ userExpand?: string; userFilter?: string; userSelect?: string[]; loadUserPhotos?: boolean; userGroupMemberSearch?: string; userGroupMemberFilter?: string; groupExpand?: string; groupSearch?: string; groupFilter?: string; groupSelect?: string[]; groupIncludeSubGroups?: boolean; queryMode?: 'basic' | 'advanced'; userTransformer?: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.usertransformer",children:"UserTransformer"}),"; groupTransformer?: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.grouptransformer",children:"GroupTransformer"}),"; organizationTransformer?: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-catalog-backend-module-msgraph.organizationtransformer",children:"OrganizationTransformer"}),"; logger: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; }"]}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,s.jsxs)(r.p,{children:["Promise<{ users: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/catalog-model.userentityv1alpha1",children:"UserEntity"}),"[]; groups: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/catalog-model.groupentityv1alpha1",children:"GroupEntity"}),"[]; }>"]})]})}function g(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,o={},d=null,l=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,s)&&!i.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:t,type:e,key:d,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var s=n(296540);const t={},o=s.createContext(t);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);
/*! For license information please see 41bcb08b.38aa4030.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[696263],{617198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(474848),i=t(28453);const s={id:"common-extension-blueprints",title:"Common Extension Blueprints",sidebar_label:"Common Extension Blueprints",description:"Extension blueprints provided by the frontend system and core features"},o=void 0,a={id:"frontend-system/building-plugins/common-extension-blueprints",title:"Common Extension Blueprints",description:"Extension blueprints provided by the frontend system and core features",source:"@site/../docs/frontend-system/building-plugins/03-common-extension-blueprints.md",sourceDirName:"frontend-system/building-plugins",slug:"/frontend-system/building-plugins/common-extension-blueprints",permalink:"/docs/next/frontend-system/building-plugins/common-extension-blueprints",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/building-plugins/03-common-extension-blueprints.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"common-extension-blueprints",title:"Common Extension Blueprints",sidebar_label:"Common Extension Blueprints",description:"Extension blueprints provided by the frontend system and core features"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/next/frontend-system/building-plugins/testing"},next:{title:"Built-in data refs",permalink:"/docs/next/frontend-system/building-plugins/built-in-data-refs"}},l={},c=[{value:"Built-in extension blueprints",id:"built-in-extension-blueprints",level:2},{value:"Api - Reference",id:"api---reference",level:3},{value:"Component - Reference",id:"component---reference",level:3},{value:"NavItem - Reference",id:"navitem---reference",level:3},{value:"Page - Reference",id:"page---reference",level:3},{value:"SignInPage - Reference",id:"signinpage---reference",level:3},{value:"Theme - Reference",id:"theme---reference",level:3},{value:"Icons - Reference",id:"icons---reference",level:3},{value:"Translation - Reference",id:"translation---reference",level:3},{value:"Core feature extension blueprints",id:"core-feature-extension-blueprints",level:2},{value:"EntityCard - Reference",id:"entitycard---reference",level:3},{value:"EntityContent - Reference",id:"entitycontent---reference",level:3},{value:"SearchResultListItem - Reference",id:"searchresultlistitem---reference",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This section covers many of the ",(0,r.jsx)(n.a,{href:"/docs/next/frontend-system/architecture/extension-blueprints",children:"extension blueprints"})," available at your disposal when building Backstage frontend plugins."]}),"\n",(0,r.jsx)(n.h2,{id:"built-in-extension-blueprints",children:"Built-in extension blueprints"}),"\n",(0,r.jsxs)(n.p,{children:["These are the ",(0,r.jsx)(n.a,{href:"/docs/next/frontend-system/architecture/extension-blueprints",children:"extension blueprints"})," provided by the Backstage frontend framework itself."]}),"\n",(0,r.jsxs)(n.h3,{id:"api---reference",children:["Api - ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.apiblueprint",children:"Reference"})]}),"\n",(0,r.jsxs)(n.p,{children:["An API extension is used to add or override ",(0,r.jsx)(n.a,{href:"/docs/next/frontend-system/utility-apis/index",children:"Utility API factories"})," in the app. They are commonly used by plugins for both internal and shared APIs. There are also many built-in Api extensions provided by the framework that you are able to override."]}),"\n",(0,r.jsxs)(n.h3,{id:"component---reference",children:["Component - ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.createcomponentextension",children:"Reference"})]}),"\n",(0,r.jsx)(n.p,{children:"Components extensions are used to override the component associated with a component reference throughout the app. This uses an extension creator function rather than a blueprint, but will likely be migrated to a blueprint in the future."}),"\n",(0,r.jsxs)(n.h3,{id:"navitem---reference",children:["NavItem - ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.navitemblueprint",children:"Reference"})]}),"\n",(0,r.jsx)(n.p,{children:"Navigation item extensions are used to provide menu items that link to different parts of the app. By default nav items are attached to the app nav extension, which by default is rendered as the left sidebar in the app."}),"\n",(0,r.jsxs)(n.h3,{id:"page---reference",children:["Page - ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.pageblueprint",children:"Reference"})]}),"\n",(0,r.jsx)(n.p,{children:"Page extensions provide content for a particular route in the app. By default pages are attached to the app routes extensions, which renders the root routes."}),"\n",(0,r.jsxs)(n.h3,{id:"signinpage---reference",children:["SignInPage - ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.signinpageblueprint",children:"Reference"})]}),"\n",(0,r.jsx)(n.p,{children:"Sign-in page extension have a single purpose - to implement a custom sign-in page. They are always attached to the app root extension and are rendered before the rest of the app until the user is signed in."}),"\n",(0,r.jsxs)(n.h3,{id:"theme---reference",children:["Theme - ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.themeblueprint",children:"Reference"})]}),"\n",(0,r.jsx)(n.p,{children:"Theme extensions provide custom themes for the app. They are always attached to the app extension and you can have any number of themes extensions installed in an app at once, letting the user choose which theme to use."}),"\n",(0,r.jsxs)(n.h3,{id:"icons---reference",children:["Icons - ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.iconbundleblueprint",children:"Reference"})]}),"\n",(0,r.jsx)(n.p,{children:"Icon bundle extensions provide the ability to replace or provide new icons to the app. You can use the above blueprint to make new extension instances which can be installed into the app."}),"\n",(0,r.jsxs)(n.h3,{id:"translation---reference",children:["Translation - ",(0,r.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.translationblueprint",children:"Reference"})]}),"\n",(0,r.jsx)(n.p,{children:"Translation extension provide custom translation messages for the app. They can be used both to override the default english messages to custom ones, as well as provide translations for additional languages."}),"\n",(0,r.jsx)(n.h2,{id:"core-feature-extension-blueprints",children:"Core feature extension blueprints"}),"\n",(0,r.jsxs)(n.p,{children:["These are the ",(0,r.jsx)(n.a,{href:"/docs/next/frontend-system/architecture/extension-blueprints",children:"extension blueprints"})," provided by the Backstage core feature plugins."]}),"\n",(0,r.jsxs)(n.h3,{id:"entitycard---reference",children:["EntityCard - ",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-react/report-alpha.api.md",children:"Reference"})]}),"\n",(0,r.jsxs)(n.p,{children:["Creates entity cards to be displayed on the entity pages of the catalog plugin. Exported as ",(0,r.jsx)(n.code,{children:"EntityCardBlueprint"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"entitycontent---reference",children:["EntityContent - ",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-react/report-alpha.api.md",children:"Reference"})]}),"\n",(0,r.jsxs)(n.p,{children:["Creates entity content to be displayed on the entity pages of the catalog plugin. Exported as ",(0,r.jsx)(n.code,{children:"EntityContentBlueprint"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"searchresultlistitem---reference",children:["SearchResultListItem - ",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/search-react/report-alpha.api.md",children:"Reference"})]}),"\n",(0,r.jsxs)(n.p,{children:["Creates search result list items for different types of search results, to be displayed in search result lists. Exported as ",(0,r.jsx)(n.code,{children:"SearchResultListItemBlueprint"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(296540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
/*! For license information please see 1ec8591b.935eba99.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[194531],{508202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(474848),s=t(28453);const o={id:"plugin-events-node.subtopiceventrouter",title:"SubTopicEventRouter",description:"API reference for SubTopicEventRouter"},c=void 0,i={id:"reference/plugin-events-node.subtopiceventrouter",title:"SubTopicEventRouter",description:"API reference for SubTopicEventRouter",source:"@site/versioned_docs/version-stable/reference/plugin-events-node.subtopiceventrouter.md",sourceDirName:"reference",slug:"/reference/plugin-events-node.subtopiceventrouter",permalink:"/docs/reference/plugin-events-node.subtopiceventrouter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-events-node.subtopiceventrouter.md",tags:[],version:"stable",frontMatter:{id:"plugin-events-node.subtopiceventrouter",title:"SubTopicEventRouter",description:"API reference for SubTopicEventRouter"}},d={},l=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-events-node"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-node.subtopiceventrouter",children:(0,r.jsx)(n.code,{children:"SubTopicEventRouter"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Subscribes to the provided (generic) topic and publishes the events under the more concrete sub-topic depending on the implemented logic for determining it. Implementing classes might use information from ",(0,r.jsx)(n.code,{children:"metadata"})," and/or properties within the payload."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"abstract class SubTopicEventRouter extends EventRouter \n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Extends:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventrouter",children:"EventRouter"})]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Constructor"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-node.subtopiceventrouter._constructor_",children:"(constructor)(options)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"protected"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:["Constructs a new instance of the ",(0,r.jsx)(n.code,{children:"SubTopicEventRouter"})," class"]}),"\n"]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-node.subtopiceventrouter.determinedestinationtopic",children:"determineDestinationTopic(params)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"protected"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-node.subtopiceventrouter.determinesubtopic",children:"determineSubTopic(params)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"protected"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"abstract"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,h=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)c.call(n,r)&&!d.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:h,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(296540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
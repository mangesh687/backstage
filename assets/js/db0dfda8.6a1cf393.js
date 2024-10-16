/*! For license information please see db0dfda8.6a1cf393.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[155812],{784327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var n=r(474848),s=r(28453);const i={id:"test-utils.renderwitheffects",title:"renderWithEffects()",description:"API reference for renderWithEffects()"},c=void 0,o={id:"reference/test-utils.renderwitheffects",title:"renderWithEffects()",description:"API reference for renderWithEffects()",source:"@site/../docs/reference/test-utils.renderwitheffects.md",sourceDirName:"reference",slug:"/reference/test-utils.renderwitheffects",permalink:"/docs/next/reference/test-utils.renderwitheffects",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/test-utils.renderwitheffects.md",tags:[],version:"current",frontMatter:{id:"test-utils.renderwitheffects",title:"renderWithEffects()",description:"API reference for renderWithEffects()"}},d={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/test-utils.renderwitheffects",children:(0,n.jsx)(t.code,{children:"renderWithEffects"})})]}),"\n",(0,n.jsx)(t.p,{children:"Simplifies rendering of async components in by taking care of the wrapping inside act"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function renderWithEffects(nodes: ReactElement, options?: Pick<RenderOptions, 'wrapper'> & LegacyRootOption): Promise<RenderResult>;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"nodes"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"ReactElement"}),"\n"]}),(0,n.jsx)(t.td,{children:"\n"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"options"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsxs)(t.p,{children:["Pick<RenderOptions, 'wrapper'> & ",(0,n.jsx)(t.a,{href:"/docs/next/reference/test-utils.legacyrootoption",children:"LegacyRootOption"})]}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,n.jsx)(t.p,{children:"Promise<RenderResult>"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Components using useEffect to perform an asynchronous action (such as fetch) must be rendered within an async act call to properly get the final state, even with mocked responses. This utility method makes the signature a bit cleaner, since act doesn't return the result of the evaluated function. ",(0,n.jsx)(t.a,{href:"https://github.com/testing-library/react-testing-library/issues/281",children:"https://github.com/testing-library/react-testing-library/issues/281"})," ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react/pull/14853",children:"https://github.com/facebook/react/pull/14853"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,r)=>{var n=r(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,i={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!d.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:a,ref:l,props:i,_owner:o.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>o});var n=r(296540);const s={},i=n.createContext(s);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
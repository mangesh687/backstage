/*! For license information please see 8aa26d64.e54b0359.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[216739],{554142:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=r(474848),i=r(28453);const o={id:"frontend-plugin-api.pageblueprint",title:"PageBlueprint",description:"API reference for PageBlueprint"},a=void 0,p={id:"reference/frontend-plugin-api.pageblueprint",title:"PageBlueprint",description:"API reference for PageBlueprint",source:"@site/../docs/reference/frontend-plugin-api.pageblueprint.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.pageblueprint",permalink:"/docs/next/reference/frontend-plugin-api.pageblueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.pageblueprint.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.pageblueprint",title:"PageBlueprint",description:"API reference for PageBlueprint"}},s={},c=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.pageblueprint",children:(0,t.jsx)(n.code,{children:"PageBlueprint"})})]}),"\n",(0,t.jsx)(n.p,{children:"Createx extensions that are routable React page components."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'PageBlueprint: import("../wiring").ExtensionBlueprint<{\n    kind: "page";\n    name: undefined;\n    params: {\n        defaultPath: string;\n        loader: () => Promise<JSX.Element>;\n        routeRef?: RouteRef<import("../routing").AnyRouteRefParams> | undefined;\n    };\n    output: import("../wiring").ConfigurableExtensionDataRef<import("react").JSX.Element, "core.reactElement", {}> | import("../wiring").ConfigurableExtensionDataRef<string, "core.routing.path", {}> | import("../wiring").ConfigurableExtensionDataRef<RouteRef<import("../routing").AnyRouteRefParams>, "core.routing.ref", {\n        optional: true;\n    }>;\n    inputs: {};\n    config: {\n        path: string | undefined;\n    };\n    configInput: {\n        path?: string | undefined;\n    };\n    dataRefs: never;\n}>\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},221020:(e,n,r)=>{var t=r(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,o={},c=null,u=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,t)&&!s.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:p.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>p});var t=r(296540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
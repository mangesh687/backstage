/*! For license information please see 9188567e.ab21e757.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[583040],{345013:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(474848),p=n(28453);const o={id:"frontend-plugin-api.approotwrapperblueprint",title:"AppRootWrapperBlueprint",description:"API reference for AppRootWrapperBlueprint"},a=void 0,i={id:"reference/frontend-plugin-api.approotwrapperblueprint",title:"AppRootWrapperBlueprint",description:"API reference for AppRootWrapperBlueprint",source:"@site/../docs/reference/frontend-plugin-api.approotwrapperblueprint.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.approotwrapperblueprint",permalink:"/docs/next/reference/frontend-plugin-api.approotwrapperblueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.approotwrapperblueprint.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.approotwrapperblueprint",title:"AppRootWrapperBlueprint",description:"API reference for AppRootWrapperBlueprint"}},c={},s=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,p.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/frontend-plugin-api.approotwrapperblueprint",children:(0,t.jsx)(r.code,{children:"AppRootWrapperBlueprint"})})]}),"\n",(0,t.jsx)(r.p,{children:"Creates a extensions that render a React wrapper at the app root, enclosing the app layout. This is useful for example for adding global React contexts and similar."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:'AppRootWrapperBlueprint: import("../wiring").ExtensionBlueprint<{\n    kind: "app-root-wrapper";\n    name: undefined;\n    params: {\n        Component: ComponentType<PropsWithChildren<{}>>;\n    };\n    output: import("../wiring").ConfigurableExtensionDataRef<React.ComponentType<{\n        children?: React.ReactNode;\n    }>, "app.root.wrapper", {}>;\n    inputs: {};\n    config: {};\n    configInput: {};\n    dataRefs: {\n        component: import("../wiring").ConfigurableExtensionDataRef<React.ComponentType<{\n            children?: React.ReactNode;\n        }>, "app.root.wrapper", {}>;\n    };\n}>\n'})})]})}function d(e={}){const{wrapper:r}={...(0,p.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),p=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,o={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,t)&&!c.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:p,type:e,key:s,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=s,r.jsxs=s},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var t=n(296540);const p={},o=t.createContext(p);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);
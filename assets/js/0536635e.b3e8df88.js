/*! For license information please see 0536635e.b3e8df88.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[84182],{959809:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(474848),s=n(28453);const o={id:"plugin-kubernetes-backend.kubernetesproxyoptions",title:"KubernetesProxyOptions",description:"API reference for KubernetesProxyOptions"},c=void 0,i={id:"reference/plugin-kubernetes-backend.kubernetesproxyoptions",title:"KubernetesProxyOptions",description:"API reference for KubernetesProxyOptions",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-backend.kubernetesproxyoptions.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesproxyoptions",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesproxyoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-backend.kubernetesproxyoptions.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-backend.kubernetesproxyoptions",title:"KubernetesProxyOptions",description:"API reference for KubernetesProxyOptions"}},p={},u=[];function a(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxyoptions",children:(0,t.jsx)(r.code,{children:"KubernetesProxyOptions"})})]}),"\n",(0,t.jsx)(r.p,{children:"Options accepted as a parameter by the KubernetesProxy"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type KubernetesProxyOptions = {\n    logger: LoggerService;\n    clusterSupplier: KubernetesClustersSupplier;\n    authStrategy: AuthenticationStrategy;\n    discovery: DiscoveryService;\n    httpAuth?: HttpAuthService;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.authenticationstrategy",children:"AuthenticationStrategy"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.httpauthservice",children:"HttpAuthService"})]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,o={},u=null,a=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(a=r.ref),r)c.call(r,t)&&!p.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:u,ref:a,props:o,_owner:i.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(296540);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);
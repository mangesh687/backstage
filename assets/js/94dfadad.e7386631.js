/*! For license information please see 94dfadad.e7386631.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[708762],{902727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var r=t(474848),o=t(28453);const c={id:"plugin-techdocs-backend.recommendeddeploymentoptions",title:"RecommendedDeploymentOptions",description:"API reference for RecommendedDeploymentOptions"},s=void 0,d={id:"reference/plugin-techdocs-backend.recommendeddeploymentoptions",title:"RecommendedDeploymentOptions",description:"API reference for RecommendedDeploymentOptions",source:"@site/../docs/reference/plugin-techdocs-backend.recommendeddeploymentoptions.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-backend.recommendeddeploymentoptions",permalink:"/docs/next/reference/plugin-techdocs-backend.recommendeddeploymentoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-backend.recommendeddeploymentoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-backend.recommendeddeploymentoptions",title:"RecommendedDeploymentOptions",description:"API reference for RecommendedDeploymentOptions"}},i={},l=[];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-techdocs-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-backend.recommendeddeploymentoptions",children:(0,r.jsx)(n.code,{children:"RecommendedDeploymentOptions"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsx)(n.p,{children:"This type is only exported for legacy reasons and will be removed in the future."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Required dependencies for running TechDocs in the "recommended" deployment configuration (prepare/generate handled externally in CI/CD).'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type RecommendedDeploymentOptions = {\n    publisher: PublisherBase;\n    logger: winston.Logger;\n    discovery: DiscoveryService;\n    config: Config;\n    cache: PluginCacheManager;\n    docsBuildStrategy?: DocsBuildStrategy;\n    buildLogTransport?: winston.transport;\n    catalogClient?: CatalogApi;\n    httpAuth?: HttpAuthService;\n    auth?: AuthService;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.publisherbase",children:"PublisherBase"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/config.config",children:"Config"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-techdocs-node.docsbuildstrategy",children:"DocsBuildStrategy"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/catalog-client.catalogapi",children:"CatalogApi"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.httpauthservice",children:"HttpAuthService"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/backend-plugin-api.authservice",children:"AuthService"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,c={},l=null,a=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,r)&&!i.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:a,props:c,_owner:d.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(296540);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);
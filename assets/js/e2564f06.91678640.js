/*! For license information please see e2564f06.91678640.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[457147],{46840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(474848),r=t(28453);const o={id:"troubleshooting",title:"Troubleshooting Kubernetes",sidebar_label:"Troubleshooting",description:"Troubleshooting for Kubernetes"},a=void 0,i={id:"features/kubernetes/troubleshooting",title:"Troubleshooting Kubernetes",description:"Troubleshooting for Kubernetes",source:"@site/../docs/features/kubernetes/troubleshooting.md",sourceDirName:"features/kubernetes",slug:"/features/kubernetes/troubleshooting",permalink:"/docs/next/features/kubernetes/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/kubernetes/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting Kubernetes",sidebar_label:"Troubleshooting",description:"Troubleshooting for Kubernetes"},sidebar:"docs",previous:{title:"Authentication Strategies",permalink:"/docs/next/features/kubernetes/authentication-strategies"},next:{title:"Proxy",permalink:"/docs/next/features/kubernetes/proxy"}},c={},l=[{value:"Kubernetes is not showing up on Service Entities",id:"kubernetes-is-not-showing-up-on-service-entities",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"kubernetes-is-not-showing-up-on-service-entities",children:"Kubernetes is not showing up on Service Entities"}),"\n",(0,s.jsx)(n.p,{children:"This can be debugged by checking whether your Kubernetes cluster are connected\nto Backstage as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-curl",children:"curl --location --request POST '{{backstage-backend-url}}:{{backstage-backend-port}}/api/kubernetes/services/:service-entity-name' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"entity\": {\n        \"metadata\": {\n            \"name\": <service-entity-name>\n        }\n    }\n}\n'\n"})}),"\n",(0,s.jsx)(n.p,{children:"The curl response should have resources from Kubernetes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'# curl response\n{\n  "items": [\n    {\n      "cluster": {\n        "name": <cluster-name>\n      },\n      "resources": [\n        {\n          "type": "services",\n          "resources": [\n            {\n              "metadata": {\n                "creationTimestamp": "2022-03-13T13:52:46.000Z",\n                "labels": {\n                  "app": <k8s-app-name>,\n                  "backstage": <selector>,\n                  "backstage.io/kubernetes-id": <service-entity-name>\n                },\n                "name": <k8s-app-name>,\n                "namespace": <namespace>\n              },\n              ....\n            }\n          ]\n        },\n        ....\n        {\n          "type": "pods",\n          "resources": [\n            ,,,,\n          ]\n        }\n      ],\n      "errors": []\n    }\n  ]\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"The Kubernetes tab will not show anything when the catalog info annotation does\nnot match the related Kubernetes resource. We recommend you add the following\nlabels to your resources and use the label selector annotation as follows:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"backstage.io/kubernetes-id: <entity-service-name>"}),"for get k8s service-related\nobjects.\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/a1f587c/plugins/kubernetes-backend/src/service/KubernetesFetcher.ts#L119",children:"See the plugin code"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# k8s related yaml (service.yaml, deployment.yaml, ingress.yaml)\nmetadata:\n  creationTimestamp: '2022-03-13T13:52:46.000Z'\n  labels:\n    app: <k8s-app-name>\n    env: <environment>\n    backstage.io/kubernetes-id: <service-entity-name>\n  name: <k8s-app-name>\n  namespace: <namespace>\n"})}),"\n",(0,s.jsx)(n.p,{children:"k8s-app-name and service-entity-name could be different, but if you would like\nto have consistent names between k8s and backstage, we recommend use same name."}),"\n",(0,s.jsx)(n.p,{children:"and the catalog info annotations would use label selector:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# catalog-info.yaml (backstage)\nannotations:\n  backstage.io/kubernetes-label-selector: '<label-selector>'\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,o={},l=null,u=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,s)&&!c.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(296540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
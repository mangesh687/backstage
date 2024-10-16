/*! For license information please see fa583ecd.d3c4c896.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[991854],{948229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(474848),i=t(28453);const o={id:"dry-run-testing",title:"Dry Run Testing",description:"How to enable and implement dry run testing in actions"},a=void 0,s={id:"features/software-templates/dry-run-testing",title:"Dry Run Testing",description:"How to enable and implement dry run testing in actions",source:"@site/../docs/features/software-templates/dry-run-testing.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/dry-run-testing",permalink:"/docs/next/features/software-templates/dry-run-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/dry-run-testing.md",tags:[],version:"current",frontMatter:{id:"dry-run-testing",title:"Dry Run Testing",description:"How to enable and implement dry run testing in actions"},sidebar:"docs",previous:{title:"Migrating to v1beta3 templates",permalink:"/docs/next/features/software-templates/migrating-from-v1beta2-to-v1beta3"},next:{title:"Overview",permalink:"/docs/next/features/search/"}},c={},d=[{value:"Enabling dry run testing",id:"enabling-dry-run-testing",level:2},{value:"Adding handling for dry run",id:"adding-handling-for-dry-run",level:2},{value:"Testing dry run handling",id:"testing-dry-run-handling",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Scaffolder templates can be tested using the dry run feature of scaffolder actions. This allows you to simulate the effects of running a scaffolder action without making any actual changes to your environment, for example creating a webhook in GitHub. Once dry run is enabled in the scaffolder action, you can add handling to actions you use in your scaffolder templates to define how an action should operate in a dry run scenario."}),"\n",(0,r.jsx)(n.h2,{id:"enabling-dry-run-testing",children:"Enabling dry run testing"}),"\n",(0,r.jsxs)(n.p,{children:["To enable dry run for your scaffolder action you need to add ",(0,r.jsx)(n.code,{children:"supportsDryRun: true"})," to the configuration object of ",(0,r.jsx)(n.code,{children:"createTemplateAction"})," in the function where the behavior of your action is defined:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export function exampleAction() {\n  return createTemplateAction<{\n    example: string;\n  }>({\n    id: 'action:example',\n    description: 'Example action',\n    schema: {\n      input: {\n        type: 'object',\n        properties: {\n          example: {\n            title: 'example',\n            type: 'string',\n          },\n        },\n      },\n    },\n    supportsDryRun: true,\n    async handler(ctx) {\n      ...\n    },\n  });\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"adding-handling-for-dry-run",children:"Adding handling for dry run"}),"\n",(0,r.jsxs)(n.p,{children:["To add handling for dry run functionality you need to add a check for ",(0,r.jsx)(n.code,{children:"ctx.isDryRun"})," inside the handler of the configuration object which is being passed into ",(0,r.jsx)(n.code,{children:"createTemplateAction"})," in the function where the behavior of your action is defined. Once the check is successful, you can perform the desired actions expected in a dry run, e.g. outputting non-sensitive inputs."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"async handler(ctx) {\n      ...\n\n      // If this is a dry run, log and return\n      if (ctx.isDryRun) {\n        ctx.logger.info(`Dry run complete`);\n        return;\n      }\n\n      ...\n    },\n"})}),"\n",(0,r.jsx)(n.h2,{id:"testing-dry-run-handling",children:"Testing dry run handling"}),"\n",(0,r.jsx)(n.p,{children:"You will also need to add tests for the dry run handling, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"  it('should not perform action during dry run', async () => {\n    ...\n\n    // Create the context object with the necessary properties for a dry run\n    const ctx = {\n      ...mockContext,\n      isDryRun: true,\n      input: {\n        ...\n      },\n    };\n\n    // Call the handler with the context\n    await action.handler(ctx);\n\n    expect(...);\n  });\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:s.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(296540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
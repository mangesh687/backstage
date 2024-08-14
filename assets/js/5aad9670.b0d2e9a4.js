/*! For license information please see 5aad9670.b0d2e9a4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[346511],{520814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(824246),i=n(511151);const o={id:"extension-blueprints",title:"Frontend Extension Blueprints",sidebar_label:"Extensions Blueprints",description:"Frontend extensions"},a=void 0,s={id:"frontend-system/architecture/extension-blueprints",title:"Frontend Extension Blueprints",description:"Frontend extensions",source:"@site/../docs/frontend-system/architecture/23-extension-blueprints.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/extension-blueprints",permalink:"/docs/frontend-system/architecture/extension-blueprints",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/architecture/23-extension-blueprints.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{id:"extension-blueprints",title:"Frontend Extension Blueprints",sidebar_label:"Extensions Blueprints",description:"Frontend extensions"},sidebar:"docs",previous:{title:"Extensions",permalink:"/docs/frontend-system/architecture/extensions"},next:{title:"Extension Overrides",permalink:"/docs/frontend-system/architecture/extension-overrides"}},c={},l=[{value:"Creating an extension from a blueprint",id:"creating-an-extension-from-a-blueprint",level:2},{value:"Creating an extension from a blueprint with overrides",id:"creating-an-extension-from-a-blueprint-with-overrides",level:2},{value:"Creating an extension blueprint",id:"creating-an-extension-blueprint",level:2},{value:"Blueprint-specific extension data references",id:"blueprint-specific-extension-data-references",level:3},{value:"Extension Blueprints in libraries",id:"extension-blueprints-in-libraries",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"createExtension"})," function and related APIs is considered a low-level building and fairly advanced building block, and is not typically what you would use when building plugins and features. Instead, the core APIs and plugins provide extension blueprints that makes it easier to create extensions for specific usages. These blueprints accept a number of parameters that is up to each blueprint to define, and then creates a new extension using the provided parameters. New blueprints are created using the ",(0,r.jsx)(t.code,{children:"createExtensionBlueprint"})," function, and are by convention exported with the symbol ",(0,r.jsx)(t.code,{children:"<Kind>Blueprint"}),". If you are curious about what blueprints are available from a plugin or package, look for ",(0,r.jsx)(t.code,{children:"*Blueprint"})," exports in the package's API, for plugins these are typically found in the ",(0,r.jsx)(t.code,{children:"*-react"})," package."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-an-extension-from-a-blueprint",children:"Creating an extension from a blueprint"}),"\n",(0,r.jsxs)(t.p,{children:["Every extension blueprint provides a ",(0,r.jsx)(t.code,{children:"make"})," method that can be used to create new extensions. It is a simple way to create a new extension where the base blueprint provides all the necessary functionality. All you need to do is to provide the necessary blueprint parameters, but you also have the ability to provide additional options, for example a ",(0,r.jsx)(t.code,{children:"name"})," for the extension."]}),"\n",(0,r.jsxs)(t.p,{children:["The following is a simple example of how one might use the blueprint ",(0,r.jsx)(t.code,{children:"make"})," method to create a new extension:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const myPageExtension = PageBlueprint.make({\n  params: {\n    defaultPath: '/my-page',\n    loader: () => import('./components/MyPage').them(m => <m.MyPage />),\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The returned ",(0,r.jsx)(t.code,{children:"myPageExtension"})," is an extension which is ready to be used in a plugin. It is the same type of object as is returned by the lower level ",(0,r.jsx)(t.code,{children:"createExtension"})," function."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-an-extension-from-a-blueprint-with-overrides",children:"Creating an extension from a blueprint with overrides"}),"\n",(0,r.jsxs)(t.p,{children:["Every extension blueprint also provides a ",(0,r.jsx)(t.code,{children:"makeWithOverrides"})," method. It is useful in cases where you want to provide additional integration points for an extension created with a blueprint. You might for example want to define additional inputs or configuration schema, or use the existing configuration to dynamically compute the parameters passed to the blueprint."]}),"\n",(0,r.jsxs)(t.p,{children:["The following is an example of how one might use the blueprint ",(0,r.jsx)(t.code,{children:"makeWithOverrides"})," method to create a new extension:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const myPageExtension = PageBlueprint.makeWithOverrides({\n  config: {\n    schema: {\n      layout: z => z.enum(['grid', 'rows']).default('grid'),\n    },\n  },\n  // The original blueprint factory is provided as the first argument\n  factory(originalFactory, { config }) {\n    // Call and forward the result from the original factory, providing\n    // the blueprint parameters as the first argument.\n    return originalFactory({\n      defaultPath: '/my-page',\n      loader: () =>\n        import('./components/MyPage').them(m => (\n          // We can now access values from the factory context when providing\n          // the blueprint parameters, such as config values.\n          <m.MyPage layout={config.layout} />\n        )),\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When using ",(0,r.jsx)(t.code,{children:"makeWithOverrides"}),", we no longer pass the blueprint parameters directly. Instead, we provide a ",(0,r.jsx)(t.code,{children:"factory"})," function that receives the original blueprint factory as the first argument, and the extension factory context as the second. We can then call the original blueprint factory with the blueprint parameters and forward the result as the return value of out factory. Notice that when passing the blueprint parameters using this pattern we have access to a lot more information than when using the ",(0,r.jsx)(t.code,{children:"make"})," method, at the cost of being more complex."]}),"\n",(0,r.jsxs)(t.p,{children:["Apart from the addition of the blueprint parameters of the first argument to the original factory function, the ",(0,r.jsx)(t.code,{children:"makeWithOverrides"})," method works the same way as ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extension-overrides",children:"extension overrides"}),". All the same options and rules apply, including the ability to define additional inputs, override outputs, and so on. We therefore defer to the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extension-overrides",children:"extension overrides"})," documentation for more information on how to use the ",(0,r.jsx)(t.code,{children:"makeWithOverrides"})," method."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-an-extension-blueprint",children:"Creating an extension blueprint"}),"\n",(0,r.jsxs)(t.p,{children:["To create a new extension blueprint, you use the ",(0,r.jsx)(t.code,{children:"createExtensionBlueprint"})," function. At the surface it is very similar to ",(0,r.jsx)(t.code,{children:"createExtension"}),", but with a few key differences. Firstly you must provide a ",(0,r.jsx)(t.code,{children:"kind"})," option, which will be the kind of all extensions created with the blueprint. See the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/naming-patterns",children:"naming patterns section"})," for more information about how to select a good extension kind. Secondly, the ",(0,r.jsx)(t.code,{children:"factory"})," function has a new signature where the first parameter is the blueprint parameters, and the second is the factory context. And finally, rather than returning an extension, ",(0,r.jsx)(t.code,{children:"createExtensionBlueprint"})," returns a blueprint object with the ",(0,r.jsx)(t.code,{children:"make"})," method and friends, which is used as is described above."]}),"\n",(0,r.jsx)(t.p,{children:"The following is an example of how one might create a new extension blueprint:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"export interface MyWidgetBlueprintParams {\n  defaultTitle: string;\n  element: JSX.Element;\n}\n\nexport const MyWidgetBlueprint = createExtensionBlueprint({\n  kind: 'my-widget',\n  attachTo: { id: 'page:my-plugin', input: 'widgets' },\n  config: {\n    schema: {\n      title: z.string().optional(),\n    },\n  },\n  output: [coreExtensionData.reactElement],\n  factory(params: MyWidgetBlueprintParams, { config }) {\n    return [\n      // Note that while this is a valid pattern, you might often want to\n      // return separate pieces of data instead, more on that below.\n      coreExtensionData.reactElement(\n        <MyWidgetContainer title={config.title ?? params.defaultTitle}>\n          {params.element}\n        </MyWidgetContainer>,\n      ),\n    ];\n  },\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"This is of course a quite bare-bones example blueprint, but still a very real example. Blueprints can be very simple, there's already a lot of value in encapsulating the extension kind, attachment point, and output in a blueprint."}),"\n",(0,r.jsxs)(t.p,{children:["Most of the options provided to ",(0,r.jsx)(t.code,{children:"createExtensionBlueprint"})," can be overridden when using ",(0,r.jsx)(t.code,{children:"makeWithOverrides"})," to create an extension from the blueprint. These overrides work the same way as ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extension-overrides",children:"extension overrides"}),", and we defer to that documentation for more information on how overrides work."]}),"\n",(0,r.jsx)(t.h3,{id:"blueprint-specific-extension-data-references",children:"Blueprint-specific extension data references"}),"\n",(0,r.jsxs)(t.p,{children:["In some cases you may want to define and provide ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extensions#extension-data-references",children:"extension data reference"})," that are specific to your blueprint. In the above example we might want to forward the ",(0,r.jsx)(t.code,{children:"title"})," as data for example, rather than encapsulating it into the ",(0,r.jsx)(t.code,{children:"MyWidgetContainer"})," component. This gives the parent extension more flexibility in the rendering for our example widget extensions."]}),"\n",(0,r.jsxs)(t.p,{children:["To do that, we create a new extension data reference for our widget title. This references is provided via the ",(0,r.jsx)(t.code,{children:"dataRefs"})," options when we create the blueprint, which makes it available for use via ",(0,r.jsx)(t.code,{children:"MyWidgetBlueprint.dataRefs.widgetTitle"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"export interface MyWidgetBlueprintParams {\n  defaultTitle: string;\n  element: JSX.Element;\n}\n\nconst widgetTitleRef = createExtensionDataRef<string>().with({\n  id: 'my-plugin.widget.title',\n});\n\nexport const MyWidgetBlueprint = createExtensionBlueprint({\n  kind: 'my-widget',\n  attachTo: { id: 'page:my-plugin', input: 'widgets' },\n  config: {\n    schema: {\n      title: z.string().optional(),\n    },\n  },\n  output: [widgetTitleRef, coreExtensionData.reactElement],\n  factory(params: MyWidgetBlueprintParams, { config }) {\n    return [\n      widgetTitleRef(config.title ?? params.defaultTitle),\n      coreExtensionData.reactElement(params.element),\n    ];\n  },\n  dataRefs: {\n    widgetTitle: widgetTitleRef,\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"extension-blueprints-in-libraries",children:"Extension Blueprints in libraries"}),"\n",(0,r.jsxs)(t.p,{children:["If you are publishing a plugin, the extension creators should always be exported from frontend library packages (e.g. ",(0,r.jsx)(t.code,{children:"*-react"}),") rather than plugin packages."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=x.prototype;var v=b.prototype=new g;v.constructor=b,m(v,x.prototype),v.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,i)&&!_.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+P(c,0):o,w(a)?(i="",null!=e&&(i=e.replace(T,"$&/")+"/"),C(a,t,i,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",w(e))for(var l=0;l<e.length;l++){var u=o+P(s=e[l],l);c+=C(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=C(s=s.value,t,i,u=o+P(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var r=[],i=0;return C(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function B(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},$={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=a,t.PureComponent=b,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(667294);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
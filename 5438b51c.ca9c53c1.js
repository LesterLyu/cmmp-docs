(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),o=(n(0),n(79)),c={title:"Introduction"},d={unversionedId:"backend/introduction",id:"backend/introduction",isDocsHomePage:!1,title:"Introduction",description:"1. Overview:",source:"@site/docs\\backend\\introduction.md",permalink:"/cmmp-docs/backend/introduction",editUrl:"https://github.com/drosu/creative_mixed-use_matching_platform/edit/master/docs/docs/backend/introduction.md",sidebar:"someSidebar",previous:{title:"Registration Workflow",permalink:"/cmmp-docs/registration"},next:{title:"Models",permalink:"/cmmp-docs/backend/models"}},a=[{value:"1. Overview:",id:"1-overview",children:[]},{value:"2. Tools used",id:"2-tools-used",children:[]},{value:"3. Subdirectories",id:"3-subdirectories",children:[{value:"3.1 <code>bin/</code>",id:"31-bin",children:[]},{value:"3.2  <code>config/</code>",id:"32--config",children:[]},{value:"3.3   <code>loader/</code>",id:"33---loader",children:[]},{value:"3.4   <code>model/</code>",id:"34---model",children:[]},{value:"3.5   <code>routes/</code>",id:"35---routes",children:[]},{value:"3.6   <code>services/</code>",id:"36---services",children:[]},{value:"3.7   <code>test/</code>",id:"37---test",children:[]},{value:"3.8   <code>utils/</code>",id:"38---utils",children:[]}]}],l={rightToc:a};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-overview"},"1. Overview:"),Object(o.b)("p",null,"The codebase backend server, it is in ",Object(o.b)("inlineCode",{parentName:"p"},"server/")," directory"),Object(o.b)("h2",{id:"2-tools-used"},"2. Tools used"),Object(o.b)("p",null,"WIP......"),Object(o.b)("h2",{id:"3-subdirectories"},"3. Subdirectories"),Object(o.b)("h3",{id:"31-bin"},"3.1 ",Object(o.b)("inlineCode",{parentName:"h3"},"bin/")),Object(o.b)("p",null,"Environment setting for the server, mainly getting the port from the environment"),Object(o.b)("h3",{id:"32--config"},"3.2  ",Object(o.b)("inlineCode",{parentName:"h3"},"config/")),Object(o.b)("p",null,"WIP......"),Object(o.b)("h3",{id:"33---loader"},"3.3   ",Object(o.b)("inlineCode",{parentName:"h3"},"loader/")),Object(o.b)("p",null,"WIP......"),Object(o.b)("h3",{id:"34---model"},"3.4   ",Object(o.b)("inlineCode",{parentName:"h3"},"model/")),Object(o.b)("p",null,"The database models used in the application."),Object(o.b)("h3",{id:"35---routes"},"3.5   ",Object(o.b)("inlineCode",{parentName:"h3"},"routes/")),Object(o.b)("p",null,"Provides which URL used for the API"),Object(o.b)("h3",{id:"36---services"},"3.6   ",Object(o.b)("inlineCode",{parentName:"h3"},"services/")),Object(o.b)("p",null,"Provides what is the required field and what it returned for the API, along with middleware"),Object(o.b)("h3",{id:"37---test"},"3.7   ",Object(o.b)("inlineCode",{parentName:"h3"},"test/")),Object(o.b)("p",null,"The end-to-end and integration test using Mocha"),Object(o.b)("h3",{id:"38---utils"},"3.8   ",Object(o.b)("inlineCode",{parentName:"h3"},"utils/")),Object(o.b)("p",null,"Extra helpers and tools used"))}u.isMDXComponent=!0},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,m=b["".concat(c,".").concat(p)]||b[p]||s[p]||o;return n?i.a.createElement(m,d(d({ref:t},l),{},{components:n})):i.a.createElement(m,d({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
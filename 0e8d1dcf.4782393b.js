(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),a=(n(0),n(79)),i={title:"Development"},c={unversionedId:"development",id:"development",isDocsHomePage:!1,title:"Development",description:"If you changed docker-compose.yaml or installation scripts, i.e. ./docker/**, remember to:",source:"@site/docs\\development.md",permalink:"/cmmp-docs/development",editUrl:"https://github.com/drosu/creative_mixed-use_matching_platform/edit/master/docs/docs/development.md",sidebar:"someSidebar",previous:{title:"Installation for Developer",permalink:"/cmmp-docs/"},next:{title:"Deployment",permalink:"/cmmp-docs/deployment"}},l=[],p={rightToc:l};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"if-you-changed-docker-composeyaml-or-installation-scripts-ie-docker-remember-to"},"If you changed ",Object(a.b)("inlineCode",{parentName:"h4"},"docker-compose.yaml")," or installation scripts, i.e. ",Object(a.b)("inlineCode",{parentName:"h4"},"./docker/**"),", remember to:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"docker-compose build --parallel\n")),Object(a.b)("h4",{id:"notes"},"Notes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The best way to develop the ",Object(a.b)("inlineCode",{parentName:"p"},"Node.js server")," and ",Object(a.b)("inlineCode",{parentName:"p"},"React.js front-end")," is ",Object(a.b)("strong",{parentName:"p"},"DO NOT USE DOCKER"),",\nsince a native runtime should have a better performance on CPU and I/O.\n",Object(a.b)("em",{parentName:"p"},"Install packages for ",Object(a.b)("inlineCode",{parentName:"em"},"Node.js")," or ",Object(a.b)("inlineCode",{parentName:"em"},"React.js")," from ",Object(a.b)("inlineCode",{parentName:"em"},"npm")," or ",Object(a.b)("inlineCode",{parentName:"em"},"yarn")," will not mess up your local environment."),"\nIt is also easier to debug in the native environment.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Files in ",Object(a.b)("inlineCode",{parentName:"p"},"./server/*")," are mounted into the docker ",Object(a.b)("inlineCode",{parentName:"p"},"/root/server/*"),", changes of files\nwill trigger an auto-reload by ",Object(a.b)("inlineCode",{parentName:"p"},"pm2"),". There is no need to restart the docker container manually.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Files in ",Object(a.b)("inlineCode",{parentName:"p"},"./frontend/*")," are mounted into the docker ",Object(a.b)("inlineCode",{parentName:"p"},"/root/frontend/*"),", changes of files\nwill trigger auto-reload by ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts"),". If new package installed, you need to\nmanually restart the frontend."))))}m.isMDXComponent=!0},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),b=r,u=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(u,c(c({ref:t},p),{},{components:n})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),i=(t(0),t(79)),a={id:"file-structure",title:"Frontend File Structure",sidebar_label:"File Structure"},s={unversionedId:"frontend/file-structure",id:"frontend/file-structure",isDocsHomePage:!1,title:"Frontend File Structure",description:"Overview",source:"@site/docs\\frontend\\file-structure.md",permalink:"/cmmp-docs/frontend/file-structure",editUrl:"https://github.com/drosu/creative_mixed-use_matching_platform/edit/master/docs/docs/frontend/file-structure.md",sidebar_label:"File Structure",sidebar:"someSidebar",previous:{title:"Frontend Introduction",permalink:"/cmmp-docs/frontend/introduction"},next:{title:"Build and Run Frontend",permalink:"/cmmp-docs/frontend/build"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Clarification",id:"clarification",children:[]},{value:"Simplified File Structure",id:"simplified-file-structure",children:[]},{value:"Detailed File Structure",id:"detailed-file-structure",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"overview"},"Overview"),Object(i.b)("p",null,"The frontend is located in ",Object(i.b)("inlineCode",{parentName:"p"},"./frontend/")," from the project's root directory."),Object(i.b)("h3",{id:"clarification"},"Clarification"),Object(i.b)("p",null," ",Object(i.b)("inlineCode",{parentName:"p"},"Console pages")," mean pages with url ",Object(i.b)("inlineCode",{parentName:"p"},"[host]/console/**"),". ",Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Home pages")," mean pages with url ",Object(i.b)("inlineCode",{parentName:"p"},"[host]/**")," other than ",Object(i.b)("inlineCode",{parentName:"p"},"console pages"),"."),Object(i.b)("h3",{id:"simplified-file-structure"},"Simplified File Structure"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"\ud83d\udce6frontend\n \u2523 \ud83d\udcc2public                --- Files that is public to the internet\n \u2523 \ud83d\udcc2src                   --- Source code\n \u2503 \u2523 \ud83d\udcc2api                 --- Client-side API calls\n \u2503 \u2523 \ud83d\udcc2components          --- React components\n \u2503 \u2503 \u2523 \ud83d\udcc2common            --- Components that is used in many pages\n \u2503 \u2503 \u2523 \ud83d\udcc2forms             --- Forms that can be shared along multiple pages\n \u2503 \u2503 \u2517 \ud83d\udcc2pages             --- Frontend pages\n \u2503 \u2523 \ud83d\udcc2context             --- Global context of the react app\n \u2503 \u2523 \ud83d\udcc2routes              --- React routers\n \u2503 \u2503 \u2523 \xb7\xb7\xb7\n \u2503 \u2503 \u2517 \ud83d\udcdcroutes.js         --- Routes configuration\n \u2503 \u2523 \ud83d\udcc2utils               --- Utils \n \u2503 \u2503 \u2523 \ud83d\udcc2canada            --- Data for Canada province and cities\n \u2503 \u2503 \u2523 \ud83d\udcc2data\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcformatter.js   --- Data formatter for address, etc...\n \u2503 \u2503 \u2523 \ud83d\udcc2inputsBuilder    --- A handwritten form library for performance optimization\n \u2503 \u2503 \u2523 \ud83d\udcc2validation       --- Data validators\n \u2503 \u2523 \ud83d\udcdcApp.js             --- Top React component\n \u2503 \u2523 \ud83d\udcdcconfig.js          --- frontend configuration (Config server address)\n \u2503 \u2523 \ud83d\udcdcindex.js           --- Main entry of the react app\n \u2503 \u2517 \xb7\xb7\xb7\n \u2523 \ud83d\udcdcpackage.json\n \u2523 \ud83d\udcdcREADME.md\n \u2517 \ud83d\udcdcyarn.lock\n")),Object(i.b)("h3",{id:"detailed-file-structure"},"Detailed File Structure"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"\ud83d\udce6frontend\n \u2523 \ud83d\udcc2public                --- Files that is public to the internet\n \u2503 \u2523 \ud83d\udcdcbackground-1.jpg    --- Background image used in home page\n \u2503 \u2523 \ud83d\udcdcfavicon.ico\n \u2503 \u2523 \ud83d\udcdcindex.html\n \u2503 \u2523 \ud83d\udcdclogo192.png\n \u2503 \u2523 \ud83d\udcdclogo512.png\n \u2503 \u2523 \ud83d\udcdcmanifest.json\n \u2503 \u2517 \ud83d\udcdcrobots.txt          --- Access control for robots (Google, etc...)\n \u2523 \ud83d\udcc2src                   --- Source code\n \u2503 \u2523 \ud83d\udcc2api                 --- Client-side API calls\n \u2503 \u2503 \u2523 \ud83d\udcc2notification      --- Notification of interest APIs\n \u2503 \u2503 \u2503 \u2517 \xb7\xb7\xb7\n \u2503 \u2503 \u2523 \ud83d\udcc2organization      --- Organization APIs\n \u2503 \u2503 \u2503 \u2523 \xb7\xb7\xb7\n \u2503 \u2503 \u2523 \ud83d\udcc2partnership       --- Partnership opportunity (listing) APIs\n \u2503 \u2503 \u2503 \u2523 \xb7\xb7\xb7\n \u2503 \u2503 \u2523 \ud83d\udcc2project           --- Project (wards, etc...) APIs\n \u2503 \u2503 \u2503 \u2517 \xb7\xb7\xb7\n \u2503 \u2503 \u2523 \ud83d\udcdcauth.js           --- Authentication APIs\n \u2503 \u2503 \u2523 \ud83d\udcdchere.js           --- HERE APIs (Geolocation) APIs\n \u2503 \u2503 \u2517 \ud83d\udcdcupload.js         --- Upload and download uploaded file APIs\n \u2503 \u2523 \ud83d\udcc2components          --- React components\n \u2503 \u2503 \u2523 \ud83d\udcc2common               --- Components that is used in many pages\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcDialog.js          --- Dialog\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcDropzone.js        --- Upload drop zone\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcGoogleMap.js       --- Google Map\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcHeader.js          --- Home page header\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcLink.js            --- React router link with Material-UI design \n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcLoading.js         --- Loading indicator (spinner)\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcMultiSelectField.js   --- Multiple/Single dropdown select\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcPhoneInput.js      --- Phone number input\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcProgress.js        --- Progress indicator\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcTextInput.js       --- Customized text field\n \u2503 \u2503 \u2523 \ud83d\udcc2forms                --- Forms that can be shared along multiple pages\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcnotificationOfInterest.js    --- Send notification of interest form\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcopportunity.js               --- Opportunity listing form\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcorganization.js              --- Organization / Account profile form\n \u2503 \u2503 \u2517 \ud83d\udcc2pages                --- Frontend pages\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2Auth\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcLogin.js\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcSignUp.js\n \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcVerify.js\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2Console            --- Dashboard/Console pages\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2Interest                    --- Notification of interest\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcReceivedInterests.js      --- List all received notifications of interest\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcSentInterests.js          --- List all sent notifications of interest\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcSubmitInterest.js         --- Submit a notification of interest\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcViewReceivedInterest.js   --- View one received interest\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcViewSentInterest.js       --- View one sent interest\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2Opportunity                 --- Partnership opportunity\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcEdit.js                   --- Edit/View an opportunity\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcList.js                   --- List all opportunities\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcOpportunityDialog.js      --- A dialog shows details of an opportunity\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcPost.js                   --- Post an new opportunity\n \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcSearch.js                 --- Search opportunities\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcConsole.js                  --- The sidebar and header of all pages \n \u2503 \u2503 \u2503 \u2503                                      located in this folder\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcDashboard.js                --- Dashboard page (empty now)\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcnavConfig.js                --- Configuration of the sidebar\n \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcProfile.js                  --- Account profile\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdc404.js                        --- 404 page\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcCaseStudies.js                --- (empty now)\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcResources.js                  --- (empty now)\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcSectors.js                    --- (empty now)\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcToolkits.js                   --- (empty now)\n \u2503 \u2523 \ud83d\udcc2context                --- Global context of the react app\n \u2503 \u2503 \u2517 \ud83d\udcdcindex.js\n \u2503 \u2523 \ud83d\udcc2routes                 --- React routers\n \u2503 \u2503 \u2523 \ud83d\udcdcConsoleRoute.js      --- React router component for console pages\n \u2503 \u2503 \u2523 \ud83d\udcdcHomeRoute.js         --- React router component for home pages\n \u2503 \u2503 \u2523 \ud83d\udcdcindex.js\n \u2503 \u2503 \u2517 \ud83d\udcdcroutes.js        --- Routes configuration\n \u2503 \u2523 \ud83d\udcc2utils              --- Utils \n \u2503 \u2503 \u2523 \ud83d\udcc2canada           --- Data for Canada province and cities\n \u2503 \u2503 \u2503 \u2517 \xb7\xb7\xb7\n \u2503 \u2503 \u2523 \ud83d\udcc2data\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcformatter.js   --- Data formatter for address, etc...\n \u2503 \u2503 \u2523 \ud83d\udcc2inputsBuilder    --- A handwritten form library for performance optimization\n \u2503 \u2503 \u2503 \u2517 \xb7\xb7\xb7\n \u2503 \u2503 \u2523 \ud83d\udcc2validation       --- Data validators\n \u2503 \u2503 \u2517 \u2517 \ud83d\udcdcsignUpValidator.js\n \u2503 \u2523 \ud83d\udcdcApp.js             --- Top React component\n \u2503 \u2523 \ud83d\udcdcApp.test.js\n \u2503 \u2523 \ud83d\udcdcconfig.js          --- frontend configuration (Config server address)\n \u2503 \u2523 \ud83d\udcdcindex.css\n \u2503 \u2523 \ud83d\udcdcindex.js           --- Main entry of the react app\n \u2503 \u2523 \ud83d\udcdclogo.svg\n \u2503 \u2523 \ud83d\udcdcserviceWorker.js\n \u2503 \u2517 \ud83d\udcdcsetupTests.js\n \u2523 \ud83d\udcdcpackage.json\n \u2523 \ud83d\udcdcREADME.md\n \u2517 \ud83d\udcdcyarn.lock\n")))}p.isMDXComponent=!0},79:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return t?o.a.createElement(m,s(s({ref:n},l),{},{components:t})):o.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);
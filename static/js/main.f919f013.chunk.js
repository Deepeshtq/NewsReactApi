(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/loading.58fb5f75.gif"},21:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(16),c=a.n(o),i=(a(30),a(32),a(7)),l=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"NewsTak"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link ","aria-current":"page",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/business"},"Business")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/entertainment"},"Entertainment")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/general"},"General")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/health"},"Health")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/science"},"Science")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/sports"},"Sports")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/technology"},"Technology")))))))},s=a(14),u=a(10),m=function(e){var t=e.title,a=e.description,n=e.imageUrl,o=e.newsUrl,c=e.author,i=e.date,l=e.source;return r.a.createElement("div",{className:"my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("span",{className:"position-absolute top-0  translate-middle badge rounded-pill bg-danger",style:{left:"90%",zIndex:"1"}},l),r.a.createElement("img",{src:n,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t," "),r.a.createElement("p",{className:"card-text"},a," "),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"By",c||"Unknown"," on"," ",new Date(i).toGMTString())),r.a.createElement("a",{rel:"noreferrer",href:o,target:"_blank",className:"btn btn-sm btn-dark"},"Read More"))))},h=a(19),p=a.n(h),f=function(){return r.a.createElement("div",{className:"text-center my-3"},r.a.createElement("img",{className:"my-3",src:p.a,alt:"loading"}))},d=a(20);function g(){g=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(T){l=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof h?t:h,c=Object.create(o.prototype),i=new L(r||[]);return n(c,"_invoke",{value:x(e,a,i)}),c}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(T){return{type:"throw",arg:T}}}e.wrap=s;var m={};function h(){}function p(){}function f(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&a.call(y,o)&&(d=y);var E=f.prototype=h.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;n(this,"_invoke",{value:function(n,o){function c(){return new t(function(r,c){!function n(r,o,c,i){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return n("throw",e,c,i)})}i(l.arg)}(n,o,r,c)})}return r=r?r.then(c,c):c()}})}function x(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return O()}for(a.method=r,a.arg=o;;){var c=a.delegate;if(c){var i=N(c,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=u(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}function N(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=f,n(E,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:p,configurable:!0}),p.displayName=l(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,c,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var c=new w(s(t,a,n,r),o);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(E),l(E,i,"Generator"),l(E,o,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),S(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;S(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var v=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!0),l=Object(u.a)(i,2),h=l[0],p=l[1],v=Object(n.useState)(1),y=Object(u.a)(v,2),E=y[0],b=y[1],w=Object(n.useState)(0),x=Object(u.a)(w,2),N=x[0],k=x[1],S=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},L=function(){var t=Object(s.a)(g().mark(function t(){var a,n,r;return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=7f85d9b01e3c4ed2a97280d42c343dca&page=").concat(E,"&pageSize=").concat(e.pageSize),p(!0),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,c(r.articles),k(r.totalResults),p(!1);case 11:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)(function(){document.title="NewsTak-".concat(S(e.category)),L()},[]);var j=function(){var t=Object(s.a)(g().mark(function t(){var a,n,r;return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=7f85d9b01e3c4ed2a97280d42c343dca&page=").concat(E+1,"&pageSize=").concat(e.pageSize),b(E+1),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,c(o.concat(r.articles)),k(r.totalResults);case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center",style:{magin:"35px 0px",marginTop:"90px"}},"NewsTak - Top ",S(e.category)," Headline"),h&&r.a.createElement(f,null),r.a.createElement(d.a,{dataLength:o.length,next:j,hasMore:o.length!==N,loader:r.a.createElement(f,null)},r.a.createElement("div",{className:"container my-3"},r.a.createElement("div",{className:"row"},o.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e.url},r.a.createElement(m,{title:e.title?e.title:"",description:e.description?e.description:"",imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt,source:e.source.name}))})))))};v.defaultProps={country:"in",pageSize:5,category:"general"};var y=v,E=a(0),b=function(){return r.a.createElement("div",null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(l,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/"},r.a.createElement(y,{key:"general",pageSize:5,country:"in",category:"general"})),r.a.createElement(E.a,{exact:!0,path:"/business"},r.a.createElement(y,{key:"business",pageSize:5,country:"in",category:"business"})),r.a.createElement(E.a,{exact:!0,path:"/entertainment"},r.a.createElement(y,{key:"entertainment",pageSize:5,country:"in",category:"entertainment"})," "),r.a.createElement(E.a,{exact:!0,path:"/general"},r.a.createElement(y,{key:"general",pageSize:5,country:"in",category:"general"})," "),r.a.createElement(E.a,{exact:!0,path:"/health"},r.a.createElement(y,{key:"health",pageSize:5,country:"in",category:"health"})," "),r.a.createElement(E.a,{exact:!0,path:"/science"},r.a.createElement(y,{key:"science",pageSize:5,country:"in",category:"science"})," "),r.a.createElement(E.a,{exact:!0,path:"/sports"},r.a.createElement(y,{key:"sports",pageSize:5,country:"in",category:"sports"})," "),r.a.createElement(E.a,{exact:!0,path:"/technology"},r.a.createElement(y,{key:"technology",pageSize:5,country:"in",category:"technology"})," ")))))},w=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,41)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null))),w()}},[[21,3,2]]]);
//# sourceMappingURL=main.f919f013.chunk.js.map
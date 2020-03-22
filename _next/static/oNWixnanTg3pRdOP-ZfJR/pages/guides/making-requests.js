(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1KBa":function(e,n,t){"use strict";function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var l=t("Ff2n"),r=t("q1tI"),s=t.n(r),a=t("YFqc"),i=t.n(a),c=s.a.createElement;n.a=function(e){var n=e.href,t=Object(l.a)(e,["href"]);return c(i.a,o({href:n,as:"".concat("/bestfetch").concat(n)},t))}},FJjp:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),l=t.n(o),r=t("10ji"),s=t.n(r),a=t("1KBa"),i=l.a.createElement;n.default=function(){return i("div",{className:"page"},i("h1",null,"Making Requests"),i("p",null,"This guide will cover how to configure requests as well as how to handle the responses that you receive."),i("p",null,"To begin, import the ",i("code",null,"bestfetch")," function:"),i(s.a,{language:"js",inline:!1,value:"import { bestfetch } from 'bestfetch';"}),i("h2",null,"Configuring Requests"),i("p",null,i("code",null,"bestfetch")," supports all of the same options as"," ",i("code",null,"fetch"),"."),i("p",null,"In fact, because bestfetch is a lightweight wrapper around fetch, it can be beneficial for you to be familiar with that API. If you're new to fetch, you may wish to read the"," ",i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"},"Using Fetch guide on MDN"),"."),i("h3",null,"Specifying the URL"),i("p",null,"You can pass a URL as the first argument, or you can pass an"," ",i("code",null,"options")," object and specify the URL there. URLs can be both absolute or relative."),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then(handleResponse);\n\nbestfetch({\n  url: '/api/books/2'\n})\n  .then(handleResponse);"}),i("h3",null,"Specifying the HTTP Method"),i("p",null,"Pass the ",i("code",null,"method")," option. For instance, to make a"," ",i("code",null,"POST")," request:"),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/todos/1', {\n  method: 'post'\n})\n  .then(handleResponse);"}),i("p",null,"The ",i("code",null,"method")," option is case-insensitive, so either"," ",i("code",null,'"POST"')," and ",i("code",null,'"post"')," will work."),i("h3",null,"Sending Data in the Request Body"),i("p",null,"Use the ",i("code",null,"body")," option to send data to the server. To do this, stringify your data and pass the correct headers so that the server knows how to parse the data:"),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/todos/1', {\n  method: 'post',\n  body: JSON.stringify(data),\n  headers: {\n    'Content-Type': 'application/json'\n  }\n})\n  .then(handleResponse);"}),i("h3",null,"Sending Query Parameters"),i("p",null,"Include query parameters in the ",i("code",null,"url"),"."),i(s.a,{language:"js",inline:!1,value:"bestfetch('/api/books?sort=author')\n  .then(handleResponse);"}),i("p",null,"You may find it preferable to use a library that stringifies query parameters from an object. The following example shows how you can use"," ",i("code",null,"bestfetch")," with"," ",i("a",{href:"https://github.com/sindresorhus/query-string"},i("code",null,"query-string")),":"),i(s.a,{language:"js",inline:!1,value:"import queryString from 'query-string';\n\nconst qs = queryString.stringify({ sort: 'author' });\n\nbestfetch(`/api/books?${qs}`)\n  .then(handleResponse);"}),i("h3",null,"Configuring the Caching Behavior"),i("p",null,i("code",null,"bestfetch")," will intelligently cache your responses to reduce network requests. Refer to the guide on"," ",i(a.a,{href:"/guides/caching-responses"},i("a",null,"Caching Responses"))," ","to learn how to configure this behavior."),i("h3",null,"Other Options"),i("p",null,i("code",null,"bestfetch")," supports all of the same options as"," ",i("code",null,"fetch"),", including:"),i("ul",null,i("li",null,i("code",null,"method")),i("li",null,i("code",null,"headers")),i("li",null,i("code",null,"body")),i("li",null,i("code",null,"mode")),i("li",null,i("code",null,"credentials")),i("li",null,i("code",null,"cache")," ",i("i",null,"(note: this is unrelated to the caching system of bestfetch)")),i("li",null,i("code",null,"redirect")),i("li",null,i("code",null,"referrer")),i("li",null,i("code",null,"referrerPolicy")),i("li",null,i("code",null,"integrity")),i("li",null,i("code",null,"keepalive")),i("li",null,i("code",null,"signal"))),i("p",null,"So far, this guide has covered the most commonly-used options. For more information on these other options, refer to"," ",i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"the ",i("code",null,"fetch()")," documentation")," ","on MDN."),i("p",null,"In addition to the options that come from ",i("code",null,"fetch"),", there are additional options introduced in bestfetch. These are used for the caching and deduplication features."),i("ul",null,i("li",null,i("code",null,"cachePolicy"),": Controls the caching behavior. Learn more in the"," ",i(a.a,{href:"/guides/caching-responses"},i("a",null,"caching guide")),"."),i("li",null,i("code",null,"dedupe"),": Whether or not to dedupe this request. Learn more in the"," ",i(a.a,{href:"/guides/deduplicating-requests"},i("a",null,"deduplication guide")),"."),i("li",null,i("code",null,"responseType"),". Use this option when making requests to endpoints that do not return JSON. Learn more"," ",i(a.a,{href:"/guides/other-response-types"},i("a",null,"here")),"."),i("li",null,i("code",null,"requestKey"),". An advanced option that is used to determine which requests are identical. You probably won't need this. Learn more in the"," ",i(a.a,{href:"/guides/deduplicating-requests"},i("a",null,"deduplication guide")),".")),i("h2",null,"Receiving Responses"),i("p",null,i("code",null,"bestfetch")," returns a Promise. This Promise resolves if a response from the server or cache is received, and it rejects otherwise."),i("h3",null,"Successful Respones"),i("p",null,"When a response is successful you can access the data from the response on ",i("code",null,"res.data"),"."),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then(res => {\n    console.log('Got the data', res.data);\n  });"}),i("h3",null,"Errors"),i("p",null,"If the server replies with an error response, then the Promise will still resolve. This is important to note, because it may be unexpected."),i("p",null,"If your server returns HTTP status codes that are greater than or equal to 400 when there are errors, then you can check for server errors with the following code:"),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then(res => {\n    if (res.ok) {\n      console.log('The request was successful');\n    } else {\n      console.log('The request was unsuccessful.');\n    }\n  });"}),i("p",null,"If no response is received, then the promise will reject."),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/todos/1')\n  .catch(err => {\n    console.log('Another kind of error occurred.', err);\n  });"}),i("p",null,"The Promise will also reject with a"," ",i(a.a,{href:"/api-reference/cache-miss-error"},i("a",null,"CacheMissError"))," ","if the ",i("code",null,"cachePolicy")," of the request is set to"," ",i("code",null,'"cache-only"')," and nothing was found in the cache."),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/todos/1', {\n  cachePolicy: 'cache-only'\n})\n  .catch(err => {\n    if (err instanceof CacheMissError) {\n      console.log('This request did not have a response in the cache.');\n    }\n  });"}),i("h2",null,"Trying It Out"),i("p",null,"This webpage has ",i("code",null,"bestfetch")," available on the window for you to use. You can try it out by making requests to"," ",i("a",{href:"https://jsonplaceholder.typicode.com/"},"the JSON Placeholder API"),"."),i("p",null,"Here are a few examples to get you started."),i("h3",null,"Fetching a Resource"),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then(res => {\n    console.log('Got the todo', res.data);\n  });"}),i("h3",null,"Creating a Resource"),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/posts', {\n    method: 'post',\n    body: JSON.stringify({\n      title: 'My first post',\n      body: 'This is a draft post.',\n      userId: 1\n    }),\n    headers: {\n      \"Content-type\": \"application/json; charset=UTF-8\"\n    }\n  })\n  .then(res => console.log('Created:', res.data));"}),i("h3",null,"Updating a Resource"),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/posts/1', {\n    method: 'put',\n    body: JSON.stringify({\n      id: 1,\n      title: 'foo',\n      body: 'bar',\n      userId: 1\n    }),\n    headers: {\n      \"Content-type\": \"application/json; charset=UTF-8\"\n    }\n  })\n  .then(res => console.log('Updated:', res.data));"}),i("h3",null,"Deleting a Resource"),i(s.a,{language:"js",inline:!1,value:"bestfetch('https://jsonplaceholder.typicode.com/posts/1', {\n  method: 'delete'\n})"}),i("h3",null,"Other Examples"),i("p",null,"Check out"," ",i("a",{href:"https://jsonplaceholder.typicode.com/guide.html"},"the JSON Placeholder examples")," ","for more inspiration."))}},Ff2n:function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(n,"a",(function(){return o}))},JOf4:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/making-requests",function(){return t("FJjp")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var o=t("lwsE"),l=t("W8MJ"),r=t("a1gu"),s=t("Nsbk"),a=t("7W2i"),i=t("TqRt"),c=t("284h");n.__esModule=!0,n.default=void 0;var u,h=c(t("q1tI")),p=t("QmWs"),d=t("g/15"),f=i(t("nOHt"));function g(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,m=window.IntersectionObserver,v={};function b(){return u||(m?u=new m((function(e){e.forEach((function(e){if(y.has(e.target)){var n=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),y.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){function n(e){var t;return o(this,n),(t=r(this,s(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,o=null;return function(l,r){if(o&&l===n&&r===t)return o;var s=e(l,r);return n=l,t=r,o=s,s}}((function(e,n){return{href:g(e),as:n?g(n):n}})),t.linkClicked=function(e){var n=e.currentTarget,o=n.nodeName,l=n.target;if("A"!==o||!(l&&"_self"!==l||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=t.formatUrls(t.props.href,t.props.as),s=r.href,a=r.as;if(function(e){var n=(0,p.parse)(e,!1,!0),t=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(s)){var i=window.location.pathname;s=(0,p.resolve)(i,s),a=a?(0,p.resolve)(i,a):s,e.preventDefault();var c=t.props.scroll;null==c&&(c=a.indexOf("#")<0),f.default[t.props.replace?"replace":"push"](s,a,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return a(n,e),l(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,o=n.as,l=(0,p.resolve)(e,t);return[l,o?(0,p.resolve)(e,o):l]}},{key:"handleRef",value:function(e){var n=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),v[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=b();return t?(t.observe(e),y.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}y.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();f.default.prefetch(n[0],n[1],e).catch((function(e){0})),v[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),o=t.href,l=t.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var r=h.Children.only(n),s={ref:function(n){e.handleRef(n),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(n):"object"===typeof r.ref&&(r.ref.current=n))},onMouseEnter:function(n){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(s.href=l||o),h.default.cloneElement(r,s)}}]),n}(h.Component);n.default=w}},[["JOf4",0,1,2,3]]]);
/*! For license information please see taskpane.js.LICENSE.txt */
!function(){var t={27091:function(t){"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},44944:function(t,e,r){"use strict";t.exports=r.p+"assets/logo-filled.png"},60806:function(t,e,r){"use strict";t.exports=r.p+"1fda685b81e1123773f6.css"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),r.b=document.baseURI||self.location.href,function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:k(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h={};function y(){}function d(){}function v(){}var m={};f(m,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(_([])));w&&w!==n&&o.call(w,c)&&(m=w);var b=v.prototype=y.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function E(e,r){function n(i,a,c,u){var s=p(e[i],e,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==t(l)&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function k(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return d.prototype=v,i(b,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:d,configurable:!0}),d.displayName=f(v,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},x(E.prototype),f(E.prototype,u,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),f(b,s,"Generator"),f(b,c,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(){return i.apply(this,arguments)}function i(){return i=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=n(e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.workbook.worksheets.getActiveWorksheet(),(o=n.tables.add("A1:D1",!0)).name="ExpensesTable",o.getHeaderRowRange().values=[["Date","Merchant","Category","Amount"]],o.rows.add(null,[["1/1/2017","The Phone Company","Communications","120"],["1/2/2017","Northwind Electric Cars","Transportation","142.33"],["1/5/2017","Best For You Organics Company","Groceries","27.9"],["1/10/2017","Coho Vineyard","Restaurant","33"],["1/11/2017","Bellows College","Education","350.1"],["1/15/2017","Trey Research","Other","135"],["1/15/2017","Best For You Organics Company","Groceries","97.88"]]),o.columns.getItemAt(3).getRange().numberFormat=[["€#,##0.00"]],o.getRange().format.autofitColumns(),o.getRange().format.autofitRows(),t.next=10,r.sync();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}function a(t){return c.apply(this,arguments)}function c(){return(c=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}function u(){return s.apply(this,arguments)}function s(){return s=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.workbook.worksheets.getActiveWorksheet(),n.tables.getItem("ExpensesTable").columns.getItem("Category").filter.applyValuesFilter(["Education","Groceries"]),t.next=6,r.sync();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function f(){return l.apply(this,arguments)}function l(){return l=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=n(e().mark((function t(r){var n,o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.workbook.worksheets.getActiveWorksheet(),o=n.tables.getItem("ExpensesTable"),i=[{key:1,ascending:!1}],o.sort.apply(i),t.next=6,r.sync();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return h=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=n(e().mark((function t(r){var n,o,i,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.workbook.worksheets.getActiveWorksheet(),o=n.tables.getItem("ExpensesTable"),i=o.getDataBodyRange(),(a=n.charts.add("ColumnClustered",i,"Auto")).setPosition("A15","F30"),a.title.text="Expenses",a.legend.position="Right",a.legend.format.fill.setSolidColor("white"),a.dataLabels.format.font.size=15,a.dataLabels.format.font.color="black",a.series.getItemAt(0).name="Value in €",t.next=13,r.sync();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function y(){return d.apply(this,arguments)}function d(){return d=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Excel.run(function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.workbook.worksheets.getActiveWorksheet().freezePanes.freezeRows(1),t.next=4,r.sync();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}Office.onReady((function(t){t.host===Office.HostType.Excel&&(document.getElementById("create-table").onclick=function(){return a(o)},document.getElementById("filter-table").onclick=function(){return a(u)},document.getElementById("sort-table").onclick=function(){return a(f)},document.getElementById("create-chart").onclick=function(){return a(p)},document.getElementById("freeze-header").onclick=function(){return a(y)},document.getElementById("open-dialog").onclick=m,document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex")}));var v=null;function m(){Office.context.ui.displayDialogAsync("https://localhost:3000/popup.html",{height:45,width:55},(function(t){(v=t.value).addEventHandler(Office.EventType.DialogMessageReceived,g)}))}function g(t){document.getElementById("user-name").innerHTML=t.message,v.close()}}(),function(){"use strict";var t=r(27091),e=r.n(t),n=new URL(r(60806),r.b),o=new URL(r(44944),r.b);e()(n),e()(o)}()}();
//# sourceMappingURL=taskpane.js.map
webpackJsonp([12],{SCXY:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r("Xxa5"),i=n(o),a=r("exGp"),c=n(a);e.default={data:function(){return{params:{orderNumber:this.$route.params.number},order:{},reciver:{},logistics:{},orderStatusList:[],tableData:[],loading2:!0}},mounted:function(){this.$store.dispatch("setTitle","订单详情"),this.fetchOrderDetail()},methods:{fetchOrderDetail:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(i.default.mark(function t(){var e,r,n;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,r=e.params,t.next=4,e.http.get(e.api.orderManageApi.orderDetail,r);case 4:n=t.sent,n&&n.data&&200===n.data.code?(e.order=n.data.data.order,e.reciver=n.data.data.reciver,e.logistics=n.data.data.logistics,e.orderStatusList=n.data.data.orderStatusList,e.loading2=!1):e.loading2=!1;case 6:case"end":return t.stop()}},t,this)}));return t}(),createDateTime:function(t){if(t&&t.createDateTime)return this.dataFrm(t.createDateTime)},dataFrm:function(t){return this.moment(t).format("YYYY-MM-DD HH:mm:ss")}}}},SiF8:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orderDetail-wrap"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/order-list"}}},[t._v("订单管理")]),t._v(" "),r("el-breadcrumb-item",[t._v("订单详情")])],1),t._v(" "),t.reciver?r("el-row",{staticClass:"rowTop"},[r("el-col",{attrs:{span:4}},[r("span",{staticClass:"cell"},[t._v("订单号：")]),r("label",[t._v(t._s(t.order.orderNumber))])]),t._v(" "),r("el-col",{attrs:{span:2}},[r("span",[t._v("客户：")]),r("label",[t._v(t._s(t.reciver.reveiveUserName))])]),t._v(" "),r("el-col",{attrs:{span:3}},[r("span",[t._v("联系电话：")]),r("label",[t._v(t._s(t.reciver.mobilePhone))])]),t._v(" "),r("el-col",{attrs:{span:6}},[r("span",[t._v("配送地址：")]),r("label",[t._v(t._s(t.reciver.provinceName)+t._s(t.reciver.cityName)+t._s(t.reciver.districtName)+t._s(t.reciver.detailAddress))])]),t._v(" "),r("el-col",{attrs:{span:2}},[r("span",[t._v("快递公司：")]),null!==t.logistics?r("label",[t._v(t._s(t.logistics.expressName))]):t._e()]),t._v(" "),r("el-col",{attrs:{span:4}},[r("span",[t._v("快递单号：")]),null!==t.logistics?r("label",[t._v(t._s(t.logistics.expressNo))]):t._e()])],1):t._e(),t._v(" "),r("el-steps",t._l(t.orderStatusList,function(e,n){return 80!==e.dictCodeValue&&21!==e.dictCodeValue?r("el-step",{class:{isActive:e.flow},attrs:{title:e.dictCodeName,description:t.createDateTime(e.orderHistory)}}):t._e()})),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],attrs:{data:t.order.orderItems,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",border:"",stripe:"","min-width":"100%"}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"70"}}),t._v(" "),r("el-table-column",{staticClass:"titleList",attrs:{prop:"productTitle",label:"名称","min-width":"12%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"productModelFormatName",label:"规格","min-width":"15%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"unitPrice",label:"单价","min-width":"6%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"num",label:"数量","min-width":"6%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"totalPrice",label:"小计","min-width":"7%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"categoryModelFormatNumber",label:"商品编号","min-width":"5%"}})],1)],1)},o=[]},SldL:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new h(n||[]);return a._invoke=l(t,r,c),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(r,o,i,a){var c=n(t[r],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&g.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){s.value=t,i(s)},a)}a(c.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function l(t,e,r){var o=N;return function(i,a){if(o===j)throw new Error("Generator is already running");if(o===F){if("throw"===i)throw a;return v()}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=u(c,r);if(s){if(s===S)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===N)throw o=F,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=j;var l=n(t,e,r);if("normal"===l.type){if(o=r.done?F:O,l.arg===S)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=F,r.method="throw",r.arg=l.arg)}}}function u(t,e){var r=t.iterator[e.method];if(r===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,u(t,e),"throw"===e.method))return S;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,S;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,S):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,S)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function p(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(g.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:m,done:!0}}var m,y=Object.prototype,g=y.hasOwnProperty,_="function"==typeof Symbol?Symbol:{},b=_.iterator||"@@iterator",w=_.asyncIterator||"@@asyncIterator",x=_.toStringTag||"@@toStringTag",L="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(L&&(t.exports=E));E=e.regeneratorRuntime=L?t.exports:{},E.wrap=r;var N="suspendedStart",O="suspendedYield",j="executing",F="completed",S={},k={};k[b]=function(){return this};var P=Object.getPrototypeOf,T=P&&P(P(p([])));T&&T!==y&&g.call(T,b)&&(k=T);var D=a.prototype=o.prototype=Object.create(k);i.prototype=D.constructor=a,a.constructor=i,a[x]=i.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(D),t},E.awrap=function(t){return{__await:t}},c(s.prototype),s.prototype[w]=function(){return this},E.AsyncIterator=s,E.async=function(t,e,n,o){var i=new s(r(t,e,n,o));return E.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(D),D[x]="Generator",D[b]=function(){return this},D.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},E.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&g.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,S):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),S},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),d(r),S}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;d(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=m),S}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n=r("//Fk"),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var c=e[i](a),s=c.value}catch(t){return void r(t)}if(!c.done)return o.default.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}return n("next")})}}},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},kqpi:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("SCXY"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,function(){return n[t]})}(i);var a=r("SiF8"),c=r("qs7J"),s=Object(c.a)(o.a,a.a,a.b,!1,null,null,null);e.default=s.exports}});
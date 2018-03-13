webpackJsonp([36],{B2DW:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"categorySet_wrap"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("商品管理")]),t._v(" "),r("el-breadcrumb-item",[t._v("类目管理")])],1),t._v(" "),r("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleTabClick},model:{value:t.activeName2,callback:function(e){t.activeName2=e},expression:"activeName2"}},[r("el-tab-pane",{attrs:{label:"产品品类",name:"first"}},[r("div",{staticClass:"category_wrap"},[r("el-form",{ref:"form",staticClass:"demo-dynamic",attrs:{model:t.form,"label-width":"0px"}},["first"===t.activeName2?r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",border:"",stripe:"",data:t.form.tableData}},[r("el-table-column",{attrs:{label:"类目名称","min-width":"50%"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.update?t._e():r("span",[t._v(t._s(e.row.name))]),t._v(" "),e.row.update?r("el-form-item",{key:e.row.key,attrs:{prop:"tableData."+e.$index+".name",rules:{required:!0,message:"类目名称不能为空！",trigger:"change"}}},[r("el-input",{model:{value:e.row.name,callback:function(r){t.$set(e.row,"name",r)},expression:"scope.row.name"}})],1):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"类目代码","min-width":"30%"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.update?t._e():r("span",[t._v(t._s(e.row.code))]),t._v(" "),e.row.update?r("el-form-item",{key:e.row.key,attrs:{prop:"tableData."+e.$index+".code",rules:{required:!0,message:"类目代码不能为空！",trigger:"change"}}},[e.row.update?r("el-input",{model:{value:e.row.code,callback:function(r){t.$set(e.row,"code",r)},expression:"scope.row.code"}}):t._e()],1):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{"min-width":"20%",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.update?t._e():r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){t.handleUpdateClick(e.row)}}},[t._v("\n                  编辑\n                ")]),t._v(" "),e.row.update?r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){t.submitForm("form",e.row)}}},[t._v("\n                  保存\n                ")]):t._e(),t._v(" "),e.row.update?r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){t.handleRestClick(e.row)}}},[t._v("\n                  取消\n                ")]):t._e()]}}])})],1):t._e()],1)],1)]),t._v(" "),r("el-tab-pane",{attrs:{label:"产品型号",name:"second"}},[r("div",{staticClass:"category_wrap"},["second"===t.activeName2?r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",border:"",stripe:"",data:t.form.tableData}},[r("el-table-column",{attrs:{prop:"name",label:"产品名称","min-width":"30%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"产品品类","min-width":"30%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"code",label:"产品型号","min-width":"30%"}}),t._v(" "),r("el-table-column",{attrs:{"min-width":"10%",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("router-link",{staticClass:"editStyle",attrs:{to:{name:"manage-insert",params:{id:e.row.productId}}}},[t._v("\n                详情\n              ")])]}}])})],1):t._e()],1)])],1),t._v(" "),r("div",{staticClass:"pagination-wrap"},[r("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total3},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1)},a=[]},OIw0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r("Xxa5"),o=n(a),i=r("exGp"),c=n(i);e.default={data:function(){return{activeName2:"first",loading2:!0,form:{tableData:[]},olderForm:[],update:!1,total3:10,pageNo:1,status:1,changeStatus:!1}},computed:{},mounted:function(){this.fetchProductData()},watch:{form:{deep:!0,handler:function(t,e){this.isEqual.o2o(t,this.olderForm)?this.changeStatus=!1:this.changeStatus=!0}}},methods:{submitForm:function(t,e){var r=this;this.$refs[t].validate(function(t){if(!t)return!1;r.changeStatus?r.fetchUpdateProductData(e):r.$message.warning("您没有任何更新操作！")})},fetchProductData:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(o.default.mark(function t(){var e,r,n,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,e.loading2=!0,r={pageNo:e.pageNo,status:e.status},t.next=5,e.http.get(this.api.commodityManageApi.base,r);case 5:n=t.sent,n&&n.data&&200===n.data.code&&(e.loading2=!1,a=n.data.data.pager.list,a.forEach(function(t,r){t.update=e.update}),e.form.tableData=a,e.total3=n.data.data.pager.total,e.olderForm=e.isEqual.deepCopy(e.form));case 7:case"end":return t.stop()}},t,this)}));return t}(),fetchUpdateProductData:function(){function t(t){return e.apply(this,arguments)}var e=(0,c.default)(o.default.mark(function t(e){var r,n,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this,n={name:e.name,code:e.code,userId:r.$store.getters.getUserList.id,id:e.id},t.next=4,r.http.post(this.api.commodityManageApi.insertCategory,n);case 4:a=t.sent,a&&a.data&&200===a.data.code&&(e.update=!1,this.$message.success("更新成功！"));case 6:case"end":return t.stop()}},t,this)}));return t}(),fetchModalListData:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(o.default.mark(function t(){var e,r,n,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,e.loading2=!0,r={pageNo:e.pageNo,status:e.status},t.next=5,e.http.get(this.api.commodityManageApi.modalList,r);case 5:n=t.sent,n&&n.data&&200===n.data.code&&(e.loading2=!1,a=n.data.data.pager.list,a.forEach(function(t,r){t.update=e.update}),e.form.tableData=a,e.total3=n.data.data.pager.total);case 7:case"end":return t.stop()}},t,this)}));return t}(),handleUpdateClick:function(t){t.update=!0},handleRestClick:function(t){t.update=!1},handleSizeChange:function(t){},handleCurrentChange:function(t){this.pageNo=t,"first"===this.activeName2?this.fetchProductData():this.fetchModalListData()},handleTabClick:function(t){this.pageNo=1,this.total3=10,"first"===t.name?this.fetchProductData():this.fetchModalListData()}}}},SldL:function(t,e){!function(e){"use strict";function r(t,e,r,n){var o=e&&e.prototype instanceof a?e:a,i=Object.create(o.prototype),c=new h(n||[]);return i._invoke=s(t,r,c),i}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function a(){}function o(){}function i(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,a,o,i){var c=n(t[r],t,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&y.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(s).then(function(t){u.value=t,o(u)},i)}i(c.arg)}function r(t,r){function n(){return new Promise(function(n,a){e(t,r,n,a)})}return a=a?a.then(n,n):n()}var a;this._invoke=r}function s(t,e,r){var a=E;return function(o,i){if(a===S)throw new Error("Generator is already running");if(a===C){if("throw"===o)throw i;return m()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=l(c,r);if(u){if(u===O)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===E)throw a=C,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=S;var s=n(t,e,r);if("normal"===s.type){if(a=r.done?C:N,s.arg===O)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a=C,r.method="throw",r.arg=s.arg)}}}function l(t,e){var r=t.iterator[e.method];if(r===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,l(t,e),"throw"===e.method))return O;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var a=n(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,O;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,O):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,O)}function d(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(d,this),this.reset(!0)}function p(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=g,e.done=!0,e};return n.next=n}}return{next:m}}function m(){return{value:g,done:!0}}var g,v=Object.prototype,y=v.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},b=w.iterator||"@@iterator",_=w.asyncIterator||"@@asyncIterator",x=w.toStringTag||"@@toStringTag",k="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(k&&(t.exports=L));L=e.regeneratorRuntime=k?t.exports:{},L.wrap=r;var E="suspendedStart",N="suspendedYield",S="executing",C="completed",O={},D={};D[b]=function(){return this};var j=Object.getPrototypeOf,P=j&&j(j(p([])));P&&P!==v&&y.call(P,b)&&(D=P);var F=i.prototype=a.prototype=Object.create(D);o.prototype=F.constructor=i,i.constructor=o,i[x]=o.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(F),t},L.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[_]=function(){return this},L.AsyncIterator=u,L.async=function(t,e,n,a){var o=new u(r(t,e,n,a));return L.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},c(F),F[x]="Generator",F[b]=function(){return this},F.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,n&&(r.method="next",r.arg=g),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var i=y.call(a,"catchLoc"),c=y.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,O):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),O},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),f(r),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;f(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=g),O}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n=r("//Fk"),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,r){function n(o,i){try{var c=e[o](i),u=c.value}catch(t){return void r(t)}if(!c.done)return a.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},nrfq:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("OIw0"),a=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);var i=r("B2DW"),c=r("qs7J"),u=Object(c.a)(a.a,i.a,i.b,!1,null,null,null);e.default=u.exports}});
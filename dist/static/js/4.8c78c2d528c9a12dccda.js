webpackJsonp([4],{"0rY1":function(e,t,r){t=e.exports=r("XLS9")(!1),t.push([e.i,"",""])},"1QPC":function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"first-step-wrap"},[r("h3",[e._v("产品品类")]),e._v(" "),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{staticClass:"choose",attrs:{label:""}},[r("el-radio",{attrs:{label:"1",disabled:e.$route.params.id>0},on:{change:function(t){e.resetFromValidate("ruleForm")}},model:{value:e.ruleForm.chooseCategory,callback:function(t){e.$set(e.ruleForm,"chooseCategory",t)},expression:"ruleForm.chooseCategory"}},[e._v("现有品类")]),e._v(" "),r("el-radio",{attrs:{label:"2",disabled:e.$route.params.id>0},on:{change:function(t){e.resetFromValidate("ruleForm")}},model:{value:e.ruleForm.chooseCategory,callback:function(t){e.$set(e.ruleForm,"chooseCategory",t)},expression:"ruleForm.chooseCategory"}},[e._v("新增品类")])],1),e._v(" "),"1"===e.ruleForm.chooseCategory?r("el-form-item",{attrs:{label:"产品品类",prop:"state4"}},[r("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"选择产品品类"},on:{select:e.handleSelect},model:{value:e.ruleForm.state4,callback:function(t){e.$set(e.ruleForm,"state4",t)},expression:"ruleForm.state4"}})],1):e._e(),e._v(" "),"2"===e.ruleForm.chooseCategory?r("el-form-item",{staticClass:"form-inline",attrs:{label:"新增品类",prop:"categoryName"}},[r("el-input",{staticClass:"w_percent22",attrs:{placeholder:"类目名称"},model:{value:e.ruleForm.categoryName,callback:function(t){e.$set(e.ruleForm,"categoryName",t)},expression:"ruleForm.categoryName"}})],1):e._e(),e._v(" "),"2"===e.ruleForm.chooseCategory?r("el-form-item",{staticClass:"form-inline mar_0",attrs:{prop:"categoryCode"}},[r("el-input",{staticClass:"w_percent22",attrs:{placeholder:"类目代码"},model:{value:e.ruleForm.categoryCode,callback:function(t){e.$set(e.ruleForm,"categoryCode",t)},expression:"ruleForm.categoryCode"}}),r("span",{staticClass:"prompt"},[e._v("注：类目代码：例如：AB，即两位大写英文字母")])],1):e._e(),e._v(" "),r("h3",[e._v("产品型号")]),e._v(" "),r("el-form-item",{staticClass:"choose",attrs:{label:""}},[r("el-radio",{attrs:{label:"2",disabled:e.$route.params.id>0},on:{change:function(t){e.resetFromValidate("ruleForm")}},model:{value:e.ruleForm.chooseModelType,callback:function(t){e.$set(e.ruleForm,"chooseModelType",t)},expression:"ruleForm.chooseModelType"}},[e._v("新增型号")])],1),e._v(" "),"1"===e.ruleForm.chooseModelType?r("el-form-item",{attrs:{label:"选择型号",prop:"state5"}},[r("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchAsyncModel,placeholder:"产品型号"},on:{select:e.handleSelectModel},model:{value:e.ruleForm.state5,callback:function(t){e.$set(e.ruleForm,"state5",t)},expression:"ruleForm.state5"}})],1):e._e(),e._v(" "),"2"===e.ruleForm.chooseModelType?r("el-form-item",{attrs:{label:"商品名称",prop:"productName"}},[r("el-input",{attrs:{placeholder:"输入商品名称"},model:{value:e.ruleForm.productName,callback:function(t){e.$set(e.ruleForm,"productName",t)},expression:"ruleForm.productName"}})],1):e._e(),e._v(" "),"2"===e.ruleForm.chooseModelType?r("el-form-item",{attrs:{label:"商品型号",prop:"modelCode"}},[r("el-input",{staticClass:"modelCode",attrs:{placeholder:"输入型号编码"},model:{value:e.ruleForm.modelCode,callback:function(t){e.$set(e.ruleForm,"modelCode",t)},expression:"ruleForm.modelCode"}}),r("span",{staticClass:"prompt"},[e._v("注：型号编码：例如：AB2/A12，即首字母大写，第二位填大写字母或者数字，第三位填数字")])],1):e._e(),e._v(" "),r("h3",[e._v("规格信息")]),e._v(" "),r("el-table",{attrs:{data:e.ruleForm.properties,width:"100%"}},[r("el-table-column",{attrs:{label:"规格名称",width:"155"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{staticClass:"mar_l_0"},[r("el-input",{staticClass:"insertListText",attrs:{placeholder:"名称"},model:{value:t.row.propertyName,callback:function(r){e.$set(t.row,"propertyName",r)},expression:"scope.row.propertyName"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"规格列表","min-width":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.propertiesValues,function(o,a){return r("div",{staticClass:"items-wrap"},[t.$index>0?r("i",{staticClass:"el-icon-remove delete-wrap",on:{click:function(r){e.deleteListWrapBtn(t.$index)}}}):e._e(),e._v(" "),r("div",{staticClass:"list-wrap"},[a>0?r("i",{staticClass:"el-icon-remove delete-list",on:{click:function(r){e.deleteListBtn(t.$index,a)}}}):e._e(),e._v(" "),r("el-form-item",{staticClass:"mar_l_0",attrs:{prop:"propertyListName"}},[r("el-input",{staticClass:"insertListText",attrs:{placeholder:"类别"},model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"item.value"}})],1)],1),e._v(" "),r("div",{on:{click:function(r){e.uploadClickEvent(t.$index,a)}}},[t.row.showUploadradio?r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/mall/upload","on-success":e.handleAvatarSuccess,"show-file-list":!1}},[o.imageUrl?r("img",{staticClass:"avatar",attrs:{src:o.imageUrl}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):e._e()],1)])}),e._v(" "),r("div",{staticClass:"insert-wrap"},[r("el-button",{staticClass:"inserListtBtn",attrs:{type:"primary"},on:{click:function(r){e.insertClickEvent(t.$index,t.row)}}},[e._v("+")]),e._v(" "),r("el-checkbox",{model:{value:t.row.showUploadradio,callback:function(r){e.$set(t.row,"showUploadradio",r)},expression:"scope.row.showUploadradio"}},[e._v("配图")])],1)]}}])})],1),e._v(" "),r("div",{staticClass:"insertSpecBtn"},[r("el-button",{attrs:{type:"primary"},on:{click:e.insertSpecEvent}},[e._v("新增规格")])],1),e._v(" "),r("el-form-item",{staticClass:"first-step-btns"},[r("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("下一步")])],1)],1)],1)},a=[]},Jyq2:function(e,t,r){var o=r("0rY1");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=r("A/DJ").default;a("4231ccd5",o,!0,{})},MdqT:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r("mvHQ"),n=o(a),i=r("Xxa5"),s=o(i),l=r("exGp"),c=o(l);t.default={data:function(){return{radio:"1",imageUrl:"",ruleForm:{chooseCategory:"1",chooseModelType:"2",chooseIntelligent:"1",categoryName:"",categoryCode:"",state4:"",state5:"",productName:"",modelCode:"",properties:[{propertiesValues:[{value:"",imageUrl:"",id:null}],showUploadradio:!1,propertyName:"",id:null}]},rules:{state4:[{required:!0,message:"请选择产品品类",trigger:"change"}],categoryName:[{required:!0,message:"请填写类目名称",trigger:"change"}],categoryCode:[{required:!0,message:"请填写类目代码",trigger:"change"}],state5:[{required:!0,message:"请选择产品型号",trigger:"change"}],productName:[{required:!0,message:"请填写商品名称",trigger:"change"}],modelCode:[{required:!0,message:"请填写型号编码",trigger:"change"}]},properties:[{propertiesValues:[{value:"",imageUrl:""}],showUploadradio:!1,propertyName:""}],file:"",key:"",index:"",productLists:[],restaurants:[],modelLists:[],state4:"",state5:"",timeout:null,categoryData:{},modelData:{},ids:{},disabled:!1,id:null,categoryModelId:null,intelligent:null,intelligentType:null,changeStatus:!1,olderData:{},oldProperties:[],intelligentArray:[],oid:null}},mounted:function(){var e=this;e.fetchBaseAllData(),e.$route.params.id>0&&(e.oid=e.$route.params.id),e.$store.getters.getStep1Backfill&&(e.oid=e.$store.getters.getIds.productId),e.oid&&e.fetchEditStep1Data(e.oid)},watch:{ruleForm:{deep:!0,handler:function(e,t){this.isEqual.o2o(e,this.olderData)?this.changeStatus=!1:this.changeStatus=!0}}},methods:{fetchBaseAllData:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(s.default.mark(function e(){var t,r,o,a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,r={},e.next=4,t.http.get(this.api.commodityManageApi.baseAll,r);case 4:o=e.sent,o&&o.data&&200===o.data.code&&(a=o.data.data.list,a.forEach(function(e){t.restaurants.push({value:e.name,code:e.code,id:e.id})}));case 6:case"end":return e.stop()}},e,this)}));return e}(),fetchEditStep1Data:function(){function e(e){return t.apply(this,arguments)}var t=(0,c.default)(s.default.mark(function e(t){var r,o,a,n,i,l;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,r.disabled=!0,o={level:1,id:t},e.next=5,r.http.get(this.api.commodityManageApi.edit,o);case 5:a=e.sent,a&&a.data&&200===a.data.code&&(n=a.data.data.product,i=a.data.data.properties,r.id=n.id,r.categoryModelId=n.categoryModelId,r.ruleForm.state4=n.basicCategory.name,r.categoryData={id:n.categoryId,code:n.basicCategory.code,value:n.basicCategory.name},r.ruleForm.productName=n.basicCategoryModel.name,r.ruleForm.modelCode=n.categoryModelCode,r.ruleForm.properties.pop(),i.forEach(function(e,t){var o=e.propertiesValues,a=[],n=!1;n=1!==e.displayFormat,o.forEach(function(e,t){a.push({value:e.value,imageUrl:e.imageUrl,id:e.id})}),r.ruleForm.properties.push({propertiesValues:a,showUploadradio:n,propertyName:e.propertyName,id:e.id})}),l={productId:n.id,modelId:n.categoryModelId},r.$store.dispatch("setIds",l),r.olderData=r.isEqual.deepCopy(r.ruleForm));case 7:case"end":return e.stop()}},e,this)}));return e}(),submitForm:function(e){this.formLoad(e)},formLoad:function(e){var t=this;t.$refs[e].validate(function(e){if(!e)return!1;t.checked=!1,t.changeStatus?t.postProductUpdateData():t.changeSteps()})},postProductUpdateData:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(s.default.mark(function e(){var t,r,o,a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,r={},r.id=t.id,r.categoryModelId=t.categoryModelId,"1"===t.ruleForm.chooseCategory?(r.categoryCreate=!1,r.categoryId=t.categoryData.id,r.categoryCode=t.categoryData.code,r.categoryName=t.categoryData.value):(r.categoryCreate=!0,r.categoryId="",r.categoryCode=t.ruleForm.categoryCode,r.categoryName=t.ruleForm.categoryName),r.categoryModelCode=t.ruleForm.modelCode,r.categoryModelName=t.ruleForm.productName,t.intelligentArray=t.ruleForm.properties.slice(),r.properties=(0,n.default)(t.intelligentArray),r.level=1,r.userId=t.$store.getters.getUserList.id,e.next=13,t.http.post(this.api.commodityManageApi.productUpdate,r);case 13:o=e.sent,o&&o.data&&200===o.data.code&&(a={productId:o.data.data.productId,modelId:o.data.data.modelId},t.id=o.data.data.productId,t.categoryModelId=o.data.data.modelId,t.$store.dispatch("setIds",a),this.$route.params.id>0?this.$message.success("更新成功！"):this.$message.success("新增成功！"),t.changeSteps());case 15:case"end":return e.stop()}},e,this)}));return e}(),changeSteps:function(){var e=this,t={isStep:!1,isStep1:!0};e.$store.dispatch("setActive",1),e.$store.dispatch("setSteps",t)},uploadClickEvent:function(e,t){this.key=e,this.index=t},handleAvatarSuccess:function(e,t){this.ruleForm.properties[this.key].propertiesValues[this.index].imageUrl=e.data.url},insertClickEvent:function(e,t){this.ruleForm.properties[e].propertiesValues.push({value:"",imageUrl:"",id:null})},deleteListBtn:function(e,t){this.ruleForm.properties[e].propertiesValues.length>0&&this.ruleForm.properties[e].propertiesValues.splice(t,1)},deleteListWrapBtn:function(e){this.ruleForm.properties.length>0&&this.ruleForm.properties.splice(e,1)},insertSpecEvent:function(){this.ruleForm.properties.push({propertiesValues:[{value:"",imageUrl:"",id:null}],propertyName:"",showUploadradio:"",id:null})},resetFromValidate:function(e){this.$refs[e].resetFields()},resetForm:function(e){this.$refs[e].resetFields()},querySearchAsync:function(e,t){var r=this.restaurants;this.queryFunc(r,e,t)},querySearchAsyncModel:function(e,t){var r=this.modelLists;this.queryFunc(r,e,t)},queryFunc:function(e,t,r){var o=t?e.filter(this.createStateFilter(t)):e;clearTimeout(this.timeout),this.timeout=setTimeout(function(){r(o)},1e3*Math.random())},createStateFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e){this.categoryData=e},handleSelectModel:function(e){this.modelData=e}}}},SldL:function(e,t){!function(t){"use strict";function r(e,t,r,o){var n=t&&t.prototype instanceof a?t:a,i=Object.create(n.prototype),s=new h(o||[]);return i._invoke=c(e,r,s),i}function o(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function a(){}function n(){}function i(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function l(e){function t(r,a,n,i){var s=o(e[r],e,a);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&v.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,n,i)},function(e){t("throw",e,n,i)}):Promise.resolve(c).then(function(e){l.value=e,n(l)},i)}i(s.arg)}function r(e,r){function o(){return new Promise(function(o,a){t(e,r,o,a)})}return a=a?a.then(o,o):o()}var a;this._invoke=r}function c(e,t,r){var a=L;return function(n,i){if(a===S)throw new Error("Generator is already running");if(a===E){if("throw"===n)throw i;return m()}for(r.method=n,r.arg=i;;){var s=r.delegate;if(s){var l=u(s,r);if(l){if(l===N)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===L)throw a=E,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=S;var c=o(e,t,r);if("normal"===c.type){if(a=r.done?E:k,c.arg===N)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=E,r.method="throw",r.arg=c.arg)}}}function u(e,t){var r=e.iterator[t.method];if(r===y){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=y,u(e,t),"throw"===t.method))return N;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return N}var a=o(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,N;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=y),t.delegate=null,N):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,N)}function d(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function h(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(d,this),this.reset(!0)}function f(e){if(e){var t=e[w];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(v.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=y,t.done=!0,t};return o.next=o}}return{next:m}}function m(){return{value:y,done:!0}}var y,g=Object.prototype,v=g.hasOwnProperty,F="function"==typeof Symbol?Symbol:{},w=F.iterator||"@@iterator",_=F.asyncIterator||"@@asyncIterator",C=F.toStringTag||"@@toStringTag",b="object"==typeof e,x=t.regeneratorRuntime;if(x)return void(b&&(e.exports=x));x=t.regeneratorRuntime=b?e.exports:{},x.wrap=r;var L="suspendedStart",k="suspendedYield",S="executing",E="completed",N={},$={};$[w]=function(){return this};var M=Object.getPrototypeOf,I=M&&M(M(f([])));I&&I!==g&&v.call(I,w)&&($=I);var U=i.prototype=a.prototype=Object.create($);n.prototype=U.constructor=i,i.constructor=n,i[C]=n.displayName="GeneratorFunction",x.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===n||"GeneratorFunction"===(t.displayName||t.name))},x.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,C in e||(e[C]="GeneratorFunction")),e.prototype=Object.create(U),e},x.awrap=function(e){return{__await:e}},s(l.prototype),l.prototype[_]=function(){return this},x.AsyncIterator=l,x.async=function(e,t,o,a){var n=new l(r(e,t,o,a));return x.isGeneratorFunction(t)?n:n.next().then(function(e){return e.done?e.value:n.next()})},s(U),U[C]="Generator",U[w]=function(){return this},U.toString=function(){return"[object Generator]"},x.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},x.values=f,h.prototype={constructor:h,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=y)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,o){return n.type="throw",n.arg=e,r.next=t,o&&(r.method="next",r.arg=y),!!o}if(this.done)throw e;for(var r=this,o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],n=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var i=v.call(a,"catchLoc"),s=v.call(a,"finallyLoc");if(i&&s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&v.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var n=a?a.completion:{};return n.type=e,n.arg=t,a?(this.method="next",this.next=a.finallyLoc,N):this.complete(n)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),N},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),p(r),N}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var a=o.arg;p(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:f(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=y),N}}}(function(){return this}()||Function("return this")())},UupP:function(e,t,r){"use strict";function o(e){r("Jyq2")}Object.defineProperty(t,"__esModule",{value:!0});var a=r("MdqT"),n=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,function(){return a[e]})}(i);var s=r("1QPC"),l=r("qs7J"),c=o,u=Object(l.a)(n.a,s.a,s.b,!1,c,null,null);t.default=u.exports},Xxa5:function(e,t,r){e.exports=r("jyFz")},exGp:function(e,t,r){"use strict";t.__esModule=!0;var o=r("//Fk"),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e){return function(){var t=e.apply(this,arguments);return new a.default(function(e,r){function o(n,i){try{var s=t[n](i),l=s.value}catch(e){return void r(e)}if(!s.done)return a.default.resolve(l).then(function(e){o("next",e)},function(e){o("throw",e)});e(l)}return o("next")})}}},jyFz:function(e,t,r){var o=function(){return this}()||Function("return this")(),a=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,n=a&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,e.exports=r("SldL"),a)o.regeneratorRuntime=n;else try{delete o.regeneratorRuntime}catch(e){o.regeneratorRuntime=void 0}}});
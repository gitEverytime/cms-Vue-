webpackJsonp([6],{"8Wk2":function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r("mvHQ"),a=n(o),i=r("Xxa5"),l=n(i),u=r("exGp"),s=n(u);e.default={data:function(){var t=this;return{activeName:"first",queryName:null,pageNo:1,tableData3:[],loading2:!0,total:null,options:[],dialogFormVisible:!1,dialogFormVisible1:!1,form:{loginName:"",userPwd:"",confirmPwd:"",userName:"",phone:"",groupName:[]},rules:{groupName:[{type:"array",required:!0,message:"请至少选择一个部门",trigger:"change"}],loginName:[{required:!0,message:"请输入账号",trigger:"change"}],userPwd:[{validator:function(e,r,n){""===r?n(new Error("请输入密码")):(""!==t.form.confirmPwd&&t.$refs.form.validateField("confirmPwd"),n())},trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPwd:[{validator:function(e,r,n){var o=t;""===r?n(new Error("请再次输入密码")):String(r)!==o.form.userPwd?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],userName:[{required:!0,message:"请输入姓名",trigger:"change"}],phone:[{validator:function(t,e,r){var n=/^1[3|4|5|7|8][0-9]\d{8}$/;""===e?r(new Error("请输入手机号")):n.test(e)?r():r(new Error("手机号码格式不正确"))},trigger:"blur"}]},formLabelWidth:"120px",title:"修改员工",value10:"",groups:[],confirmPwd:"",id:""}},mounted:function(){this.$store.dispatch("setTitle","员工管理"),this.fetchAdminListData()},methods:{fetchAdminListData:function(){function t(){return e.apply(this,arguments)}var e=(0,s.default)(l.default.mark(function t(){var e,r,n;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,r={queryName:e.queryName,pageNo:e.pageNo},t.next=4,e.http.get(this.api.employeeManageApi.adminList,r);case 4:n=t.sent,n&&n.data&&200===n.data.code?(e.tableData3=n.data.data.list,e.total=n.data.data.total,e.loading2=!1):e.loading2=!1;case 6:case"end":return t.stop()}},t,this)}));return t}(),fetchAdminLoginNameData:function(){function t(t){return e.apply(this,arguments)}var e=(0,s.default)(l.default.mark(function t(e){var r,n,o;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this,n={loginName:e},t.next=4,r.http.get(this.api.employeeManageApi.adminLoginName,n);case 4:o=t.sent,o&&o.data&&200===o.data.code&&(r.form=o.data.data.admin,r.groups=o.data.data.groups);case 6:case"end":return t.stop()}},t,this)}));return t}(),updateAdmin:function(t){var e=this;e.dialogFormVisible=!0,e.id=t.id,e.fetchAdminLoginNameData(t.loginName)},updateAdminPoss:function(t){var e=this;e.dialogFormVisible1=!0,e.form.userPwd="",e.form.confirmPwd="",e.id=t.id},submitForm:function(t){var e=this,r=this;this.$refs[t].validate(function(t){if(!t)return!1;e.postAdminSaveData({id:r.id,loginName:r.form.loginName,userName:r.form.userName,phone:r.form.phone,groupName:(0,a.default)(r.form.groupName)})})},submitForm1:function(t){var e=this,r=this;this.$refs[t].validate(function(t){if(!t)return!1;e.postAdminSaveData({id:r.id,userPwd:r.form.userPwd})})},postAdminSaveData:function(){function t(t){return e.apply(this,arguments)}var e=(0,s.default)(l.default.mark(function t(e){var r,n,o,a;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.$loading({lock:!0,text:"保存中，请稍后...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.5)"}),n=this,o=e,t.next=5,n.http.post(this.api.employeeManageApi.adminSave,o);case 5:a=t.sent,a&&a.data&&200===a.data.code?(n.$message.success("修改单个员工信息成功！"),n.fetchAdminListData(),n.dialogFormVisible=!1,n.dialogFormVisible1=!1,r.close()):r.close();case 7:case"end":return t.stop()}},t,this)}));return t}(),postAdminDeleteData:function(){function t(t){return e.apply(this,arguments)}var e=(0,s.default)(l.default.mark(function t(e){var r,n,o;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this,n={loginName:e},t.next=4,r.http.post(this.api.employeeManageApi.adminDelete,n);case 4:o=t.sent,o&&o.data&&200===o.data.code&&(r.$message.success("删除员工成功！"),r.fetchAdminListData());case 6:case"end":return t.stop()}},t,this)}));return t}(),handleCurrentChange:function(t){this.pageNo=t,this.fetchAdminListData()},handleClick:function(){}}}},MZha:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("8Wk2"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,function(){return n[t]})}(a);var i=r("Y4mU"),l=r("qs7J"),u=Object(l.a)(o.a,i.a,i.b,!1,null,null,null);e.default=u.exports},SldL:function(t,e){!function(e){"use strict";function r(t,e,r,n){var a=e&&e.prototype instanceof o?e:o,i=Object.create(a.prototype),l=new d(n||[]);return i._invoke=s(t,r,l),i}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function a(){}function i(){}function l(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,o,a,i){var l=n(t[r],t,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&y.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(s).then(function(t){u.value=t,a(u)},i)}i(l.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(t,e,r){var o=k;return function(a,i){if(o===E)throw new Error("Generator is already running");if(o===F){if("throw"===a)throw i;return h()}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var u=c(l,r);if(u){if(u===A)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===k)throw o=F,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=E;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?F:P,s.arg===A)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=F,r.method="throw",r.arg=s.arg)}}}function c(t,e){var r=t.iterator[e.method];if(r===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,c(t,e),"throw"===e.method))return A;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return A}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,A;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,A):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,A)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function m(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function p(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=g,e.done=!0,e};return n.next=n}}return{next:h}}function h(){return{value:g,done:!0}}var g,v=Object.prototype,y=v.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",N=b.toStringTag||"@@toStringTag",_="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(_&&(t.exports=L));L=e.regeneratorRuntime=_?t.exports:{},L.wrap=r;var k="suspendedStart",P="suspendedYield",E="executing",F="completed",A={},D={};D[w]=function(){return this};var j=Object.getPrototypeOf,O=j&&j(j(p([])));O&&O!==v&&y.call(O,w)&&(D=O);var S=i.prototype=o.prototype=Object.create(D);a.prototype=S.constructor=i,i.constructor=a,i[N]=a.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,N in t||(t[N]="GeneratorFunction")),t.prototype=Object.create(S),t},L.awrap=function(t){return{__await:t}},l(u.prototype),u.prototype[x]=function(){return this},L.AsyncIterator=u,L.async=function(t,e,n,o){var a=new u(r(t,e,n,o));return L.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},l(S),S[N]="Generator",S[w]=function(){return this},S.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(m),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=g),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=y.call(o,"catchLoc"),l=y.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,A):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),A},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),m(r),A}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;m(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=g),A}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},Y4mU:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"employeeManage-wrap"},[r("div",{staticClass:"search-wrap search-top"},[r("el-input",{attrs:{placeholder:"登录账号、姓名"},model:{value:t.queryName,callback:function(e){t.queryName=e},expression:"queryName"}}),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.fetchAdminListData}},[t._v("搜索")])],1),t._v(" "),r("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"员工列表",name:"first"}})],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],attrs:{data:t.tableData3,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)",border:"",stripe:"","min-width":"100%"}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"70"}}),t._v(" "),r("el-table-column",{attrs:{prop:"userName",label:"姓名","min-width":"10%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"loginName",label:"用户名","min-width":"10%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"org.name",label:"部门","min-width":"50%"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.groupName,function(e){return r("span",[t._v("\n           "+t._s(e)+"\n        ")])})}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"phone",label:"联系方式","min-width":"10%"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作","min-width":"15%"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){t.updateAdmin(e.row)}}},[t._v("修改员工")]),t._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){t.updateAdminPoss(e.row)}}},[t._v("修改密码")]),t._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){t.postAdminDeleteData(e.row.loginName)}}},[t._v("删除")])]}}])})],1),t._v(" "),r("div",{staticClass:"pagination-wrap"},[r("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),r("el-dialog",{attrs:{title:t.title,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[r("el-form-item",{attrs:{label:"部门名称",prop:"groupName"}},[r("el-select",{attrs:{multiple:"",filterable:"","allow-create":"",placeholder:"请选择部门(多选)"},model:{value:t.form.groupName,callback:function(e){t.$set(t.form,"groupName",e)},expression:"form.groupName"}},t._l(t.groups,function(t){return r("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),r("el-form-item",{attrs:{label:"登录账号","label-width":t.formLabelWidth,prop:"loginName"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.loginName,callback:function(e){t.$set(t.form,"loginName",e)},expression:"form.loginName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"姓名","label-width":t.formLabelWidth,prop:"userName"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:""},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"手机号","label-width":t.formLabelWidth,prop:"phone"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),r("el-form-item",{staticClass:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("保存")])],1)],1)],1),t._v(" "),r("el-dialog",{attrs:{title:"修改密码",visible:t.dialogFormVisible1},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[r("el-form-item",{attrs:{label:"登录密码","label-width":t.formLabelWidth,prop:"userPwd"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:""},model:{value:t.form.userPwd,callback:function(e){t.$set(t.form,"userPwd",e)},expression:"form.userPwd"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"确认密码","label-width":t.formLabelWidth,prop:"confirmPwd"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:""},model:{value:t.form.confirmPwd,callback:function(e){t.$set(t.form,"confirmPwd",e)},expression:"form.confirmPwd"}})],1),t._v(" "),r("el-form-item",{staticClass:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm1("form")}}},[t._v("保存")])],1)],1)],1)],1)},o=[]},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n=r("//Fk"),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(a,i){try{var l=e[a](i),u=l.value}catch(t){return void r(t)}if(!l.done)return o.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}});
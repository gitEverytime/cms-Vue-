// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui'
import moment from "moment"
import cookieUtil from './js/cookie'
import getNewDate from './js/getDate'
import api from './axoios/apis/apiBase'
import http from './axoios/http'
import VueQuillEditor from 'vue-quill-editor'
import isEqual from './js/isEqual'
import * as custom from './js/filters'
import validate from './js/validate'
import { regionData, CodeToText } from 'element-china-area-data'
Vue.use(ElementUI);
Vue.use(VueQuillEditor);

Vue.config.productionTip = false;
/**
 * 过滤器
 */
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
});

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
/***
 * 全局方法配置
 * @type {{set: cookieUtil.set, get: cookieUtil.get, unset: cookieUtil.unset, setCookieDate: cookieUtil.setCookieDate, delCookie: cookieUtil.delCookie}}
 */
//vue原型对象添加属性（方法）Object.assign()
Object.assign(Vue.prototype,{
  cookie:cookieUtil,      //存贮数据Func
  getNewDate,             //获取日期Func
  api,                    //接口地址
  http,                   //axios处理http请求
  isEqual,                //比较两个对象是否相等
  moment,                 //格式化时间
  validate,               //验证
  regionData              //省市区三级联动
});

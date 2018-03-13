'use strict'

import axios from 'axios'
import qs from 'qs'   //qs组件来避开ajax信使请求，并兼容Android。
import Vue from 'vue'
import router from '../router'
import store from '../vuex';
let vm = new Vue({
  router,
  store
});
/**
 * http请求拦截器
 */
axios.interceptors.request.use(config => {
  if (vm.cookie.get("token")) {  // 判断是否存在token，如果存在的话，则每个http请求的header都加上token,username
    let jsonData = {
      token: vm.cookie.get("token"),
      username: vm.cookie.get("username")
    };
    config.headers.Authorization = JSON.stringify(jsonData);
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
});

function checkStatus (response) {
  if (response && (response.status === 200)) {
    return response   //拿到接口请求成功并且登录成功后的请求结果
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }else{
    return response   //网络错误，服务器错误，未登录成功
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if(!res){
    vm.$message.error("亲，您的网络出了一点小状况喔!");                //接口请求不到报错
  }
  if(res && (res.status === 200) && (res.data.code === 401 || res.data.code === 40103)){     //未登录
    vm.$router.push('/login');
    vm.$message.warning("未登录，请先登录！");
  }
  if(res && (res.status === 200) && (res.data.code !== 200)){     //接口异常错误
    vm.$message.warning(res.data.message);
  }
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: '/',
      url,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: '/',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}

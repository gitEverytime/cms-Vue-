import Vue from 'vue';
import Router from 'vue-router';
import cookieUtil from '../js/cookie'

Vue.use(Router);
let vm = this;

const router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        //meta元素
        requireAuth: true,
        active:1,
      },
      redirect: '/index'
    },
    {
      path: '/login',
      meta: {
        requireLogin: true,
      },
      component: resolve => require(['../components/login/login.vue'], resolve), //登录页面
    },
    {
      path: '/eg',
      meta: {
        requireLogin: true,
      },
      component: resolve => require(['../components/eg.vue'], resolve), //登录页面
    },

    {
      path: '/error',
      component: resolve => require(['../components/login/error.vue'], resolve), //404页面
    },
    {
      path: '/index',
      meta: {
        //meta元素
        requireAuth: true,
        active:1,
      },
      component: resolve => require(['../components/common/main.vue'], resolve),
      children: [
        //商品列表
        {
          path: '/index',
          type:'commodity',
          meta: {
            requireAuth: true,
            active:1,
          },
          component: resolve => require(['../components/commodityManage/manageList.vue'], resolve),
        },
        //类目设置
        {
          path: '/category-set',
          meta: {
            requireAuth: true,
          },
          component: resolve => require(['../components/commodityManage/categorySetting.vue'], resolve),
        },
        //运费模版
        {
          path: '/freight-template',
          meta: {
            requireAuth: true,
          },
          component: resolve => require(['../components/commodityManage/freightTemplate.vue'], resolve),
        },
        // {
        //   path: '/eg',
        //   meta: {
        //     requireAuth: true,
        //   },
        //   component: resolve => require(['../components/eg.vue'], resolve),
        // },
      ]
    },
  ]
});
export default router;
// 全局导航钩子
router.beforeEach((to, from, next) =>{
  /**
   * 如果没有页面跳到404页面
   */
  if(to.matched.length === 0){
    next({
      path:'/error'
    })
  }else {
    if (to.meta.requireAuth) {
      next();
      // if(cookieUtil.get("token")) {     //存在token才会路由页面
      //   next();
      // }else {
      //   next({
      //     path: '/login'
      //   })
      // }
    }else {
      next();
    }
  }
});


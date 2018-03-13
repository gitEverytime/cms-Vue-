```
#                              系统脚手架说明
#                                A Vue project
# 基于webpack构建的 vue-cli 单页面项目
# 技术点：Vue  sass  webpack vue-cli  axios  vue-router element-ui组件库 Vuex  node es6
# 文件结构


    ├─build
    │   ├─build.js                 (打包)
    │   ├─check-versions.js        (检查版本)
    │   ├─dev-client.js
    │   ├─dev-server.js
    │   ├─utils.js
    │   ├─vue-loader.conf.js
    │   ├─webpack.base.conf.js     (基础配置)
    │   ├─webpack.dev.conf.js      (开发环境配置)
    │   ├─webpack.prod.conf.js     (生产环境配置)
    ├─config                       (环境变量)
    │   ├─dev.env.js
    │   ├─index.js
    │   ├─prod.env.js
    ├─dist (文件输出目录)
    └─src (前端开发目录)
    │   │
    │   └─axios
    │   │   └─api.js                 (接口定义)
    │   │   │
    │   │   └─http.js                (axios http请求定义)
    │   │
    │   └─components                 (Vue模板组件文件)
    │   │   └─commodityManage
    │   │   │
    │   │   └─common
    │   │
    │   ├─js
    │   │  ├─cookie.js                (本地存储)
    │   │  ├─getDate.js               (日期)
    │   │
    │   ├─router
    │   │  ├─index.js                 (vue-router页面地址路由配置表)
    │   │
    │   ├─vuex                        (vuex数据管理仓库)
    │   │   ├─actions.js              (异步更新数据状态)
    │   │   ├─getters.js              (获取仓库里面的数据)
    │   │   ├─index.js                (数据管理配置文件)
    │   │   ├─mutations.js            (对数据进行更新)
    │   │   ├─state.js                (基本状态管理仓库)
    │   │
    │   ├─App.vue                     (vue单页总引用模板)
    │   ├─main.js                     (vue项目依赖配置文件(公共方法的定义，路由，vuex,axios,element ui组件定义))
    │
    │
    └─static (静态资源文件夹)
    │    │
    │    ├─image  图片
    │    │
    │    └─sass   样式表
    │
    └─package.json   项目所需要的各种模块的定义
    │
    └─balelrc        es6转换器
    │
    └─.gitgnore      Git提交过滤
    │
    └─server.js      线上服务启动脚本

# 运行方法：
# git clone 代码
# 如果下载了淘宝镜像，运行cnpm install，如果没有则运行npm install
# 本地环境调试运行 npm run dev
# 生产环境运行 npm run build 打包到dist文件目录里面
# 生产环境运行 下载 expess（node服务运行框架）  npm install --save-dev express,
# 下载 pm2(node 运行进程管理) npm install --save-dev pm2
# 下载 http-proxy-middleware(接口代理插件) npm install --save-dev http-proxy-middleware
# 可以package.JSON里面配置启动线上环境的命令

```



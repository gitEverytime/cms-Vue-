<template>
   <div class="asideLeft-wrap" >
     <p class="asideLeft-title">后台架构</p>
     <el-menu
       :default-active="$route.path"
       :router="true"
       :unique-opened="true"
       class="el-menu-vertical-demo"
       text-color="#fff"
       active-text-color="#ffd04b">
       <el-menu-item index="/index">
         <i class="iconfont icon-shangpin"></i>
         <span slot="title">商品管理</span>
       </el-menu-item>
       <el-menu-item index="/eg">
         <i class="iconfont icon-shangpin"></i>
         <span slot="title">EG</span>
       </el-menu-item>
     </el-menu>
   </div>
</template>
<script>
  export default {
    data(){
      return{
        params:"",
      }
    },
    mounted(){

    },
    methods:{}
  }
</script>

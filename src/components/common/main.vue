<template>
  <el-container>
    <el-container>
      <el-aside width="200px">
        <aside-left></aside-left>
      </el-aside>
      <el-main>
        <main-right></main-right>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import headerTop from "./headerTop.vue"
  import asideLeft from "./asideLeft.vue"
  import mainRight from "./mainRight.vue"
  export default {
    components:{
      headerTop,
      asideLeft,
      mainRight
    },
  }
</script>
<style lang="scss">
  .el-container{
    height: 100%;
    width: 100%;
  }
  .el-header, .el-footer {
    background-color: #F56904;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: rgb(84, 92, 100);
    text-align: center;
  }

  .el-main {
    background-color: #ffffff;
    color: #333;
    padding:0 30px !important;
    overflow:auto;
  }

</style>

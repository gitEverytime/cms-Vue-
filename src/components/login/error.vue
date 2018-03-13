<template>
  <div style="min-height: 600px">
    <el-row>
      <el-col :span="24" class="error_header">
        <router-link to="/login">欢迎，请先登录</router-link>
      </el-col>
    </el-row>
    <div class="error_wrap">
      <el-row>
        <el-col :span="24" class="error_content">
          <h2>抱歉，出错了</h2>
          <p>
            您输入地址可能有误或该地址已被删除<br>
            请再次检查或返回<router-link to="/login" class="link">重新登录</router-link>
          </p>
          <img src="/static/images/404.png">
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    components:{

    },
  }
</script>


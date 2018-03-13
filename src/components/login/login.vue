<template>
  <div style="height: 100%">
    <div class="content">
      <a class="index_black" href="/">

      </a>

      <!--登录框里面-->
      <div id="login-window" class="content-login">
        <p class="login-title">登录</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="" prop="username" width="260">
            <el-input placeholder="用户名" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input placeholder="密码" type="password" v-model="ruleForm.password" @keyup.enter.native="keyLogin('ruleForm')" ></el-input>
          </el-form-item>
          <div>
            <!--<a href="http://user.ibaixiong.com/findpwd.html" class="forgetPass">忘记密码？</a>-->
          </div>
          <el-form-item class="cl_fix">
            <el-button type="primary" @click="submitForm('ruleForm')" class="loginBtn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--结束-->
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        ruleForm: {
          username: '',
          password: '',
          appid:"papabear-cms-admin"
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
        },
        checked:true
      }
    },
    mounted(){
    },
    methods:{
      keyLogin(formName){
        this.formLoad(formName);
      },
      submitForm(formName) {
        this.formLoad(formName);
      },
      formLoad(formName){
        let vm = this;
        vm.$refs[formName].validate((valid) => {
          if (valid) {
            vm.fetchFormData();   // 提交数据
          } else {
            return false;
          }
        });
      },
      fetchFormData: async function() {
        let vm=this;
        let params =vm.ruleForm;
        const res = await vm.http.post(this.api.loginApi.login, params);
        if(!res){
          return
        }
        let result = res.data;
        if( res && result.code === 200){
          vm.$message.success("欢迎来到白熊CMS管理系统！");
          vm.cookie.set("token",result.data.token);   //设置token失效
          vm.cookie.set("username",vm.ruleForm.username);
          vm.$router.push("/index");
        }else{
          vm.$message.warning(res.data.message);
        }
      },
    }
  }
</script>

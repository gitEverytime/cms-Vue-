<template>
  <div class="userMsg-wrap">
    <el-row>
      <el-col :span="4">
        <el-upload
          class="avatar-uploader"
          action="/api/admin/avatarImg"
          :data="{id:$store.getters.getUserList.id}"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <div class="poper_upload">点击上传头像</div>
          <img v-if="avatarImg" :src="avatarImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>
      <el-col :span="20">
        <div class="userDetail">
          <span>您好，</span>
          <label class="userName">{{$store.getters.getUserList.userName}}</label><br>
          <p class="userId">
            <span>用户ID:</span>
            <label>{{$store.getters.getUserList.id}}</label><br>
          </p>
        </div>
      </el-col>
    </el-row>
    <p class="title">安全设置</p>
    <el-row >
      <el-col :span="18">
        <div class="list-wrap">
          <i class="iconfont icon-mima"></i><span>密码重置</span><br>
          <p>
            密码强度越高，账号安全级别越高
          </p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="btn-wrap">
          <el-button type="success" plain @click="dialogFormVisible=true">修改密码</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <div class="list-wrap">
          <i class="iconfont icon-shouji"></i>
          <span>绑定手机</span>
          <label>{{$store.getters.getUserList.phone}}</label><br>
          <p>
            安全验证，通过手机短信验证码确认
          </p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="btn-wrap">
          <el-button type="success" plain @click="dialogFormVisible1=true" disabled>更换手机</el-button>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="原密码" :label-width="formLabelWidth" prop="oldPwd">
          <el-input type="password" v-model="form.oldPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="formLabelWidth" prop="newPwd">
          <el-input type="password" v-model="form.newPwd" auto-complete="off" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" :label-width="formLabelWidth" prop="confirmPwd">
          <el-input type="password" v-model.number="form.confirmPwd" auto-complete="off" placeholder=""></el-input>
        </el-form-item>
        <el-form-item class="footer">
          <el-button type="primary" @click="submitForm('form')">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog title="更换手机" :visible.sync="dialogFormVisible1">
      <el-form :model="form1" :rules="rules" ref="form1">
        <el-form-item label="原手机号" :label-width="formLabelWidth" prop="oldPwd">
          <el-input  v-model="$store.getters.getUserList.phone" auto-complete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="新手机号" :label-width="formLabelWidth" prop="phone">
          <el-input  v-model="form1.phone" auto-complete="off" placeholder=""></el-input>
        </el-form-item>
        <el-form-item class="footer">
          <el-button type="primary" @click="submitForm1('form1')">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data(){
      let validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else{
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.confirmPwd !== '') {
            this.$refs.form.validateField('confirmPwd');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        let vm = this;
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (String(value) !==vm.form.newPwd) {
          debugger
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      let validatePass3 = (rule, value, callback) => {
        const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else if (!reg.test(value)) {
          callback(new Error('手机号码格式不正确'));
        } else {
          callback();
        }
      };
      return{
        userList:"",
        dialogFormVisible:false,
        dialogFormVisible1:false,
        formLabelWidth:"120px",
        form:{
          oldPwd:'',
          newPwd:'',
          confirmPwd:''
        },
        form1:{
          phone:""
        },
        rules: {
          oldPwd: [
            {validator: validatePass1, trigger: 'blur'},
          ],
          newPwd: [
            {validator: validatePass, trigger: 'blur'},
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
          confirmPwd: [
            {validator: validatePass2, trigger: 'blur'},
          ],
          phone: [
            {validator: this.validate.tel, trigger: 'blur'}
          ],
        }
      }
    },
    computed:{
      avatarImg(){
        return this.$store.getters.getUserList.avatarImg
      },
    },
    mounted(){
      let vm = this;
      vm.$store.dispatch("setTitle","个人信息");
      vm.userList = vm.$store.getters.getUserList;
    },
    methods:{
      /**
       * 修改密码验证
       */
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.postAdminPasswordData();
          } else {
            return false;
          }
        });
      },
      /**
       * 修改手机号验证
       */
      submitForm1(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.postAdminPhoneData();
          } else {
            return false;
          }
        });
      },
      /**
       * 修改密码
       * @returns {Promise.<void>}
       */
      postAdminPasswordData: async function() {
        let vm=this;
        let params = vm.form;
        const res = await vm.http.post(this.api.loginApi.adminPassword, params);
        if( res && res.data && res.data.code === 200){
          vm.$message.success("恭喜您修改密码成功！");
          vm.dialogFormVisible = false;
        }
      },
      /**
       * 修改手机号
       */
      postAdminPhoneData: async function() {
        let vm=this;
        let params = vm.form1;
        const res = await vm.http.post(this.api.loginApi.adminPhone, params);
        if( res && res.data && res.data.code === 200){
          vm.$message.success("恭喜您修改手机号成功！");
          vm.dialogFormVisible1 = false;
        }
      },
      handleAvatarSuccess(res){
        this.$store.dispatch("setAvatarImg",res.data );
      },
    }
  }
</script>

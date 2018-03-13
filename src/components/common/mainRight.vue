<template>
  <div class="mainRight-wrap">
    <div class="headerTop">
      <p class="title">{{$store.getters.getTitle}}</p>
      <div class="admin-wrap">
        <el-upload
          class="avatar-uploader"
          action="/api/admin/avatarImg"
          :data="{id:$store.getters.getUserList.id}"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          disabled
        >
          <img v-if="$store.getters.getUserList.avatarImg" :src="$store.getters.getUserList.avatarImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{$store.getters.getUserList.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/user-msg">
                个人信息
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item class="downIcon">
              <a href="javascript:;" @click="logoutFunc">注销</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        userData:{
          avatarImg:"http://fe.ibaixiong.com/shop/image/xLogin.ico",
          userName:""
        },
      }
    },
    computed:{
      avatarImg(){
        return this.$store.getters.getUserList.avatarImg
      },
      userName(){
        return this.$store.getters.getUserList.userName
      },
//      title(){
//        return this.$store.getters.title;
//      }
    },
    mounted() {
      this.fetchUserData();
    },
    methods:{
      /**
       * 用户基本信息
       * @returns {Promise.<void>}
       */
      fetchUserData: async function() {
        let vm=this;
        let params ={};
        const res = await vm.http.get(this.api.loginApi.user, params);
        if(res && res.data && res.data.code === 200){

          this.$store.dispatch("setUserList",res.data.data);
        }
      },
      /**
       * 登出
       * @param row
       */
      fetchLogoutData: async function() {
        let vm=this;
        let params ={};
        const res = await vm.http.get(this.api.loginApi.logout, params);
        if( res && res.data && res.data.code === 200){
          vm.cookie.delCookie("token");
          vm.$router.push("/login");
        }
      },
      logoutFunc(){
        this.fetchLogoutData();
      },
      handleAvatarSuccess(res){
        this.$store.dispatch("setAvatarImg",res.data );
      },
    },
    components:{
    },
  }
</script>
<style lang="scss" scoped>
</style>

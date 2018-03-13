<template>
  <div class="categorySet_wrap">
    <!--面包导航-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>类目管理</el-breadcrumb-item>
    </el-breadcrumb>


    <el-tabs v-model="activeName2" type="card" @tab-click="handleTabClick">
      <el-tab-pane label="产品品类" name="first">

        <div class="category_wrap">
          <el-form :model="form" ref="form" label-width="0px" class="demo-dynamic">
            <el-table
              v-if="activeName2 === 'first'"
              v-loading="loading2"
              element-loading-text="拼命加载中"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0, 0, 0, 0.5)"
              border
              stripe
              :data="form.tableData"
              style="width: 100%">
              <el-table-column
                label="类目名称"
                min-width="50%">
                <template slot-scope="scope">
                  <span v-if="!scope.row.update">{{scope.row.name}}</span>
                  <el-form-item
                    v-if="scope.row.update"
                    :key="scope.row.key"
                    :prop="'tableData.' + scope.$index + '.name'"
                    :rules="
                        { required: true, message: '类目名称不能为空！', trigger: 'change' }
                      "
                  >
                    <el-input
                      v-model="scope.row.name"
                      class=""
                    >
                    </el-input>
                  </el-form-item>
                </template>
              </el-table-column>

              <el-table-column
                label="类目代码"
                min-width="30%">
                <template slot-scope="scope">
                  <span v-if="!scope.row.update">{{scope.row.code}}</span>
                  <el-form-item
                    v-if="scope.row.update"
                    :key="scope.row.key"
                    :prop="'tableData.' + scope.$index + '.code'"
                    :rules="
                        { required: true, message: '类目代码不能为空！', trigger: 'change' }
                      "
                  >
                    <el-input v-model="scope.row.code" class="" v-if="scope.row.update"></el-input>
                  </el-form-item>
                </template>
              </el-table-column>

              <el-table-column
                min-width="20%"
                label="操作">
                <template slot-scope="scope" >
                  <el-button @click="handleUpdateClick(scope.row)" type="text" size="small" v-if="!scope.row.update">
                    编辑
                  </el-button>
                  <el-button @click="submitForm('form',scope.row)" type="text" size="small" v-if="scope.row.update">
                    保存
                  </el-button>
                  <el-button @click="handleRestClick(scope.row)" type="text" size="small" v-if="scope.row.update">
                    取消
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form>
        </div>

      </el-tab-pane>
      <el-tab-pane label="产品型号" name="second">

        <div class="category_wrap">
          <!--<el-button type="primary" size="mini" class="insertBtn">新增型号</el-button>-->
          <el-table
            v-if="activeName2 === 'second'"
            v-loading="loading2"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.5)"
            border
            stripe
            :data="form.tableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="产品名称"
              min-width="30%">
            </el-table-column>
            <el-table-column
              prop="name"
              label="产品品类"
              min-width="30%">
            </el-table-column>
            <el-table-column
              prop="code"
              label="产品型号"
              min-width="30%">
            </el-table-column>
            <el-table-column
              min-width="10%"
              label="操作">
              <template slot-scope="scope">
                <router-link class="editStyle" :to="{name:'manage-insert',params: {id: scope.row.productId}}">
                  详情
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>

      </el-tab-pane>
    </el-tabs>

    <div class="pagination-wrap">
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        layout="prev, pager, next"
        :total="total3">
      </el-pagination>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        activeName2:"first",
        loading2:true,
        form:{
          tableData: []
        },
        olderForm:[],
        update:false,
        total3:10,
        pageNo:1,
        status:1,
        changeStatus:false
      }
    },
    computed:{
    },
    mounted(){
      let vm = this;
      vm.fetchProductData();
    },
    /**
     * 观察有没有数据变动
     */
    watch:{
      form:{
        deep:true,
        handler(newVal,oldVal){
          this.isEqual.o2o(newVal,this.olderForm)? this.changeStatus = false : this.changeStatus = true;
        },
      }
    },
    methods:{
      /**
       * 表单验证
       */
      submitForm(formName,row) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.changeStatus ? this.fetchUpdateProductData(row):this.$message.warning("您没有任何更新操作！");
          } else {
            return false;
          }
        });
      },
      /**
       * 获取产品品类
       * @returns {Promise.<void>}
       */
      fetchProductData: async function() {

      },
      /**
       *更新产品品类
       * @param row
       */
      fetchUpdateProductData: async function(row) {

      },
      /**
       * 获取产品型号所有数据
       * @param row
       */
      fetchModalListData: async function() {

      },
      handleUpdateClick(row){
        row.update = true;
      },
      handleRestClick(row){
        row.update = false;
      },
      handleSizeChange(val) {
      },
      handleCurrentChange(val) {

      },
      handleTabClick(val){

      }
    }
  }
</script>

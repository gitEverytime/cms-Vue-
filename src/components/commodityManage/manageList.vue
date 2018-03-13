<template>
  <div class="manageList-wrap">
    <div class="manageList-top-wrap">
      <div class="manageList-btn-group">
        <el-button @click="categorySetBtn" size="small">类目设置</el-button>
        <!--<el-button @click="freightTemplateBtn" size="small">运费模板</el-button>-->
        <el-button type="primary" @click="manageInsertBtn" size="small">新增商品</el-button>
      </div>
    </div>

    <el-tabs v-model="activeName2" type="card" @tab-click="handleTabClick">
      <el-tab-pane label="已上线" name="1">

        <el-table
          v-if="activeName2 === '1'"
          :data="tableData3"
          v-loading="loading2"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.5)"
          border
          stripe
          min-width="100%"
          >
          <el-table-column
            prop="basicCategory.name"
            label="产品类型"
            min-width="28%"
            >
          </el-table-column>
          <el-table-column
            prop="title"
            label="产品名称"
            min-width="28%"
            >
          </el-table-column>
          <el-table-column
            prop="basicCategoryModel.code"
            label="产品型号"
            min-width="14%"
          >
          </el-table-column>
          <el-table-column
            prop="sort"
            label="产品排序"
            min-width="14%"
          >
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="14%"
            >
            <template slot-scope="scope">
              <keep-alive>
                <router-link class="editStyle" :to="{name:'manage-insert',params: {id: scope.row.id}}">
                编辑
                </router-link>
              </keep-alive>
              <el-button type="text" size="small" @click="postUpdateStatus(scope.$index,scope.row)">下架</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-wrap">
          <el-pagination
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            layout="prev, pager, next"
            :total="total3">
          </el-pagination>
        </div>

      </el-tab-pane>
      <el-tab-pane label="已下线" name="-1">

        <el-table
          v-if="activeName2 === '-1'"
          :data="tableData3"
          v-loading="loading2"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.5)"
          border
          stripe
          min-width="100%"
        >
          <el-table-column
            prop="basicCategory.name"
            label="产品类型"
            min-width="28%"
          >
          </el-table-column>
          <el-table-column
            prop="title"
            label="产品名称"
            min-width="28%"
          >
          </el-table-column>
          <el-table-column
            prop="categoryModelCode"
            label="产品型号"
            min-width="14%"
          >
          </el-table-column>
          <el-table-column
            prop="sort"
            label="产品排序"
            min-width="14%"
          >
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="14%"
          >
            <template slot-scope="scope">
              <router-link class="editStyle" :to="{name:'manage-insert',params: {id: scope.row.id}}">
                编辑
              </router-link>
              <el-button type="text" size="small" @click="postUpdateStatus(scope.$index,scope.row)">上架</el-button>
              <el-button type="text" size="small" @click="postDeleteStatus(scope.$index,scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-wrap">
          <el-pagination
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            layout="prev, pager, next"
            :total="total3">
          </el-pagination>
        </div>

      </el-tab-pane>
      <el-tab-pane label="已删除" name="2">

        <el-table
          v-if="activeName2 === '2'"
          :data="tableData3"
          v-loading="loading2"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.5)"
          border
          stripe
          min-width="100%"
        >
          <el-table-column
            prop="basicCategory.name"
            label="产品类型"
            min-width="28%"
          >
          </el-table-column>
          <el-table-column
            prop="title"
            label="产品名称"
            min-width="28%"
          >
          </el-table-column>
          <el-table-column
            prop="basicCategoryModel.code"
            label="产品型号"
            min-width="14%"
          >
          </el-table-column>
          <el-table-column
            prop="sort"
            label="产品排序"
            min-width="14%"
          >
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="14%"
          >
          </el-table-column>
        </el-table>
        <div class="pagination-wrap">
          <el-pagination
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            layout="prev, pager, next"
            :total="total3">
          </el-pagination>
        </div>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: '1',
        tableData3: [],
        total3:10,
        pageNo:1,
        status:1,
        id:0,
        loading2:true,
      };
    },
    mounted(){
      this.fetchFormData();
      this.$store.dispatch("setTitle","商品管理");
      /**
       * rest状态
       */
      this.$store.dispatch("setStep1Backfill",false);
      this.$store.dispatch("setIds",{
        productId: "",
        modelId: ""
      });
    },
    methods: {
      /**
       * 商品列表
       * @returns {Promise.<void>}
       */
      fetchFormData: async function() {
        let vm=this;
        vm.loading2 = true;
        let params ={
          pageNo:vm.pageNo,
          status:vm.status
        };
        const res = await vm.http.get(this.api.commodityManageApi.list, params);
        if( res &&res.data && res.data.code ===200){
          vm.loading2 = false;
          vm.tableData3 = res.data.data.list;
          vm.total3 = res.data.data.pager.total;
        }else{
          vm.loading2 = false;
        }
      },
      /**
       * 商品上，下架
       * @param row
       */
      postUpdateStatus: async function(index,row) {
        let vm=this;
        let params ={
          id:row.id
        };
        const res = await vm.http.post(this.api.commodityManageApi.updateStatus, params);
        if( res && res.data && res.data.code === 200){
          vm.tableData3.splice(index,1);
          vm.$message.success("操作成功！");
        }
      },
      /***
       * 商品删除
       * @param row
       */
      postDeleteStatus: async function(index,row) {
        let vm=this;
        let params ={
          id:row.id,
          userId:vm.$store.getters.getUserList.id
        };
        const res = await vm.http.post(this.api.commodityManageApi.productDelete, params);
        if( res && res.data && res.data.code === 200){
          vm.tableData3.splice(index,1);
          vm.$message.success("删除成功！");
        }
      },
      /**
       * tab切换
       * @param value
       */
      handleTabClick(value){
        this.total3 = 10;
        this.pageNo = 1;
        this.status = value.name;
        this.fetchFormData();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.pageNo = val;
        this.fetchFormData();
      },
      manageInsertBtn(){
        this.$router.push({name:'manage-insert',params: {id: this.id}});
      },
      categorySetBtn(){
        this.$router.push("/category-set");
      },
    }
  };
</script>


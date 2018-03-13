<template>
  <div class="template-detail-wrap">
    <el-table
      border
      stripe
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="模板名称"
        min-width="50%">
      </el-table-column>
      <el-table-column
        prop="valuationType"
        label="计价方式"
        min-width="30%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="首重"
        min-width="30%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="首费"
        min-width="30%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="续重"
        min-width="30%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="续费"
        min-width="30%">
      </el-table-column>
      <el-table-column
        min-width="20%"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            详情
          </el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            编辑
          </el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        tableData:[]
      }
    },
    mounted(){
      this.fetchTemplateDetailData();
    },
    methods:{
      /**
       * 模板数据
       * @returns {Promise.<void>}
       */
      fetchTemplateDetailData: async function() {
        let vm=this;
        let params ={

        };
        const res = await vm.http.get(this.api.commodityManageApi.templateDetail+vm.$route.params.id, params);
        if( res && res.data && res.data.code === 200){
          vm.tableData = res.data.data.values;
        }
      },
    }
  }
</script>

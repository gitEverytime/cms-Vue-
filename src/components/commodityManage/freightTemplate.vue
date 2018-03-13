<template>
  <div class="template_wrap">

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>运费模板</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="template_title_wrap">
      <h3>运费模板列表</h3>
      <el-button type="primary" size="mini" class="insertBtn">添加模板</el-button>
    </div>
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
        prop="createDateTime"
        label="创建时间"
        min-width="30%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="邮寄方式"
        min-width="30%">
      </el-table-column>
      <el-table-column
        min-width="20%"
        label="操作">
        <template slot-scope="scope">
          <router-link :to="{name:'template-detail',params: {id: scope.row.id}}">详情</router-link>
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
        tableData: [
          {
            "name":"fanwesc",
            "id":2323
          }
        ]
      }
    },
    mounted(){
     this.fetchTemplateData();
    },
    methods:{
      /**
       * 获取模板数据
       * @returns {Promise.<void>}
       */
      fetchTemplateData: async function() {
        let vm=this;
        let params ={};
        const res = await vm.http.get(this.api.commodityManageApi.templateList, params);
        if( res && res.data && res.data.code === 200){
          vm.tableData = res.data.data.templates;
        }
      },
    }
  }
</script>

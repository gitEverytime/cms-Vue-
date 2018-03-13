<template>
	<div class="nav">
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
    }
  };
</script>
<style lang="scss">
.header_wrap{
  .el-menu-item{
    color: #C0CCDA !important;
  }
  .is-active{
    color: #ffffff !important;
  }
  .first_list{
    margin-left: 56px !important;
  }
  .col_right{
    height: 60px;
    line-height: 60px;
    text-align: right;
    color: #ffffff;
  }
  .el-menu{
    border-radius: 0 !important;
  }
  .m_r_30{
    margin-right: 30px;
    cursor: pointer;
  }
}

</style>

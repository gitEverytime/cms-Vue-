export const state = {

  active:0,
  /**
   * 标题
   */
  title:"商品管理",
  /**
   * 左边list选中状态
   */
  isActive:"1",
  step1Backfill:false,
  step2Backfill:false,
  /**
   * 用户信息
   */
  userList:{},

  /**
   * 步骤状态
   */
  steps:{
    isStep:false,
    isStep1:false,
    isStep3:false,
  },

  /**
   * 设置传导的ID
   */
  ids: {
    productId: "",
    modelId: ""
  },

};

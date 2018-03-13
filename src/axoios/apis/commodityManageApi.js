export default {
  /**
   * 商品列表接口
   */
  list:"/api/mall/product/list",            //get

  /**
   * 获取新增或修改商品数据
   */
  edit: "/api/mall/product/edit",           //post

  /**
   * 更新商品接口
   */
  update: "api/mall/product/update.html",   //post

  /**
   * 异步上传图片
   */
  upload: "/api/mall/upload",               //post

  /**
   * 获取产品品类
   */
  base: "/api/mall/base/data",              //get

  /**
   * 更新产品品类
   */
  insertCategory: "/api/mall/base/data",     //post

  /**
   * 商品新增或更新
   */
  productUpdate: "/api/mall/product/update",   //post
  /**
   * 获取产品型号所有数据
   */
  modalList: "/api/mall/base/model/list",    //get

  /**
   * 获取模板列表
   */
  templateList: "/api/mall/template/list",    //get

  /**
   * 获取模板详细信息
   */
  templateDetail:"/api/mall/template/detail/",  //get

  /**
   * 获取产品品类 （不分页）
   */
  baseAll:"/api/mall/base/dataAll",            //get

  /**
   * 查询产品型号所有数据（不分页）
   */
  modelListAll:"/api/mall/base/model/listAll",    //get

  /**
   * 查询单个产品品类下的所有产品型号
   */
  categoryModelCode: "/api/mall/model/category/", //get

  /**
   * 商品的上下架修改
   */
  updateStatus:"/api/mall/product/update/status",   //post

  /**
   * 删除产品
   */
  productDelete:"/api/mall/product/delete",      //post

  /**
   * 获取新增或修改商品数据
   */
  productEdit:"/api/mall/product/edit",    //get

  /**
   * 产品异步上传图片
   */

}

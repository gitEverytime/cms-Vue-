<template>
<div class="model_view">
  <div class="model_views">
    <!-- 头部 -->
    <div class="model_viewNav">
      <a href="" class="model_viewNavs"><span class="model_viewNavsp add_colorNav">同城出发</span></a>
      <div class="model_borderNav"></div>
      <a href="" class="model_viewNavs"><span class="model_viewNavsp">当地向导</span></a>
    </div>
    <div class="model_viewBody">
      <ul class="model_viewList" id="models">
        <!-- 循环list -->
        <li class="model_viewLists" v-for="(item,index) in modelList ">
          <!-- 头像部分 -->
          <div class="model_viewheader">
            <span class="model_viewhimg"><img :src="item.head"></span>
            <!--<hground class="model_viewName">{{item.name}}</hground>-->
            <i class="icon_sex"></i>
            <p class="model_viewSpan">{{item.work}}</p>
          </div>
          <!-- 封面图片 -->
          <div class="model_viewboxs"><img :src="item.images"></div>
          <!-- 封面图片列表 -->
          <div class="model_viewboxsimg">
            <span class="model_viewbimgs"><img :src="item.imgs1"></span>
            <span class="model_viewbimgs"><img :src="item.imgs2"></span>
            <span class="model_viewbimgs"><img :src="item.imgs3"></span>
          </div>
          <!-- 内容 -->
          <div class="model_viewcer">
            <p class="model_viewcerp"> {{item.toure}}</p>
            <div class="model_viewcerbox">
              <span class="model_viewcerfl"><label>{{item.city}}</label></span>
              <span class="model_viewcerfr"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data(){
      return{
        modelList: [
          {
            "name":"koma",
            "work":"互联网",
            "toure":"普吉岛经典五日游吧",
            "city":"普吉岛 · 泰国",
            "images":"http://picture.ibaixiong.com//papabear/images/papabear_image32.png",
            "imgs1":"http://picture.ibaixiong.com//papabear/images/pc.png",
            "imgs2":"http://picture.ibaixiong.com//papabear/images/papabear_image34.png",
            "imgs3":"http://picture.ibaixiong.com//papabear/images/papabear_image26.png",
            "head": "http://picture.ibaixiong.com//papabear/images/papabear_image27.png",
            // "images":"one1",
            // "images":img/one1.jpg,
          },
          {
            "name":"songmimic",
            "work":"金融",
            "toure":"薰衣草庄园六天五夜游",
            "city":"普罗旺斯 · 法国",
            "images":"http://picture.ibaixiong.com//papabear/images/papabear_image1.jpg-website",
            "imgs1":"http://picture.ibaixiong.com//papabear/images/papabear_image2.jpg-website",
            "imgs2":"http://picture.ibaixiong.com//papabear/images/papabear_image3.jpg-website",
            "imgs3":"http://picture.ibaixiong.com//papabear/images/papabear_image4.jpg-website",
            "head": "http://picture.ibaixiong.com//papabear/images/papabear_image5.jpg-website",
          },
          {
            "name":"爱新觉罗·星星",
            "work":"作家",
            "toure":"埃及金字塔",
            "city":"埃及 · 非洲",
            "images":"http://picture.ibaixiong.com//papabear/images/papabear_image6.jpg-website",
            "imgs1":"http://picture.ibaixiong.com//papabear/images/papabear_image7.jpg-website",
            "imgs2":"http://picture.ibaixiong.com//papabear/images/papabear_image8.jpg-website",
            "imgs3":"http://picture.ibaixiong.com//papabear/images/papabear_image9.jpg-website",
            "head": "http://picture.ibaixiong.com//papabear/images/papabear_image10.png-website",
          },
        ]
      }
    },
    computed:{
    },
    mounted(){
      let vm = this;
      vm.fetchProductData();
    },
    methods: {
      /**
       * 获取产品品类
       * @returns {Promise.<void>}
       */
      fetchProductData: async function () {
        let vm=this;
        let params ={};
        const res = await vm.http.get(this.api.commodityManageApi.templateList, params);
        if( res && res.data && res.data.code === 200){
          vm.modelList = res.data.modelList;
        }
      },
    }
  }
</script>

<template>
  <div id="detail">
    <!-- 顶部 -->
    <detail-nav-bar class="navBar"/>
    <scroll class="scroll" ref="scroll">
      <!-- 轮播图 -->
      <detail-swiper :topImages="topImages"/>
      <!-- 商品信息 -->
      <detail-base-info :goods="goods"/>
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop"/>
      <!-- 详情信息 -->
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <!-- 参数信息 -->
      <detail-param-info :paramInfo="paramInfo"/>
      <!-- 评论信息 -->
      <detail-comment-info :commentInfo="commentInfo"/>
      <!-- 推荐信息 -->
      <goods-list :goodsList="recommendList"/>
    </scroll>
  </div>
</template>
<script>

import DetailSwiper from "./childComps/DetailSwiper"
import DetailNavBar from "./childComps/DetailNavBar"
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
import DetailParamInfo from "./childComps/DetailParamInfo"
import DetailCommentInfo from "./childComps/DetailCommentInfo"

import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail"

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
    }
  },
  components: {
    Scroll,
    GoodsList,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
  },
  created() {
    // 获取请求的id
    this.iid = this.$route.params.iid;
    this.getDetails();
  },
  methods: {
    getDetails() {
      // 请求详情数据
      getDetail(this.iid)
        .then((res) => {
          console.log(res);
          // 获取轮播图数据
          const data = res.result;
          this.topImages = data.itemInfo.topImages;        
          //获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          // 获取店铺信息
          this.shop = new Shop(data.shopInfo)
          //保存商品详情数据
          this.detailInfo = data.detailInfo;
          // console.log(this.detailInfo);
          // 获取尺码等
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          // console.log(this.paramInfo);
          // 保存评论信息
          if(data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }
      })
      // 请求推荐数据
      getRecommend()
        .then(res => {
          this.recommendList = res.data.list
        })

    },
    imgLoad() {
      this.$refs.scroll.refresh();
      
    }
  },
}
</script>
<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .navBar {
    position: relative;
    z-index: 9;
    background: #fff;
  }
  .scroll {
    height: calc(100% - 44px);
  }
</style>
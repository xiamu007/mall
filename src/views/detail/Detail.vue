<template>
  <div id="detail">

    <!-- 顶部 -->
    <detail-nav-bar class="navBar" @navClick="navClick" ref="nav"/>
    <scroll class="scroll" 
            ref="scroll" 
            :probeType="3" 
            @changePos="changePos">
                      <div>
      {{$store.state.cartList}}
    </div>
      <!-- 轮播图 -->
      <detail-swiper :topImages="topImages"/>
      <!-- 商品信息 -->
      <detail-base-info :goods="goods"/>
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop"/>
      <!-- 详情信息 -->
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <!-- 参数信息 -->
      <detail-param-info ref="param" :paramInfo="paramInfo"/>
      <!-- 评论信息 -->
      <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
      <!-- 推荐信息 -->
      <goods-list ref="recommend" :goodsList="recommendList"/>
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click.native="backTopClick" v-show="isBackTop"></back-top>
    <!-- 底部工具栏 -->
    <detail-bottom-bar @addToCart="addToCart"/>
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
import DetailBottomBar from "./childComps/DetailBottomBar"

import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail"
import {itemListenerMixin, backTopMixin} from "common/mixin"
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
      themeTops: [],
      currentIndex: 0,
    }
  },
  mixins:[itemListenerMixin, backTopMixin],
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
    DetailBottomBar,
  },
  created() {
    // 获取请求的id
    this.iid = this.$route.params.iid;
    this.getDetails();
  },
  methods: {
    // 请求详情数据
    getDetails() {
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
    // 刷新图片和获取4个Y值
    imgLoad() {
      this.$refs.scroll.refresh();
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.param.$el.offsetTop-44);
      this.themeTops.push(this.$refs.comment.$el.offsetTop-44);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop-44);
      this.themeTops.push(Number.MAX_VALUE)
      console.log(this.themeTops);
    },
    // 点击顶部导航跳转到相应的位置
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 300)
    },
    // 监听滚动
    changePos(position) {
      // 2.监听回到顶部的显示
      this.isBackTop = -(position.y) > 1000;
      // 1.监听滚动和上面的导航栏
      const positionY = -position.y
      // console.log(positionY);
      // 比较hack的方法
      for(let i = 0; i < this.themeTops.length-1; i++) {
        if((this.currentIndex !== i) && (positionY >= this.themeTops[i] && positionY < this.themeTops[i+1])) {
          this.currentIndex = i ;
          this.$refs.nav.currentIndex = this.currentIndex;  
        }
      }
      // for(let i = 0; i < this.themeTops.length; i++) {
      //   const length = this.themeTops.length;
      //   if((this.currentIndex !== i) && ((i < length-1 && positionY >= this.themeTops[i] && positionY < this.themeTops[i+1]) || 
      //      (i == length-1 && positionY >= this.themeTops[i]))) {
      //       this.currentIndex = i;
      //       this.$refs.nav.currentIndex = this.currentIndex;  
      //   }
      // }
    },
    // 添加至购物车
    addToCart() {
      // 获取要展示的信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.nowPrice;
      product.iid = this.iid;
      console.log(product);
      
      // 添加到购物车
      this.$store.commit("addCart", product)
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
    height: calc(100% - 93px);
  }
</style>
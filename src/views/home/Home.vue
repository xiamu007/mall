<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control ref="tabControl1"
      :title="['流行','新款','精选']" @tabClick="tabClick"
      class="tabControl1"
      v-show="isSwiper"/>
    <scroll class="content" 
            ref="scroll" 
            :probeType = "3" :pullUpLoad = "true"
            @changePos = "changePos" @pullingUp = "pullingUp">
      <!-- 轮播图 -->
      <child-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <!-- 推荐 -->
      <recommend-view :recommends="recommends"/>
      <!-- 图片 -->
      <feature-view/>
      <!-- 三选一 -->
      <tab-control ref="tabControl"
      :title="['流行','新款','精选']" @tabClick="tabClick"/>
      <!-- goodsList -->
      <goods-list :goodsList= "showGoods"/>
    </scroll>

    <!-- 回到顶部 -->
    <back-top @click.native="backTopClick" v-show="isBackTop"></back-top>

  </div>
</template>
<script>

import NavBar from "components/common/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backTop/BackTop"

import ChildSwiper from "./childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView"

import {getHomeMultidata,getHomeGoods} from "network/home"
import {debounce} from "common/utils"
import {itemListenerMixin} from "common/mixin"
export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

    ChildSwiper,
    RecommendView,
    FeatureView,
    
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        "pop":{page: 0,list:[]},
        "new":{page: 0,list:[]},
        "sell":{page: 0,list:[]},
      },
      currenType:"pop",
      isBackTop:false,
      taboffserTop: 0,
      isSwiper:false,
      saveY: 0,
      // itemImgListener: null, 使用了混入
    }
  },
  mixins:[itemListenerMixin],
  computed: {
    showGoods() {
      return this.goods[this.currenType].list
    }
  },
  created() {
    this.getHomeMultidatas();
    this.getHomeGoodss("pop")
    this.getHomeGoodss("new")
    this.getHomeGoodss("sell")

  },
  mounted() {
    // 使用了混入
    // 监听图片
    // const refresh = debounce(this.$refs.scroll.refresh,100)
    // 对监听事件进行保存
    // this.itemImgListener = () => {
    //   refresh();
    // }
    // this.$bus.$on("imgLoad",this.itemImgListener)
  },
  activated() {
    // 进来时设置y值
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,this.saveY,0);
  },
  deactivated() {
    // 得到离开时的y值
    this.saveY = this.$refs.scroll.getY();
    // 取消事件全局监听
    this.$bus.$off("imgLoad", this.itemImgListener)

  },
  methods: {
    // 事件监听调用的方法
    tabClick(index) {
      switch(index) {
        case 0:
          this.currenType = "pop"
          break
        case 1:
          this.currenType = "new"
          break
        case 2:
          this.currenType = "sell"
          break
      }
      this.$refs.tabControl.nowIndex = index;
      this.$refs.tabControl1.nowIndex = index;
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    // 滚动监听
    changePos(position) {
      this.isBackTop = -(position.y) > 1000;
      this.isSwiper = -(position.y) > this.taboffserTop;
    },
    pullingUp() {
      // console.log(this.currenType);
      this.getHomeGoodss(this.currenType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImgLoad() {
      //获取tabControl的offsetTop
      // 所有的组件都有一个属性$el: 用于获取组件中的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.taboffserTop = this.$refs.tabControl.$el.offsetTop;

    },

    // 网络请求方法
    getHomeMultidatas() {
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoodss(type) {
      const pages = this.goods[type].page + 1

      getHomeGoods(type,pages).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
      })
    }
  },
}
</script>


<style scoped>
  #home {
    /* padding-top: 44px; */
    position: relative;
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* 原生的柴需要定位 */
    /* position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0; */
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabControl1 {
    position: relative;
    z-index: 99;
  }
</style>
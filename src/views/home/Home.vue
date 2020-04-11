<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 录播图 -->
    <child-swiper :banners="banners"/>
    <!-- 推荐 -->
    <recommend-view :recommends="recommends"/>
    <!-- 图片 -->
    <feature-view/>
    <!-- 三选一 -->
    <tab-control class="tab-control" 
    :title="['流行','新款','精选']" @tabClick="tabClick"/>
    <!-- goodsList -->
    <goods-list :goodsList= "showGoods"/>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
    </ul>
  </div>
</template>
<script>

import NavBar from "components/common/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"

import ChildSwiper from "./childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView"

import {getHomeMultidata,getHomeGoods} from "network/home"
export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,

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
    }
  },
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
    },
    // 网络请求方法
    getHomeMultidatas() {
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoodss(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
      })
    }
  },
}
</script>


<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
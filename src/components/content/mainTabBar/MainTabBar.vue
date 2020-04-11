<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tarbar/首页.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tarbar/首页-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item  path="/category">
        <img slot="item-icon" src="~assets/img/tarbar/分类.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tarbar/分类-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item  path="/cart">
        <img slot="item-icon" src="~assets/img/tarbar/购物车.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tarbar/购物车-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item  path="/profile">
        <img slot="item-icon" src="~assets/img/tarbar/我的.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tarbar/我的-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tarbbar/TabBar"
import TabBarItem from "components/common/tarbbar/TabBarItem"
export default {
  name: "component_name",
    components:{
    TabBar,
    TabBarItem,
  }
}
</script>
<style scoped>
</style>
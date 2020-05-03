<template>
  <div class="cart">
    <!-- 顶部 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 滚动列表 -->
    <cart-list></cart-list>
    <!-- 底部导航 -->
    <cart-button-bar/>
  </div>
</template>
<script>
import {mapGetters} from "vuex"

import NavBar from "components/common/navbar/NavBar"

import CartButtonBar from "./childComps/CartButtonBar"
import CartList from "./childComps/CartList.vue"
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartButtonBar
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"])
  },
  
}
</script>
<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
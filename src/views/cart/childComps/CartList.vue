<template>
  <div class="cart-list">    
    <scroll class="content" ref="scroll">
      
      <cart-list-item 
        v-for="(item, index) in cartList" :key="index"
        :listItem="item" class="list-item"/>
      
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll"
import CartListItem from "./CartListItem"
import { mapGetters } from 'vuex'
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    console.log("-----");
    
    this.$refs.scroll.refresh();
  },
}
</script>
<style scoped>
  .cart-list {
   height: calc(100% - 133px);
  }
 .content {
   height: 100%;
   overflow: hidden;
 }
 .list-item {
   margin-top: 2px;
 }
</style>
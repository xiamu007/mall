<template>
  <div class="goodsList">
    <goods-list-item v-for="(item,index) in goodsList" 
    :key="index"
    :goodsItem = "item"/>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem"
export default {
  name: "component_name",
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array
    }
  }
}
</script>
<style scoped>
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
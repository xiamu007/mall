<template>
  <div class="item">
    <img :src="goodsItem.show.img" alt="">
    <div>
      <p>{{goodsItem.title}}</p>
      <span>{{goodsItem.price}}</span>
      <span>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  props: {
    goodsItem: {
      type: Object
    }
  }
}
</script>
<style scoped>
  .item {
    width: 48%;
  }
  .item img{
    width: 100%;
  }
</style>
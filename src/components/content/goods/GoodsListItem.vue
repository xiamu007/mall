<template>
  <div class="item" @click="itemClick">
    <img class="image1" :src="goodsItem.show.img" alt="" @load="imgLoad">
    <div class="content">
      <p class="title">{{goodsItem.title}}</p>
      <div class="text">
        <span class="price">¥{{goodsItem.price}}</span>
        <img class="image233" src="~assets/img/common/favor.png" alt="">
        <span>{{goodsItem.cfav}}</span>
      </div>
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
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("imgLoad")
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid)
    }
  },
}
</script>
<style scoped>
  .item {
    width: 48%;
    font-size: 12px;
    line-height: 12px;
    color: #666;
    text-align: center;
    /* height: 300px; */
    margin-bottom: 5px;
    position: relative;
    padding-bottom: 40px;
  }
  .image1{
    width: 98%;
    border-radius: 5px;
  }
  .content {
    width: 98%;
    padding-bottom: 2px;
    position: absolute;
    bottom: 8px;
  }
  .title {
    display: inline-block;
    white-space: nowrap; 
    width: 100%; 
    overflow: hidden;
    text-overflow:ellipsis;
    margin-left: 5px;
  }
  .price {
    color: #ff5577;
    margin-right: 5px;
  }
  .image233 {
    width: 14px;
    position: relative;
    top: 2.5px;
  }
</style>
<template>
  <div v-if="Object.keys(goods).length !== 0" id="DetailBS">
    <div class="top">
      <div class="titel">
        {{goods.title}}
      </div>
    </div>

    <div class="middle">
      <span class="priceNew">{{goods.newPrice}}</span>
      <span class="priceOld">{{goods.oldPrice}}</span>
      <span class="price3">{{goods.discount}}</span>
    </div>

    <div class="bottom">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="bottom2">
      <span v-for="index in goods.services.length-1" :key="index">
        
        <img class="icon" :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
        
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object
    }
  }
}
</script>
<style scoped>
  #DetailBS {
    padding: 10px 4px;
    /* background-color: #f00; */
  }
  /* 图标大小 */
  .icon {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .titel {
    font-size: 16px;
    color: #222;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .middle {
    margin-bottom: 14px;

  }
  .priceNew {
    font-size: 24px;
    color: var(--color-high-text);
    
  }
  .priceOld {
    font-size: 13px;
    color: #999;
    text-decoration: line-through;
    margin-left: 5px;
  }
  .price3 {
    position: relative;
    bottom: 6px;

    font-size: 12px;
    color: #fff;
    background-color: var(--color-high-text);
    padding: 3px 6px;
    border-radius: 10px;
    margin-left: 5px;
  }
  .bottom {
    display: flex;
    font-size: 13px;
    color: #999;
    line-height: 25px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .bottom2 {
    line-height: 60px;
    font-size: 13px;
    
    color: #222;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid rgba(100, 100, 100, .1);
  }
</style>
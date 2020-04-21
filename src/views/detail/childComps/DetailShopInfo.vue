<template>
  <div id="DetailShopInfo" v-if="Object.keys(shop).length !== 0">
    <div class="logo">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="mid">

      <div class="left">
        <div class="left1">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="left2">
          <div class="sells-count">{{shop.goodsCount}}</div>
          <div class="sells-text">全部宝贝</div>
        </div>
      </div>

      <div class="right">
        <div v-for="(item,index) in shop.score" :key="index" class="rights">
          <span class="right-text">{{item.name}}</span>
          <span class="right-score" :class="{'better-score': item.isBetter}">{{item.score}}</span>
          <span class="better" :class="{'better-text': item.isBetter}">{{item.isBetter ? "高" : "低"}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">
        进店逛逛
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,

    }
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>
<style scoped>
  #DetailShopInfo {
    padding: 16px 8px;
    border-bottom: 4px solid rgba(100,100,100,.1);
  }

  .logo {
    display: flex;
    align-items: center;
    line-height: 45px;
  }

  .logo img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }

  .logo span {
    margin-left: 16px;
  }

  .mid {
    display: flex;
    margin-top: 26px;
  }

  .left {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    position: relative;
    top: 10px;
    height: 40px;
    border-right: 1px solid rgba(0,0,0,.1);
    margin-right: 10px;
  }

  .right {
    flex: 1;
  }

  .rights {
    background-color: #fff;
    display: flex;
    margin-bottom: 8px;
  }

  .sells-count {
    font-size: 18px;
    color: #333;
  }

  .sells-text {
    font-size: 12px;
    color: #333;
    margin-top: 6px;
  }

  /* 右边文字 */
  .right-text {
    flex: .55;
    /* margin-left: 20px; */
    font-size: 13px;
    color: #333;
  }

  /* 右边分数 */
  .right-score {
    flex: .3;
    font-size: 13px;
    color: #5ea732;
  }

  .better-score {
    color: #f13e3a;
  }

  /* 右边的高低文字样式 */
  .better {
    font-size: 13px;
    /* margin-left: 10px; */
    background-color: #5ea732;
    color: #fff;
  }

  .better-text {
    background-color: #f13e3a;
  }

  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
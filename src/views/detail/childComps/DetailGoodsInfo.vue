<template>
  <div id="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="title">
      <div class="start"></div>
      <div class="titles">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>

    <div v-for="(list,index) in detailInfo.detailImage" :key="index">
      <div class="info-key">
        {{list.key}}
      </div>
      <div class="info-list" v-for="(item,indey) in list.list" :key="indey">
        <img :src="item" alt="" @load="imgLoad">
      </div>
    </div>

  </div>

</template>
<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      counter:0 ,
      imageLength: 0,
    }
  },
  methods: {
    imgLoad() {
      this.counter ++;
      if(this.counter === this.imageLength){
        this.$emit("imgLoad");
      }
      

    }
  },
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length;

    }
  },
  
}
</script>
<style scoped>
  #goods-info {
    margin-top: 10px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-list img{
    width: 100%;
  }
  .title {
    padding: 10px 15px;
    font-size: 14px;
    color: #666;
  }
  .titles {
    padding: 10px 0;
  }
  .start, .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .start {
    float: left;
  }
  .end {
    float: right;
  }
  .start::before, .end::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0px;
  }
  .end::after {
    right: 0;
  }
  .info-key {
    font-size: 15px;
    color: #333;
    padding: 0 15px;
    margin-bottom: 10px;
  }
</style>
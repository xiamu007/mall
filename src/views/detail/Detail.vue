<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>
<script>

import DetailSwiper from "./childComps/DetailSwiper"
import DetailNavBar from "./childComps/DetailNavBar"

import {getDetail} from "network/detail"

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: null,
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetails();
  },
  methods: {
    getDetails() {
      getDetail(this.iid)
        .then((res) => {
          this.topImages = res.result.itemInfo.topImages;          
          console.log(res);
      })
    }
  },
}
</script>
<style scoped>
</style>
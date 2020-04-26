<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item,index) in titles" 
          :key="index" 
          class="cItems"
          :class="{active: currentIndex === index}"
          @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: "component_name",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品","参数","评论","推荐"],
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("navClick", index);

    },
    backClick() {
      this.$router.back();
    }
  },
}
</script>
<style scoped>
  .center {
    display: flex;
  }
  .cItems {
    flex: 1;
    font-size: 13px;
  }
  .active {
    color: var(--color-high-text);
  }
  .left img {
    width: 25px;
    margin-top: 9px;
  }
</style>
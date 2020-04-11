<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" 
      :key="index" 
      class="item"
      :class="{active: index === nowIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  props: {
    title: {
      type:Array
    }
  },
  data() {
    return {
      nowIndex:0
    }
  },
  methods: {
    itemClick(index) {
      this.nowIndex = index
      this.$emit("tabClick",index)
    }
  },
}
</script>
<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }
  .item {
    flex: 1;
  }
  .tab-control span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text)
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
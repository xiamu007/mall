<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>
<script>
import TaBBarItem from "./TabBarItem"
export default {
  name: "component_name",
  components: {
    TaBBarItem
  }
}
</script>
<style scoped>
  #tabBar {
    height: 49px;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }
</style>
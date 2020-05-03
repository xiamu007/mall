<template>
  <div class="button">
    <img src="~assets/img/cart/tick.svg" alt="" 
         :class="{check: isChecked}">
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
<style scoped>
  .button img {
    height: 16px;
    border: 1px solid #666;
    border-radius: 50%;
  }
  .check {
    background-color: #f00;
    border: 1px solid #f00;
  }
</style>
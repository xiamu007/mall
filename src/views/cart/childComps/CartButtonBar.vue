<template>
  <div class="buttonBar">
    <div class="left">
      <check-button/>
      <div>全选</div>
    </div>

    <div class="price">
      <span>合计：</span>
      {{totalPrice}}
    </div>

    <div class="right">
      <span>去结算：({{cartLength}})</span>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton"
import {mapGetters} from "vuex"
export default {
  name: "CartButtonBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return "¥" + this.$store.state.cartList.filter(item => {
        return item.isChecked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0) 
    },
    ...mapGetters(["cartLength"])
  },
}
</script>
<style scoped>
  .buttonBar {
    display: flex;
    height: 40px;

    line-height: 40px;
    background-color: #eee;
    font-size: 14px;
  }
  .left {
    display: flex;
    margin-left: 5px;
    width: 60px;
  }
  .left div {
    margin-left: 5px;
    margin-right: 5px;
  }
  .price {
    display: flex;
    flex: 1;
  }
</style>
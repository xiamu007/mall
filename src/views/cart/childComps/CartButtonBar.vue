<template>
  <div class="buttonBar">
    <div class="left">
      <check-button :isChecked="isSelectAll" @click.native="checkClick"/>
      <div>全选</div>
    </div>

    <div class="price">
      <span>合计：</span>
      {{totalPrice}}
    </div>

    <div class="right">
      <span>去结算：({{checkLength}})</span>
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
    ...mapGetters(["cartLength","cartList"]),
    totalPrice() {
      return "¥" + this.$store.state.cartList.filter(item => {
        return item.isChecked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2);
    },
    checkLength() {
      return this.cartList.filter(item => item.isChecked).length
    },
    // 判断是否全选
    isSelectAll() {
      if (this.cartList.length === 0) return false
      for (let item of this.cartList) {
        if (!item.isChecked) {
          return false
        }
      }
      return true;
    },

  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.isChecked = false)
      } else {
        this.cartList.forEach(item => item.isChecked = true)
      }
      
    }
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
  .right {
    width: 90px;
    text-align: center;
    background-color: #f00;
    color: #fff;
  }
</style>
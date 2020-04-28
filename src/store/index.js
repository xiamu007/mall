import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    addCart(state, payload) {
      // payload添加新款
      let oldProduct = null;
      for(let item of state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      // 判断oldProduct
      if (oldProduct) {
        oldProduct.count += 1
      } else {
        payload.count = 1;
        state.cartList.push(payload)
      }
    }
  }
})
export default store 
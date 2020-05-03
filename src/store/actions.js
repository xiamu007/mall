export default {
  addCart(context,payload) {
    // payload添加新款
    let oldProduct = null;
    for(let item of context.state.cartList) {
      if (item.iid === payload.iid) {
        oldProduct = item;
      }
    }
    // 判断oldProduct
    if (oldProduct) {
      context.commit("addCounter", oldProduct);
    } else {
      context.commit("addToCart", payload);
    }
  }
}
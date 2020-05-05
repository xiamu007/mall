export default {
  addCart(context,payload) {
  return new Promise((resolve, reject) => {
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
      resolve("当前商品数量+1")
    } else {
      context.commit("addToCart", payload);
      resolve("添加新商品")
    }
  })
  }
}
export default  {
  addCounter(state, payload) {
    payload.count++;
  },
  addToCart(state, payload) {
    payload.count = 1;
    payload.isChecked = true;
    state.cartList.push(payload);
  }
}
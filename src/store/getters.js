export default {
  cartLength(state) {
    return state.goodList.length
  },
  cartGoods(state) {
    return state.goodList
  }
}
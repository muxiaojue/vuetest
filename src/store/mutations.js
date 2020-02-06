export default {
  addToCart(state, payload) {
    const info = state.goodList.find(element => element.iid === payload.iid)
    if(info) {
      info.count++
    }
    else {
      payload.count = 1
      payload.checked = false
      state.goodList.push(payload)
    }
  }
}
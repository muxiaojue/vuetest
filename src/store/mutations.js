export default {
 
  addCount(state, payload) {
    payload.count++
  },
  addGood(state, payload) {
    payload.count = 1
    payload.checked = false
    state.goodList.push(payload)
  }
}
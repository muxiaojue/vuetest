export default {
  addToCart(context, payload) {
    return new Promise((resolve,reject) => {
      const info = context.state.goodList.find(element => element.iid === payload.iid)
      if(info) {
        context.commit('addCount', info)
        resolve('当前商品数量+1')
      }
      else {
        context.commit('addGood', payload)
        resolve('已添加新商品')
      }
    })

  },
}
<template>
  <div class="bottom-bar">
    <div class="left bar-item">
      <div>客服</div>
      <div>店铺</div>
      <div>收藏</div>
    </div>
    <div class="right bar-item">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit('addToCart')
    },
    buy() {
      console.log('buy');
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    display: flex;
    height: 58px;
    line-height: 58px;
    text-align: center;
    background-color: #fff;
  }
  .bar-item {
    flex: auto;
    display: flex;
    width: 48%;
  }
  .bar-item>div {
    flex: auto;
  }
  .cart {
    width: 50%;
    background-color: yellow;
    color: #222;
  }
  .buy {
    width: 50%;
    background-color: #f69;
    color: #fff
  }
</style>
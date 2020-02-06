<template>
  <div class="cart-good-item">
    
    <div class="good-img">
      <img :src="goodItem.img" alt="">
    </div>
    <div class="good-info">
      <div class="title">{{goodItem.title}}</div>
      <div class="desc">商品描述：{{goodItem.desc}}</div>
      <div class="bottom">
        <div class="price">￥{{goodItem.price}}</div>
        <div class="count">×{{goodItem.count}}</div>
      </div>
    </div>
    <div class="check-buttom">
      <check-buttom :isChecked="goodItem.checked" @click.native="checkClick"></check-buttom>
    </div>
  </div>
</template>

<script>
import CheckButtom from 'components/content/checkButtom/CheckButtom.vue'
export default {
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButtom,
  },
  methods: {
    checkClick() {
      this.goodItem.checked = !this.goodItem.checked
    }
  }
}
</script>

<style scoped>
  .cart-good-item {
    width: 100%;
    display: flex;
    margin: 4% 1%;
    padding-right: 2%; 
    border-bottom: rgb(190, 189, 189) solid 2px;
  }
  .cart-good-item>div {
    flex: auto;
  }
  .check-buttom {
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: center;
    
  }
  .check-buttom .buttom {
    width: 20px;
    height: 20px;
  }
  .good-img {
    margin: 0 2%;
  }
  .good-img img {
    width: 80px;
    height: 100px;
    border-radius: 10px;
  }
  .good-info {
    overflow: hidden;
    position: relative;
    padding: 0 2%;
  }
  .title {
    color: #333;
  }
  .desc {
    margin: 8% 0;
    font-size: 14px;
  }
  .title,.desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
  }
  .count {
    text-align: right;
    position: relative;
    right: 7%;
  }
</style>
<template>
  <div v-if="Object.keys(goodInfo).length !== 0" class="good-info">
    <div class="info-title">{{goodInfo.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goodInfo.price}}</span>
      <span class="old-price">{{goodInfo.oldPrice}}</span>
      <span class="discount" 
        :style="{backgroundColor: goodInfo.discountBgColor}"
        v-if="goodInfo.discountDesc">
          {{goodInfo.discountDesc}}
      </span>
    </div>
    <div class="info-other">
      <span>{{goodInfo.columns[0]}}</span>
      <span>{{goodInfo.columns[1]}}</span>
      <span>{{goodInfo.services[goodInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goodInfo.services.length-1" :key="index-1">
        <img :src="goodInfo.services[index-1].icon">
        <span>{{goodInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .good-info {
    margin-top: 4%;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #222;
  }
  .info-price {
    margin: 4% 0 4%;
  }
  .info-price span {
    margin-right: 3%;
  }
  .new-price {
    color: crimson;
    font-size: 150%;
  }
  .old-price {
    font-size: 90%;
    text-decoration: line-through;
  }
  .discount {
    border-radius: 8px; 
    color: #fff;
    padding: 0 2% 0 1%;
    position: relative;
    top: -4px;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    font-size: 80%;
    margin: 0 0 4%;
    border-bottom: 3px solid #f2f5f8;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    color: #222;
  }
  .info-service-item {
    font-size: 85%;
  }
  .info-service-item img {
    width: 13px;
  }
</style>
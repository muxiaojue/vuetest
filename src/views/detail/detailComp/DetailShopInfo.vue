<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">

    <div class="shop-title">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>

    <div class="shop-description">
      <div class="count">
        <div class="count-sell">
          <div class="number">{{shopInfo.cSells | showSells}}</div>
          <div class="text">总销量</div>
        </div>
        <div class="count-good">
          <div class="number">{{shopInfo.cGoods}}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>

      <div class="score">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td :class="{'score-best': item.isBetter}" class="score-normal">{{item.score}}</td>
            <td>
              <span :class="{'text-best': item.isBetter}" class="text-normal">
                {{item.isBetter ? '高' : '低'}}
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="into-shop">
      <div class="into-shop-text">
        进店逛逛
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showSells(sells) {
      return sells >= 10000 ? (sells / 10000).toFixed(1) + '万' : sells
    }
  },
  methods: {
    scoreColor(best) {
      return best ? 'score-best' : 'score-no-best'
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 6% 2%;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-title {
    /* line-height: 45px; */
    display: flex;
    align-items: center;
    /* 垂直居中对齐 */
  }
  .shop-title span{
    margin-left: 1%;
  }
  .shop-title img {
    width: 13%;
    border-radius: 50%;
    border: 1px solid black;
  }

  .shop-description {
    padding: 8% 0 2%;
    color: #222;
    
    display: flex;
    align-items: center;
  }
  .shop-description>div {
    width: 48%;
  }
  .count {
    display: flex;
    justify-content: space-around;
    border-right: rgb(161, 156, 156) solid 1px; 
    text-align: center;
  }
  .count .number {
    font-size: 130%;
  }
  .count .text {
    margin-top: 18%;
    font-size: 80%;
  }
  .score table {
    width: 80%;
    margin-left: 10%;
  }
  .score td {
    padding: 5px 0;
    /* margin-right: 3%; */
    font-size: 90%;
  }
  .score-normal {
    color: #f13e3a;
  }
  .score-best {
    color: #5ea732;
  }
  .text-normal {
    background-color: #f13e3a;
    color: #fff
  }
  .text-best {
    background-color: #5ea732;
  }

  .into-shop {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .into-shop-text {
    width: 40%;
    border-radius: 24px;
    background-color:rgba(203, 217, 228, 0.603);
    padding: 1%;
  }
</style>
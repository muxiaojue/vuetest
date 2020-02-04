<template>
  <div class="good-lists-item">
    <img 
      :src="getImg" 
      alt="" 
      @load="imgLoad" 
      @click="imgClick">

    <div class="good-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    getImg() {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('goodImgLoad')
    },
    imgClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
  .good-lists-item {
    width: 48%;
    /* flex: 48%; */
    padding: 0 1% 10%;
    position: relative;
  }
  .good-lists-item img {
    max-width: 100%;
    border-radius: 5%;
  }
  .good-info {
    font-size: 14px;
    position: absolute;
    bottom: 0.5%;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .good-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .good-info .price {
    /* color: var(--color-high-text); */
    color: coral;
    margin-right: 20px;
  }

  .good-info .collect {
    position: relative;
  }

  .good-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
<template>
  <div class="good-show" v-if="Object.keys(goodDetail).length !== 0">
    <div class="detail-desc">
      <div class="start"></div>
      <div class="desc-text">{{goodDetail.desc}}</div>
      <div class="end"></div>
    </div>

    <div class="detail-image">
      <div class="detail-key">{{goodDetail.detailKey}}</div>
      <div class="detail-image-item" v-for="(item,index) in goodDetail.detailImages" :key="index">
        <img :src="item" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodDetail: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('detailImgLoad')
    }
  }
}
</script>

<style scoped>
  .good-show {
    padding: 4%;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-desc .start, .detail-desc .end {
    width: 30%;
    height: 1.5px;
    background-color: #a3a3a5;
    position: relative;
  }
  .desc-text {
    margin: 4% 0 4%;
  }
  .detail-desc .end {
    float: right;
  }
  .detail-desc .start::before, .detail-desc .end::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 5px;
    background-color: #222;
  }
  .detail-desc .end::after {
    right: 0;
  }

  .detail-image {
    padding: 4% 0 2%; 
    color: #333;
  }
  .detail-image .detail-key {
    margin-bottom: 3%;
  }
  .detail-image-item {
    width: 100%;
  }
  .detail-image-item img {
    width: 100%;
  }
</style>
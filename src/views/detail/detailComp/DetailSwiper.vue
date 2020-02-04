<template>
  <swiper class="detail-swiper" v-if="images.length">
    <swiper-item v-for="(item,index) in images" :key="index" class="detail-image">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  /* .detail-swiper {
    text-align: center;
    vertical-align: middle;
    background-color:mintcream;
  } */
  .detail-image {
    /* width: 50%; */
    height: 45vh;
  }
</style>
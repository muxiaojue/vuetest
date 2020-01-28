<template>
  <swiper-test>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper-test>
</template>

<script>
  import {SwiperTest, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      SwiperTest,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>

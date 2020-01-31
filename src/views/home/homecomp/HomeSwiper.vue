<template>
  <swiper-test>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
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
    data() {
      return {
        isLoad: false,
      }
    },
    components: {
      SwiperTest,
      SwiperItem
    },
    methods: {
      imgLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImgLoad')
        }
        else {
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>

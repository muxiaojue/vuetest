<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
import HomeSwiper from './homecomp/HomeSwiper.vue'
import HomeNavBar from './homecomp/HomeNavBar.vue'
import HomeRecommend from './homecomp/HomeRecommend.vue'
import {getHomeMultidata} from 'network/home.js'

export default {
  data(){
    return {
      banners: [],
      recommends: [],
    }
  },
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
  },
  created(){
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
  
</style>
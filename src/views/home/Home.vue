<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <tab-control 
      :titles="tabTitles" 
      @tabClick="tabClick" 
      ref="tabControlSlide" 
      v-show="isTabFixed"/>

    <scroll 
      ref="scroll" 
      :probeType="3" 
      @scroll="scroll" 
      :pullUpLoad="true"
      @pullingUp="loadMore">
        <home-swiper 
          :banners="banners" 
          ref="swiper" 
          @swiperImgLoad="swiperImgLoad"/>
        <home-recommend :recommends="recommends" ref="recommend"/>
        <home-feature ref="feature"/>
        <tab-control 
          :titles="tabTitles" 
          @tabClick="tabClick" 
          ref="tabControlFixed"/>
        <good-lists :goods="showGoods"/>
    </scroll>
    <back-top @backImgClick="backImgClick" v-show="isBackTopShow"/>
  </div>
</template>

<script>
import HomeSwiper from './homeComp/HomeSwiper.vue'
import HomeNavBar from './homeComp/HomeNavBar.vue'
import HomeRecommend from './homeComp/HomeRecommend.vue'
import HomeFeature from './homeComp/HomeFeature.vue'

import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodLists from 'components/content/goodLists/GoodLists.vue'

import Scroll from 'components/common/scroll/Scroll.vue'

import {getHomeMultidata, getHomeGoods} from 'network/home.js'
import {debounce} from 'common/tools.js'
import {goodRefreshMixin, backTop} from 'common/mixin.js'

export default {
  mixins: [goodRefreshMixin, backTop],
  data() {
    return {
      banners: [],
      recommends: [],
      tabTitles: ['流行', '新款', '精选'],
      homeGoods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      scrollY: 0,
    }
  },
  components: {
    HomeSwiper,
    HomeNavBar,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodLists,
    Scroll,
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    
  },
  mounted() {
    
    // 这个防抖刷新已混入
    // const refresh = debounce(this.$refs.scroll.refresh, 500)
    // // 防抖，让多次执行的操作只执行最后一次
    // this.$bus.$on('goodImgLoad', () => {
    //   refresh()
    //   console.log('home refresh');
      
    //   // this.$refs.scroll.refresh()
    //   // 监听goodListsItem中的图片加载，加载一张执行一次$on中的函数一次
    //   // 解决bscroll计算滚动scrollHeight与请求图片数据的异步冲突导致的滚动区域错误

    // })
  },
  // updated() {
  // 用updated阶段计算offsetTop时，图片似乎没有完成渲染？
  //   console.log('swiper',this.$refs.swiper.$el.offsetTop);
  //   console.log('recommend',this.$refs.recommend.$el.offsetTop);
    

  //   console.log('feature',this.$refs.feature.$el.offsetTop)

  //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
  //   console.log('tab',this.tabOffsetTop);
    
    
  // },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.scrollY, 0)
    // 设置第三个参数为0时，上拉加载切换tabber有可能回弹到顶部，改为1解决
    
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY()
    // 离开首页时保存当前滚动距离
    this.$bus.$off('goodImgLoad', this.imgListener)
    // console.log(this.$bus._events);
    // 离开首页时取消goodListsItem加载的事件总线监听
  },
  destroyed() {
    console.log('destroyed');
    
  },
  computed: {
    showGoods() {
      return this.homeGoods[this.currentType].list
    }
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.homeGoods[type].page + 1
      
      getHomeGoods(type, page).then(res => {
        this.homeGoods[type].list.push(...res.data.list)        
        this.homeGoods[type].page = page
      })
    },

    tabClick(index){
      this.currentType = ['pop', 'new', 'sell'][index]
      this.$refs.tabControlFixed.currentIndex = index
      this.$refs.tabControlSlide.currentIndex = index
    },
    scroll(position) {
      this.isBackTopShow = position.y < -1000

      this.isTabFixed = this.tabOffsetTop < -position.y
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },

    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControlFixed.$el.offsetTop
    }
  }
}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    /* vh是视图单位，100vh即满视图 */
    position: relative;
  }
  /* .swiperBox { */
    /* 这个类是在封装时定义的 */
    /* margin-top: 44px; */
  /* } */
  .tab-control {
    /* position: sticky; */
    /* sticky在better-scroll内失效 */
    /* top: 44px;*/
    position: relative;
    z-index: 5; 
  }
  .wrapper {
    position: absolute;
    /* margin-top: 44px; 可以让top为0，再加margin-top*/
    top:44px;
    /* scroll设置使上面swiperBox的margin设置失效所以需要设置top */
    /* 似乎scroll会让相关的postion设置失效？但它没有让底部导航失效 */
    bottom: 49px;
    
    overflow: hidden;
  }

  /* .fixed {
    position: fixed;
    top: 44px;
    left: 0px;
    right: 0px;
  } */
</style>
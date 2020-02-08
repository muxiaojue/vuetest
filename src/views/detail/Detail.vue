<template>
  <div id="detail">
    <detail-nav @titleClick="titleClick" ref="nav"/>
    <scroll ref="scroll" @scroll="scroll" :probeType="3">
      <detail-swiper :images="swiperImgs" @swiperImgLoad="swiperImgLoad"/>
      <detail-good-info :goodInfo="goodInfo" />
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-good-show :goodDetail="goodDetail" @detailImgLoad="detailRefresh"/>
      <detail-param-info :paramInfo="paramInfo" ref="param"/>
      <detail-comment :comment="comment" ref="comment" @comImgLoad="comImgLoad"/>
      <detail-recommend :recommend="recommend" ref="recommend"/>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addCart="addCart"/>
    <back-top @backImgClick="backImgClick" v-show="isBackTopShow"/>
    <hint ref="hint"/>
  </div>
</template>

<script>
import DetailNav from './detailComp/DetailNav.vue'
import DetailSwiper from './detailComp/DetailSwiper.vue'
import DetailGoodInfo from './detailComp/DetailGoodInfo.vue'
import DetailShopInfo from './detailComp/DetailShopInfo.vue'
import DetailGoodShow from './detailComp/DetailGoodShow.vue'
import DetailParamInfo from './detailComp/DetailParamInfo.vue'
import DetailComment from './detailComp/DetailComment.vue'
import DetailRecommend from './detailComp/DetailRecommend.vue'
import DetailBottomBar from './detailComp/DetailBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll.vue'
import Hint from 'components/common/hint/Hint.vue'


import {
  getDetailData, 
  getRecommend,
  goodInfo, 
  shopInfo, 
  goodDetail, 
  paramInfo, 
} from 'network/detail.js'

import {debounce} from 'common/tools.js'
import {goodRefreshMixin, backTop} from 'common/mixin.js'
import {mapActions} from 'vuex'
export default {
  name: 'Detail',
  mixins: [goodRefreshMixin, backTop],
  data() {
    return {
      iid: null,
      swiperImgs: [],
      goodInfo: {},
      shopInfo: {},
      goodDetail: {},
      paramInfo: {},
      comment: {},
      recommend: [],
      themeTops: [],
      detailViewRefresh: null,
      getThemeTops: null,
      hintMsg: '',
    }
  },
  components: {
    DetailNav,
    DetailSwiper,
    DetailGoodInfo,
    DetailShopInfo,
    DetailGoodShow,
    DetailParamInfo,
    DetailComment,
    DetailRecommend,
    DetailBottomBar,
    Scroll,
    Hint,
  },
  created() {
    this.getDetailData()
    this.getRecommend()
    this.getThemeTopsFunc()
    this.getDetailViewRefresh()
  },
  mounted() {
    this.$refs.recommend.$el.addEventListener('detailImgLoad', () => {
      this.detailViewRefresh()
    })
  },
  beforeDestroy() {
    this.$bus.$off('goodImgLoad', this.imgListener)
  },
  methods: {
    ...mapActions(['addToCart']),
    getDetailData() {
      // 获取详情页要展示的数据
      this.iid = this.$route.params.iid
      getDetailData(this.iid).then(res => {
        // console.log(res);
        const data = res.result
        this.swiperImgs = data.itemInfo.topImages

        this.goodInfo = new goodInfo(
          data.itemInfo, 
          data.columns, 
          data.shopInfo.services
        )

        this.shopInfo = new shopInfo(data.shopInfo)
        
        this.goodDetail = new goodDetail(data.detailInfo)
        
        this.paramInfo = new paramInfo(
          data.itemParams.info.set, 
          data.itemParams.rule.tables
        )
        if(data.rate.cRate){
          this.comment = data.rate.list[0]
        }
      })
    },
    getRecommend() {
      // 得到详情页推荐数据
      getRecommend().then(res => {
        this.recommend = res.data.list
      })
    },

    getDetailViewRefresh() {
      // 定义一个详情页刷新函数
      this.detailViewRefresh = debounce(() => {this.$refs.scroll.refresh 
      }, 200)
      // 防抖刷新依然有可能bscroll出现滚动区域计算错误
      // 无防抖计算正确，但影响性能
    },
    detailRefresh() {
      // 详情页图片加载完成后刷新
      this.detailViewRefresh()
      this.getThemeTops()
      // 获取各标题内容的offsetTop
    },
    comImgLoad() {
      this.detailViewRefresh()
    },
    swiperImgLoad() {
      this.$refs.scroll.refresh()
    },

    getThemeTopsFunc() {
      // 使获取函数防抖
      this.getThemeTops = debounce(() => {
        this.themeTops = []
        this.themeTops.push(0)
        this.themeTops.push(this.$refs.param.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
        // 最后压入一个最大值是为了方便区间判断
      }, 200)
    },
    titleClick(index) {
      // 滚动到主题位置
      this.$refs.scroll.scrollTo(0, -this.themeTops[index])
    },
    scroll(position) {
      // 滚动判断位置来触发对应导航标题活跃状态
      this.themeTops.forEach((theme,index) => {
        if(-position.y >= this.themeTops[index] 
          && -position.y < this.themeTops[index+1] 
          && this.$refs.nav.currentIndex !== index) {
            this.$refs.nav.currentIndex = index
        }
      })
      // 判断是否显示回到顶部
      this.isBackTopShow = -position.y > 1000
    },
    addCart() {
      const cartInfo = {}
      cartInfo.iid = this.iid
      cartInfo.img = this.swiperImgs[0]
      cartInfo.price = this.goodInfo.truePrice
      cartInfo.title = this.goodInfo.title
      cartInfo.desc = this.goodDetail.desc
      
      this.addToCart(cartInfo).then((res) => {
        this.$refs.hint.show(res)
        // this.$hint.show(res)
        // console.log(this.$hint);
        // console.log(this.$hint.methods);
        
      })
    }
  }
}
</script>

<style scoped>
  #detail {
    height: 100vh;
    max-width: 100%;
    position: relative;
    z-index: 5;
    background-color: #fff
  }
  .detail-swiper {
    margin-top: 0.5%;
  }
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 58px;
    overflow: hidden;
  }
  .bottom-bar {
    position: fixed;
    bottom: 0px;
  }
  .back-top {
    bottom: 63px;
  }
</style>
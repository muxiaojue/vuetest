<template>
  <div class="detail">
    <detail-nav/>
    <scroll ref="scroll">
      <detail-swiper :images="swiperImgs"/>
      <detail-good-info :goodInfo="goodInfo" />
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-good-show :goodDetail="goodDetail" @detailImgLoad="refresh"/>
      <detail-param-info :paramInfo="paramInfo"/>
      <detail-comment :comment="comment"/>
      <detail-recommend :recommend="recommend" ref="recommend"/>
    </scroll>
    
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

import Scroll from 'components/common/scroll/Scroll.vue'

import {
  getDetailData, 
  getRecommend,
  goodInfo, 
  shopInfo, 
  goodDetail, 
  paramInfo, 
} from 'network/detail.js'

import {debounce} from 'common/tools.js'
import {mixin} from 'common/mixin.js'

export default {
  name: 'Detail',
  mixins: [mixin],
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
    Scroll,
  },
  created() {
    this.getDetailData()
    this.getRecommend()
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    
    this.$refs.recommend.$el.addEventListener('detailImgLoad', () => {
      refresh()
    })
    console.log('detailrefresh');
  },
  beforeDestroy() {
    this.$bus.$off('goodImgLoad', this.imgListener)
  },
  methods: {
    getDetailData() {
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
      getRecommend().then(res => {
        this.recommend = res.data.list
        // console.log(this.recommend);
        
      })
    },
    refresh() {
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      refresh()
    }
  }
}
</script>

<style scoped>
  .detail {
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
    bottom: 0px;
    overflow: hidden;
  }
</style>
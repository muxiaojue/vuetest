import {debounce} from './tools.js'
import BackTop from 'components/content/backTop/BackTop.vue'

export const goodRefreshMixin = {
  data() {
    return {
      imgListener: null
    }
  },
  mounted() {
    const goodRefresh = debounce(this.$refs.scroll.refresh, 500)
    this.imgListener = () => goodRefresh()
    this.$bus.$on('goodImgLoad', this.imgListener)
  },
}

export const backTop = {
  data() {
    return {
      isBackTopShow: false
    }
  },
  components: {
    BackTop,
  },
  methods: {
    backImgClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  },
}
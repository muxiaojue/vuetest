import {debounce} from './tools.js'

export const mixin = {
  data() {
    return {
      imgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.imgListener = () => refresh()
    this.$bus.$on('goodImgLoad', this.imgListener)
  }
}
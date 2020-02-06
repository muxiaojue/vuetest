<template>
  <div class="cart">
    <cart-nav-bar/>
    <scroll class="scroll" ref="scroll">
      <cart-good/>
    </scroll>
    <bottom-bar />
  </div>
</template>

<script>
import CartNavBar from './cartComp/CartNavBar.vue'
import CartGood from './cartComp/CartGood.vue'
import BottomBar from './cartComp/BottomBar.vue'
import CartCalc from './cartComp/CartCalc.vue'

import Scroll from 'components/common/scroll/Scroll.vue'

export default {
  components: {
    CartNavBar,
    CartGood,
    CartCalc,
    BottomBar,
    Scroll,
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart {
    height: 100vh;
    position: relative;
  }
  .scroll {
    width: 100%;
    position: absolute;
    top: 44px;
    overflow: hidden;
    bottom: 49px;
  }
  .calc {
    position: fixed;
    bottom: 49px;
  }
</style>
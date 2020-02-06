<template>
  <div class="cart-good">
    <cart-good-item 
      v-for="(item,index) in cartGoods" 
      :key="index" 
      :goodItem="item"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import CartGoodItem from './CartGoodItem'
export default {
  computed: {
    ...mapGetters(['cartGoods'])
  },
  components: {
    CartGoodItem,
  }
}
</script>

<style scoped>

</style>
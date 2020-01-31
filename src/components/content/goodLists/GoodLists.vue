<template>
  <div class="good-lists">
    <good-lists-item 
    v-for="(item,index) in goods" 
    :key="index" 
    :goodsItem="item"/>
  </div>
</template>

<script>
import GoodListsItem from './GoodListsItem.vue'
export default {
  components: {
    GoodListsItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  
}
</script>

<style scoped>
  .good-lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
<template>
  <div class="recommend">
    <div class="recommend-text">热门推荐</div>

    <good-lists :goods="recommend"/>
  </div>
</template>

<script>
import GoodLists from 'components/content/goodLists/GoodLists.vue'

export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodLists,
  }
  // updated() {
  //   console.log(this.recommend);
  // }
}
</script>

<style scoped>
  .recommend {
    padding: 4%;
  }
  .recommend-text {
    margin-bottom: 4%;
  }
</style>
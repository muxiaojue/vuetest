<template>
  <nav-bar class="home-nav">
    <template v-slot:center>
      <div>首页</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .home-nav {
    /* z-index: 5; */
    /* position: sticky;
    top: 0; */
  }
</style>
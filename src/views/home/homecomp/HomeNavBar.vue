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

<style>
  .home-nav {
    background-color: salmon;
    color: #fff;
  }
</style>
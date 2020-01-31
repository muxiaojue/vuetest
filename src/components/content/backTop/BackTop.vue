<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" @click="backImgClick">
  </div>
</template>

<script>
export default {
  methods: {
    backImgClick() {
      this.$emit('backImgClick')
    }
  }
}
</script>

<style scoped>
  .back-top {
    width: auto;
    position: fixed;
    bottom: 55px;
    right: 0px;
    text-align: center;
  }
  .back-top img {
    width: 60%;
    height: 60%;
  }
</style>
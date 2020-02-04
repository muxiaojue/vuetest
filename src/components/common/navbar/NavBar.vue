<template>
  <div class=nav-bar>
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    /* 设置line-height可以实现垂直居中 */
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
  }

  /* 实现固定在顶部随页面滑动，也可以用position: sticky实现 */
  /* 这个设置在better-scroll设置滑动区域后可以取消，因为navbar不包含在滑动区域内 */
  /* .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  } */
  
  .left,.right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
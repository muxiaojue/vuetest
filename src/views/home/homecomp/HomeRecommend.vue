<template>
  <div class="recommend">
    <div class="recommendItem" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    margin-top: 2px;
    text-align: center;
    /* margin: 3% 0 3%;  */
    /* padding: 2% */
    border-bottom: 8px #eee solid;
  }
  .recommendItem {
    flex: auto;
    padding: 3%;
    margin-bottom: 4%;
  }
  .recommendItem img {
    max-width: 100%;
    /* 设置图片最大宽度，结合盒子的flex布局，可以实现图片自适应 */
    margin-bottom: 10%;
  }
</style>
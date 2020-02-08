<template>
  <div class="sub-category">
    <div v-for="(item,index) in subCategory" :key="index" class="sub">
      <a :href="item.link">
        <img :src="item.image" alt="" class="sub-img">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subCategory: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped> 
  .sub-category {
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
  }
  .sub-category .sub {
    width: 23%;
    /* flex: auto; */
    margin: 2% 5%;
  }
  .sub-img {
    width: 100%;
    margin-bottom: 10%;
  }
</style>
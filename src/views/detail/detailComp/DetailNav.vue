<template>
  <nav-bar>

    <template v-slot:left>
      <div class="back-img" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </template>

    <template v-slot:center>
      <div class="nav-titles">
        <div 
          v-for="(title,index) in titles" 
          :key="index"
          class="nav-titles-item"
          :class="{active: index === currentIndex}"
          @click="titleClick(index)">
            {{title}}
        </div>
      </div>
    </template>

  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  data() {
    return { 
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0, 
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    back() {
      this.$router.back()
    },
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: #fff;
    color: #222;
  }
  .nav-titles {
    display: flex;
    font-size: 90%;
  }
  .nav-titles-item {
    flex: auto;
  }
  .back-img img {
    vertical-align: middle;
  }
  .active {
    color: palevioletred;
    /* border-bottom: 5px palevioletred solid; */
  }
</style>
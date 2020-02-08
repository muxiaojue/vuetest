<template>
  <div class="category-list">
    <div v-for="(item,index) in categoryList" 
      :key="index" 
      class="list-item" 
      :class="{active: index === currentIndex}"
      @click="categoryClick(index)">
        {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    categoryClick(index) {
      this.currentIndex = index
      this.$emit('categoryClick', index)
    }
  }
}
</script>

<style scoped>
  .category-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(233, 233, 233, 0.753);
    text-align: center;
    font-size: 15px;
    /* align-items: center; */
  }
  .category-list .list-item {
    flex: auto;
    height: 50px;
    line-height: 50px;
  }
  .active {
    background-color: #fff;
    color: palevioletred;
    border-left: 3px solid palevioletred;
  }
</style>
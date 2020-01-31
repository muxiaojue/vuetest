<template>
  <div class="tab-control">
    <div class="tab" 
    v-for="(item,index) in titles" 
    :key="index" 
    :class="isActive(index)" 
    @click="activeChange(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    activeChange(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    },
    isActive(index) {
      return {active: index === this.currentIndex}
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 20px;
    background-color: lemonchiffon;
    margin-bottom: 3%;
  }
  .tab {
    flex: auto;
    margin: 3%;
  }
  .tab span {
    padding-bottom: 5%;
  }
  .active span {
    border-bottom: 3px palevioletred solid;
  }
  .active {
    color: palevioletred;
  }
</style>
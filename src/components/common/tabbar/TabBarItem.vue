<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red',
    }
  },
  data(){
    return {

    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      if(this.$route.path != this.path){
        // 不添加判断条件时，重复点击一个组件两次，浏览器报错，但可以执行程序
        this.$router.replace(this.path)
        // 可以增加操作，点击当前页面会刷新
      }
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    height: 25px;

  }
  /* .active{
    color: red
  } */
</style>
<template>
  <div class="hint" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      message: '',
    }
  },
  methods: {
    show(message, time=2000) {
      console.log('```');
      
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, time);
    },
    tet() {
      console.log('111');
      
    }
  }
}
</script>

<style scoped>
  .hint {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    line-height: 40px;
    text-align: center;
    background-color: rgba(175, 168, 168, 0.479);
    color: #111;
    font-size: 15px;
    z-index: 99;
  }
</style>
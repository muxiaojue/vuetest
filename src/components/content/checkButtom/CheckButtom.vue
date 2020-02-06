<template>
  <div class="check" :class="{checked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped>
  .check {
    border-radius: 50%;
    text-align: center;
    border: 2px solid #ccc
  }
  .checked {
    background-color: coral;
    border-color: coral;
  }
</style>
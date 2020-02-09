<template>
  <div class="service">
    <div class="service-item">
      <img src="~assets/img/profile/message.svg" alt="">
      <div class="service-text">我的消息</div>
    </div>
    <div class="service-item">
      <img src="~assets/img/profile/shopping.svg" alt="">
      <div class="service-text">积分商城</div>
    </div>
    <div class="service-item">
      <img src="~assets/img/profile/vip.svg" alt="">
      <div class="service-text">会员卡</div>
    </div>
    <div class="service-item">
      <img src="~assets/img/profile/pointer.svg" alt="">
      <div class="service-text">下载APP</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .service-item {
    padding: 4% 4% 0 4%;
    width: 100%;
    position: relative;
    display: flex;
    font-size: 15px;
  }
  .service-item img {
    width: 6%;
    position: relative;
    bottom: 8px; 
  }
  .service-item .service-text {
    margin-left: 3%;
    border-bottom: 2px solid #f2f2f2;
    flex: auto;
    padding: 0 0 3% 0;
  }
</style>
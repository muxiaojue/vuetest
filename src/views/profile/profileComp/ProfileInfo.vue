<template>
  <div class="user-info">
    <div class="left">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>

    <div class="center">
      <div class="center-login">登录/注册</div>
      <div class="center-phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    
    <div class="right">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .user-info {
    padding: 1% 3%;
    background-color: salmon;
    display: flex;
  }
  .user-info .left {
    width: 20%;
  }
  .user-info .left img {
    width: 100%;
  }
  .user-info .center {
    width: 70%;
    padding: 4% 1%;
    color: #fff;
    position: relative;
  }
  .center .center-phone {
    font-size: 12px;
  }
  .user-info .center img {
    width: 8%;
    position: relative;
    top: 5px;
  }
  .user-info .right {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-info .right img {
    width: 50%;
  }
</style>
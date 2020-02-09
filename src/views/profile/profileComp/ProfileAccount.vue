<template>
  <div class="account">
    <div class="left">
      <div class="number"><span>{{account.balance | showBalance}}</span>元</div>
      <div>我的余额</div>
    </div>
    <div class="center">
      <div class="number"><span>{{account.disc}}</span>个</div>
      <div>我的优惠</div>
    </div>
    <div class="right">
      <div class="number"><span>{{account.integral}}</span>分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    account: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showBalance(balance) {
      return balance.toFixed(2)
    }
  }
}
</script>

<style scoped>
  .account {
    display: flex;
    border-bottom: 10px solid #f2f2f2;
    text-align: center;
    font-size: 14px;
  }
  .account>div {
    padding: 6%;
    flex: auto;
  }
  .account .left, .account .center {
    border-right: 3px solid #f2f2f2;
  }
  .number>span{
    font-size: 24px;
    color: #ff5f3e;
    font-weight: bolder;
  }
  .number {
    margin-bottom: 6%;
  }
</style>
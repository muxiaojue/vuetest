<template>
  <div id="profile">
    <nav-bar>
      <template v-slot:center>
        我的商城
      </template>
    </nav-bar>
    <profile-info/>
    <profile-account :account="account"/>
    <profile-service/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import ProfileInfo from './profileComp/ProfileInfo.vue'
import ProfileAccount from './profileComp/ProfileAccount.vue'
import ProfileService from './profileComp/ProfileService.vue'
export default {
  data() {
    return {
      account: {
        balance: 0.00,
        disc: 0,
        integral: 0,
      }
    }
  },
  components: {
    NavBar,
    ProfileInfo,
    ProfileAccount,
    ProfileService,
  }
}
</script>

<style scoped>
  
</style>
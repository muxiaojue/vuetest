import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
// import Hint from 'components/common/hint'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 给Vue原型添加一个可用于发射和接收全局事件的Vue实例，称之为事件总线
// 应当在beforeDestroy中this.$bus.$off销毁，否则会叠加触发次数

// Vue.use(Hint)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

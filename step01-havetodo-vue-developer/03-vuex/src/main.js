import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  store,  // store을 전역으로 등록
  render: h => h(App),
}).$mount('#app')

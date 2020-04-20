import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
//自定义指令
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color='#'+Math.random().toString(16).slice(2,8)
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
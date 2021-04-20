import Vue from 'vue'
import App from './App.vue'
import LoadingMask from "../src";

Vue.config.productionTip = false
Vue.use(LoadingMask)

new Vue({
  render: h => h(App),
}).$mount('#app')

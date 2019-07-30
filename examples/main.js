import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MUI from '../packages/src/index'
Vue.use(MUI)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#mui')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = process.env.NODE_ENV === 'production';
// console.log(process.env.VUE_APP_SERVICE_URL,process.env.VUE_APP_BASE_API) // 开发环境 development, 生产环境 production 

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import * as filters from './filters/'
import $axios from './utils/fetch'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.performance = true // 设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API 的浏览器上。
Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。

Vue.use(iView)

/* 注册全局过滤器 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* 全局注册fetch */
Vue.prototype.$axios = $axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

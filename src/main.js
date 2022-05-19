// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/global.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import request from './utils/request'
import locale from 'element-ui/lib/locale/lang/en'

import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table', TreeTable)

// 全局使用，在main.js中注册
// import axios from 'axios'
// Vue.prototype.$axios = axios
Vue.prototype.request = request

Vue.use(ElementUI)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
}).$mount('#app')

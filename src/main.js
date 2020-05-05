import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// 解决移动端300ms点击问题
FastClick.attach(document.body);
// 图片懒加载
Vue.use(VueLazyLoad)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

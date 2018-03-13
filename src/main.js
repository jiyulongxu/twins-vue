// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' /* 这里是引入vuejs文件 */
import Home from './pages/home' /* 这里是引入同目录下的App.vue模块 */
import router from './router' /* 这里是引入vue的路由 */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', /* 定义作用范围就是index.html里的id为app的范围内 */
  router, /* 引入路由 */
  components: { Home }, /* 注册引入的组件App.vue */
  template: '<Home/>' /* 给Vue实例初始一个App组件作为template 相当于默认组件 */
})

import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

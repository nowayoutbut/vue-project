// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';

sync(store, router);

Vue.config.productionTip = false;
/* eslint-disable no-new */
// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>',
});
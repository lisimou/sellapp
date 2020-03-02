import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.config.productionTip = false

//把store数据放入到Vue实例中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

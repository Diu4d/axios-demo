import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)

new Vue({
  router,
<<<<<<< HEAD
    render: h => h(App)
=======
  render: h => h(App)
>>>>>>> 04b3c50e283eedf81e2a4d7a187b20be8e91dff0
}).$mount('#app')

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8082'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios

Vue.config.productionTip = false;

Vue.use(ElementUI)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

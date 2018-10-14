// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

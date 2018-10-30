import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";
import { post, get } from "./request.js";

import "./assets/iconfont/iconfont.css"
import '@/styles/index.scss' // global css

Vue.config.productionTip = false;
Vue.prototype.$post = post;
Vue.prototype.$get = get;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

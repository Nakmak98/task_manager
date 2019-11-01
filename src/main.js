import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import BaseInput from "./components/base/BaseInput";
import BaseButton from "./components/base/BaseButton";

Vue.config.productionTip = false;
Vue.component('base-input', BaseInput);
Vue.component('base-button', BaseButton);
new Vue({
    store,
    render: h => h(App)
}).$mount("#app");

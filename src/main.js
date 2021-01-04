import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/css/styles.css";
import i18n from './i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

Vue.mixin({
	data: function() {
		return {
			get getName() {
				return "Gabriel Carnez";
			},
		};
	},
});

new Vue({
    router,
    i18n,
    render: (h) => h(App)
}).$mount("#app");

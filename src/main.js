import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'
import * as TastyBurgerButton from 'vue-tasty-burgers';

Vue.config.productionTip = false

Vue.use(VueMq, {
	breakpoints: {
		mobile: 640,
		tablet: 768,
		laptop: 1250,
		desktop: Infinity,
	}
})

Vue.use(TastyBurgerButton, { prefix: 'ba' });

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')


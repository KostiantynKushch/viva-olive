import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'

export const EventBus = new Vue();

Vue.config.productionTip = false

Vue.use(VueMq, {
	breakpoints: {
		mobile: 640,
		tablet: 768,
		laptop: 1250,
		desktop: Infinity,
	}
})


new Vue({
	router,
	render: h => h(App)
}).$mount('#app')


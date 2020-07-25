import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueMeta from 'vue-meta'

export const EventBus = new Vue();

Vue.config.productionTip = false

Vue.use(VueMeta)

Vue.use(VueMq, {
	breakpoints: {
		mobile: 640,
		tablet: 1024,
		laptop: 1250,
		desktop: Infinity,
	}
})

Vue.use(vueSmoothScroll)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')


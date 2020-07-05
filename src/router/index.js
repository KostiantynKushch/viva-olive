import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/gallery',
		name: 'Фотогалерея',
		component: () => import('../views/pages/Gallery.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

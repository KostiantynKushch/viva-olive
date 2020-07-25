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
	},
	{
		path: '/menu',
		name: 'Меню',
		component: () => import('../views/pages/Menu.vue')

	},
	{
		path: '/news',
		name: 'Новини',
		component: () => import('../views/pages/News.vue')
	},
	{
		path: '/contact',
		name: 'Контакти',
		component: () => import('../views/pages/Contact.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router

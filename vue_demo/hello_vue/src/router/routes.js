import Home from '../components/home.vue';
import Cart from '../components/cart.vue';
import Personal from '../components/personal.vue';


export default [
	// params传参： 需要注册路由的时候声明占位符
	{
		path: '/home/:id',
		component: Home,
		name: 'Home'
	},
	// query传参： 注册路由的时候不需要做任何处理
	{
		path: '/cart',
		component: Cart,
		name:  'Cart'
	},
	// meta传参： 只需要在注册路由的时候声明参数就行
	{
		path: '/personal',
		component: Personal,
		meta: {
			isShowFooter: true
		}
	},
	{
		path: '/',
		redirect: '/home' // 路由重定向
	}
]
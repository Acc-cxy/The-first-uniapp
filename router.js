import Vue from 'vue'
import store from './util/store/index.js'
import Router,{ RouterMount } from './node_modules/uni-simple-router/index.js'

import pages from './pages.js'

Vue.use(Router)

const myRouter = pages().pages.map(item => ({
		path: `/${item.path}`,
		meta: item.meta || {}
}))

//初始化
const router = new Router({
	routes: myRouter
});

router.beforeEach((to,from,next)=>{
	let isok = sessionStorage.getItem('username')
	if(isok) next()
	else{
		next()
		// console.log('未登录')
		// next({
		// 	path:'pages/login/login',
		// 	query: {
		// 		redirect: to =>{
		// 			'pages/login/login'
		// 		}
		// 	},
		// // 	NAVTYPE:'push'
		// // 	// uni.redirectTo({
		// // 	//     url: 'pages/login/login'
		// // 	// });
		// })
	}
	
})

// router.afterEach((to, from) => {
	
// })

export default router;
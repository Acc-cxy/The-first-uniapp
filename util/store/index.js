import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation.js'
import getters from './getters.js'

Vue.use(Vuex)

// const state = {
// 	isLogin:false,
// 	cartlist:[]
// }

export const store = new Vuex.Store({
	state:{
		isLogin:false,
		cartlist:[]
	},
	getters,
	mutations
})
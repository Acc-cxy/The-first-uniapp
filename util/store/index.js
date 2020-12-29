import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import mutations from './mutation.js'
import getters from './getters.js'

Vue.use(Vuex)

// const state = {
// 	isLogin:false,
// 	cartlist:[]
// }

export const store = new Vuex.Store({
	state,
	getters,
	mutations
})
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
	cartlist:[]
}

export const store = new Vuex.Store({
	state:{
		cartlist:[]
	},
	getters,
	mutations
})
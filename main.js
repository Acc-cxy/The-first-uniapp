import Vue from 'vue'
import App from './App'

import { store } from './util/store/index.js'
import { myRequest } from './util/api.js'

Vue.prototype.$store = store
Vue.prototype.$myRuquest = myRequest
Vue.prototype.$bus =new Vue()
Vue.config.productionTip = false

App.mpType = 'app'

// new Vue({
//   render: h => h(App),
//   store
// }).$mount()

const app = new Vue({
    ...App,
	store
})
app.$mount()

export default {
    cartlength(state){
        return state.cartlist.length
    },
    cartcount(state){
        return state.cartlist
    },
	getlogin(state){
		return state.isLogin
	},
	getsize(state){
		return state.size
	}
}
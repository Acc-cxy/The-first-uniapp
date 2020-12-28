export default {
    addjoinone(state,payload){
        let oldproduct = state.cartlist.find(item => item.iid === payload.iid)
	   // 2.判断oldproduct
        if (oldproduct) {
            oldproduct.count +=1
        } else {
            payload.count = 1
            payload.checked = true
            state.cartlist.push(payload)
        }
    },
	allclick(state,isall){
		let oldproduct = state.cartlist
		oldproduct.forEach((item)=>{
			item.checked = isall
		})
	},
	// 登录界面
	changeLog(state,logState){
		state.isLogin = logState;
	}
}


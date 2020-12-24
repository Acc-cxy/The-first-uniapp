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

    }
}


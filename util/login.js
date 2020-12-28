const BASE_URL = 'http://8.131.236.131:8000/api'
export const login = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: 'POST',
			contentType: "application/json",
			data:JSON.stringify(options.data),
			success: (res)=>{
				if(res.data.errno !== 0) {
					return uni.showToast({
						title: '账号或密码错误'
					})
				}
				resolve(res)
			},
			fail: (err)=>{
				console.log(err)
				uni.showToast({
					title: '获取登录数据失败'
				})
				reject(err)
			}
		})
	})
}
import backTop from './backTop.vue'

export const mixinorder = {
	components:{
		"backTop":backTop
	},
	data(){
		return{
			isShowbackTop:false
		}
	},
	methods:{
		tapscroll(){
			uni.pageScrollTo({
				scrollTop:0,
				duration:300
			})
		},
		onPageScroll(Object) {
			this.isShowbackTop = Object.scrollTop > 1000
			console.log(Object.scrollTop);//实时获取到滚
		}
	}
}
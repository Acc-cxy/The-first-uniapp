<template>
	<view>
		<swipers :info="info"></swipers>
		<recommends :recomm="recomm"></recommends>
		<tabcontrol 
			:title="['流行', '新款', '精选']"
			@tabClick="tabClick"
			ref="tabControl"
		>
		</tabcontrol>
	</view>
</template>

<script>
	import swipers from './child/swipers.vue'
	import recommends from './child/recommends.vue'
	import tabcontrol from './child/tabcontrol.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				info:[],
				recomm:[],
				goods: {
				  'pop': {page: 0, list: []},
				  'new': {page: 0, list: []},
				  'sell': {page: 0, list: []},
				},
				currentType: 'pop'
			}
		},
		onLoad() {
			this.getswiper()
			this.gethomelist('pop',1)
			this.gethomelist('new')
			this.gethomelist('sell')
		},
		components:{
			"swipers":swipers,
			"recommends":recommends,
			"tabcontrol":tabcontrol
		},
		methods: {
			tabClick(index) {
				switch (index) {
				  case 0:
					this.currentType = 'pop'
					break
				  case 1:
					this.currentType = 'new'
					break
				  case 2:
					this.currentType = 'sell'
					break
				}
				this.$refs.tabControl.currentIndex = index;
			},
			async getswiper(){
				const res = await this.$myRuquest({
					url:'/home/multidata'
				})
				this.info = res.data.data.banner.list;
				this.recomm = res.data.data.recommend.list
			},
			async gethomelist(type){
				const page = this.goods[type].page + 1;
				const res = await this.$myRuquest({
					url:'/home/data?type='+type+'&page='+1
				})
				
			},
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	view{
		box-sizing: border-box;
	}
</style>

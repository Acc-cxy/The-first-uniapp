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
		<goodlist @goodslistclick="itemclick" :showGoods="showGoods"></goodlist>
		<back-top @click.native="tapscroll"
					v-show="isShowbackTop">
		</back-top>
	</view>
</template>

<script>
	import swipers from './child/swipers.vue'
	import recommends from './child/recommends.vue'
	import tabcontrol from './child/tabcontrol.vue'
	import goodlist from './child/goodlist.vue'
	import {mixinorder} from '../../components/mixin.js'
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
				currentType: 'pop',
				isLoadMore:false,
			}
		},
		onLoad() {
			this.getswiper()
			this.gethomelist('pop')
			this.gethomelist('new')
			this.gethomelist('sell')
		},
		components:{
			"swipers":swipers,
			"recommends":recommends,
			"tabcontrol":tabcontrol,
			"goodlist":goodlist
		},
		mixins:[mixinorder],
		onReachBottom(){  //上拉触底函数
			if(!this.isLoadMore){  //此处判断，上锁，防止重复请求
				this.isLoadMore=true
				this.gethomelist(this.currentType)
			}
		},
		computed:{
			showGoods() {
				return this.goods[this.currentType].list
			}
		},
		methods: {
			//一键返回顶部显示
			onPageScroll: function(Object) {this.isShowbackTop = Object.scrollTop > 1000},
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
				this.recomm = res.data.data.recommend.list;
				return res
			},
			async gethomelist(type){
				const page = this.goods[type].page + 1;
				const res = await this.$myRuquest({
					url:'/home/data?type='+type+'&page='+page
				})
				this.goods[type].list.push(...res.data.data.list);
				this.goods[type].page +=1;
				this.isLoadMore = false;
			},
			itemclick(id){
				uni.navigateTo({
					url:'/pages/detail/index?id='+id
				})
			}
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

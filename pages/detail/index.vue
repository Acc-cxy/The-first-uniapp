<template>
	<view class="detail">
		<DetailNav :titles = "titles" @scrollclick="scrollclick" ref="nav"></DetailNav>
		<swipers :getimages = "topimages"></swipers>
		<DetailBaseinfo  :goods = "goods"></DetailBaseinfo>
		<DetailShopinfo  :shop = "shop"></DetailShopinfo>
		<DetailGoodinfo 
			id="goodinfo"
			:detailInfo = "detailInfo"
			@imageLoad = "imageLoad">
		</DetailGoodinfo>
		<DetailInfo id="param" :param = "param"></DetailInfo>
		<DetailComment :commentInfo="commentInfo"></DetailComment>
		<DetailGoodlist 
			id="goodlist"
			:recommend="recommend"
			@goodslistclick="itemclick"
		></DetailGoodlist>
		<back-top @click.native="tapscroll"
					v-show="isShowbackTop">
		</back-top>
		<Detailbottonbar @addjoin="addjoin"></Detailbottonbar>
	</view>
</template>

<script>
	import swipers from './child/swipers.vue'
	import DetailNav from './child/DetailNav.vue'
	import DetailBaseinfo from './child/DetailBaseinfo.vue'
	import DetailShopinfo from './child/DetailShopinfo.vue'
	import DetailInfo from './child/DetailInfo.vue'
	import DetailGoodinfo from './child/DetailGoodinfo.vue'
	import DetailComment from './child/DetailComment.vue'
	import DetailGoodlist from './child/DetailGoodlist.vue'
	import Detailbottonbar from './child/Detailbottonbar.vue'
	import {mixinorder} from '../../components/mixin.js'
	import {Goods,Shop,GoodsParam} from '../../util/detail.js'
	export default{
		data(){
			return{
				iid:null,
				titles:['商品','详情','参数','推荐'],
				topimages:[],
				goods:{},
				shop: {},
				detailInfo: {},
				param:{},
				commentInfo:{},
				recommend:[],
				themetops:[],
				currentIndex:0
			}
		},
		onLoad(options) {
			// 获取本页面id值
			this.iid = options.id
			this.getdetailswiper(this.iid)
			this.getrecommend()
			this.themetops[0] = 0
			console.log(this.$store.state)
		},
		components:{
			"DetailNav":DetailNav,
			"swipers":swipers,
			"DetailBaseinfo":DetailBaseinfo,
			"DetailShopinfo":DetailShopinfo,
			"DetailInfo":DetailInfo,
			"DetailGoodinfo":DetailGoodinfo,
			"DetailComment":DetailComment,
			"DetailGoodlist":DetailGoodlist,
			"Detailbottonbar":Detailbottonbar
		},
		mixins:[mixinorder],
		methods:{
			async getdetailswiper(id){
				const res = await this.$myRuquest({
					url:'/detail?iid=' + id
				})
				const data = res.data.result;
				this.topimages = data.itemInfo.topImages;//轮播图
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);//宝贝详情
				this.shop = new Shop(data.shopInfo)//店铺信息
				this.detailInfo = data.detailInfo//产品详情
				this.param = new GoodsParam(data.itemParams.info,data.itemParams.rule)//商品参数
				if (data.rate.list) {
					this.commentInfo = data.rate.list;//评论信息
				}
			},
			async getrecommend(){
				const res = await this.$myRuquest({
					url:'/recommend'
				})
				this.recommend = res.data.data.list.slice(0, 8)
			},
			onPageScroll(Object) {
				//一键返回顶部显示 
				this.isShowbackTop = Object.scrollTop > 1000
				const positiony = Object.scrollTop +44
				let length = this.themetops.length
				for(let i = 0;i < length-1;i++){
					if(this.currentIndex !==i && (positiony >= this.themetops[i] && positiony < this.themetops[i+1])){
						this.currentIndex = i;
						this.$refs.nav.currentIndex= this.currentIndex
					}
				}
			},
			// 图片加载完成
			imageLoad(){
				this.getInfo()
			},
			getInfo() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#goodinfo').boundingClientRect();
				query.select('#param').boundingClientRect();
				query.select('#goodlist').boundingClientRect();
				query.exec(res=>{
					res.forEach((item)=>{
						this.themetops.push(item.top-44)
					})
					this.themetops.push(Number.MAX_VALUE)
					// for(let j = 0;j< res.length;j++){
					// 	this.themetops.push(res[j].top)
					// }
				})
			},
			scrollclick(index){
				uni.pageScrollTo({
					scrollTop:this.themetops[index],
					duration:100
				})
			},
			addjoin(){
				const product = {};
				product.image = this.topimages[0];
				product.title = this.goods.title;
				product.desc = this.goods.desc;
				product.price = this.goods.oldPrice;
				product.iid = this.iid;
				this.$store.commit('addjoinone',product)
			}
		}
	}
</script>

<style>
	.detail{
		padding-top: 88upx;
	}
</style>

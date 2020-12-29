<template>
		<view>
			<view class="all" v-if="cartlength !==0">共{{cartlength}}件宝贝</view>
			<CartList :cartcount="cartcount"></CartList>
			<CartBuy :cartcount="cartcount"></CartBuy>
		</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	import CartList from './CartList.vue'
	import CartBuy from './CartBuy.vue'
	export default{
		components:{
			"CartList":CartList,
			"CartBuy":CartBuy
		},
		data(){
			return{
			}
		},
		computed:{
			...mapGetters(["cartlength"]),
			...mapGetters(["cartcount"])
		},
		created() {
			this.getdetailswiper("1m7kotq")
			this.getdetailswiper("1m8ogsc")
		},
		onShow() {
		},
		mounted() {
			
		},
		methods:{
			async getdetailswiper(id){
				const res = await this.$myRuquest({
					url:'/detail?iid=' + id
				})
				const data = res.data.result;
				const product = {};
				product.image = data.itemInfo.topImages[0];
				product.title = data.itemInfo.title;
				product.desc = data.detailInfo.desc;
				product.price = data.itemInfo.oldPrice ? data.itemInfo.oldPrice : data.itemInfo.price;
				product.iid = id;
				this.$store.commit('addjoinone',product)
			},
		}
	}
</script>
<style>
	  .all{
		  line-height: 2;
		  color: orangered;
		  width: 100%;
		  background:#f8f8f8;
	  }
</style>

<template>
	<view class="goodlist">
		<view v-for="(item,index) in showGoods" :key="index" class="goods" @click="navigator(item.iid)">
			<image :src="item.showLarge.img"></image>
			<text>{{item.title}}</text>
			<text class="price">{{item.orgPrice}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:["showGoods"],
		data(){
			return{
				
			}
		},
		methods:{
			navigator (id) {
				this.$emit('goodslistclick',id)
			}
		}
	}
</script>

<style>
	.goodlist{
		width: 100%;
		display: inline-block;
	}
	.goods{
		width: 50%;
		display: inline-block;
		float: left;
		background: #FFFFFF;
		overflow: hidden;
	}
	.goods image{
		margin: 5%;
		width: 90%;
		display: inline-block;
	}
	.goods text{
		width: 80%;
		margin: 0 10%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: inline-block;
	}
	.goods text.price{
		color: #ff8198;
	}
</style>

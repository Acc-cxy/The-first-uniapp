<template>
	<view class="goodlist">
		<view v-for="(item,index) in showGoods" :key="index" class="goods">
			<image :src="item.showLarge.img"></image>
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
		created() {
			console.log(this.showGoods)
		},
		mounted() {
			console.log(this.showGoods)
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
	}
	.goods image{
		margin: 5%;
		width: 90%;
		display: inline-block;
	}
	.goods text.price{
		width: 80%;
		margin: 0 10%;
		color: #ff8198;
	}
</style>

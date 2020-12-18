<template>
	<view class="recommends">
		<view v-for="(item,index) in recomm" :key="index" class="view">
			<image :src="item.image"></image>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:["recomm"],
		created() {
			
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>
<style>
	.recommends{
		width: 100%;
		display: flex;
		background: #FFFFFF;
		margin-bottom: 30upx;
	}
	.recommends .view{
		width: 25%;
		text-align: center;
		overflow: hidden;
		padding: 10upx 0;
	}
	.recommends .view image{
		width: 120upx;
		height: 120upx;
		margin: 10upx auto;
		display: block;
	}
</style>

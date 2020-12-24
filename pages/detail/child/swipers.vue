<template>
	<view class="content">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper  :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item,index) in getimages" :key="index">
							<image :src="item" alt="#" class="img">
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		props:["getimages"],
		
		methods:{
			
		},
	}
</script>

<style>
	uni-swiper{
		height: 500upx;
	}
	image{
		width: 100%;
		min-height: 800upx;
		display: block;
	}
</style>

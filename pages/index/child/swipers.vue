<template>
	<view class="content">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper  :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item,index) in info" :key="index">
							<img :src="item.image" alt="#">
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:["info"],
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			
		},
}
</script>

<style>
	.uni-padding-wrap{
		width: 100%;
	}
	.uni-padding-wrap img{
		width: 100%;
	}
	uni-swiper{
		height: 390upx;
	}
</style>

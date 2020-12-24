<template>
	<view class="icon">
		<view></view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.icon{
		width: 100upx;
		height: 100upx;
		background: #FFFFFF;
		position: fixed;
		right: 0;
		bottom: 200upx;
		z-index: 5;
		border-radius: 50%;
		box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.23);
	}
	.icon view{
		width: 60upx;
		height: 60upx;
		margin: 20upx;
		background: url(../static/icon/top.svg);
		background-size: 100% auto;
	}
</style>

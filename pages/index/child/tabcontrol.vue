<template>
	<view class="tab-control">
		<view 
			class="tab-control-item"
			v-for="(item,index) in title" :key="index"
			:class="{active: index === currentIndex}"
			@click="itemClick(index)"
		>
			<view class="item">
				<view>{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:["title"],
		data(){
			return{
				currentIndex:0
			}
		},
		mounted() {
		},
		methods:{
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('tabClick', index)
			}
		}
	}
</script>

<style>
	.tab-control {
	  display: flex;
	  text-align: center;
	  font-size: 30rpx;
	  height: 96rpx;
	  line-height: 96rpx;
	  background-color: #fff;
	}
	
	.tab-control-item {
	  flex: 1;
	}
	
	.tab-control-item .item{
		padding: 10rpx 0;
		width: 50%;
		line-height: 60rpx;
		display: block;
		margin: 0 auto;
	}
	
	.active {
	  color: #ff8198;
	}
	
	.active .item view {
	  border-bottom: 3px solid #ff8198;
	}
</style>

<template>
	<view>
		<view v-if="Object.keys(goods).length !== 0" class="base-info">
		<view class="info-title">{{goods.title}}</view>
		<view class="info-price">
		  <text class="n-price">{{goods.newPrice}}</text>
		  <text class="o-price">{{goods.oldPrice}}</text>
		  <text v-if="Object.keys(goods.discount) !== 0" class="discount">{{goods.discount}}</text>
		</view>
		<view class="info-other">
		  <text>{{goods.columns[0]}}</text>
		  <text>{{goods.columns[1]}}</text>
		  <text>{{goods.services[goods.services.length-1].name}}</text>
		</view>
		<view class="info-service">
		  <view class="info-service-item" v-for="index in goods.services.length-1" :key="index">
			<image :src="goods.services[index-1].icon">
			<text>{{goods.services[index-1].name}}</text>
		  </view>
		</view>
		</view>
  </view>
</template>

<script>
	export default{
		props:["goods"]
	}
</script>

<style>
	.base-info {
	    margin-top: 15px;
	    padding: 0 8px;
	    color: #999;
	    border-bottom: 5px solid #f2f5f8;
	  }
	
	  .info-title {
	    color: #222
	  }
	
	  .info-price {
	    margin-top: 10px;
	  }
	
	  .info-price .n-price {
	    font-size: 24px;
	    color: #ff8198;
	  }
	
	  .info-price .o-price {
	    font-size: 13px;
	    margin-left: 5px;
	    text-decoration: line-through;
	  }
	
	  .info-price .discount {
	    font-size: 12px;
	    padding: 2px 5px;
	    color: #fff;
	    background-color: #ff8198;
	    border-radius: 8px;
	    margin-left: 5px;
	
	    /*让元素上浮一些: 使用相对定位即可*/
	    position: relative;
	    top: -8px;
	  }
	
	  .info-other {
	    margin-top: 15px;
	    line-height: 30px;
	    display: flex;
	    font-size: 13px;
	    border-bottom: 1px solid rgba(100,100,100,.1);
	    justify-content: space-between;
	  }
	
	  .info-service {
	    display: flex;
	    justify-content: space-between;
	    line-height: 60px;
	  }
	
	  .info-service-item image {
	    width: 14px;
	    height: 14px;
	    position: relative;
	    top: 2px;
	  }
	
	  .info-service-item text {
	    font-size: 13px;
	    color: #333;
	  }
</style>

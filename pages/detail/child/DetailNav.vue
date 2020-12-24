<template>
  <view class="navbar">
	  <navs>
	    <view slot="left" class="back" @click="backclick">
	      <image src="../../../static/icon/back.svg" alt="">
	    </view>
	    <view slot="center" class="center">
			<view 
				v-for="(item,index) in titles"
				:key="index"
				class="center-item"
				:class="{active:index === currentIndex}"
				@click="itemclick(index)"
			>
				{{item}}
			</view>
	    </view>
	  </navs>
  </view>
</template>

<script>
import navs from "../../../components/common/navs.vue";

export default {
  components:{"navs":navs},
  data() {
    return {
      currentIndex:0
    }
  },
  props:["titles"],
  methods:{
    itemclick(index){
		this.currentIndex = index
		this.$emit('scrollclick',index)
	},
    backclick() {
		uni.navigateBack()
    }
  }
}
</script>

<style scoped>
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
	}
	.center{
		display: flex;
	}
	.center-item{
		flex: 1;
	}
	.active{
		color: coral;
	}
	.back image{
		width: 50upx;
		height: 50upx;
		margin-top: 20upx;
	}
</style>
<template>
  <view class="nav-bar">
    <view class="left"><slot name="left"></slot></view>
    <view class="center"><slot name="center"></slot></view>
    <view class="right"><slot name="right"></slot></view>
  </view>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 88upx;
    line-height: 88upx;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
	background: #FFFFFF;
  }

  .left, .right {
    width: 120upx;
  }

  .center {
    flex: 1;
  }
</style>


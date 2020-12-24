<template>
  <view class="bottom-bar">
    <view class="bar-item bar-left">
      <view>
        <view class="icon service"></view>
        <text class="text">客服</text>
      </view>
      <view>
        <view class="icon shop"></view>
        <text class="text">店铺</text>
      </view>
      <view>
        <i class="icon select"></i>
        <text class="text">收藏</text>
      </view>
    </view>
    <view class="bar-item bar-right">
      <view class="cart" @click="join">加入购物车</view>
      <view class="buy">购买</view>
    </view>
  </view>
</template>

<script>
export default {
 name: "Detailbottonbar",
  methods:{
    join(){
      this.$emit('addjoin')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 58px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -12px 20px 0px rgba(78, 71, 238, 0.16);
  display: flex;
  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item>view {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url(../../../static/icon/detail_bottom.png) 0 0/100%;
}

.bar-left .service {
  background-position:0 -54px;
}

.bar-left .shop {
  background-position:0 -98px;
}

.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  background-color: #f69;
}
</style>
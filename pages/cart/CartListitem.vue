<template>
  <view id="shop-item">
    <view class="item-selector">
		<CartButton ></CartButton>
		 <!-- <CartButton :checkout="cartcount.checked" @click.native="maibumai"></CartButton> -->
    </view>
    <view class="item-img">
      <image :src="cartcount.image" alt="商品图片">
    </view>
    <view class="item-info">
      <view class="item-title">{{cartcount.title}}</view>
      <view class="item-desc">商品描述: {{cartcount.desc}}</view>
      <view class="info-bottom">
        <view class="item-price left">{{cartcount.price}}</view>
        <view class="item-count right">{{cartcount.count}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import CartButton from "./CartButton.vue";

export default {
  components:{"CartButton":CartButton},
  props:["cartcount"],
  mounted() {
  	console.log(this.cartcount)
  }
}
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img image {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>
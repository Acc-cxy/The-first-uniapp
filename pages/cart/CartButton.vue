<template>
  <view class="imagebox" :class="{buttonbox:checkout}" >
	<image src="../../static/icon/tick.svg"></image>
  </view>
</template>

<script>
export default {
  props:["checkout"],
  computed:{

  },
  methods:{
  }
}
</script>

<style scoped>
    .imagebox{
      width: 20px;
      height: 20px;
      border: 2px solid #999999;
      border-radius: 50%;
      display: inline-block;
    }
    .buttonbox{
      background: red;
      border: 0;
      text-align: center;
    }
    .imagebox image{
		width: 20px;
		height: 20px;
      margin: 2px 0;
    }
</style>


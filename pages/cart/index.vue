<template>
		<view>
			<CartList></CartList>
			{{cartlength}}
		</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	import CartList from './CartList.vue'
	
	export default{
		components:{
			"CartList":CartList
		},
		computed:{
			...mapGetters(["cartlength"])
		},
		created() {
			
		},
		onShow() {
			console.log(this.cartlength)
		},
		mounted() {
			
		}
	}
</script>

<style>
	.cart{
	    height: 100vh;
	    position: relative;
	  }
	
	  .cart-nav{
	    background: var(--color-tint);
	    color: #ffffff;
	    font-weight: 600;
	  }
</style>

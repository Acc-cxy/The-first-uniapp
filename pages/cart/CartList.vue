<template>
	<view>
		<CartListitem 
			v-for="(item,index) in cartcount"
			:key="index"
			:cartcount="item">
		</CartListitem>
	</view>
</template>

<script>
	import CartListitem from './CartListitem.vue'
	
	export default{
		components:{"CartListitem":CartListitem},
		props:["cartcount"],
		onShow() {
			// this.a()
		},
		created() {
			this.a()
		},
		methods:{
			a(){
				this.$nextTick(() => {
				        // console.log(this.cartcount)
				})
			}
		},
		watch:{
			
		}
		
	}
</script>

<style>
</style>

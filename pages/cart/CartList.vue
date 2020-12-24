<template>
	<view>
		<CartListitem 
			v-for="(item,index) in cartcount"
			:key="index"
			:cartcount="cartcount">
		</CartListitem>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	import CartListitem from './CartListitem.vue'
	
	export default{
		computed:{
			 ...mapGetters(["cartcount"])
		},
		components:{"CartListitem":CartListitem},
		onShow() {
			// this.a()
		},
		created() {
			this.a()
		},
		methods:{
			a(){
				this.$nextTick(() => {
				        console.log(this.cartcount)
				})
			}
		},
		watch:{
			
		}
		
	}
</script>

<style>
</style>

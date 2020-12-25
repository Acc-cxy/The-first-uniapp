<template>
	<view class="buy">
		<view class="allchange" @click="allclick">
			<view class="imagebox" :class="{buttonbox:allbuy}">
				<image src="../../static/icon/tick.svg"></image>
			</view>
			<view>全选</view>
		</view>
		
		<view class="allprice">合计：{{allprice}}</view>
	</view>
</template>

<script>
	export default{
		props:["cartcount"],
		data(){
			return{
				vals:"",
				allprice:0,
				allbuy:true
			}
		},
		created() {
			
		},
		methods:{
			all(){
				this.$nextTick(() => {
					this.allprice = 0
					this.val.forEach((item)=>{
						if(item.checked == true){
							var a = parseInt(item.price.split("¥").join(""))
							this.allprice += a
						}else if(item.checked == false){
							this.allbuy = false
							return false
						}
						if(this.allbuy == false){
							this.allbuy = true
						}
						
					})
				})
			},
			allclick(){
				if(this.allbuy == true){
					this.$store.commit('allclick',false)
					this.allbuy = false
				}else{
					this.$store.commit('allclick',true)
					this.allbuy = true
				}
				
			}
		},
		mounted() {
			this.$bus.$on("ams",()=>{
				this.all()
			})
		},
		watch:{
			cartcount:function(newval,oldval){
				if(this.val == newval){
					this.all()
					return false
				}
				this.val = newval
			}
		}
	}
</script>

<style>
	.buy{
		position: fixed;
		bottom: 101upx;
		height: 80upx;
		left: 0;
		right: 0;
	}
	.allchange{
		width: 30%;
		float: left;
		margin: 10upx 0;
	}
	.allprice{
		float: right;
		margin: 10upx 30upx;
		color: red;
		font-weight: 400;
	}
	.imagebox{
	  width: 40upx;
	  height: 40upx;
	  border: 2px solid #999999;
	  border-radius: 50%;
	  display: inline-block;
	  float: left;
	}
	.buttonbox{
	  background: red;
	  border: 0;
	  text-align: center;
	}
	.imagebox image{
		width: 40upx;
		height: 40upx;
	   margin: 2px 0;
	  
	}
	.imagebox view{
		display: inline-block;
		float: left;
	}
</style>

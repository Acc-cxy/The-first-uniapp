<template>
	<view class="size">
		<view class="sizelist">
			<h1 :class="{on:isshow}">man</h1><view class="button" :class="{icon:isshow}" @click="allclick(items,isshow)">√</view>
			<view  class="class">
				<view v-for="(item,index) in items" :key="index" class="list">
					<view :class="{back:item.is}" @click="itemclick(item,index,items)">{{item.id}}</view>
				</view>
			</view>
		</view>
		<view class="sizelist">
			<h1 :class="{on:isshow2}">woman</h1><view class="button" :class="{icon:isshow2}"  @click="allclick(itemsa,isshow2)">√</view>
			<view  class="class">
				<view v-for="(item,index) in itemsa" :key="index" class="list">
					<view :class="{back:item.is}" @click="itemclick(item,index,itemsa)">{{item.id}}</view>
				</view>
			</view>
		</view>
		<button type="primary" @click="enter">确定</button>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				isshow:false,
				isshow2:false,
				items: [
					{id: '红色',
						is:false
					}, {
						id: '蓝色',
						is:false
					},{
						id: '绿色',
						is:false
					}, {
						id: '蓝色',
						is:false
					},{
						id: '白色',
						is:false
					},{
						id: '白色',
						is:false
					}
				],
				itemsa: [
					{id: '红色2',
						is:false
					}, {
						id: '蓝色2',
						is:false
					},{
						id: '绿色2',
						is:false
					}, {
						id: '蓝色2',
						is:false
					},{
						id: '白色2',
						is:false
					}
				],
				open:[]
			}
		},
		methods:{
			async clock(arr){
				arr.forEach(function(item){
					item.is = false
				})
			},
			async itemclick(item,index,arr){
				// 判断是否跟上次点击的是同一个栏目
				if(arr !== this.open){
					this.clock(this.open)
				}
				arr[index].is = !arr[index].is
				// 缓存上次点击的栏目
				return this.open = arr
			},
			async allclick(arr,all){
				if(arr !== this.open){
					this.clock(this.open)
				}
				const isSome = arr.some(function(item,index,array){
					return item.is == false
				})
				console.log(isSome)
				if(all && !isSome){
					arr.forEach(function(item){
						item.is = false
					})
				}else{
					arr.forEach(function(item){
						item.is = true
					})
				}
				return this.open = arr
			},
			async enter(){
				if(this.open.length == 0){
					return uni.showToast({
						title: '未选择'
					})
				}
				const minus = await this.open.filter(function(item){
					return item.is == true
				})
				this.$store.commit('oversize',minus)
				uni.navigateBack()
			}
		},
		watch:{
			items:{
				handler(newval,oldval){
					const isSome = newval.some(function(item,index,array){
						return item.is == true
					})
					if(!isSome) {
						this.isshow = false
					}else if(isSome && this.isshow == false){
						this.isshow = true
					}
				},
				deep:true
			},
			itemsa:{
				handler(newval,oldval){
					const isSome = newval.some(function(item,index,array){
						return item.is == true
					})
					if(!isSome) {
						this.isshow2 = false
					}else if(isSome && this.isshow2 == false){
						this.isshow2 = true
					}
				},
				deep:true
			}
		}
	}
</script>
<style>
	.sizelist{
		width: 100%;
	}
	.sizelist h1{
		display: inline-block;
		line-height: 100upx;
	}
	.sizelist h1.on{
		color: #4CD964;
	}
	.sizelist .button{
		width: 50upx;
		height: 50upx;
		line-height: 50upx;
		margin: 25upx 0;
		text-align: center;
		float: right;
		border-radius: 50%;
		overflow: hidden;
		background: #C0C0C0;
	}
	.sizelist .icon{
		background: #4CD964;
		color: #FFFFFF;
	}
	.sizelist .class{
		width: 100%;
		display: flex;
		float: row;/* 主轴方向 */
		flex-wrap: wrap;/* 换行 */
		align-self:flex-start;
		justify-content: space-around;
	}
	.sizelist .class:after{
		content: '';
		width: 200upx;
	}
	.sizelist .class .list{
		width: 200upx;
		text-align: center;
		margin-bottom: 20upx;
	}
	.sizelist .class .list view{
		background: 0;
		color: #007AFF;
	}
	.sizelist .class .list .back{
		background: #4CD964;
		color: #FFFFFF;
	}
	.size button{
		width: 90%;
		margin: 30upx 5%;
	}
</style>

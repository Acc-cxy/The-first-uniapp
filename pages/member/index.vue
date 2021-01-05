<template>
	<view>
		<view class="login" v-show="islogin">
			<image src="../../static/logo.png"></image>
			<form ref="loginforms" >
				<label><view>用户名</view> <input type="text" v-model="loginform.user" /> </label>
				<label><view>密码</view> <input type="password" v-model="loginform.password" /> </label>
				<button class="login" @click="login(loginform)">登录</button>
			</form>
		</view>
		<view class="myid" v-if="!islogin">
			<view class="info">
				<image src="../../static/icon/my.jpg"></image>
				<text>{{loginform.user}}</text>
			</view>
			<button type="primary" @click="SwitchID()">切换账户</button>
			<view class="mysize">
				个人尺码:
				<text
					v-for="(item,index) in getsize"
					v-show="getsize"
					:key="index">
					{{item.id}}
				</text>
				<text v-show="getsize.length == 0">
					未设置
				</text>
			</view>
			<view class="oversize" @click="mysize">设置个人尺码收藏</view>
		</view>
		
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return{
				loginform:{
					user:'linqinggan',
					password:'123456'
				},
				islogin:true
			}
		},
		computed:{
			...mapGetters(["getsize"])
		},
		created() {
			this.getlogin()
		},
		onShow() {
			console.log(this.getsize)
		},
		methods:{
			// 登录验证
			async login(e){
				const data = {username:e.user, password : e.password }
				const res = await this.$login({
					url:'/user/login',
					data:data
				})
				if(res.data.errno == 0){
					this.$store.commit("changeLog",true)
					sessionStorage.setItem('username',e.user)
					this.getlogin()
				}
			},
			// 判断验证
			async getlogin(){
				let isok = sessionStorage.getItem('username')
				if(isok) {
					this.islogin = false
				}
				else this.islogin = true
			},
			// 退出登录
			async SwitchID(){
				await sessionStorage.removeItem('username')
				this.getlogin()
			},
			mysize(){
				uni.navigateTo({
					url:'/pages/size/size'
				})
			}
		}
		
	}
</script>

<style>
	.login{
		width: 100%;
		display: inline-block;
	}
	.login image{
		width: 160upx;
		height: 160upx;
		overflow: hidden;
		display: block;
		margin: 50upx auto;
	}
	.login label{
		width: 80%;
		height: 50upx;
		margin: 0 10%;
		display: inline-block;
	}
	.login label view{
		width: 20%;
		display: inline-block;
		line-height: 50upx;
		float: left;
	}
	.login label input{
		width: 70%;
		height: 50upx;
		display: inline-block;
	}
	.login button{
		width: 80%;
		display: block;
		margin: 0 auto;
	}
	.myid{
		width: 100%;
		display: inline-block;
	}
	
	.myid .info image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		overflow: hidden;
		margin: 50upx;
		float: left;
	}
	.myid .info text{
		display: inline-block;
		line-height: 100upx;
		height: 100upx;
		font-size: 46upx;
		font-weight: bold;
		margin: 50upx 0;
	}
	.myid button{
		width: 88%;
		margin: 0 6%;
		margin-bottom: 50upx;
		/* margin:0 50upx; */
	}
	.myid .mysize{
		width: 90%;
		margin: 0 5%;
		line-height: 80upx;
		color: #ff9200;
		font-weight: bold;
	}
	.myid .oversize{
		width: 100%;
		border: 1upx solid #dedede;
		text-align: center;
		background: #f7f7fa;
		padding: 15upx 0;
		margin-top: 16upx;
		font-size: 36upx;
	}
</style>

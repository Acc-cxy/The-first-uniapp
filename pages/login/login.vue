<template>
	<view>
		<form ref="loginforms" >
			<label>用户名 <input type="text" v-model="loginform.user" /> </label>
			<label>密码 <input type="password" v-model="loginform.password" /> </label>
			<button class="login" @click="login(loginform)">登录</button>
		</form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				loginform:{
					user:'linqinggan',
					password:'123456'
				}
			}
		},
		created() {
		},
		methods:{
			async login(e){
				const data = {username:e.user, password : e.password }
				const res = await this.$login({
					url:'/user/login',
					data:data
				})
				if(res.data.errno == 0){
					this.$store.commit("changeLog",true)
					sessionStorage.setItem('username',e.user)
				}
			}
		},
		
		
	}
</script>

<style>
</style>

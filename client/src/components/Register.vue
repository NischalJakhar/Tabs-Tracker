<template>
	<div>
		<h1>Register</h1>
		<input type="email" placeholder="Enter the email" name="email" v-model="email">
		<br><br>
		<input type="password" placeholder="Enter the password" name="password" v-model="password">
		<br><br>
		<button type="submit" @click="register">Register</button>
	</div>
</template>

<script>
// Everything inside the script tag is your controller
// I can bind my html to the controller

/* eslint-disable*/ 
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
		  email: '',
		  password: ''
  		}
	},
	methods: {
		async register () {
			// console.log('Register button was clicked',this.email, this.password)
			const response = await AuthenticationService.register({
				email: this.email,
				password: this.password
			})
			console.log(response.data)
		}
	}

	// watch: {
	// 	// Watching the changes in the email field
	// 	email (value) {
	// 		console.log('Email has changed', value)
	// 	}
	// },
	// Whenever the vue component is mounted on the page, I want to run a command
	// mounted () {
	// 	// Data model changes the actual view
	// 	setTimeout(()=> {
	// 		this.email = 'Hello World'
	// 		this.password = 'rockstar'
	// },2000)
	// }

}
	
</script>


<style scoped>
	
</style>
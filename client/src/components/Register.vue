<template>
<v-layout column>
    <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
            <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
        <input type="email" placeholder="Enter the email" name="email" v-model="email">
		<br><br>
		<input type="password" placeholder="Enter the password" name="password" v-model="password">
		<br><br>
        <div class="error" v-html="error"></div>
		<v-btn type="submit" class="cyan" @click="register">Register</v-btn>
        </div>        
    </v-flex>
</v-layout>
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
          password: '',
          error: null
  		}
	},
	methods: {
		async register () {
            try {
                // console.log('Register button was clicked',this.email, this.password)
		       await AuthenticationService.register({
				email: this.email,
				password: this.password
			})
			// console.log(response.data)
            } catch (error) {
                this.error = error.response.data.error
            }
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
	.error{
        color: red;
    }

</style>
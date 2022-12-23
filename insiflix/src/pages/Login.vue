<template>
	<main>
		<div class="login-overlay"></div>
		<img class="main_logo" src="../img/insiarsch.png" alt="insiarsch">
		<img class="bg-img" src="../img/netarsch.jpg" alt="">
		<div class="form-container">
			<div class="login-modal">
				<div class="inner-login-container">
					<h2 class="login-heading">Einloggen</h2>
					<div class="login-error" v-if="error">
						<p>Leider hast du die falschen Zugangsdaten eingegeben. Es stellt sich also eine entscheidende Frage: <p class="no-padding no-margin underline">Wer bist du das du sowas definierst?</p> </p>
					</div>
					<form @submit="onSubmit" class="add-form">
						<div class="form-control input-box">
							<input
								:class="{'bottom_orange_border': error_messages.invalid_username}"
								type="text"
								@input="checkValid('username')"
								v-model="name"
								name="username"
								required
							/>
							<span>Benutzername</span>
						</div>
						<div v-if="error_messages.invalid_username">
							<p class="text-invalid color-white">Bitte füllen Sie das Feld mit einem gültigen Benutzernamen aus.</p>
						</div>
						<div class="form-control input-box">
							<input
								:class="{'bottom_orange_border': error_messages.invalid_password}"
								type="password"
								@input="checkValid('password')"
								v-model="password"
								name="password"
								required
							/>
							<span>Passwort</span>
						</div>
						<div v-if="error_messages.invalid_password">
							<p class="text-invalid color-white">Ihr Passwort muss zwischen 4 und 60 Zeichen enthalten.</p>
						</div>
						<button type="submit" value="Einloggen" class="buddne">Einloggen</button>
					</form>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			error: false,
			name: "",
		password: "",
		error_messages:
			{
				invalid_username: false,
				invalid_password: false,
			},
		};
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();
			if(!this.error_messages.invalid_password && !this.error_messages.invalid_username){
				axios
					.post("http://localhost:4000/auth/login", {
						enteredName: this.name,
						enteredPassword: this.password,
					})
					.then(res => {
						localStorage.setItem("auth", "true");
						window.location.pathname = "/";
					})
					.catch(e => {
						console.log(e);
						localStorage.setItem("auth", "false");
						this.error = true; 
					});
			}
			
		},
		checkValid: function(type) {
			var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
			if(type == "username"){
				if(this.name.length > 60 || this.name.length < 4 || format.test(this.name)){
					this.error_messages.invalid_username = true;
				}else{
					this.error_messages.invalid_username = false;
				}
			}
			if(type == "password"){
				if(this.password.length > 60 || this.password.length < 4){
					this.error_messages.invalid_password = true;
				}else{
					this.error_messages.invalid_password = false;
				}
			}
		}
	},
};
</script>

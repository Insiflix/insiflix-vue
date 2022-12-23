<template>
	<main>
		<img class="main_logo" src="../img/insiarsch.png" alt="insiarsch">
		<div class="form-container">
			<img class="bg-img" src="../img/netarsch.jpg" alt="">
			<div class="login-modal">
				<div class="inner-login-container">
					<h2 class="login-heading">Sign In</h2>
					<form @submit="onSubmit" class="add-form">
						<div class="form-control input-box">
							<input
								type="text"
								v-model="name"
								name="username"
								required
							/>
							<span>Username</span>
						</div>
						<div class="form-control input-box">
							<input
								type="password"
								v-model="password"
								name="password"
								required
							/>
							<span>Password</span>
						</div>
						<input type="submit" value="Sign In" class="buddne btn btn-block" />
					</form>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import axios from "axios";
export default {
	props: {
		name: "",
		password: "",
	},
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();
			alert(this.password);
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
				});
			

				// Error anzeigen
		},
	},
};
</script>

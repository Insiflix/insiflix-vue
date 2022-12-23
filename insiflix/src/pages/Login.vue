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
				.post("http://localhost:4000/login", {
					enteredName: this.name,
					enteredPassword: this.password,
				})
				.then(res => {
					window.location.pathname = "/";
				})
				.catch(e => console.log(e));
		},
	},
};
</script>

<style>
@font-face {
    font-family: 'Netflix Sans';
    font-weight: 300;
    font-display: optional;
    src: url(../font/NetflixSans-Light.otf) format('otf')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 400;
    font-display: optional;
    src: url(../font/NetflixSans-Regular.otf) format('otf')
}

@font-face {
	font-family: 'Netflix Sans';
	font-weight: 500;
	font-display: optional;
	src: url(../font/NetflixSans-Medium.otf) format('otf')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 700;
    font-display: optional;
    src: url(../font/NetflixSans-Bold.otf) format('otf')
}

body {
	overflow-x: hidden;
	font-family: "Netflix Sans";
	margin: 0;
	background-color: black;
}
.main_logo{
	z-index: 2;
	position: absolute;
	width: 10rem;
	left: 5rem;
	top: 1rem;
}
.bg-img{
	position: absolute;
	min-height: 100%;
	min-width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	opacity: 0.5;
	z-index: -1;
}
.form-container {
	font-family: "Netflix Sans";
	position: absolute;
	height: 100%;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
}
.login-modal {
	top: 10%;
	left: 50%;
	transform: translateX(-50%);
	position: absolute;
	display: flex;
	justify-content: center;
}
.inner-login-container {
	padding: 4rem;
	height: 25rem;
	width: 20rem;
	background-color: rgba(0, 0, 0, 0.8);
	border-radius: 2%;
}
.login-heading {
	font-size: 2rem;
	margin-top: 0;
	color: white;
}
.form-control input{
	position: relative;
	border-radius: 0.25rem;
	background-color: rgb(51, 51, 51);
	border: none;
	outline: none;
	padding-top: 1.75rem;
	font-size: 1rem;
	color: white;
	padding-bottom: 0.75rem;
	margin: .5rem 0;
	width: calc(100% - 1rem);
	padding-inline-start: 1rem;
}
.buddne {
	width: 100%;
	padding: 1rem;
	border-radius: 0.4rem;
	margin-top: 4rem;
	font-size: 1rem;
	color: white;
	font-weight: 700;
	background-color: rgb(229, 9, 20);
	font-family:"Netflix Sans";
}
.input-box{
	position: relative;
}
.input-box span {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  letter-spacing: 0.05rem;
  transition: 0.2s;
  font-size: 1rem;
  color: rgb(140, 140, 140);
}

.input-box input:valid ~ span,
.input-box input:focus ~ span {
  font-size: 0.7rem;
  transform: translateY(-20px);
}
.buddne:hover {
	cursor: pointer;
}
</style>

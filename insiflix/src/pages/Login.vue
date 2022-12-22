<template>
	<form @submit="onSubmit" class="add-form">
		<div class="form-control">
			<input
				type="text"
				v-model="name"
				name="username"
				placeholder="Username"
			/>
		</div>
		<div class="form-control">
			<input
				type="password"
				v-model="password"
				name="password"
				placeholder="Password"
			/>
		</div>
		<input type="submit" value="Login" class="btn btn-block" />
	</form>
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

<style scoped>
a {
	color: #42b983;
}
</style>

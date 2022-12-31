<template>
	<div id="app">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Hello Vue 2 + Vite" />
	</div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import axios from "axios";

export default {
	components: {
		HelloWorld,
	},
	created() {
		if (localStorage.getItem("auth") !== "true") {
			window.location.pathname = "/login";
		} else {
			axios.get("http://localhost:4000/auth/validate", {}).catch(e => {
				console.log(e);
				localStorage.setItem("auth", "false");
			});
		}
	},
};
</script>

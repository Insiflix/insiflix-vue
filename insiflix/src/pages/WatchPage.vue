<template>
	<div>
		<Player></Player>
	</div>
</template>

<script>
import Player from "../components/Player.vue";
import axios from "axios";
export default {
	components: {
		Player,
	},
	// created() {
	// 	if (localStorage.getItem("auth") !== "true") {
	// 		window.location.pathname = "/login";
	// 	} else {
	// 		axios.get("http://localhost:4000/auth/validate", {}).catch(e => {
	// 			console.log(e);
	// 			localStorage.setItem("auth", "false");
	// 		});
	// 	}
	// },
};
</script>

<template>
	<div class="container">
		<form class="add-form" @submit="onSubmit">
			<div class="form-control form-container input-box">
				<input v-model="url" type="text" name="url" required />
				<span>URL*</span>
			</div>
			<div class="form-control form-container input-box">
				<input v-model="tags" type="text" name="tags" required />
				<span>Tags*</span>
			</div>
			<button type="submit" class="playbuddne form-container">
				Hochladen
			</button>
		</form>
	</div>
</template>

<script>
import axiosClient from "../tools/helpers";
export default {
	data() {
		return { url: "", tags: "" };
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();
			axiosClient
				.post("/upload/yt", { url: this.url, tags: this.tags })
				.then(res => console.log("sucess"))
				.catch(err => console.log(err));
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
}
.playbuddne {
	width: 10rem;
	padding: 1rem;
	border-radius: 0.4rem;
	margin-top: 2rem;
	font-size: 1rem;
	color: white;
	font-weight: 700;
	background-color: rgb(229, 9, 20);
	outline: none;
	border: none;
	&:hover {
		cursor: pointer;
	}
}
.form-container {
	margin-left: 2rem;
	margin-right: 2rem;
}
</style>

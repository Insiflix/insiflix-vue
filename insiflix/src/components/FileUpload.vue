<template>
	<div class="container">
		<form class="add-form" @submit="onSubmit">
			<div class="form-container input-box">
				<DragAndDropUpload
					@handleFileInput="setVideo(val)"
					:identity="'video'"
					:required="{ required: true }"
					:accepted="'.mp4,.webm,.mov,.avi'"
					:description="'Video hochladen*'"
					:supported="'Unterstützte Dateiendungen: MP4, WEBM, MOV, AVI'"
				></DragAndDropUpload>
				<DragAndDropUpload
					@handleFileInput="setThumbnail(val)"
					:identity="'thumbnail'"
					:required="{ required: false }"
					:accepted="'.png,.jpg,.jpeg,.webp'"
					:description="'Thumbnail hochladen'"
					:supported="'Unterstützte Dateiendungen: PNG, JPEG, JPG, WEBP'"
				></DragAndDropUpload>
			</div>
			<div class="form-control form-container add-margin input-box">
				<input v-model="title" type="text" name="title" required />
				<span>Titel*</span>
			</div>
			<div class="form-control form-container input-box">
				<input v-model="tags" type="text" name="tags" required />
				<span>Tags*</span>
			</div>
			<div class="form-control form-container input-box">
				<input v-model="creator" type="text" name="creator" required />
				<span>Creator*</span>
			</div>
			<button
				type="submit"
				value="Einloggen"
				class="playbuddne form-container"
			>
				Hochladen
			</button>
		</form>
	</div>
</template>

<script>
import DragAndDropUpload from "./DragAndDropUpload.vue";

export default {
	data() {
		return {
			thumbnail: "",
			video: "",
			title: "",
			creator: "",
			tags: "",
		};
	},
	methods: {
		setThumbnail: function (val) {
			this.thumbnail = val;
		},
		setVideo: function (val) {
			this.video = val;
		},
		onSubmit(e) {
			e.preventDefault();
			console.log(this.video, this.thumbnail);
			return;
			axiosClient
				.post("/upload/yt", { url: this.url, tags: this.tags })
				.then(res => console.log("sucess"))
				.catch(err => console.log(err));
		},
	},
	components: { DragAndDropUpload },
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
	background-color: #005af0;
	outline: none;
	border: none;
	&:hover {
		cursor: pointer;
	}
}
.add-margin {
	margin-top: 2rem;
}
.form-container {
	gap: 7.5rem;
	margin-left: 2rem;
	margin-right: 2rem;
}
</style>

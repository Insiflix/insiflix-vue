<template>
	<div class="outer-video-wrapper">
		<div class="inner-video-wrapper">
			<video class="video-player" :src="ApiURL" controls></video>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			baseURL: "http://localhost:4000",
		};
	},
	computed: {
		ApiURL() {
			const queryString = window.location.search;
			const Params = new URLSearchParams(queryString);
			const videoID = Params.get("id");
			const ApiURL = `${
				this.baseURL
			}/videos/watch/${videoID}?sessionId=${localStorage.getItem(
				"token"
			)}`;
			return ApiURL;
		},
	},
};
</script>

<style lang="scss">
.outer-video-wrapper {
	margin: 3rem;
	.inner-video-wrapper {
		max-width: 100%;
		.video-player {
			width: 75%;
		}
	}
}
</style>

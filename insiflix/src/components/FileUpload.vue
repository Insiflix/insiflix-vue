<template>
	<div class="container">
		<form class="add-form" @submit="onSubmit">
			<div class="form-container input-box">
				<DragAndDropUpload
					@handleFileInput="val => setVideo(val)"
					:identity="'video'"
					:required="{ required: true }"
					:accepted="'.mp4,.webm,.mov,.avi'"
					:description="'Video hochladen*'"
					:supported="'Unterstützte Dateiendungen: MP4, WEBM, MOV, AVI'"
				></DragAndDropUpload>
				<DragAndDropUpload
					@handleFileInput="val => setThumbnail(val)"
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
                    class="playbuddne"
                >
                <div class="progress-overlay" id="progress-overlay">
                </div>
                <div v-if="uploadInProgress" class="spin index">
                    <i class="bi flex bi-arrow-clockwise"></i>
                </div>
                <span class="index">Hochladen</span> 
                </button>
		</form>
	</div>
</template>

<script>
import DragAndDropUpload from "./DragAndDropUpload.vue";
import axiosClient from "../tools/helpers";
import axios from "axios";
import FormData from "form-data";

export default {
	data() {
		return {
            progressOverlay: "",
			thumbnail: "",
			video: "",
			title: "",
			creator: "",
			tags: "",
            progressParagraph: "",
            uploadInProgress: "",
            uploadPercentage: "",
		};
	},
    mounted() {
        this.progressParagraph = document.querySelector("#progress-paragraph");
        this.progressOverlay = document.querySelector("#progress-overlay");
    },
	methods: {
		setThumbnail: function (val) {
			this.thumbnail = val;
		},
		setVideo: function (val) {
			this.video = val;
		},
		async onSubmit(e) {
			e.preventDefault();
			let form = new FormData();
			form.append("title", this.title);
			form.append("creator", this.creator);
			form.append("tags", this.tags);
			form.append("thumbnail", this.thumbnail);
			form.append("file", this.video);

            const onUploadProgress = (event) => {
                    const percentCompleted = Math.round((event.loaded * 100) / event.total);
                    this.uploadInProgress = true;
                    if(percentCompleted < 100) {
                        this.uploadPercentage = percentCompleted;
                        this.progressOverlay.style.width = `${percentCompleted}%`;
                    }else {
                        this.uploadInProgress = false;
                    }
            }
            axiosClient.post("/upload/file", form, {
                        headers: { "Content-Type": "multipart/form-data" }, onUploadProgress,
                    }).then(res =>{
                        console.log("success");
                        this.progressOverlay.style.width ="100%";
                        setTimeout(() => {
                            this.progressOverlay.style.width ="0px";
                            this.uploadPercentage = 0;
                        }, 1000);
                    }).catch(error =>{
                        this.progressOverlay.style.width ="100%";
                        this.progressOverlay.classList.add("failed");
                        setTimeout(() => {
                            this.progressOverlay.style.width="0px";
                        }, 1000);
                    });
		},
	},
	components: { DragAndDropUpload },
};
</script>

<style lang="scss" scoped>
.index {
    z-index: 5;
}
.failed {
    background-color: rgb(245, 0, 0);
}
.progress-overlay {
    left: 0;
    top: 0;
    position: absolute;
    border-radius: 0.4rem;
    background-color: #21A4EF;
    height: 100%;
}
.container {
	width: 100%;
}
.flex-wrapper-icon {
    display: flex;
    align-items: center;
}
.playbuddne {
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-left: 2rem;
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
.spin {
    animation: spinner 1s linear infinite;
}
@keyframes spinner {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>

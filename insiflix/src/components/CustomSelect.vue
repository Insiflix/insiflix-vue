<template>
    <div>
        <div class="select-menu">
            <div class="select-btn">
                <div class="icon-flex">
                    <i id="renderedIcon" class="bi bi-youtube" style="color: #E1306C;"></i>
                    <span class="sBtn-text">Youtube</span>
                </div>
                    <i id="chevron" class="bi bi-chevron-down" style="font-size: 1.25rem;"></i>
            </div>

            <ul class="options">
                <li class="option">
                    <i class="bi bi-youtube" style="color: #E1306C;"></i>
                    <span class="option-text">Youtube</span>
                </li>
                <li class="option">
                    <i class="bi bi-file-earmark-arrow-up" style="color: #0E76A8;"></i>
                    <span class="option-text">File</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            optionMenu: "",
            selectBtn: "",
            options: "",
            sBtn_text: "",
            renderedIcon: "",
        }
    },
    mounted() {
        this.optionMenu = document.querySelector(".select-menu");
        this.selectBtn = this.optionMenu.querySelector(".select-btn");
        this.options = this.optionMenu.querySelectorAll(".option");
        this.sBtn_text = this.optionMenu.querySelector(".sBtn-text");
        this.renderedIcon = document.querySelector("#renderedIcon");

        this.selectBtn.addEventListener("click", () =>
        this.optionMenu.classList.toggle("active")
        );

        this.options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            if(selectedOption == "Youtube") {
                this.renderedIcon.classList.remove("bi-file-earmark-arrow-up");
                this.renderedIcon.classList.add("bi-youtube");
                this.renderedIcon.style.color="rgb(245, 0, 0)";
            }
            else {
                this.renderedIcon.classList.add("bi-file-earmark-arrow-up");
                this.renderedIcon.classList.remove("bi-youtube");
                this.renderedIcon.style.color="rgb(14, 118, 168)";
            }
            this.sBtn_text.innerText = selectedOption;

            this.optionMenu.classList.remove("active");
        });
});
    }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background: #e3f2fd;
}
.icon-flex {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

$width: 330px;

.select-menu {
    padding: 2rem;
    padding-right:2rem;
	max-width: $width;
	.select-btn {
        min-width: 10rem;
		display: flex;
		height: 55px;
		background: #fff;
		padding: 20px;
		font-size: 18px;
		font-weight: 400;
		border-radius: 8px;
		align-items: center;
		cursor: pointer;
		justify-content: space-between;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        gap: .4rem;
	}
	.options {
		position: absolute;
		width: 164px;
        overflow-y: auto;
        max-height: 295px;
		padding: 10px;
		margin-top: 10px;
		border-radius: 8px;
		background: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		animation-name: fadeInDown;
		-webkit-animation-name: fadeInDown;
		animation-duration: 0.35s;
		animation-fill-mode: both;
		-webkit-animation-duration: 0.35s;
		-webkit-animation-fill-mode: both;
		.option {
			display: flex;
			height: 55px;
			cursor: pointer;
			padding: 0 16px;
			border-radius: 8px;
			align-items: center;
			background: #fff;
			&:hover {
				background: #f2f2f2;
			}
			i {
				font-size: 25px;
				margin-right: 12px;
			}
			.option-text {
				font-size: 18px;
				color: #333;
			}
		}
	}
}
.select-btn {
    #renderedIcon {
        font-size: 25px;
    }
	i:not(#renderedIcon) {
		font-size: 25px;
		transition: 0.3s;
	}
}
.select-menu.active {
	.select-btn {
		#chevron {
			transform: rotate(-180deg);
		}
	}
	.options {
		display: block;
		opacity: 0;
		z-index: 10;
		animation-name: fadeInUp;
		-webkit-animation-name: fadeInUp;
		animation-duration: 0.4s;
		animation-fill-mode: both;
		-webkit-animation-duration: 0.4s;
		-webkit-animation-fill-mode: both;
	}
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 30px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 20px, 0);
    opacity: 0;
  }
}
</style>
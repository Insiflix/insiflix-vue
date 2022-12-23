<template>
	<div id="app">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Hello Vue 2 + Vite" />
	</div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
	components: {
		HelloWorld,
	},
	created(){
		if(localStorage.getItem("auth") !== "true"){
			window.location.pathname = "/login";
		}
		else {
			axios
			.get("http://localhost:4000/auth", {
				withCredentials: true
			})
			.catch(e => {
					console.log(e);
					localStorage.setItem("auth", "false"); 
				});
		}
	},
};
</script>

<style>
@font-face {
    font-family: 'Netflix Sans';
    font-weight: 100;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 300;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 400;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 700;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 800;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff) format('woff')
}

@font-face {
    font-family: 'Netflix Sans';
    font-weight: 900;
    font-display: optional;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff) format('woff')
}

#app {
	font-family: "Netflix Sans";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

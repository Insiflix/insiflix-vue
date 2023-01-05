<template>
  <div id="app">
    <NavBar></NavBar>
    <VideoSlider></VideoSlider>
    <VideoSlider></VideoSlider>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 2 + Vite" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import axiosClient from "../tools/helpers";
import NavBar from "../components/NavBar.vue";
import VideoSlider from "../components/VideoSlider.vue";
export default {
  components: {
    HelloWorld,
    NavBar,
    VideoSlider,
  },
  created() {
    console.log(localStorage.getItem("auth"));
    if (localStorage.getItem("auth") !== "true") {
      window.location.pathname = "/login";
    } else {
      axiosClient.get("auth/validate").catch((e) => {
        console.log(e);
        localStorage.setItem("auth", "false");
      });
    }
  },
};
</script>

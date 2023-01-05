<template>
<div>
    <Player></Player>
</div>
</template>

<script>
import Player from "../components/Player.vue";
import axiosClient from "../tools/helpers";

export default {
    components: {
        Player,
    },
    created() {
        if (localStorage.getItem("auth") !== "true") {
            window.location.pathname = "/login";
        } else {
            axiosClient.get("/auth/validate", {}).catch(e => {
                console.log(e);
                localStorage.setItem("auth", "false");
            });
        }
    },
};
</script>

import Vue from "vue";
import App from "./App.vue";
import socketio from "socket.io-client";
import VueSocketIO from "vue-socket.io";

export const SocketInstance = socketio("http://localhost:5000");

Vue.use(VueSocketIO, SocketInstance);

new Vue({
	render: h => h(App),
}).$mount("#app");

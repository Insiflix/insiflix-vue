import "./scss/main.scss";
import Vue from "vue";
import axios from "axios";
// import socketio from "socket.io-client";
// import VueSocketIO from "vue-socket.io";

// export const SocketInstance = socketio("http://localhost:5000");
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import WatchPage from "./pages/WatchPage.vue";

const routes = {
	"/": Home,
	"/login": Login,
	"/watch": WatchPage,
};

new Vue({
	el: "#app",
	data: {
		currentRoute: window.location.pathname,
	},
	computed: {
		ViewComponent() {
			return routes[this.currentRoute] || NotFound;
		},
	},
	render(h) {
		return h(this.ViewComponent);
	},
});

// axios.defaults.withCredentials = true;

// Vue.use(VueSocketIO, SocketInstance);

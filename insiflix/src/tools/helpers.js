import axios from "axios";

const axiosClient = axios.create({
	baseURL: "https://insiflix-api.obama-prism.com",
	withCredentials: true,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
});

export default axiosClient;

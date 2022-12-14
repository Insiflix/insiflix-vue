import axios from "axios";

const axiosClient = axios.create({
	baseURL: "http://localhost:4000",
	withCredentials: true,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
});

export default axiosClient;

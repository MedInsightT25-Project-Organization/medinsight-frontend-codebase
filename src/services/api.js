import axios from "axios";

const API = axios.create({
	baseURL:
		import.meta.env.VITE_API_URL || "https://medinsight-api.onrender.com/api",
	headers: {
		"Content-Type": "application/json",
	},
	// timeout: 10000,
});

// Queue system for token refresh
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
	failedQueue.forEach((prom) => {
		error ? prom.reject(error) : prom.resolve(token);
	});
	failedQueue = [];
};

// Request interceptor
API.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Response interceptor
API.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject });
				}).then((token) => {
					originalRequest.headers.Authorization = `Bearer ${token}`;
					return API(originalRequest);
				});
			}

			originalRequest._retry = true;
			isRefreshing = true;

			try {
				const refreshToken = localStorage.getItem("refreshToken");
				if (!refreshToken) throw new Error("No refresh token available");

				const res = await API.post("/auth/refresh-token", { refreshToken });
				const { token: newToken, refreshToken: newRefreshToken } = res.data;

				localStorage.setItem("token", newToken);
				localStorage.setItem("refreshToken", newRefreshToken);

				processQueue(null, newToken);
				return API(originalRequest);
			} catch (err) {
				processQueue(err, null);
				throw err; // Let AuthContext handle the logout
			} finally {
				isRefreshing = false;
			}
		}

		return Promise.reject(error);
	}
);

export default API;

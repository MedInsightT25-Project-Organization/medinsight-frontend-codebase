// src/api/api.js
import axios from "axios";

const API = axios.create({
	baseURL: "https://medinsight-api.onrender.com/api",
	headers: {
		"Content-Type": "application/json",
	},
	// withCredentials: true,
});

// Attach access token to all requests
API.interceptors.request.use(
	(config) => {
		const accessToken = localStorage.getItem("token");
		if (accessToken) {
			config.headers["Authorization"] = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Handle token expiration and refresh
API.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		// If 401 error and not retrying already
		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			originalRequest._retry = true;

			try {
				const refreshToken = localStorage.getItem("refreshToken");
				if (!refreshToken) {
					throw new Error("No refresh token available");
				}

				// Call refresh token endpoint (you need your backend to expose it!)
				const res = await axios.post(
					"https://medinsight-api.onrender.com/api/auth/refresh-token",
					{
						refreshToken,
					}
				);

				const { token: newAccessToken, refreshToken: newRefreshToken } =
					res.data;

				// Save the new tokens
				localStorage.setItem("token", newAccessToken);
				localStorage.setItem("refreshToken", newRefreshToken);

				// Update Authorization header
				API.defaults.headers.common[
					"Authorization"
				] = `Bearer ${newAccessToken}`;
				originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

				// Retry the original request
				return API(originalRequest);
			} catch (err) {
				console.error("Token refresh failed:", err);
				// Optional: logout user if refresh also fails
				localStorage.removeItem("token");
				localStorage.removeItem("refreshToken");
				localStorage.removeItem("user");
				window.location.href = "/patient-sign-in"; // force user to login again
				return Promise.reject(err);
			}
		}

		return Promise.reject(error);
	}
);

export default API;

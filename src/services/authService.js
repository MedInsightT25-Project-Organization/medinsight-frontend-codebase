// src/services/authService.js
import API from "../services/api";

// PATIENT
export const registerPatient = async (formData) => {
	const response = await API.post("auth/register/patient", formData);
	return response.data;
};

// HEALTHCARE PROVIDER
export const registerHealthcareProvider = async (formData) => {
	const response = await API.post("auth/healthcare/register", formData);
	return response.data;
};

// COMMON LOGIN
export const loginHealthcareProvider = async (credentials) => {
	const response = await API.post("auth/login", credentials);
	return response.data;
};
export const loginPatient = async (credentials) => {
	const response = await API.post("auth/login", credentials);
	return response.data;
};

// export const loginUser = async (credentials) => {
// 	const response = await API.post("auth/login", credentials);
// 	return response.data;
// };

// FORGOT PASSWORD
export const forgotPassword = async (data) => {
	const response = await API.post("auth/forgot-password", data);
	return response.data;
};

// REFRESH TOKEN
export const refreshAuthToken = async () => {
	const response = await API.post("auth/refresh-token");
	return response.data;
};

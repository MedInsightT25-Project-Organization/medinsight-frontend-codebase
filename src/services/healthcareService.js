// src/services/healthcareService.js
import api from "./api";

export const sendTestResult = async (formData) => {
	const response = await api.post("/healthcare/send-test-result", formData);
	return response.data;
};

export const uploadLabTest = async (formData) => {
	const response = await api.post("/healthcare/upload-lab-test", formData);
	return response.data;
};

export const getHealthcareProfile = async () => {
	const response = await api.get("/healthcare/profile");
	return response.data;
};

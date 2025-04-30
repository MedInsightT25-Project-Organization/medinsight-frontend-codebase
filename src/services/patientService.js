// src/services/patientService.js
import api from "./api";

export const getAppointments = async () => {
	const response = await api.get("/patient/appointments");
	return response.data;
};

export const getTestResults = async () => {
	const response = await api.get("/patient/test-results");
	return response.data;
};

// Add more patient dashboard actions here (like payments, cart etc)

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import LabTestProvider from "./Context Api/LabTestContext";
import { HospitalProvider } from "./Context Api/HospitalContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ProfileProvider } from "./contexts/PatientContexts/PatientProfileContext.jsx";
import { HealthcareProfileProvider } from "./contexts/HealthcareContext/HealthcareProfileContext.jsx"
createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<HospitalProvider>
			<LabTestProvider>
				<AuthProvider>
					<HealthcareProfileProvider>
						<ProfileProvider>
							<App />
						</ProfileProvider>
					</HealthcareProfileProvider>
				</AuthProvider>
			</LabTestProvider>
		</HospitalProvider>
	</BrowserRouter >
);

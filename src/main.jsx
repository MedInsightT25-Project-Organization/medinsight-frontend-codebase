import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import LabTestProvider from "./Context Api/LabTestContext";
import { HospitalProvider } from "./Context Api/HospitalContext.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<HospitalProvider>
			<LabTestProvider>
				<App />
			</LabTestProvider>
		</HospitalProvider>
	</BrowserRouter >
);

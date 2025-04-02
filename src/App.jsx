import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LabTests from "./Pages/LabTests";
import Hospitals from "./Pages/Hospitals";
import Blog from "./Pages/Blog";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
import LabTestsDetails from "./Pages/LabTestsDetails";
import PatientSignUp from "./Pages/PatientSignUp/PatientSignUp";
import PatientSignIn from "./Pages/PatientSignUp/PatientSignIn";
import Cart from "./Pages/Cart";
import PatientFormOne from "./Pages/PatientSignUp/PatientFormOne";
import PatientFormTwo from "./Pages/PatientSignUp/PatientFormTwo";
import HealthcareSignUp from "./Pages/Healthcare-Provider-Signup/HealthcareSignUp";
import HealthcareSignIn from "./Pages/Healthcare-Provider-Signup/HealthcareSignIn";

const App = () => {
	return (
		<div className="">
			<NavBar />
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="/lab-tests" element={<LabTests />} />
				<Route path="/lab-tests/:id" element={<LabTestsDetails />} />
				<Route path="/hospitals" element={<Hospitals />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/patient-sign-up" element={<PatientSignUp />} />
				<Route path="/patient-sign-in" element={<PatientSignIn />} />
				<Route path="/healthcare-sign-up" element={<HealthcareSignUp />} />
				<Route path="/healthcare-sign-in" element={<HealthcareSignIn />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="*" element={<NotFound />} />

				{/*  */}
				<Route path="/patient-form-one" element={<PatientFormOne />} />
				<Route path="/patient-form-two" element={<PatientFormTwo />} />
			</Routes>
		</div>
	);
};

export default App;

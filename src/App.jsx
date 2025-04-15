import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
import PatientDashboard from "./Pages/Dashboards/PatientDashboard/PatientDashboard";
import HealthcareProviderDashboard from "./Pages/Dashboards/HealthcareProviderDashboard/HealthcareProviderDashboard";
import HealthcareFormOne from "./Pages/Healthcare-Provider-Signup/HealthcareFormOne";
import PatientHomeDashboard from "./Pages/Dashboards/PatientDashboard/PatientHomeDashboard";
import Appointment from "./Pages/Dashboards/PatientDashboard/Appointment";
import Consultation from "./Pages/Dashboards/PatientDashboard/Consultation";
import DashboardCart from "./Pages/Dashboards/PatientDashboard/DashboardCart";
import Payments from "./Pages/Dashboards/PatientDashboard/Payments";
import UserProfile from "./Pages/Dashboards/PatientDashboard/UserProfile";
import TestResults from "./Pages/Dashboards/PatientDashboard/TestResults";

const App = () => {

	const location = useLocation()
	const hideNavbarRoutes = ["/patient-dashboard", "/patient-dashboard/appointment", "/patient-dashboard/consultation", "/patient-dashboard/dashboard-cart", "/patient-dashboard/payments", "/patient-dashboard/user-profile", "/patient-dashboard/test-results",  "/healthcare-dashboard"];

	return (
		<div className="">
			{!hideNavbarRoutes.includes(location.pathname) && <NavBar />}
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

				{/*  */}
				<Route path="/healthcare-form-one" element={<HealthcareFormOne />} />


				{/*  */}
				<Route path="/patient-dashboard" element={<PatientDashboard />}>
					<Route index element={<PatientHomeDashboard />} />
					<Route path="appointment" element={<Appointment />} />
					<Route path="consultation" element={<Consultation />} />
					<Route path="dashboard-cart" element={<DashboardCart />} />
					<Route path="payments" element={<Payments />} />
					<Route path="user-profile" element={<UserProfile />} />
					<Route path="test-results" element={<TestResults />} />

				</Route>
				<Route path="/healthcare-dashboard" element={<HealthcareProviderDashboard />} />

			</Routes>
		</div>
	);
};

export default App;

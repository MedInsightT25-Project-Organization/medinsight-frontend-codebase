import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
 
import NavBar from "./Components/NavBar";
import Loader from "./Components/Loader";
const Homepage = lazy(() => import("./Pages/Homepage"));
const LabTests = lazy(() => import("./Pages/LabTests"));
const Hospitals = lazy(() => import("./Pages/Hospitals"));
const Blog = lazy(() => import("./Pages/Blog"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const LabTestsDetails = lazy(() => import("./Pages/LabTestsDetails"));
const PatientSignUp = lazy(() => import("./Pages/PatientSignUp/PatientSignUp"));
const PatientSignIn = lazy(() => import("./Pages/PatientSignUp/PatientSignIn"));
const Cart = lazy(() => import("./Pages/Cart"));
const PatientFormOne = lazy(() => import("./Pages/PatientSignUp/PatientFormOne"));
const HealthcareSignUp = lazy(() => import("./Pages/Healthcare-Provider-Signup/HealthcareSignUp"));
const HealthcareSignIn = lazy(() => import("./Pages/Healthcare-Provider-Signup/HealthcareSignIn"));
const PatientDashboard = lazy(() => import("./Pages/Dashboards/PatientDashboard/PatientDashboard"));
const HealthcareProviderDashboard = lazy(() => import("./Pages/Dashboards/HealthcareProviderDashboard/HealthcareProviderDashboard"));
const HealthcareFormOne = lazy(() => import("./Pages/Healthcare-Provider-Signup/HealthcareFormOne"));
const PatientHomeDashboard = lazy(() => import("./Pages/Dashboards/PatientDashboard/PatientHomeDashboard"));
const Appointment = lazy(() => import("./Pages/Dashboards/PatientDashboard/Appointment"));
const Consultation = lazy(() => import("./Pages/Dashboards/PatientDashboard/Consultation"));
const DashboardCart = lazy(() => import("./Pages/Dashboards/PatientDashboard/DashboardCart"));
const Payments = lazy(() => import("./Pages/Dashboards/PatientDashboard/Payments"));
const UserProfile = lazy(() => import("./Pages/Dashboards/PatientDashboard/UserProfile"));
const TestResults = lazy(() => import("./Pages/Dashboards/PatientDashboard/TestResults"));
const HealthcareHomeDashboard = lazy(() => import("./Pages/Dashboards/HealthcareProviderDashboard/HealthcareHomeDashboard"));
const SendTestResult = lazy(() => import("./Pages/Dashboards/HealthcareProviderDashboard/SendTestResult"));
const UploadLabTest = lazy(() => import("./Pages/Dashboards/HealthcareProviderDashboard/UploadLabTest"));
const HealthcareProfile = lazy(() => import("./Pages/Dashboards/HealthcareProviderDashboard/HealthcareProfile"));

const App = () => {

	const location = useLocation()
	const hideNavbarRoutes = ["/patient-dashboard", "/patient-dashboard/appointment", "/patient-dashboard/consultation", "/patient-dashboard/dashboard-cart", "/patient-dashboard/payments", "/patient-dashboard/user-profile", "/patient-dashboard/test-results", "/healthcare-dashboard", "/healthcare-dashboard/send-test-result", "/healthcare-dashboard/upload-test-result", "/healthcare-dashboard/healthcare-profile",


	];

	return (
		<div className="">
			{!hideNavbarRoutes.includes(location.pathname) && <NavBar />}
			<Suspense fallback={<Loader />}>
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

					{/*  */}
					<Route path="/healthcare-form-one" element={<HealthcareFormOne />} />


					{/* Patient Dashboard */}
					<Route path="/patient-dashboard" element={<PatientDashboard />}>
						<Route index element={<PatientHomeDashboard />} />
						<Route path="appointment" element={<Appointment />} />
						<Route path="consultation" element={<Consultation />} />
						<Route path="dashboard-cart" element={<DashboardCart />} />
						<Route path="payments" element={<Payments />} />
						<Route path="user-profile" element={<UserProfile />} />
						<Route path="test-results" element={<TestResults />} />

					</Route>
					{/* Healthcare Providers Dashboard */}
					<Route path="/healthcare-dashboard" element={<HealthcareProviderDashboard />}>

						<Route index element={<HealthcareHomeDashboard />} />
						<Route path="send-test-result" element={<SendTestResult />} />
						<Route path="upload-test-result" element={<UploadLabTest />} />
						<Route path="healthcare-profile" element={<HealthcareProfile />} />
					</Route>

				</Routes>
			</Suspense>
		</div>
	);
};

export default App;

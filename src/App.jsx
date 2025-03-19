import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import LabTests from "./Pages/LabTests";
import Hospitals from "./Pages/Hospitals";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
import LabTestsDetails from "./Pages/LabTestsDetails";

const App = () => {
	return (
		<div className="">
			<NavBar />
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/lab-tests" element={<LabTests />} />
				<Route path="/lab-tests/:id" element={<LabTestsDetails />} />
				<Route path="/hospitals" element={<Hospitals />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;

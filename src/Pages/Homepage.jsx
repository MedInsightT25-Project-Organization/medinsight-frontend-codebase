import React from "react";
import HeroSlides from "../Components/HeroSlide/HeroSlides";
import AboutSection from "../Components/AboutSection";
import backgroundImage from "../assets/heroImage.png"
import { FaPaperPlane } from "react-icons/fa6";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
const Homepage = () => {

	const navigate = useNavigate()
	return (
		<>
			{/* Hero Slide section */}
			<HeroSlides />

			{/* About Section */}
			<AboutSection />

			{/*  */}
			<section
				className="w-full h-[60vh] relative bg-center bg-cover bg-no-repeat flex items-center text-left text-white overflow-hidden bg-fixed"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				{/* Content */}
				<div className="absolute inset-0 bg-darkPrimary bg-opacity-70 flex flex-col gap-3 items-center justify-center text-center p-6">
					<h1 className="text-white text-2xl sm:text-4xl font-bold max-w-2xl leading-7">
						Bridging the Gap Between Patients & Healthcare Providers
					</h1>

					<span className="h-[.1rem] w-20 bg-white"></span>
					<p className="text-[.7rem] md:text-base text-gray-200 my-1 max-w-lg leading-snug">
						Our secure and intuitive platform transforms how healthcare is accessed and delivered. Join us today and take control of your healthcare journey!
					</p>
					<button
						onClick={() => { navigate('/patient-sign-in'); scrollTo(0, 0) }}

						className="btn bg-secondary hover:bg-white hover:text-primary">
						Get Started <FaPaperPlane />
					</button>
				</div>
			</section>



			{/* Testimonial */}
			<Testimonial />
			<Footer />
		</>
	);
};

export default Homepage;

import React from "react";
import HeroSlides from "../Components/HeroSlide/HeroSlides";
import AboutSection from "../Components/AboutSection";

const Homepage = () => {
	return (
		<div className="">
			{/* Hero Slide section */}
			<HeroSlides />

      {/* About Section */}
      <AboutSection/>
		</div>
	);
};

export default Homepage;

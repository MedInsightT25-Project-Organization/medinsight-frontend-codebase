import React from "react";
import OtherHeaderSection from "../Components/OtherHeaderSection/OtherHeaderSection";
import heroImage from '../assets/heroImage.png'
const Hospitals = () => {
	return <div>

		<OtherHeaderSection title="Hospitals" backgroundImage={heroImage} subTitle="Find and book appointments at the best hospitals near you!" />
		<div className="container">
			<h2 className='text-center text-primary'>This Page is coming soon!</h2>
		</div>
	</div>;
};

export default Hospitals;

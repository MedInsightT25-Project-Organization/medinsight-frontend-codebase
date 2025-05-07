import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroImage from "./heroImage.png";
import "./HeroSlide.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const slides = [
	{
		id: 1,
		image: heroImage,
		title: "Your Health at Your Fingertips",
		subtitle: "Accessing quality healthcare has never been easier!",
	},
	{
		id: 2,
		image: heroImage,
		title: "One App for Patients & Healthcare Providers",
		subtitle: "Our web app connects patients with healthcare providers.",
	},
	{
		id: 3,
		image: heroImage,
		title: "Trusted Professionals",
		subtitle: "Making medical care more accessible, efficient, and stress-free",
	},
];

const HeroSlides = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const navigate = useNavigate();

	return (
		<div
			className="relative w-full h-[110vh] bg-cover bg-center"
			style={{ backgroundImage: `url(${heroImage})` }}
		>
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-darkPrimary bg-opacity-60 z-10" />

			{/* Static Buttons (stay fixed and centered) */}
			<div className="absolute z-30 bottom-20 w-full flex justify-center gap-4">
				<button
					onClick={() => {
						navigate("/patient-sign-in");
						scrollTo(0, 0);
					}}
					className="text-xs sm:text-sm btn btn-white"
				>
					Patients <IoIosArrowRoundForward />
				</button>
				<button
					onClick={() => {
						navigate("/healthcare-sign-in");
						scrollTo(0, 0);
					}}
					className="text-xs sm:text-sm btn btn-primary"
				>
					Healthcare Providers <IoIosArrowRoundForward />
				</button>
			</div>

			{/* Swiper Text Slides */}
			<Swiper
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				speed={1200}
				loop={true}
				pagination={{ clickable: true }}
				navigation={false}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				modules={[Autoplay, Pagination, Navigation]}
				className="relative w-full h-full z-20"
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={slide.id}>
						<div className="w-full h-full flex flex-col gap-4 items-center justify-center text-center p-6">
							<div
								className="text-white max-w-2xl transition-opacity duration-700 ease-in-out"

							>
								<h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-2">
									{slide.title}
								</h1>
								<p className="text-xs sm:text-sm md:text-base font-light">
									{slide.subtitle}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HeroSlides;

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroImage from "./heroImage.png";
import './HeroSlide.css'
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
	const navigate = useNavigate()
	return (
		<Swiper
			effect="fade"
			spaceBetween={0}
			centeredSlides={true}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			speed={2000}
			loop={true}
			pagination={{ clickable: true }}
			navigation={false}
			modules={[Autoplay, Pagination, Navigation]}
			className="relative w-full h-[110vh]"
		>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id} className="relative">
					{/* Background Image */}
					<div
						className="w-full h-full bg-cover bg-center"
						style={{ backgroundImage: `url(${slide.image})` }}
					>
						{/* Overlay */}
						<div className="absolute inset-0 bg-darkPrimary bg-opacity-60 flex flex-col gap-5 items-center justify-center text-center p-6">
							<div className="text-white max-w-2xl">
								<h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-2 text-white">
									{slide.title}
								</h1>
								<p className="text-xs sm:text-sm md:text-base font-light">
									{slide.subtitle}
								</p>
							</div>

							<div className="flex gap-4">
								<button
									onClick={() => { navigate('/patient-sign-in'); scrollTo(0, 0) }}

									className="text-[0.4rem] btn bg-primary text-white border border-primary  hover:text-white hover:bg-transparent hover:border hover:border-white">
									Patients <IoIosArrowRoundForward />
								</button>
								<button
									onClick={() => { navigate('/healthcare-sign-in'); scrollTo(0, 0) }}

									className="text-[0.4rem] btn bg-secondary text-white border border-secondary  hover:text-white hover:bg-transparent hover:border hover:border-white">
									Healthcare Providers <IoIosArrowRoundForward />
								</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeroSlides;

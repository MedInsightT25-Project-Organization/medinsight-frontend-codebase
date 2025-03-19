

const OtherHeaderSection = ({ backgroundImage, title, subTitle }) => {
	return (
		<header
			className="w-full h-[50vh] sm:h-[60vh] relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden"
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="absolute inset-0 bg-darkPrimary bg-opacity-70 flex flex-col gap-2 items-center justify-center text-center p-6">
				<h2 className="font-workSans text-white font-medium text-2xl md:text-4xl">{title}</h2>
				<span className="bg-white w-[5rem] h-[.1rem]"></span>
				<p className="text-[.8rem] sm:text-base text-gray-100">{subTitle}</p>
			</div>


		</header>
	);
};

export default OtherHeaderSection;
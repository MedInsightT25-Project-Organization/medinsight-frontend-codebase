

const OtherHeaderSection = ({ backgroundImage, title, subTitle }) => {
	return (
		<header
			className="w-full h-[60vh] relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden "
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="absolute inset-0 bg-darkPrimary bg-opacity-70 flex flex-col gap-3 items-center justify-center text-center p-6">
				<h2 className="font-workSans text-white font-medium text-4xl md:text-5xl">{title}</h2>
				<span className="bg-white w-[5rem] h-[.1rem]"></span>
				<p className="text-[0.5rem] sm:text-xs text-gray-100">{subTitle}</p>
			</div>


		</header>
	);
};

export default OtherHeaderSection;
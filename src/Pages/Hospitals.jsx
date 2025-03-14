import React, { useState } from "react";
import OtherHeaderSection from "../Components/OtherHeaderSection/OtherHeaderSection";
import heroImage from "../assets/heroImage.png";
import { healthcareCenters, lagosLocalGovernments } from "../assets/data";
import { LuInfo } from "react-icons/lu";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaClock, FaPaperPlane, FaRegCircleDot } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import { PiFunnelSimple } from "react-icons/pi";

import HospitalRating from "../Components/HospitalRating";

// 
const Hospitals = () => {
	// Filter items
	const [filterItems, setFilterItems] = useState(healthcareCenters);
	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 6;

	// Filter Hospitals by their local government area
	const filterHospitalCategory = (lgaCategory) => {
		let filtered =
			lgaCategory === "All"
				? healthcareCenters
				: healthcareCenters.filter((item) => item.lga === lgaCategory);
		setFilterItems(filtered);
		setCurrentPage(0); // Reset pagination when filtering
	};

	// Handle Pagination change
	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
	};

	// Get current items
	const offset = currentPage * itemsPerPage;
	const currentItems = filterItems.slice(offset, offset + itemsPerPage);
	const pageCount = Math.ceil(filterItems.length / itemsPerPage);

	// To display responsive dropdown
	const [showDropdown, setShowDropdown] = useState(false)
	const toggleDropdown = () => {
		setShowDropdown(!showDropdown)

	}

	// Selected Hospital
	const [selectedHospital, setSelectedHospital] = useState(null)

	const displaySelectedHospital = (hospital) => {
		// console.log(product)
		setSelectedHospital(hospital)
		console.log(hospital)
		console.log(selectedHospital)

	}



	return (
		<>
			<OtherHeaderSection
				title="Hospitals"
				backgroundImage={heroImage}
				subTitle="Find and book appointments at the best hospitals near you!"
			/>

			<section className="container">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
					{/* Filter Section */}

					{/* Desktop category section */}
					<div className="bg-white rounded-xl p-3 md:p-6 soft-shadow md:col-span-1 ">

						<div className="hidden md:block">
							<h3 className="text-center text-xl text-darkPrimary">Categories</h3>
							<span className="w-[10rem] h-[.1rem] bg-primary block mx-auto my-2"></span>
							<ul className="flex flex-col gap-3 cursor-pointer my-6">
								{["All", ...lagosLocalGovernments].map((data) => (
									<li
										key={data}
										onClick={() => filterHospitalCategory(data)}
										className="list-none text-xs p-2 hover:bg-primary hover:text-white rounded-md transition"
									>
										{data}
									</li>
								))}
							</ul>
						</div>

						{/* Category Header for mobile screen */}


						<div className="flex items-center justify-between md:hidden mb-4 px-2">
							<h3 className="text-[1.35rem] font-semibold text-darkPrimary">Select Category</h3>
							<div onClick={toggleDropdown} className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-300 text-primary bg-opacity-20 shadow-xl duration-500 transition-all hover:bg-primary hover:text-white">
								<PiFunnelSimple className="text-2xl" />
							</div>
						</div>
					</div>

					{/* Mobile category dropdown */}
					{showDropdown && (
						<div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-40">
							<div className="bg-accent w-11/12 max-w-sm rounded-lg shadow-lg p-4">
								<h3 className="text-lg font-medium text-gray-800 mb-6 text-center">Select Category</h3>
								<ul className="max-h-60 overflow-y-auto text-sm">
									<li
										className="p-3 hover:bg-white cursor-pointer rounded-md"
										onClick={() => { filterHospitalCategory("All"); setShowDropdown(false) }}
									>
										All
									</li>
									{lagosLocalGovernments.map((lga, index) => (
										<li
											key={index}
											className="p-3 hover:bg-white cursor-pointer rounded-md"
											onClick={() => { filterHospitalCategory(lga); setShowDropdown(false) }}
										>
											{lga}
										</li>
									))}
								</ul>
								<button
									className="w-full mt-4 bg-primary text-sm text-white py-3 rounded-md hover:bg-darkPrimary transition"
									onClick={() => setShowDropdown(false)}
								>
									Close
								</button>
							</div>
						</div>
					)}



					{/* Hospital Section */}
					<div className="bg-white rounded-xl p-6 soft-shadow md:col-span-2 lg:col-span-3 xl:col-span-4">
						{/* Hospital cards */}
						<div className="flex flex-col gap-6">
							{currentItems.map((data) => (
								<div
									onClick={() => displaySelectedHospital(data)}
									key={data.id}
									className="bg-white card-shadow p-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:shadow-lg cursor-pointer"
								>
									{/* Header Section */}
									<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
										<div className="flex flex-col gap-2 w-full">
											{/* Name & Verified Badge */}
											<div className="flex items-center gap-1">
												<h4 className="text-lg sm:text-xl font-semibold text-primary leading-tight">
													{data.name}
												</h4>
												<RiVerifiedBadgeFill className="text-secondary text-3xl sm:text-2xl" />
											</div>

											{/* Location */}
											<div className="flex items-center gap-2 border-l-4 border-primary pl-2">
												<MdLocationPin className="text-lg text-gray-600" />
												<span className="text-sm text-gray-700">
													{data.lga}, {data.state}.
												</span>
											</div>

											{/* ratings */}
											<HospitalRating ratings={data.ratings} />
										</div>

										{/* Work Hours */}
										<div className="flex items-center gap-2 p-3 rounded-xl bg-green-300 bg-opacity-15">
											<div className="p-2 bg-white shadow-md rounded-full flex items-center justify-center">
												<FaClock className="text-darkSecondary text-lg" />
											</div>
											<h5 className="text-xs sm:text-sm font-medium leading-tight text-gray-700">
												{data.workHours}
											</h5>
										</div>
									</div>

									{/* Services Summary */}
									<div className="mt-8">
										<h5 className="flex items-center gap-2 text-base font-medium text-gray-800">
											Services Summary <LuInfo className="text-lg" />
										</h5>
										<hr className="my-2" />
										<ul className="flex flex-wrap items-center justify-start gap-3 text-[0.75rem] sm:text-sm text-gray-700 leading-tight">
											{data.services.slice(0, 5).map((service, index) => (
												<li key={index} className="flex items-center gap-1">
													<FaRegCircleDot className="text-secondary" /> {service}
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>

						{/* modal to display the selected hospital  */}
						{selectedHospital && (
							<div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-40">

								<div key={selectedHospital.id} className="bg-accent w-11/12 max-w-lg max-h-[25rem] overflow-y-auto rounded-lg shadow-lg p-4">
									{/* Header Section */}
									<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
										<div className="flex flex-col gap-2 w-full">
											{/* Name & Verified Badge */}
											<div className="flex items-center gap-1">
												<h4 className="text-lg sm:text-xl font-semibold text-primary leading-tight">
													{selectedHospital.name}
												</h4>
												<RiVerifiedBadgeFill className="text-secondary text-3xl sm:text-2xl" />
											</div>

											{/* Location */}
											<div className="flex items-center gap-2 border-l-4 border-primary pl-2">
												<MdLocationPin className="text-lg text-gray-600" />
												<span className="text-sm text-gray-700">
													{selectedHospital.address}, {selectedHospital.lga}, {selectedHospital.state}.
												</span>
											</div>
											<HospitalRating ratings={selectedHospital.ratings} />
										</div>

										{/* Work Hours */}
										<div className="flex items-center gap-2 p-3 rounded-xl bg-green-300 bg-opacity-15">
											<div className="p-2 bg-white shadow-md rounded-full flex items-center justify-center">
												<FaClock className="text-darkSecondary text-lg" />
											</div>
											<h5 className="text-xs sm:text-sm font-medium leading-tight text-gray-700">
												{selectedHospital.workHours}
											</h5>
										</div>
									</div>

									{/* Services Summary */}
									<div className="mt-8">
										<h5 className="flex items-center gap-2 text-base font-medium text-gray-800">
											Services Summary <LuInfo className="text-lg" />
										</h5>
										<hr className="my-2" />
										<ul className="flex flex-wrap items-center justify-start gap-3 text-[0.75rem] sm:text-sm text-gray-700 leading-[1rem]">
											{selectedHospital.services.map((service, index) => (
												<li key={index} className="flex items-center gap-1">
													<FaRegCircleDot className="text-secondary" /> {service}
												</li>
											))}
										</ul>
									</div>


									<button
										className="w-full flex items-center justify-center gap-2 mt-4 bg-primary text-sm text-white py-4 rounded-md hover:bg-darkPrimary transition"
										onClick={() => setSelectedHospital(null)}
									>
										Book Appointment <FaPaperPlane />
									</button>
								</div>
							</div>
						)}

						{/* Pagination Section */}
						{pageCount > 1 && (
							<div className="my-6 flex w-full items-center justify-center">
								<ReactPaginate
									previousLabel={"←"}
									nextLabel={"→"}
									breakLabel={"..."}
									pageCount={pageCount}
									marginPagesDisplayed={2}
									pageRangeDisplayed={3}
									onPageChange={handlePageClick}
									containerClassName={"flex gap-2 text-sm sm:text-base"}
									pageClassName={"px-3 py-1 border rounded-md cursor-pointer hover:bg-primary hover:text-white"}
									activeClassName={"bg-primary text-white"}
									previousClassName={"px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-200"}
									nextClassName={"px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-200"}
									disabledClassName={"opacity-50 cursor-not-allowed"}
								/>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Hospitals;

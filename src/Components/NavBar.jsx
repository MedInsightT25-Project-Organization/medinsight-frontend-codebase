import React, { useState } from "react";
import logo from "../assets/MED-LOGO.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaOpencart } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { TbMenu3 } from "react-icons/tb";
import { HiChevronRight } from "react-icons/hi";
import { useLabTest } from "../Context Api/LabTestContext";
import { useAuth } from "../contexts/AuthContext";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
const NavBar = () => {
	const [showNavbar, setShowNavbar] = useState(false);
	const { isAuthenticated } = useAuth()

	const { getTotalCartCount } = useLabTest()
	const totalItems = getTotalCartCount()

	const navigate = useNavigate()

	//function to toggle Navbar
	const toggleNavbar = () => {
		setShowNavbar(!showNavbar);
	};




	// function to remove menu bar

	return (
		<div className="fixed top-0 w-full z-50">
			<div className="w-full static z-50 flex items-center justify-between bg-white py-3 px-5 sm:py-3 sm:px-10 soft-shadow">
				{/* Logo */}
				<div>
					<img
						src={logo}
						alt="Medinsight-logo"
						className="w-[7rem] sm:w-[14rem] md:w-[20rem] max-w-36"
					/>
				</div>

				{/* Menu */}
				<div className="hidden lg:flex">
					<ul className="flex items-center justify-center text-sm gap-5 md:gap-10  ">
						<NavLink to="/">
							<li>Home</li>
						</NavLink>

						<NavLink to="lab-tests">
							<li>Lab Tests</li>
						</NavLink>
						<NavLink to="hospitals">
							<li>Hospitals</li>
						</NavLink>
						<NavLink to="blog">
							<li>Blog</li>
						</NavLink>
					</ul>
				</div>

				{/* Buttons */}

				<div className="flex items-center justify-center gap-4 sm:gap-8">
					<div className="flex items-center justify-center gap-2 sm:gap-5">
						{/* <FiSearch className="p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" /> */}

						<div className="relative" onClick={() => navigate('/patient-dashboard/dashboard-cart')}>
							<FiShoppingCart size={22} />
							{totalItems > 0 && (
								<span className="absolute -top-2 -right-2 bg-secondary text-white text-[.7rem] rounded-full px-1 py-0.5">
									{totalItems}
								</span>
							)}
						</div>
						{/* <FaOpencart className="hidden sm:inline-flex p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" /> */}
					</div>

					<button onClick={() => navigate('/patient-sign-in')} className="btn btn-primary">
						Sign In <IoIosSend />
					</button>




					{/* Menu Icon */}
					<button onClick={toggleNavbar} className="inline-block lg:hidden">
						<TbMenu3 className="p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" />
					</button>
				</div>
			</div>

			{/* Mobile Navbar */}
			{showNavbar && (
				<div onClick={toggleNavbar} className="fixed inset-0 bg-darkPrimary bg-opacity-40 backdrop-blur-sm z-40">
					<div className="fixed left-0 top-0 bottom-0 w-[14rem] h-screen bg-white p-10 z-50 lg:hidden soft-shadow">

						{/* Logo */}
						<div>
							<img
								src={logo}
								alt="Medinsight-logo"
								className="w-[9rem] sm:w-[16rem] md:w-[20rem] max-w-40 mx-auto"
							/>
						</div>
						<ul className="pt-16 p-5 flex flex-col items-left justify-center text-sm gap-10 font-normal text-primary">
							<NavLink to="/" onClick={toggleNavbar}>
								<li className="flex justify-between items-center group hover:text-secondary transition duration-300">Home
									<HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
								</li>
							</NavLink>

							<NavLink to="lab-tests" onClick={toggleNavbar}>
								<li className="flex justify-between items-center group hover:text-secondary transition duration-300">Lab Tests <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" /></li>
							</NavLink>
							<NavLink to="hospitals" onClick={toggleNavbar}>
								<li className="flex justify-between items-center group hover:text-secondary transition duration-300">Hospitals <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" /></li>
							</NavLink>
							<NavLink to="blog" onClick={toggleNavbar}>
								<li className="flex justify-between items-center group hover:text-secondary transition duration-300">Blog <HiChevronRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" /></li>
							</NavLink>
						</ul>
					</div>
				</div>
			)
			}
		</div >


	);
};

export default NavBar;

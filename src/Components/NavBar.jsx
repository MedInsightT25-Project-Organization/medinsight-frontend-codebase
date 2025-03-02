import React, { useState } from "react";
import logo from "../assets/MED-LOGO.png";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaOpencart } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { TbMenu3 } from "react-icons/tb";
const NavBar = () => {
	const [showNavbar, setShowNavbar] = useState(false);


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
					<ul className="flex items-center justify-center text-xs gap-5 md:gap-10 font-medium ">
						<NavLink to="/">
							<li>HOME</li>
						</NavLink>
						<NavLink to="about">
							<li>ABOUT</li>
						</NavLink>
						<NavLink to="lab-tests">
							<li>LAB TESTS</li>
						</NavLink>
						<NavLink to="hospitals">
							<li>HOSPITALS</li>
						</NavLink>
						<NavLink to="contact">
							<li>CONTACT</li>
						</NavLink>
					</ul>
				</div>

				{/* Buttons */}

				<div className="flex items-center justify-center gap-4 sm:gap-8">
					<div className="flex items-center justify-center gap-2 sm:gap-5">
						<FiSearch className="p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" />
						<FaOpencart className="hidden sm:inline-flex p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" />
					</div>

					<button className="btn btn-primary">
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
				<div className="lg:hidden left-0 top-0 bottom-0 w-[14rem] h-screen bg-white soft-shadow">
					<ul className="pt-16 p-10 flex flex-col items-lft justify-center text-xs gap-8 font-medium">
						<NavLink to="/" onClick={toggleNavbar}>
							<li>HOME</li>
						</NavLink>
						<NavLink to="about" onClick={toggleNavbar}>
							<li>ABOUT</li>
						</NavLink>
						<NavLink to="lab-tests" onClick={toggleNavbar}>
							<li>LAB TESTS</li>
						</NavLink>
						<NavLink to="hospitals" onClick={toggleNavbar}>
							<li>HOSPITALS</li>
						</NavLink>
						<NavLink to="contact" onClick={toggleNavbar}>
							<li>CONTACT</li>
						</NavLink>
					</ul>
				</div>
			)}
		</div>


	);
};

export default NavBar;

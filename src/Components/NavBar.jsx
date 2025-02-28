import React from "react";
import logo from "../assets/MED-LOGO.png";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaOpencart } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
const NavBar = () => {
	return (
		<div className="w-full z-50 flex items-center justify-between bg-white py-3 px-10 soft-shadow">
			{/* Logo */}
			<div>
				<img src={logo} alt="Medinsight-logo" className="max-w-36" />
			</div>

			{/* Menu */}
			<div>
				<ul className="flex items-center justify-center text-sm gap-10 font-normal">
					<NavLink to="/">Home</NavLink>
					<NavLink to="about">About</NavLink>
					<NavLink to="lab-tests">Lab Tests</NavLink>
					<NavLink to="hospitals">Hospitals</NavLink>
					<NavLink to="contact">Contact</NavLink>
				</ul>
			</div>

			{/* Buttons */}

			<div className="flex items-center justify-center gap-8">
				<div className="flex items-center justify-center gap-5">
					<FiSearch className="p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" />
					<FaOpencart className="p-3 rounded-full border border-primary text-primary hover:text-secondary hover:border-secondary transition-all duration-300 text-[2.5rem]" />
				</div>

				<button className=" btn btn-primary">
					Sign In <IoIosSend className="text-xl" />
				</button>
			</div>
		</div>
	);
};

export default NavBar;

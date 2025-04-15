import React, { useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
    Sidebar,
    Menu,
    MenuItem,
} from "react-pro-sidebar";
import {
    FaBars,
    FaTachometerAlt,
    FaCalendarCheck,
    FaComments,
    FaShoppingCart,
    FaMoneyCheckAlt,
    FaUserCircle,
    FaVials,
    FaSignOutAlt,
} from "react-icons/fa";
import Logo from '../../../assets/MEDINSIGHT LOGO-2.png';
import ProfilePhoto from '../../../assets/profile-photo.png';
import { FaOpencart } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowLeft } from "react-icons/md";

const PatientDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(true);

    const handleLogout = () => {
        alert("Logging out...");
        navigate("/patient-sign-in");
    };

    const handleMenuClick = () => {
        if (window.innerWidth < 768) setCollapsed(true);
    };

    const isActive = (path) =>
        path === "" ? location.pathname === "/" : location.pathname.includes(path);

    const SidebarLink = ({ to, icon, label }) => (
        <MenuItem
            icon={icon}
            onClick={handleMenuClick}
            className={`relative px-2 py-2 ${isActive(to)
                ? "bg-blue-100 text-blue-700 font-semibold border-l-4 border-blue-600"
                : "text-gray-700 hover:bg-gray-100 border-l-4 border-transparent"
                }`}
        >
            <NavLink to={to === "" ? "/" : to} className="block w-full h-full">
                {label}
            </NavLink>
        </MenuItem>
    );

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar with dynamic width */}
            <div
                className={`transition-all duration-300 ease-in-out ${collapsed ? "w-20" : "w-64"
                    } bg-white soft-shadow border-r border-gray-200`}
                onMouseEnter={() => setCollapsed(false)}
            // onMouseLeave={() => setCollapsed(true)}
            >
                <Sidebar collapsed={collapsed} backgroundColor="transparent" className="h-full">
                    {/* Logo */}
                    <div className="p-3">
                        <img src={Logo} alt="MedInsight Logo" className="w-full max-w-[150px] mx-auto" />
                    </div>

                    {/* Profile */}
                    <div className="max-w-[80%] mx-auto my-5">
                        <div className="rounded-full bg-secondary bg-opacity-5 p-2">
                            <div className="rounded-full bg-primary bg-opacity-10 p-2">
                                <img
                                    src={ProfilePhoto}
                                    alt="Profile"
                                    className="rounded-full w-16 h-16 object-cover mx-auto"
                                />
                            </div>
                        </div>
                        {!collapsed && (
                            <div className="text-center mt-2">
                                <h4 className="text-sm text-gray-800 font-medium">Hello!</h4>
                                <h3 className="text-primary font-semibold text-lg">Temi Williams</h3>
                                <p className="text-xs">Welcome to your dashboard</p>
                            </div>
                        )}
                    </div>

                    {/* Menu Items */}
                    <Menu className="text-sm">
                        <SidebarLink to="" icon={<FaTachometerAlt />} label="Dashboard" />
                        <SidebarLink to="appointment" icon={<FaCalendarCheck />} label="Appointment" />
                        <SidebarLink to="consultation" icon={<FaComments />} label="Consultation" />
                        <SidebarLink to="dashboard-cart" icon={<FaShoppingCart />} label="Cart" />
                        <SidebarLink to="payments" icon={<FaMoneyCheckAlt />} label="Payments" />
                        <SidebarLink to="user-profile" icon={<FaUserCircle />} label="Profile" />
                        <SidebarLink to="test-results" icon={<FaVials />} label="Test Results" />
                        <MenuItem
                            icon={<FaSignOutAlt />}
                            onClick={() => {
                                handleMenuClick();
                                handleLogout();
                            }}
                            className="text-red-500"
                        >
                            Log out
                        </MenuItem>
                    </Menu>
                </Sidebar>
            </div>



            {/* Main Content */}
            <main className="flex-1 min-h-0 flex flex-col overflow-hidden transition-all duration-300 pl-2 sm:pl-8">
                {/* top bar */}

                <div className="bg-white soft-shadow w-full p-4 rounded-lg sticky top-0 z-20">
                    <div className="flex items-center justify-end gap-2">
                        {/*  */}
                        <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full  bg-white card-shadow mx-2">
                            <FaOpencart className="text-xl text-secondary" />
                            <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                3
                            </span>
                        </div>

                        <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white card-shadow mx-2">
                            <IoNotifications className="text-xl text-secondary" />
                            <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                5
                            </span>
                        </div>
                        {/*  */}
                        <div className="flex items-center gap-3 p-2 cursor-pointer transition ml-4">
                            <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-full text-xl">
                                <BsPersonFill />
                            </div>

                            <div className="hidden sm:flex flex-col text-sm">
                                <h5 className="font-semibold text-gray-800">Temi Williams</h5>
                                <p className="text-gray-500 text-xs">ID: 123456</p>
                            </div>

                            <IoMdArrowDropdown className="text-gray-600 text-lg ml-auto" />
                        </div>


                    </div>

                </div>

                {/*  */}
                <div className="flex-1 overflow-y-auto bg-white p-2 sm:p-4 md:p-10 lg:p-18 rounded-xl mt-4 soft-shadow relative">
                    <div className="absolute left-0 top-0">
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="text-white bg-primary rounded-lg p-1 soft-shadow"
                        >
                            <MdArrowLeft className="h-8 w-8" />
                        </button>
                    </div>

                    <Outlet />
                </div>



            </main>
        </div>
    );
};

export default PatientDashboard;

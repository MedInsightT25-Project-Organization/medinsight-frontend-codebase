import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaTachometerAlt, FaCalendarCheck, FaComments, FaShoppingCart, FaMoneyCheckAlt, FaUserCircle, FaVials, FaSignOutAlt, FaBars } from "react-icons/fa";
import Logo from '../../../assets/MEDINSIGHT LOGO-2.png';
import ProfilePhoto from '../../../assets/profile-photo.png';
import { IoMdArrowDropdown } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa6";

const PatientDashboard = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);  // Sidebar starts as expanded

    const handleLogout = () => {
        alert("Logging out...");
        navigate("/patient-sign-in");
    };

    const handleMenuClick = () => {
        if (window.innerWidth < 768) setCollapsed(true);
    };

    const SidebarLink = ({ to, icon, label }) => (
        <MenuItem icon={icon}>
            <NavLink to={to === "" ? "/" : to}>
                {label}
            </NavLink>
        </MenuItem>
    );

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar
                collapsed={collapsed}
                onMouseEnter={() => setCollapsed(false)}
                onMouseLeave={() => setCollapsed(true)}
                className={`bg-white soft-shadow text-darkPrimary transition-all duration-300 
                            ${collapsed ? 'w-10' : 'w-[80px] md:w-[250px]'} 
                            fixed md:relative z-30 h-full overflow-hidden`}
            >
                <div className="py-3">
                    <img src={Logo} alt="MedInsight Logo" className="w-full max-w-[150px] mx-auto" />
                </div>

                <div className="max-w-[80%] mx-auto my-5 text-center">
                    <img
                        src={ProfilePhoto}
                        alt="Profile"
                        className="rounded-full w-16 h-16 object-cover mx-auto"
                    />
                    <h4 className="text-sm text-gray-400 font-medium mt-2">Hello!</h4>
                    <h3 className="text-primary font-semibold text-lg">Temi Williams</h3>
                    <p className="text-xs text-gray-400">Welcome to your dashboard</p>
                </div>

                {/* Menu Items */}
                <Menu className="text-sm overflow-y-auto">
                    <SidebarLink to="" icon={<FaTachometerAlt />} label="Dashboard" />
                    <SidebarLink to="appointment" icon={<FaCalendarCheck />} label="Appointment" />
                    <SidebarLink to="consultation" icon={<FaComments />} label="Consultation" />
                    <SidebarLink to="dashboard-cart" icon={<FaShoppingCart />} label="Cart" />
                    <SidebarLink to="payments" icon={<FaMoneyCheckAlt />} label="Payments" />
                    <SidebarLink to="user-profile" icon={<FaUserCircle />} label="Profile" />
                    <SidebarLink to="test-results" icon={<FaVials />} label="Test Results" />
                    <MenuItem icon={<FaSignOutAlt />} onClick={handleLogout}>
                        Log out
                    </MenuItem>
                </Menu>
            </Sidebar>

            {/* Main Content */}
            <main className="flex-1 min-h-0 flex flex-col overflow-hidden transition-all duration-300 pl-2 sm:pl-8">
                {/* Top bar */}
                <div className="bg-white soft-shadow w-full p-4 rounded-lg sticky top-0 z-20 flex justify-between items-center">
                    <button
                        className="text-gray-800 p-2 hover:text-primary md:hidden"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <FaBars size={20} />
                    </button>
                    {/*  */}
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
                    <div className="flex items-center gap-1  cursor-pointer transition ml-4">
                        <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-full text-xl">
                            <BsPersonFill />
                        </div>

                        <div className="hidden sm:flex flex-col text-sm">
                            <h5 className="font-semibold text-gray-800">Temi Williams</h5>
                            <p className="text-gray-500 text-xs">ID: 123456</p>
                        </div>

                        <IoMdArrowDropdown className="hidden sm:block text-gray-600 text-lg ml-auto" />
                    </div>


                </div>

                {/* Main content */}
                <div className="flex-1 overflow-y-auto bg-white p-4 rounded-xl mt-4">
                    <Outlet />
                </div>
            </main >
        </div >
    );
};

export default PatientDashboard;

import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
    FaTachometerAlt,
    FaCalendarCheck,
    FaComments,
    FaShoppingCart,
    FaMoneyCheckAlt,
    FaUserCircle,
    FaVials,
    FaSignOutAlt,
    FaBars
} from "react-icons/fa";
import Logo from "../../../assets/MEDINSIGHT LOGO-2.png";
import ProfilePhoto from "../../../assets/profile-photo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa6";
import { useLabTest } from "../../../Context Api/LabTestContext";


const PatientDashboard = () => {
    const { getTotalCartCount } = useLabTest();
    const totalItems = getTotalCartCount();

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    // Handle screen size for collapsibility
    function useIsMediumUp() {
        const [isMediumUp, setIsMediumUp] = useState(window.innerWidth >= 768);

        useEffect(() => {
            const handleResize = () => {
                setIsMediumUp(window.innerWidth >= 768);
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return isMediumUp;
    }

    const isMediumUp = useIsMediumUp();

    // Collapsed state management based on screen size
    useEffect(() => {
        setCollapsed(!isMediumUp);
    }, [isMediumUp]);

    const handleLogout = () => {
        alert("Logging out...");
        navigate("/patient-sign-in");
    };

    const SidebarLink = ({ to, icon, label }) => {
        const isActive = location.pathname === to;

        return (
            <MenuItem
                icon={icon}
                className="relative group"
                onClick={() => {
                    navigate(to);
                    if (window.innerWidth < 768) setCollapsed(true);
                }}
            >
                {!collapsed ? (
                    <span className={`text-sm ${isActive ? "text-primary font-medium" : ""}`}>{label}</span>
                ) : (
                    <span
                        className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap 
                        bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 z-50"
                    >
                        {label}
                    </span>
                )}
            </MenuItem>
        );
    };


    return (
        <div className="relative flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar
                collapsed={collapsed}
                onMouseEnter={() => isMediumUp && setCollapsed(false)}
                onMouseLeave={() => isMediumUp && setCollapsed(true)}
                className={`bg-white soft-shadow text-darkPrimary transition-all duration-300 
                ${collapsed ? "w-10" : isMediumUp ? "w-[250px]" : "w-[80px]"} 
                fixed md:relative z-30 h-full overflow-hidden`}
            >
                <div className="py-3">
                    <img
                        src={Logo}
                        alt="MedInsight Logo"
                        className="w-full max-w-[150px] mx-auto"
                    />
                </div>

                <div className="max-w-[80%] mx-auto my-5 text-center">
                    <img
                        src={ProfilePhoto}
                        alt="Profile"
                        className="rounded-full w-16 h-16 object-cover mx-auto"
                    />
                </div>

                {/* Menu Items */}
                <Menu className="text-sm overflow-y-auto">
                    <SidebarLink to="." icon={<FaTachometerAlt />} label="Dashboard" />
                    <SidebarLink
                        to="appointment"
                        icon={<FaCalendarCheck />}
                        label="Appointment"
                    />
                    <SidebarLink
                        to="consultation"
                        icon={<FaComments />}
                        label="Consultation"
                    />
                    <SidebarLink
                        to="dashboard-cart"
                        icon={<FaShoppingCart />}
                        label="Cart"
                    />
                    <SidebarLink
                        to="payments"
                        icon={<FaMoneyCheckAlt />}
                        label="Payments"
                    />
                    <SidebarLink
                        to="user-profile"
                        icon={<FaUserCircle />}
                        label="Profile"
                    />
                    <SidebarLink
                        to="test-results"
                        icon={<FaVials />}
                        label="Test Results"
                    />
                    <MenuItem icon={<FaSignOutAlt />} onClick={handleLogout}>
                        Log out
                    </MenuItem>
                </Menu>
            </Sidebar>

            {/* Main Content */}
            <main className="flex-1 min-h-0 flex flex-col overflow-hidden transition-all duration-300 pl-2 sm:pl-8">
                {/* Top bar */}
                <div className="bg-white soft-shadow w-full p-4 rounded-lg sticky top-0 z-20 flex justify-between items-center">
                    {/* <button
                        className="text-gray-800 p-2 hover:text-primary md:hidden"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <FaBars size={20} />
                    </button> */}
                    <div>
                        <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white card-shadow mx-2">
                            <FaOpencart className="text-xl text-secondary" />
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                    {totalItems}
                                </span>
                            )}
                        </div>

                        <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white card-shadow mx-2">
                            <IoNotifications className="text-xl text-secondary" />
                            <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                5
                            </span>
                        </div>

                    </div>


                </div>

                {/* Main outlet */}
                <div className="flex-1 overflow-y-auto bg-white p-4 rounded-xl mt-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default PatientDashboard;

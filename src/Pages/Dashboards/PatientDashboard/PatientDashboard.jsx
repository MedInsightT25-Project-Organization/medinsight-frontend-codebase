import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaTachometerAlt, FaCalendarCheck, FaComments, FaShoppingCart, FaMoneyCheckAlt, FaUserCircle, FaVials, FaSignOutAlt } from "react-icons/fa";
import Logo from '../../../assets/MEDINSIGHT LOGO-2.png';
import ProfilePhoto from '../../../assets/profile-photo.png';

const PatientDashboard = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);  // Sidebar starts as expanded

    const handleLogout = () => {
        alert("Logging out...");
        navigate("/patient-sign-in");
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
            {/* Sidebar with React Pro Sidebar's default styling */}
            <Sidebar collapsed={collapsed} onMouseEnter={() => setCollapsed(false)} onMouseLeave={() => setCollapsed(true)}>
                <div className="p-3">
                    <img src={Logo} alt="MedInsight Logo" className="w-full max-w-[150px] mx-auto" />
                </div>

                <div className="max-w-[80%] mx-auto my-5 text-center">
                    <img
                        src={ProfilePhoto}
                        alt="Profile"
                        className="rounded-full w-16 h-16 object-cover mx-auto"
                    />
                    <h4 className="text-sm text-gray-800 font-medium mt-2">Hello!</h4>
                    <h3 className="text-primary font-semibold text-lg">Temi Williams</h3>
                    <p className="text-xs">Welcome to your dashboard</p>
                </div>

                {/* Menu Items */}
                <Menu>
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
            <main className="flex-1 min-h-0 flex flex-col overflow-hidden">
                <div className="bg-white soft-shadow w-full p-4 rounded-lg sticky top-0 z-20">
                    {/* Your top bar or header content */}
                </div>

                <div className="flex-1 overflow-y-auto bg-white p-4 rounded-xl mt-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default PatientDashboard;

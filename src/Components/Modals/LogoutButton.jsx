import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import LogoutModal from './LogoutModal';

const LogoutButton = () => {
    const { logout } = useAuth();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        logout();
        setShowModal(false);
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
                Logout
            </button>

            <LogoutModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleLogout}
            />
        </>
    );
};

export default LogoutButton;

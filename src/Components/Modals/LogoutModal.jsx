// src/components/LogoutModal.jsx
import React from 'react';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-darkPrimary bg-opacity-50 px-4 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
                <h2 className="text-lg font-semibold text-primary">Confirm Logout</h2>
                <p className="text-gray-700 my-4 text-[.7rem] md:text-sm">Are you sure you want to log out?</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded bg-darkSecondary hover:bg-secondary text-white text-sm"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;

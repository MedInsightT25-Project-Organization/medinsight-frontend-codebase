import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import API from '../services/api';
import { FaLock } from 'react-icons/fa';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        if (!token) {
            toast.error('Invalid or expired link.');
            return navigate('/patient-sign-in');
        }

        const { newPassword, confirmPassword } = formData;

        if (newPassword.length < 6) {
            toast.error('Password must be at least 6 characters.');
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        setLoading(true);

        try {
            await API.post('/auth/reset-password', {
                token,
                newPassword,
                confirmPassword,
            });

            toast.success('Password reset successful!');
            console.log('Reset successful. Redirecting...');

            // Wait 2 seconds, then navigate
            await new Promise((resolve) => setTimeout(resolve, 2000));
            navigate('/patient-dashboard');
        } catch (error) {
            console.error('Reset failed:', error);
            toast.error(error?.response?.data?.message || 'Reset failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
            {/* Ensure Toaster is rendered */}
            <Toaster position="top-center" />

            <form onSubmit={handleSubmit} className="w-full max-w-md">
                {/* New Password Field */}
                <div className="relative mb-4">
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        name="newPassword"
                        type="password"
                        value={formData.newPassword}
                        onChange={handleChange}
                        placeholder="New Password"
                        required
                        className="w-full pl-12 pr-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>

                {/* Confirm Password Field */}
                <div className="relative mb-4">
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                        className="w-full pl-12 pr-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition"
                >
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>

            {/* Optional Loading Spinner */}
            {loading && (
                <div className="mt-6 flex flex-col items-center">
                    <motion.div
                        className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    />
                    <p className="mt-2 text-sm text-gray-600">Processing...</p>
                </div>
            )}
        </div>
    );
};

export default ResetPassword;

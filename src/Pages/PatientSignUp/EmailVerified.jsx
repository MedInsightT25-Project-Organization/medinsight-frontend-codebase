import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import API from '../../services/api';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const EmailVerified = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const token = searchParams.get('token');

    useEffect(() => {
        const verifyEmail = async () => {
            if (!token) {
                toast.error('Invalid verification link!');
                navigate('/patient-sign-up');
                return;
            }

            setLoading(true);

            try {
                const response = await API.post('/auth/verify-email', { token });
                console.log("Verification Response:", response.data); // Debug
                toast.success('Email verified successfully!');

                // Get role from response or localStorage
                const userRole =
                    response.data.user?.role ||
                    searchParams.get('role') ||
                    JSON.parse(localStorage.getItem('user'))?.role;

                console.log("User Role:", userRole); // Debug

                // Handle role-based redirection
                setTimeout(() => {
                    if (userRole === 'patient') {
                        navigate('/patient-form-one'); // Redirect to patient form
                    } else {
                        (userRole === 'hospital_admin')
                        navigate('/healthcare-form-one'); // Redirect to healthcare provider form
                    }

                    //                     else {
                    //     toast.error('Invalid role detected. Redirecting to sign-up.');
                    //     navigate('/patient-sign-up'); // Fallback in case of unknown role
                    // }
                }, 2000);
            } catch (error) {
                console.error("Verification failed: ", error);
                toast.error('Verification failed. Please try again.');
                navigate('/patient-sign-up');
            } finally {
                setLoading(false);
            }
        };

        verifyEmail();
    }, [token, navigate, searchParams]);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            {loading ? (
                <>
                    <motion.div
                        className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                    <p className="mt-4 text-lg">Verifying your email...</p>
                </>
            ) : (
                <>
                    <motion.div
                        className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    />
                    <p className="text-lg">Redirecting...</p>
                </>
            )}
        </div>
    );
};

export default EmailVerified;

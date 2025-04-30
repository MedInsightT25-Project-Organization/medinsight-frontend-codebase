import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import API from '../../services/api';
import { toast } from 'react-hot-toast'; // make sure you're using hot-toast if you've switched
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

            try {
                await API.post('/auth/verify-email', { token });
                toast.success('Email verified successfully!');

                setTimeout(() => {
                    navigate('/patient-form-one');
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
    }, [token, navigate]);

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

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ResendVerification from './ResendVerification';
import { useProfile } from '../../contexts/PatientContexts/PatientProfileContext';

const VerifyEmail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || "";
    const { isEmailVerified, fetchProfile } = useProfile();

    // Refetch profile to get updated email status
    useEffect(() => {
        const checkVerification = async () => {
            await fetchProfile();
        };
        checkVerification();
    }, []);

    // Redirect if email is verified
    useEffect(() => {
        if (isEmailVerified) {
            navigate('/patient-form-one', { replace: true });
        }
    }, [isEmailVerified, navigate]);

    return (
        <div className="container text-center mt-10 flex flex-col items-center justify-center">
            <div className='mt-10'>
                <h1 className="text-2xl text-primary">Verify your email</h1>
                <p className="mt-2 text-gray-600 ">
                    We sent a verification link to your email <strong>{email}</strong>.
                </p>
            </div>

            <ResendVerification email={email} />
        </div>
    );
};

export default VerifyEmail;

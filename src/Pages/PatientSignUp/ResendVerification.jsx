import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';

const ResendVerification = ({ email }) => {
    const { sendVerificationEmail } = useAuth();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleResend = async () => {
        try {
            setLoading(true);
            setMessage("");
            await sendVerificationEmail(email);
            setMessage("Verification email sent! Check your inbox.");

            toast.success('Verification email resent!');
        } catch (err) {
            setMessage("Failed to resend verification email.");

            toast.error(err.response?.data?.message || 'Failed to resend email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster />
            <button
                disabled={loading}
                onClick={handleResend} className="btn btn-primary mt-4 text-blue-600 ">
                {loading ? "Sending..." : "Resend Verification Email"}
            </button>
        </>
    );
};

export default ResendVerification;

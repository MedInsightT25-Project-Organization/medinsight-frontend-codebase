import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { forgotPassword } from '../services/authService'
import { toast, ToastContainer } from 'react-toastify'
import { useAuth } from '../contexts/AuthContext'


const ForgotPasswordModal = ({ onClose }) => {

    const { forgotPassword } = useAuth()

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await forgotPassword(email);
            toast.success('Password reset link sent!', { duration: 5000 });
            setMessage('Check your email for the reset link.');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to send reset email');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkPrimary bg-opacity-50 px-4">
            <form onSubmit={handleSubmit} className="bg-accent rounded-2xl p-8 sm:p-10 max-w-lg w-full text-center shadow-lg relative">
                <IoClose onClick={onClose} className="absolute right-4 top-4" />
                <h2 className="text-2xl font-workSans text-center text-primary ">Password Reset!</h2>
                <hr className='h-[2.5px] w-[60px] mx-auto rounded-full bg-primary my-1' />
                <p className='text-center text-[.8rem]'>Kindly enter your email</p>
                <div className="relative mt-4">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 text-sm  border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                    />


                </div>
                <div className="flex  flex-col items-center justify-center mt-4">
                    <button
                        disabled={loading}
                        type="submit"
                        className="py-4 text-sm flex items-center justify-center gap-4 bg-primary hover:bg-darkPrimary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                    >
                        {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>

                    {message && <p className="text-secondary text-center mt-8 text-sm">{message}</p>}
                </div>

            </form>
        </div>
    )
}

export default ForgotPasswordModal
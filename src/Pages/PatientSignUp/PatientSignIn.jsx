import React, { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginPatient } from '../../services/authService'
import { Toaster, toast } from 'react-hot-toast';
import ForgotPasswordModal from '../../Components/ForgotPasswordModal';
import { useAuth } from '../../contexts/AuthContext';
import { useProfile } from '../../contexts/PatientContexts/PatientProfileContext';



const PatientSignIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/patient-dashboard"
    const { signin, setIsAuthenticated } = useAuth()

    const { fetchProfile, isEmailVerified, hasCompletedOnboarding } = useProfile()
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [forgotPasswordModal, setForgotPasswordModal] = useState(false)


    const toggleResetPasswordModal = () => {
        setForgotPasswordModal(!forgotPasswordModal)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")


        try {
            await signin(formData, "patient");
            await fetchProfile()


            toast.success('Login successful!', { duration: 5000 });



            setTimeout(() => {
                navigate(from, { replace: true });
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
            toast.error(err.response?.data?.message || 'Login failed', { duration: 5000 }); // Error toast
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <section className='container py-20'>
                <Toaster />
                <div className="w-full  sm:max-w-[30rem] mx-auto grid  grid-cols-1 items-center justify-center ">

                    <form onSubmit={handleSubmit} className="space-y-4 soft-shadow rounded-2xl bg-white p-8 mx-auto mt-14 w-full">
                        <h2 className="text-2xl font-bold font-workSans text-center text-primary ">Welcome!</h2>
                        <hr className='h-[2.5px] w-[60px] mx-auto rounded-full bg-primary' />
                        <p className='text-center text-[.8rem]'>Kindly login to your account</p>



                        {/* Email */}
                        <div className="relative mt-4">
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full pl-12 pr-4 py-4 text-sm  border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative mb-20">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full pl-12 pr-4 py-4 text-sm  border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Error / Success  */}
                        {/* {error && <p>{error}</p>}
                        {success && <p>{success}</p>} */}


                        {/* Forgot password */}
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center justify-start gap-1'>
                                <input type="checkbox" className="w-4 h-4 rounded-sm outline-none focus:outline-none" />

                                <span
                                    className="text-[.7rem] text-gray-500 cursor-pointer duration-300"
                                >
                                    Remember me
                                </span>

                            </div>
                            <span
                                onClick={toggleResetPasswordModal}
                                className="text-[.7rem] text-gray-500 cursor-pointer hover:text-primary duration-300"
                            >
                                Forgot Password?
                            </span>
                        </div>


                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <button
                                disabled={loading}
                                type="submit"
                                className="py-4 text-sm flex items-center justify-center gap-4 bg-primary hover:bg-darkPrimary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                            >
                                {loading ? 'Please wait...' : 'Login'}
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center">
                            <p className="text-[.75rem] mt-4">
                                Don't have an account?{" "}
                                <span
                                    className="text-secondary font-medium cursor-pointer hover:text-primary duration-300"
                                    onClick={() => navigate("/patient-sign-up")}
                                >
                                    Sign Up
                                </span>
                            </p>
                        </div>
                    </form>

                    <div className="text-center py-4 mt-5 bg-white rounded-xl flex items-center justify-center soft-shadow">
                        <p className="text-[.75rem]  flex items-center gap-2">
                            <p>Are you a Healthcare Provider?</p>
                            <span
                                className="text-secondary font-normal cursor-pointer hover:text-primary duration-300"
                                onClick={() => navigate("/healthcare-sign-in")}
                            >
                                Sign in Here
                            </span>
                        </p>
                    </div>


                </div >

                {forgotPasswordModal && (
                    <ForgotPasswordModal onClose={() => setForgotPasswordModal(false)} />
                )}
            </section >

        </>
    )
}

export default PatientSignIn

import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaEnvelope, FaLock, FaPaperPlane, FaUser } from 'react-icons/fa'
import { Toaster, toast } from 'react-hot-toast';
import ForgotPasswordModal from '../../Components/ForgotPasswordModal';
import { useAuth } from '../../contexts/AuthContext';
import { useProfile } from '../../contexts/PatientContexts/PatientProfileContext';
import { useHealthcareProfile } from '../../contexts/HealthcareContext/HealthcareProfileContext';

const HealthcareSignIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/healthcare-dashboard"
    const { signin, setIsAuthenticated } = useAuth()
    const { fetchHospitalAdminProfile } = useHealthcareProfile(); // add this hook if you haven’t

    // const { fetchProfile, isEmailVerified, hasCompletedOnboarding } = useProfile()
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
        e.preventDefault();
        setLoading(true);
        setError("");

        toast.success("Sign in successful!");
        setTimeout(() => {
            navigate('/healthcare-dashboard');
        }, 3000);



        // try {
        //     const res = await signin(formData, "hospital_admin");

        //     const userId = res?.user?.id;
        //     const token = res?.token;

        //     if (!userId || !token) {
        //         throw new Error("Login successful but no user ID or token received.");
        //     }

        //     localStorage.setItem("user", JSON.stringify(res.user));
        //     localStorage.setItem("token", token); // if needed elsewhere

        //     // Optional: short delay to avoid race condition
        //     await new Promise((resolve) => setTimeout(resolve, 300));

        //     const profile = await fetchHospitalAdminProfile(userId);

        //     const isVerified = profile?.isVerified;
        //     const hasProfile = !!profile?.name;

        //     if (!isVerified) {
        //         toast.error("Please verify your email before proceeding.");
        //         navigate("/verify-email");
        //         return;
        //     }

        //     if (!hasProfile) {
        //         toast.info("Please complete your registration profile.");
        //         navigate("/healthcare-form-one");
        //         return;
        //     }

        //     toast.success("Login successful!", { duration: 3000 });
        //     navigate(from, { replace: true });
        // } catch (err) {
        //     const message = err.response?.data?.message || err.message || "Login failed";
        //     setError(message);
        //     toast.error(message, { duration: 5000 });
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <>
            <section className='container py-20'>
                <Toaster />
                <div className="w-full  sm:max-w-[30rem] mx-auto grid  grid-cols-1 items-center justify-center ">

                    <form onSubmit={handleSubmit} className="space-y-4 soft-shadow rounded-2xl bg-white p-8 mx-auto mt-14 w-full">
                        <h2 className="text-2xl font-semibold font-workSans text-center text-secondary ">Welcome Admin!</h2>
                        <hr className='h-[2.5px] w-[60px] mx-auto rounded-full bg-secondary' />
                        <p className='text-center text-[.8rem]'>Kindly login to your account</p>



                        {/* Email */}
                        <div className="relative mt-4">
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full pl-12 pr-4 py-4 text-sm  border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative mb-20">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                required
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                placeholder="Password"
                                className="w-full pl-12 pr-4 py-4 text-sm  border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>

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
                                className="text-[.7rem] text-gray-500 cursor-pointer hover:text-secondary duration-300"
                            >
                                Forgot Password?
                            </span>
                        </div>


                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <button
                                disabled={loading}
                                type="submit"
                                className="py-4 text-sm flex items-center justify-center gap-4 bg-secondary hover:bg-darkSecondary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                            >
                                {loading ? 'Please wait...' : 'Login'}
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center">
                            <p className="text-[.75rem] mt-4">
                                Don't have an account?{" "}
                                <span
                                    className="text-primary font-medium cursor-pointer hover:text-secondary duration-300"
                                    onClick={() => navigate("/healthcare-sign-up")}
                                >
                                    Sign Up
                                </span>
                            </p>
                        </div>
                    </form>

                    <div className="text-center py-4 mt-5 bg-white rounded-xl flex items-center justify-center soft-shadow">
                        <p className="text-[.75rem]  flex items-center gap-1">
                            <p>Are you a Patient?</p>
                            <span
                                className="text-primary font-normal cursor-pointer hover:text-secondary duration-300"
                                onClick={() => navigate("/patient-sign-in")}
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


export default HealthcareSignIn

import React, { useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';

const PatientSignUp = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const { sendVerificationEmail } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // toggle password visibility 
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            toast.error("Passwords do not match");
            setLoading(false);
            return;
        }

        // Password validation check
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            setLoading(false);
            return;
        }

        setSuccess('Registration successful!');
        toast.success("Registration successful!");

        setTimeout(() => {
            navigate('/patient-form-one');
        }, 3000); // 3-second delay

        // try {
        //     await signup(formData, "patient");

        //     send verification email
        //     await sendVerificationEmail(formData.email);



        //     Adding a delay before navigating
        //     setTimeout(() => {
        //         navigate('/verify-email', { state: { email: formData.email } });
        //     }, 3000); // 3-second delay

        // } catch (err) {
        //     setError(err.response?.data?.message || 'Registration failed');
        //     console.log(err);
        //     toast.error(err.response?.data?.message || 'Registration failed');
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <>
            <section className='container py-20'>
                <Toaster />

                <div className="w-full sm:max-w-[30rem] mx-auto grid grid-cols-1 items-center justify-center">
                    <form onSubmit={handleSubmit} className="space-y-4 soft-shadow rounded-2xl bg-white p-8 mx-auto mt-14 w-full">
                        <h2 className="text-2xl font-bold font-workSans text-center text-primary ">Welcome!</h2>
                        <hr className='h-[2.5px] w-[60px] mx-auto rounded-full bg-primary' />
                        <p className='text-center text-[.8rem]'>Kindly create an account to get started</p>

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
                                className="w-full pl-12 pr-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative mb-4">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                required
                                className="w-full pl-12 pr-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <button
                                type="button"
                                onClick={handlePasswordVisibility}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative mb-4">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                required
                                className="w-full pl-12 pr-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Password Requirements Note */}
                        <div className="text-xs text-gray-500 mt-2">
                            <p>Password must contain:</p>
                            <ul className="list-disc pl-5">
                                <li>At least one uppercase letter</li>
                                <li>At least one lowercase letter</li>
                                <li>At least one number</li>
                                <li>At least one special character (e.g., @, $, !, %)</li>
                            </ul>
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="py-4 text-sm flex items-center justify-center gap-4 bg-primary hover:bg-darkPrimary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                            >
                                {loading ? 'Creating...' : 'Create Account'}
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center">
                            <p className="text-[.75rem] mt-4">
                                Already have an account?{" "}
                                <span
                                    className="text-secondary font-medium cursor-pointer hover:text-primary duration-300"
                                    onClick={() => navigate("/patient-sign-in")}
                                >
                                    Sign In
                                </span>
                            </p>
                        </div>
                    </form>

                    <div className="text-center py-4 mt-5 bg-white rounded-xl flex items-center justify-center soft-shadow">
                        <p className="text-[.75rem]  flex items-center gap-2">
                            <p>Are you a Healthcare Provider?</p>
                            <span
                                className="text-secondary font-normal cursor-pointer hover:text-primary duration-300"
                                onClick={() => navigate("/healthcare-sign-up")}
                            >
                                Sign up Here
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PatientSignUp;

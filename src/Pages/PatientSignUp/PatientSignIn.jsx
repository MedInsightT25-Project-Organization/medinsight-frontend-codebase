import React from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const PatientSignIn = () => {
    const handleForm = (e) => {
        e.preventDefault()
    }
    const navigate = useNavigate()
    return (
        <>
            <section className='container py-20'>

                <div className="w-full  sm:max-w-[30rem] mx-auto grid  grid-cols-1 items-center justify-center ">

                    <form className="space-y-4 soft-shadow rounded-2xl bg-white p-8 mx-auto mt-14 w-full">
                        <h2 className="text-2xl font-bold font-workSans text-center text-primary ">Welcome!</h2>
                        <hr className='h-[2.5px] w-[60px] mx-auto rounded-full bg-primary' />
                        <p className='text-center text-[.8rem]'>Kindly login to your account</p>



                        {/* Email */}
                        <div className="relative mt-4">
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-12 pr-4 py-4 text-sm  border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative mb-20">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-12 pr-4 py-4 text-sm  border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
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
                                className="text-[.7rem] text-gray-500 cursor-pointer hover:text-primary duration-300"
                            >
                                Forgot Password?
                            </span>
                        </div>


                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => navigate("/patient-dashboard")}
                                type="submit"
                                className="py-4 text-sm flex items-center justify-center gap-4 bg-primary hover:bg-darkPrimary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                            >
                                Login
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
            </section >

        </>
    )
}

export default PatientSignIn

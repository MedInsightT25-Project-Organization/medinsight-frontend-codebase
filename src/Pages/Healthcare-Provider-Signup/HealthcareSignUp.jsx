import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEnvelope, FaLock, FaPaperPlane, FaUser } from 'react-icons/fa'


const HealthcareSignUp = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className='container py-20'>

                <div className="w-full  sm:max-w-[30rem] mx-auto grid  grid-cols-1 items-center justify-center ">

                    <form className="space-y-4 soft-shadow rounded-2xl bg-white p-8 mx-auto mt-14 w-full">
                        <h2 className="text-2xl font-semibold font-workSans text-center text-secondary ">Welcome Admin!</h2>
                        <hr className='h-[2.5px] w-[60px] mx-auto rounded-full bg-secondary' />
                        <p className='text-center text-[.8rem]'>Kindly create an account to get started</p>



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
                        {/* Confirm Password */}
                        <div className="relative mb-20">
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full pl-12 pr-4 py-4 text-sm  border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => navigate("/healthcare-form-one")}
                                type="submit"
                                className="py-4 text-sm flex items-center justify-center gap-4 bg-secondary hover:bg-darkSecondary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                            >
                                Create Account
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center">
                            <p className="text-[.75rem] mt-4">
                                Already have an account?{" "}
                                <span
                                    className="text-primary font-medium cursor-pointer hover:text-secondary duration-300"
                                    onClick={() => navigate("/healthcare-sign-in")}
                                >
                                    Sign In
                                </span>
                            </p>
                        </div>
                    </form>

                    <div className="text-center py-4 mt-5 bg-white rounded-xl flex items-center justify-center soft-shadow">
                        <p className="text-[.75rem]  flex items-center gap-1">
                            <p>Are you a Patient?</p>
                            <span
                                className="text-primary font-normal cursor-pointer hover:text-secondary duration-300"
                                onClick={() => navigate("/patient-sign-up")}
                            >
                                Sign up Here
                            </span>
                        </p>
                    </div>


                </div>
            </section>

        </>
    )
}

export default HealthcareSignUp

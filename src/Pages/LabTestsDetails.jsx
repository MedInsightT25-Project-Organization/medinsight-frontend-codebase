import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OtherHeaderSection from '../Components/OtherHeaderSection/OtherHeaderSection'
import heroImage from '../assets/heroImage.png'
import { labTestsData } from '../assets/data'
import { FaAngleRight, FaClock, FaPaperPlane, FaRegCircleDot } from 'react-icons/fa6'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { MdLocationPin, MdShoppingCart } from 'react-icons/md'
import { LuInfo } from 'react-icons/lu'
import { CiHeart } from 'react-icons/ci'
import { IoEyeOutline } from 'react-icons/io5'
import Footer from '../Components/Footer'

const LabTestsDetails = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const testDetails = labTestsData.find((test) => test.id === Number(id))

    if (!testDetails) {
        return <h3>Lab Test Not Found!</h3>
    }
    return (
        <>
            <OtherHeaderSection title={testDetails.name} backgroundImage={heroImage} />
            <div className="container">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-xl shadow-md px-6 py-12 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer">

                    {/* Left Section - Lab Test Details */}
                    <div className="md:col-span-2 space-y-6">

                        {/* Category */}
                        <span className="text-xs text-gray-600 flex items-center gap-1">
                            <span className="text-darkPrimary font-medium">Category</span>
                            <FaAngleRight className="text-primary" />
                            {testDetails.category}
                        </span>

                        {/* Test Name, Verified Badge & Price */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h4 className="text-lg sm:text-xl font-semibold text-primary flex items-center gap-1">
                                {testDetails.name}
                                <RiVerifiedBadgeFill className="text-secondary text-xl sm:text-2xl" />
                            </h4>
                            <h5 className="text-gray-700 font-semibold text-lg">₦{testDetails.price}</h5>
                        </div>

                        {/* Hospital Details */}
                        <div className="border-l-4 border-primary pl-3 space-y-1">
                            <span className="text-sm text-gray-700 font-medium">{testDetails.hospitalName}</span>
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                                <MdLocationPin className="text-lg" />
                                <span>{testDetails.address}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <h5 className="text-base font-medium text-gray-800 flex items-center gap-1">
                                Description <LuInfo className="text-lg" />
                            </h5>
                            <hr className="border-gray-300" />
                            <p className="text-sm text-gray-700 leading-relaxed">{testDetails.description}</p>
                        </div>

                        {/* Book Appointment Button */}
                        <button className="w-full flex items-center justify-center gap-2 bg-primary text-white text-sm py-4 rounded-md hover:bg-darkPrimary transition">
                            Book Lab Test <FaPaperPlane />
                        </button>
                    </div>

                    {/* Right Section - Additional Details */}
                    <div className="md:col-span-1 bg-gray-50 p-5 rounded-lg shadow-sm">

                        {/* Preparation */}
                        <div className="py-3">
                            <div className="flex items-center gap-2">
                                <FaRegCircleDot className="text-secondary text-xs" />
                                <h5 className="text-sm text-gray-700 font-medium">Preparation:</h5>
                            </div>
                            <p className="text-xs text-gray-600">{testDetails.preparation}</p>
                        </div>
                        <hr className="border-gray-300" />

                        {/* Result Time */}
                        <div className="py-3">
                            <div className="flex items-center gap-2">
                                <FaRegCircleDot className="text-secondary text-xs" />
                                <h5 className="text-sm text-gray-700 font-medium">Result Time:</h5>
                            </div>
                            <p className="text-xs text-gray-600">{testDetails.resultTime}</p>
                        </div>
                        <hr className="border-gray-300" />

                    </div>
                </div>

                {/* Related Lab Test */}
                <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer mt-6">

                    <h4 className='text-lg mb-4 text-gray-700'>You May Also Like</h4>
                    <hr />

                    <div className="flex items-center overflow-x-auto  my-5 gap-4 px-4 scroll-smooth scrollbar-hide snap-x snap-mandatory">
                        {labTestsData.slice(0, 3).map((data, index) => (
                            <div
                                onClick={() => navigate(`/lab-tests/${data.id}`)}
                                key={index}
                                className="group bg-white card-shadow p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer relative snap-start w-[80%] sm:w-[60%] md:w-[45%] lg:w-[30%] min-w-[250px] mb-8"
                            >
                                {/* Icons (Hidden by default, visible on hover) */}
                                <div className="absolute right-2 flex flex-col gap-3 p-2 bg-green-300 bg-opacity-15 shadow-xl rounded-xl text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 transform -translate-y-1/2">
                                    <IoEyeOutline onClick={() => navigate(`/lab-tests/${data.id}`)} className="hover:text-primary transition-all duration-300 cursor-pointer" />
                                    <MdShoppingCart className="hover:text-primary transition-all duration-300 cursor-pointer" />
                                    <CiHeart className="hover:text-primary transition-all duration-300 cursor-pointer" />
                                </div>

                                {/* Card Content */}
                                <h4 className="text-base md:text-lg font-semibold text-primary leading-[1]">{data.name}</h4>
                                <span className="text-[0.7rem] text-gray-600 border-l-4 border-primary pl-2 my-2 flex items-center justify-start">
                                    <span className="text-darkPrimary">Category</span> <FaAngleRight className="text-primary mr-1" /> {data.category}
                                </span>
                                <p className="text-[0.65rem] sm:text-xs text-gray-700 leading-relaxed mt-2 pr-6">{data.description.slice(0, 70)}...</p>
                                <h5 className="mt-3 text-lg font-semibold text-secondary">₦{data.price}</h5>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <Footer />





        </>
    )
}

export default LabTestsDetails

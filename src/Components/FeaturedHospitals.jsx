import React from 'react'
import { healthcareCenters } from '../assets/data'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { MdLocationPin } from 'react-icons/md'
import HospitalRating from './HospitalRating'
import { FaClock, FaRegCircleDot } from 'react-icons/fa6'
import { LuInfo } from 'react-icons/lu'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const FeaturedHospitals = () => {
    const navigate = useNavigate()
    const displaySelectedHospital = (data) => {
        console.log("Selected Hospital:", data)
    }

    return (
        <div className="container bg-white rounded-xl p-10">
            <h3 className="text-2xl sm:text-4xl font-bold text-primary">Featured Hospitals</h3>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 }
                }}
                className="mt-6"
            >
                {healthcareCenters.slice(0, 5).map((data) => (
                    <SwiperSlide key={data.id}>
                        <div
                            onClick={() => displaySelectedHospital(data)}
                            className="bg-white card-shadow my-10 p-6 space-y-4 rounded-xl shadow-md transition duration-300 ease-in-out hover:shadow-lg cursor-pointer h-full"
                        >
                            {/* Header Section */}
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="flex items-center gap-1">
                                        <h4 className="text-lg sm:text-xl font-semibold text-primary leading-tight flex items-center">
                                            {data.name}
                                            <RiVerifiedBadgeFill className="text-secondary text-xl sm:text-2xl ml-1" />
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 border-l-4 border-primary pl-2">
                                        <MdLocationPin className="text-lg text-gray-600" />
                                        <span className="text-sm text-gray-700">
                                            {data.lga}, {data.state}.
                                        </span>
                                    </div>

                                    <HospitalRating ratings={data.ratings} />
                                </div>

                                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-300 bg-opacity-15">
                                    <div className="p-2 bg-white shadow-md rounded-full flex items-center justify-center">
                                        <FaClock className="text-darkSecondary text-lg" />
                                    </div>
                                    <h5 className="text-xs sm:text-sm font-medium leading-tight text-gray-700">
                                        {data.workHours}
                                    </h5>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h5 className="flex items-center gap-2 text-base font-medium text-gray-800">
                                    Services Summary <LuInfo className="text-lg" />
                                </h5>
                                <hr className="my-2" />
                                <ul className="flex flex-wrap items-center justify-start gap-3 text-[0.75rem] sm:text-sm text-gray-700 leading-tight">
                                    {data.services.slice(0, 4).map((service, index) => (
                                        <li key={index} className="flex items-center gap-1 text-xs">
                                            <FaRegCircleDot className="text-secondary" /> {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mt-6 flex justify-center">
                <button
                    onClick={() => {navigate('/hospitals'); scrollTo(0, 0)}}
                    className="btn btn-primary justify-center ">Explore All <BsArrowRight /></button>
            </div>
        </div>
    )
}

export default FeaturedHospitals

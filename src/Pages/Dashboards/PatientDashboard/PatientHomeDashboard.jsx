import React from 'react'
import { healthData } from '../../../assets/data'
import PulseCard from '../../../Components/PulseCard';
import { useLabTest } from '../../../Context Api/LabTestContext';
import waveHand from '../../../assets/wave-hand.png';

const PatientHomeDashboard = () => {

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 jusify-between'>
                <div className="col-span-1 flex flex-col">

                    <div className='my-4'>
                        <h3 className='text-primary text-xl sm:text-3xl flex items-center'>Welcome, Temi... <img src={waveHand} className='w-8 sm:w-10 filter drop-shadow-lg' alt="Wave Hand" /> </h3>
                        <p className='text-gray-600 text-[.7rem] sm:text-sm'>Start your day with new activities</p>
                    </div>


                    {/* Health Statistics  */}
                    <div className="bg-white rounded-xl p-6 soft-shadow space-y-4">
                        {/* Row 1 */}
                        <div className="flex items-center justify-between">
                            <div className="text-center">
                                <h5 className="text-sm text-gray-500 font-medium">Age</h5>
                                <p className="text-lg font-semibold text-gray-800">30</p>
                            </div>
                            <div className="text-center">
                                <h5 className="text-sm text-gray-500 font-medium">Weight</h5>
                                <p className="text-lg font-semibold text-gray-800">70kg</p>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex items-center justify-between">
                            <div className="text-center">
                                <h5 className="text-sm text-gray-500 font-medium">Height</h5>
                                <p className="text-lg font-medium text-gray-800">170 cm</p>
                            </div>
                            <div className="text-center">
                                <h5 className="text-sm text-gray-500 font-medium">Blood</h5>
                                <p className="text-lg font-medium text-gray-800">O+</p>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Recent Activity */}


                {/*  */}
                <div className='col-span-2 flex flex-col gap-2 items-center justify-between w-full '>

                    <div className="flex justify-between overflow-x-auto gap-4 py-4 px-2 sm:px-0 md:pl-4">
                        {healthData.map((data) => {
                            const Icon = data.icon;
                            return (
                                <div
                                    key={data.id}
                                    className="min-w-[250px] bg-white soft-shadow rounded-lg p-4 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="flex items-center gap-2 mb-2 text-gray-700">
                                        {/* <span className="text-2xl">{data.icon}</span> */}
                                        <Icon className='bg-secondary bg-opacity-5 h-10 w-10 p-2 rounded-lg text-primary' />
                                        <span className="text-sm">{data.title}</span>
                                    </div>

                                    <div className="mb-2 flex items-center justify-start gap-2">
                                        <h4 className="text-2xl font-light text-primary">{data.value}</h4>
                                        <span className="text-sm text-gray-500">{data.unit}</span>
                                    </div>

                                    <p className="text-[.7rem] text-gray-600">{data.description}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Pulse Chart */}
                  




                </div>

            </div>

        </>
    )
}

export default PatientHomeDashboard
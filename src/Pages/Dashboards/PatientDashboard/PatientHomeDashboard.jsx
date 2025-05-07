import React from 'react';
import { healthData } from '../../../assets/data';
import waveHand from '../../../assets/wave-hand.png';
import EcgDataChart from '../../../Components/Charts/EcgDataChart'
import { useHospitalContext } from '../../../Context Api/HospitalContext';
import AppointmentCard from '../../../Components/AppointmentCard';
import DashboardCalendar from '../../../Components/DashboardCalendar';


const PatientHomeDashboard = () => {
    const { appointments } = useHospitalContext();

    return (
        <div className="space-y-4">
            {/* Full-width Greeting */}
            <div className="w-full bg-white rounded-xl p-4 soft-shadow">
                <h3 className="text-primary text-xl sm:text-3xl flex items-center">
                    Hello!
                    <img
                        src={waveHand}
                        alt="Wave Hand"
                        className="w-8 sm:w-10 ml-2 filter drop-shadow-lg"
                    />
                </h3>
                <p className="text-gray-600 text-[.7rem] sm:text-sm mt-1">
                    Start your day with new activities
                </p>
            </div>

            {/* Grid layout for Stats and Recent Activity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Health Statistics */}
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

                {/* Recent Activities */}
                <div className="md:col-span-2 flex flex-col gap-2 items-center justify-between w-full">
                    <div className="flex justify-between overflow-x-auto gap-4 py-4 px-2 sm:px-0 w-full">
                        {healthData.map((data) => {
                            const Icon = data.icon;
                            return (
                                <div
                                    key={data.id}
                                    className="min-w-[250px] bg-white soft-shadow rounded-lg p-4 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="flex items-center gap-2 mb-2 text-gray-700">
                                        <Icon className="bg-secondary bg-opacity-5 h-10 w-10 p-2 rounded-lg text-primary" />
                                        <span className="text-sm font-medium">{data.title}</span>
                                    </div>
                                    <div className="mb-2 flex items-center justify-start gap-2">
                                        <h4 className="text-2xl font-light text-primary">{data.value}</h4>
                                        <span className="text-sm text-gray-500">{data.unit}</span>
                                    </div>
                                    <p className="text-[.7rem] text-gray-600">{data.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/*  */}


                </div>


            </div>

            {/* ECG Chart, Appointments, Calendar in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {/* ECG Chart */}
                <EcgDataChart />


                {/* Appointments */}
                <div className="bg-white rounded-xl p-6 card-shadow h-full">
                    <h3 className="text-base font-medium text-gray-800 mb-2">Upcoming Appointments</h3>
                    {appointments.length > 0 ? (
                        appointments.map((appt, idx) => (
                            <AppointmentCard key={idx} appt={appt} />
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No upcoming appointments.</p>
                    )}
                </div>

                {/* Calendar */}

                <DashboardCalendar />

            </div>

        </div>
    );
};

export default PatientHomeDashboard;

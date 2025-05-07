import React, { useEffect, useState } from 'react';
import waveHand from '../../../assets/wave-hand.png';
import DashboardCards from '../../../Components/Dashboard Components/DashboardCards';
import { useHospitalContext } from '../../../Context Api/HospitalContext';
import toast from 'react-hot-toast';

const HealthcareHomeDashboard = () => {
    const { appointments } = useHospitalContext();
    const [statusMap, setStatusMap] = useState(new Map());

    // Update local status map with new appointments
    useEffect(() => {
        setStatusMap(prev => {
            const updated = new Map(prev);
            appointments.forEach(app => {
                if (!updated.has(app.id)) {
                    updated.set(app.id, app.status || 'Pending');
                }
            });
            return updated;
        });
    }, [appointments]);

    const handleStatusChange = (id, newStatus) => {
        setStatusMap(prev => new Map(prev.set(id, newStatus)));
        toast.success(`Appointment ${id} marked as ${newStatus}`);
    };

    // Derive merged appointment list with local statuses
    const localAppointments = appointments.map(app => ({
        ...app,
        status: statusMap.get(app.id) || 'Pending',
    }));

    const scheduledCount = localAppointments.filter(app => app.status === 'Scheduled').length;
    const pendingCount = localAppointments.filter(app => app.status === 'Pending').length;
    const cancelledCount = localAppointments.filter(app => app.status === 'Cancelled').length;

    return (
        <>
            <section>
                <div className='mt-2'>
                    <h3 className='text-secondary text-xl sm:text-3xl flex items-center'>
                        Welcome, Admin... <img src={waveHand} className='w-8 sm:w-10 filter drop-shadow-lg' alt="Wave Hand" />
                    </h3>
                    <p className='text-gray-600 text-[.7rem] sm:text-sm'>Start your day with managing new appointments</p>
                </div>
            </section>

            <DashboardCards
                scheduled={scheduledCount}
                pending={pendingCount}
                cancelled={cancelledCount}
            />

            <section className="mt-6">
                <h2 className="text-lg sm:text-xl font-medium mb-4 text-gray-900">All Appointments</h2>

                {localAppointments.length === 0 ? (
                    <p className="text-gray-500 text-sm">No appointments available.</p>
                ) : (
                    <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
                        <table className="min-w-full text-sm sm:text-xs md:text-sm">
                            <thead className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-700 uppercase tracking-wider text-[0.65rem] sm:text-xs">
                                <tr className='text-primary'>
                                    <th className="px-4 py-3 text-left">ID</th>
                                    <th className="px-4 py-3 text-left">Title</th>
                                    <th className="px-4 py-3 text-left">Time</th>
                                    <th className="px-4 py-3 text-left">Details</th>
                                    <th className="px-4 py-3 text-left">Status</th>
                                    <th className="px-4 py-3 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 divide-y divide-gray-100">
                                {localAppointments.map((appointment) => (
                                    <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-2 text-xs">{appointment.id}</td>
                                        <td className="px-4 py-2 text-xs">{appointment.title}</td>
                                        <td className="px-4 py-2 text-xs whitespace-nowrap">{appointment.time}</td>
                                        <td className="px-4 py-2 text-xs">{appointment.details}</td>
                                        <td className="px-4 py-2">
                                            <span className={`px-2 py-1 rounded-full text-[0.6rem] font-medium ${appointment.status === "Scheduled"
                                                ? "bg-green-100 text-green-700"
                                                : appointment.status === "Cancelled"
                                                    ? "bg-red-100 text-red-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}>
                                                {appointment.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 flex flex-wrap gap-2">
                                            <button
                                                className="bg-primary bg-opacity-10 hover:bg-primary text-primary hover:text-white text-[0.6rem] px-3 py-1.5 rounded disabled:opacity-50 transition"
                                                onClick={() => handleStatusChange(appointment.id, "Scheduled")}
                                                disabled={appointment.status === "Cancelled"}
                                            >
                                                Schedule
                                            </button>
                                            <button
                                                className="bg-red-200 hover:bg-red-800 text-black hover:text-white text-[0.6rem] px-3 py-1.5 rounded disabled:opacity-50 transition"
                                                onClick={() => handleStatusChange(appointment.id, "Cancelled")}
                                                disabled={appointment.status === "Scheduled"}
                                            >
                                                Cancel
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </>
    );
};

export default HealthcareHomeDashboard;

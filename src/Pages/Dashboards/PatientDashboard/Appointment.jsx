import React, { useEffect, useState } from 'react'
import { CiCircleInfo } from 'react-icons/ci'
import { FaPaperPlane } from 'react-icons/fa6'
import AppointmentSuccessModal from '../../../Components/AppointmentSuccessModal'

const Appointment = () => {
    const [bookingSlot, setBookingSlot] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')
    const [appointmentTitle, setAppointmentTitle] = useState('')
    const [appointmentDetails, setAppointmentDetails] = useState('')
    const [appointments, setAppointments] = useState([])
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    // Unique appointment id
    const [uniqueAppointmentID, setUniqueAppointmentID] = useState(null)

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const getAvailableSlots = async () => {
        setBookingSlot([])
        let today = new Date()

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setBookingSlot(prev => [...prev, timeSlots])
        }
    }

    useEffect(() => {
        getAvailableSlots()
    }, [])

    const handleBookAppointment = () => {
        if (!slotTime || !appointmentTitle || !appointmentDetails) {
            alert('Please fill in all fields and select time')
            return
        }

        const selectedDate = bookingSlot[slotIndex][0].datetime
        const selectedDay = daysOfWeek[selectedDate.getDay()]
        const dateString = `${selectedDay} | ${slotTime}`

        // a unique appointent id
        const appointmentId = Date.now()

        const newAppointment = {
            id: appointmentId,
            title: appointmentTitle,
            time: dateString,
            details: appointmentDetails
        }

        setShowSuccessModal(!showSuccessModal)

        setUniqueAppointmentID(appointmentId)

        setAppointments(prev => [...prev, newAppointment])

        // Clear fields
        setAppointmentTitle('')
        setAppointmentDetails('')
        setSlotTime('')
    }

    const handleCancelAppointment = (appointmentId) => {
        const confirmed = window.confirm('Are you sure you want to cancel this appointment?')

        if (confirmed) {
            setAppointments(prev => prev.filter(app => app.id !== appointmentId))
        }
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 cursor-pointer'>
            <div className='col-span-2'>
                {/* Book Appointment */}
                <div className="w-full overflow-x-auto ">
                    <div className="flex items-center gap-4 min-w-max px-2 py-2">
                        <h3 className="text-lg sm:text-xl text-primary border-l-4 border-primary pl-2 bg-white whitespace-nowrap shrink-0">
                            Booking Slot
                        </h3>

                        <div className="flex items-center border border-secondary px-2 py-1 rounded-full gap-2 shrink-0">
                            <span className="text-secondary text-[0.7rem] sm:text-sm md:text-base">Daily Slots</span>
                            <span className="bg-secondary rounded-full px-5 py-2 text-white text-[0.7rem] sm:text-sm md:text-base">100</span>
                        </div>

                        <div className="flex items-center border border-primary px-2 py-1 rounded-full gap-2 shrink-0">
                            <span className="text-primary text-[0.7rem] sm:text-sm md:text-base">Available Slots</span>
                            <span className="bg-primary rounded-full px-3 py-2 text-white text-[0.7rem] sm:text-sm md:text-base">100</span>
                        </div>
                    </div>
                </div>

                {/* Booking Slots */}
                <div className='flex flex-col gap-8 my-8'>
                    <div className='flex gap-6 items-center-center w-full overflow-x-scroll mt-4'>
                        {bookingSlot.length && bookingSlot.map((item, index) => (
                            <div
                                onClick={() => setSlotIndex(index)}
                                key={index}
                                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-secondary text-white' : 'border border-primary'}`}
                            >
                                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>
                            </div>
                        ))}
                    </div>

                    <div className='flex items-center gap-3 w-full overflow-x-scroll touch'>
                        {bookingSlot.length && bookingSlot[slotIndex].map((item, index) => (
                            <p
                                onClick={() => setSlotTime(item.time)}
                                key={index}
                                className={`text-sm font-light flex-shrink-0 px-4 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-secondary text-white' : 'text-primary border border-primary'}`}
                            >
                                {item.time.toLowerCase()}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Appointment Form */}
                <div className='flex flex-col gap-2 mt-8'>
                    <div className="relative mt-4">
                        <CiCircleInfo className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Appointment Title"
                            value={appointmentTitle}
                            onChange={e => setAppointmentTitle(e.target.value)}
                            className="w-full pr-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>

                    <textarea
                        name="appointmentDetails"
                        id="appointmentDetails"
                        cols="30"
                        rows="5"
                        value={appointmentDetails}
                        onChange={e => setAppointmentDetails(e.target.value)}
                        placeholder="Write a short appointment details 🖊️"
                        className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary bg-primary bg-opacity-5 resize-none placeholder-gray-500 text-sm"
                    ></textarea>

                    <button
                        className='btn btn-primary flex items-center gap-2'
                        onClick={handleBookAppointment}
                    >
                        Book Appointment <FaPaperPlane />
                    </button>
                </div>
            </div>

            {/* Appointment Modal */}

            {showSuccessModal && (<AppointmentSuccessModal appointmentId={uniqueAppointmentID}
                onClose={() => setShowSuccessModal(false)} />)
            }

            <div className='col-span-1'>
                {/* Reschedule Appointment */}
                <div className='my-10 border-t-2 pt-6 border-gray-200'>
                    <h3 className="text-lg sm:text-xl text-darkPrimary border-l-4 border-primary pl-2 bg-white whitespace-nowrap shrink-0">
                        Reschedule Appointment
                    </h3>

                    <div className="overflow-x-auto mt-2 flex flex-col gap-4">
                        {appointments.length === 0 ? (
                            <p className='text-sm text-gray-500 mt-2'>No appointments yet.</p>
                        ) : (
                            appointments.map((appt, idx) => (
                                <div
                                    key={idx}
                                    className='flex items-center justify-between gap-4 border-b pb-2'
                                >
                                    <div>
                                        <h6 className='text-darkPrimary whitespace-nowrap'>{appt.title}</h6>
                                        <span className='text-sm whitespace-nowrap'>{appt.time}</span>
                                    </div>

                                    <div className='flex items-center justify-center gap-4 shrink-0'>
                                        <button className='btn bg-secondary text-primary bg-opacity-20 hover:bg-secondary hover:text-white transition-all duration-300'>
                                            Reschedule
                                        </button>
                                        <button onClick={() => handleCancelAppointment(appt.id)} className='btn bg-red-100 hover:bg-red-900 hover:text-white transition-all duration-300'>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment

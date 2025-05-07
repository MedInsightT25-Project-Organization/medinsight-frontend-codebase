import { GiCheckMark } from 'react-icons/gi'

const AppointmentSuccessModal = ({ appointmentId, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkPrimary bg-opacity-50 px-4">
            <div className="bg-accent rounded-2xl p-8 sm:p-10 max-w-lg w-full text-center shadow-lg relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Icon */}
                <GiCheckMark className="text-secondary border-2 border-secondary rounded-full text-6xl p-4 mx-auto mb-4" />

                {/* Heading */}
                <h5 className="text-darkPrimary text-lg sm:text-xl font-semibold mb-3">
                    Your <span className="text-primary">appointment request</span> has been successfully submitted!
                </h5>

                {/* Message */}
                <p className="text-[0.7rem] sm:text-sm text-gray-700 mb-2">We'll be in touch shortly to confirm.</p>

                {/* Appointment ID */}
                <h6 className="text-base font-semibold mt-4 text-darkPrimary">
                    Your Appointment ID: <span className="text-primary">{appointmentId}</span>
                </h6>
                <p className="text-[0.7rem] text-gray-600 mt-1">
                    Kindly save your appointment ID as it will be requested on your appointment day.
                </p>
            </div>
        </div>
    )
}

export default AppointmentSuccessModal

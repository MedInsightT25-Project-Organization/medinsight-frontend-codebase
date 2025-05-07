import React from 'react';

const AppointmentCard = ({ appt, onCancel }) => {
    return (
        <div className="flex flex-col justify-start gap-4 border-b pb-4 last:border-none">
            <div className="flex items-start justify-between flex-wrap">
                <div>
                    <h6 className="text-primary font-semibold text-base">{appt.title}</h6>
                    <span className="text-sm text-gray-600">{appt.time}</span>
                </div>
                <h4 className="text-sm text-darkPrimary font-medium">{appt.hospitalName}</h4>
            </div>

             
        </div>
    );
};

export default AppointmentCard;

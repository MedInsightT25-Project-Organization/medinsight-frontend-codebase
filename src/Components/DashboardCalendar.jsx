import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // import default styling
import './CalendarStyles.css'; // optional custom styling

const DashboardCalendar = () => {
    const [value, setValue] = useState(new Date());

    return (
        <div className="bg-white rounded-xl p-4 sm:p-6 card-shadow w-full max-w-md mx-auto mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Calendar</h4>
            <Calendar
                onChange={setValue}
                value={value}
                className="w-full rounded-md"
            />
        </div>
    );
};

export default DashboardCalendar;

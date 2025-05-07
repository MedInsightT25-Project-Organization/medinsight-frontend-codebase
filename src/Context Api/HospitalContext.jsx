import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
    // Load appointments from localStorage or set to an empty array if not found
    const loadAppointments = () => {
        const storedAppointments = localStorage.getItem('appointments');
        return storedAppointments ? JSON.parse(storedAppointments) : [];
    };

    const [selectedHospital, setSelectedHospital] = useState(null);
    const [appointments, setAppointments] = useState(loadAppointments());

    // Add new appointment
    const addAppointment = (appointment) => {
        setAppointments((prev) => {
            const updatedAppointments = [...prev, appointment];
            // Save to localStorage
            localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
            return updatedAppointments;
        });
    };

    // Remove appointment by ID
    const removeAppointment = (id) => {
        setAppointments((prev) => {
            const updatedAppointments = prev.filter((app) => app.id !== id);
            // Save to localStorage
            localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
            return updatedAppointments;
        });
    };

    

    const contextValue = useMemo(() => ({
        selectedHospital,
        setSelectedHospital,
        appointments,
        addAppointment,
        removeAppointment,
    }), [selectedHospital, appointments]);

    return (
        <HospitalContext.Provider value={contextValue}>
            {children}
        </HospitalContext.Provider>
    );
};

export const useHospitalContext = () => useContext(HospitalContext);

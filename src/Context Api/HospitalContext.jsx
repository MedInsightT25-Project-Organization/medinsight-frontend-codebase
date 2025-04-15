import React, { createContext, useState, useEffect, useContext } from "react";

const HospitalContext = createContext();
export const useHospital = () => useContext(HospitalContext);

export const HospitalProvider = ({ children }) => {
    const [selectedHospital, setSelectedHospital] = useState(null);

    // Load hospital from localStorage on first render
    // useEffect(() => {
    //     const savedHospital = localStorage.getItem("selectedHospital");
    //     if (savedHospital) {
    //         setSelectedHospital(JSON.parse(savedHospital));
    //     }
    // }, []);

    // Save to localStorage on change
    // useEffect(() => {
    //     if (selectedHospital) {
    //         localStorage.setItem("selectedHospital", JSON.stringify(selectedHospital));
    //     } else {
    //         localStorage.removeItem("selectedHospital");
    //     }
    // }, [selectedHospital]);

    return (
        <HospitalContext.Provider value={{ selectedHospital, setSelectedHospital }}>
            {children}
        </HospitalContext.Provider>
    );
};

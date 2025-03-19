import React, { createContext } from 'react'


// Context
export const HospitalContext = createContext(null)

const HospitalContextProvider = (props) => {

    const contextData = {}

    return (
        <HospitalContext.Provider value={contextData}>
            {props.children}
        </HospitalContext.Provider>
    )

}

export default HospitalContextProvider
import React from 'react'
import waveHand from '../../../assets/wave-hand.png'
const HealthcareHomeDashboard = () => {
    return (
        <>

            <section>
                <div className='mt-2'>
                    <h3 className='text-secondary text-xl sm:text-3xl flex items-center'>Welcome, Univel... <img src={waveHand} className='w-8 sm:w-10 filter drop-shadow-lg' alt="Wave Hand" /> </h3>
                    <p className='text-gray-600 text-[.7rem] sm:text-sm'>Start your day with managing new appointments</p>
                </div>

            </section>

        </>
    )
}

export default HealthcareHomeDashboard
import React from 'react'
import { useLocation } from 'react-router-dom'
import ResendVerification from './ResendVerification'

const VerifyEmail = () => {
    const location = useLocation()
    const email = location.state?.email || ""
    return (
        <div className="container text-center mt-10 flex flex-col items-center justify-center">
            <div className='mt-10'>
                <h1 className="text-2xl text-primary">Verify your email</h1>
                <p className="mt-2 text-gray-600 ">
                    We sent a verification link to <strong>{email}</strong>.
                </p>
            </div>


            <ResendVerification email={email} />
        </div>
    )
}

export default VerifyEmail
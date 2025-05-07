import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { LuCalendarFold } from 'react-icons/lu';
import { ImLocation } from 'react-icons/im';
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../../contexts/PatientContexts/PatientProfileContext';
import { toast, Toaster } from 'react-hot-toast';
const PatientFormOne = () => {
  const navigate = useNavigate()
  const { createProfile, fetchProfile } = useProfile()
  const [formData, setFormData] = useState(
    {
      fullName: '',
      address: '',
      phoneNumber: '',
      dob: '',
      gender: '',
      localGovernment: '',
      occupation: '',
      emergencyContact: '',
      emergencyContactNumber: '',
    })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  // 

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    console.log(formData)

    try {

      await createProfile(formData)
      await fetchProfile()
      toast.success('Profile Registration Successful', { duration: 10000 })

      setTimeout(() => {
        navigate('/patient-dashboard')
      }, 5000)

      console.log(formData)
    }
    catch (err) {
      console.log(formData)
      setError(err.response?.data?.message || 'Registration failed');

      console.log(err);
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally {
      console.log(formData)
      setLoading(false);
    }

  }
  return (
    <>
      <Toaster />
      <section className='container grid lg:grid-cols-3 gap-4'>

        {/*  */}
        <div className='lg:col-span-1 flex flex-col items-center justify-center'>

          <div className='py-4 sm:py-14 text-center lg:text-left lg:py-0 lg:pr-1'>
            <h2 className='text-darkPrimary text-2xl sm:text-3xl md:text-4xl leading-tight'>
              You are
              <span className='text-primary'> One Step Closer </span>
              to creating your account!
              <p className='text-darkPrimary mt-4 text-[.7rem] sm:text-base'>Kindly fill in the details correctly to help us serve you better</p>
            </h2>
          </div>


        </div>
        {/*  */}

        <div className='lg:col-span-2 lg:pt-10'>
          <div className='bg-white rounded-xl soft-shadow py-3 px-6 mb-4'>
            <h3 className='text-primary text-xl'>Personal Information</h3>
          </div>

          <div className='bg-white p-6 rounded-xl soft-shadow'>

            <form onSubmit={handleProfileSubmit}>
              {/*  Name Field */}
              <div className='mb-5'>
                <label htmlFor="fullName" className="block text-[.75rem] font-light text-primary mb-1">
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}

                  id="fullName"
                  type="text"
                  placeholder="Mr. Temi Williams"
                  className="w-full py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              {/* Phone Number  & Occupation*/}
              <div className="mb-5 flex flex-col gap-4 lg:flex-row w-full">

                <div className='w-full'>
                  <label htmlFor="number" className="block text-[.75rem] font-light text-primary mb-1">
                    Phone Number
                  </label>

                  <div className='relative'>
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      id="number"
                      type="tel"
                      placeholder="0910000000"
                      className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                {/*  */}
                <div className='w-full'>
                  <label htmlFor="occupation" className="block text-[.75rem] font-light text-primary mb-1">
                    Occupation
                  </label>

                  <div className='relative'>
                    <BsFillPersonFill className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      id="occupation"
                      type="text"
                      placeholder=""
                      className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* DOB  & GENDER*/}
              <div className="mb-5 flex flex-col gap-4 lg:flex-row w-full">

                <div className='w-full'>
                  <label htmlFor="dob" className="block text-[.75rem] font-light text-primary mb-1">
                    Date of Birth
                  </label>

                  <div className='relative'>
                    <LuCalendarFold className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      id="dob"
                      type="date"
                      placeholder="Select your birth date"
                      className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                      required
                    />
                  </div>
                </div>

                {/*  */}

                <div className=''>
                  <fieldset>
                    <legend className="block text-[.75rem] font-light text-primary mb-2">Gender</legend>
                    <div className="flex gap-6">
                      {/* Male */}
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input

                          value={formData.gender === "male"}
                          onChange={handleChange}
                          type="radio"
                          name="gender"
                          className="peer sr-only"
                          required
                        />
                        <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-transparent peer-checked:bg-gradient-to-r from-green-500 to-yellow-400 transition-all duration-300">
                          <span className="w-2.5 h-2.5 bg-white rounded-full peer-checked:bg-white"></span>
                        </span>
                        <span className="text-sm text-gray-700">Male</span>
                      </label>

                      {/* Female */}
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          value={formData.gender === "female"}
                          onChange={handleChange}
                          name="gender"
                          // value="female"
                          className="peer sr-only"
                        />
                        <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-transparent peer-checked:bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300">
                          <span className="w-2.5 h-2.5 bg-white rounded-full peer-checked:bg-white"></span>
                        </span>
                        <span className="text-sm text-gray-700">Female</span>
                      </label>

                    </div>
                  </fieldset>

                </div>

              </div>

              {/*  Address & LGA */}
              <div className="mb-5 flex flex-col gap-4 lg:flex-row w-full">

                <div className='w-full'>
                  <label htmlFor="address" className="block text-[.75rem] font-light text-primary mb-1">
                    Address
                  </label>

                  <div className='relative'>
                    <ImLocation className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      id="address"
                      type="text"
                      placeholder="ex. House Number, Street Name, City, State."
                      className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                {/*  */}
                <div className='w-full'>
                  <label htmlFor="lga" className="block text-[.75rem] font-light text-primary mb-1">
                    Local Government Area (LGA)
                  </label>
                  <select

                    id="lga"
                    name="localGovernment"
                    value={formData.localGovernment}
                    onChange={handleChange}
                    className="w-full pl-4 pr-4 py-4 text-[.75rem] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select your LGA</option>
                    <option value="Agege">Agege</option>
                    <option value="Ajeromi-Ifelodun">Ajeromi-Ifelodun</option>
                    <option value="Alimosho">Alimosho</option>
                    <option value="Amuwo-Odofin">Amuwo-Odofin</option>
                    <option value="Apapa">Apapa</option>
                    <option value="Badagry">Badagry</option>
                    <option value="Epe">Epe</option>
                    <option value="Eti-Osa">Eti-Osa</option>
                    <option value="Ibeju-Lekki">Ibeju-Lekki</option>
                    <option value="Ifako-Ijaiye">Ifako-Ijaiye</option>
                    <option value="Ikeja">Ikeja</option>
                    <option value="Ikorodu">Ikorodu</option>
                    <option value="Kosofe">Kosofe</option>
                    <option value="Lagos Island">Lagos Island</option>
                    <option value="Lagos Mainland">Lagos Mainland</option>
                    <option value="Mushin">Mushin</option>
                    <option value="Ojo">Ojo</option>
                    <option value="Oshodi-Isolo">Oshodi-Isolo</option>
                    <option value="Shomolu">Shomolu</option>
                    <option value="Surulere">Surulere</option>
                  </select>

                </div>
              </div>


              <div>


                {/*Emergency Contact*/}
                <div className="mb-5 flex flex-col gap-4 lg:flex-row w-full">

                  <div className='w-full'>
                    <label htmlFor="emergencyname" className="block text-[.75rem] font-light text-primary mb-1">
                      Emergency Contact Name
                    </label>

                    <div className='relative'>
                      <input
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        id="emergencyname"
                        type="text"
                        placeholder="Emergency Contact Name"
                        className="w-full py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  {/*  */}
                  <div className='w-full'>
                    <label htmlFor="emergencynumber" className="block text-[.75rem] font-light text-primary mb-1">
                      Phone Number
                    </label>

                    <div className='relative'>
                      <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        name="emergencyContactNumber"
                        value={formData.emergencyContactNumber}
                        onChange={handleChange}
                        id="emergencynumber"
                        type="tel"
                        placeholder="Emergency Contact Phone"
                        required
                        className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="flex items-center justify-center">
                <button
                  disabled={loading}
                  type="submit"
                  className="py-4 text-sm flex items-center justify-center gap-4 bg-primary hover:bg-darkPrimary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                >
                  {loading ? "Please Wait..." : " Save & Continue"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </>
  )
}

export default PatientFormOne

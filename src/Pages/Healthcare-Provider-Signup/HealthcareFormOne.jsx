import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { LuCalendarFold, LuClock } from 'react-icons/lu';
import { ImLocation } from 'react-icons/im';
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const HealthcareFormOne = () => {
  const navigate = useNavigate()
  return (
    <>

      <section className='container grid lg:grid-cols-3 gap-4'>
        {/*  */}
        <div className='lg:col-span-1 flex flex-col items-center justify-center'>

          <div className='py-4 sm:py-14 text-center lg:text-left lg:py-0 lg:pr-1'>
            <h2 className='text-darkSecondary text-2xl sm:text-3xl md:text-4xl leading-tight'>
              You are
              <span className='text-secondary'> One Step Closer </span>
              to creating your account!
              <p className='text-darkSecondary mt-4 text-[.7rem] sm:text-base'>Kindly fill in the details correctly to help us serve you better</p>
            </h2>
          </div>


        </div>
        {/*  */}

        <div className='lg:col-span-2 lg:pt-10'>
          <div className='bg-white rounded-xl soft-shadow py-3 px-6 mb-4'>
            <h3 className='text-secondary text-lg sm:text-xl'>Healthcare Provider Information</h3>
          </div>

          <div className='bg-white p-6 rounded-xl soft-shadow'>

            <form action="
              ">
              {/*  Name Field */}
              <div className='mb-5'>
                <label htmlFor="fullName" className="block text-[.75rem] font-light text-secondary mb-1">
                  Hospital Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Univel Teaching Hospital"
                  className="w-full py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                  required
                />
              </div>

              {/*  Address */}


              <div className='w-full mb-5'>
                <label htmlFor="address" className="block text-[.75rem] font-light text-secondary mb-1">
                  Address
                </label>

                <div className='relative'>
                  <ImLocation className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="address"
                    type="text"
                    placeholder="ex. House Number, Street Name, City, State."
                    className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                    required
                  />
                </div>
              </div>


              <div className="mb-5 flex flex-col gap-4 lg:flex-row w-full">

                {/*  */}
                <div className='w-full'>
                  <label htmlFor="lga" className="block text-[.75rem] font-light text-secondary mb-1">
                    Local Government Area (LGA)
                  </label>
                  <select

                    id="lga"
                    name="lga"
                    className="w-full pl-4 pr-4 py-4 text-[.75rem] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
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

                {/*  */}
                <div className='w-full mb-5'>
                  <label htmlFor="workhours" className="block text-[.75rem] font-light text-secondary mb-1">
                    Work Hours
                  </label>

                  <div className='relative'>
                    <LuClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      id="workhours"
                      type="text"
                      placeholder="ex. 8am - 6pm"
                      className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                      required
                    />
                  </div>
                </div>
              </div>

              {/*  */}



              <div className='w-full mb-5'>
                <label htmlFor="services" className="block text-[.75rem] font-light text-secondary mb-1">
                  Services Summary (List at least 5 services separated by comma(,))
                </label>

                <textarea
                  id="services"
                  name="services"
                  rows="4"
                  placeholder="ex: General Check up, Antenatal,"
                  className="w-full px-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary resize-none"
                />
              </div>

              {/*  */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => navigate('/healthcare-dashboard')}
                  type="submit"
                  className="py-4 text-sm flex items-center justify-center gap-4 bg-secondary hover:bg-darkSecondary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                >
                  Submit & Continue <GoArrowRight />
                </button>
              </div>
            </form>




          </div>

        </div>
      </section>

    </>
  )
}

export default HealthcareFormOne



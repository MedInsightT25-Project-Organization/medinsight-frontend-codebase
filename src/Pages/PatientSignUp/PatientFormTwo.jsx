import React from 'react'
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const PatientFormTwo = () => {
  const navigate = useNavigate()
  return (
    <>

      <section className='container grid lg:grid-cols-3 gap-4'>
        {/*  */}
        <div className='lg:col-span-1 flex flex-col items-center justify-center'>

          <div className='py-4 sm:py-14 text-center lg:text-left lg:py-0 lg:pr-1'>
            <h2 className='text-darkPrimary text-2xl sm:text-3xl md:text-4xl leading-tight'>
              Your
              <span className='text-primary'> account </span>
              is almost <span className='text-primary'> ready!</span>
              <p className='text-darkPrimary mt-4 text-[.7rem] sm:text-base'>Kindly fill in your medical details correctly to help us serve you better</p>
            </h2>
          </div>


        </div>
        {/*  */}

        <div className='lg:col-span-2 lg:pt-10'>
          <div className='bg-white rounded-xl soft-shadow py-3 px-6 mb-4'>
            <h3 className='text-primary text-xl'>Medical Information</h3>
          </div>

          <div className='bg-white p-6 rounded-xl soft-shadow'>

            <form action="
              ">

              {/* */}
              <div className="mb-5 flex flex-col gap-4 lg:flex-row w-full">

                <div className='w-full'>
                  <label htmlFor="height" className="block text-[.75rem] font-light text-primary mb-1">
                    Height (cm)
                  </label>

                  <div className='relative'>
                    <input
                      id="height"
                      type="tel"
                      className="w-full py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"

                    />
                  </div>
                </div>

                <div className='w-full'>
                  <label htmlFor="weight" className="block text-[.75rem] font-light text-primary mb-1">
                    Weight (kg)
                  </label>

                  <div className='relative'>
                    <input
                      id="weight"
                      type="tel"
                      className="w-full py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"

                    />
                  </div>
                </div>

                <div className='w-full'>
                  <label htmlFor="bloodgroup" className="block text-[.75rem] font-light text-primary mb-1">
                    Blood Group
                  </label>

                  <div className='relative'>
                    <input
                      id="bloodgroup"
                      type="text"
                      className="w-full py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>



              </div>
              {/* */}
              <div className="mb-5 flex flex-col gap-4 lg:flex-row w-full">
                <div className='w-full'>
                  <label htmlFor="allergies" className="block text-[.75rem] font-light text-primary mb-1">
                    Allergies (if any)
                  </label>

                  <textarea
                    id="allergies"
                    name="allergies"
                    rows="3"
                    placeholder="ex. Peanut, Penicillin, Pollen"
                    className="w-full px-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <div className='w-full'>
                  <label htmlFor="medications" className="block text-[.75rem] font-light text-primary mb-1">
                    Current Medications
                  </label>

                  <textarea
                    id="medications"
                    name="medications"
                    rows="3"
                    placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
                    className="w-full px-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

              </div>
              {/* */}
              <div className="mb-5 flex flex-col gap-4 lg:flex-row w-full">
                <div className='w-full'>
                  <label htmlFor="medicalhistory" className="block text-[.75rem] font-light text-primary mb-1">
                    Family medical history (if relevant)
                  </label>

                  <textarea
                    id="medicalhistory"
                    name="medicalhistory"
                    rows="3"
                    placeholder="ex. Mother had breast cancer"
                    className="w-full px-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <div className='w-full'>
                  <label htmlFor="pastmedicalhistory" className="block text-[.75rem] font-light text-primary mb-1">
                    Past medical history
                  </label>

                  <textarea
                    id="pastmedicalhistory"
                    name="pastmedicalhistory"
                    rows="3"
                    placeholder="ex. Asthma diagnosis in childhood"
                    className="w-full px-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

              </div>


              {/*  */}

              <div className="my-4">
                <h3 className="text-lg font-semibold text-primary mb-3">Consent and Privacy</h3>

                <div className="space-y-3">
                  {/* Consent Item */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="consentTreatment"
                      required
                      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-sm 
                   checked:bg-green-600 checked:border-green-600 
                   focus:outline-none focus:ring-0 transition duration-200 relative"
                    />
                    <span className="text-sm text-gray-700">
                      I consent to receive treatment for my health condition.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="consentDisclosure"
                      required
                      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-sm 
                   checked:bg-green-600 checked:border-green-600 
                   focus:outline-none focus:ring-0 transition duration-200 relative"
                    />
                    <span className="text-sm text-gray-700">
                      I consent to the use and disclosure of my health information for treatment purposes.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="agreePrivacyPolicy"
                      required
                      className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-sm 
                   checked:bg-green-600 checked:border-green-600 
                   focus:outline-none focus:ring-0 transition duration-200 relative"
                    />
                    <span className="text-sm text-gray-700">
                      I acknowledge that I have reviewed and agree to the privacy policy.
                    </span>
                  </label>
                </div>
              </div>




              {/*  */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => navigate('/patient-dashboard')}
                  type="submit"
                  className="py-4 text-sm flex items-center justify-center gap-4 bg-primary hover:bg-darkPrimary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
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

export default PatientFormTwo

import React from 'react'

const UserProfile = () => {
  return (
    <>
      <section className='container grid lg:grid-cols-3 gap-4'>
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
              <div className="flex items-center justify-center">
                <button
                  // onClick={() => navigate('/patient-dashboard')}
                  type="submit"
                  className="py-4 text-sm flex items-center justify-center gap-4 bg-primary hover:bg-darkPrimary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                >
                  Save  
                </button>
              </div>
            </form>




          </div>

        </div>
      </section>


    </>
  )
}

export default UserProfile
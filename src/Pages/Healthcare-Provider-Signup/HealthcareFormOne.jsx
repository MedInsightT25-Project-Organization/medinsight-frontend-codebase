import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { LuCalendarFold, LuClock } from 'react-icons/lu';
import { ImLocation } from 'react-icons/im';
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useHealthcareProfile } from '../../contexts/HealthcareContext/HealthcareProfileContext';
import { toast, Toaster } from 'react-hot-toast';

const HealthcareFormOne = () => {

  const navigate = useNavigate();
  const { createProfile, fetchHospitalAdminProfile } = useHealthcareProfile();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactNumber: '',
    state: '',
    country: '',
    city: '',
    localGovernmentArea: '',
    serviceSummary: '',
    workHours: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Validate phone number
  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/;  // This regex allows op
    return phoneRegex.test(number);
  };

  const validateWorkHours = (hours) => {
    const workHoursRegex = /^([01]\d|2[0-3]):([0-5]\d)-([01]\d|2[0-3]):([0-5]\d)$/;
    return workHoursRegex.test(hours);
  };



  // Validate the entire form
  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name) newErrors.name = "Hospital Name is required";

    // Validate contact number
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!validatePhoneNumber(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be a valid phone number";
    }
    if (!formData.workHours) {
      newErrors.workHours = "Work hours are required";
    } else if (!validateWorkHours(formData.workHours)) {
      newErrors.workHours = "Work hours must be in the format HH:MM-HH:MM";
    }

    return newErrors;
  };

  // Handle form submission
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);  // Mark the form as submitted
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return;
    }

    setLoading(true);
    setError({});

    try {
      await createProfile(formData);
      await fetchHospitalAdminProfile();
      toast.success('Profile Registration Successful', { duration: 10000 });

      setTimeout(() => {
        navigate('/healthcare-dashboard');
      }, 2000);
    } catch (err) {
      setError({ message: err.response?.data?.message || 'Registration failed' });
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Toaster />
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

            <form onSubmit={handleProfileSubmit}
            >
              {/*  Name Field */}
              <div className='mb-5'>
                <label htmlFor="name" className="block text-[.75rem] font-light text-secondary mb-1">
                  Hospital Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  id="name"
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
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    id="address"
                    type="text"
                    placeholder="ex. House Number, Street Name, City, State."
                    className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                    required
                  />
                </div>
              </div>

              {/*  */}
              <div className="mb-2 flex flex-col gap-4 lg:flex-row w-full">

                {/*  */}
                <div className='w-full'>
                  <label htmlFor="contactNumber" className="block text-[.75rem] font-light text-secondary mb-1">
                    Phone Number
                  </label>

                  <div className='relative'>
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      id="contactNumber"
                      type="text"
                      placeholder=""
                      className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                      required
                    />
                  </div>
                  {formSubmitted && error.contactNumber && (
                    <p className="text-red-500 text-xs">{error.contactNumber}</p>
                  )}


                </div>

                <div className='w-full mb-5'>
                  <label htmlFor="workHours" className="block text-[.75rem] font-light text-secondary mb-1">
                    Work Hours (HH:MM-HH:MM):
                  </label>

                  <div className='relative'>
                    <LuClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="workHours"
                      value={formData.workHours}
                      onChange={handleChange}
                      id="workHours"
                      type="text"
                      placeholder="ex. 8am - 6pm"
                      className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                      required
                    />

                    {formSubmitted && error.workHours && (
                      <p className="text-red-500 text-xs">{error.workHours}</p>
                    )}
                  </div>
                </div>

                {/*  */}
                <div className='w-full mb-5'>
                  <label htmlFor="city" className="block text-[.75rem] font-light text-secondary mb-1">
                    City
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    id="city"
                    type="text"
                    placeholder=""
                    className="w-full pl-12 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                    required
                  />
                </div>



              </div>

              {/*  */}

              <div className="mb-2 flex flex-col gap-4 lg:flex-row w-full">

                {/*  */}
                <div className='w-full'>
                  <label htmlFor="localGovernmentArea" className="block text-[.75rem] font-light text-secondary mb-1">
                    Local Government Area (LGA)
                  </label>
                  <select
                    name="localGovernmentArea"
                    value={formData.localGovernmentArea}
                    onChange={handleChange}
                    id="localGovernmentArea"

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

                <div className='w-full mb-5'>
                  <label htmlFor="state" className="block text-[.75rem] font-light text-secondary mb-1">
                    State
                  </label>

                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    id="state"

                    className="border rounded p-2 w-full"


                  >
                    <option value="">Select a state</option>
                    <option value="Abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                    <option value="FCT">FCT - Abuja</option>
                  </select>

                </div>
                <div className='w-full mb-5'>
                  <label htmlFor="country" className="block text-[.75rem] font-light text-secondary mb-1">
                    Country
                  </label>

                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    id="country"

                    className="w-full pl-4 pr-4 py-4 text-[.75rem] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select your Country</option>
                    <option value="Nigeria">Nigeria</option>

                  </select>
                </div>

                {/*  */}

              </div>

              {/*  */}



              <div className='w-full mb-5'>
                <label htmlFor="services" className="block text-[.75rem] font-light text-secondary mb-1">
                  Services Summary (List at least 5 services separated by comma(,))
                </label>

                <textarea
                  name="serviceSummary"
                  value={formData.serviceSummary}
                  onChange={handleChange}
                  id="serviceSummary"
                  rows="4"
                  placeholder="ex: General Check up, Antenatal,"
                  className="w-full px-4 py-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary resize-none"
                />
              </div>

              {/*  */}
              <div className="flex items-center justify-center">
                <button
                  disabled={loading}
                  type="submit"
                  className="py-4 text-sm flex items-center justify-center gap-4 bg-secondary hover:bg-darkSecondary duration-500 transition-all w-full text-white rounded-lg cursor-pointer"
                >
                  {loading ? "Please Wait..." : " Save & Continue"} <GoArrowRight />
                </button>
              </div>
            </form>




          </div>

        </div>
      </section >

    </>
  )
}

export default HealthcareFormOne



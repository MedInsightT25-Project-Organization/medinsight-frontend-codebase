import React from "react";
import CountUp from "react-countup";
import aboutImage from "../assets/About-images/about-section-image.png";
import patientDashboard from '../assets/About-images/patient-dashboard.png'
import adminDashboard from '../assets/About-images/healthcare-dashboard.png'
import FeaturedHospitals from "./FeaturedHospitals";
const AboutSection = () => {
  return (
    <>
      <section className="container mx-auto py-14 grid md:grid-cols-2 gap-14 items-stretch">
        {/* Image Section */}
        <div className="relative w-full h-full">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-[35rem] mx-auto h-full"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <h5 className="text-primary text-base font-semibold">ABOUT US</h5>
          <span className="w-20 h-[0.15rem] bg-darkPrimary block my-3"></span>
          <h2 className="text-2xl sm:text-4xl font-bold text-darkPrimary leading-tight">
            Efficient and Accessible Health Care Solutions
          </h2>
          <p className="text-gray-700 mt-4 leading-normal text-[.9rem]">
            Our mission is to revolutionize healthcare by making it more accessible and efficient for everyone. With our platform, patients can easily connect with healthcare providers for seamless appointment booking, test scheduling, and secure result access—all in one place.
          </p>
          <p className="text-gray-700 mt-4 leading-normal text-[.9rem]">
            By bridging the gap between patients and medical centers, we empower individuals to take control of their health while helping providers streamline their services. Join us in transforming healthcare with convenience, reliability, and innovation.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-between bg-white py-8 px-6 rounded-lg soft-shadow mt-8">
            <div className="text-center w-1/3 sm:w-auto">
              <h2 className="text-2xl sm:text-4xl text-primary font-bold">
                <CountUp end={2000} duration={3} separator="," />
              </h2>
              <p className="text-gray-600 text-[0.65rem] sm:text-xs mt-1">
                Satisfied Patients
              </p>
            </div>
            <div className="text-center w-1/3 sm:w-auto">
              <h2 className="text-2xl sm:text-4xl text-primary font-bold">
                <CountUp end={200} duration={3} separator="," />
              </h2>
              <p className="text-gray-600 text-[0.65rem] sm:text-xs mt-1">
                Primary Healthcares
              </p>
            </div>
            <div className="text-center w-1/3 sm:w-auto">
              <h2 className="text-2xl sm:text-4xl text-primary font-bold">
                <CountUp end={1000} duration={3} separator="," />
              </h2>
              <p className="text-gray-600 text-[0.65rem] sm:text-xs mt-1">Tests Booked</p>
            </div>
          </div>
        </div>
      </section>


      {/*  */}
      <FeaturedHospitals/>

      {/* Patient Section */}
      <section className="bg-white container mx-auto grid grid-cols-1 lg:grid-cols-5 items-center gap-8 p-6 cursor-pointer">
        {/* Text Section (Smaller Grid) */}
        <div className="flex flex-col gap-5 order-2 md:order-1 md:col-span-2">
          <h3 className="text-2xl sm:text-4xl font-bold text-primary">For Patients</h3>

          {/* Item 1 */}
          <div className="flex gap-4 group items-start bg-white rounded-xl shadow-xl py-6 px-4 hover:shadow-soft-shadow">
            <h4 className="p-2 text-lg bg-white shadow-xl text-darkPrimary rounded-full transition duration-700 group-hover:bg-primary group-hover:text-white">
              01
            </h4>
            <div className="flex flex-col gap-2">
              <h4 className="text-darkPrimary text-xl sm:text-2xl font-semibold">
                Find Nearby Healthcare Centers
              </h4>
              <p className="text-[.8rem]">
                Locate and select a primary healthcare center close to you for quick and easy access to medical services.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4 group items-start border-t-2 border-b-2 border-gray-100  bg-white rounded-xl shadow-xl py-6 px-4">
            <h4 className="p-2 text-lg bg-white shadow-xl text-darkPrimary rounded-full transition duration-700 group-hover:bg-primary group-hover:text-white">
              02
            </h4>
            <div className="flex flex-col gap-2">
              <h4 className="text-darkPrimary text-xl sm:text-2xl font-semibold">
                Book Appointments Online
              </h4>
              <p className="text-[.8rem]">
                Skip the long hospital queues—schedule your consultation with just a few clicks.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4 group items-start  bg-white rounded-xl shadow-xl py-6 px-4">
            <h4 className="p-2 text-lg bg-white shadow-xl text-darkPrimary rounded-full transition duration-700 group-hover:bg-primary group-hover:text-white">
              03
            </h4>
            <div className="flex flex-col gap-2">
              <h4 className="text-darkPrimary text-xl sm:text-2xl font-semibold">
                Book Medical Tests
              </h4>
              <p className="text-[.8rem]">
                No more waiting! View and manage your test results securely on your dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section (Larger Grid) */}
        <div className="w-full flex justify-center md:items-center order-1 md:order-2 md:col-span-3">
          <img src={patientDashboard} alt="Patient Dashboard" className="w-full max-w-[90%] md:max-w-full md:h-auto transition-all duration-500 ease-in-out" />
        </div>
      </section>

      {/*  */}
      {/* Healthcare Section */}
      <section className="bg-white container mx-auto grid grid-cols-1 lg:grid-cols-5 items-center gap-8 p-6 cursor-pointer">
        {/* Image Section (Larger Grid) */}
        <div className="w-full flex justify-center md:items-center order-1 md:order-1 md:col-span-3">
          <img src={adminDashboard} alt="Admin Dashboard"
            className="w-full max-w-[80%] md:max-w-[90%] md:h-auto transition-all duration-500 ease-in-out" />
        </div>

        {/* Text Section (Smaller Grid) */}
        <div className="flex flex-col gap-5 order-2 md:order-2 md:col-span-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-secondary">For Healthcare Providers</h3>

          {/* Item 1 */}
          <div className="flex gap-4 group items-start bg-white rounded-xl shadow-xl py-6 px-4 hover:shadow-soft-shadow">
            <h4 className="p-2 text-lg bg-white shadow-xl text-darkSecondary rounded-full transition duration-700 group-hover:bg-secondary group-hover:text-white">
              01
            </h4>
            <div className="flex flex-col gap-2">
              <h4 className="text-darkSecondary text-xl sm:text-2xl font-semibold">
                Get Listed & Connect with Patients
              </h4>
              <p className="text-[.8rem]">
                Expand your reach by registering your healthcare center on our platform, making it easier for patients to find you.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4 group items-start border-t-2 border-b-2 border-gray-100 bg-white rounded-xl shadow-xl py-6 px-4">
            <h4 className="p-2 text-lg bg-white shadow-xl text-darkSecondary rounded-full transition duration-700 group-hover:bg-secondary group-hover:text-white">
              02
            </h4>
            <div className="flex flex-col gap-2">
              <h4 className="text-darkSecondary text-xl sm:text-2xl font-semibold">
                Manage Appointments Effortlessly
              </h4>
              <p className="text-[.8rem]">
                Receive and manage patient appointments in real-time through your provider dashboard.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4 group items-start bg-white rounded-xl shadow-xl py-6 px-4">
            <h4 className="p-2 text-lg bg-white shadow-xl text-darkSecondary rounded-full transition duration-700 group-hover:bg-secondary group-hover:text-white">
              03
            </h4>
            <div className="flex flex-col gap-2">
              <h4 className="text-darkSecondary text-xl sm:text-2xl font-semibold">
                Upload Your Lab Tests
              </h4>
              <p className="text-[.8rem]">
                Upload your lab tests and services your healthcare provides to enable patients book appointments and lab tests easily.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex gap-4 group items-start bg-white rounded-xl shadow-xl py-6 px-4">
            <h4 className="p-2 text-lg bg-white shadow-xl text-darkSecondary rounded-full transition duration-700 group-hover:bg-secondary group-hover:text-white">
              04
            </h4>
            <div className="flex flex-col gap-2">
              <h4 className="text-darkSecondary text-xl sm:text-2xl font-semibold">
                Send Test Results Securely
              </h4>
              <p className="text-[.8rem]">
                Upload and share test results directly with patients, ensuring a seamless healthcare experience.
              </p>
            </div>
          </div>
        </div>
      </section>





    </>



  );
};

export default AboutSection;

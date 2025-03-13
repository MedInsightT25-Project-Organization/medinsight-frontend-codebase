import React from "react";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import footerLogo from '../assets/medinsight-white-logo.png'

const Footer = () => {
  return (
    <footer
      className="bg-darkPrimary w-full mt-auto"> {/* Newsletter Section */}
      <div
        className="w-[90%] md:w-[80%] mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6 lg:gap-16 -translate-y-12"
      >
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-primary text-xl sm:text-2xl font-semibold mb-2">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Sign up today and take control of your health with just a few taps.
            Your well-being, our priority!
          </p>
        </div>

        {/* Input & Button */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full lg:w-[500px] max-w-full px-4 py-3 border border-secondary rounded-lg text-gray-600 outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
          />
          <button
            className="flex items-center justify-center w-full px-6 py-4 bg-primary text-white rounded-lg text-sm font-medium hover:bg-secondary transition-all duration-300"
          >
            Subscribe <IoIosSend className="ml-2 text-base" />
          </button>
        </div>
      </div>


      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-16 px-10 gap-8">
        {/* Logo & Socials */}
        <div
          className="" >

          <img src={footerLogo} alt="Medinsight logo" className="max-w-[10rem]" />


          <div className="flex items-center justify-start gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-white bg-transparent rounded-full text-white text-lg transition-all duration-500 hover:bg-white hover:border-secondary hover:text-secondary hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-white bg-transparent rounded-full text-white text-lg transition-all duration-500 hover:bg-white hover:border-secondary hover:text-secondary hover:scale-110"
            >
              <RiInstagramFill />
            </a>

            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-white bg-transparent rounded-full text-white text-lg transition-all duration-500 hover:bg-white hover:border-secondary hover:text-secondary hover:scale-110"
            >
              <FaPinterestP />
            </a>
          </div>


        </div>

        {/* Explore Section */}
        <div
          className="space-y-4"

        >
          <h3 className="font-workSans text-xl text-white">Explore</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-100 hover:text-gray-100 transition-all duration-300">
              <IoIosArrowRoundForward />

              <Link className="text-gray-100 text-xs">Lab Tests</Link>
            </li>
            <li className="flex items-center gap-2 text-gray-100 hover:text-gray-100 transition-all duration-300">
              <IoIosArrowRoundForward />

              <Link className="text-gray-100 text-xs">Hospitals</Link>
            </li>
            <li className="flex items-center gap-2 text-gray-100 hover:text-gray-100 transition-all duration-300">
              <IoIosArrowRoundForward />

              <Link className="text-gray-100 text-xs">Cart</Link>
            </li>
            <li className="flex items-center gap-2 text-gray-100 hover:text-gray-100 transition-all duration-300">
              <IoIosArrowRoundForward />

              <Link className="text-gray-100 text-xs">Book Appointment</Link>
            </li>

          </ul>
        </div>

        {/* Quick Links */}

        <div
          className="space-y-4"

        >
          <h3 className="font-workSans text-xl text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-100 hover:text-gray-100 transition-all duration-300">
              <IoIosArrowRoundForward />

              <Link className="text-gray-100 text-xs">For Patients</Link>
            </li>
            <li className="flex items-center gap-2 text-gray-100 hover:text-gray-100 transition-all duration-300">
              <IoIosArrowRoundForward />

              <Link className="text-gray-100 text-xs">For Healthcare Providers</Link>
            </li>
          </ul>
        </div>
        {/* Contact Section */}
        <div
          className="space-y-4">
          <h3 className="font-lobster text-xl text-white">Get In Touch</h3>
          <div className="space-y-2">

            <div className="flex items-center gap-2 text-gray-100">
              <MdEmail className="text-xl" />
              <p className="text-sm ">support@medinsight-t25.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className="text-center py-4 text-white text-xs border-gray-300 border-t-[.5px]"

      >
        &copy; {new Date().getFullYear()} Developed by MedInsight-T25 | All Rights Reserved.
      </div>
    </footer >
  );
};

export default Footer;

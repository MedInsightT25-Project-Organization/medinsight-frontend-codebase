import React, { useContext, useState } from 'react'
import heroImage from '../assets/heroImage.png'
import OtherHeaderSection from '../Components/OtherHeaderSection/OtherHeaderSection'
import { labTestsData } from '../assets/data'
import { MdShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { PiFunnelSimple } from 'react-icons/pi';
import { FaAngleRight } from "react-icons/fa6";
import { LabTestContext } from '../Context Api/LabTestContext'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

//
const LabTests = () => {
  // To display modal
  const { categories, addToCart } = useContext(LabTestContext)
  const [showModal, setShowModal] = useState(false)
  const [filterItems, setFilterItems] = useState(labTestsData)
  const [activeCategory, setActiveCategory] = useState("All")


  // Function to filter lab test by category
  const filterCategory = (category) => {
    let filtered = category === "All" ? labTestsData : labTestsData.filter((data) => data.category === category)

    setFilterItems(filtered)
    setActiveCategory(category)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  // 
  const navigate = useNavigate()

  return (
    <>
      <OtherHeaderSection title="Lab Tests" backgroundImage={heroImage} subTitle="Book your lab tests with ease! Select from a wide range of medical test." />

      <section className='container'>

        {/* Filter section */}


        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5  gap-5">
          {/* Filter Section */}

          {/* Desktop category section */}
          <div className="bg-white rounded-xl p-3 md:p-6 soft-shadow md:col-span-1 ">
            <div className="hidden md:block">
              <h3 className="text-center text-xl text-darkPrimary">Categories</h3>
              <span className="w-[100%] h-[.1rem] bg-primary block mx-auto my-2"></span>
              <ul className='flex flex-col mt-10 gap-4'>
                {categories.map((data, index) => (
                  <li onClick={() => filterCategory(data)} key={index} className="list-none text-[0.75rem] p-2 hover:bg-primary hover:text-white rounded-md transition">{data}</li>
                ))}
              </ul>
            </div>

            {/* Category modal for mobile screen */}

            <div className="flex items-center justify-between md:hidden mb-4 px-2">
              <h3 className="text-[1.3rem] font-semibold text-darkPrimary">Select Category</h3>
              <div onClick={toggleModal} className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-300 text-primary bg-opacity-20 shadow-xl duration-500 transition-all hover:bg-primary hover:text-white">
                <PiFunnelSimple className="text-2xl" />
              </div>
            </div>
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-40">
              <div className="bg-accent w-11/12 max-w-sm rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-6 text-center">Select Category</h3>
                <ul className="max-h-60 overflow-y-auto text-sm">
                  {categories.map((data, index) => (
                    <li onClick={() => { filterCategory(data); setShowModal(false) }} key={index} className="list-none text-[0.75rem] p-2 hover:bg-primary hover:text-white rounded-md transition">{data}</li>
                  ))}

                </ul>
                <button
                  className="w-full mt-4 bg-primary text-sm text-white py-3 rounded-md hover:bg-darkPrimary transition"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Lab tests section */}
          <div className="bg-white rounded-xl p-6 soft-shadow md:col-span-3 xl:col-span-4">
            {/* Hospital Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {/* Single Hospital card */}
              {filterItems.slice(0, 8).map((data) => (
                <div
                  // onClick={() => navigate(`/lab-tests/${data.id}`)}
                  key={data.id}

                  className="group bg-white card-shadow p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer relative"
                >
                  {/* Icons (Hidden by default, visible on hover) */}
                  <div className="absolute right-2 flex flex-col gap-3 p-2 bg-green-300 bg-opacity-15 shadow-xl rounded-xl text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 transform -translate-y-1/2">


                    <IoEyeOutline onClick={() => navigate(`/lab-tests/${data.id}`)} className="hover:text-primary transition-all duration-300 cursor-pointer" />

                    {/*  */}
                    <MdShoppingCart onClick={() => addToCart(data.id)} className="hover:text-primary transition-all duration-300 cursor-pointer" />
                    {/*  */}
                    <CiHeart className="hover:text-primary transition-all duration-300 cursor-pointer" />
                  </div>

                  {/* Card Content */}
                  <h4 className="text-base md:text-lg font-semibold text-primary leading-tight">{data.name}</h4>
                  <span className="text-[0.7rem] text-gray-600 border-l-4 border-primary pl-2 my-2 flex items-center justify-start"><span className='text-darkPrimary'>Category</span> <FaAngleRight className='text-primary mr-1' /> {data.category}</span>
                  <p className="text-[0.65rem] sm:text-xs text-gray-700 leading-relaxed mt-2 pr-6">{data.description.slice(0, 70)}...</p>

                  <h5 className="mt-3 text-lg font-semibold text-secondary">₦{data.price}</h5>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section >
      <Footer />

    </>
  )
}

export default LabTests
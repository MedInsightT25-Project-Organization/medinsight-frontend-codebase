import React, { useContext } from 'react'
import { LabTestContext, useLabTest } from '../Context Api/LabTestContext'
import { labTestsData } from '../assets/data'
import { CiHeart } from 'react-icons/ci'
import { FaAngleRight } from 'react-icons/fa6'
import { IoEyeOutline } from 'react-icons/io5'
import { MdShoppingCart } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import { FiMinus } from 'react-icons/fi'

const CartItem = () => {
    // const { id, name, description, category, price } = props.data
    const { cartItems, addToCart, removeFromCart } = useLabTest()

    const cartTests = labTestsData.filter((test) => cartItems[test.id] > 0)

    return (
        <div className='py-2'>
            {cartTests.length === 0 ? (
                <p className='text-gray-700'>Your cart is empty!</p>
            ) : (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xl:grid-cols-4 gap-8 my-10">

                    {cartTests.map((test) => (
                        <div
                            // onClick={() => navigate(`/lab-tests/${data.id}`)}
                            key={test.id}

                            className="group bg-white card-shadow p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer relative"
                        >


                            {/* Card Content */}
                            <h4 className="text-base md:text-lg font-semibold text-primary leading-tight">{test.name}</h4>
                            <span className="text-[0.7rem] text-gray-600 border-l-4 border-primary pl-2 my-2 flex items-center justify-start"><span className='text-darkPrimary'>Category</span> <FaAngleRight className='text-primary mr-1' /> {test.category}</span>
                            <p className="text-[0.65rem] sm:text-xs text-gray-700 leading-relaxed mt-2 pr-6">{test.description.slice(0, 70)}...</p>

                            <div className='flex justify-between items-center'>
                                <h5 className="mt-3 text-md font-semibold text-secondary">₦{test.price}</h5>

                                {/*  */}
                                <div className="flex items-center justify-center gap-4 border border-gray-300 rounded-md p-2 w-fit">
                                    <FaPlus onClick={() => addToCart(test.id)} className="bg-darkSecondary text-white h-7 w-7 p-2 rounded-lg cursor-pointer hover:bg-secondary transition" />
                                    <span className="text-sm select-none">{cartItems[test.id]}</span>
                                    <FiMinus onClick={() => removeFromCart(test.id)} className="bg-darkSecondary text-white h-7 w-7 p-2 rounded-lg cursor-pointer hover:bg-secondary transition" />
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            )
            }
        </div>
    )
}

export default CartItem
import React, { useContext } from 'react'
import { LabTestContext, useLabTest } from '../../../Context Api/LabTestContext'
import { labTestsData } from "../../../assets/data";
import CartItem from '../../../Components/CartItem';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const DashboardCart = () => {

  const { getTotalCartAmount } = useLabTest()
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <>
      <section className="">
        <h4 className="text-primary mt-2">Cart</h4>

        {/* Scrollable CartItem Container */}
        <div className=" max-h-[400px] overflow-y-auto pr-2">
          <CartItem />
        </div>

        {/* Subtotal Card */}
        <div className="bg-primary bg-opacity-5 rounded-lg mt-4 p-4">
          <h4 className="text-sm text-primary">SubTotal</h4>
          <hr className="my-2" />
          {totalAmount > 0 ? (
            <div className='flex items-center gap-5'>
              <p className="text-sm text-gray-700">
                Subtotal: <span className='ml-2 font-medium'>₦{totalAmount}</span>

              </p>
              <button className="btn btn-primary mt-2 flex items-center gap-2">
                Checkout <BsArrowRight />
              </button>

            </div>

          ) : (
            <h4 className="text-sm font-light">Subtotal: empty!</h4>
          )}
        </div>

        {/* Return Button */}
        <button onClick={() => navigate('/lab-tests')} className="btn bg-gray-100 hover:bg-primary hover:text-white mt-4 flex items-center gap-2">
          Return to Lab Tests <BsArrowRight />
        </button>
      </section >
    </>
  )
}

export default DashboardCart

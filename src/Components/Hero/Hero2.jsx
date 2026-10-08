import { fa0, fa2, faFaceAngry, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import burgeri from "../../images/burger.png"
import boy from "../../images/delivery-boy.png"

export function Hero2() {
  return (
    <div className="p- overflow-hidden">
      <div className="max-w-[1170px] mx-auto h-screen flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-[40px] text-center sm:text-left">
          
          {/* Column 1 */}
          <div className="space-y-6 flex flex-col items-center sm:items-start">
            <h1 className="text-[35px] sm:text-[50px] font-bold leading-[50px] sm:leading-[70px]">
              Enjoy Your Delicious <span className="text-yellow-400">Food</span>
            </h1>
            <p className="text-gray-700">
              We will fill your tummy with delicious<br /> food with fast delivery
            </p>

            <div className="flex justify-center sm:justify-start space-x-4">
              <button className="px-2 py-1 text-[12px] bg-yellow-400 text-white rounded-lg font-semibold">
                Order now
              </button>

              <div className='flex gap-2'>
                <div className='h-[30px] w-[30px] bg-yellow-200 rounded-lg flex justify-center items-center'>
                <FontAwesomeIcon icon={faXmark}/>
                </div>
                 <div className='h-[30px] w-[30px] bg-yellow-200 rounded-lg flex justify-center items-center'>
                      <FontAwesomeIcon icon={faFacebook}/>
                </div>
                 <div className='h-[30px] w-[30px] bg-yellow-200 rounded-lg flex justify-center items-center'>
                   <FontAwesomeIcon icon={faInstagram}/>
                </div>
                 <div className='h-[30px] w-[30px] bg-yellow-200 rounded-lg flex justify-center items-center'>
                <FontAwesomeIcon icon={faTwitter}/>
                </div>
         
          
                
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex justify-center">
            <img src={boy} alt="Delivery Boy" className="w-[300px] sm:w-[450px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

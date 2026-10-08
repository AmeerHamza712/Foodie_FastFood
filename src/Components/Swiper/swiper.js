import React from 'react'
import user1 from "../../images/deliveryBoy.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStreetView } from '@fortawesome/free-solid-svg-icons'
import { MySlider } from '../Slider/slider'
export  function Testimonial() {
  
  return (
    <div className='p-12'>
     <div className='max-w-[1170px] mx-auto place-items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[50px] '>
        {/* Column-1 */}
        <div className='flex justify-center'>
          <img src={user1} className='w-[300px] sm:w-[400px]'/>
        </div>
      {/* {Column-2} */}
      <div className='text-left space-y-4'>
        <h1 className='text-yellow-500  font-[500] text-[25px]'>Over Review</h1>
        <h2 className='text-[40px] font-bold'>What They Say?</h2>
        <MySlider/>
      </div>
      </div>
     </div>
    </div>
  )
}

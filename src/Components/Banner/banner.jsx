import React from 'react'
import phone from "../../images/mobile-app.png"
export function Banner() {
  return (
    <div className='p-6 overflow-hidden '>
      <div className='max-w-[1170px]  place-items-center rounded-[30px] mx-auto bg-yellow-200/80'>
 
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[10px] items-center justify-center'>
           <div className='flex justify-center'>
              <img src={phone} className='w-[250px] h-[300px]' alt="" />
           </div>
           <div className=' w-[250px] sm:w-[320px] text-left space-y-2'>
             <h1 className='text-yellow-400 font-bold'>Our Application
             </h1>
             <h2 className='text-[25px] sm:text-[40px] font-[500] leading-[50px]'>Simple Way to Order Your Food</h2>
             <p>Discover food wherever and whenever and get your food deliver quickly</p>
             <button className='px-2 py-[5px] bg-yellow-400 text-white rounded-lg'>Get the App</button>
           </div>
        </div>
        </div>
      </div>
    
  )
}

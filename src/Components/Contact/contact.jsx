import React from 'react'

export  function Contact() {
  return (
    <div className='p-6 mt-[50px] overflow-hidden' >
      <div className='max-w-[1170px] mx-auto space-y-2 '>
              <h1 className='text-yellow-500  text-[20px] font-[400]'>Our Suscribe</h1>
              <h2 className='text-[35px] font-bold'>Subscribe To Our Newsletter</h2>
              <p className='text-[12px]'>We recommend you to subscribe our newpaper drop you email<br></br> below to get daily update about us</p>
              <form action="" className='w-[350px] sm:w-[400px] mx-auto p-1 flex rounded-[15px] shadow-[1px_1px_4px_black]'>
                <input type="email" name="email" className=' flex-grow px-2 py-2 focus:outline-none' placeholder='Enter your email address'/>
                <input type="submit" value="Subscribe"
                className='bg-yellow-500 px-2  rounded-[10px]' 
                />
              </form>
      </div>
    </div>
  )
}

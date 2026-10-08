import React from 'react'

export function ResponsiveMenu({ state,change }) {
  return (
    <>
      {state ? (
        <div className='relative   overflow-hidden'>
          <div className='absolute max-w-[1170px] mx-auto left-[25px]  transition-all duration-1000  '>
            <div className='w-[300px] rounded-md bg-white border-[2px] border-[green] relative px-4'>
              <ul className='space-y-4'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Contacts</a></li>
              </ul>
              <span className='absolute right-[20px] text-[30px] top-[-10px] cursor-pointer'  onClick={()=>change(false)}>&times;</span>
    
            </div>
          </div>
        </div>
      ) : (
       <div className='relative '>
          <div className='absolute w-full mx-auto h-screen left-[-500px] transition-all duration-1000'>
            <div className='w-[300px] rounded-md bg-white relative px-4'>
              <ul className='space-y-4'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Contacts</a></li>
              </ul>
              <span className='absolute right-[20px] text-[30px] top-[-10px] '  onClick={()=>change(false)}>&times;</span>
    
            </div>
          </div>
        </div>
      )}
    </>
  )
}

import React from 'react'
import Order from "../../images/easy-to-order.png"
import Delivery from "../../images/fast-delivery.png"
import Quality from "../../images/best-quality.png"
export function Service() {
  let services=[
      {
        img: Order,
        heading:"Easy to Order",
        description:"You only need a few steps in ordering fool",

      },
     
         {
        img: Delivery,
        heading:"Fast Delivery",
        description:"Delivery that is alway on time even faster",

      },
          {
        img: Quality,
        heading:"Best Quality",
        description:"Not only fast for us in quality is also number one",

      },
  ]
  return (
    <div className='p-6 overflow-hidden'>
      <div className='max-w-[1170px] mx-auto items-center justify-center gap-[30px'>
        <h1 className='text-[25px] font-bold pb-[20px]'>Our Services</h1>
       <div className="grid grid-cols-1 sm:grid-cols-3  space-y-4">
        {
          services.map((v,i)=>{
            return(
              <div className='flex flex-col items-center justify-center text-center'>
                <img src={v.img} alt="" className='' />
                <h1 className='font-bold text-[25px]'>{v.heading}</h1>
                 <p className='text-[14px]'>{v.description}</p>
                </div>
            )
          })
        }

       </div>
      </div>
    </div>
  )
}

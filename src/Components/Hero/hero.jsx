import React from 'react'

export  function Hero({store,setStore,count,setCount}) {
  let dishes=[
    {
      dish:"White Krahi",
      price:"45",
      recipie:"Pakistani"
    },
        {
      dish:"Biryani",
      price:57,
      recipie:"UK"
    },
        {
      dish:"Korma",
      price:56,
      recipie:"England"
    },
        {
      dish:"Kashmir",
      price:56,
      recipie:"Balochistan"
    },
  ]
  let addItemtoCart=(dish,price,count,setCount)=>{
         count++;
         setCount(count)
         setStore([...store,{dish:dish,price:price}]);
        
  }
  return (
    <div className='overflow-hidden'>
        <div className='max-w-[1170px] mx-auto '>
             <div className='grid grid-cols-3 gap-2'>
                       {
                        dishes.map((v,i)=>{
                          return(
                            <div className='bg-white shadow-[0px_10px_15px_red] p-6 h-[250px] space-y-2'>
                              <h1>{v.dish}</h1>
                              <h2>{v.price}</h2>
                              <h3>{v.recipie}</h3>
                              <button className='bg-green-500 px-4 py-2 rounded-lg'
                               onClick={()=>addItemtoCart(v.dish,v.price,count,setCount)}>Add to Cart</button>
                            </div>
                          )
                        })
                       }
             </div>
        </div>
    </div>
  )
}

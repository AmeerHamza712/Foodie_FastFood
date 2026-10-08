import React from 'react';

export function Card({ cardState, changeCardState, store,setStore,count,setCount}) {
  let updateStore=(index)=>{
    let newstore=store.filter((item,i)=>i!=index);
    setStore(newstore)
  }
  let Inserting=(index)=>{
     let itemToAdd = store[index];  // get the object directly
     
  setStore([...store, {img:itemToAdd.img,name:itemToAdd.name,price:itemToAdd.price}])

  }
  return (
    <>
      {cardState && (
        <div className='overflow-hidden'>
          <div className="fixed right-0 top-0 w-[300px] sm:w-[400px] h-screen bg-yellow-300 p-4 z-10">
            <h1 className="font-bold text-[30px] pb-[20px]">Your Cart</h1>

            <ul className="flex flex-col gap-2">
              {store.map((v, i) => (
                <li key={i} className="flex justify-between font-bold ">
                  <div className='flex items-center justify-center gap-[10px]'>
                   <img src={v.img}  className="h-[35px] w-[35px] object-contain"  alt="" />
                   
     <span>{v.name}</span>
                  <span>${v.price}</span>
                  
             
                  </div>
                  {/* {Add item} */}
                   <div className='flex space-x-4'>
                      <div className='w-[25px] bg-black rounded-full text-white flex items-center justify-center text-[12px]' onClick={()=>updateStore(i)}  >-</div>
                      <span>{i+1}</span>
                      <div className='w-[25px] bg-black rounded-full text-white ' onClick={()=>Inserting(i)}>+</div>
                   </div>
                </li>
              ))}
            </ul>

            {/* Total Section */}
            <div className="mt-4 p-4 bg-red-500 text-white font-bold flex justify-between rounded">
              <span>Total:</span>
              <span>${store.reduce((sum, item) => sum + Number(item.price), 0)}</span>
            </div>
           
            {/* Close Button */}
            <span
              className="absolute right-[20px] top-0 text-[30px] cursor-pointer"
              onClick={() => changeCardState(false)}
            >
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
}

import React from 'react';
import burger from "../../images/burger.png";
import chickenRoll from "../../images/chicken-roll.png";
import lasgana from "../../images/lasagna.png";
import pizza from "../../images/pizza.png";

export function Menu({store,setStore,count,setCount}) {
  let updateStore=(img,name,price,index)=>{
    setStore([...store,{img:img,name:name,price:price,}])
    setCount(index)
     alert(count)
  }
  const Menues = [
    { img: burger, name: "Double Beef Burger", price: 34, buttonText: "Add to Cart" },
    { img: pizza, name: "Viggie Pizza", price: 54, buttonText: "Add to Cart" },
    { img: chickenRoll, name: "Chicken Roll", price: 74, buttonText: "Add to Cart" },
    { img: lasgana, name: "Chicken Lasgana", price: 64, buttonText: "Add to Cart" },
     { img: lasgana, name: "Chicken Lasgana", price: 64, buttonText: "Add to Cart" },
      { img: lasgana, name: "Chicken Lasgana", price: 64, buttonText: "Add to Cart" },
       { img: lasgana, name: "Chicken Lasgana", price: 64, buttonText: "Add to Cart" },
        { img: lasgana, name: "Chicken Lasgana", price: 64, buttonText: "Add to Cart" },
  ];

  return (
    <div className="p-6 overflow-hidden">
      <div className="max-w-[1170px] mx-auto flex flex-col items-center justify-center gap-[30px]">
        <h1 className="text-[25px] font-bold text-yellow-400 pt-6 leading-[10px]">Our Services</h1>
        <h1 className="text-[35px] font-bold pb-[20px]">The Most Popular</h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Menues.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-[280px] h-[350px] sm:w-[250px] text-center p-4 border-2 border-yellow-500 rounded-lg"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-[150px] w-[150px]  object-cover mb-4"
              />
              <h1 className="font-bold text-[20px] mb-2">{item.name}</h1>
              <p className="text-[16px] mb-4">${item.price}</p>
              <button className="bg-yellow-400 px-4 py-2 rounded-lg
              hover:bg-black active:bg-green-500
              text-white text-[16px] "
              onClick={()=>updateStore(item.img,item.name,item.price,i)}
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

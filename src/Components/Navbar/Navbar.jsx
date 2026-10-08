import { faBars, faLock, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ResponsiveMenu } from "./responsiveMenu";
import { Card } from "./Card";
import { Hero } from "../Hero/hero";

export function Navbar({store,setStore,count,setCount}) {
  const [state, change] = useState(false);
  let [cardState,changeCardState]=useState(false)

let Reverse=()=>{
  changeCardState(!cardState)
}
  const changeState = () => {
    change(!state);
  };

  return (
    <div className="p-2 overflow-hidden">
      <div className="max-w-[1170px] mx-auto flex items-center justify-between relative">
        <h1 className="text-yellow-500 text-2xl font-bold">Foodie</h1>

        <div className="hidden md:flex">
          <ul className="flex space-x-6 font-semibold">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-[20px]">
          <div className="relative">
            <FontAwesomeIcon icon={faLock} />
            <div className="w-[15px] absolute h-[15px] bg-yellow-400 rounded-full cursor-pointer
              text-[12px] flex items-center justify-center top-[12px] right-[-5px]" onClick={changeCardState}>{count}
            </div>
            <Card cardState={cardState} changeCardState={changeCardState} 
             store={store} setStore={setStore} count={count} setCount={setCount} />
         
          </div>


          <div className="hidden sm:flex bg-yellow-400 px-[10px] py-[6px] rounded-lg text-white">
            <button>
              Sign In <FontAwesomeIcon icon={faSignIn} />
            </button>
          </div>

          <div className="flex sm:hidden">
            <FontAwesomeIcon icon={faBars} onClick={changeState} />
          </div>
        </div>
      </div>

      {/* ✅ Pass both props here */}
      <ResponsiveMenu state={state} change={change} />
    </div>
  );
}

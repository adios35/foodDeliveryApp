import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHome, BiCart } from "react-icons/bi";

const BottomNav = () => {
  return (
    <ul className="fixed bottom-0 backdrop-blur-md bg-opacity-40 text-xl gap-14 text-gray-500 items-center bg-yellow-50 w-full justify-center left-2/4  -translate-x-2/4 p-3 rounded-t-full  flex ">
      <li>
        <AiOutlineHeart />
      </li>
      <li className="group relative">
        <span className="badge opacity-0 absolute -top-5 delay-200 text-gray-600 group-hover:opacity-100 text-xs  duration-200">
          Home
        </span>
        <button className="text-white active:scale-105 bg-mainRed rounded-full p-3 hover:opacity-80 shadow-lg shadow-mainRed/40  ">
          <BiHome />
        </button>
      </li>
      <li>
        <BiCart />
      </li>
    </ul>
  );
};

export default BottomNav;

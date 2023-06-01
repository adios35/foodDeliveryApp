import React from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className=" w-full pt-5  ">
      <ul className="flex  w-full sticky rounded-md z-10 justify-between p-2">
        <li className="">
          <button className="bg-orange-100 text-gray-600 rounded-xl p-2">
            <HiOutlineSquares2X2 size={30} />
          </button>
        </li>
        <li>
          <div className="profile  h-11 w-11 rounded-xl text-xl flex items-center justify-center text-gray-400 ">
            <FaUserAlt />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

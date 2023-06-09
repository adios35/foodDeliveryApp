import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
//@ts-ignore
import logo from "../../../assets/icon/logo.png";
// import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaUserAlt, FaSignInAlt, FaSignOutAlt, FaHome } from "react-icons/fa";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logged out");
  };

  return (
    <div className="w-full pt-5">
      <ul className="flex w-full sticky rounded-md z-10 justify-between p-2">
        <li>
          <button className="bg-orange-100 text-gray-600 rounded-xl p-2">
            {/* <HiOutlineSquares2X2 size={30} /> */}
            <Link to="/">
              <img src={logo} alt="logo" width={26} />
            </Link>
          </button>
        </li>
        <li>
          <button
            className="profile h-11 w-11 rounded-xl text-xl flex items-center justify-center text-gray-400"
            onClick={toggleSidebar}
          >
            <FaUserAlt />
          </button>
        </li>
      </ul>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            // animate={{bg:}}
            exit={{ opacity: 0 }}
            onClick={(e) => setSidebarOpen(false)}
            className="fixed  inset-0 z-20 flex justify-end bg-gray-400/70"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 200 }}
              exit={{ x: 1000 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white shadow-lg z-40 p-4 backdrop-blur-lg  transform py-10 "
            >
              <div className="flex items-center mb-4 ">
                <div className="profile h-10 w-10 rounded-full text-xl flex items-center justify-center text-gray-400">
                  <FaUserAlt />
                </div>
                <div className="ml-2">
                  <p className="text-gray-700 font-semibold">John Doe</p>
                  {/* <p className="text-gray-500 text-sm">john.doe@example.com</p> */}
                </div>
              </div>
              <hr />
              <ul className="space-y-2 my-3">
                <li>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setSidebarOpen(false);
                    }}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                    {/* @ts-ignore */}
                    <FaSignInAlt className="mr-2" />
                    <span>Login</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setSidebarOpen(false);
                    }}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                    {/* @ts-ignore */}
                    <FaSignOutAlt className="mr-2" />
                    <span>Logout</span>
                  </button>
                </li>
                <li>
                  {window.location.pathname != "/" && (
                    <button
                      onClick={() => {
                        navigate("/");
                        setSidebarOpen(false);
                      }}
                      className="flex  items-center text-gray-700 hover:text-gray-900"
                    >
                      {/* @ts-ignore */}
                      <FaHome className="mr-2" />
                      <span>Home</span>
                    </button>
                  )}
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;

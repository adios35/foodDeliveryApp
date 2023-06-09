import React from "react";
import { motion } from "framer-motion";
import CardContainer from "../cards/container";
//@ts-ignore
import hero from "../../assets/products/hero.png";
import ProductInfo from "../../pages/productInfo";

const Home = () => {
  return (
    <motion.div
      className="min-h-screen  mt-10  text-gray-600  space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero p-4 shadow-2xl shadow-gray-300 overflow-hidden bg-yellowBg w-full gap-4 items-center mx-auto h-36 rounded-3xl flex">
        <div className="left space-y-2">
          <h1 className="text-xl leading-6 font-bold text-bold">
            The Fastest in Delivery <span className="text-mainRed">Food</span>
          </h1>
          <button className="btn shadow-lg shadow-mainRed/40 hover:bg-opacity-80 text-white px-2 py-[3px] rounded-full bg-mainRed  ">
            order now
          </button>
        </div>
        <img
          src={hero}
          alt=""
          className="heroImg w-2/4 scale-[1.4] translate-y-8"
        />
      </div>
      <motion.h1
        className="text-xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Products
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <CardContainer />
      </motion.div>
    </motion.div>
  );
};

export default Home;

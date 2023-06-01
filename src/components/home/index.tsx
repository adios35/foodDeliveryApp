import React from "react";
import CardContainer from "../cards/container";
//@ts-ignore
import hero from "../../assets/products/hero.png";
import ProductInfo from "../../pages/productInfo";

const Home = () => {
  return (
    <div className="min-h-screen  mt-10  text-gray-600  space-y-6">
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
      <h1 className="text-xl font-semibold">Products</h1>
      <CardContainer />
    </div>
  );
};

export default Home;

// Card.js
import React from "react";
import { FoodProduct } from "../types/productTypes";

interface props {
  id?: number | string;
  img: any;
  title: string;
  desc: string;
  price: number;
  selectedProduct: FoodProduct | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<FoodProduct | null>>;
}
const Card = ({ img, title, desc, price, setSelectedProduct, id }: props) => {
  function handleModal() {
    setSelectedProduct({ desc, img, price, title });
  }
  return (
    <div
      key={id}
      onClick={handleModal}
      className="card text-center space-y-[4px] overflow-hidden cursor-pointer h-[200px]  w-[250px]  rounded-3xl  shadow-xl   border-gray-100"
    >
      {/* Render the card content based on the data */}
      <div className="imageWrapper h-[45%] w-full overflow-hidden">
        <img
          src={img}
          alt=""
          className="mb-[4px] hover:scale-90 transition-all duration-200  w-full object-contain"
        />
      </div>
      <div className="desc p-3">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 text-[14px]">{desc}</p>
        <span className="block font-semibold text-sm">-Rp {price}</span>
      </div>
    </div>
  );
};

export default Card;

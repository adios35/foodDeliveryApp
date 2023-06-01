import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  selectedProduct?: FoodProduct;
  setSelectedProduct?: React.Dispatch<React.SetStateAction<FoodProduct | null>>;
}

interface FoodProduct {
  id?: number;
  img: any;
  title: string;
  desc: string;
  price: number;
}

const ProductInfo = ({ selectedProduct, setSelectedProduct }: Props) => {
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedProduct && setSelectedProduct(null);
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProduct && setSelectedProduct(null);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [setSelectedProduct]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen bg-black"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={handleContainerClick}
    >
      <motion.div
        exit={{ y: "100%" }}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        className="modal-content bg-white  rounded-t-[10%] absolute -bottom-20 w-[80%] h-full  shadow-lg p-6 gap-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedProduct?.img}
          alt=""
          className="productImage bg-red h-36 w-56 mx-auto  rounded-3xl mb-4"
        />
        <div className="info w-full space-y-5">
          <div className="bg-mainRed px-3 py-[4px] items-center rounded-full w-20 flex justify-between   text-white  mx-auto text-lg ">
            <button className="decrement">-</button>
            <button className="total">1</button>
            <button className="increment">+</button>
          </div>
          <div className="product-desc ">
            <div className="info  flex justify-between">
              <div className="title font-bold text-lg">
                {selectedProduct?.title}
              </div>
              <div className="price font-bold text-lg">
                <span className="text-sm">-rp </span>
                {selectedProduct?.price}
              </div>
            </div>
            <div className="desc text-sm  text-gray-500 mt-3">
              {selectedProduct?.desc}
            </div>
          </div>
          <button
            onClick={() => setSelectedProduct && setSelectedProduct(null)}
            className="bg-mainRed p-3 rounded-full mt-5 text-white w-full mx-auto text-lg "
          >
            Add to cart
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductInfo;

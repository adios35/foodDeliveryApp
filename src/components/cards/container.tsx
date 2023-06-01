import React from "react";
import { AnimatePresence } from "framer-motion";
//@ts-ignore
import kentang from "../../assets/products/kentang-spiral.png";
//@ts-ignore
import telur from "../../assets/products/telur-gulung.png";
import Card from ".";
import ProductInfo from "../../pages/productInfo";

interface FoodProduct {
  id?: number;
  img: any;
  title: string;
  desc: string;
  price: number;
}

const foodProducts: FoodProduct[] = [
  {
    price: 5000,
    id: 1,
    img: kentang,
    title: "Kentang Spiral",
    desc: "A mouthwatering pizza",
  },
  {
    price: 1000,
    id: 2,
    img: telur,
    title: "Telur Gulung",
    desc: "A creamy and flavorful pasta ",
  },
];

// Usage:
const CardContainer = () => {
  const [selectedProduct, setSelectedProduct] =
    React.useState<null | FoodProduct>({} as FoodProduct);

  return (
    <div className="flex gap-5">
      {foodProducts.map((product: FoodProduct) => (
        <Card
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          key={product.id}
          img={product.img}
          title={product.title}
          desc={product.desc}
          price={product.price}
        />
      ))}
      <AnimatePresence>
        {selectedProduct?.title && (
          <ProductInfo
            setSelectedProduct={setSelectedProduct}
            selectedProduct={selectedProduct}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default CardContainer;

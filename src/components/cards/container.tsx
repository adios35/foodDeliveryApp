import React from "react";
import { getDocs } from "firebase/firestore";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
//@ts-ignore
import kentang from "../../assets/products/kentang-spiral.png";
//@ts-ignore
import telur from "../../assets/products/telur-gulung.png";
import Card from ".";
import ProductInfo from "../../pages/productInfo";
import { productsCollection } from "../../config/firebase";
import { FoodProduct } from "../types/productTypes";

const foodProducts: FoodProduct[] = [
  {
    price: 5000,
    id: 1,
    img: kentang,
    title: "Kentang Spiral",
    desc: "A mouthwatering kentang spiral",
  },
  {
    price: 1000,
    id: 2,
    img: telur,
    title: "Telur Gulung",
    desc: "telur gulung tasty",
  },
];

// Usage:
const CardContainer = () => {
  const [selectedProduct, setSelectedProduct] =
    React.useState<null | FoodProduct>({} as FoodProduct);
  const [products, setProducts] = React.useState<null | FoodProduct[]>(null);
  React.useEffect(() => {
    // effect code
    getDocs(productsCollection)
      .then((res) => {
        const data = res.docs.map((data) => {
          return { ...data.data(), id: data.id };
        }) as FoodProduct[];
        setProducts(data);
      })
      .catch((err) => console.log(err));

    return () => {
      // cleanup code
    };
  }, []);

  return (
    <div className="flex gap-5">
      {products ? (
        products.map((product: FoodProduct) => (
          <Card
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            key={product.id}
            img={product.img}
            title={product.title}
            desc={product.desc}
            price={product.price}
          />
        ))
      ) : (
        <h1 className="text-xl">Loading...</h1>
      )}
      <AnimatePresence>
        {selectedProduct?.title && (
          <ProductInfo
            key={selectedProduct.id}
            setSelectedProduct={setSelectedProduct}
            selectedProduct={selectedProduct}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default CardContainer;

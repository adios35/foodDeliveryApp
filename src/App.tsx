import React from "react";
import Home from "./components/home";
import BottomNav from "./components/navigation/bottomBar";
import NavBar from "./components/navigation/navBar";
import ProductInfo from "./pages/productInfo";

const App = () => {
  return (
    <div className="p-2 bg-yellow-50  px-[12%]">
      <NavBar />
      <Home />
      <BottomNav />
    </div>
  );
};

export default App;

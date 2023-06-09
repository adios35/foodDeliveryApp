import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import BottomNav from "./components/navigation/bottomBar";
import NavBar from "./components/navigation/navBar";
import ProductInfo from "./pages/productInfo";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminDashboard from "./pages/admin";
import ProductUploadPage from "./pages/product/upload";

const App = () => {
  return (
    <div className="p-2 bg-yellow-50  px-[8%]">
      <NavBar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="upload" element={<ProductUploadPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <BottomNav />
      </AnimatePresence>
    </div>
  );
};

export default App;

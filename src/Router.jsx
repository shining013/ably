import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import JewelryPage from "./pages/JewelryPage";
import CartPage from "./pages/CartPage";
import ProductInfoPage from "./pages/ProductInfoPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/jewelry" element={<JewelryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-info" element={<ProductInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import JewelryPage from "./pages/JewelryPage";
import CartPage from "./pages/CartPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import SearchPage from "./pages/SearchPage";
import SubCategoryPage from "./pages/SubCategoryPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:categoryId" element={<JewelryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/subcategory" element={<SubCategoryPage />} />
        <Route path="/product" element={<ProductInfoPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

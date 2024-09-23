import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import JewelryPage from "./pages/JewelryPage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import ScrollToTop from "./components/common/ScrollToTop";
import ProductDetailPage from "./pages/ProductDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:categoryId" element={<JewelryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/subcategory/:subcategoryId"
          element={<SubCategoryPage />}
        />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

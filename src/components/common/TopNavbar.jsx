import React from "react";
import BackButton from "src/components/common/BackButton";
import cartIcon from "src/assets/icons/cart.svg";
import homeIcon from "src/assets/icons/home.svg";
import searchIcon from "src/assets/icons/search.svg";
import { useLocation } from "react-router-dom";

function TopNavbar({ title }) {
  const location = useLocation();

  return (
    <div className="w-full h-11 relative flex justify-center items-center bg-white">
      <div className="absolute left-2 flex justify-center items-center">
        <BackButton />
      </div>
      <p className="py-3 text-lg font-semibold leading-6 .tracking-tighter">
        {title}
      </p>
      <div className="absolute right-2 flex gap-3">
        <img src={homeIcon} alt="home-icon" className="w-6" />
        {location.pathname.includes("category") && (
          <img src={searchIcon} alt="search-icon" className="w-6" />
        )}
        <img src={cartIcon} alt="cart-icon" className="w-6" />
      </div>
    </div>
  );
}

export default TopNavbar;

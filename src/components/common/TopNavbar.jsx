import React from "react";
import BackButton from "src/components/common/BackButton";
import cartIcon from "src/assets/icons/cart.svg";
import homeIcon from "src/assets/icons/home.svg";
import searchIcon from "src/assets/icons/search.svg";

const TopNavbar = ({ title }) => {
  return (
    <div
      className="flex flex-row justify-between items-center fixed bg-white w-full py-2"
      style={{ top: "60px", maxWidth: "600px" }}
    >
      <BackButton />
      <div className="text-h5">{title}</div>
      <div className="flex flex-row gap-3 px-1">
        <img src={homeIcon} alt="home-icon" />
        <img src={searchIcon} alt="search-icon" />
        <img src={cartIcon} alt="cart-icon" />
      </div>
    </div>
  );
};

export default TopNavbar;

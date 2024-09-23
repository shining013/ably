import React, { useEffect } from "react";
import BackButton from "src/components/common/BackButton";
import cartIcon from "src/assets/icons/cart.svg";
import homeIcon from "src/assets/icons/home.svg";
import searchIcon from "src/assets/icons/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function TopNavbar({ title }) {
  const location = useLocation();
  const navigation = useNavigate();
  const cartItem = useSelector((s) => s.cartItems);

  useEffect(() => {
    console.log(cartItem.length);
  }, [cartItem]);

  return (
    <div className="w-full p-2 mb-1 h-12 relative flex justify-center items-center bg-white">
      <div className="absolute left-2 flex justify-center items-center">
        <BackButton />
      </div>
      <p className="py-3 text-lg font-semibold leading-6 .tracking-tighter">
        {title}
      </p>
      <div className="absolute h-8 items-center right-2 flex gap-3">
        <img
          src={homeIcon}
          alt="home-icon"
          className="w-6 h-6"
          onClick={() => navigation("/")}
        />
        {location.pathname.includes("category") && (
          <img src={searchIcon} alt="search-icon" className="w-6" />
        )}
        <div className="w-8" onClick={() => navigation("/cart")}>
          <img
            src={cartIcon}
            alt="cart-icon"
            className="w-6 h-6"
            onClick={() => navigation("/cart")}
          />
          {cartItem.length === 0 ? null : (
            <div
              className="absolute w-4 h-4 align-middle bg-pink-30 rounded-lg"
              style={{ top: "0px", right: "2px" }}
            >
              <p
                className="text-center text-white "
                style={{ fontSize: "9px" }}
              >
                {cartItem.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;

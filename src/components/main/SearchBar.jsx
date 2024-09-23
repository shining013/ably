import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigation = useNavigate();
  const cartItem = useSelector((s) => s.cartItems);
  return (
    <div
      className="flex w-full justify-center items-center bg-white relative"
      style={{ paddingTop: "2px" }}
    >
      <div
        className="flex flex-auto w-full items-center justify-center"
        onClick={() => navigation("/search")}
      >
        <div
          className="flex flex-grow flex-shrink rounded-lg items-center gap-1 cursor-pointer bg-gray-20"
          style={{
            marginTop: "10px",
            marginRight: "0px",
            marginBottom: "10px",
            marginLeft: "16px",
            padding: "8px 10px",
            flexBasis: "0%",
            borderRadius: "8px",
          }}
        >
          <img
            src="/images/SearchBar1.svg"
            style={{ width: "20px", height: "20px" }}
            alt=""
          />
          <p
            style={{
              fontWeight: "600",
              letterSpacing: "-0.4px",
              lineHeight: "18px",
              fontSize: "14px",
              color: "gray",
            }}
          >
            하나만 사도 무료배송
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ width: "36px", height: "44px" }}
        onClick={() => navigation("/cart")}
      >
        <img
          src="/images/SearchBar2.svg"
          style={{ width: "24px", height: "24px", fill: "none" }}
          alt=""
        ></img>
        {cartItem.length === 0 ? null : (
          <div
            className="absolute w-4 h-4 flex items-center justify-center bg-pink-30 rounded-lg"
            style={{ top: "14px", right: "0px" }}
          >
            <p className="text-center text-white " style={{ fontSize: "9px" }}>
              {cartItem.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

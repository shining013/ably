import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function CartTopBar() {
  return (
    <div
      className="w-full h-11 absolute flex justify-center items-center"
      style={{ top: "60px", "max-width": "600px" }}
    >
      <div className="w-11 h-full p-3 absolute top-0 left-0 flex justify-center items-center">
        <FontAwesomeIcon icon={faChevronLeft} className="h-full" />
      </div>
      <p className="py-3 text-lg font-semibold leading-6 .tracking-tighter">
        장바구니
      </p>
      <div className="h-full absolute top-0 right-0 flex">
        <div className="w-9 px-1">
          <img src="./images/TopbarHome.svg" className="w-6 h-full"></img>
        </div>
        <div className="w-9 px-1">
          <img src="./images/bottomNav4.svg" className="w-6 h-full"></img>
        </div>
      </div>
    </div>
  );
}

export default CartTopBar;

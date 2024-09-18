import React from "react";

function CartSelectBar({ totalItem, selectItem }) {
  return (
    <div
      className="relative sticky w-full h-16 flex justify-between items-center border-b bg-white"
      style={{ top: "102px", padding: "18px 16px" }}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 mr-2"
          style={{ color: "#9e9e9e" }}
        ></input>
        <p className="text-sm leading-4 text-gray-50">
          전체 선택({selectItem}/{totalItem})
        </p>
      </div>
      <div className="text-sm leading-4 text-gray-50">선택삭제</div>
    </div>
  );
}

export default CartSelectBar;

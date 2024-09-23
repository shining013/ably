import React from "react";
import { useDispatch } from "react-redux";

function CartSelectBar({ cartItem, totalItem, deleteEvent }) {
  const dispatch = useDispatch();
  const allCheckHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: "fillTotalItem" });
    } else {
      dispatch({ type: "cleanTotalItem" });
    }
  };
  const checkAll = () => {
    return cartItem.length === totalItem.length ? true : false;
  };

  return (
    <div
      className="z-10 sticky w-full h-16 flex justify-between items-center border-b bg-white"
      style={{ top: "102px", padding: "18px 16px" }}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 mr-2"
          checked={checkAll()}
          onChange={(e) => allCheckHandler(e)}
          style={{ color: "#9e9e9e" }}
        ></input>
        <p className="text-sm leading-4 text-gray-50">
          전체 선택({totalItem.length}/{cartItem.length})
        </p>
      </div>
      {totalItem.length === 0 ? (
        <div className="text-sm leading-4 text-gray-50">선택삭제</div>
      ) : (
        <div
          className="text-sm font-semibold leading-4 text-gray-70"
          onClick={() => deleteEvent(totalItem)}
        >
          선택삭제
        </div>
      )}
    </div>
  );
}

export default CartSelectBar;

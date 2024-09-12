import React from "react";
import logo from "../assets/images/logo.svg";

const TopInfo = () => {
  return (
    <div
      className="bg-pink-30 text-white content-center text-body3 py-3 px-2.5 flex justify-between fixed"
      style={{ width: "100%", maxWidth: "600px" }}
    >
      <div className="flex flex-row gap-2 items-center">
        <img src={logo} alt="ABLY" />
        <div className="text-body3 text-white">
          앱에서 더 많은 상품을 볼 수 있어요!
        </div>
      </div>
      <button
        className="round text-black text-subtitle6 bg-white py-0 px-2"
        style={{ borderRadius: "20px" }}
      >
        앱에서 보기
      </button>
    </div>
  );
};

export default TopInfo;

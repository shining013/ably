import React from "react";
import startEmptyIcon from "src/assets/icons/star-empty.svg";

const StoreInfo = ({ storeName, storeNickname, satisfication, starsNum }) => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div className="flex flex-row gap-3 items-center justify-center">
        <img
          className="w-9 h-9 border"
          src="/images/market1.webp"
          alt="상품이미지"
          style={{ borderRadius: "50%" }}
        />
        <div className="flex flex-col">
          <div className="text-gray-70">{storeName}</div>
          <div className="text-gray-60">
            <strong>{storeNickname}</strong>
            <span> · 마켓 만족도{satisfication}%</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <img src={startEmptyIcon} alt="star-icon" />
        <div className="text-body3 text-pink-30">{starsNum}</div>
      </div>
    </div>
  );
};

export default StoreInfo;

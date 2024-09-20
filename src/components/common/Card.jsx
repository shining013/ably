import React from "react";

const Card = ({ image, discount, price, name, imgSrc, description, salesCount }) => {
  return (
    <div className="flex flex-col w-full">
      <img
        src={imgSrc}
        alt="jewerly"
        className="rounded-sm w-full object-cover"
      />
      <div className="flex flex-row items-center justify-start gap-3">
        <div className="text-pink-30 text-subtitle1">{discount}%</div>
        <div className="text-subtitle1 text-gray-70">
          {price.toLocaleString()}
        </div>
      </div>
      <div className="text-subtitle4 text-gray-60">{name}</div>
      <div className="text-body4 truncate text-gray-60">{description}</div>
      {salesCount && (
        <div className="text-body5 text-gray-50">
          {salesCount.toLocaleString()}개 구매중
        </div>
      )}
    </div>
  );
};

export default Card;

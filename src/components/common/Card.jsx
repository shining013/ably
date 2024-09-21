import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, discount, price, name, imgSrc, company, salesCount }) => {
  const navigation = useNavigate();

  return (
    <div
      className="flex flex-col w-full"
      onClick={() => {
        navigation(`/product/${id}`);
      }}
    >
      <img
        src={imgSrc}
        alt="jewelry"
        className="rounded-sm w-full h-full aspect-[3/4] object-cover mb-1"
      />
      <div className="flex flex-row items-center justify-start gap-1 mb-1">
        <div className="text-pink-30 text-subtitle1">{discount}%</div>
        <div className="text-subtitle1 text-gray-70">
          {price.toLocaleString()}
        </div>
      </div>
      <div className="text-subtitle4 text-gray-60">{company}</div>
      <div className="text-body4 truncate text-gray-60">{name}</div>
      {salesCount && (
        <div className="text-body5 text-gray-50">
          {salesCount.toLocaleString()}개 구매중
        </div>
      )}
    </div>
  );
};

export default Card;

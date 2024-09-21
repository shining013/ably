import React from "react";
import shareIcon from "src/assets/icons/share.svg";

const ProductInfo = ({ productName, discount, price }) => {
  return (
    <div className="flex flex-col p-4 justify-center">
      <div className="text-gray-70 text-body1">{productName}</div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-pink-30 text-subtitle1">{discount}%</div>
          <div className="text-gray-70 text-h5">{price.toLocaleString()}원</div>
          <div className="text-gray-30 text-body1 line-through">
            {(price * (100 - discount) * 0.01).toLocaleString()}원
          </div>
        </div>
        <img src={shareIcon} alt="공유아이콘" />
      </div>
    </div>
  );
};

export default ProductInfo;

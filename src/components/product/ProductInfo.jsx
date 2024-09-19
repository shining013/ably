import React from "react";
import shareIcon from "src/assets/icons/share.svg";

const ProductInfo = ({ productName, price }) => {
  return (
    <div className="flex flex-col p-4 justify-center">
      <div className="text-gray-70 text-body1">{productName}</div>
      <div className="flex flex-row justify-between">
        <div className="text-gray-70 text-h5">{price.toLocaleString()}원</div>
        <img src={shareIcon} alt="공유아이콘" />
      </div>
    </div>
  );
};

export default ProductInfo;

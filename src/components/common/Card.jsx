import React from "react";

const Card = ({ image, discount, price, name, description, salesCount }) => {
  return (
    <div className="flex flex-col w-full">
      <img
        src="https://cdn.prod.website-files.com/6177926b5641c2ccacfc1ad3/649568a7a8a62d807124e772_Jewelry%20as%20an%20Investment.webp"
        alt="jewerly"
        className="rounded-sm w-full object-cover"
      />
      <div className="flex flex-row items-center justify-start gap-3">
        <div className="text-red-500 text-subtitle1">{discount}%</div>
        <div className="text-subtitle1">{price.toLocaleString()}원</div>
      </div>
      <div className="text-subtitle4">{name}</div>
      <div className="text-body4">{description}</div>
    </div>
  );
};

export default Card;

import React from "react";
import Button from "src/components/common/Button";
import heartIcon from "src/assets/icons/heart.svg";

const BottomBar = () => {
  return (
    <div
      className="fixed bottom-0 w-full items-center justify-center"
      style={{ maxWidth: "600px" }}
    >
      <hr />
      <div className="text-center py-2">1명이 이 상품을 구매하는 중이에요</div>
      <hr />
      <div className="flex flex-row gap-2 p-3 w-full items-center">
        <div className="flex flex-col items-center ">
          <img src={heartIcon} alt="heart-icon" />
          <div className="text-body3 text-pink-30">7</div>
        </div>
        <Button
          text="구매하기"
          option="blackType"
          style={{ width: "100%", height: "56px" }}
        />
      </div>
    </div>
  );
};

export default BottomBar;

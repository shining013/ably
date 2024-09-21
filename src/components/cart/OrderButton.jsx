import React from "react";
import Button from "src/components/common/Button";

function OrderButton({totalPrice}) {

  const notCheckedButton = () => {
    return (
      <Button
        text={"주문하기"}
        option={"blackType"}
        style={{
          background: "#eee",
          color: "#ccc",
          cursor: "not-allowed",
          lineHeight: "24px",
        }}
      />
    );
  };

  const checkedButton = () => {
    return (
      <Button
        text={totalPrice + "원 결제하기"}
        option={"blackType"}
        style={{ background: "#ff5160" }}
      />
    );
  };

  return (
    <div
      className="w-full bottom-0 p-4 fixed bg-white border-t border-gray-10"
      style={{ maxWidth: "600px" }}
    >
      {totalPrice === 0 ? notCheckedButton() : checkedButton()}
    </div>
  );
}

export default OrderButton;

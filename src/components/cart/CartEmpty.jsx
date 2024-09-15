import React from "react";
import Button from "src/components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CartEmpty = () => {
  return (
    <div
      className="pt-32 w-full gap-y-2 flex flex-col justify-center items-center"
      style={{ height: `calc(100vh - 104px)` }}
    >
      <div className="h-16">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-gray-300 w-6 h-6"
        />
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <p className="font-semibold tracking-tighter leading-5 text-base text-gray-500">
          장바구니가 비어있어요
        </p>
        <p className="tracking-tighter leading-5 text-sm text-gray-400">
          새로운 상품으로 채워주세요
        </p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <Button
          text={"상품 보러가기"}
          option={"blackType"}
          style={{
            background: "#ff5160",
            width: "fit-content",
            "min-width": "240px",
          }}
        />
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;

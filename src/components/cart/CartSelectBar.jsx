import React from "react";

function CartSelectBar({ itemTotal, itemSelect }) {
  return (
    <input type="checkbox">
      전체 선택({itemSelect}/{itemTotal})
    </input>
  );
}

export default CartSelectBar;

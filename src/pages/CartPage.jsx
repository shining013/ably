import React, { useState } from "react";
import CartTopBar from "../components/cart/CartTopBar";
import CartSelectBar from "../components/cart/CartSelectBar";
import CartEmpty from "../components/cart/CartEmpty";

const CartPage = () => {
  const [itemlist, setItemlist] = useState(["hi", "hello", "bye"]);
  const [buylist, setBuylist] = useState(new Set());

  const cartPageComponents = () => {
    return (
      <div className="relative h-screen" style={{ top: "102px" }}>
        <CartSelectBar totalItem={itemlist.length} selectItem={buylist.size} />
        <div>
          {itemlist.map((item, i) => {
            return <div key={i}>{item}</div>;
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <CartTopBar title={"장바구니"} />
      {itemlist.length ? cartPageComponents() : <CartEmpty />}
    </div>
  );
};

export default CartPage;

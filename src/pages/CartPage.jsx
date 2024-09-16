import React, { useState } from "react";
import CartTopBar from "src/components/cart/CartTopBar";
import CartSelectBar from "src/components/cart/CartSelectBar";
import CartEmpty from "src/components/cart/CartEmpty";
import CartItem from "src/components/cart/CartItem";

const CartPage = () => {
  const [itemlist, setItemlist] = useState(["hi", "hello", "bye"]);
  const [buylist, setBuylist] = useState(new Set());

  const dummy = [
    { id: 1, name: "dkdkd", price: "3243" },
    { id: 2, name: "dkdkd", price: "3243" },
    { id: 3, name: "dkdkd", price: "3243" },
    { id: 4, name: "dkdkd", price: "3243" },
    { id: 5, name: "dkdkd", price: "3243" },
  ];

  const cartPageComponents = () => {
    return (
      <div className="relative h-screen" style={{ top: "102px" }}>
        <CartSelectBar totalItem={itemlist.length} selectItem={buylist.size} />
        <CartItem />
        <CartItem />
        <CartItem />
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

import React, { useState } from "react";
import CartTopBar from "../components/cart/CartTopBar";
import CartSelectBar from "../components/cart/CartSelectBar";
import CartEmpty from "../components/cart/CartEmpty";

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
        <div>
          <p>(회사명) 배송상품</p>
          <div className="flex w-full py-4 pr-6">
            <input
              type="checkbox"
              className="w-4 h-4 mr-2 self-center"
              style={{ color: "#9e9e9e" }}
            ></input>
            <img
              src="./images/Cate2.png"
              style={{ width: "90px", height: "90px" }}
            ></img>
            <div>
              <p>(회사명)</p>
              <p>(상품명)</p>
              <div>
                <p>(정상가)</p>
                <p>(할인가)</p>
              </div>
            </div>
            <div>X</div>
          </div>
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

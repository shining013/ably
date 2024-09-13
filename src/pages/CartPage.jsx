import React, { useState } from "react";
import CartTopBar from "../components/cart/CartTopBar";
import CartSelectBar from "../components/cart/CartSelectBar";
import CartEmpty from "../components/cart/CartEmpty";

const CartPage = () => {
  const [itemlist, setItemlist] = useState([]);

  return (
    <div className="relative">
      <CartTopBar />
      {itemlist.length ? <CartSelectBar /> : <CartEmpty />}
    </div>
  );
};

export default CartPage;

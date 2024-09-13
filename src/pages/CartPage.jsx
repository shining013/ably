import React, { useState } from "react";
import CartTopBar from "src/components/cart/CartTopBar";
import CartSelectBar from "src/components/cart/CartSelectBar";
import CartEmpty from "src/components/cart/CartEmpty";

const CartPage = () => {
  const [itemlist, setItemlist] = useState([])

  return (
    <div>
      <CartTopBar />
      {
        itemlist.length ? <CartSelectBar /> : <CartEmpty />
      }
    </div>
  );
};

export default CartPage;

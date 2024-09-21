import React, { useState } from "react";
import CartSelectBar from "src/components/cart/CartSelectBar";
import CartEmpty from "src/components/cart/CartEmpty";
import CartItem from "src/components/cart/CartItem";
import TopInfo from "src/components/common/TopInfo";
import CartTotal from "src/components/cart/CartTotal";
import CartResult from "src/components/cart/CartResult";
import OrderButton from "src/components/cart/OrderButton";
import CartOptionSelect from "src/components/cart/CartOptionSelect";
import TopNavbar from "src/components/common/TopNavbar";
import CartCRUD from "src/components/cart/CartCRUD";

const CartPage = () => {
  //옵션버튼
  const [open, setOpen] = useState(false);
  const [itemOption, setItemOption] = useState(0);
  const {totalItem, totalPrice, dummy, checkHandler, allCheckHandler, check, checkAll} = CartCRUD();

  const cartPageComponents = () => {
    return (
      <div className="pb-20">
        <CartSelectBar
          totalItem={dummy.length}
          selectItem={totalItem.length}
          checkAll={checkAll}
          checkAllEvent={allCheckHandler}
        />
        {dummy.map((item, i) => {
          return (
            <div key={i}>
              <CartItem
                productInfo={item}
                checked={check}
                checkEvent={checkHandler}
                changeEvent={setItemOption}
                changeOpen={setOpen}
                index={i}
              />
            </div>
          );
        })}
        <CartTotal totalItem={totalItem} />
        <CartResult totalItem={totalItem} totalPrice={totalPrice}/>
        <OrderButton totalPrice={totalPrice} />
        <CartOptionSelect
          open={open}
          onClose={() => setOpen(false)}
          item={dummy[itemOption]}
        />
      </div>
    );
  };

  return (
    <div>
      <div
        className="flex top-0 left-0 sticky w-full items-center justify-center flex-col"
        style={{
          zIndex: "999",
        }}
      >
        <TopInfo />
        <TopNavbar title="장바구니" />
      </div>
      {dummy.length ? cartPageComponents() : <CartEmpty />}
    </div>
  );
};

export default CartPage;

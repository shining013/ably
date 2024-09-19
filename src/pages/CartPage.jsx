import React, { useState } from "react";
import CartTopBar from "src/components/cart/CartTopBar";
import CartSelectBar from "src/components/cart/CartSelectBar";
import CartEmpty from "src/components/cart/CartEmpty";
import CartItem from "src/components/cart/CartItem";
import TopInfo from "src/components/common/TopInfo";
import CartTotal from "src/components/cart/CartTotal";
import CartResult from "src/components/cart/CartResult";
import OrderButton from "src/components/cart/OrderButton";
import CartOptionSelect from "src/components/cart/CartOptionSelect";

const CartPage = () => {
  const [totalItem, setTotalItem] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemOption, setItemOption] = useState(0);

  const dummy = [
    {
      id: 1,
      name: "dkdkd",
      company_name: "asdkf",
      price: "3243",
      sales: "300",
      option1: "none",
      option2: "none",
    },
    {
      id: 2,
      name: "dkdkd",
      company_name: "sgsfg",
      price: "3243",
      sales: "200",
      option1: "none",
      option2: "none",
    },
    {
      id: 3,
      name: "dkdkd",
      company_name: "xcvbs",
      price: "3243",
      sales: "400",
      option1: "none",
      option2: "none",
    },
    {
      id: 4,
      name: "dkdkd",
      company_name: "ghjk",
      price: "3243",
      sales: "200",
      option1: "none",
      option2: "none",
    },
    {
      id: 5,
      name: "dkdkd",
      company_name: "yuefh",
      price: "3243",
      sales: "1000",
      option1: "none",
      option2: "none",
    },
  ];

  const cartPageComponents = () => {
    return (
      <div className="pb-20">
        <CartSelectBar totalItem={dummy.length} selectItem={totalItem.length} />
        {dummy.map((item, i) => {
          return (
            <div key={i}>
              <CartItem
                productInfo={item}
                changeEvent={setItemOption}
                changeOpen={setOpen}
                index={i}
              />
            </div>
          );
        })}
        <CartTotal totalItem={totalItem} />
        <CartResult totalItem={totalItem} />
        <OrderButton totalItem={totalItem} />
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
        <CartTopBar title={"장바구니"} />
      </div>
      {dummy.length ? cartPageComponents() : <CartEmpty />}
    </div>
  );
};

export default CartPage;

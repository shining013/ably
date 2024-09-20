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

const CartPage = () => {
  //구매 확정
  const [totalItem, setTotalItem] = useState([]);
  //옵션버튼
  const [open, setOpen] = useState(false);
  const [itemOption, setItemOption] = useState(0);
  //체크 박스
  const checkHandler = (isChecked, id) => {
    if (isChecked) {
      setTotalItem((prev) => [...prev, id]);
    } else {
      setTotalItem(totalItem.filter((item) => item != id));
    }
    console.log(totalItem);
  };
  const allCheckHandler = (e) => {
    if (e.target.checked) {
      setTotalItem(dummy.map((item, i) => i));
    } else {
      setTotalItem([]);
    }
    console.log(totalItem);
  };
  const check = (id) => {
    console.log(id);
    console.log(totalItem);
    return totalItem.includes(id) ? true : false;
  };
  const checkAll = () => {
    return totalItem.length === dummy.length ? true : false;
  };

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
        <TopNavbar title="장바구니" />
      </div>
      {dummy.length ? cartPageComponents() : <CartEmpty />}
    </div>
  );
};

export default CartPage;

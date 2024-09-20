import { useEffect, useState } from "react";

const CartCRUD = () =>{
    //구매 확정
    const [totalItem, setTotalItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=>{
        setTotalPrice(totalItem.reduce((acc, cur)=>{
            return acc + ((parseInt(cur.price) - parseInt(cur.sales)) * cur.amount)
        }, 0))
    },[totalItem])
    
  const dummy = [
    {
      id: 1,
      name: "dkdkd",
      company_name: "asdkf",
      price: "3243",
      sales: "300",
      option1: "none",
      option2: "none",
      amount: 10
    },
    {
      id: 2,
      name: "dkdkd",
      company_name: "sgsfg",
      price: "3243",
      sales: "200",
      option1: "none",
      option2: "none",
      amount: 1
    },
    {
      id: 3,
      name: "dkdkd",
      company_name: "xcvbs",
      price: "3243",
      sales: "400",
      option1: "none",
      option2: "none",
      amount: 3
    },
    {
      id: 4,
      name: "dkdkd",
      company_name: "ghjk",
      price: "3243",
      sales: "200",
      option1: "none",
      option2: "none",
      amount: 4
    },
    {
      id: 5,
      name: "dkdkd",
      company_name: "yuefh",
      price: "3243",
      sales: "1000",
      option1: "none",
      option2: "none",
      amount: 2
    },
  ];

    //체크 박스
    const checkHandler = (isChecked, itemChecked) => {
        if (isChecked) {
          setTotalItem((prev) => [...prev, itemChecked]);
        } else {
          setTotalItem(totalItem.filter((item) => item.id != itemChecked.id));
        }
      };
      const allCheckHandler = (e) => {
        if (e.target.checked) {
          setTotalItem(dummy.map((item) => item));
          
        } else {
          setTotalItem([]);
        }
        console.log(totalPrice);
      };
      const check = (itemChecked) => {
        return totalItem.some((item) => {return item.id === itemChecked.id;});
      };


    const checkAll = () => {
      return totalItem.length === dummy.length ? true : false;
    };

    return {totalItem, totalPrice, dummy, checkHandler, allCheckHandler, check, checkAll}
}

export default CartCRUD;
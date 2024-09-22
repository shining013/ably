import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartCRUD = () =>{
    //구매 확정
    const [totalItem, setTotalItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const dummy = useSelector((s) => s.cartItems);
    const dispatch = useDispatch();

    useEffect(()=>{
        setTotalPrice(totalItem.reduce((acc, cur)=>{
            return acc + ((cur.price - Math.floor(cur.price * cur.discount / 100)) * cur.amount)
        }, 0));
        console.log(totalPrice)
    },[totalItem, refresh])
    
    //체크 박스
    const checkHandler = (isChecked, itemChecked) => {
        if (isChecked) {
          setTotalItem((prev) => [...prev, itemChecked]);
        } else {
          setTotalItem(totalItem.filter((item) => item.id !== itemChecked.id));
        }
      };
      const allCheckHandler = (e) => {
        if (e.target.checked) {
          setTotalItem(dummy.map((item) => item));
          
        } else {
          setTotalItem([]);
        }
      };
      const check = (itemChecked) => {
        return totalItem.some((item) => {return item.id === itemChecked.id;});
      };


    const checkAll = () => {
      return totalItem.length === dummy.length ? true : false;
    };

    // 아이템 삭제
    const deleteItem = (itemChecked) => {
      const del = window.confirm('선택한 상품을 삭제하시겠어요?')
      if(del){
        dispatch({type:'delete', payload: itemChecked})
        setTotalItem([]);
        setRefresh(!refresh);
        console.log(totalItem)
      }
    };

    //아이템 개수 수정
    const changeItemAmount = (product, amount) => {
      dispatch({type: "changeItemAmount", payload:[product, amount]})
      setRefresh(!refresh);
    };
    const changeItemOption = (product, options) => {
      dispatch({type: "changeItemOption", payload:[product, options]})
      setRefresh(!refresh);
    };

    return {totalItem, totalPrice, checkHandler, allCheckHandler, check, checkAll, deleteItem, changeItemAmount, changeItemOption, refresh}


}

export default CartCRUD;
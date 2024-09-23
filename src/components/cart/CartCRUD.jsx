import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartCRUD = () => {
  //구매 확정
  const [totalPrice, setTotalPrice] = useState(0);
  const totalItem = useSelector((s) => s.totalItem);
  const refresh = useSelector((s) => s.refresh);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice(
      totalItem.reduce((acc, cur) => {
        return (
          acc +
          (cur.price - Math.floor((cur.price * cur.discount) / 100)) *
            cur.amount
        );
      }, 0)
    );
  }, [totalItem, refresh]);

  // 아이템 삭제
  const deleteItem = (itemChecked) => {
    const del = window.confirm("선택한 상품을 삭제하시겠어요?");
    if (del) {
      dispatch({ type: "delete", payload: itemChecked });
    }
  };

  return {
    totalPrice,
    deleteItem,
  };
};

export default CartCRUD;

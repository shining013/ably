import React from 'react'

const CartTotal = ({totalItem}) => {
  const totalPrice = totalItem.reduce((acc, cur)=>{
    return acc + parseInt(cur.price)
  }, 0);
  const totalSales = totalItem.reduce((acc, cur)=>{
    return acc + parseInt(cur.sales)
  }, 0);


  return (
    <div className='flex flex-col py-6 px-4 gap-4'>
        <div className='flex justify-between'>
            <p className='text-gray-50 tracking-tight leading-5'>총 상품금액</p>
            <p className='text-gray-70 font-semibold tracking-tight leading-5'>{(totalPrice).toLocaleString('ko-KR')}원</p>
        </div>
        <div className='flex justify-between'>
            <p className='text-gray-50 tracking-tight leading-5'>상품할인</p>
            <p className='text-gray-70 font-semibold tracking-tight leading-5'>{(totalSales).toLocaleString('ko-KR')}원</p>
        </div>
        <div className='flex justify-between'>
            <p className='text-gray-50 tracking-tight leading-5'>배송비</p>
            <p className='text-gray-70 font-semibold tracking-tight leading-5'>에이블리는 전 상품 무료배송</p>
        </div>
    </div>
  )
}

export default CartTotal
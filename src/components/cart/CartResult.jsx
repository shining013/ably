import React from 'react'

const CartResult = ({totalItem, totalPrice}) => {
  return (
    <div className='flex flex-col py-6 px-4 gap-4 border-t'>
        <div className='flex justify-between'>
            <p className='text-gray-50 tracking-tight leading-5'>총 {totalItem.length}개 주문 금액</p>
            <p className='text-pink-30 text-xl font-semibold tracking-tighter leading-6'>{(totalPrice).toLocaleString('ko-KR')}원</p>
        </div>
        <div className='flex justify-between'>
            <p className='text-gray-50 tracking-tight leading-5'>예상 적립포인트</p>
            <p className='text-gray-70 font-semibold tracking-tight leading-5'>0원</p>
        </div>
    </div>
  )
}

export default CartResult
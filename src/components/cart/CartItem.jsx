import React from 'react'
import Button from '../common/Button'

function CartItem() {
  return (
    <div className='w-full' style={{"max-width":"600px"}}>
        <p className="pt-6 px-4 text-gray-70 text-lg font-semibold tracking-tighter leading-6">(회사명) 배송상품</p>
        <div className='w-full py-4 pr-6 pl-4'>

          <div className="flex w-full pt-4 pb-3">
            <input
              type="checkbox"
              className="w-4 h-4 mr-4 self-center"
              style={{ color: "#9e9e9e" }}
            ></input>
            <img
              src=""
              className="mr-4 rounded bg-gray-100"
              style={{ width: "90px", height: "90px" }}
              alt=''
            ></img>
            <div className="box-border mr-2" style={{flex:"1 1 0%"}}>
              <p className="mb-1 text-gray-60 leading-4" style={{fontSize:"13px"}}>(회사명)</p>
              <p className="mb-1 text-gray-70 text-sm tracking-tight leading-5">(상품명)</p>
              <div className="flex">
                <p className="mr-1 text-gray-50 tracking-tight leading-4"><s>(정상가)</s></p>
                <p className="font-semibold tracking-tight leading-4">(할인가)</p>
              </div>
            </div>
            <div className="w-4 h-4">X</div>
          </div>

          <div className='flex flex-wrap justify-end'>
            <p className='text-gray-60 text-xs tracking-tight leading-4 h-12 pt-3 px-4 pb-4 flex items-center rounded bg-gray-100' style={{width:"calc(100% - 32px"}}>(상품 선택 옵션)</p>
            <div className='flex gap-2 mt-3' style={{width:"calc(100% - 32px"}}>
              <Button text={"옵션변경"} option={"w-full h-10 text-sm border rounded tracking-tight leading-4"}/>
              <select className='w-full h-10 px-3 flex items-center relative border border-gray-300 rounded'>
                <option value={1}>1</option>
              </select>
            </div>
          </div>
        </div>

        <hr/>
        <p className='py-5 px-4 text-sm text-right tracking-tighter leading-6'>
          상품 (가격)원 + 배송비 (가격)원 <b className='text-sm'>= (총가격)원</b>
        </p>
        <div className='w-full h-2 bg-gray-100'></div>
    </div>
  )
}

export default CartItem
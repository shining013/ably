import React from "react";
import delieveryIcon from "src/assets/icons/delievery.svg";

const DelieveryInfo = () => {
  return (
    <div className="flex flex-col py-6 px-4">
      <div className="flex flex-col gap-1 mb-5">
        <div className="flex flex-row gap-4">
          <div className="text-gray-50 text-subtitle2">배송정보</div>
          <div className="text-gray-70 text-body2">
            마켓 직접 배송 (한진택배)
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="text-gray-50 text-subtitle2">배송정보</div>
          <div className="text-gray-70 text-body2">
            마켓 직접 배송 (한진택배)
          </div>
        </div>
        <div className="text-body3 text-gray-50">
          배송 출발 이후 배송 기간은 2~3일 소요됩니다.
        </div>
      </div>
      <div className="flex flex-row rounded-md px-4 py-2 bg-gray-10 items-center gap-2">
        <img src={delieveryIcon} alt="배달아이콘" />
        <div className="text-slate-60 text-body2">
          에이블리는 365일
          <span className="text-subtitle2"> 전-상품 무료 배송 !</span>
        </div>
      </div>
    </div>
  );
};

export default DelieveryInfo;

import React from "react";

const DetailMenuTab = ({ selectedTab, onClick }) => {
  return (
    <div className="grid grid-cols-3 border-b border-b-gray-30 w-full">
      {/* 상품정보 탭 */}
      <div
        className={`text-center cursor-pointer py-4 relative ${
          selectedTab === "info"
            ? 'font-bold text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
            : "text-gray-400"
        }`}
        onClick={() => onClick("info")}
      >
        상품정보
      </div>
      {/* 리뷰 탭 */}
      <div
        className={`text-center cursor-pointer py-4 relative ${
          selectedTab === "review"
            ? 'font-bold text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
            : "text-gray-400"
        }`}
        onClick={() => onClick("review")}
      >
        리뷰
      </div>
      {/* 문의 탭 */}
      <div
        className={`text-center cursor-pointer py-4 relative ${
          selectedTab === "inquiry"
            ? 'font-bold text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
            : "text-gray-400"
        }`}
        onClick={() => onClick("inquiry")}
      >
        문의
      </div>
    </div>
  );
};

export default DetailMenuTab;

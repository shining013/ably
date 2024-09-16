import React, { useState } from "react";

const DetailMenuTab = () => {
  const [activeTab, setActiveTab] = useState("info"); // 기본 탭은 '상품정보'

  return (
    <div className="grid grid-cols-3 border-b border-b-gray-30 w-full">
      {/* 상품정보 탭 */}
      <div
        className={`text-center cursor-pointer py-4 relative ${
          activeTab === "info"
            ? 'font-bold text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
            : "text-gray-400"
        }`}
        onClick={() => setActiveTab("info")}
      >
        상품정보
      </div>
      {/* 리뷰 탭 */}
      <div
        className={`text-center cursor-pointer py-4 relative ${
          activeTab === "review"
            ? 'font-bold text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
            : "text-gray-400"
        }`}
        onClick={() => setActiveTab("info")}
      >
        리뷰
      </div>
      {/* 문의 탭 */}
      <div
        className={`text-center cursor-pointer py-4 relative ${
          activeTab === "inquiry"
            ? 'font-bold text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
            : "text-gray-400"
        }`}
        onClick={() => setActiveTab("info")}
      >
        문의
      </div>
    </div>
  );
};

export default DetailMenuTab;

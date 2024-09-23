import React from "react";

const Bottombar = () => {
  return (
    <nav className="w-full mx-auto h-12 flex justify-center bottom-0 left-0 right-0 bg-white sticky shadow-custom-inset">
      <div className="w-1/4 h-6 py-1 flex-col justify-center items-center">
        <img
          src="./images/bottomNav1.svg"
          alt=""
          className="mx-auto justify-center w-6"
        />
        <p className="items-center text-center text-red-500 text-xs">홈</p>
      </div>
      <div className="w-1/4 h-6 py-1 flex-col justify-center items-center">
        <img
          src="./images/bottomNav2.svg"
          alt=""
          className="mx-auto justify-center w-6"
        />
        <p className="items-center text-center text-gray-500 text-xs">
          전체보기
        </p>
      </div>
      <div className="w-1/4 h-6 py-1 flex-col justify-center items-center">
        <img
          src="./images/bottomNav3.svg"
          alt=""
          className="mx-auto justify-center w-6"
        />
        <p className="items-center text-center text-gray-500 text-xs">검색</p>
      </div>
      <div className="w-1/4 h-6 py-1 flex-col justify-center items-center">
        <img
          src="./images/bottomNav4.svg"
          alt=""
          className="mx-auto justify-center w-6"
        />
        <p className="items-center text-center text-gray-500 text-xs">
          마이페이지
        </p>
      </div>
    </nav>
  );
};

export default Bottombar;

import React from "react";

// text : 버튼 내용
// width : 버튼 길이(px)
// option : 등록된 buttonOption의 인덱스 or 직접 tailwind 설정
const Button = ({ text, width, option }) => {
  const buttonOption = [
    " bg-black text-white h-14 rounded-lg text-lg", //0. 구매하기
    " bg-white h-14 rounded-lg border border-gray-300 text-lg", //1. 옵션 선택 닫기
    " bg-white h-13 rounded px-3 border border-blue-200 text-blue-500 text-sm", //2. 상세페이지 버튼
  ];

  // 버튼 기본 설정
  let btnClassName =
    "w-full py-4 flex justify-center itmes-center cursor-pointer font-semibold";
  let btnWidth = "";

  typeof width === undefined
    ? (btnWidth = "w-full")
    : (btnWidth = width + "px");

  typeof option === "number"
    ? (btnClassName = btnClassName + buttonOption[option])
    : (btnClassName = btnClassName + " " + option);

  return (
    <div style={{ width: btnWidth }}>
      <button className={btnClassName}>{text}</button>
    </div>
  );
};

export default Button;

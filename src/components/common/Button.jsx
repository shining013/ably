import React from "react";

// text : 버튼 내용
// width : 수정 중
// option : 정해진 buttonOption의 인덱스 or 직접 tailwind 문구 입력
const Button = ({ text, width, option }) => {
  const buttonOption = [
   " bg-black text-white h-14 rounded-lg text-lg", //0. 구매하기
   " bg-white h-14 rounded-lg border border-gray-300 text-lg",  //1. 옵션 선택 닫기
   " bg-white h-13 rounded px-3 border border-blue-200 text-blue-500 text-sm" //2. 상세페이지 버튼
  ]
  let btnClassName = "w-full py-4 flex justify-center itmes-center cursor-pointer font-semibold";

  console.log(typeof(option))
  btnClassName = btnClassName + " max-w-"+width;
  typeof(option)==="number" ? btnClassName = btnClassName + buttonOption[option] : btnClassName = btnClassName + " "+ option;

  return <button className={btnClassName}>{text}</button>;
};

export default Button;

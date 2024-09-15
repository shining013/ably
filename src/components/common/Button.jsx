import React from "react";

// text : 버튼 내용
// option : 등록된 button or tailwind 설정
// style : style 설정
const Button = ({ text, option, style, onClick }) => {
  let btnText = text;
  const buttonOption = {
    blackType:
      " w-full py-4 font-semibold bg-black text-white h-14 rounded-lg text-lg",

    whiteType:
      " w-full py-4 font-semibold bg-white h-14 rounded-lg border border-gray-300 text-lg",

    blueType:
      " w-full py-4 font-semibold bg-white h-13 rounded px-3 border border-blue-200 text-blue-500 text-sm",

    //상세 보기 페이지 우하단 버튼
    arrowType1: [
      " bg-white p-0 w-8 h-8 rounded-full border border-gray-200 shadow-md",
    ],

    arrowType2: [
      " bg-white pt-1 w-8 h-8 rounded-full border border-gray-200 shadow-md",
    ],
  };

  // 버튼 기본
  let btnClassName = "flex justify-center itmes-center cursor-pointer";

  if (buttonOption[option]) {
    btnClassName = btnClassName + buttonOption[option];
    if (option === "arrowType1") {
      btnText = "↑";
    }
    if (option === "arrowType2") {
      btnText = "↓";
    }
  } else {
    btnClassName = btnClassName + " " + option;
  }

  return (
    <button className={btnClassName} style={style} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;

// 사용예시
// <Button
//  text={"3가지 사용하기"}
//  option={"blackType"}
//  style={{ width: "400px" }}
// />

// <Button text={"옵션선택"} option={"whiteType"} />

// <Button option={"arrowType2"} />

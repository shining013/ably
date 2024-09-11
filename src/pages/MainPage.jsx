import React from "react";
import Button from "../components/common/Button"

const MainPage = () => {
  return <div>
    <h2>main</h2>
    <Button text={"구매하기"} width={32} option={0}/>
    <Button text={"옵션선택"} width={36} option={1}/>
    <Button text={"test"} width={36} option={"bg-red-100 text-green-600"}/>
  </div>;
};

export default MainPage;

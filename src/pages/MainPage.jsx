import React from "react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import CardList from "../components/common/CardList";

const MainPage = () => {
  return (
    <div>
      <h2 className="">main</h2>
      <CardList />

      <Button text={"구매하기"} width={"400"} option={0} />
      <Button text={"옵션선택"} width={500} option={1} />
      <Button text={"test"} width={600} option={"bg-red-100 text-green-600"} />
    </div>
  );
};

export default MainPage;

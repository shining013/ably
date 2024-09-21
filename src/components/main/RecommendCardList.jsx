import React from "react";
import { recommends } from "src/data/recommends";
import Card from "../common/Card";
function RecommendCardList() {
  return (
    <div className="grid grid-cols-3 gap-2 pb-5 ">
      {recommends.map((item) => (
        <Card
          id={item.id}
          discount={item.discount}
          price={item.discountPrice}
          name={item.name}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  );
}

export default RecommendCardList;

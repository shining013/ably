import React from "react";
import { products } from "src/data/products";
import Card from "../common/Card";

function RecommendCardList() {
  return (
    <div className="grid grid-cols-3 gap-2 pb-5 ">
      {products
        .filter((item) => [205, 206, 207].includes(item.id))
        .map((item) => (
          <Card
            id={item.id}
            discount={item.discount}
            price={item.price}
            name={item.name}
            imgSrc={item.imgSrc}
          />
        ))}
    </div>
  );
}

export default RecommendCardList;

import React from "react";
import Card from "src/components/common/Card";
import { products } from "src/data/products";

const CardList = () => {
  return (
    <div className="grid grid-cols-2 gap-3 pb-5">
      {products.map((item) => (
        <Card
          id={item.id}
          discount={item.discount}
          price={item.price}
          name={item.name}
          imgSrc={item.imgSrc}
          company={item.companyName}
          salesCount={item.salesCount}
        />
      ))}
    </div>
  );
};

export default CardList;

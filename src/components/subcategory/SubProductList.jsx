import React from "react";
import Card from "src/components/common/Card";
import { products } from "src/data/products";

const SubProductList = () => {
  return (
    <div className="flex flew-row gap-3 max-w-[600px] w-full">
      {products.map((item) => (
        <Card
          imgSrc={item.imgSrc}
          discount={item.discount}
          price={item.price}
          name={item.name}
          salesCount={item.salesCount}
        />
      ))}
    </div>
  );
};

export default SubProductList;

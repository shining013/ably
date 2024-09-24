import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "src/components/common/Card";
import { products } from "src/data/products";

const SubProductList = () => {
  let subProduct = "earing";

  // subcategoryId === 'earing'
  const { subcategoryId } = useParams();
  let productData = [];

  console.log(products.filter((item) => item.subCategory === subcategoryId));
  productData = products.filter((item) => item.subCategory === subcategoryId);
  console.log("productData: ", productData);
  return (
    <div className="grid grid-cols-2 gap-3 max-w-[600px] w-full px-2">
      {productData?.map((item) => (
        <Card
          id={item.id}
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

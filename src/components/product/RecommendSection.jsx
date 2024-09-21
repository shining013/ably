import React from "react";
import Card from "src/components/common/Card";
import { products } from "src/data/products";

const RecommendSection = ({
  title,
  recommendOption = "primeCategory",
  productData = [],
}) => {
  let recommendedData = [];
  // 이 상품들은 어때요? => 동일한 주요 카테고리 상품 추천
  if (recommendOption === "primeCategory") {
    recommendedData = products.filter(
      (item) => item.primeCategory === productData.primeCategory
    );
  }
  // 비슷한 상품들이에요 => 동일한 서브 카테고리 상품 추천
  else if (recommendOption === "subCategory") {
    recommendedData = products.filter(
      (item) => item.subCategory === productData.subCategory
    );
  }
  // 이 마켓의 다른 상품들이에요 => 같은 회사 상품 추천
  else if (recommendOption === "company") {
    recommendedData = products.filter(
      (item) => item.companyId === productData.companyId
    );
  }

  return (
    <div className="flex flex-col gap-3 py-4 px-4">
      <div className="text-subtitle1 text-gray-70">{title}</div>
      <div className="grid grid-cols-3 gap-x-2 gap-y-10">
        {recommendedData?.map((item) => (
          <Card
            imgSrc={item.imgSrc}
            discount={item.discount}
            price={item.price}
            name={item.name}
            company={item.companyName}
            salesCount={item.salesCount}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendSection;

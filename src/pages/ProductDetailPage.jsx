import React, { useEffect, useState } from "react";
import TopNavbar from "src/components/common/TopNavbar";
import StoreInfo from "src/components/product/StoreInfo";
import ProductInfo from "src/components/product/ProductInfo";
import DeliveryInfo from "src/components/product/DeliveryInfo";
import BottomBar from "src/components/product/BottomBar";
import ReviewSection from "src/components/product/ReviewSection";
import DetailMenuTab from "src/components/product/DetailMenuTab";
import RecommendSection from "src/components/product/RecommendSection";
import SlideComp from "src/components/main/SlideComp";
import TopInfo from "src/components/common/TopInfo";
import { products } from "src/data/products";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const productData = products.filter(
    (item) => item.id === Number(productId)
  )[0];

  return (
    <>
      <div
        className="flex top-0 left-0 sticky w-full items-center justify-center flex-col"
        style={{
          zIndex: "999",
        }}
      >
        <TopInfo />
        <TopNavbar title="상품정보" />
      </div>
      <div className="mb-[120px]">
        {/* <SlideComp /> */}
        <StoreInfo
          storeName={productData?.companyName}
          storeNickname={`${productData?.primeCategory} 맛집`}
          satisfication={98}
          starsNum={998}
        />
        <hr />
        <ProductInfo
          productName={productData?.name}
          price={productData?.price}
          discount={productData?.discount}
        />
        <hr />
        <br />
        <hr className="h-2 bg-gray-20" />
        <ReviewSection />
        <hr className="h-2 bg-gray-20" />
        <DeliveryInfo />
        <DetailMenuTab />

        {/* 추천 상품 리스트 */}
        <br />
        <hr className="bg-gray-30" />
        <RecommendSection
          title={"이 상품들은 어때요?"}
          recommendOption={"primeCategory"}
          productData={productData}
        />
        <br />
        <hr className="bg-gray-30" />
        <RecommendSection
          title={"비슷한 상품들이에요"}
          recommendOption={"subCategory"}
          productData={productData}
        />
        <br />
        <hr className="bg-gray-30" />
        <RecommendSection
          title={"이 마켓의 다른 상품들이에요"}
          recommendOption={"company"}
          productData={productData}
        />
      </div>
      <BottomBar />
    </>
  );
};

export default ProductDetailPage;

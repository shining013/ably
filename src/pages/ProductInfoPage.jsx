import React from "react";
import TopNavbar from "src/components/common/TopNavbar";
import StoreInfo from "src/components/product/StoreInfo";
import ProductInfo from "src/components/product/ProductInfo";
import DeliveryInfo from "src/components/product/DeliveryInfo";
import BottomBar from "src/components/product/BottomBar";
import ReviewSection from "src/components/product/ReviewSection";

const ProductInfoPage = () => {
  return (
    <>
      <TopNavbar title="Ddd" />
      <div style={{ paddingTop: "120px" }}>
        <StoreInfo
          storeName={"스틸에디션"}
          storeNickname={"반지 맛집"}
          satisfication={98}
          starsNum={998}
        />
        <hr />
        <ProductInfo
          productName={
            "[보이넥스트도어 제현 착용] 트리플 하트 더블 체인 목걸이"
          }
          price={158000}
        />
        <hr />
        <ReviewSection />
        <DeliveryInfo />
      </div>
      <BottomBar />
    </>
  );
};

export default ProductInfoPage;

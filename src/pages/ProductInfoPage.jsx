import React from "react";
import TopNavbar from "src/components/common/TopNavbar";
import StoreInfo from "src/components/product/StoreInfo";
import ProductInfo from "src/components/product/ProductInfo";
import DeliveryInfo from "src/components/product/DeliveryInfo";
import BottomBar from "src/components/product/BottomBar";
import ReviewSection from "src/components/product/ReviewSection";
import DetailMenuTab from "src/components/product/DetailMenuTab";
import RecommendSection from "src/components/product/RecommendSection";

const ProductInfoPage = () => {
  return (
    <>
      <TopNavbar title="상품정보" />
      <div className="py-[120px]">
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
        <br />
        <hr className="h-2 bg-gray-20" />
        <ReviewSection />
        <hr className="h-2 bg-gray-20" />
        <DeliveryInfo />
        <DetailMenuTab />

        {/* 추천 상품 리스트 */}
        <br />
        <hr className="bg-gray-30" />
        <RecommendSection title={"이 상품들은 어때요?"} />
        <br />
        <hr className="bg-gray-30" />
        <RecommendSection title={"비슷한 상품들이에요"} />
        <br />
        <hr className="bg-gray-30" />
        <RecommendSection title={"이 마켓의 다른 상품들이에요"} />
      </div>
      <BottomBar />
    </>
  );
};

export default ProductInfoPage;

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
import InquiryTab from "src/components/product/InquiryTab";
import ProductDetailSection from "src/components/product/ProductDetailSection";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("info");

  const handleSelectedTab = (tabName) => {
    setSelectedTab(tabName);
  };

  useEffect(() => {
    const product = products.find(
      (item) => item.id === parseInt(productId, 10)
    );
    setProductData(product);
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

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

      {/* 브랜드 정보 */}
      <div className="mb-[120px]">
        <SlideComp />
        <StoreInfo
          storeName={productData?.companyName}
          storeNickname={`${productData?.primeCategory} 맛집`}
          satisfication={98}
          starsNum={998}
        />
        <hr />

        {/* 상품 상세 내용 */}
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

        {/* 상품정보 & 리뷰 & 문의 탭 */}
        <DetailMenuTab selectedTab={selectedTab} onClick={handleSelectedTab} />
        {selectedTab === "info" && <ProductDetailSection />}
        {selectedTab === "inquiry" && (
          <InquiryTab companyId={productData?.companyId} />
        )}

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

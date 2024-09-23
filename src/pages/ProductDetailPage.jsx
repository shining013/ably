import React, { useEffect, useState, useRef } from "react";
import TopNavbar from "src/components/common/TopNavbar";
import StoreInfo from "src/components/product/StoreInfo";
import ProductInfo from "src/components/product/ProductInfo";
import DeliveryInfo from "src/components/product/DeliveryInfo";
import BottomBar from "src/components/product/BottomBar";
import ReviewSection from "src/components/product/ReviewSection";
import DetailMenuTab from "src/components/product/DetailMenuTab";
import RecommendSection from "src/components/product/RecommendSection";
import TopInfo from "src/components/common/TopInfo";
import { products } from "src/data/products";
import { useParams } from "react-router-dom";
import InquiryTab from "src/components/product/InquiryTab";
import ProductDetailSection from "src/components/product/ProductDetailSection";
import ProductSlide from "src/components/product/ProductSlide";
import ReviewTab from "src/components/product/ReviewTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("info");
  const [isSticky, setIsSticky] = useState(false); // DetailMenuTab의 고정 상태를 관리
  const detailMenuTabRef = useRef(null); // DetailMenuTab에 대한 참조
  const placeholderRef = useRef(null); // DetailMenuTab의 원래 위치를 위한 참조

  const handleSelectedTab = (tabName) => {
    setSelectedTab(tabName);
  };

  useEffect(() => {
    const product = products.find(
      (item) => item.id === parseInt(productId, 10)
    );
    setProductData(product);
  }, [productId]);

  useEffect(() => {
    const handleScroll = () => {
      if (detailMenuTabRef.current && placeholderRef.current) {
        const detailMenuTabRect =
          placeholderRef.current.getBoundingClientRect();

        if (detailMenuTabRect.top <= 50) {
          // TopNavbar의 높이를 고려하여 50px 정도로 설정
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <ProductSlide imgUrls={Array(3).fill(productData.imgSrc)} />
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
        {/* placeholderRef를 사용하여 DetailMenuTab의 원래 위치를 유지 */}
        <div ref={placeholderRef} />
        <div
          ref={detailMenuTabRef}
          className={`${
            isSticky
              ? "sticky top-[105px] w-full z-50 bg-white max-w-[600px]" // TopNavbar 바로 아래에 고정
              : "relative"
          }`}
          style={{
            left: "0",
            transition: "top 0.3s ease-in-out",
          }}
        >
          <DetailMenuTab
            selectedTab={selectedTab}
            onClick={handleSelectedTab}
          />
        </div>

        {selectedTab === "info" && (
          <ProductDetailSection option="product" data={productData} />
        )}
        {selectedTab === "review" && <ReviewTab productData={productData} />}
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

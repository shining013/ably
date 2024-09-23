import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SubProductList from "./SubProductList";
import Card from "src/components/common/Card";
import { products } from "src/data/products";

export default function RankingSlide({ subcategoryName }) {
  const cards = products.filter((item) => item.subCategory === subcategoryName);
  return (
    <>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {cards.map((item) => (
          <SwiperSlide>
            <div>
              <Card
                imgSrc={item.imgSrc}
                discount={item.discount}
                price={item.price}
                name={item.name}
                salesCount={item.salesCount}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

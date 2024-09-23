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

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Card
              imgSrc={products[0].imgSrc}
              discount={products[0].discount}
              price={products[0].price}
              name={products[0].name}
              salesCount={products[0].salesCount}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card
              imgSrc={products[1].imgSrc}
              discount={products[1].discount}
              price={products[1].price}
              name={products[1].name}
              salesCount={products[1].salesCount}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card
              imgSrc={products[2].imgSrc}
              discount={products[2].discount}
              price={products[2].price}
              name={products[2].name}
              salesCount={products[2].salesCount}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card
              imgSrc={products[3].imgSrc}
              discount={products[3].discount}
              price={products[3].price}
              name={products[3].name}
              salesCount={products[3].salesCount}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card
              imgSrc={products[4].imgSrc}
              discount={products[4].discount}
              price={products[4].price}
              name={products[4].name}
              salesCount={products[4].salesCount}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card
              imgSrc={products[5].imgSrc}
              discount={products[5].discount}
              price={products[5].price}
              name={products[5].name}
              salesCount={products[5].salesCount}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Card
              imgSrc={products[6].imgSrc}
              discount={products[6].discount}
              price={products[6].price}
              name={products[6].name}
              salesCount={products[6].salesCount}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

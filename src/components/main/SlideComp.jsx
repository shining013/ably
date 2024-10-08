import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const baseUrl = "https://img.a-bly.com/banner/images/banner_image_";
const urls = [
  `${baseUrl}1725584572935488.gif`,
  `${baseUrl}1725878187379134.png`,
  `${baseUrl}1725614923079307.png`,
  `${baseUrl}1725584705582556.gif`,
  `${baseUrl}1725496724216422.jpg`,
  `${baseUrl}1725585366227293.gif`,
  `${baseUrl}1726018135815732.png`,
  `${baseUrl}1725962107825185.png`,
  `${baseUrl}1725439173130378.png`,
  `${baseUrl}1725614756170743.png`,
  `${baseUrl}1725883554563716.png`,
  `${baseUrl}1725865687790171.png`,
];

function SlideComp() {
  return (
    <div className="relative" style={{ overflowX: "hidden" }}>
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          type: "fraction",
          el: ".swiper-pagination",
        }}
        navigation={{ prevEl: ".prev", nextEl: ".next" }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {urls.map((url) => {
          return (
            <SwiperSlide key={url}>
              <img src={url} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="prev absolute flex w-10 h-10 top-1/2 -translate-y-2/4 z-10 justify-center items-center left-0 bg-[rgba(0,0,0,0.4)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="sc-77c27d6-2 xoupl"
        >
          <path
            class="icon_chevron_general_svg__painted"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.86 12.837a1.155 1.155 0 0 1 0-1.674l6.545-6.316a1.259 1.259 0 0 1 1.736 0c.479.462.479 1.212 0 1.675L10.462 12l5.678 5.478c.479.463.479 1.213 0 1.675a1.26 1.26 0 0 1-1.736 0l-6.546-6.316Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
      <div className="next absolute flex w-10 h-10 top-1/2 -translate-y-2/4 rotate-180 z-10 justify-center items-center right-0 bg-[rgba(0,0,0,0.4)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="sc-77c27d6-2 xoupl"
        >
          <path
            class="icon_chevron_general_svg__painted"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.86 12.837a1.155 1.155 0 0 1 0-1.674l6.545-6.316a1.259 1.259 0 0 1 1.736 0c.479.462.479 1.212 0 1.675L10.462 12l5.678 5.478c.479.463.479 1.213 0 1.675a1.26 1.26 0 0 1-1.736 0l-6.546-6.316Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
      <div
        className="swiper-pagination px-3 py-1 rounded-xl bottom-3 right-3 bg-[rgba(0,0,0,0.4)]"
        style={{
          width: "auto",
          left: "inherit",
          display: "inline-table",
          textAlign: "center",
          color: "white",
        }}
      ></div>
    </div>
  );
}

export default SlideComp;

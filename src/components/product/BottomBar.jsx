import React, { useState, useEffect } from "react";
import Button from "src/components/common/Button";
import heartIcon from "src/assets/icons/heart.svg";
import SelectDrawer from "./SelectDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BottomBar = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 200px 이상일 때 isVisible을 true로 설정
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 스크롤 이벤트 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-0 w-full items-center justify-center max-w-[600px] bg-white z-50">
        <hr />
        {/* 스르륵 나타나는 부분 */}
        <div
          className={`text-center py-2 text-subtitle3 text-gray-60 transition-all duration-500 ${
            isVisible ? "opacity-100 max-h-10" : "opacity-0 max-h-0"
          } overflow-hidden`}
          style={{
            transition: "opacity 0.5s ease, max-height 0.5s ease",
          }}
        >
          1명이 이 상품을 구매하는 중이에요
        </div>
        <hr />
        <div className="flex flex-row gap-2 p-3 w-full items-center">
          <div className="flex flex-col items-center ">
            <img src={heartIcon} alt="heart-icon" />
            <div className="text-body3 text-pink-30">7</div>
          </div>
          <Button
            text="구매하기"
            option="blackType"
            style={{ width: "100%", height: "56px" }}
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <SelectDrawer open={open} onClose={() => setOpen(false)} />
      {/* 위/아래 스크롤 버튼 */}
      <div
        className={`sticky bottom-[130px] z-50 flex flex-col items-end gap-2 pr-2 transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transition: "opacity 0.5s ease",
        }}
      >
        {/* 위로 스크롤 버튼 */}
        <button
          className="bg-white p-3 rounded-full shadow-lg mb-2 w-8 h-8 flex items-center justify-center shadow-[0px 4px 10px rgba(0, 0, 0, 0.1)]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-gray-500 w-4 h-4" />
        </button>

        {/* 아래로 스크롤 버튼 */}
        <button
          className="bg-white p-3 rounded-full shadow-lg w-8 h-8 flex items-center justify-center shadow-[0px 4px 10px rgba(0, 0, 0, 0.1)]"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-gray-500 w-4 h-4"
          />
        </button>
      </div>
    </>
  );
};

export default BottomBar;

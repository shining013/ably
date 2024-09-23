import React from "react";
import likeIcon from "src/assets/icons/like.svg";
import profileImg from "src/assets/images/profile.webp";

const ReviewTab = ({ productData }) => {
  return (
    <div className="flex flex-col gap-3 px-5 py-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <img
            src={profileImg}
            alt="profileImg"
            className="rounded-full w-[30px] h-[30px]"
          />
          <div className="flex flex-col items-start justify-center">
            <div className="text-h5 text-gray-70">만족해요</div>
            <div className="flex flex-row gap-1">
              <div className="text-body4 text-gray-50">한**</div>
              <div className="text-subtitle4 text-gray-50">Red</div>
              <div className="text-body4 text-gray-50"> | 2023.09.20</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={likeIcon}
            alt="likeIcon"
            className="text-body4 text-gray-40"
          />
          <div className="text-body4 text-gray-40">num</div>
        </div>
      </div>
      <div className="flex text-subtitle3 text-slate-50 p-3 rounded-[18px] bg-blue-5 w-max">
        당일 발송되었어요
      </div>
      <div className="flex flex-row gap-1">
        <img
          src={productData?.imgSrc}
          alt="review-image"
          className="max-w-[113px] rounded-md"
        />
        <img
          src={productData?.imgSrc}
          alt="review-image"
          className="max-w-[113px] rounded-md"
        />
      </div>
      <div className="flex flex-col gap-3 px-4">
        <div className="grid grid-cols-6">
          <div className="col-span-1 text-subtitle2 text-gray-50">옵션</div>
          <div className=" col-span-5 text-subtitle2 text-gray-70">s</div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-1 text-subtitle2 text-gray-50">색상</div>
          <div className="col-span-5 text-subtitle2 text-gray-70">
            화면과 같아요
          </div>
        </div>
      </div>
      <div className="text-body2 text-gray-70">
        와 보고 정말 감탄했어요!😍 다각도에서 색이 파랑보라노랑빨강 여러색이
        보이는데 정말 이뻐요 두번째 사진보면 손톱에 빛 비치는거 보이시나요?
        굉장히 영롱해요!!! 마치 내가 로판주인공 목걸이 훔친거같은,, ㅜㅠㅠ
        선물같은거 고르지마시고 이거 사주세요 100% 만족합니다 배송도 하루만에
        왔어요 총알배송,, 이 목걸이 분명 조만간 품절각인데 얼른사요 너무이뻐요🩵
        보석 튀어나와있는데 사진에 흠집같아 보이는거 사실 주변 비쳐서 그런거고
        흠집 전혀없고 깐 달걀같답니다 ^-^ 9월안에 사면 서비스로 판매하고계시는
        귀걸이도 주시니까 어서 고민말고 사세요 🙏 [에이블리뷰어가 상품을 무상
        제공받아 꼼꼼하게 작성한 리뷰입니다.]
      </div>
    </div>
  );
};

export default ReviewTab;

import React from "react";

const ProductDetailSection = ({ option, data }) => {
  let detailData = [];
  if (option === "company") {
    detailData = [
      { name: "상호", value: data.name },
      { name: "대표자", value: "오은솔" },
      { name: "사업자등록번호", value: "623-73-00641" },
      {
        name: "통신판매업신고번호",
        value: "미입력",
      },
      {
        name: "이메일",
        value: "k333327@naver.com",
      },
      {
        name: "전화번호",
        value: "070-8019-0259",
      },
      {
        name: "주소",
        value: data.location,
      },
    ];

    return (
      <div className="flex flex-col w-full py-5 px-6 gap-6">
        <div className="text-h5 text-gray-70 ">판매자 정보</div>
        {detailData.map((item) => (
          <div className="grid grid-cols-4 gap-y-2">
            <div className="col-span-1 text-body4 text-gray-60">
              {item.name}
            </div>
            <div className="col-span-3 text-body4 text-gray-70">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    detailData = [
      { name: "제조국", value: "중국" },
      { name: "소재 or 재질", value: "써지컬스틸" },
      { name: "차수", value: "프리사이즈 오픈링" },
      { name: "제조자", value: data.companyName },
      {
        name: "품질 보증 기준",
        value: "소비자분쟁해결기준(공정거래위원회 고시)을 준수합니다.",
      },
      {
        name: "주의 및 유의사항",
        value:
          "제품이 장시간 물에 닿지 않도록 주의해주세요 / 샤워 시 착용을 권장하지 않습니다.",
      },
      {
        name: "종류 또는 품명",
        value: data.subCategory,
      },
    ];

    return (
      <div className="flex flex-col w-full py-5 px-6 gap-6">
        <div className="text-h5 text-gray-70 ">상품정보제공고시</div>
        {detailData.map((item) => (
          <div className="grid grid-cols-4 gap-y-2">
            <div className="col-span-1 text-body4 text-gray-60">
              {item.name}
            </div>
            <div className="col-span-3 text-body4 text-gray-70">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default ProductDetailSection;

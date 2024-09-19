import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <div className="text-body2 text-blue-40 underline">리뷰 30개</div>
      <div className="text-body1 text-gray-70">
        리뷰를 작성한 사람 중 <strong>100%</strong>가 만족한 상품이에요
      </div>
      <div className="flex flex-row gap-3 overflow-x-hidden py-4">
        {Array(5)
          .fill({
            reviewImg:
              "https://d3ha2047wt6x28.cloudfront.net/ej8vOKc0tgk/pr:REVIEW_THUMB_WEBP/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL3Jldmlldy9yZXZpZXdfMTcyNTc2NzA1NDE5NDE2Ni5qcGc",
            reviewTitle: "만족해요",
            reviewContent:
              "언제나 휘뚤마뚤 포인트로 주기 너무 좋아요 먹걸이 예쁘다는 말 많이 들었네여~ 반반 으로 나뉘어진 목걸이 줄이나 하트 참이나 귀엽게 착용 가능해서 요즘 최애템으로 잘 착용하고 다니고 있어용",
          })
          .map((item) => (
            <ReviewCard
              image={item.reviewImg}
              title={item.reviewTitle}
              content={item.reviewContent}
            />
          ))}
      </div>
    </div>
  );
};

export default ReviewSection;

import React from "react";

const ReviewCard = ({ image, title, content }) => {
  return (
    <div
      className="flex flex-row gap-2 py-5 px-4 rounded-md min-w-[274px] items-center"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 8px",
      }}
    >
      <img src={image} alt="review-image" className="rounded-md max-w-[56px]" />
      <div className="flex flex-col gap-1 w-44">
        <div className="text-subtitle3 text-gray70">{title}</div>
        <div className="text-body3 text-gray70 truncate">{content}</div>
      </div>
    </div>
  );
};

export default ReviewCard;

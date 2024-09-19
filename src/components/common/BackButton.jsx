import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrowIcon from "src/assets/icons/left-arrow.svg";

const BackButton = () => {
  const navigation = useNavigate();
  return (
    <button className="p-1" onClick={() => navigation(-1)}>
      <img src={leftArrowIcon} alt="left-arrow" />
    </button>
  );
};

export default BackButton;

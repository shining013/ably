import React from "react";
import { useParams } from "react-router-dom";

function RankingBar() {
  const { subcategoryId } = useParams();
  let category = "";
  if (subcategoryId === "earing") {
    category = "귀걸이";
  } else if (subcategoryId === "ring") {
    category = "반지";
  } else if (subcategoryId === "necklace") {
    category = "목걸이";
  } else if (subcategoryId === "bracelet") {
    category = "팔찌";
  } else if (subcategoryId === "anklet") {
    category = "발찌";
  } else if (subcategoryId === "jewerly-box") {
    category = "보석함";
  }

  return (
    <>
      <div>
        <ul className="content-center text-body3 py-5 px-2.5 flex justify-between items-center z-0 relative">
          <li className="text-h5 text-gray-70 font-semibold">
            실시간 {category} 랭킹
          </li>

          <li className="self-auto cursor-pointer text-blue-700">
            전체보기{">"}
          </li>
        </ul>
      </div>
    </>
  );
}

export default RankingBar;

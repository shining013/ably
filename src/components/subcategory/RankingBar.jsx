import React from "react";
import { useParams } from "react-router-dom";

function RankingBar() {
  const { subcategoryId } = useParams();
  return (
    <>
      <div>
        <ul className="content-center text-body3 py-5 px-2.5 flex justify-between items-center z-0 relative">
          <li className="text-h5 text-gray-70 font-semibold">
            실시간 {subcategoryId} 랭킹
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

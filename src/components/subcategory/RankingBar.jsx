import React from "react";

function RankingBar() {
  return (
    <>
      <div>
        <ul className="content-center text-body3 py-5 px-2.5 flex justify-between items-center z-0 relative">
          <li className="text-lg font-semibold">실시간 귀걸이 랭킹</li>

          <li className="self-auto cursor-pointer text-blue-700">
            전체보기{">"}
          </li>
        </ul>
      </div>
    </>
  );
}

export default RankingBar;

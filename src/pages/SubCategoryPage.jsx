import React from "react";

import SubProductList from "src/components/subcategory/SubProductList";
import TopInfo from "src/components/common/TopInfo";
import TopNavbar from "src/components/common/TopNavbar";
import RankingBar from "src/components/subcategory/RankingBar";
import RankingSlide from "src/components/subcategory/RankingSlide";

function SubCategoryPage() {
  return (
    <div>
      <TopInfo />
      <TopNavbar title="귀걸이" />
      {/* 실시간 귀걸이 랭킹 전체보기 바  */}
      <RankingBar />

      {/* <SubProductList /> */}

      <RankingSlide />
    </div>
  );
}

export default SubCategoryPage;

import React from "react";
import CardList from "src/components/common/CardList";
import Card from "src/components/common/Card";
import SubProductList from "src/components/subcategory/SubProductList";
import TopInfo from "src/components/common/TopInfo";
import TopNavbar from "src/components/common/TopNavbar";
import RankingBar from "src/components/subcategory/RankingBar";

function CategoryPage() {
  return (
    <div>
      <TopInfo />
      <TopNavbar title="귀걸이" />
      {/* 실시간 귀걸이 랭킹 전체보기 바  */}
      <RankingBar />

      <SubProductList />
    </div>
  );
}

export default CategoryPage;

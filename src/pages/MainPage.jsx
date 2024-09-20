import React from "react";
import SlideComp from "src/components/main/SlideComp";
import CardList from "src/components/common/CardList";
import RecommendBox from "src/components/main/RecommendBox";
import BottomBar from "src/components/main/Bottomnav";
import TopInfo from "src/components/common/TopInfo";
import CategoryList from "src/components/main/CategoryList";
import SearchBar from "src/components/main/SearchBar";
import Footer from "src/components/main/Footer";
import TopNavbar from "src/components/common/TopNavbar";
import RecommendCardList from "src/components/main/RecommendCardList";

const MainPage = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          className="flex top-0 left-0 sticky w-full items-center justify-center flex-col"
          style={{
            zIndex: "999",
          }}
        >
          <TopInfo />
          <SearchBar />
        </div>

        <div style={{ paddingTop: "10px" }}>
          <SlideComp />
          <CategoryList />
          <RecommendBox />
          <RecommendCardList />
          <CardList />
          <Footer />
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default MainPage;

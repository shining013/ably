import React from "react";
import SearchPageBar from "src/components/main/SearchPageBar";

function SearchPage() {
  return (
    <>
      <div className="flex top-0 left-0 sticky w-full items-center justify-center flex-col">
        <SearchPageBar className="flex justify-center" />
      </div>
    </>
  );
}

export default SearchPage;

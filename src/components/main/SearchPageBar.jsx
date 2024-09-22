import React from "react";
import { useState } from "react";
import BackButton from "src/components/common/BackButton";

function SearchPageBar() {
  const [search, setSearch] = useState("");

  const send = () => {
    setSearch(search);
    setSearch("");
  };

  const onChange = (e) => {
    const inputText = e.target.value;
    setSearch(inputText);
  };

  return (
    <div
      className="flex w-full justify-center items-center bg-white relative"
      style={{ paddingTop: "2px" }}
    >
      <BackButton className="flex justify-center" />
      <div
        className="flex flex-grow flex-shrink rounded-lg items-center gap-1 cursor-pointer bg-gray-20"
        style={{
          marginTop: "10px",
          marginRight: "0px",
          marginBottom: "10px",
          marginLeft: "16px",
          padding: "8px 10px",
          flexBasis: "0%",
          borderRadius: "8px",
        }}
      >
        <img
          src="/images/SearchBar1.svg"
          style={{ width: "20px", height: "20px" }}
          alt=""
        />
        <input
          type="text"
          placeholder="하나만 사도 무료배송"
          className="w-full bg-transparent outline-none"
          style={{
            fontWeight: "600",
            letterSpacing: "-0.4px",
            lineHeight: "18px",
            fontSize: "14px",
            color: "black",
          }}
          value={search}
          onChange={onChange}
        ></input>
        <img src="/images/xbox.svg" className="w-5 h-5" alt="" onClick={send} />
      </div>
    </div>
  );
}

export default SearchPageBar;

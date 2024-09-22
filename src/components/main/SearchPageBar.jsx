import React, { useEffect } from "react";
import { useState } from "react";
import BackButton from "src/components/common/BackButton";
import { terms } from "src/data/searchTerms";

function SearchPageBar() {
  const [search, setSearch] = useState("");
  const [filteredTerms, setFilteredTerms] = useState([]);

  useEffect(() => {
    console.log(terms);
  }, []);
  const send = () => {
    setSearch(search);
    setSearch("");
  };

  const onChange = (e) => {
    const inputText = e.target.value;
    setSearch(inputText);
    if (inputText.trim()) {
      const filtered = terms
        .filter((item) => item.name.includes(inputText))
        .flatMap((item) => item.terms);

      setFilteredTerms(filtered);
    } else {
      setFilteredTerms([]);
    }
  };

  return (
    <>
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
          <img
            src="/images/xbox.svg"
            className="w-5 h-5"
            alt=""
            onClick={send}
          />
        </div>
      </div>
      <div>
        <div className="flex">
          {filteredTerms.length > 0 ? (
            <ul>
              {filteredTerms.map((term, i) => (
                <div className="cursor-pointer p-4 font-bold flex container w-full">
                  <li key={i} className="flex justify-start items-start">
                    <p className="m-0 gray-70">
                      <span>
                        <b>{term}</b>
                      </span>
                    </p>
                  </li>
                </div>
              ))}
            </ul>
          ) : (
            search && <p>검색결과 없음</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchPageBar;

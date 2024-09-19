import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryList() {
  const navigation = useNavigate();

  const categories = [
    { id: 1, name: "남자패션", imageSrc: "/images/Cate1.png" },
    { id: 2, name: "의류", imageSrc: "/images/Cate2.png" },
    { id: 3, name: "jewelry", imageSrc: "/images/Cate3.png" },
    { id: 4, name: "패션소품", imageSrc: "/images/Cate4.png" },
    { id: 5, name: "빅사이즈", imageSrc: "/images/Cate5.png" },
    { id: 6, name: "신발", imageSrc: "/images/Cate6.png" },
    { id: 7, name: "디지털/핸드폰", imageSrc: "/images/Cate7.png" },
    { id: 8, name: "가방", imageSrc: "/images/Cate8.png" },
    { id: 9, name: "뷰티", imageSrc: "/images/Cate9.png" },
    { id: 10, name: "라이프", imageSrc: "/images/Cate10.png" },
  ];

  const testStyle = {
    paddingTop: "4px",
    maxWidth: "62px",
    maxHeight: "58px",
    rowGap: "6px",
    columnGap: "6px",
    position: "relative",
  };

  return (
    <div
      className="grid grid-cols-5 box-border cursor-auto p-2  grid-rows-2 justify-items-center w-full place-items-center items-center overflow-x-hidden gap-x-2 gap-y-2"
      style={{ paddingTop: "4px" }}
    >
      {categories.map((item) => (
        <div
          className="flex box-border cursor-pointer flex-col-5 flew-row-2 items-center justify-center"
          style={testStyle}
        >
          <div className="flex flex-col items-center">
            <div
              className="block gap-x-1 "
              style={{ maxWidth: "34px", maxHeight: "34px", gap: "6px" }}
              onClick={() => navigation(`/${item.name}`)}
            >
              <img
                className="object-fill justify-items-center"
                style={{ paddingBottom: "4px" }}
                src={item.imageSrc}
              />
            </div>
            <div
              className="text-body5  m-0  overflow-x-clip justify-center text-center"
              style={{
                textOverflow: "ellipsis",
                overflow: "clip",
                paddingTop: "4px",
              }}
            >
              {item.name}
            </div>
            <div
              style={{
                position: "absolute",
                opacity: "0",
                height: "1px",
                width: "1px",
                borderRadius: "5px",
                background: "rgb(31, 31, 31)",
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;

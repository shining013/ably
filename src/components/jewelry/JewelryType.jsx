import React from "react";
import { useNavigate } from "react-router-dom";

function JewelryType({ imgsrc, typeName, path }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="p-3"
        onClick={() => {
          console.log(`./${path}`);
          navigate(`./${path}`);
        }}
      >
        <div className="w-14 h-14 rounded-full overflow-hidden mx-auto">
          <img src={imgsrc} alt="" />
        </div>
      </div>
      <p className="text-center text-body5">{typeName}</p>
    </div>
  );
}

export default JewelryType;

import React from "react";

function JewelryType({ imgsrc, typeName }) {
  return (
    <div>
      <div className="p-3">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={imgsrc} alt="" />
        </div>
      </div>
      <p className="text-center text-body5">{typeName}</p>
    </div>
  );
}

export default JewelryType;

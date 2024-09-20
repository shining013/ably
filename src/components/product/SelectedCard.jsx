import React from "react";
import deleteIcon from "src/assets/icons/delete.svg";
import minusIcon from "src/assets/icons/minus.svg";
import plusIcon from "src/assets/icons/plus.svg";

const SelectedCard = ({
  color,
  size,
  delivery,
  num,
  price = 0,
  onDelete,
  onPlus,
  onMinus,
}) => {
  return (
    <div className="flex flex-col gap-9 rounded-[4px] border border-gray-30 p-[18px]">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-2">
          <div className="text-body3 text-gray-70">
            {color} / {size}
          </div>
          <div className="text-subtitle4 text-gray-50">{delivery}</div>
        </div>
        <button className="">
          <img
            src={deleteIcon}
            alt="delete"
            onClick={() => onDelete({ color: color, size: size })}
          />
        </button>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <button className="border p-[5px] rounded-[50%] bg-gray-20">
            <img
              src={minusIcon}
              alt="minus"
              onClick={() => onMinus({ color: color, size: size })}
            />
          </button>
          <div className="text-subtitle2 text-gray-70">{num}</div>
          <button className="border p-[5px] rounded-[50%]">
            <img
              src={plusIcon}
              alt="plus"
              onClick={() => onPlus({ color: color, size: size })}
            />
          </button>
        </div>
        <div className="text-subtitle2 text-gray-70">
          {(price * num).toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;

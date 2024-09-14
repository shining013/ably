import { Drawer } from "@material-tailwind/react";
import React from "react";
import Button from "../common/Button";
import SelectedCard from "./SelectedCard";
import SelectDropdown from "../common/SelectDropdown";

const SelectDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      placement="bottom"
      size={600}
      className="w-full !max-w-[600px] !mx-auto left-auto !rounded-t-md p-4"
      overlayProps={{
        className: "fixed inset-0 max-w-[600px] mx-auto",
      }}
    >
      <Button
        text="옵션 선택하기"
        option={"whiteType"}
        style={{ height: "56px" }}
      />
      <SelectedCard size={"Free"} color={"beige"} price={35000} num={2} />
      <div className="flex flex-col gap-3">
        <SelectDropdown
          defaultValue={"색상 선택하기"}
          options={["beige", "white", "black"]}
        />
        <SelectDropdown
          defaultValue={"사이즈 선택하기"}
          options={["s", "m", "l"]}
        />
      </div>

      <div className="py-3 px-2 flex justify-between border-y border-y-gray-30">
        <div>2개 선택</div>
        <div>총 47,000원</div>
      </div>
      <div className="flex flex-row gap-2 py-3">
        <Button
          text="장바구니"
          option={"whiteType"}
          style={{ height: "56px" }}
        />
        <Button
          text="구매하기"
          option={"blackType"}
          style={{ height: "56px" }}
        />
      </div>
    </Drawer>
  );
};

export default SelectDrawer;

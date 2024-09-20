import React, { useEffect, useState } from "react";
import { Drawer } from "@material-tailwind/react";
import Button from "../common/Button";
import SelectDropdown from "../common/SelectDropdown";

const CartOptionSelect = ({ open, onClose, item }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    setSelectedItem(item);
  }, [item]);

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
      <div className="flex flex-col gap-3">
        <SelectDropdown
          defaultValue={selectedItem.option1}
          options={["beige", "white", "black"]}
        />
        <SelectDropdown
          defaultValue={selectedItem.option2}
          options={["s", "m", "l"]}
        />
      </div>

      <div
        className="flex flex-row gap-2 p-3 absolute border-t left-0 right-0 bottom-0"
        style={{ borderColor: "#eee" }}
      >
        <Button
          text="취소"
          option={"whiteType"}
          style={{ height: "56px" }}
          onClick={onClose}
        />
        <Button
          text="변경하기"
          option={"blackType"}
          style={{ background: "#ff5160", height: "56px" }}
        />
      </div>
    </Drawer>
  );
};

export default CartOptionSelect;

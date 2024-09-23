import React, { useEffect, useState } from "react";
import { Drawer } from "@material-tailwind/react";
import Button from "../common/Button";
import SelectDropdown from "../common/SelectDropdown";
import { useDispatch } from "react-redux";

const CartOptionSelect = ({ open, onClose, item }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState({
    option1: item.option1,
    option2: item.option2,
  });

  useEffect(() => {
    setSelectedOption({ option1: item.option1, option2: item.option2 });
    console.log(selectedOption);
  }, [item, open]);

  const changeItemOption = (name, option) => {
    if (name === "option1") {
      setSelectedOption({ ...selectedOption, option1: option });
    }
    if (name === "option2") {
      setSelectedOption({ ...selectedOption, option2: option });
    }
  };

  return (
    <Drawer
      open={open}
      onClose={() => onClose(false)}
      placement="bottom"
      size={600}
      className="w-full !max-w-[600px] !mx-auto left-auto !rounded-t-md p-4"
      overlayProps={{
        className: "fixed inset-0 max-w-[600px] mx-auto",
      }}
    >
      <div className="flex flex-col gap-3">
        <SelectDropdown
          value={selectedOption.option1}
          name={"option1"}
          options={["beige", "white", "black"]}
          onChange={changeItemOption}
        />
        <SelectDropdown
          value={selectedOption.option2}
          name={"option2"}
          options={["s", "m", "l"]}
          onChange={changeItemOption}
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
          onClick={() => onClose(false)}
        />
        <Button
          text="변경하기"
          option={"blackType"}
          style={{ background: "#ff5160", height: "56px" }}
          onClick={() => {
            dispatch({
              type: "changeItemOption",
              payload: [item, selectedOption],
            });
            onClose(false);
          }}
        />
      </div>
    </Drawer>
  );
};

export default CartOptionSelect;

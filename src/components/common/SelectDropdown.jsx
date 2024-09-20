import React, { useEffect, useState } from "react";

const SelectDropdown = ({ name, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    if (value) {
      setSelectedOption(value);
    } else {
      if (name === "color") {
        setSelectedOption("색상 선택하기");
      }
      if (name === "size") {
        setSelectedOption("사이즈 선택하기");
      }
    }
  }, [name, value]);

  return (
    <div className="w-full mx-auto">
      <div
        className="border border-gray-20 rounded-md px-4 py-5 cursor-pointer text-body2 text-gray-70"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <div className="border border-gray-20 rounded-md ">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-5 hover:bg-gray-100 cursor-pointer text-subtitle2 text-gray-70 border-y border-y-gray-20"
              onClick={() => {
                onChange(name, option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;

import React, { useEffect, useState } from "react";

const SelectDropdown = ({ defaultValue, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(defaultValue);
  }, [defaultValue]);

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
              onClick={() => handleOptionClick(option)}
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

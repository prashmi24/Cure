import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const { bgColor } = item;
  // State to track whether the accordion is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the accordion open or closed
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="p-3 lg:p-5 rounded-[12px] border border-solid border-gray-300 mb-5 cursor-pointer"
      style={{ background: `${bgColor}` }}
    >
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        {/* Question */}
        <h4 className="text-lg lg:text-xl text-gray-800  ">{item.question}</h4>
        <div
          className={`${
            isOpen && "border-none"
          } w-8 h-8 lg:w-8 lg:h-8  rounded-full flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {/* Content of the FAQ item (displayed when open) */}
      {isOpen && (
        <div className="mt-4">
          <p className="text-base lg:text-lg font-normal text-gray-700">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;

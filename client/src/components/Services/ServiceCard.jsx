import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const { name, desc, bgColor } = item;
  return (
    <div
      className="py-[30px] px-3 lg:px-5"
      style={{ background: `${bgColor}` }}
    >
      {/* Service Name */}
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>

      {/* Service Description */}
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      {/* Link to More Details */}
      <div className="flex items-center justify-between mt-[30px] ml-[350px]">
        <Link
          to="/doctor"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          {/* Arrow icon */}
          <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

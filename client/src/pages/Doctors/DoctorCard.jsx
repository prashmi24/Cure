import React from "react";
import star from "../../assets/images/star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name = "Doctor Name",
    avgRating = "N/A",
    totalRating = 0,
    photo = "/default-image.jpg", //add image
    specialty = "Specialty",
    experiences = [],
  } = doctor;

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img
          src={photo}
          alt={`Photo of Dr. ${name}`}
          className="w-full h-[300px] object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/default-image.jpg";
          }} // Fallback image
        />
      </div>

      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#e9e3d5] text-primaryColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {specialty}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            <img src={star} alt="star-icon" className="h-[20px]" />
            {avgRating}
          </span>

          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-headingColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          {experiences.length > 0 ? (
            <p className="text-[14px] leading-6 font-[400] text-textColor">
              At {experiences[0]?.hospital || "Unknown Hospital"}
            </p>
          ) : (
            <p className="text-[14px] leading-6 font-[400] text-textColor">
              No experience available
            </p>
          )}
        </div>

        <Link
          to={`/doctor/${doctor._id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5 transition-colors duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;

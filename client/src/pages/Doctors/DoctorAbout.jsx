import React from "react";
import { dateFormat } from "../../utils/dateFormat";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Rashmi
          </span>
        </h3>
        <p className="text-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          doloribus, nam eos neque pariatur, culpa rem accusamus inventore
          assumenda eaque dolorem consequatur ipsa cumque? Eligendi maxime quo
          odio nam Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Repudiandae commodi minus vero! Maxime sint nemo praesentium pariatur
          harum, excepturi quas!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {dateFormat("1-4-2000")} - {dateFormat("1-4-2000")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              ABC Hospital, Xyx
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {dateFormat("6-4-2000")} - {dateFormat("1-4-2000")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PHD in Surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              ABC Hospital, Xyx
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {dateFormat("6-4-2000")} - {dateFormat("1-4-2000")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              ABC Hospital, Xyx
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {dateFormat("6-4-2000")} - {dateFormat("1-4-2000")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              ABC Hospital, Xyx
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;

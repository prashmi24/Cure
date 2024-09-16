import React from "react";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ doctorId, amount, timeSlots }) => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md w-[300px]">
      <div className="flex items-center justify-between">
        <p className="text-para mt-0 font-semibold">${amount.toFixed(2)}</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold"></span>
      </div>

      <div className="mt-[30px]">
        <p className="text-para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>

        {timeSlots?.length > 0 ? (
          <ul className="mt-3">
            {timeSlots.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {convertTime(item.startingTime)}-{" "}
                  {convertTime(item.endingTime)}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[14px] text-red-500 mt-3">No available slots</p>
        )}
      </div>

      <button
        className="btn px-2 w-full rounded-md"
        disabled={!timeSlots?.length}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;

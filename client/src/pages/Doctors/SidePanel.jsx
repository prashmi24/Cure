import React from "react";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ doctorId, amount, timeSlots }) => {
  return (
    <section
      className="shadow-panelShadow p-3 lg:p-5 rounded-md w-full max-w-[300px] mx-auto"
      aria-labelledby="consultation-details"
    >
      <div className="flex items-center justify-between">
        <p
          className="text-para mt-0 font-semibold"
          aria-label="Consultation fee"
        >
          ${amount.toFixed(2)}
        </p>
      </div>

      <div className="mt-[30px]">
        <h3
          id="consultation-details"
          className="text-para mt-0 font-semibold text-headingColor"
        >
          Available Time Slots:
        </h3>

        {timeSlots?.length > 0 ? (
          <ul className="mt-3" aria-live="polite">
            {timeSlots.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
                aria-label={`Available on ${item.day} from ${convertTime(
                  item.startingTime
                )} to ${convertTime(item.endingTime)}`}
              >
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {convertTime(item.startingTime)} -{" "}
                  {convertTime(item.endingTime)}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[14px] text-red-500 mt-3" aria-live="polite">
            No available slots
          </p>
        )}
      </div>

      <button
        className="btn px-2 w-full rounded-md mt-5"
        aria-disabled={!timeSlots?.length}
        disabled={!timeSlots?.length}
      >
        Book Appointment
      </button>
    </section>
  );
};

export default SidePanel;

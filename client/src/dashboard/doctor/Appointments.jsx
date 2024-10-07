import React from "react";
import { dateFormat } from "../../utils/dateFormat";
import { RxAvatar } from "react-icons/rx";

const Appointments = ({ appointments }) => {
  return (
    <div>
      {appointments && appointments.length > 0 ? (
        <table className="w-full text-left text-sm text-gray-500">
          {/* Table Header */}
          <thead className="text-xs text-white uppercase bg-yellowColor">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Booked on
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {appointments.map((item) => (
              <tr key={item._id} className="hover:bg-gray-100">
                {/* User Info */}
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <img
                    src={item.user?.photo || <RxAvatar />}
                    alt={`Profile photo of ${item.user?.name || "Unknown"}`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {item.user?.name || "Unknown"}
                    </div>
                    <div className="text-normal text-gray-500">
                      {item.user?.email || "No email"}
                    </div>
                  </div>
                </th>
                {/* Gender */}
                <td className="px-6 py-4 ">{item.user?.gender || "Unknown"}</td>
                {/* Payment Status */}
                <td className="px-6 py-4 ">
                  {item.isPaid ? (
                    <div className="flex items-center">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"
                        aria-label="Paid"
                      ></span>
                      Paid
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-red mr-2"
                        aria-label="Unpaid"
                      ></span>
                      Unpaid
                    </div>
                  )}
                </td>

                {/* Payment Amount */}
                <td className="px-6 py-4 ">{item.amount}</td>

                {/* Booked On */}
                <td className="px-6 py-4 ">{dateFormat(item.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500" aria-live="polite">
          No appointments available.
        </p>
      )}
    </div>
  );
};

export default Appointments;

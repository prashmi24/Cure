import React from "react";
import { dateFormat } from "../../utils/dateFormat";

const Appointments = ({ appointments }) => {
  return (
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
        {appointments?.map((item) => (
          <tr key={item._id}>
            {/* User Info */}
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <img
                src={item.user.photo}
                alt="user-img"
                className="w-10 h-10 rounded-full"
              />
              <div className="pl-3">
                <div className="text-base font-semibold">{item.user.name}</div>
                <div className="text-normal text-gray-500">
                  {item.user.email}
                </div>
              </div>
            </th>
            {/* Gender */}
            <td className="px-6 py-4 ">{item.user.gender}</td>
            {/* Payment Status */}
            <td className="px-6 py-4 ">
              {item.isPaid && (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                  Paid
                </div>
              )}
              {!item.isPaid && (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red mr-2"></div>
                  Unpaid
                </div>
              )}
            </td>

            {/* Fees */}
            <td className="px-6 py-4 ">{item.amount}</td>

            {/* Booked On */}
            <td className="px-6 py-4 ">{dateFormat(item.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Appointments;

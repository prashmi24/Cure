import React from "react";
import useFetchData from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config.js";
import DoctorCard from "./../../pages/Doctors/DoctorCard.jsx";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  const validAppointments = Array.isArray(appointments) ? appointments : [];

  return validAppointments.length > 0 ? (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {validAppointments.map((appointment) => (
        <DoctorCard doctor={appointment.doctor} key={appointment._id} />
      ))}
    </div>
  ) : (
    <div className="text-center">
      <h2 className="mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold">
        No appointments found!
      </h2>
      <a
        href="/doctors"
        className="text-primaryColor hover:underline mt-3 block"
      >
        Book an appointment now
      </a>
    </div>
  );
};

export default MyBookings;
